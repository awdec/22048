<script setup lang="ts">
/**
 * 在文章标题上方显示「字数 / 预计阅读时间」。
 *
 * 计数口径：正文全部内容，包含代码块、KaTeX 公式（取 TeX 注解，避免 MathML 重复计数）和表格；
 * 不计空白字符，也不计目录锚点、行号、复制按钮等主题 UI。
 * 只统计阅读类页面（content / practice / skills 下的正文页），跳过首页与各目录页。
 */
import { onContentUpdated, useData } from 'vitepress'
import { nextTick, onMounted, onUnmounted } from 'vue'
import { CHARS_PER_MINUTE, readingMinutes } from '../shared/reading-stats.mjs'

/** 已经渲染过的结果缓存，避免重复写 DOM 触发观察器抖动。 */
const renderedCache = new WeakMap<Element, string>()
/** 已统计过的路由：切换页面时 DOM 会被复用，需要让缓存失效并重新计数。 */
let lastPath = ''

const { page, frontmatter } = useData()

/** 正文起始节点：优先 <main class="main">，退回 .content-container 内非统计节点的父元素。 */
function findArticle(): Element | null {
  const container = document.querySelector('.VPDoc .content-container')
  if (!container) return null

  const main = container.querySelector('main')
  if (main) return main

  const stats = container.querySelector('[data-doc-reading-stats]')
  const parent = stats?.parentElement
  if (parent) return parent

  return Array.from(container.children).find((el) => !el.matches('footer, .VPDocFooter')) ?? null
}

/** 公式、代码等需要整体取文本、不再向下细分的节点。 */
function textOfWholeNode(el: Element): string | null {
  if (el.classList.contains('katex')) {
    // KaTeX 同一公式会输出 MathML 与可视化 HTML，只取一处（TeX 注解）避免三倍计数。
    return el.querySelector('.katex-mathml annotation')?.textContent ?? el.textContent ?? ''
  }

  if (el.matches('pre, code, .line-numbers-wrapper')) {
    return el.textContent ?? ''
  }

  return null
}

function countTextIn(node: Node): number {
  if (node.nodeType === Node.TEXT_NODE) {
    return (node.textContent ?? '').replace(/\s/g, '').length
  }

  if (!(node instanceof Element)) return 0
  if (node.hasAttribute('data-doc-reading-stats')) return 0

  const tag = node.tagName.toLowerCase()
  if (['script', 'style', 'svg', 'button'].includes(tag)) return 0
  if (['.header-anchor', '.lang', '.copy', '.vp-badge'].some((sel) => node.matches(sel))) return 0

  const whole = textOfWholeNode(node)
  if (whole !== null) return whole.replace(/\s/g, '').length

  let total = 0
  node.childNodes.forEach((child) => {
    total += countTextIn(child)
  })
  return total
}

function formatStats(chars: number): string {
  const minutes = readingMinutes(chars)
  return `全文 ${chars.toLocaleString('zh-CN')} 字 · 预计阅读 ${minutes} 分钟（按 ${CHARS_PER_MINUTE} 字/分钟）`
}

function isContentPage(): boolean {
  // 首页等自定义 layout 页面不显示。
  if (frontmatter.value.layout) return false

  // page.filePath 是相对 docs 的路径，如 operating-system/content/io-management/section-1.md
  const file = page.value.filePath ?? ''
  if (!file) return false
  if (/(^|\/)index\.md$/.test(file)) return false

  return /(^|\/)(content|practice|skills)\//.test(file)
}

function removeStats() {
  document.querySelectorAll('[data-doc-reading-stats]').forEach((el) => el.remove())
}

function renderStats() {
  if (!isContentPage()) {
    removeStats()
    return
  }

  const article = findArticle()
  if (!article) return

  const text = formatStats(countTextIn(article))
  if (renderedCache.get(article) === text) return
  renderedCache.set(article, text)

  let el = article.querySelector<HTMLElement>('[data-doc-reading-stats]')
  if (!el) {
    el = document.createElement('div')
    el.dataset.docReadingStats = ''
    el.className = 'doc-reading-stats'
    article.prepend(el)
  }
  el.textContent = text
}

async function updateStats() {
  // Markdown 内容与 Mermaid 图渲染完成后才能统计到完整文本。
  await nextTick()
  renderStats()
}

let observer: MutationObserver | undefined

onContentUpdated(() => {
  // 路由切换时 <main> 往往被复用，缓存必须按页面失效，否则会沿用上一页的字数。
  if (lastPath !== page.value.relativePath) {
    lastPath = page.value.relativePath
    removeStats()
  }
  void updateStats()
})

onMounted(async () => {
  await updateStats()
  observer = new MutationObserver(() => {
    void updateStats()
  })
  observer.observe(document.body, { childList: true, subtree: true })
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<template>
  <!-- 服务端渲染的空占位：客户端统计完成后填入文字 -->
  <div data-doc-reading-stats class="doc-reading-stats" aria-hidden="true" />
</template>

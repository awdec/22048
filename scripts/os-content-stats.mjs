#!/usr/bin/env node
/**
 * 统计 docs/operating-system/content 各章正文字数与预计阅读时长，并可把汇总表写入该目录的 index.md。
 *
 * 计数口径与页面右上角「全文 N 字 · 预计阅读 N 分钟」完全一致（见 docs/.vitepress/theme/DocReadingStats.vue）：
 *   - 取正文文本，去掉空白字符后计字符数；
 *   - 包含代码块、表格；KaTeX 公式只计 TeX/LaTeX 源一次（不重复计 MathML 与视觉层）；
 *   - 不计标题锚点、代码块语言标签、复制按钮等主题 UI 文本。
 *
 * 用法：
 *   node scripts/os-content-stats.mjs            # 只把统计结果打印到控制台
 *   node scripts/os-content-stats.mjs --write    # 同时把汇总表写回 index.md
 *
 * 「总字数」= 正文（md 去掉 frontmatter）+ 页面自动生成的统计条/目录等 UI 不计入。
 */

import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createMarkdownRenderer, resolveConfig } from 'vitepress'
import { CHARS_PER_MINUTE, readingMinutes } from '../docs/.vitepress/shared/reading-stats.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const CONTENT_DIR = path.join(ROOT, 'docs', 'operating-system', 'content')
const INDEX_FILE = path.join(CONTENT_DIR, 'index.md')

/** 章节顺序 = 侧边栏顺序；目录名不存在时会被跳过并给出警告。 */
const CHAPTERS = [
  ['computer-system-overview', '第一章 计算机系统概述'],
  ['processes-threads', '第二章 进程与线程'],
  ['memory-management', '第三章 内存管理'],
  ['file-management', '第四章 文件管理'],
  ['io-management', '第五章 输入/输出管理'],
]

// 使用站点自身的 Markdown 配置，确保公式、提示框和代码块与页面一致。
const config = await resolveConfig(path.join(ROOT, 'docs'))
const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base)
// 从 VitePress 的 Vue 依赖中获取 HTML 解析器，无须额外安装依赖。
const vitepressRequire = createRequire(import.meta.resolve('vitepress'))
const vueRequire = createRequire(vitepressRequire.resolve('vue'))
const { parse } = vueRequire('@vue/compiler-dom')

function textContent(node) {
  if (node.type === 2) return node.content
  return (node.children ?? []).map(textContent).join('')
}

function findAnnotation(node) {
  if (node.type === 1 && node.tag === 'annotation') return node
  for (const child of node.children ?? []) {
    const annotation = findAnnotation(child)
    if (annotation) return annotation
  }
  return null
}

function countText(node) {
  if (node.type === 2) return node.content.replace(/\s/g, '').length
  if (node.type === 1) {
    const tag = node.tag.toLowerCase()
    const classes = (node.props.find((prop) => prop.type === 6 && prop.name === 'class')?.value?.content ?? '').split(/\s+/)
    // Mermaid 最终渲染为 SVG；其源码和加载占位不属于页面正文。
    if (['script', 'style', 'svg', 'button', 'suspense', 'mermaid'].includes(tag)) return 0
    if (['header-anchor', 'lang', 'copy', 'vp-badge'].some((cls) => classes.includes(cls))) return 0
    if (classes.includes('katex')) {
      return textContent(findAnnotation(node) ?? node).replace(/\s/g, '').length
    }
    if (['pre', 'code'].includes(tag) || classes.includes('line-numbers-wrapper')) {
      return textContent(node).replace(/\s/g, '').length
    }
  }
  return (node.children ?? []).reduce((sum, child) => sum + countText(child), 0)
}

function countChars(markdownFile) {
  const raw = fs.readFileSync(markdownFile, 'utf8')
  // 去掉 YAML frontmatter。
  const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
  return countText(parse(md.render(body)))
}

function formatNumber(n) {
  return n.toLocaleString('zh-CN')
}

function sectionFiles(chapterDir) {
  const dir = path.join(CONTENT_DIR, chapterDir)
  if (!fs.existsSync(dir)) return []

  return fs
    .readdirSync(dir)
    .filter((name) => /^section-\d+\.md$/.test(name))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]))
    .map((name) => path.join(dir, name))
}

const rows = []
for (const [chapterDir, label] of CHAPTERS) {
  const files = sectionFiles(chapterDir)
  if (files.length === 0) {
    console.warn(`[warn] 未找到章节正文：${chapterDir}`)
    continue
  }

  const counts = files.map(countChars)
  const chars = counts.reduce((sum, count) => sum + count, 0)
  rows.push({
    label,
    files: files.map((file) => path.relative(CONTENT_DIR, file).replace(/\\/g, '/')),
    chars,
    minutes: counts.reduce((sum, count) => sum + readingMinutes(count), 0),
  })
}

const totalChars = rows.reduce((sum, row) => sum + row.chars, 0)
const totalMinutes = rows.reduce((sum, row) => sum + row.minutes, 0)

console.log('各章正文字数（口径与页面显示一致）：')
for (const row of rows) {
  console.log(`  ${row.label}：${formatNumber(row.chars)} 字 / 约 ${row.minutes} 分钟  [${row.files.length} 篇]`)
}
console.log(`  合计：${formatNumber(totalChars)} 字 / 约 ${totalMinutes} 分钟`)

const table = [
  '| 章节 | 篇数 | 总字数 | 推荐阅读时长之和 |',
  '| --- | ---: | ---: | ---: |',
  ...rows.map(
    (row) => `| ${row.label} | ${row.files.length} | ${formatNumber(row.chars)} 字 | 约 ${row.minutes} 分钟 |`,
  ),
  `| **操作系统合计** | **${rows.reduce((n, row) => n + row.files.length, 0)}** | **${formatNumber(totalChars)} 字** | **约 ${totalMinutes} 分钟** |`,
].join('\n')

if (!process.argv.includes('--write')) {
  console.log('\n（加 --write 可把下表写回 index.md）\n')
  console.log(table)
  process.exit(0)
}

const index = fs.readFileSync(INDEX_FILE, 'utf8')
const begin = '<!-- os-content-stats:begin -->'
const end = '<!-- os-content-stats:end -->'
const block = [
  '## 六、各章字数与阅读时长',
  '',
  `下表汇总各章正文的总字数与推荐阅读时长。字数沿用文章页面的统计口径；阅读时长按每篇约 ${CHARS_PER_MINUTE} 字/分钟、向上取整后逐篇相加，最后一行为各章合计。统计范围为 content 下各章正文，不含本页与例题。`,
  '',
  begin,
  table,
  end,
  '',
].join('\n')

const pattern = new RegExp(`${begin}[\\s\\S]*?${end}`)
if (pattern.test(index)) {
  const updated = index
    .replace(/阅读时长按每篇约 \d+ 字\/分钟/, `阅读时长按每篇约 ${CHARS_PER_MINUTE} 字/分钟`)
    .replace(pattern, `${begin}\n${table}\n${end}`)
  fs.writeFileSync(INDEX_FILE, updated, 'utf8')
  console.log(`\n已更新 ${path.relative(ROOT, INDEX_FILE)}`)
} else {
  const trimmed = index.replace(/\s*$/, '')
  fs.writeFileSync(INDEX_FILE, `${trimmed}\n\n${block}`, 'utf8')
  console.log(`\n已追加汇总表到 ${path.relative(ROOT, INDEX_FILE)}`)
}

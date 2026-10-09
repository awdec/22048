/** 使用站点渲染配置，按侧边栏章节顺序汇总正文篇幅和阅读时长。 */
import fs from 'node:fs'
import { createRequire } from 'node:module'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { createMarkdownRenderer, resolveConfig } from 'vitepress'
import { readingSpeed, readingMinutes } from '../docs/.vitepress/shared/reading-stats.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
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

function formatNumber(n) {
  return n.toLocaleString('zh-CN')
}

export async function runContentStats(subjectDir, marker, heading = '## 六、各章字数与阅读时长') {
  const contentDir = path.join(ROOT, 'docs', subjectDir, 'content')
  const indexFile = path.join(contentDir, 'index.md')
  const charsPerMinute = readingSpeed(subjectDir)
  const config = await resolveConfig(path.join(ROOT, 'docs'))
  const md = await createMarkdownRenderer(config.srcDir, config.markdown, config.site.base)
  const sidebar = config.site.themeConfig.sidebar[`/${subjectDir}/content`]
  const subjectLabel = sidebar[0].text
  const chapters = sidebar.flatMap((group) => group.items ?? []).filter((item) => item.items?.length)

  const rows = []
  for (const chapter of chapters) {
    // 各科正文既有章目录内的 section 文件，也有平铺的 chapter-section 文件。
    const files = chapter.items.map((section) => path.join(config.srcDir, `${section.link}.md`))

    if (files.length === 0) throw new Error(`未找到章节正文：${chapter.text}`)

    const sections = files.map((file) => {
      const raw = fs.readFileSync(file, 'utf8')
      const body = raw.replace(/^---\r?\n[\s\S]*?\r?\n---\r?\n?/, '')
      const chars = countText(parse(md.render(body)))
      return { file: path.relative(contentDir, file).replace(/\\/g, '/'), chars, minutes: readingMinutes(chars, charsPerMinute) }
    })
    rows.push({
      label: chapter.text,
      sections,
      chars: sections.reduce((sum, section) => sum + section.chars, 0),
      minutes: sections.reduce((sum, section) => sum + section.minutes, 0),
    })
  }

  const totalChars = rows.reduce((sum, row) => sum + row.chars, 0)
  const totalMinutes = rows.reduce((sum, row) => sum + row.minutes, 0)
  const totalSections = rows.reduce((sum, row) => sum + row.sections.length, 0)

  console.log('各章正文字数（口径与页面显示一致）：')
  for (const row of rows) {
    console.log(`  ${row.label}：${formatNumber(row.chars)} 字 / 约 ${row.minutes} 分钟  [${row.sections.length} 篇]`)
  }
  console.log(`  合计：${formatNumber(totalChars)} 字 / 约 ${totalMinutes} 分钟`)

  const table = [
    '| 章节 | 篇数 | 总字数 | 推荐阅读时长之和 |',
    '| --- | ---: | ---: | ---: |',
    ...rows.map((row) => `| ${row.label} | ${row.sections.length} | ${formatNumber(row.chars)} 字 | 约 ${row.minutes} 分钟 |`),
    `| **${subjectLabel}合计** | **${totalSections}** | **${formatNumber(totalChars)} 字** | **约 ${totalMinutes} 分钟** |`,
  ].join('\n')

  if (process.argv.includes('--write')) {
    const index = fs.readFileSync(indexFile, 'utf8')
    const begin = `<!-- ${marker}:begin -->`
    const end = `<!-- ${marker}:end -->`
    const block = [
      heading,
      '',
      `下表汇总各章正文的总字数与推荐阅读时长。字数沿用文章页面的统计口径；阅读时长按每篇约 ${charsPerMinute} 字/分钟、向上取整后逐篇相加，最后一行为各章合计。统计范围为侧边栏各章下的小节正文，不含本页、章节目录页、考点分析页与例题。`,
      '',
      begin,
      table,
      end,
      '',
    ].join('\n')

    const pattern = new RegExp(`${begin}[\\s\\S]*?${end}`)
    const updated = pattern.test(index)
      ? index
        .replace(/阅读时长按每篇约 \d+ 字\/分钟/, `阅读时长按每篇约 ${charsPerMinute} 字/分钟`)
        .replace(pattern, `${begin}\n${table}\n${end}`)
      : `${index.replace(/\s*$/, '')}\n\n${block}`
    if (updated === index) {
      console.log(`\n统计结果未变化，无需更新 ${path.relative(ROOT, indexFile)}`)
    } else {
      fs.writeFileSync(indexFile, updated, 'utf8')
      console.log(`\n已更新 ${path.relative(ROOT, indexFile)}`)
    }
  } else {
    console.log('\n（加 --write 可把下表写回 index.md）\n')
    console.log(table)
  }

  return { subjectLabel, rows, totalChars, totalMinutes, totalSections }
}

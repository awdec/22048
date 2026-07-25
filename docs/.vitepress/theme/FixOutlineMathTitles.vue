<script setup lang="ts">
import { onContentUpdated } from 'vitepress'
import { nextTick, onMounted } from 'vue'

const ignoredHeaderClass = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/

function serializeNode(node: ChildNode): string {
  if (node.nodeType === Node.TEXT_NODE) return node.textContent ?? ''
  if (!(node instanceof Element) || ignoredHeaderClass.test(node.className)) return ''

  // KaTeX includes MathML, its TeX annotation, and visual HTML. Reading the
  // whole node's textContent would repeat the same formula (for `$n$`: nnn).
  if (node.classList.contains('katex')) {
    return node.querySelector<HTMLElement>('.katex-html')?.textContent ?? node.textContent
  }

  return Array.from(node.childNodes, serializeNode).join('')
}

function serializeHeading(heading: HTMLElement) {
  return Array.from(heading.childNodes, serializeNode).join('').trim()
}

function fixOutlineTitles() {
  document
    .querySelectorAll<HTMLAnchorElement>('.VPDocAsideOutline .outline-link')
    .forEach((link) => {
      const hash = link.getAttribute('href')
      if (!hash?.startsWith('#')) return

      const heading = document.getElementById(decodeURIComponent(hash.slice(1)))
      if (!heading) return

      const title = serializeHeading(heading)
      link.textContent = title
      link.title = title
    })
}

async function updateOutlineTitles() {
  // The default outline first updates its links when the Markdown route changes.
  await nextTick()
  fixOutlineTitles()
}

onContentUpdated(updateOutlineTitles)
onMounted(updateOutlineTitles)
</script>

<template><span class="outline-math-title-fixer" aria-hidden="true" /></template>

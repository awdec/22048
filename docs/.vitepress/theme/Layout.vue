<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import DocReadingStats from './DocReadingStats.vue'
import FixOutlineMathTitles from './FixOutlineMathTitles.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #doc-before>
      <DocReadingStats />
    </template>
    <template #aside-outline-after>
      <FixOutlineMathTitles />
    </template>
  </DefaultTheme.Layout>
</template>

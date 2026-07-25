<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import FixOutlineMathTitles from './FixOutlineMathTitles.vue'
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-outline-after>
      <FixOutlineMathTitles />
    </template>
  </DefaultTheme.Layout>
</template>

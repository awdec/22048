#!/usr/bin/env node
/**
 * 统计高等数学各章正文，与文章顶部使用相同的字数口径和 400 字/分钟阅读速度。
 * node scripts/math-content-stats.mjs          # 打印统计
 * node scripts/math-content-stats.mjs --write  # 更新 content/index.md 汇总表
 */
import { runContentStats } from './content-stats.mjs'

await runContentStats('advanced-math', 'math-content-stats', '## 七、各章字数与阅读时长')

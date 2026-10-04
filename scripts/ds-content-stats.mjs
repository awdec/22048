#!/usr/bin/env node
/**
 * 统计数据结构各章正文，与文章顶部使用相同的字数口径和 250 字/分钟阅读速度。
 * node scripts/ds-content-stats.mjs          # 打印统计
 * node scripts/ds-content-stats.mjs --write  # 更新 content/index.md 汇总表
 */
import { runContentStats } from './content-stats.mjs'

await runContentStats('data structrue', 'ds-content-stats')

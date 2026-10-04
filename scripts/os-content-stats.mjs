#!/usr/bin/env node
/**
 * 统计操作系统各章正文，与文章顶部使用相同的字数口径和 250 字/分钟阅读速度。
 * node scripts/os-content-stats.mjs          # 打印统计
 * node scripts/os-content-stats.mjs --write  # 更新 content/index.md 汇总表
 */
import { runContentStats } from './content-stats.mjs'

await runContentStats('operating-system', 'os-content-stats')

/** 阅读时间统一按每分钟 250 字估算。 */
export const CHARS_PER_MINUTE = 250

/** 每篇文章的阅读时间向上取整，至少为 1 分钟。 */
export function readingMinutes(chars) {
  return Math.max(1, Math.ceil(chars / CHARS_PER_MINUTE))
}

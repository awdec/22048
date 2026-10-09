/** 默认阅读速度为每分钟 250 字。 */
export const CHARS_PER_MINUTE = 250

/** 根据科目目录或页面相对路径选择阅读速度，高等数学和线性代数为 400 字/分钟。 */
export function readingSpeed(filePath = '') {
  const subject = filePath.replace(/\\/g, '/').replace(/^\/+/, '').split('/')[0]
  return ['advanced-math', 'linear-algebra'].includes(subject) ? 400 : CHARS_PER_MINUTE
}

/** 每篇文章的阅读时间向上取整，至少为 1 分钟。 */
export function readingMinutes(chars, charsPerMinute = CHARS_PER_MINUTE) {
  return Math.max(1, Math.ceil(chars / charsPerMinute))
}

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
const root = path.resolve(import.meta.dirname, '..');
const book = JSON.parse(fs.readFileSync(path.join(root, 'book/advanced-math/book.json')));
const pandoc = process.env.PANDOC_BIN || path.join(root, '.book-tools/quarto/bin/tools/pandoc.exe');
function inspect(text) {
  text = text.replace(/\r\n/g, '\n');
  text = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => '$$' + math.replace(/\n[ \t]*\n/g, '\n') + '$$');
  const run = spawnSync(pandoc, ['-f', 'markdown', '-t', 'json'], { input: text, encoding: 'utf8', maxBuffer: 30e6 });
  if (run.status !== 0) throw Error(run.stderr || String(run.error));
  const result = { math: [], tables: 0 };
  function walk(value) {
    if (Array.isArray(value)) value.forEach(walk);
    else if (value && typeof value === 'object') {
      if (value.t === 'Math') result.math.push([value.c[0], value.c[1].replace(/\s+/g, ' ').trim()]);
      if (value.t === 'Table') result.tables++;
      Object.values(value).forEach(walk);
    }
  }
  walk(JSON.parse(run.stdout));
  return result;
}
const audit = [];
for (const [i, chapter] of book.chapters.entries()) {
  const original = inspect(chapter.sources.map(f => fs.readFileSync(path.join(root, book.sourceRoot, f), 'utf8')).join('\n\n'));
  const converted = inspect(fs.readFileSync(path.join(root, '.book-build/advanced-math', i ? `chapter-${i+1}.qmd` : 'index.qmd'), 'utf8'));
  if (JSON.stringify(original) !== JSON.stringify(converted)) throw Error(`Content mismatch: ${chapter.title}`);
  audit.push({ chapter: chapter.title, math: original.math.length, tables: original.tables, mathAndTableAudit: 'passed' });
}
const reportPath = path.join(root, 'output/pdf/advanced-math-build-report.json');
const report = JSON.parse(fs.readFileSync(reportPath));
report.contentAudit = audit;
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
console.log(JSON.stringify(audit, null, 2));

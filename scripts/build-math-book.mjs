import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { spawnSync } from 'node:child_process';

const root = path.resolve(import.meta.dirname, '..');
const config = JSON.parse(fs.readFileSync(path.join(root, 'book/advanced-math/book.json'), 'utf8'));
const build = path.join(root, '.book-build/advanced-math');
const output = path.join(root, 'output/pdf');
fs.mkdirSync(build, { recursive: true });
fs.mkdirSync(output, { recursive: true });
const seen = new Set();
const report = { title: config.title, sources: [], chapters: [], scope: '24 explicit section files only', warnings: [] };
const qmds = [];
for (const [ci, chapter] of config.chapters.entries()) {
  let text = `# ${chapter.title} {#chapter-${ci + 1}}\n\n`;
  for (const file of chapter.sources) {
    if (seen.has(file) || !/^[a-z-]+\/section-\d+\.md$/.test(file)) throw Error(`Invalid source: ${file}`);
    seen.add(file);
    const src = fs.readFileSync(path.join(root, config.sourceRoot, file), 'utf8').replace(/\r\n/g, '\n');
    const lines = src.split('\n');
    const slug = file.replace(/\.md$/, '').replaceAll('/', '-');
    let containers = 0, mathLines = 0, headings = 0, inMath = false;
    const stack = [];
    const result = [];
    for (const [li, original] of lines.entries()) {
      let line = original;
      if (/^\s*\$\$\s*$/.test(line)) { inMath = !inMath; mathLines++; }
      if (!inMath && !/^\s*\$\$\s*$/.test(line)) {
        const h = line.match(/^\s*<h1><center>(.*?)<\/center><\/h1>\s*$/);
        if (h) { line = `## ${h[1]} {#${slug}}`; headings++; }
        else if (/^#{1,6}\s/.test(line)) {
          const hm = line.match(/^(#+)\s+(.*)$/);
          if (hm[1].length >= 6) throw Error(`${file}:${li + 1}: heading too deep`);
          line = `${'#'.repeat(hm[1].length + 1)} ${hm[2]} {#${slug}-h${li + 1}}`;
        }
        const open = line.match(/^:::\s+(tip|info|warning|danger|details)(?:\s+(.*))?$/);
        if (open) {
          stack.push(li); containers++;
          line = `::: {.book-note}\n\n**${open[2] || ({tip:'提示',info:'说明',warning:'注意',danger:'注意',details:'解析'})[open[1]]}**\n`;
        } else if (/^:::\s*$/.test(line)) {
          if (!stack.length) throw Error(`${file}:${li + 1}: unmatched container`);
          stack.pop(); line = '\n:::\n';
        } else if (/^:::/ .test(line)) throw Error(`${file}:${li + 1}: unsupported container`);
        if (/<\/?(?:div|span|img|table|h[1-6]|center|script|iframe)\b/i.test(line)) throw Error(`${file}:${li + 1}: unsupported HTML`);
      }
      // Pandoc ends a math block at blank paragraphs, unlike the website parser.
      if (!(inMath && !line.trim())) result.push(line);
    }
    if (stack.length || inMath || headings !== 1) throw Error(`Unbalanced source: ${file}`);
    const converted = result.join('\n');
    const originalMath = [...src.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1]);
    const convertedMath = [...converted.matchAll(/\$\$([\s\S]*?)\$\$/g)].map(m => m[1]);
    const normalized = list => list.map(s => s.replace(/\s+/g, ' ').trim());
    if (JSON.stringify(normalized(originalMath)) !== JSON.stringify(normalized(convertedMath))) throw Error(`Math changed: ${file}`);
    text += converted + '\n\n';
    report.sources.push({ file, sha256: crypto.createHash('sha256').update(src).digest('hex'), displayMath: mathLines / 2, containers, sectionId: slug });
  }
  const name = ci === 0 ? 'index.qmd' : `chapter-${ci + 1}.qmd`;
  fs.writeFileSync(path.join(build, name), text);
  qmds.push(name); report.chapters.push({ title: chapter.title, file: name, sources: chapter.sources.length });
}
if (seen.size !== 24) throw Error('Expected exactly 24 sources');
fs.copyFileSync(path.join(root, 'book/advanced-math/preamble.tex'), path.join(build, 'preamble.tex'));
fs.copyFileSync(path.join(root, 'book/advanced-math/notes.lua'), path.join(build, 'notes.lua'));
const yaml = `project:\n  type: book\n  output-dir: ../../output/pdf\nbook:\n  title: "${config.title}"\n  author: "awdec"\n  output-file: advanced-math-a4\n  chapters:\n${qmds.map(f => '    - ' + f).join('\n')}\nlang: zh-CN\nfilters:\n  - notes.lua\nformat:\n  pdf:\n    documentclass: scrbook\n    pdf-engine: lualatex\n    latex-tinytex: false\n    latex-auto-install: false\n    classoption: [oneside, openany]\n    papersize: a4\n    fontsize: 11pt\n    number-sections: false\n    toc: true\n    toc-title: 目录\n    toc-depth: 2\n    keep-tex: true\n    mainfont: "Times New Roman"\n    sansfont: "Microsoft YaHei"\n    monofont: "Consolas"\n    CJKmainfont: "SimSun"\n    geometry: [left=22mm, right=22mm, top=23mm, bottom=24mm]\n    colorlinks: true\n    linkcolor: black\n    urlcolor: blue\n    include-in-header: preamble.tex\n    pdf-engine-opts: [-interaction=nonstopmode]\n`;
fs.writeFileSync(path.join(build, '_quarto.yml'), yaml);
report.generatedAt = new Date().toISOString();
report.fonts = ['Times New Roman', 'Microsoft YaHei', 'Consolas', 'SimSun'];
fs.writeFileSync(path.join(output, 'advanced-math-build-report.json'), JSON.stringify(report, null, 2));
console.log(`Checked ${seen.size} sources, ${report.sources.reduce((a,s)=>a+s.displayMath,0)} display formulas, ${report.sources.reduce((a,s)=>a+s.containers,0)} containers`);
if (!process.argv.includes('--check')) {
  const quarto = process.env.QUARTO_BIN || path.join(root, '.book-tools/quarto/bin/quarto.cmd');
  const env = { ...process.env };
  const localTex = path.join(root, '.book-tools/tex/TinyTeX/bin/windows');
  if (process.platform === 'win32' && fs.existsSync(localTex)) {
    env.QUARTO_TEXLIVE_BINPATH = localTex;
    env.Path = `${localTex};${env.Path || env.PATH || ''}`;
    delete env.PATH;
    env.TEXMFVAR = path.join(root, '.book-tools/tex-cache');
    env.TEXMFCACHE = env.TEXMFVAR;
    env.OSFONTDIR = 'C:/Windows/Fonts//';
    fs.mkdirSync(env.TEXMFVAR, { recursive: true });
  }
  const run = spawnSync(quarto, ['render', build, '--to', 'pdf'], { cwd: root, env, stdio: 'inherit', shell: process.platform === 'win32' });
  if (run.error) throw run.error;
  process.exit(run.status ?? 1);
}

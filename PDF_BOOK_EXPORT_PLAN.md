# 高等数学 Markdown 导出 PDF 书方案

> 状态：待实施。本次只调整方案，不安装依赖、不生成 PDF。
>
> 更新日期：2026-09-22
>
> 范围：仅收录 `docs/advanced-math/content/` 六章共 24 份 `section-N.md`；以第 3 节有序清单为准。
>
> 首期输出：A4 单册《高等数学复习笔记》。采用 Markdown 预处理 + Quarto Book + LuaLaTeX。

## 1. 目标与边界

- 共享现有 Markdown 内容，生成带封面、目录、页码、书签和内部链接的 PDF 书。
- 仅收录六章的 24 份常规小节，不收录总览、两篇微分方程补充文档、practice 或 skills。
- 转换只写入临时目录，不改写源 Markdown，不维护第二套永久正文。
- 网站继续使用现有 VitePress 配置；本期不迁移网站导航，也不整理其他学科。
- 首期只做 A4 阅读/打印版；B5、双面装订、EPUB 和多学科合订本延后。
- 导出不等于内容校订；原文的数学内容、考试范围说明及不确定性表述完整保留。

## 2. 当前内容清点与收录规则

以下为 2026-09-22 工作区核对结果。本期范围固定为第 3 节列出的 24 份小节，后续新增文件不自动扩充收录范围。

| 内容 | Markdown 数量 | 处理方式 |
|---|---:|---|
| 六个知识模块的 section-N.md | 24 | 按模块合并为六章，每份收录一次 |
| content/index.md | 1 | 不收录 |
| 微分方程补充文档 | 2 | 不收录 |

本次收录的 24 份小节有 24 处 HTML 一级标题、30 处 VitePress 容器起始标记，未扫描到 details 容器或 Mermaid 代码块。首期重点是标题、公式、表格与提示框。

收录规则：

- 使用明确列出的 24 条文件路径，不通过递归收录全部 Markdown 或宽泛通配符扩大范围。
- 文件缺失、重复或正文为空时报告错误，不静默跳过。
- 判断空正文时忽略 front matter、HTML/Markdown 标题、空白及注释，不仅凭文件长度判断。
- 新增文件仅可在报告中提示，不自动收录；扩充范围需要另行调整方案和清单。
- 这 24 份原文自身包含的例题、推导或说明仍完整保留，范围按文件路径确定。

## 3. 默认书籍目录

暂定书名“高等数学复习笔记”，副标题“考点与知识整理”，作者 awdec，可在书籍配置中调整。

成书顺序为“封面 → 目录 → 六章正文”，不设总览、前言或补充专题。

### 正文：六章考点与知识整理

一章对应一个知识模块，多个源文件合并为一个 Quarto 章节，不把每个 `section-N.md` 当作独立一章。

下表路径均相对于 `docs/advanced-math/`。

| 章 | 目录 | 有序文件 |
|---|---|---|
| 第一章 函数、极限与连续 | `content/function-limit-continuity/` | `section-1.md` 至 `section-5.md` |
| 第二章 一元函数微分学 | `content/single-variable-differential-calculus/` | `section-1.md` 至 `section-3.md` |
| 第三章 一元函数积分学 | `content/integral-calculus/` | `section-1.md` 至 `section-6.md` |
| 第四章 多元函数微分学 | `content/multivariable-differential-calculus/` | `section-1.md` 至 `section-4.md` |
| 第五章 二重积分 | `content/double-integral/` | `section-1.md` 至 `section-3.md` |
| 第六章 常微分方程 | `content/differential-equations/` | `section-1.md` 至 `section-3.md` |

六章小节数量依次为 5、3、6、4、3、3，合计 24 份。

## 4. 独立书籍清单

拟新增 `book/advanced-math/book.json`，仅服务高数导出。网站导航继续由现有配置维护，不把导航迁移作为导出前提。

清单至少包含：

- 元数据：书名、副标题、作者、语言。
- `sourceRoot`：固定为 `docs/advanced-math/content`；清单内文件路径相对于该目录。
- `chapters[].sources[]`：六个章的有序源文件及稳定 ID，不设置额外的篇层级。
- `mode`：使用 `merge-sections`，将每章对应的小节合并。
- 六章清单必须恰好覆盖第 3 节的 24 份文件，不配置正文卷首来源。

章配置示意（仅为节选，实施时按第 3 节展开全部来源）：

```json
{
  "id": "knowledge-limits",
  "title": "第一章 函数、极限与连续",
  "mode": "merge-sections",
  "sources": [
    "function-limit-continuity/section-1.md",
    "function-limit-continuity/section-2.md",
    "function-limit-continuity/section-3.md",
    "function-limit-continuity/section-4.md",
    "function-limit-continuity/section-5.md"
  ]
}
```

校验文件存在、路径大小写、重复收录及目录越界。正文严格限定为第 3 节列出的 24 份小节；公共图片等资源可以来自经验证的 `docs/public/`。

## 5. 必须在首期完成的转换

### 5.1 标题与编号

首期关闭自动章节编号，保留原文编号。正文已有“第 2.1 节”“第 3 节”等局部引用，自动重编号会使引用错位。

- 提取 `<h1><center>…</center></h1>` 和 Markdown 一级标题。
- 合并章：生成章级 H1，源 H1 转成 H2，原 H2 转成 H3，以下相应下移。
- 不重复插入源文档标题；缺少标题或多个不明用途的 H1 应报告，不猜测删除。
- 不全局正则删除数字前缀，题号、公式、列表及引用数字必须保留。
- 目录默认深度为 2，即章与源文档小节；更深标题仍保留锚点。
- 标题层级超过六级时显式处理为有锚点的段落标题，不能静默丢失。
- 锚点使用源相对路径与原标题标识，不依赖全书排列序号；重复标题按源文件作用域及出现次序区分。标题或路径改名引起的锚点变化写入报告。

### 5.2 提示框

- 将现有 tip、info、warning 等容器转换为统一提示样式，保留标题与正文。
- 提示框及长推导允许跨页；若与公式、表格嵌套不兼容，降级为普通标题加段落，内容必须完整。
- 使用理解容器的 Markdown token/AST 及 Pandoc/Lua filter 转换，不仅靠跨段正则替换。
- 维护源文件和行号映射，验证容器中的公式、列表、表格及嵌套内容没有遗漏。
- 当前收录的 24 份小节没有 details 容器；未来新增时应在原位置完整展开，尚未支持则检查失败，不能丢弃内容。

### 5.3 数学公式与中文

- 按项目实际使用的 KaTeX 源语法清点公式，不再采用旧方案的 MathJax 假设。
- 保留行内/块级公式，校验宏、命令、环境配对及 LuaLaTeX 兼容性。
- 未知命令、缺字和编译错误必须报告；不自动改变数学含义。
- 重点试排长推导、分段函数、矩阵、公式中的中文和正文星级符号。
- 模板必须明确中文字体及 CJK 排版支持，检查中文断行和标点，不能只设置 `mainfont`。
- 正文优先 Noto Serif CJK SC，标题 Noto Sans CJK SC；数学字体单独指定。实施时固定实际字体与工具版本。
- 字体缺失在构建前报错，不静默回退。

### 5.4 链接

先按原源文件位置解析链接，再映射到合并后的目标，不能以临时章节文件为相对路径基准。

- 支持相对无扩展名路径、`.md`、站内绝对路径、目录 `index.md` 及标题片段。
- 已收录的 24 份文档之间转为 PDF 内部锚点。
- 若原文链接到总览、补充文档、practice、skills 或其他范围外页面，保留为 `https://awdec.xyz` 的站点链接并报告，不递归导入链接目标正文。
- 网站首页 `/` 是合法外链目标，不能一律视为占位错误。
- 文件不存在、空链接及收录文档中的目标片段不存在时检查失败。
- 保留的网站链接检查路由有效性；网络不可达与本地路径错误分开报告。
- 建立 VitePress 原标题片段到 PDF 锚点的映射，避免中文重复标题误跳转。

### 5.5 表格、资源及其他语法

- 表格按 A4 版心设置列宽，长表跨页并重复表头，不靠无限缩小字号解决越界。
- 图片按源文件解析，绝对资源路径映射到 `docs/public/`，复制到临时资源目录。
- 保留代码内容，按需视觉换行；高数首期不做算法代码专项美化。
- 未知 HTML、Vue 组件和无法转换的语法报错，不无条件删除 HTML。
- 今后新增 Mermaid 时明确支持或阻止构建，不将图源码当成图交付。
- GIF、视频及复杂交互转换等到实际内容需要时再增加依赖。

## 6. 构建目录、命令与依赖

```text
book/advanced-math/
  book.json
  quarto-template.yml
  latex/preamble.tex
  latex/page-style.tex
scripts/build-math-book.mjs

.book-build/advanced-math/       # 自动生成
  index.qmd                    # 第一章：由其 5 份小节合并生成
  chapters/*.qmd               # 第二至第六章
  assets/
  latex/
  _quarto.yml
  source-map.json

output/pdf/
  advanced-math-a4.pdf
  advanced-math-build-report.json
```

- `book.chapters` 从清单生成，不重复手工维护章节列表。
- 为满足 Quarto 书籍入口要求，将第一章直接生成到临时 `index.qmd`，并作为章节列表首项；不读取源 `content/index.md`，不生成额外卷首正文，也不重复输出第一章。源 front matter 仅保留允许的元数据，过滤网页布局字段。
- 生成目录加入忽略规则；清理严格限制在本工具生成目录。
- 报告记录扫描根目录、全部收录路径、输入摘要、字体和工具版本、外部链接、警告与验证结果。
- 当前工作区有未提交内容，报告除 Git 提交号外，还需记录 dirty 状态和源文件内容摘要。

拟提供命令（本次不修改 package.json）：

```json
{
  "book:math:check": "node scripts/build-math-book.mjs --check",
  "book:math:sample": "node scripts/build-math-book.mjs --sample",
  "book:math:pdf": "node scripts/build-math-book.mjs --format a4"
}
```

`--check` 不调用 LaTeX，只检查清单、语法、标题、路径和本地链接。`--sample` 输出 `advanced-math-sample.pdf`，不覆盖正式版。

先检测已有环境再安装缺失依赖：Node.js、Quarto、TeX Live/TinyTeX 的 LuaLaTeX 及中文宏包、字体、Poppler 和 PDF 结构检查工具。记录选定版本和安装步骤，不让网站构建依赖 TeX。

## 7. 首期 A4 页面方案

| 项目 | 默认值 |
|---|---|
| 页面 | A4，210 × 297 mm |
| 文档类与引擎 | `scrbook` + LuaLaTeX |
| 分页 | `oneside`、`openany`；章换页，不强制奇数页开章 |
| 页边距 | 左右 22 mm，上下 22–25 mm，试排后确定 |
| 正文字号 | 约 11 pt |
| 标题编号 | `number-sections: false`，显示编号由清单和原文保留 |
| 目录深度 | 2 |
| 封面 | 简洁文字封面，不显示页码 |
| 目录 | 罗马页码 |
| 正文 | 阿拉伯页码从 1 开始 |
| 页眉页脚 | 书名/当前章名与页码，避免长标题溢出 |
| 链接与提示框 | 深色、浅底，灰度打印仍可读 |

先保证公式、表格和推导可读。正式双面装订的内外边距、装订补偿及奇数页开章在有实际需求后增加。

## 8. 实施顺序

### 第一步：收录清单与检查器

建立仅含第 3 节这 24 份小节的有序清单，检查六章小节数量为 5、3、6、4、3、3，且文件存在、没有重复。新增文件不自动加入。检查错误提供文件与行号。

### 第二步：小范围 A4 试排

至少覆盖：

- `content/function-limit-continuity/section-1.md`：HTML 标题及基础正文排版。
- `content/single-variable-differential-calculus/section-2.md`：公式及提示容器。
- `content/integral-calculus/section-4.md`：积分公式及推导。
- `content/differential-equations/section-2.md`：微分方程公式及推导。

样书来源也严格限定于这 24 份小节；验证第一章作为生成入口时的目录、标题及正文页码。若有指向样书之外文档的链接，转为网站链接并记录。试排阶段就完成中文、标题、容器和公式兼容，不推迟到全量构建后。

### 第三步：全量高数书

按目录合并这 24 份小节正文，验证顺序、链接、公式与推导完整性和页面。验证通过后再加入实际构建命令。

### 第四步：可选自动化

本地构建稳定后，可增加独立、手动触发的 PDF CI 与 artifact，不作为每次网站部署的必经步骤。

## 9. 验收标准

### 内容完整性

- 输入范围严格限定为第 3 节的 24 份小节，不含总览、补充文档、practice、skills 或其他学科正文。
- 24 份小节各收录一次，形成六章；封面和目录之外没有新增正文。
- 转换前后按解析结构核对正文、公式块、表格、提示框和必要标题，而非只统计正则匹配。
- 30 处容器起始标记是当前 24 份小节的快照，实施时重新统计并核对转换后的内容。
- 不丢失推导段落、公式或 HTML 中的有效正文；不出现双重编号和重复章标题。

### PDF 结构与视觉

- 文件能打开，A4 尺寸正确，目录、书签、页码及元数据完整。
- 若有内部链接，其目标存在且可跳转；范围外链接保留为网站链接。
- 字体嵌入，中文可搜索、复制，数学符号无缺字。
- 编译错误和缺字解决；溢出警告逐条定位并确认。
- 全书逐页渲染检查，重点检查长推导、宽表、跨页推导、标题孤行及页眉。
- 不存在裁切、重叠、公式越界或以过小字号掩盖排版问题。

正式交付为 `advanced-math-a4.pdf` 和构建报告。仅编译成功或文本提取成功不代表通过视觉验收。

首期可复现指内容、顺序及版式可追踪复建，不承诺文件字节完全相同。字节级一致性需要另外固定时间戳、PDF 元数据和完整环境。

## 10. 本期不做

- 总览、两篇微分方程补充文档、practice、skills 导出，以及全学科共同目录和网站导航重构。
- B5/A4 双格式同时开发。
- 旧算法项目中的动态规划和算法代码专项需求。
- Mermaid/GIF/视频转换工具的预先集成。
- 答案分册、无答案练习册、EPUB 和印刷认证格式。
- 为导出而批量改写源文档或永久复制第二套正文。

## 11. 技术参考

- [Quarto Book Structure](https://quarto.org/docs/books/book-structure.html)：书籍入口、篇章与标题。
- [Quarto PDF Basics](https://quarto.org/docs/output-formats/pdf-basics.html)：引擎、字体及页面配置。
- [Pandoc User's Guide](https://pandoc.org/MANUAL.html)：Markdown、内部链接和过滤器。
- [KOMA-Script](https://ctan.org/pkg/koma-script)：书籍分页、页眉页脚。

实施时按选定版本核对配置，以高数样书实际渲染作为可用性依据。

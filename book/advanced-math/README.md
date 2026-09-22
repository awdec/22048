# 高等数学 PDF 导出

仅处理 `book.json` 中固定列出的六章、24 份小节，不导入总览、补充文档、practice 或 skills。

```powershell
npm run book:math:check
npm run book:math:pdf
node scripts/check-math-book-content.mjs
```

输出：`output/pdf/advanced-math-a4.pdf`。构建报告位于同目录。构建只写临时目录和输出目录，不修改源 Markdown。

当前已准备项目内便携 Quarto 1.10.18 与 TinyTeX/TeX Live 2026，位于忽略版本控制的 `.book-tools/`。脚本优先使用这套环境，并关闭 Quarto 自动安装宏包。重新配置电脑时需安装这些工具，或用 `QUARTO_BIN` 和 `PANDOC_BIN` 指定程序路径，并让 LuaLaTeX 可从 PATH 访问。

当前模板使用 Windows 字体 SimSun、SimHei、Microsoft YaHei、Times New Roman、Consolas 及 TeX 自带 Latin Modern Math；PDF 嵌入实际使用的字体。换平台时应先调整字体配置并重新检查页面。

TinyTeX 额外所需组件包括 koma-script、luatexja、luatexbase、haranoaji、unicode-math、fontspec、microtype、booktabs、bookmark、hyperref、xurl、footnotehyper、caption、selnolig。其余依赖由 TeX 包管理器解析。

提示框转换为可分页的缩进段落；公式内部空行在临时稿中移除，控制命令与紧邻中文之间补充分隔符，数学内容不变。由于 LuaTeX-ja 与当前 microtype 版本存在兼容问题，模板关闭 microtype 激活。

每次重建后应重新检查 PDF 的字体嵌入、书签、页码和页面溢出。内容审计脚本比较源文档与临时章节的全部数学表达式及表格数量；视觉检查不能仅由此替代。

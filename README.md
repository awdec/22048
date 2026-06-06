# awdec's Blog

这是一个基于 VitePress 搭建的考研学习笔记站点，主要用于整理 408 数据结构、高等数学、线性代数等内容。

站点内容以章节笔记、考点总结和例题练习为主，适合在复习过程中按知识模块查阅和补充。

## 内容概览

- 数据结构：408 数据结构考点分析、绪论、线性表、字符串、树、图、查找、排序等。
- 高等数学：函数、极限、连续等章节考点与例题。
- 线性代数：线性代数相关考点与练习内容。

## 技术栈

- VitePress
- Markdown
- markdown-it-mathjax3

## 本地运行

安装依赖：

```bash
npm install 
```

启动开发服务器：

```bash
npm run docs:dev
```

构建静态站点：

```bash
npm run docs:build
```

预览构建结果：

```bash
npm run docs:preview
```

## 项目结构

```text
.
├── docs/
│   ├── .vitepress/          # VitePress 配置
│   ├── advanced-math/       # 高等数学笔记与例题
│   ├── data structrue/      # 数据结构笔记与例题
│   ├── linear-algebra/      # 线性代数笔记与例题
│   ├── public/              # 静态资源
│   └── index.md             # 站点首页
├── package.json
├── package-lock.json
└── README.md
```

## 说明

项目仍在持续整理中，章节内容会随着复习进度逐步补充和调整。

## License

本项目基于 [MIT License](./LICENSE) 开源。

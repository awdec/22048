# awdec 的 22408 学习笔记

这是一个基于 VitePress 搭建的考研 22408 学习笔记站点，主要整理高等数学、线性代数，以及 408 计算机学科专业基础的相关内容。

站点内容以章节笔记、考点总结和例题练习为主，适合在复习过程中按知识模块查阅和补充。

线上地址：[https://awdec.xyz](https://awdec.xyz)

## 内容概览

- 数据结构：408 数据结构考点分析、绪论、线性表、字符串、树、图、查找、排序等。
- 计算机组成原理：计算机系统概述、数据表示与运算、存储系统、指令系统、CPU、总线和 I/O 系统等。
- 操作系统：计算机系统概述、进程与线程、内存管理、文件管理和 I/O 管理等。
- 计算机网络：网络体系结构、物理层、数据链路层、网络层、传输层和应用层等。
- 高等数学：函数、极限与连续，一元及多元函数微分学、积分学、二重积分和微分方程等。
- 线性代数：行列式、矩阵、向量、线性方程组、特征值与特征向量和二次型等。

## 技术栈

- VitePress
- Markdown
- KaTeX
- markdown-it-katex
- Mermaid
- vitepress-plugin-mermaid
- VitePress 自定义主题
- GitHub Actions 与 GitHub Pages

## 环境要求

- Node.js 20（推荐，与自动部署环境保持一致）
- npm

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

## 主要项目结构

```text
.
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Pages 自动构建与部署
├── docs/
│   ├── .vitepress/          # VitePress 配置与自定义主题
│   ├── advanced-math/       # 高等数学笔记与练习
│   ├── computer-network/    # 计算机网络笔记与练习
│   ├── computer-organization/ # 计算机组成原理笔记与练习
│   ├── data structrue/      # 数据结构笔记与练习
│   ├── linear-algebra/      # 线性代数笔记与练习
│   ├── operating-system/    # 操作系统笔记与练习
│   ├── public/              # 静态资源
│   └── index.md             # 站点首页
├── CNAME                    # 自定义域名
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## 内容组织

每个学科通常分为两部分：

- `content/`：考点、知识梳理和章节笔记。
- `practice/`：例题、练习与总结。

课程内容主要按“章”组织。多数章节使用 `index.md` 作为章节概览，使用 `section-N.md` 记录各小节；部分已有内容仍采用 `<chapter>.md`、`<chapter>-section-N.md` 或独立的总结文件。

新增或调整页面后，还需要在 `docs/.vitepress/config.mts` 中同步维护导航栏和侧边栏。

## 自动部署

推送到 `main` 分支后，GitHub Actions 会使用 Node.js 20 安装依赖并执行 `npm run docs:build`，随后将 `docs/.vitepress/dist` 部署到 GitHub Pages。

生产站点使用自定义域名：[https://awdec.xyz](https://awdec.xyz)。

## 说明

项目仍在持续整理中，章节内容会随着复习进度逐步补充和调整。

## License

本项目基于 [MIT License](./LICENSE) 开源。

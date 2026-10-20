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

## 各科字数与阅读时长统计

修改正文后，在项目根目录执行对应命令，重新生成该科 `content/index.md` 末尾的各章字数与阅读时长表格。

| 课程 | 重新生成并写入表格 | 只查看统计 | 阅读速度 |
| --- | --- | --- | --- |
| 高等数学 | `npm run math:stats:write` | `npm run math:stats` | 400 字/分钟 |
| 线性代数 | `npm run la:stats:write` | `npm run la:stats` | 400 字/分钟 |
| 数据结构 | `npm run ds:stats:write` | `npm run ds:stats` | 250 字/分钟 |
| 计算机组成原理 | `npm run co:stats:write` | `npm run co:stats` | 250 字/分钟 |
| 操作系统 | `npm run os:stats:write` | `npm run os:stats` | 250 字/分钟 |
| 计算机网络 | `npm run network:stats:write` | `npm run network:stats` | 250 字/分钟 |

统计范围为侧边栏各章下的小节正文，不含科目首页、章节目录页、考点分析页与例题。字数沿用文章顶部的统计口径：正文去掉空白后计数，LaTeX 公式取 TeX 源码计数一次，包含命令字母和符号。每篇阅读时长向上取整，至少为 1 分钟，再逐章相加，表格末行给出全科合计。

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
│   │   ├── content/         # 考点与章节笔记
│   │   │   ├── index.md     # 试卷说明与各章篇幅统计
│   │   │   ├── exam-analysis.md # 考点分析
│   │   │   ├── introduction/ # 第一章 计算机系统概述
│   │   │   ├── data-representation-operation/ # 第二章 数据的表示和运算
│   │   │   ├── memory-system/ # 第三章 存储系统
│   │   │   ├── instruction-system/ # 第四章 指令系统
│   │   │   ├── cpu/         # 第五章 中央处理器
│   │   │   ├── bus/         # 第六章 总线
│   │   │   └── io-system/   # 第七章 输入/输出系统
│   │   └── practice/        # 按章整理的习题
│   │       ├── index.md     # 习题总览与章节导航
│   │       ├── exam-analysis.md # 考点分析
│   │       ├── introduction/ # 第一章 计算机系统概述
│   │       ├── data-representation-operation/ # 第二章 数据的表示和运算
│   │       ├── memory-system/ # 第三章 存储系统
│   │       ├── instruction-system/ # 第四章 指令系统
│   │       ├── cpu/         # 第五章 中央处理器
│   │       ├── bus/         # 第六章 总线
│   │       └── io-system/   # 第七章 输入/输出系统
│   ├── data structrue/      # 数据结构笔记与练习
│   │   ├── content/         # 考点与章节笔记
│   │   │   ├── index.md     # 试卷说明与各章篇幅统计
│   │   │   ├── exam-analysis.md # 考点分析
│   │   │   ├── introduction/ # 第一章 绪论
│   │   │   ├── linear-list/ # 第二章 线性表
│   │   │   ├── string/      # 第三章 字符串
│   │   │   ├── tree/        # 第四章 树
│   │   │   ├── graph/       # 第五章 图
│   │   │   ├── search/      # 第六章 查找
│   │   │   └── sort/        # 第七章 排序
│   │   └── practice/        # 例题与练习
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

课程内容主要按“章”组织，小节保存在 `<chapter>/section-N.md` 中，部分知识点另有独立的总结文件。

数据结构的 `content/` 与计算机组成原理的 `content/`、`practice/` 均按七章分目录，章目录内仅保留各节的 `section-N.md`，侧边栏点击章名直接进入该章第一节；计算机组成原理习题总览中的章节导航也链接到对应第一节。

新增或调整页面后，还需要在 `docs/.vitepress/config.mts` 中同步维护导航栏和侧边栏。

## 自动部署

推送到 `main` 分支后，GitHub Actions 会使用 Node.js 20 安装依赖并执行 `npm run docs:build`，随后将 `docs/.vitepress/dist` 部署到 GitHub Pages。

生产站点使用自定义域名：[https://awdec.xyz](https://awdec.xyz)。

## 说明

项目仍在持续整理中，章节内容会随着复习进度逐步补充和调整。

## License

本项目基于 [MIT License](./LICENSE) 开源。

# awdec's Blog

一个基于 VitePress 搭建的算法与竞赛编程笔记站点，内容涵盖数据结构、字符串、数学、图论、多项式、计算几何、动态规划等专题。

## 内容概览

- 数据结构：线段树、树状数组、并查集、平衡树、动态树、莫队、树链剖分、点分治等
- 字符串：KMP、Hash、Manacher、Trie、AC 自动机、PAM、SAM、SA 等
- 数学：数论、组合数学、生成函数、多项式相关内容
- 图论：最短路、最小生成树、二分图、Tarjan、欧拉路、LCA 等
- 计算几何：凸包、半平面交、旋转卡壳、扫描线、圆、三维几何等
- 动态规划与其他竞赛常用技巧

## 技术栈

- [VitePress](https://vitepress.dev/)
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

本地预览构建结果：

```bash
npm run docs:preview
```

## 项目结构

```text
.
├── docs/
│   ├── .vitepress/          # VitePress 配置
│   ├── data structure/      # 数据结构
│   ├── dp/                  # 动态规划
│   ├── geometry/            # 计算几何
│   ├── graph/               # 图论
│   ├── math/                # 数学专题
│   ├── other/               # 杂项
│   ├── poly/                # 多项式
│   ├── public/              # 静态资源
│   └── string/              # 字符串
├── package.json
└── README.md
```

## 贡献

欢迎通过 Issue 或 Pull Request 交流、补充内容或修正文档中的问题。

## 开源协议

本项目基于 [MIT License](./LICENSE) 开源。

import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config


export default defineConfig({
  lastUpdated: true,
  
  // base: "/22048/",
  
  // head: [
  //   ['link', { rel: 'icon', href: '/logo2.ico' }]
  // ],


  title: "awdec's Blog",
  
  description: "考研",



  themeConfig: {
    outlineTitle: '目录',
    outline: [2,6],
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '数据结构',
        items: [
          {text: '考点', link: '/data structrue/content/' },
          {text: '例题', link: '/data structrue/practice/'},
        ] 
      },
      { text: '操作系统', link: '/string/home'},
      { text: '计算机网络', link: '/graph/home'},
      { text: '计算机组成原理', link: '/poly/home'},
      { text: '高等数学',
        items: [
          { text: '考点', link: '/advanced-math/content/' },
          { text: '例题', link: '/advanced-math/practice/' },
          { text: '习题', link: '/advanced-math/practise/' },
        ],
      },
      { text: '线性代数',
        items: [
          { text: '考点', link: '/linear-algebra/content/' },
          { text: '例题', link: '/linear-algebra/practice/' },
        ],
      },
    ],

    sidebar: {
      '/data structrue/content': [
        {
          text: '数据结构',
          items: [
            { text: '408 数据结构考点分析', link: '/data structrue/content/exam-analysis' },
            {
              text: '第一章 绪论',
              link: '/data structrue/content/introduction',
              items: [
                { text: '第一节 基本概念', link: '/data structrue/content/introduction-section-1' },
                { text: '第二节 算法概念', link: '/data structrue/content/introduction-section-2' },
                { text: '第三节 本章总结', link: '/data structrue/content/introduction-section-3' },
              ],
            },
            {
              text: '第二章 线性表',
              link: '/data structrue/content/linear-list',
              items: [
                { text: '第一节 顺序表', link: '/data structrue/content/linear-list-sequential-list' },
                { text: '第二节 链表', link: '/data structrue/content/linear-list-linked-list' },
                { text: '第三节 栈', link: '/data structrue/content/linear-list-stack' },
                { text: '第四节 栈的应用', link: '/data structrue/content/linear-list-stack-application' },
                { text: '第五节 队列', link: '/data structrue/content/linear-list-queue' },
                { text: '第六节 队列的应用', link: '/data structrue/content/linear-list-queue-application' },
                { text: '第七节 数组和特殊矩阵', link: '/data structrue/content/linear-list-array-special-matrix' },
                { text: '第八节 本章总结', link: '/data structrue/content/linear-list-section-8' },
              ],
            },
            {
              text: '第三章 字符串',
              link: '/data structrue/content/string',
              items: [
                { text: '第一节 字符串', link: '/data structrue/content/string-section-1' },
                { text: '第二节 本章总结', link: '/data structrue/content/string-section-2' },
              ],
            },
            {
              text: '第四章 树',
              link: '/data structrue/content/tree',
              items: [
                { text: '第一节 树与二叉树', link: '/data structrue/content/tree-binary-tree' },
                { text: '第二节 并查集', link: '/data structrue/content/tree-disjoint-set' },
                { text: '第三节 本章总结', link: '/data structrue/content/tree-section-3' },
              ],
            },
            {
              text: '第五章 图',
              link: '/data structrue/content/graph',
              items: [
                { text: '第一节 图的定义', link: '/data structrue/content/graph-definition' },
                { text: '第二节 图结构的存储', link: '/data structrue/content/graph-storage' },
                { text: '第三节 图的遍历', link: '/data structrue/content/graph-traversal' },
                { text: '第四节 图的相关应用', link: '/data structrue/content/graph-application' },
              ],
            },
            {
              text: '第六章 查找',
              link: '/data structrue/content/search',
              items: [
                { text: '第一节 查找的基本概念', link: '/data structrue/content/search-basic' },
                { text: '第二节 顺序查找和折半查找', link: '/data structrue/content/search-linear-binary' },
                { text: '第三节 树形查找', link: '/data structrue/content/search-tree' },
                { text: '第四节 B 树和 B+ 树', link: '/data structrue/content/search-b-tree' },
                { text: '第五节 散列表', link: '/data structrue/content/search-hash' },
              ],
            },
            {
              text: '第七章 排序',
              link: '/data structrue/content/sort',
              items: [
                { text: '第一节 排序的基本概念', link: '/data structrue/content/sort-basic' },
                { text: '第二节 插入排序', link: '/data structrue/content/sort-insertion' },
                { text: '第三节 交换排序', link: '/data structrue/content/sort-exchange' },
                { text: '第四节 选择排序', link: '/data structrue/content/sort-selection' },
                { text: '第五节 归并、基数、计数排序', link: '/data structrue/content/sort-merge-radix-count' },
                { text: '第六节 内部排序', link: '/data structrue/content/sort-internal' },
                { text: '第七节 外部排序', link: '/data structrue/content/sort-external' },
              ],
            },
          ]
        }
      ],

      '/data structrue/practice': [
        {
          text: '数据结构',
          items: [
            { text: '线性表', link: '/data structrue/practice/linear-list'},
          ]
        }
      ],

      '/advanced-math/content': [
        {
          text: '高等数学',
          items: [
            { text: '高数考纲/考点', link: '/advanced-math/content/' },
            {
              text: '第一章 函数 极限 连续',
              link: '/advanced-math/content/function-limit-continuity',
              items: [
                { text: '第一节 函数及其性质', link: '/advanced-math/content/function-limit-continuity-section-1' },
                { text: '第二节 数列极限与函数极限', link: '/advanced-math/content/function-limit-continuity-section-2' },
                { text: '第三节 无穷小量及无穷小的阶', link: '/advanced-math/content/function-limit-continuity-section-3' },
                { text: '第四节 极限计算', link: '/advanced-math/content/function-limit-continuity-section-4' },
                { text: '第五节 连续和间断', link: '/advanced-math/content/function-limit-continuity-section-5' },
                { text: '本章总结', link: '/advanced-math/content/function-limit-continuity-section-6' },
              ],
            },
          ]
        }
      ],

      '/advanced-math/practice': [
        {
          text: '高等数学',
          items: [
            { text: '高数例题', link: '/advanced-math/practice/' },
            {
              text: '第一章 函数 极限 连续',
              link: '/advanced-math/practice/function-limit-continuity',
              items: [
                { text: '第一节 函数及其性质', link: '/advanced-math/practice/function-limit-continuity-section-1' },
                { text: '第二节 数列极限与函数极限', link: '/advanced-math/practice/function-limit-continuity-section-2' },
                { text: '第三节 无穷小量及无穷小的阶', link: '/advanced-math/practice/function-limit-continuity-section-3' },
                { text: '第四节 极限计算', link: '/advanced-math/practice/function-limit-continuity-section-4' },
                { text: '第五节 连续和间断', link: '/advanced-math/practice/function-limit-continuity-section-5' },
              ],
            },
          ]
        }
      ],

      '/linear-algebra/content': [
        {
          text: '线性代数',
          items: [
            { text: '线代考纲/考点', link: '/linear-algebra/content/' },
          ]
        }
      ],

      '/linear-algebra/practice': [
        {
          text: '线性代数',
          items: [
            { text: '线代例题', link: '/linear-algebra/practice/' },
          ]
        }
      ],
    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ],

    lastUpdated:{
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },

  },
  
  markdown: {
    math: true
  },
})

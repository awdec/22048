import katex from 'katex'
import markdownItKatex from 'markdown-it-katex'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config


export default defineConfig({
  lastUpdated: true,
  
  // base: "/22048/",
  
  // head: [
  //   ['link', { rel: 'icon', href: '/logo2.ico' }]
  // ],


  title: "awdec 的 22408",
  
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
      { text: '计算机组成原理',
        items: [
          { text: '考点', link: '/computer-organization/content/' },
          { text: '习题', link: '/computer-organization/practice/' },
        ],
      },
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
              link: '/data structrue/content/introduction/',
              items: [
                { text: '第一节 基本概念', link: '/data structrue/content/introduction//section-1' },
                { text: '第二节 算法概念', link: '/data structrue/content/introduction//section-2' },
                { text: '第三节 本章总结', link: '/data structrue/content/introduction//section-3' },
              ],
            },
            {
              text: '第二章 线性表',
              link: '/data structrue/content/linear-list/',
              items: [
                { text: '第一节 顺序表', link: '/data structrue/content/linear-list//section-1' },
                { text: '第二节 链表', link: '/data structrue/content/linear-list//section-2' },
                { text: '第三节 栈', link: '/data structrue/content/linear-list//section-3' },
                { text: '第四节 栈的应用', link: '/data structrue/content/linear-list//section-4' },
                { text: '第五节 队列', link: '/data structrue/content/linear-list//section-5' },
                { text: '第六节 队列的应用', link: '/data structrue/content/linear-list//section-6' },
                { text: '第七节 数组和特殊矩阵', link: '/data structrue/content/linear-list//section-7' },
                { text: '第八节 本章总结', link: '/data structrue/content/linear-list//section-8' },
              ],
            },
            {
              text: '第三章 字符串',
              link: '/data structrue/content/string/',
              items: [
                { text: '第一节 字符串', link: '/data structrue/content/string//section-1' },
                { text: '第二节 本章总结', link: '/data structrue/content/string//section-2' },
              ],
            },
            {
              text: '第四章 树',
              link: '/data structrue/content/tree/',
              items: [
                { text: '第一节 树与二叉树', link: '/data structrue/content/tree//section-1' },
                { text: '第二节 并查集', link: '/data structrue/content/tree//section-2' },
                { text: '第三节 本章总结', link: '/data structrue/content/tree//section-3' },
              ],
            },
            {
              text: '第五章 图',
              link: '/data structrue/content/graph/',
              items: [
                { text: '第一节 图的定义', link: '/data structrue/content/graph//section-1' },
                { text: '第二节 图结构的存储', link: '/data structrue/content/graph//section-2' },
                { text: '第三节 图的遍历', link: '/data structrue/content/graph//section-3' },
                { text: '第四节 图的相关应用', link: '/data structrue/content/graph//section-4' },
              ],
            },
            {
              text: '第六章 查找',
              link: '/data structrue/content/search/',
              items: [
                { text: '第一节 查找的基本概念', link: '/data structrue/content/search//section-1' },
                { text: '第二节 顺序查找和折半查找', link: '/data structrue/content/search//section-2' },
                { text: '第三节 树形查找', link: '/data structrue/content/search//section-3' },
                { text: '第四节 B 树和 B+ 树', link: '/data structrue/content/search//section-4' },
                { text: '第五节 散列表', link: '/data structrue/content/search//section-5' },
              ],
            },
            {
              text: '第七章 排序',
              link: '/data structrue/content/sort/',
              items: [
                { text: '第一节 排序的基本概念', link: '/data structrue/content/sort//section-1' },
                { text: '第二节 插入排序', link: '/data structrue/content/sort//section-2' },
                { text: '第三节 交换排序', link: '/data structrue/content/sort//section-3' },
                { text: '第四节 选择排序', link: '/data structrue/content/sort//section-4' },
                { text: '第五节 归并、基数、计数排序', link: '/data structrue/content/sort//section-5' },
                { text: '第六节 内部排序', link: '/data structrue/content/sort//section-6' },
                { text: '第七节 外部排序', link: '/data structrue/content/sort//section-7' },
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

      '/computer-organization/content': [
        {
          text: '计算机组成原理',
          items: [
            { text: '408 计算机组成原理考点分析', link: '/computer-organization/content/exam-analysis' },
            {
              text: '第一章 计算机系统概述',
              link: '/computer-organization/content/introduction',
              items: [
                { text: '第一节 计算机系统层次结构', link: '/computer-organization/content/introduction-section-1' },
                { text: '第二节 计算机的性能指标', link: '/computer-organization/content/introduction-section-2' },
              ],
            },
            {
              text: '第二章 数据的表示和运算',
              link: '/computer-organization/content/data-representation-operation',
              items: [
                { text: '第一节 数制与编码', link: '/computer-organization/content/data-representation-operation-section-1' },
                { text: '第二节 运算方法和运算电路', link: '/computer-organization/content/data-representation-operation-section-2' },
                { text: '第三节 浮点数的表示与运算', link: '/computer-organization/content/data-representation-operation-section-3' },
              ],
            },
            {
              text: '第三章 存储系统',
              link: '/computer-organization/content/memory-system',
              items: [
                { text: '第一节 存储器概述', link: '/computer-organization/content/memory-system-section-1' },
                { text: '第二节 主存储器', link: '/computer-organization/content/memory-system-section-2' },
                { text: '第三节 主存储器与 CPU 的连接', link: '/computer-organization/content/memory-system-section-3' },
                { text: '第四节 外部存储器', link: '/computer-organization/content/memory-system-section-4' },
                { text: '第五节 高速缓冲存储器', link: '/computer-organization/content/memory-system-section-5' },
                { text: '第六节 虚拟存储器', link: '/computer-organization/content/memory-system-section-6' },
              ],
            },
            {
              text: '第四章 指令系统',
              link: '/computer-organization/content/instruction-system',
              items: [
                { text: '第一节 指令系统', link: '/computer-organization/content/instruction-system-section-1' },
                { text: '第二节 寻址方式', link: '/computer-organization/content/instruction-system-section-2' },
                { text: '第三节 程序的机器级代码表示', link: '/computer-organization/content/instruction-system-section-3' },
                { text: '第四节 CISC 和 RISC 的基本概念', link: '/computer-organization/content/instruction-system-section-4' },
              ],
            },
            {
              text: '第五章 中央处理器',
              link: '/computer-organization/content/cpu',
              items: [
                { text: '第一节 CPU 的功能和基本结构', link: '/computer-organization/content/cpu-section-1' },
                { text: '第二节 指令执行过程', link: '/computer-organization/content/cpu-section-2' },
                { text: '第三节 数据通路的功能和基本结构', link: '/computer-organization/content/cpu-section-3' },
                { text: '第四节 控制器的功能和工作原理', link: '/computer-organization/content/cpu-section-4' },
                { text: '第五节 异常和中断机制', link: '/computer-organization/content/cpu-section-5' },
                { text: '第六节 指令流水线', link: '/computer-organization/content/cpu-section-6' },
                { text: '第七节 多处理器的基本概念', link: '/computer-organization/content/cpu-section-7' },
              ],
            },
            {
              text: '第六章 总线',
              link: '/computer-organization/content/bus',
              items: [
                { text: '第一节 总线概述', link: '/computer-organization/content/bus-section-1' },
                { text: '第二节 总线事务和定时', link: '/computer-organization/content/bus-section-2' },
              ],
            },
            {
              text: '第七章 输入/输出系统',
              link: '/computer-organization/content/io-system',
              items: [
                { text: '第一节 I/O 接口', link: '/computer-organization/content/io-system-section-1' },
                { text: '第二节 I/O 方式', link: '/computer-organization/content/io-system-section-2' },
              ],
            },
          ]
        }
      ],

      '/computer-organization/practice': [
        {
          text: '计算机组成原理',
          items: [
            { text: '计组习题', link: '/computer-organization/practice/' },
            {
              text: '第一章 计算机系统概述',
              link: '/computer-organization/practice/introduction/',
              items: [
                { text: '第一节 计算机系统层次结构', link: '/computer-organization/practice/introduction/section-1' },
                { text: '第二节 计算机的性能指标', link: '/computer-organization/practice/introduction/section-2' },
              ],
            },
            {
              text: '第二章 数据的表示和运算',
              link: '/computer-organization/practice/data-representation-operation/',
              items: [
                { text: '第一节 数制与编码', link: '/computer-organization/practice/data-representation-operation/section-1' },
                { text: '第二节 运算方法和运算电路', link: '/computer-organization/practice/data-representation-operation/section-2' },
                { text: '第三节 浮点数的表示与运算', link: '/computer-organization/practice/data-representation-operation/section-3' },
              ],
            },
            {
              text: '第三章 存储系统',
              link: '/computer-organization/practice/memory-system/',
              items: [
                { text: '第一节 存储器概述', link: '/computer-organization/practice/memory-system/section-1' },
                { text: '第二节 主存储器', link: '/computer-organization/practice/memory-system/section-2' },
                { text: '第三节 主存储器与 CPU 的连接', link: '/computer-organization/practice/memory-system/section-3' },
                { text: '第四节 外部存储器', link: '/computer-organization/practice/memory-system/section-4' },
                { text: '第五节 高速缓冲存储器', link: '/computer-organization/practice/memory-system/section-5' },
                { text: '第六节 虚拟存储器', link: '/computer-organization/practice/memory-system/section-6' },
              ],
            },
            {
              text: '第四章 指令系统',
              link: '/computer-organization/practice/instruction-system/',
              items: [
                { text: '第一节 指令系统', link: '/computer-organization/practice/instruction-system/section-1' },
                { text: '第二节 寻址方式', link: '/computer-organization/practice/instruction-system/section-2' },
                { text: '第三节 程序的机器级代码表示', link: '/computer-organization/practice/instruction-system/section-3' },
                { text: '第四节 CISC 和 RISC 的基本概念', link: '/computer-organization/practice/instruction-system/section-4' },
              ],
            },
            {
              text: '第五章 中央处理器',
              link: '/computer-organization/practice/cpu/',
              items: [
                { text: '第一节 CPU 的功能和基本结构', link: '/computer-organization/practice/cpu/section-1' },
                { text: '第二节 指令执行过程', link: '/computer-organization/practice/cpu/section-2' },
                { text: '第三节 数据通路的功能和基本结构', link: '/computer-organization/practice/cpu/section-3' },
                { text: '第四节 控制器的功能和工作原理', link: '/computer-organization/practice/cpu/section-4' },
                { text: '第五节 异常和中断机制', link: '/computer-organization/practice/cpu/section-5' },
                { text: '第六节 指令流水线', link: '/computer-organization/practice/cpu/section-6' },
                { text: '第七节 多处理器的基本概念', link: '/computer-organization/practice/cpu/section-7' },
              ],
            },
            {
              text: '第六章 总线',
              link: '/computer-organization/practice/bus/',
              items: [
                { text: '第一节 总线概述', link: '/computer-organization/practice/bus/section-1' },
                { text: '第二节 总线事务和定时', link: '/computer-organization/practice/bus/section-2' },
              ],
            },
            {
              text: '第七章 输入/输出系统',
              link: '/computer-organization/practice/io-system/',
              items: [
                { text: '第一节 I/O 接口', link: '/computer-organization/practice/io-system/section-1' },
                { text: '第二节 I/O 方式', link: '/computer-organization/practice/io-system/section-2' },
              ],
            },
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
              link: '/advanced-math/content/function-limit-continuity/',
              items: [
                { text: '第一节 函数及其性质', link: '/advanced-math/content/function-limit-continuity/section-1' },
                { text: '第二节 数列极限与函数极限', link: '/advanced-math/content/function-limit-continuity/section-2' },
                { text: '第三节 无穷小量及无穷小的阶', link: '/advanced-math/content/function-limit-continuity/section-3' },
                { text: '第四节 极限计算', link: '/advanced-math/content/function-limit-continuity/section-4' },
                { text: '第五节 连续和间断', link: '/advanced-math/content/function-limit-continuity/section-5' },
                { text: '本章总结', link: '/advanced-math/content/function-limit-continuity/section-6' },
              ],
            },
            {
              text: '第二章 一元函数微分学',
              link: '/advanced-math/content/single-variable-differential-calculus/',
              items: [
                { text: '第一节 导数，导数和微分的计算', link: '/advanced-math/content/single-variable-differential-calculus/section-1' },
                { text: '第二节 中值定理，单调性和凹凸性', link: '/advanced-math/content/single-variable-differential-calculus/section-2' },
                { text: '第三节 渐近线和曲率、曲率半径', link: '/advanced-math/content/single-variable-differential-calculus/section-3' },
                { text: '本章总结', link: '/advanced-math/content/single-variable-differential-calculus/section-4' },
              ],
            },
            {
              text: '第三章 一元函数积分学',
              link: '/advanced-math/content/integral-calculus/',
              items: [
                { text: '第一节 原函数和不定积分', link: '/advanced-math/content/integral-calculus/section-1' },
                { text: '第二节 定积分定义及性质', link: '/advanced-math/content/integral-calculus/section-2' },
                { text: '第三节 变限积分及其导数', link: '/advanced-math/content/integral-calculus/section-3' },
                { text: '第四节 定积分的计算', link: '/advanced-math/content/integral-calculus/section-4' },
                { text: '第五节 定积分及其应用', link: '/advanced-math/content/integral-calculus/section-5' },
                { text: '第六节 反常积分的敛散性', link: '/advanced-math/content/integral-calculus/section-6' },
                { text: '第七节 积分的几何应用', link: '/advanced-math/content/integral-calculus/section-7' },
                { text: '本章总结', link: '/advanced-math/content/integral-calculus/section-8' },
              ],
            },
            {
              text: '第四章 多元函数微分学',
              link: '/advanced-math/content/multivariable-differential-calculus/',
              items: [
                { text: '第一节 多元函数的基本理论', link: '/advanced-math/content/multivariable-differential-calculus/section-1' },
                { text: '第二节 多元函数的偏导数', link: '/advanced-math/content/multivariable-differential-calculus/section-2' },
                { text: '第三节 多元函数微分的基本理论和计算', link: '/advanced-math/content/multivariable-differential-calculus/section-3' },
                { text: '第四节 多元函数的极值和最值', link: '/advanced-math/content/multivariable-differential-calculus/section-4' },
                { text: '本章总结', link: '/advanced-math/content/multivariable-differential-calculus/section-5' },
              ],
            },
            {
              text: '第五章 二重积分',
              link: '/advanced-math/content/double-integral/',
              items: [
                { text: '第一节 二重积分的概念和性质', link: '/advanced-math/content/double-integral/section-1' },
                { text: '第二节 二重积分的计算', link: '/advanced-math/content/double-integral/section-2' },
                { text: '第三节 二重积分的应用', link: '/advanced-math/content/double-integral/section-3' },
                { text: '本章总结', link: '/advanced-math/content/double-integral/section-4' },
              ],
            },
            {
              text: '第六章 常微分方程',
              link: '/advanced-math/content/differential-equations/',
              items: [
                { text: '第一节 一阶微分方程', link: '/advanced-math/content/differential-equations/section-1' },
                { text: '第二节 高阶微分方程', link: '/advanced-math/content/differential-equations/section-2' },
                { text: '第三节 微分方程综合题', link: '/advanced-math/content/differential-equations/section-3' },
                { text: '本章总结', link: '/advanced-math/content/differential-equations/section-4' },
              ],
            },
            { text: '高等数学总复习总结', link: '/advanced-math/content/advanced-math-summary' },
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
              link: '/advanced-math/practice/function-limit-continuity/',
              items: [
                { text: '第一节 函数及其性质', link: '/advanced-math/practice/function-limit-continuity/section-1' },
                { text: '第二节 数列极限与函数极限', link: '/advanced-math/practice/function-limit-continuity/section-2' },
                { text: '第三节 无穷小量及无穷小的阶', link: '/advanced-math/practice/function-limit-continuity/section-3' },
                { text: '第四节 极限计算', link: '/advanced-math/practice/function-limit-continuity/section-4' },
                { text: '第五节 连续和间断', link: '/advanced-math/practice/function-limit-continuity/section-5' },
                { text: '本章总结', link: '/advanced-math/practice/function-limit-continuity/section-6' },
              ],
            },
            {
              text: '第二章 一元函数微分学',
              link: '/advanced-math/practice/single-variable-differential-calculus/',
              items: [
                { text: '第一节 导数，导数和微分的计算', link: '/advanced-math/practice/single-variable-differential-calculus/section-1' },
                { text: '第二节 中值定理，单调性和凹凸性', link: '/advanced-math/practice/single-variable-differential-calculus/section-2' },
                { text: '第三节 渐近线和曲率、曲率半径', link: '/advanced-math/practice/single-variable-differential-calculus/section-3' },
                { text: '本章总结', link: '/advanced-math/practice/single-variable-differential-calculus/section-4' },
              ],
            },
            {
              text: '第三章 一元函数积分学',
              link: '/advanced-math/practice/integral-calculus/',
              items: [
                { text: '第一节 原函数和不定积分', link: '/advanced-math/practice/integral-calculus/section-1' },
                { text: '第二节 定积分定义及性质', link: '/advanced-math/practice/integral-calculus/section-2' },
                { text: '第三节 变限积分及其导数', link: '/advanced-math/practice/integral-calculus/section-3' },
                { text: '第四节 定积分的计算', link: '/advanced-math/practice/integral-calculus/section-4' },
                { text: '第五节 定积分及其应用', link: '/advanced-math/practice/integral-calculus/section-5' },
                { text: '第六节 反常积分的敛散性', link: '/advanced-math/practice/integral-calculus/section-6' },
                { text: '第七节 积分的几何应用', link: '/advanced-math/practice/integral-calculus/section-7' },
                { text: '本章总结', link: '/advanced-math/practice/integral-calculus/section-8' },
              ],
            },
            {
              text: '第四章 多元函数微分学',
              link: '/advanced-math/practice/multivariable-differential-calculus/',
              items: [
                { text: '第一节 多元函数的基本理论', link: '/advanced-math/practice/multivariable-differential-calculus/section-1' },
                { text: '第二节 多元函数的偏导数', link: '/advanced-math/practice/multivariable-differential-calculus/section-2' },
                { text: '第三节 多元函数微分的基本理论和计算', link: '/advanced-math/practice/multivariable-differential-calculus/section-3' },
                { text: '第四节 多元函数的极值和最值', link: '/advanced-math/practice/multivariable-differential-calculus/section-4' },
                { text: '本章总结', link: '/advanced-math/practice/multivariable-differential-calculus/section-5' },
              ],
            },
            {
              text: '第五章 二重积分',
              link: '/advanced-math/practice/double-integral/',
              items: [
                { text: '第一节 二重积分的概念和性质', link: '/advanced-math/practice/double-integral/section-1' },
                { text: '第二节 二重积分的计算', link: '/advanced-math/practice/double-integral/section-2' },
                { text: '第三节 二重积分的应用', link: '/advanced-math/practice/double-integral/section-3' },
                { text: '本章总结', link: '/advanced-math/practice/double-integral/section-4' },
              ],
            },
            {
              text: '第六章 常微分方程',
              link: '/advanced-math/practice/differential-equations/',
              items: [
                { text: '第一节 一阶微分方程', link: '/advanced-math/practice/differential-equations/section-1' },
                { text: '第二节 高阶微分方程', link: '/advanced-math/practice/differential-equations/section-2' },
                { text: '第三节 微分方程综合题', link: '/advanced-math/practice/differential-equations/section-3' },
                { text: '本章总结', link: '/advanced-math/practice/differential-equations/section-4' },
              ],
            },
            { text: '高等数学总复习总结', link: '/advanced-math/practice/advanced-math-summary' },
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
    config(md) {
      md.use(markdownItKatex)

      md.renderer.rules.math_inline = (tokens, idx) => {
        return katex.renderToString(tokens[idx].content, {
          displayMode: false,
          throwOnError: true,
          strict: 'ignore',
        })
      }

      md.renderer.rules.math_block = (tokens, idx) => {
        return `<p>${katex.renderToString(tokens[idx].content, {
          displayMode: true,
          throwOnError: true,
          strict: 'ignore',
        })}</p>\n`
      }
    },
  },
})

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
      { text: '操作系统',
        items: [
          { text: '考点', link: '/operating-system/content/' },
          { text: '例题', link: '/operating-system/practice/' },
        ],
      },
      { text: '计算机网络',
        items: [
          { text: '考点', link: '/computer-network/content/' },
          { text: '例题', link: '/computer-network/practice/' },
        ],
      },
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
      '/computer-network/content': [
        {
          text: '计算机网络',
          items: [
            { text: '计算机网络考点总览', link: '/computer-network/content/' },
            {
              text: '第一章 计算机网络体系结构',
              link: '/computer-network/content/network-architecture/',
              items: [
                { text: '第一节 网络概念、组成与分类', link: '/computer-network/content/network-architecture/section-1' },
                { text: '第二节 性能指标与时延', link: '/computer-network/content/network-architecture/section-2' },
                { text: '第三节 分层、协议与体系结构', link: '/computer-network/content/network-architecture/section-3' },
                { text: '本章总结', link: '/computer-network/content/network-architecture/section-4' },
              ],
            },
            {
              text: '第二章 物理层',
              link: '/computer-network/content/physical-layer/',
              items: [
                { text: '第一节 信号与编码', link: '/computer-network/content/physical-layer/section-1' },
                { text: '第二节 信道容量与传输方式', link: '/computer-network/content/physical-layer/section-2' },
                { text: '第三节 介质、复用与设备', link: '/computer-network/content/physical-layer/section-3' },
                { text: '本章总结', link: '/computer-network/content/physical-layer/section-4' },
              ],
            },
            {
              text: '第三章 数据链路层',
              link: '/computer-network/content/data-link-layer/',
              items: [
                { text: '第一节 成帧与差错检测', link: '/computer-network/content/data-link-layer/section-1' },
                { text: '第二节 流量控制与可靠传输', link: '/computer-network/content/data-link-layer/section-2' },
                { text: '第三节 介质访问控制', link: '/computer-network/content/data-link-layer/section-3' },
                { text: '第四节 局域网、无线局域网、广域网与 PPP', link: '/computer-network/content/data-link-layer/section-4' },
                { text: '本章总结', link: '/computer-network/content/data-link-layer/section-5' },
              ],
            },
            {
              text: '第四章 网络层',
              link: '/computer-network/content/network-layer/',
              items: [
                { text: '第一节 网络层功能、SDN、拥塞控制与 IPv4', link: '/computer-network/content/network-layer/section-1' },
                { text: '第二节 IPv4 地址与子网', link: '/computer-network/content/network-layer/section-2' },
                { text: '第三节 转发、网络协议与路由器', link: '/computer-network/content/network-layer/section-3' },
                { text: '第四节 路由算法与协议', link: '/computer-network/content/network-layer/section-4' },
                { text: '第五节 NAT、IPv6、组播与移动 IP', link: '/computer-network/content/network-layer/section-5' },
                { text: '本章总结', link: '/computer-network/content/network-layer/section-6' },
              ],
            },
            {
              text: '第五章 传输层',
              link: '/computer-network/content/transport-layer/',
              items: [
                { text: '第一节 传输服务与 UDP', link: '/computer-network/content/transport-layer/section-1' },
                { text: '第二节 TCP 可靠传输', link: '/computer-network/content/transport-layer/section-2' },
                { text: '第三节 流量与拥塞控制', link: '/computer-network/content/transport-layer/section-3' },
                { text: '第四节 TCP 连接管理', link: '/computer-network/content/transport-layer/section-4' },
                { text: '本章总结', link: '/computer-network/content/transport-layer/section-5' },
              ],
            },
            {
              text: '第六章 应用层',
              link: '/computer-network/content/application-layer/',
              items: [
                { text: '第一节 应用模型与套接字', link: '/computer-network/content/application-layer/section-1' },
                { text: '第二节 DNS', link: '/computer-network/content/application-layer/section-2' },
                { text: '第三节 HTTP', link: '/computer-network/content/application-layer/section-3' },
                { text: '第四节 电子邮件与 FTP', link: '/computer-network/content/application-layer/section-4' },
                { text: '本章总结', link: '/computer-network/content/application-layer/section-5' },
              ],
            },
          ],
        },
      ],

      '/computer-network/practice': [
        {
          text: '计算机网络',
          items: [
            { text: '计算机网络例题总览', link: '/computer-network/practice/' },
            {
              text: '第一章 计算机网络体系结构',
              link: '/computer-network/practice/network-architecture/',
              items: [
                { text: '第一节 网络组成与分类', link: '/computer-network/practice/network-architecture/section-1' },
                { text: '第二节 性能指标与时延', link: '/computer-network/practice/network-architecture/section-2' },
                { text: '第三节 分层与协议', link: '/computer-network/practice/network-architecture/section-3' },
                { text: '综合训练', link: '/computer-network/practice/network-architecture/section-4' },
              ],
            },
            {
              text: '第二章 物理层',
              link: '/computer-network/practice/physical-layer/',
              items: [
                { text: '第一节 信号、码元与编码', link: '/computer-network/practice/physical-layer/section-1' },
                { text: '第二节 信道容量与传输方式', link: '/computer-network/practice/physical-layer/section-2' },
                { text: '第三节 介质、复用与设备', link: '/computer-network/practice/physical-layer/section-3' },
                { text: '综合训练', link: '/computer-network/practice/physical-layer/section-4' },
              ],
            },
            {
              text: '第三章 数据链路层',
              link: '/computer-network/practice/data-link-layer/',
              items: [
                { text: '第一节 成帧与差错检测', link: '/computer-network/practice/data-link-layer/section-1' },
                { text: '第二节 流量控制与可靠传输', link: '/computer-network/practice/data-link-layer/section-2' },
                { text: '第三节 介质访问控制', link: '/computer-network/practice/data-link-layer/section-3' },
                { text: '第四节 局域网、无线局域网、广域网与 PPP', link: '/computer-network/practice/data-link-layer/section-4' },
                { text: '综合训练', link: '/computer-network/practice/data-link-layer/section-5' },
              ],
            },
            {
              text: '第四章 网络层',
              link: '/computer-network/practice/network-layer/',
              items: [
                { text: '第一节 网络层功能与 IPv4 数据报', link: '/computer-network/practice/network-layer/section-1' },
                { text: '第二节 IPv4 地址与子网', link: '/computer-network/practice/network-layer/section-2' },
                { text: '第三节 转发、ARP、DHCP 与 ICMP', link: '/computer-network/practice/network-layer/section-3' },
                { text: '第四节 路由算法与协议', link: '/computer-network/practice/network-layer/section-4' },
                { text: '第五节 NAT、IPv6 与移动 IP', link: '/computer-network/practice/network-layer/section-5' },
                { text: '综合训练', link: '/computer-network/practice/network-layer/section-6' },
              ],
            },
            {
              text: '第五章 传输层',
              link: '/computer-network/practice/transport-layer/',
              items: [
                { text: '第一节 传输服务与 UDP', link: '/computer-network/practice/transport-layer/section-1' },
                { text: '第二节 TCP 可靠传输', link: '/computer-network/practice/transport-layer/section-2' },
                { text: '第三节 流量与拥塞控制', link: '/computer-network/practice/transport-layer/section-3' },
                { text: '第四节 TCP 连接管理', link: '/computer-network/practice/transport-layer/section-4' },
                { text: '综合训练', link: '/computer-network/practice/transport-layer/section-5' },
              ],
            },
            {
              text: '第六章 应用层',
              link: '/computer-network/practice/application-layer/',
              items: [
                { text: '第一节 应用模型与套接字', link: '/computer-network/practice/application-layer/section-1' },
                { text: '第二节 DNS', link: '/computer-network/practice/application-layer/section-2' },
                { text: '第三节 HTTP', link: '/computer-network/practice/application-layer/section-3' },
                { text: '第四节 电子邮件与 FTP', link: '/computer-network/practice/application-layer/section-4' },
                { text: '综合训练', link: '/computer-network/practice/application-layer/section-5' },
              ],
            },
          ],
        },
      ],

      '/operating-system/content': [
        {
          text: '操作系统',
          items: [
            { text: '操作系统考点总览', link: '/operating-system/content/' },
            {
              text: '第一章 计算机系统概述',
              link: '/operating-system/content/computer-system-overview/',
              items: [
                { text: '第一节 概念、功能与特征', link: '/operating-system/content/computer-system-overview/section-1' },
                { text: '第二节 运行环境与中断', link: '/operating-system/content/computer-system-overview/section-2' },
                { text: '第三节 系统调用、结构、引导与虚拟机', link: '/operating-system/content/computer-system-overview/section-3' },
                { text: '本章总结', link: '/operating-system/content/computer-system-overview/section-4' },
              ],
            },
            {
              text: '第二章 进程与线程',
              link: '/operating-system/content/processes-threads/',
              items: [
                { text: '第一节 进程、线程与状态', link: '/operating-system/content/processes-threads/section-1' },
                { text: '第二节 处理机调度', link: '/operating-system/content/processes-threads/section-2' },
                { text: '第三节 同步与互斥', link: '/operating-system/content/processes-threads/section-3' },
                { text: '第四节 通信与死锁', link: '/operating-system/content/processes-threads/section-4' },
                { text: '本章总结', link: '/operating-system/content/processes-threads/section-5' },
              ],
            },
            {
              text: '第三章 内存管理',
              link: '/operating-system/content/memory-management/',
              items: [
                { text: '第一节 基础与连续分配', link: '/operating-system/content/memory-management/section-1' },
                { text: '第二节 分页、分段与地址转换', link: '/operating-system/content/memory-management/section-2' },
                { text: '第三节 虚拟内存与请求分页', link: '/operating-system/content/memory-management/section-3' },
                { text: '第四节 页面置换与抖动', link: '/operating-system/content/memory-management/section-4' },
                { text: '本章总结', link: '/operating-system/content/memory-management/section-5' },
              ],
            },
            {
              text: '第四章 文件管理',
              link: '/operating-system/content/file-management/',
              items: [
                { text: '第一节 文件、目录与打开文件', link: '/operating-system/content/file-management/section-1' },
                { text: '第二节 逻辑与物理结构', link: '/operating-system/content/file-management/section-2' },
                { text: '第三节 空间管理、VFS 与挂载', link: '/operating-system/content/file-management/section-3' },
                { text: '本章总结', link: '/operating-system/content/file-management/section-4' },
              ],
            },
            {
              text: '第五章 输入/输出管理',
              link: '/operating-system/content/io-management/',
              items: [
                { text: '第一节 I/O 控制与驱动', link: '/operating-system/content/io-management/section-1' },
                { text: '第二节 缓冲、分配与 SPOOLing', link: '/operating-system/content/io-management/section-2' },
                { text: '第三节 磁盘调度', link: '/operating-system/content/io-management/section-3' },
                { text: '本章总结', link: '/operating-system/content/io-management/section-4' },
              ],
            },
          ],
        },
      ],

      '/operating-system/practice': [
        {
          text: '操作系统',
          items: [
            { text: '操作系统例题总览', link: '/operating-system/practice/' },
            {
              text: '第一章 计算机系统概述',
              link: '/operating-system/practice/computer-system-overview/',
              items: [
                { text: '第一节 概念、功能与特征', link: '/operating-system/practice/computer-system-overview/section-1' },
                { text: '第二节 运行环境与中断', link: '/operating-system/practice/computer-system-overview/section-2' },
                { text: '第三节 系统调用与系统结构', link: '/operating-system/practice/computer-system-overview/section-3' },
                { text: '综合训练', link: '/operating-system/practice/computer-system-overview/section-4' },
              ],
            },
            {
              text: '第二章 进程与线程',
              link: '/operating-system/practice/processes-threads/',
              items: [
                { text: '第一节 进程、线程与状态', link: '/operating-system/practice/processes-threads/section-1' },
                { text: '第二节 处理机调度', link: '/operating-system/practice/processes-threads/section-2' },
                { text: '第三节 同步与互斥', link: '/operating-system/practice/processes-threads/section-3' },
                { text: '第四节 通信与死锁', link: '/operating-system/practice/processes-threads/section-4' },
                { text: '综合训练', link: '/operating-system/practice/processes-threads/section-5' },
              ],
            },
            {
              text: '第三章 内存管理',
              link: '/operating-system/practice/memory-management/',
              items: [
                { text: '第一节 基础与连续分配', link: '/operating-system/practice/memory-management/section-1' },
                { text: '第二节 分页、分段与地址转换', link: '/operating-system/practice/memory-management/section-2' },
                { text: '第三节 虚拟内存与请求分页', link: '/operating-system/practice/memory-management/section-3' },
                { text: '第四节 页面置换与抖动', link: '/operating-system/practice/memory-management/section-4' },
                { text: '综合训练', link: '/operating-system/practice/memory-management/section-5' },
              ],
            },
            {
              text: '第四章 文件管理',
              link: '/operating-system/practice/file-management/',
              items: [
                { text: '第一节 文件、目录与打开文件', link: '/operating-system/practice/file-management/section-1' },
                { text: '第二节 逻辑与物理结构', link: '/operating-system/practice/file-management/section-2' },
                { text: '第三节 空间管理、VFS 与挂载', link: '/operating-system/practice/file-management/section-3' },
                { text: '综合训练', link: '/operating-system/practice/file-management/section-4' },
              ],
            },
            {
              text: '第五章 输入/输出管理',
              link: '/operating-system/practice/io-management/',
              items: [
                { text: '第一节 I/O 控制与驱动', link: '/operating-system/practice/io-management/section-1' },
                { text: '第二节 缓冲、分配与 SPOOLing', link: '/operating-system/practice/io-management/section-2' },
                { text: '第三节 磁盘调度', link: '/operating-system/practice/io-management/section-3' },
                { text: '综合训练', link: '/operating-system/practice/io-management/section-4' },
              ],
            },
          ],
        },
      ],

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
            {
              text: '第一章 行列式',
              link: '/linear-algebra/content/determinants/',
              items: [
                { text: '第一节 概念与基本计算', link: '/linear-algebra/content/determinants/section-1' },
                { text: '第二节 性质与展开定理', link: '/linear-algebra/content/determinants/section-2' },
                { text: '第三节 特殊行列式与克拉默法则', link: '/linear-algebra/content/determinants/section-3' },
                { text: '本章总结', link: '/linear-algebra/content/determinants/section-4' },
              ],
            },
            {
              text: '第二章 矩阵',
              link: '/linear-algebra/content/matrices/',
              items: [
                { text: '第一节 矩阵运算与特殊矩阵', link: '/linear-algebra/content/matrices/section-1' },
                { text: '第二节 逆矩阵与伴随矩阵', link: '/linear-algebra/content/matrices/section-2' },
                { text: '第三节 初等变换、等价与秩', link: '/linear-algebra/content/matrices/section-3' },
                { text: '第四节 分块矩阵与矩阵方程', link: '/linear-algebra/content/matrices/section-4' },
                { text: '本章总结', link: '/linear-algebra/content/matrices/section-5' },
              ],
            },
            {
              text: '第三章 向量',
              link: '/linear-algebra/content/vectors/',
              items: [
                { text: '第一节 线性组合与向量组等价', link: '/linear-algebra/content/vectors/section-1' },
                { text: '第二节 线性相关与极大无关组', link: '/linear-algebra/content/vectors/section-2' },
                { text: '第三节 内积与正交规范化', link: '/linear-algebra/content/vectors/section-3' },
                { text: '本章总结', link: '/linear-algebra/content/vectors/section-4' },
              ],
            },
            {
              text: '第四章 线性方程组',
              link: '/linear-algebra/content/linear-systems/',
              items: [
                { text: '第一节 解的判定与高斯消元', link: '/linear-algebra/content/linear-systems/section-1' },
                { text: '第二节 齐次线性方程组', link: '/linear-algebra/content/linear-systems/section-2' },
                { text: '第三节 非齐次线性方程组', link: '/linear-algebra/content/linear-systems/section-3' },
                { text: '第四节 含参数方程组', link: '/linear-algebra/content/linear-systems/section-4' },
                { text: '本章总结', link: '/linear-algebra/content/linear-systems/section-5' },
              ],
            },
            {
              text: '第五章 特征值和特征向量',
              link: '/linear-algebra/content/eigenvalues-eigenvectors/',
              items: [
                { text: '第一节 特征值与特征向量', link: '/linear-algebra/content/eigenvalues-eigenvectors/section-1' },
                { text: '第二节 性质与相似矩阵', link: '/linear-algebra/content/eigenvalues-eigenvectors/section-2' },
                { text: '第三节 相似对角化', link: '/linear-algebra/content/eigenvalues-eigenvectors/section-3' },
                { text: '第四节 实对称矩阵', link: '/linear-algebra/content/eigenvalues-eigenvectors/section-4' },
                { text: '本章总结', link: '/linear-algebra/content/eigenvalues-eigenvectors/section-5' },
              ],
            },
            {
              text: '第六章 二次型',
              link: '/linear-algebra/content/quadratic-forms/',
              items: [
                { text: '第一节 矩阵表示', link: '/linear-algebra/content/quadratic-forms/section-1' },
                { text: '第二节 标准形与规范形', link: '/linear-algebra/content/quadratic-forms/section-2' },
                { text: '第三节 正交变换与惯性定理', link: '/linear-algebra/content/quadratic-forms/section-3' },
                { text: '第四节 正定性', link: '/linear-algebra/content/quadratic-forms/section-4' },
                { text: '本章总结', link: '/linear-algebra/content/quadratic-forms/section-5' },
              ],
            },
          ]
        }
      ],

      '/linear-algebra/practice': [
        {
          text: '线性代数',
          items: [
            { text: '线代例题', link: '/linear-algebra/practice/' },
            {
              text: '第一章 行列式',
              link: '/linear-algebra/practice/determinants/',
              items: [
                { text: '第一节 基本计算', link: '/linear-algebra/practice/determinants/section-1' },
                { text: '第二节 性质与展开', link: '/linear-algebra/practice/determinants/section-2' },
                { text: '第三节 特殊行列式与克拉默法则', link: '/linear-algebra/practice/determinants/section-3' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/determinants/section-4' },
              ],
            },
            {
              text: '第二章 矩阵',
              link: '/linear-algebra/practice/matrices/',
              items: [
                { text: '第一节 矩阵运算', link: '/linear-algebra/practice/matrices/section-1' },
                { text: '第二节 逆矩阵与伴随矩阵', link: '/linear-algebra/practice/matrices/section-2' },
                { text: '第三节 初等变换、等价与秩', link: '/linear-algebra/practice/matrices/section-3' },
                { text: '第四节 分块矩阵与矩阵方程', link: '/linear-algebra/practice/matrices/section-4' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/matrices/section-5' },
              ],
            },
            {
              text: '第三章 向量',
              link: '/linear-algebra/practice/vectors/',
              items: [
                { text: '第一节 线性组合与等价', link: '/linear-algebra/practice/vectors/section-1' },
                { text: '第二节 线性相关与极大无关组', link: '/linear-algebra/practice/vectors/section-2' },
                { text: '第三节 内积与正交规范化', link: '/linear-algebra/practice/vectors/section-3' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/vectors/section-4' },
              ],
            },
            {
              text: '第四章 线性方程组',
              link: '/linear-algebra/practice/linear-systems/',
              items: [
                { text: '第一节 解的判定与消元', link: '/linear-algebra/practice/linear-systems/section-1' },
                { text: '第二节 齐次方程组', link: '/linear-algebra/practice/linear-systems/section-2' },
                { text: '第三节 非齐次方程组', link: '/linear-algebra/practice/linear-systems/section-3' },
                { text: '第四节 含参数方程组', link: '/linear-algebra/practice/linear-systems/section-4' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/linear-systems/section-5' },
              ],
            },
            {
              text: '第五章 特征值和特征向量',
              link: '/linear-algebra/practice/eigenvalues-eigenvectors/',
              items: [
                { text: '第一节 特征值与特征向量', link: '/linear-algebra/practice/eigenvalues-eigenvectors/section-1' },
                { text: '第二节 性质与相似矩阵', link: '/linear-algebra/practice/eigenvalues-eigenvectors/section-2' },
                { text: '第三节 相似对角化', link: '/linear-algebra/practice/eigenvalues-eigenvectors/section-3' },
                { text: '第四节 实对称矩阵', link: '/linear-algebra/practice/eigenvalues-eigenvectors/section-4' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/eigenvalues-eigenvectors/section-5' },
              ],
            },
            {
              text: '第六章 二次型',
              link: '/linear-algebra/practice/quadratic-forms/',
              items: [
                { text: '第一节 矩阵表示', link: '/linear-algebra/practice/quadratic-forms/section-1' },
                { text: '第二节 标准形与规范形', link: '/linear-algebra/practice/quadratic-forms/section-2' },
                { text: '第三节 正交变换与惯性定理', link: '/linear-algebra/practice/quadratic-forms/section-3' },
                { text: '第四节 正定性', link: '/linear-algebra/practice/quadratic-forms/section-4' },
                { text: '综合训练与答题技巧', link: '/linear-algebra/practice/quadratic-forms/section-5' },
              ],
            },
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

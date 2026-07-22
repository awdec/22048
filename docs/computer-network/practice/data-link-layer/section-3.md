<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 介质访问控制</center></h1>

::: info 例 1
共享以太网单程最大传播时延为 $25.6\,\mu\mathrm{s}$，速率为 $10\text{ Mbps}$，保证检测冲突的最短帧是多少比特？
:::

::: details 解析
帧发送时间至少为往返传播时延：
$$
L_{min}=R\times2\tau
=10^7\times51.2\times10^{-6}=512\text{ bit}.
$$
即 64 字节。
:::

::: info 例 2
为什么无线局域网使用 CSMA/CA 而不是 CSMA/CD？
:::

::: details 解析
无线站点发送信号远强于接收信号，难以边发送边检测碰撞，且存在隐蔽站。因此采用监听、退避、确认和可选 RTS/CTS 来避免冲突。
:::

::: info 例 3
全双工交换式以太网需要执行二进制指数退避吗？
:::

::: details 解析
不需要。每条链路点对点且收发方向独立，没有共享介质冲突，因此不使用 CSMA/CD 和退避算法。
:::

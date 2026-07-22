<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 转发、ARP、DHCP 与 ICMP</center></h1>

::: info 例 1
主机 A 向不同子网的主机 B 发送数据，A 构造的第一个以太网帧中目的 MAC 是谁？IP 目的地址是谁？
:::

::: details 解析
帧目的 MAC 是 A 的默认网关接口 MAC；IP 目的地址始终是最终主机 B 的 IP（无 NAT 时）。
:::

::: info 例 2
ARP 请求为什么广播，而 ARP 应答通常单播？
:::

::: details 解析
请求方只知道目标 IP，不知道其 MAC，需要询问整个本地广播域；目标从请求帧中已知请求方 MAC，因此可直接单播回复。
:::

::: info 例 3
写出 DHCP 四步交互顺序。
:::

::: details 解析
```text
Discover → Offer → Request → ACK
```
客户端通常使用 UDP 68，服务器使用 UDP 67。
:::

::: info 例 4
traceroute 为什么能发现路径上的路由器？
:::

::: details 解析
它发送 TTL 逐步增加的探测分组。TTL 在某路由器减为 0 时，路由器返回 ICMP 时间超过报文，源主机据此获得该跳地址。
:::

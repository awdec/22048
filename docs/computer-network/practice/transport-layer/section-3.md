<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 流量与拥塞控制</center></h1>

::: info 例 1
接收窗口 rwnd 为 $12\text{ KB}$，拥塞窗口 cwnd 为 $8\text{ KB}$，发送方未确认数据为 $3\text{ KB}$，还能继续发送多少？
:::

::: details 解析
实际窗口为：
$$
\min(12,8)=8\text{ KB}.
$$
已有 $3\text{ KB}$ 在途，还可发送 $8-3=5\text{ KB}$。
:::

::: info 例 2
cwnd 初始为 1 MSS，慢开始期间无丢包，经过 4 个 RTT 后约为多少？
:::

::: details 解析
按每 RTT 近似翻倍：
$$
1\rightarrow2\rightarrow4\rightarrow8\rightarrow16\text{ MSS}.
$$
前提是未提前达到 ssthresh。
:::

::: info 例 3
接收方通告零窗口后，窗口更新报文丢失，TCP 如何避免永久等待？
:::

::: details 解析
发送方启动持续计时器，超时后发送零窗口探测，促使接收方重新通告当前窗口。
:::

::: info 例 4
流量控制与拥塞控制分别保护谁？
:::

::: details 解析
流量控制保护接收端缓存和处理能力，主要由 rwnd 实现；拥塞控制保护网络整体，主要由 cwnd 和拥塞算法实现。
:::

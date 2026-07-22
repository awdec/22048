<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 性能指标与时延</center></h1>

::: info 例 1
在 $10\text{ Mbps}$ 链路上发送一个 $1500\text{ B}$ 分组，求发送时延。
:::

::: details 解析
$$
d_{trans}=\frac{1500\times8}{10\times10^6}
=1.2\text{ ms}.
$$
:::

::: info 例 2
链路长 $2000\text{ km}$，传播速度为 $2\times10^8\text{ m/s}$，求传播时延。
:::

::: details 解析
$$
d_{prop}=\frac{2\times10^6}{2\times10^8}
=0.01\text{ s}=10\text{ ms}.
$$
:::

::: info 例 3
一条 $100\text{ Mbps}$ 链路的单程传播时延为 $20\text{ ms}$，求时延带宽积。
:::

::: details 解析
$$
100\times10^6\times20\times10^{-3}
=2\times10^6\text{ bit}.
$$
即链路中可同时“飞行”约 $2$ Mbit 数据。
:::

::: info 例 4
两条串联链路速率分别为 $100\text{ Mbps}$ 和 $10\text{ Mbps}$，忽略其他限制，稳定端到端吞吐量上限是多少？
:::

::: details 解析
不超过瓶颈链路 $10\text{ Mbps}$。
:::

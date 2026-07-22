<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 信号、码元与编码</center></h1>

::: info 例 1
某系统码元率为 $2400$ Baud，每个码元有 $8$ 种状态，求数据率。
:::

::: details 解析
每码元携带 $\log_2 8=3$ bit：
$$
R_b=2400\times3=7200\text{ bit/s}.
$$
:::

::: info 例 2
传输 $10\text{ Mbps}$ 数据采用曼彻斯特编码，所需码元速率是多少？
:::

::: details 解析
曼彻斯特编码每个比特包含两个信号状态间隔，码元速率为数据率的两倍，即 $20$ Mbaud。
:::

::: info 例 3
4B/5B 编码传输 $80\text{ Mbps}$ 有效数据时，线路编码速率是多少？
:::

::: details 解析
编码效率为 $4/5$：
$$
R=80\times\frac54=100\text{ Mbps}.
$$
:::

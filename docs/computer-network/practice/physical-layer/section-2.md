<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 信道容量与传输方式</center></h1>

::: info 例 1
无噪声信道带宽为 $3\text{ kHz}$，采用 16 种码元状态，按奈奎斯特定理求最高数据率。
:::

::: details 解析
$$
R_b=2W\log_2M
=2\times3000\times4
=24\text{ kbps}.
$$
:::

::: info 例 2
信道带宽 $1\text{ MHz}$，信噪比为 $30\text{ dB}$，按香农定理估算容量。
:::

::: details 解析
$$
S/N=10^{30/10}=1000.
$$
$$
C=10^6\log_2(1001)\approx9.97\text{ Mbps}.
$$
:::

::: info 例 3
对讲机双方都能发送但不能同时发送，属于哪种通信方式？
:::

::: details 解析
属于半双工。单工只能单向，全双工允许双方同时发送。
:::

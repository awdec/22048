<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二章综合训练</center></h1>

::: info 综合题
某无噪声信道带宽为 $4\text{ kHz}$，要求数据率达到 $24\text{ kbps}$，至少需要多少种码元状态？
:::

::: details 解析
由奈奎斯特公式：
$$
24000\le2\times4000\log_2M,
$$
$$
\log_2M\ge3.
$$
所以至少 $M=8$ 种状态。
:::

## 答题技巧

- Baud 与 bit/s 转换先求每码元比特数。
- 奈奎斯特使用 Hz 和码元状态数，香农使用无量纲 $S/N$。
- 设备是否能按地址过滤，是区分物理层设备和链路层设备的关键。

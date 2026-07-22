<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三章综合训练</center></h1>

::: info 综合题
发送窗口为 4，数据帧发送时延为 $2\text{ ms}$，单程传播时延为 $3\text{ ms}$，忽略 ACK 发送时延，求流水线协议的最大信道利用率。
:::

::: details 解析
$$
U=\min\left(1,\frac{W T_d}{T_d+2T_p}\right)
=\min\left(1,\frac{4\times2}{2+6}\right)=1.
$$
发送方可连续发送 4 帧，恰好填满等待周期。
:::

## 答题技巧

- CRC 用模 2 异或长除，不做普通减法。
- 窗口题先写序号空间限制，再看超时重传范围。
- 交换机题固定顺序：学源地址、查目的地址、转发/泛洪/过滤。

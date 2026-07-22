<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 传输服务与 UDP</center></h1>

::: info 例 1
同一 Web 服务器的 80 端口能否同时服务多个客户端？
:::

::: details 解析
可以。不同 TCP 连接由源 IP、源端口、目的 IP、目的端口四元组区分，服务器目的端口可以相同。
:::

::: info 例 2
UDP 数据部分为 $1000\text{ B}$，UDP 数据报总长度是多少？
:::

::: details 解析
UDP 首部固定 8 字节：
$$
1000+8=1008\text{ B}.
$$
:::

::: info 例 3
UDP 校验和伪首部是否会作为数据在网络上传输？
:::

::: details 解析
不会。伪首部只在发送端和接收端参与校验和计算，用于检查源/目的 IP、协议号和 UDP 长度等信息，不属于实际 UDP 报文。
:::

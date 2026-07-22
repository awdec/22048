<style>
 body { font-family: "楷体" }
</style>

<h1><center>第六章综合训练</center></h1>

::: info 综合题
浏览器首次访问某域名，DNS 缓存均未命中；忽略传输时间，本地 DNS 完成解析耗时 $3RTT_{DNS}$，随后通过非持续 HTTP 获取一个对象。总时延近似是多少？
:::

::: details 解析
DNS 解析耗时 $3RTT_{DNS}$。非持续 HTTP 需约一个 $RTT_{TCP}$ 建立 TCP，再一个 $RTT_{HTTP}$ 完成请求到响应首字节：
$$
T\approx3RTT_{DNS}+RTT_{TCP}+RTT_{HTTP}.
$$
若端到端 RTT 相同，可简化为约 $5RTT$。
:::

## 答题技巧

- 先区分域名解析、连接建立和应用请求三个阶段。
- 端口题同时记协议和 TCP/UDP，不能只背数字。
- HTTP 时延题明确持续/非持续、串行/并行及是否忽略传输时间。

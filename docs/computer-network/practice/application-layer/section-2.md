<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 DNS</center></h1>

::: info 例 1
把域名映射到 IPv4 和 IPv6 地址分别使用什么记录？
:::

::: details 解析
IPv4 使用 A 记录，IPv6 使用 AAAA 记录。
:::

::: info 例 2
本地 DNS 缓存中已有有效记录，客户端解析域名还需要查询根服务器吗？
:::

::: details 解析
不需要。本地 DNS 可直接返回缓存结果，直到记录 TTL 到期或被更新清除。
:::

::: info 例 3
DNS 是否只使用 UDP 53？
:::

::: details 解析
不是。普通短查询通常使用 UDP 53；区域传送、响应过大或需要可靠传输时可使用 TCP 53。
:::

::: info 例 4
客户端让本地 DNS 必须返回最终结果，这属于递归还是迭代查询？
:::

::: details 解析
属于递归查询。本地 DNS 对其他服务器通常采用迭代查询，逐步获得下一步转介。
:::

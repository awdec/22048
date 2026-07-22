<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 万维网与 HTTP</center></h1>

## 1. URL

统一资源定位符通常包含：

```text
scheme://host:port/path?query#fragment
```

HTTP 默认端口为 80。

## 2. HTTP 特点

HTTP 是无状态的请求—响应协议。服务器默认不保存客户端应用状态，可通过 Cookie、会话标识和令牌等实现状态管理。

常见方法：GET、HEAD、POST、PUT、DELETE。

常见状态码类别：

- 2xx：成功。
- 3xx：重定向。
- 4xx：客户端错误。
- 5xx：服务器错误。

## 3. 非持续与持续连接

- 非持续 HTTP：每个对象通常单独建立 TCP 连接。
- 持续 HTTP：多个对象复用同一连接，减少握手和慢开始开销。

不考虑 DNS、传输时间和并行连接，非持续 HTTP 获取一个对象常至少需要约 $2RTT$：一个 RTT 建立 TCP，一个 RTT 发送请求并收到首字节响应。

## 4. HTTP 报文结构

HTTP 请求报文由请求行、首部行、空行和可选实体主体组成；响应报文由状态行、首部行、空行和可选实体主体组成。

请求行给出方法、资源路径和 HTTP 版本；状态行给出版本、状态码和原因短语。HTTP/1.1 默认使用持续连接，可在一条 TCP 连接上传输多个对象。

## 5. Cookie

Cookie 机制包含响应中的 Set-Cookie、客户端保存的 Cookie、后续请求中的 Cookie 首部，以及服务器端可能维护的关联数据库。

## 6. Web 缓存

代理缓存可就近返回对象，降低响应时延和出口链路负载。条件请求可用 `If-Modified-Since` 或实体标签验证缓存是否仍有效，未修改时服务器返回 `304 Not Modified`。

::: warning 易错点
HTTP 无状态描述协议本身不自动保存会话，不表示 TCP 连接必须每次断开；持续连接与状态管理是两个不同维度。
:::

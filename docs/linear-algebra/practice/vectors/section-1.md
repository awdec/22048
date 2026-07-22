<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 线性组合与向量组等价</center></h1>

::: info 例 1
判断 $\boldsymbol\beta=(3,1)^T$ 能否由 $\boldsymbol\alpha_1=(1,1)^T$、$\boldsymbol\alpha_2=(2,-1)^T$ 线性表示。
:::

::: details 解析
设 $\boldsymbol\beta=k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2$，则：
$$
\begin{cases}k_1+2k_2=3,\\k_1-k_2=1.
\end{cases}
$$
解得 $k_1=\frac53,k_2=\frac23$，故可以线性表示，且因 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，表示唯一。
:::

::: info 例 2
若向量组（Ⅱ）可由向量组（Ⅰ）线性表示，证明向量组（Ⅱ）的秩不超过向量组（Ⅰ）的秩。
:::

::: details 解析
设两向量组组成的矩阵分别为 $B,A$。由题意存在矩阵 $C$ 使 $B=AC$，于是：
$$
r(B)=r(AC)\le r(A).
$$
:::

::: info 例 3
两个向量组的秩都为 $2$，它们一定等价吗？
:::

::: details 解析
不一定。例如在 $\mathbb R^3$ 中，$(\boldsymbol e_1,\boldsymbol e_2)$ 与 $(\boldsymbol e_2,\boldsymbol e_3)$ 的秩都为 $2$，但张成的平面不同，故不等价。
:::

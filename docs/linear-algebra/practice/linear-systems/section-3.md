<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 非齐次线性方程组</center></h1>

::: info 例 1
设 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是 $A\boldsymbol x=\boldsymbol b$ 的两个解，证明 $\boldsymbol\eta_1-\boldsymbol\eta_2$ 是 $A\boldsymbol x=0$ 的解。
:::

::: details 解析
$$
A(\boldsymbol\eta_1-\boldsymbol\eta_2)
=A\boldsymbol\eta_1-A\boldsymbol\eta_2
=\boldsymbol b-\boldsymbol b=0.
$$
:::

::: info 例 2
已知非齐次方程组的一个特解为 $\boldsymbol\eta^*=(1,0,2)^T$，对应齐次方程组的基础解系为 $\boldsymbol\xi=(-1,1,0)^T$，写出通解。
:::

::: details 解析
$$
\boldsymbol x=\boldsymbol\eta^*+c\boldsymbol\xi
=(1,0,2)^T+c(-1,1,0)^T.
$$
:::

::: info 例 3
若 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$ 都是同一非齐次方程组的解，判断 $2\boldsymbol\eta_1-\boldsymbol\eta_2$ 与 $\boldsymbol\eta_1+\boldsymbol\eta_2-2\boldsymbol\eta_3$ 分别是什么解。
:::

::: details 解析
第一组系数和为 $1$，故仍为原非齐次方程组的解；第二组系数和为 $0$，故为对应齐次方程组的解。
:::

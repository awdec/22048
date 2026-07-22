<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 解的判定与消元</center></h1>

::: info 例 1
设三元方程组的 $r(A)=2$、$r(A,\boldsymbol b)=3$，判断解的情况。
:::

::: details 解析
两个秩不相等，故方程组无解。
:::

::: info 例 2
解方程组：
$$
\begin{cases}
x+y+z=2,\\
2x+y-z=1,\\
x+2y+4z=5.
\end{cases}
$$
:::

::: details 解析
增广矩阵消元可得：
$$
\begin{pmatrix}1&0&-2&-1\\0&1&3&3\\0&0&0&0\end{pmatrix}.
$$
令 $z=t$，则：
$$
x=-1+2t,\qquad y=3-3t.
$$
通解为：
$$
\boldsymbol x=(-1,3,0)^T+t(2,-3,1)^T.
$$
:::

::: info 例 3
四元非齐次方程组满足 $r(A)=r(A,\boldsymbol b)=4$，有几个自由变量？
:::

::: details 解析
自由变量个数为 $n-r(A)=4-4=0$，方程组有唯一解。
:::

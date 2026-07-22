<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四节 含参数方程组</center></h1>

::: info 例 1
讨论方程组：
$$
\begin{cases}
x+y=1,\\
x+ay=2
\end{cases}
$$
的解。
:::

::: details 解析
两式相减得：
$$
(a-1)y=1.
$$
- $a\ne1$ 时，唯一解 $y=\frac1{a-1}$，$x=1-y$。
- $a=1$ 时，左端两个方程相同而右端不同，方程组无解。
:::

::: info 例 2
讨论齐次方程组：
$$
\begin{cases}
x+ay=0,\\
ax+y=0
\end{cases}
$$
何时有非零解。
:::

::: details 解析
系数行列式：
$$
\begin{vmatrix}1&a\\a&1\end{vmatrix}=1-a^2.
$$
有非零解当且仅当 $1-a^2=0$，即 $a=\pm1$。
:::

::: info 例 3
矩阵方程 $AX=B$ 有解的秩条件是什么？
:::

::: details 解析
把 $B$ 按列拆开，要求每一列都可由 $A$ 的列向量组表示，故：
$$
r(A)=r(A,B).
$$
:::

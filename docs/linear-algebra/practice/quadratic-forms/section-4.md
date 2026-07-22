<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四节 正定性</center></h1>

::: info 例 1
判断 $A=\begin{pmatrix}2&1\\1&3\end{pmatrix}$ 是否正定。
:::

::: details 解析
顺序主子式：
$$
\Delta_1=2>0,
$$
$$
\Delta_2=|A|=6-1=5>0.
$$
故 $A$ 正定。
:::

::: info 例 2
讨论 $A=\begin{pmatrix}1&a\\a&2\end{pmatrix}$ 正定时参数 $a$ 的范围。
:::

::: details 解析
要求：
$$
\Delta_1=1>0,qquad \Delta_2=2-a^2>0.
$$
所以：
$$
-\sqrt2<a<\sqrt2.
$$
:::

::: info 例 3
矩阵 $A$ 的行列式大于零，能否推出 $A$ 正定？
:::

::: details 解析
不能。例如：
$$
A=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}
$$
的行列式为 $1>0$，但 $\boldsymbol x^TA\boldsymbol x<0$ 对所有非零向量成立，它是负定矩阵。
:::

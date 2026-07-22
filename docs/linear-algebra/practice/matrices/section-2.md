<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 逆矩阵与伴随矩阵</center></h1>

::: info 例 1
求 $A=\begin{pmatrix}2&1\\1&1\end{pmatrix}$ 的逆矩阵。
:::

::: details 解析
$$
|A|=2\cdot1-1\cdot1=1,
$$
$$
A^{-1}=\begin{pmatrix}1&-1\\-1&2\end{pmatrix}.
$$
:::

::: info 例 2
矩阵 $A$ 满足 $A^2-4A+3I=O$，证明 $A$ 可逆并求 $A^{-1}$。
:::

::: details 解析
整理得：
$$
A(4I-A)=3I.
$$
故 $A$ 可逆，且：
$$
A^{-1}=\frac13(4I-A).
$$
:::

::: info 例 3
设 $A$ 为四阶矩阵，$r(A)=3$，求 $r(A^*)$。
:::

::: details 解析
因为 $r(A)=n-1$，所以：
$$
r(A^*)=1.
$$
:::

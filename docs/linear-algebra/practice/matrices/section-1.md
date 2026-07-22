<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 矩阵运算</center></h1>

::: info 例 1
设 $A=\begin{pmatrix}1&2\\0&-1\end{pmatrix}$，$B=\begin{pmatrix}2&0\\3&1\end{pmatrix}$，计算 $AB$ 与 $BA$。
:::

::: details 解析
$$
AB=\begin{pmatrix}8&2\\-3&-1\end{pmatrix},\qquad
BA=\begin{pmatrix}2&4\\3&5\end{pmatrix}.
$$
可见矩阵乘法一般不可交换。
:::

::: info 例 2
设 $A$ 为 $2\times3$ 矩阵，$B$ 为 $3\times4$ 矩阵，判断 $AB$、$BA$ 的尺寸。
:::

::: details 解析
$AB$ 有意义，结果为 $2\times4$；$BA$ 要求 $B$ 的列数 $4$ 等于 $A$ 的行数 $2$，条件不满足，故无意义。
:::

::: info 例 3
若 $A^T=A$，$B^T=-B$，证明 $\operatorname{tr}(AB)=0$。
:::

::: details 解析
$$
\operatorname{tr}(AB)=\operatorname{tr}((AB)^T)
=\operatorname{tr}(B^TA^T)=\operatorname{tr}(-BA).
$$
又 $\operatorname{tr}(BA)=\operatorname{tr}(AB)$，所以 $\operatorname{tr}(AB)=-\operatorname{tr}(AB)$，从而为 $0$。
:::

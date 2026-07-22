<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 二次型的矩阵表示</center></h1>

::: info 例 1
写出二次型 $f=2x_1^2-4x_1x_2+3x_2^2$ 的矩阵。
:::

::: details 解析
交叉项系数 $-4$ 平分到对称位置，故：
$$
A=\begin{pmatrix}2&-2\\-2&3\end{pmatrix}.
$$
:::

::: info 例 2
若 $f=\boldsymbol x^TA\boldsymbol x$，作 $\boldsymbol x=C\boldsymbol y$，新二次型的矩阵是什么？
:::

::: details 解析
$$
f=(C\boldsymbol y)^TA(C\boldsymbol y)
=\boldsymbol y^TC^TAC\boldsymbol y,
$$
故新矩阵为 $C^TAC$。
:::

::: info 例 3
合同矩阵一定有相同特征值吗？
:::

::: details 解析
不一定。合同保持秩和正负惯性指数，不保持具体特征值；相似矩阵才保持特征值。
:::

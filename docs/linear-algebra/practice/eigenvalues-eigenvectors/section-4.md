<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四节 实对称矩阵</center></h1>

::: info 例 1
正交对角化 $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$。
:::

::: details 解析
特征值为 $1,3$，对应单位特征向量可取：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,-1)^T,
\qquad
\boldsymbol q_2=\frac1{\sqrt2}(1,1)^T.
$$
令 $Q=(\boldsymbol q_1,\boldsymbol q_2)$，则：
$$
Q^TAQ=\operatorname{diag}(1,3).
$$
:::

::: info 例 2
实对称矩阵不同特征值对应的两个特征向量为什么正交？
:::

::: details 解析
若 $A\boldsymbol x=\lambda\boldsymbol x$、$A\boldsymbol y=\mu\boldsymbol y$，则利用 $A^T=A$：
$$
\lambda\boldsymbol x^T\boldsymbol y
=(A\boldsymbol x)^T\boldsymbol y
=\boldsymbol x^TA\boldsymbol y
=\mu\boldsymbol x^T\boldsymbol y.
$$
当 $\lambda\ne\mu$ 时，$(\lambda-\mu)\boldsymbol x^T\boldsymbol y=0$，故内积为零。
:::

::: info 例 3
正交矩阵 $Q$ 的行列式可能取哪些值？
:::

::: details 解析
由 $Q^TQ=I$ 取行列式：
$$
|Q|^2=1,
$$
故 $|Q|=\pm1$。
:::

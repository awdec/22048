<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四节 分块矩阵与矩阵方程</center></h1>

::: info 例 1
设 $A,B$ 均可逆，解矩阵方程 $AXB=C$。
:::

::: details 解析
左乘 $A^{-1}$，右乘 $B^{-1}$：
$$
X=A^{-1}CB^{-1}.
$$
乘法次序不能改变。
:::

::: info 例 2
设 $A=\operatorname{diag}(A_1,A_2)$，其中 $A_1,A_2$ 均可逆，求 $A^{-1}$。
:::

::: details 解析
分块对角矩阵逐块求逆：
$$
A^{-1}=\operatorname{diag}(A_1^{-1},A_2^{-1}).
$$
:::

::: info 例 3
已知 $AX=B$，其中：
$$
A=\begin{pmatrix}1&1\\0&2\end{pmatrix},\qquad
B=\begin{pmatrix}2&0\\2&4\end{pmatrix}.
$$
求 $X$。
:::

::: details 解析
$$
A^{-1}=\begin{pmatrix}1&-\frac12\\0&\frac12\end{pmatrix},
$$
所以：
$$
X=A^{-1}B=\begin{pmatrix}1&-2\\1&2\end{pmatrix}.
$$
:::

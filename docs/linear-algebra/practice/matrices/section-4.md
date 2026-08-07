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

::: info 例 4
设 $A$ 可逆，解矩阵方程 $XA=B$。
:::

::: details 解析
等式两边右乘 $A^{-1}$：
$$
X=BA^{-1}.
$$
不能写成 $A^{-1}B$，因为未知矩阵 $X$ 在 $A$ 的左侧。
:::

::: info 例 5
设
$$
A=\begin{pmatrix}1&0\\0&2\end{pmatrix},\qquad
B=\begin{pmatrix}3&1\\1&4\end{pmatrix}.
$$
求满足 $AX+XA=B$ 的矩阵 $X$。
:::

::: details 解析
设 $X=(x_{ij})$。由于 $A=\operatorname{diag}(1,2)$，有：
$$
(AX+XA)_{ij}=(\lambda_i+\lambda_j)x_{ij},
\qquad (\lambda_1,\lambda_2)=(1,2).
$$
故：
$$
X=\begin{pmatrix}
\frac32&\frac13\\[2mm]
\frac13&1
\end{pmatrix}.
$$
:::

::: info 例 6
设 $A=\operatorname{diag}(A_1,A_2)$，证明：
$$
A^k=\operatorname{diag}(A_1^k,A_2^k)
$$
对所有正整数 $k$ 成立。
:::

::: details 解析
分块对角矩阵相乘时，非对角块始终为零。$k=1$ 时结论显然；若对 $k$ 成立，则：
$$
A^{k+1}=A^kA
=\operatorname{diag}(A_1^kA_1,A_2^kA_2)
=\operatorname{diag}(A_1^{k+1},A_2^{k+1}).
$$
由归纳法结论成立。
:::

::: info 例 7
矩阵 $A$ 满足 $A^2+2A-3I=O$。求 $(A+2I)^{-1}$。
:::

::: details 解析
由原式：
$$
A(A+2I)=3I.
$$
因为 $A$ 与 $A+2I$ 可交换，所以：
$$
(A+2I)A=3I.
$$
因此：
$$
(A+2I)^{-1}=\frac13A.
$$
:::

::: info 例 8
设 $A,D$ 可逆，求分块上三角矩阵
$$
M=\begin{pmatrix}A&B\\O&D\end{pmatrix}
$$
的逆矩阵。
:::

::: details 解析
设逆矩阵仍为分块上三角形式，直接相乘配块可得：
$$
M^{-1}=
\begin{pmatrix}
A^{-1}&-A^{-1}BD^{-1}\\
O&D^{-1}
\end{pmatrix}.
$$
检查右上块：
$$
A(-A^{-1}BD^{-1})+BD^{-1}=O.
$$
:::

::: info 例 9
已知：
$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},\quad
B=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
C=\begin{pmatrix}2&1\\1&1\end{pmatrix}.
$$
解 $AXB=C$。
:::

::: details 解析
$$
A^{-1}=\begin{pmatrix}1&-1\\0&1\end{pmatrix},\qquad
B^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}.
$$
所以：
$$
X=A^{-1}CB^{-1}
=\begin{pmatrix}1&0\\0&1\end{pmatrix}.
$$
代回可验证 $AXB=C$。
:::

::: info 例 10
设 $A$ 为 $m\times n$ 矩阵。证明矩阵方程
$AX=B$ 对每个 $m\times s$ 矩阵 $B$ 都有解，当且仅当 $r(A)=m$。
:::

::: details 解析
把 $B$ 按列写成 $(\boldsymbol b_1,\ldots,\boldsymbol b_s)$，则
$AX=B$ 等价于对每个 $j$ 都有：
$$
A\boldsymbol x_j=\boldsymbol b_j.
$$
要使任意 $\boldsymbol b_j\in\mathbb R^m$ 都可由 $A$ 的列向量线性表示，必须且只需 $A$ 的列空间为 $\mathbb R^m$，即：
$$
r(A)=m.
$$
:::

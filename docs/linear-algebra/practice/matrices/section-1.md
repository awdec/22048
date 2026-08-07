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

::: info 例 4
设
$$
A=\begin{pmatrix}1&-1\\2&0\end{pmatrix},\qquad
B=\begin{pmatrix}0&3\\1&2\end{pmatrix}.
$$
计算 $2A-B^T$。
:::

::: details 解析
先求：
$$
2A=\begin{pmatrix}2&-2\\4&0\end{pmatrix},\qquad
B^T=\begin{pmatrix}0&1\\3&2\end{pmatrix}.
$$
所以：
$$
2A-B^T=\begin{pmatrix}2&-3\\1&-2\end{pmatrix}.
$$
:::

::: info 例 5
设
$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix},
$$
求 $A^n$，其中 $n$ 为正整数。
:::

::: details 解析
写成 $A=I+N$，其中
$$
N=\begin{pmatrix}0&1\\0&0\end{pmatrix},\qquad N^2=O.
$$
因此二项式展开只保留前两项：
$$
A^n=(I+N)^n=I+nN
=\begin{pmatrix}1&n\\0&1\end{pmatrix}.
$$
:::

::: info 例 6
若方阵 $A$ 满足 $A^2=A$，化简
$A^{2026}-3A^5+2I$。
:::

::: details 解析
由 $A^2=A$ 可归纳得 $A^k=A$（$k\ge1$）。所以：
$$
A^{2026}-3A^5+2I=A-3A+2I=2(I-A).
$$
:::

::: info 例 7
证明任意实方阵 $A$ 都可以唯一地写成一个对称矩阵与一个反对称矩阵之和。
:::

::: details 解析
令：
$$
S=\frac{A+A^T}{2},\qquad K=\frac{A-A^T}{2}.
$$
则 $S^T=S$、$K^T=-K$，且 $A=S+K$。

若还有 $A=S_1+K_1$，则 $S-S_1=-(K-K_1)$ 同时是对称矩阵和反对称矩阵，只能为零矩阵，故分解唯一。
:::

::: info 例 8
举例说明 $AB=O$ 不能推出 $A=O$ 或 $B=O$。
:::

::: details 解析
取：
$$
A=\begin{pmatrix}1&0\\0&0\end{pmatrix},\qquad
B=\begin{pmatrix}0&0\\0&1\end{pmatrix}.
$$
$A,B$ 均非零，但：
$$
AB=\begin{pmatrix}0&0\\0&0\end{pmatrix}=O.
$$
矩阵环中存在零因子，这是矩阵运算与数的运算的重要区别。
:::

::: info 例 9
设 $A,B$ 为同阶方阵且 $AB=BA$，证明：
$$
(A+B)^3=A^3+3A^2B+3AB^2+B^3.
$$
:::

::: details 解析
先展开：
$$
(A+B)^2=A^2+AB+BA+B^2=A^2+2AB+B^2.
$$
再右乘 $A+B$，并利用 $AB=BA$ 合并同类项，得到：
$$
(A+B)^3=A^3+3A^2B+3AB^2+B^3.
$$
没有交换条件时不能直接套用标量二项式公式。
:::

::: info 例 10
设列向量 $\boldsymbol u,\boldsymbol v\in\mathbb R^n$，令
$A=\boldsymbol u\boldsymbol v^T$。证明当 $k\ge1$ 时：
$$
A^k=(\boldsymbol v^T\boldsymbol u)^{k-1}A.
$$
:::

::: details 解析
先算：
$$
A^2=(\boldsymbol u\boldsymbol v^T)
(\boldsymbol u\boldsymbol v^T)
=\boldsymbol u(\boldsymbol v^T\boldsymbol u)\boldsymbol v^T
=(\boldsymbol v^T\boldsymbol u)A.
$$
若结论对 $k$ 成立，则：
$$
A^{k+1}=A^kA
=(\boldsymbol v^T\boldsymbol u)^{k-1}A^2
=(\boldsymbol v^T\boldsymbol u)^kA.
$$
由数学归纳法结论成立。
:::

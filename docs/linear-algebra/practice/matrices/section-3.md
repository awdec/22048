<h1><center>第三节 初等变换、等价与秩</center></h1>

::: info 例 1
求矩阵的秩：
$$
A=\begin{pmatrix}1&2&3\\2&4&6\\1&1&1\end{pmatrix}.
$$
:::

::: details 解析
作 $R_2-2R_1$、$R_3-R_1$：
$$
A\sim\begin{pmatrix}1&2&3\\0&0&0\\0&-1&-2\end{pmatrix}.
$$
阶梯形有两行非零行，所以 $r(A)=2$。
:::

::: info 例 2
设 $A,B$ 为同型矩阵，且 $B=PAQ$，其中 $P,Q$ 均可逆。说明 $A$ 与 $B$ 的关系，并比较二者的秩。
:::

::: details 解析
左乘或右乘可逆矩阵相当于进行一系列初等行或列变换，所以 $A$ 与 $B$ 等价，并且初等变换不改变秩，因此：
$$
r(PAQ)=r(A).
$$
:::

::: info 例 3
若 $A$ 为 $3\times4$ 矩阵且 $r(A)=3$，$AB=O$，证明 $B=O$。
:::

::: details 解析
$A$ 行数为 $3$、秩为 $3$，但这说明行满秩，不足以从 $AB=O$ 推出 $B=O$。要推出 $B=O$，需 $A$ 列满秩，即 $r(A)=4$，这不可能。原命题不成立。

这类题先检查“左因子列满秩、右因子行满秩”的方向。
:::

::: info 例 4
把矩阵
$$
A=\begin{pmatrix}
1&2&1\\
2&4&0\\
-1&-2&1
\end{pmatrix}
$$
化为行最简形，并求秩。
:::

::: details 解析
作 $R_2\leftarrow R_2-2R_1$、$R_3\leftarrow R_3+R_1$：
$$
A\sim
\begin{pmatrix}
1&2&1\\
0&0&-2\\
0&0&2
\end{pmatrix}
\sim
\begin{pmatrix}
1&2&0\\
0&0&1\\
0&0&0
\end{pmatrix}.
$$
有两个主元，故 $r(A)=2$。
:::

::: info 例 5
讨论矩阵
$$
A=\begin{pmatrix}
1&a&1\\
1&1&a\\
a&1&1
\end{pmatrix}
$$
的秩。
:::

::: details 解析
先计算：
$$
|A|=(a-1)^2(a+2).
$$
因此 $a\ne1,-2$ 时 $r(A)=3$。

当 $a=1$ 时，$A$ 的元素全为 $1$，故 $r(A)=1$。

当 $a=-2$ 时，三行之和为零，但二阶子式
$$
\begin{vmatrix}1&-2\\1&1\end{vmatrix}=3\ne0,
$$
故 $r(A)=2$。
:::

::: info 例 6
设 $A$ 为 $m\times n$ 矩阵，证明：
$$
r(A)=r(A^T).
$$
:::

::: details 解析
矩阵的秩等于其非零子式的最高阶数。$A$ 的任意 $k$ 阶子式转置后就是 $A^T$ 的一个 $k$ 阶子式，且行列式值不变。因此二者非零子式的最高阶数相同：
$$
r(A)=r(A^T).
$$
:::

::: info 例 7
设 $A$ 为 $4\times3$ 矩阵，$B$ 为 $3\times5$ 矩阵，且
$r(A)=3$、$r(B)=2$。求 $r(AB)$ 的取值范围。
:::

::: details 解析
由秩的不等式：
$$
r(A)+r(B)-3\le r(AB)\le\min\{r(A),r(B)\}.
$$
代入得：
$$
2\le r(AB)\le2.
$$
所以：
$$
r(AB)=2.
$$
:::

::: info 例 8
设 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times s$ 矩阵，且 $AB=O$。证明：
$$
r(A)+r(B)\le n.
$$
:::

::: details 解析
$AB=O$ 表明 $B$ 的每个列向量都属于齐次方程
$A\boldsymbol x=\boldsymbol0$ 的解空间，即：
$$
R(B)\subseteq N(A).
$$
因此：
$$
r(B)\le\dim N(A)=n-r(A),
$$
整理得 $r(A)+r(B)\le n$。
:::

::: info 例 9
两个同阶矩阵等价且特征值相同，能否推出它们相似？
:::

::: details 解析
不能。可取：
$$
A=\operatorname{diag}(0,1,1,1),\qquad
B=\operatorname{diag}(0,J_2(1),1),
$$
其中 $J_2(1)=\begin{pmatrix}1&1\\0&1\end{pmatrix}$。二者均为四阶、秩均为 $3$，故等价；特征值也均为 $0,1,1,1$。但 $A$ 可对角化而 $B$ 不可对角化，所以二者不相似。
:::

::: info 例 10
设 $A$ 为 $m\times n$ 矩阵，证明分块矩阵
$$
M=\begin{pmatrix}I_m&A\\O&I_n\end{pmatrix}
$$
可逆，并求 $M^{-1}$。
:::

::: details 解析
直接验证：
$$
\begin{pmatrix}I_m&A\\O&I_n\end{pmatrix}
\begin{pmatrix}I_m&-A\\O&I_n\end{pmatrix}
=\begin{pmatrix}I_m&O\\O&I_n\end{pmatrix}.
$$
所以：
$$
M^{-1}=\begin{pmatrix}I_m&-A\\O&I_n\end{pmatrix}.
$$
这也说明 $M$ 满秩，$r(M)=m+n$。
:::

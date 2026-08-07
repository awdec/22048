<h1><center>综合训练与答题技巧</center></h1>

::: info 例 1
设三阶矩阵 $A$ 的特征值为 $1,2,3$，求 $|A^2-4A+5I|$。
:::

::: details 解析
令 $f(t)=t^2-4t+5$，则 $f(A)$ 的特征值为：
$$
f(1)=2,\qquad f(2)=1,\qquad f(3)=2.
$$
所以：
$$
|A^2-4A+5I|=2\cdot1\cdot2=4.
$$
:::

::: info 例 2
若 $A\boldsymbol\xi=-2\boldsymbol\xi$，求
$(3A-I)\boldsymbol\xi$。
:::

::: details 解析
$$
(3A-I)\boldsymbol\xi
=3(-2\boldsymbol\xi)-\boldsymbol\xi
=-7\boldsymbol\xi.
$$
:::

::: info 例 3
矩阵 $A$ 的特征值为 $1,1,4$。求
$\operatorname{tr}(A)$、$|A|$ 与 $A^{-1}$ 的特征值。
:::

::: details 解析
$$
\operatorname{tr}(A)=1+1+4=6,\qquad
|A|=1\cdot1\cdot4=4.
$$
$A$ 可逆，所以 $A^{-1}$ 的特征值为：
$$
1,\quad1,\quad\frac14.
$$
:::

::: info 例 4
若三阶矩阵 $A$ 有三个不同特征值，判断 $A$ 是否可对角化。
:::

::: details 解析
不同特征值对应的特征向量线性无关。因此三个不同特征值能提供三个线性无关特征向量，$A$ 可相似对角化。
:::

::: info 例 5
设 $A\sim B$，且 $A^2-3A+I=O$。证明
$B^2-3B+I=O$。
:::

::: details 解析
设 $B=P^{-1}AP$，则：
$$
B^2-3B+I
=P^{-1}A^2P-3P^{-1}AP+P^{-1}IP
=P^{-1}(A^2-3A+I)P=O.
$$
相似变换保持矩阵多项式关系。
:::

::: info 例 6
三阶矩阵 $A$ 的特征值为 $1,1,2$，且
$r(A-I)=2$。判断 $A$ 是否可对角化。
:::

::: details 解析
特征值 $1$ 的特征空间维数为：
$$
3-r(A-I)=1,
$$
小于其代数重数 $2$。因此不能得到三个线性无关特征向量，$A$ 不可对角化。
:::

::: info 例 7
设
$$
A=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$
求 $A^{10}$。
:::

::: details 解析
由相似对角化或归纳公式：
$$
A^n=\begin{pmatrix}2^n&2^n-1\\0&1\end{pmatrix}.
$$
所以：
$$
A^{10}=\begin{pmatrix}1024&1023\\0&1\end{pmatrix}.
$$
:::

::: info 例 8
设实对称矩阵 $A$ 的特征值为 $-2,1,5$。求单位向量
$\boldsymbol x$ 上
$\boldsymbol x^TA\boldsymbol x$ 的最大值和最小值。
:::

::: details 解析
实对称矩阵的 Rayleigh 商在单位球面上的最小值、最大值分别为最小、最大特征值。因此：
$$
\min_{\|\boldsymbol x\|=1}\boldsymbol x^TA\boldsymbol x=-2,
\qquad
\max_{\|\boldsymbol x\|=1}\boldsymbol x^TA\boldsymbol x=5.
$$
:::

::: info 例 9
设复矩阵 $A$ 可对角化，且 $A^3=I$。$A$ 的特征值可能是什么？若
$A$ 还是实对称矩阵，可进一步得到什么结论？
:::

::: details 解析
任一特征值都满足 $\lambda^3=1$。

所以可能的特征值为：
$$
1,\qquad e^{2\pi i/3},\qquad e^{4\pi i/3}.
$$

若 $A$ 是实对称矩阵，全部特征值必为实数，因此只能为 $1$。又实对称矩阵可正交对角化，所以：
$$
A=I.
$$
:::

::: info 例 10
设 $A,B$ 都是三阶实对称矩阵，且具有相同的特征值（含重数）。证明 $A$ 与 $B$ 正交相似。
:::

::: details 解析
分别正交对角化：
$$
A=Q_1\Lambda Q_1^T,\qquad
B=Q_2\Lambda Q_2^T,
$$
通过调整特征向量顺序可令两个对角矩阵都是同一个 $\Lambda$。取：
$$
Q=Q_1Q_2^T,
$$
则 $Q$ 为正交矩阵，且：
$$
Q^TAQ
=Q_2Q_1^T(Q_1\Lambda Q_1^T)Q_1Q_2^T
=Q_2\Lambda Q_2^T=B.
$$
因此 $A$ 与 $B$ 正交相似。
:::

## 答题技巧

1. 先求特征多项式，再求每个特征空间。
2. 用迹与行列式检查特征值结果。
3. 重特征值要比较代数重数和几何重数。
4. 构造 $P$ 或 $Q$ 时，列顺序与对角元顺序保持一致。
5. 实对称矩阵的重特征空间内部要正交化、单位化。

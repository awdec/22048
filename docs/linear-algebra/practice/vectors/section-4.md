<h1><center>综合训练与答题技巧</center></h1>

::: info 例 1
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，而 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta$ 线性相关，证明 $\boldsymbol\beta$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 唯一表示。
:::

::: details 解析
相关性给出不全为零的 $k_1,k_2,k_3$：
$$
k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+k_3\boldsymbol\beta=0.
$$
若 $k_3=0$，则前两个向量相关，矛盾，故 $k_3\ne0$。于是 $\boldsymbol\beta$ 可由前两个向量表示。

若存在两种表示，相减将得到 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 的非平凡线性关系，与线性无关矛盾，故表示唯一。
:::

::: info 例 2
判断向量组
$$
(1,1,0)^T,\quad(1,0,1)^T,\quad(0,1,1)^T
$$
是否为 $\mathbb R^3$ 的一组基。
:::

::: details 解析
把向量作为列，其行列式为：
$$
\begin{vmatrix}
1&1&0\\
1&0&1\\
0&1&1
\end{vmatrix}=-2\ne0.
$$
三向量线性无关，因此构成 $\mathbb R^3$ 的一组基。
:::

::: info 例 3
已知 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，判断
$\boldsymbol\alpha_1+\boldsymbol\alpha_2$ 与
$\boldsymbol\alpha_1-\boldsymbol\alpha_2$ 是否线性无关。
:::

::: details 解析
设：
$$
k_1(\boldsymbol\alpha_1+\boldsymbol\alpha_2)
+k_2(\boldsymbol\alpha_1-\boldsymbol\alpha_2)=0.
$$
整理得：
$$
(k_1+k_2)\boldsymbol\alpha_1
+(k_1-k_2)\boldsymbol\alpha_2=0.
$$
由原向量组无关：
$$
k_1+k_2=0,\qquad k_1-k_2=0,
$$
故 $k_1=k_2=0$，新向量组线性无关。
:::

::: info 例 4
求向量组
$$
(1,0,1)^T,\ (2,1,3)^T,\ (3,1,4)^T,\ (1,1,2)^T
$$
的秩和一个极大无关组。
:::

::: details 解析
记四个向量依次为 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_4$。有：
$$
\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2,\qquad
\boldsymbol\alpha_4=\boldsymbol\alpha_2-\boldsymbol\alpha_1.
$$
且 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 不成比例，故向量组的秩为 $2$，一个极大无关组为：
$$
\boldsymbol\alpha_1,\boldsymbol\alpha_2.
$$
:::

::: info 例 5
在 $\mathbb R^2$ 中，基
$F=((1,1)^T,(1,-1)^T)$ 到标准基 $E$ 的过渡矩阵为 $P$。求 $P^{-1}$，并把标准坐标
$(3,1)^T$ 化为 $F$ 下的坐标。
:::

::: details 解析
$$
P=\begin{pmatrix}1&1\\1&-1\end{pmatrix},\qquad
P^{-1}=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$
因此：
$$
[\boldsymbol x]_F=P^{-1}[\boldsymbol x]_E
=\frac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}
\begin{pmatrix}3\\1\end{pmatrix}
=\begin{pmatrix}2\\1\end{pmatrix}.
$$
:::

::: info 例 6
将
$(1,1,0)^T,(1,0,1)^T$ 正交规范化。
:::

::: details 解析
取：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,1,0)^T.
$$
第二个正交方向可取 $(1,-1,2)^T$，其长度为 $\sqrt6$，故：
$$
\boldsymbol q_2=\frac1{\sqrt6}(1,-1,2)^T.
$$
二者构成原子空间的一组标准正交基。
:::

::: info 例 7
求 $\boldsymbol b=(1,0,2)^T$ 在
$W=\operatorname{span}\{(1,1,0)^T,(1,-1,0)^T\}$ 上的正交投影。
:::

::: details 解析
两个生成向量正交，且它们张成平面 $z=0$。分别投影：
$$
\operatorname{proj}_W\boldsymbol b
=\frac12(1,1,0)^T+\frac12(1,-1,0)^T
=(1,0,0)^T.
$$
:::

::: info 例 8
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，定义：
$$
\begin{aligned}
\boldsymbol\beta_1&=\boldsymbol\alpha_1+\boldsymbol\alpha_2,\\
\boldsymbol\beta_2&=\boldsymbol\alpha_2+\boldsymbol\alpha_3,\\
\boldsymbol\beta_3&=\boldsymbol\alpha_1+\boldsymbol\alpha_3.
\end{aligned}
$$
判断两个向量组是否等价。
:::

::: details 解析
系数矩阵为：
$$
C=\begin{pmatrix}
1&0&1\\
1&1&0\\
0&1&1
\end{pmatrix},
\qquad |C|=2\ne0.
$$
因此 $C$ 可逆，$\boldsymbol\beta$ 组与 $\boldsymbol\alpha$ 组可以相互表示，故两个向量组等价。
:::

::: info 例 9
设 $U,V$ 是 $\mathbb R^5$ 的子空间，$\dim U=3$、$\dim V=4$。证明
$U\cap V$ 中必有非零向量。
:::

::: details 解析
由维数公式：
$$
\dim(U+V)=\dim U+\dim V-\dim(U\cap V).
$$
又 $\dim(U+V)\le5$，所以：
$$
\dim(U\cap V)\ge3+4-5=2.
$$
因此交空间至少二维，必含非零向量。
:::

::: info 例 10
设 $A$ 是 $m\times n$ 矩阵。利用行空间与零空间的正交关系证明：
$$
r(A)+\dim N(A)=n.
$$
:::

::: details 解析
$A\boldsymbol x=0$ 表示 $\boldsymbol x$ 与 $A$ 的每一个行向量正交，因此：
$$
N(A)=R(A^T)^\perp.
$$
$R(A^T)$ 是 $A$ 的行空间，维数为 $r(A)$。在 $\mathbb R^n$ 中，一个子空间与其正交补的维数和为 $n$，所以：
$$
\dim N(A)=n-r(A),
$$
即：
$$
r(A)+\dim N(A)=n.
$$
:::

## 答题技巧

1. “表示”写成非齐次方程，“相关”写成齐次方程。
2. 判断相关性时优先观察是否有成比例、和差关系。
3. 求极大无关组时记录原矩阵的主元列编号。
4. 看到不同基下的坐标，先写过渡矩阵方向。

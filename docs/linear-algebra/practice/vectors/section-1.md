<h1><center>第一节 线性组合与等价</center></h1>

::: info 例 1
判断 $\boldsymbol\beta=(3,1)^T$ 能否由 $\boldsymbol\alpha_1=(1,1)^T$、$\boldsymbol\alpha_2=(2,-1)^T$ 线性表示。
:::

::: details 解析
设 $\boldsymbol\beta=k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2$，则：
$$
\begin{cases}k_1+2k_2=3,\\k_1-k_2=1.
\end{cases}
$$
解得 $k_1=\frac53,k_2=\frac23$，故可以线性表示，且因 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，表示唯一。
:::

::: info 例 2
若向量组（Ⅱ）可由向量组（Ⅰ）线性表示，证明向量组（Ⅱ）的秩不超过向量组（Ⅰ）的秩。
:::

::: details 解析
设两向量组组成的矩阵分别为 $B,A$。由题意存在矩阵 $C$ 使 $B=AC$，于是：
$$
r(B)=r(AC)\le r(A).
$$
:::

::: info 例 3
两个向量组的秩都为 $2$，它们一定等价吗？
:::

::: details 解析
不一定。例如在 $\mathbb R^3$ 中，$(\boldsymbol e_1,\boldsymbol e_2)$ 与 $(\boldsymbol e_2,\boldsymbol e_3)$ 的秩都为 $2$，但张成的平面不同，故不等价。
:::

::: info 例 4
设
$$
\boldsymbol\alpha_1=(1,0,1)^T,\quad
\boldsymbol\alpha_2=(0,1,1)^T,\quad
\boldsymbol\alpha_3=(1,1,0)^T.
$$
把 $\boldsymbol\beta=(2,3,1)^T$ 表示为它们的线性组合。
:::

::: details 解析
设 $\boldsymbol\beta=k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+k_3\boldsymbol\alpha_3$，按分量得：
$$
k_1+k_3=2,\qquad
k_2+k_3=3,\qquad
k_1+k_2=1.
$$
解得 $k_1=0,k_2=1,k_3=2$，所以：
$$
\boldsymbol\beta=\boldsymbol\alpha_2+2\boldsymbol\alpha_3.
$$
:::

::: info 例 5
判断 $\boldsymbol\beta=(1,1,1)^T$ 能否由
$\boldsymbol\alpha_1=(1,0,0)^T$、
$\boldsymbol\alpha_2=(0,1,0)^T$ 线性表示。
:::

::: details 解析
$\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 的任意线性组合第三个分量都为 $0$，而 $\boldsymbol\beta$ 的第三个分量为 $1$，所以不能表示。

等价地：
$$
r(\boldsymbol\alpha_1,\boldsymbol\alpha_2)=2,\qquad
r(\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta)=3.
$$
增列后秩变大，故无解。
:::

::: info 例 6
已知向量组
$$
B=(\boldsymbol\beta_1,\boldsymbol\beta_2,\boldsymbol\beta_3)
$$
可由
$A=(\boldsymbol\alpha_1,\boldsymbol\alpha_2)$ 表示，且：
$$
\boldsymbol\beta_1=\boldsymbol\alpha_1+\boldsymbol\alpha_2,\quad
\boldsymbol\beta_2=2\boldsymbol\alpha_1-\boldsymbol\alpha_2,\quad
\boldsymbol\beta_3=3\boldsymbol\alpha_2.
$$
写出矩阵关系 $B=AC$。
:::

::: details 解析
表示系数按列排列：
$$
C=\begin{pmatrix}
1&2&0\\
1&-1&3
\end{pmatrix}.
$$
因此：
$$
B=AC
=(\boldsymbol\alpha_1,\boldsymbol\alpha_2)
\begin{pmatrix}
1&2&0\\
1&-1&3
\end{pmatrix}.
$$
:::

::: info 例 7
证明向量组等价是一个等价关系。
:::

::: details 解析
需要验证三点：

1. 反身性：任一向量组都可由自身表示。
2. 对称性：等价的定义本身要求两个向量组可相互表示。
3. 传递性：若组（Ⅱ）可由组（Ⅰ）表示，组（Ⅲ）可由组（Ⅱ）表示，则代入表示式可知组（Ⅲ）可由组（Ⅰ）表示；反方向同理。

因此向量组等价具有反身性、对称性和传递性。
:::

::: info 例 8
在 $\mathbb R^2$ 中，设基
$$
E=(\boldsymbol e_1,\boldsymbol e_2),\qquad
F=(\boldsymbol f_1,\boldsymbol f_2),
$$
其中 $\boldsymbol f_1=(1,1)^T$、$\boldsymbol f_2=(1,-1)^T$。若
$[\boldsymbol x]_F=(2,-1)^T$，求 $[\boldsymbol x]_E$。
:::

::: details 解析
由坐标定义：
$$
\boldsymbol x=2\boldsymbol f_1-\boldsymbol f_2
=2(1,1)^T-(1,-1)^T=(1,3)^T.
$$
因此：
$$
[\boldsymbol x]_E=(1,3)^T.
$$
过渡矩阵为：
$$
P_{E\leftarrow F}=
\begin{pmatrix}1&1\\1&-1\end{pmatrix}.
$$
:::

::: info 例 9
向量组（Ⅱ）可由向量组（Ⅰ）线性表示，且两个向量组的秩相等。证明它们等价。
:::

::: details 解析
设两个向量组张成的子空间分别为 $V_1,V_2$。由“（Ⅱ）可由（Ⅰ）表示”得：
$$
V_2\subseteq V_1.
$$
又：
$$
\dim V_2=\dim V_1.
$$
有限维子空间在包含且维数相等时必相等，故 $V_1=V_2$，两向量组可以相互表示，因此等价。
:::

::: info 例 10
在次数不超过 $2$ 的实多项式空间中，设：
$$
p_1=1+x,\qquad p_2=x+x^2,\qquad p_3=1-x^2.
$$
判断 $p_3$ 能否由 $p_1,p_2$ 线性表示，并说明表示是否唯一。
:::

::: details 解析
直接观察：
$$
p_3=p_1-p_2.
$$
所以可以表示。又 $p_1,p_2$ 不成比例，线性无关，因此该表示唯一。

向量不一定写成数组；多项式、矩阵等对象同样可以作为线性空间中的向量。
:::

<h1><center>第二节 线性相关与极大无关组</center></h1>

::: info 例 1
判断向量组 $\boldsymbol\alpha_1=(1,0,1)^T$、$\boldsymbol\alpha_2=(0,1,1)^T$、$\boldsymbol\alpha_3=(1,1,2)^T$ 的相关性。
:::

::: details 解析
因为：
$$
\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2,
$$
所以该向量组线性相关。
:::

::: info 例 2
求向量组的一个极大无关组：
$$
\boldsymbol\alpha_1=(1,0,1)^T,
\boldsymbol\alpha_2=(2,1,3)^T,
\boldsymbol\alpha_3=(3,1,4)^T.
$$
:::

::: details 解析
注意到 $\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2$，且前两个向量不成比例，故一个极大无关组为：
$$
\boldsymbol\alpha_1,\boldsymbol\alpha_2.
$$
向量组的秩为 $2$。
:::

::: info 例 3
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，判断 $\boldsymbol\alpha_1+\boldsymbol\alpha_2$、$\boldsymbol\alpha_2+\boldsymbol\alpha_3$、$\boldsymbol\alpha_3+\boldsymbol\alpha_1$ 是否线性无关。
:::

::: details 解析
令三者的线性组合为零，按原向量组整理，系数矩阵为：
$$
\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
其行列式为 $2\ne0$，故新向量组线性无关。
:::

::: info 例 4
证明 $\mathbb R^3$ 中任意 $4$ 个向量必线性相关。
:::

::: details 解析
把这 $4$ 个向量作为列组成 $3\times4$ 矩阵 $A$。因为：
$$
r(A)\le3<4,
$$
齐次方程 $A\boldsymbol x=\boldsymbol0$ 有非零解，所以存在不全为零的系数使四个向量的线性组合为零，故它们线性相关。
:::

::: info 例 5
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，且
$\boldsymbol\beta$ 不能由它们线性表示。证明
$\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3,\boldsymbol\beta$ 线性无关。
:::

::: details 解析
若四个向量线性相关，则存在不全为零的系数满足：
$$
k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2
+k_3\boldsymbol\alpha_3+k_4\boldsymbol\beta=0.
$$
若 $k_4=0$，则前三个向量相关，矛盾；故 $k_4\ne0$，从而可解出 $\boldsymbol\beta$ 为前三个向量的线性组合，又与题设矛盾。因此四个向量线性无关。
:::

::: info 例 6
讨论向量组
$$
\boldsymbol\alpha_1=(1,0,1)^T,\quad
\boldsymbol\alpha_2=(0,1,1)^T,\quad
\boldsymbol\alpha_3=(1,a,2)^T
$$
的线性相关性。
:::

::: details 解析
把向量作为列，计算：
$$
\begin{vmatrix}
1&0&1\\
0&1&a\\
1&1&2
\end{vmatrix}=1-a.
$$
所以：

- $a\ne1$ 时，行列式非零，向量组线性无关；
- $a=1$ 时，$\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2$，向量组线性相关。
:::

::: info 例 7
求向量组
$$
\begin{aligned}
\boldsymbol\alpha_1&=(1,0,1)^T,&
\boldsymbol\alpha_2&=(0,1,1)^T,\\
\boldsymbol\alpha_3&=(1,1,2)^T,&
\boldsymbol\alpha_4&=(1,-1,0)^T
\end{aligned}
$$
的秩和一个极大无关组。
:::

::: details 解析
观察到：
$$
\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2,\qquad
\boldsymbol\alpha_4=\boldsymbol\alpha_1-\boldsymbol\alpha_2.
$$
而 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 不成比例，故线性无关。因此向量组的秩为 $2$，一个极大无关组为：
$$
\boldsymbol\alpha_1,\boldsymbol\alpha_2.
$$
:::

::: info 例 8
一个向量组的秩为 $r$。从中任意删去一个向量后，秩可能怎样变化？
:::

::: details 解析
删去一列后，秩至多减少 $1$，也可能不变。因此新向量组的秩只能是：
$$
r\quad\text{或}\quad r-1.
$$
若删去的向量可由其余向量表示，秩不变；若它属于某个极大无关组且不能由其余向量表示，秩减少 $1$。
:::

::: info 例 9
设 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_n$ 线性无关，并定义：
$$
\boldsymbol\beta_j=\sum_{i=1}^n c_{ij}\boldsymbol\alpha_i
\quad(j=1,\ldots,n).
$$
证明 $\boldsymbol\beta_1,\ldots,\boldsymbol\beta_n$ 线性无关当且仅当 $|C|\ne0$。
:::

::: details 解析
写成矩阵形式：
$$
B=AC,
$$
其中 $A=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_n)$ 的列线性无关。

若 $|C|\ne0$，则 $C$ 可逆，$B\boldsymbol x=0$ 推出
$AC\boldsymbol x=0$，再由 $A$ 列无关得 $C\boldsymbol x=0$，从而 $\boldsymbol x=0$。

若 $|C|=0$，存在 $\boldsymbol x\ne0$ 使 $C\boldsymbol x=0$，于是
$B\boldsymbol x=AC\boldsymbol x=0$，故 $\boldsymbol\beta$ 组相关。
:::

::: info 例 10
设向量组 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$ 与
$\boldsymbol\beta_1,\ldots,\boldsymbol\beta_t$ 分别线性无关，且它们张成的子空间交集只有零向量。证明合并后的向量组线性无关。
:::

::: details 解析
若：
$$
\sum_{i=1}^s a_i\boldsymbol\alpha_i
+\sum_{j=1}^t b_j\boldsymbol\beta_j=0,
$$
则：
$$
\sum_{i=1}^s a_i\boldsymbol\alpha_i
=-\sum_{j=1}^t b_j\boldsymbol\beta_j.
$$
等式两边的公共向量同时属于两个子空间，只能为零。因此两个和式分别为零。再由两个原向量组各自线性无关，得所有 $a_i,b_j$ 均为零，故合并组线性无关。
:::

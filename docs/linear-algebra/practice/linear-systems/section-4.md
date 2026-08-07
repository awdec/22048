<h1><center>第四节 含参数方程组</center></h1>

::: info 例 1
讨论方程组：
$$
\begin{cases}
x+y=1,\\
x+ay=2
\end{cases}
$$
的解。
:::

::: details 解析
两式相减得：
$$
(a-1)y=1.
$$
- $a\ne1$ 时，唯一解 $y=\frac1{a-1}$，$x=1-y$。
- $a=1$ 时，左端两个方程相同而右端不同，方程组无解。
:::

::: info 例 2
讨论齐次方程组：
$$
\begin{cases}
x+ay=0,\\
ax+y=0
\end{cases}
$$
何时有非零解。
:::

::: details 解析
系数行列式：
$$
\begin{vmatrix}1&a\\a&1\end{vmatrix}=1-a^2.
$$
有非零解当且仅当 $1-a^2=0$，即 $a=\pm1$。
:::

::: info 例 3
矩阵方程 $AX=B$ 有解的秩条件是什么？
:::

::: details 解析
把 $B$ 按列拆开，要求每一列都可由 $A$ 的列向量组表示，故：
$$
r(A)=r(A,B).
$$
:::

::: info 例 4
讨论方程组：
$$
\begin{cases}
x+y+z=1,\\
x+ay+z=1,\\
x+y+az=b
\end{cases}
$$
的解。
:::

::: details 解析
后两式分别减第一式：
$$
(a-1)y=0,\qquad (a-1)z=b-1.
$$

- 当 $a\ne1$ 时，$y=0$、$z=\frac{b-1}{a-1}$，进而
  $x=1-\frac{b-1}{a-1}$，有唯一解。
- 当 $a=1,b=1$ 时，三个方程等价于 $x+y+z=1$，有无穷多解。
- 当 $a=1,b\ne1$ 时，出现矛盾，方程组无解。
:::

::: info 例 5
讨论矩阵
$$
A=\begin{pmatrix}
1&1&1\\
1&a&1\\
1&1&a
\end{pmatrix}
$$
的秩，并据此判断齐次方程 $A\boldsymbol x=0$ 的解空间维数。
:::

::: details 解析
$$
|A|=(a-1)^2.
$$
当 $a\ne1$ 时，$r(A)=3$，解空间维数为 $0$。

当 $a=1$ 时，$A$ 的三行相同且非零，故 $r(A)=1$，解空间维数为：
$$
3-1=2.
$$
:::

::: info 例 6
讨论向量
$\boldsymbol\beta=(1,b)^T$ 何时可由
$$
\boldsymbol\alpha_1=(1,1)^T,\qquad
\boldsymbol\alpha_2=(1,a)^T
$$
线性表示，并判断表示是否唯一。
:::

::: details 解析
表示问题对应方程组：
$$
\begin{cases}
x_1+x_2=1,\\
x_1+ax_2=b.
\end{cases}
$$

- 当 $a\ne1$ 时，系数行列式 $a-1\ne0$，对任意 $b$ 都能唯一表示。
- 当 $a=1$ 时，两个生成向量相同。此时仅当 $b=1$ 时可表示，且表示不唯一；当 $b\ne1$ 时不能表示。
:::

::: info 例 7
讨论矩阵方程
$$
\begin{pmatrix}1&a\\0&a-1\end{pmatrix}X=B
$$
对任意二阶矩阵 $B$ 何时都有唯一解。
:::

::: details 解析
对任意 $B$ 都有唯一解，当且仅当左侧系数矩阵可逆。其行列式为：
$$
a-1.
$$
所以当且仅当 $a\ne1$ 时，对任意 $B$ 都有唯一解：
$$
X=A^{-1}B.
$$
:::

::: info 例 8
设含参数方程组有 $n$ 个未知数。说明如何用
$r(A)$ 与 $r(A,\boldsymbol b)$ 完成全部分类。
:::

::: details 解析
分类标准为：
$$
\begin{array}{c|c}
\text{秩的关系}&\text{解的情况}\\ \hline
r(A)<r(A,\boldsymbol b)&\text{无解}\\
r(A)=r(A,\boldsymbol b)=n&\text{唯一解}\\
r(A)=r(A,\boldsymbol b)<n&\text{无穷多解}
\end{array}
$$
含参数消元时应保留可能为零的关键因子，再按其是否为零分情况。
:::

::: info 例 9
讨论方程组：
$$
\begin{cases}
x+y+z=1,\\
x+ay+z=2,\\
x+y+az=3
\end{cases}
$$
的解。
:::

::: details 解析
系数行列式为 $(a-1)^2$。

当 $a\ne1$ 时有唯一解。后两式分别减第一式：
$$
(a-1)y=1,\qquad (a-1)z=2,
$$
所以：
$$
y=\frac1{a-1},\quad z=\frac2{a-1},\quad
x=\frac{a-4}{a-1}.
$$

当 $a=1$ 时，三个方程左端相同、右端不同，故无解。
:::

::: info 例 10
设三元方程组 $A(a)\boldsymbol x=\boldsymbol b(a)$ 在某个参数值下有解，且解集中恰有两个自由参数。此时 $r(A)$ 与
$r(A,\boldsymbol b)$ 必须是多少？系数矩阵的所有二阶子式有什么特点？
:::

::: details 解析
两个自由参数意味着：
$$
3-r(A)=2,
$$
故 $r(A)=1$。又因方程组有解：
$$
r(A,\boldsymbol b)=r(A)=1.
$$
秩为 $1$ 意味着至少有一个一阶子式非零，而所有二阶及更高阶子式均为零。
:::

<h1><center>第一节 解的判定与消元</center></h1>

::: info 例 1
设三元方程组的 $r(A)=2$、$r(A,\boldsymbol b)=3$，判断解的情况。
:::

::: details 解析
两个秩不相等，故方程组无解。
:::

::: info 例 2
解方程组：
$$
\begin{cases}
x+y+z=2,\\
2x+y-z=1,\\
x+2y+4z=5.
\end{cases}
$$
:::

::: details 解析
增广矩阵消元可得：
$$
\begin{pmatrix}1&0&-2&-1\\0&1&3&3\\0&0&0&0\end{pmatrix}.
$$
令 $z=t$，则：
$$
x=-1+2t,\qquad y=3-3t.
$$
通解为：
$$
\boldsymbol x=(-1,3,0)^T+t(2,-3,1)^T.
$$
:::

::: info 例 3
四元非齐次方程组满足 $r(A)=r(A,\boldsymbol b)=4$，有几个自由变量？
:::

::: details 解析
自由变量个数为 $n-r(A)=4-4=0$，方程组有唯一解。
:::

::: info 例 4
用高斯消元法解：
$$
\begin{cases}
x+2y=5,\\
3x-y=1.
\end{cases}
$$
:::

::: details 解析
增广矩阵化简：
$$
\begin{pmatrix}1&2&5\\3&-1&1\end{pmatrix}
\longrightarrow
\begin{pmatrix}1&2&5\\0&-7&-14\end{pmatrix}.
$$
得 $y=2$，再代入第一式得 $x=1$。因此唯一解为：
$$
(x,y)=(1,2).
$$
:::

::: info 例 5
增广矩阵经初等行变换化为：
$$
\begin{pmatrix}
1&0&2&1\\
0&1&-1&3\\
0&0&0&2
\end{pmatrix}.
$$
判断对应方程组的解。
:::

::: details 解析
最后一行对应矛盾方程：
$$
0=2.
$$
因此：
$$
r(A)=2,\qquad r(A,\boldsymbol b)=3,
$$
方程组无解。
:::

::: info 例 6
解方程组：
$$
\begin{cases}
x_1+x_2+x_3+x_4=1,\\
x_1-x_2+x_3-x_4=3.
\end{cases}
$$
:::

::: details 解析
两式相加、相减可得：
$$
x_1+x_3=2,\qquad x_2+x_4=-1.
$$
令 $x_3=s,x_4=t$，则：
$$
x_1=2-s,\qquad x_2=-1-t.
$$
通解为：
$$
\boldsymbol x=(2,-1,0,0)^T
+s(-1,0,1,0)^T+t(0,-1,0,1)^T.
$$
:::

::: info 例 7
讨论方程组：
$$
\begin{cases}
x+y=2,\\
2x+2y=4,\\
3x+3y=6
\end{cases}
$$
的解。
:::

::: details 解析
后三个方程的系数行都与第一行成比例，常数项也按相同比例变化，因此：
$$
r(A)=r(A,\boldsymbol b)=1<2.
$$
方程组有无穷多解。令 $y=t$，则：
$$
x=2-t.
$$
:::

::: info 例 8
设 $A$ 为 $n$ 阶方阵。证明 $A\boldsymbol x=\boldsymbol b$ 对任意
$\boldsymbol b$ 都有唯一解，当且仅当 $A$ 可逆。
:::

::: details 解析
若 $A$ 可逆，则：
$$
\boldsymbol x=A^{-1}\boldsymbol b
$$
给出任意 $\boldsymbol b$ 下的唯一解。

反之，若对任意 $\boldsymbol b$ 都有唯一解，特别地齐次方程
$A\boldsymbol x=0$ 只有零解，所以 $r(A)=n$，从而 $A$ 可逆。
:::

::: info 例 9
讨论方程组：
$$
\begin{cases}
x+y+z=1,\\
2x+3y+4z=2,\\
3x+4y+5z=a
\end{cases}
$$
的解。
:::

::: details 解析
注意第三个方程的左端等于前两个方程左端之和。因此有解必须满足常数项也满足相同关系：
$$
a=1+2=3.
$$

- 当 $a\ne3$ 时，$r(A)<r(A,\boldsymbol b)$，无解；
- 当 $a=3$ 时，第三式冗余，$r(A)=2<3$，有无穷多解。

当 $a=3$ 时令 $z=t$，由前两式解得：
$$
y=-2t,\qquad x=1+t.
$$
:::

::: info 例 10
设 $A$ 为 $m\times n$ 矩阵。证明线性方程组
$A\boldsymbol x=\boldsymbol b$ 有解当且仅当
$\boldsymbol b$ 与 $A$ 的列向量组增广后秩不变。
:::

::: details 解析
方程 $A\boldsymbol x=\boldsymbol b$ 的含义是：
$$
\boldsymbol b=x_1\boldsymbol a_1+\cdots+x_n\boldsymbol a_n,
$$
即 $\boldsymbol b$ 可由 $A$ 的列向量组线性表示。这当且仅当增添
$\boldsymbol b$ 后没有扩大列空间，也就是：
$$
r(A)=r(A,\boldsymbol b).
$$
:::

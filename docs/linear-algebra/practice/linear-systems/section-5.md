<h1><center>综合训练与答题技巧</center></h1>

::: info 例 1
三元非齐次方程组有三个解 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$，且 $\boldsymbol\eta_1-\boldsymbol\eta_2$ 与 $\boldsymbol\eta_1-\boldsymbol\eta_3$ 线性无关。求系数矩阵秩的最大可能值。
:::

::: details 解析
两个差向量是对应齐次方程组的两个线性无关解，所以齐次解空间维数至少为 $2$：
$$
3-r(A)\ge2.
$$
因此 $r(A)\le1$，最大可能值为 $1$。
:::

::: info 例 2
若 $r(A)=r(A,\boldsymbol b)=n$，方程组
$A\boldsymbol x=\boldsymbol b$ 有多少个解？
:::

::: details 解析
系数秩与增广秩相等，故有解；共同的秩又等于未知数个数 $n$，没有自由变量，所以有唯一解。
:::

::: info 例 3
写出方程 $x_1-2x_2+x_3=4$ 的通解。
:::

::: details 解析
令 $x_2=s,x_3=t$，则：
$$
x_1=4+2s-t.
$$
所以：
$$
\boldsymbol x=(4,0,0)^T
+s(2,1,0)^T+t(-1,0,1)^T.
$$
:::

::: info 例 4
一个六元齐次方程组的系数矩阵秩为 $4$。基础解系含几个向量？
:::

::: details 解析
解空间维数为：
$$
6-4=2.
$$
因此基础解系含两个线性无关解向量。
:::

::: info 例 5
设 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是同一非齐次方程组的解，
$\boldsymbol\xi$ 是对应齐次方程组的解。判断
$\boldsymbol\eta_1+\boldsymbol\xi$ 与
$2\boldsymbol\eta_1-\boldsymbol\eta_2$ 是否仍为原方程组的解。
:::

::: details 解析
$$
A(\boldsymbol\eta_1+\boldsymbol\xi)
=\boldsymbol b+\boldsymbol0=\boldsymbol b,
$$
所以第一向量是原方程组的解。第二向量的非齐次解系数和为
$2-1=1$，故：
$$
A(2\boldsymbol\eta_1-\boldsymbol\eta_2)=\boldsymbol b,
$$
也仍是原方程组的解。
:::

::: info 例 6
讨论方程组：
$$
\begin{cases}
x+y=1,\\
ax+ay=b
\end{cases}
$$
的解。
:::

::: details 解析
第二式左端是第一式左端的 $a$ 倍。

- 若 $b=a$，两个方程相容且等价，有无穷多解：
  $x=1-t,y=t$；
- 若 $b\ne a$，常数项比例不一致，方程组无解。

该方程组不可能有唯一解，因为系数矩阵的秩至多为 $1<2$。
:::

::: info 例 7
设 $A$ 为 $3\times5$ 矩阵，$r(A)=3$。对任意
$\boldsymbol b\in\mathbb R^3$，方程
$A\boldsymbol x=\boldsymbol b$ 是否有解？若有，解空间含几个自由参数？
:::

::: details 解析
$r(A)=3$ 等于行数，说明 $A$ 的列空间为 $\mathbb R^3$，所以任意
$\boldsymbol b$ 都可由其列向量表示，方程必有解。

自由参数个数为：
$$
5-r(A)=2.
$$
:::

::: info 例 8
设 $A\boldsymbol x=\boldsymbol b$ 有解，且对应齐次方程组的基础解系为
$\boldsymbol\xi_1,\boldsymbol\xi_2$。证明任意三个非齐次解的差向量都属于
$\operatorname{span}\{\boldsymbol\xi_1,\boldsymbol\xi_2\}$。
:::

::: details 解析
任意两个非齐次解 $\boldsymbol\eta_i,\boldsymbol\eta_j$ 满足：
$$
A(\boldsymbol\eta_i-\boldsymbol\eta_j)=0.
$$
所以差向量是对应齐次方程组的解。基础解系张成全部齐次解，因此：
$$
\boldsymbol\eta_i-\boldsymbol\eta_j
\in\operatorname{span}\{\boldsymbol\xi_1,\boldsymbol\xi_2\}.
$$
:::

::: info 例 9
设 $A$ 为 $n$ 阶矩阵。若齐次方程
$A\boldsymbol x=0$ 与
$A^2\boldsymbol x=0$ 同解，证明：
$$
r(A)=r(A^2).
$$
:::

::: details 解析
同解即：
$$
N(A)=N(A^2).
$$
由秩—零度定理：
$$
r(A)=n-\dim N(A),\qquad
r(A^2)=n-\dim N(A^2).
$$
两个零空间维数相同，故两个秩相等。
:::

::: info 例 10
设非齐次方程组 $A\boldsymbol x=\boldsymbol b$ 有解。证明它的解集可以写成两个线性子空间的并集，当且仅当它本身就是一个线性子空间。
:::

::: details 解析
若解集本身是线性子空间，显然可写成它与自身的并集。

反之，设非齐次解集 $S=U\cup V$，其中 $U,V$ 是线性子空间。因为
$0\in U\cup V$，故 $0\in S$。于是：
$$
A0=\boldsymbol b,
$$
得到 $\boldsymbol b=0$。因此原方程组实际上是齐次方程组，其解集为线性子空间。
:::

## 答题技巧

1. 第一行先写秩判定，再做分类。
2. 通解中明确标出特解、基础解系和自由参数。
3. 含参数消元时保留关键因子，不提前约去。
4. 已知多个非齐次解时先作差，转化为齐次解。

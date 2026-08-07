<h1><center>第三节 非齐次方程组</center></h1>

::: info 例 1
设 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是 $A\boldsymbol x=\boldsymbol b$ 的两个解，证明 $\boldsymbol\eta_1-\boldsymbol\eta_2$ 是 $A\boldsymbol x=0$ 的解。
:::

::: details 解析
$$
A(\boldsymbol\eta_1-\boldsymbol\eta_2)
=A\boldsymbol\eta_1-A\boldsymbol\eta_2
=\boldsymbol b-\boldsymbol b=0.
$$
:::

::: info 例 2
已知非齐次方程组的一个特解为 $\boldsymbol\eta^*=(1,0,2)^T$，对应齐次方程组的基础解系为 $\boldsymbol\xi=(-1,1,0)^T$，写出通解。
:::

::: details 解析
$$
\boldsymbol x=\boldsymbol\eta^*+c\boldsymbol\xi
=(1,0,2)^T+c(-1,1,0)^T.
$$
:::

::: info 例 3
若 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$ 都是同一非齐次方程组的解，判断 $2\boldsymbol\eta_1-\boldsymbol\eta_2$ 与 $\boldsymbol\eta_1+\boldsymbol\eta_2-2\boldsymbol\eta_3$ 分别是什么解。
:::

::: details 解析
第一组系数和为 $1$，故仍为原非齐次方程组的解；第二组系数和为 $0$，故为对应齐次方程组的解。
:::

::: info 例 4
已知非齐次方程组的一个特解为
$\boldsymbol\eta^*=(1,-1,0,2)^T$，对应齐次方程组的基础解系为：
$$
\boldsymbol\xi_1=(1,0,-1,0)^T,\qquad
\boldsymbol\xi_2=(0,1,1,-1)^T.
$$
写出通解并说明自由变量个数。
:::

::: details 解析
通解为：
$$
\boldsymbol x=\boldsymbol\eta^*
+c_1\boldsymbol\xi_1+c_2\boldsymbol\xi_2.
$$
即：
$$
\boldsymbol x=(1,-1,0,2)^T
+c_1(1,0,-1,0)^T
+c_2(0,1,1,-1)^T.
$$
共有两个自由参数，因此自由变量个数为 $2$。
:::

::: info 例 5
设 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$ 是
$A\boldsymbol x=\boldsymbol b$ 的解。证明当
$c_1+c_2+c_3=1$ 时，
$c_1\boldsymbol\eta_1+c_2\boldsymbol\eta_2+c_3\boldsymbol\eta_3$
仍是原方程组的解。
:::

::: details 解析
利用线性性：
$$
A\left(\sum_{i=1}^3c_i\boldsymbol\eta_i\right)
=\sum_{i=1}^3c_iA\boldsymbol\eta_i
=\left(\sum_{i=1}^3c_i\right)\boldsymbol b
=\boldsymbol b.
$$
所以该仿射组合仍为原非齐次方程组的解。
:::

::: info 例 6
若 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 都是
$A\boldsymbol x=\boldsymbol b$ 的解，
$\boldsymbol\eta_1+\boldsymbol\eta_2$ 是哪个方程组的解？
:::

::: details 解析
$$
A(\boldsymbol\eta_1+\boldsymbol\eta_2)
=A\boldsymbol\eta_1+A\boldsymbol\eta_2
=2\boldsymbol b.
$$
所以它是 $A\boldsymbol x=2\boldsymbol b$ 的解。除非
$\boldsymbol b=0$，否则它一般不是原方程组的解。
:::

::: info 例 7
一个有解的四元非齐次方程组满足 $r(A)=2$。它的解集在几何上有几维？
:::

::: details 解析
对应齐次解空间维数为：
$$
4-r(A)=2.
$$
非齐次解集是“一个特解加上齐次解空间”，因此是 $\mathbb R^4$ 中的二维仿射平面。
:::

::: info 例 8
设两个非齐次方程组
$A\boldsymbol x=\boldsymbol b_1$ 与
$A\boldsymbol x=\boldsymbol b_2$ 有一个公共解。证明两个方程组的解集相同。
:::

::: details 解析
若 $\boldsymbol\eta$ 是公共解，则：
$$
\boldsymbol b_1=A\boldsymbol\eta=\boldsymbol b_2.
$$
因此两个方程组实际上完全相同，解集自然相同。
:::

::: info 例 9
若 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 是
$A\boldsymbol x=\boldsymbol b$ 的解，计算
$A(3\boldsymbol\eta_1-2\boldsymbol\eta_2)$。
:::

::: details 解析
$$
A(3\boldsymbol\eta_1-2\boldsymbol\eta_2)
=3\boldsymbol b-2\boldsymbol b
=\boldsymbol b.
$$
因为系数和为 $1$，所以
$3\boldsymbol\eta_1-2\boldsymbol\eta_2$ 仍为原方程组的解。
:::

::: info 例 10
证明非齐次方程组 $A\boldsymbol x=\boldsymbol b$ 的非空解集是线性子空间，当且仅当 $\boldsymbol b=0$。
:::

::: details 解析
若解集是线性子空间，它必须含零向量，因此：
$$
A\boldsymbol0=\boldsymbol b.
$$
左边为零，故 $\boldsymbol b=0$。

反之，若 $\boldsymbol b=0$，方程组成为齐次方程组。其解集对向量加法与数乘封闭，并含零向量，所以是线性子空间。
:::

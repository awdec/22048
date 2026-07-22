<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 性质与相似矩阵</center></h1>

::: info 例 1
若 $A\boldsymbol\xi=2\boldsymbol\xi$，求 $(A^2-3A+I)\boldsymbol\xi$。
:::

::: details 解析
对多项式 $f(t)=t^2-3t+1$：
$$
f(A)\boldsymbol\xi=f(2)\boldsymbol\xi=(-1)\boldsymbol\xi.
$$
:::

::: info 例 2
若 $A$ 可逆且特征值为 $1,2,4$，求 $A^{-1}$ 的特征值。
:::

::: details 解析
逐个取倒数，得到：
$$
1,\quad\frac12,\quad\frac14.
$$
:::

::: info 例 3
两个三阶矩阵的特征值都为 $1,1,2$，能否断言它们相似？
:::

::: details 解析
不能。还需比较每个重特征值对应的线性无关特征向量个数。例如一个矩阵可对角化、另一个不可对角化时，它们不相似。
:::

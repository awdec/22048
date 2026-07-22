<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 特征值与特征向量</center></h1>

::: info 例 1
求 $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$ 的特征值与特征向量。
:::

::: details 解析
$$
|\lambda I-A|=(\lambda-2)^2-1=(\lambda-1)(\lambda-3).
$$
故特征值为 $1,3$。

当 $\lambda=1$ 时，解 $(A-I)\boldsymbol x=0$，得特征向量为 $k(1,-1)^T$，$k\ne0$。

当 $\lambda=3$ 时，特征向量为 $k(1,1)^T$，$k\ne0$。
:::

::: info 例 2
矩阵 $A$ 的特征值为 $1,2,-3$，求 $|A|$ 与 $\operatorname{tr}(A)$。
:::

::: details 解析
$$
|A|=1\cdot2\cdot(-3)=-6,
$$
$$
\operatorname{tr}(A)=1+2-3=0.
$$
:::

::: info 例 3
若 $A\boldsymbol\xi=0$ 且 $\boldsymbol\xi\ne0$，说明什么？
:::

::: details 解析
$0$ 是 $A$ 的特征值，$\boldsymbol\xi$ 是对应特征向量；同时 $|A|=0$，$A$ 不可逆。
:::

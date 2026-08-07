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

::: info 例 4
求上三角矩阵
$$
A=\begin{pmatrix}
1&2&0\\
0&-1&3\\
0&0&4
\end{pmatrix}
$$
的特征值。
:::

::: details 解析
三角矩阵的特征值就是主对角线元素，因此：
$$
\lambda_1=1,\qquad \lambda_2=-1,\qquad \lambda_3=4.
$$
三者之和为 $\operatorname{tr}(A)=4$，乘积为 $|A|=-4$。
:::

::: info 例 5
求矩阵
$$
A=\begin{pmatrix}
0&1&0\\
1&0&0\\
0&0&2
\end{pmatrix}
$$
的特征值与特征向量。
:::

::: details 解析
$$
|\lambda I-A|
=(\lambda-2)(\lambda^2-1),
$$
故特征值为 $1,-1,2$。

对应特征向量可分别取：
$$
\lambda=1:\ (1,1,0)^T,
$$
$$
\lambda=-1:\ (1,-1,0)^T,
\qquad
\lambda=2:\ (0,0,1)^T.
$$
各特征向量的任意非零倍数也都是对应特征向量。
:::

::: info 例 6
已知 $\boldsymbol\xi=(1,2)^T$ 是
$$
A=\begin{pmatrix}a&1\\2&0\end{pmatrix}
$$
的特征向量，求 $a$ 及对应特征值。
:::

::: details 解析
设对应特征值为 $\lambda$，则：
$$
A\boldsymbol\xi=(a+2,2)^T
=\lambda(1,2)^T.
$$
由第二个分量得 $2=2\lambda$，所以 $\lambda=1$；再由第一个分量得：
$$
a+2=1\Longrightarrow a=-1.
$$
:::

::: info 例 7
三阶矩阵 $A$ 的特征多项式为
$(\lambda-2)^2(\lambda+1)$。分别讨论
$r(A-2I)=1$ 与 $r(A-2I)=2$ 时，特征值 $2$ 的几何重数。
:::

::: details 解析
特征值 $2$ 的特征空间为 $N(A-2I)$，其维数为：
$$
3-r(A-2I).
$$

- 若 $r(A-2I)=1$，几何重数为 $2$；
- 若 $r(A-2I)=2$，几何重数为 $1$。

两种情形的代数重数都为 $2$。
:::

::: info 例 8
设二阶矩阵 $A$ 满足
$\operatorname{tr}(A)=5$、$|A|=6$。求其特征值。
:::

::: details 解析
二阶矩阵的特征多项式为：
$$
\lambda^2-\operatorname{tr}(A)\lambda+|A|
=\lambda^2-5\lambda+6.
$$
所以：
$$
(\lambda-2)(\lambda-3)=0,
$$
特征值为 $2,3$。
:::

::: info 例 9
设 $A=\boldsymbol u\boldsymbol v^T$，其中
$\boldsymbol u,\boldsymbol v\in\mathbb R^n$ 均非零。求 $A$ 的非零特征值。
:::

::: details 解析
$$
A\boldsymbol u
=\boldsymbol u\boldsymbol v^T\boldsymbol u
=(\boldsymbol v^T\boldsymbol u)\boldsymbol u.
$$
所以当 $\boldsymbol v^T\boldsymbol u\ne0$ 时，
$\boldsymbol u$ 是特征向量，对应非零特征值
$\boldsymbol v^T\boldsymbol u$。

又 $r(A)=1$，故其余特征值全为 $0$。若
$\boldsymbol v^T\boldsymbol u=0$，则 $A$ 的全部特征值均为 $0$。
:::

::: info 例 10
三阶矩阵 $A$ 满足
$$
A^2-3A+2I=O,\qquad \operatorname{tr}(A)=4.
$$
求 $A$ 的全部特征值及 $|A|$。
:::

::: details 解析
若 $\lambda$ 是 $A$ 的特征值，则：
$$
\lambda^2-3\lambda+2=0,
$$
所以 $\lambda\in\{1,2\}$。设特征值 $2$ 的代数重数为 $k$，则特征值
$1$ 的代数重数为 $3-k$。由迹：
$$
2k+(3-k)=4,
$$
得 $k=1$。因此全部特征值为：
$$
2,1,1,
$$
从而：
$$
|A|=2.
$$
:::

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

::: info 例 4
证明 $A$ 与 $A^T$ 的特征值相同。
:::

::: details 解析
二者的特征多项式满足：
$$
|\lambda I-A^T|
=|(\lambda I-A)^T|
=|\lambda I-A|.
$$
所以特征多项式相同，特征值及其代数重数均相同。
:::

::: info 例 5
设三阶可逆矩阵 $A$ 的特征值为 $1,2,4$。求 $A^*$ 的特征值。
:::

::: details 解析
$$
A^*=|A|A^{-1},\qquad |A|=1\cdot2\cdot4=8.
$$
若 $\lambda$ 是 $A$ 的特征值，则 $A^*$ 的对应特征值为
$|A|/\lambda$。因此：
$$
8,\quad4,\quad2.
$$
:::

::: info 例 6
若 $A\sim B$，证明：
$$
\operatorname{tr}(A)=\operatorname{tr}(B),
\qquad |A|=|B|.
$$
:::

::: details 解析
由 $B=P^{-1}AP$：
$$
|B|=|P^{-1}||A||P|=|A|.
$$
同时利用迹的循环性质：
$$
\operatorname{tr}(B)
=\operatorname{tr}(P^{-1}AP)
=\operatorname{tr}(APP^{-1})
=\operatorname{tr}(A).
$$
:::

::: info 例 7
矩阵 $A$ 的特征值为 $-1,0,2$。求：
$$
|A^3-2A+I|.
$$
:::

::: details 解析
令 $f(t)=t^3-2t+1$，则 $f(A)$ 的特征值为：
$$
f(-1)=2,\qquad f(0)=1,\qquad f(2)=5.
$$
所以：
$$
|A^3-2A+I|=2\cdot1\cdot5=10.
$$
:::

::: info 例 8
设
$$
A=\begin{pmatrix}a&1\\b&3-a\end{pmatrix},\qquad
B=\begin{pmatrix}1&0\\0&2\end{pmatrix}.
$$
求 $A\sim B$ 时 $a,b$ 应满足的关系。
:::

::: details 解析
若 $A\sim B$，二者迹和行列式相同。迹均为 $3$，只需：
$$
|A|=a(3-a)-b=2.
$$
故：
$$
b=a(3-a)-2.
$$
反过来，满足此式时 $A$ 的特征值为互异的 $1,2$，所以 $A$ 可对角化并相似于
$B$。因此该条件也是充分的。
:::

::: info 例 9
证明同阶方阵 $AB$ 与 $BA$ 的特征多项式相同。
:::

::: details 解析
当 $\lambda\ne0$ 时：
$$
|\lambda I-AB|
=\lambda^n\left|I-\frac1\lambda AB\right|
=\lambda^n\left|I-\frac1\lambda BA\right|
=|\lambda I-BA|.
$$
这里使用了 $|I+XY|=|I+YX|$。两边都是关于 $\lambda$ 的 $n$ 次多项式，并在无限多个
$\lambda\ne0$ 处相等，因此恒等，故特征多项式相同。
:::

::: info 例 10
设 $A^2=A$。证明 $A$ 相似于
$$
\operatorname{diag}(I_r,O),
$$
其中 $r=r(A)$。
:::

::: details 解析
对任意向量 $\boldsymbol x$：
$$
\boldsymbol x=A\boldsymbol x+(I-A)\boldsymbol x.
$$
第一项属于 $R(A)$，第二项属于 $N(A)$，因为
$A(I-A)=O$。若某向量同时属于 $R(A)$ 与 $N(A)$，写成
$\boldsymbol y=A\boldsymbol z$ 后有
$A\boldsymbol y=A^2\boldsymbol z=A\boldsymbol z=\boldsymbol y$，而又
$A\boldsymbol y=0$，故 $\boldsymbol y=0$。

所以空间直和分解为 $R(A)\oplus N(A)$。取适应该分解的基，$A$ 在
$R(A)$ 上为恒等变换，在 $N(A)$ 上为零变换，故相似于
$\operatorname{diag}(I_r,O)$。
:::

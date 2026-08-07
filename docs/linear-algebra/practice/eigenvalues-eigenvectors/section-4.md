<h1><center>第四节 实对称矩阵</center></h1>

::: info 例 1
正交对角化 $A=\begin{pmatrix}2&1\\1&2\end{pmatrix}$。
:::

::: details 解析
特征值为 $1,3$，对应单位特征向量可取：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,-1)^T,
\qquad
\boldsymbol q_2=\frac1{\sqrt2}(1,1)^T.
$$
令 $Q=(\boldsymbol q_1,\boldsymbol q_2)$，则：
$$
Q^TAQ=\operatorname{diag}(1,3).
$$
:::

::: info 例 2
实对称矩阵不同特征值对应的两个特征向量为什么正交？
:::

::: details 解析
若 $A\boldsymbol x=\lambda\boldsymbol x$、$A\boldsymbol y=\mu\boldsymbol y$，则利用 $A^T=A$：
$$
\lambda\boldsymbol x^T\boldsymbol y
=(A\boldsymbol x)^T\boldsymbol y
=\boldsymbol x^TA\boldsymbol y
=\mu\boldsymbol x^T\boldsymbol y.
$$
当 $\lambda\ne\mu$ 时，$(\lambda-\mu)\boldsymbol x^T\boldsymbol y=0$，故内积为零。
:::

::: info 例 3
正交矩阵 $Q$ 的行列式可能取哪些值？
:::

::: details 解析
由 $Q^TQ=I$ 取行列式：
$$
|Q|^2=1,
$$
故 $|Q|=\pm1$。
:::

::: info 例 4
求参数 $a,b$，使
$$
A=\begin{pmatrix}
1&a&2\\
3&0&b\\
2&-1&4
\end{pmatrix}
$$
为实对称矩阵。
:::

::: details 解析
实对称要求关于主对角线对称位置的元素相等：
$$
a=3,\qquad b=-1.
$$
$a_{13}=a_{31}=2$ 已满足条件。
:::

::: info 例 5
正交对角化：
$$
A=\begin{pmatrix}
2&0&0\\
0&2&1\\
0&1&2
\end{pmatrix}.
$$
:::

::: details 解析
特征值为 $2,1,3$。可取对应标准正交特征向量：
$$
\boldsymbol q_1=(1,0,0)^T,
$$
$$
\boldsymbol q_2=\frac1{\sqrt2}(0,1,-1)^T,\qquad
\boldsymbol q_3=\frac1{\sqrt2}(0,1,1)^T.
$$
令 $Q=(\boldsymbol q_1,\boldsymbol q_2,\boldsymbol q_3)$，则：
$$
Q^TAQ=\operatorname{diag}(2,1,3).
$$
:::

::: info 例 6
对三阶全 $1$ 矩阵
$$
J=\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}
$$
构造一组标准正交特征向量。
:::

::: details 解析
特征值 $3$ 对应单位特征向量：
$$
\boldsymbol q_1=\frac1{\sqrt3}(1,1,1)^T.
$$
特征值 $0$ 的特征空间为 $x+y+z=0$，在其中取标准正交基：
$$
\boldsymbol q_2=\frac1{\sqrt2}(1,-1,0)^T,\qquad
\boldsymbol q_3=\frac1{\sqrt6}(1,1,-2)^T.
$$
三者即为所求标准正交特征向量组。
:::

::: info 例 7
把
$$
A=\begin{pmatrix}2&1\\1&2\end{pmatrix}
$$
写成谱分解形式
$A=\lambda_1\boldsymbol q_1\boldsymbol q_1^T+
\lambda_2\boldsymbol q_2\boldsymbol q_2^T$。
:::

::: details 解析
取：
$$
\lambda_1=1,\quad
\boldsymbol q_1=\frac1{\sqrt2}(1,-1)^T;
\qquad
\lambda_2=3,\quad
\boldsymbol q_2=\frac1{\sqrt2}(1,1)^T.
$$
则：
$$
A=\boldsymbol q_1\boldsymbol q_1^T
+3\boldsymbol q_2\boldsymbol q_2^T.
$$
展开即可恢复原矩阵。
:::

::: info 例 8
证明实对称矩阵的特征值都是实数。
:::

::: details 解析
允许特征向量暂取复向量。设
$A\boldsymbol z=\lambda\boldsymbol z$，$\boldsymbol z\ne0$。则：
$$
\boldsymbol z^HA\boldsymbol z
=\lambda\boldsymbol z^H\boldsymbol z.
$$
这里 $\boldsymbol z^H$ 表示共轭转置。因为实对称矩阵也满足
$A^H=A$，标量
$\boldsymbol z^HA\boldsymbol z$ 为实数，而
$\boldsymbol z^H\boldsymbol z>0$，故：
$$
\lambda=\frac{\boldsymbol z^HA\boldsymbol z}
{\boldsymbol z^H\boldsymbol z}\in\mathbb R.
$$
:::

::: info 例 9
设实对称矩阵 $A$ 的最小、最大特征值分别为
$\lambda_{\min},\lambda_{\max}$。证明对任意单位向量
$\boldsymbol x$：
$$
\lambda_{\min}\le\boldsymbol x^TA\boldsymbol x
\le\lambda_{\max}.
$$
:::

::: details 解析
取正交对角化 $A=Q\Lambda Q^T$，令
$\boldsymbol y=Q^T\boldsymbol x$，则 $\|\boldsymbol y\|=1$。于是：
$$
\boldsymbol x^TA\boldsymbol x
=\boldsymbol y^T\Lambda\boldsymbol y
=\sum_i\lambda_i y_i^2.
$$
由于 $y_i^2\ge0$ 且 $\sum_i y_i^2=1$，上式是各特征值的加权平均，故落在最小、最大特征值之间。
:::

::: info 例 10
一个二阶实对称矩阵的标准正交特征向量为：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,1)^T,\qquad
\boldsymbol q_2=\frac1{\sqrt2}(1,-1)^T,
$$
对应特征值分别为 $2,-1$。求该矩阵。
:::

::: details 解析
由谱分解：
$$
A=2\boldsymbol q_1\boldsymbol q_1^T
-\boldsymbol q_2\boldsymbol q_2^T.
$$
计算得：
$$
A=\frac12\begin{pmatrix}1&3\\3&1\end{pmatrix}.
$$
:::

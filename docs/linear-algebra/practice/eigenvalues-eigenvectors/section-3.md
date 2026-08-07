<h1><center>第三节 相似对角化</center></h1>

::: info 例 1
二阶矩阵 $A$ 有两个不同特征值，证明 $A$ 可对角化。
:::

::: details 解析
不同特征值对应的特征向量线性无关，因此可取得两个线性无关特征向量组成可逆矩阵 $P$，使 $P^{-1}AP$ 为对角矩阵。
:::

::: info 例 2
三阶矩阵 $A$ 的特征值为 $1,1,2$，且 $r(A-I)=1$，判断是否可对角化。
:::

::: details 解析
特征值 $1$ 的特征空间维数为：
$$
3-r(A-I)=2,
$$
等于其代数重数 $2$；特征值 $2$ 可提供一个特征向量，因此共有三个线性无关特征向量，$A$ 可对角化。
:::

::: info 例 3
若 $A=P\operatorname{diag}(1,2)P^{-1}$，写出 $A^n$。
:::

::: details 解析
$$
A^n=P\operatorname{diag}(1,2^n)P^{-1}.
$$
:::

::: info 例 4
将
$$
A=\begin{pmatrix}4&1\\0&2\end{pmatrix}
$$
相似对角化。
:::

::: details 解析
特征值为 $4,2$。对应特征向量可取：
$$
\lambda=4:\ \boldsymbol\xi_1=(1,0)^T,
\qquad
\lambda=2:\ \boldsymbol\xi_2=(1,-2)^T.
$$
令：
$$
P=(\boldsymbol\xi_1,\boldsymbol\xi_2)
=\begin{pmatrix}1&1\\0&-2\end{pmatrix},
$$
则：
$$
P^{-1}AP=\operatorname{diag}(4,2).
$$
:::

::: info 例 5
判断
$$
A=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$
是否可相似对角化。
:::

::: details 解析
$A$ 只有特征值 $\lambda=1$，代数重数为 $2$。但：
$$
A-I=\begin{pmatrix}0&1\\0&0\end{pmatrix},
$$
其零空间维数为 $1$，只能得到一个线性无关特征向量。因此几何重数小于代数重数，$A$ 不可相似对角化。
:::

::: info 例 6
三阶矩阵 $A$ 的特征值为 $1,1,1$。证明 $A$ 可对角化当且仅当 $A=I$。
:::

::: details 解析
若 $A$ 可对角化，则：
$$
A=P\operatorname{diag}(1,1,1)P^{-1}
=PIP^{-1}=I.
$$
反之，$I$ 本身就是对角矩阵，当然可对角化。
:::

::: info 例 7
设
$$
A=\begin{pmatrix}2&1\\0&1\end{pmatrix}.
$$
利用相似对角化求 $A^n$。
:::

::: details 解析
特征值为 $2,1$，对应特征向量可取
$(1,0)^T$、$(1,-1)^T$。令：
$$
P=\begin{pmatrix}1&1\\0&-1\end{pmatrix},
\qquad P^{-1}=P.
$$
则：
$$
A=P\operatorname{diag}(2,1)P^{-1}.
$$
所以：
$$
A^n=P\operatorname{diag}(2^n,1)P^{-1}
=\begin{pmatrix}2^n&2^n-1\\0&1\end{pmatrix}.
$$
:::

::: info 例 8
设 $A=P\operatorname{diag}(-1,2,3)P^{-1}$，求
$(A^2+I)^{-1}$。
:::

::: details 解析
$$
A^2+I
=P\operatorname{diag}(2,5,10)P^{-1}.
$$
三个对角元均非零，所以矩阵可逆，且：
$$
(A^2+I)^{-1}
=P\operatorname{diag}\left(\frac12,\frac15,\frac1{10}\right)P^{-1}.
$$
:::

::: info 例 9
设三阶矩阵 $A$ 的特征值为 $0,1,2$。证明
$A^3-3A^2+2A=O$。
:::

::: details 解析
三个特征值互异，所以 $A$ 可对角化：
$$
A=P\operatorname{diag}(0,1,2)P^{-1}.
$$
令 $f(t)=t(t-1)(t-2)$，则 $f(0)=f(1)=f(2)=0$。因此：
$$
f(A)=Pf(\operatorname{diag}(0,1,2))P^{-1}=O,
$$
即：
$$
A^3-3A^2+2A=O.
$$
:::

::: info 例 10
设斐波那契数列满足
$F_{n+1}=F_n+F_{n-1}$、$F_0=0,F_1=1$。利用矩阵
$$
M=\begin{pmatrix}1&1\\1&0\end{pmatrix}
$$
说明为什么可以通过相似对角化求 $F_n$。
:::

::: details 解析
递推可写成：
$$
\begin{pmatrix}F_{n+1}\\F_n\end{pmatrix}
=M^n\begin{pmatrix}1\\0\end{pmatrix}.
$$
$M$ 的特征值是方程
$\lambda^2-\lambda-1=0$ 的两个不同实根：
$$
\varphi=\frac{1+\sqrt5}{2},\qquad
\psi=\frac{1-\sqrt5}{2}.
$$
因此 $M$ 可相似对角化，计算 $M^n$ 后得到：
$$
F_n=\frac{\varphi^n-\psi^n}{\sqrt5}.
$$
:::

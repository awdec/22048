<h1><center>第四节 正定性</center></h1>

::: info 例 1
判断 $A=\begin{pmatrix}2&1\\1&3\end{pmatrix}$ 是否正定。
:::

::: details 解析
顺序主子式：
$$
\Delta_1=2>0,
$$
$$
\Delta_2=|A|=6-1=5>0.
$$
故 $A$ 正定。
:::

::: info 例 2
讨论 $A=\begin{pmatrix}1&a\\a&2\end{pmatrix}$ 正定时参数 $a$ 的范围。
:::

::: details 解析
要求：
$$
\Delta_1=1>0,\qquad \Delta_2=2-a^2>0.
$$
所以：
$$
-\sqrt2<a<\sqrt2.
$$
:::

::: info 例 3
矩阵 $A$ 的行列式大于零，能否推出 $A$ 正定？
:::

::: details 解析
不能。例如：
$$
A=\begin{pmatrix}-1&0\\0&-1\end{pmatrix}
$$
的行列式为 $1>0$，但 $\boldsymbol x^TA\boldsymbol x<0$ 对所有非零向量成立，它是负定矩阵。
:::

::: info 例 4
判断
$$
A=\begin{pmatrix}-2&1\\1&-3\end{pmatrix}
$$
是否负定。
:::

::: details 解析
$A$ 负定当且仅当 $-A$ 正定。对：
$$
-A=\begin{pmatrix}2&-1\\-1&3\end{pmatrix},
$$
顺序主子式为：
$$
2>0,\qquad 6-1=5>0.
$$
故 $-A$ 正定，$A$ 负定。
:::

::: info 例 5
判断
$$
A=\begin{pmatrix}1&1\\1&1\end{pmatrix}
$$
的正定性。
:::

::: details 解析
$$
\boldsymbol x^TA\boldsymbol x=(x_1+x_2)^2\ge0,
$$
所以 $A$ 半正定。但取非零向量
$(1,-1)^T$ 时二次型为零，因此 $A$ 不是正定矩阵。
:::

::: info 例 6
实对称矩阵 $A$ 的特征值为 $1,2,5$。证明 $A$ 正定，并判断
$A^{-1}$ 是否正定。
:::

::: details 解析
实对称矩阵正定当且仅当全部特征值为正，因此 $A$ 正定。

$A^{-1}$ 的特征值为：
$$
1,\quad\frac12,\quad\frac15,
$$
仍全部为正，且 $A^{-1}$ 仍为实对称矩阵，所以 $A^{-1}$ 也正定。
:::

::: info 例 7
讨论实对称矩阵
$$
A=\begin{pmatrix}
1&a&0\\
a&2&1\\
0&1&2
\end{pmatrix}
$$
正定时 $a$ 的范围。
:::

::: details 解析
顺序主子式为：
$$
\Delta_1=1,\qquad
\Delta_2=2-a^2,\qquad
\Delta_3=3-2a^2.
$$
要求三者全为正。最强条件为：
$$
3-2a^2>0,
$$
所以：
$$
|a|<\sqrt{\frac32}.
$$
该条件也自动保证 $\Delta_2>0$。
:::

::: info 例 8
证明正定矩阵 $A$ 的逆矩阵 $A^{-1}$ 仍正定。
:::

::: details 解析
正定矩阵可正交对角化：
$$
A=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_n)Q^T,
\qquad \lambda_i>0.
$$
于是：
$$
A^{-1}
=Q\operatorname{diag}\left(\frac1{\lambda_1},\ldots,
\frac1{\lambda_n}\right)Q^T.
$$
其特征值仍全为正，所以 $A^{-1}$ 正定。
:::

::: info 例 9
设 $A,B$ 都是同阶实对称正定矩阵。证明 $A+B$ 正定。
:::

::: details 解析
对任意非零向量 $\boldsymbol x$：
$$
\boldsymbol x^T(A+B)\boldsymbol x
=\boldsymbol x^TA\boldsymbol x
+\boldsymbol x^TB\boldsymbol x.
$$
两项都严格大于零，所以其和也严格大于零。因此 $A+B$ 正定。
:::

::: info 例 10
设 $A$ 是正定矩阵。证明分块对称矩阵
$$
M=\begin{pmatrix}A&B\\B^T&D\end{pmatrix}
$$
正定，当且仅当
$D-B^TA^{-1}B$ 正定。
:::

::: details 解析
对任意分块向量 $(\boldsymbol x^T,\boldsymbol y^T)^T$，配方得：
$$
\begin{aligned}
\begin{pmatrix}\boldsymbol x\\\boldsymbol y\end{pmatrix}^T
M
\begin{pmatrix}\boldsymbol x\\\boldsymbol y\end{pmatrix}
&=(\boldsymbol x+A^{-1}B\boldsymbol y)^T
A(\boldsymbol x+A^{-1}B\boldsymbol y)\\
&\quad+\boldsymbol y^T
(D-B^TA^{-1}B)\boldsymbol y.
\end{aligned}
$$
第一项由 $A$ 正定而非负。整个式子对所有非零分块向量严格为正，当且仅当第二个矩阵
$D-B^TA^{-1}B$ 正定。这就是 Schur 补判别法。
:::

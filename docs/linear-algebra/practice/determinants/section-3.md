<h1><center>第三节 特殊行列式与克拉默法则</center></h1>

::: info 例 1
计算：
$$
D=\begin{vmatrix}a&b&b\\b&a&b\\b&b&a\end{vmatrix}.
$$
:::

::: details 解析
这是主对角元为 $a$、其余元素为 $b$ 的三阶行列式：
$$
D=(a-b)^2(a+2b).
$$
也可把三列加到第一列，提出 $a+2b$，再从后两列分别减第一列的适当倍数化简。
:::

::: info 例 2
方程组 $A\boldsymbol x=\boldsymbol b$ 的系数矩阵满足 $|A|=-2$，用常数列替换第二列所得行列式 $D_2=6$，求 $x_2$。
:::

::: details 解析
由克拉默法则：
$$
x_2=\frac{D_2}{|A|}=\frac6{-2}=-3.
$$
:::

::: info 例 3
若 $A$ 为三阶矩阵且 $|A|=2$，求 $|A^*|$。
:::

::: details 解析
对 $n$ 阶矩阵：$|A^*|=|A|^{n-1}$。因此：
$$
|A^*|=2^2=4.
$$
:::

::: info 例 4
计算范德蒙德行列式：
$$
D=\begin{vmatrix}
1&1&1\\
1&2&4\\
1&4&16
\end{vmatrix}.
$$
:::

::: details 解析
它是以 $x_1=1,x_2=2,x_3=4$ 为参数的范德蒙德行列式：
$$
D=\prod_{1\le i<j\le3}(x_j-x_i)
=(2-1)(4-1)(4-2)=6.
$$
:::

::: info 例 5
求 $n$ 阶行列式
$$
D_n=\begin{vmatrix}
a&b&\cdots&b\\
b&a&\cdots&b\\
\vdots&\vdots&\ddots&\vdots\\
b&b&\cdots&a
\end{vmatrix}.
$$
:::

::: details 解析
该矩阵可写成：
$$
(a-b)I+b\boldsymbol e\boldsymbol e^T,
\qquad \boldsymbol e=(1,\ldots,1)^T.
$$
$\boldsymbol e$ 方向上的特征值为 $a+(n-1)b$，与其正交的子空间上特征值为 $a-b$，重数为 $n-1$。故：
$$
D_n=(a-b)^{n-1}[a+(n-1)b].
$$
:::

::: info 例 6
设
$$
D_n=\begin{vmatrix}
2&-1&&0\\
-1&2&\ddots&\\
&\ddots&\ddots&-1\\
0&&-1&2
\end{vmatrix}_{n\times n}.
$$
求 $D_n$。
:::

::: details 解析
沿第一行展开得递推式：
$$
D_n=2D_{n-1}-D_{n-2},
$$
且 $D_1=2,D_2=3$。由递推可归纳得到：
$$
D_n=n+1.
$$
:::

::: info 例 7
设 $A$ 为二阶矩阵、$B$ 为三阶矩阵，计算分块上三角矩阵
$$
M=\begin{pmatrix}A&C\\O&B\end{pmatrix}
$$
的行列式。已知 $|A|=-2$、$|B|=5$。
:::

::: details 解析
分块上三角矩阵的行列式等于对角块行列式之积，与非对角块 $C$ 无关：
$$
|M|=|A||B|=(-2)\cdot5=-10.
$$
:::

::: info 例 8
用克拉默法则解：
$$
\begin{cases}
2x+y=5,\\
x-y=1.
\end{cases}
$$
:::

::: details 解析
系数行列式及两个替换行列式为：
$$
D=\begin{vmatrix}2&1\\1&-1\end{vmatrix}=-3,
$$
$$
D_1=\begin{vmatrix}5&1\\1&-1\end{vmatrix}=-6,\qquad
D_2=\begin{vmatrix}2&5\\1&1\end{vmatrix}=-3.
$$
因此：
$$
x=\frac{D_1}{D}=2,\qquad y=\frac{D_2}{D}=1.
$$
:::

::: info 例 9
设 $A$ 为四阶可逆矩阵，$|A|=-2$，求
$$
\left|3A^{-1}(A^*)^T\right|.
$$
:::

::: details 解析
四阶矩阵满足：
$$
|A^{-1}|=\frac1{|A|}=-\frac12,\qquad
|(A^*)^T|=|A^*|=|A|^3=-8.
$$
所以：
$$
\left|3A^{-1}(A^*)^T\right|
=3^4\left(-\frac12\right)(-8)=324.
$$
:::

::: info 例 10
讨论方程组
$$
\begin{cases}
x+y+z=1,\\
x+ay+z=2,\\
x+y+az=3
\end{cases}
$$
何时可用克拉默法则求唯一解，并在此时求解。
:::

::: details 解析
系数行列式为：
$$
D=\begin{vmatrix}
1&1&1\\
1&a&1\\
1&1&a
\end{vmatrix}=(a-1)^2.
$$
当 $a\ne1$ 时 $D\ne0$，可用克拉默法则，方程组有唯一解。用后两式分别减第一式：
$$
(a-1)y=1,\qquad (a-1)z=2.
$$
故：
$$
y=\frac1{a-1},\qquad z=\frac2{a-1},
$$
$$
x=1-y-z=\frac{a-4}{a-1}.
$$
当 $a=1$ 时系数行列式为零，不能使用克拉默法则；且三个方程左端相同、右端不同，方程组无解。
:::

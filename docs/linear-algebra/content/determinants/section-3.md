<h1><center>第三节 特殊行列式与克拉默法则</center></h1>

## 1. 范德蒙德行列式

$$
V_n=\begin{vmatrix}
1&1&\cdots&1\\
x_1&x_2&\cdots&x_n\\
x_1^2&x_2^2&\cdots&x_n^2\\
\vdots&\vdots&&\vdots\\
x_1^{n-1}&x_2^{n-1}&\cdots&x_n^{n-1}
\end{vmatrix}
=\prod_{1\le j<i\le n}(x_i-x_j).
$$


## 2. 主对角元相同的行列式

若主对角元均为 $a$，其余元素均为 $b$，则：

$$
D_n=\begin{vmatrix}
a&b&\cdots&b\\
b&a&\cdots&b\\
\vdots&\vdots&\ddots&\vdots\\
b&b&\cdots&a
\end{vmatrix}
=(a-b)^{n-1}[a+(n-1)b].
$$

可将所有列加到第一列，再从其余列中提取 $a-b$。

## 3. 递推法

三对角行列式常满足递推关系。若：

$$
D_n=\begin{vmatrix}
a&b&&\\
c&a&\ddots&\\
&\ddots&\ddots&b\\
&&c&a
\end{vmatrix},
$$

沿第一行展开可得：

$$
D_n=aD_{n-1}-bcD_{n-2}.
$$

结合 $D_1,D_2$ 即可求通项或逐阶计算。

## 4. 分块三角行列式

若行列式可以按同一方式分块，且其中一个非对角块为零矩阵：

$$
M=\begin{pmatrix}
A&B\\
O&D
\end{pmatrix}
\quad\text{或}\quad
M=\begin{pmatrix}
A&O\\
C&D
\end{pmatrix},
$$

则它的值等于主对角线上两个对角块的行列式之积：

$$
\boxed{|M|=|A|\,|D|.}
$$

其中 $A,D$ 必须是方阵，$O$ 为适当阶数的零矩阵。分块对角行列式

$$
\begin{pmatrix}
A&O\\
O&D
\end{pmatrix}
$$

是上述公式的特殊情形。

## 5. 爪型行列式

爪型行列式（也称箭头型行列式）指除第一行、第一列和主对角线外，其余元素均为零的行列式：

$$
D=\begin{vmatrix}
a_0&b_1&b_2&\cdots&b_{n-1}\\
c_1&a_1&0&\cdots&0\\
c_2&0&a_2&\cdots&0\\
\vdots&\vdots&\vdots&\ddots&\vdots\\
c_{n-1}&0&0&\cdots&a_{n-1}
\end{vmatrix}.
$$

其值为：

$$
D=\prod_{i=0}^{n-1}a_i
-\sum_{i=1}^{n-1}b_ic_i
\prod_{\substack{j=1\\j\ne i}}^{n-1}a_j.
$$

## 6. 克拉默法则

对 $n$ 元线性方程组：

$$
A\boldsymbol{x}=\boldsymbol{b},
$$

若 $|A|\ne0$，则方程组有唯一解：

$$
\boxed{x_i=\frac{D_i}{D},\qquad i=1,2,\ldots,n.}
$$

其中 $D=|A|$，$D_i$ 是用常数列 $\boldsymbol b$ 替换 $A$ 的第 $i$ 列得到的行列式。

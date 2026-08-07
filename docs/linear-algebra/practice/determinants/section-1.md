<h1><center>第一节 基本计算</center></h1>

::: info 例 1
计算 $D=\begin{vmatrix}2&-1\\3&4\end{vmatrix}$。
:::

::: details 解析
$$
D=2\times4-(-1)\times3=11.
$$
:::

::: info 例 2
已知排列 $4312$，判断对应行列式项的符号。
:::

::: details 解析
逆序为 $(4,3),(4,1),(4,2),(3,1),(3,2)$，共 $5$ 个，故为奇排列，对应项取负号。
:::

::: info 例 3
计算上三角行列式：
$$
D=\begin{vmatrix}2&1&-1\\0&3&4\\0&0&-2\end{vmatrix}.
$$
:::

::: details 解析
三角行列式等于主对角线元素之积：
$$
D=2\cdot3\cdot(-2)=-12.
$$
:::

::: info 例 4
计算：
$$
D=\begin{vmatrix}
1&2&0\\
-1&3&2\\
2&0&1
\end{vmatrix}.
$$
:::

::: details 解析
按第一行展开：
$$
D=1\begin{vmatrix}3&2\\0&1\end{vmatrix}
-2\begin{vmatrix}-1&2\\2&1\end{vmatrix}
=3-2(-5)=13.
$$
:::

::: info 例 5
求排列 $42513$ 的逆序数，并判断行列式项
$a_{14}a_{22}a_{35}a_{41}a_{53}$ 的符号。
:::

::: details 解析
排列 $42513$ 的逆序数为：
$$
3+1+2+0+0=6.
$$
它是偶排列，因此该项在五阶行列式的展开式中取正号。
:::

::: info 例 6
计算含参数下三角行列式：
$$
D=\begin{vmatrix}
a&0&0&0\\
1&a-1&0&0\\
2&3&a+1&0\\
-1&0&4&2
\end{vmatrix},
$$
并求使 $D=0$ 的 $a$。
:::

::: details 解析
下三角行列式等于主对角线元素之积：
$$
D=2a(a-1)(a+1)=2a(a^2-1).
$$
所以：
$$
D=0\Longleftrightarrow a=-1,0,1.
$$
:::

::: info 例 7
计算四阶副对角行列式：
$$
D=\begin{vmatrix}
0&0&0&1\\
0&0&2&0\\
0&3&0&0\\
4&0&0&0
\end{vmatrix}.
$$
:::

::: details 解析
唯一非零项对应排列 $4321$。其逆序数为
$\frac{4(4-1)}2=6$，取正号，因此：
$$
D=(-1)^6\cdot1\cdot2\cdot3\cdot4=24.
$$
一般地，$n$ 阶副对角行列式的符号因子为
$(-1)^{\frac{n(n-1)}2}$。
:::

::: info 例 8
计算：
$$
D=\begin{vmatrix}
1&0&2&0\\
0&3&0&0\\
4&0&5&0\\
0&0&0&-2
\end{vmatrix}.
$$
:::

::: details 解析
第四列只有一个非零元素，沿第四列展开：
$$
D=(-2)\begin{vmatrix}
1&0&2\\
0&3&0\\
4&0&5
\end{vmatrix}.
$$
再沿第二行展开：
$$
D=-2\cdot3\begin{vmatrix}1&2\\4&5\end{vmatrix}
=-6(5-8)=18.
$$
:::

::: info 例 9
已知
$$
\begin{vmatrix}
x&1&0\\
2&x&1\\
0&2&x
\end{vmatrix}=0,
$$
求 $x$。
:::

::: details 解析
按第一行展开：
$$
x\begin{vmatrix}x&1\\2&x\end{vmatrix}
-\begin{vmatrix}2&1\\0&x\end{vmatrix}
=x(x^2-2)-2x=x(x^2-4).
$$
故：
$$
x=-2,\ 0,\ 2.
$$
:::

::: info 例 10
计算分组稀疏行列式：
$$
D=\begin{vmatrix}
a&0&0&b\\
0&c&d&0\\
0&e&f&0\\
g&0&0&h
\end{vmatrix}.
$$
:::

::: details 解析
同时按顺序 $(1,4,2,3)$ 重排行、列。行交换与列交换次数相同，符号相抵，得到分块对角形式：
$$
D=
\begin{vmatrix}a&b\\g&h\end{vmatrix}
\cdot
\begin{vmatrix}c&d\\e&f\end{vmatrix}
=(ah-bg)(cf-de).
$$
这里是两个行列式的乘积，不是相加。
:::

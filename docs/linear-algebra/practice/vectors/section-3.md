<h1><center>第三节 内积与正交规范化</center></h1>

::: info 例 1
判断向量 $\boldsymbol\alpha=(1,1)^T$ 与 $\boldsymbol\beta=(1,-1)^T$ 是否正交，并求二者的长度。
:::

::: details 解析
因为：
$$
(\boldsymbol\alpha,\boldsymbol\beta)=1\times1+1\times(-1)=0,
$$
所以二者正交，且 $\|\boldsymbol\alpha\|=\|\boldsymbol\beta\|=\sqrt2$。
:::

::: info 例 2
将 $\boldsymbol\alpha_1=(1,1,0)^T$、$\boldsymbol\alpha_2=(1,0,1)^T$ 正交化。
:::

::: details 解析
取：
$$
\boldsymbol\beta_1=\boldsymbol\alpha_1,
$$
$$
\boldsymbol\beta_2=\boldsymbol\alpha_2-
\frac{(\boldsymbol\alpha_2,\boldsymbol\beta_1)}{(\boldsymbol\beta_1,\boldsymbol\beta_1)}\boldsymbol\beta_1
=(1,0,1)^T-\frac12(1,1,0)^T.
$$
可倍乘为 $\boldsymbol\beta_2=(1,-1,2)^T$。二者内积为零。
:::

::: info 例 3
为什么非零正交向量组一定线性无关？
:::

::: details 解析
设 $k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s=\boldsymbol0$。等式两边分别与 $\boldsymbol\alpha_i$ 作内积，利用两两正交可得：
$$
k_i(\boldsymbol\alpha_i,\boldsymbol\alpha_i)=0.
$$
因为 $\boldsymbol\alpha_i\ne\boldsymbol0$，所以 $k_i=0$。全部系数均为零，故向量组线性无关。
:::

::: info 例 4
求 $\boldsymbol b=(2,1)^T$ 在
$\boldsymbol a=(1,1)^T$ 方向上的正交投影，并求
$\boldsymbol b$ 到直线 $\operatorname{span}\{\boldsymbol a\}$ 的距离。
:::

::: details 解析
投影为：
$$
\operatorname{proj}_{\boldsymbol a}\boldsymbol b
=\frac{(\boldsymbol b,\boldsymbol a)}
{(\boldsymbol a,\boldsymbol a)}\boldsymbol a
=\frac32(1,1)^T.
$$
垂直分量为：
$$
\boldsymbol b-\operatorname{proj}_{\boldsymbol a}\boldsymbol b
=\left(\frac12,-\frac12\right)^T,
$$
故距离为：
$$
\sqrt{\frac14+\frac14}=\frac1{\sqrt2}.
$$
:::

::: info 例 5
把向量 $\boldsymbol\alpha=(1,-2,2)^T$ 单位化。
:::

::: details 解析
$$
\|\boldsymbol\alpha\|
=\sqrt{1^2+(-2)^2+2^2}=3.
$$
所以沿同方向的单位向量为：
$$
\boldsymbol e=\frac13(1,-2,2)^T.
$$
沿相反方向的 $-\boldsymbol e$ 也是单位向量，但“单位化”通常取同方向者。
:::

::: info 例 6
对向量组
$$
\boldsymbol\alpha_1=(1,1,0)^T,\quad
\boldsymbol\alpha_2=(1,0,1)^T,\quad
\boldsymbol\alpha_3=(0,1,1)^T
$$
进行施密特正交规范化。
:::

::: details 解析
可依次取正交向量：
$$
\boldsymbol\beta_1=(1,1,0)^T,\quad
\boldsymbol\beta_2=(1,-1,2)^T,\quad
\boldsymbol\beta_3=(-1,1,1)^T.
$$
直接计算可验证三者两两正交。单位化后得到：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,1,0)^T,
$$
$$
\boldsymbol q_2=\frac1{\sqrt6}(1,-1,2)^T,
\qquad
\boldsymbol q_3=\frac1{\sqrt3}(-1,1,1)^T.
$$
:::

::: info 例 7
求 $\boldsymbol b=(1,2,3)^T$ 到子空间
$$
W=\operatorname{span}\{(1,1,0)^T,(0,0,1)^T\}
$$
的距离。
:::

::: details 解析
两个生成向量相互正交。投影为：
$$
\operatorname{proj}_W\boldsymbol b
=\frac{3}{2}(1,1,0)^T+3(0,0,1)^T
=\left(\frac32,\frac32,3\right)^T.
$$
垂直分量为：
$$
\left(-\frac12,\frac12,0\right)^T,
$$
所以距离为 $1/\sqrt2$。
:::

::: info 例 8
求子空间
$$
W=\operatorname{span}\{(1,1,0)^T,(0,1,1)^T\}
$$
的正交补 $W^\perp$ 的一组基。
:::

::: details 解析
设 $\boldsymbol x=(x,y,z)^T\in W^\perp$，则：
$$
x+y=0,\qquad y+z=0.
$$
令 $y=t$，得 $x=-t,z=-t$。因此：
$$
W^\perp=\operatorname{span}\{(-1,1,-1)^T\}.
$$
:::

::: info 例 9
用最小二乘法拟合直线 $y=a+bx$，使其最接近三个点
$(0,1),(1,2),(2,2)$。
:::

::: details 解析
设计矩阵与观测向量为：
$$
X=\begin{pmatrix}1&0\\1&1\\1&2\end{pmatrix},
\qquad
\boldsymbol y=\begin{pmatrix}1\\2\\2\end{pmatrix}.
$$
正规方程：
$$
X^TX\begin{pmatrix}a\\b\end{pmatrix}
=X^T\boldsymbol y
$$
即：
$$
\begin{pmatrix}3&3\\3&5\end{pmatrix}
\begin{pmatrix}a\\b\end{pmatrix}
=\begin{pmatrix}5\\6\end{pmatrix}.
$$
解得：
$$
a=\frac76,\qquad b=\frac12.
$$
拟合直线为 $y=\frac76+\frac12x$。
:::

::: info 例 10
对矩阵
$$
A=\begin{pmatrix}
1&1\\
1&0\\
0&1
\end{pmatrix}
$$
作 QR 分解。
:::

::: details 解析
矩阵的两列为
$\boldsymbol\alpha_1=(1,1,0)^T$、
$\boldsymbol\alpha_2=(1,0,1)^T$。施密特正交规范化得：
$$
\boldsymbol q_1=\frac1{\sqrt2}(1,1,0)^T,\qquad
\boldsymbol q_2=\frac1{\sqrt6}(1,-1,2)^T.
$$
于是：
$$
Q=\begin{pmatrix}
\frac1{\sqrt2}&\frac1{\sqrt6}\\
\frac1{\sqrt2}&-\frac1{\sqrt6}\\
0&\frac2{\sqrt6}
\end{pmatrix},
\qquad
R=Q^TA=
\begin{pmatrix}
\sqrt2&\frac1{\sqrt2}\\
0&\frac{\sqrt6}{2}
\end{pmatrix}.
$$
因此 $A=QR$。
:::

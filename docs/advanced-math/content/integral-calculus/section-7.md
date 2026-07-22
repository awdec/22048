<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第七节 积分的几何应用</center></h1>

## 1. 平面图形面积

### 1.1 直角坐标下的面积

若区域由：

$$
y=f(x),\qquad y=g(x)
$$

以及直线 $x=a,x=b$ 围成，且：

$$
f(x)\ge g(x)
$$

则面积为：

$$
A=\int_a^b [f(x)-g(x)]\,dx
$$

如果上下关系变化，应先求交点并分段积分。

### 1.2 关于 y 积分

若区域由：

$$
x=\varphi(y),\qquad x=\psi(y)
$$

以及 $y=c,y=d$ 围成，且：

$$
\varphi(y)\ge \psi(y)
$$

则：

$$
A=\int_c^d [\varphi(y)-\psi(y)]\,dy
$$

::: tip 重点
面积题先画图，判断用 $dx$ 积分更方便还是用 $dy$ 积分更方便。
:::

## 2. 参数方程下的面积

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，则：

$$
A=\int y\,dx
=
\int_{\alpha}^{\beta} y(t)x'(t)\,dt
$$

具体符号要根据曲线方向和区域位置确定，面积最终取正值。

## 3. 极坐标下的面积（补充）

若曲线由极坐标方程：

$$
r=r(\theta)
$$

给出，则从 $\theta=\alpha$ 到 $\theta=\beta$ 扫过的面积为：

$$
A=\frac12\int_{\alpha}^{\beta} r^2(\theta)\,d\theta
$$

数学二中一元积分的极坐标几何应用不是主线；若题目出现，通常直接套该公式。二重积分中的极坐标计算更常见。

## 4. 旋转体体积

### 4.1 绕 x 轴旋转

若曲线 $y=f(x)$、$x=a$、$x=b$ 与 $x$ 轴围成区域，绕 $x$ 轴旋转，则体积为：

$$
V=\pi\int_a^b [f(x)]^2\,dx
$$

若是两条曲线之间的区域绕 $x$ 轴旋转：

$$
V=\pi\int_a^b \left(R^2(x)-r^2(x)\right)\,dx
$$

其中 $R(x)$ 是外半径，$r(x)$ 是内半径。

### 4.2 绕 y 轴旋转

若使用 $y$ 作为积分变量，则：

$$
V=\pi\int_c^d [x(y)]^2\,dy
$$

若区域夹在两条曲线之间：

$$
V=\pi\int_c^d \left(R^2(y)-r^2(y)\right)\,dy
$$

## 5. 壳层法（补充技巧）

有些绕轴旋转体用壳层法更方便。它可以作为补充技巧掌握，但数学二主线仍以垫片法和微元法为主。

绕 $y$ 轴旋转时，若用 $x$ 积分：

$$
V=2\pi\int_a^b x\cdot h(x)\,dx
$$

其中 $h(x)$ 是壳的高度。

绕 $x$ 轴旋转时，若用 $y$ 积分：

$$
V=2\pi\int_c^d y\cdot h(y)\,dy
$$

## 6. 平面曲线弧长

### 6.1 显函数形式

若曲线：

$$
y=f(x)
$$

在 $[a,b]$ 上光滑，则弧长为：

$$
s=\int_a^b \sqrt{1+[f'(x)]^2}\,dx
$$

### 6.2 参数方程形式

若：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

则弧长为：

$$
s=\int_\alpha^\beta
\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt
$$

### 6.3 极坐标形式（了解）

若：

$$
r=r(\theta)
$$

则弧长为：

$$
s=\int_\alpha^\beta
\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

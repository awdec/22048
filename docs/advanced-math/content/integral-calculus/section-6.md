<h1><center>第六节 定积分的应用</center></h1>

## 1. 平面图形的面积

### 1.1 直角坐标下：关于 x 积分

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

### 1.2 直角坐标下：关于 y 积分

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

### 1.3 参数方程下的面积

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

### 1.4 极坐标下的面积

若曲线由极坐标方程：

$$
r=r(\theta)
$$

给出，则从 $\theta=\alpha$ 到 $\theta=\beta$ 扫过的面积为：

$$
A=\frac12\int_{\alpha}^{\beta} r^2(\theta)\,d\theta
$$

## 2. 旋转体体积

### 2.1 绕 x 轴旋转

若曲线 $y=f(x)$、$x=a$、$x=b$ 与 $x$ 轴围成区域，绕 $x$ 轴旋转，则体积为：

$$
V=\pi\int_a^b [f(x)]^2\,dx
$$

若是两条曲线之间的区域绕 $x$ 轴旋转：

$$
V=\pi\int_a^b \left(R^2(x)-r^2(x)\right)\,dx
$$

其中 $R(x)$ 是外半径，$r(x)$ 是内半径。

### 2.2 绕 y 轴旋转

若使用 $y$ 作为积分变量，则：

$$
V=\pi\int_c^d [x(y)]^2\,dy
$$

若区域夹在两条曲线之间：

$$
V=\pi\int_c^d \left(R^2(y)-r^2(y)\right)\,dy
$$

### 2.3 参数方程形式

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，绕 $x$ 轴旋转，则体积为：

$$
V=\pi\int_\alpha^\beta y^2(t)\,x'(t)\,dt
$$

绕 $y$ 轴旋转，则体积为：

$$
V=\pi\int_\alpha^\beta x^2(t)\,y'(t)\,dt
$$

::: tip 重点
参数方程形式本质是把 2.1、2.2 中的 $x,\ y$ 用参数方程代入换元。数学二常考摆线 $x=a(t-\sin t),\ y=a(1-\cos t)$ 绕 $x$ 轴旋转求体积。
:::

## 3. 旋转体的侧面积

旋转体侧面积的微元是：

$$
dS=2\pi\cdot r\cdot ds
$$

其中 $r$ 是点到旋转轴的距离（旋转半径），$ds$ 是弧长微元。

### 3.1 绕 x 轴旋转

若曲线 $y=f(x)\ge0$ 在 $[a,b]$ 上光滑，绕 $x$ 轴旋转，则侧面积为：

$$
S=2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx
$$

### 3.2 绕 y 轴旋转

若曲线 $x=g(y)\ge0$ 在 $[c,d]$ 上光滑，绕 $y$ 轴旋转，则侧面积为：

$$
S=2\pi\int_c^d g(y)\sqrt{1+[g'(y)]^2}\,dy
$$

### 3.3 参数方程形式

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，且 $y(t)\ge0$，绕 $x$ 轴旋转，则侧面积为：

$$
S=2\pi\int_\alpha^\beta y(t)\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt
$$

### 3.4 极坐标形式

若曲线由极坐标方程：

$$
r=r(\theta)
$$

给出，绕极轴（$x$ 轴）旋转，则侧面积为：

$$
S=2\pi\int_\alpha^\beta r(\theta)\sin\theta\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

其中 $r(\theta)\sin\theta$ 是点到极轴的距离，即旋转半径。

若绕 $\theta=\dfrac{\pi}{2}$（即 $y$ 轴）旋转，则旋转半径为 $r(\theta)\cos\theta$：

$$
S=2\pi\int_\alpha^\beta r(\theta)\cos\theta\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

::: tip 重点
侧面积微元 = 圆周长 $\times$ 弧长微元，即 $dS=2\pi r\,ds$。注意与体积微元 $dV=\pi r^2 dx$ 区分：侧面积乘的是弧长微元 $ds$，不是 $dx$ 或 $dy$。
:::

## 4. 壳层法（补充技巧）

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

## 5. 平面曲线弧长

### 5.1 显函数形式

若曲线：

$$
y=f(x)
$$

在 $[a,b]$ 上光滑，则弧长为：

$$
s=\int_a^b \sqrt{1+[f'(x)]^2}\,dx
$$

### 5.2 参数方程形式

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

### 5.3 极坐标形式

若：

$$
r=r(\theta)
$$

则弧长为：

$$
s=\int_\alpha^\beta
\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

## 6. 质心与形心

均匀平面薄片的质心与形心重合。设薄片由曲线 $y=f(x)$（上）、$y=g(x)$（下）及直线 $x=a,x=b$ 围成，且 $f(x)\ge g(x)$。

### 6.1 平面图形的形心

先算面积：

$$
A=\int_a^b [f(x)-g(x)]\,dx
$$

再算静矩（面积微元 $dA=[f(x)-g(x)]\,dx$ 对坐标轴的力矩）。

对 $y$ 轴的静矩：

$$
M_y=\int_a^b x\,[f(x)-g(x)]\,dx
$$

对 $x$ 轴的静矩（面积微元到 $x$ 轴的距离近似为 $\dfrac{f(x)+g(x)}{2}$）：

$$
M_x=\frac12\int_a^b [f^2(x)-g^2(x)]\,dx
$$

形心坐标为：

$$
\bar x=\frac{M_y}{A},\qquad
\bar y=\frac{M_x}{A}
$$

即：

$$
\bar x=\frac{\displaystyle\int_a^b x\,[f(x)-g(x)]\,dx}{\displaystyle\int_a^b [f(x)-g(x)]\,dx}
$$

$$
\bar y=\frac{\displaystyle\frac12\int_a^b [f^2(x)-g^2(x)]\,dx}{\displaystyle\int_a^b [f(x)-g(x)]\,dx}
$$

### 6.2 关于 y 积分的情形

若区域由 $x=\varphi(y)$（右）、$x=\psi(y)$（左）及 $y=c,y=d$ 围成，且 $\varphi(y)\ge\psi(y)$，则对称地有：

$$
\bar x=\frac{\displaystyle\frac12\int_c^d [\varphi^2(y)-\psi^2(y)]\,dy}{\displaystyle\int_c^d [\varphi(y)-\psi(y)]\,dy}
$$

$$
\bar y=\frac{\displaystyle\int_c^d y\,[\varphi(y)-\psi(y)]\,dy}{\displaystyle\int_c^d [\varphi(y)-\psi(y)]\,dy}
$$

### 6.3 曲线的形心

若曲线 $y=f(x)$ 在 $[a,b]$ 上光滑，弧长 $s=\displaystyle\int_a^b\sqrt{1+[f'(x)]^2}\,dx$，则曲线的形心为：

$$
\bar x=\frac{1}{s}\int_a^b x\sqrt{1+[f'(x)]^2}\,dx
$$

$$
\bar y=\frac{1}{s}\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx
$$

### 6.4 对称性

::: tip 重点
区域关于 $y$ 轴对称，则 $\bar x=0$；关于 $x$ 轴对称，则 $\bar y=0$。先利用对称性，可省去一个静矩的计算。
:::

### 6.5 帕普斯（Pappus）定理

面积为 $A$ 的平面图形，绕不穿过它自身的轴旋转一周，所得旋转体体积为：

$$
V=2\pi d\,A
$$

其中 $d$ 是形心到旋转轴的距离。绕 $y$ 轴旋转时 $d=\bar x$，绕 $x$ 轴旋转时 $d=\bar y$，故可由体积反求形心：

$$
\bar x=\frac{V}{2\pi A}
$$

::: tip 重点
帕普斯定理把“形心”和“旋转体体积”联系起来。已知体积和面积求形心，或已知形心求体积，两个方向都常考。
:::

## 7. 定积分表示累积量

定积分可以理解为连续累积。

若某个量的变化率为 $f(x)$，则从 $a$ 到 $b$ 的总变化量为：

$$
\int_a^b f(x)\,dx
$$

例如：

- 速度对时间积分得到位移。
- 力对位移积分得到功。
- 流量对时间积分得到总量。

::: tip 重点
定积分应用题的核心是找“微元”。
:::

## 8. 平均值

函数 $f(x)$ 在 $[a,b]$ 上的平均值为：

$$
\bar f=
\frac{1}{b-a}\int_a^b f(x)\,dx
$$

由积分中值定理，若 $f(x)$ 连续，则存在 $\xi\in[a,b]$，使：

$$
f(\xi)=\bar f
$$

即：

$$
\int_a^b f(x)\,dx=f(\xi)(b-a)
$$

## 9. 变速直线运动

若质点速度为 $v(t)$，则从 $t=a$ 到 $t=b$ 的位移为：

$$
s=\int_a^b v(t)\,dt
$$

若要求路程，则应积分速度的绝对值：

$$
S=\int_a^b |v(t)|\,dt
$$

::: warning 易错
位移可以为负，路程一定非负。
:::

## 10. 变力做功

若物体沿直线从 $x=a$ 移动到 $x=b$，变力为 $F(x)$，且方向与运动方向一致，则做功为：

$$
W=\int_a^b F(x)\,dx
$$

若力的方向可能变化，需要根据题意确定符号或取分量。

## 11. 液体压力

液体压力问题通常用微元法。

基本思想：

1. 取深度为 $h$ 处的一条薄片。
2. 薄片面积近似为 $dA$。
3. 压强为：

$$
p=\rho gh
$$

4. 微元压力：

$$
dP=p\,dA
$$

5. 积分得到总压力。

408 数学二中这类物理应用不是最核心，但要理解定积分表示累积量的思想。

## 12. 用定积分表示数列和极限

某些数列极限可以化为定积分。

若：

$$
\lim_{n\to\infty}
\sum_{k=1}^{n}
\frac1n f\left(\frac{k}{n}\right)
$$

则：

$$
\lim_{n\to\infty}
\sum_{k=1}^{n}
\frac1n f\left(\frac{k}{n}\right)
=
\int_0^1 f(x)\,dx
$$

这是黎曼和思想。

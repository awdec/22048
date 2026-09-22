<h1><center>第一节 导数，导数和微分的计算</center></h1>

## 1. 导数的定义

设函数 $y=f(x)$ 在点 $x_0$ 的某邻域内有定义，如果极限：

$$
\lim_{\Delta x\to0}
\frac{f(x_0+\Delta x)-f(x_0)}{\Delta x}
$$

存在，则称函数 $f(x)$ 在点 $x_0$ 处可导，该极限称为 $f(x)$ 在点 $x_0$ 处的导数，记作：

$$
f'(x_0)
$$

也可以写成：

$$
f'(x_0)=
\lim_{x\to x_0}
\frac{f(x)-f(x_0)}{x-x_0}
$$

::: tip 重点
导数本质是函数在某一点处的瞬时变化率。
:::

## 2. 左导数与右导数

左导数：

$$
f'_-(x_0)=
\lim_{x\to x_0^-}
\frac{f(x)-f(x_0)}{x-x_0}
$$

右导数：

$$
f'_+(x_0)=
\lim_{x\to x_0^+}
\frac{f(x)-f(x_0)}{x-x_0}
$$

函数在 $x_0$ 处可导的充要条件是：

$$
f'_-(x_0)=f'_+(x_0)
$$

且二者都存在。

分段函数在分界点处判断可导性时，必须分别计算左右导数。

## 3. 可导与连续的关系

若函数 $f(x)$ 在 $x_0$ 处可导，则 $f(x)$ 在 $x_0$ 处连续。

即：

$$
\text{可导}\Rightarrow\text{连续}
$$

但反过来不一定成立。


## 4. 导数的几何意义

函数 $y=f(x)$ 在点 $x_0$ 处的导数 $f'(x_0)$，表示曲线在点：

$$
(x_0,f(x_0))
$$

处切线的斜率。

切线方程：

$$
y-f(x_0)=f'(x_0)(x-x_0)
$$

法线方程：

$$
y-f(x_0)=-\frac{1}{f'(x_0)}(x-x_0)
$$

其中 $f'(x_0)\ne0$。

若 $f'(x_0)=0$，切线水平，法线竖直：

$$
x=x_0
$$

## 5. 四则运算法则

设 $u=u(x),v=v(x)$ 均可导。

### 5.1 和差

$$
(u\pm v)'=u'\pm v'
$$

### 5.2 常数倍

$$
(Cu)'=Cu'
$$

### 5.3 乘积

$$
(uv)'=u'v+uv'
$$

多个函数乘积：

$$
(uvw)'=u'vw+uv'w+uvw'
$$

### 5.4 商

$$
\left(\frac{u}{v}\right)'=
\frac{u'v-uv'}{v^2}
\qquad (v\ne0)
$$

## 6. 复合函数求导

若：

$$
y=f(u),\qquad u=\varphi(x)
$$

则：

$$
\frac{dy}{dx}=\frac{dy}{du}\cdot\frac{du}{dx}
$$

即：

$$
[f(\varphi(x))]'=f'(\varphi(x))\varphi'(x)
$$

## 7. 反函数求导

若函数 $y=f(x)$ 单调且可导，反函数 $x=\varphi(y)$ 存在，并且：

$$
f'(x)\ne0
$$

则反函数导数为：

$$
\frac{dx}{dy}=\frac{1}{\frac{dy}{dx}}
$$

也就是：

$$
(f^{-1})'(y)=\frac{1}{f'(x)}
$$

其中 $y=f(x)$。

## 8. 隐函数求导

若 $x,y$ 满足方程：

$$
F(x,y)=0
$$

且 $y$ 可看成 $x$ 的函数，则对方程两边同时关于 $x$ 求导。


或：

$$
\frac{dy}{dx}=-\frac{F_x}{F_y}
$$

## 9. 参数方程求导

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

且：

$$
x'(t)\ne0
$$

则：

$$
\frac{dy}{dx}
=
\frac{\frac{dy}{dt}}{\frac{dx}{dt}}
=
\frac{y'(t)}{x'(t)}
$$

二阶导数：

$$
\frac{d^2y}{dx^2}
=
\frac{d}{dx}\left(\frac{dy}{dx}\right)
=
\frac{\frac{d}{dt}\left(\frac{dy}{dx}\right)}{\frac{dx}{dt}}
$$


## 求导公式表格

### 基本函数

| 函数 $y$ | 导数 $y'$ | 条件或说明 |
| --- | --- | --- |
| $C$ | $0$ | $C$ 为常数 |
| $x^n$ | $nx^{n-1}$ | $n$ 为常数 |
| $a^x$ | $a^x\ln a$ | $a>0, a\ne1$ |
| $e^x$ | $e^x$ |  |
| $\ln x$ | $\frac{1}{x}$ | $x>0$ |
| $\log_a x$ | $\frac{1}{x\ln a}$ | $a>0, a\ne1, x>0$ |

### 三角函数

| 函数 $y$ | 导数 $y'$ |
| --- | --- |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\cot x$ | $-\csc^2 x$ |
| $\sec x$ | $\sec x\tan x$ |
| $\csc x$ | $-\csc x\cot x$ |

### 反三角函数

| 函数 $y$ | 导数 $y'$ | 条件或说明 |
| --- | --- | --- |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ | $\lvert x\rvert<1$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ | $\lvert x\rvert<1$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |  |
| $\operatorname{arccot}x$ | $-\frac{1}{1+x^2}$ |  |

### 反函数求导

| 已知关系 | 导数公式 | 条件或说明 |
| --- | --- | --- |
| $y=f^{-1}(x)$ | $y'=\frac{1}{f'(y)}$ | $f'(y)\ne0$ |
| $y=f^{-1}(x)$ | $y''=-\frac{f''(y)}{[f'(y)]^3}$ | 反函数二阶导 |

### 隐函数求导

| 已知关系 | 导数公式 | 条件或说明 |
| --- | --- | --- |
| $F(x,y)=0$ | $y'=-\frac{F_x}{F_y}$ | $F_y\ne0$ |
| $F(x,y)=0$ | $y''=-\frac{F_{xx}+2F_{xy}y'+F_{yy}(y')^2}{F_y}$ | 隐函数二阶导 |

### 参数方程求导

| 已知关系 | 导数公式 | 条件或说明 |
| --- | --- | --- |
| $x=x(t),\ y=y(t)$ | $\frac{dy}{dx}=\frac{y'(t)}{x'(t)}$ | $x'(t)\ne0$ |
| $x=x(t),\ y=y(t)$ | $\frac{d^2y}{dx^2}=\frac{x'(t)y''(t)-y'(t)x''(t)}{[x'(t)]^3}$ | 参数方程二阶导 |

### 高阶求导

| 函数 $y$ | $n$ 阶导数 $y^{(n)}$ | 条件或说明 |
| --- | --- | --- |
| $x^m$ | $m(m-1)\cdots(m-n+1)x^{m-n}$ | $n\le m$ |
| $e^{ax+b}$ | $a^n e^{ax+b}$ |  |
| $\sin(ax+b)$ | $a^n\sin\left(ax+b+\frac{n\pi}{2}\right)$ |  |
| $\cos(ax+b)$ | $a^n\cos\left(ax+b+\frac{n\pi}{2}\right)$ |  |
| $\ln(ax+b)$ | $(-1)^{n-1}\frac{(n-1)!a^n}{(ax+b)^n}$ | $n\ge1$ |
| $\frac{1}{ax+b}$ | $(-1)^n\frac{n!a^n}{(ax+b)^{n+1}}$ |  |
| $u(x)v(x)$ | $(uv)^{(n)}=\sum_{k=0}^n\binom{n}{k}u^{(k)}v^{(n-k)}$ | 莱布尼茨公式 |
<style>
 body {
  font-family: "楷体"
}
</style>

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

即：

$$
f'(x_0)=
\lim_{\Delta x\to0}
\frac{\Delta y}{\Delta x}
$$

其中：

$$
\Delta y=f(x_0+\Delta x)-f(x_0)
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

例如：

$$
f(x)=|x|
$$

在 $x=0$ 处连续，但左右导数分别为：

$$
f'_-(0)=-1,\qquad f'_+(0)=1
$$

所以 $f(x)=|x|$ 在 $x=0$ 处不可导。

::: warning 易错
连续不一定可导。尖点、折点、竖直切线处都可能连续但不可导。
:::

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

## 5. 基本求导公式

### 5.1 幂函数

$$
(x^\alpha)'=\alpha x^{\alpha-1}
$$

常见特例：

$$
(C)'=0,\qquad
(x)'=1,\qquad
(\sqrt{x})'=\frac{1}{2\sqrt{x}}
$$

### 5.2 指数函数与对数函数

$$
(e^x)'=e^x
$$

$$
(a^x)'=a^x\ln a
\qquad (a>0,\ a\ne1)
$$

$$
(\ln x)'=\frac1x
$$

$$
(\log_a x)'=\frac{1}{x\ln a}
\qquad (a>0,\ a\ne1)
$$

### 5.3 三角函数

$$
(\sin x)'=\cos x
$$

$$
(\cos x)'=-\sin x
$$

$$
(\tan x)'=\sec^2 x
$$

$$
(\cot x)'=-\csc^2 x
$$

### 5.4 反三角函数

$$
(\arcsin x)'=\frac{1}{\sqrt{1-x^2}}
$$

$$
(\arccos x)'=-\frac{1}{\sqrt{1-x^2}}
$$

$$
(\arctan x)'=\frac{1}{1+x^2}
$$

$$
(\operatorname{arccot}x)'=-\frac{1}{1+x^2}
$$

## 6. 四则运算法则

设 $u=u(x),v=v(x)$ 均可导。

### 6.1 和差

$$
(u\pm v)'=u'\pm v'
$$

### 6.2 常数倍

$$
(Cu)'=Cu'
$$

### 6.3 乘积

$$
(uv)'=u'v+uv'
$$

多个函数乘积：

$$
(uvw)'=u'vw+uv'w+uvw'
$$

### 6.4 商

$$
\left(\frac{u}{v}\right)'=
\frac{u'v-uv'}{v^2}
\qquad (v\ne0)
$$

## 7. 复合函数求导

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

常见形式：

$$
(e^{u})'=e^u u'
$$

$$
(\ln u)'=\frac{u'}{u}
$$

$$
(\sin u)'=\cos u\cdot u'
$$

$$
(\cos u)'=-\sin u\cdot u'
$$

$$
(u^\alpha)'=\alpha u^{\alpha-1}u'
$$

::: tip 重点
复合函数求导要从外到内，一层一层乘导数。
:::

## 8. 反函数求导

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

## 9. 隐函数求导

若 $x,y$ 满足方程：

$$
F(x,y)=0
$$

且 $y$ 可看成 $x$ 的函数，则对方程两边同时关于 $x$ 求导。

求导时要注意：

$$
\frac{d}{dx}y=y'
$$

例如：

$$
x^2+y^2=1
$$

两边对 $x$ 求导：

$$
2x+2yy'=0
$$

所以：

$$
y'=-\frac{x}{y}
$$

::: warning 易错
隐函数求导时，凡是含 $y$ 的项都要乘以 $y'$。
:::

## 10. 参数方程求导

若曲线由参数方程给出：

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

::: warning 易错
参数方程的二阶导数不是 $\frac{y''(t)}{x''(t)}$。
:::

## 11. 高阶导数

一阶导数：

$$
f'(x)
$$

二阶导数：

$$
f''(x)
$$

$n$ 阶导数：

$$
f^{(n)}(x)
$$

常见高阶导数公式：

$$
(e^x)^{(n)}=e^x
$$

$$
(\sin x)^{(n)}
=
\sin\left(x+\frac{n\pi}{2}\right)
$$

$$
(\cos x)^{(n)}
=
\cos\left(x+\frac{n\pi}{2}\right)
$$

若 $m$ 为非负整数，则：

$$
(x^m)^{(n)}
=
\begin{cases}
m(m-1)\cdots(m-n+1)x^{m-n},&n\le m\\
0,&n>m
\end{cases}
$$

## 12. 微分

设函数 $y=f(x)$ 在点 $x$ 处可导，则当 $\Delta x\to0$ 时：

$$
\Delta y=f'(x)\Delta x+o(\Delta x)
$$

其中线性主部：

$$
dy=f'(x)dx
$$

称为函数的微分。

对一元函数来说：

$$
\text{可导}\Longleftrightarrow\text{可微}
$$

微分常用于近似计算：

$$
\Delta y\approx dy=f'(x)\Delta x
$$

也就是：

$$
f(x+\Delta x)\approx f(x)+f'(x)\Delta x
$$

## 13. 常见题型总结

| 题型 | 方法 |
| --- | --- |
| 按定义求导 | 写差商，求极限 |
| 判断分段函数可导 | 分别求左右导数 |
| 求复合函数导数 | 外层导数乘内层导数 |
| 求隐函数导数 | 两边对 $x$ 求导，含 $y$ 的项乘 $y'$ |
| 求参数方程导数 | $\frac{dy}{dx}=\frac{y'(t)}{x'(t)}$ |
| 求微分 | $dy=f'(x)dx$ |

## 14. 易错点

- 可导一定连续，连续不一定可导。
- 分段函数分界点处必须算左右导数。
- 复合函数求导不要漏乘内层导数。
- 隐函数求导不要漏写 $y'$。
- 参数方程二阶导数不能写成 $\frac{y''(t)}{x''(t)}$。
- 微分是函数增量的线性主部，不等同于增量本身。

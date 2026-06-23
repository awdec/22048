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

### 11.1 指数函数与三角函数

$$
(e^x)^{(n)}=e^x
$$

更一般地：

$$
(e^{ax+b})^{(n)}=a^n e^{ax+b}
$$

$$
(a^x)^{(n)}=(\ln a)^n a^x
\qquad (a>0,\ a\ne1)
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

更一般地：

$$
[\sin(ax+b)]^{(n)}
=
a^n\sin\left(ax+b+\frac{n\pi}{2}\right)
$$

$$
[\cos(ax+b)]^{(n)}
=
a^n\cos\left(ax+b+\frac{n\pi}{2}\right)
$$

三角函数的高阶导数具有周期性，每求一次导数，相当于相位增加 $\dfrac{\pi}{2}$。

### 11.2 幂函数

若 $\alpha$ 为实数，则：

$$
(x^\alpha)^{(n)}
=
\alpha(\alpha-1)\cdots(\alpha-n+1)x^{\alpha-n}
$$

特别地，若 $m$ 为非负整数，则：

$$
(x^m)^{(n)}
=
\begin{cases}
m(m-1)\cdots(m-n+1)x^{m-n},&n\le m\\
0,&n>m
\end{cases}
$$

更一般地：

$$
[(ax+b)^\alpha]^{(n)}
=
a^n\alpha(\alpha-1)\cdots(\alpha-n+1)(ax+b)^{\alpha-n}
$$

常见特例：

$$
\left(\frac1x\right)^{(n)}
=
(-1)^n\frac{n!}{x^{n+1}}
$$

$$
\left(\frac{1}{ax+b}\right)^{(n)}
=
(-1)^n\frac{n!a^n}{(ax+b)^{n+1}}
$$

### 11.3 对数函数

当 $n\ge1$ 时：

$$
(\ln x)^{(n)}
=
(-1)^{n-1}\frac{(n-1)!}{x^n}
$$

更一般地：

$$
[\ln(ax+b)]^{(n)}
=
(-1)^{n-1}\frac{(n-1)!a^n}{(ax+b)^n}
$$

### 11.4 莱布尼茨公式

若 $u(x),v(x)$ 具有 $n$ 阶导数，则：

$$
(uv)^{(n)}
=
\sum_{k=0}^{n}C_n^k u^{(k)}v^{(n-k)}
$$

展开写为：

$$
\begin{aligned}
(uv)^{(n)}
&=
u^{(n)}v
+C_n^1u^{(n-1)}v'
+C_n^2u^{(n-2)}v''
+\cdots
+uv^{(n)}
\end{aligned}
$$

当其中一个因子是多项式时，多项式求到足够高阶后为 $0$，莱布尼茨公式会自动截断。

例如：

$$
(x^2e^x)^{(n)}
=
x^2e^x+2nxe^x+n(n-1)e^x
$$

即：

$$
(x^2e^x)^{(n)}
=
e^x[x^2+2nx+n(n-1)]
$$

### 11.5 使用建议

| 类型 | 常用方法 |
| --- | --- |
| $e^{ax+b}$、$a^x$ | 每求一次导数乘一个常数因子 |
| $\sin(ax+b)$、$\cos(ax+b)$ | 相位平移 $\frac{n\pi}{2}$，并乘 $a^n$ |
| $x^\alpha$、$(ax+b)^\alpha$ | 连乘下降因子 |
| $\ln x$、$\ln(ax+b)$ | 注意从一阶导数开始，符号交替 |
| 多项式乘初等函数 | 优先用莱布尼茨公式 |

## 12. 微分

### 12.1 微分的概念

设函数 $y=f(x)$ 在点 $x$ 处可导，则当 $\Delta x\to0$ 时：

$$
\Delta y=f'(x)\Delta x+o(\Delta x)
$$

其中线性主部：

$$
dy=f'(x)dx
$$

称为函数的微分。

其中 $dx$ 表示自变量的微分，通常取：

$$
dx=\Delta x
$$

所以：

$$
dy=f'(x)dx
$$

### 12.2 导数和微分的关系

由：

$$
dy=f'(x)dx
$$

可得：

$$
f'(x)=\frac{dy}{dx}
$$

因此，导数可以看成因变量微分与自变量微分的比值。

对一元函数来说：

$$
\text{可导}\Longleftrightarrow\text{可微}
$$

两者的区别是：

| 概念 | 含义 |
| --- | --- |
| 导数 $f'(x)$ | 描述函数在点 $x$ 处的变化率 |
| 微分 $dy$ | 函数增量 $\Delta y$ 的线性主部 |

也就是说：

$$
\Delta y=dy+o(dx)
$$

导数是一个比值，微分是一个线性表达式。

### 12.3 微分的四则运算

设 $u=u(x),v=v(x)$ 均可微，则：

| 运算 | 微分公式 |
| --- | --- |
| 和差 | $d(u\pm v)=du\pm dv$ |
| 常数倍 | $d(Cu)=Cdu$ |
| 乘积 | $d(uv)=u\,dv+v\,du$ |
| 商 | $d\left(\frac{u}{v}\right)=\frac{v\,du-u\,dv}{v^2}\quad(v\ne0)$ |

这些公式与导数四则运算法则完全对应，只是把 $u',v'$ 写成 $du,dv$ 的形式。

例如：

$$
d(x^2\sin x)
=
x^2\,d(\sin x)+\sin x\,d(x^2)
$$

即：

$$
d(x^2\sin x)
=
x^2\cos x\,dx+2x\sin x\,dx
$$

### 12.4 复合函数的微分法则

若：

$$
y=f(u),\qquad u=\varphi(x)
$$

则：

$$
dy=f'(u)\,du
$$

而：

$$
du=\varphi'(x)\,dx
$$

所以：

$$
dy=f'(\varphi(x))\varphi'(x)\,dx
$$

例如：

$$
y=\ln(1+x^2)
$$

可以写成：

$$
dy=\frac{1}{1+x^2}\,d(1+x^2)
$$

因此：

$$
dy=\frac{2x}{1+x^2}\,dx
$$

### 12.5 微分形式不变性

若：

$$
y=f(u)
$$

则无论 $u$ 是自变量，还是 $u$ 又是 $x$ 的函数，微分形式都可以写成：

$$
dy=f'(u)\,du
$$

这称为微分形式不变性。

例如：

$$
y=\sin u
$$

无论 $u=x$，还是 $u=x^2+1$，都有：

$$
dy=\cos u\,du
$$

若 $u=x^2+1$，再代入：

$$
du=2x\,dx
$$

得：

$$
dy=2x\cos(x^2+1)\,dx
$$

::: tip 重点
微分形式不变性是“凑微分”和复合函数求导的基础。看到内层函数及其微分同时出现时，常可以把它们看成一个整体。
:::

### 12.6 对数求导法

对数求导法适合处理乘积、商、幂指函数等形式。

常见适用形式：

- 多个函数相乘或相除。
- 变量在指数上，例如 $[u(x)]^{v(x)}$。
- 直接求导会非常复杂，但取对数后可以拆成和差。

基本步骤：

1. 设 $y=f(x)$。
2. 两边取对数，得到 $\ln y=\ln f(x)$。
3. 两边对 $x$ 求导，左边为 $\dfrac{y'}{y}$。
4. 解出 $y'$。

若 $y>0$，则：

$$
d(\ln y)=\frac{dy}{y}
$$

若函数可能取负，常写成：

$$
d(\ln|y|)=\frac{dy}{y}
\qquad (y\ne0)
$$

例如求：

$$
y=x^x\qquad (x>0)
$$

两边取对数：

$$
\ln y=x\ln x
$$

两边求导：

$$
\frac{y'}{y}=\ln x+1
$$

所以：

$$
y'=x^x(\ln x+1)
$$

更一般地，若：

$$
y=[u(x)]^{v(x)}
$$

且 $u(x)>0$，则：

$$
\ln y=v(x)\ln u(x)
$$

从而：

$$
\frac{y'}{y}
=
v'(x)\ln u(x)+v(x)\frac{u'(x)}{u(x)}
$$

即：

$$
y'
=
[u(x)]^{v(x)}
\left[
v'(x)\ln u(x)+v(x)\frac{u'(x)}{u(x)}
\right]
$$

### 12.7 微分近似计算

微分常用于近似计算：

$$
\Delta y\approx dy=f'(x)\Delta x
$$

也就是：

$$
f(x+\Delta x)\approx f(x)+f'(x)\Delta x
$$

例如，当 $|\Delta x|$ 很小时：

$$
\sqrt{1+\Delta x}
\approx
1+\frac12\Delta x
$$

这是因为：

$$
f(x)=\sqrt{x},\quad f'(1)=\frac12
$$

所以：

$$
f(1+\Delta x)\approx f(1)+f'(1)\Delta x
$$

## 13. 常见题型总结

| 题型 | 方法 |
| --- | --- |
| 按定义求导 | 写差商，求极限 |
| 判断分段函数可导 | 分别求左右导数 |
| 求复合函数导数 | 外层导数乘内层导数 |
| 求隐函数导数 | 两边对 $x$ 求导，含 $y$ 的项乘 $y'$ |
| 求参数方程导数 | $\frac{dy}{dx}=\frac{y'(t)}{x'(t)}$ |
| 求高阶导数 | 识别周期型、连乘型或用莱布尼茨公式 |
| 求微分 | $dy=f'(x)dx$ |
| 对数求导 | 先取对数，再两边求导 |
| 微分近似 | 用 $f(x+\Delta x)\approx f(x)+f'(x)\Delta x$ |

## 14. 易错点

- 可导一定连续，连续不一定可导。
- 分段函数分界点处必须算左右导数。
- 复合函数求导不要漏乘内层导数。
- 隐函数求导不要漏写 $y'$。
- 参数方程二阶导数不能写成 $\frac{y''(t)}{x''(t)}$。
- 求 $(ax+b)^\alpha$、$\sin(ax+b)$、$\ln(ax+b)$ 的高阶导数时，不要漏掉内层导数带来的 $a^n$。
- $\ln x$ 的 $n$ 阶导数公式从 $n\ge1$ 开始，不能代入 $n=0$。
- 微分是函数增量的线性主部，不等同于增量本身。
- $f'(x)=\frac{dy}{dx}$，但 $dy$ 和 $dx$ 本身是微分，不要把微分和导数混为同一个概念。
- 复合函数微分可以先写 $dy=f'(u)du$，再把 $du$ 展开。
- 对数求导时要注意定义域，取 $\ln y$ 通常要求 $y>0$；一般情形可用 $\ln|y|$。

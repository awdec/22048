<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>本章总结【重要度：★★★★★】</center></h1>

## 1. 本章核心

二重积分研究平面区域上的累积量。

一元定积分是在区间上累积：

$$
\int_a^b f(x)\,dx
$$

二重积分是在平面区域上累积：

$$
\iint_D f(x,y)\,d\sigma
$$

其中 $D$ 是积分区域，$d\sigma$ 是面积微元。

本章主线可以概括为：

$$
\text{区域}
\longrightarrow
\text{微元}
\longrightarrow
\text{积分限}
\longrightarrow
\text{计算}
\longrightarrow
\text{应用}
$$

::: tip 重点
二重积分最关键的不是多会算，而是能不能把区域 $D$ 写对。区域写对，积分限和计算才有根。
:::

## 2. 概念与性质总结

二重积分定义为和式极限：

$$
\iint_D f(x,y)\,d\sigma
=
\lim_{\lambda\to0}
\sum_{i=1}^{n}
f(\xi_i,\eta_i)\Delta\sigma_i
$$

若：

$$
f(x,y)\ge0
$$

则：

$$
\iint_D f(x,y)\,d\sigma
$$

表示以 $D$ 为底、以 $z=f(x,y)$ 为顶的曲顶柱体体积。

特别地：

$$
\iint_D1\,d\sigma=S_D
$$

表示区域 $D$ 的面积。

### 2.1 常用性质

| 性质 | 内容 |
| --- | --- |
| 线性性质 | 被积函数可以按加法、数乘拆开 |
| 区域可加性 | 复杂区域可以拆成若干简单区域 |
| 比较性质 | 若 $f\le g$，则 $\iint_Df\,d\sigma\le\iint_Dg\,d\sigma$ |
| 估值性质 | 若 $m\le f\le M$，则 $mS_D\le\iint_Df\,d\sigma\le MS_D$ |
| 中值定理 | 连续函数满足 $\iint_Df\,d\sigma=f(\xi,\eta)S_D$ |
| 对称性 | 区域对称且被积函数为奇函数时，积分可能为 $0$ |

::: warning 易错
使用对称性时必须同时检查“区域对称”和“函数奇偶性”。只看函数形式不够。
:::

## 3. 直角坐标计算总结

二重积分通常先化为累次积分。

### 3.1 $X$ 型区域

若：

$$
D:
\quad
a\le x\le b,\quad
\varphi_1(x)\le y\le \varphi_2(x)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_a^b
\int_{\varphi_1(x)}^{\varphi_2(x)}
f(x,y)\,dy\,dx
$$

此时先对 $y$ 积分，再对 $x$ 积分。

### 3.2 $Y$ 型区域

若：

$$
D:
\quad
c\le y\le d,\quad
\psi_1(y)\le x\le \psi_2(y)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_c^d
\int_{\psi_1(y)}^{\psi_2(y)}
f(x,y)\,dx\,dy
$$

此时先对 $x$ 积分，再对 $y$ 积分。

### 3.3 交换积分次序

交换积分次序的步骤：

1. 根据原积分限画出区域 $D$。
2. 判断新的外层变量范围。
3. 写出新的内层变量范围。
4. 若区域不能一次表示，就拆分区域。

::: tip 重点
交换次序不是把 $dxdy$ 机械对调，而是重新描述同一个区域。
:::

## 4. 极坐标计算总结

当区域含有圆、扇形、环形，或者被积函数含：

$$
x^2+y^2
$$

时，优先考虑极坐标。

极坐标变换：

$$
x=r\cos\theta,\quad y=r\sin\theta
$$

面积微元：

$$
d\sigma=r\,dr\,d\theta
$$

所以：

$$
\iint_D f(x,y)\,d\sigma
=
\int_\alpha^\beta
\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta
$$

### 4.1 常见区域

| 区域 | 极坐标表示 |
| --- | --- |
| 圆盘 $x^2+y^2\le R^2$ | $0\le r\le R,\ 0\le\theta\le2\pi$ |
| 上半圆盘 | $0\le r\le R,\ 0\le\theta\le\pi$ |
| 第一象限圆盘 | $0\le r\le R,\ 0\le\theta\le\frac{\pi}{2}$ |
| 环形区域 $a^2\le x^2+y^2\le b^2$ | $a\le r\le b,\ 0\le\theta\le2\pi$ |
| 扇形区域 | $0\le r\le R,\ \alpha\le\theta\le\beta$ |

::: warning 易错
极坐标计算最常见错误是漏掉面积因子 $r$。
:::

## 5. 应用公式总结

### 5.1 面积

$$
S_D=\iint_D1\,d\sigma
$$

### 5.2 曲顶柱体体积

若顶面为 $z=f(x,y)$，且 $f(x,y)\ge0$，则：

$$
V=\iint_D f(x,y)\,d\sigma
$$

若上下曲面分别为：

$$
z=f(x,y),\quad z=g(x,y)
$$

且 $f(x,y)\ge g(x,y)$，则：

$$
V=\iint_D [f(x,y)-g(x,y)]\,d\sigma
$$

### 5.3 质量

若平面薄片面密度为 $\rho(x,y)$，则：

$$
m=\iint_D\rho(x,y)\,d\sigma
$$

### 5.4 质心

$$
\bar{x}
=
\frac{1}{m}
\iint_D x\rho(x,y)\,d\sigma
$$

$$
\bar{y}
=
\frac{1}{m}
\iint_D y\rho(x,y)\,d\sigma
$$

若为均匀薄片，则可将 $\rho(x,y)$ 约去：

$$
\bar{x}
=
\frac{1}{S_D}
\iint_D x\,d\sigma
$$

$$
\bar{y}
=
\frac{1}{S_D}
\iint_D y\,d\sigma
$$

### 5.5 转动惯量

关于 $x$ 轴：

$$
I_x=
\iint_D y^2\rho(x,y)\,d\sigma
$$

关于 $y$ 轴：

$$
I_y=
\iint_D x^2\rho(x,y)\,d\sigma
$$

关于原点：

$$
I_O=
\iint_D (x^2+y^2)\rho(x,y)\,d\sigma
$$

并且：

$$
I_O=I_x+I_y
$$

## 6. 解题方法总表

| 题型 | 优先思路 |
| --- | --- |
| 求二重积分 | 先画区域，再选积分次序 |
| 直角坐标计算 | 判断 $X$ 型或 $Y$ 型区域 |
| 积分限复杂 | 尝试交换积分次序 |
| 区域含圆或扇形 | 优先考虑极坐标 |
| 被积函数含 $x^2+y^2$ | 优先考虑极坐标 |
| 区域和函数有对称性 | 先用奇偶性化简 |
| 求面积 | 被积函数取 $1$ |
| 求体积 | 被积函数取上表面减下表面 |
| 求质量 | 被积函数取面密度 |
| 求质心 | 先算质量，再算静矩 |
| 求转动惯量 | 距离平方乘密度 |

## 7. 本章易错点

1. 不画区域，直接写积分限。
2. 外层积分上下限写成变量。
3. 交换积分次序时没有重新描述区域。
4. 区域需要分段却强行用一个积分表示。
5. 极坐标下漏乘面积因子 $r$。
6. 使用对称性时只看函数，忘记检查区域。
7. 求面积时忘记被积函数是 $1$。
8. 求体积时没有写“上表面减下表面”。
9. 质心题中把 $M_x,M_y$ 与 $\bar{x},\bar{y}$ 对应关系弄反。
10. 转动惯量题中距离平方写错。

::: tip 复习建议
本章复习建议重点练三件事：画区域、换次序、极坐标。应用题则抓住微元表，先判断总量，再写局部量。
:::

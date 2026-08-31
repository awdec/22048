<h1><center>高斯积分标准公式</center></h1>

::: tip 一句话
**高斯积分**指 $\displaystyle\int_{-\infty}^{+\infty}e^{-x^2}\,dx$ 这类含 $e^{-x^2}$（或 $e^{-ax^2}$）的定积分。它的被积函数"积不出"初等原函数，但**定积分值**却是精确常数。本页汇总常用标准公式。
:::

## 1. 两个基本值

$$
\int_0^{+\infty}e^{-x^2}\,dx=\frac{\sqrt{\pi}}{2},\qquad
\int_{-\infty}^{+\infty}e^{-x^2}\,dx=\sqrt{\pi}
$$

## 2. 标准公式表

| 公式 | 条件 |
| --- | --- |
| $\displaystyle\int_{-\infty}^{+\infty}e^{-ax^2}\,dx=\sqrt{\dfrac{\pi}{a}}$ | $a>0$ |
| $\displaystyle\int_0^{+\infty}e^{-ax^2}\,dx=\dfrac12\sqrt{\dfrac{\pi}{a}}$ | $a>0$ |
| $\displaystyle\int_{-\infty}^{+\infty}e^{-a(x-b)^2}\,dx=\sqrt{\dfrac{\pi}{a}}$ | $a>0$ |
| $\displaystyle\int_{-\infty}^{+\infty}e^{-ax^2+bx}\,dx=\sqrt{\dfrac{\pi}{a}}\,e^{\frac{b^2}{4a}}$ | $a>0$ |
| $\displaystyle\int_{-\infty}^{+\infty}x^{2n}e^{-x^2}\,dx=\dfrac{(2n-1)!!}{2^n}\sqrt{\pi}$ | $n\ge0$，约定 $(-1)!!=1$ |
| $\displaystyle\int_0^{+\infty}x^{2n}e^{-x^2}\,dx=\dfrac{(2n-1)!!}{2^{n+1}}\sqrt{\pi}$ | $n\ge0$ |
| $\displaystyle\int_0^{+\infty}x^{2n+1}e^{-x^2}\,dx=\dfrac{n!}{2}$ | 初等结果 |
| $\displaystyle\int_{-\infty}^{+\infty}x^{2n+1}e^{-x^2}\,dx=0$ | 奇函数 |

::: tip 记法要点
- 前两行是核心，其余都是"换元 + 配方 + 对参数求导"的推论。
- 偶数次幂乘 $e^{-x^2}$，结果是 $\sqrt{\pi}$ 的倍数；奇数次幂在 $(-\infty,+\infty)$ 上直接为 $0$。
:::

## 3. 基本值怎么推（$I^2$ 极坐标法）

记 $I=\int_{-\infty}^{+\infty}e^{-x^2}\,dx$，则

$$
I^2=\iint_{\mathbb R^2}e^{-(x^2+y^2)}\,dx\,dy
=\int_0^{2\pi}d\theta\int_0^{+\infty}e^{-r^2}r\,dr
=2\pi\cdot\frac12=\pi
$$

故 $I=\sqrt{\pi}$；再由 $e^{-x^2}$ 为偶函数，得 $\displaystyle\int_0^{+\infty}e^{-x^2}\,dx=\frac{\sqrt{\pi}}{2}$。

## 4. 常用变形技巧

**（1）线性缩放**：令 $t=\sqrt a\,x$，可把 $e^{-x^2}$ 换成 $e^{-ax^2}$，结果按系数比例调整。

**（2）配方**：对 $e^{-ax^2+bx}$ 先配方

$$
-ax^2+bx=-a\left(x-\frac{b}{2a}\right)^2+\frac{b^2}{4a}
$$

再按平移公式处理。

**（3）对参数求导**：设 $I(a)=\displaystyle\int_0^{+\infty}e^{-ax^2}\,dx=\frac12\sqrt{\frac{\pi}{a}}$，对 $a$ 求导可得到偶数次幂的矩公式：

$$
I'(a)=-\int_0^{+\infty}x^2e^{-ax^2}\,dx=-\frac14\sqrt{\frac{\pi}{a^3}}
$$

递推即可得到 $x^{2n}$ 情形。

## 5. 例题

::: info 例 1.
计算 $\displaystyle\int_{-\infty}^{+\infty}e^{-2x^2+4x}\,dx$.
:::

::: details 解析
配方：

$$
-2x^2+4x=-2(x-1)^2+2
$$

则

$$
\int_{-\infty}^{+\infty}e^{-2x^2+4x}\,dx
=e^2\int_{-\infty}^{+\infty}e^{-2(x-1)^2}\,dx
=e^2\sqrt{\frac{\pi}{2}}
$$
:::

::: info 例 2.
计算 $\displaystyle\int_0^{+\infty}x^2e^{-x^2}\,dx$.
:::

::: details 解析
用公式表中 $n=1$：

$$
\int_0^{+\infty}x^2e^{-x^2}\,dx
=\frac{(2\cdot1-1)!!}{2^{1+1}}\sqrt{\pi}
=\frac{\sqrt{\pi}}{4}
$$

（等价地，对 $I(a)=\int_0^{+\infty}e^{-ax^2}dx$ 在 $a=1$ 处对参数求导。）
:::

## 6. 相关变体（参考）

正态分布密度是高斯积分的常见出场方式（数学二不考概率，这里仅作识别）：

$$
\frac{1}{\sqrt{2\pi}\,\sigma}\int_{-\infty}^{+\infty}e^{-\frac{(x-\mu)^2}{2\sigma^2}}\,dx=1
$$

## 7. 与数学二的关系

- 数学二只要求用**比较审敛法**判断 $\displaystyle\int_0^{+\infty}e^{-x^2}dx$ 的敛散性，**不要求**记忆或计算该积分值。
- 本页公式属**参考 / 拓展**：遇到需要"已知结论"的综合题时查用。
- 背景相关：$e^{-x^2}$ 的不定积分不可初等表出，见 [常见的非初等不定积分](/advanced-math/skills/non-elementary-integrals)。

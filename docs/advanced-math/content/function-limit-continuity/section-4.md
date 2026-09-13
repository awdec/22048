<h1><center>第四节 极限计算</center></h1>

## 1. 极限计算

对于非未定式，极限可以直接确定，未定式是主要考察。

常见未定式：

- $\frac00$
- $\frac{\infty}{\infty}$
- $0\cdot\infty$
- $\infty-\infty$
- $1^\infty$
- $0^0$
- $\infty^0$

## 2. 直接代入法

若函数在趋近点处连续，则极限可以直接代入。

例如：

$$
\lim_{x\to2}(x^2+3x-1)
$$

直接代入：

$$
2^2+3\cdot2-1=9
$$

所以：

$$
\lim_{x\to2}(x^2+3x-1)=9
$$

## 3. 因式分解法

因式分解法常用于多项式分式的：

$$
\frac00
$$

型极限。

### 3.1 例题：平方差

求：

$$
\lim_{x\to1}\frac{x^2-1}{x-1}
$$

代入得到：

$$
\frac00
$$

分解因式：

$$
x^2-1=(x-1)(x+1)
$$

所以：

$$
\frac{x^2-1}{x-1}=x+1\quad(x\ne1)
$$

因此：

$$
\lim_{x\to1}\frac{x^2-1}{x-1}=2
$$

### 3.2 例题：提公因式

求：

$$
\lim_{x\to0}\frac{x^2+3x}{x}
$$

提取公因式：

$$
\frac{x^2+3x}{x}=\frac{x(x+3)}{x}=x+3
$$

所以：

$$
\lim_{x\to0}\frac{x^2+3x}{x}=3
$$

## 4. 有理化法

有理化法常用于含根式的：

$$
\frac00
$$

型极限。

### 4.1 例题：分子有理化

求：

$$
\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}
$$

分子有理化：

$$
\frac{\sqrt{1+x}-1}{x}\cdot
\frac{\sqrt{1+x}+1}{\sqrt{1+x}+1}
=
\frac{1}{\sqrt{1+x}+1}
$$

所以：

$$
\lim_{x\to0}\frac{\sqrt{1+x}-1}{x}
=\frac12
$$

### 4.2 例题：分母有理化

求：

$$
\lim_{x\to4}\frac{x-4}{\sqrt{x}-2}
$$

分母有理化：

$$
\frac{x-4}{\sqrt{x}-2}\cdot
\frac{\sqrt{x}+2}{\sqrt{x}+2}
=\sqrt{x}+2
$$

所以：

$$
\lim_{x\to4}\frac{x-4}{\sqrt{x}-2}=4
$$

## 5. 通分法

通分法常用于：

$$
\infty-\infty
$$

型极限。

### 5.1 例题

求：

$$
\lim_{x\to\infty}\left(\frac{x}{x+1}-1\right)
$$

通分：

$$
\frac{x}{x+1}-1=\frac{x-(x+1)}{x+1}=-\frac1{x+1}
$$

所以：

$$
\lim_{x\to\infty}\left(\frac{x}{x+1}-1\right)=0
$$

### 5.2 根式差通分

求：

$$
\lim_{x\to\infty}(\sqrt{x^2+x}-x)
$$

直接看是：

$$
\infty-\infty
$$

有理化：

$$
\sqrt{x^2+x}-x
=
\frac{x}{\sqrt{x^2+x}+x}
$$

因为 $x\to+\infty$，所以：

$$
\frac{x}{\sqrt{x^2+x}+x}
=
\frac{1}{\sqrt{1+\frac1x}+1}
$$

极限为：

$$
\frac12
$$

## 6. 抓最高阶法

抓最高阶法常用于：

$$
x\to\infty
$$

时的有理函数极限。

### 6.1 分子分母同阶

求：

$$
\lim_{x\to\infty}\frac{3x^2+x-1}{2x^2+5}
$$

分子分母同除以 $x^2$：

$$
\lim_{x\to\infty}
\frac{3+\frac1x-\frac1{x^2}}{2+\frac5{x^2}}
=\frac32
$$

### 6.2 分子次数低于分母

$$
\lim_{x\to\infty}\frac{x+1}{x^2+1}=0
$$

### 6.3 分子次数高于分母

$$
\lim_{x\to\infty}\frac{x^2+1}{x+1}=\infty
$$

更准确地说，该函数趋于无穷大，不存在有限极限。

## 7. 等价无穷小替换

等价无穷小替换是数学二极限计算的高频方法。

常用等价无穷小默认在 $x\to0$ 时成立：

| 函数 | 等价无穷小 |
| --- | --- |
| $\sin x$ | $x$ |
| $\tan x$ | $x$ |
| $\arcsin x$ | $x$ |
| $\arctan x$ | $x$ |
| $1-\cos x$ | $\frac{x^2}{2}$ |
| $\ln(1+x)$ | $x$ |
| $e^x-1$ | $x$ |
| $a^x-1$ | $x\ln a$ |
| $(1+x)^\alpha-1$ | $\alpha x$ |

### 7.1 基础例题

求：

$$
\lim_{x\to0}\frac{\sin 2x}{\tan 3x}
$$

因为：

$$
\sin2x\sim2x,\quad \tan3x\sim3x
$$

所以：

$$
\lim_{x\to0}\frac{\sin2x}{\tan3x}
=\frac23
$$

### 7.2 复合例题

求：

$$
\lim_{x\to0}\frac{\ln(1+2x)}{e^{3x}-1}
$$

因为：

$$
\ln(1+2x)\sim2x
$$

$$
e^{3x}-1\sim3x
$$

所以：

$$
\lim_{x\to0}\frac{\ln(1+2x)}{e^{3x}-1}=\frac23
$$

### 7.3 不能乱替换的情况

等价无穷小替换最适合乘除结构。

对于加减结构要谨慎。

例如：

$$
\sin x-x
$$

不能直接用 $\sin x\sim x$ 得出 $0$。

实际上：

$$
\sin x-x\sim-\frac{x^3}{6}
$$

::: danger 高危错误
加减结构中，低阶项可能抵消。遇到相减时，往往需要更高阶展开。
:::

## 8. 两个重要极限

### 8.1 第一个重要极限

$$
\lim_{x\to0}\frac{\sin x}{x}=1
$$

常见变形：

$$
\lim_{x\to0}\frac{\sin ax}{x}=a
$$

例如：

$$
\lim_{x\to0}\frac{\sin5x}{x}=5
$$

### 8.2 第二个重要极限

$$
\lim_{x\to\infty}\left(1+\frac1x\right)^x=e
$$

等价形式：

$$
\lim_{x\to0}(1+x)^{\frac1x}=e
$$

更一般地，若 $u\to0$，则：

$$
\lim(1+u)^{\frac1u}=e
$$

## 9. 夹逼准则

若：

$$
g(x)\le f(x)\le h(x)
$$

且：

$$
\lim g(x)=\lim h(x)=A
$$

则：

$$
\lim f(x)=A
$$

### 9.1 常见例题

求：

$$
\lim_{x\to0}x\sin\frac1x
$$

因为：

$$
-1\le\sin\frac1x\le1
$$

所以：

$$
-|x|\le x\sin\frac1x\le |x|
$$

两边极限都为 $0$，因此：

$$
\lim_{x\to0}x\sin\frac1x=0
$$

## 10. 洛必达法则求极限

洛必达法则常用于处理直接代入后得到的未定式，尤其是：

$$
\frac00,\quad \frac{\infty}{\infty}
$$

型极限。

### 10.1 基本形式

设在某个去心邻域内，$f(x)$ 与 $g(x)$ 可导，且 $g'(x)\ne0$。

若：

$$
\lim_{x\to x_0}f(x)=0,\quad \lim_{x\to x_0}g(x)=0
$$

或：

$$
\lim_{x\to x_0}f(x)=\infty,\quad \lim_{x\to x_0}g(x)=\infty
$$

并且：

$$
\lim_{x\to x_0}\frac{f'(x)}{g'(x)}
$$

存在，或为无穷大，则：

$$
\lim\frac{f(x)}{g(x)}
=
\lim\frac{f'(x)}{g'(x)}
$$

::: tip 重点
洛必达法则不是“分子分母分别求导后一定能算”，它只适用于未定式，并且要求可导条件满足。
:::

### 10.2 例题：0/0 型

求：

$$
\lim_{x\to0}\frac{e^x-1}{x}
$$

代入得到：

$$
\frac00
$$

使用洛必达法则：

$$
\lim_{x\to0}\frac{e^x-1}{x}
=
\lim_{x\to0}\frac{e^x}{1}
=1
$$

### 10.3 例题：∞/∞ 型

求：

$$
\lim_{x\to\infty}\frac{\ln x}{x}
$$

当 $x\to\infty$ 时，是：

$$
\frac{\infty}{\infty}
$$

使用洛必达法则：

$$
\lim_{x\to\infty}\frac{\ln x}{x}
=
\lim_{x\to\infty}\frac{\frac1x}{1}
=0
$$

### 10.4 多次使用洛必达

若求导一次后仍是未定式，可以继续使用洛必达法则。

例如：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
$$

第一次使用：

$$
\lim_{x\to0}\frac{1-\cos x}{x^2}
=
\lim_{x\to0}\frac{\sin x}{2x}
$$

仍是 $\frac00$ 型，再用一次：

$$
\lim_{x\to0}\frac{\sin x}{2x}
=
\lim_{x\to0}\frac{\cos x}{2}
=\frac12
$$

### 10.5 其他未定式的转化

洛必达法则直接处理的是：

$$
\frac00,\quad \frac{\infty}{\infty}
$$

其他未定式要先转化。

| 未定式 | 常见转化 |
| --- | --- |
| $0\cdot\infty$ | 转化为 $\frac00$ 或 $\frac{\infty}{\infty}$ |
| $\infty-\infty$ | 通分或有理化，转化为分式 |
| $1^\infty$ | 取对数，转化为 $0\cdot\infty$ |
| $0^0$ | 取对数 |
| $\infty^0$ | 取对数 |

例如：

$$
\lim_{x\to0^+}x\ln x
$$

这是 $0\cdot\infty$ 型，可写成：

$$
x\ln x=\frac{\ln x}{\frac1x}
$$

于是：

$$
\lim_{x\to0^+}\frac{\ln x}{\frac1x}
=
\lim_{x\to0^+}\frac{\frac1x}{-\frac1{x^2}}
=
\lim_{x\to0^+}(-x)=0
$$

### 10.6 使用洛必达的易错点

- 只有未定式才能用洛必达法则。
- 不是所有极限都优先用洛必达，简单代入、因式分解、等价无穷小通常更快。
- 求导时必须对整个分子、整个分母分别求导，不能把分式当成商求导。
- 若多次使用后越来越复杂，应考虑等价无穷小或泰勒展开。
- 洛必达法则依赖导数，本节可先掌握用法，后续导数章节再严格证明。

## 11. 泰勒展开求极限

泰勒展开法适合处理“低阶项抵消”的极限，尤其是加减结构中的未定式。

::: tip 重点
等价无穷小适合乘除结构；若是加减结构，并且低阶项可能抵消，优先考虑泰勒展开。
:::

### 11.1 常用泰勒展开

以下公式默认在 $x\to0$ 时成立，也称麦克劳林展开。若 $u(x)\to0$，可以把公式中的 $x$ 整体替换为 $u(x)$。

#### 11.1.1 麦克劳林公式

若函数 $f(x)$ 在 $x=0$ 附近具有足够阶导数，则：

$$
f(x)=f(0)+f'(0)x+\frac{f''(0)}{2!}x^2+\cdots+\frac{f^{(n)}(0)}{n!}x^n+o(x^n)
$$

$$
f(x)=\sum_{k=0}^{n}\frac{f^{(k)}(0)}{k!}x^k+o(x^n)
$$

考研极限题中，不一定真的从导数定义推公式，更多是直接调用下面这些常见函数的 n 项展开。

#### 11.1.2 指数函数

$$
\begin{aligned}
e^x
&=1+x+\frac{x^2}{2!}+\cdots+\frac{x^n}{n!}+o(x^n)
\end{aligned}
$$

$$
\begin{aligned}
a^x
&=1+x\ln a+\frac{x^2(\ln a)^2}{2!}+\cdots+\frac{x^n(\ln a)^n}{n!}+o(x^n)
\end{aligned}
$$

其中 $a>0$ 且 $a\ne1$。

#### 11.1.3 对数函数

$$
\begin{aligned}
\ln(1+x)
&=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots+(-1)^{n-1}\frac{x^n}{n}+o(x^n)
\end{aligned}
$$

#### 11.1.4 三角函数

$$
\begin{aligned}
\sin x
&=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots+(-1)^n\frac{x^{2n+1}}{(2n+1)!}+o(x^{2n+1})
\end{aligned}
$$

$$
\begin{aligned}
\cos x
&=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots+(-1)^n\frac{x^{2n}}{(2n)!}+o(x^{2n})
\end{aligned}
$$

$$
\tan x
=x+\frac{x^3}{3}+\frac{2}{15}x^3+\cdots
$$

#### 11.1.5 反三角函数

$$
\arcsin x=x+\frac{x^3}{6}+\frac{3x^5}{40}+o(x^5)
$$

$$
\begin{aligned}
\arctan x
&=x-\frac{x^3}{3}+\frac{x^5}{5}-\cdots+(-1)^n\frac{x^{2n+1}}{2n+1}+o(x^{2n+1})
\end{aligned}
$$


#### 11.1.6 幂函数

广义二项式展开：

$$
\begin{aligned}
(1+x)^\alpha
&=1+\alpha x+\frac{\alpha(\alpha-1)}{2!}x^2+\cdots+
\frac{\alpha(\alpha-1)\cdots(\alpha-n+1)}{n!}x^n+o(x^n)\\
&=\sum_{k=0}^{n}\binom{\alpha}{k}x^k+o(x^n)
\end{aligned}
$$

其中：

$$
\binom{\alpha}{k}
=\frac{\alpha(\alpha-1)\cdots(\alpha-k+1)}{k!}
$$

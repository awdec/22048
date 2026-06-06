<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第二节 数列极限与函数极限</center></h1>

## 数列极限

::: info 例 1.
设 $a\ne 0$，求 $\displaystyle\lim_{n\to\infty}\big(a+aq+aq^2+\dots+aq^{n-1}\big)$。

:::

::: details 解析
当 $q\ne1$ 时：

$$
S_n=a+aq+\cdots+aq^{n-1}
=\frac{a(1-q^n)}{1-q}
$$

$$
\begin{cases}
\lim_{n\to\infty}S_n=\dfrac{a}{1-q}, & |q|<1\\
S_n=an,\text{ 极限不存在}, & q=1\\
S_{2n}=0,\ S_{2n+1}=a,\text{ 极限不存在}, & q=-1\\
S_n\text{ 发散，极限不存在}, & |q|>1
\end{cases}
$$
:::

::: info 例 2.
$$
求 \lim_{n\to\infty}(\sqrt{n+3\sqrt n}-\sqrt{n-\sqrt n})
$$
:::

::: details 解析

$$
\begin{aligned}
\sqrt{n+3\sqrt n}-\sqrt{n-\sqrt n}
&=\dfrac{4\sqrt n}{\sqrt{n+3\sqrt n}+\sqrt{n-\sqrt n}}\\
&=\dfrac{4}{\sqrt{1+\frac{3}{\sqrt n}}+\sqrt{1-\frac{1}{\sqrt n}}}
\end{aligned}
$$

$\lim_{n\to\infty}f(n)=\dfrac{4}{2}=2$.

:::

::: info 例 3.
$$
求 \lim_{n\to\infty}\sum_{k=1}^{n}\frac{1}{k(k+1)}
$$
:::

::: details 解析
$$
\begin{aligned}
\lim_{n\to\infty}\sum_{k=1}^{n}\frac{1}{k(k+1)}
&=\lim_{n\to\infty}\sum_{k=1}^{n}\left(\frac{1}{k}-\frac{1}{k+1}\right)\\
&=\lim_{n\to\infty}\left(1-\frac{1}{n+1}\right)\\
&=1
\end{aligned}
$$
:::

## 夹逼准则

::: info 例 4.
$$
求 \lim_{n\to\infty}\sum\limits_{k=1}^n\dfrac{1}{\sqrt{n^2+k}}
$$
:::

::: details 解析
$\dfrac{n}{\sqrt{n^2+n}}\le\sum\limits_{k=1}^n\dfrac{1}{\sqrt{n^2+k}}\le \dfrac{n}{\sqrt{n^2+1}}$

$f(n)=\dfrac{n}{\sqrt{n^2+n}}=\dfrac{1}{\sqrt{1+\frac{1}{n}}},g(n)= \dfrac{n}{\sqrt{n^2+1}}=\dfrac{1}{\sqrt{1+\frac{1}{n^2}}}$

$\lim_{n\to\infty} f(n)=1,\lim_{n\to\infty}g(n)=1$

$\lim_{n\to\infty}\sum\limits_{k=1}^n\dfrac{1}{\sqrt{n^2+k}}=1$
:::

::: info 例 5.
$$
求 \lim_{n\to\infty}\sum\limits_{k=1}^n\dfrac{k}{n^2+n+k}
$$
:::

::: details 解析
因为 $1\le k\le n$，所以：

$$
n^2+n+1\le n^2+n+k\le n^2+2n
$$

于是：

$$
\frac{k}{n^2+2n}
\le
\frac{k}{n^2+n+k}
\le
\frac{k}{n^2+n+1}
$$

累加得：

$$
\frac{\frac{n(n+1)}{2}}{n^2+2n}
\le
\sum_{k=1}^{n}\frac{k}{n^2+n+k}
\le
\frac{\frac{n(n+1)}{2}}{n^2+n+1}
$$

左右两边极限均为 $\dfrac12$，由夹逼准则：

$$
\lim_{n\to\infty}\sum_{k=1}^{n}\frac{k}{n^2+n+k}
=\frac12
$$
:::

## 定积分求数列和的极限

::: info 例 6.
$$
求 \lim_{n\to\infty}\sum\limits_{k=1}^n\dfrac{1}{n+k}.
$$
:::

::: details 解析
$\sum\limits_{k=1}^n\dfrac{1}{n+k}=\sum\limits_{k=1}^n\dfrac{n}{n+k}\times \dfrac{1}{n}=\sum\limits_{k=1}^n\dfrac{1}{1+\frac{k}{n}}\times \dfrac{1}{n}$.

$\lim_{n\to\infty}\sum\limits_{k=1}^n\dfrac{1}{n+k}=\int_0^1\dfrac{1}{1+x}\mathrm{d}x=\ln(1+x)\bigg|_{0}^{1}=\ln 2$.
:::

::: info 例 7.
$$
\lim_{n\to\infty}n\left(\frac{1}{1+n^2}+\frac{1}{2^2+n^2}+\dots+\frac{1}{n^2+n^2}\right)
$$
:::

::: details 解析
$n\left(\frac{1}{1+n^2}+\frac{1}{2^2+n^2}+\dots+\frac{1}{n^2+n^2}\right)=\sum\limits_{k=1}^n\dfrac{n}{k^2+n^2}=\sum\limits_{k=1}^n\dfrac{n^2}{k^2+n^2}\times\dfrac{1}{n}$

$\lim_{n\to\infty}n\left(\frac{1}{1+n^2}+\frac{1}{2^2+n^2}+\dots+\frac{1}{n^2+n^2}\right)=\int_0^1\dfrac{1}{1+x^2}\mathrm dx=\arctan x\bigg|_0^1=\dfrac{\pi}{4}$.
:::

## 单调有界准则

::: info 例 8.
设 $a_1 = 2,\displaystyle a_{n+1} = \frac12\left(a_n+\frac{1}{a_n}\right)(n = 1,2,\cdots)$，求$\lim_{n\to\infty}a_n$。
:::

::: details 解析
$a_1=2\ge 1$，设 $a_n\ge 1$，$a_{n+1}=\dfrac{1}{2}\times(a_n+\dfrac{1}{a_n})\ge \dfrac{1}{2}\times 2\sqrt 1=1$.

$a_{n+1}-a_n=\dfrac{1}{2}(\dfrac{1}{a_n}-a_n)\le 0$.

所以 $a_n$ 单调减。

$a_{n+1}\ge \dfrac{1}{2}\times 2\sqrt 1=1$，且令 $\lim_{n\to\infty} a_n=A$，则 $A=\dfrac{1}{2}(A+\dfrac{1}{A})$，解得 $A=1$
:::

::: info 例 9.
设 $0<a_1<3,\displaystyle a_{n+1}=\sqrt{a_n(3-a_n)}$，证明$\lim\limits_{n\to\infty}a_n$存在，并求其值。
:::

::: details 解析
因为 $0<a_1<3$，所以 $0<a_2=\sqrt{a_1(3-a_1)}$。

由均值不等式：

$$
a_n(3-a_n)\le \left(\frac{a_n+3-a_n}{2}\right)^2=\frac94
$$

所以：

$$
0<a_{n+1}\le\frac32
$$

特别地，对 $n\ge2$，有：

$$
0<a_n\le\frac32
$$

于是当 $n\ge2$ 时：

$$
\frac{a_{n+1}}{a_n}
=\sqrt{\frac{3-a_n}{a_n}}
=\sqrt{\frac{3}{a_n}-1}
\ge1
$$

因此 $\{a_n\}$ 从第 $2$ 项开始单调递增，且有上界 $\dfrac32$，所以极限存在。

设：

$$
\lim_{n\to\infty}a_n=A
$$

则：

$$
A=\sqrt{A(3-A)}
$$

因为 $A\ge a_2>0$，所以 $A\ne0$。解得：

$$
A=\frac32
$$
:::

::: info 例 10.
设 $x_1=\sqrt{2},\,x_2=\sqrt{2+\sqrt{2}},\,x_{n+1}=\sqrt{2+x_n}$，证明$\lim\limits_{n\to\infty}x_n$存在，并求其值。

:::

::: details 解析
$x_1=\sqrt2<2$。若 $0<x_n<2$，则：

$$
x_{n+1}=\sqrt{2+x_n}<\sqrt4=2
$$

所以由归纳法可知 $0<x_n<2$。

又因为：

$$
\begin{aligned}
x_{n+1}-x_n
&=\sqrt{2+x_n}-x_n\\
&=\frac{2+x_n-x_n^2}{\sqrt{2+x_n}+x_n}\\
&=\frac{(2-x_n)(1+x_n)}{\sqrt{2+x_n}+x_n}>0
\end{aligned}
$$

所以 $\{x_n\}$ 单调递增且有上界 $2$，极限存在。

设 $\lim_{n\to\infty}x_n=A$，则：

$$
A=\sqrt{2+A}
$$

解得 $A=2$ 或 $A=-1$。因为 $x_n>0$，舍去 $A=-1$，所以：

$$
\lim_{n\to\infty}x_n=2
$$
:::

::: info 例 11.
设数列$\{x_n\}$满足，$0<x_1<\pi,\,x_{n+1}=\sin x_n\,(n=1,2,\cdots)$，证明$\lim\limits_{n\to\infty}x_n$存在，并求该极限.
:::


::: details 解析
因为 $0<x_1<\pi$，所以：

$$
0<x_2=\sin x_1\le1
$$

当 $n\ge2$ 时，有 $0<x_n\le1$，因此：

$$
0<x_{n+1}=\sin x_n<x_n
$$

所以 $\{x_n\}$ 从第 $2$ 项开始单调递减，且下界为 $0$，极限存在。

设：

$$
\lim_{n\to\infty}x_n=A
$$

则 $A\ge0$，且由递推式得：

$$
A=\sin A
$$

在 $A\ge0$ 时，方程 $A=\sin A$ 只有解 $A=0$，所以：

$$
\lim_{n\to\infty}x_n=0
$$

:::

## 函数极限

::: info 例 12.
$$
求 \lim_{x\to +\infty}\big(\sqrt{x+\sqrt{x}}-\sqrt{x-\sqrt{x}}\big).
$$
:::

::: details 解析
$$
\begin{aligned}
\sqrt{x+\sqrt x}-\sqrt{x-\sqrt x}=\dfrac{2\sqrt x}{\sqrt{x+\sqrt x}+\sqrt{x-\sqrt x}}\\=
\dfrac{2}{\sqrt{1+\frac{1}{\sqrt x}}+\sqrt{1-\frac{1}{\sqrt x}}}
\end{aligned}
$$

$\lim_{x\to+\infty} 原式=1$.


:::

::: info 例 13.
$$
求 \lim_{x\to\infty}\frac{(2x-1)^{35}(1-x)^{15}}{(2x+1)^{50}}.
$$
:::

::: details 解析
$$
\begin{aligned}
\frac{(2x-1)^{35}(1-x)^{15}}{(2x+1)^{50}}=\dfrac{(\frac{2x-1}{x})^{35}\times (\frac{1-x}{x})^{15}}{(\frac{2x+1}{x})^{50}}\\=
\dfrac{(2-\frac{1}{x})^{35}\times (\frac{1}{x}-1)^{15}}{(2+\frac{1}{x})^{50}}
\end{aligned}
$$

$\lim_{x\to\infty} 原式=\dfrac{2^{35}\times(-1)^{15}}{2^{50}}=-\dfrac{1}{2^{15}}$.

:::

::: info 例 14.
$$
求 \lim_{x\to 1}\frac{\sin(x^2-1)}{x-1}.
$$
:::


::: details 解析
$$
\begin{aligned}
\dfrac{\sin(x^2-1)}{x-1}=\dfrac{\sin(x^2-1)}{x^2-1}\times \dfrac{x^2-1}{x-1}
\end{aligned}
$$

令 $t=x^2-1$，当 $x\to1$ 时，$t\to0$，所以：

$$
\lim_{x\to1}\frac{\sin(x^2-1)}{x^2-1}=1
$$

且：

$$
\lim_{x\to 1}\frac{x^2-1}{x-1}
=
\lim_{x\to1}(x+1)
=2
$$

综上：$\lim_{x\to 1}\dfrac{\sin(x^2-1)}{x-1}=2$.
:::

::: info 例 15.
$$
\lim_{x\to\infty} x\sin \frac{2x}{x^2+1}.
$$
:::

::: details 解析
$$
\begin{aligned}
x\sin\dfrac{2x}{x^2+1}=\dfrac{\sin(\frac{2x}{x^2+1})}{\frac{2x}{x^2+1}}\times \dfrac{2x^2}{x^2+1}
\end{aligned}
$$

令 $t=\dfrac{2x}{x^2+1}$，当 $x\to\infty$ 时，$t\to0$，所以：

$$
\lim_{x\to\infty}
\frac{\sin\left(\frac{2x}{x^2+1}\right)}{\frac{2x}{x^2+1}}
=1
$$

且：

$$
\lim_{x\to\infty}\frac{2x^2}{x^2+1}
=2
$$

综上：

$$
\lim_{x\to\infty}x\sin\frac{2x}{x^2+1}=2
$$
:::

::: info 例 16.
$$
\lim_{n\to\infty}\left(\frac{n-2}{n+1}\right)^n.
$$
:::

::: details 解析
$$
\begin{aligned}
\left(\frac{n-2}{n+1}\right)^n
=\left(1-\frac{3}{n+1}\right)^n
\end{aligned}
$$

取对数，设：

$$
L_n=\left(1-\frac{3}{n+1}\right)^n
$$

则：

$$
\ln L_n
=
n\ln\left(1-\frac{3}{n+1}\right)
$$

因为当 $u\to0$ 时，$\ln(1+u)\sim u$，所以：

$$
\ln L_n
\sim
n\left(-\frac{3}{n+1}\right)
\to -3
$$

因此：

$$
\lim_{n\to\infty}\left(\frac{n-2}{n+1}\right)^n
=e^{-3}
$$
:::


::: info 例 17.
$$
\lim_{x\to 0}(\cos x)^{\frac{1}{\ln(1+x^2)}}.
$$
:::

::: details 解析

:::

::: info 例 18.
$$
\lim_{n\to\infty}\left(n\tan\frac1n\right)^{n^2}.
$$
:::

::: details 解析

:::

## 答题技巧总结

### 1. 数列极限先判断类型

看到数列极限，先不要急着算，先判断它属于哪一类：

| 题型特征 | 常用方法 |
| --- | --- |
| 等比数列前 $n$ 项和 | 套等比求和公式，分类讨论 $q$ |
| 根式差 | 有理化 |
| 分式数列 | 抓最高阶 |
| 可裂项求和 | 裂项相消 |
| 含 $\sum$ 且每项可夹 | 夹逼准则 |
| $\frac1n\sum f(\frac{k}{n})$ 型 | 定积分定义 |
| 递推数列 | 单调有界准则 |

::: tip 核心判断
数列极限最重要的是先识别结构：是“一个式子”的极限，还是“很多项求和”的极限，还是“递推定义”的极限。
:::

### 2. 等比数列求极限

等比型常见形式：

$$
S_n=a+aq+aq^2+\cdots+aq^{n-1}
$$

先写：

$$
S_n=\frac{a(1-q^n)}{1-q}\quad(q\ne1)
$$

再分类讨论：

- $|q|<1$ 时，$q^n\to0$，极限为 $\frac{a}{1-q}$。
- $q=1$ 时，$S_n=an$，通常发散。
- $q=-1$ 时，奇偶子列不同，通常极限不存在。
- $|q|>1$ 时，$q^n$ 发散，通常极限不存在或趋于无穷。

::: warning 易错
等比数列不能只套公式，还要看 $q$ 的取值。尤其 $q=1$ 和 $q=-1$ 要单独讨论。
:::

### 3. 根式差用有理化

遇到：

$$
\sqrt{A_n}-\sqrt{B_n}
$$

优先有理化：

$$
\sqrt{A_n}-\sqrt{B_n}
=\frac{A_n-B_n}{\sqrt{A_n}+\sqrt{B_n}}
$$

若 $A_n,B_n$ 中含有 $n$ 或 $\sqrt n$，有理化后通常再“提最高阶”。

例如：

$$
\sqrt{n+3\sqrt n}-\sqrt{n-\sqrt n}
$$

有理化后分母提 $\sqrt n$，把式子化成：

$$
\frac{4}{\sqrt{1+\frac3{\sqrt n}}+\sqrt{1-\frac1{\sqrt n}}}
$$

然后直接令 $n\to\infty$。

### 4. 裂项相消

看到下面形式要想到裂项：

$$
\frac{1}{k(k+1)}
$$

常用拆法：

$$
\frac{1}{k(k+1)}=\frac1k-\frac1{k+1}
$$

于是：

$$
\sum_{k=1}^{n}\left(\frac1k-\frac1{k+1}\right)
=1-\frac1{n+1}
$$

最后再取极限。

常见裂项方向：

- 分母是相邻因子，如 $k(k+1)$。
- 分母是平方差，如 $(k-a)(k+a)$。
- 结果能前后抵消，只剩首尾少数项。

### 5. 夹逼准则的使用

夹逼准则适用于“不好直接求和，但每一项能估计”的题。

标准结构：

$$
b_n\le a_n\le c_n
$$

且：

$$
\lim_{n\to\infty}b_n=\lim_{n\to\infty}c_n=A
$$

则：

$$
\lim_{n\to\infty}a_n=A
$$

对求和型数列，常见做法是用最大项、最小项夹住每一项。

例如：

$$
\sum_{k=1}^{n}\frac1{\sqrt{n^2+k}}
$$

因为 $k$ 在 $1$ 到 $n$ 之间，所以分母可用两端估计，得到：

$$
\frac{n}{\sqrt{n^2+n}}
\le
\sum_{k=1}^{n}\frac1{\sqrt{n^2+k}}
\le
\frac{n}{\sqrt{n^2+1}}
$$

两边极限都为 $1$，原式极限就是 $1$。

::: tip 技巧
夹逼题的关键不是“算中间”，而是“构造两边”。通常从分母最大/最小、三角函数有界、指数函数正性这些方向入手。
:::

### 6. 定积分求数列和极限

若看到：

$$
\sum_{k=1}^{n} \frac1n f\left(\frac{k}{n}\right)
$$

要想到定积分：

$$
\lim_{n\to\infty}\sum_{k=1}^{n}\frac1n f\left(\frac{k}{n}\right)
=\int_0^1 f(x)\,dx
$$

做题时常需要先把原式凑成：

$$
\frac1n f\left(\frac{k}{n}\right)
$$

例如：

$$
\sum_{k=1}^{n}\frac1{n+k}
=
\sum_{k=1}^{n}\frac1n\cdot\frac1{1+\frac{k}{n}}
$$

所以：

$$
\lim_{n\to\infty}\sum_{k=1}^{n}\frac1{n+k}
=\int_0^1\frac1{1+x}\,dx
=\ln2
$$

常见凑法：

- 分母中有 $n+k$，可凑 $\frac{k}{n}$。
- 分母中有 $n^2+k^2$，可凑 $\left(\frac{k}{n}\right)^2$。
- 外面有 $n$，常把它改写成 $\frac1n$ 的形式。

### 7. 递推数列用单调有界

递推数列求极限常用三步：

1. 证明有界。
2. 证明单调。
3. 设极限为 $A$，代入递推式求 $A$。

常见写法：

$$
a_{n+1}=F(a_n)
$$

若已证明 $a_n\to A$，则：

$$
A=F(A)
$$

::: warning 易错
不能一上来就设极限为 $A$，必须先说明极限存在。通常靠“单调有界准则”说明存在。
:::

证明单调常用：

- 比较 $a_{n+1}-a_n$ 的符号。
- 比较 $\frac{a_{n+1}}{a_n}$ 与 $1$。
- 利用常见不等式，如 $\sin x<x$、$\sqrt{ab}\le\frac{a+b}{2}$。

### 8. 函数极限的基本套路

函数极限先看趋近方式：

| 趋近方式 | 常用方法 |
| --- | --- |
| $x\to a$ | 代入、因式分解、等价无穷小 |
| $x\to\infty$ | 抓最高阶、除以最高次 |
| 根式差 | 有理化 |
| 三角函数 | 重要极限、等价无穷小 |
| 指数型 | 第二重要极限、取对数 |

如果直接代入出现未定式，再决定变形方法。

### 9. 重要极限与等价无穷小

三角型极限常围绕：

$$
\lim_{t\to0}\frac{\sin t}{t}=1
$$

做题技巧：

1. 找到趋于 $0$ 的整体 $t$。
2. 凑出 $\frac{\sin t}{t}$。
3. 剩下部分单独求极限。

例如：

$$
x\sin\frac{2x}{x^2+1}
$$

令：

$$
t=\frac{2x}{x^2+1}
$$

当 $x\to\infty$ 时，$t\to0$，于是可以凑：

$$
\frac{\sin t}{t}
$$

指数型极限常围绕：

$$
\lim_{t\to\infty}\left(1+\frac1t\right)^t=e
$$

或：

$$
\lim_{u\to0}(1+u)^{\frac1u}=e
$$

遇到：

$$
\left(1+\text{小量}\right)^{\text{大量}}
$$

优先往第二重要极限靠。

### 10. 幂指函数极限

遇到：

$$
[f(x)]^{g(x)}
$$

尤其是 $1^\infty$ 型，常用取对数法。

设：

$$
y=[f(x)]^{g(x)}
$$

则：

$$
\ln y=g(x)\ln f(x)
$$

先求 $\ln y$ 的极限，再指数还原：

$$
\lim y=e^{\lim \ln y}
$$

常见等价：

$$
\ln(1+u)\sim u,\quad u\to0
$$

### 11. 考场书写建议

- 根式差先有理化，不要硬代。
- 求和题先判断是裂项、夹逼，还是定积分定义。
- 递推题先证明极限存在，再设极限。
- 三角题先找整体小量，不要把 $\sin(x^2-1)$ 直接看成 $\sin x^2-1$。
- 多行公式用 `aligned`，并在等号前加 `&` 对齐。
- 最后单独写“综上，原式极限为……”，避免结论淹在过程里。

<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第三节 无穷小量及无穷小的阶</center></h1>

::: info 例 1.
$$
求 \lim_{x\to+\infty}\frac{x^3+x^2+1}{2^x+x^3}(\sin x+\cos x).
$$
:::


::: details 解析
因为 $x\to+\infty$，当 $x$ 足够大时：

$$
\begin{aligned}
0\le
\frac{x^3+x^2+1}{2^x+x^3}
&\le \frac{3x^3}{2^x+x^3}\\
&\le \frac{3x^3}{2^x}
\end{aligned}
$$

又因为指数增长快于多项式增长：

$$
\lim_{x\to+\infty}\frac{3x^3}{2^x}=0
$$

由夹逼定理：

$$
\lim_{x\to+\infty}\frac{x^3+x^2+1}{2^x+x^3}=0
$$

且：

$$
\sin x + \cos x = \sqrt 2\sin\left(x+\frac{\pi}{4}\right)
$$

是有界函数。

无穷小乘有界函数仍为无穷小，因此：

$$
\lim_{x\to+\infty}\frac{x^3+x^2+1}{2^x+x^3}(\sin x+\cos x)=0
$$

:::


::: info 例 2.
当 $x\to 0^+$ 时，与 $\sqrt{x}$ 等价的无穷小量是

$$
\begin{aligned}
&(\mathrm{A})\ 1-\mathrm{e}^{\sqrt{x}},\qquad
(\mathrm{B})\ \ln\frac{1+x}{1-\sqrt{x}},\\
&(\mathrm{C})\ \sqrt{1+\sqrt{x}}-1,\quad
(\mathrm{D})\ 1-\cos\sqrt{x}.
\end{aligned}
$$

:::


::: details 解析
A. 因为 $e^u-1\sim u$，所以：

$$
1-e^{\sqrt x}=-(e^{\sqrt x}-1)\sim-\sqrt x
$$

与 $\sqrt x$ 同阶，但不等价。

B. 因为：

$$
\ln\frac{1+x}{1-\sqrt x}
=
\ln\left(1+\frac{x+\sqrt x}{1-\sqrt x}\right)
$$

且：

$$
\frac{x+\sqrt x}{1-\sqrt x}\to0
$$

所以：

$$
\ln\frac{1+x}{1-\sqrt x}
\sim
\frac{x+\sqrt x}{1-\sqrt x}
$$

$$
\begin{gathered}
\dfrac{\dfrac{x+\sqrt x}{1-\sqrt x}}{x+\sqrt x}
=
\dfrac{1}{1-\sqrt x}\\
\lim_{x\to 0^+}\dfrac{1}{1-\sqrt x}=1\\
\therefore\quad
\dfrac{x+\sqrt x}{1-\sqrt x}
\sim x+\sqrt x
\sim \sqrt x
\end{gathered}
$$


C. 因为 $(1+u)^\alpha-1\sim \alpha u$，所以：

$$
\sqrt{1+\sqrt x}-1
=(1+\sqrt x)^{\frac12}-1
\sim \frac12\sqrt x
$$

与 $\sqrt x$ 同阶，但不等价。

D. 因为 $1-\cos u\sim \dfrac12u^2$，所以：

$$
1-\cos\sqrt x
\sim \frac12(\sqrt x)^2
=\frac12x
$$

它比 $\sqrt x$ 高阶，不等价。

综上，只有 B 与 $\sqrt x$ 等价。

:::


::: info 例 3.
设 $x\to 0$ 时，$\mathrm{e}^{\tan x}-\mathrm{e}^{x}$ 与 $x^{n}$ 是同阶无穷小，求 $n$。
:::

::: details 解析
先提取公共因子：

$$
e^{\tan x}-e^x
=e^x\left(e^{\tan x-x}-1\right)
$$

因为：

$$
\tan x-x\sim\frac{x^3}{3}
$$

且当 $u\to0$ 时，$e^u-1\sim u$，所以：

$$
e^{\tan x-x}-1\sim \tan x-x\sim\frac{x^3}{3}
$$

又因为 $e^x\to1$，因此：

$$
e^{\tan x}-e^x
\sim
\frac{x^3}{3}
$$

它与 $x^3$ 同阶，所以：

$$
n=3
$$
:::


## 答题技巧总结

### 1. 先判断无穷小还是无穷大

遇到无穷小阶数题，第一步不是直接套公式，而是先看变化过程：

- $x\to0$
- $x\to0^+$
- $x\to\infty$
- $n\to\infty$

同一个表达式在不同变化过程下，阶数可能完全不同。

例如：

$$
\frac1x
$$

在 $x\to\infty$ 时是无穷小；在 $x\to0$ 时是无穷大。

::: tip 核心习惯
所有“无穷小比较”题都要先写清楚趋近过程，再讨论阶数。
:::

### 2. 有界函数乘无穷小

若 $\alpha(x)$ 是无穷小，$g(x)$ 有界，则：

$$
g(x)\alpha(x)
$$

仍是无穷小。

这类题常见于：

$$
\frac{x^3+x^2+1}{2^x+x^3}(\sin x+\cos x)
$$

其中 $\sin x+\cos x$ 有界，只需要判断前面的分式是否趋于 $0$。

常用结论：

- $\sin x$、$\cos x$ 有界。
- $\sin x+\cos x$ 有界。
- $(-1)^n$ 有界。
- 有界量乘无穷小，仍为无穷小。

### 3. 指数增长压过多项式增长

当 $x\to+\infty$ 时：

$$
\frac{x^m}{a^x}\to0\quad(a>1)
$$

也就是说，指数函数增长速度比任意多项式都快。

因此遇到：

$$
\frac{x^3+x^2+1}{2^x+x^3}
$$

分母中的 $2^x$ 是主导项，整体趋于 $0$。

::: warning 易错
不要只比较多项式次数。只要分母出现 $a^x\ (a>1)$，它通常比任何有限次多项式都更强。
:::

### 4. 等价无穷小选择题

判断某个表达式是否与 $\sqrt{x}$ 等价，最稳的方法是作比：

$$
\lim_{x\to0^+}\frac{\alpha(x)}{\sqrt{x}}
$$

若结果为 $1$，则：

$$
\alpha(x)\sim\sqrt{x}
$$

若结果为非零常数但不是 $1$，则只是同阶，不是等价。

常用等价无穷小：

| 表达式 | 等价无穷小 |
| --- | --- |
| $\mathrm e^u-1$ | $u$ |
| $1-\mathrm e^u$ | $-u$ |
| $\ln(1+u)$ | $u$ |
| $1-\cos u$ | $\frac{u^2}{2}$ |
| $\sqrt{1+u}-1$ | $\frac{u}{2}$ |

使用时要先找整体小量 $u$。

例如：

$$
\sqrt{1+\sqrt{x}}-1
$$

这里整体小量是：

$$
u=\sqrt{x}
$$

所以：

$$
\sqrt{1+\sqrt{x}}-1\sim\frac{\sqrt{x}}{2}
$$

它与 $\sqrt{x}$ 同阶，但不等价。

### 5. 同阶无穷小的判断

若 $\alpha(x)$ 和 $\beta(x)$ 都是无穷小，计算：

$$
\lim\frac{\alpha(x)}{\beta(x)}
$$

即可判断阶数关系。

| 比值极限 | 结论 |
| --- | --- |
| $0$ | $\alpha$ 是比 $\beta$ 高阶的无穷小 |
| 非零常数 | $\alpha$ 与 $\beta$ 同阶 |
| $1$ | $\alpha$ 与 $\beta$ 等价 |
| $\infty$ | $\alpha$ 是比 $\beta$ 低阶的无穷小 |

::: tip 口诀
比值为 $0$，分子更小，分子高阶；比值为 $\infty$，分子更大，分子低阶。
:::

### 6. 求无穷小阶数

若题目问“与 $x^n$ 同阶”，本质是找表达式的最低非零阶。

常见方法：

1. 用等价无穷小替换。
2. 用泰勒展开。
3. 看低阶项是否抵消。

例如：

$$
\mathrm e^{\tan x}-\mathrm e^x
$$

可以先拆成：

$$
\mathrm e^x\left(\mathrm e^{\tan x-x}-1\right)
$$

因为：

$$
\tan x-x\sim\frac{x^3}{3}
$$

且：

$$
\mathrm e^u-1\sim u
$$

所以整体与 $x^3$ 同阶。

### 7. 小 o 运算规则

小 $o$ 表示更高阶无穷小。

定义：

$$
\alpha(x)=o(\beta(x))
$$

等价于：

$$
\lim\frac{\alpha(x)}{\beta(x)}=0
$$

常用规则：

| 运算 | 结论 |
| --- | --- |
| $x\cdot o(x^2)$ | $o(x^3)$ |
| $o(x)\cdot o(x^2)$ | $o(x^3)$ |
| $o(x^2)+o(x^2)$ | $o(x^2)$ |
| $o(x)+o(x^2)$ | 一般是 $o(x)$，不能写成 $o(x^2)$ |

关键原则：加法看“较低阶”的那一项，乘法阶数相加。

::: warning 易错
$o(x)+o(x^2)$ 中，$o(x)$ 不一定比 $x^2$ 高阶，所以不能直接合并成 $o(x^2)$。
:::

### 8. 等价替换的安全范围

等价无穷小替换最安全的结构是乘除结构：

$$
\frac{\alpha(x)}{\beta(x)}
$$

如果是加减结构，要特别小心低阶项抵消。

例如：

$$
\sin x-x
$$

不能简单把 $\sin x$ 替换成 $x$ 得到 $0$。

正确做法是使用更高阶展开：

$$
\sin x=x-\frac{x^3}{6}+o(x^3)
$$

所以：

$$
\sin x-x\sim-\frac{x^3}{6}
$$

### 9. 常见整体代换

无穷小题经常不是直接出现 $x$，而是出现复合小量。

做题时可以设：

$$
u=\sqrt{x},\quad u=\tan x-x,\quad u=x^2,\quad u=\frac1n
$$

再套基本等价无穷小。

判断整体小量的标准是：

$$
u\to0
$$

只要 $u\to0$，就可以使用：

$$
\ln(1+u)\sim u,\quad \mathrm e^u-1\sim u,\quad 1-\cos u\sim\frac{u^2}{2}
$$

### 10. 考场书写建议

- 先写趋近过程，如 $x\to0$ 或 $x\to0^+$。
- 选择题可以用“作比”快速排除。
- 求阶数时，优先找最低非零阶。
- 加减结构慎用等价替换。
- 出现 $o(x^k)$ 时，先回到定义理解。
- 最终结论要写清楚“等价”“同阶”“高阶”还是“低阶”。

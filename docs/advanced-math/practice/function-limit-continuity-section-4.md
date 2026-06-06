<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第四节 极限计算</center></h1>

### 四则运算

::: info 例 1.
$$
求 \lim_{n\to\infty}\frac{\displaystyle \frac1n-\sin\frac1n}{\displaystyle \sin^3\frac1n}
.
$$
:::


::: details 解析
令 $x=\dfrac{1}{n},原式=\lim_{x\to 0}\dfrac{x-\sin x}{\sin^3x}\sim \dfrac{\frac{1}{6}x^3}{x^3}=\dfrac{1}{6}.$
:::

::: info 例 2.
$$
求 \lim_{x\to 0}\frac{e-\mathrm{e}^{\cos x}}{\sqrt[3]{1+x^2}-1}.
$$
:::

::: details 解析
$e-e^{\cos x}=-e(e^{\cos x-1}-1)\sim -e(\cos x-1)=e(1-\cos x)\sim e\times\dfrac{1}{2}x^2$

$(1+x^2)^{\frac13}-1\sim \dfrac13x^2$

$\lim_{x\to 0}\dfrac{e-\mathrm{e}^{\cos x}}{\sqrt[3]{1+x^2}-1}=\dfrac32e.$

:::

::: info 例 3.
$$
求 \lim_{x\to 1}\frac{x^x-1}{x\ln x}.
$$
:::

::: details 解析
$x^x-1=e^{x\ln x}-1\sim x\ln x$

$\lim_{x\to 1}\dfrac{x^x-1}{x\ln x}=1.$
:::

::: info 例 4.
$$
求 \lim_{x\to 0}\frac{3\sin x+x^2\cos \dfrac1x}{(1+\cos x)\ln(1+x)}
$$
:::

::: details 解析
因为：

$$
1+\cos x\to2,\qquad \ln(1+x)\sim x
$$

所以原式可化为：

$$
\lim_{x\to0}\frac{3\sin x+x^2\cos\frac1x}{2x}
$$

又因为：

$$
\lim_{x\to0}\frac{3\sin x}{x}=3
$$

且 $\cos\frac1x$ 有界，所以：

$$
\lim_{x\to0}\frac{x^2\cos\frac1x}{x}
=\lim_{x\to0}x\cos\frac1x
=0
$$

综上：

$$
\lim_{x\to 0}\frac{3\sin x+x^2\cos \dfrac1x}{(1+\cos x)\ln(1+x)}
=\frac32
$$

:::

::: info 例 5.
$$
求 \lim_{x\to 0^+}\frac{1-\sqrt{\cos x}}{x(1-\cos\sqrt{x})}
$$
:::

::: details 解析

$1-\cos\sqrt x\sim \dfrac12x$

$1-\sqrt{\cos x}=\dfrac{1-\cos x}{1+\sqrt{\cos x}}$

因此：

$$
\frac{1-\sqrt{\cos x}}{x(1-\cos\sqrt{x})}
=
\frac{1-\cos x}{x(1-\cos\sqrt x)(1+\sqrt{\cos x})}
$$

又因为：

$$
1-\cos x\sim\frac{x^2}{2},\qquad x(1-\cos\sqrt x)\sim x\cdot\frac{x}{2}=\frac{x^2}{2}
$$

所以：

$$
\lim_{x\to0^+}\frac{1-\sqrt{\cos x}}{x(1-\cos\sqrt{x})}
=\frac{1}{1+\sqrt{\cos0}}
=\frac12
$$

:::

::: info 例 6.
$$
求 \lim_{x\to 0}\frac{e^{x^2}-\cos x}{\ln \cos x}
$$
:::

::: details 解析
$e^{x^2}-\cos x=e^{x^2}-1+1-\cos x\sim x^2+\dfrac12x^2=\dfrac32x^2$

令 $t=\cos x-1,\ln\cos x=\ln(t+1)\sim t=\cos x-1\sim -\dfrac12x^2$

综上：$ \lim_{x\to 0}\dfrac{e^{x^2}-\cos x}{\ln \cos x}=-3$
:::


::: info 例 7.
$$
求 \lim_{x\to 0}\left(\frac{1}{\sin^2 x}-\frac{1}{x^2}\right)
$$
:::

::: details 解析
$$
\begin{aligned}
(\dfrac{1}{\sin x})^2-(\dfrac{1}{x})^2=(\dfrac{1}{\sin x}+\dfrac1x)(\dfrac{1}{\sin x}-\dfrac1x)\\=\dfrac{x+\sin x}{x\sin x}\times \dfrac{x-\sin x}{x\sin x}\\\sim
\dfrac{2x}{x^2}\times\dfrac{\frac16x^3}{x^2}\\=
\dfrac13
\end{aligned}
$$
:::

::: info 例 8.
$$
求 \lim_{x\to+\infty}\frac{e^x}{\left(1+\frac1x\right)^{x^2}}
$$
:::

::: details 解析
$(1+\dfrac1x)^{x^2}=e^{x^2\ln(1+\frac1x)}$

这里不能只用 $\ln(1+\frac1x)\sim\frac1x$，因为指数上还乘了 $x^2$，需要保留到二阶：

$$
\ln\left(1+\frac1x\right)
=\frac1x-\frac{1}{2x^2}+o\left(\frac1{x^2}\right)
$$

于是：

$$
x^2\ln\left(1+\frac1x\right)
=x-\frac12+o(1)
$$

所以：

$$
\left(1+\frac1x\right)^{x^2}
=e^{x-\frac12+o(1)}
$$

因此：

$$
\lim_{x\to+\infty}\dfrac{e^x}{\left(1+\frac1x\right)^{x^2}}
=e^{\frac12}
$$

:::

### 洛必达法则

::: info 例 9.
$$
求 \lim_{x\to 1}\frac{\ln \cos(x-1)}{1-\sin \frac{\pi}{2}x}
$$
:::

::: details 解析
当 $x\to1$ 时，分子、分母同趋于 $0$，可连续使用两次洛必达法则：

$$
\begin{aligned}
\lim_{x\to1}\frac{\ln \cos(x-1)}{1-\sin \frac{\pi}{2}x}
&=\lim_{x\to1}\frac{-\tan(x-1)}{-\frac{\pi}{2}\cos\frac{\pi x}{2}}\\
&=\frac{2}{\pi}\lim_{x\to1}\frac{\tan(x-1)}{\cos\frac{\pi x}{2}}\\
&=\frac{2}{\pi}\lim_{x\to1}\frac{\sec^2(x-1)}{-\frac{\pi}{2}\sin\frac{\pi x}{2}}\\
&=-\frac{4}{\pi^2}
\end{aligned}
$$
:::


::: info 例 10.
$$
\lim_{x\to\infty}\frac{x+\sin x}{x-\sin x}
$$
:::

::: details 解析
这是一个“不能盲目用洛必达”的反例。虽然原式是 $\frac{\infty}{\infty}$ 型，但导数之比为：

$$
\frac{1+\cos x}{1-\cos x}
$$

该式在 $x\to\infty$ 时没有极限，不能由洛必达法则推出结论。

正确做法是分子、分母同除以 $x$：

$$
\lim_{x\to\infty}\frac{x+\sin x}{x-\sin x}
=
\lim_{x\to\infty}\frac{1+\frac{\sin x}{x}}{1-\frac{\sin x}{x}}
=1
$$
:::

### 泰勒公式

::: info 例 11.
$$
求 \lim_{x\to0}\frac{e^{x^3}-1-x^3}{\sin^6 x}
$$
:::

::: details 解析
$e^{x^3}=1+x^3+\dfrac{x^6}{2}+o(x^6)$

$\dfrac{e^{x^3}-1-x^3}{\sin^6x}=\dfrac{\frac{x^6}{2}}{\sin^6x}\sim\dfrac{\frac{x^6}{2}}{x^6}=\dfrac12.$

:::

::: info 例 12.
$$
求 \lim_{x\to0}\frac{\cos x - e^{-\frac{x^2}{2}}}{x^2\big[x+\ln(1-x)\big]}
$$
:::

::: details 解析
$e^{-\frac{x^2}{2}}=1+(-\dfrac{x^2}{2})+\dfrac{(\frac{x^2}{2})^2}{2!}+o(x^4)$

$\cos x=1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}+o(x^4)$

$\ln(1-x)=(-x)-(\dfrac{x^2}{2})+o(x^2)$

$\dfrac{\cos x - e^{-\frac{x^2}{2}}}{x^2\big[x+\ln(1-x)\big]}=\dfrac{-\frac{x^4}{12}}{-\frac{x^4}{2}}=\dfrac16$

:::

::: info 例 13.
$$
求 \lim_{x\to0}\left(\frac{1}{\sin^2 x}-\frac{\cos^2 x}{x^2}\right)
$$
:::

::: details 解析
$$
\begin{aligned}
\frac{1}{\sin^2 x}-\frac{\cos^2 x}{x^2}
&=\frac{x^2-\sin^2x\cos^2x}{x^2\sin^2x}\\
&=\frac{(x+\sin x\cos x)(x-\sin x\cos x)}{x^2\sin^2x}
\end{aligned}
$$

又因为：

$$
\sin x\cos x
=\frac12\sin2x
=x-\frac{2}{3}x^3+o(x^3)
$$

所以：

$$
x-\sin x\cos x
\sim \frac23x^3,\qquad
x+\sin x\cos x\sim2x,\qquad
x^2\sin^2x\sim x^4
$$

因此：

$$
\lim_{x\to0}\left(\frac{1}{\sin^2 x}-\frac{\cos^2 x}{x^2}\right)
=\frac{2x\cdot\frac23x^3}{x^4}
=\frac43
$$
:::

### 左右极限求极限

::: info 例 14.
$$
求 \lim_{x\to 0^+}\frac{1-\mathrm{e}^{\frac1x}}{x+\mathrm{e}^{\frac1x}}
$$
:::

::: details 解析
$\dfrac{1-e^{\frac{1}{x}}}{x+e^{\frac{1}{x}}}=\dfrac{e^{-\frac{1}x}-1}{xe^{-\frac{1}{x}}+1}$

$\lim_{x\to 0^+}e^{-\frac{1}{x}}=0$

$\lim_{x\to 0^+}\dfrac{1-\mathrm{e}^{\frac1x}}{x+\mathrm{e}^{\frac1x}}=-1$

:::

::: info 例 15.
$$
求 \lim_{x\to0}\left(\frac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}+\frac{\sin x}{|x|}\right)
$$
:::

::: details 解析
先求 $\lim_{x\to0^-}\left(\dfrac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}+\dfrac{\sin x}{|x|}\right)$

当 $x\to0^-$ 时：

$$
e^{\frac4x}\to0,\qquad e^{\frac1x}\to0,\qquad |x|=-x
$$

所以：

$$
\lim_{x\to0^-}\frac{2+e^{\frac1x}}{1+e^{\frac4x}}=2
$$

且：

$$
\lim_{x\to0^-}\frac{\sin x}{|x|}
=
\lim_{x\to0^-}\frac{\sin x}{-x}
=-1
$$

因此：

$$
\lim_{x\to0^-}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=1
$$

再求 $\lim_{x\to0^+}\left(\dfrac{2+\mathrm{e}^{\frac1x}}{1+\mathrm{e}^{\frac4x}}+\dfrac{\sin x}{|x|}\right)$

$$
\frac{2+e^{\frac1x}}{1+e^{\frac4x}}
=
\frac{2e^{-\frac4x}+e^{-\frac3x}}{e^{-\frac4x}+1}
$$

当 $x\to0^+$ 时：

$$
e^{-\frac4x}\to0,\qquad e^{-\frac3x}\to0
$$

所以：

$$
\lim_{x\to0^+}\frac{2+e^{\frac1x}}{1+e^{\frac4x}}=0
$$

且 $|x|=x$，所以：

$$
\lim_{x\to0^+}\frac{\sin x}{|x|}
=
\lim_{x\to0^+}\frac{\sin x}{x}
=1
$$

因此：

$$
\lim_{x\to0^+}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=1
$$

左右极限相等，综上：

$$
\lim_{x\to0}\left(\frac{2+e^{\frac1x}}{1+e^{\frac4x}}+\frac{\sin x}{|x|}\right)=1
$$

:::

::: info 例 16:
$$
已知当\ x\to0\ 时，(1+ax^2)^{\frac13}-1\ 与\ \cos x-1\ 是等价无穷小，求\ a。
$$
:::

::: details 解析
$\lim_{x\to 0}\dfrac{(1+ax^2)^{\frac13}-1}{\cos x-1}=1$

当 $x\to0$ 时：

$$
(1+ax^2)^{\frac13}-1\sim \frac13ax^2
$$

$$
\cos x-1\sim -\frac12x^2
$$

所以：

$$
\frac{\frac13a}{-\frac12}=1
$$

解得：

$$
a=-\frac32
$$
:::

::: info 例 17.
$$
\lim_{x\to\infty}\left(\frac{x^2}{x+1}-ax-b\right)=0,求\ a,b
$$
:::

::: details 解析
先作除法：

$$
\frac{x^2}{x+1}=x-1+\frac{1}{x+1}
$$

因此：

$$
\frac{x^2}{x+1}-ax-b
=(1-a)x-(1+b)+\frac{1}{x+1}
$$

要使极限为 $0$，必须有：

$$
1-a=0,\qquad -(1+b)=0
$$

所以：

$$
a=1,\qquad b=-1
$$

:::

::: info 例 18.
$$
\begin{aligned}
设函数\ f(x)\ 在\ x=0\ 的某邻域内具有一阶连续导数，且\ f(0)\neq0,f'(0)\neq0，\\

若\ af(h)+bf(2h)-f(0)\ 在\ h\to0 时是比\ h\ 高阶的无穷小，试确定\ a,b\ 的值。
\end{aligned}
$$
:::

::: details 解析
因为 $f(x)$ 在 $x=0$ 处一阶可导，所以：

$$
f(h)=f(0)+f'(0)h+o(h)
$$

$$
f(2h)=f(0)+2f'(0)h+o(h)
$$

代入：

$$
\begin{aligned}
af(h)+bf(2h)-f(0)
&=(a+b-1)f(0)+(a+2b)f'(0)h+o(h)
\end{aligned}
$$

题目要求它是比 $h$ 高阶的无穷小，即为 $o(h)$。

由于 $f(0)\ne0,\ f'(0)\ne0$，必须有：

$$
\begin{cases}
a+b-1=0\\
a+2b=0
\end{cases}
$$

解得：

$$
a=2,\qquad b=-1
$$
:::


::: info 例 19.
$$
设当\ x\to0\ 时，\mathrm{e}^x-(ax^2+bx+1) 是比\ x^2\ 高阶的无穷小，求\ a,b.
$$
:::

::: details 解析
$$
\begin{aligned}
e^x-(ax^2+bx+1)
&=\left(1+x+\frac{x^2}{2}+o(x^2)\right)-(ax^2+bx+1)\\
&=(1-b)x+\left(\frac12-a\right)x^2+o(x^2)
\end{aligned}
$$

要使其为比 $x^2$ 高阶的无穷小，即为 $o(x^2)$，必须有：

$$
1-b=0,\qquad \frac12-a=0
$$

解得：

$$
a=\frac12,\qquad b=1
$$

:::

## 解题方法/技巧总结

### 1. 先判断极限类型

极限计算不要一上来就套公式，先看代入后的形式。

| 代入后的形式 | 常用方法 |
| --- | --- |
| 可直接代入 | 直接代入 |
| $\frac00$、$\frac{\infty}{\infty}$ | 等价无穷小、洛必达、泰勒展开 |
| 根式差 | 有理化 |
| 加减结构低阶项抵消 | 泰勒展开 |
| 幂指函数 | 取对数 |
| 含 $|x|$、$e^{1/x}$ | 分左右极限 |
| 含参数且要求等价/高阶 | 展开后令低阶项系数为 $0$ |

::: tip 核心习惯
先判型，再选方法。尤其不要看到 $\frac00$ 就立刻洛必达，很多题用等价无穷小或泰勒更快。
:::

### 2. 等价无穷小适合乘除结构

等价无穷小最安全的使用场景是乘除结构，例如：

$$
\frac{\alpha(x)}{\beta(x)}
$$

若：

$$
\alpha(x)\sim \alpha_1(x),\qquad \beta(x)\sim \beta_1(x)
$$

则通常可以替换为：

$$
\frac{\alpha(x)}{\beta(x)}
\sim
\frac{\alpha_1(x)}{\beta_1(x)}
$$

本节常用等价无穷小：

| 表达式 | 等价无穷小 |
| --- | --- |
| $\sin x$ | $x$ |
| $\tan x$ | $x$ |
| $1-\cos x$ | $\frac{x^2}{2}$ |
| $e^x-1$ | $x$ |
| $\ln(1+x)$ | $x$ |
| $(1+x)^\alpha-1$ | $\alpha x$ |

::: warning 易错
加减结构不能随便等价替换。比如 $\sin x-x$ 不能把 $\sin x$ 替换成 $x$ 后直接得到 $0$，必须看更高阶项。
:::

### 3. 加减抵消优先用泰勒

遇到下面这类形式，要优先想到泰勒展开：

$$
e^x-1-x,\qquad \ln(1+x)-x,\qquad \sin x-x,\qquad 1-\cos x
$$

常用低阶展开：

$$
\begin{aligned}
e^x&=1+x+\frac{x^2}{2}+\frac{x^3}{6}+o(x^3)\\
\ln(1+x)&=x-\frac{x^2}{2}+\frac{x^3}{3}+o(x^3)\\
\sin x&=x-\frac{x^3}{6}+o(x^3)\\
\cos x&=1-\frac{x^2}{2}+\frac{x^4}{24}+o(x^4)
\end{aligned}
$$

判断展开到哪一阶，看分母阶数和低阶项是否抵消。

例如分母是 $x^4$，分子就至少要展开到 $x^4$；如果 $x^2$ 项抵消，还要继续展开。

### 4. 根式差先有理化

看到：

$$
\sqrt{A(x)}-\sqrt{B(x)}
$$

优先乘共轭：

$$
\sqrt{A(x)}-\sqrt{B(x)}
=
\frac{A(x)-B(x)}{\sqrt{A(x)}+\sqrt{B(x)}}
$$

如果是：

$$
1-\sqrt{\cos x}
$$

也可以写成：

$$
1-\sqrt{\cos x}
=
\frac{1-\cos x}{1+\sqrt{\cos x}}
$$

这样就能和 $1-\cos x\sim \frac{x^2}{2}$ 接上。

### 5. 幂指函数先取对数

遇到：

$$
u(x)^{v(x)}
$$

尤其是 $1^\infty$、$0^0$、$\infty^0$ 型，常设：

$$
L=u(x)^{v(x)}
$$

两边取对数：

$$
\ln L=v(x)\ln u(x)
$$

先求 $\ln L$ 的极限，再指数还原：

$$
\lim L=e^{\lim \ln L}
$$

例如：

$$
\left(1+\frac1x\right)^{x^2}
$$

不能只用 $\ln(1+\frac1x)\sim\frac1x$，因为还要乘 $x^2$，必须保留到二阶：

$$
\ln\left(1+\frac1x\right)
=
\frac1x-\frac{1}{2x^2}+o\left(\frac1{x^2}\right)
$$

### 6. 洛必达法则要先看条件

洛必达法则直接处理的是：

$$
\frac00,\qquad \frac{\infty}{\infty}
$$

使用前要确认：

1. 分子、分母分别趋于 $0$ 或分别趋于无穷。
2. 分子、分母在去心邻域内可导。
3. 分母导数不为 $0$。
4. 导数之比的极限存在或为无穷。

::: warning 易错
导数之比没有极限时，不能用洛必达推出原极限不存在，也不能强行算。
:::

例如：

$$
\frac{x+\sin x}{x-\sin x}
$$

虽然是 $\frac{\infty}{\infty}$ 型，但求导后：

$$
\frac{1+\cos x}{1-\cos x}
$$

没有极限，所以不适合用洛必达；正确做法是同除以 $x$。

### 7. 左右极限分开算

出现以下结构时，通常要分左右极限：

- $|x|$
- $e^{1/x}$
- $\ln x$
- 分段函数
- $x\to0^\pm$

例如：

$$
\frac{\sin x}{|x|}
$$

当 $x\to0^+$ 时：

$$
\frac{\sin x}{|x|}=\frac{\sin x}{x}\to1
$$

当 $x\to0^-$ 时：

$$
\frac{\sin x}{|x|}=\frac{\sin x}{-x}\to-1
$$

若左右极限不同，则原极限不存在；若左右极限相同，才是原极限。

### 8. 含参数题看低阶项

含参数极限常见要求：

- 使两个无穷小等价。
- 使某表达式为高阶无穷小。
- 使极限存在且等于某个值。

通用做法是展开到足够阶，然后比较系数。

若要求：

$$
F(x)=o(x^2)
$$

则 $F(x)$ 中 $x$ 项和 $x^2$ 项的系数都必须为 $0$。

例如：

$$
e^x-(ax^2+bx+1)
$$

展开：

$$
e^x-(ax^2+bx+1)
=(1-b)x+\left(\frac12-a\right)x^2+o(x^2)
$$

若要求它是比 $x^2$ 高阶的无穷小，则：

$$
1-b=0,\qquad \frac12-a=0
$$

### 9. 常见错误检查清单

做完极限题后，可以按下面几点自查：

1. 是否把 $x\to0^+$ 和 $x\to0^-$ 混写了。
2. 是否在加减结构中乱用了等价无穷小。
3. 是否少展开了一阶，导致低阶抵消没看出来。
4. 是否把 $\sim$ 当成严格等号使用。
5. 是否对洛必达的适用条件检查不够。
6. 是否忘记最后判断左右极限是否相等。
7. 是否把“高阶无穷小”误写成“同阶”或“等价”。

### 10. 考场书写模板

遇到一般极限题，可以按这个顺序写：

1. 代入判断未定式类型。
2. 说明使用方法：等价无穷小、泰勒、洛必达、取对数、左右极限。
3. 写出关键变形或展开。
4. 化为常数极限。
5. 单独写最终答案。

推荐最后写：

$$
\therefore\quad \lim_{x\to a}F(x)=A
$$

这样结论清楚，不容易被长过程淹没。


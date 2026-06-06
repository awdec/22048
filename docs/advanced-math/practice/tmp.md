<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第一节 函数及其性质</center></h1>

## 函数

### 函数关系判断方法总结

判断两个表达式是否表示同一个函数关系，核心看两件事：

1. 定义域是否相同。
2. 对应法则是否相同。

::: tip 判定标准
两个函数相同，当且仅当：

$$
D_f=D_g
$$

且对任意 $x\in D_f$，都有：

$$
f(x)=g(x)
$$
:::

做题时可以按下面步骤判断：

1. 先求两个函数各自的定义域。
2. 若定义域不同，直接判定不是同一个函数。
3. 若定义域相同，再比较对应法则。
4. 比较对应法则时，可以化简表达式，也可以代入一个反例点排除。
5. 自变量字母本身不重要，关键是“允许的输入”和“输入后的输出规则”。

常见易错点：

- 不能只看化简后的表达式，要保留原函数的定义域限制。
- $f(x)=x$ 与 $g(x)=\frac{x^2}{x}$ 不是同一个函数，因为 $g(x)$ 在 $x=0$ 处无定义。
- $f(x)=x^2$ 与 $g(t)=t^2$ 是同一个函数关系，因为自变量叫 $x$ 还是 $t$ 不影响函数本质。
- 值域可以辅助判断，但“值域相同”不能推出两个函数相同。
- 分段函数要特别检查分界点处的函数值和对应法则。

::: info 例 1.
判断 $f(x)=x$ 和 $g(x)=x^3$ 是否是相同的函数关系.
:::

::: details 解析
定义域：$D_f=\mathbb R,D_g=\mathbb R$.

对应法则不同，例如取 $x=2$：

$$
f(2)=2,\quad g(2)=8
$$

定义域相同，对应法则不同，不是相同的函数关系.
:::

::: info 例 2.
判断 $f(x)=x^2$ 和 $g(t)=t^2$ 是否是相同的函数关系.
:::

::: details 解析
定义域：$D_f=\mathbb R,D_g=\mathbb R$.

把 $g(t)=t^2$ 中的自变量 $t$ 改写成 $x$，得到：

$$
g(x)=x^2
$$

定义域相同，对应法则相同，是相同的函数关系.

函数与自变量符号无关.
:::

### 初等函数


::: info 例 3.
$f(x)=\sin x,f[\varphi(x)]=1-x^2$ 求 $\varphi(x)$.
:::

::: details 解析
$$
\begin{aligned}
\sin \varphi(x) &= 1-x^2 \\
\varphi(x) &= \arcsin(1-x^2)
\end{aligned}
$$

定义域：

$$
\begin{aligned}
-1\le 1-x^2\le 1 \\
0 \le x^2\le 2\\
-\sqrt 2\le x\le \sqrt 2
\end{aligned}
$$

$D_{\varphi} = [-\sqrt 2, \sqrt 2]$.
:::

::: info 例 4.
$3f(x)+f(2-x)=x^2$，求 $f(x)$。
:::

::: details 解析
定义域没有限制，把 $2-x$ 作为自变量反代回去：$3f(2-x)+f(x)=(2-x)^2$.

联立方程：

$$
\begin{equation*}
\begin{cases}
3f(x)+f(2-x)=x^2 \\
3f(2-x)+f(x)=(2-x)^2
\end{cases}
\end{equation*}

$$

消元解得：$f(x)=\dfrac{x^2+2x-2}{4}$.
:::

### 函数的性质

::: info 例 5
判断 $f(x)=\ln(x+\sqrt{1+x^2})$ 的奇偶性.
:::

::: details 解析
定义域：$D_f=(-\infty,+\infty)$，关于原点对称。

$f(-x)=\ln(-x+\sqrt{1+x^2})$


$$
\begin{aligned}
f(-x)-f(x)
&=\ln(-x+\sqrt{1+x^2})-\ln(x+\sqrt{1+x^2})\\
&=\ln\dfrac{-x+\sqrt{1+x^2}}{x+\sqrt{1+x^2}}\\
&=\ln(1-2x\sqrt{1+x^2})\\
&\not\equiv0
\end{aligned}
$$

$$
\begin{aligned}
f(-x)+f(x)
&=\ln(-x+\sqrt{1+x^2})+\ln(x+\sqrt{1+x^2})\\
&=\ln[(-x+\sqrt{1+x^2})(x+\sqrt{1+x^2})]\\
&=\ln(1)\\
&=0
\end{aligned}
$$

所以 $f(x)$ 是奇函数。

:::

::: info 例 6
判断 $f(x)=|x\sin x|e^{\cos x}$ 的周期性、有界性、奇偶性.
:::

::: details 解析
- 周期性

$f(0)=0$，设 $f(T)=f(0)=0$，$f(T)=|T\sin T|e^{\cos T}=0$.

$T=0\lor \sin T=0\lor e^{\cos T}=0$

$\because e^{x}>0,T\ne 0\therefore \sin T = 0\rightarrow T = k\pi,k\in \mathbb N^{+}$.

构造 $f(\dfrac{\pi}{2})=f(k\pi + \dfrac{\pi}{2})$，$f(\dfrac{\pi}{2})=\dfrac{\pi}{2},f(\dfrac{\pi}{2}+k\pi)=\dfrac{\pi}{2}+k\pi$

与 $f(\dfrac{\pi}{2})=f(\dfrac{\pi}{2}+k\pi)$ 矛盾，所以不存在周期。

- 有界性

下界：易得 $f(x)\ge 0$，函数有下界。

上界：构造 $x=2k\pi+\dfrac{\pi}{2},k\in\mathbb N^{+}$，$\sin x$ 和 $e^{\cos x}$ 都是常数，而 

$$

\lim_{k\to \infty} f(x)=+\infty

$$

所以函数没有上界。

- 奇偶性

$D_f=\mathbb R$，关于原点对称.

$$

f(x)=|x\sin x|e^{\cos x}\\
f(-x)=|x\sin x|e^{\cos x}

$$

所以 $f(x)$ 是偶函数。

:::

::: info 例 7.
判断 $f(x)=\dfrac{x^2-1}{x^2+1}$ 的有界性
:::

::: details 解析
$$

f(x)=1-\dfrac{2}{x^2+1}\\
1\le \dfrac{2}{x^2+1}\le 2\\
-1\le f(x)\le 0\\
|f(x)|\le 1

$$

所以 $f(x)$ 有界.

:::


::: info 例 8.
$f(x)\ne 0,x\in[0,\pi]$，$f(x+\pi)=f(x)+\sin x$，求 $f(x)$ 在 $\mathbb R$ 上的周期。
:::

::: details 解析
$$
f(x+2\pi)=f(x+\pi)+\sin(x+\pi)\\
= f(x)
$$

所以 $f(x)$ 的周期是 $2\pi$.
:::

### 复合函数


::: info 例 9.

$$
f(x)=
\begin{cases}
\mathrm{e}^{x}, & x<1,\\
x, & x\ge1,
\end{cases}
\qquad
\varphi(x)=
\begin{cases}
x+2, & x<0,\\
x^{2}-1, & x\ge0,
\end{cases}
$$

求 $f[\varphi(x)]$。

:::

::: details 解析
把 $\varphi(x)$ 代入 $f(\varphi(x))=\begin{cases}
e^{\varphi(x)} & \varphi(x)<1\\
\varphi(x) & \varphi(x)\ge1\end{cases}$

解得：$\begin{cases}\varphi(x) < 1 & x\in(-\infty,-1)\cup[0,\sqrt 2)\\
\varphi(x)\ge 1 & x\in[-1,0)\cup [\sqrt 2,+\infty)
\end{cases}$

代回：$f(\varphi(x))=\begin{cases}
e^{x+2}& x<-1,\\
x+2& -1\le x<0\\
e^{x^2-1}&0\le x<\sqrt 2\\
x^2-1 & x\ge\sqrt 2\end{cases}$

:::

::: info 例 10.

设函数 $\displaystyle f(x)=\frac{x}{1+x},\,x\in[0,1]$，令 $f_1(x)=f(x)$，求 $f_2(x)=f(f_1(x))$，$f_n(x)=f(f_{n-1}(x))$，求 $f_n(x)$。
::: 


::: details 解析
$f_1(n)=\dfrac{x}{1+x},f_2(n)=\dfrac{x}{1+2x}$.

猜想：$f_n(x)=\dfrac{x}{1+nx}$.

数学归纳法：$f_{n+1}(x)=\dfrac{\frac{x}{1+nx}}{1+\frac{x}{1+nx}}=\dfrac{x}{1+(n+1)x}$

:::

### 反函数


::: info 例 11.

求 $y=\ln\left(x+\sqrt{x^2-1}\right),x\ge 1$ 的反函数。
::: 


::: details 解析

$$

e^y = x+\sqrt{x^2-1}=\dfrac{1}{x-\sqrt{x^2-1}}\\
e^{-y}=x-\sqrt{x^2-1}\\
e^y+e^{-y}=2x\\
x=\dfrac{e^y+e^{-y}}{2}
$$

$x\ge 1\rightarrow x+\sqrt{x^2-1}\ge 1\rightarrow y\ge 0$.

$D_y=[0,+\infty)$.

:::
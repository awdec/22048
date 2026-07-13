<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第一节 函数及其性质</center></h1>

## 函数

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
由题意：

$$
\sin \varphi(x)=1-x^2
$$

要使右端能作为正弦值，必须有：

$$
\begin{aligned}
-1\le 1-x^2\le 1 \\
0 \le x^2\le 2\\
-\sqrt 2\le x\le \sqrt 2
\end{aligned}
$$

因为 $\sin x$ 在 $\mathbb R$ 上不是一一对应的，所以 $\varphi(x)$ 不唯一。

若取同一反正弦分支，可写为：

$$
\varphi(x)=k\pi+(-1)^k\arcsin(1-x^2),\qquad k\in\mathbb Z
$$

其中：

$$
D_{\varphi} = [-\sqrt 2, \sqrt 2]
$$

若题目默认取反正弦主值，则可取：

$$
\varphi(x)=\arcsin(1-x^2)
$$
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

令 $s=\sqrt{1+x^2}$，则：

$$
\begin{aligned}
f(-x)+f(x)
&=\ln(s-x)+\ln(s+x)\\
&=\ln[(s-x)(s+x)]\\
&=\ln(s^2-x^2)\\
&=\ln(1)\\
&=0
\end{aligned}
$$

所以：

$$
f(-x)=-f(x)
$$

因此 $f(x)$ 是奇函数。

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
\begin{aligned}
f(-x)
&=|-x\sin(-x)|e^{\cos(-x)}\\
&=|x\sin x|e^{\cos x}\\
&=f(x)
\end{aligned}
$$

所以 $f(x)$ 是偶函数。

:::

::: info 例 7.
判断 $f(x)=\dfrac{x^2-1}{x^2+1}$ 的有界性
:::

::: details 解析
$$
\begin{aligned}
f(x)
&=\frac{x^2-1}{x^2+1}\\
&=1-\frac{2}{x^2+1}
\end{aligned}
$$

因为 $x^2+1\ge1$，所以：

$$
0<\frac{2}{x^2+1}\le2
$$

于是：

$$
-1\le f(x)<1
$$

从而：

$$
|f(x)|\le1
$$

所以 $f(x)$ 有界。

:::


::: info 例 8.
$f(x)\ne 0,x\in[0,\pi]$，$f(x+\pi)=f(x)+\sin x$，求 $f(x)$ 在 $\mathbb R$ 上的周期。
:::

::: details 解析
$$
\begin{aligned}
f(x+2\pi)
&=f(x+\pi)+\sin(x+\pi)\\
&=f(x)+\sin x-\sin x\\
&=f(x)
\end{aligned}
$$

所以 $2\pi$ 是 $f(x)$ 的一个周期。

若 $T$ 是 $f(x)$ 的周期，则：

$$
\begin{aligned}
f(x+\pi+T)-f(x+T)&=\sin(x+T)\\
f(x+\pi)-f(x)&=\sin x
\end{aligned}
$$

又因为 $f(x+T)=f(x)$，所以：

$$
\sin(x+T)=\sin x
$$

这要求 $T=2k\pi$，$k\in\mathbb Z$。因此最小正周期为：

$$
2\pi
$$
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
先算前两项：

$$
f_1(x)=\frac{x}{1+x},\qquad
f_2(x)=f(f_1(x))=\frac{x}{1+2x}
$$

猜想：$f_n(x)=\dfrac{x}{1+nx}$.

数学归纳法：

$$
\begin{aligned}
f_{n+1}(x)
&=f(f_n(x))\\
&=\frac{\frac{x}{1+nx}}{1+\frac{x}{1+nx}}\\
&=\frac{x}{1+(n+1)x}
\end{aligned}
$$

所以：

$$
f_n(x)=\frac{x}{1+nx}
$$

:::

### 反函数


::: info 例 11.

求 $y=\ln\left(x+\sqrt{x^2-1}\right),x\ge 1$ 的反函数。
::: 


::: details 解析

$$
\begin{aligned}
e^y
&=x+\sqrt{x^2-1}\\
&=\frac{1}{x-\sqrt{x^2-1}}
\end{aligned}
$$

所以：

$$
e^{-y}=x-\sqrt{x^2-1}
$$

两式相加：

$$
e^y+e^{-y}=2x
$$

于是：

$$
x=\frac{e^y+e^{-y}}{2}
$$

又因为 $x\ge1$，所以：

$$
x+\sqrt{x^2-1}\ge1
$$

从而原函数值域为：

$$
y\ge0
$$

交换 $x,y$，反函数为：

$$
f^{-1}(x)=\frac{e^x+e^{-x}}{2},\qquad x\ge0
$$

:::

## 答题技巧总结

### 1. 总体顺序

函数题不要一上来就计算，先按下面顺序扫一遍：

1. 先看定义域。
2. 再看对应法则。
3. 再判断函数性质。
4. 最后处理题目要求的计算或证明。

::: tip 核心习惯
凡是涉及“是否相同、奇偶性、周期性、反函数、复合函数”的题，第一步都应该先检查定义域。
:::

### 2. 判断两个函数是否相同

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

常用判断技巧：

- 定义域不同，直接不同。
- 定义域相同，再比较对应法则。
- 对应法则不同，可以代入一个反例点快速排除。
- 自变量字母本身不重要，关键是“允许的输入”和“输入后的输出规则”。
- 化简表达式时不能丢掉原来的限制点，例如 $\frac{x^2}{x}$ 不能直接当作 $x$。
- 值域可以辅助判断，但“值域相同”不能推出两个函数相同。
- 分段函数要特别检查分界点处的函数值和对应法则。

典型例子：

- $f(x)=x$ 与 $g(x)=\frac{x^2}{x}$ 不是同一个函数，因为 $g(x)$ 在 $x=0$ 处无定义。
- $f(x)=x^2$ 与 $g(t)=t^2$ 是同一个函数关系，因为自变量叫 $x$ 还是 $t$ 不影响函数本质。

### 3. 已知 $f(x)$ 和 $f[\varphi(x)]$ 求 $\varphi(x)$

这类题的关键是把 $\varphi(x)$ 看成一个整体。

若：

$$
f(u)=F(x)
$$

则先解：

$$
u=f^{-1}(F(x))
$$

再令：

$$
\varphi(x)=u
$$

常见步骤：

1. 令 $u=\varphi(x)$。
2. 把 $f[\varphi(x)]$ 改写为 $f(u)$。
3. 解出 $u$。
4. 写回 $\varphi(x)$。
5. 最后补充 $\varphi(x)$ 的定义域。

::: warning 易错
如果用了反三角函数、对数、根式，要额外检查值域和定义域限制。
:::

### 4. 含 $f(2-x)$ 的抽象函数题

遇到：

$$
af(x)+bf(2-x)=g(x)
$$

这类题，常用“换元反代 + 联立消元”。

做法：

1. 把原式中的 $x$ 换成 $2-x$。
2. 得到关于 $f(x)$ 与 $f(2-x)$ 的二元一次方程组。
3. 联立消元，解出 $f(x)$。

例如：

$$
3f(x)+f(2-x)=x^2
$$

令 $x\mapsto 2-x$，得：

$$
3f(2-x)+f(x)=(2-x)^2
$$

然后联立即可。

### 5. 判断奇偶性

奇偶性题固定三步：

1. 看定义域是否关于原点对称。
2. 计算 $f(-x)$。
3. 比较 $f(-x)$ 与 $f(x)$、$-f(x)$。

判定：

| 条件 | 结论 |
| --- | --- |
| $f(-x)=f(x)$ | 偶函数 |
| $f(-x)=-f(x)$ | 奇函数 |
| 两者都不满足 | 非奇非偶 |

常用技巧：

- 若出现 $\ln A+\ln B$，优先合并为 $\ln(AB)$。
- 若出现 $\ln A-\ln B$，优先合并为 $\ln\frac AB$。
- 绝对值函数通常偏偶性，指数函数 $e^{\cos x}$ 这类由偶函数复合而来，常保留偶性。
- 定义域不对称时，不需要继续算，直接非奇非偶。

### 6. 判断周期性

周期函数的本质是存在非零常数 $T$，使：

$$
f(x+T)=f(x)
$$

做题时注意：

- 不能只看三角函数部分有周期。
- 如果外面乘了 $x$、$x^2$、$\ln x$ 这类非周期因子，整体通常不再周期。
- 找到候选周期后，必须代回验证对任意 $x$ 都成立。
- 证明没有周期时，可以选特殊点制造矛盾。

例如 $|x\sin x|e^{\cos x}$ 中虽然 $\sin x$、$\cos x$ 有周期，但外面的 $x$ 破坏了整体周期性。

### 7. 判断有界性

有界性要分上界和下界看。

常用方法：

- 能化简就先化简，例如分式可分离常数。
- 用基本不等式夹住函数值。
- 对含三角函数的题，利用 $-1\le\sin x\le1$、$-1\le\cos x\le1$。
- 证明无界时，构造一列 $x_n$，使 $f(x_n)\to\infty$ 或 $f(x_n)\to-\infty$。

常见写法：

$$
\exists M>0,\quad |f(x)|\le M
$$

则函数有界。

若能找到 $x_n$，使：

$$
|f(x_n)|\to\infty
$$

则函数无界。

### 8. 分段复合函数

求 $f[\varphi(x)]$ 时，最重要的是判断 $\varphi(x)$ 落在哪一段。

做题步骤：

1. 先写外层函数的分段条件。
2. 把外层条件中的自变量替换为 $\varphi(x)$。
3. 解不等式，得到 $x$ 的分段范围。
4. 在每个范围内代入对应表达式。
5. 最后检查端点归属。

::: warning 易错
分段复合函数不是先把表达式代进去就结束，而是先判断“内层函数值落入外层函数的哪一段”。
:::

### 9. 迭代函数

迭代函数常见形式：

$$
f_1(x)=f(x),\quad f_n(x)=f(f_{n-1}(x))
$$

答题技巧：

1. 先算 $f_1(x)$、$f_2(x)$、$f_3(x)$。
2. 观察分子分母或指数的变化规律。
3. 写出猜想。
4. 用数学归纳法验证。

例如：

$$
f(x)=\frac{x}{1+x}
$$

通常会出现：

$$
f_n(x)=\frac{x}{1+nx}
$$

这类规律。

### 10. 求反函数

反函数题固定流程：

1. 设 $y=f(x)$。
2. 由 $y$ 解出 $x$。
3. 交换 $x$ 和 $y$。
4. 写出反函数定义域。

注意：

- 原函数的值域就是反函数的定义域。
- 若题目给了 $x\ge1$、$x>0$ 这类限制，必须带入反函数定义域。
- 解根式、对数时，常用有理化或配凑倒数。

例如：

$$
y=\ln\left(x+\sqrt{x^2-1}\right)
$$

可以先指数化：

$$
e^y=x+\sqrt{x^2-1}
$$

再利用：

$$
(x+\sqrt{x^2-1})(x-\sqrt{x^2-1})=1
$$

得到：

$$
x=\frac{e^y+e^{-y}}2
$$

### 11. 考场书写建议

- 先写定义域，再写性质判断。
- 分段题写清楚每个区间的端点归属。
- 多行公式用 `aligned`，并在等号前加 `&` 对齐。
- 最终结论单独写一句，不要只停在计算过程。
- 如果题目问“判断”，结论要写“是/不是”“有界/无界”“奇/偶/非奇非偶”。

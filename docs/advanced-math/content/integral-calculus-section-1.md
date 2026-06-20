<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第一节 原函数和不定积分</center></h1>

## 1. 原函数

若函数 $F(x)$ 在区间 $I$ 上可导，且：

$$
F'(x)=f(x),\qquad x\in I
$$

则称 $F(x)$ 是 $f(x)$ 在区间 $I$ 上的一个原函数。

例如：

$$
(\sin x)'=\cos x
$$

所以 $\sin x$ 是 $\cos x$ 的一个原函数。

::: tip 重点
原函数不唯一。若 $F(x)$ 是 $f(x)$ 的一个原函数，则 $F(x)+C$ 也是 $f(x)$ 的原函数。
:::

## 2. 不定积分

函数 $f(x)$ 的全体原函数称为 $f(x)$ 的不定积分，记作：

$$
\int f(x)\,dx
$$

若 $F'(x)=f(x)$，则：

$$
\int f(x)\,dx=F(x)+C
$$

其中 $C$ 是任意常数。

### 2.1 不定积分与导数的关系

不定积分和导数互为逆运算：

$$
\left(\int f(x)\,dx\right)'=f(x)
$$

$$
\int F'(x)\,dx=F(x)+C
$$

## 3. 不定积分的性质

### 3.1 线性性质

$$
\int [af(x)+bg(x)]\,dx
=
a\int f(x)\,dx+b\int g(x)\,dx
$$

其中 $a,b$ 为常数。

### 3.2 常数因子可提出

$$
\int kf(x)\,dx=k\int f(x)\,dx
$$

## 4. 基本积分公式

### 4.1 幂函数

当 $\alpha\ne-1$ 时：

$$
\int x^\alpha\,dx
=
\frac{x^{\alpha+1}}{\alpha+1}+C
$$

特别地：

$$
\int \frac1x\,dx=\ln|x|+C
$$

### 4.2 指数函数

$$
\int e^x\,dx=e^x+C
$$

$$
\int a^x\,dx=\frac{a^x}{\ln a}+C
\qquad(a>0,\ a\ne1)
$$

### 4.3 三角函数

$$
\int \sin x\,dx=-\cos x+C
$$

$$
\int \cos x\,dx=\sin x+C
$$

$$
\int \sec^2 x\,dx=\tan x+C
$$

$$
\int \csc^2 x\,dx=-\cot x+C
$$

$$
\int \sec x\tan x\,dx=\sec x+C
$$

$$
\int \csc x\cot x\,dx=-\csc x+C
$$

### 4.4 反三角相关

$$
\int \frac{1}{1+x^2}\,dx=\arctan x+C
$$

$$
\int \frac{1}{\sqrt{1-x^2}}\,dx=\arcsin x+C
$$

## 5. 第一类换元法

第一类换元法也称“凑微分法”。

若：

$$
\int f(\varphi(x))\varphi'(x)\,dx
$$

令：

$$
u=\varphi(x)
$$

则：

$$
du=\varphi'(x)\,dx
$$

于是：

$$
\int f(\varphi(x))\varphi'(x)\,dx
=
\int f(u)\,du
$$

常见凑微分：

$$
\int \frac{f'(x)}{f(x)}\,dx=\ln|f(x)|+C
$$

$$
\int e^{f(x)}f'(x)\,dx=e^{f(x)}+C
$$

$$
\int [f(x)]^\alpha f'(x)\,dx
=
\frac{[f(x)]^{\alpha+1}}{\alpha+1}+C
$$

其中 $\alpha\ne-1$。

## 6. 第二类换元法

第二类换元法是令：

$$
x=\varphi(t)
$$

则：

$$
dx=\varphi'(t)\,dt
$$

从而：

$$
\int f(x)\,dx
=
\int f(\varphi(t))\varphi'(t)\,dt
$$

常见代换：

| 结构 | 常用代换 |
| --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin t$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan t$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec t$ |

::: warning 易错
第二类换元最后要把结果换回原变量 $x$。
:::

## 7. 分部积分法

由乘积求导公式：

$$
(uv)'=u'v+uv'
$$

得到分部积分公式：

$$
\int u\,dv=uv-\int v\,du
$$

常用于：

- 多项式乘指数函数
- 多项式乘三角函数
- 多项式乘对数函数
- 反三角函数积分

常见选择原则：

$$
\text{反三角、对数、幂函数、三角、指数}
$$

前面的常选作 $u$。

例如：

$$
\int x e^x\,dx
$$

取：

$$
u=x,\qquad dv=e^x\,dx
$$

则：

$$
\int x e^x\,dx=xe^x-\int e^x\,dx=xe^x-e^x+C
$$

## 8. 有理函数积分

有理函数是两个多项式的商：

$$
\frac{P(x)}{Q(x)}
$$

处理思路：

1. 若分子次数不低于分母次数，先多项式除法。
2. 对真分式进行部分分式分解。
3. 化为基本积分。

常见基本形式：

$$
\int \frac{1}{x-a}\,dx=\ln|x-a|+C
$$

$$
\int \frac{1}{(x-a)^k}\,dx
=
\frac{(x-a)^{-k+1}}{-k+1}+C
\qquad(k\ne1)
$$

## 9. 三角函数积分常见技巧

### 9.1 奇偶幂处理

若 $\sin x$ 或 $\cos x$ 有奇次幂，常拆出一个因子，再用：

$$
\sin^2 x+\cos^2 x=1
$$

若都是偶次幂，常用降幂公式：

$$
\sin^2 x=\frac{1-\cos2x}{2}
$$

$$
\cos^2 x=\frac{1+\cos2x}{2}
$$

### 9.2 万能代换

对复杂三角有理式，可令：

$$
t=\tan\frac{x}{2}
$$

则：

$$
\sin x=\frac{2t}{1+t^2}
$$

$$
\cos x=\frac{1-t^2}{1+t^2}
$$

$$
dx=\frac{2}{1+t^2}\,dt
$$

## 10. 常见题型总结

| 题型 | 方法 |
| --- | --- |
| 基本不定积分 | 套基本积分公式 |
| 复合函数积分 | 凑微分 |
| 根式积分 | 三角代换或根式代换 |
| 乘积积分 | 分部积分 |
| 有理函数积分 | 多项式除法 + 部分分式 |
| 三角函数积分 | 恒等变形、降幂、换元 |

## 11. 易错点

- 不定积分结果不要忘记 $+C$。
- 换元后积分变量要统一。
- 第二类换元最后要换回 $x$。
- 分部积分中 $u,dv$ 选择不当会越算越复杂。
- 有理函数积分先判断是否为真分式。

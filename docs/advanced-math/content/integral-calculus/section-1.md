<h1><center>第一节 原函数和不定积分</center></h1>

## 1. 原函数

若函数 $F(x)$ 在区间 $I$ 上可导，且：

$$
F'(x)=f(x),\qquad x\in I
$$

则称 $F(x)$ 是 $f(x)$ 在区间 $I$ 上的一个原函数。

## 2. 不定积分

函数 $f(x)$ 的全体原函数称为 $f(x)$ 的不定积分，记作：

$$
\int f(x)\,dx
$$

若 $F'(x)=f(x)$，则：

$$
\int f(x)\,dx=F(x)+C
$$

不定积分和导数互为逆运算：

$$
\left(\int f(x)\,dx\right)'=f(x)
$$

$$
\int F'(x)\,dx=F(x)+C
$$

## 3. 基本积分公式

### 3.1 幂函数

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

### 3.2 指数函数

$$
\int e^x\,dx=e^x+C
$$

$$
\int a^x\,dx=\frac{a^x}{\ln a}+C
\qquad(a>0,\ a\ne1)
$$

### 3.3 三角函数

$$
\int \sin x\,dx=-\cos x+C
$$

$$
\int \cos x\,dx=\sin x+C
$$

$$
\int \tan x\,dx=-\ln|\cos x|+C
$$

$$
\int \cot x\,dx=\ln|\sin x|+C
$$

$$
\int \sec x\,dx=\ln|\sec x+\tan x|+C
$$

$$
\int \csc x\,dx=\ln|\csc x-\cot x|+C
$$

### 3.4 反三角函数

$$
\int \frac{1}{\sqrt{1-x^2}}\,dx=\arcsin x+C
$$

$$
\int \frac{-1}{\sqrt{1-x^2}}\,dx=\arccos x+C
$$

$$
\int \frac{1}{1+x^2}\,dx=\arctan x+C
$$

$$
\int \frac{-1}{1+x^2}\,dx=\operatorname{arccot}x+C
$$

## 4. 第一类换元法

令：

$$
u=\varphi(x)
$$


则：

$$
\int f(\varphi(x))\varphi'(x)\,dx
=
\int f(u)\,du
$$


## 5. 第二类换元法

令：

$$
x=\varphi(t)
$$

则：

$$
\int f(x)\,dx
=
\int f(\varphi(t))\varphi'(t)\,dt
$$

常用于三角换元。

| 结构 | 常用代换 |
| --- | --- |
| $\sqrt{a^2-x^2}$ | $x=a\sin t$ |
| $\sqrt{a^2+x^2}$ | $x=a\tan t$ |
| $\sqrt{x^2-a^2}$ | $x=a\sec t$ |

## 6. 分部积分法

分部积分公式：

$$
\int u\,dv=uv-\int v\,du
$$

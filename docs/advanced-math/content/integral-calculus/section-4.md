<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第四节 定积分的计算</center></h1>

## 1. 牛顿-莱布尼茨公式

若 $F(x)$ 是 $f(x)$ 在 $[a,b]$ 上的一个原函数，即：

$$
F'(x)=f(x)
$$

则：

$$
\int_a^b f(x)\,dx=F(b)-F(a)
$$

记作：

$$
\int_a^b f(x)\,dx=F(x)\bigg|_a^b
$$

::: tip 重点
定积分计算的基础是先找原函数，再代上下限相减。
:::

## 2. 定积分换元法

若令：

$$
x=\varphi(t)
$$

则：

$$
dx=\varphi'(t)\,dt
$$

上下限也要随之改变。

若：

$$
x=a\Rightarrow t=\alpha
$$

$$
x=b\Rightarrow t=\beta
$$

则：

$$
\int_a^b f(x)\,dx
=
\int_\alpha^\beta
f(\varphi(t))\varphi'(t)\,dt
$$

::: warning 易错
定积分换元后，如果上下限已经换成新变量，就不需要再换回原变量。
:::

## 3. 定积分分部积分法

不定积分中：

$$
\int u\,dv=uv-\int v\,du
$$

定积分中：

$$
\int_a^b u\,dv
=
uv\bigg|_a^b-\int_a^b v\,du
$$

若 $u=u(x),v=v(x)$，则：

$$
\int_a^b u(x)v'(x)\,dx
=
u(x)v(x)\bigg|_a^b
-
\int_a^b v(x)u'(x)\,dx
$$

常用于：

- $\int_a^b x e^x\,dx$
- $\int_a^b x\sin x\,dx$
- $\int_a^b \ln x\,dx$
- $\int_a^b x\arctan x\,dx$

## 4. 对称性计算

### 4.1 奇偶性

若 $f(x)$ 为奇函数：

$$
\int_{-a}^{a}f(x)\,dx=0
$$

若 $f(x)$ 为偶函数：

$$
\int_{-a}^{a}f(x)\,dx
=
2\int_0^a f(x)\,dx
$$

### 4.2 区间对称变换

常用公式：

$$
\int_0^a f(x)\,dx
=
\int_0^a f(a-x)\,dx
$$

更一般地：

$$
\int_a^b f(x)\,dx
=
\int_a^b f(a+b-x)\,dx
$$

该公式常用于两个积分相加化简。

## 5. 周期性计算

若 $f(x)$ 以 $T$ 为周期，则：

$$
\int_a^{a+T}f(x)\,dx
=
\int_0^T f(x)\,dx
$$

若积分区间长度为 $nT$：

$$
\int_a^{a+nT}f(x)\,dx
=
n\int_0^T f(x)\,dx
$$

其中 $n$ 为正整数。

## 6. 华里士积分

### 6.1 定义

华里士积分（Wallis积分）是指如下形式的定积分：

$$
I_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx
$$

或：

$$
I_n=\int_0^{\frac{\pi}{2}}\cos^n x\,dx
$$

两者相等，即：

$$
\int_0^{\frac{\pi}{2}}\sin^n x\,dx
=
\int_0^{\frac{\pi}{2}}\cos^n x\,dx
$$

这是因为令 $x=\dfrac{\pi}{2}-t$ 可将 $\sin$ 与 $\cos$ 互换。

### 6.2 递推公式

对 $I_n$ 进行分部积分，可得递推关系：

$$
I_n=\frac{n-1}{n}I_{n-2},\qquad n\ge 2
$$

推导过程：

$$
I_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx
=\int_0^{\frac{\pi}{2}}\sin^{n-1}x\cdot\sin x\,dx
$$

令 $u=\sin^{n-1}x,\ dv=\sin x\,dx$，则：

$$
du=(n-1)\sin^{n-2}x\cos x\,dx,\qquad v=-\cos x
$$

分部积分得：

$$
I_n=-\sin^{n-1}x\cos x\bigg|_0^{\frac{\pi}{2}}+(n-1)\int_0^{\frac{\pi}{2}}\sin^{n-2}x\cos^2 x\,dx
$$

边界项为零，且 $\cos^2 x=1-\sin^2 x$，故：

$$
I_n=(n-1)\int_0^{\frac{\pi}{2}}\sin^{n-2}x\,dx-(n-1)\int_0^{\frac{\pi}{2}}\sin^n x\,dx
$$

即：

$$
I_n=(n-1)I_{n-2}-(n-1)I_n
$$

移项得：

$$
nI_n=(n-1)I_{n-2}
$$

$$
I_n=\frac{n-1}{n}I_{n-2}
$$

### 6.3 初始值

$$
I_0=\int_0^{\frac{\pi}{2}}1\,dx=\frac{\pi}{2}
$$

$$
I_1=\int_0^{\frac{\pi}{2}}\sin x\,dx=1
$$

### 6.4 常用结果

由递推公式可逐次降阶：

**偶数次幂**（$n=2k$）：

$$
I_{2k}=\frac{2k-1}{2k}\cdot\frac{2k-3}{2k-2}\cdots\frac{1}{2}\cdot\frac{\pi}{2}
$$

**奇数次幂**（$n=2k+1$）：

$$
I_{2k+1}=\frac{2k}{2k+1}\cdot\frac{2k-2}{2k-1}\cdots\frac{2}{3}\cdot 1
$$

例如：

$$
I_2=\int_0^{\frac{\pi}{2}}\sin^2 x\,dx=\frac{1}{2}\cdot\frac{\pi}{2}=\frac{\pi}{4}
$$

$$
I_3=\int_0^{\frac{\pi}{2}}\sin^3 x\,dx=\frac{2}{3}\cdot 1=\frac{2}{3}
$$

$$
I_4=\int_0^{\frac{\pi}{2}}\sin^4 x\,dx=\frac{3}{4}\cdot\frac{1}{2}\cdot\frac{\pi}{2}=\frac{3\pi}{16}
$$

### 6.5 华里士不等式

由递推关系可知，$I_n$ 关于 $n$ 单调递减，且相邻两项满足：

$$
I_{n+1}<I_n
$$

同时有：

$$
\frac{I_{n+1}}{I_n}=\frac{n}{n+1}\quad(n\text{为偶数时}),\qquad
\frac{I_{n+1}}{I_n}=\frac{n}{n+1}\quad(n\text{为奇数时})
$$

::: tip 说明
华里士积分在考研数学二中通常以计算题或递推证明题出现，熟练掌握递推公式和初始值即可应对。
:::

## 7. 分段函数定积分

若被积函数分段定义，应按分界点拆开积分。

例如：

$$
f(x)=
\begin{cases}
f_1(x),&a\le x<c\\
f_2(x),&c\le x\le b
\end{cases}
$$

则：

$$
\int_a^b f(x)\,dx
=
\int_a^c f_1(x)\,dx
+\int_c^b f_2(x)\,dx
$$

## 8. 含绝对值的定积分

若被积函数含有绝对值，应先找零点并分段去绝对值。

例如：

$$
\int_a^b |f(x)|\,dx
$$

应先解：

$$
f(x)=0
$$

再根据符号分区间讨论。


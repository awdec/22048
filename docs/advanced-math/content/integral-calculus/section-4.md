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

## 3. 定积分分部积分法


$$
\int_a^b u\,dv
=
uv\bigg|_a^b-\int_a^b v\,du
$$


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

### 6.2 一般式

华里士积分的一般式为：

$$
I_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx
=
\int_0^{\frac{\pi}{2}}\cos^n x\,dx
=
\begin{cases}
\dfrac{(n-1)!!}{n!!}\cdot\dfrac{\pi}{2},& n\text{ 为偶数}\\
\dfrac{(n-1)!!}{n!!},& n\text{ 为奇数}
\end{cases}
$$

其中 $n!!$ 表示双阶乘：

$$
(2k)!!=2\cdot4\cdot6\cdots(2k),\qquad
(2k-1)!!=1\cdot3\cdot5\cdots(2k-1)
$$

### 6.3 常用结果

代入一般式可得：

$$
I_2=\int_0^{\frac{\pi}{2}}\sin^2 x\,dx=\frac{\pi}{4}
$$

$$
I_3=\int_0^{\frac{\pi}{2}}\sin^3 x\,dx=\frac{2}{3}
$$

$$
I_4=\int_0^{\frac{\pi}{2}}\sin^4 x\,dx=\frac{3\pi}{16}
$$

### 6.4 华里士不等式

由递推关系可知，$I_n$ 关于 $n$ 单调递减，且相邻两项满足：

$$
I_{n+1}<I_n
$$

同时有：

$$
\frac{I_{n+1}}{I_n}=\frac{n}{n+1}
$$


<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第四节 定积分的计算【重要度：★★★★★】</center></h1>

## 1. 牛顿-莱布尼茨公式【重要度：★★★★★】

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

## 2. 定积分换元法【重要度：★★★★★】

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

## 3. 定积分分部积分法【重要度：★★★★★】

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

## 4. 对称性计算【重要度：★★★★☆】

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

## 5. 周期性计算【重要度：★★★★☆】

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

## 6. 常见特殊结论【重要度：★★★★★】

### 6.1 华里士相关积分

常见形式：

$$
I_n=\int_0^{\frac{\pi}{2}}\sin^n x\,dx
$$

或：

$$
I_n=\int_0^{\frac{\pi}{2}}\cos^n x\,dx
$$

递推关系：

$$
I_n=\frac{n-1}{n}I_{n-2}
$$

其中：

$$
I_0=\frac{\pi}{2},\qquad I_1=1
$$

数学二中若出现，通常以计算或递推为主。

### 6.2 三角恒等变形

常用公式：

$$
\sin^2 x=\frac{1-\cos2x}{2}
$$

$$
\cos^2 x=\frac{1+\cos2x}{2}
$$

$$
\sin x\cos x=\frac12\sin2x
$$

## 7. 分段函数定积分【重要度：★★★★☆】

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

## 8. 含绝对值的定积分【重要度：★★★★☆】

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

## 9. 定积分计算路线

1. 先看区间是否对称。
2. 再看函数是否奇偶。
3. 再看是否周期。
4. 若不能简化，再考虑换元、分部积分。
5. 若含绝对值或分段函数，先拆区间。

## 10. 易错点

- 定积分换元要换上下限。
- 定积分结果不加 $C$。
- 对称性公式要求区间对称。
- 含绝对值必须按零点分段。
- 分部积分不要漏掉边界项。

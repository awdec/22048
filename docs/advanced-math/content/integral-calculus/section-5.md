<h1><center>第五节 反常积分的敛散性</center></h1>

## 1. 反常积分的概念

普通定积分要求：

- 积分区间有限。
- 被积函数在区间上有界。

若出现以下情况，就需要用反常积分：

1. 积分区间无限。
2. 被积函数在积分区间内或端点处无界。

反常积分的本质是用极限定义积分。

## 2. 无穷区间反常积分

### 2.1 [a, +∞) 上的积分

定义：

$$
\int_a^{+\infty} f(x)\,dx
=
\lim_{A\to+\infty}
\int_a^A f(x)\,dx
$$

若该极限存在且有限，则反常积分收敛；否则发散。

### 2.2 (-∞, a] 上的积分

定义：

$$
\int_{-\infty}^{a} f(x)\,dx
=
\lim_{A\to-\infty}
\int_A^a f(x)\,dx
$$

### 2.3 (-∞, +∞) 上的积分

定义：

$$
\int_{-\infty}^{+\infty} f(x)\,dx
=
\int_{-\infty}^{c} f(x)\,dx
+\int_c^{+\infty} f(x)\,dx
$$

其中两个积分都收敛时，原积分才收敛。


## 3. 无界函数反常积分

若 $f(x)$ 在 $x=a$ 处无界，则：

$$
\int_a^b f(x)\,dx
=
\lim_{\varepsilon\to0^+}
\int_{a+\varepsilon}^{b}f(x)\,dx
$$

若 $f(x)$ 在 $x=b$ 处无界，则：

$$
\int_a^b f(x)\,dx
=
\lim_{\varepsilon\to0^+}
\int_a^{b-\varepsilon}f(x)\,dx
$$

若 $f(x)$ 在内部点 $c\in(a,b)$ 处无界，则：

$$
\int_a^b f(x)\,dx
=
\int_a^c f(x)\,dx
+\int_c^b f(x)\,dx
$$

左右两部分都收敛时，原积分才收敛。

## 4. p 积分判别

### 4.1 无穷区间

$$
\int_a^{+\infty}\frac{1}{x^p}\,dx,a>0
$$

当：

$$
p>1
$$

时收敛。

反之发散。

### 4.2 瑕点在 0

$$
\int_0^a\frac{1}{x^p}\,dx,a>0
$$

当：

$$
p<1
$$

时收敛。

反之发散。

### 4.3 瑕点在端点的 $p$ 积分

左端 $x=a$ 为瑕点：

$$
\int_a^b\frac{dx}{(x-a)^{q}}
$$

当：

$$
q<1
$$

时收敛。

反之发散。

右端 $x=b$ 为瑕点：

$$
\int_a^b\frac{dx}{(b-x)^{q}}
$$

当：

$$
q<1
$$

时收敛。

反之发散。


### 4.4 含对数因子的积分

$$
\int_a^{+\infty}\frac{dx}{x^{\alpha}\ln^{\beta}x}
$$

当：

$$
\alpha>1
$$

时收敛（与 $\beta$ 无关）。

当：

$$
\alpha<1
$$

时发散（与 $\beta$ 无关）。

当：

$$
\alpha=1
$$

时，化为：

$$
\int_2^{+\infty}\frac{dx}{x\ln^{\beta}x}
$$


- 当 $\beta>1$ 时收敛。
- 当 $\beta\le1$ 时发散。



## 5. 比较判别法

设：

$$
0\le f(x)\le g(x)
$$

若：

$$
\int g(x)\,dx
$$

收敛，则：

$$
\int f(x)\,dx
$$

也收敛。

若：

$$
\int f(x)\,dx
$$

发散，则：

$$
\int g(x)\,dx
$$

也发散。

## 6. 极限比较判别法

若 $f(x),g(x)$ 非负，且：

$$
\lim \frac{f(x)}{g(x)}=c
$$

其中：

$$
0<c<+\infty
$$

则：

$$
\int f(x)\,dx
\quad\text{与}\quad
\int g(x)\,dx
$$

同敛散。

常用来和 $p$ 积分比较。

## 7. 常见等价比较

当 $x\to+\infty$ 时：

$$
\frac{1}{x^p}
$$

是最常见比较对象。

当 $x\to0^+$ 时：

$$
\frac{1}{x^p}
$$

也是最常见比较对象。

例如：

$$
\sin x\sim x
$$

所以：

$$
\frac{1}{\sqrt{\sin x}}
\sim
\frac{1}{\sqrt{x}}
$$

而：

$$
\int_0^1 \frac{1}{\sqrt{x}}\,dx
$$

收敛，因此原积分在 $0$ 附近收敛。
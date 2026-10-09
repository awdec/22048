<h1><center>第五节 反常积分的敛散性</center></h1>

## 1. p 积分判别

### 1.1 无穷区间

$$
\int_a^{+\infty}\frac{1}{x^p}\,dx,a>0
$$

当：

$$
p>1
$$

时收敛。

反之发散。

### 1.2 瑕点在 0

$$
\int_0^a\frac{1}{x^p}\,dx,a>0
$$

当：

$$
p<1
$$

时收敛。

反之发散。

### 1.3 瑕点在端点的 $p$ 积分

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


### 1.4 含对数因子的积分

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



## 2. 比较判别法

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

## 3. 极限比较判别法

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
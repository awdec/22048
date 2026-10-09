<h1><center>第二节 高阶微分方程</center></h1>

## 1. 可降阶高阶微分方程

### 2.1 形如 y^(n)=f(x)

连续积分 $n$ 次。


### 2.2 不显含 y 的二阶方程

若方程形如：

$$
y''=F(x,y')
$$

不显含 $y$，令：

$$
p=y'
$$

原方程化为关于 $p$ 和 $x$ 的一阶方程：

$$
p'=F(x,p)
$$

先求 $p(x)$，后积分求 $y$。

### 2.3 不显含 x 的二阶方程

若方程形如：

$$
y''=F(y,y')
$$

不显含 $x$，令：

$$
p=y'
$$

把 $p$ 看成 $y$ 的函数，则：

$$
y''=\frac{dp}{dx}
=
\frac{dp}{dy}\frac{dy}{dx}
=
p\frac{dp}{dy}
$$

原方程化为：

$$
p\frac{dp}{dy}=F(y,p)
$$

这是关于 $p$ 和 $y$ 的一阶方程。

## 3. 二阶常系数齐次线性微分方程

$$
y''+py'+qy=0
$$

特征方程：

$$
r^2+pr+q=0
$$

### 3.1 两个不相等实根

$$
r_1\ne r_2
$$

通解：

$$
y=C_1e^{r_1x}+C_2e^{r_2x}
$$

### 3.2 两个相等实根
 
$$
r_1=r_2=r
$$

通解：

$$
y=(C_1+C_2x)e^{rx}
$$

### 3.3 一对共轭复根

$$
r=\alpha\pm i\beta
$$

其中 $\beta\ne0$，则通解为：

$$
y=e^{\alpha x}
\left(
C_1\cos\beta x+C_2\sin\beta x
\right)
$$

## 4. 二阶常系数非齐次线性微分方程

$$
y''+py'+qy=f(x)
$$

$$
解=齐次方程通解+特解
$$

### 4.1 待定系数法求特解

### 4.2 情形一：$f(x)=P_m(x)e^{\lambda x}$

其中 $P_m(x)$ 是 $m$ 次多项式，$\lambda$ 为常数（可为 $0$）。特解形式设为：

$$
y^*=x^sQ_m(x)e^{\lambda x}
$$

其中 $Q_m(x)$ 是与 $P_m(x)$ 同次的待定多项式，$s$ 由 $\lambda$ 是否为特征根决定：

| $\lambda$ 的情况 | $s$ |
| --- | --- |
| 不是特征根 | $0$ |
| 是单特征根 | $1$ |
| 是二重特征根 | $2$ |

### 4.3 情形二：$f(x)=e^{\alpha x}\left[P_l(x)\cos\beta x+P_n(x)\sin\beta x\right]$

其中 $P_l,P_n$ 分别是 $l,n$ 次多项式，$\alpha,\beta$ 为常数且 $\beta\ne0$。特解形式设为：

$$
y^*=x^se^{\alpha x}\left[Q_m(x)\cos\beta x+R_m(x)\sin\beta x\right]
$$

其中 $m=\max(l,n)$，$Q_m,R_m$ 都是 $m$ 次待定多项式，$s$ 由 $\alpha\pm i\beta$ 是否为特征根决定：

| $\alpha\pm i\beta$ 的情况 | $s$ |
| --- | --- |
| 不是特征根 | $0$ |
| 是特征根 | $1$ |

## 5. 某些高于二阶的常系数齐次线性微分方程

常系数齐次线性微分方程也可能高于二阶。

一般形式为：

$$
a_ny^{(n)}+a_{n-1}y^{(n-1)}+\cdots+a_1y'+a_0y=0
$$

其中 $a_0,a_1,\cdots,a_n$ 为常数，且 $a_n\ne0$。

特征方程：

$$
a_nr^n+a_{n-1}r^{n-1}+\cdots+a_1r+a_0=0
$$

### 5.1 不同实根

若 $r_1,r_2,\cdots,r_n$ 是互不相同的实根，则对应通解为：

$$
y=C_1e^{r_1x}+C_2e^{r_2x}+\cdots+C_ne^{r_nx}
$$

### 5.2 重根

若 $r$ 是 $k$ 重实根，则对应部分解为：

$$
(C_1+C_2x+\cdots+C_kx^{k-1})e^{rx}
$$

### 5.3 复根

若 $\alpha\pm i\beta$ 是一对共轭复根，则对应实形式为：

$$
e^{\alpha x}
\left(
C_1\cos\beta x+C_2\sin\beta x
\right)
$$

若是重复复根，也要乘以 $x,x^2,\cdots$ 形成线性无关解。
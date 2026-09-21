<h1><center>第二节 二重积分的计算</center></h1>

## 1. 直角坐标下的计算

在直角坐标系中：

$$
d\sigma=dxdy
$$

因此：

$$
\iint_D f(x,y)\,d\sigma
=
\iint_D f(x,y)\,dxdy
$$

若区域 $D$ 可表示为：

$$
D:
\quad
a\le x\le b,\quad
\varphi_1(x)\le y\le \varphi_2(x)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_a^b
\left[
\int_{\varphi_1(x)}^{\varphi_2(x)}
f(x,y)\,dy
\right]dx
$$

也可写为：

$$
\int_a^b dx
\int_{\varphi_1(x)}^{\varphi_2(x)}
f(x,y)\,dy
$$

## 2. 交换积分次序

若给出的累次积分区域复杂，常需要交换积分次序。

例如：

$$
\int_a^b dx
\int_{\varphi_1(x)}^{\varphi_2(x)}
f(x,y)\,dy
$$

表示区域：

$$
D:
\quad
a\le x\le b,\quad
\varphi_1(x)\le y\le \varphi_2(x)
$$

交换次序的步骤：

1. 根据原积分限画出区域 $D$。
2. 改用另一方向扫描区域。
3. 写出新的外层变量范围。
4. 写出新的内层变量范围。
5. 若不能一次写出，需要拆分区域。

## 3. 利用对称性计算

若区域 $D$ 关于某条轴或原点对称，应先检查被积函数的奇偶性。

### 3.1 关于 y 轴对称

若 $D$ 关于 $y$ 轴对称：

$$
f(-x,y)=-f(x,y)
\Rightarrow
\iint_D f(x,y)\,d\sigma=0
$$

$$
f(-x,y)=f(x,y)
\Rightarrow
\iint_D f(x,y)\,d\sigma
=
2\iint_{D_1}f(x,y)\,d\sigma
$$

其中 $D_1$ 可取 $D$ 的右半部分。

### 3.2 关于 x 轴对称

若 $D$ 关于 $x$ 轴对称：

$$
f(x,-y)=-f(x,y)
\Rightarrow
\iint_D f(x,y)\,d\sigma=0
$$

$$
f(x,-y)=f(x,y)
\Rightarrow
\iint_D f(x,y)\,d\sigma
=
2\iint_{D_1}f(x,y)\,d\sigma
$$

其中 $D_1$ 可取 $D$ 的上半部分。

## 4. 极坐标下的计算

极坐标变换：

$$
x=r\cos\theta,\quad y=r\sin\theta
$$

面积微元：

$$
d\sigma=r\,dr\,d\theta
$$

因此：

$$
\iint_D f(x,y)\,d\sigma
=
\iint_{D'}
f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta
$$

若区域可表示为：

$$
D':
\quad
\alpha\le\theta\le\beta,\quad
r_1(\theta)\le r\le r_2(\theta)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_\alpha^\beta
\left[
\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)\,r\,dr
\right]d\theta
$$

## 5. 极坐标计算常见类型

### 5.1 被积函数含 x^2+y^2

若：

$$
f(x,y)=g(x^2+y^2)
$$

则极坐标下：

$$
f(x,y)=g(r^2)
$$

再乘面积因子 $r$，常能显著简化计算。

### 5.2 区域边界是圆

例如：

$$
x^2+y^2\le R^2
$$

用极坐标比直角坐标更自然。

### 5.3 区域边界是圆和射线

例如：

$$
x^2+y^2\le R^2,\quad 0\le y\le x
$$

射线条件可转化为角度范围，通常适合极坐标。
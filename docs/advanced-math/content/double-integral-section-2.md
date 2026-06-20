<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第二节 二重积分的计算</center></h1>

## 1. 计算二重积分的基本思路

二重积分计算的核心是把：

$$
\iint_D f(x,y)\,d\sigma
$$

化为累次积分。

一般步骤：

1. 画出区域 $D$。
2. 判断区域适合按 $x$ 积分还是按 $y$ 积分。
3. 写出积分上下限。
4. 先对内层变量积分，再对外层变量积分。

::: tip 重点
二重积分计算首先不是算，而是画区域、写区域。区域写错，后面计算再漂亮也没用。
:::

## 2. 直角坐标下的计算

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

### 2.1 $X$ 型区域

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

此时先对 $y$ 积分，后对 $x$ 积分。

### 2.2 $Y$ 型区域

若区域 $D$ 可表示为：

$$
D:
\quad
c\le y\le d,\quad
\psi_1(y)\le x\le \psi_2(y)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_c^d
\left[
\int_{\psi_1(y)}^{\psi_2(y)}
f(x,y)\,dx
\right]dy
$$

也可写为：

$$
\int_c^d dy
\int_{\psi_1(y)}^{\psi_2(y)}
f(x,y)\,dx
$$

此时先对 $x$ 积分，后对 $y$ 积分。

## 3. 如何选择积分次序

选择积分次序时优先考虑两件事：

1. 区域是否容易描述。
2. 内层积分是否容易计算。

| 情况 | 建议 |
| --- | --- |
| 竖切区域简单 | 用 $X$ 型区域 |
| 横切区域简单 | 用 $Y$ 型区域 |
| 某一积分次序需要分段 | 尝试换另一种次序 |
| 被积函数对某变量难积分 | 尝试把该变量放到外层 |
| 区域含圆、扇形、环形 | 优先考虑极坐标 |

::: warning 易错
内层积分的上下限可以含外层变量；外层积分上下限必须是常数。
:::

## 4. 交换积分次序

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

::: tip 重点
交换积分次序的本质是同一个区域 $D$ 的两种描述方式，不是机械调换 $dxdy$ 的位置。
:::

## 5. 利用对称性计算

若区域 $D$ 关于某条轴或原点对称，应先检查被积函数的奇偶性。

### 5.1 关于 $y$ 轴对称

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

### 5.2 关于 $x$ 轴对称

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

## 6. 极坐标下的计算

当区域 $D$ 与圆、扇形、环形有关，或被积函数含有：

$$
x^2+y^2
$$

时，常用极坐标。

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

::: warning 易错
极坐标下的面积微元是 $r\,dr\,d\theta$，不能漏掉因子 $r$。
:::

### 6.1 极坐标区域

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

### 6.2 常见极坐标区域

| 区域 | 极坐标表示 |
| --- | --- |
| 圆盘 $x^2+y^2\le R^2$ | $0\le r\le R,\ 0\le\theta\le2\pi$ |
| 上半圆盘 $x^2+y^2\le R^2,\ y\ge0$ | $0\le r\le R,\ 0\le\theta\le\pi$ |
| 右半圆盘 $x^2+y^2\le R^2,\ x\ge0$ | $0\le r\le R,\ -\frac{\pi}{2}\le\theta\le\frac{\pi}{2}$ |
| 第一象限圆盘 | $0\le r\le R,\ 0\le\theta\le\frac{\pi}{2}$ |
| 环形区域 $a^2\le x^2+y^2\le b^2$ | $a\le r\le b,\ 0\le\theta\le2\pi$ |
| 扇形区域 | $0\le r\le R,\ \alpha\le\theta\le\beta$ |

## 7. 极坐标计算常见类型

### 7.1 被积函数含 $x^2+y^2$

若：

$$
f(x,y)=g(x^2+y^2)
$$

则极坐标下：

$$
f(x,y)=g(r^2)
$$

再乘面积因子 $r$，常能显著简化计算。

### 7.2 区域边界是圆

例如：

$$
x^2+y^2\le R^2
$$

用极坐标比直角坐标更自然。

### 7.3 区域边界是圆和射线

例如：

$$
x^2+y^2\le R^2,\quad 0\le y\le x
$$

射线条件可转化为角度范围，通常适合极坐标。

## 8. 计算二重积分的常见步骤

### 8.1 直角坐标法

1. 画出区域 $D$。
2. 判断是 $X$ 型还是 $Y$ 型。
3. 写出积分限。
4. 先算内层积分。
5. 再算外层积分。

### 8.2 极坐标法

1. 判断是否适合极坐标。
2. 写出 $x=r\cos\theta,\ y=r\sin\theta$。
3. 把区域 $D$ 改写成 $r,\theta$ 的范围。
4. 把被积函数改写成 $r,\theta$。
5. 乘上面积因子 $r$。
6. 计算累次积分。

## 9. 本节小结

| 内容 | 关键点 |
| --- | --- |
| 直角坐标 | 化为 $X$ 型或 $Y$ 型区域 |
| 交换次序 | 先画区域，再重写积分限 |
| 对称性 | 先看区域，再看函数奇偶性 |
| 极坐标 | 圆、扇形、环形优先考虑 |
| 面积微元 | 直角坐标 $dxdy$，极坐标 $rdrd\theta$ |
| 分段区域 | 必要时拆成多个简单区域 |

::: tip 复习建议
二重积分计算题建议先练“画区域”和“写积分限”。计算能力固然重要，但考场上最容易丢分的是积分区域描述错误。
:::

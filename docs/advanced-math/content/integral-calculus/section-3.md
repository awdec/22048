<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第三节 变限积分及其导数</center></h1>

## 1. 变限积分函数

若函数 $f(x)$ 在区间 $[a,b]$ 上连续，定义：

$$
F(x)=\int_a^x f(t)\,dt
$$

则 $F(x)$ 称为变上限积分函数。

其中：

- $t$ 是积分变量。
- $x$ 是积分上限，也是函数自变量。

::: warning 易错
积分变量 $t$ 是哑变量，不能和上限变量 $x$ 混淆。
:::

## 2. 变上限积分的导数

若 $f(x)$ 连续，则：

$$
\left(\int_a^x f(t)\,dt\right)'=f(x)
$$

这说明变上限积分是被积函数的一个原函数。

例如：

$$
F(x)=\int_0^x \sin t\,dt
$$

则：

$$
F'(x)=\sin x
$$

## 3. 变下限积分的导数

若：

$$
F(x)=\int_x^a f(t)\,dt
$$

则：

$$
F(x)=-\int_a^x f(t)\,dt
$$

因此：

$$
F'(x)=-f(x)
$$

即：

$$
\left(\int_x^a f(t)\,dt\right)'=-f(x)
$$

## 4. 上限为复合函数

若：

$$
F(x)=\int_a^{\varphi(x)}f(t)\,dt
$$

其中 $f$ 连续，$\varphi(x)$ 可导，则：

$$
F'(x)=f(\varphi(x))\varphi'(x)
$$

这是变限积分求导与复合函数求导的结合。

例如：

$$
F(x)=\int_0^{x^2}\cos t\,dt
$$

则：

$$
F'(x)=\cos(x^2)\cdot2x
$$

## 5. 下限为复合函数

若：

$$
F(x)=\int_{\varphi(x)}^a f(t)\,dt
$$

则：

$$
F'(x)=-f(\varphi(x))\varphi'(x)
$$

## 6. 上下限都含函数

若：

$$
F(x)=\int_{\alpha(x)}^{\beta(x)}f(t)\,dt
$$

其中 $f$ 连续，$\alpha(x),\beta(x)$ 可导，则：

$$
F'(x)=f(\beta(x))\beta'(x)-f(\alpha(x))\alpha'(x)
$$

::: tip 重点
口诀：上限代入乘上限导数，减去下限代入乘下限导数。
:::

## 7. 被积函数含参变量

若：

$$
F(x)=\int_a^b f(x,t)\,dt
$$

其中积分上下限 $a,b$ 为常数，但被积函数中含有与积分变量 $t$ 不同的变量 $x$，则 $x$ 在积分过程中视为常数。

此时不能直接使用变限积分求导公式，因为被积函数本身依赖于 $x$。

若 $f(x,t)$ 及 $\dfrac{\partial f}{\partial x}$ 在矩形区域上连续，则：

$$
F'(x)=\int_a^b \frac{\partial f}{\partial x}(x,t)\,dt
$$

即：对被积函数先关于 $x$ 求偏导，再对 $t$ 积分。

::: tip 说明
考研数学二中，此类题型出现较少。若题目涉及，往往可通过先算出积分再求导来处理，或利用上述公式直接求导。
:::

## 8. 被积函数含参变量且上下限也含参

若：

$$
F(x)=\int_{\alpha(x)}^{\beta(x)} f(x,t)\,dt
$$

其中被积函数 $f(x,t)$ 含有变量 $x$，且上下限 $\alpha(x),\beta(x)$ 也依赖于 $x$。

$$
F'(x)=f(x,\beta(x))\beta'(x)-f(x,\alpha(x))\alpha'(x)+\int_{\alpha(x)}^{\beta(x)}\frac{\partial f}{\partial x}(x,t)\,dt
$$

口诀：上限代入乘上限导数，减去下限代入乘下限导数，再加上对参变量求偏导后的积分。

::: tip 说明
此公式是第 6 节与第 7 节的综合。考研数学二中较少直接考查，理解原理即可。
:::

## 9. 变限积分求极限

若要求：

$$
\lim_{x\to x_0}
\frac{\int_{x_0}^{x}f(t)\,dt}{x-x_0}
$$

若 $f$ 在 $x_0$ 处连续，则由积分中值思想或变限积分求导：

$$
\lim_{x\to x_0}
\frac{\int_{x_0}^{x}f(t)\,dt}{x-x_0}
=f(x_0)
$$

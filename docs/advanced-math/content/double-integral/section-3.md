<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第三节 二重积分的应用</center></h1>

## 1. 应用题的基本思想

二重积分应用的核心是微元法。

先把整体量分成很多小块，在每个小块上近似计算局部量，再累加得到整体量。

基本形式为：

$$
\text{总量}
=
\iint_D \text{局部密度或局部高度}\,d\sigma
$$

::: tip 重点
二重积分应用题的第一步不是积分，而是判断被积函数表示什么：面积、体积、质量、力矩还是转动惯量。
:::

## 2. 平面区域面积

区域 $D$ 的面积为：

$$
S_D=\iint_D 1\,d\sigma
$$

若用直角坐标：

$$
S_D=\int_a^b
\left[
\int_{\varphi_1(x)}^{\varphi_2(x)}
1\,dy
\right]dx
$$

若用极坐标：

$$
S_D=\int_\alpha^\beta
\left[
\int_{r_1(\theta)}^{r_2(\theta)}
r\,dr
\right]d\theta
$$

### 2.1 极坐标面积公式

若区域由：

$$
0\le r\le r(\theta),\quad \alpha\le\theta\le\beta
$$

围成，则：

$$
S_D=
\frac{1}{2}
\int_\alpha^\beta r^2(\theta)\,d\theta
$$

这个公式可由二重积分推出：

$$
S_D
=
\int_\alpha^\beta
\int_0^{r(\theta)}
r\,dr\,d\theta
$$

## 3. 曲顶柱体体积

若曲顶柱体底面为 $D$，顶面为：

$$
z=f(x,y)
$$

且：

$$
f(x,y)\ge0
$$

则体积为：

$$
V=\iint_D f(x,y)\,d\sigma
$$

若顶面和底面分别为：

$$
z=f(x,y),\quad z=g(x,y)
$$

且：

$$
f(x,y)\ge g(x,y)
$$

则两曲面之间的体积为：

$$
V=\iint_D [f(x,y)-g(x,y)]\,d\sigma
$$

::: warning 易错
求体积时，被积函数应该是“上表面高度减下表面高度”，不能只写其中一个曲面。
:::

## 4. 平面薄片质量

设平面薄片占据区域 $D$，面密度为：

$$
\rho(x,y)
$$

则薄片质量为：

$$
m=\iint_D \rho(x,y)\,d\sigma
$$

若密度为常数 $\rho_0$，则：

$$
m=\rho_0 S_D
$$

其中：

$$
S_D=\iint_D1\,d\sigma
$$

## 5. 质心

设平面薄片占据区域 $D$，面密度为 $\rho(x,y)$，质量为：

$$
m=\iint_D \rho(x,y)\,d\sigma
$$

则质心坐标为：

$$
\bar{x}
=
\frac{1}{m}
\iint_D x\rho(x,y)\,d\sigma
$$

$$
\bar{y}
=
\frac{1}{m}
\iint_D y\rho(x,y)\,d\sigma
$$

若薄片是均匀薄片，即 $\rho(x,y)=\rho_0$，则：

$$
\bar{x}
=
\frac{1}{S_D}
\iint_D x\,d\sigma
$$

$$
\bar{y}
=
\frac{1}{S_D}
\iint_D y\,d\sigma
$$

### 5.1 利用对称性求质心

若区域和密度关于 $y$ 轴对称，则：

$$
\bar{x}=0
$$

若区域和密度关于 $x$ 轴对称，则：

$$
\bar{y}=0
$$

::: tip 重点
质心题优先看对称性。对称性正确使用，常常可以少算一个积分。
:::

## 6. 转动惯量

设平面薄片占据区域 $D$，面密度为 $\rho(x,y)$。

关于 $x$ 轴的转动惯量：

$$
I_x=
\iint_D y^2\rho(x,y)\,d\sigma
$$

关于 $y$ 轴的转动惯量：

$$
I_y=
\iint_D x^2\rho(x,y)\,d\sigma
$$

关于原点的极转动惯量：

$$
I_O=
\iint_D (x^2+y^2)\rho(x,y)\,d\sigma
$$

并且：

$$
I_O=I_x+I_y
$$

## 7. 平面薄片对坐标轴的静矩

设薄片面密度为 $\rho(x,y)$。

对 $y$ 轴的静矩：

$$
M_y=
\iint_D x\rho(x,y)\,d\sigma
$$

对 $x$ 轴的静矩：

$$
M_x=
\iint_D y\rho(x,y)\,d\sigma
$$

质心也可写成：

$$
\bar{x}=\frac{M_y}{m},\quad
\bar{y}=\frac{M_x}{m}
$$

## 8. 应用题常见步骤

1. 明确区域 $D$。
2. 判断要求的总量是什么。
3. 写出局部微元。
4. 根据区域选择直角坐标或极坐标。
5. 建立二重积分。
6. 利用对称性或坐标变换简化计算。

### 8.1 常见微元表

| 问题 | 微元 | 二重积分 |
| --- | --- | --- |
| 面积 | $dS=d\sigma$ | $S=\iint_D1\,d\sigma$ |
| 曲顶柱体体积 | $dV=f(x,y)d\sigma$ | $V=\iint_D f(x,y)\,d\sigma$ |
| 质量 | $dm=\rho(x,y)d\sigma$ | $m=\iint_D\rho(x,y)\,d\sigma$ |
| 对 $y$ 轴静矩 | $dM_y=x\,dm$ | $M_y=\iint_D x\rho(x,y)\,d\sigma$ |
| 对 $x$ 轴静矩 | $dM_x=y\,dm$ | $M_x=\iint_D y\rho(x,y)\,d\sigma$ |
| 对 $x$ 轴转动惯量 | $dI_x=y^2dm$ | $I_x=\iint_D y^2\rho(x,y)\,d\sigma$ |
| 对 $y$ 轴转动惯量 | $dI_y=x^2dm$ | $I_y=\iint_D x^2\rho(x,y)\,d\sigma$ |

## 9. 本节小结

| 应用 | 关键公式 |
| --- | --- |
| 面积 | $S_D=\iint_D1\,d\sigma$ |
| 曲顶柱体体积 | $V=\iint_D f(x,y)\,d\sigma$ |
| 两曲面间体积 | $V=\iint_D[f(x,y)-g(x,y)]\,d\sigma$ |
| 质量 | $m=\iint_D\rho(x,y)\,d\sigma$ |
| 质心 | $\bar{x}=\frac{1}{m}\iint_Dx\rho\,d\sigma$，$\bar{y}=\frac{1}{m}\iint_Dy\rho\,d\sigma$ |
| 转动惯量 | $I_x=\iint_Dy^2\rho\,d\sigma$，$I_y=\iint_Dx^2\rho\,d\sigma$ |

::: tip 复习建议
应用题不要先背大段文字，先抓“微元”。只要能写出 $dS,dV,dm,dM,dI$，题目就已经成功了一半。
:::

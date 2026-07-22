<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 解的判定与高斯消元</center></h1>

## 1. 矩阵形式

线性方程组统一写为：

$$
A\boldsymbol x=\boldsymbol b,
$$

其中 $A$ 为系数矩阵，$\widetilde A=(A\mid\boldsymbol b)$ 为增广矩阵。

## 2. 有解判定

设未知数个数为 $n$。

$$
A\boldsymbol x=\boldsymbol b\text{ 有解}
\Longleftrightarrow r(A)=r(\widetilde A).
$$

进一步：

- $r(A)=r(\widetilde A)=n$：有唯一解。
- $r(A)=r(\widetilde A)<n$：有无穷多解。
- $r(A)<r(\widetilde A)$：无解。

## 3. 高斯消元法

对增广矩阵做初等行变换：

$$
(A\mid\boldsymbol b)\longrightarrow(B\mid\boldsymbol c).
$$

基本步骤：

1. 化为行阶梯形。
2. 判断是否出现 $(0,\ldots,0\mid d)$ 且 $d\ne0$ 的矛盾行。
3. 确定主元变量与自由变量。
4. 回代或继续化为行最简形。
5. 用自由参数写出通解。

## 4. 唯一解的特殊情形

当 $A$ 是 $n$ 阶方阵时：

$$
A\boldsymbol x=\boldsymbol b\text{ 对任意 }\boldsymbol b\text{ 有唯一解}
\Longleftrightarrow |A|\ne0.
$$

此时：

$$
\boldsymbol x=A^{-1}\boldsymbol b.
$$

::: warning 易错点
方程个数不等于未知数个数时，不能用系数行列式判断；秩判定适用于所有线性方程组。
:::

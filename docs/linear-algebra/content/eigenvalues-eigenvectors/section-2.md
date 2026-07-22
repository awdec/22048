<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 特征值的性质与相似矩阵</center></h1>

## 1. 特征值的和与积

设 $A$ 的特征值为 $\lambda_1,\ldots,\lambda_n$，按代数重数计，则：

$$
\sum_{i=1}^n\lambda_i=\operatorname{tr}(A),
$$

$$
\prod_{i=1}^n\lambda_i=|A|.
$$

## 2. 矩阵多项式的特征值

若 $A\boldsymbol\xi=\lambda\boldsymbol\xi$，则：

$$
A^k\boldsymbol\xi=\lambda^k\boldsymbol\xi.
$$

对多项式 $f$：

$$
f(A)\boldsymbol\xi=f(\lambda)\boldsymbol\xi.
$$

所以 $f(\lambda)$ 是 $f(A)$ 的相应特征值。

若 $A$ 可逆，则：

$$
A^{-1}\boldsymbol\xi=\lambda^{-1}\boldsymbol\xi,
$$

即 $A^{-1}$ 的特征值是 $1/\lambda_i$。

## 3. 相似矩阵

若存在可逆矩阵 $P$，使：

$$
B=P^{-1}AP,
$$

则称 $A$ 与 $B$ 相似。

相似矩阵具有相同的：

- 特征多项式、特征值。
- 行列式、迹、秩。
- 可逆性。

但“具有相同特征值”一般不能推出两个矩阵相似。

## 4. 与转置、逆、伴随的关系

$A$ 与 $A^T$ 的特征多项式相同，因此特征值相同。

若 $A$ 可逆，则：

- $A^{-1}$ 的特征值为 $1/\lambda_i$。
- $A^*$ 的特征值为 $|A|/\lambda_i$。

若 $A$ 不可逆，伴随矩阵特征值要结合秩分类，不宜直接使用除法公式。

::: warning 易错点
“$f(A)$ 的特征值是 $f(\lambda_i)$”可直接使用；反过来由 $f(A)$ 的特征值恢复 $A$ 的特征值时，必须考虑多项式映射可能多对一。
:::

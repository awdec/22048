<h1><center>第三节 正交变换与惯性定理</center></h1>

## 1. 正交变换化标准形

对实对称矩阵 $A$，存在正交矩阵 $Q$：

$$
Q^TAQ=\Lambda=\operatorname{diag}(\lambda_1,\ldots,\lambda_n).
$$

令：

$$
\boldsymbol x=Q\boldsymbol y,
$$

则：

$$
f=\lambda_1y_1^2+\cdots+\lambda_ny_n^2.
$$

正交变换得到的标准形系数就是 $A$ 的特征值。

## 2. 惯性定理

实二次型经过任意可逆线性变换化为标准形后，正系数个数 $p$ 与负系数个数 $q$ 都是唯一的。

$$
\boxed{
    A\ 与\ B\ 合同\ \iff\ A\ 和\ B\ 具有相同的正、负惯性指数
}
$$

## 3. 利用特征值求惯性指数

对实对称矩阵：

- 正特征值个数等于正惯性指数。
- 负特征值个数等于负惯性指数。
- 零特征值个数等于 $n-r(A)$。

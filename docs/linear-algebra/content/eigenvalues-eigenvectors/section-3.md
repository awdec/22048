<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 相似对角化与矩阵的幂</center></h1>

## 1. 可相似对角化

若存在可逆矩阵 $P$，使：

$$
P^{-1}AP=\Lambda=operatorname{diag}(\lambda_1,\ldots,\lambda_n),
$$

则称 $A$ 可相似对角化。

其充要条件是：$A$ 有 $n$ 个线性无关的特征向量。

## 2. 常用充分条件

- $A$ 有 $n$ 个互不相同的特征值，则 $A$ 可对角化。
- 实对称矩阵一定可以正交对角化。

反之，矩阵可对角化时特征值可以有重复，不能要求必须互不相同。

## 3. 重特征值的判定

设特征值 $\lambda_i$ 的代数重数为 $m_i$，则对应特征空间维数：

$$
n-r(A-\lambda_iI)
$$

称为几何重数，且不超过 $m_i$。

$A$ 可对角化，当且仅当每个特征值的几何重数等于其代数重数，即：

$$
n-r(A-\lambda_iI)=m_i.
$$

## 4. 构造 $P$ 与 $\Lambda$

把 $n$ 个线性无关特征向量按列排列：

$$
P=(\boldsymbol\xi_1,\ldots,\boldsymbol\xi_n),
$$

则：

$$
AP=P\Lambda,
$$

并且 $\Lambda$ 的对角元顺序必须与 $P$ 的列顺序一一对应。

## 5. 利用对角化求矩阵幂

若 $A=P\Lambda P^{-1}$，则：

$$
A^k=P\Lambda^kP^{-1},
$$

而：

$$
\Lambda^k=\operatorname{diag}(\lambda_1^k,\ldots,\lambda_n^k).
$$

同理：

$$
f(A)=Pf(\Lambda)P^{-1}.
$$

::: warning 易错点
同一特征值对应的多个特征向量必须线性无关；随意取多个成比例的特征向量不能构成可逆矩阵 $P$。
:::

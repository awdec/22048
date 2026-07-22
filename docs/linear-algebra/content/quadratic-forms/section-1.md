<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 二次型及其矩阵表示</center></h1>

## 1. 二次型

$n$ 个变量的二次齐次多项式称为二次型：

$$
f(x_1,\ldots,x_n)=\sum_{i=1}^{n}a_{ii}x_i^2+
2\sum_{1\le i<j\le n}a_{ij}x_ix_j.
$$

令 $\boldsymbol x=(x_1,\ldots,x_n)^T$，则：

$$
f=\boldsymbol x^TA\boldsymbol x,
$$

其中 $A=(a_{ij})$ 为实对称矩阵，称为二次型的矩阵。

## 2. 由二次型写矩阵

纯平方项 $x_i^2$ 的系数直接放在 $a_{ii}$；交叉项 $x_ix_j$ 的系数要平均分配到对称位置：

$$
2a_{ij}=x_ix_j\text{ 的系数}.
$$

例如：

$$
f=2x_1^2+6x_1x_2+5x_2^2
$$

对应：

$$
A=\begin{pmatrix}2&3\\3&5\end{pmatrix}.
$$

## 3. 线性变换下的矩阵

作可逆线性变换：

$$
\boldsymbol x=C\boldsymbol y,
$$

则：

$$
f=\boldsymbol y^TC^TAC\boldsymbol y.
$$

因此新二次型的矩阵为：

$$
B=C^TAC.
$$

## 4. 合同矩阵

若存在可逆矩阵 $C$，使：

$$
B=C^TAC,
$$

则称实对称矩阵 $A$ 与 $B$ 合同。

合同关系保持矩阵的秩和正、负惯性指数，但一般不保持特征值。

## 5. 二次型的秩

二次型的秩定义为其矩阵的秩：

$$
r(f)=r(A).
$$

在可逆线性变换下：

$$
r(C^TAC)=r(A).
$$

::: warning 易错点
交叉项 $bx_ix_j$ 对应矩阵中的两个元素都为 $b/2$，不能把 $b$ 同时填入两个位置。
:::

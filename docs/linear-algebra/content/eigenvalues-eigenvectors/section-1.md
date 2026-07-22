<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 特征值与特征向量的计算</center></h1>

## 1. 定义

设 $A$ 为 $n$ 阶方阵。若存在数 $\lambda$ 和非零向量 $\boldsymbol\xi$，使：

$$
A\boldsymbol\xi=\lambda\boldsymbol\xi,
$$

则 $\lambda$ 是 $A$ 的特征值，$\boldsymbol\xi$ 是对应于 $\lambda$ 的特征向量。

::: warning 定义要求
特征向量必须是非零向量；零向量不属于任何特征值。
:::

## 2. 特征方程

由：

$$
(\lambda I-A)\boldsymbol\xi=\boldsymbol0
$$

要有非零解，必须：

$$
|\lambda I-A|=0.
$$

$f(\lambda)=|\lambda I-A|$ 称为特征多项式，其根为全部特征值。

## 3. 求特征值与特征向量的步骤

1. 计算 $|\lambda I-A|$。
2. 解特征方程，得到各特征值。
3. 对每个 $\lambda_i$ 求齐次方程：

$$
(A-\lambda_iI)\boldsymbol x=\boldsymbol0.
$$

4. 写出该解空间的基础解系。
5. 对应特征向量是该解空间中的全部非零向量。

## 4. 三角矩阵的特征值

上三角或下三角矩阵的特征值就是主对角线元素，包括重数。

例如：

$$
A=\begin{pmatrix}2&1&0\\0&2&3\\0&0&-1\end{pmatrix}
$$

的特征值为 $2,2,-1$。

## 5. 不同特征值的特征向量

属于不同特征值的特征向量线性无关。更一般地，分别属于两两不同特征值的若干组线性无关特征向量合在一起仍线性无关。

## 6. 零特征值

$$
0\text{ 是 }A\text{ 的特征值}
\Longleftrightarrow |A|=0
\Longleftrightarrow A\text{ 不可逆}.
$$

对应于特征值 $0$ 的特征向量就是齐次方程组 $A\boldsymbol x=0$ 的非零解。

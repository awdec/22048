<h1><center>第二节 齐次线性方程组</center></h1>

## 1. 解的存在性

齐次方程组：

$$
A\boldsymbol x=\boldsymbol0
$$

永远有零解。它有非零解的充要条件是：

$$
r(A)<n,
$$

其中 $n$ 为未知数个数。若 $A$ 为 $n$ 阶方阵，则等价于 $|A|=0$。

## 2. 解空间的维数

自由变量个数为 $r(A)$，即：齐次方程组解空间的维数是 $n-r(A)$。

## 3. 基础解系

齐次方程组解集的一个极大线性无关组称为基础解系。

若基础解系为：

$$
\boldsymbol\xi_1,\ldots,\boldsymbol\xi_{n-r},
$$

则通解为：

$$
\boldsymbol x=c_1\boldsymbol\xi_1+\cdots+c_{n-r}\boldsymbol\xi_{n-r}.
$$

## 4. 求基础解系的步骤

1. 高斯校园得到自由元
2. 用自由元表示主元
3. 写出解向量表达式，提出自由元，常向量就是基础解系

## 5. 同解方程组

两个齐次方程组同解，等价于它们的解空间相同。

若系数矩阵 $A,B$ 行等价$\iff$方程组 $A\boldsymbol x=0$ 与 $B\boldsymbol x=0$ 同解。

<style>
 body { font-family: "楷体" }
</style>

<h1><center>第一节 矩阵运算与特殊矩阵</center></h1>

## 1. 矩阵的概念

$m$ 行 $n$ 列的数表称为 $m\times n$ 矩阵：

$$
A=(a_{ij})_{m\times n}.
$$

两个矩阵相等，当且仅当它们同型且对应元素全部相等。

## 2. 线性运算

同型矩阵才能相加：

$$
A+B=(a_{ij}+b_{ij}),\qquad kA=(ka_{ij}).
$$

满足交换律、结合律和分配律。

## 3. 矩阵乘法

若 $A$ 为 $m\times n$ 矩阵，$B$ 为 $n\times p$ 矩阵，则 $AB$ 为 $m\times p$ 矩阵：

$$
(AB)_{ij}=\sum_{k=1}^{n}a_{ik}b_{kj}.
$$

矩阵乘法满足结合律和分配律，但一般不满足交换律：

$$
AB\ne BA.
$$

并且 $AB=O$ 不一定推出 $A=O$ 或 $B=O$。

## 4. 转置

$$
(A^T)^T=A,
$$

$$
(A+B)^T=A^T+B^T,
$$

$$
(AB)^T=B^TA^T.
$$

注意乘积转置时顺序反转。

## 5. 常见特殊矩阵

- 零矩阵 $O$。
- 单位矩阵 $I$，满足 $AI=IA=A$。
- 对角矩阵 $\operatorname{diag}(d_1,\ldots,d_n)$。
- 数量矩阵 $kI$。
- 对称矩阵：$A^T=A$。
- 反对称矩阵：$A^T=-A$，其主对角元必为零。
- 正交矩阵：$A^TA=I$，即 $A^{-1}=A^T$。

## 6. 方阵的幂与多项式

$$
A^mA^n=A^{m+n},\qquad (A^m)^n=A^{mn}.
$$

但一般不能写 $(A+B)^2=A^2+2AB+B^2$，除非 $AB=BA$。

若 $f(x)=a_0+a_1x+\cdots+a_mx^m$，则：

$$
f(A)=a_0I+a_1A+\cdots+a_mA^m.
$$

::: warning 易错点
判断 $AB$ 是否有意义，要先检查 $A$ 的列数是否等于 $B$ 的行数；不要只看两个矩阵是否同型。
:::

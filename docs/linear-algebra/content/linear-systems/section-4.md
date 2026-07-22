<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四节 含参数方程组与综合结论</center></h1>

## 1. 含参数题的标准流程

1. 写出增广矩阵。
2. 进行不需要除以参数式的初等行变换。
3. 找出决定秩的关键因子。
4. 按关键因子是否为零分类。
5. 在每一类中分别比较 $r(A)$、$r(\widetilde A)$ 与未知数个数。
6. 题目要求通解时，再继续消元。

## 2. 参数分类的三个结果

设未知数个数为 $n$：

- 若 $r(A)<r(\widetilde A)$，无解。
- 若 $r(A)=r(\widetilde A)=n$，唯一解。
- 若 $r(A)=r(\widetilde A)<n$，无穷多解。

## 3. 方程个数与解的关系

设 $A$ 为 $m\times n$ 矩阵。

- 当 $m<n$ 时，齐次方程组一定有非零解，因为 $r(A)\le m<n$。
- 当 $m\ge n$ 时，齐次方程组是否有非零解仍取决于 $r(A)<n$。
- 非齐次方程组即使方程比未知数多，也可能有唯一解或无解。

## 4. 与向量线性表示的关系

若 $A=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_n)$，则：

$$
A\boldsymbol x=\boldsymbol b
$$

等价于：

$$
x_1\boldsymbol\alpha_1+\cdots+x_n\boldsymbol\alpha_n=\boldsymbol b.
$$

因此：

- 有解：$\boldsymbol b$ 可由列向量组表示。
- 唯一解：$\boldsymbol b$ 的表示唯一。
- 无穷多解：$\boldsymbol b$ 可表示但表示不唯一。

## 5. 与矩阵方程的关系

矩阵方程 $AX=B$ 可按 $B$ 的列拆成多个线性方程组：

$$
A\boldsymbol x_j=\boldsymbol b_j.
$$

故 $AX=B$ 有解，当且仅当 $B$ 的每一列都可由 $A$ 的列向量组线性表示，即：

$$
r(A)=r(A,B).
$$

::: warning 分类讨论
含参数题中每一次除法都隐含“除数非零”。最稳妥的写法是先倍加消元，最后围绕关键主元分类。
:::

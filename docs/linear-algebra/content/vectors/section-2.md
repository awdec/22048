<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 线性相关、极大无关组与秩</center></h1>

## 1. 线性相关与线性无关

若齐次方程：

$$
k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s=\boldsymbol0
$$

存在不全为零的解，则向量组线性相关；若只有全零解，则线性无关。

令 $A=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s)$，则：

$$
\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s\text{ 线性无关}
\Longleftrightarrow r(A)=s.
$$

## 2. 常用判定结论

- 含零向量的向量组必线性相关。
- 两个向量线性相关，当且仅当它们成比例。
- 部分组相关，则整个组相关。
- 整个组无关，则任一部分组无关。
- $s$ 个 $n$ 维向量，若 $s>n$，则必线性相关。
- $n$ 个 $n$ 维向量线性无关，当且仅当以它们为列组成的行列式非零。

## 3. 相关性的常见推论

向量组 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$ 线性相关，当且仅当其中至少一个向量可由其余向量线性表示。

更准确地说，若 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_{s-1}$ 线性无关，而加入 $\boldsymbol\alpha_s$ 后相关，则 $\boldsymbol\alpha_s$ 可由前 $s-1$ 个向量唯一表示。

## 4. 极大线性无关组

向量组中的一个部分组若满足：

1. 自身线性无关；
2. 原向量组中的每个向量都可由它线性表示，

则称其为原向量组的极大线性无关组。

极大无关组不唯一，但所含向量个数相同，这个数就是向量组的秩。

## 5. 用行变换求极大无关组

把向量作为列组成矩阵 $A$，对 $A$ 做初等行变换化为阶梯形。主元所在的**原矩阵列**对应一个极大无关组。

::: warning 易错点
行变换改变列向量本身，因此极大无关组必须从原矩阵中取列；可以用化简后矩阵确定主元列编号，不能直接把化简后的列当作答案。
:::

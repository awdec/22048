<h1><center>第二节 线性相关与极大无关组</center></h1>

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

## 2. 极大线性无关组

向量组中的一个部分组若满足：

1. 自身线性无关；
2. 原向量组中的每个向量都可由它线性表示，

则称其为原向量组的极大线性无关组。

极大无关组不唯一，但所含向量个数相同，这个数就是向量组的秩。

## 3. 用行变换求极大无关组

把向量作为列组成矩阵 $A$，对 $A$ 做初等行变换化为阶梯形。主元所在的**原矩阵列**对应一个极大无关组。

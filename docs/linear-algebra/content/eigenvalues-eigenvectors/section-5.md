<style>
 body { font-family: "楷体" }
</style>

<h1><center>第五章总结：特征值和特征向量</center></h1>

## 核心公式

| 内容 | 公式 |
| --- | --- |
| 特征方程 | $|\lambda I-A|=0$ |
| 特征向量 | $(A-\lambda I)\boldsymbol x=0$ 的非零解 |
| 特征值之和 | $\sum\lambda_i=\operatorname{tr}(A)$ |
| 特征值之积 | $\prod\lambda_i=|A|$ |
| 相似关系 | $B=P^{-1}AP$ |
| 对角化 | $P^{-1}AP=\Lambda$ |
| 矩阵幂 | $A^k=P\Lambda^kP^{-1}$ |
| 正交对角化 | $Q^TAQ=\Lambda$ |

## 对角化判断

$$
A\text{ 可对角化}
\Longleftrightarrow
A\text{ 有 }n\text{ 个线性无关的特征向量}.
$$

对每个重特征值 $\lambda_i$ 检查：

$$
n-r(A-\lambda_iI)=\lambda_i\text{ 的代数重数}.
$$

## 高频易错点

1. 特征向量不能为零向量。
2. $P$ 的列顺序必须和 $\Lambda$ 的对角元顺序一致。
3. 特征值相同不一定相似。
4. 有重特征值的矩阵也可能可对角化。
5. 实对称矩阵必可正交对角化，一般矩阵即使可对角化也未必能正交对角化。
6. 同一重特征值下的特征向量需要单独正交化。

::: tip 一句话总结
特征值靠行列式求，特征向量靠齐次方程组求；能否对角化取决于线性无关特征向量是否足够。
:::

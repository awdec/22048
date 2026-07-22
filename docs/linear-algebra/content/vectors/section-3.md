<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 内积与正交规范化</center></h1>

## 1. 向量的内积、长度与正交

$$
(\boldsymbol\alpha,\boldsymbol\beta)=\boldsymbol\alpha^T\boldsymbol\beta,
$$

$$
\|\boldsymbol\alpha\|=\sqrt{(\boldsymbol\alpha,\boldsymbol\alpha)}.
$$

若 $(\boldsymbol\alpha,\boldsymbol\beta)=0$，则二者正交。非零正交向量组一定线性无关。

## 2. 施密特正交化

由线性无关组 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$ 构造正交组：

$$
\boldsymbol\beta_1=\boldsymbol\alpha_1,
$$

$$
\boldsymbol\beta_k=\boldsymbol\alpha_k-
\sum_{j=1}^{k-1}
\frac{(\boldsymbol\alpha_k,\boldsymbol\beta_j)}{(\boldsymbol\beta_j,\boldsymbol\beta_j)}
\boldsymbol\beta_j.
$$

再单位化：

$$
\boldsymbol e_j=\frac{\boldsymbol\beta_j}{\|\boldsymbol\beta_j\|}.
$$

::: tip 用途
正交化是实对称矩阵正交对角化的基础。施密特过程不改变原向量组的线性表示范围。
:::

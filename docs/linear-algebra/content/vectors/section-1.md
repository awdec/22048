<h1><center>第一节 线性组合与向量组等价</center></h1>

## 1. 向量与向量组

$n$ 个数按顺序排列得到 $n$ 维向量。列向量写作：

$$
\boldsymbol\alpha=(a_1,a_2,\ldots,a_n)^T.
$$

若干同维向量构成向量组 $A=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s)$。

## 2. 线性组合与线性表示

表达式：

$$
k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+\cdots+k_s\boldsymbol\alpha_s
$$

称为向量组的一个线性组合。若存在一组数 $k_1,
\ldots,k_s$ 使：

$$
\boldsymbol\beta=k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s,
$$

则称 $\boldsymbol\beta$ 可由该向量组线性表示。

令：

$$
A=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s),
$$

则上述问题等价于方程组：

$$
A\boldsymbol x=\boldsymbol\beta.
$$

因此：

$$
\boldsymbol\beta\text{ 可由 }\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s\text{ 表示}
\Longleftrightarrow
r(A)=r(A,\boldsymbol\beta).
$$

若 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$ 线性无关，则表示系数唯一；

若线性相关，则表示不唯一。

## 3. 向量组之间的矩阵表示

若向量组 $\boldsymbol\beta_1,\ldots,\boldsymbol\beta_t$ 均可由 $\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s$ 表示，则存在矩阵 $C$：

$$
(\boldsymbol\beta_1,\ldots,\boldsymbol\beta_t)
=(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s)C.
$$

由此立刻得到：

$$
r(\boldsymbol\beta_1,\ldots,\boldsymbol\beta_t)
\le r(\boldsymbol\alpha_1,\ldots,\boldsymbol\alpha_s).
$$

- 能否线性表示$\iff$方程组是否有解
- 表示是否唯一$\iff$系数矩阵的列向量是否线性无关

## 4. 向量组等价

若向量组 $A$ 中的每个向量都可由向量组 $B$ 线性表示，且反之也成立，则称两向量组等价。

$$
r(A)=r(B)=r(A,B)\Leftrightarrow A\sim B\Leftrightarrow \text{span}(A)=\text{span}(B)
$$ 
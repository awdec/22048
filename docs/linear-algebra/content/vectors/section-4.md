<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三章总结：向量</center></h1>

## 三个核心问题

| 问题 | 转化方法 |
| --- | --- |
| $\boldsymbol\beta$ 能否由向量组表示 | 判断 $A\boldsymbol x=\boldsymbol\beta$ 是否有解 |
| 向量组是否线性无关 | 判断 $A\boldsymbol x=\boldsymbol0$ 是否只有零解 |
| 极大无关组含多少向量 | 求列向量组的秩 $r(A)$ |

## 重要逻辑链

$$
\text{列向量组线性无关}
\Longleftrightarrow r(A)=\text{列数}
\Longleftrightarrow A\boldsymbol x=\boldsymbol0\text{ 只有零解}.
$$

若 $A$ 为 $n$ 阶方阵，还等价于 $|A|\ne0$ 和 $A$ 可逆。

## 易错点

1. 线性相关的定义要求系数“不全为零”，不是“全不为零”。
2. 等价向量组必等秩，等秩向量组未必等价。
3. 向量个数大于维数时必相关；个数小于维数时不一定无关。
4. 极大无关组从原向量组中选取。
5. 非零正交组必无关，但线性无关组不一定正交。
6. 施密特正交化后还要单位化，才能得到正交规范向量组。

::: tip 一句话总结
向量问题的统一语言是矩阵秩与线性方程组：能否表示看相容性，是否唯一看线性无关性。
:::

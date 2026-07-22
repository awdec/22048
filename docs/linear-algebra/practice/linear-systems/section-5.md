<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四章综合训练与答题技巧</center></h1>

::: info 综合题
三元非齐次方程组有三个解 $\boldsymbol\eta_1,\boldsymbol\eta_2,\boldsymbol\eta_3$，且 $\boldsymbol\eta_1-\boldsymbol\eta_2$ 与 $\boldsymbol\eta_1-\boldsymbol\eta_3$ 线性无关。求系数矩阵秩的最大可能值。
:::

::: details 解析
两个差向量是对应齐次方程组的两个线性无关解，所以齐次解空间维数至少为 $2$：
$$
3-r(A)\ge2.
$$
因此 $r(A)\le1$，最大可能值为 $1$。
:::

## 答题技巧

1. 第一行先写秩判定，再做分类。
2. 通解中明确标出特解、基础解系和自由参数。
3. 含参数消元时保留关键因子，不提前约去。
4. 已知多个非齐次解时先作差，转化为齐次解。

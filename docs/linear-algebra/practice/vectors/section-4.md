<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三章综合训练与答题技巧</center></h1>

::: info 综合题
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 线性无关，而 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\beta$ 线性相关，证明 $\boldsymbol\beta$ 可由 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 唯一表示。
:::

::: details 解析
相关性给出不全为零的 $k_1,k_2,k_3$：
$$
k_1\boldsymbol\alpha_1+k_2\boldsymbol\alpha_2+k_3\boldsymbol\beta=0.
$$
若 $k_3=0$，则前两个向量相关，矛盾，故 $k_3\ne0$。于是 $\boldsymbol\beta$ 可由前两个向量表示。

若存在两种表示，相减将得到 $\boldsymbol\alpha_1,\boldsymbol\alpha_2$ 的非平凡线性关系，与线性无关矛盾，故表示唯一。
:::

## 答题技巧

1. “表示”写成非齐次方程，“相关”写成齐次方程。
2. 判断相关性时优先观察是否有成比例、和差关系。
3. 求极大无关组时记录原矩阵的主元列编号。
4. 看到不同基下的坐标，先写过渡矩阵方向。

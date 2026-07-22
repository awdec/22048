<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 线性相关与极大无关组</center></h1>

::: info 例 1
判断向量组 $\boldsymbol\alpha_1=(1,0,1)^T$、$\boldsymbol\alpha_2=(0,1,1)^T$、$\boldsymbol\alpha_3=(1,1,2)^T$ 的相关性。
:::

::: details 解析
因为：
$$
\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2,
$$
所以该向量组线性相关。
:::

::: info 例 2
求向量组的一个极大无关组：
$$
\boldsymbol\alpha_1=(1,0,1)^T,
\boldsymbol\alpha_2=(2,1,3)^T,
\boldsymbol\alpha_3=(3,1,4)^T.
$$
:::

::: details 解析
注意到 $\boldsymbol\alpha_3=\boldsymbol\alpha_1+\boldsymbol\alpha_2$，且前两个向量不成比例，故一个极大无关组为：
$$
\boldsymbol\alpha_1,\boldsymbol\alpha_2.
$$
向量组的秩为 $2$。
:::

::: info 例 3
设 $\boldsymbol\alpha_1,\boldsymbol\alpha_2,\boldsymbol\alpha_3$ 线性无关，判断 $\boldsymbol\alpha_1+\boldsymbol\alpha_2$、$\boldsymbol\alpha_2+\boldsymbol\alpha_3$、$\boldsymbol\alpha_3+\boldsymbol\alpha_1$ 是否线性无关。
:::

::: details 解析
令三者的线性组合为零，按原向量组整理，系数矩阵为：
$$
\begin{pmatrix}1&0&1\\1&1&0\\0&1&1\end{pmatrix},
$$
其行列式为 $2\ne0$，故新向量组线性无关。
:::

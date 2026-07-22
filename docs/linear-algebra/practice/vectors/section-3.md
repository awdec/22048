<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 内积与正交规范化</center></h1>

::: info 例 1
判断向量 $\boldsymbol\alpha=(1,1)^T$ 与 $\boldsymbol\beta=(1,-1)^T$ 是否正交，并求二者的长度。
:::

::: details 解析
因为：
$$
(\boldsymbol\alpha,\boldsymbol\beta)=1\times1+1\times(-1)=0,
$$
所以二者正交，且 $\|\boldsymbol\alpha\|=\|\boldsymbol\beta\|=\sqrt2$。
:::

::: info 例 2
将 $\boldsymbol\alpha_1=(1,1,0)^T$、$\boldsymbol\alpha_2=(1,0,1)^T$ 正交化。
:::

::: details 解析
取：
$$
\boldsymbol\beta_1=\boldsymbol\alpha_1,
$$
$$
\boldsymbol\beta_2=\boldsymbol\alpha_2-
\frac{(\boldsymbol\alpha_2,\boldsymbol\beta_1)}{(\boldsymbol\beta_1,\boldsymbol\beta_1)}\boldsymbol\beta_1
=(1,0,1)^T-\frac12(1,1,0)^T.
$$
可倍乘为 $\boldsymbol\beta_2=(1,-1,2)^T$。二者内积为零。
:::

::: info 例 3
为什么非零正交向量组一定线性无关？
:::

::: details 解析
设 $k_1\boldsymbol\alpha_1+\cdots+k_s\boldsymbol\alpha_s=\boldsymbol0$。等式两边分别与 $\boldsymbol\alpha_i$ 作内积，利用两两正交可得：
$$
k_i(\boldsymbol\alpha_i,\boldsymbol\alpha_i)=0.
$$
因为 $\boldsymbol\alpha_i\ne\boldsymbol0$，所以 $k_i=0$。全部系数均为零，故向量组线性无关。
:::

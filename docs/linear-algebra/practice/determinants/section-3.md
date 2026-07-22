<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 特殊行列式与克拉默法则</center></h1>

::: info 例 1
计算：
$$
D=\begin{vmatrix}a&b&b\\b&a&b\\b&b&a\end{vmatrix}.
$$
:::

::: details 解析
这是主对角元为 $a$、其余元素为 $b$ 的三阶行列式：
$$
D=(a-b)^2(a+2b).
$$
也可把三列加到第一列，提出 $a+2b$，再从后两列分别减第一列的适当倍数化简。
:::

::: info 例 2
方程组 $A\boldsymbol x=\boldsymbol b$ 的系数矩阵满足 $|A|=-2$，用常数列替换第二列所得行列式 $D_2=6$，求 $x_2$。
:::

::: details 解析
由克拉默法则：
$$
x_2=\frac{D_2}{|A|}=\frac6{-2}=-3.
$$
:::

::: info 例 3
若 $A$ 为三阶矩阵且 $|A|=2$，求 $|A^*|$。
:::

::: details 解析
对 $n$ 阶矩阵：$|A^*|=|A|^{n-1}$。因此：
$$
|A^*|=2^2=4.
$$
:::

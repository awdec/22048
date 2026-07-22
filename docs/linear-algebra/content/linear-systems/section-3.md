<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 非齐次线性方程组</center></h1>

## 1. 解的结构

设 $\boldsymbol\eta^*$ 是非齐次方程组：

$$
A\boldsymbol x=\boldsymbol b
$$

的一个特解，$\boldsymbol\xi$ 是对应齐次方程组 $A\boldsymbol x=\boldsymbol0$ 的任意解，则非齐次方程组的全部解为：

$$
\boldsymbol x=\boldsymbol\eta^*+\boldsymbol\xi.
$$

若齐次方程组基础解系为 $\boldsymbol\xi_1,\ldots,\boldsymbol\xi_{n-r}$，则：

$$
\boldsymbol x=\boldsymbol\eta^*+c_1\boldsymbol\xi_1+\cdots+c_{n-r}\boldsymbol\xi_{n-r}.
$$

## 2. 解向量的运算规律

若 $\boldsymbol\eta_1,\boldsymbol\eta_2$ 都是非齐次方程组的解，则：

$$
A(\boldsymbol\eta_1-\boldsymbol\eta_2)=\boldsymbol0,
$$

所以两非齐次解之差是齐次解。

一般地，若 $\boldsymbol\eta_1,\ldots,\boldsymbol\eta_s$ 均为非齐次解，则：

$$
k_1\boldsymbol\eta_1+\cdots+k_s\boldsymbol\eta_s
$$

在 $k_1+\cdots+k_s=1$ 时仍为非齐次解；系数和为 $0$ 时为齐次解。

## 3. 已知部分解反求方程组信息

若已知若干非齐次解：

- 先作差得到齐次解。
- 用差向量的线性无关个数判断 $n-r(A)$ 的下界。
- 再结合题设中的秩、未知数个数或解的个数确定 $r(A)$。

## 4. 非齐次解的结构特点

当 $\boldsymbol b\ne\boldsymbol0$ 时，两个非齐次解之差是对应齐次方程组的解；非齐次方程组的全部解可写成“一个特解＋对应齐次方程组的通解”。

## 5. 多个方程组的公共解

求：

$$
\begin{cases}
A\boldsymbol x=\boldsymbol b,\\
B\boldsymbol x=\boldsymbol d
\end{cases}
$$

的公共解，可合并成块方程组：

$$
\begin{pmatrix}A\\B\end{pmatrix}\boldsymbol x
=\begin{pmatrix}\boldsymbol b\\\boldsymbol d\end{pmatrix},
$$

再统一消元。

::: warning 易错点
非齐次通解必须写成“一个特解 + 对应齐次通解”，不能只写基础解系的线性组合。
:::

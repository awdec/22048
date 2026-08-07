<h1><center>第三节 非齐次线性方程组</center></h1>

## 1. 解的结构

设 $\boldsymbol\eta^*$ 是非齐次方程组：

$$
A\boldsymbol x=\boldsymbol b
$$

的一个特解，$\boldsymbol\xi$ 是对应齐次方程组 $A\boldsymbol x=\boldsymbol0$ 的通解，则非齐次方程组的全部解为：

$$
\boldsymbol x=\boldsymbol\eta^*+\boldsymbol\xi.
$$

若齐次方程组基础解系为 $\boldsymbol\xi_1,\ldots,\boldsymbol\xi_{n-r}$，则：

$$
\boxed{
\boldsymbol x=\boldsymbol\eta^*
+c_1\boldsymbol\xi_1+\cdots+c_{n-r}\boldsymbol\xi_{n-r}
}
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

## 4. 同解方程组

非齐次方程组同解$\iff$有共同特解，且对应齐次方程组同解$\iff$增广矩阵行最简型完全相同

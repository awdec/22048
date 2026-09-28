<h1><center>第四节 分块矩阵</center></h1>

## 1. 分块矩阵

把矩阵按横线、竖线划分为若干子块，可以把每个子块当作“元素”进行运算，但必须满足尺寸匹配。

若：

$$
A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix},\qquad
B=\begin{pmatrix}B_{11}&B_{12}\\B_{21}&B_{22}\end{pmatrix},
$$

则按普通矩阵乘法规则：

$$
AB=\begin{pmatrix}
A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\
A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}
\end{pmatrix}.
$$

## 2. 分块对角矩阵

$$
A=\operatorname{diag}(A_1,A_2,\ldots,A_s).
$$

若各 $A_i$ 可逆，则：

$$
A^{-1}=\operatorname{diag}(A_1^{-1},A_2^{-1},\ldots,A_s^{-1}),
$$

$$
|A|=|A_1||A_2|\cdots|A_s|,
$$

$$
r(A)=r(A_1)+\cdots+r(A_s).
$$

## 3. 用初等变换解矩阵方程

对 $AX=B$，可做：

$$
(A\mid B)\xrightarrow{\text{初等行变换}}(I\mid X).
$$

这相当于同时左乘一系列初等矩阵。

::: warning 易错点
求 $XA=B$ 时不能照搬 $(A\mid B)$ 的行变换方法；右乘初等矩阵对应列变换，应根据乘法方向处理。
:::

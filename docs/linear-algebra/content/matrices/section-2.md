<style>
 body { font-family: "楷体" }
</style>

<h1><center>第二节 逆矩阵与伴随矩阵</center></h1>

## 1. 逆矩阵

若存在同阶方阵 $B$，使：

$$
AB=BA=I,
$$

则称 $A$ 可逆，$B$ 是 $A$ 的逆矩阵，记作 $A^{-1}$。

方阵可逆的等价条件：

$$
A\text{ 可逆}
\Longleftrightarrow |A|\ne0
\Longleftrightarrow r(A)=n
\Longleftrightarrow A\boldsymbol{x}=\boldsymbol0\text{ 只有零解}.
$$

## 2. 逆矩阵的性质

$$
(A^{-1})^{-1}=A,
$$

$$
(AB)^{-1}=B^{-1}A^{-1},
$$

$$
(A^T)^{-1}=(A^{-1})^T,
$$

$$
(kA)^{-1}=\frac1kA^{-1}\quad(k\ne0).
$$

## 3. 伴随矩阵

由代数余子式构造伴随矩阵：

$$
A^*=(A_{ji})_{n\times n}.
$$

注意代数余子式矩阵还要转置。基本恒等式：

$$
AA^*=A^*A=|A|I.
$$

当 $|A|\ne0$ 时：

$$
A^{-1}=\frac1{|A|}A^*.
$$

常用性质：

$$
(AB)^*=B^*A^*,
$$

$$
|A^*|=|A|^{n-1},
$$

$$
(A^*)^*=|A|^{n-2}A\quad(n\ge2).
$$

## 4. 求逆矩阵的两种方法

### 4.1 伴随矩阵法

适合二阶、三阶且代数余子式较简单的矩阵。

### 4.2 初等变换法

$$
(A\mid I)\xrightarrow{\text{初等行变换}}(I\mid A^{-1}).
$$

适合高阶数值矩阵，也是考试中更稳定的方法。

## 5. 低秩时伴随矩阵的秩

对 $n$ 阶方阵：

$$
r(A^*)=
\begin{cases}
n,&r(A)=n,\\
1,&r(A)=n-1,\\
0,&r(A)\le n-2.
\end{cases}
$$

::: warning 易错点
$A$ 可逆时才能在等式两边乘 $A^{-1}$；未证明可逆之前，不可擅自“约去”矩阵因子。
:::

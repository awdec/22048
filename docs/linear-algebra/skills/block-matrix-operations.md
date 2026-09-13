<h1><center>分块矩阵运算结论</center></h1>


## 1. 基本运算

对 $A$ 与 $B$ 作相同的行列分块：

$$
A=\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix},\qquad
B=\begin{pmatrix}B_{11}&B_{12}\\B_{21}&B_{22}\end{pmatrix}.
$$

- **加法 / 数乘**：对应子块逐块相加 / 数乘（要求分块方式一致）。
- **乘法**：仍按"同行 × 同列"把子块展开成普通矩阵乘法：
$$
AB=\begin{pmatrix}
A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\
A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}
\end{pmatrix}.
$$
- **转置**：先转置整体分块，**再转置每个子块**：
$$
\begin{pmatrix}A_{11}&A_{12}\\A_{21}&A_{22}\end{pmatrix}^{T}
=\begin{pmatrix}A_{11}^{T}&A_{21}^{T}\\A_{12}^{T}&A_{22}^{T}\end{pmatrix}.
$$

## 2. 分块对角矩阵

设 $A=\operatorname{diag}(A_1,A_2,\ldots,A_s)$，各 $A_i$ 均为方阵。

| 想要求 | 结论 | 条件 |
| --- | --- | --- |
| 幂 | $A^k=\operatorname{diag}(A_1^k,\ldots,A_s^k)$ | 任意正整数 $k$ |
| 逆 | $A^{-1}=\operatorname{diag}(A_1^{-1},\ldots,A_s^{-1})$ | 各 $A_i$ 可逆（也是 $A$ 可逆的充要条件） |
| 行列式 | $\lvert A\rvert=\lvert A_1\rvert\lvert A_2\rvert\cdots\lvert A_s\rvert$ | — |
| 秩 | $r(A)=r(A_1)+\cdots+r(A_s)$ | — |
| 多项式 | $f(A)=\operatorname{diag}(f(A_1),\ldots,f(A_s))$，特别 $\lvert\lambda I-A\rvert=\prod_{i}\lvert\lambda I-A_i\rvert$ | $f$ 为多项式 |


## 3. 分块上、下三角矩阵

设 $A,B$ 均为方阵（**阶数可以不同**，$C$ 尺寸与之相配）：

$$
M=\begin{pmatrix}A&C\\O&B\end{pmatrix}\ (\text{上三角}),\qquad
N=\begin{pmatrix}A&O\\C&B\end{pmatrix}\ (\text{下三角}).
$$

| 结论 | 上三角 $M$ | 下三角 $N$ |
| --- | --- | --- |
| 行列式 | $\lvert M\rvert=\lvert A\rvert\lvert B\rvert$ | $\lvert N\rvert=\lvert A\rvert\lvert B\rvert$ |
| 可逆条件 | $A,B$ 均可逆 | $A,B$ 均可逆 |
| 逆矩阵 | $\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}$ | $\begin{pmatrix}A^{-1}&O\\-B^{-1}CA^{-1}&B^{-1}\end{pmatrix}$ |

## 4. 副对角分块

设 $A,B$ 为**同阶 $n$ 阶方阵**：

$$
M=\begin{pmatrix}O&A\\B&O\end{pmatrix}.
$$

| 结论 | 表达式 |
| --- | --- |
| 平方变分块对角 | $M^2=\begin{pmatrix}AB&O\\O&BA\end{pmatrix}$，故 $M^{2k}=\operatorname{diag}\big((AB)^k,(BA)^k\big)$ |
| 行列式 | $\lvert M\rvert=(-1)^n\lvert A\rvert\lvert B\rvert$ |
| 逆矩阵 | 若 $A,B$ 可逆，$M^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}$ |

## 5. 拉普拉斯展开

§2–§4 的公式都要求**对角子块是方阵**。子块呈长方形时（例如 $2\times2$ 分块中的 $B,C$），总行列式没有单条公式，但**拉普拉斯（Laplace）展开**给出统一算法：任取 $k$ 行，行列式等于"这 $k$ 行与任取的 $k$ 列"构成的 $k$ 阶子式乘上对应**互补子式**（带符号）之和。

**定理**：设 $D$ 为 $n$ 阶行列式，任取 $k$ 行 $i_1<\cdots<i_k$（$1\le k\le n$），则

$$
D=\sum_{1\le j_1<\cdots<j_k\le n}
(-1)^{(i_1+\cdots+i_k)+(j_1+\cdots+j_k)}
\,M\binom{i_1,\cdots,i_k}{j_1,\cdots,j_k}
\,\overline M\binom{\text{其余行}}{\text{其余列}},
$$

其中 $M\binom{i_1\cdots i_k}{j_1\cdots j_k}$ 是"这 $k$ 行、这 $k$ 列"构成的 $k$ 阶子式（$k\times k$ 小方阵），第二因子是"剩下的 $n-k$ 行、$n-k$ 列"构成的 $n-k$ 阶子式。$k=1$ 就是普通的按某一行展开；$k>1$ 时被求和、相乘的正是**从长方形子块中取出的小方阵**——长方形子块就是以此进入行列式的。

由此能重新推出 §3、§4 的结论（它们的展开只有一项非零）：

- **分块上三角**：对 $M=\begin{pmatrix}A&C\\O&B\end{pmatrix}$（$A$ 为 $p\times p$，$B$ 为 $q\times q$）按前 $p$ 行展开。所取 $p$ 列若不恰好是 $A$ 所在的 $p$ 列，互补子式必含 $O$ 的一整列而为 $0$，故只剩 $1+2+\cdots+p$ 这一项，符号 $(-1)^{2(1+\cdots+p)}=+1$，得 $\lvert M\rvert=\lvert A\rvert\lvert B\rvert$。
- **副对角**：对 $\begin{pmatrix}O&A\\B&O\end{pmatrix}$（$A,B$ 为 $n$ 阶方阵）按上 $n$ 行展开。上 $n$ 行只在右 $n$ 列非零，故只能取右 $n$ 列，符号为 $(-1)^{(1+\cdots+n)+(n+1+\cdots+2n)}=(-1)^n$，故 $\lvert M\rvert=(-1)^n\lvert A\rvert\lvert B\rvert$。
- **一般 $2\times2$**：若四块都"不干净"，展开不会坍缩成一项，须对全部 $\binom{n}{k}$ 种列选择求和——这正是 $2\times2$ 分块 $\begin{pmatrix}A&B\\C&D\end{pmatrix}$ 的行列式**没有**简单公式的原因。

**易错**：不要把 $\begin{vmatrix}A&B\\C&D\end{vmatrix}$ 想当然写成 $\lvert AD-BC\rvert$。这只在 $A,B,C,D$ 都是 $1\times1$（真当"数"处理）时成立；分块后一般不对。

## 6. 忘了公式时的通法：同形待定

对不熟悉的形状求逆，可**设逆矩阵与 $M$ 同分块形状、含待定子块**，再用 $M\cdot M^{-1}=I$ 分块相乘、对比解出。以 $M=\begin{pmatrix}A&C\\O&B\end{pmatrix}$（$A,B$ 可逆）为例，设

$$
M^{-1}=\begin{pmatrix}X&Y\\O&W\end{pmatrix}\quad(\text{取与 }M\text{ 同形的分块}),
$$

乘开并令其等于单位阵：

$$
\begin{pmatrix}A&C\\O&B\end{pmatrix}\begin{pmatrix}X&Y\\O&W\end{pmatrix}
=\begin{pmatrix}AX&AY+CW\\O&BW\end{pmatrix}
=\begin{pmatrix}I&O\\O&I\end{pmatrix}.
$$

由 $AX=I,\ BW=I$ 得 $X=A^{-1},\ W=B^{-1}$；再由 $AY+CW=O$ 得 $Y=-A^{-1}CB^{-1}$。此方法既用于**推出**公式，也用于**验证**背下的结论。

## 7. 例题

::: info 例 1（分块上三角的行列式与逆）
设
$$
A=\begin{pmatrix}1&2\\0&1\end{pmatrix},\quad
B=\begin{pmatrix}1&0\\1&1\end{pmatrix},\quad
C=\begin{pmatrix}1&1\\1&0\end{pmatrix},\qquad
M=\begin{pmatrix}A&C\\O&B\end{pmatrix}.
$$
求 $\lvert M\rvert$ 与 $M^{-1}$。
:::

::: details 解析
$$
\lvert M\rvert=\lvert A\rvert\lvert B\rvert=(1\cdot1-2\cdot0)(1\cdot1-0\cdot1)=1.
$$
先求两个子块的逆：
$$
A^{-1}=\begin{pmatrix}1&-2\\0&1\end{pmatrix},\qquad
B^{-1}=\begin{pmatrix}1&0\\-1&1\end{pmatrix}.
$$
串联"$A^{-1}\to C\to B^{-1}$"计算右上块：
$$
A^{-1}CB^{-1}
=\begin{pmatrix}1&-2\\0&1\end{pmatrix}\begin{pmatrix}1&1\\1&0\end{pmatrix}\begin{pmatrix}1&0\\-1&1\end{pmatrix}
=\begin{pmatrix}-1&1\\1&0\end{pmatrix}\begin{pmatrix}1&0\\-1&1\end{pmatrix}
=\begin{pmatrix}-2&1\\1&0\end{pmatrix}.
$$
故
$$
M^{-1}=\begin{pmatrix}A^{-1}&-A^{-1}CB^{-1}\\O&B^{-1}\end{pmatrix}
=\begin{pmatrix}
1&-2&2&-1\\
0&1&-1&0\\
0&0&1&0\\
0&0&-1&1
\end{pmatrix}.
$$
（把四个 $2\times2$ 子块展开成 $4\times4$；代入 $MM^{-1}=I$ 可抽查无误。）
:::

::: info 例 2（副对角分块：行列式、逆与平方）
设
$$
A=\begin{pmatrix}1&2\\3&4\end{pmatrix},\qquad
B=\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
M=\begin{pmatrix}O&A\\B&O\end{pmatrix}.
$$
求 $\lvert M\rvert$、$M^{-1}$ 与 $M^2$。
:::

::: details 解析
$A,B$ 同为 $2\times2$，故 $n=2$，且二者均可逆：
$$
\lvert A\rvert=4-6=-2,\qquad \lvert B\rvert=0-1=-1,
$$
$$
\lvert M\rvert=(-1)^2\lvert A\rvert\lvert B\rvert=2.
$$

$$
A^{-1}=\frac{1}{-2}\begin{pmatrix}4&-2\\-3&1\end{pmatrix}
=\begin{pmatrix}-2&1\\[2mm]\frac32&-\frac12\end{pmatrix},\qquad
B^{-1}=\begin{pmatrix}0&1\\1&0\end{pmatrix}=B.
$$

于是副对角位置对调求逆：
$$
M^{-1}=\begin{pmatrix}O&B^{-1}\\A^{-1}&O\end{pmatrix}
=\begin{pmatrix}
0&0&0&1\\
0&0&1&0\\
-2&1&0&0\\
\frac32&-\frac12&0&0
\end{pmatrix}.
$$

再算平方：
$$
AB=\begin{pmatrix}1&2\\3&4\end{pmatrix}\begin{pmatrix}0&1\\1&0\end{pmatrix}
=\begin{pmatrix}2&1\\4&3\end{pmatrix},\qquad
BA=\begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}1&2\\3&4\end{pmatrix}
=\begin{pmatrix}3&4\\1&2\end{pmatrix},
$$
$$
M^2=\begin{pmatrix}AB&O\\O&BA\end{pmatrix}
=\begin{pmatrix}
2&1&0&0\\
4&3&0&0\\
0&0&3&4\\
0&0&1&2
\end{pmatrix}.
$$

检验：$\lvert M\rvert^2=\lvert M^2\rvert=\lvert AB\rvert\,\lvert BA\rvert=(6-4)(6-4)=4=2^2$，一致。
:::

::: info 例 3（判断正误）
判断下列说法正误并说明理由：
（1）只要两个分块矩阵"形状一样"，就可按块直接相乘；
（2）$M=\operatorname{diag}(A,B)$ 可逆的充要条件是 $A,B$ 均可逆；
（3）分块上三角矩阵与对角矩阵一样，幂可以"逐块求幂"；
（4）$(AB)^{-1}=A^{-1}B^{-1}$。
:::

::: details 解析
（1）**错**。形状一致之外，还要求 $A$ 的列分块与 $B$ 的行分块一致，子块内部也要行列匹配，才能按块相乘。

（2）**对**。$\lvert M\rvert=\lvert A\rvert\lvert B\rvert$，$M$ 可逆当且仅当 $A,B$ 都可逆，且此时 $M^{-1}=\operatorname{diag}(A^{-1},B^{-1})$。

（3）**错**。只有主对角之外全为零才能逐块求幂；分块上三角副对角处会逐次累加，一般没有简洁的幂公式。

（4）**错**。乘法次序不可交换，应为 $(AB)^{-1}=B^{-1}A^{-1}$。
:::

::: info 例 4（按两行做拉普拉斯展开）
计算
$$
D=\begin{vmatrix}
1&2&0&1\\
0&1&3&2\\
1&0&1&1\\
2&1&0&3
\end{vmatrix}.
$$
:::

::: details 解析
按第 $1,2$ 两行展开（$i_1+i_2=3$），对所有列对 $(j_1,j_2)$ 求和，符号为 $(-1)^{3+j_1+j_2}$：

| $(j_1,j_2)$ | 符号 | $2$ 阶子式 | 补子式 | 该项 |
| --- | --- | --- | --- | --- |
| $(1,2)$ | $+$ | $\begin{vmatrix}1&2\\0&1\end{vmatrix}=1$ | $\begin{vmatrix}1&1\\0&3\end{vmatrix}=3$ | $3$ |
| $(1,3)$ | $-$ | $\begin{vmatrix}1&0\\0&3\end{vmatrix}=3$ | $\begin{vmatrix}0&1\\1&3\end{vmatrix}=-1$ | $3$ |
| $(1,4)$ | $+$ | $\begin{vmatrix}1&1\\0&2\end{vmatrix}=2$ | $\begin{vmatrix}0&1\\1&0\end{vmatrix}=-1$ | $-2$ |
| $(2,3)$ | $+$ | $\begin{vmatrix}2&0\\1&3\end{vmatrix}=6$ | $\begin{vmatrix}1&1\\2&3\end{vmatrix}=1$ | $6$ |
| $(2,4)$ | $-$ | $\begin{vmatrix}2&1\\1&2\end{vmatrix}=3$ | $\begin{vmatrix}1&1\\2&0\end{vmatrix}=-2$ | $6$ |
| $(3,4)$ | $+$ | $\begin{vmatrix}0&1\\3&2\end{vmatrix}=-3$ | $\begin{vmatrix}1&0\\2&1\end{vmatrix}=1$ | $-3$ |

求和：
$$
D=3+3-2+6+6-3=13.
$$
可与直接按行展开的结果互验。
:::
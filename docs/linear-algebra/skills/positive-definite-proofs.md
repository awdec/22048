<h1><center>正定矩阵的证明</center></h1>

正定的定义与等价条件见[二次型第四节](../content/quadratic-forms/section-4)，本文只讲**证明题**怎么下笔：如何选择入口、如何配方与放缩、常见题型与易错点。

## 1. 先选入口

| 题面给出的信息 | 首选工具 |
| --- | --- |
| 元素具体，能写出 $x^TAx$ | 定义法：配方凑完全平方 |
| $A=B^TB$、$A=P^TP$，或形如 $A^TA+kI$ | 构造法：写成 $\lVert Cx\rVert^2$ |
| 已知与某正定矩阵相似 / 合同，或能求出特征值 | 特征值法、合同变换 |
| 抽象矩阵，只知满足某个矩阵等式 | 取特殊向量法 + 摄动法 |
| 分块矩阵、含 Schur 补结构 | 分块判据 |
| 元素含参数，求参数范围 | 顺序主子式 |

心法只有一句：**证明正定最终都归到"对任意 $x\ne0$ 有 $x^TAx>0$"**，其余等价条件只是换一种算法。

## 2. 定义法：把二次型凑成完全平方

**（1）配完全平方**：把 $x^TAx$ 逐次配成平方和，只要平方项系数均为正即可，**无须真的求特征值**。

**（2）先对称化**：由 $x^TAx=x^TA^Tx$，无论 $A$ 是否对称，都有

$$
x^TAx=x^T\left(\frac{A+A^T}{2}\right)x.
$$

因此可以把 $A$ 换成它的**对称部分** $B=\dfrac{A+A^T}{2}$ 再判断。附带结论：$x^TAx>0$ 对一切 $x\ne0$ 成立时必有 $A$ 可逆，因为 $Ax=0\Rightarrow x^TAx=0$。

常用恒等式与放缩：

| 恒等式 / 不等式 | 用途 |
| --- | --- |
| $a^2+b^2\ge 2ab$，即 $2ab\ge-(a^2+b^2)$ | 把交叉项放缩成平方项 |
| $a^2+b^2+c^2-ab-bc-ca=\frac12\big[(a-b)^2+(b-c)^2+(c-a)^2\big]$ | "对角 + 两两交叉"型 |
| $2\lvert a_{ij}\rvert\lvert x_ix_j\rvert\le\lvert a_{ij}\rvert(x_i^2+x_j^2)$ | 把交叉项摊到对角线上 |
| $(a+b)^2\le 2(a^2+b^2)$ | 上界估计 |

**配方的一般步骤**：先以 $x_1$ 为主元配一个平方，剩余部分仍是关于 $x_2,\ldots,x_n$ 的二次型，递归下去。当 $A$ 的顺序主子式全正时，配方结果形如

$$
x^TAx=\Delta_1y_1^2+\frac{\Delta_2}{\Delta_1}y_2^2+\cdots+\frac{\Delta_n}{\Delta_{n-1}}y_n^2,
$$

其中 $y$ 是 $x$ 的可逆线性替换。这从另一个角度解释了顺序主子式判别法。

## 3. 构造法：写成 $x^TAx=\lVert Cx\rVert^2$

若 $A=C^TC$（$C$ 不必是方阵），则

$$
x^TAx=(Cx)^T(Cx)=\lVert Cx\rVert^2\ge0,
$$

即 $A$ 半正定；**当且仅当 $Cx=0$ 只有零解**（$C$ 列满秩）时 $A$ 正定。反过来也是重要结论：

$$
\boxed{A\text{ 正定}\iff\text{存在可逆矩阵 }C\text{ 使 }A=C^TC.}
$$

证明思路：正定 $\Rightarrow$ 正交对角化 $A=Q\Lambda Q^T$，取 $C=\Lambda^{1/2}Q^T$ 即可；若还要求 $C$ 对称，取 $C=Q\Lambda^{1/2}Q^T$，这就是**正定矩阵的平方根**。

**识别信号**：见到 $A^TA$、$A^TA+kI$、Gram 矩阵、$\sum\alpha_i\alpha_i^T$ 这类结构，立刻想到本方法。

## 4. 特征值法与合同变换

**合同变换不改变正定性**：对任意可逆矩阵 $C$，

$$
x^TAx>0\ (\forall x\ne0)\iff y^T(C^TAC)y>0\ (\forall y\ne0),
$$

令 $x=Cy$ 即可。所以可以用配方或初等变换把 $A$ 化成对角阵再判符号；把 $A$ 合同对角化本质上就是在算惯性指数。

由正交对角化 $A=Q\operatorname{diag}(\lambda_1,\ldots,\lambda_n)Q^T$ 得**特征值判据**：$A$ 正定 $\iff$ 全部特征值大于零。凡是能求出、或能由相似关系间接得到特征值的题，都走这条路。

**取特殊向量法**：从定义出发取特定的 $x$，可得到具体结论：

- 取 $x=e_i$，得 $a_{ii}>0$；
- 取 $x$ 只在指标集 $S$ 上有分量，得 **$A$ 的任意主子阵仍正定**，特别地所有主子式都大于零；
- 取 $x=e_i\pm e_j$，得 $a_{ii}+a_{jj}\pm2a_{ij}>0$，两式合并即

$$
|a_{ij}|<\frac{a_{ii}+a_{jj}}{2}\quad(i\ne j),
$$

说明**正定矩阵的最大元素一定在主对角线上**。

**摄动法**：把半正定问题化为正定问题。$A$ 半正定时 $A+\varepsilon I$ 对任意 $\varepsilon>0$ 正定，先在 $A+\varepsilon I$ 上得结论再令 $\varepsilon\to0^+$。常用于证明半正定矩阵的性质，以及半正定情形下的 $Ax=0\iff x^TAx=0$。

## 5. 顺序主子式法：元素能算时用

对**实对称矩阵** $A$，

$$
A\text{ 正定}\iff\Delta_1>0,\ \Delta_2>0,\ \ldots,\ \Delta_n>0.
$$

使用注意：

- **必须逐个验算**。$\Delta_n=|A|>0$ 单独不成立，例如 $\operatorname{diag}(-1,-1)$；三阶及以上时只验前几个主子式同样不行。
- 只要求**顺序**主子式（左上角），不要求全部主子式；但反过来，$A$ 正定可推出所有主子式都大于零。
- 判"不正定"只需找到一个 $\Delta_k\le0$，不必算完。
- 含参数的题令各 $\Delta_k>0$ 取交集；动手前先确认 $A$ 是实对称矩阵，否则判别法不适用。

## 6. 分块矩阵：Schur 补

设 $A$ 为 $n$ 阶正定矩阵（故可逆），$D$ 为 $m$ 阶实对称矩阵，$B$ 为 $n\times m$ 矩阵，则

$$
M=\begin{pmatrix}A&B\\B^T&D\end{pmatrix}\text{ 正定}
\iff D-B^TA^{-1}B\text{ 正定}.
$$

$D-B^TA^{-1}B$ 称为 $A$ 的 **Schur 补**。两个高频特例：

$$
\begin{pmatrix}A&0\\0&D\end{pmatrix}\text{ 正定}\iff A,D\text{ 均正定};\qquad
\begin{pmatrix}A&I\\I&A^{-1}\end{pmatrix}\text{ 半正定，且秩为 }n.
$$

后者的 Schur 补为 $A^{-1}-A^{-1}AA^{-1}=0$，所以只能半正定，是"求行列式 / 判奇异"的常见考点。

## 7. 由正定推出其他矩阵正定

| 已知 | 结论 | 证明要点 |
| --- | --- | --- |
| $A$ 正定 | $A^{-1}$ 正定 | 特征值 $1/\lambda_i>0$；或 $A^{-1}=C^{-1}(C^{-1})^T$ |
| $A$ 正定 | $A^k$ 正定（$k$ 为正整数） | 特征值 $\lambda_i^k>0$ |
| $A$ 正定 | $A^*=\operatorname{adj}A$ 正定 | $A^*=\lvert A\rvert A^{-1}$，$\lvert A\rvert>0$ |
| $A,B$ 正定 | $A+B$ 正定 | $x^T(A+B)x=x^TAx+x^TBx>0$ |
| $A$ 正定，$C$ 可逆 | $C^TAC$ 正定 | 合同变换 |
| $A,B$ 正定且 $AB=BA$ | $AB$ 正定 | 此时 $AB$ 对称，且与 $B^{1/2}AB^{1/2}$ 相似，特征值全正 |
| $A$ 正定 | 存在唯一正定 $B$ 使 $B^2=A$ | $B=Q\Lambda^{1/2}Q^T$ |

注意 $A,B$ 正定**不能**推出 $AB$ 正定（$AB$ 甚至未必对称），也不能推出 $A-B$ 正定。

## 8. 对角占优判别法（放缩技巧的典型运用）

若实对称矩阵 $A$ 满足

$$
a_{ii}>\sum_{j\ne i}|a_{ij}|\qquad(i=1,\ldots,n),
$$

则 $A$ 正定。

证明：对 $x\ne0$，

$$
x^TAx=\sum_i a_{ii}x_i^2+2\sum_{i<j}a_{ij}x_ix_j
\ge\sum_i a_{ii}x_i^2-\sum_{i<j}|a_{ij}|(x_i^2+x_j^2)
=\sum_i\Big(a_{ii}-\sum_{j\ne i}|a_{ij}|\Big)x_i^2>0.
$$

关键一步是把 $2|a_{ij}||x_ix_j|$ 放缩成 $|a_{ij}|(x_i^2+x_j^2)$，把交叉项"摊"到对角线上汇合。凡 $x^TAx$ 中交叉项繁杂的题，都可以先试试这一招。

## 9. 典型例题

::: info 例 1：构造法证 $A^TA+I$ 正定
设 $A$ 为 $n$ 阶实矩阵，证明 $A^TA+I$ 正定。
:::

::: details 解析
$A^TA$ 是实对称矩阵。对任意 $x\ne0$，

$$
x^T(A^TA+I)x=x^TA^TAx+x^Tx=\lVert Ax\rVert^2+\lVert x\rVert^2>0,
$$

最后一步用到 $x\ne0$ 时 $\lVert x\rVert^2>0$。故 $A^TA+I$ 正定。

注意 $A^TA$ 本身只是**半正定**，加上 $I$ 才正定；仅当 $r(A)=n$ 时 $A^TA$ 才正定。
:::

::: info 例 2：非对称矩阵先用对称部分
证明 $A=\begin{pmatrix}1&1\\-2&3\end{pmatrix}$ 满足 $x^TAx>0\ (\forall x\ne0)$。
:::

::: details 解析
直接配方：

$$
x^TAx=x_1^2+x_1x_2-2x_1x_2+3x_2^2=x_1^2-x_1x_2+3x_2^2
=\Big(x_1-\frac12x_2\Big)^2+\frac{11}4x_2^2>0.
$$

也可先取对称部分

$$
B=\frac{A+A^T}{2}=\begin{pmatrix}1&-\frac12\\-\frac12&3\end{pmatrix},
$$

其顺序主子式为 $1>0$、$3-\frac14>0$，故 $B$ 正定；再由 $x^TAx=x^TBx>0$ 得证。由第 2 节的结论，此时 $A$ 必可逆。
:::

::: info 例 3：由 $A$ 正定推 $A^{-1}$、$A^*$ 正定
设 $A$ 为 $n$ 阶正定矩阵，证明 $A^{-1}$ 与 $A^*$ 均正定。
:::

::: details 解析
$A$ 正定，故特征值 $\lambda_i>0$，$\lvert A\rvert=\prod\lambda_i>0$。

$A^{-1}$ 仍对称，特征值为 $1/\lambda_i>0$，故正定。

$A^*=\lvert A\rvert A^{-1}$ 对称，特征值为 $\lvert A\rvert/\lambda_i>0$，故正定。

更一般地，$A$ 正定时 $kA\ (k>0)$、$A^{-1}$、$A^*$、$A^k$ 都正定。
:::

::: info 例 4：Schur 补判定分块矩阵
设 $A$ 为 $n$ 阶正定矩阵，$\alpha\in\mathbb R^n$，$b\in\mathbb R$。证明

$$
M=\begin{pmatrix}A&\alpha\\\alpha^T&b\end{pmatrix}
\text{ 正定}\iff b-\alpha^TA^{-1}\alpha>0.
$$

:::

::: details 解析
做分块消元，取可逆矩阵 $L=\begin{pmatrix}I&0\\-\alpha^TA^{-1}&1\end{pmatrix}$，则

$$
LML^T=
\begin{pmatrix}I&0\\-\alpha^TA^{-1}&1\end{pmatrix}
\begin{pmatrix}A&\alpha\\\alpha^T&b\end{pmatrix}
\begin{pmatrix}I&-A^{-1}\alpha\\0&1\end{pmatrix}
=\begin{pmatrix}A&0\\0&b-\alpha^TA^{-1}\alpha\end{pmatrix}.
$$

合同变换保持正定性，于是

$$
M\text{ 正定}\iff A\text{ 正定且 }b-\alpha^TA^{-1}\alpha>0.
$$

题设已给 $A$ 正定，故结论成立。这是"含一个参数的分块矩阵正定"的标准做法，也是第 6 节判据的推导。
:::

::: info 例 5：对角占优快速判定
证明 $A=\begin{pmatrix}4&1&2\\1&3&-1\\2&-1&5\end{pmatrix}$ 正定。
:::

::: details 解析
$A$ 实对称，且每行满足

$$
4>1+2,\qquad 3>1+1,\qquad 5>2+1.
$$

由对角占优判别法，$A$ 正定。

若改用顺序主子式，需算到三阶：$\Delta_1=4>0$，$\Delta_2=11>0$，$\Delta_3=35>0$。元素都不大时两种方法都可以，但对角占优省去高阶行列式。
:::

::: info 例 6：抽象条件推可逆
设 $A$ 为 $n$ 阶实矩阵，$A+A^T$ 正定。证明 $A$ 可逆。
:::

::: details 解析
设 $Ax=0$，则 $x^TAx=0$，$x^TA^Tx=(Ax)^Tx=0$，于是

$$
x^T(A+A^T)x=x^TAx+x^TA^Tx=0.
$$

而 $A+A^T$ 正定，只有 $x=0$ 时该二次型才为零，故 $x=0$。即 $Ax=0$ 只有零解，$A$ 可逆。

一般地 $x^T(A+A^T)x=2x^TAx$，所以 $A+A^T$ 正定 $\iff$ 对一切 $x\ne0$ 有 $x^TAx>0$——这正是第 2 节的对称化技巧。
:::

## 10. 易错结论速查

| 说法 | 判断与说明 |
| --- | --- |
| $\lvert A\rvert>0$ 就能判定 $A$ 正定 | 错，例如 $\operatorname{diag}(-1,-1)$；还要看各阶顺序主子式（或特征值） |
| 只验顺序主子式就能断定正定 | 错，前提是 $A$ 为**实对称**。反例 $A=\begin{pmatrix}1&-3\\0&1\end{pmatrix}$：顺序主子式为 $1,1$，但取 $x=(1,1)^T$ 得 $x^TAx=-1$ |
| $A,B$ 正定则 $AB$ 正定 | 错，$AB$ 一般不对称；需附加 $AB=BA$ |
| $A,B$ 正定则 $A-B$ 正定 | 错，例如 $A=2I$，$B=3I$ |
| $A$ 正定则对角元都大于零 | 对，取 $x=e_i$ 即得 |
| 正定矩阵的非对角元可以最大 | 错，最大元必在对角线上，且 $\lvert a_{ij}\rvert<\frac{a_{ii}+a_{jj}}2$ |
| $A^TA$ 一定正定 | 错，只保证半正定；$A$ 列满秩时才正定 |
| $A$ 半正定且 $x^TAx=0$ 则 $Ax=0$ | 对，半正定矩阵的零空间正是"使二次型取零"的向量全体 |
| 实对称且所有主子式 $>0$ 则正定 | 对，这比只验顺序主子式更强 |
| 正定矩阵必可逆 | 对，且 $\lvert A\rvert>0$、$A^{-1}$ 与 $A^*$ 仍正定 |

::: tip 解题顺序
先看题面能不能写出 $x^TAx$：能写就配方，出现 $C^TC$ 结构就写 $\lVert Cx\rVert^2$；抽象矩阵先对称化、再取特殊向量试出结论；元素给定且含参数就上顺序主子式；分块矩阵优先找 Schur 补。判"不正定"时，只需给出一个反例向量或一个非正的主子式。
:::

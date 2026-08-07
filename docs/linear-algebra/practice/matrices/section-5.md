<h1><center>综合训练与答题技巧</center></h1>

::: info 例 1
设三阶矩阵 $A$ 可逆，且 $A^{-1}=A+I$。求 $A^2+A$。
:::

::: details 解析
等式两边左乘 $A$：
$$
I=A^2+A.
$$
因此：
$$
A^2+A=I.
$$
:::

::: info 例 2
设 $A$ 为二阶矩阵，$|A|=3$，求 $|A^TA|$。
:::

::: details 解析
$$
|A^TA|=|A^T||A|=|A|^2=9.
$$
:::

::: info 例 3
若 $A^2=O$，化简 $(I-A)^{-1}$。
:::

::: details 解析
直接验证：
$$
(I-A)(I+A)=I-A^2=I.
$$
所以：
$$
(I-A)^{-1}=I+A.
$$
:::

::: info 例 4
设 $A$ 为三阶矩阵且 $r(A)=2$，判断 $A^*$ 是否为零矩阵，并求其秩。
:::

::: details 解析
这里 $r(A)=n-1$，所以 $A^*\ne O$，且：
$$
r(A^*)=1.
$$
:::

::: info 例 5
设 $A$ 为 $3\times4$ 矩阵，$B$ 为 $4\times2$ 矩阵。若 $r(A)=2$、$r(B)=2$，求 $r(AB)$ 的可能范围。
:::

::: details 解析
由：
$$
r(A)+r(B)-4\le r(AB)\le\min\{r(A),r(B)\},
$$
得：
$$
0\le r(AB)\le2.
$$
因此可能的秩为 $0,1,2$，仅凭已知条件不能唯一确定。
:::

::: info 例 6
设 $A,B$ 为同阶方阵，$AB=I$。证明 $BA=I$。
:::

::: details 解析
由 $AB=I$ 取行列式得：
$$
|A||B|=1,
$$
所以 $A,B$ 都可逆。由 $AB=I$ 可知 $B=A^{-1}$，于是：
$$
BA=A^{-1}A=I.
$$
:::

::: info 例 7
设三阶矩阵 $A$ 满足 $A^*=O$。$r(A)$ 的最大可能值是多少？
:::

::: details 解析
$A^*=O$ 表示所有二阶子式都为零，故：
$$
r(A)\le1.
$$
秩为 $1$ 的三阶矩阵确实存在，例如
$\operatorname{diag}(1,0,0)$，所以最大可能值为 $1$。
:::

::: info 例 8
设 $A,B,C$ 均可逆，解矩阵方程：
$$
AX^{-1}B=C.
$$
:::

::: details 解析
两边左乘 $A^{-1}$、右乘 $B^{-1}$：
$$
X^{-1}=A^{-1}CB^{-1}.
$$
再对两边求逆，注意乘积求逆时次序颠倒：
$$
X=(A^{-1}CB^{-1})^{-1}
=BC^{-1}A.
$$
:::

::: info 例 9
设 $A$ 为 $n$ 阶矩阵，且 $r(A)=1$。证明存在非零列向量
$\boldsymbol u,\boldsymbol v$ 使：
$$
A=\boldsymbol u\boldsymbol v^T.
$$
:::

::: details 解析
取 $A$ 的一个非零列 $\boldsymbol u$。因 $r(A)=1$，每一列都可写成 $\boldsymbol u$ 的倍数。若第 $j$ 列为 $v_j\boldsymbol u$，令
$\boldsymbol v=(v_1,\ldots,v_n)^T$，则：
$$
A=(v_1\boldsymbol u,\ldots,v_n\boldsymbol u)
=\boldsymbol u\boldsymbol v^T.
$$
:::

::: info 例 10
设 $A,B$ 为 $n$ 阶矩阵，且 $AB=O$、$A+B$ 可逆。证明：
$$
r(A)+r(B)=n.
$$
:::

::: details 解析
由 $AB=O$：
$$
r(A)+r(B)\le n.
$$
另一方面：
$$
n=r(A+B)\le r(A)+r(B).
$$
两式合并得到：
$$
r(A)+r(B)=n.
$$
:::

## 答题技巧

1. 运算前先写出矩阵尺寸。
2. 看到 $A^*$，优先联想 $AA^*=|A|I$。
3. 数值求逆优先用 $(A\mid I)\to(I\mid A^{-1})$。
4. 含参数求秩时，避免过早除以参数式。
5. 矩阵方程先看未知矩阵在左侧还是右侧，再决定乘逆矩阵的方向。

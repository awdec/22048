<h1><center>第一节 矩阵表示</center></h1>

::: info 例 1
写出二次型 $f=2x_1^2-4x_1x_2+3x_2^2$ 的矩阵。
:::

::: details 解析
交叉项系数 $-4$ 平分到对称位置，故：
$$
A=\begin{pmatrix}2&-2\\-2&3\end{pmatrix}.
$$
:::

::: info 例 2
若 $f=\boldsymbol x^TA\boldsymbol x$，作 $\boldsymbol x=C\boldsymbol y$，新二次型的矩阵是什么？
:::

::: details 解析
$$
f=(C\boldsymbol y)^TA(C\boldsymbol y)
=\boldsymbol y^TC^TAC\boldsymbol y,
$$
故新矩阵为 $C^TAC$。
:::

::: info 例 3
合同矩阵一定有相同特征值吗？
:::

::: details 解析
不一定。合同保持秩和正负惯性指数，不保持具体特征值；相似矩阵才保持特征值。
:::

::: info 例 4
写出对称矩阵
$$
A=\begin{pmatrix}1&2\\2&3\end{pmatrix}
$$
对应的二次型。
:::

::: details 解析
对角元给出平方项系数，非对角元在二次型中出现两次，因此：
$$
f(x_1,x_2)=x_1^2+4x_1x_2+3x_2^2.
$$
:::

::: info 例 5
求二次型
$$
f=(x_1+x_2)^2+(x_2+x_3)^2
$$
的矩阵与秩。
:::

::: details 解析
展开得：
$$
f=x_1^2+2x_1x_2+2x_2^2+2x_2x_3+x_3^2.
$$
对应矩阵为：
$$
A=\begin{pmatrix}
1&1&0\\
1&2&1\\
0&1&1
\end{pmatrix}.
$$
第二行等于第一、第三行之和，而第一、第三行线性无关，故：
$$
r(A)=2.
$$
:::

::: info 例 6
二次型
$f=x_1^2+2x_1x_2+2x_2^2$ 作变换
$$
\boldsymbol x=C\boldsymbol y,\qquad
C=\begin{pmatrix}1&1\\0&1\end{pmatrix}.
$$
求变换后的矩阵与二次型。
:::

::: details 解析
原矩阵为：
$$
A=\begin{pmatrix}1&1\\1&2\end{pmatrix}.
$$
新矩阵：
$$
C^TAC
=\begin{pmatrix}1&2\\2&5\end{pmatrix}.
$$
所以新二次型为：
$$
f=y_1^2+4y_1y_2+5y_2^2.
$$
:::

::: info 例 7
讨论二次型
$$
f=x_1^2+2ax_1x_2+x_2^2
$$
的秩。
:::

::: details 解析
对应矩阵：
$$
A=\begin{pmatrix}1&a\\a&1\end{pmatrix},
\qquad |A|=1-a^2.
$$
因此：

- $a\ne\pm1$ 时，$r(A)=2$；
- $a=\pm1$ 时，$A\ne O$ 且 $|A|=0$，故 $r(A)=1$。
:::

::: info 例 8
设 $B$ 是任意实方阵。证明
$\boldsymbol x^TB\boldsymbol x$ 只由 $B$ 的对称部分决定。
:::

::: details 解析
把 $B$ 分解为：
$$
B=\frac{B+B^T}{2}+\frac{B-B^T}{2}=S+K,
$$
其中 $S$ 对称、$K$ 反对称。标量
$\boldsymbol x^TK\boldsymbol x$ 的转置等于：
$$
(\boldsymbol x^TK\boldsymbol x)^T
=\boldsymbol x^TK^T\boldsymbol x
=-\boldsymbol x^TK\boldsymbol x,
$$
故它只能为零。因此：
$$
\boldsymbol x^TB\boldsymbol x
=\boldsymbol x^TS\boldsymbol x.
$$
:::

::: info 例 9
设 $B=C^TAC$，其中 $C$ 可逆。证明 $r(B)=r(A)$。
:::

::: details 解析
左乘、右乘可逆矩阵都不改变秩，所以：
$$
r(B)=r(C^TAC)=r(A).
$$
因此可逆线性变换不改变二次型的秩。
:::

::: info 例 10
已知二次型在变量变换
$\boldsymbol x=C\boldsymbol y$ 下由矩阵 $A$ 变为矩阵 $B$。若
$A,B$ 可逆，证明：
$$
|B|=|C|^2|A|.
$$
并说明 $|A|$ 与 $|B|$ 的符号关系。
:::

::: details 解析
由 $B=C^TAC$：
$$
|B|=|C^T||A||C|
=|C|^2|A|.
$$
因为 $C$ 可逆，$|C|^2>0$，所以 $|A|$ 与 $|B|$ 同号。合同变换一般不保持行列式的数值，但保持非零行列式的符号。
:::

<h1><center>第三节 正交变换与惯性定理</center></h1>

::: info 例 1
用正交变换化 $f=2x_1^2+2x_2^2+2x_1x_2$ 为标准形。
:::

::: details 解析
二次型矩阵为：
$$
A=\begin{pmatrix}2&1\\1&2\end{pmatrix}.
$$
其特征值为 $1,3$。取对应标准正交特征向量组成 $Q$，令 $\boldsymbol x=Q\boldsymbol y$，可得：
$$
f=y_1^2+3y_2^2.
$$
:::

::: info 例 2
两个三阶实对称矩阵的正、负惯性指数分别都是 $2,1$，它们一定合同吗？
:::

::: details 解析
一定。两者维数相同，正、负惯性指数相同，零惯性指数也相同，由惯性定理可知二者合同。
:::

::: info 例 3
实对称矩阵的特征值为 $2,0,-1,-3$，求惯性指数与秩。
:::

::: details 解析
正惯性指数 $p=1$，负惯性指数 $q=2$，零特征值个数为 $1$，故秩为 $p+q=3$。
:::

::: info 例 4
用正交变换化二次型
$$
f=2x_1^2+2x_2^2+2x_3^2+2x_2x_3
$$
为标准形。
:::

::: details 解析
矩阵为：
$$
A=\begin{pmatrix}
2&0&0\\
0&2&1\\
0&1&2
\end{pmatrix}.
$$
其特征值为 $2,1,3$，对应标准正交特征向量可取：
$$
(1,0,0)^T,\quad
\frac1{\sqrt2}(0,1,-1)^T,\quad
\frac1{\sqrt2}(0,1,1)^T.
$$
以它们为列组成正交矩阵 $Q$，令 $\boldsymbol x=Q\boldsymbol y$，得：
$$
f=2y_1^2+y_2^2+3y_3^2.
$$
:::

::: info 例 5
设正交矩阵 $Q$ 使 $Q^TAQ=\Lambda$。说明变量变换
$\boldsymbol x=Q\boldsymbol y$ 为什么保持向量长度。
:::

::: details 解析
因为 $Q^TQ=I$：
$$
\|\boldsymbol x\|^2
=\boldsymbol x^T\boldsymbol x
=\boldsymbol y^TQ^TQ\boldsymbol y
=\boldsymbol y^T\boldsymbol y
=\|\boldsymbol y\|^2.
$$
这也是正交变换在几何上只做旋转或反射的原因。
:::

::: info 例 6
判断矩阵
$$
A=\operatorname{diag}(2,-1,0),\qquad
B=\operatorname{diag}(5,-3,0)
$$
是否合同。
:::

::: details 解析
两矩阵的正惯性指数都为 $1$，负惯性指数都为 $1$，零惯性指数都为 $1$。由惯性定理，二者合同。

例如取：
$$
C=\operatorname{diag}\left(\sqrt{\frac52},\sqrt3,1\right),
$$
即可验证 $C^TAC=B$。
:::

::: info 例 7
举例说明合同矩阵不一定相似。
:::

::: details 解析
取：
$$
A=I_2,\qquad B=2I_2.
$$
令 $C=\sqrt2I_2$，则：
$$
C^TAC=2I_2=B,
$$
所以 $A,B$ 合同。但 $A$ 的特征值为 $1,1$，$B$ 的特征值为 $2,2$，特征值不同，故不相似。
:::

::: info 例 8
已知实对称矩阵 $A$ 与
$\operatorname{diag}(1,1,-1,-1,0)$ 合同。求 $A$ 的秩和惯性指数。
:::

::: details 解析
合同保持秩与惯性指数。因此：
$$
r(A)=4,\qquad p=2,\qquad q=2,
$$
零惯性指数为 $1$。
:::

::: info 例 9
讨论实对称矩阵
$$
A(a)=\begin{pmatrix}1&a\\a&1\end{pmatrix}
$$
在不同 $a$ 下的合同规范形。
:::

::: details 解析
特征值为：
$$
1+a,\qquad1-a.
$$
因此：

- $|a|<1$ 时，规范形为 $y_1^2+y_2^2$；
- $a=\pm1$ 时，规范形为 $y_1^2$；
- $|a|>1$ 时，规范形为 $y_1^2-y_2^2$。

规范形中的零项按需要补写为 $0y_i^2$。
:::

::: info 例 10
证明两个同阶实对称矩阵合同，当且仅当它们的正、负惯性指数分别相同。
:::

::: details 解析
必要性由惯性定理直接得到：合同变换不改变正、负惯性指数。

充分性方面，若 $A,B$ 具有相同的正、负惯性指数，则它们都可经可逆合同变换化为同一个规范形：
$$
J=\operatorname{diag}(I_p,-I_q,O).
$$
设 $C_1^TAC_1=J$、$C_2^TBC_2=J$。由这两个等式消去 $J$，可构造可逆矩阵 $C$ 使
$B=C^TAC$，故 $A,B$ 合同。
:::

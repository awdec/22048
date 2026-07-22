<style>
 body { font-family: "楷体" }
</style>

<h1><center>第六章总结：二次型</center></h1>

## 核心关系

$$
f=\boldsymbol x^TA\boldsymbol x,
\qquad A=A^T.
$$

作 $\boldsymbol x=C\boldsymbol y$ 后：

$$
f=\boldsymbol y^T(C^TAC)\boldsymbol y.
$$

## 三种形态

| 形态 | 表达式 |
| --- | --- |
| 一般二次型 | 含平方项与交叉项 |
| 标准形 | $d_1y_1^2+\cdots+d_ny_n^2$ |
| 规范形 | $z_1^2+\cdots+z_p^2-z_{p+1}^2-\cdots-z_{p+q}^2$ |

## 正定判定

对实对称矩阵 $A$：

$$
A\text{ 正定}
\Longleftrightarrow
\lambda_i>0\ (i=1,\ldots,n)
\Longleftrightarrow
\Delta_k>0\ (k=1,\ldots,n).
$$

## 高频易错点

1. 交叉项系数写入矩阵时要除以 $2$。
2. 标准形不唯一，规范形中的正负惯性指数唯一。
3. 合同保持惯性指数，不保持具体特征值。
4. 初等变换法化二次型要同步做行、列变换。
5. $|A|>0$ 不是正定的充分条件。
6. 求正交变换时，变换矩阵的列必须是标准正交特征向量。

::: tip 一句话总结
二次型的本质是实对称矩阵：化标准形就是消去交叉项，判断正定就是判断所有方向上的二次值是否为正。
:::

<style>
 body { font-family: "楷体" }
</style>

<h1><center>第四章总结：线性方程组</center></h1>

## 解的判定总表

| 条件 | 结论 |
| --- | --- |
| $r(A)<r(A,\boldsymbol b)$ | 无解 |
| $r(A)=r(A,\boldsymbol b)=n$ | 唯一解 |
| $r(A)=r(A,\boldsymbol b)<n$ | 无穷多解 |
| 齐次方程组 $r(A)=n$ | 只有零解 |
| 齐次方程组 $r(A)<n$ | 有非零解 |

## 解的结构

齐次方程组：

$$
\boldsymbol x=c_1\boldsymbol\xi_1+\cdots+c_{n-r}\boldsymbol\xi_{n-r}.
$$

非齐次方程组：

$$
\boldsymbol x=\boldsymbol\eta^*+
c_1\boldsymbol\xi_1+\cdots+c_{n-r}\boldsymbol\xi_{n-r}.
$$

## 高频易错点

1. “有解”只要求两个秩相等，不要求秩等于未知数个数。
2. 基础解系向量个数是 $n-r(A)$。
3. 非齐次解相减得到齐次解；两个非齐次解直接相加一般不是解。
4. 参数消元不得随意除以可能为零的式子。
5. 方程组同解与矩阵等价不是同一个概念；要结合行空间或解空间判断。

::: tip 一句话总结
线性方程组先比较秩判定，再由自由变量写结构；所有含参数题都围绕“关键主元是否为零”分类。
:::

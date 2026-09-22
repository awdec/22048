<h1><center>第三节 变限积分及其导数</center></h1>

## 1. 变限积分函数

若函数 $f(x)$ 在区间 $[a,b]$ 上连续，定义：

$$
F(x)=\int_a^x f(t)\,dt
$$

则 $F(x)$ 称为变上限积分函数。

其中：

- $t$ 是积分变量。
- $x$ 是积分上限，也是函数自变量。


## 2. 变限积分的导数

$$
\boxed{(\int_{\alpha(x)}^{\beta(x)} f(x,t)\,dt)'=\int_{\alpha(x)}^{\beta(x)}\frac{\partial f(x,t)}{\partial x}\,dt+f(x,\beta(x))\beta'(x)-f(x,\alpha(x))\alpha'(x)}
$$
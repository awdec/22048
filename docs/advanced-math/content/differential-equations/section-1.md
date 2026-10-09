<h1><center>第一节 一阶微分方程</center></h1>

## 1. 可分离变量微分方程

若一阶微分方程能写成：

$$
A(x)dx+B(y)dy=0
$$

则称为可分离变量微分方程。


积分：

$$
\int A(x)\,dx
+
\int B(y)\,dy
=0
$$

即可得到通解。

## 2. 一阶线性微分方程

$$
y'+P(x)y=Q(x)
$$

通解公式为：

$$
y
=
e^{-\int P(x)\,dx}
\left[
\int Q(x)e^{\int P(x)\,dx}\,dx+C
\right]
$$


## 3. 齐次方程

形如：

$$
\frac{dy}{dx}=F\left(\frac{y}{x}\right)
$$


令：

$$
u=\frac{y}{x}
$$

则：

$$
\frac{dy}{dx}=u+x\frac{du}{dx}
$$

代回原方程后，通常可化为可分离变量方程。


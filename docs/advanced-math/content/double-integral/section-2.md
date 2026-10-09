<h1><center>第二节 二重积分的计算</center></h1>

## 1. 极坐标下的计算

极坐标变换：

$$
x=r\cos\theta,\quad y=r\sin\theta
$$

面积微元：

$$
d\sigma=r\,dr\,d\theta
$$

因此：

$$
\iint_D f(x,y)\,d\sigma
=
\iint_{D'}
f(r\cos\theta,r\sin\theta)\,r\,dr\,d\theta
$$

若区域可表示为：

$$
D':
\quad
\alpha\le\theta\le\beta,\quad
r_1(\theta)\le r\le r_2(\theta)
$$

则：

$$
\iint_D f(x,y)\,d\sigma
=
\int_\alpha^\beta
\left[
\int_{r_1(\theta)}^{r_2(\theta)}
f(r\cos\theta,r\sin\theta)\,r\,dr
\right]d\theta
$$

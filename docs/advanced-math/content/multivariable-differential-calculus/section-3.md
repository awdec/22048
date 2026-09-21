<h1><center>第三节 多元函数微分的基本理论和计算</center></h1>

## 1. 全微分的概念


$$
\lim_{(\Delta x,\Delta y)\to(0,0)}\dfrac{f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)-f_x(x_0,y_0)h-f_y(x_0,y_0)k}{\sqrt{\Delta x^2+\Delta y^2}}=0
$$

则称函数 $z=f(x,y)$ 在点 $(x,y)$ 处可微。

全微分为：

$$
dz=\frac{\partial f}{\partial x}\,dx+\frac{\partial f}{\partial y}\,dy
$$


## 2. 可微的判定

### 2.1 必要条件

$f_x,f_y$ 存在且连续 $\Rightarrow$ $f_x,f_y$ 存在，$f_x$ 连续或 $f_y$ 连续 $\Rightarrow$ 可微

### 2.2 定义式

$dz=\lim_{\Delta x\to 0,\Delta y\to 0}\frac{f(x_0+\Delta x,y_0+\Delta y)-f(x_0,y_0)}{\rho}$ 极限存在 $\Rightarrow$ 可微


## 3. 可微、连续、偏导存在的关系

多元函数中三者关系非常重要：

$$
\text{可微}
\Rightarrow
\text{连续}
$$

$$
\text{可微}
\Rightarrow
f_x,\ f_y\text{ 存在}
$$

$$
f_x,\ f_y\text{ 连续}
\Rightarrow
\text{可微}
\Rightarrow
\text{连续}
$$

$$
可微 \nRightarrow 偏导数连续
$$

$$
f_x,\ f_y\text{ 存在}
\nRightarrow
\text{可微}
$$

$$
f_x,\ f_y\text{ 存在}
\nRightarrow
\text{连续}
$$


## 4. 复合函数求导

### 4.1 一阶
设：

$$
z=f(u,v)
$$

则：

$$
\frac{\partial z}{\partial x}
=
\frac{\partial f}{\partial u}
\frac{\partial u}{\partial x}
+
\frac{\partial f}{\partial v}
\frac{\partial v}{\partial x}
$$



### 4.2 二阶

设：

$$
z=f(u,v)
$$


则：

$$
\frac{\partial^2 z}{\partial x^2}
=
\left[\frac{\partial^2 f}{\partial u^2} \frac{\partial u}{\partial x}
+
\frac{\partial^2 f}{\partial u\partial v}\frac{\partial v}{\partial x}\right] \frac{\partial u}{\partial x}

+
\left[\frac{\partial^2 f}{\partial v\partial u}\frac{\partial u}{\partial x}
+
\frac{\partial^2 f}{\partial v^2}\frac{\partial v}{\partial x}\right] \frac{\partial v}{\partial x}

+
\frac{\partial f}{\partial u}\frac{\partial^2 u}{\partial x^2}
+
\frac{\partial f}{\partial v}\frac{\partial^2 v}{\partial x^2}
$$



$$
\frac{\partial^2 z}{\partial x\partial y}
=
\frac{\partial^2 f}{\partial u^2}\frac{\partial u}{\partial y}\frac{\partial u}{\partial x}
+
\frac{\partial^2 f}{\partial u\partial v} \frac{\partial u}{\partial y}\frac{\partial v}{\partial x}

+
\frac{\partial^2 f}{\partial v\partial u} \frac{\partial v}{\partial y}\frac{\partial u}{\partial x}
+
\frac{\partial^2 f}{\partial v^2}\frac{\partial v}{\partial y}\frac{\partial v}{\partial x}

+
\frac{\partial f}{\partial u}\frac{\partial^2 u}{\partial x\partial y}
+
\frac{\partial f}{\partial v}\frac{\partial^2 v}{\partial x\partial y}
$$

## 5. 隐函数求导

若：

$$
F(x,y,z)=0
$$

确定 $z=z(x,y)$，且 $F_z\ne0$，则：

$$
\frac{\partial z}{\partial x}
=
-
\frac{F_x}{F_z}
$$

$$
\frac{\partial z}{\partial y}
=
-
\frac{F_y}{F_z}
$$
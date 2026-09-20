<h1><center>第三节 多元函数微分的基本理论和计算</center></h1>

## 1. 全微分的概念

设：

$$
z=f(x,y)
$$

当 $x,y$ 分别有增量 $\Delta x,\Delta y$ 时，函数增量为：

$$
\Delta z
=
f(x+\Delta x,y+\Delta y)-f(x,y)
$$

若：

$$
\Delta z
=
A\Delta x+B\Delta y+o(\rho)
$$

其中：

$$
\rho=\sqrt{(\Delta x)^2+(\Delta y)^2}
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

::: warning 易错
偏导存在只是沿坐标轴两个方向的变化率存在；可微要求函数在所有方向上都能被同一个线性表达式近似。
:::

## 4. 全微分近似计算

若 $z=f(x,y)$ 在点 $(x_0,y_0)$ 处可微，则：

$$
\Delta z\approx dz
$$

即：

$$
f(x_0+\Delta x,y_0+\Delta y)
\approx
f(x_0,y_0)
+
f_x(x_0,y_0)\Delta x
+
f_y(x_0,y_0)\Delta y
$$

这常用于估算复杂函数值。

## 5. 复合函数求导

### 5.1 两个中间变量依赖一个自变量

设：

$$
z=f(u,v),\quad u=u(x),\quad v=v(x)
$$

则：

$$
\frac{dz}{dx}
=
\frac{\partial f}{\partial u}\frac{du}{dx}
+
\frac{\partial f}{\partial v}\frac{dv}{dx}
$$

### 5.2 两个中间变量依赖两个自变量

设：

$$
z=f(u,v)
$$

其中：

$$
u=u(x,y),\quad v=v(x,y)
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

$$
\frac{\partial z}{\partial y}
=
\frac{\partial f}{\partial u}
\frac{\partial u}{\partial y}
+
\frac{\partial f}{\partial v}
\frac{\partial v}{\partial y}
$$


### 5.3 二阶复合偏导

设：

$$
z=f(u,v)
$$

其中：

$$
u=u(x,y),\quad v=v(x,y)
$$

已经有：

$$
\frac{\partial z}{\partial x}
=
\frac{\partial f}{\partial u}\frac{\partial u}{\partial x}
+
\frac{\partial f}{\partial v}\frac{\partial v}{\partial x}
$$

继续对 $x$ 求偏导：

$$
\frac{\partial^2 z}{\partial x^2}
=
\frac{\partial^2 f}{\partial u^2}\left(\frac{\partial u}{\partial x}\right)^2
+
2\frac{\partial^2 f}{\partial u\partial v}\frac{\partial u}{\partial x}\frac{\partial v}{\partial x}
+
\frac{\partial^2 f}{\partial v^2}\left(\frac{\partial v}{\partial x}\right)^2
+
\frac{\partial f}{\partial u}\frac{\partial^2 u}{\partial x^2}
+
\frac{\partial f}{\partial v}\frac{\partial^2 v}{\partial x^2}
$$

继续对 $y$ 求偏导：

$$
\frac{\partial^2 z}{\partial x\partial y}
=
\frac{\partial^2 f}{\partial u^2}\frac{\partial u}{\partial x}\frac{\partial u}{\partial y}
+
\frac{\partial^2 f}{\partial u\partial v}\left(\frac{\partial u}{\partial x}\frac{\partial v}{\partial y}+\frac{\partial v}{\partial x}\frac{\partial u}{\partial y}\right)
+
\frac{\partial^2 f}{\partial v^2}\frac{\partial v}{\partial x}\frac{\partial v}{\partial y}
+
\frac{\partial f}{\partial u}\frac{\partial^2 u}{\partial x\partial y}
+
\frac{\partial f}{\partial v}\frac{\partial^2 v}{\partial x\partial y}
$$

## 6. 隐函数求导

### 6.1 一元隐函数

若：

$$
F(x,y)=0
$$

确定 $y=y(x)$，且 $F_y\ne0$，则：

$$
\frac{dy}{dx}
=
-
\frac{F_x}{F_y}
$$

### 6.2 二元隐函数

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

### 6.3 隐函数求导的直接做法

也可以对方程两边直接求偏导。

对 $x$ 求偏导时，把 $y$ 看作常数，但 $z$ 看作 $x,y$ 的函数，所以：

$$
\frac{\partial z}{\partial x}=z_x
$$

对 $y$ 求偏导时，把 $x$ 看作常数，但 $z$ 看作 $x,y$ 的函数，所以：

$$
\frac{\partial z}{\partial y}=z_y
$$

::: warning 易错
隐函数求导时，不能把 $z$ 当常数。若 $z=z(x,y)$，对 $x$ 求偏导时含 $z$ 的项要乘 $z_x$。
:::
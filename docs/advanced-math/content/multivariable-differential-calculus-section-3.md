<style>
 body {
  font-family: "楷体"
}
</style>

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

此时：

$$
A=f_x(x,y),\quad B=f_y(x,y)
$$

全微分为：

$$
dz=f_x(x,y)\,dx+f_y(x,y)\,dy
$$

::: tip 重点
全微分是多元函数的线性近似，作用类似一元函数中的 $dy=f'(x)dx$。
:::

## 2. 可微的充分条件

若 $f_x(x,y)$ 与 $f_y(x,y)$ 在点 $(x_0,y_0)$ 的某邻域内存在，并且在 $(x_0,y_0)$ 处连续，则 $f(x,y)$ 在 $(x_0,y_0)$ 处可微。

简记为：

$$
f_x,\ f_y\text{ 连续}
\Rightarrow
f\text{ 可微}
$$

这是考试中最常用的可微判定。

## 3. 可微、连续、偏导存在的关系

多元函数中三者关系非常重要：

$$
\text{可微}
\Rightarrow
\text{连续}
$$

并且：

$$
\text{可微}
\Rightarrow
f_x,\ f_y\text{ 存在}
$$

但反过来一般不成立：

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

如果偏导数在某点附近连续，则可推出可微：

$$
f_x,\ f_y\text{ 连续}
\Rightarrow
\text{可微}
\Rightarrow
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

## 5. 切平面与法线（拓展理解）

设曲面：

$$
z=f(x,y)
$$

在点：

$$
P_0(x_0,y_0,z_0)
$$

处可微，其中：

$$
z_0=f(x_0,y_0)
$$

则曲面在该点处的切平面方程为：

$$
z-z_0
=
f_x(x_0,y_0)(x-x_0)
+
f_y(x_0,y_0)(y-y_0)
$$

法向量可取：

$$
\left(f_x(x_0,y_0),\ f_y(x_0,y_0),\ -1\right)
$$

法线方程可写为：

$$
\frac{x-x_0}{f_x(x_0,y_0)}
=
\frac{y-y_0}{f_y(x_0,y_0)}
=
\frac{z-z_0}{-1}
$$

若某个分母为 $0$，则对应变量保持等于该点坐标。

::: tip 说明
切平面和法线不是数学二多元函数微分学的主线考点。这里作为全微分几何意义的拓展理解，重点仍应放在偏导、全微分、复合函数求导、隐函数求导和极值最值。
:::

## 6. 复合函数求导

### 6.1 一个中间变量依赖一个自变量

设：

$$
z=f(u),\quad u=u(x)
$$

则：

$$
\frac{dz}{dx}
=
\frac{df}{du}\frac{du}{dx}
$$

这是普通链式法则。

### 6.2 两个中间变量依赖一个自变量

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

也可写为：

$$
\frac{dz}{dx}=f_u u'+f_v v'
$$

### 6.3 两个中间变量依赖两个自变量

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

::: tip 口诀
复合函数求导：外层偏导乘内层偏导，同一路径相乘，不同路径相加。
:::

### 6.4 二阶复合偏导

数学二中，复合函数二阶偏导也很常见。

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
z_x=f_u u_x+f_v v_x
$$

继续对 $x$ 求偏导：

$$
z_{xx}
=
f_{uu}u_x^2
+
2f_{uv}u_xv_x
+
f_{vv}v_x^2
+
f_u u_{xx}
+
f_v v_{xx}
$$

继续对 $y$ 求偏导：

$$
z_{xy}
=
f_{uu}u_xu_y
+
f_{uv}(u_xv_y+v_xu_y)
+
f_{vv}v_xv_y
+
f_u u_{xy}
+
f_v v_{xy}
$$

::: warning 易错
二阶复合偏导不要只对 $u_x,v_x$ 求导，$f_u,f_v$ 本身也是复合函数，也要继续按链式法则求导。
:::

## 7. 隐函数求导

### 7.1 一元隐函数

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

### 7.2 二元隐函数

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

### 7.3 隐函数求导的直接做法

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

## 8. 全微分形式的不变性

若：

$$
z=f(u,v)
$$

则无论 $u,v$ 是自变量，还是 $u,v$ 又依赖于其他变量，全微分形式都是：

$$
dz=f_u\,du+f_v\,dv
$$

这称为全微分形式的不变性。

它常用于简化复合函数求导问题。

## 9. 本节小结

| 内容 | 关键点 |
| --- | --- |
| 全微分 | $dz=f_xdx+f_ydy$ |
| 可微充分条件 | 偏导数在邻域内存在且在该点连续 |
| 可微关系 | 可微推出连续和偏导存在 |
| 切平面与法线（拓展） | 由全微分和法向量得到 |
| 复合函数求导 | 沿路径相乘，再把路径相加 |
| 隐函数求导 | 公式法或两边直接求导 |
| 全微分近似 | 用线性表达式近似函数增量 |

::: tip 复习建议
本节是多元函数微分学的计算核心。复合函数和隐函数求导一定要画清变量依赖关系，先判断谁依赖谁，再决定乘哪一项、加哪一项。
:::

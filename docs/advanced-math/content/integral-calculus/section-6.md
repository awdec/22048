<h1><center>第六节 定积分的应用</center></h1>

## 1. 平面图形的面积

$y$ 和 $x$ 同理。

### 1.1 直角坐标下：关于 x 积分

若区域由：

$$
y=f(x),\qquad y=g(x)
$$

以及直线 $x=a,x=b$ 围成，且：

$$
f(x)\ge g(x)
$$

则面积为：

$$
A=\int_a^b f(x)-g(x)\,dx
$$

### 1.2 参数方程下的面积

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，则：

$$
A=\int y\,dx
=
\int_{\alpha}^{\beta} y(t)x'(t)\,dt
$$

### 1.3 极坐标下的面积

若曲线由极坐标方程：

$$
r=r(\theta)
$$

给出，则从 $\theta=\alpha$ 到 $\theta=\beta$ 扫过的面积为：

$$
A=\frac12\int_{\alpha}^{\beta} r^2(\theta)\,d\theta
$$

## 2. 旋转体体积

### 2.1 绕 x 轴旋转

若曲线 $y=f(x)$、$x=a$、$x=b$ 与 $x$ 轴围成区域，绕 $x$ 轴旋转，则体积为：

$$
V=\pi\int_a^b f^2(x)\,dx
$$

### 2.2 参数方程形式

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，绕 $x$ 轴旋转，则体积为：

$$
V=\pi\int_\alpha^\beta y^2(t)\,x'(t)\,dt
$$

## 3. 旋转体的侧面积

旋转体侧面积的微元是：

$$
dS=2\pi\cdot r\cdot ds
$$

其中 $r$ 是点到旋转轴的距离（旋转半径），$ds$ 是弧长微元。

### 3.1 绕 x 轴旋转

若曲线 $y=f(x)\ge0$ 在 $[a,b]$ 上光滑，绕 $x$ 轴旋转，则侧面积为：

$$
S=2\pi\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx
$$

### 3.2 参数方程形式

若曲线由参数方程：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

给出，且 $y(t)\ge0$，绕 $x$ 轴旋转，则侧面积为：

$$
S=2\pi\int_\alpha^\beta y(t)\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt
$$

### 3.3 极坐标形式

若曲线由极坐标方程：

$$
r=r(\theta)
$$

给出，绕极轴（$x$ 轴）旋转，则侧面积为：

$$
S=2\pi\int_\alpha^\beta r(\theta)\sin\theta\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

其中 $r(\theta)\sin\theta$ 是点到极轴的距离，即旋转半径。

## 5. 平面曲线弧长

### 5.1 显函数形式

若曲线：

$$
y=f(x)
$$

在 $[a,b]$ 上光滑，则弧长为：

$$
s=\int_a^b \sqrt{1+[f'(x)]^2}\,dx
$$

### 5.2 参数方程形式

若：

$$
\begin{cases}
x=x(t)\\
y=y(t)
\end{cases}
$$

则弧长为：

$$
s=\int_\alpha^\beta
\sqrt{[x'(t)]^2+[y'(t)]^2}\,dt
$$

### 5.3 极坐标形式

若：

$$
r=r(\theta)
$$

则弧长为：

$$
s=\int_\alpha^\beta
\sqrt{r^2(\theta)+[r'(\theta)]^2}\,d\theta
$$

## 6. 质心与形心

均匀平面薄片的质心与形心重合。设薄片由曲线 $y=f(x)$（上）、$y=g(x)$（下）及直线 $x=a,x=b$ 围成，且 $f(x)\ge g(x)$。

### 6.1 平面图形的形心

形心坐标为：

$$
\bar x=\frac{M_y}{A},\qquad
\bar y=\frac{M_x}{A}
$$

即：

$$
\bar x=\frac{\displaystyle\int_a^b x\,[f(x)-g(x)]\,dx}{\displaystyle\int_a^b [f(x)-g(x)]\,dx}
$$

$$
\bar y=\frac{\displaystyle\frac12\int_a^b [f^2(x)-g^2(x)]\,dx}{\displaystyle\int_a^b [f(x)-g(x)]\,dx}
$$

### 6.2 曲线的形心

若曲线 $y=f(x)$ 在 $[a,b]$ 上光滑，弧长 $s=\displaystyle\int_a^b\sqrt{1+[f'(x)]^2}\,dx$，则曲线的形心为：

$$
\bar x=\frac{1}{s}\int_a^b x\sqrt{1+[f'(x)]^2}\,dx
$$

$$
\bar y=\frac{1}{s}\int_a^b f(x)\sqrt{1+[f'(x)]^2}\,dx
$$

## 7 帕普斯（Pappus）定理

面积为 $A$ 的平面图形，绕不穿过它自身的轴旋转一周，所得旋转体体积为：

$$
V=2\pi d\,A
$$

其中 $d$ 是形心到旋转轴的距离。
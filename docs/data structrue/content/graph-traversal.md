<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第三节 图的遍历</center></h1>

## 1. 图遍历的含义

图的遍历是指从图中某个顶点出发，按照一定规则访问图中的所有顶点，并且每个顶点只访问一次。

图遍历常见方式：

- 深度优先搜索 DFS
- 广度优先搜索 BFS

图与树不同，图中可能存在回路。

因此遍历图时必须使用访问标记数组：

```c
bool visited[MaxVertexNum];
```

如果没有 `visited` 数组，可能会重复访问顶点，甚至在环中无限循环。

## 2. 深度优先搜索

深度优先搜索简称 DFS。

DFS 的思想是：从一个顶点出发，访问它的某个未访问邻接点，然后继续沿这个邻接点深入，直到不能继续深入，再回退。

它类似树的先根遍历。

### 2.1 DFS 基本过程

从顶点 $v$ 出发：

1. 访问顶点 $v$。
2. 标记 $v$ 已访问。
3. 依次检查 $v$ 的邻接点。
4. 若某个邻接点未访问，则从该邻接点继续 DFS。

::: details 点击展开代码

```c
void DFS(Graph G, int v) {
    visit(v);
    visited[v] = true;

    for (int w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w)) {
        if (!visited[w]) {
            DFS(G, w);
        }
    }
}
```

:::

其中：

- `FirstNeighbor(G, v)` 表示顶点 `v` 的第一个邻接点。
- `NextNeighbor(G, v, w)` 表示 `v` 中相对于 `w` 的下一个邻接点。

### 2.2 非连通图的 DFS

若图不连通，从某个顶点出发无法访问所有顶点。

因此需要对每个顶点检查一次：

::: details 点击展开代码

```c
void DFSTraverse(Graph G) {
    for (int v = 0; v < G.vexnum; v++) {
        visited[v] = false;
    }

    for (int v = 0; v < G.vexnum; v++) {
        if (!visited[v]) {
            DFS(G, v);
        }
    }
}
```

:::

对于无向图，调用 DFS 的次数等于连通分量个数。

### 2.3 DFS 生成树和生成森林

对连通图进行 DFS，会得到一棵 DFS 生成树。

对非连通图进行 DFS，会得到 DFS 生成森林。

DFS 生成树与邻接点访问顺序有关，因此通常不唯一。

## 3. 广度优先搜索

广度优先搜索简称 BFS。

BFS 的思想是：先访问离起点最近的一层顶点，再访问下一层顶点。

它类似树的层次遍历。

BFS 通常借助队列实现。

### 3.1 BFS 基本过程

从顶点 $v$ 出发：

1. 访问顶点 $v$。
2. 标记 $v$ 已访问。
3. 将 $v$ 入队。
4. 队列非空时，取出队头顶点。
5. 依次检查该顶点的所有邻接点。
6. 若邻接点未访问，则访问、标记并入队。

::: details 点击展开代码

```c
void BFS(Graph G, int v) {
    visit(v);
    visited[v] = true;
    EnQueue(Q, v);

    while (!QueueEmpty(Q)) {
        DeQueue(Q, &v);

        for (int w = FirstNeighbor(G, v); w >= 0; w = NextNeighbor(G, v, w)) {
            if (!visited[w]) {
                visit(w);
                visited[w] = true;
                EnQueue(Q, w);
            }
        }
    }
}
```

:::

### 3.2 非连通图的 BFS

与 DFS 类似，非连通图也需要从每个未访问顶点重新开始 BFS。

::: details 点击展开代码

```c
void BFSTraverse(Graph G) {
    for (int v = 0; v < G.vexnum; v++) {
        visited[v] = false;
    }

    InitQueue(Q);

    for (int v = 0; v < G.vexnum; v++) {
        if (!visited[v]) {
            BFS(G, v);
        }
    }
}
```

:::

对于无向图，调用 BFS 的次数也等于连通分量个数。

### 3.3 BFS 生成树和生成森林

对连通图进行 BFS，会得到一棵 BFS 生成树。

对非连通图进行 BFS，会得到 BFS 生成森林。

BFS 生成树体现了从起点出发按层扩展的过程。

## 4. BFS 求无权图最短路径

在无权图中，BFS 可以求从起点到其他顶点的最短路径长度。

原因是 BFS 按层访问：

- 第 $1$ 层顶点距离起点为 $1$。
- 第 $2$ 层顶点距离起点为 $2$。
- 第 $k$ 层顶点距离起点为 $k$。

可以用 `d` 数组记录距离：

::: details 点击展开代码

```c
void BFSMinDistance(Graph G, int u) {
    for (int i = 0; i < G.vexnum; i++) {
        d[i] = INFINITY;
        path[i] = -1;
    }

    d[u] = 0;
    visited[u] = true;
    EnQueue(Q, u);

    while (!QueueEmpty(Q)) {
        DeQueue(Q, &u);

        for (int w = FirstNeighbor(G, u); w >= 0; w = NextNeighbor(G, u, w)) {
            if (!visited[w]) {
                d[w] = d[u] + 1;
                path[w] = u;
                visited[w] = true;
                EnQueue(Q, w);
            }
        }
    }
}
```

:::

其中：

- `d[w]` 表示从起点到 `w` 的最短路径长度。
- `path[w]` 表示 `w` 的前驱顶点。

## 5. 遍历复杂度

DFS 和 BFS 的时间复杂度取决于图的存储结构。

| 存储结构 | 时间复杂度 | 原因 |
| --- | --- | --- |
| 邻接矩阵 | $O(n^2)$ | 每个顶点都要扫描一行矩阵 |
| 邻接表 | $O(n + e)$ | 每个顶点访问一次，每条边检查一次或两次 |

空间复杂度：

DFS 主要来自递归栈，最坏为：

$$
O(n)
$$

BFS 主要来自队列，最坏为：

$$
O(n)
$$

## 6. DFS 与 BFS 比较

| 项目 | DFS | BFS |
| --- | --- | --- |
| 思想 | 一条路走到底再回退 | 按层向外扩展 |
| 辅助结构 | 栈或递归栈 | 队列 |
| 类似树遍历 | 先根遍历 | 层次遍历 |
| 生成树 | DFS 生成树 | BFS 生成树 |
| 典型应用 | 连通性、拓扑排序、寻找路径 | 无权图最短路径、层次扩展 |

## 7. 遍历序列不唯一

DFS 和 BFS 的遍历序列通常不唯一。

原因是一个顶点可能有多个邻接点，先访问哪个邻接点会影响最终序列。

做 408 题时：

- 若给出邻接矩阵，通常按顶点编号从小到大扫描。
- 若给出邻接表，通常按边表中的顺序访问。
- 若题目明确规定访问顺序，必须按题目规定。

## 8. 408 常考点

### 8.1 visited 数组

图中可能有环，遍历必须使用 `visited` 数组。

树中不存在环，因此树的遍历通常不需要访问标记。

### 8.2 非连通图遍历

从一个顶点出发，只能访问它所在连通分量中的顶点。

要遍历整个非连通图，必须从其他未访问顶点继续开始遍历。

### 8.3 BFS 可以求无权图最短路径

BFS 第一次访问某顶点时得到的距离，就是从起点到该顶点的最短路径长度。

这里的最短路径指边数最少。

### 8.4 复杂度看存储结构

邻接矩阵：

$$
O(n^2)
$$

邻接表：

$$
O(n + e)
$$

不要只背 DFS、BFS 的复杂度，要结合存储结构判断。

### 8.5 生成树不唯一

DFS 生成树和 BFS 生成树都可能不唯一。

邻接点访问顺序不同，生成树就可能不同。

## 9. 小结

| 内容 | 重点 |
| --- | --- |
| DFS | 深度优先，递归或栈 |
| BFS | 广度优先，队列 |
| visited | 防止重复访问 |
| 非连通图 | 需要多次调用遍历函数 |
| BFS 最短路径 | 适用于无权图 |
| 复杂度 | 邻接矩阵 $O(n^2)$，邻接表 $O(n + e)$ |

图的遍历要抓住两个动作：访问当前顶点，继续寻找未访问邻接点。

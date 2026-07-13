<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-队列-应用</center></h1>

## 5.7 队列的应用

队列的核心特点是先进先出，适合处理“先到先服务”的问题。

408 中常见的队列应用主要包括：

- 树的层次遍历
- 图的广度优先搜索
- 队列在计算机系统中的应用
- 双端队列与受限双端队列

## 5.7.1 树的层次遍历

树的层次遍历按照从上到下、从左到右的顺序访问结点。

基本思想：

- 根结点入队。
- 队列非空时，队头结点出队并访问。
- 将该结点的孩子按从左到右的顺序依次入队。
- 重复以上过程，直到队列为空。

队列中保存的是“已经发现但还没有访问其孩子的结点”。

### 二叉树层次遍历

实现逻辑：访问一个结点后，若它有左孩子，则左孩子入队；若它有右孩子，则右孩子入队。

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define MaxSize 100

typedef char ElemType;

typedef struct BiTNode {
    ElemType data;
    struct BiTNode *lchild;
    struct BiTNode *rchild;
} BiTNode, *BiTree;

typedef struct {
    BiTree data[MaxSize];
    int front;
    int rear;
} TreeQueue;

void InitTreeQueue(TreeQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}

bool TreeQueueEmpty(TreeQueue Q) {
    return Q.front == Q.rear;
}

bool EnTreeQueue(TreeQueue *Q, BiTree node) {
    if ((Q->rear + 1) % MaxSize == Q->front) {
        return false;
    }

    Q->data[Q->rear] = node;
    Q->rear = (Q->rear + 1) % MaxSize;
    return true;
}

bool DeTreeQueue(TreeQueue *Q, BiTree *node) {
    if (TreeQueueEmpty(*Q)) {
        return false;
    }

    *node = Q->data[Q->front];
    Q->front = (Q->front + 1) % MaxSize;
    return true;
}

void LevelOrder(BiTree T) {
    if (T == NULL) {
        return;
    }

    TreeQueue Q;
    InitTreeQueue(&Q);
    EnTreeQueue(&Q, T);

    while (!TreeQueueEmpty(Q)) {
        BiTree node;
        DeTreeQueue(&Q, &node);

        printf("%c ", node->data);

        if (node->lchild != NULL) {
            EnTreeQueue(&Q, node->lchild);
        }

        if (node->rchild != NULL) {
            EnTreeQueue(&Q, node->rchild);
        }
    }
}
```

:::

### 层次遍历序列特点

层次遍历得到的序列可以反映树的层级关系，但通常不能唯一确定一棵二叉树。

如果只给出层次遍历序列，一般无法确定每个结点的左右孩子关系。

## 5.7.2 图的广度优先搜索

图的广度优先搜索简称 BFS。

BFS 从某个顶点出发，先访问距离起点为 1 的顶点，再访问距离起点为 2 的顶点，以此类推。

基本思想：

- 起点入队并标记为已访问。
- 队列非空时，队头顶点出队。
- 依次检查该顶点的所有邻接点。
- 若邻接点未访问，则访问并入队。
- 重复以上过程，直到队列为空。

队列中保存的是“已经访问但还没有扩展邻接点的顶点”。

### 邻接矩阵 BFS

实现逻辑：用 `visited` 数组避免重复访问。每出队一个顶点，就扫描邻接矩阵中对应的一行。

::: details 点击展开代码

```c
#define VertexNum 100

typedef struct {
    int edge[VertexNum][VertexNum];
    int vexnum;
} MGraph;

typedef struct {
    int data[VertexNum];
    int front;
    int rear;
} IntQueue;

void InitIntQueue(IntQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}

bool IntQueueEmpty(IntQueue Q) {
    return Q.front == Q.rear;
}

bool EnIntQueue(IntQueue *Q, int x) {
    if ((Q->rear + 1) % VertexNum == Q->front) {
        return false;
    }

    Q->data[Q->rear] = x;
    Q->rear = (Q->rear + 1) % VertexNum;
    return true;
}

bool DeIntQueue(IntQueue *Q, int *x) {
    if (IntQueueEmpty(*Q)) {
        return false;
    }

    *x = Q->data[Q->front];
    Q->front = (Q->front + 1) % VertexNum;
    return true;
}

void BFS(MGraph G, int start) {
    bool visited[VertexNum] = {false};
    IntQueue Q;
    InitIntQueue(&Q);

    printf("%d ", start);
    visited[start] = true;
    EnIntQueue(&Q, start);

    while (!IntQueueEmpty(Q)) {
        int v;
        DeIntQueue(&Q, &v);

        for (int w = 0; w < G.vexnum; w++) {
            if (G.edge[v][w] != 0 && !visited[w]) {
                printf("%d ", w);
                visited[w] = true;
                EnIntQueue(&Q, w);
            }
        }
    }
}
```

:::

### BFS 与最短路径

在无权图中，BFS 可以求从起点到其他顶点的最短路径长度。

原因是 BFS 按距离从小到大逐层扩展：

- 第一次访问到某个顶点时，得到的路径一定是从起点到该顶点的最短路径。
- 若要记录具体路径，可以额外维护 `dist[]` 和 `path[]` 数组。

::: details 点击展开代码

```c
void BFSMinDistance(MGraph G, int start, int dist[], int path[]) {
    bool visited[VertexNum] = {false};
    IntQueue Q;
    InitIntQueue(&Q);

    for (int i = 0; i < G.vexnum; i++) {
        dist[i] = -1;
        path[i] = -1;
    }

    visited[start] = true;
    dist[start] = 0;
    EnIntQueue(&Q, start);

    while (!IntQueueEmpty(Q)) {
        int v;
        DeIntQueue(&Q, &v);

        for (int w = 0; w < G.vexnum; w++) {
            if (G.edge[v][w] != 0 && !visited[w]) {
                visited[w] = true;
                dist[w] = dist[v] + 1;
                path[w] = v;
                EnIntQueue(&Q, w);
            }
        }
    }
}
```

:::

## 5.7.3 队列在计算机系统中的应用

队列常用于管理需要按到达顺序处理的任务。

常见场景：

- CPU 先来先服务调度。
- 打印机任务队列。
- 键盘输入缓冲区。
- 消息队列。
- 网络数据包缓冲。
- 生产者与消费者模型中的缓冲区。

这些场景的共同特点是：

- 请求按时间先后到达。
- 先到的请求通常应该先被处理。
- 处理速度和到达速度可能不同，因此需要缓冲。

## 5.7.4 双端队列的应用

双端队列允许在队头和队尾两端进行插入和删除。

常见题型不是直接要求写双端队列代码，而是判断某个输入输出序列是否可能由受限双端队列产生。

### 输入受限双端队列

输入受限双端队列只允许从一端输入，但允许从两端输出。

特点：

- 入队端固定。
- 出队可以从队头或队尾进行。

### 输出受限双端队列

输出受限双端队列允许从两端输入，但只允许从一端输出。

特点：

- 入队可以选择队头或队尾。
- 出队端固定。

做这类题时，不要只看元素个数，还要根据端点限制模拟操作顺序。

## 5.7.5 队列与栈在遍历中的区别

| 结构 | 遍历方式 | 访问特点 |
| --- | --- | --- |
| 栈 | DFS | 一条路先走到底，再回退 |
| 队列 | BFS | 先访问近的结点，再访问远的结点 |

树和图的遍历中，栈与队列的区别非常典型：

- 递归 DFS 使用系统调用栈。
- 非递归 DFS 通常使用显式栈。
- BFS 通常使用队列。
- 二叉树层次遍历本质上是 BFS。

## 5.7.6 408 常考点

### BFS 空间复杂度

BFS 的辅助空间主要来自队列。

在最坏情况下，队列中可能保存大量顶点，因此图的 BFS 空间复杂度通常为：

$$
O(|V|)
$$

其中 $|V|$ 是图中顶点数。

### BFS 时间复杂度

图的 BFS 时间复杂度与存储结构有关：

| 存储结构 | 时间复杂度 |
| --- | --- |
| 邻接矩阵 | $O(|V|^2)$ |
| 邻接表 | $O(|V| + |E|)$ |

其中 $|E|$ 是图中边数。

### 层次遍历与 BFS

二叉树的层次遍历可以看作 BFS 在树上的特殊形式。

树中不存在环，因此不需要像图的 BFS 那样用 `visited` 数组判断是否重复访问。

### 队列适合解决的问题特征

看到下面关键词，可以优先联想到队列：

- 先进先出
- 先到先服务
- 按层访问
- 广度优先
- 缓冲区
- 任务排队


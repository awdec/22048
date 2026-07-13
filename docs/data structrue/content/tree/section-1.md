<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第一节 树与二叉树</center></h1>

## 1. 树的基本概念

树是 $n$ 个结点的有限集合。

当 $n = 0$ 时，称为空树。

当 $n > 0$ 时，树满足：

- 有且仅有一个根结点。
- 除根结点外，其余结点可以分成若干个互不相交的有限集合，每个集合本身又是一棵树，称为根的子树。

树是一种一对多的逻辑结构。

## 1.1 常用术语

### 结点的度

结点拥有的子树个数称为该结点的度。

### 树的度

树中各结点度的最大值称为树的度。

### 叶结点

度为 $0$ 的结点称为叶结点，也称终端结点。

### 分支结点

度不为 $0$ 的结点称为分支结点，也称非终端结点。

### 孩子、双亲、兄弟

某结点子树的根称为该结点的孩子。

该结点称为孩子的双亲。

具有同一个双亲的结点互称为兄弟。

### 祖先与子孙

从根结点到某结点路径上的所有结点，称为该结点的祖先。

以某结点为根的子树中的所有结点，称为该结点的子孙。

### 结点层次

根结点为第 $1$ 层，根的孩子为第 $2$ 层，依此类推。

### 树的高度

树中结点的最大层次称为树的高度或深度。

## 2. 二叉树

二叉树是 $n$ 个结点的有限集合。

当 $n = 0$ 时，称为空二叉树。

当 $n > 0$ 时，二叉树由一个根结点和两棵互不相交的左子树、右子树组成，左子树和右子树也分别是二叉树。

二叉树特点：

- 每个结点最多有两棵子树。
- 子树有左右之分。
- 即使某结点只有一棵子树，也要区分它是左子树还是右子树。

二叉树不是度为 $2$ 的树。

因为二叉树可以为空，每个结点最多两个孩子；而度为 $2$ 的树要求树中至少存在一个度为 $2$ 的结点，并且普通树的孩子没有左右次序。

## 3. 特殊二叉树

### 满二叉树

深度为 $h$，且含有：

$$
2^h - 1
$$

个结点的二叉树称为满二叉树。

满二叉树特点：

- 每一层结点数都达到最大。
- 叶结点全部在最下一层。
- 除叶结点外，每个结点都有两个孩子。

### 完全二叉树

深度为 $h$，有 $n$ 个结点的二叉树，当且仅当其每个结点都与深度为 $h$ 的满二叉树中编号 $1$ 到 $n$ 的结点一一对应，称为完全二叉树。

完全二叉树特点：

- 叶结点只可能出现在最下两层。
- 最下一层的叶结点都集中在左侧。
- 若某结点只有一个孩子，则一定只有左孩子。
- 编号后不存在“空缺后又出现结点”的情况。

### 二叉排序树

二叉排序树又称二叉查找树。

它满足：

- 左子树上所有结点关键字小于根结点关键字。
- 右子树上所有结点关键字大于根结点关键字。
- 左、右子树也分别是二叉排序树。

二叉排序树的中序遍历序列是递增有序序列。

### 平衡二叉树

平衡二叉树又称 AVL 树。

它是特殊的二叉排序树，并要求任意结点左右子树高度差的绝对值不超过 $1$。

## 4. 二叉树的性质

### 性质 1

二叉树第 $i$ 层最多有：

$$
2^{i - 1}
$$

个结点。

其中 $i \ge 1$。

### 性质 2

深度为 $h$ 的二叉树最多有：

$$
2^h - 1
$$

个结点。

### 性质 3

对任意一棵非空二叉树，若叶结点数为 $n_0$，度为 $2$ 的结点数为 $n_2$，则：

$$
n_0 = n_2 + 1
$$

证明思路：

设度为 $0$、$1$、$2$ 的结点数分别为 $n_0$、$n_1$、$n_2$。

总结点数：

$$
n = n_0 + n_1 + n_2
$$

除根结点外，每个结点都有一条来自双亲的分支，因此分支数为：

$$
n - 1
$$

从结点度数统计分支数：

$$
n - 1 = n_1 + 2n_2
$$

联立可得：

$$
n_0 = n_2 + 1
$$

### 性质 4

具有 $n$ 个结点的完全二叉树高度为：

$$
\lfloor \log_2 n \rfloor + 1
$$

也可以写作：

$$
\lceil \log_2(n + 1) \rceil
$$

### 性质 5

对于有 $n$ 个结点的完全二叉树，按层序从 $1$ 开始编号。

对编号为 $i$ 的结点：

- 若 $i > 1$，则其双亲编号为 $\lfloor i / 2 \rfloor$。
- 若 $2i \le n$，则其左孩子编号为 $2i$；否则无左孩子。
- 若 $2i + 1 \le n$，则其右孩子编号为 $2i + 1$；否则无右孩子。
- 若 $i \le \lfloor n / 2 \rfloor$，则该结点为分支结点。
- 若 $i > \lfloor n / 2 \rfloor$，则该结点为叶结点。

完全二叉树中叶结点个数为：

$$
\lceil n / 2 \rceil
$$

## 5. 二叉树的存储结构

二叉树常见存储方式有：

- 顺序存储
- 链式存储

## 5.1 顺序存储

顺序存储用数组保存二叉树结点。

通常按照完全二叉树的层序编号存储。

对于完全二叉树，顺序存储非常适合，可以利用下标快速计算双亲和孩子。

但对于一般二叉树，若强行按完全二叉树形式存储，可能产生大量空位置，造成空间浪费。

### 顺序存储下标关系

若数组下标从 $1$ 开始：

::: details 点击展开代码

```c
int Parent(int i) {
    return i / 2;
}

int LeftChild(int i) {
    return 2 * i;
}

int RightChild(int i) {
    return 2 * i + 1;
}
```

:::

## 5.2 链式存储

二叉树更常用链式存储。

每个结点包含：

- 数据域
- 左孩子指针
- 右孩子指针

### 二叉链表定义

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef char ElemType;

typedef struct BiTNode {
    ElemType data;
    struct BiTNode *lchild;
    struct BiTNode *rchild;
} BiTNode, *BiTree;
```

:::

### 三叉链表定义

三叉链表在二叉链表基础上增加双亲指针，便于查找某结点的双亲。

::: details 点击展开代码

```c
typedef struct TriTNode {
    ElemType data;
    struct TriTNode *lchild;
    struct TriTNode *rchild;
    struct TriTNode *parent;
} TriTNode, *TriTree;
```

:::

## 6. 二叉树遍历

遍历是指按某种次序访问二叉树中的每个结点，且每个结点只访问一次。

二叉树常见遍历方式：

- 先序遍历
- 中序遍历
- 后序遍历
- 层次遍历

## 6.1 先序遍历

先序遍历顺序：

1. 访问根结点。
2. 先序遍历左子树。
3. 先序遍历右子树。

记作：

```txt
根 左 右
```

### 递归实现

::: details 点击展开代码

```c
void PreOrder(BiTree T) {
    if (T == NULL) {
        return;
    }

    printf("%c ", T->data);
    PreOrder(T->lchild);
    PreOrder(T->rchild);
}
```

:::

## 6.2 中序遍历

中序遍历顺序：

1. 中序遍历左子树。
2. 访问根结点。
3. 中序遍历右子树。

记作：

```txt
左 根 右
```

### 递归实现

::: details 点击展开代码

```c
void InOrder(BiTree T) {
    if (T == NULL) {
        return;
    }

    InOrder(T->lchild);
    printf("%c ", T->data);
    InOrder(T->rchild);
}
```

:::

## 6.3 后序遍历

后序遍历顺序：

1. 后序遍历左子树。
2. 后序遍历右子树。
3. 访问根结点。

记作：

```txt
左 右 根
```

### 递归实现

::: details 点击展开代码

```c
void PostOrder(BiTree T) {
    if (T == NULL) {
        return;
    }

    PostOrder(T->lchild);
    PostOrder(T->rchild);
    printf("%c ", T->data);
}
```

:::

## 6.4 层次遍历

层次遍历按照从上到下、从左到右的顺序访问结点。

层次遍历需要借助队列。

基本思想：

1. 根结点入队。
2. 队列非空时，队头结点出队并访问。
3. 若该结点有左孩子，则左孩子入队。
4. 若该结点有右孩子，则右孩子入队。
5. 重复以上过程，直到队列为空。

### 队列实现

::: details 点击展开代码

```c
#define MaxSize 100

typedef struct {
    BiTree data[MaxSize];
    int front;
    int rear;
} TreeQueue;

void InitQueue(TreeQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}

bool QueueEmpty(TreeQueue Q) {
    return Q.front == Q.rear;
}

bool EnQueue(TreeQueue *Q, BiTree T) {
    if ((Q->rear + 1) % MaxSize == Q->front) {
        return false;
    }

    Q->data[Q->rear] = T;
    Q->rear = (Q->rear + 1) % MaxSize;
    return true;
}

bool DeQueue(TreeQueue *Q, BiTree *T) {
    if (QueueEmpty(*Q)) {
        return false;
    }

    *T = Q->data[Q->front];
    Q->front = (Q->front + 1) % MaxSize;
    return true;
}
```

:::

### 层次遍历实现

::: details 点击展开代码

```c
void LevelOrder(BiTree T) {
    if (T == NULL) {
        return;
    }

    TreeQueue Q;
    InitQueue(&Q);
    EnQueue(&Q, T);

    while (!QueueEmpty(Q)) {
        BiTree p;
        DeQueue(&Q, &p);

        printf("%c ", p->data);

        if (p->lchild != NULL) {
            EnQueue(&Q, p->lchild);
        }

        if (p->rchild != NULL) {
            EnQueue(&Q, p->rchild);
        }
    }
}
```

:::

## 7. 非递归遍历

递归遍历本质上借助系统调用栈。

若显式使用栈，也可以实现非递归遍历。

## 7.1 非递归中序遍历

实现逻辑：沿左孩子一路入栈；走到空后，弹栈访问结点，再转向右子树。

::: details 点击展开代码

```c
typedef struct {
    BiTree data[MaxSize];
    int top;
} TreeStack;

void InitStack(TreeStack *S) {
    S->top = -1;
}

bool StackEmpty(TreeStack S) {
    return S.top == -1;
}

bool Push(TreeStack *S, BiTree T) {
    if (S->top == MaxSize - 1) {
        return false;
    }

    S->data[++S->top] = T;
    return true;
}

bool Pop(TreeStack *S, BiTree *T) {
    if (StackEmpty(*S)) {
        return false;
    }

    *T = S->data[S->top--];
    return true;
}

void InOrderNonRecursive(BiTree T) {
    TreeStack S;
    InitStack(&S);

    BiTree p = T;

    while (p != NULL || !StackEmpty(S)) {
        if (p != NULL) {
            Push(&S, p);
            p = p->lchild;
        } else {
            Pop(&S, &p);
            printf("%c ", p->data);
            p = p->rchild;
        }
    }
}
```

:::

## 7.2 非递归先序遍历

实现逻辑：先访问当前结点并入栈，然后沿左子树深入；左子树走完后弹栈转向右子树。

::: details 点击展开代码

```c
void PreOrderNonRecursive(BiTree T) {
    TreeStack S;
    InitStack(&S);

    BiTree p = T;

    while (p != NULL || !StackEmpty(S)) {
        if (p != NULL) {
            printf("%c ", p->data);
            Push(&S, p);
            p = p->lchild;
        } else {
            Pop(&S, &p);
            p = p->rchild;
        }
    }
}
```

:::

## 8. 二叉树的建立与销毁

常见建树方式是使用带空标记的先序序列。

例如：

```txt
ABD##E##CF###
```

其中 `#` 表示空树。

### 先序建树

::: details 点击展开代码

```c
BiTree CreateBiTreeByPreOrder(const char str[], int *index) {
    char ch = str[*index];
    (*index)++;

    if (ch == '\0' || ch == '#') {
        return NULL;
    }

    BiTNode *node = (BiTNode *)malloc(sizeof(BiTNode));
    if (node == NULL) {
        return NULL;
    }

    node->data = ch;
    node->lchild = CreateBiTreeByPreOrder(str, index);
    node->rchild = CreateBiTreeByPreOrder(str, index);

    return node;
}
```

:::

### 销毁二叉树

销毁二叉树通常采用后序遍历思想：先释放左子树，再释放右子树，最后释放根结点。

::: details 点击展开代码

```c
void DestroyBiTree(BiTree *T) {
    if (*T == NULL) {
        return;
    }

    DestroyBiTree(&(*T)->lchild);
    DestroyBiTree(&(*T)->rchild);
    free(*T);
    *T = NULL;
}
```

:::

## 9. 二叉树常见递归算法

二叉树很多题都可以用递归解决。

关键是抓住：

- 空树如何处理。
- 当前根结点如何处理。
- 左子树和右子树结果如何合并。

### 求结点个数

::: details 点击展开代码

```c
int CountNodes(BiTree T) {
    if (T == NULL) {
        return 0;
    }

    return CountNodes(T->lchild) + CountNodes(T->rchild) + 1;
}
```

:::

### 求叶结点个数

::: details 点击展开代码

```c
int CountLeaves(BiTree T) {
    if (T == NULL) {
        return 0;
    }

    if (T->lchild == NULL && T->rchild == NULL) {
        return 1;
    }

    return CountLeaves(T->lchild) + CountLeaves(T->rchild);
}
```

:::

### 求二叉树高度

::: details 点击展开代码

```c
int Height(BiTree T) {
    if (T == NULL) {
        return 0;
    }

    int leftHeight = Height(T->lchild);
    int rightHeight = Height(T->rchild);

    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
}
```

:::

### 交换左右子树

::: details 点击展开代码

```c
void SwapChildren(BiTree T) {
    if (T == NULL) {
        return;
    }

    BiTree temp = T->lchild;
    T->lchild = T->rchild;
    T->rchild = temp;

    SwapChildren(T->lchild);
    SwapChildren(T->rchild);
}
```

:::

## 10. 由遍历序列构造二叉树

遍历序列能否唯一确定二叉树，是 408 常考点。

### 先序 + 中序

先序遍历可以确定根结点。

中序遍历可以根据根结点划分左子树和右子树。

因此，先序序列和中序序列可以唯一确定一棵二叉树。

### 后序 + 中序

后序遍历的最后一个结点是根结点。

中序遍历可以根据根结点划分左子树和右子树。

因此，后序序列和中序序列可以唯一确定一棵二叉树。

### 层序 + 中序

层序遍历可以从前往后找到当前子树的根结点。

中序遍历可以划分左右子树。

因此，层序序列和中序序列也可以唯一确定一棵二叉树。

### 先序 + 后序

一般情况下，先序序列和后序序列不能唯一确定一棵二叉树。

原因是无法确定某些结点的唯一孩子到底是左孩子还是右孩子。

例如只有两个结点：

```txt
先序：A B
后序：B A
```

可能是：

```txt
  A
 /
B
```

也可能是：

```txt
A
 \
  B
```

## 11. 线索二叉树

在含有 $n$ 个结点的二叉链表中，共有 $2n$ 个指针域。

其中非空指针有 $n - 1$ 个，因为除根结点外，每个结点都有一个来自双亲的指针。

因此空指针个数为：

$$
2n - (n - 1) = n + 1
$$

线索二叉树利用这些空指针域存放遍历序列中的前驱和后继信息。

## 11.1 线索结点定义

为了区分指针域中保存的是孩子指针还是线索，需要增加标志位：

- $ltag = 0$：`lchild` 指向左孩子。
- $ltag = 1$：`lchild` 指向前驱线索。
- $rtag = 0$：`rchild` 指向右孩子。
- $rtag = 1$：`rchild` 指向后继线索。

::: details 点击展开代码

```c
typedef struct ThreadNode {
    ElemType data;
    struct ThreadNode *lchild;
    struct ThreadNode *rchild;
    int ltag;
    int rtag;
} ThreadNode, *ThreadTree;
```

:::

## 11.2 中序线索化

中序线索化就是在中序遍历过程中，把空的左指针改为中序前驱线索，把空的右指针改为中序后继线索。

实现时通常用 `pre` 指针记录刚刚访问过的结点。

::: details 点击展开代码

```c
void InThread(ThreadTree T, ThreadTree *pre) {
    if (T == NULL) {
        return;
    }

    InThread(T->lchild, pre);

    if (T->lchild == NULL) {
        T->lchild = *pre;
        T->ltag = 1;
    } else {
        T->ltag = 0;
    }

    if (*pre != NULL && (*pre)->rchild == NULL) {
        (*pre)->rchild = T;
        (*pre)->rtag = 1;
    }

    *pre = T;

    InThread(T->rchild, pre);
}
```

:::

## 11.3 中序线索二叉树找后继

若结点 `p` 有右子树，则其中序后继是右子树中最左下的结点。

若结点 `p` 没有右子树，则 `rchild` 指向的就是后继线索。

::: details 点击展开代码

```c
ThreadNode *FirstNode(ThreadNode *p) {
    while (p != NULL && p->ltag == 0) {
        p = p->lchild;
    }

    return p;
}

ThreadNode *NextNode(ThreadNode *p) {
    if (p->rtag == 0) {
        return FirstNode(p->rchild);
    }

    return p->rchild;
}
```

:::

## 12. 树、森林与二叉树的转换

普通树中，一个结点可以有多个孩子。

二叉树中，一个结点最多有两个孩子。

可以用“左孩子右兄弟”表示法把树或森林转换成二叉树。

## 12.1 树转换为二叉树

转换规则：

1. 每个结点的第一个孩子作为它在二叉树中的左孩子。
2. 每个结点的右兄弟作为它在二叉树中的右孩子。

口诀：

```txt
左孩子，右兄弟
```

## 12.2 森林转换为二叉树

森林由若干棵互不相交的树组成。

转换规则：

1. 先把每棵树转换为二叉树。
2. 第一棵树的根作为整个二叉树的根。
3. 第二棵树的根作为第一棵树根的右孩子。
4. 第三棵树的根作为第二棵树根的右孩子，依次连接。

## 12.3 二叉树还原为森林

还原规则：

1. 若某结点是左孩子关系，还原为父子关系。
2. 若某结点是右孩子关系，还原为兄弟关系。
3. 根结点右链上的各结点分别是森林中各棵树的根。

## 13. 哈夫曼树

哈夫曼树又称最优二叉树。

给定 $n$ 个带权叶结点，构造一棵二叉树，使带权路径长度 WPL 最小，这棵树称为哈夫曼树。

## 13.1 路径长度与带权路径长度

从树中一个结点到另一个结点之间的分支数称为路径长度。

叶结点的权值乘以根到该叶结点的路径长度，称为该叶结点的带权路径长度。

整棵树的带权路径长度为所有叶结点带权路径长度之和：

$$
WPL = \sum_{i=1}^{n} w_i l_i
$$

其中：

- $w_i$ 是第 $i$ 个叶结点的权值。
- $l_i$ 是根到第 $i$ 个叶结点的路径长度。

## 13.2 哈夫曼树构造

构造方法：

1. 将每个权值看作一棵只有根结点的树。
2. 每次选取权值最小的两棵树作为左右子树，构造一棵新树。
3. 新树根结点权值等于左右子树根结点权值之和。
4. 将新树加入森林。
5. 重复以上过程，直到森林中只剩一棵树。

哈夫曼树不唯一，但最小 WPL 相同。

## 13.3 哈夫曼编码

哈夫曼编码是一种可变长度前缀编码。

一般约定：

- 左分支编码为 $0$。
- 右分支编码为 $1$。

从根结点到某字符叶结点路径上的 $0$、$1$ 序列，就是该字符的哈夫曼编码。

哈夫曼编码特点：

- 权值越大的字符，编码越短。
- 权值越小的字符，编码越长。
- 任一字符的编码都不是另一个字符编码的前缀。

因此哈夫曼编码可以避免译码歧义。

## 14. 408 常考点

### 14.1 二叉树不是度为 2 的树

二叉树每个结点最多两个孩子，并且区分左右孩子。

度为 $2$ 的树至少有一个结点有两个孩子，且普通树的孩子不区分左右。

### 14.2 n0 = n2 + 1

任意非空二叉树都满足：

$$
n_0 = n_2 + 1
$$

这是二叉树性质中最常用的公式之一。

### 14.3 完全二叉树编号

完全二叉树按层序从 $1$ 开始编号后：

- 双亲：$\lfloor i / 2 \rfloor$
- 左孩子：$2i$
- 右孩子：$2i + 1$

这组公式只直接适用于完全二叉树的顺序编号。

### 14.4 遍历序列构造

能唯一确定二叉树的组合：

- 先序 + 中序
- 后序 + 中序
- 层序 + 中序

一般不能唯一确定二叉树的组合：

- 先序 + 后序

### 14.5 后序遍历适合释放二叉树

释放二叉树时，应先释放左右子树，再释放根结点。

这正是后序遍历思想。

### 14.6 线索二叉树利用空指针

含 $n$ 个结点的二叉链表有 $n + 1$ 个空指针域。

线索二叉树用这些空指针保存遍历序列中的前驱或后继。

### 14.7 哈夫曼树结点数

若哈夫曼树有 $n$ 个叶结点，则总共有：

$$
2n - 1
$$

个结点。

因为哈夫曼树中没有度为 $1$ 的结点，且满足 $n_0 = n_2 + 1$。

## 15. 小结

| 内容 | 重点 |
| --- | --- |
| 二叉树定义 | 每个结点最多两个孩子，且分左右 |
| 满二叉树 | 每层结点数都达到最大 |
| 完全二叉树 | 最后一层从左到右连续 |
| 二叉树性质 | $n_0 = n_2 + 1$ |
| 顺序存储 | 适合完全二叉树 |
| 链式存储 | 一般二叉树常用 |
| 遍历 | 先序、中序、后序、层序 |
| 构造 | 中序通常用于划分左右子树 |
| 线索二叉树 | 利用空指针保存前驱后继 |
| 哈夫曼树 | WPL 最小 |

二叉树章节的主线是：性质公式、遍历算法、遍历序列构造、线索化和哈夫曼树。

## 差异

1. $n=0$ 时为空树
2. 双亲是指父节点
3. 若两个结点的双亲位于同一层，则他们互为堂兄弟
4. 根深度为 1
5. 结点的度为儿子的数量，树的度为树中所有结点的最大值
6. 树的路径长度，一般是根到每个结点的路径长度之和。某结点的路径长度一般指到根的路径长度。
7. 顺序存储 $i,2i,2i+1$。
8. 

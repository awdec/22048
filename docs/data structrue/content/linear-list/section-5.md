<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-队列</center></h1>

## 5. 队列

队列是只允许在一端插入、另一端删除的线性表。

允许插入的一端称为队尾，允许删除的一端称为队头。向队列中插入元素称为入队，从队列中删除元素称为出队。

队列的特点是：

- 先进先出，简称 FIFO。
- 入队只能在队尾进行。
- 出队只能在队头进行。
- 队列是一种受限的线性表。

## 5.1 队列的基本操作

队列的基本操作是从逻辑结构角度定义的，具体实现可以采用顺序存储或链式存储。

### 初始化

- `InitQueue(&Q)`：初始化一个空队列 `Q`。

### 销毁

- `DestroyQueue(&Q)`：销毁队列，并释放其占用的存储空间。

### 清空

- `ClearQueue(&Q)`：清空队列中的所有元素，但队列本身仍然存在。

### 判空

- `QueueEmpty(Q)`：判断队列是否为空。

### 求长度

- `QueueLength(Q)`：求队列中元素个数。

### 入队

- `EnQueue(&Q, e)`：将元素 `e` 插入队尾。

### 出队

- `DeQueue(&Q, &e)`：删除队头元素，并用 `e` 返回被删除的元素。

### 读队头元素

- `GetHead(Q, &e)`：读取队头元素，但不删除该元素。

## 5.2 顺序队列

顺序队列用一组地址连续的存储单元存放队列元素。若只让队尾指针不断后移，数组前端空出的空间无法重新利用，容易产生“假溢出”。

解决假溢出的常用方法是循环队列：把数组看作首尾相接的环形空间。

下面实现约定：

- `front` 指向队头元素。
- `rear` 指向队尾元素的下一个位置。
- `front == rear` 表示队空。
- `(rear + 1) % MaxSize == front` 表示队满。
- 为了区分队空和队满，会牺牲一个数组单元。

### 公共定义

定义逻辑：循环队列用数组保存元素，用 `front` 和 `rear` 分别记录队头位置和队尾后一个位置。

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define MaxSize 50

typedef int ElemType;

typedef struct {
    ElemType data[MaxSize];
    int front;
    int rear;
} SqQueue;
```

:::

### 初始化

实现逻辑：空队列中没有有效元素，让 `front` 与 `rear` 指向同一位置。

::: details 点击展开代码

```c
void InitSqQueue(SqQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}
```

:::

### 判空与判满

实现逻辑：循环队列中 `front == rear` 表示队空；队尾再前进一步就追上队头时表示队满。

::: details 点击展开代码

```c
bool SqQueueEmpty(SqQueue Q) {
    return Q.front == Q.rear;
}

bool SqQueueFull(SqQueue Q) {
    return (Q.rear + 1) % MaxSize == Q.front;
}
```

:::

### 求长度

实现逻辑：队尾位置减去队头位置后对 `MaxSize` 取模。

::: details 点击展开代码

```c
int SqQueueLength(SqQueue Q) {
    return (Q.rear - Q.front + MaxSize) % MaxSize;
}
```

:::

### 入队

实现逻辑：先判断队列是否已满；若未满，把元素写入 `rear` 所指位置，再让 `rear` 循环后移。

::: details 点击展开代码

```c
bool EnSqQueue(SqQueue *Q, ElemType e) {
    if (SqQueueFull(*Q)) {
        return false;
    }

    Q->data[Q->rear] = e;
    Q->rear = (Q->rear + 1) % MaxSize;
    return true;
}
```

:::

### 出队

实现逻辑：先判断队列是否为空；若非空，取出 `front` 所指元素，再让 `front` 循环后移。

::: details 点击展开代码

```c
bool DeSqQueue(SqQueue *Q, ElemType *e) {
    if (SqQueueEmpty(*Q)) {
        return false;
    }

    *e = Q->data[Q->front];
    Q->front = (Q->front + 1) % MaxSize;
    return true;
}
```

:::

### 读队头元素

实现逻辑：读取 `data[front]`，但不改变 `front`。

::: details 点击展开代码

```c
bool GetHeadSqQueue(SqQueue Q, ElemType *e) {
    if (SqQueueEmpty(Q)) {
        return false;
    }

    *e = Q.data[Q.front];
    return true;
}
```

:::

### 清空与销毁

实现逻辑：静态数组不需要手动释放空间，让 `front` 与 `rear` 重新相等即可。

::: details 点击展开代码

```c
void ClearSqQueue(SqQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}

void DestroySqQueue(SqQueue *Q) {
    Q->front = 0;
    Q->rear = 0;
}
```

:::

## 5.3 循环队列的其他判满方法

循环队列区分队空和队满有三种常见方式。

### 牺牲一个存储单元

这是最常见的 408 写法。

- 队空：`front == rear`
- 队满：`(rear + 1) % MaxSize == front`
- 队列长度：`(rear - front + MaxSize) % MaxSize`
- 最多保存 `MaxSize - 1` 个元素

### 增设 size 变量

用 `size` 记录当前元素个数。

- 队空：`size == 0`
- 队满：`size == MaxSize`
- 队列长度：`size`

这种方法不浪费存储单元，但需要在入队和出队时维护 `size`。

### 增设 tag 变量

用 `tag` 标记最近一次操作。

- `front == rear && tag == 0` 表示队空。
- `front == rear && tag == 1` 表示队满。

其中 `tag == 1` 表示最近一次操作是入队，`tag == 0` 表示最近一次操作是出队。

## 5.4 链队列

链队列采用链式存储实现。通常使用带头结点的单链表，并设置队头指针 `front` 和队尾指针 `rear`。

链队列特点：

- 不需要连续存储空间。
- 入队在链表尾部进行。
- 出队在链表头部进行。
- 队空时 `front` 和 `rear` 都指向头结点。

### 公共定义

定义逻辑：链队列结点包含数据域和后继指针；`front` 指向头结点，`rear` 指向队尾结点。

::: details 点击展开代码

```c
#include <stdlib.h>

typedef struct QueueNode {
    ElemType data;
    struct QueueNode *next;
} QueueNode;

typedef struct {
    QueueNode *front;
    QueueNode *rear;
    int length;
} LinkQueue;
```

:::

### 初始化

实现逻辑：创建一个头结点，队空时队头指针和队尾指针都指向头结点。

::: details 点击展开代码

```c
bool InitLinkQueue(LinkQueue *Q) {
    QueueNode *head = (QueueNode *)malloc(sizeof(QueueNode));
    if (head == NULL) {
        return false;
    }

    head->next = NULL;
    Q->front = head;
    Q->rear = head;
    Q->length = 0;
    return true;
}
```

:::

### 判空

::: details 点击展开代码

```c
bool LinkQueueEmpty(LinkQueue Q) {
    return Q.front == Q.rear;
}
```

:::

### 入队

实现逻辑：新结点插入到当前队尾之后，再让 `rear` 指向新结点。

::: details 点击展开代码

```c
bool EnLinkQueue(LinkQueue *Q, ElemType e) {
    QueueNode *node = (QueueNode *)malloc(sizeof(QueueNode));
    if (node == NULL) {
        return false;
    }

    node->data = e;
    node->next = NULL;
    Q->rear->next = node;
    Q->rear = node;
    Q->length++;
    return true;
}
```

:::

### 出队

实现逻辑：删除头结点之后的第一个数据结点。若删除的是队尾结点，需要让 `rear` 重新指向头结点。

::: details 点击展开代码

```c
bool DeLinkQueue(LinkQueue *Q, ElemType *e) {
    if (LinkQueueEmpty(*Q)) {
        return false;
    }

    QueueNode *p = Q->front->next;
    *e = p->data;
    Q->front->next = p->next;

    if (Q->rear == p) {
        Q->rear = Q->front;
    }

    free(p);
    Q->length--;
    return true;
}
```

:::

### 读队头元素

::: details 点击展开代码

```c
bool GetHeadLinkQueue(LinkQueue Q, ElemType *e) {
    if (LinkQueueEmpty(Q)) {
        return false;
    }

    *e = Q.front->next->data;
    return true;
}
```

:::

### 清空与销毁

实现逻辑：清空时释放所有数据结点，保留头结点；销毁时再释放头结点。

::: details 点击展开代码

```c
void ClearLinkQueue(LinkQueue *Q) {
    QueueNode *p = Q->front->next;

    while (p != NULL) {
        QueueNode *next = p->next;
        free(p);
        p = next;
    }

    Q->front->next = NULL;
    Q->rear = Q->front;
    Q->length = 0;
}

void DestroyLinkQueue(LinkQueue *Q) {
    ClearLinkQueue(Q);
    free(Q->front);
    Q->front = NULL;
    Q->rear = NULL;
    Q->length = 0;
}
```

:::

## 5.5 双端队列

双端队列允许在两端进行插入和删除。

常见受限形式：

- 输入受限的双端队列：只允许在一端插入，但允许在两端删除。
- 输出受限的双端队列：允许在两端插入，但只允许在一端删除。

普通队列、栈都可以看作双端队列的特殊情况。

## 5.6 408 常考点

### 队头与队尾指针含义

循环队列最容易出错的地方是 `front` 和 `rear` 的含义。

本页采用的约定是：

- `front` 指向队头元素。
- `rear` 指向队尾元素的下一个位置。

如果题目采用 `rear` 指向队尾元素的约定，则判空、判满和入队出队公式都要重新判断。

### 循环队列长度公式

采用牺牲一个存储单元的循环队列时：

$$
length = (rear - front + MaxSize) \% MaxSize
$$

其中加上 `MaxSize` 是为了避免 `rear < front` 时出现负数。

### 假溢出

顺序队列中，数组前端已经出队的位置无法继续使用，而队尾指针已经到达数组末尾，这种现象称为假溢出。

循环队列通过取模运算让队尾和队头回到数组前端，从而解决假溢出。

### 栈与队列比较

| 结构 | 插入位置 | 删除位置 | 特点 |
| --- | --- | --- | --- |
| 栈 | 栈顶 | 栈顶 | 后进先出 |
| 队列 | 队尾 | 队头 | 先进先出 |


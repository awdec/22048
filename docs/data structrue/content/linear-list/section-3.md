<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-栈</center></h1>

## 4. 栈

栈是只允许在一端进行插入和删除操作的线性表。

允许插入和删除的一端称为栈顶，另一端称为栈底。向栈中插入元素称为入栈或压栈，从栈中删除元素称为出栈。

栈的特点是：

- 后进先出，简称 LIFO。
- 插入和删除都只能在栈顶进行。
- 栈是一种受限的线性表。

设元素依次入栈为 $a_1,a_2,\cdots,a_n$，若不考虑中途出栈，则出栈顺序为 $a_n,\cdots,a_2,a_1$。

## 4.1 栈的基本操作

栈的基本操作是从逻辑结构角度定义的，具体实现可以采用顺序存储或链式存储。

### 初始化

- `InitStack(&S)`：初始化一个空栈 `S`。

### 销毁

- `DestroyStack(&S)`：销毁栈，并释放其占用的存储空间。

### 清空

- `ClearStack(&S)`：清空栈中的所有元素，但栈本身仍然存在。

### 判空

- `StackEmpty(S)`：判断栈是否为空。

### 求长度

- `StackLength(S)`：求栈中元素个数。

### 入栈

- `Push(&S, e)`：将元素 `e` 压入栈顶。

### 出栈

- `Pop(&S, &e)`：删除栈顶元素，并用 `e` 返回被删除的元素。

### 读栈顶元素

- `GetTop(S, &e)`：读取栈顶元素，但不删除该元素。

## 4.2 顺序栈

顺序栈用一组地址连续的存储单元依次存放栈中元素。通常用数组保存元素，用变量 `top` 指示栈顶位置。

下面实现约定：

- `top == -1` 表示空栈。
- `top == MaxSize - 1` 表示栈满。
- 栈顶元素为 `data[top]`。
- 入栈时先让 `top` 加一，再写入元素。
- 出栈时先取出 `data[top]`，再让 `top` 减一。

### 公共定义

定义逻辑：顺序栈用数组 `data` 保存元素，用 `top` 记录栈顶元素下标。

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define MaxSize 50

typedef int ElemType;

typedef struct {
    ElemType data[MaxSize];
    int top;
} SqStack;
```

:::

### 初始化

实现逻辑：空栈中没有有效元素，将 `top` 置为 `-1`。

::: details 点击展开代码

```c
void InitSqStack(SqStack *S) {
    S->top = -1;
}
```

:::

### 判空与判满

实现逻辑：若 `top == -1`，说明栈空；若 `top == MaxSize - 1`，说明数组空间已经用完。

::: details 点击展开代码

```c
bool SqStackEmpty(SqStack S) {
    return S.top == -1;
}

bool SqStackFull(SqStack S) {
    return S.top == MaxSize - 1;
}
```

:::

### 求长度

实现逻辑：当 `top` 指向最后一个有效元素时，栈中元素个数为 `top + 1`。

::: details 点击展开代码

```c
int SqStackLength(SqStack S) {
    return S.top + 1;
}
```

:::

### 入栈

实现逻辑：先判断栈是否已满；若未满，先移动栈顶指针，再把元素写入新栈顶。

::: details 点击展开代码

```c
bool PushSqStack(SqStack *S, ElemType e) {
    if (SqStackFull(*S)) {
        return false;
    }

    S->data[++S->top] = e;
    return true;
}
```

:::

### 出栈

实现逻辑：先判断栈是否为空；若非空，取出当前栈顶元素，再移动栈顶指针。

::: details 点击展开代码

```c
bool PopSqStack(SqStack *S, ElemType *e) {
    if (SqStackEmpty(*S)) {
        return false;
    }

    *e = S->data[S->top--];
    return true;
}
```

:::

### 读栈顶元素

实现逻辑：读取 `data[top]`，但不改变 `top`。

::: details 点击展开代码

```c
bool GetTopSqStack(SqStack S, ElemType *e) {
    if (SqStackEmpty(S)) {
        return false;
    }

    *e = S.data[S.top];
    return true;
}
```

:::

### 清空与销毁

实现逻辑：静态数组不需要手动释放空间，将 `top` 重新置为 `-1` 即可。

::: details 点击展开代码

```c
void ClearSqStack(SqStack *S) {
    S->top = -1;
}

void DestroySqStack(SqStack *S) {
    S->top = -1;
}
```

:::

## 4.3 共享栈

共享栈让两个栈共用同一段数组空间。两个栈分别从数组两端向中间增长。

常见约定：

- 0 号栈栈底在数组左端，`top0 == -1` 表示空。
- 1 号栈栈底在数组右端，`top1 == MaxSize` 表示空。
- 当 `top0 + 1 == top1` 时，数组空间用尽。

共享栈适合两个栈空间需求此消彼长的场景。

### 公共定义

::: details 点击展开代码

```c
typedef struct {
    ElemType data[MaxSize];
    int top0;
    int top1;
} SharedStack;
```

:::

### 初始化

::: details 点击展开代码

```c
void InitSharedStack(SharedStack *S) {
    S->top0 = -1;
    S->top1 = MaxSize;
}
```

:::

### 入栈

实现逻辑：先判断共享空间是否已满，再根据栈号决定从左端还是右端压入元素。

::: details 点击展开代码

```c
bool PushSharedStack(SharedStack *S, int stackNo, ElemType e) {
    if (S->top0 + 1 == S->top1) {
        return false;
    }

    if (stackNo == 0) {
        S->data[++S->top0] = e;
        return true;
    }

    if (stackNo == 1) {
        S->data[--S->top1] = e;
        return true;
    }

    return false;
}
```

:::

### 出栈

实现逻辑：0 号栈从左侧栈顶弹出，1 号栈从右侧栈顶弹出。

::: details 点击展开代码

```c
bool PopSharedStack(SharedStack *S, int stackNo, ElemType *e) {
    if (stackNo == 0) {
        if (S->top0 == -1) {
            return false;
        }

        *e = S->data[S->top0--];
        return true;
    }

    if (stackNo == 1) {
        if (S->top1 == MaxSize) {
            return false;
        }

        *e = S->data[S->top1++];
        return true;
    }

    return false;
}
```

:::

## 4.4 链栈

链栈采用链式存储实现。通常把链表的头部作为栈顶，这样入栈和出栈都只需要修改头指针，时间复杂度为 `O(1)`。

链栈特点：

- 不需要连续存储空间。
- 不存在固定容量的栈满问题，但可能因内存不足导致分配失败。
- 每个结点需要额外指针域。

### 公共定义

定义逻辑：`top` 指向栈顶结点，`length` 记录栈中元素个数。

::: details 点击展开代码

```c
#include <stdlib.h>

typedef struct StackNode {
    ElemType data;
    struct StackNode *next;
} StackNode;

typedef struct {
    StackNode *top;
    int length;
} LinkStack;
```

:::

### 初始化

实现逻辑：空链栈没有栈顶结点，令 `top` 指向 `NULL`。

::: details 点击展开代码

```c
void InitLinkStack(LinkStack *S) {
    S->top = NULL;
    S->length = 0;
}
```

:::

### 判空

::: details 点击展开代码

```c
bool LinkStackEmpty(LinkStack S) {
    return S.top == NULL;
}
```

:::

### 入栈

实现逻辑：新结点插入到当前栈顶之前，再让 `top` 指向新结点。

::: details 点击展开代码

```c
bool PushLinkStack(LinkStack *S, ElemType e) {
    StackNode *node = (StackNode *)malloc(sizeof(StackNode));
    if (node == NULL) {
        return false;
    }

    node->data = e;
    node->next = S->top;
    S->top = node;
    S->length++;
    return true;
}
```

:::

### 出栈

实现逻辑：删除当前栈顶结点，保存其后继作为新的栈顶。

::: details 点击展开代码

```c
bool PopLinkStack(LinkStack *S, ElemType *e) {
    if (LinkStackEmpty(*S)) {
        return false;
    }

    StackNode *p = S->top;
    *e = p->data;
    S->top = p->next;
    free(p);
    S->length--;
    return true;
}
```

:::

### 读栈顶元素

::: details 点击展开代码

```c
bool GetTopLinkStack(LinkStack S, ElemType *e) {
    if (LinkStackEmpty(S)) {
        return false;
    }

    *e = S.top->data;
    return true;
}
```

:::

### 清空与销毁

实现逻辑：不断弹出栈顶结点，直到链栈为空。

::: details 点击展开代码

```c
void ClearLinkStack(LinkStack *S) {
    ElemType temp;

    while (!LinkStackEmpty(*S)) {
        PopLinkStack(S, &temp);
    }
}

void DestroyLinkStack(LinkStack *S) {
    ClearLinkStack(S);
}
```

:::

## 4.5 408 常考点

### 栈顶指针含义

顺序栈的 `top` 有两种常见定义：

- `top` 指向栈顶元素：空栈条件为 `top == -1`。
- `top` 指向栈顶元素的下一个位置：空栈条件为 `top == 0`。

做题时一定先看题目给出的约定，再判断入栈、出栈时 `top` 的变化顺序。

### 入栈与出栈序列

若入栈序列为 `1, 2, 3`，可能的出栈序列有：

- `1, 2, 3`
- `1, 3, 2`
- `2, 1, 3`
- `2, 3, 1`
- `3, 2, 1`

但 `3, 1, 2` 不可能。因为 `3` 出栈后，`1` 一定被压在 `2` 的下面，不能先于 `2` 出栈。

### 栈的典型应用

栈常用于处理“最近的未完成任务”：

- 括号匹配。
- 表达式求值。
- 函数调用和递归。
- 深度优先搜索。
- 进制转换。

### 顺序栈与链栈比较

| 实现 | 优点 | 缺点 |
| --- | --- | --- |
| 顺序栈 | 存储密度高，访问简单 | 容量固定，可能栈满 |
| 链栈 | 容量更灵活，不需要连续空间 | 需要额外指针域 |


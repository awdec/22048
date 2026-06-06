<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-顺序表</center></h1>

$L=(a_1,a_2,\cdots,a_i,a_{i+1},\cdots,a_n)$

除第一个元素外，每个元素有且仅有一个直接前驱；除最后一个元素外，每个元素仅有一个直接后继。

线性表是一种逻辑结构，常见存储实现有两种：

- 顺序表：顺序存储。
- 链表：链式存储。

## 1. 线性表的基本操作

线性表的基本操作是从逻辑结构角度定义的，具体实现取决于采用顺序表还是链表。

### 初始化

- `InitList(&L)`：初始化一个空的线性表 `L`。

### 销毁

- `DestroyList(&L)`：销毁线性表，并释放其占用的存储空间。

### 清空

- `ClearList(&L)`：清空线性表中的所有元素，但线性表本身仍然存在。

### 求长度

- `Length(L)`：求线性表的表长，即表中元素个数。

### 判空

- `Empty(L)`：判断线性表是否为空。若表长为 `0`，则为空表。

### 输出

- `PrintList(L)`：按位序依次输出线性表中的所有元素。

### 按位查找

- `GetElem(L, i)`：获取线性表中第 `i` 个位置的元素。
- 位序从 `1` 开始。
- 合法范围：`1 <= i <= Length(L)`。

### 按值查找

- `LocateElem(L, e)`：查找第一个值等于 `e` 的元素，并返回其位序。
- 若不存在，通常返回 `0` 或特殊标记。

### 插入

- `ListInsert(&L, i, e)`：在第 `i` 个位置插入元素 `e`，插入后 `e` 成为新的第 `i` 个元素。
- 合法范围：`1 <= i <= Length(L) + 1`。
- 若 `i = 1`，表示表头插入。
- 若 `i = Length(L) + 1`，表示表尾插入。

### 删除

- `ListDelete(&L, i, &e)`：删除第 `i` 个位置的元素，并用 `e` 返回被删除的元素。
- 合法范围：`1 <= i <= Length(L)`。

### 求前驱

- `PriorElem(L, e)`：求元素 `e` 的直接前驱。
- 第一个元素没有直接前驱。

### 求后继

- `NextElem(L, e)`：求元素 `e` 的直接后继。
- 最后一个元素没有直接后继。

## 2. 顺序表

顺序表用一组地址连续的存储单元依次存放线性表中的数据元素。逻辑上相邻的元素，在物理位置上也相邻。

特点：

- 支持随机访问，按位查找时间复杂度为 `O(1)`。
- 插入、删除通常需要移动元素，平均时间复杂度为 `O(n)`。
- 存储密度高，但需要连续存储空间。

顺序表有两种常见实现方式：

- 静态数组实现：数组容量固定，表长不能超过 `MaxSize`。
- 指针实现：用指针指向动态分配的连续存储空间，容量不足时可以扩容。

### 2.1 静态数组实现

#### 公共定义

定义逻辑：静态顺序表用数组 `data` 保存连续元素，用 `length` 记录当前有效元素个数。

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define MaxSize 50

typedef int ElemType;

typedef struct {
    ElemType data[MaxSize];
    int length;
} StaticSqList;
```

:::

#### 初始化

实现逻辑：静态数组的存储空间已经随结构体创建完成，初始化时只需要把 `length` 置为 `0`，表示当前没有有效元素。

:::details 点击展开代码

```c
void InitStaticSqList(StaticSqList *L) {
    L->length = 0;
}
```

:::

#### 销毁

实现逻辑：静态数组由结构体直接管理，不需要手动释放堆空间；销毁时将 `length` 置为 `0` 即可。

:::detail 点击展开代码

```c
void DestroyStaticSqList(StaticSqList *L) {
    L->length = 0;
}
```

:::

#### 清空

实现逻辑：顺序表的数据仍保留在数组中，但只要把 `length` 置为 `0`，逻辑上就表示表中没有元素。

:::detail 点击展开代码

```c
void ClearStaticSqList(StaticSqList *L) {
    L->length = 0;
}
```

:::

#### 求长度

实现逻辑：顺序表用 `length` 记录当前有效元素个数，直接返回该字段即可。

:::detail 点击展开代码

```c
int StaticSqLength(StaticSqList L) {
    return L.length;
}
```

:::

#### 判空

实现逻辑：当 `length == 0` 时，说明没有有效元素，线性表为空。

:::detail 点击展开代码

```c
bool StaticSqEmpty(StaticSqList L) {
    return L.length == 0;
}
```

:::

#### 输出

实现逻辑：顺序表元素连续存放，下标 `0` 到 `length - 1` 依次对应第 `1` 到第 `length` 个元素。

:::detail 点击展开代码

```c
void StaticSqPrintList(StaticSqList L) {
    for (int i = 0; i < L.length; i++) {
        printf("%d ", L.data[i]);
    }
    printf("\n");
}
```

:::

#### 按位查找

实现逻辑：线性表位序从 `1` 开始，数组下标从 `0` 开始，第 `i` 个元素对应 `data[i - 1]`。

:::detail 点击展开代码

```c
bool StaticSqGetElem(StaticSqList L, int i, ElemType *e) {
    if (i < 1 || i > L.length) {
        return false;
    }

    *e = L.data[i - 1];
    return true;
}
```

:::

#### 按值查找

实现逻辑：从数组下标 `0` 开始顺序扫描，找到第一个值等于 `e` 的元素后返回其位序 `i + 1`。

:::detail 点击展开代码

```c
int StaticSqLocateElem(StaticSqList L, ElemType e) {
    for (int i = 0; i < L.length; i++) {
        if (L.data[i] == e) {
            return i + 1;
        }
    }

    return 0;
}
```

:::

#### 插入

实现逻辑：静态数组容量固定，先判断插入位置是否合法、表是否已满；再从后向前移动元素，给第 `i` 个位置腾出空间。

:::detail 点击展开代码

```c
bool StaticSqListInsert(StaticSqList *L, int i, ElemType e) {
    if (i < 1 || i > L->length + 1) {
        return false;
    }

    if (L->length >= MaxSize) {
        return false;
    }

    for (int j = L->length; j >= i; j--) {
        L->data[j] = L->data[j - 1];
    }

    L->data[i - 1] = e;
    L->length++;
    return true;
}
```

:::

#### 删除

实现逻辑：先保存第 `i` 个元素，再把其后的元素依次左移一位，最后将 `length` 减 `1`。

:::detail 点击展开代码

```c
bool StaticSqListDelete(StaticSqList *L, int i, ElemType *e) {
    if (i < 1 || i > L->length) {
        return false;
    }

    *e = L->data[i - 1];

    for (int j = i; j < L->length; j++) {
        L->data[j - 1] = L->data[j];
    }

    L->length--;
    return true;
}
```

:::

#### 求前驱

实现逻辑：先按值找到元素 `e` 的位序；若它存在且不是第一个元素，则前驱是前一个数组单元中的元素。

:::detail 点击展开代码

```c
bool StaticSqPriorElem(StaticSqList L, ElemType e, ElemType *pre) {
    int pos = StaticSqLocateElem(L, e);

    if (pos <= 1) {
        return false;
    }

    *pre = L.data[pos - 2];
    return true;
}
```

:::

#### 求后继

实现逻辑：先按值找到元素 `e` 的位序；若它存在且不是最后一个元素，则后继是后一个数组单元中的元素。

::: details 点击展开代码

```c
bool StaticSqNextElem(StaticSqList L, ElemType e, ElemType *next) {
    int pos = StaticSqLocateElem(L, e);

    if (pos == 0 || pos == L.length) {
        return false;
    }

    *next = L.data[pos];
    return true;
}
```

:::

### 2.2 指针实现

#### 公共定义

定义逻辑：动态顺序表用指针 `data` 指向连续存储空间，用 `length` 记录当前表长，用 `maxSize` 记录当前容量。

:::detail 点击展开代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

#define InitSize 10

typedef int ElemType;

typedef struct {
    ElemType *data;
    int length;
    int maxSize;
} DynSqList;
```

:::

#### 初始化

实现逻辑：指针实现需要先用 `malloc` 申请一段连续空间，再初始化表长 `length` 和最大容量 `maxSize`。

:::detail 点击展开代码

```c
bool InitDynSqList(DynSqList *L) {
    L->data = (ElemType *)malloc(sizeof(ElemType) * InitSize);
    if (L->data == NULL) {
        return false;
    }

    L->length = 0;
    L->maxSize = InitSize;
    return true;
}
```

:::

##### 销毁

实现逻辑：释放 `data` 指向的动态连续空间，并把指针置空，避免产生悬空指针。

:::detail 点击展开代码

```c
void DestroyDynSqList(DynSqList *L) {
    free(L->data);
    L->data = NULL;
    L->length = 0;
    L->maxSize = 0;
}
```

:::

#### 清空

实现逻辑：清空只改变逻辑状态，不释放底层数组空间；将 `length` 置为 `0` 后，原有元素不再属于线性表。

:::detail 点击展开代码

```c
void ClearDynSqList(DynSqList *L) {
    L->length = 0;
}
```

:::

#### 求长度

实现逻辑：动态顺序表同样用 `length` 保存当前有效元素个数，直接返回该字段。

:::detail 点击展开代码

```c
int DynSqLength(DynSqList L) {
    return L.length;
}
```

:::

#### 判空

实现逻辑：只要 `length == 0`，就说明当前没有有效元素。

:::detail 点击展开代码

```c
bool DynSqEmpty(DynSqList L) {
    return L.length == 0;
}
```

:::

#### 输出

实现逻辑：`data` 指向的是连续存储空间，可以像数组一样从下标 `0` 顺序访问到 `length - 1`。

:::detail 点击展开代码

```c
void DynSqPrintList(DynSqList L) {
    for (int i = 0; i < L.length; i++) {
        printf("%d ", L.data[i]);
    }
    printf("\n");
}
```

:::

#### 按位查找

实现逻辑：由于动态顺序表仍然连续存储，第 `i` 个元素可以通过首地址加偏移量直接访问，即 `data[i - 1]`。

:::detail 点击展开代码

```c
bool DynSqGetElem(DynSqList L, int i, ElemType *e) {
    if (i < 1 || i > L.length) {
        return false;
    }

    *e = L.data[i - 1];
    return true;
}
```

:::

#### 按值查找

实现逻辑：顺序扫描有效元素区间，找到第一个值等于 `e` 的元素后返回其位序。

:::detail 点击展开代码

```c
int DynSqLocateElem(DynSqList L, ElemType e) {
    for (int i = 0; i < L.length; i++) {
        if (L.data[i] == e) {
            return i + 1;
        }
    }

    return 0;
}
```

:::

#### 插入

实现逻辑：先检查插入位置；若容量不足，则重新申请更大的连续空间并复制旧元素；随后从后向前移动元素完成插入。

:::detail 点击展开代码

```c
bool IncreaseDynSqSize(DynSqList *L, int len) {
    ElemType *newData = (ElemType *)malloc(sizeof(ElemType) * (L->maxSize + len));
    if (newData == NULL) {
        return false;
    }

    for (int i = 0; i < L->length; i++) {
        newData[i] = L->data[i];
    }

    free(L->data);
    L->data = newData;
    L->maxSize += len;
    return true;
}

bool DynSqListInsert(DynSqList *L, int i, ElemType e) {
    if (i < 1 || i > L->length + 1) {
        return false;
    }

    if (L->length >= L->maxSize && !IncreaseDynSqSize(L, InitSize)) {
        return false;
    }

    for (int j = L->length; j >= i; j--) {
        L->data[j] = L->data[j - 1];
    }

    L->data[i - 1] = e;
    L->length++;
    return true;
}
```

:::

#### 删除

实现逻辑：保存待删除元素后，将后面的元素依次左移，覆盖被删除位置，再更新表长。

:::detail 点击展开代码

```c
bool DynSqListDelete(DynSqList *L, int i, ElemType *e) {
    if (i < 1 || i > L->length) {
        return false;
    }

    *e = L->data[i - 1];

    for (int j = i; j < L->length; j++) {
        L->data[j - 1] = L->data[j];
    }

    L->length--;
    return true;
}
```

:::

#### 求前驱

实现逻辑：利用按值查找得到元素位序；若该元素不是首元结点，则直接访问它前一个连续单元。

:::detail 点击展开代码

```c
bool DynSqPriorElem(DynSqList L, ElemType e, ElemType *pre) {
    int pos = DynSqLocateElem(L, e);

    if (pos <= 1) {
        return false;
    }

    *pre = L.data[pos - 2];
    return true;
}
```

:::

#### 求后继

实现逻辑：利用按值查找得到元素位序；若该元素不是最后一个元素，则直接访问它后一个连续单元。

:::detail 点击展开代码

```c
bool DynSqNextElem(DynSqList L, ElemType e, ElemType *next) {
    int pos = DynSqLocateElem(L, e);

    if (pos == 0 || pos == L.length) {
        return false;
    }

    *next = L.data[pos];
    return true;
}
```

:::


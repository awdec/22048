<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-链表</center></h1>


## 3. 链表

链表用一组不必连续的存储单元存放线性表中的数据元素。结点中除了保存数据元素，还需要保存表示逻辑关系的指针或游标。

常见链表包括：

- 单链表：每个结点只有一个 `next` 指针。
- 双链表：每个结点有 `prior` 和 `next` 两个指针。
- 循环链表：尾结点指针指向头结点或首元结点，形成环。
- 静态链表：用数组存储结点，用游标代替指针。

### 3.1 单链表

下面代码采用带头结点的单链表。头结点不存放有效数据，第一个数据结点为 `L->next`。

单链表特点：

- 不支持随机访问，按位查找时间复杂度为 `O(n)`。
- 若已找到目标结点或其前驱，插入、删除只需修改指针，时间复杂度为 `O(1)`。
- 不要求连续存储空间，但每个结点需要额外指针域。

#### 公共定义

定义逻辑：单链表结点包含数据域 `data` 和后继指针 `next`，`LinkList` 指向头结点。

:::detail 点击展开代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int ElemType;

typedef struct LNode {
    ElemType data;
    struct LNode *next;
} LNode, *LinkList;
```

:::

#### 初始化

实现逻辑：先申请一个头结点，头结点不保存有效数据；令 `next` 指向 `NULL`，表示空表。

:::detail 点击展开代码

```c
bool InitLinkList(LinkList *L) {
    *L = (LNode *)malloc(sizeof(LNode));
    if (*L == NULL) {
        return false;
    }

    (*L)->next = NULL;
    return true;
}
```

:::

#### 头插法建立单链表

实现逻辑：每读入一个元素，就把新结点插到头结点之后。由于后读入的结点总在更靠前的位置，最终链表中元素顺序与输入顺序相反。若中途申请结点失败，则销毁已经建立的链表。

:::detail 点击展开代码

```c
void DestroyLinkList(LinkList *L);

bool CreateLinkListByHead(LinkList *L, ElemType data[], int n) {
    if (!InitLinkList(L)) {
        return false;
    }

    for (int i = 0; i < n; i++) {
        LNode *s = (LNode *)malloc(sizeof(LNode));
        if (s == NULL) {
            DestroyLinkList(L);
            return false;
        }

        s->data = data[i];
        s->next = (*L)->next;
        (*L)->next = s;
    }

    return true;
}
```

:::

#### 尾插法建立单链表

实现逻辑：用尾指针 `r` 始终指向当前链表的最后一个结点。每生成一个新结点，就接到 `r` 后面，再让 `r` 移到新结点，因此元素顺序与输入顺序一致。若中途申请结点失败，则销毁已经建立的链表。

:::detail 点击展开代码

```c
void DestroyLinkList(LinkList *L);

bool CreateLinkListByTail(LinkList *L, ElemType data[], int n) {
    if (!InitLinkList(L)) {
        return false;
    }

    LNode *r = *L;

    for (int i = 0; i < n; i++) {
        LNode *s = (LNode *)malloc(sizeof(LNode));
        if (s == NULL) {
            DestroyLinkList(L);
            return false;
        }

        s->data = data[i];
        s->next = NULL;
        r->next = s;
        r = s;
    }

    return true;
}
```

:::

#### 销毁

实现逻辑：从头结点开始依次访问每个结点，先保存后继结点地址，再释放当前结点，直到整条链表释放完毕。

:::detail 点击展开代码

```c
void DestroyLinkList(LinkList *L) {
    if (L == NULL) {
        return;
    }

    LNode *p = *L;

    while (p != NULL) {
        LNode *q = p->next;
        free(p);
        p = q;
    }

    *L = NULL;
}
```

:::

#### 清空

实现逻辑：只释放头结点之后的数据结点，保留头结点；最后令头结点的 `next` 重新指向 `NULL`。

:::detail 点击展开代码

```c
void ClearLinkList(LinkList L) {
    if (L == NULL) {
        return;
    }

    LNode *p = L->next;

    while (p != NULL) {
        LNode *q = p->next;
        free(p);
        p = q;
    }

    L->next = NULL;
}
```

:::

#### 求长度

实现逻辑：从首元结点 `L->next` 开始顺着 `next` 指针遍历，每经过一个数据结点，计数器加 `1`。

:::detail 点击展开代码

```c
int LinkLength(LinkList L) {
    int len = 0;
    LNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        len++;
        p = p->next;
    }

    return len;
}
```

:::

#### 判空

实现逻辑：带头结点单链表为空时，头结点的 `next` 指针为 `NULL`。

:::detail 点击展开代码

```c
bool LinkEmpty(LinkList L) {
    return L == NULL || L->next == NULL;
}
```

:::

#### 输出

实现逻辑：从首元结点开始沿 `next` 指针依次访问，直到遇到 `NULL`，依次输出每个数据域。

:::detail 点击展开代码

```c
void LinkPrintList(LinkList L) {
    LNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n");
}
```

:::

#### 按位查找

带头结点的单链表中，头结点可看作第 `0` 个结点，第 `1` 个结点才是第一个数据元素。

实现逻辑：从头结点出发计数，沿 `next` 指针移动 `i` 次即可到达第 `i` 个数据结点。

:::detail 点击展开代码

```c
LNode *LinkGetNode(LinkList L, int i) {
    if (i < 0) {
        return NULL;
    }

    LNode *p = L;
    int j = 0;

    while (p != NULL && j < i) {
        p = p->next;
        j++;
    }

    return p;
}

bool LinkGetElem(LinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    LNode *p = LinkGetNode(L, i);
    if (p == NULL) {
        return false;
    }

    *e = p->data;
    return true;
}
```

:::

#### 按值查找

实现逻辑：从首元结点开始顺序遍历，比较每个结点的数据域，找到第一个值等于 `e` 的结点后返回位序。

:::detail 点击展开代码

```c
int LinkLocateElem(LinkList L, ElemType e) {
    LNode *p = (L == NULL) ? NULL : L->next;
    int i = 1;

    while (p != NULL) {
        if (p->data == e) {
            return i;
        }

        p = p->next;
        i++;
    }

    return 0;
}
```

:::

#### 插入

链表插入第 `i` 个位置时，需要先找到第 `i - 1` 个结点。

实现逻辑：先找到插入位置的前驱结点 `p`，再申请新结点 `s`，令 `s` 接到 `p` 的后继之前，最后让 `p->next` 指向 `s`。

:::detail 点击展开代码

```c
bool LinkListInsert(LinkList L, int i, ElemType e) {
    if (i < 1) {
        return false;
    }

    LNode *p = LinkGetNode(L, i - 1);
    if (p == NULL) {
        return false;
    }

    LNode *s = (LNode *)malloc(sizeof(LNode));
    if (s == NULL) {
        return false;
    }

    s->data = e;
    s->next = p->next;
    p->next = s;
    return true;
}
```

:::

#### 删除

链表删除第 `i` 个位置时，需要先找到第 `i - 1` 个结点。

实现逻辑：先找到被删结点的前驱 `p`，再令 `q = p->next` 指向被删结点，修改 `p->next` 跳过 `q`，最后释放 `q`。

:::detail 点击展开代码

```c
bool LinkListDelete(LinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    LNode *p = LinkGetNode(L, i - 1);
    if (p == NULL || p->next == NULL) {
        return false;
    }

    LNode *q = p->next;
    *e = q->data;
    p->next = q->next;
    free(q);
    return true;
}
```

:::

#### 求前驱

实现逻辑：单链表结点没有 `prior` 指针，因此需要同时维护 `prior` 和 `p` 两个指针向后扫描。

:::detail 点击展开代码

```c
bool LinkPriorElem(LinkList L, ElemType e, ElemType *pre) {
    if (L == NULL || L->next == NULL || L->next->data == e) {
        return false;
    }

    LNode *prior = L->next;
    LNode *p = prior->next;

    while (p != NULL) {
        if (p->data == e) {
            *pre = prior->data;
            return true;
        }

        prior = p;
        p = p->next;
    }

    return false;
}
```

:::

#### 求后继

实现逻辑：顺序扫描到值为 `e` 的结点后，如果它存在后继结点，则后继结点的数据域就是直接后继。

:::detail 点击展开代码

```c
bool LinkNextElem(LinkList L, ElemType e, ElemType *next) {
    LNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL && p->next != NULL) {
        if (p->data == e) {
            *next = p->next->data;
            return true;
        }

        p = p->next;
    }

    return false;
}
```

:::


### 3.2 双链表

双链表的每个结点同时保存直接前驱和直接后继的位置，适合频繁进行双向遍历、求前驱、删除指定结点等操作。

下面代码采用带头结点的非循环双链表。

#### 公共定义

定义逻辑：双链表结点包含数据域、前驱指针 `prior` 和后继指针 `next`，因此可以双向移动。

:::detail 点击展开代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int ElemType;

typedef struct DNode {
    ElemType data;
    struct DNode *prior;
    struct DNode *next;
} DNode, *DLinkList;
```

:::

#### 初始化

实现逻辑：申请头结点，头结点的 `prior` 置为 `NULL`，`next` 置为 `NULL`，表示当前没有数据结点。

:::detail 点击展开代码

```c
bool InitDLinkList(DLinkList *L) {
    *L = (DNode *)malloc(sizeof(DNode));
    if (*L == NULL) {
        return false;
    }

    (*L)->prior = NULL;
    (*L)->next = NULL;
    return true;
}
```

:::

#### 销毁

实现逻辑：从头结点开始沿 `next` 指针遍历，逐个释放结点；释放前先保存后继，避免断链后无法继续遍历。

:::detail 点击展开代码

```c
void DestroyDLinkList(DLinkList *L) {
    if (L == NULL) {
        return;
    }

    DNode *p = *L;

    while (p != NULL) {
        DNode *q = p->next;
        free(p);
        p = q;
    }

    *L = NULL;
}
```

:::

#### 清空

实现逻辑：释放头结点之后的所有数据结点，保留头结点，并将头结点的 `next` 置为 `NULL`。

:::detail 点击展开代码

```c
void ClearDLinkList(DLinkList L) {
    if (L == NULL) {
        return;
    }

    DNode *p = L->next;

    while (p != NULL) {
        DNode *q = p->next;
        free(p);
        p = q;
    }

    L->next = NULL;
}
```

:::

#### 求长度

实现逻辑：从首元结点开始沿 `next` 指针遍历，统计数据结点个数。

:::detail 点击展开代码

```c
int DLinkLength(DLinkList L) {
    int len = 0;
    DNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        len++;
        p = p->next;
    }

    return len;
}
```

:::

#### 判空

实现逻辑：带头结点双链表为空时，头结点的 `next` 指针为 `NULL`。

:::detail 点击展开代码

```c
bool DLinkEmpty(DLinkList L) {
    return L == NULL || L->next == NULL;
}
```

:::

#### 输出

实现逻辑：从首元结点开始沿 `next` 指针正向遍历，依次输出每个结点的数据域。

:::detail 点击展开代码

```c
void DLinkPrintList(DLinkList L) {
    DNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n");
}
```

:::

#### 按位查找

实现逻辑：把头结点看作第 `0` 个结点，从头结点出发沿 `next` 指针移动，直到到达第 `i` 个数据结点。

:::detail 点击展开代码

```c
DNode *DLinkGetNode(DLinkList L, int i) {
    if (i < 0) {
        return NULL;
    }

    DNode *p = L;
    int j = 0;

    while (p != NULL && j < i) {
        p = p->next;
        j++;
    }

    return p;
}

bool DLinkGetElem(DLinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    DNode *p = DLinkGetNode(L, i);
    if (p == NULL) {
        return false;
    }

    *e = p->data;
    return true;
}
```

:::

#### 按值查找

实现逻辑：从首元结点开始正向扫描，找到第一个数据域等于 `e` 的结点后返回对应位序。

:::detail 点击展开代码

```c
int DLinkLocateElem(DLinkList L, ElemType e) {
    DNode *p = (L == NULL) ? NULL : L->next;
    int i = 1;

    while (p != NULL) {
        if (p->data == e) {
            return i;
        }

        p = p->next;
        i++;
    }

    return 0;
}
```

:::

#### 插入

双链表插入时需要同时维护前驱指针和后继指针。

实现逻辑：先找到第 `i - 1` 个结点 `p`，再让新结点 `s` 同时接入 `p` 和原后继结点之间；若原后继存在，也要修改它的 `prior`。

:::detail 点击展开代码

```c
bool DLinkListInsert(DLinkList L, int i, ElemType e) {
    if (i < 1) {
        return false;
    }

    DNode *p = DLinkGetNode(L, i - 1);
    if (p == NULL) {
        return false;
    }

    DNode *s = (DNode *)malloc(sizeof(DNode));
    if (s == NULL) {
        return false;
    }

    s->data = e;
    s->next = p->next;

    if (p->next != NULL) {
        p->next->prior = s;
    }

    s->prior = p;
    p->next = s;
    return true;
}
```

:::

#### 删除

双链表删除时也需要同时维护被删结点前后两侧的指针。

实现逻辑：先找到被删结点前驱 `p` 和被删结点 `q`，让 `p` 跳过 `q` 指向 `q->next`；若 `q` 有后继，还要让后继的 `prior` 指回 `p`。

:::detail 点击展开代码

```c
bool DLinkListDelete(DLinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    DNode *p = DLinkGetNode(L, i - 1);
    if (p == NULL || p->next == NULL) {
        return false;
    }

    DNode *q = p->next;
    *e = q->data;

    p->next = q->next;
    if (q->next != NULL) {
        q->next->prior = p;
    }

    free(q);
    return true;
}
```

:::

#### 求前驱

双链表可以通过 `prior` 指针直接得到某结点的前驱，但仍需先找到该结点。

实现逻辑：先扫描到值为 `e` 的结点；若其 `prior` 不是头结点，则 `prior->data` 就是直接前驱。

:::detail 点击展开代码

```c
bool DLinkPriorElem(DLinkList L, ElemType e, ElemType *pre) {
    DNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        if (p->data == e) {
            if (p->prior == NULL || p->prior == L) {
                return false;
            }

            *pre = p->prior->data;
            return true;
        }

        p = p->next;
    }

    return false;
}
```

:::

#### 求后继

实现逻辑：先扫描到值为 `e` 的结点；若其 `next` 不为空，则 `next->data` 就是直接后继。

:::detail 点击展开代码

```c
bool DLinkNextElem(DLinkList L, ElemType e, ElemType *next) {
    DNode *p = (L == NULL) ? NULL : L->next;

    while (p != NULL) {
        if (p->data == e) {
            if (p->next == NULL) {
                return false;
            }

            *next = p->next->data;
            return true;
        }

        p = p->next;
    }

    return false;
}
```

:::

### 3.3 循环链表

循环链表的尾结点不再指向 `NULL`，而是指回头结点或首元结点。下面代码采用带头结点的循环单链表，空表时 `L->next == L`。

#### 公共定义

定义逻辑：循环单链表结点结构与单链表相同，区别在于尾结点的 `next` 会指回头结点。

:::detail 点击展开代码

```c
#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

typedef int ElemType;

typedef struct CNode {
    ElemType data;
    struct CNode *next;
} CNode, *CLinkList;
```

:::

#### 初始化

实现逻辑：申请头结点后，让头结点的 `next` 指向自身；这表示循环链表为空，但已经形成闭环。

:::detail 点击展开代码

```c
bool InitCLinkList(CLinkList *L) {
    *L = (CNode *)malloc(sizeof(CNode));
    if (*L == NULL) {
        return false;
    }

    (*L)->next = *L;
    return true;
}
```

:::

#### 销毁

实现逻辑：从首元结点开始释放，遍历终止条件不是 `NULL`，而是指针重新回到头结点；最后再释放头结点。

:::detail 点击展开代码

```c
void DestroyCLinkList(CLinkList *L) {
    if (L == NULL || *L == NULL) {
        return;
    }

    CNode *p = (*L)->next;

    while (p != *L) {
        CNode *q = p->next;
        free(p);
        p = q;
    }

    free(*L);
    *L = NULL;
}
```

:::

#### 清空

实现逻辑：释放所有数据结点，保留头结点；清空后重新令 `L->next = L`，恢复空循环链表状态。

:::detail 点击展开代码

```c
void ClearCLinkList(CLinkList L) {
    if (L == NULL) {
        return;
    }

    CNode *p = L->next;

    while (p != L) {
        CNode *q = p->next;
        free(p);
        p = q;
    }

    L->next = L;
}
```

:::

#### 求长度

实现逻辑：从首元结点开始沿 `next` 指针计数，直到指针再次回到头结点时停止。

:::detail 点击展开代码

```c
int CLinkLength(CLinkList L) {
    if (L == NULL) {
        return 0;
    }

    int len = 0;
    CNode *p = L->next;

    while (p != L) {
        len++;
        p = p->next;
    }

    return len;
}
```

:::

#### 判空

实现逻辑：带头结点循环单链表为空时，头结点的 `next` 指向头结点自身。

:::detail 点击展开代码

```c
bool CLinkEmpty(CLinkList L) {
    return L == NULL || L->next == L;
}
```

:::

#### 输出

实现逻辑：从首元结点开始输出，遍历到头结点时说明已经走完一圈，应停止输出。

:::detail 点击展开代码

```c
void CLinkPrintList(CLinkList L) {
    if (L == NULL) {
        printf("\n");
        return;
    }

    CNode *p = L->next;

    while (p != L) {
        printf("%d ", p->data);
        p = p->next;
    }

    printf("\n");
}
```

:::

#### 按位查找

实现逻辑：头结点作为第 `0` 个结点；查找数据结点时沿 `next` 指针移动，若回到头结点仍未到达目标位序，则查找失败。

:::detail 点击展开代码

```c
CNode *CLinkGetNode(CLinkList L, int i) {
    if (L == NULL || i < 0) {
        return NULL;
    }

    if (i == 0) {
        return L;
    }

    CNode *p = L->next;
    int j = 1;

    while (p != L && j < i) {
        p = p->next;
        j++;
    }

    return (p != L && j == i) ? p : NULL;
}

bool CLinkGetElem(CLinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    CNode *p = CLinkGetNode(L, i);
    if (p == NULL) {
        return false;
    }

    *e = p->data;
    return true;
}
```

:::

#### 按值查找

实现逻辑：从首元结点开始扫描一圈，比较数据域；若回到头结点仍未找到，则说明元素不存在。

:::detail 点击展开代码

```c
int CLinkLocateElem(CLinkList L, ElemType e) {
    if (L == NULL) {
        return 0;
    }

    CNode *p = L->next;
    int i = 1;

    while (p != L) {
        if (p->data == e) {
            return i;
        }

        p = p->next;
        i++;
    }

    return 0;
}
```

:::

#### 插入

循环链表插入仍然需要先找到第 `i - 1` 个结点，空表表头插入时前驱为头结点。

实现逻辑：找到前驱结点后，新结点的 `next` 指向前驱原来的后继，再让前驱指向新结点；插入尾部时新结点自然指回头结点。

:::detail 点击展开代码

```c
bool CLinkListInsert(CLinkList L, int i, ElemType e) {
    if (i < 1) {
        return false;
    }

    CNode *p = CLinkGetNode(L, i - 1);
    if (p == NULL) {
        return false;
    }

    CNode *s = (CNode *)malloc(sizeof(CNode));
    if (s == NULL) {
        return false;
    }

    s->data = e;
    s->next = p->next;
    p->next = s;
    return true;
}
```

:::

#### 删除

实现逻辑：先找到被删结点的前驱，若前驱的后继是头结点则删除位置非法；否则跳过被删结点并释放它。

:::detail 点击展开代码

```c
bool CLinkListDelete(CLinkList L, int i, ElemType *e) {
    if (i < 1) {
        return false;
    }

    CNode *p = CLinkGetNode(L, i - 1);
    if (p == NULL || p->next == L) {
        return false;
    }

    CNode *q = p->next;
    *e = q->data;
    p->next = q->next;
    free(q);
    return true;
}
```

:::

#### 求前驱

实现逻辑：循环单链表仍没有 `prior` 指针，因此需要维护前驱指针；按线性表语义，第一个数据元素没有直接前驱。

:::detail 点击展开代码

```c
bool CLinkPriorElem(CLinkList L, ElemType e, ElemType *pre) {
    if (L == NULL || L->next == L || L->next->data == e) {
        return false;
    }

    CNode *prior = L->next;
    CNode *p = prior->next;

    while (p != L) {
        if (p->data == e) {
            *pre = prior->data;
            return true;
        }

        prior = p;
        p = p->next;
    }

    return false;
}
```

:::

#### 求后继

实现逻辑：扫描到值为 `e` 的结点后，若其 `next` 是头结点，说明它是最后一个元素，没有线性表意义上的后继。

:::detail 点击展开代码

```c
bool CLinkNextElem(CLinkList L, ElemType e, ElemType *next) {
    if (L == NULL) {
        return false;
    }

    CNode *p = L->next;

    while (p != L) {
        if (p->data == e) {
            if (p->next == L) {
                return false;
            }

            *next = p->next->data;
            return true;
        }

        p = p->next;
    }

    return false;
}
```

:::

### 3.4 静态链表

静态链表用数组模拟链式存储，数组下标称为游标。它不使用指针，适合不支持指针的语言或需要固定存储池的场景。

下面代码用 `0` 号下标作为头结点，`-1` 表示空指针，`free` 保存备用链表的第一个空闲结点下标。

#### 公共定义

定义逻辑：静态链表用数组保存所有结点，用 `next` 游标保存下一个结点的数组下标。

:::detail 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define StaticLinkMaxSize 50
#define SLinkNull -1

typedef int ElemType;

typedef struct {
    ElemType data;
    int next;
} SLinkNode;

typedef struct {
    SLinkNode nodes[StaticLinkMaxSize];
    int free;
    int length;
} SLinkList;
```

:::

#### 初始化

实现逻辑：`nodes[0]` 作为头结点；其余数组单元串成备用链表，`free` 指向第一个空闲结点下标。

:::detail 点击展开代码

```c
void InitSLinkList(SLinkList *L) {
    L->nodes[0].next = SLinkNull;

    for (int i = 1; i < StaticLinkMaxSize - 1; i++) {
        L->nodes[i].next = i + 1;
    }

    L->nodes[StaticLinkMaxSize - 1].next = SLinkNull;
    L->free = 1;
    L->length = 0;
}
```

:::

#### 分配与回收结点

静态链表不能 `malloc` 单个结点，需要从备用链表中分配空闲下标，删除结点后再把下标回收到备用链表。

实现逻辑：分配时取出 `free` 指向的空闲下标，并让 `free` 后移；回收时把释放的下标插回备用链表表头。

:::detail 点击展开代码

```c
int SLinkMalloc(SLinkList *L) {
    int i = L->free;

    if (i == SLinkNull) {
        return SLinkNull;
    }

    L->free = L->nodes[i].next;
    return i;
}

void SLinkFree(SLinkList *L, int i) {
    L->nodes[i].next = L->free;
    L->free = i;
}
```

:::

#### 销毁

实现逻辑：静态链表的数组空间由结构体管理，不需要手动释放堆空间；销毁时重新初始化数组和备用链表。

:::detail 点击展开代码

```c
void DestroySLinkList(SLinkList *L) {
    InitSLinkList(L);
}
```

:::

#### 清空

实现逻辑：清空静态链表等价于恢复初始状态，即有效链表为空，所有可用结点重新回到备用链表。

:::detail 点击展开代码

```c
void ClearSLinkList(SLinkList *L) {
    InitSLinkList(L);
}
```

:::

#### 求长度

实现逻辑：静态链表用 `length` 记录有效数据结点个数，直接返回该字段。

:::detail 点击展开代码

```c
int SLinkLength(SLinkList L) {
    return L.length;
}
```

:::

#### 判空

实现逻辑：当 `length == 0` 时，有效链表中没有数据结点。

:::detail 点击展开代码

```c
bool SLinkEmpty(SLinkList L) {
    return L.length == 0;
}
```

:::

#### 输出

实现逻辑：从头结点的 `next` 游标开始，按照数组下标不断访问下一个结点，直到遇到 `SLinkNull`。

:::detail 点击展开代码

```c
void SLinkPrintList(SLinkList L) {
    int p = L.nodes[0].next;

    while (p != SLinkNull) {
        printf("%d ", L.nodes[p].data);
        p = L.nodes[p].next;
    }

    printf("\n");
}
```

:::

#### 按位查找

实现逻辑：游标相当于指针；从头结点下标 `0` 出发沿 `next` 游标移动 `i` 次，即可得到第 `i` 个数据结点下标。

:::detail 点击展开代码

```c
int SLinkGetIndex(SLinkList L, int i) {
    if (i < 0 || i > L.length) {
        return SLinkNull;
    }

    int p = 0;

    for (int j = 0; j < i; j++) {
        p = L.nodes[p].next;
    }

    return p;
}

bool SLinkGetElem(SLinkList L, int i, ElemType *e) {
    if (i < 1 || i > L.length) {
        return false;
    }

    int p = SLinkGetIndex(L, i);
    if (p == SLinkNull) {
        return false;
    }

    *e = L.nodes[p].data;
    return true;
}
```

:::

#### 按值查找

实现逻辑：从首元结点下标开始沿游标顺序扫描，比较数组结点的数据域，找到后返回位序。

:::detail 点击展开代码

```c
int SLinkLocateElem(SLinkList L, ElemType e) {
    int p = L.nodes[0].next;
    int i = 1;

    while (p != SLinkNull) {
        if (L.nodes[p].data == e) {
            return i;
        }

        p = L.nodes[p].next;
        i++;
    }

    return 0;
}
```

:::

#### 插入

静态链表插入时需要先从备用链表中申请一个空闲结点下标。

实现逻辑：先找到第 `i - 1` 个结点下标，再从备用链表申请新下标 `s`，把 `s` 插入到前驱和原后继之间。

:::detail 点击展开代码

```c
bool SLinkListInsert(SLinkList *L, int i, ElemType e) {
    if (i < 1 || i > L->length + 1) {
        return false;
    }

    int p = SLinkGetIndex(*L, i - 1);
    if (p == SLinkNull) {
        return false;
    }

    int s = SLinkMalloc(L);
    if (s == SLinkNull) {
        return false;
    }

    L->nodes[s].data = e;
    L->nodes[s].next = L->nodes[p].next;
    L->nodes[p].next = s;
    L->length++;
    return true;
}
```

:::

#### 删除

静态链表删除后，需要把被删除结点的下标归还给备用链表。

实现逻辑：先找到被删结点前驱下标 `p`，再取出被删结点下标 `q`；让 `p` 跳过 `q`，最后回收 `q`。

:::detail 点击展开代码

```c
bool SLinkListDelete(SLinkList *L, int i, ElemType *e) {
    if (i < 1 || i > L->length) {
        return false;
    }

    int p = SLinkGetIndex(*L, i - 1);
    if (p == SLinkNull) {
        return false;
    }

    int q = L->nodes[p].next;
    if (q == SLinkNull) {
        return false;
    }

    *e = L->nodes[q].data;
    L->nodes[p].next = L->nodes[q].next;
    SLinkFree(L, q);
    L->length--;
    return true;
}
```

:::

#### 求前驱

实现逻辑：先按值查找元素位序；若该元素存在且不是第一个元素，则再按位取得前一个位置的元素。

:::detail 点击展开代码

```c
bool SLinkPriorElem(SLinkList L, ElemType e, ElemType *pre) {
    int pos = SLinkLocateElem(L, e);

    if (pos <= 1) {
        return false;
    }

    return SLinkGetElem(L, pos - 1, pre);
}
```

:::

#### 求后继

实现逻辑：先按值查找元素位序；若该元素存在且不是最后一个元素，则再按位取得后一个位置的元素。

:::detail 点击展开代码

```c
bool SLinkNextElem(SLinkList L, ElemType e, ElemType *next) {
    int pos = SLinkLocateElem(L, e);

    if (pos == 0 || pos == L.length) {
        return false;
    }

    return SLinkGetElem(L, pos + 1, next);
}
```

:::

## 4. 408 常考点

- 线性表的位序从 `1` 开始，数组下标通常从 `0` 开始，二者不要混淆。
- 插入第 `i` 个位置，不是插到原第 `i` 个元素之后，而是让新元素成为第 `i` 个元素。
- 删除操作通常需要返回被删除元素，便于后续使用。
- 静态数组实现的顺序表容量固定；指针实现的顺序表可以通过重新分配连续空间扩容。
- 顺序表可以随机访问，按位查找快；链表不能随机访问，按位查找需要从头扫描。
- 顺序表插入、删除需要移动元素；链表插入、删除需要找到前驱结点后修改指针。
- 单链表结点只保存后继指针，求前驱通常需要从头遍历。
- 双链表结点同时保存前驱和后继指针，删除或求前驱更方便，但指针域开销更大。
- 循环链表没有明显的 `NULL` 表尾，判断遍历结束时通常看是否回到头结点。
- 静态链表用数组下标模拟指针，逻辑上是链式存储，物理上仍占用数组空间。

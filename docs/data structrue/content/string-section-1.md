<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>第一节 字符串</center></h1>

## 1. 串的基本概念

串又称字符串，是由零个或多个字符组成的有限序列。

一般记作：

$$
S = "a_1a_2\cdots a_n"
$$

其中：

- `S` 是串名。
- 双引号中的字符序列是串值。
- `a_i` 可以是字母、数字、标点符号或其他字符。
- `n` 是串的长度。

当 `n = 0` 时，称为空串，记作：

$$
S = ""
$$

空串不包含任何字符，长度为 `0`。

注意区分：

- 空串：不含任何字符，长度为 `0`。
- 空格串：由一个或多个空格字符组成，长度不为 `0`。

例如：

- `""` 是空串。
- `" "` 是长度为 `1` 的空格串。

## 2. 串的相关术语

### 子串

串中任意个连续字符组成的子序列称为该串的子串。

例如串 `"abcdef"` 的子串包括：

- `"abc"`
- `"cd"`
- `"abcdef"`
- `""`

但 `"ace"` 不是它的子串，因为字符不连续。

### 主串

包含某个子串的串称为主串。

例如 `"abcdef"` 是 `"bcd"` 的主串。

### 模式串

在模式匹配问题中，被查找的串称为模式串。

例如在主串 `"ababcabcac"` 中查找 `"abc"`，则：

- `"ababcabcac"` 是主串。
- `"abc"` 是模式串。

### 子串位置

子串在主串中的位置通常用子串第一个字符在主串中的位序表示。

408 中常用位序从 `1` 开始。

例如：

```txt
主串：abcdef
子串：cd
```

`"cd"` 在 `"abcdef"` 中的位置为 `3`。

## 3. 串的基本操作

串是一种特殊的线性表，其数据元素是字符。

常见基本操作包括：

### 赋值

- `StrAssign(&T, chars)`：把字符串常量 `chars` 赋给串 `T`。

### 复制

- `StrCopy(&T, S)`：把串 `S` 复制给串 `T`。

### 判空

- `StrEmpty(S)`：判断串 `S` 是否为空串。

### 求长度

- `StrLength(S)`：返回串 `S` 的长度。

### 比较

- `StrCompare(S, T)`：比较两个串的大小。

通常从第一个字符开始逐个比较字符编码值。

### 求子串

- `SubString(&Sub, S, pos, len)`：用 `Sub` 返回串 `S` 中从第 `pos` 个字符开始、长度为 `len` 的子串。

### 串连接

- `Concat(&T, S1, S2)`：用 `T` 返回由 `S1` 和 `S2` 连接形成的新串。

### 定位

- `Index(S, T)`：若主串 `S` 中存在与模式串 `T` 相同的子串，则返回其第一次出现的位置；否则返回 `0`。

### 清空

- `ClearString(&S)`：将串 `S` 清为空串。

## 4. 串的存储结构

串的存储结构主要有：

- 定长顺序存储
- 堆分配存储
- 块链存储

408 中最常考的是定长顺序存储和模式匹配算法。

## 4.1 定长顺序存储

定长顺序存储用一组地址连续的存储单元保存串中的字符。

常见做法：

- 用数组 `ch` 保存字符。
- 用 `length` 保存当前串长。
- 预先规定最大长度 `MaxLen`。

为了贴近 408 教材，下面代码采用位序从 `1` 开始的写法，`ch[1]` 表示第一个字符。

### 公共定义

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>

#define MaxLen 255

typedef struct {
    char ch[MaxLen + 1];
    int length;
} SString;
```

:::

### 赋值

实现逻辑：从字符数组中逐个复制字符，直到遇到字符串结束符或达到最大长度。

::: details 点击展开代码

```c
bool StrAssign(SString *T, const char chars[]) {
    int i = 0;

    while (chars[i] != '\0') {
        if (i >= MaxLen) {
            return false;
        }

        T->ch[i + 1] = chars[i];
        i++;
    }

    T->length = i;
    return true;
}
```

:::

### 复制

::: details 点击展开代码

```c
void StrCopy(SString *T, SString S) {
    for (int i = 1; i <= S.length; i++) {
        T->ch[i] = S.ch[i];
    }

    T->length = S.length;
}
```

:::

### 判空与求长度

::: details 点击展开代码

```c
bool StrEmpty(SString S) {
    return S.length == 0;
}

int StrLength(SString S) {
    return S.length;
}
```

:::

### 比较

实现逻辑：从左到右逐个比较字符。若某个位置字符不同，则字符编码值大的串更大；若前面全部相同，则长度更长的串更大。

::: details 点击展开代码

```c
int StrCompare(SString S, SString T) {
    int len = S.length < T.length ? S.length : T.length;

    for (int i = 1; i <= len; i++) {
        if (S.ch[i] != T.ch[i]) {
            return S.ch[i] - T.ch[i];
        }
    }

    return S.length - T.length;
}
```

:::

### 求子串

实现逻辑：先判断起始位置和长度是否合法，再连续复制 `len` 个字符。

::: details 点击展开代码

```c
bool SubString(SString *Sub, SString S, int pos, int len) {
    if (pos < 1 || pos > S.length || len < 0) {
        return false;
    }

    if (pos + len - 1 > S.length) {
        return false;
    }

    for (int i = 1; i <= len; i++) {
        Sub->ch[i] = S.ch[pos + i - 1];
    }

    Sub->length = len;
    return true;
}
```

:::

### 串连接

实现逻辑：先复制第一个串，再接着复制第二个串。若总长度超过 `MaxLen`，则连接失败。

::: details 点击展开代码

```c
bool Concat(SString *T, SString S1, SString S2) {
    if (S1.length + S2.length > MaxLen) {
        return false;
    }

    for (int i = 1; i <= S1.length; i++) {
        T->ch[i] = S1.ch[i];
    }

    for (int i = 1; i <= S2.length; i++) {
        T->ch[S1.length + i] = S2.ch[i];
    }

    T->length = S1.length + S2.length;
    return true;
}
```

:::

## 4.2 堆分配存储

堆分配存储在程序运行时动态申请存储空间。

特点：

- 串长可以根据需要动态变化。
- 不需要预先固定最大长度。
- 需要手动申请和释放空间。

### 公共定义

::: details 点击展开代码

```c
#include <stdlib.h>

typedef struct {
    char *ch;
    int length;
} HString;
```

:::

### 初始化

实现逻辑：空堆串不占用字符空间，先让指针为 `NULL`，长度为 `0`。

::: details 点击展开代码

```c
void InitHString(HString *S) {
    S->ch = NULL;
    S->length = 0;
}
```

:::

### 赋值

::: details 点击展开代码

```c
bool HStrAssign(HString *T, const char chars[]) {
    int len = 0;

    while (chars[len] != '\0') {
        len++;
    }

    char *space = (char *)malloc((len + 1) * sizeof(char));
    if (space == NULL) {
        return false;
    }

    for (int i = 0; i < len; i++) {
        space[i] = chars[i];
    }

    space[len] = '\0';

    free(T->ch);
    T->ch = space;
    T->length = len;
    return true;
}
```

:::

### 销毁

::: details 点击展开代码

```c
void DestroyHString(HString *S) {
    free(S->ch);
    S->ch = NULL;
    S->length = 0;
}
```

:::

## 4.3 块链存储

块链存储用链表保存字符串。

每个结点可以存放一个字符，也可以存放多个字符。

特点：

- 插入和删除比较灵活。
- 不要求连续存储空间。
- 存储密度通常低于顺序存储。
- 查找第 `i` 个字符时不能随机访问，需要沿链表扫描。

块链存储适合频繁插入、删除的大字符串，但 408 中通常只要求理解概念。

## 5. 朴素模式匹配

模式匹配是指在主串 `S` 中查找模式串 `T` 第一次出现的位置。

朴素模式匹配又称 BF 算法。

基本思想：

1. 从主串的某个位置开始，与模式串第一个字符比较。
2. 若相等，则继续比较后续字符。
3. 若不相等，则主串回到下一起始位置，模式串回到第一个字符。
4. 重复以上过程，直到匹配成功或主串剩余长度不足。

## 5.1 BF 算法实现

实现逻辑：主串从第 `i` 个位置开始尝试匹配模式串。若匹配失败，主串起点后移一位。

::: details 点击展开代码

```c
int IndexBF(SString S, SString T) {
    int i = 1;
    int j = 1;

    while (i <= S.length && j <= T.length) {
        if (S.ch[i] == T.ch[j]) {
            i++;
            j++;
        } else {
            i = i - j + 2;
            j = 1;
        }
    }

    if (j > T.length) {
        return i - T.length;
    }

    return 0;
}
```

:::

## 5.2 BF 算法复杂度

设主串长度为 `n`，模式串长度为 `m`。

最好情况：

$$
O(n)
$$

最坏情况：

$$
O(nm)
$$

最坏情况通常出现在主串和模式串前面大量字符相同，但最后一个字符不同的情况。

例如：

```txt
主串：aaaaaaaab
模式：aaaab
```

每次匹配都要比较多个字符，失败后又只向后移动一位。

## 6. KMP 算法

KMP 算法用于改进朴素模式匹配。

核心思想：

- 主串指针不回退。
- 模式串利用已经匹配过的信息移动。
- 通过 `next` 数组确定失配后模式串应该跳到的位置。

KMP 的时间复杂度为：

$$
O(n + m)
$$

其中 `n` 是主串长度，`m` 是模式串长度。

## 6.1 next 数组

`next[j]` 表示当模式串第 `j` 个字符与主串失配时，模式串下一次应该用哪个位置继续比较。

直观理解：

模式串已经匹配过的部分中，寻找最长的“相同前缀和后缀”，从而避免重复比较。

例如已经匹配了：

```txt
abab
```

它的最长相同真前缀和真后缀是：

```txt
ab
```

因此失配时可以把模式串向右滑动，使前缀 `ab` 对齐已经匹配过的后缀 `ab`。

不同教材对 `next` 数组的编号和初值可能略有差异。408 做题时，应以题目给出的定义为准。

本页采用 1 开始下标：

- `next[1] = 0`
- 当 `j == 0` 时，表示模式串需要从第一个字符重新开始，同时主串指针后移。

## 6.2 求 next 数组

实现逻辑：`i` 扫描模式串当前位置，`j` 表示当前最长相同前后缀长度对应的位置。

::: details 点击展开代码

```c
void GetNext(SString T, int next[]) {
    int i = 1;
    int j = 0;

    next[1] = 0;

    while (i < T.length) {
        if (j == 0 || T.ch[i] == T.ch[j]) {
            i++;
            j++;
            next[i] = j;
        } else {
            j = next[j];
        }
    }
}
```

:::

## 6.3 KMP 匹配

实现逻辑：当 `S.ch[i]` 与 `T.ch[j]` 失配时，主串指针 `i` 不回退，只让 `j` 跳到 `next[j]`。

::: details 点击展开代码

```c
int IndexKMP(SString S, SString T, int next[]) {
    int i = 1;
    int j = 1;

    while (i <= S.length && j <= T.length) {
        if (j == 0 || S.ch[i] == T.ch[j]) {
            i++;
            j++;
        } else {
            j = next[j];
        }
    }

    if (j > T.length) {
        return i - T.length;
    }

    return 0;
}
```

:::

## 6.4 nextval 数组

`next` 数组仍可能出现无意义比较。

若失配后跳到的位置字符与当前失配字符相同，则下一次比较必然仍然失败。

`nextval` 对这种情况进行优化。

求法：

- 若 `T.ch[i] != T.ch[j]`，则 `nextval[i] = j`。
- 若 `T.ch[i] == T.ch[j]`，则 `nextval[i] = nextval[j]`。

### 求 nextval 数组

::: details 点击展开代码

```c
void GetNextVal(SString T, int nextval[]) {
    int i = 1;
    int j = 0;

    nextval[1] = 0;

    while (i < T.length) {
        if (j == 0 || T.ch[i] == T.ch[j]) {
            i++;
            j++;

            if (T.ch[i] != T.ch[j]) {
                nextval[i] = j;
            } else {
                nextval[i] = nextval[j];
            }
        } else {
            j = nextval[j];
        }
    }
}
```

:::

KMP 匹配时只需要把 `next` 数组替换为 `nextval` 数组即可。

## 7. KMP 手算方法

408 中常考手算 `next` 数组或判断 KMP 匹配过程。

手算时可以按下面思路：

1. `next[1] = 0`。
2. 对模式串第 `j` 个位置，观察 `T[1...j-1]`。
3. 找到该子串最长的相同真前缀和真后缀。
4. `next[j]` 等于这个长度加 `1`。
5. 若没有相同真前后缀，则 `next[j] = 1`。

这是很多教材中常见的手算口径。

注意：这种手算口径下，数组展示结果可能与代码中的中间解释略有不同，但本质都是指导失配时模式串如何移动。

做题时最稳妥的方法是先确认题目对 `next[1]` 的定义。

## 8. 408 常考点

### 8.1 串是特殊的线性表

串可以看作元素类型为字符的线性表。

但串的基本操作通常以“子串”为操作对象，而普通线性表更多以“单个元素”为操作对象。

### 8.2 空串与空格串不同

空串长度为 `0`。

空格串由空格字符组成，长度不为 `0`。

### 8.3 子串必须连续

子串要求字符在主串中连续出现。

若字符不连续，只能称为子序列，不能称为子串。

### 8.4 BF 算法主串会回退

朴素模式匹配失配后：

- 主串指针回到下一趟匹配起点。
- 模式串指针回到第一个字符。

最坏时间复杂度为 $O(nm)$。

### 8.5 KMP 算法主串不回退

KMP 失配后：

- 主串指针不回退。
- 模式串指针根据 `next` 数组跳转。

时间复杂度为 $O(n + m)$。

### 8.6 next 数组定义要看题目

不同教材可能采用不同的 `next` 数组定义。

常见差异包括：

- 下标从 `0` 开始还是从 `1` 开始。
- `next[1]` 是 `0` 还是其他值。
- 数组元素表示“下一次比较位置”还是“最长相同前后缀长度”。

考试做题时要以题干或教材约定为准。

## 9. 小结

| 内容 | 重点 |
| --- | --- |
| 串的定义 | 零个或多个字符组成的有限序列 |  
| 空串 | 长度为 `0` |
| 子串 | 必须连续 |
| 定长顺序存储 | 数组 + 串长 |
| 堆分配存储 | 动态申请空间 |
| BF 算法 | 简单，最坏 $O(nm)$ |
| KMP 算法 | 主串不回退，$O(n + m)$ |
| next 数组 | 利用模式串前后缀信息 |

字符串章节的核心是模式匹配。

如果只抓一条主线，就是：BF 失配后重新比较，KMP 失配后利用 `next` 数组跳过不必要比较。


## 差异：

1. 0-index 和 1-index 还是以具体题目为准
2. KMP 的 next 数组为 i-1 的 border + 1
3. KMP 的 nextval 数组为最长的 i-1 的 border + 1 满足 s[border + 1] != s[i]
4. next = 0 时，文本串和模式串指针同时右侧

<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>线性表-栈-应用</center></h1>

## 4.6 栈的应用

栈的核心特点是后进先出，适合处理“最近出现、最先解决”的问题。

408 中常见的栈应用主要包括：

- 括号匹配
- 表达式求值
- 中缀表达式与后缀表达式转换
- 递归调用
- 深度优先搜索

## 4.6.1 括号匹配

括号匹配是栈的经典应用。

基本思想：

- 遇到左括号，入栈。
- 遇到右括号，检查栈顶是否为对应的左括号。
- 若匹配，则栈顶左括号出栈。
- 若不匹配，说明括号序列非法。
- 扫描结束后，若栈空，则括号全部匹配；否则存在多余左括号。

例如：

- `([]{})` 合法。
- `([)]` 非法。
- `(()` 非法。

### 实现

实现逻辑：用字符栈保存尚未匹配的左括号。扫描字符串时，左括号入栈，右括号与栈顶比较。

::: details 点击展开代码

```c
#include <stdio.h>
#include <stdbool.h>
#include <string.h>

#define MaxSize 100

typedef struct {
    char data[MaxSize];
    int top;
} CharStack;

void InitCharStack(CharStack *S) {
    S->top = -1;
}

bool Empty(CharStack S) {
    return S.top == -1;
}

bool Push(CharStack *S, char ch) {
    if (S->top == MaxSize - 1) {
        return false;
    }

    S->data[++S->top] = ch;
    return true;
}

bool Pop(CharStack *S, char *ch) {
    if (Empty(*S)) {
        return false;
    }

    *ch = S->data[S->top--];
    return true;
}

bool Match(char left, char right) {
    return (left == '(' && right == ')') ||
           (left == '[' && right == ']') ||
           (left == '{' && right == '}');
}

bool BracketMatch(char str[]) {
    CharStack S;
    InitCharStack(&S);

    for (int i = 0; str[i] != '\0'; i++) {
        char ch = str[i];

        if (ch == '(' || ch == '[' || ch == '{') {
            Push(&S, ch);
        } else if (ch == ')' || ch == ']' || ch == '}') {
            char top;

            if (!Pop(&S, &top)) {
                return false;
            }

            if (!Match(top, ch)) {
                return false;
            }
        }
    }

    return Empty(S);
}
```

:::

### 易错点

- 遇到右括号时，如果栈空，说明右括号多余。
- 扫描结束后，如果栈非空，说明左括号多余。
- 只比较括号数量不够，还要比较括号类型和嵌套顺序。

## 4.6.2 表达式求值

表达式求值中，栈常用于保存运算符和操作数。

常见表达式形式：

- 中缀表达式：运算符在两个操作数中间，如 `a + b`。
- 后缀表达式：运算符在两个操作数后面，如 `a b +`。
- 前缀表达式：运算符在两个操作数前面，如 `+ a b`。

408 中最常考的是中缀转后缀、后缀表达式求值。

## 4.6.3 后缀表达式求值

后缀表达式又称逆波兰表达式，不需要括号也能明确表达运算顺序。

求值规则：

- 从左到右扫描表达式。
- 遇到操作数，入栈。
- 遇到运算符，弹出两个操作数进行运算。
- 运算结果再入栈。
- 扫描结束后，栈中唯一元素就是表达式结果。

例如后缀表达式：

```txt
3 4 + 5 *
```

求值过程：

- `3` 入栈。
- `4` 入栈。
- 遇到 `+`，计算 `3 + 4 = 7`，`7` 入栈。
- `5` 入栈。
- 遇到 `*`，计算 `7 * 5 = 35`。

最终结果为 `35`。

### 实现

实现逻辑：为了简化代码，下面假设表达式中的操作数都是一位数字，运算符只包含 `+ - * /`。

::: details 点击展开代码

```c
#include <ctype.h>

typedef struct {
    int data[MaxSize];
    int top;
} IntStack;

void InitIntStack(IntStack *S) {
    S->top = -1;
}

bool IntStackEmpty(IntStack S) {
    return S.top == -1;
}

bool PushInt(IntStack *S, int x) {
    if (S->top == MaxSize - 1) {
        return false;
    }

    S->data[++S->top] = x;
    return true;
}

bool PopInt(IntStack *S, int *x) {
    if (IntStackEmpty(*S)) {
        return false;
    }

    *x = S->data[S->top--];
    return true;
}

int Calculate(int left, int right, char op) {
    if (op == '+') {
        return left + right;
    }
    if (op == '-') {
        return left - right;
    }
    if (op == '*') {
        return left * right;
    }
    return left / right;
}

bool EvalPostfix(char exp[], int *result) {
    IntStack S;
    InitIntStack(&S);

    for (int i = 0; exp[i] != '\0'; i++) {
        char ch = exp[i];

        if (ch == ' ') {
            continue;
        }

        if (isdigit(ch)) {
            PushInt(&S, ch - '0');
        } else {
            int right;
            int left;

            if (!PopInt(&S, &right) || !PopInt(&S, &left)) {
                return false;
            }

            PushInt(&S, Calculate(left, right, ch));
        }
    }

    return PopInt(&S, result) && IntStackEmpty(S);
}
```

:::

### 易错点

后缀表达式遇到运算符时，先弹出的操作数是右操作数，后弹出的操作数是左操作数。

例如计算 `a b -` 时，应当是 `a - b`，不是 `b - a`。

## 4.6.4 中缀表达式转后缀表达式

中缀表达式符合人的书写习惯，但计算机处理时需要考虑优先级和括号。

转换规则：

- 遇到操作数，直接输出。
- 遇到左括号，入栈。
- 遇到右括号，依次弹出栈顶运算符并输出，直到遇到左括号。
- 遇到运算符，若栈顶运算符优先级大于或等于当前运算符，则弹出并输出；然后当前运算符入栈。
- 扫描结束后，将栈中剩余运算符依次弹出。

例如：

```txt
中缀表达式：a + b * c
后缀表达式：a b c * +
```

```txt
中缀表达式：(a + b) * c
后缀表达式：a b + c *
```

### 实现

实现逻辑：运算符栈保存暂时不能输出的运算符。乘除优先级高于加减，括号用于改变出栈时机。

::: details 点击展开代码

```c
int Priority(char op) {
    if (op == '+' || op == '-') {
        return 1;
    }
    if (op == '*' || op == '/') {
        return 2;
    }
    return 0;
}

bool IsOperator(char ch) {
    return ch == '+' || ch == '-' || ch == '*' || ch == '/';
}

bool InfixToPostfix(char infix[], char postfix[]) {
    CharStack S;
    InitCharStack(&S);

    int k = 0;

    for (int i = 0; infix[i] != '\0'; i++) {
        char ch = infix[i];

        if (ch == ' ') {
            continue;
        }

        if (isalnum(ch)) {
            postfix[k++] = ch;
            postfix[k++] = ' ';
        } else if (ch == '(') {
            Push(&S, ch);
        } else if (ch == ')') {
            char top;

            while (!Empty(S)) {
                Pop(&S, &top);

                if (top == '(') {
                    break;
                }

                postfix[k++] = top;
                postfix[k++] = ' ';
            }
        } else if (IsOperator(ch)) {
            while (!Empty(S) &&
                   S.data[S.top] != '(' &&
                   Priority(S.data[S.top]) >= Priority(ch)) {
                char top;
                Pop(&S, &top);
                postfix[k++] = top;
                postfix[k++] = ' ';
            }

            Push(&S, ch);
        } else {
            return false;
        }
    }

    while (!Empty(S)) {
        char top;
        Pop(&S, &top);

        if (top == '(') {
            return false;
        }

        postfix[k++] = top;
        postfix[k++] = ' ';
    }

    postfix[k] = '\0';
    return true;
}
```

:::

## 4.6.5 递归

递归是函数直接或间接调用自身。

递归必须满足两个条件：

- 递归边界：递归什么时候停止。
- 递归式：问题如何缩小规模。

函数递归调用时，系统会使用调用栈保存每一层函数的现场信息。

常见需要保存的信息包括：

- 返回地址
- 实参
- 局部变量
- 临时计算结果

例如阶乘：

```c
int Factorial(int n) {
    if (n == 0 || n == 1) {
        return 1;
    }

    return n * Factorial(n - 1);
}
```

当计算 `Factorial(4)` 时，调用过程会一直深入到 `Factorial(1)`，然后再逐层返回。

## 4.6.6 深度优先搜索

深度优先搜索简称 DFS。递归形式的 DFS 本质上使用了系统调用栈，非递归形式通常需要显式使用栈。

基本思想：

- 从一个顶点出发。
- 访问一个未访问的邻接点，并继续深入。
- 若当前顶点没有未访问邻接点，则回退。
- 重复以上过程，直到所有可达顶点都被访问。

非递归 DFS 的栈保存“接下来需要继续探索的顶点”。

## 4.6.7 408 常考点

### 判断出栈序列是否合法

给定入栈序列和出栈序列时，可以用模拟栈判断。

方法：

1. 按入栈序列依次入栈。
2. 每次入栈后，只要栈顶等于当前需要出栈的元素，就立刻出栈。
3. 最后若所有元素都能按目标序列出栈，则序列合法。

::: details 点击展开代码

```c
bool IsValidPopSequence(int pushSeq[], int popSeq[], int n) {
    int stack[MaxSize];
    int top = -1;
    int j = 0;

    for (int i = 0; i < n; i++) {
        stack[++top] = pushSeq[i];

        while (top != -1 && j < n && stack[top] == popSeq[j]) {
            top--;
            j++;
        }
    }

    return j == n;
}
```

:::

### 卡特兰数

若 `n` 个不同元素按固定顺序入栈，则合法出栈序列个数为第 `n` 个卡特兰数：

$$
C_n = \frac{1}{n + 1}\binom{2n}{n}
$$

常见数值：

| n | 合法出栈序列数 |
| --- | --- |
| 1 | 1 |
| 2 | 2 |
| 3 | 5 |
| 4 | 14 |
| 5 | 42 |

### 栈适合解决的问题特征

看到下面关键词，可以优先联想到栈：

- 最近匹配
- 嵌套结构
- 逆序处理
- 回退
- 递归
- 深度优先


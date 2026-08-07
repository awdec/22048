<h1><center>第三节 同步与互斥</center></h1>

并发进程以不可预知的速度推进。同步与互斥用于约束执行次序、保护共享数据，是保证并发程序正确性的基础。

## 1. 同步与互斥的基本概念

### 1.1 同步与互斥

- **同步**（直接制约关系）：多个进程为了完成同一任务，需要按照某种先后次序协调执行。例如消费者必须等待生产者放入产品。
- **互斥**（间接制约关系）：多个进程竞争同一共享资源时，一个进程访问期间不允许其他进程同时访问。例如多个进程不能同时修改同一队列。

一次只允许一个进程使用的资源称为**临界资源**，如共享变量、打印机和共享缓冲区。访问临界资源的代码称为**临界区**：

```text
do {
    entry section      // 进入区：申请进入临界区
    critical section   // 临界区：访问临界资源
    exit section       // 退出区：释放访问权
    remainder section  // 剩余区：执行其他代码
} while (true)
```

实现临界区互斥应遵循：

1. **空闲让进**：临界区空闲时，应允许一个申请者立即进入。
2. **忙则等待**：已有进程进入临界区时，其他申请者必须等待。
3. **有限等待**：申请进入的进程应在有限时间内得到机会，避免饥饿。
4. **让权等待**：不能进入临界区的进程应释放 CPU，避免忙等待浪费处理器。

前三条是正确实现互斥的基本要求；让权等待是提高系统效率的理想要求，自旋算法通常不满足它。

## 2. 实现临界区互斥的基本方法

### 2.1 软件实现方法

软件方法仅依靠共享变量和普通读写指令协调进程。

| 方法 | 基本思想 | 主要问题 |
| --- | --- | --- |
| 单标志法 | 用 `turn` 指定允许进入的进程 | 严格轮流，违反空闲让进 |
| 双标志先检查法 | 先检查对方标志，再设置自己的标志 | 检查与设置不是原子操作，可能同时进入 |
| 双标志后检查法 | 先设置自己的标志，再检查对方标志 | 双方同时置位时都无法进入，违反空闲让进和有限等待 |
| Peterson 算法 | “表达意愿”后主动把机会让给对方 | 正确解决两个进程互斥，但存在忙等待 |

Peterson 算法的核心结构如下：

```text
flag[i] = true
turn = j
while (flag[j] && turn == j) ;

临界区

flag[i] = false
```

`flag[i]` 表示进程 $P_i$ 想进入临界区，`turn` 用于在双方同时申请时决定让谁先进入。经典理论模型下，它满足空闲让进、忙则等待和有限等待。

### 2.2 硬件实现方法

#### 中断屏蔽

进入临界区前关闭中断，退出后恢复中断，可防止单处理器上当前进程被切换。该方法只适合内核中的短临界区，不应交给用户程序，也不能单独保证多处理器间互斥。

#### 原子指令

`TestAndSet`、`Swap`、`CompareAndSwap` 等指令能原子地完成“读取—判断—修改”，可用于构造锁：

```text
while (TestAndSet(lock)) ;
临界区
lock = false
```

原子指令适用于多处理器，且实现简单；但等待进程会持续占用 CPU，并可能出现饥饿。

## 3. 互斥锁

互斥锁用“加锁—访问临界区—解锁”保护共享资源：

```text
acquire(mutex)
临界区
release(mutex)
```

`acquire` 和 `release` 必须是原子操作，并严格成对出现。按等待方式可分为：

| 类型 | 锁不可用时的行为 | 适用场景 |
| --- | --- | --- |
| 自旋锁 | 循环检查锁，持续占用 CPU | 多核系统、临界区很短、线程不宜睡眠 |
| 阻塞式互斥锁 | 线程阻塞并让出 CPU，解锁时再唤醒 | 等待可能较长、允许睡眠 |

自旋时间过长会浪费处理器；临界区很短时，阻塞和唤醒的上下文切换开销又可能高于自旋。选择哪种锁要结合等待时间和运行环境。

持锁期间应避免长时间阻塞；若需获取多个锁，应统一加锁顺序，否则可能形成循环等待并导致死锁。

## 4. 信号量

信号量由一个整数值和等待队列组成，只能通过两个原子操作访问：

```text
wait(S):                 signal(S):
    S.value--                S.value++
    if S.value < 0:          if S.value <= 0:
        当前进程阻塞             唤醒一个等待进程
```

`wait`、`signal` 也记作 P、V 操作。记录型信号量让等待进程阻塞，满足让权等待；若信号量值为负，其绝对值通常表示等待进程数。

### 4.1 实现互斥

将互斥信号量初始化为 $1$：

```text
semaphore mutex = 1

wait(mutex)
临界区
signal(mutex)
```

对同一临界资源的所有进程必须使用同一个互斥信号量，并保证 P、V 操作成对出现。

### 4.2 实现同步

若进程 $P_1$ 中的语句 A 必须先于进程 $P_2$ 中的语句 B，设同步信号量 `S=0`：

```text
P1: A; signal(S)
P2: wait(S); B
```

### 4.3 管理一类资源

资源信号量的初值等于可用资源数量。每申请一个资源执行 `wait`，释放时执行 `signal`。互斥信号量描述“能否进入临界区”，资源信号量描述“还剩多少个资源”，二者不可混用。

## 5. 经典同步问题

### 5.1 生产者—消费者问题

容量为 $n$ 的有界缓冲区使用三个信号量：

```text
semaphore empty = n, full = 0, mutex = 1

producer:                    consumer:
    生产产品                     wait(full)
    wait(empty)                  wait(mutex)
    wait(mutex)                  取出产品
    放入产品                     signal(mutex)
    signal(mutex)                signal(empty)
    signal(full)                 消费产品
```

同步用的资源信号量应先于互斥信号量执行 `wait`。若生产者先锁住缓冲区再等待空位，在缓冲区已满时会占锁阻塞，消费者无法取出产品，造成死锁。

### 5.2 读者—写者问题

允许多个读者同时读，但写者必须与其他读者、写者互斥。读者优先方案的核心是：第一个读者锁住共享文件，最后一个读者释放它，并用另一个互斥量保护读者计数。

读者优先可能使写者饥饿；写者优先可能使读者长期等待。公平方案需要设置等待队列或额外信号量，按到达次序协调双方。

下面给出一种写者优先方案。只要已有写者等待，`readTry` 就阻止新读者进入；已经开始读的读者仍可正常退出：

```text
semaphore resource = 1, readTry = 1
semaphore rmutex = 1, wmutex = 1
int readCount = 0, writeCount = 0

reader:
    wait(readTry)
    wait(rmutex)
    readCount++
    if readCount == 1: wait(resource)
    signal(rmutex)
    signal(readTry)

    读

    wait(rmutex)
    readCount--
    if readCount == 0: signal(resource)
    signal(rmutex)

writer:
    wait(wmutex)
    writeCount++
    if writeCount == 1: wait(readTry)
    signal(wmutex)

    wait(resource)
    写
    signal(resource)

    wait(wmutex)
    writeCount--
    if writeCount == 0: signal(readTry)
    signal(wmutex)
```

### 5.3 哲学家进餐问题

若每位哲学家都先拿左筷子，再等待右筷子，可能形成循环等待。常见解决方法有：

- 最多允许 $n-1$ 位哲学家同时尝试取筷子。
- 要求奇数号与偶数号哲学家以不同顺序取筷子。
- 将两支筷子的取得操作封装为一次受互斥保护的申请。

避免死锁不等于避免饥饿；还需公平的唤醒策略保证有限等待。

使用“最多允许 $n-1$ 人取筷子”的完整方案如下：

```text
semaphore room = n - 1
semaphore chopstick[n] = {1, 1, ..., 1}

philosopher(i):
    while true:
        思考
        wait(room)
        wait(chopstick[i])
        wait(chopstick[(i + 1) % n])
        进餐
        signal(chopstick[(i + 1) % n])
        signal(chopstick[i])
        signal(room)
```

### 5.4 吸烟者问题

桌上需要烟草、纸和胶水三种材料。三个吸烟者各自拥有其中一种，供应者每次随机放置另外两种，拥有第三种材料的吸烟者完成吸烟后再通知供应者。该问题体现了“一对多”的同步关系，可为三种材料组合分别设置同步信号量。

```text
semaphore tobaccoPaper = 0
semaphore tobaccoGlue = 0
semaphore paperGlue = 0
semaphore done = 0

supplier:
    while true:
        随机放置一种材料组合，并 signal(对应组合)
        wait(done)

smokerWithGlue:
    while true:
        wait(tobaccoPaper)
        卷烟并吸烟
        signal(done)

smokerWithPaper:
    while true:
        wait(tobaccoGlue)
        卷烟并吸烟
        signal(done)

smokerWithTobacco:
    while true:
        wait(paperGlue)
        卷烟并吸烟
        signal(done)
```

## 6. 管程与条件变量

管程是一种高级同步机制，将以下内容封装为一个模块：

- 共享数据结构。
- 操作共享数据的过程。
- 初始化代码。
- 条件变量。

编译器或运行时保证任一时刻最多只有一个进程（线程）在管程内执行，因此调用者不必显式编写 P、V 操作来保证管程内部互斥。

条件变量用于等待特定条件，通常提供 `wait` 和 `signal`：

- `x.wait()`：调用者原子地释放管程互斥权，进入条件变量 `x` 的等待队列。
- `x.signal()`：唤醒 `x` 上的一个等待者；若无人等待，则不产生可供以后使用的“许可”。

条件变量本身不保存资源数量，程序必须使用共享状态记录条件，并在被唤醒后重新检查：

```text
while (条件不成立)
    x.wait()

访问共享资源
```

::: warning 易错点
信号量的 `signal` 会增加计数，即使当前无人等待也能保留一次许可；条件变量的 `signal` 在无人等待时通常不会留下记录。条件变量必须与管程中的共享状态和互斥机制配合使用。
:::

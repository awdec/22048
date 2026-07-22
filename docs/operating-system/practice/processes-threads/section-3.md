<style>
 body { font-family: "楷体" }
</style>

<h1><center>第三节 同步与互斥</center></h1>

::: info 例 1
有界缓冲区容量为 $5$，应如何初始化生产者—消费者问题中的 empty、full 和 mutex？
:::

::: details 解析
$$
empty=5,\qquad full=0,\qquad mutex=1.
$$
empty 表示空槽数量，full 表示产品数量，mutex 保护缓冲区临界区。
:::

::: info 例 2
生产者先执行 wait(mutex)，再执行 wait(empty)，为什么可能死锁？
:::

::: details 解析
当缓冲区已满时，生产者取得 mutex 后在 empty 上阻塞；消费者必须取得 mutex 才能取走产品并增加 empty，却因 mutex 被生产者占用而阻塞，双方无法推进。
:::

::: info 例 3
进程 $P_1$ 的语句 A 必须先于 $P_2$ 的语句 B，写出信号量操作。
:::

::: details 解析
设同步信号量 $S=0$：

```text
P1: A; signal(S)
P2: wait(S); B
```

若 B 先到达，会在 $S$ 上等待，直到 A 完成。
:::

::: info 例 4
自旋锁和阻塞式互斥锁分别适合什么等待场景？
:::

::: details 解析
自旋锁等待时占用处理器，适合临界区很短且线程不能睡眠的场景；阻塞式互斥锁会让等待线程休眠，适合等待时间较长的场景，但阻塞和唤醒存在切换开销。
:::

::: info 例 5
条件变量的 `wait` 为什么必须同时释放管程的互斥权？
:::

::: details 解析
若等待线程仍占有互斥权，其他线程无法进入管程改变条件，等待者也就无法被有效唤醒。因此 `wait` 要原子地释放互斥权并进入条件等待队列。
:::

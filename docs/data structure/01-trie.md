<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>01-Trie</center></h1>


### 普通 01-Trie

01-Trie 与 Trie 结构相同，区别在于维护的字符集是 $\{0,1\}$。

01-Trie 空间复杂度为 $O(n\log n)$。

::: details 点击展开代码

```cpp
struct Trie01 {
    int root, idx;
    int son[N << 5][2];
    void init() {
        for (int i = 0; i <= idx; i++)
            memset(son[i], 0, sizeof son[i]);
        root = idx = 0;
    }
    void insert(int &p, int v, int x) {
        if (!p)
            p = ++idx;
        if (x < 0) {
            return;
        }
        int now = (v >> x) & 1;
        insert(son[p][now], v, x - 1);
    }
    int query_xor_max(int p, int v, int x) {
        if (x < 0) {
            return 0;
        }
        int now = (v >> x) & 1;
        if (son[p][now ^ 1])
            return query_xor_max(son[p][now ^ 1], v, x - 1) | (1 << x);
        return query_xor_max(son[p][now], v, x - 1);
    }
};
```

:::


### 可持久化 01-Trie

一般可持久化 Trie 仅用于 01-Trie，通过差分可维护区间二进制信息。

由于 Trie 的特殊性，进行可持久化不需要额外空间，空间复杂度仍为：$O(n\log n)$。

::: details 点击展开代码

```cpp
struct PTrie01 {
    int root[N], idx;
    int sz[N << 5], son[N << 5][2];
    void init() {
        for (int i = 0; i <= idx; i++)
            memset(son[i], 0, sizeof son[i]);
        for (int i = 1; i <= idx; i++)
            root[i] = sz[i] = 0;
        idx = 0;
    }
    void insert(int p, int &q, int v, int x) {
        if (!q)
            q = ++idx;
        sz[q] = sz[p];
        sz[q]++;
        if (x < 0)
            return;
        int now = (v >> x) & 1;
        son[q][now ^ 1] = son[p][now ^ 1];
        insert(son[p][now], son[q][now], v, x - 1);
    }
    int query_xor_max(int p, int q, int v, int x) {
        if (x < 0) {
            return 0;
        }
        int now = (v >> x) & 1;
        if (sz[son[p][now ^ 1]] - sz[son[q][now ^ 1]] < 0)
            return query_xor_max(son[p][now ^ 1], son[q][now ^ 1], v, x - 1) |
                   (1 << x);
        return query_xor_max(son[p][now], son[q][now], v, x - 1);
    }
};
```

:::

### 压缩 01-Trie

Patricia Trie

容易发现，01-Trie 在插入时，只有当同时拥有左右儿子时，才会分叉。

不分叉时，单链的递归路径是唯一的，那么就可以尝试把它压缩起来。

> 引理：对于一棵除了叶子，其他节点儿子数都是 $2$ 的树而言，非叶子数 $=$ 叶子数 $-1$。

叶子数为插入的元素数量，为 $n$，那么 Patricia Trie 的需要的节点数即为 $2n$。

在时间复杂度不变的前提下，将 01-Trie 的空间复杂度优化至 $O(n)$。

且因为保证了非叶子的左右儿子一定是存在的，所以查询比 01-Trie 更加方便。

::: details 点击展开代码
```cpp
struct node
{
    int son[2], dep, val;
    int cnt;
};

struct PatriciaTrie
{
    node tr[N << 1];
    int root, idx;
    void insert(int &p, int dep, int v)
    {
        if (!p)
        {
            p = ++idx;
            tr[p] = {{0, 0}, -1, v};
            return;
        }
        int diff = v ^ tr[p].val;
        int mask1 = (1ll << dep) - 1;
        int mask2 = (tr[p].dep == -1) ? ~0 : ~((1ll << (tr[p].dep + 1)) - 1);
        diff &= (mask1 & mask2);
        if (diff)
        {
            int high = __lg(diff), now = ++idx;
            tr[now].dep = high;
            tr[now].val = tr[p].val;
            tr[now].son[(tr[p].val >> high) & 1] = p;
            tr[now].son[(v >> high) & 1] = ++idx;
            tr[idx] = {{0, 0}, -1, v};

            p = now;
            return;
        }
        if (tr[p].dep == -1)
            return;
        insert(tr[p].son[(v >> tr[p].dep) & 1], tr[p].dep, v);
    }
    bool remove(int &p, int dep, int v)
    {
        if (!p)
            return 0;

        int diff = v ^ tr[p].val;
        int mask1 = (1LL << dep) - 1;
        int mask2 = (tr[p].dep == -1) ? ~0 : ~((1LL << (tr[p].dep + 1)) - 1);
        if (diff & mask1 & mask2)
            return 0;
        if (tr[p].dep == -1)
        {
            if (tr[p].val == v)
            {
                tr[p].cnt--;
                if (!tr[p].cnt)
                {
                    p = 0;
                    return 1;
                }
            }
            return 0;
        }

        int now = (v >> tr[p].dep) & 1;
        if (remove(tr[p].son[now], tr[p].dep, v))
        {
            p = tr[p].son[now ^ 1];
        }
        else
        {
            if (tr[p].val == v)
            {
                tr[p].val = tr[tr[p].son[0]].val;
            }
        }
        return 0;
    }
    int query_max(int v)
    {
        int now = root;
        while (~tr[now].dep)
        {
            int cur = (v >> tr[now].dep) & 1;
            now = tr[now].son[cur ^ 1];
        }
        return v ^ tr[now].val;
    }
};

```
:::


Patricia Trie 同样可以持久化，但是时空复杂度与可持久化 01-Trie 一致，所以不作展开。


### 压位 01-Trie

压位 01-Trie 本质是一棵 $w$ 叉树（通常 $w=64$，即计算机 `unsigned long long` 的位数）。

每个节点用一个 `unsigned long long` 压缩儿子节点状态，如果 $mask$ 的第 $i$ 为 $1$ 表示第 $i$ 个儿子存在。这样建出来的树高是 $O(\log_{64}V)$，其中 $V$ 表示的值域大小。

通过位运算计算访问相应的节点。

因为压位 01-Trie 只存储「是否存在儿子」的信息，所以不显示建树，直接将每一层的节点拍平成数组。

默认维护不可重集，空间复杂度：$O(\dfrac{V}{w})$，如果维护可重集，需要增加一个计数数组，使用静态数组或者哈希表，空间复杂度变劣。

所有操作时间复杂度均为 $O(\log_wV)$。

#### 插入/删除

遍历每一层，更新对应节点的儿子节点状态即可。

#### 前驱/后继

先自下而上，向前/后找到第一个可转向的层（也就是子树存在叶子的节点），再向下找到那个点。

#### 最大值/最小值

其实可以直接转换成判断值域的边界是否存在后查前驱后继。

自上而下，找到最高/最低位 $1$ 即可。

::: details 点击展开代码
```cpp
struct FastTrie
{
    int V;
    vector<vector<u64>> tr;
    vector<int> nbits;
    void init(int V)
    {
        this->V = V;
        tr.clear();
        nbits.clear();
        int idx = 0;
        int now = V + 1;
        while (1)
        {
            idx++;
            int cur = (now + 63) >> 6;
            if (cur == 1)
                break;
            now = cur;
        }
        tr.reserve(idx);
        nbits.reserve(idx);
        now = V + 1;
        while (1)
        {
            nbits.emplace_back(now);
            int cur = (now + 63) >> 6;
            tr.emplace_back(cur, 0ULL);
            if (cur == 1)
                break;
            now = cur;
        }
    }
    int lowbit_pos(u64 x)
    {
        return __builtin_ctzll(x);
    }

    int highbit_pos(u64 x)
    {
        return 63 - __builtin_clzll(x);
    }

    u64 prefix_mask(int b)
    {
        return b == 63 ? ~0ULL : ((1ULL << (b + 1)) - 1);
    }

    bool empty()
    {
        return tr.empty() || tr.back()[0] == 0;
    }

    int next_in_dep(int dep, int pos)
    {
        if (pos >= nbits[dep])
            return -1;
        int w = pos >> 6;
        int b = pos & 63;
        u64 cur = tr[dep][w] & (~0ULL << b);
        if (cur)
        {
            int res = (w << 6) + lowbit_pos(cur);
            return res < nbits[dep] ? res : -1;
        }
        if (dep + 1 >= tr.size())
            return -1;
        int nw = next_in_dep(dep + 1, w + 1);
        if (nw == -1)
            return -1;
        int res = (nw << 6) + lowbit_pos(tr[dep][nw]);
        return res < nbits[dep] ? res : -1;
    }

    int prev_in_dep(int dep, int pos)
    {
        if (pos < 0)
            return -1;
        if (pos >= nbits[dep])
            pos = nbits[dep] - 1;
        int w = pos >> 6;
        int b = pos & 63;
        u64 cur = tr[dep][w] & prefix_mask(b);
        if (cur)
        {
            int res = (w << 6) + highbit_pos(cur);
            return res < nbits[dep] ? res : -1;
        }
        if (dep + 1 >= tr.size())
            return -1;
        int pw = prev_in_dep(dep + 1, w - 1);
        if (pw == -1)
            return -1;
        int res = (pw << 6) + highbit_pos(tr[dep][pw]);
        return res < nbits[dep] ? res : -1;
    }
    bool contains(int x)
    {
        int w = x >> 6;
        int b = x & 63;
        return (tr[0][w] >> b) & 1ULL;
    }
    void insert(int x)
    {
        int w0 = x >> 6;
        int b0 = x & 63;
        u64 m0 = 1ULL << b0;
        if (tr[0][w0] & m0)
            return;
        int id = x;
        for (int dep = 0; dep < tr.size(); dep++)
        {
            int w = id >> 6;
            int b = id & 63;
            u64 m = 1ULL << b;
            u64 old = tr[dep][w];
            tr[dep][w] |= m;
            if (old)
                break;
            id = w;
        }
    }
    void erase(int x)
    {
        int w0 = x >> 6;
        int b0 = x & 63;
        u64 m0 = 1ULL << b0;
        if (!(tr[0][w0] & m0))
            return;
        int id = x;
        for (int dep = 0; dep < tr.size(); dep++)
        {
            int w = id >> 6;
            int b = id & 63;
            u64 m = 1ULL << b;
            tr[dep][w] &= ~m;
            if (tr[dep][w])
                break;
            id = w;
        }
    }
    int get_min()
    {
        if (empty())
            return 0;
        int top = tr.size() - 1;
        int id = lowbit_pos(tr[top][0]);
        for (int dep = top - 1; dep >= 0; dep--)
        {
            id = (id << 6) + lowbit_pos(tr[dep][id]);
        }
        return id;
    }
    int get_max()
    {
        if (empty())
            return 0;
        int top = tr.size() - 1;
        int id = highbit_pos(tr[top][0]);
        for (int dep = top - 1; dep >= 0; dep--)
        {
            id = (id << 6) + highbit_pos(tr[dep][id]);
        }
        return id;
    }
    int get_prev(int x)
    {
        if (x <= 1 || empty())
            return 0;
        int p = min(x - 1, V);
        int res = prev_in_dep(0, p);
        return res >= 1 ? res : 0;
    }
    int get_next(int x)
    {
        if (x >= V || empty())
            return 0;
        int p = max(1, x + 1);
        int res = next_in_dep(0, p);
        return res >= 1 && res <= V ? res : 0;
    }
};
```
:::

### 动态开点压位 01-Trie

如果值域达到 $10^{8}$ 甚至更大，那么静态数组就不能支持了。

一个办法是直接恢复到显式地把树建出来（因为 01-Trie 本来就是动态开点的，所以其实就是恢复到了原本的写法），但是这样要存儿子节点的编号。

如果直接存，空间复杂度为 $O(nw\log_wV)$，使用 `map` 维护儿子，时空复杂度均多乘一个 $O(\log w)$，优势变小。

可以用于集合大小不大，但是询问次数爆炸、值域爆炸，并且强制在线的情况。



::: details 点击展开代码
```cpp
// 没啥用，暂略
```
:::
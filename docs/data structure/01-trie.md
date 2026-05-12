<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>01-Trie</center></h1>


### 普通 01-Trie

01-Trie 与 Trie 结构相同，区别在于维护的字符集是 $\{0,1\}$。

01-Trie 空间复杂度为 $O(n\log n)$。

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


### 可持久化 01-Trie

一般可持久化 Trie 仅用于 01-Trie，通过差分可维护区间二进制信息。

由于 Trie 的特殊性，进行可持久化不需要额外空间，空间复杂度仍为：$O(n\log n)$。

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

### 压缩 01-Trie

Patricia Trie

容易发现，01-Trie 在插入时，只有当同时拥有左右儿子时，才会分叉。

不分叉时，单链的递归路径是唯一的，那么就可以尝试把它压缩起来。

> 对于一棵除了叶子，其他节点度数都是 $2$ 的树而言，非叶子数 $=$ 叶子数 $-1$。

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

struct FastTrie
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
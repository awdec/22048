<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>树套树</center></h1>

在算法竞赛中，我们有时需要维护多维度信息。在这种时候，可以使用树套树来维护。​树套树简单来说就是树形数据结构上的每一个节点都维护了一个树形结构，而不是简单的几个信息。

​一般而言，是线段树的每一个节点维护了另一个数据结构，因为数据结构时空复杂度往往和节点数有关，线段树上所有节点区间长度之和是 $O(n\log n)$ 级别的，所以树套树的时空复杂度就相当于是一个长度为 $O(n\log n)$ 的数据结构。

​往往外层线段树只是用于维护内层数据结构，信息还是由内层数据结构维护。

​树套树的询问，同样依托于线段树的核心性质：一个区间 $[l,r]$ 在线段树上是 $O(\log n)$ 个节点，所以树套树的询问相当于将 $O(\log n)$ 个内层数据结构的信息询问后进行合并。时间复杂度为 $O(w\log n)$，其中 $w$ 是单个内层数据结构单次询问的时间。

​对于单点修改操作，只会涉及到线段树上 $O(\log n)$ 个节点，所以树套树的修改相当于对 $O(\log n)$ 个内层数据结构进行修改。时间复杂度为 $O(w\log n)$，其中 $w$ 是单个内层数据结构修改的时间。注意不要只修改叶子然后用 `push_up` 维护祖先节点，那样依赖子节点信息的重构显然时间复杂度会爆炸。

​至此，树套树与仅使用内层数据结构维护信息相比，不仅支持了区间询问，还支持了修改操作。

## 树状数组套 DS

### 树状数组套树状数组

实际上就是所谓二维树状数组。

单点修改和二维矩形前缀询问时间复杂度均为：$O(\log^2n)$。

空间复杂度：$O(n^2)$。

:::details 点击展开代码
```cpp
struct BBIT
{
    int tr[N][N], n, m;
    int lowbit(int x)
    {
        return x & -x;
    }
    void update(int x, int y, int v)
    {
        for (; x <= n; x += lowbit(x))
            for (int i = y; i <= m; i += lowbit(i))
                tr[x][i] += v;
    }
    int query(int x, int y)
    {
        int res = 0;
        for (; x; x -= lowbit(x))
            for (int i = y; i; i -= lowbit(i))
                res += tr[x][i];
        return res;
    }
};
```
:::

### 树状数组套 vector 

对于单点修改的操作 $(x,y)$ 离线处理 $y$ 被哪些 $x$ 管辖。这一步和一维树状数组是一样的。

所以每个只会影响 $O(\log n)$ 个外层树状数组。

空间复杂度：$O(n\log n)$。

前缀询问时，对于内层 vector 再维护一个数据结构，这里可以直接选择再套一个树状数组。

时间复杂度：$O(\log^2n)$。

实现上常数较小。

:::details 点击展开代码
```cpp
struct BitVec
{
    vector<vector<int>> tr, vec;
    vector<int> cnt;
    int n;
    int lowbit(int x)
    {
        return x & -x;
    }
    void init(vector<pii> &a)
    {
        n = a[0].first;
        for (auto [u, v] : a)
        {
            n = max(n, u);
        }
        tr.resize(n + 1);
        vec.resize(n + 1);
        cnt.assign(n + 1, 0);
        for (auto [u, v] : a)
            for (; u <= n; u += lowbit(u))
                cnt[u]++;
        for (int i = 1; i <= n; i++)
            vec[i].reserve(cnt[i]);
        for (auto [u, v] : a)
            for (; u <= n; u += lowbit(u))
                vec[u].push_back(v);
        for (int i = 1; i <= n; i++)
        {
            sort(vec[i].begin(), vec[i].end());
            vec[i].erase(unique(vec[i].begin(), vec[i].end()), vec[i].end());
            tr[i].assign(vec[i].size() + 1, 0);
        }
    }
    void update(int x, int y, int v)
    {
        for (; x <= n; x += lowbit(x))
        {
            int now = lower_bound(vec[x].begin(), vec[x].end(), y) - vec[x].begin() + 1;
            for (int i = now; i <= vec[x].size(); i += lowbit(i))
                tr[x][i] += v;
        }
    }
    int query(int x, int y)
    {
        int res = 0;
        for (; x; x -= lowbit(x))
        {
            int now = upper_bound(vec[x].begin(), vec[x].end(), y) - vec[x].begin();
            for (int i = now; i; i -= lowbit(i))
                res += tr[x][i];
        }
        return res;
    }
};
```
:::

### 树状数组套动态开点线段树

和套 vector 类似地，只是内层使用动态开点线段树在线维护。

但是实际实现上，不用生硬地给每一个树状数组节点单独开一个动态开点线段树结构。

可以给树状数组节点一个 $root$ 数组，每个节点分配一个根，这样就可以使用同一个动态开点线段树结构。

求解区间第 $k$ 大时，对于涉及到的 $O(\log n)$ 个树状数组节点，可以同步维护左右子树走向。这时可以发现，这和“主席树”的结构就很像了（虽然两者之间没有什么实际关系），所以被俗称“带修主席树”。

注：实际上在特化维护带修区间第 $k$ 大时，还有一些常数的技巧，这里不做展开。

:::details 点击展开代码
```cpp
struct BitSeg
{
    struct node
    {
        int sum, ls, rs;
    } tr[N * 400];
    int root[N];
    int n, m, idx;
    void push_up(int p)
    {
        tr[p].sum = tr[ls(p)].sum + tr[rs(p)].sum;
    }
    void update(int &p, int l, int r, int x, int v)
    {
        int mid = l + r >> 1;
        if (!p)
            p = ++idx;
        if (l == r)
        {
            tr[p].sum += v;
            return;
        }
        if (x <= mid)
            update(ls(p), l, mid, x, v);
        else
            update(rs(p), mid + 1, r, x, v);
        push_up(p);
    }
    int lowbit(int x)
    {
        return x & -x;
    }
    void init(int n, int m)
    {
        this->n = n;
        this->m = m;
        for (int i = 1; i <= idx; i++)
            tr[i] = {0, 0, 0};
        idx = 0;
        for (int i = 1; i <= n; i++)
            root[i] = 0;
    }
    void add(int x, int v)
    {
        for (; x <= n; x += lowbit(x))
        {
            update(root[x], 0, m, v, 1);
        }
    }
    void del(int x, int v)
    {
        for (; x <= n; x += lowbit(x))
        {
            update(root[x], 0, m, v, -1);
        }
    }
    int query(int l, int r, int k)
    {
        static int al[40], ar[40];

        int cntl = 0, cntr = 0;
        for (int x = l - 1; x; x -= lowbit(x))
            al[++cntl] = root[x];
        for (int x = r; x; x -= lowbit(x))
            ar[++cntr] = root[x];
        int L = 0, R = m;
        while (L != R)
        {
            int mid = L + R >> 1;
            int cnt = 0;
            for (int i = 1; i <= cntr; i++)
            {
                cnt += tr[ls(ar[i])].sum;
            }
            for (int i = 1; i <= cntl; i++)
            {
                cnt -= tr[ls(al[i])].sum;
            }
            if (k <= cnt)
            {
                for (int i = 1; i <= cntl; i++)
                    al[i] = ls(al[i]);
                for (int i = 1; i <= cntr; i++)
                    ar[i] = ls(ar[i]);
                R = mid;
            }
            else
            {
                k -= cnt;
                for (int i = 1; i <= cntl; i++)
                    al[i] = rs(al[i]);
                for (int i = 1; i <= cntr; i++)
                    ar[i] = rs(ar[i]);
                L = mid + 1;
            }
        }
        return L;
    }
};
```
:::

空间复杂度：$O(n\log^2n)$，单点修改和区间询问时间复杂度均为 $O(\log^2n)$。

## 线段树套 DS

### 线段树套动态开点线段树

通常是线段树套权值线段树。

外层线段树上，每一个节点维护一棵动态开点线段树.

时空复杂度均为：$O(n\log^2 n)$。

### 线段树套平衡树

外层线段树上，每一个节点维护了一棵平衡树。

时间复杂度：$O(n\log^2n)$。

空间复杂度：$O(n\log n)$。

## 分块套 DS

外层使用分块维护，每个块维护一棵动态开点线段树。

空间复杂度：$O(n\log n)$。

询问时，散块暴力，整块

时间复杂度：
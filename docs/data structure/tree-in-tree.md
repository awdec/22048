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
        cnt.assign(n + 1, 0);
        for (auto [u, v] : a)
            for (; u <= n; u += lowbit(u))
                cnt[u]++;
        for (int i = 1; i <= n; i++)
            vec[i].resize(cnt[i]);
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
            for (int i = now; i <= vec[i].size(); i += lowbit(i))
                tr[x][i] += v;
        }
    }
    int query(int x, int y)
    {
        int res = 0;
        for (; x; x -= lowbit(x))
        {
            int now = lower_bound(vec[x].begin(), vec[x].end(), y) - vec[x].begin() + 1;
            for (int i = now; i; i -= lowbit(i))
                res += tr[x][i];
        }
        return res;
    }
};
```
:::

### 树状数组套动态开点线段树



## 线段树套 DS

### 线段树套动态开点线段树

通常是线段树套权值线段树。

外层线段树上，每一个节点维护一棵动态开点线段树.

时空复杂度均为：$O(n\log^2 n)$。

外层线段树上，每一个节点维护了一棵平衡树。

时间复杂度：$O(n\log^2n)$。

空间复杂度：$O(n\log n)$。

### 线段树套平衡树

## 分块套 DS

外层使用分块维护，每个块维护一棵动态开点线段树。

空间复杂度：$O(n\log n)$。

询问时，散块暴力，整块

时间复杂度：


## 单点修改区间 k-th：

​要求支持单点赋值的区间 rank、区间 k-th、区间前驱、区间后继。

​全局询问版本是平衡树经典问题，对于区间版本，使用线段树套平衡树后，即划分成了 $O(\log n)$ 个独立的平衡树，合并结果即可。但是因为平衡树的形式不是唯一的，所以区间 k-th 不能简单合并。一个简单的解决办法是用二分转换成区间 rank 问题，单次时间复杂度 $O(\log^3n)$。维护内层平衡树时，可以回收空间重复利用（卡常）。

​若使用线段树套权值线段树，其它操作时间复杂度不变，但是因为权值线段树形态相同，所以 $O(\log n)$ 棵权值线段树可以一起做 k-th。具体而言，$O(\log n)$ 棵权值线段树维护同一个节点，若 $O(\log n)$ 棵权值线段树左儿子 $sz$ 之和大于等于，则一起递归左儿子，反之一起递归右儿子。单次时间复杂度：$O(\log^2n)$。

因为这个全局二分求解 k-th 的思想和主席树相同，且和解决静态区间 k-th 的主席树相比，这里支持了修改，所以把这种 trick 俗称为“带修主席树”。
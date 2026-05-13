<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>Sqrt Tree</center></h1>


## Sqrt Tree

​Sqrt Tree 可以 $O(n\log\log n)$ 预处理，$O(1)$ 区间询问，支持 $O(\sqrt n)$ 单点修改。

但是采用 `vector` 实现常数貌似有点太大了，码量也很大，仅供参考。娱乐性大于实用性。

​考虑序列分块，将原序列分成 $\sqrt n$ 块，每块长 $\sqrt n$，每一块内维护前后缀，若询问区间不在同一块内，将首尾散块前后缀拼接，中间整块整取，时间复杂度 $O(\sqrt n)$，若再预处理 $B[i][j]$ 表示第 $i$ 块到第 $j$ 的区间和，预处理时间复杂度 $O(n)$。询问时中间的整块就可以 $O(1)$ 的得到结果，时间复杂度 $O(1)$。若询问区间在同一块内，无法表示，暴力维护时间复杂度：$O(\sqrt n)$。

​不妨将询问区间在同一块内的情况继续递归下去，若每次询问区间不在同一块内，都是 $O(1)$ 可以解决的，反之就递归下去，直到区间长度为 $1$，$O(1)$ 直接解决。

​因为每次递归分块长度都是 $\sqrt n$（$n$ 是当前序列长度），所以次递归序列长度都缩小至原来的 $\sqrt n$，递归 $O(\log\log n)$ 次后即会到 $1$，所以此时询问复杂度已降至 $O(\log\log n)$。空间复杂度也为 $O(n\log\log n)$。

​考虑将这个递归的过程建成一棵树，每个节点都有 $\sqrt n$ 个子节点（除了最后一块可能不足 $\sqrt n$）。

​那么递归的过程就是自下而上找到第一层存在完全包含于询问区间的块，这个过程可以二分，此时时间复杂度降至 $O(\log\log\log n)$。

​通过调整块长还可继续优化，假设每一层快长都为 $2$ 的整数幂次（自下而上递减）。令当前层块长为 $2^k$，询问区间为 $[l,r]$。考虑同一块内性质：若序列编号从 $0$ 开始，那么每一块的起点的末尾 $k$ 位均为 $0$，块长为 $2^k$ 块的终点某位 $k$ 位将被 $1$ 填满，块内包含了所有末尾 $k$ 位的变化。所以若 $l,r$ 只有末尾 $k$ 位不同，即 $l\oplus r<2^k$，则 $l,r$ 在这一层同一块内，所以要获取 $2^{k'}\le l\oplus r$，$k'=\lfloor\log_{l\oplus r}\rfloor$。对于预先设定的每层块长，预处理 $l\oplus r$ 的可能值即可单次 $O(1)$ 获取 $l,r$ 不在同一块内的层，即可 $O(1)$ 进行询问。

​关于块长 $k$ 的选定，要保证树高，不能任意选取。事实上可以发现，若 $k$ 每次只减小 $1$，那么树高为 $O(\log n)$，此时 Sqrt Tree 就是猫树。具体而言，先将原序列扩展至 $2$ 的整数幂长度后，第一次分块，块长选取 $2$ 的 $2$ 的整数幂次次（即 $2^{2^k}$）而后即可按 $\sqrt n$ 分块。树高 $O(\log\log n)$。最后一层的块长可以到 $2^1$，也可以到 $2^0$，但是都要特判特判等于块长的情况。（询问区间长度等于 $2^1$ 或 $2^0$ 直接做就行）。

​实际维护的时候，不用显式建树，只要维护若干层的分块即可。


::: details 点击展开代码
```cpp
struct SqrtTree
{
    // 对于一般问题，只需要修改这里的 op。
    static inline int op(int x, int y)
    {
        return max(x, y);
    }

    struct Layer
    {
        int n = 0;
        int k = 0;
        int S = 0;
        int block_cnt = 0;
        bool top_layer = false;

        vector<int> pre, suf;
        vector<int> between;

        inline int get_between(int lb, int rb) const
        {
            if (top_layer)
            {
                return between[lb * block_cnt + rb];
            }
            else
            {
                int g = lb >> k;
                int li = lb & (S - 1);
                int ri = rb & (S - 1);

                return between[g * S * S + li * S + ri];
            }
        }

        void build(int _k, int _n, const vector<int> &a, bool _top_layer)
        {
            k = _k;
            n = _n;
            S = 1 << k;
            top_layer = _top_layer;
            block_cnt = (n + S - 1) >> k;

            pre.assign(n + 1, 0);
            suf.assign(n + 1, 0);

            vector<int> whole(block_cnt);

            for (int b = 0; b < block_cnt; b++)
            {
                int L = (b << k) + 1;
                int R = min(n, (b + 1) << k);

                pre[L] = a[L];
                for (int i = L + 1; i <= R; i++)
                    pre[i] = SqrtTree::op(pre[i - 1], a[i]);

                suf[R] = a[R];
                for (int i = R - 1; i >= L; i--)
                    suf[i] = SqrtTree::op(a[i], suf[i + 1]);

                whole[b] = pre[R];
            }

            if (top_layer)
            {
                between.assign(block_cnt * block_cnt, 0);

                for (int i = 0; i < block_cnt; i++)
                {
                    int cur = whole[i];
                    between[i * block_cnt + i] = cur;

                    for (int j = i + 1; j < block_cnt; j++)
                    {
                        cur = SqrtTree::op(cur, whole[j]);
                        between[i * block_cnt + j] = cur;
                    }
                }
            }
            else
            {
                int group_cnt = (block_cnt + S - 1) >> k;

                between.assign(group_cnt * S * S, 0);

                for (int g = 0; g < group_cnt; g++)
                {
                    int start = g * S;
                    int end = min(block_cnt - 1, start + S - 1);

                    for (int i = start; i <= end; i++)
                    {
                        int li = i - start;
                        int cur = whole[i];

                        between[g * S * S + li * S + li] = cur;

                        for (int j = i + 1; j <= end; j++)
                        {
                            cur = SqrtTree::op(cur, whole[j]);

                            int lj = j - start;
                            between[g * S * S + li * S + lj] = cur;
                        }
                    }
                }
            }
        }

        inline int query(int l, int r) const
        {
            int bl = (l - 1) >> k;
            int br = (r - 1) >> k;

            int ans = suf[l];

            if (bl + 1 <= br - 1)
                ans = SqrtTree::op(ans, get_between(bl + 1, br - 1));

            ans = SqrtTree::op(ans, pre[r]);

            return ans;
        }
    };

    int orig_n = 0;
    int n = 0;

    vector<int> a;
    vector<Layer> layer;
    vector<short> which;

    static inline int highest_bit(int x)
    {
        return x == 0 ? 0 : 31 - __builtin_clz((unsigned)x);
    }

    void build(const vector<int> &src, int _n)
    {
        orig_n = _n;

        n = 1;
        while (n < orig_n)
            n <<= 1;

        a.assign(n + 1, 0);

        for (int i = 1; i <= orig_n; i++)
            a[i] = src[i];

        // 补到 2 的幂。正常询问不会访问补出来的位置。
        // 对本题 max 来说，补什么都不影响合法询问。
        for (int i = orig_n + 1; i <= n; i++)
            a[i] = src[orig_n];

        if (n <= 2)
            return;

        int lgN = __lg(n);

        // top_k 是不超过 log2(n) 的最大 2 的幂。
        // 例如 n = 2^17，则 top_k = 16。
        int top_k = 1;
        while ((top_k << 1) <= lgN)
            top_k <<= 1;

        vector<int> ks;
        for (int k = top_k; k >= 1; k >>= 1)
            ks.push_back(k);

        layer.reserve(ks.size());

        for (int i = 0; i < (int)ks.size(); i++)
        {
            layer.emplace_back();
            layer.back().build(ks[i], n, a, i == 0);
        }

        which.assign(n, 0);

        for (int mask = 1; mask < n; mask++)
        {
            int hb = highest_bit(mask);

            int id = 0;
            while (id + 1 < (int)ks.size() && ks[id] > hb)
                id++;

            which[mask] = (short)id;
        }
    }

    inline int query(int l, int r) const
    {
        if (l == r)
            return a[l];

        if (r == l + 1)
            return op(a[l], a[r]);

        int mask = (l - 1) ^ (r - 1);
        int id = which[mask];

        return layer[id].query(l, r);
    }
};
```
:::

可以发现，Sqrt Tree 维护信息的本质是首尾前后缀和中间整块信息预处理，和猫树是类似的。不难意识到：Sqrt Tree 在功能性上优于猫树优于 ST 表。但是常数上显然 Sqrt Tree 大于猫树大于 ST 表，所以就实际表现而言，Sqrt Tree 并不见得有多大优势。

​甚至 Sqrt Tree 在不影响预处理和询问的前提下，支持 $O(\sqrt n)$ 的单点修改。保持 $O(1)$ 询问时，$O(\sqrt n\log\log n)$ 的区间赋值；$O(\log\log n)$ 询问时，$O(\sqrt n)$ 的区间赋值。

## vBE



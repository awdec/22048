<style>
 body {
  font-family: "楷体"
}
</style>

<h1><center>K-D tree</center></h1>

K-D Tree 用于处理高维点集信息。

K-D Tree 每次将点集按照某一维度的中位数为基准分到左右两个子树。

随机意义下，动态插入树高是 $O(\log n)$ 的。

K-D Tree 一个子树对应描述了一个矩形区域，对于区域查询，可以证明跨过的矩形数量是 $O(n^{1-\frac{1}{k}})$ 级别的。时间复杂度是 $O(n^{1-\frac{1}{k}})$，其中 $k$ 是维度。

在最坏情况下，不能保证插入过程的树高，所以需要采取措施维护树高：
- 替罪羊树式重构，插入点时，如果当前左右子树大小不平衡，则暴力重构整个子树。平衡系数 $\alpha$ 一般取 $0.75$。插入均摊 $O(\log n)$。
- 二进制分组重构，插入均摊 $O(\log^2n)$。重点是 $\sum\limits_{i}O(\sqrt{2^i})=O(\sqrt n)$，所以查询的时间复杂度是不变的。

K-D Tree 询问时间复杂度较高，一般需要卡常/减枝。

:::details 点击展开代码
```cpp
struct KDTree // 同时支持 2D/3D
{
    struct node
    {
        int ls = 0, rs = 0, sz = 0, sum = 0, val = 0;
        int d[3];
        int mn[3], mx[3];
        int dim = 0;

        node()
        {
            for (int i = 0; i < 3; i++)
            {
                d[i] = 0;
                mn[i] = INF;
                mx[i] = -INF;
            }
        }
    } tr[N];

    int root, idx;
    int sec[N], cnt;
    int k;

    void init(int _k)
    {
        k = _k;
        root = idx = cnt = 0;
    }

    int make_node(int a[], int z)
    {
        ++idx;
        tr[idx] = node();
        tr[idx].ls = tr[idx].rs = 0;
        tr[idx].sz = 1;
        tr[idx].sum = tr[idx].val = z;
        tr[idx].dim = 0;
        for (int i = 0; i < k; i++)
        {
            tr[idx].d[i] = a[i];
            tr[idx].mn[i] = a[i];
            tr[idx].mx[i] = a[i];
        }
        return idx;
    }

    void push_up(int p)
    {
        auto &now = tr[p];
        now.sz = 1;
        now.sum = now.val;
        for (int i = 0; i < k; i++)
            now.mn[i] = now.mx[i] = now.d[i];

        if (ls(p))
        {
            auto &L = tr[ls(p)];
            now.sz += L.sz;
            now.sum += L.sum;
            for (int i = 0; i < k; i++)
            {
                now.mn[i] = min(now.mn[i], L.mn[i]);
                now.mx[i] = max(now.mx[i], L.mx[i]);
            }
        }
        if (rs(p))
        {
            auto &R = tr[rs(p)];
            now.sz += R.sz;
            now.sum += R.sum;
            for (int i = 0; i < k; i++)
            {
                now.mn[i] = min(now.mn[i], R.mn[i]);
                now.mx[i] = max(now.mx[i], R.mx[i]);
            }
        }
    }

    bool cmp(int a, int b, int d)
    {
        return tr[a].d[d] < tr[b].d[d];
    }

    int build(int l, int r)
    {
        if (l > r)
            return 0;

        int mn[3], mx[3];
        for (int i = 0; i < k; i++)
            mn[i] = mx[i] = tr[sec[l]].d[i];

        for (int i = l + 1; i <= r; i++)
        {
            auto now = sec[i];
            for (int j = 0; j < k; j++)
            {
                mn[j] = min(mn[j], tr[now].d[j]);
                mx[j] = max(mx[j], tr[now].d[j]);
            }
        }

        int d = 0;
        for (int i = 1; i < k; i++)
            if (mx[i] - mn[i] > mx[d] - mn[d])
                d = i;

        int mid = l + r >> 1;
        nth_element(sec + l, sec + mid, sec + r + 1,
                    [&](int a, int b)
                    {
                        return cmp(a, b, d);
                    });

        int now = sec[mid];
        tr[now].dim = d;
        ls(now) = build(l, mid - 1);
        rs(now) = build(mid + 1, r);
        push_up(now);
        return now;
    }

    void flatten(int p)
    {
        if (!p)
            return;
        flatten(ls(p));
        sec[++cnt] = p;
        flatten(rs(p));
        ls(p) = rs(p) = 0;
    }

    void rebuild(int &p)
    {
        cnt = 0;
        flatten(p);
        p = build(1, cnt);
    }

    bool bad(int p)
    {
        return max(tr[ls(p)].sz, tr[rs(p)].sz) * 4 > tr[p].sz * 3;
    }

    bool flag;
    int rebuild_father, rebuild_side = -1;

    void insertNode(int &p, int q, int father, int side)
    {
        if (!p)
        {
            p = q;
            return;
        }

        if (cmp(p, q, tr[p].dim))
            insertNode(rs(p), q, p, 1);
        else
            insertNode(ls(p), q, p, 0);

        push_up(p);

        if (bad(p))
        {
            flag = 1;
            rebuild_father = father;
            rebuild_side = side;
        }
    }

    void insert(int a[], int z)
    {
        int p = make_node(a, z);
        flag = 0;
        rebuild_father = 0;
        rebuild_side = -1;
        insertNode(root, p, 0, -1);

        if (flag)
        {
            if (!rebuild_father)
            {
                rebuild(root);
            }
            else
            {
                if (!rebuild_side)
                    rebuild(ls(rebuild_father));
                else
                    rebuild(rs(rebuild_father));
            }
        }
    }

    void insert(int x, int y, int z)
    {
        int a[3] = {x, y, 0};
        insert(a, z);
    }

    void insert(int x, int y, int z, int w)
    {
        int a[3] = {x, y, z};
        insert(a, w);
    }

    bool out(int p, int l[], int r[])
    {
        for (int i = 0; i < k; i++)
            if (r[i] < tr[p].mn[i] || tr[p].mx[i] < l[i])
                return 1;
        return 0;
    }

    bool in(int p, int l[], int r[])
    {
        for (int i = 0; i < k; i++)
            if (l[i] > tr[p].mn[i] || tr[p].mx[i] > r[i])
                return 0;
        return 1;
    }

    bool point_in(int p, int l[], int r[])
    {
        for (int i = 0; i < k; i++)
            if (l[i] > tr[p].d[i] || tr[p].d[i] > r[i])
                return 0;
        return 1;
    }

    int query(int p, int l[], int r[])
    {
        if (!p)
            return 0;

        auto &now = tr[p];

        if (out(p, l, r))
            return 0;
        if (in(p, l, r))
            return now.sum;

        int res = 0;
        if (point_in(p, l, r))
            res += now.val;
        res += query(ls(p), l, r);
        res += query(rs(p), l, r);
        return res;
    }

    int query(int p, int x, int y, int X, int Y)
    {
        int l[3] = {x, y, 0};
        int r[3] = {X, Y, 0};
        return query(p, l, r);
    }

    int query(int p, int x, int y, int z, int X, int Y, int Z)
    {
        int l[3] = {x, y, z};
        int r[3] = {X, Y, Z};
        return query(p, l, r);
    }

};

```
:::
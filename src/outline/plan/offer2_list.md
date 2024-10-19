---
title: '剑指 Offer II 题解'
headerDepth: 0
---

![](../../../assets/image/plan-8.png =500x)

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 剑指 Offer II 1 | [整数除法](https://leetcode.cn/problems/xoh6Oh) |  |  [`数学`](/outline/tag/math.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 2 | [二进制加法](https://leetcode.cn/problems/JFETK5) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`数学`](/outline/tag/math.md) [`字符串`](/outline/tag/string.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 3 | [前 n 个数字二进制中 1 的个数](https://leetcode.cn/problems/w3tCBm) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 4 | [只出现一次的数字](https://leetcode.cn/problems/WGki4K) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`数组`](/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 5 | [单词长度的最大乘积](https://leetcode.cn/problems/aseY1I) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`数组`](/outline/tag/array.md) [`字符串`](/outline/tag/string.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 6 | [排序数组中两个数字之和](https://leetcode.cn/problems/kLl5u1) |  |  [`数组`](/outline/tag/array.md) [`双指针`](/outline/tag/two-pointers.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 7 | [数组中和为 0 的三个数](https://leetcode.cn/problems/1fGaJU) |  |  [`数组`](/outline/tag/array.md) [`双指针`](/outline/tag/two-pointers.md) [`排序`](/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 8 | [和大于等于 target 的最短子数组](https://leetcode.cn/problems/2VG8Kg) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) [`前缀和`](/outline/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 9 | [乘积小于 K 的子数组](https://leetcode.cn/problems/ZVAVXX) |  |  [`数组`](/outline/tag/array.md) [`滑动窗口`](/outline/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 10 | [和为 k 的子数组](https://leetcode.cn/problems/QTMn0o) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`前缀和`](/outline/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 11 | [0 和 1 个数相同的子数组](https://leetcode.cn/problems/A1NYOS) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`前缀和`](/outline/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 12 | [左右两边子数组的和相等](https://leetcode.cn/problems/tvdfij) |  |  [`数组`](/outline/tag/array.md) [`前缀和`](/outline/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 13 | [二维子矩阵的和](https://leetcode.cn/problems/O4NDxx) |  |  [`设计`](/outline/tag/design.md) [`数组`](/outline/tag/array.md) [`矩阵`](/outline/tag/matrix.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 14 | [字符串中的变位词](https://leetcode.cn/problems/MPnaiL) |  |  [`哈希表`](/outline/tag/hash-table.md) [`双指针`](/outline/tag/two-pointers.md) [`字符串`](/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 15 | [字符串中的所有变位词](https://leetcode.cn/problems/VabMRr) |  |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`滑动窗口`](/outline/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 16 | [不含重复字符的最长子字符串](https://leetcode.cn/problems/wtcaE1) |  |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`滑动窗口`](/outline/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 17 | [含有所有字符的最短字符串](https://leetcode.cn/problems/M1oyTv) |  |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`滑动窗口`](/outline/tag/sliding-window.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 18 | [有效的回文](https://leetcode.cn/problems/XltzEq) |  |  [`双指针`](/outline/tag/two-pointers.md) [`字符串`](/outline/tag/string.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 19 | [最多删除一个字符得到回文](https://leetcode.cn/problems/RQku0D) |  |  [`贪心`](/outline/tag/greedy.md) [`双指针`](/outline/tag/two-pointers.md) [`字符串`](/outline/tag/string.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 20 | [回文子字符串的个数](https://leetcode.cn/problems/a7VOhD) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 21 | [删除链表的倒数第 n 个结点](https://leetcode.cn/problems/SLwz0R) |  |  [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 22 | [链表中环的入口节点](https://leetcode.cn/problems/c32eOV) |  |  [`哈希表`](/outline/tag/hash-table.md) [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 23 | [两个链表的第一个重合节点](https://leetcode.cn/problems/3u1WK4) |  |  [`哈希表`](/outline/tag/hash-table.md) [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 24 | [反转链表](https://leetcode.cn/problems/UHnkqh) |  |  [`递归`](/outline/tag/recursion.md) [`链表`](/outline/tag/linked-list.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 25 | [链表中的两数相加](https://leetcode.cn/problems/lMSNwu) |  |  [`栈`](/outline/tag/stack.md) [`链表`](/outline/tag/linked-list.md) [`数学`](/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 26 | [重排链表](https://leetcode.cn/problems/LGjMqU) |  |  [`栈`](/outline/tag/stack.md) [`递归`](/outline/tag/recursion.md) [`链表`](/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 27 | [回文链表](https://leetcode.cn/problems/aMhZSa) | [[✓]](/problem/jz_offer_II_027) |  [`栈`](/outline/tag/stack.md) [`递归`](/outline/tag/recursion.md) [`链表`](/outline/tag/linked-list.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 28 | [展平多级双向链表](https://leetcode.cn/problems/Qv1Da2) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`链表`](/outline/tag/linked-list.md) [`双向链表`](/outline/tag/doubly-linked-list.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 29 | [排序的循环链表](https://leetcode.cn/problems/4ueAj6) |  |  [`链表`](/outline/tag/linked-list.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 30 | [插入、删除和随机访问都是 O(1) 的容器](https://leetcode.cn/problems/FortPu) |  |  [`设计`](/outline/tag/design.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 31 | [最近最少使用缓存](https://leetcode.cn/problems/OrIXps) | [[✓]](/problem/jz_offer_II_031) |  [`设计`](/outline/tag/design.md) [`哈希表`](/outline/tag/hash-table.md) [`链表`](/outline/tag/linked-list.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 32 | [有效的变位词](https://leetcode.cn/problems/dKk3P7) |  |  [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) [`排序`](/outline/tag/sorting.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 33 | [变位词组](https://leetcode.cn/problems/sfvd7V) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 34 | [外星语言是否排序](https://leetcode.cn/problems/lwyVBB) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 35 | [最小时间差](https://leetcode.cn/problems/569nqc) |  |  [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) [`字符串`](/outline/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 36 | [后缀表达式](https://leetcode.cn/problems/8Zf90G) |  |  [`栈`](/outline/tag/stack.md) [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 37 | [小行星碰撞](https://leetcode.cn/problems/XagZNi) |  |  [`栈`](/outline/tag/stack.md) [`数组`](/outline/tag/array.md) [`模拟`](/outline/tag/simulation.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 38 | [每日温度](https://leetcode.cn/problems/iIQa4I) |  |  [`栈`](/outline/tag/stack.md) [`数组`](/outline/tag/array.md) [`单调栈`](/outline/tag/monotonic-stack.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 39 | [直方图最大矩形面积](https://leetcode.cn/problems/0ynMMM) |  |  [`栈`](/outline/tag/stack.md) [`数组`](/outline/tag/array.md) [`单调栈`](/outline/tag/monotonic-stack.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 40 | [矩阵中最大的矩形](https://leetcode.cn/problems/PLYXKQ) |  |  [`栈`](/outline/tag/stack.md) [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 41 | [滑动窗口的平均值](https://leetcode.cn/problems/qIsx9U) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 42 | [最近请求次数](https://leetcode.cn/problems/H8086Q) |  |  [`设计`](/outline/tag/design.md) [`队列`](/outline/tag/queue.md) [`数据流`](/outline/tag/data-stream.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 43 | [往完全二叉树添加节点](https://leetcode.cn/problems/NaqhDT) |  |  [`树`](/outline/tag/tree.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`设计`](/outline/tag/design.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 44 | [二叉树每层的最大值](https://leetcode.cn/problems/hPov7L) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 45 | [二叉树最底层最左边的值](https://leetcode.cn/problems/LwUNpT) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 46 | [二叉树的右侧视图](https://leetcode.cn/problems/WNC0Lk) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 47 | [二叉树剪枝](https://leetcode.cn/problems/pOCWxh) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`二叉树`](/outline/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 48 | [序列化与反序列化二叉树](https://leetcode.cn/problems/h54YBf) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 49 | [从根节点到叶节点的路径数字之和](https://leetcode.cn/problems/3Etpl5) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`二叉树`](/outline/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 50 | [向下的路径节点之和](https://leetcode.cn/problems/6eUYwP) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`二叉树`](/outline/tag/binary-tree.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 51 | [节点之和最大的路径](https://leetcode.cn/problems/jC7MId) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`动态规划`](/outline/tag/dynamic-programming.md) `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 52 | [展平二叉搜索树](https://leetcode.cn/problems/NYBBNL) |  |  [`栈`](/outline/tag/stack.md) [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) `2+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 53 | [二叉搜索树中的中序后继](https://leetcode.cn/problems/P5rCT8) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 54 | [所有大于等于节点的值之和](https://leetcode.cn/problems/w6cpku) |  |  [`树`](/outline/tag/tree.md) [`深度优先搜索`](/outline/tag/depth-first-search.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 55 | [二叉搜索树迭代器](https://leetcode.cn/problems/kTOapQ) |  |  [`栈`](/outline/tag/stack.md) [`树`](/outline/tag/tree.md) [`设计`](/outline/tag/design.md) `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 56 | [二叉搜索树中两个节点之和](https://leetcode.cn/problems/opLdQZ) |  |  [`数组`](/outline/tag/array.md) [`滑动窗口`](/outline/tag/sliding-window.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 57 | [值和下标之差都在给定的范围内](https://leetcode.cn/problems/7WqeDu) |  |  [`数组`](/outline/tag/array.md) [`桶排序`](/outline/tag/bucket-sort.md) [`有序集合`](/outline/tag/ordered-set.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 58 | [日程表](https://leetcode.cn/problems/fi9suh) |  |  [`设计`](/outline/tag/design.md) [`线段树`](/outline/tag/segment-tree.md) [`二分查找`](/outline/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 59 | [数据流的第 K 大数值](https://leetcode.cn/problems/jBjn9C) |  |  [`树`](/outline/tag/tree.md) [`设计`](/outline/tag/design.md) [`二叉搜索树`](/outline/tag/binary-search-tree.md) `3+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 60 | [出现频率最高的 k 个数字](https://leetcode.cn/problems/g5c51o) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`分治`](/outline/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 61 | [和最小的 k 个数对](https://leetcode.cn/problems/qn8gGX) |  |  [`数组`](/outline/tag/array.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 62 | [实现前缀树](https://leetcode.cn/problems/QC3q1f) |  |  [`设计`](/outline/tag/design.md) [`字典树`](/outline/tag/trie.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 63 | [替换单词](https://leetcode.cn/problems/UhWRSj) |  |  [`字典树`](/outline/tag/trie.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 64 | [神奇的字典](https://leetcode.cn/problems/US1pGT) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`设计`](/outline/tag/design.md) [`字典树`](/outline/tag/trie.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 65 | [最短的单词编码](https://leetcode.cn/problems/iSwD2y) |  |  [`字典树`](/outline/tag/trie.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 66 | [单词之和](https://leetcode.cn/problems/z1R5dt) |  |  [`设计`](/outline/tag/design.md) [`字典树`](/outline/tag/trie.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 67 | [最大的异或](https://leetcode.cn/problems/ms70jA) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`字典树`](/outline/tag/trie.md) [`数组`](/outline/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 68 | [查找插入位置](https://leetcode.cn/problems/N6YdxV) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 69 | [山峰数组的顶部](https://leetcode.cn/problems/B1IidL) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 70 | [排序数组中只出现一次的数字](https://leetcode.cn/problems/skFtm2) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 71 | [按权重生成随机数](https://leetcode.cn/problems/cuyjEf) |  |  [`数组`](/outline/tag/array.md) [`数学`](/outline/tag/math.md) [`二分查找`](/outline/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 72 | [求平方根](https://leetcode.cn/problems/jJ0w9p) |  |  [`数学`](/outline/tag/math.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 73 | [狒狒吃香蕉](https://leetcode.cn/problems/nZZqjQ) |  |  [`数组`](/outline/tag/array.md) [`二分查找`](/outline/tag/binary-search.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 74 | [合并区间](https://leetcode.cn/problems/SsGoHC) | [[✓]](/problem/jz_offer_II_074) |  [`数组`](/outline/tag/array.md) [`排序`](/outline/tag/sorting.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 75 | [数组相对排序](https://leetcode.cn/problems/0H97ZC) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`计数排序`](/outline/tag/counting-sort.md) `1+` | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 76 | [数组中的第 k 大的数字](https://leetcode.cn/problems/xx4gT2) |  |  [`数组`](/outline/tag/array.md) [`分治`](/outline/tag/divide-and-conquer.md) [`快速选择`](/outline/tag/quickselect.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 77 | [链表排序](https://leetcode.cn/problems/7WHec2) |  |  [`链表`](/outline/tag/linked-list.md) [`双指针`](/outline/tag/two-pointers.md) [`分治`](/outline/tag/divide-and-conquer.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 78 | [合并排序链表](https://leetcode.cn/problems/vvXgSW) |  |  [`链表`](/outline/tag/linked-list.md) [`分治`](/outline/tag/divide-and-conquer.md) [`堆（优先队列）`](/outline/tag/heap-priority-queue.md) `1+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 79 | [所有子集](https://leetcode.cn/problems/TVdhkn) |  |  [`位运算`](/outline/tag/bit-manipulation.md) [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 80 | [含有 k 个元素的组合](https://leetcode.cn/problems/uUsW3B) |  |  [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 81 | [允许重复选择元素的组合](https://leetcode.cn/problems/Ygoe9J) |  |  [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 82 | [含有重复元素集合的组合](https://leetcode.cn/problems/4sjJUc) |  |  [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 83 | [没有重复元素集合的全排列](https://leetcode.cn/problems/VvJkup) |  |  [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 84 | [含有重复元素集合的全排列](https://leetcode.cn/problems/7p8L0Z) |  |  [`数组`](/outline/tag/array.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 85 | [生成匹配的括号](https://leetcode.cn/problems/IDBivT) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 86 | [分割回文子字符串](https://leetcode.cn/problems/M99OJA) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 87 | [复原 IP](https://leetcode.cn/problems/0on3uN) |  |  [`字符串`](/outline/tag/string.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 88 | [爬楼梯的最少成本](https://leetcode.cn/problems/GzCJIP) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 89 | [房屋偷盗](https://leetcode.cn/problems/Gu0c2T) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 90 | [环形房屋偷盗](https://leetcode.cn/problems/PzWKhm) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 91 | [粉刷房子](https://leetcode.cn/problems/JEj789) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 92 | [翻转字符](https://leetcode.cn/problems/cyJERH) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 93 | [最长斐波那契数列](https://leetcode.cn/problems/Q91FMA) |  |  [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 94 | [最少回文分割](https://leetcode.cn/problems/omKAoA) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 95 | [最长公共子序列](https://leetcode.cn/problems/qJnOS7) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 96 | [字符串交织](https://leetcode.cn/problems/IY6buf) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 97 | [子序列的数目](https://leetcode.cn/problems/21dk04) |  |  [`字符串`](/outline/tag/string.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 98 | [路径的数目](https://leetcode.cn/problems/2AoeFn) |  |  [`数学`](/outline/tag/math.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`组合数学`](/outline/tag/combinatorics.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 99 | [最小路径之和](https://leetcode.cn/problems/0i0mDW) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`矩阵`](/outline/tag/matrix.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 100 | [三角形中最小路径之和](https://leetcode.cn/problems/IlPe0q) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 101 | [分割等和子集](https://leetcode.cn/problems/NUPfPr) | [[✓]](/problem/jz_offer_II_101) |  [`数学`](/outline/tag/math.md) [`字符串`](/outline/tag/string.md) [`模拟`](/outline/tag/simulation.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 102 | [加减的目标值](https://leetcode.cn/problems/YaVDxD) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) [`回溯`](/outline/tag/backtracking.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 103 | [最少的硬币数目](https://leetcode.cn/problems/gaM7Ch) |  |  [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 104 | [排列的数目](https://leetcode.cn/problems/D0F0SV) |  |  [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 105 | [岛屿的最大面积](https://leetcode.cn/problems/ZL6zAn) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 106 | [二分图](https://leetcode.cn/problems/vEAB3K) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 107 | [矩阵中的距离](https://leetcode.cn/problems/2bCMpM) |  |  [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`数组`](/outline/tag/array.md) [`动态规划`](/outline/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 108 | [单词演变](https://leetcode.cn/problems/om3reC) |  |  [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`哈希表`](/outline/tag/hash-table.md) [`字符串`](/outline/tag/string.md) | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 109 | [开密码锁](https://leetcode.cn/problems/zlDJc7) |  |  [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 110 | [所有路径](https://leetcode.cn/problems/bP4bmD) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 111 | [计算除法](https://leetcode.cn/problems/vlzXQL) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `3+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 112 | [最长递增路径](https://leetcode.cn/problems/fpTFWP) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 113 | [课程顺序](https://leetcode.cn/problems/QA2IGt) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 114 | [外星文字典](https://leetcode.cn/problems/Jf1JuT) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`图`](/outline/tag/graph.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 115 | [重建序列](https://leetcode.cn/problems/ur2n8P) |  |  [`图`](/outline/tag/graph.md) [`拓扑排序`](/outline/tag/topological-sort.md) [`数组`](/outline/tag/array.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 116 | [省份数量](https://leetcode.cn/problems/bLyHh0) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 117 | [相似的字符串](https://leetcode.cn/problems/H6lPxb) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `3+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer II 118 | [多余的边](https://leetcode.cn/problems/7LpjUW) |  |  [`深度优先搜索`](/outline/tag/depth-first-search.md) [`广度优先搜索`](/outline/tag/breadth-first-search.md) [`并查集`](/outline/tag/union-find.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 119 | [最长连续序列](https://leetcode.cn/problems/WhsWhI) |  |  [`并查集`](/outline/tag/union-find.md) [`数组`](/outline/tag/array.md) [`哈希表`](/outline/tag/hash-table.md) | <font color=#ffb800>Medium</font> |

<style>
table th:first-of-type { width: 20%; }
table th:nth-of-type(2) { width: 30%; }
table th:nth-of-type(3) { width: 10%; }
table th:nth-of-type(4) { width: 30%; }
table th:nth-of-type(5) { width: 10%; }

</style>

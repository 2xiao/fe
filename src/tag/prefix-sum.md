# 前缀和

<details><summary>全部标签</summary>

**数据结构**

[`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md) [`栈`](/tag/stack.md) [`单调栈`](/tag/monotonic-stack.md) [`队列`](/tag/queue.md) [`单调队列`](/tag/monotonic-queue.md) [`堆（优先队列）`](/tag/heap-priority-queue.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`字符串匹配`](/tag/string-matching.md) [`树`](/tag/tree.md) [`二叉树`](/tag/binary-tree.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`最小生成树`](/tag/minimum-spanning-tree.md) [`图`](/tag/graph.md) [`有序集合`](/tag/ordered-set.md) [`拓扑排序`](/tag/topological-sort.md) [`最短路`](/tag/shortest-path.md) [`强连通分量`](/tag/strongly-connected-component.md) [`欧拉回路`](/tag/eulerian-circuit.md) [`双连通分量`](/tag/biconnected-component.md) [`并查集`](/tag/union-find.md) [`字典树`](/tag/trie.md) [`线段树`](/tag/segment-tree.md) [`树状数组`](/tag/binary-indexed-tree.md) [`后缀数组`](/tag/suffix-array.md)

**算法**

[`枚举`](/tag/enumeration.md) [`递归`](/tag/recursion.md) [`分治`](/tag/divide-and-conquer.md) [`回溯`](/tag/backtracking.md) [`贪心`](/tag/greedy.md) [`动态规划`](/tag/dynamic-programming.md) [`排序`](/tag/sorting.md) [`桶排序`](/tag/bucket-sort.md) [`计数排序`](/tag/counting-sort.md) [`基数排序`](/tag/radix-sort.md) [`归并排序`](/tag/merge-sort.md) [`快速选择`](/tag/quickselect.md) [`二分查找`](/tag/binary-search.md) [`记忆化搜索`](/tag/memoization.md) [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`双指针`](/tag/two-pointers.md) [`位运算`](/tag/bit-manipulation.md) <span class="blue">前缀和</span> [`计数`](/tag/counting.md) [`滑动窗口`](/tag/sliding-window.md) [`状态压缩`](/tag/bitmask.md) [`哈希函数`](/tag/hash-function.md) [`滚动哈希`](/tag/rolling-hash.md) [`扫描线`](/tag/line-sweep.md)

**其他**

[`数学`](/tag/math.md) [`数论`](/tag/number-theory.md) [`几何`](/tag/geometry.md) [`博弈`](/tag/game-theory.md) [`模拟`](/tag/simulation.md) [`组合数学`](/tag/combinatorics.md) [`随机化`](/tag/randomized.md) [`概率与统计`](/tag/probability-and-statistics.md) [`水塘抽样`](/tag/reservoir-sampling.md) [`拒绝采样`](/tag/rejection-sampling.md) [`数据库`](/tag/database.md) [`设计`](/tag/design.md) [`数据流`](/tag/data-stream.md) [`脑筋急转弯`](/tag/brainteaser.md) [`交互`](/tag/interactive.md) [`迭代器`](/tag/iterator.md) [`多线程`](/tag/concurrency.md)
</details>

---

<!-- prettier-ignore -->
| 题号 | 标题 | 题解 | 标签 | 难度 |
| :------: | :------ | :------: | :------ | :------ |
| 209 | [长度最小的子数组](https://leetcode.com/problems/minimum-size-subarray-sum) | [[✓]](/problem/0209.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 238 | [除自身以外数组的乘积](https://leetcode.com/problems/product-of-array-except-self) | [[✓]](/problem/0238.md) |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 253 | [会议室 II](https://leetcode.com/problems/meeting-rooms-ii) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `3+` | <font color=#ffb800>Medium</font> |
| 303 | [区域和检索 - 数组不可变](https://leetcode.com/problems/range-sum-query-immutable) | [[✓]](/problem/0303.md) |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 304 | [二维区域和检索 - 矩阵不可变](https://leetcode.com/problems/range-sum-query-2d-immutable) |  |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ffb800>Medium</font> |
| 325 | [和等于 k 的最长子数组长度](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 363 | [矩形区域不超过 K 的最大数值和](https://leetcode.com/problems/max-sum-of-rectangle-no-larger-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `2+` | <font color=#ff334b>Hard</font> |
| 370 | [区间加法](https://leetcode.com/problems/range-addition) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 410 | [分割数组的最大值](https://leetcode.com/problems/split-array-largest-sum) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 497 | [非重叠矩形中的随机点](https://leetcode.com/problems/random-point-in-non-overlapping-rectangles) |  |  [`水塘抽样`](/tag/reservoir-sampling.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) `4+` | <font color=#ffb800>Medium</font> |
| 523 | [连续的子数组和](https://leetcode.com/problems/continuous-subarray-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) `1+` | <font color=#ffb800>Medium</font> |
| 525 | [连续数组](https://leetcode.com/problems/contiguous-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 528 | [按权重随机选择](https://leetcode.com/problems/random-pick-with-weight) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 548 | [将数组分割成和相等的子数组](https://leetcode.com/problems/split-array-with-equal-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 560 | [和为 K 的子数组](https://leetcode.com/problems/subarray-sum-equals-k) | [[✓]](/problem/0560.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 644 | [子数组最大平均数 II](https://leetcode.com/problems/maximum-average-subarray-ii) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 713 | [乘积小于 K 的子数组](https://leetcode.com/problems/subarray-product-less-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 724 | [寻找数组的中心下标](https://leetcode.com/problems/find-pivot-index) | [[✓]](/problem/0724.md) |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 731 | [我的日程安排表 II](https://leetcode.com/problems/my-calendar-ii) | [[✓]](/problem/0731.md) |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`数组`](/tag/array.md) `3+` | <font color=#ffb800>Medium</font> |
| 732 | [我的日程安排表 III](https://leetcode.com/problems/my-calendar-iii) |  |  [`设计`](/tag/design.md) [`线段树`](/tag/segment-tree.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 798 | [得分最高的最小轮调](https://leetcode.com/problems/smallest-rotation-with-highest-score) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 813 | [最大平均值和的分组](https://leetcode.com/problems/largest-sum-of-averages) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 848 | [字母移位](https://leetcode.com/problems/shifting-letters) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 862 | [和至少为 K 的最短子数组](https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 903 | [DI 序列的有效排列](https://leetcode.com/problems/valid-permutations-for-di-sequence) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 930 | [和相同的二元子数组](https://leetcode.com/problems/binary-subarrays-with-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 974 | [和可被 K 整除的子数组](https://leetcode.com/problems/subarray-sums-divisible-by-k) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 995 | [K 连续位的最小翻转次数](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ff334b>Hard</font> |
| 1000 | [合并石头的最低成本](https://leetcode.com/problems/minimum-cost-to-merge-stones) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 1004 | [最大连续1的个数 III](https://leetcode.com/problems/max-consecutive-ones-iii) | [[✓]](/problem/1004.md) |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1074 | [元素和为目标值的子矩阵数量](https://leetcode.com/problems/number-of-submatrices-that-sum-to-target) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
| 1094 | [拼车](https://leetcode.com/problems/car-pooling) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) [`排序`](/tag/sorting.md) `2+` | <font color=#ffb800>Medium</font> |
| 1109 | [航班预订统计](https://leetcode.com/problems/corporate-flight-bookings) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1124 | [表现良好的最长时间段](https://leetcode.com/problems/longest-well-performing-interval) |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 1140 | [石子游戏 II](https://leetcode.com/problems/stone-game-ii) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ffb800>Medium</font> |
| 1177 | [构建回文串检测](https://leetcode.com/problems/can-make-palindrome-from-substring) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 1208 | [尽可能使字符串相等](https://leetcode.com/problems/get-equal-substrings-within-budget) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1248 | [统计「优美子数组」](https://leetcode.com/problems/count-number-of-nice-subarrays) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) `2+` | <font color=#ffb800>Medium</font> |
| 1292 | [元素和小于等于阈值的正方形的最大边长](https://leetcode.com/problems/maximum-side-length-of-a-square-with-sum-less-than-or-equal-to-threshold) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ffb800>Medium</font> |
| 1310 | [子数组异或查询](https://leetcode.com/problems/xor-queries-of-a-subarray) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1314 | [矩阵区域和](https://leetcode.com/problems/matrix-block-sum) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1371 | [每个元音包含偶数次的最长子字符串](https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1413 | [逐步求和得到正数的最小值](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1420 | [生成数组](https://leetcode.com/problems/build-array-where-you-can-find-the-maximum-exactly-k-comparisons) |  |  [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 1422 | [分割字符串的最大得分](https://leetcode.com/problems/maximum-score-after-splitting-a-string) |  |  [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1423 | [可获得的最大点数](https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) [`滑动窗口`](/tag/sliding-window.md) | <font color=#ffb800>Medium</font> |
| 1442 | [形成两个异或相等数组的三元组数目](https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `2+` | <font color=#ffb800>Medium</font> |
| 1480 | [一维数组的动态和](https://leetcode.com/problems/running-sum-of-1d-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1524 | [和为奇数的子数组数目](https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `1+` | <font color=#ffb800>Medium</font> |
| 1546 | [和为目标值且不重叠的非空子数组的最大数目](https://leetcode.com/problems/maximum-number-of-non-overlapping-subarrays-with-sum-equals-target) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 1588 | [所有奇数长度子数组的和](https://leetcode.com/problems/sum-of-all-odd-length-subarrays) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1589 | [所有排列中的最大和](https://leetcode.com/problems/maximum-sum-obtained-of-any-permutation) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1590 | [使数组和能被 P 整除](https://leetcode.com/problems/make-sum-divisible-by-p) | [[✓]](/problem/1590.md) |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1658 | [将 x 减到 0 的最小操作数](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 1664 | [生成平衡数组的方案数](https://leetcode.com/problems/ways-to-make-a-fair-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1674 | [使数组互补的最少操作次数](https://leetcode.com/problems/minimum-moves-to-make-array-complementary) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1685 | [有序数组中差绝对值之和](https://leetcode.com/problems/sum-of-absolute-differences-in-a-sorted-array) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1687 | [从仓库到码头运输箱子](https://leetcode.com/problems/delivering-boxes-from-storage-to-ports) |  |  [`线段树`](/tag/segment-tree.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `4+` | <font color=#ff334b>Hard</font> |
| 1703 | [得到连续 K 个 1 的最少相邻交换次数](https://leetcode.com/problems/minimum-adjacent-swaps-for-k-consecutive-ones) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 1712 | [将数组分成三个子数组的方案数](https://leetcode.com/problems/ways-to-split-array-into-three-subarrays) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 1732 | [找到最高海拔](https://leetcode.com/problems/find-the-highest-altitude) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1737 | [满足三条件之一需改变的最少字符数](https://leetcode.com/problems/change-minimum-characters-to-satisfy-one-of-three-conditions) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`计数`](/tag/counting.md) `1+` | <font color=#ffb800>Medium</font> |
| 1738 | [找出第 K 大的异或坐标值](https://leetcode.com/problems/find-kth-largest-xor-coordinate-value) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`分治`](/tag/divide-and-conquer.md) `5+` | <font color=#ffb800>Medium</font> |
| 1744 | [你能在你最喜欢的那天吃到你最喜欢的糖果吗？](https://leetcode.com/problems/can-you-eat-your-favorite-candy-on-your-favorite-day) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1769 | [移动所有球到每个盒子所需的最小操作数](https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1788 | [最大化花园的美观度](https://leetcode.com/problems/maximize-the-beauty-of-the-garden) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ff334b>Hard</font> |
| 1829 | [每个查询的最大异或值](https://leetcode.com/problems/maximum-xor-for-each-query) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1838 | [最高频元素的频数](https://leetcode.com/problems/frequency-of-the-most-frequent-element) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ffb800>Medium</font> |
| 1854 | [人口最多的年份](https://leetcode.com/problems/maximum-population-year) |  |  [`数组`](/tag/array.md) [`计数`](/tag/counting.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1856 | [子数组最小乘积的最大值](https://leetcode.com/problems/maximum-subarray-min-product) |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1862 | [向下取整数对和](https://leetcode.com/problems/sum-of-floored-pairs) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 1871 | [跳跃游戏 VII](https://leetcode.com/problems/jump-game-vii) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1872 | [石子游戏 VIII](https://leetcode.com/problems/stone-game-viii) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 1878 | [矩阵中最大的三个菱形和](https://leetcode.com/problems/get-biggest-three-rhombus-sums-in-a-grid) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`矩阵`](/tag/matrix.md) `3+` | <font color=#ffb800>Medium</font> |
| 1889 | [装包裹的最小浪费空间](https://leetcode.com/problems/minimum-space-wasted-from-packaging) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 1893 | [检查是否区域内所有整数都被覆盖](https://leetcode.com/problems/check-if-all-the-integers-in-a-range-are-covered) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 1894 | [找到需要补充粉笔的学生编号](https://leetcode.com/problems/find-the-student-that-will-replace-the-chalk) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1895 | [最大的幻方](https://leetcode.com/problems/largest-magic-square) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1915 | [最美子字符串的数目](https://leetcode.com/problems/number-of-wonderful-substrings) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1930 | [长度为 3 的不同回文子序列](https://leetcode.com/problems/unique-length-3-palindromic-subsequences) |  |  [`位运算`](/tag/bit-manipulation.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 1943 | [描述绘画结果](https://leetcode.com/problems/describe-the-painting) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 1983 | [范围和相等的最宽索引对](https://leetcode.com/problems/widest-pair-of-indices-with-equal-range-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 1991 | [找到数组的中间位置](https://leetcode.com/problems/find-the-middle-index-in-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 2017 | [网格游戏](https://leetcode.com/problems/grid-game) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2021 | [街上最亮的位置](https://leetcode.com/problems/brightest-position-on-street) |  |  [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2024 | [考试的最大困扰度](https://leetcode.com/problems/maximize-the-confusion-of-an-exam) |  |  [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2025 | [分割数组的最多方案数](https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`计数`](/tag/counting.md) `2+` | <font color=#ff334b>Hard</font> |
| 2055 | [蜡烛之间的盘子](https://leetcode.com/problems/plates-between-candles) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ffb800>Medium</font> |
| 2067 | [等计数子串的数量](https://leetcode.com/problems/number-of-equal-count-substrings) |  |  [`字符串`](/tag/string.md) [`计数`](/tag/counting.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2083 | [求以相同字母开头和结尾的子串总数](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter) |  |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `2+` | <font color=#ffb800>Medium</font> |
| 2100 | [适合野炊的日子](https://leetcode.com/problems/find-good-days-to-rob-the-bank) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2106 | [摘水果](https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2121 | [相同元素的间隔之和](https://leetcode.com/problems/intervals-between-identical-elements) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2132 | [用邮票贴满网格图](https://leetcode.com/problems/stamping-the-grid) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
| 2145 | [统计隐藏数组数目](https://leetcode.com/problems/count-the-hidden-sequences) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2171 | [拿出最少数目的魔法豆](https://leetcode.com/problems/removing-minimum-number-of-magic-beans) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`枚举`](/tag/enumeration.md) `2+` | <font color=#ffb800>Medium</font> |
| 2207 | [字符串中最多数目的子序列](https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string) |  |  [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2209 | [用地毯覆盖后的最少白色砖块](https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 2218 | [从栈中取出 K 个硬币的最大面值和](https://leetcode.com/problems/maximum-value-of-k-coins-from-piles) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 2219 | [数组的最大总分](https://leetcode.com/problems/maximum-sum-score-of-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2222 | [选择建筑的方案数](https://leetcode.com/problems/number-of-ways-to-select-buildings) |  |  [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2237 | [计算街道上满足所需亮度的位置数量](https://leetcode.com/problems/count-positions-on-street-with-required-brightness) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2245 | [转角路径的乘积中最多能有几个尾随零](https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2251 | [花期内花的数目](https://leetcode.com/problems/number-of-flowers-in-full-bloom) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`二分查找`](/tag/binary-search.md) `3+` | <font color=#ff334b>Hard</font> |
| 2256 | [最小平均差](https://leetcode.com/problems/minimum-average-difference) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2270 | [分割数组的方案数](https://leetcode.com/problems/number-of-ways-to-split-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2271 | [毯子覆盖的最多白色砖块数](https://leetcode.com/problems/maximum-white-tiles-covered-by-a-carpet) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 2281 | [巫师的总力量和](https://leetcode.com/problems/sum-of-total-strength-of-wizards) |  |  [`栈`](/tag/stack.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2302 | [统计得分小于 K 的子数组数目](https://leetcode.com/problems/count-subarrays-with-score-less-than-k) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2381 | [字母移位 II](https://leetcode.com/problems/shifting-letters-ii) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2382 | [删除操作后的最大子段和](https://leetcode.com/problems/maximum-segment-sum-after-removals) |  |  [`并查集`](/tag/union-find.md) [`数组`](/tag/array.md) [`有序集合`](/tag/ordered-set.md) `1+` | <font color=#ff334b>Hard</font> |
| 2389 | [和有限的最长子序列](https://leetcode.com/problems/longest-subsequence-with-limited-sum) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#15bd66>Easy</font> |
| 2391 | [收集垃圾的最少总时间](https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2398 | [预算内的最多机器人数目](https://leetcode.com/problems/maximum-number-of-robots-within-budget) |  |  [`队列`](/tag/queue.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `4+` | <font color=#ff334b>Hard</font> |
| 2406 | [将区间分为最少组数](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups) | [[✓]](/problem/2406.md) |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) `3+` | <font color=#ffb800>Medium</font> |
| 2420 | [找到所有好下标](https://leetcode.com/problems/find-all-good-indices) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2428 | [沙漏的最大总和](https://leetcode.com/problems/maximum-sum-of-an-hourglass) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2438 | [二的幂数组中查询范围内的乘积](https://leetcode.com/problems/range-product-queries-of-powers) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2439 | [最小化数组中的最大值](https://leetcode.com/problems/minimize-maximum-of-array) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 2448 | [使数组相等的最小开销](https://leetcode.com/problems/minimum-cost-to-make-array-equal) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 2483 | [商店的最少代价](https://leetcode.com/problems/minimum-penalty-for-a-shop) |  |  [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2485 | [找出中枢整数](https://leetcode.com/problems/find-the-pivot-integer) |  |  [`数学`](/tag/math.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 2488 | [统计中位数为 K 的子数组](https://leetcode.com/problems/count-subarrays-with-median-k) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 2489 | [固定比率的子字符串数](https://leetcode.com/problems/number-of-substrings-with-fixed-ratio) |  |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `1+` | <font color=#ffb800>Medium</font> |
| 2528 | [最大化城市的最小电量](https://leetcode.com/problems/maximize-the-minimum-powered-city) |  |  [`贪心`](/tag/greedy.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `3+` | <font color=#ff334b>Hard</font> |
| 2536 | [子矩阵元素加 1](https://leetcode.com/problems/increment-submatrices-by-one) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2552 | [统计上升四元组](https://leetcode.com/problems/count-increasing-quadruplets) |  |  [`树状数组`](/tag/binary-indexed-tree.md) [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 2559 | [统计范围内的元音字符串数](https://leetcode.com/problems/count-vowel-strings-in-ranges) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2574 | [左右元素和的差值](https://leetcode.com/problems/left-and-right-sum-differences) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 2587 | [重排数组以得到最大前缀分数](https://leetcode.com/problems/rearrange-array-to-maximize-prefix-score) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2588 | [统计美丽子数组数目](https://leetcode.com/problems/count-the-number-of-beautiful-subarrays) |  |  [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) `1+` | <font color=#ffb800>Medium</font> |
| 2602 | [使数组元素全部相等的最少操作次数](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2615 | [等值距离和](https://leetcode.com/problems/sum-of-distances) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2640 | [一个数组所有前缀的分数](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2680 | [最大或值](https://leetcode.com/problems/maximum-or) |  |  [`贪心`](/tag/greedy.md) [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md) `1+` | <font color=#ffb800>Medium</font> |
| 2681 | [英雄的力量](https://leetcode.com/problems/power-of-heroes) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 2731 | [移动机器人](https://leetcode.com/problems/movement-of-robots) |  |  [`脑筋急转弯`](/tag/brainteaser.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2772 | [使数组中的所有元素都等于零](https://leetcode.com/problems/apply-operations-to-make-all-array-elements-equal-to-zero) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2819 | [购买巧克力后的最小相对损失](https://leetcode.com/problems/minimum-relative-loss-after-buying-chocolates) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 2838 | [英雄可以获得的最大金币数](https://leetcode.com/problems/maximum-coins-heroes-can-collect) |  |  [`数组`](/tag/array.md) [`双指针`](/tag/two-pointers.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 2845 | [统计趣味子数组的数目](https://leetcode.com/problems/count-of-interesting-subarrays) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2848 | [与车相交的点](https://leetcode.com/problems/points-that-intersect-with-cars) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 2875 | [无限数组的最短子数组](https://leetcode.com/problems/minimum-size-subarray-in-infinite-array) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2906 | [构造乘积矩阵](https://leetcode.com/problems/construct-product-matrix) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 2947 | [统计美丽子字符串 I](https://leetcode.com/problems/count-beautiful-substrings-i) |  |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `3+` | <font color=#ffb800>Medium</font> |
| 2949 | [统计美丽子字符串 II](https://leetcode.com/problems/count-beautiful-substrings-ii) |  |  [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) [`字符串`](/tag/string.md) `2+` | <font color=#ff334b>Hard</font> |
| 2950 | [可整除子串的数量](https://leetcode.com/problems/number-of-divisible-substrings) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`计数`](/tag/counting.md) `1+` | <font color=#ffb800>Medium</font> |
| 2955 | [同端子串的数量](https://leetcode.com/problems/number-of-same-end-substrings) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `2+` | <font color=#ffb800>Medium</font> |
| 2968 | [执行操作使频率分数最大](https://leetcode.com/problems/apply-operations-to-maximize-frequency-score) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `2+` | <font color=#ff334b>Hard</font> |
| 2971 | [找到最大周长的多边形](https://leetcode.com/problems/find-polygon-with-the-largest-perimeter) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 2983 | [回文串重新排列查询](https://leetcode.com/problems/palindrome-rearrangement-queries) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 3015 | [按距离统计房屋对数目 I](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-i) |  |  [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3017 | [按距离统计房屋对数目 II](https://leetcode.com/problems/count-the-number-of-houses-at-a-certain-distance-ii) |  |  [`图`](/tag/graph.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 3026 | [最大好子数组和](https://leetcode.com/problems/maximum-good-subarray-sum) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3028 | [边界上的蚂蚁](https://leetcode.com/problems/ant-on-the-boundary) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) [`模拟`](/tag/simulation.md) | <font color=#15bd66>Easy</font> |
| 3070 | [元素和小于等于 k 的子矩阵的数目](https://leetcode.com/problems/count-submatrices-with-top-left-element-and-sum-less-than-k) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3077 | [K 个不相交子数组的最大能量值](https://leetcode.com/problems/maximum-strength-of-k-disjoint-subarrays) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 3086 | [拾起 K 个 1 需要的最少行动次数](https://leetcode.com/problems/minimum-moves-to-pick-k-ones) |  |  [`贪心`](/tag/greedy.md) [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ff334b>Hard</font> |
| 3096 | [得到更多分数的最少关卡数目](https://leetcode.com/problems/minimum-levels-to-gain-more-points) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3104 | [查找最长的自包含子串](https://leetcode.com/problems/find-longest-self-contained-substring) |  |  [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `1+` | <font color=#ff334b>Hard</font> |
| 3129 | [找出所有稳定的二进制数组 I](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-i) |  |  [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3130 | [找出所有稳定的二进制数组 II](https://leetcode.com/problems/find-all-possible-stable-binary-arrays-ii) |  |  [`动态规划`](/tag/dynamic-programming.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ff334b>Hard</font> |
| 3147 | [从魔法师身上吸取的最大能量](https://leetcode.com/problems/taking-maximum-energy-from-the-mystic-dungeon) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3152 | [特殊数组 II](https://leetcode.com/problems/special-array-ii) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3179 | [K 秒后第 N 个元素的值](https://leetcode.com/problems/find-the-n-th-value-after-k-seconds) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`组合数学`](/tag/combinatorics.md) `2+` | <font color=#ffb800>Medium</font> |
| 3191 | [使二进制数组全部等于 1 的最少操作次数 I](https://leetcode.com/problems/minimum-operations-to-make-binary-array-elements-equal-to-one-i) |  |  [`位运算`](/tag/bit-manipulation.md) [`队列`](/tag/queue.md) [`数组`](/tag/array.md) `2+` | <font color=#ffb800>Medium</font> |
| 3212 | [统计 X 和 Y 频数相等的子矩阵数量](https://leetcode.com/problems/count-submatrices-with-equal-frequency-of-x-and-y) |  |  [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3224 | [使差值相等的最少数组改动次数](https://leetcode.com/problems/minimum-array-changes-to-make-differences-equal) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 3225 | [网格图操作后的最大分数](https://leetcode.com/problems/maximum-score-from-grid-operations) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
| 3250 | [单调数组对的数目 I](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-i) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 3251 | [单调数组对的数目 II](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md) `2+` | <font color=#ff334b>Hard</font> |
| 3261 | [统计满足 K 约束的子字符串数量 II](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii) |  |  [`数组`](/tag/array.md) [`字符串`](/tag/string.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ff334b>Hard</font> |
| 3279 | [活塞占据的最大总区域](https://leetcode.com/problems/maximum-total-area-occupied-by-pistons) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`字符串`](/tag/string.md) `3+` | <font color=#ff334b>Hard</font> |
| 3312 | [查询排序后的最大公约数](https://leetcode.com/problems/sorted-gcd-pair-queries) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`数学`](/tag/math.md) `5+` | <font color=#ff334b>Hard</font> |
| 剑指 Offer 66 | [构建乘积数组](https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof) | [[✓]](/offer/jz_offer_66_1.md) |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 10 | [和为 k 的子数组](https://leetcode.cn/problems/QTMn0o) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 11 | [0 和 1 个数相同的子数组](https://leetcode.cn/problems/A1NYOS) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 12 | [左右两边子数组的和相等](https://leetcode.cn/problems/tvdfij) |  |  [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#15bd66>Easy</font> |
| 剑指 Offer II 13 | [二维子矩阵的和](https://leetcode.cn/problems/O4NDxx) |  |  [`设计`](/tag/design.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 71 | [按权重生成随机数](https://leetcode.cn/problems/cuyjEf) |  |  [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`二分查找`](/tag/binary-search.md) `2+` | <font color=#ffb800>Medium</font> |
| 剑指 Offer II 8 | [和大于等于 target 的最短子数组](https://leetcode.cn/problems/2VG8Kg) |  |  [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) `1+` | <font color=#ffb800>Medium</font> |
| 面试题 17.05 | [ 字母与数字](https://leetcode.cn/problems/find-longest-subarray-lcci) |  |  [`数组`](/tag/array.md) [`哈希表`](/tag/hash-table.md) [`前缀和`](/tag/prefix-sum.md) | <font color=#ffb800>Medium</font> |
| 面试题 17.24 | [最大子矩阵](https://leetcode.cn/problems/max-submatrix-lcci) |  |  [`数组`](/tag/array.md) [`动态规划`](/tag/dynamic-programming.md) [`矩阵`](/tag/matrix.md) `1+` | <font color=#ff334b>Hard</font> |
---
title: LCP 37. 最小矩形面积
description: LeetCode LCP 37. 最小矩形面积题解，最小矩形面积，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - LCP 37. 最小矩形面积
  - 最小矩形面积
  - 最小矩形面积
  - 解题思路
  - 贪心
  - 几何
  - 数组
  - 数学
  - 组合数学
  - 排序
---

# LCP 37. 最小矩形面积

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`贪心`](/tag/greedy.md) [`几何`](/tag/geometry.md) [`数组`](/tag/array.md) [`数学`](/tag/math.md) [`组合数学`](/tag/combinatorics.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/zui-xiao-ju-xing-mian-ji)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

二维平面上有 $N$ 条直线，形式为 `y = kx + b`，其中 `k`、`b`为整数 且 `k > 0`。所有直线以 `[k,b]`
的形式存于二维数组 `lines` 中，不存在重合的两条直线。两两直线之间可能存在一个交点，最多会有 $C_N^2$
个交点。我们用一个平行于坐标轴的矩形覆盖所有的交点，请问这个矩形最小面积是多少。若直线之间无交点、仅有一个交点或所有交点均在同一条平行坐标轴的直线上，则返回0。
注意：返回结果是浮点数，与标准答案 **绝对误差或相对误差** 在 10^-4 以内的结果都被视为正确结果 **示例 1：** > 输入：`lines =
[[2,3],[3,0],[4,1]]` > > 输出：`48.00000` > > 解释：三条直线的三个交点为 (3, 9) (1, 5) 和 (-1,
-3)。最小覆盖矩形左下角为 (-1, -3) 右上角为 (3,9)，面积为 48 **示例 2：** > 输入：`lines =
[[1,1],[2,3]]` > > 输出：`0.00000` > > 解释：仅有一个交点 (-2，-1） **限制：** \+ `1 <=
lines.length <= 10^5 且 lines[i].length == 2` \+ `1 <= lines[0] <= 10000` \+
`-10000 <= lines[1] <= 10000` \+ `与标准答案绝对误差或相对误差在 10^-4 以内的结果都被视为正确结果`


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```
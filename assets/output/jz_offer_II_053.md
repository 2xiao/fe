---
title: 53. 二叉搜索树中的中序后继
description: LeetCode 53. 二叉搜索树中的中序后继题解，二叉搜索树中的中序后继，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 53. 二叉搜索树中的中序后继
  - 二叉搜索树中的中序后继
  - 二叉搜索树中的中序后继
  - 解题思路
  - 树
  - 深度优先搜索
  - 二叉搜索树
  - 二叉树
---

# 53. 二叉搜索树中的中序后继

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`二叉搜索树`](/tag/binary-search-tree.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/P5rCT8)

## 题目

English description is not available for the problem. Please switch to
Chinese.


## 题目大意

给定一棵二叉搜索树和其中的一个节点 `p` ，找到该节点在树中的中序后继。如果节点没有中序后继，请返回 `null` 。

节点 `p` 的后继是值比 `p.val` 大的节点中键值最小的节点，即按中序遍历的顺序节点 `p` 的下一个节点。



**示例 1：**

![](https://assets.leetcode.com/uploads/2019/01/23/285_example_1.PNG)

> 
> 
> 
> 
> 
> **输入：** root = [2,1,3], p = 1
> 
> **输出：** 2
> 
> **解释：** 这里 1 的中序后继是 2。请注意 p 和返回值都应是 TreeNode 类型。
> 
> 

**示例  2：**

![](https://assets.leetcode.com/uploads/2019/01/23/285_example_2.PNG)

> 
> 
> 
> 
> 
> **输入：** root = [5,3,6,2,4,null,null,1], p = 6
> 
> **输出：** null
> 
> **解释：** 因为给出的节点没有中序后继，所以答案就返回 null 了。
> 
> 



**提示：**

  * 树中节点的数目在范围 `[1, 104]` 内。
  * `-10^5 <= Node.val <= 10^5`
  * 树中各节点的值均保证唯一。



注意：本题与主站 285 题相同： <https://leetcode-cn.com/problems/inorder-successor-in-bst/>


## 解题思路

#### 复杂度分析

- **时间复杂度**：`O()`，
- **空间复杂度**：`O()`，

## 代码

```javascript

```
---
title: 25. 链表中的两数相加
description: LeetCode,25. 链表中的两数相加,链表中的两数相加,链表中的两数相加,解题思路,栈,链表,数学
keywords:
  - LeetCode
  - 25. 链表中的两数相加
  - 链表中的两数相加
  - 链表中的两数相加
  - 解题思路
  - 栈
  - 链表
  - 数学
---

# 25. 链表中的两数相加

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`链表`](/tag/linked-list.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/lMSNwu)

## 题目

给定两个 **非空链表** `l1`和 `l2`
来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。

可以假设除了数字 0 之外，这两个数字都不会以零开头。

**示例 1：**

![](https://pic.leetcode-cn.com/1626420025-fZfzMX-image.png)

> **输入：** l1 = [7,2,4,3], l2 = [5,6,4]
>
> **输出：**[7,8,0,7]

**示例 2：**

> **输入：** l1 = [2,4,3], l2 = [5,6,4]
>
> **输出：**[8,0,7]

**示例 3：**

> **输入：** l1 = [0], l2 = [0]
>
> **输出：**[0]

**提示：**

- 链表的长度范围为` [1, 100]`
- `0 <= node.val <= 9`
- 输入数据保证链表代表的数字无前导 0

**进阶：** 如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。

::: warning
本题与 LeetCode [第 445 题](../problem/0445.md) 相同。
:::

## 解题思路

这道题是 [第 2 题](../problem/0002.md) 的变种题，第 2 题中的 2 个数是从个位逆序排到高位，这样相加只用从头加到尾，进位一直进位即可。

这道题的主要难点在于链表中数位的顺序与做加法的顺序是相反的，例如，数字 342 被表示为链表 `2 -> 4 -> 3`，而且要求不能反转链表。

为了逆序处理所有数位，可以使用栈：把所有数字压入栈中，再依次取出相加。计算过程中需要注意进位的情况。

1. **使用栈**：

   - 利用栈的后进先出特性，将链表的节点值推入两个栈 `stack1` 和 `stack2`，这样可以从低位到高位逐位相加。

2. **逐位相加**：

   - 从两个栈中逐位弹出数字并相加，同时处理进位。具体步骤如下：
     - 初始化 `carry` 为 0。
     - 当两个栈都为空且 `carry` 为 0 时，停止循环。
     - 从每个栈弹出一个数字（如果栈不为空），并加上 `carry`。
     - 计算新的 `carry` 和当前位的数字。
     - 创建一个新节点，将当前位的结果插入到结果链表的前面。

3. **构建结果链表**：
   - 将每次计算得到的结果存储在新的链表中，从而形成最终的结果链表。

#### 复杂度分析

- **时间复杂度**： `O(n + m)`，其中 `n` 为链表 `l1` 的长度 ，`m` 为链表 `l2` 的长度。

  - 首先，需要遍历两个链表以将它们的值推入栈中，这一部分的时间复杂度为 `O(n + m)`。
  - 然后，需要遍历两个栈以进行逐位相加，这一部分的时间复杂度也为 `O(n + m)`。
  - 因此，总时间复杂度为 `O(n + m)`。

- **空间复杂度**： `O(n + m)`
  - 使用两个栈分别存储两个链表的节点值，最坏情况下，栈的大小为 `O(n)` 和 `O(m)`，因此总空间复杂度为 `O(n + m)`。
  - 除了栈之外，还需要存储结果链表，但在链表中存储的节点数是固定的，不会影响总体空间复杂度。

## 代码

```javascript
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
	const linkToStack = (head) => {
		let stack = [];
		while (head) {
			stack.push(head.val);
			head = head.next;
		}
		return stack;
	};

	let stack1 = linkToStack(l1);
	let stack2 = linkToStack(l2);
	let res = null;
	let carry = 0;
	while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
		let sum = carry;
		if (stack1.length !== 0) {
			sum += stack1.pop();
		}
		if (stack2.length !== 0) {
			sum += stack2.pop();
		}
		carry = Math.floor(sum / 10);
		sum %= 10;
		const node = new ListNode(sum, res);
		res = node;
	}

	return res;
};
```

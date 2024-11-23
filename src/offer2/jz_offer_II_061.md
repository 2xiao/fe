---
title: 61. 和最小的 k 个数对
description: LeetCode 61. 和最小的 k 个数对题解，和最小的 k 个数对，包含解题思路、复杂度分析以及完整的 JavaScript 代码实现。
keywords:
  - LeetCode
  - 61. 和最小的 k 个数对
  - 和最小的 k 个数对
  - 和最小的 k 个数对
  - 解题思路
  - 数组
  - 堆（优先队列）
---

# 61. 和最小的 k 个数对

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`堆（优先队列）`](/tag/heap-priority-queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/qn8gGX)

## 题目

给定两个以升序排列的整数数组 `nums1` 和 `nums2`, 以及一个整数 `k`。

定义一对值 `(u,v)`，其中第一个元素来自 `nums1`，第二个元素来自 `nums2`。

请找到和最小的 `k` 个数对 `(u1,v1)`, ` (u2,v2)` ... `(uk,vk)` 。

**示例 1:**

> **输入:** nums1 = [1,7,11], nums2 = [2,4,6], k = 3
>
> **输出:** [1,2],[1,4],[1,6]
>
> **解释:** 返回序列中的前 3 对数：
>
> > [1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]

**示例 2:**

> **输入:** nums1 = [1,1,2], nums2 = [1,2,3], k = 2
>
> **输出:**[1,1],[1,1]
>
> **解释:** 返回序列中的前 2 对数：
>
> > [1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]

**示例 3:**

> **输入:** nums1 = [1,2], nums2 = [3], k = 3
>
> **输出:** [1,3],[2,3]
>
> **解释:** 也可能序列中所有的数对都被返回:[1,3],[2,3]

**提示:**

- `1 <= nums1.length, nums2.length <= 10^4`
- `-10^9 <= nums1[i], nums2[i] <= 10^9`
- `nums1`, `nums2` 均为升序排列
- `1 <= k <= 1000`

::: warning
本题与 LeetCode [第 373 题](../problem/0373.md) 相同。
:::

## 解题思路

可以通过优先队列（堆）来解决。我们可以维护一个小顶堆，堆中存储的是每一个可能的数对的和，同时记录这个数对在两个数组中的位置。每次弹出堆顶元素，并将下一个可能的数对入堆。最终返回的结果数组就是从小到大的前 `k` 个数对。

1. 构建一个小顶堆，堆中的每个元素是一个三元组 `(sum, i, j)`，其中 `sum` 表示 `nums1[i] + nums2[j]` 的和，`i` 和 `j` 分别表示这个和在两个数组中的位置。
2. 初始化堆中元素，将 `(nums1[0] + nums2[0], 0, 0)` 加入堆中。
3. 重复以下步骤 `k` 次：
   - 弹出堆顶元素 `(sum, i, j)`，将 `(nums1[i+1] + nums2[j], i+1, j)` 和 `(nums1[i] + nums2[j+1], i, j+1)` 分别加入堆中。注意要确保 `(i+1, j)` 和 `(i, j+1)` 没有超出数组范围。
   - 将弹出的元素 `(nums1[i], nums2[j])` 加入结果数组。

#### 复杂度分析

- **时间复杂度**：`O(k log k)`

  - **初始堆的建立**：这个步骤需要插入 `k` 个元素，每次插入的时间复杂度为 `O(log k)`，总的插入复杂度为 `O(k log k)`。
  - **堆操作**：从堆中弹出最小的和，弹出操作的时间复杂度为 `O(log k)`。将新的数对加入到堆中，插入的时间复杂度也是 `O(log k)`。最多进行 `k` 次弹出和插入操作，因此总的堆操作时间复杂度为 `O(k log k)`。

- **空间复杂度**：`O(k)`，在堆中最多会同时存储 `k` 个数对，因此堆的空间复杂度为 `O(k)`。

## 代码

```javascript
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function (nums1, nums2, k) {
	let heap = [];
	const add = (val) => {
		heap.push(val);
		heapifyUp(heap.length - 1);
	};
	const pop = () => {
		if (heap.length == 0) {
			return null;
		}
		const top = heap[0];
		const last = heap.pop();
		if (heap.length > 0) {
			heap[0] = last;
			heapifyDown(0);
		}
		return top;
	};
	const heapifyUp = (i) => {
		while (i) {
			const parent = Math.floor((i - 1) / 2);
			if (heap[i][0] < heap[parent][0]) {
				[heap[i], heap[parent]] = [heap[parent], heap[i]];
				i = parent;
			} else {
				break;
			}
		}
	};
	const heapifyDown = (i) => {
		const left = i * 2 + 1;
		const right = i * 2 + 2;
		let min = i;
		if (left < heap.length && heap[left][0] < heap[min][0]) {
			min = left;
		}
		if (right < heap.length && heap[right][0] < heap[min][0]) {
			min = right;
		}
		if (min !== i) {
			[heap[i], heap[min]] = [heap[min], heap[i]];
			heapifyDown(min);
		}
	};

	let res = [];
	if (!nums1 || !nums2 || nums1.length === 0 || nums2.length === 0 || k <= 0) {
		return res;
	}
	for (let i = 0; i < Math.min(nums1.length, k); i++) {
		add([nums1[i] + nums2[0], i, 0]);
	}

	while (k-- > 0 && heap.length > 0) {
		const [sum, i, j] = pop();
		res.push([nums1[i], nums2[j]]);

		if (j + 1 < nums2.length) {
			add([nums1[i] + nums2[j + 1], i, j + 1]);
		}
	}

	return res;
};
```

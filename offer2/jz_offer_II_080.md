# [80. 含有 k 个元素的组合](https://leetcode.cn/problems/uUsW3B)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/uUsW3B)

## 题目

给定两个整数 `n` 和 `k`，返回 `1 ... n` 中所有可能的 `k` 个数的组合。

**示例 1:**

> **输入:** n = 4, k = 2
>
> **输出:**
>
> [
>
> [2,4],
>
> [3,4],
>
> [2,3],
>
> [1,2],
>
> [1,3],
>
> [1,4],
>
> ]

**示例 2:**

> **输入:** n = 1, k = 1
>
> **输出:**[[1]]

**提示:**

- `1 <= n <= 20`
- `1 <= k <= n`

::: warning
本题与 LeetCode [第 77 题](../problem/0077.md) 相同。
:::

## 解题思路

可以使用回溯算法，通过递归的方式生成组合：

1. 定义一个结果数组 `res` 和一个路径数组 `track`。
2. 使用回溯算法，通过递归函数 `backtrack` 遍历组合的所有可能性。
3. 在 `backtrack` 函数中，当路径数组的长度达到 `k` 时，将当前路径数组的副本加入结果数组。其中参数 `start` 控制遍历树枝的起始位置，避免产生重复的子集。
4. 在每一层递归中，从 `start` 开始遍历数字，将当前数字加入路径数组，然后递归调用下一层，最后弹出当前数字，回溯到上一层。

#### 复杂度分析

- **时间复杂度**：`O(n! / (k!(n-k)!))` ，因为这个问题的解的数量是从 `n` 个不同元素中选择 `k` 个元素的方式数。
- **空间复杂度**：`O(k * n! / (k!(n-k)!)) + O(k)` = `O(k * n! / (k!(n-k)!))`
  - 其中 `n! / (k!(n-k)!)` 表示从 `n` 个元素中选择 `k` 个的组合数。
  - 由于 `n! / (k!(n-k)!) < n! / ((n / 2)!)^2`，因此整体空间复杂度可以简化为 `O(k * n! / ((n / 2)!)^2)`。

## 代码

```javascript
/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
	let res = [];
	let track = [];
	const backtrack = (start) => {
		if (track.length == k) {
			res.push([...track]);
			return;
		}
		for (let i = start; i <= n; i++) {
			track.push(i);
			backtrack(i + 1);
			track.pop();
		}
	};
	backtrack(1);
	return res;
};
```

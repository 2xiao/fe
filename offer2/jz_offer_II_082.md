# [82. 含有重复元素集合的组合](https://leetcode.cn/problems/4sjJUc)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/4sjJUc)

## 题目

<p>给定一个可能有重复数字的整数数组&nbsp;<code>candidates</code>&nbsp;和一个目标数&nbsp;<code>target</code>&nbsp;，找出&nbsp;<code>candidates</code>&nbsp;中所有可以使数字和为&nbsp;<code>target</code>&nbsp;的组合。</p>

<p><code>candidates</code>&nbsp;中的每个数字在每个组合中只能使用一次，解集不能包含重复的组合。&nbsp;</p>

<p>&nbsp;</p>

<p><strong>示例&nbsp;1:</strong></p>

<pre>
<strong>输入:</strong> candidates =&nbsp;<code>[10,1,2,7,6,1,5]</code>, target =&nbsp;<code>8</code>,
<strong>输出:</strong>
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre>
<strong>输入:</strong> candidates =&nbsp;[2,5,2,1,2], target =&nbsp;5,
<strong>输出:</strong>
[
[1,2,2],
[5]
]</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>1 &lt;=&nbsp;candidates.length &lt;= 100</code></li>
	<li><code>1 &lt;=&nbsp;candidates[i] &lt;= 50</code></li>
	<li><code>1 &lt;= target &lt;= 30</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 40 题](../problem/0040.md) 相同。

## 解题思路

可以使用回溯算法，通过递归搜索所有可能的组合，满足组合的元素和等于目标值 `target`：

1. 对输入的数组 `candidates` 进行排序，以便在后续的去重步骤中方便比较相邻的元素。
2. 定义一个空数组 `res` 用于存储最终的结果，以及一个空数组 `track` 用于回溯过程中记录当前的路径。
3. 定义一个变量 `sum` 用于记录当前路径中元素的和。
4. 创建一个名为 `backtrack` 的递归函数，该函数接受一个参数 `start` 表示当前遍历的起始位置。
5. 在 `backtrack` 函数中，首先检查当前路径的和是否等于目标值 `target`，如果是，则将当前路径 `track` 加入到结果数组 `res` 中。
6. 然后从 `start` 开始遍历数组 `candidates`，对于每个元素：
   - 如果当前元素加上当前路径的和超过目标值 `target`，则结束当前循环，因为后续元素只会使和更大。
   - 如果当前元素与前一个元素相同（即出现了重复元素），并且当前元素不是起始位置的元素，则跳过当前元素，以避免重复生成相同的组合。
   - 否则，将当前元素加入到路径 `track` 中，更新当前路径的和 `sum`，递归调用 `backtrack` 函数，并传入下一个位置 `i + 1` 作为参数，以继续生成下一个元素的组合。
   - 在递归调用结束后，需要将当前元素从路径 `track` 中弹出，以便回溯到上一层继续遍历其他元素，并恢复当前路径的和 `sum`。
7. 最后返回结果数组 `res`，其中包含所有满足条件的组合。

#### 复杂度分析

- **时间复杂度**：`O(nlog n + 2^n)`，`n` 为 `candidates` 长度。
  - 对 `candidates` 进行排序的时间复杂度为 `O(nlog n)`；
  - 在递归过程中，每个数字在路径中只能使用一次，在最坏的情况下，每个候选数都可以被加入到组合中，而每个数有选择和不选择两种可能，时间复杂度为 `O(n^2)`；
- **空间复杂度**：`O(t)`，`t = target / 最小候选数`，主要由递归深度决定，递归树的深度可能达到 `target / 最小候选数`。

## 代码

```javascript
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
	let res = [];
	let track = [];
	let sum = 0;
	candidates.sort((a, b) => a - b);

	const backtrack = (start) => {
		if (sum == target) {
			res.push([...track]);
		}
		// 剪枝一：从 start 开始遍历，避免重复选择同一元素，避免生成重复子集
		for (let i = start; i < candidates.length; i++) {
			// 剪枝二：若子集和超过 target ，则直接结束循环
			// 这是因为数组已排序，后边元素更大，子集和一定超过 target
			if (target - sum - candidates[i] < 0) {
				break;
			}
			// 剪枝三：如果该元素与左边元素相等，说明该搜索分支重复，直接跳过
			if (i > start && candidates[i] == candidates[i - 1]) {
				continue;
			}
			track.push(candidates[i]);
			sum += candidates[i];
			backtrack(i + 1);
			track.pop();
			sum -= candidates[i];
		}
	};

	backtrack(0);
	return res;
};
```

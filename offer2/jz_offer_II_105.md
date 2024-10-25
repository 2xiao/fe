# [105. 岛屿的最大面积](https://leetcode.cn/problems/ZL6zAn)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) [`数组`](/tag/array.md) [`矩阵`](/tag/matrix.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/ZL6zAn)

## 题目

<p>给定一个由&nbsp;<code>0</code> 和 <code>1</code> 组成的非空二维数组&nbsp;<code>grid</code>&nbsp;，用来表示海洋岛屿地图。</p>

<p>一个&nbsp;<strong>岛屿</strong>&nbsp;是由一些相邻的&nbsp;<code>1</code>&nbsp;(代表土地) 构成的组合，这里的「相邻」要求两个 <code>1</code> 必须在水平或者竖直方向上相邻。你可以假设&nbsp;<code>grid</code> 的四个边缘都被 <code>0</code>（代表水）包围着。</p>

<p>找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 <code>0</code> 。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<p><img alt="" src="https://pic.leetcode-cn.com/1626667010-nSGPXz-image.png" style="width: 452px; " /></p>

<pre>
<strong>输入: </strong>grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
<strong>输出: </strong>6
<strong>解释: </strong>对于上面这个给定矩阵应返回&nbsp;<code>6</code>。注意答案不应该是 <code>11</code> ，因为岛屿只能包含水平或垂直的四个方向的 <code>1</code> 。</pre>

<p><strong>示例 2:</strong></p>

<pre>
<strong>输入: </strong>grid = [[0,0,0,0,0,0,0,0]]
<strong>输出: </strong>0</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>m == grid.length</code></li>
	<li><code>n == grid[i].length</code></li>
	<li><code>1 &lt;= m, n &lt;= 50</code></li>
	<li><code>grid[i][j] is either 0 or 1</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 695 题](../problem/0695.md) 相同。

## 解题思路

这道题和 [第 200 题 岛屿数量](../problem/0200.md) 的解题思路是一样的，只不过需要给 dfs 函数加一个返回值，记录岛屿的面积。

遍历整个网格，并在每次找到一个陆地单元时，使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历所有相连的陆地单元，从而将整个岛屿标记为已访问。

1. 遍历网格：遍历每一个单元格，如果当前单元格是 `'1'`（陆地），则找到一个新的岛屿，计数器加一。
2. 标记已访问：使用 DFS 从当前单元格开始，标记所有连通的陆地单元为 `'0'`（水），表示它们已被访问，并返回岛屿面积。
3. 继续遍历：继续遍历剩余的单元格，直到整个网格被检查完。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，其中 `m` 是网格的行数，`n` 是网格的列数，每个格子最多会被访问一次。
- **空间复杂度**：`O(m * n)`，最坏情况下，递归的深度可能达到 `m * n`，因此递归调用栈的空间复杂度为 `O(m * n)`

## 代码

```javascript
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
	const m = grid.length,
		n = grid[0].length;

	// 从 (i, j) 开始，将与之相邻的陆地都变成海水
	const dfs = (grid, i, j) => {
		// 超出索引边界
		if (i < 0 || j < 0 || i >= m || j >= n) {
			return 0;
		}
		// (i, j) 已经是海水了
		if (grid[i][j] == 0) return 0;

		// 将 (i, j) 变成海水
		grid[i][j] = 0;

		// // 淹没上下左右的陆地，并返回相邻岛屿面积
		return (
			dfs(grid, i - 1, j) +
			dfs(grid, i + 1, j) +
			dfs(grid, i, j - 1) +
			dfs(grid, i, j + 1) +
			1
		);
	};

	let res = 0;
	// 遍历 grid
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] == 1) {
				// 记录最大岛屿面积
				res = Math.max(res, dfs(grid, i, j));
			}
		}
	}
	return res;
};
```

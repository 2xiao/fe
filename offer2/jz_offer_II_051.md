# [51. 节点之和最大的路径](https://leetcode.cn/problems/jC7MId)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`树`](/tag/tree.md) [`深度优先搜索`](/tag/depth-first-search.md) [`动态规划`](/tag/dynamic-programming.md) [`二叉树`](/tag/binary-tree.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/jC7MId)

## 题目

<p><strong>路径</strong> 被定义为一条从树中任意节点出发，沿父节点-子节点连接，达到任意节点的序列。同一个节点在一条路径序列中 <strong>至多出现一次</strong> 。该路径<strong> 至少包含一个 </strong>节点，且不一定经过根节点。</p>

<p><strong>路径和</strong> 是路径中各节点值的总和。</p>

<p>给定一个二叉树的根节点 <code>root</code> ，返回其 <strong>最大路径和</strong>，即所有路径上节点值之和的最大值。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx1.jpg" style="width: 322px; height: 182px;" /></p>

<pre>
<strong>输入：</strong>root = [1,2,3]
<strong>输出：</strong>6
<strong>解释：</strong>最优路径是 2 -&gt; 1 -&gt; 3 ，路径和为 2 + 1 + 3 = 6</pre>

<p><strong>示例 2：</strong></p>

<p><img alt="" src="https://assets.leetcode.com/uploads/2020/10/13/exx2.jpg" /></p>

<pre>
<strong>输入：</strong>root = [-10,9,20,null,null,15,7]
<strong>输出：</strong>42
<strong>解释：</strong>最优路径是 15 -&gt; 20 -&gt; 7 ，路径和为 15 + 20 + 7 = 42
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>树中节点数目范围是 <code>[1, 3 * 10<sup>4</sup>]</code></li>
	<li><code>-1000 &lt;= Node.val &lt;= 1000</code></li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 124 题](../problem/0124.md) 相同。

## 解题思路

给定一个二叉树，路径不一定要从根节点出发，可以从任意节点开始，并可以到达任意节点。要找到路径和的最大值，需要递归地计算每个节点的最大贡献值。

- 对于当前节点 `root`，定义一个函数 `maxGain(node)`，表示从当前节点出发到任意下属节点的路径最大贡献值。贡献值是指该节点及其子树为路径提供的最大和。
- 当递归到叶节点的 `null` 节点时，返回 `0`，表示空节点的贡献为 `0`。
- 计算出当前节点左右子树的最大贡献值 `leftGain` 和 `rightGain`。
- 当前节点的最大路径和可以是：
  - 当前节点值 `node.val`。
  - 当前节点 + 左子树的贡献。
  - 当前节点 + 右子树的贡献。
  - 当前节点 + 左子树的贡献 + 右子树的贡献（代表路径穿过当前节点）。
- 更新全局最大路径和 `res`。
- 返回当前节点可以提供给父节点的最大路径贡献，值为 `node.val + max(leftGain, rightGain)`，即选择左右子树中贡献较大的那个。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是二叉树中的节点数量。我们需要遍历每个节点一次。
- **空间复杂度**：`O(h)`，其中 `h`是二叉树的高度。递归栈的深度取决于树的高度，在最坏情况下，树的高度为`O(n)`，即退化成链表的情况。

## 代码

```javascript
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
	let res = -Infinity;

	const maxGain = (node) => {
		if (!node) return 0;

		// 递归计算左右子树的最大贡献值
		let leftGain = Math.max(maxGain(node.left), 0); // 负数时选择0
		let rightGain = Math.max(maxGain(node.right), 0);

		// 更新全局最大路径和
		res = Math.max(res, node.val + leftGain + rightGain);

		// 返回当前节点可以提供给父节点的最大贡献
		return node.val + Math.max(leftGain, rightGain);
	};

	maxGain(root);

	return res;
};
```

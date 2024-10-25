# [111. 计算除法](https://leetcode.cn/problems/vlzXQL)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`并查集`](/tag/union-find.md) [`图`](/tag/graph.md) [`数组`](/tag/array.md) [`最短路`](/tag/shortest-path.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/vlzXQL)

## 题目

<p>给定一个变量对数组 <code>equations</code> 和一个实数值数组 <code>values</code> 作为已知条件，其中 <code>equations[i] = [A<sub>i</sub>, B<sub>i</sub>]</code> 和 <code>values[i]</code> 共同表示等式 <code>A<sub>i</sub> / B<sub>i</sub> = values[i]</code> 。每个 <code>A<sub>i</sub></code> 或 <code>B<sub>i</sub></code> 是一个表示单个变量的字符串。</p>

<p>另有一些以数组 <code>queries</code> 表示的问题，其中 <code>queries[j] = [C<sub>j</sub>, D<sub>j</sub>]</code> 表示第 <code>j</code> 个问题，请你根据已知条件找出 <code>C<sub>j</sub> / D<sub>j</sub> = ?</code> 的结果作为答案。</p>

<p>返回 <strong>所有问题的答案</strong> 。如果存在某个无法确定的答案，则用 <code>-1.0</code> 替代这个答案。如果问题中出现了给定的已知条件中没有出现的字符串，也需要用 <code>-1.0</code> 替代这个答案。</p>

<p><strong>注意：</strong>输入总是有效的。可以假设除法运算中不会出现除数为 0 的情况，且不存在任何矛盾的结果。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;]], values = [2.0,3.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;e&quot;],[&quot;a&quot;,&quot;a&quot;],[&quot;x&quot;,&quot;x&quot;]]
<strong>输出：</strong>[6.00000,0.50000,-1.00000,1.00000,-1.00000]
<strong>解释：</strong>
条件：<em>a / b = 2.0</em>, <em>b / c = 3.0</em>
问题：<em>a / c = ?</em>, <em>b / a = ?</em>, <em>a / e = ?</em>, <em>a / a = ?</em>, <em>x / x = ?</em>
结果：[6.0, 0.5, -1.0, 1.0, -1.0 ]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;c&quot;],[&quot;bc&quot;,&quot;cd&quot;]], values = [1.5,2.5,5.0], queries = [[&quot;a&quot;,&quot;c&quot;],[&quot;c&quot;,&quot;b&quot;],[&quot;bc&quot;,&quot;cd&quot;],[&quot;cd&quot;,&quot;bc&quot;]]
<strong>输出：</strong>[3.75000,0.40000,5.00000,0.20000]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>equations = [[&quot;a&quot;,&quot;b&quot;]], values = [0.5], queries = [[&quot;a&quot;,&quot;b&quot;],[&quot;b&quot;,&quot;a&quot;],[&quot;a&quot;,&quot;c&quot;],[&quot;x&quot;,&quot;y&quot;]]
<strong>输出：</strong>[0.50000,2.00000,-1.00000,-1.00000]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= equations.length &lt;= 20</code></li>
	<li><code>equations[i].length == 2</code></li>
	<li><code>1 &lt;= A<sub>i</sub>.length, B<sub>i</sub>.length &lt;= 5</code></li>
	<li><code>values.length == equations.length</code></li>
	<li><code>0.0 &lt; values[i] &lt;= 20.0</code></li>
	<li><code>1 &lt;= queries.length &lt;= 20</code></li>
	<li><code>queries[i].length == 2</code></li>
	<li><code>1 &lt;= C<sub>j</sub>.length, D<sub>j</sub>.length &lt;= 5</code></li>
	<li><code>A<sub>i</sub>, B<sub>i</sub>, C<sub>j</sub>, D<sub>j</sub></code> 由小写英文字母与数字组成</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 399 题](../problem/0399.md) 相同。

## 解题思路

这道题在考察 **有向加权图** 的遍历。

`a/b=2` 就相当于往图中添加了一条 `a->b` 权值为 `2` 的边，同时添加一条 `b->a` 权值为 `1/2` 的边。

`queries` 问 `x/y` 的值，相当于就是图中是否存在一条从 `x` 到 `y` 的路径，如果有，那么路径上所有边的权值相乘就是 `x/y` 的值。

所以思路就是，用邻接表建图，然后用 DFS 或者 BFS 遍历即可。

1. **构建图**：

   - 使用邻接表来表示图，每一个变量作为一个节点，边的权重为它们之间的值（`a/b=2` 就相当于往图中添加了一条 `a->b` 权值为 `2` 的边，同时添加一条 `b->a` 权值为 `1/2` 的边）
   - 遍历给定的方程式和对应的值，将其构建为一个双向图。

2. **处理查询**：

   - 对于每个查询 `x/y`，我们使用 DFS 或 BFS 在图中查找从 `x` 到 `y` 的路径。如果能找到路径，则计算路径上所有边的权重乘积；如果找不到路径，则返回 `-1.0`。

3. **实现 BFS**：
   - 使用 BFS 遍历图，维护一个队列和一个记录已访问节点的集合，同时维护一个权重映射，用于记录从起始节点到当前节点的路径乘积。
   - 一旦找到目标节点，则直接返回从起始节点到目标节点的路径乘积。

#### 复杂度分析

- **时间复杂度**：`O(E + Q * (V + E))`，其中 `E` 是 `equations` 的数量，`V` 是 `values` 的数量，`Q` 是 `queries` 的数量。
  - 在构建图的过程中，需要遍历所有方程，每个方程式涉及两个节点；
  - 对于每个查询，使用 BFS 在图中查找路径，最坏情况下需要遍历所有节点和边，时间复杂度为 `O(V + E)`，一共要查询 `Q` 次；
- **空间复杂度**：`O(V + E)`
  - 存储图的空间复杂度为 `O(V + E)`，需要为每个节点和边分配空间；
  - 还需要额外的空间来存储队列和已访问集合，空间复杂度也是 `O(V)`；
  - 因此，总的空间复杂度为 `O(V + E)`；

## 代码

```javascript
/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function (equations, values, queries) {
	// 把 equations 抽象成一幅图，邻接表存储
	let graph = new Map();
	for (let i = 0; i < equations.length; i++) {
		let [start, end] = equations[i],
			weight = values[i];

		// 构建双向图
		if (!graph.has(start)) {
			graph.set(start, []);
		}
		graph.get(start).push({ node: end, weight });

		if (!graph.has(end)) {
			graph.set(end, []);
		}
		graph.get(end).push({ node: start, weight: 1 / weight });
	}
	// 依次求解 queries
	let res = new Array(queries.lenghth);
	for (let i = 0; i < queries.length; i++) {
		const [start, end] = queries[i];
		// BFS 遍历图，计算 start 到 end 的路径乘积
		res[i] = bfs(graph, start, end);
	}
	return res;
};

var bfs = function (graph, start, end) {
	// 不存在的节点，肯定无法到达
	if (!graph.has(start) || !graph.has(end)) return -1.0;
	if (start == end) return 1.0;

	// BFS 标准框架
	let queue = [start],
		visited = new Set([start]),
		// key 为节点变量名，value 记录从 start 到该节点的路径乘积
		weight = new Map([[start, 1.0]]);
	while (queue.length) {
		let cur = queue.shift();
		for (let item of graph.get(cur)) {
			if (visited.has(item.node)) {
				continue;
			}
			// 更新路径乘积
			weight.set(item.node, weight.get(cur) * item.weight);
			if (item.node == end) {
				return weight.get(end);
			}
			// 记录 visited
			visited.add(item.node);
			// 新节点加入队列继续遍历
			queue.push(item.node);
		}
	}
	return -1.0;
};
```

---
title: 113. 课程顺序
description: LeetCode,113. 课程顺序,课程顺序,课程顺序,解题思路,深度优先搜索,广度优先搜索,图,拓扑排序
keywords:
  - LeetCode
  - 113. 课程顺序
  - 课程顺序
  - 课程顺序
  - 解题思路
  - 深度优先搜索
  - 广度优先搜索
  - 图
  - 拓扑排序
---

# 113. 课程顺序

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`拓扑排序`](/tag/topological-sort.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/QA2IGt)

## 题目

现在总共有 `numCourses` 门课需要选，记为 `0` 到 `numCourses-1`。

给定一个数组 `prerequisites` ，它的每一个元素 `prerequisites[i]` 表示两门课程之间的先修顺序。 例如
`prerequisites[i] = [ai, bi]` 表示想要学习课程 `ai` ，需要先完成课程 `bi` 。

请根据给出的总课程数 `numCourses` 和表示先修顺序的 `prerequisites` 得出一个可行的修课序列。

可能会有多个正确的顺序，只要任意返回一种就可以了。如果不可能完成所有课程，返回一个空数组。

**示例 1:**

> **输入:** numCourses = 2, prerequisites = [[1,0]]
>
> **输出:**[0,1]
>
> **解释:** 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。

**示例 2:**

> **输入:** numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
>
> **输出:**[0,1,2,3] or [0,2,1,3]
>
> **解释:** 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。
>
> 因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。

**示例 3:**

> **输入:** numCourses = 1, prerequisites = []
>
> **输出:**[0]
>
> **解释:** 总共 1 门课，直接修第一门课就可。

**提示:**

- `1 <= numCourses <= 2000`
- `0 <= prerequisites.length <= numCourses * (numCourses - 1)`
- `prerequisites[i].length == 2`
- `0 <= ai, bi < numCourses`
- `ai != bi`
- `prerequisites` 中不存在重复元素

::: warning
本题与 LeetCode [第 210 题](../problem/0210.md) 相同。
:::

## 解题思路

什么时候无法修完所有课程？当存在循环依赖的时候。

其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。

看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。

1. **构建图**：

- 首先可以把课程看成「有向图」中的节点，节点编号分别是 `0, 1, ..., numCourses-1`，把课程之间的依赖关系看做节点之间的有向边。
- 比如说必须修完课程 `1` 才能去修课程 `3`，那么就在图中添加一条从节点 `1` 指向 `3` 的边。
- 如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。

2. **使用 DFS 检测环路**：

- 用一个 `hasCycle` 变量记录是否存在环，`onPath` 记录一次 DFS 递归经过的节点。
- 当重复遍历到 `onPath` 中的节点时，就说明遇到了环，设置 `hasCycle = true`。
- 用一个 `visited` 变量记录遍历过的节点，防止走回头路。
  - 假设以节点 `2` 为起点遍历所有可达的路径，最终发现没有环。
  - 假设另一个节点 `5` 有一条指向 `2` 的边，在以 `5` 为起点遍历所有可达的路径时，肯定还会走到 `2`，此时就不需要继续遍历 `2` 的所有可达路径了，避免了冗余计算
- 遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。

3. **收集学习顺序**：

- 用一个 `path` 变量记录最终的学习路径，在 DFS 的后序位置更新 `path`，如果没有环路，将当前课程添加到 `path` 中。

#### 复杂度分析

- **时间复杂度**：`O(V + E)`

  - 图的构建时间复杂度为 `O(V + E)`，其中 `V` 是课程数量，`E` 是先决条件的数量。
  - DFS 遍历每个节点和每条边，因此 DFS 的时间复杂度也是 `O(V + E)`。
  - 因此，总的时间复杂度为 `O(V + E)`。

- **空间复杂度**：`O(V + E)`
  - 需要使用额外的空间来存储图、访问状态数组和路径数组，空间复杂度为 `O(V + E)`。
  - 额外的递归栈空间取决于课程的数量，最坏情况下为 `O(V)`。
  - 因此，总的空间复杂度为 `O(V + E)`。

## 代码

```javascript
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
	let graph = new Array(numCourses).fill(0).map(() => []);
	for (let [a, b] of prerequisites) {
		graph[a].push(b);
	}

	let visited = new Array(numCourses).fill(false),
		onPath = new Array(numCourses).fill(false),
		path = [],
		hasCycle = false;

	const dfs = (graph, i) => {
		if (onPath[i]) {
			hasCycle = true;
		}
		if (hasCycle || visited[i]) {
			return;
		}
		visited[i] = true;
		onPath[i] = true;

		for (let j of graph[i]) {
			dfs(graph, j);
		}

		path.push(i);
		onPath[i] = false;
	};

	for (let i = 0; i < numCourses; i++) {
		dfs(graph, i);
	}

	return hasCycle ? [] : path;
};
```

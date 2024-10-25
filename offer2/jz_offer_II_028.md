# [28. 展平多级双向链表](https://leetcode.cn/problems/Qv1Da2)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/Qv1Da2)

## 题目

<p>多级双向链表中，除了指向下一个节点和前一个节点指针之外，它还有一个子链表指针，可能指向单独的双向链表。这些子列表也可能会有一个或多个自己的子项，依此类推，生成多级数据结构，如下面的示例所示。</p>

<p>给定位于列表第一级的头节点，请扁平化列表，即将这样的多级双向链表展平成普通的双向链表，使所有结点出现在单级双链表中。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
<strong>输出：</strong>[1,2,3,7,8,11,12,9,10,4,5,6]
<strong>解释：
</strong>
输入的多级列表如下图所示：

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlist.png" style="height: 363px; width: 640px;" />

扁平化后的链表如下图：

<img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2018/10/12/multilevellinkedlistflattened.png" style="height: 80px; width: 1100px;" />
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>head = [1,2,null,3]
<strong>输出：</strong>[1,3,2]
<strong>解释：

</strong>输入的多级列表如下图所示：

  1---2---NULL
  |
  3---NULL
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>head = []
<strong>输出：</strong>[]
</pre>

<p>&nbsp;</p>

<p><strong>如何表示测试用例中的多级链表？</strong></p>

<p>以 <strong>示例 1</strong> 为例：</p>

<pre>
 1---2---3---4---5---6--NULL
         |
         7---8---9---10--NULL
             |
             11--12--NULL</pre>

<p>序列化其中的每一级之后：</p>

<pre>
[1,2,3,4,5,6,null]
[7,8,9,10,null]
[11,12,null]
</pre>

<p>为了将每一级都序列化到一起，我们需要每一级中添加值为 null 的元素，以表示没有节点连接到上一级的上级节点。</p>

<pre>
[1,2,3,4,5,6,null]
[null,null,7,8,9,10,null]
[null,11,12,null]
</pre>

<p>合并所有序列化结果，并去除末尾的 null 。</p>

<pre>
[1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>节点数目不超过 <code>1000</code></li>
	<li><code>1 &lt;= Node.val &lt;= 10^5</code></li>
</ul>

<p>&nbsp;</p>
本题与 LeetCode [第 430 题](../problem/0430.md) 相同。

## 解题思路

1. 使用递归遍历多级链表，如果某个节点有子链表，则对子链表进行递归处理。
2. 在递归处理过程中，将当前节点的 `next` 指针指向递归处理后的子链表，同时将子链表的 `prev` 指针指向当前节点。
3. 最后，将当前节点的 `child` 指针置为 `null`。

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 `n` 是链表的节点总数。这个算法递归地处理了多级链表中的每个节点，每个节点都只处理一次。
- **空间复杂度**：`O(1)`。

## 代码

```javascript
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
	if (!head) return null;
	const next = head.next;
	const child = head.child;

	// 处理当前节点的子链表
	const flattenChild = flatten(child);
	// 连接当前节点和递归处理后的子链表
	if (flattenChild) {
		head.next = flattenChild;
		flattenChild.prev = head;
		head.child = null;
	}
	// 递归处理后续节点
	const flattenNext = flatten(next);
	// 连接递归处理后的子链表和后续节点
	if (flattenNext) {
		const last = findLast(flattenChild) || head;
		last.next = flattenNext;
		flattenNext.prev = last;
	}
	return head;
};

// 辅助函数：找到链表的最后一个节点
var findLast = function (head) {
	while (head && head.next) {
		head = head.next;
	}
	return head;
};
```

# [24. 反转链表](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`链表`](/tag/linked-list.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/fan-zhuan-lian-biao-lcof)

## 题目

<p>给定一个头节点为 <code>head</code> 的单链表用于记录一系列核心肌群训练编号，请将该系列训练编号 <strong>倒序</strong> 记录于链表并返回。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>head = [1,2,3,4,5]
<strong>输出：</strong>[5,4,3,2,1]
</pre>

<p>&nbsp;</p>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>head = [1,2]
<strong>输出：</strong>[2,1]
</pre>

<p>&nbsp;</p>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>head = []
<strong>输出：</strong>[]
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li>链表中节点的数目范围是 <code>[0, 5000]</code></li>
	<li><code>-5000 &lt;= Node.val &lt;= 5000</code></li>
</ul>

<p>&nbsp;</p>

<p><strong>注意</strong>：本题与主站 206 题相同：<a href="https://leetcode-cn.com/problems/reverse-linked-list/">https://leetcode-cn.com/problems/reverse-linked-list/</a></p>

<p>&nbsp;</p>


## 解题思路

有两种解题方法，一是循环、二是递归。

### 思路一：循环

使用双指针，遍历链表，并在访问各节点时修改 `next` 引用指向。

#### 复杂度分析

- **时间复杂度**: `O(n)`，遍历链表使用线性大小时间。

- **空间复杂度**: `O(1)`，变量 `prev` 和 `cur` 使用常数大小额外空间。

---

### 思路二：递归

使用递归法遍历链表，当越过尾节点后终止递归，在回溯时修改各节点的 `next` 引用指向。

#### 复杂度分析

- **时间复杂度**: `O(n)`，遍历链表使用线性大小时间。

- **空间复杂度**: `O(n)`，遍历链表的递归深度达到 `n` ，系统使用 `O(n)` 大小额外空间。

## 代码

::: code-tabs

@tab 循环

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	let prev = null;
	let cur = head;

	while (cur !== null) {
		let next = cur.next;
		cur.next = prev;
		prev = cur;
		cur = next;
	}
	return prev;
};
```

@tab 递归

```javascript
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	if (head === null || head.next === null) {
		return head;
	}
	const last = reverseList(head.next);
	head.next.next = head;
	head.next = null;
	return last;
};
```

:::

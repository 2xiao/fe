# [31. 最近最少使用缓存](https://leetcode.cn/problems/OrIXps)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`设计`](/tag/design.md) [`哈希表`](/tag/hash-table.md) [`链表`](/tag/linked-list.md) [`双向链表`](/tag/doubly-linked-list.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/OrIXps)

## 题目

<div class="title__3Vvk">
<p>运用所掌握的数据结构，设计和实现一个&nbsp; <a href="https://baike.baidu.com/item/LRU" target="_blank">LRU (Least Recently Used，最近最少使用) 缓存机制</a> 。</p>

<p>实现 <code>LRUCache</code> 类：</p>

<ul>
	<li><code>LRUCache(int capacity)</code> 以正整数作为容量&nbsp;<code>capacity</code> 初始化 LRU 缓存</li>
	<li><code>int get(int key)</code> 如果关键字 <code>key</code> 存在于缓存中，则返回关键字的值，否则返回 <code>-1</code> 。</li>
	<li><code>void put(int key, int value)</code>&nbsp;如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。</li>
</ul>

<p>&nbsp;</p>

<p><strong>示例：</strong></p>

<pre>
<strong>输入</strong>
[&quot;LRUCache&quot;, &quot;put&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;put&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;]
[[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
<strong>输出</strong>
[null, null, null, 1, null, -1, null, -1, 3, 4]

<strong>解释</strong>
LRUCache lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>1 &lt;= capacity &lt;= 3000</code></li>
	<li><code>0 &lt;= key &lt;= 10000</code></li>
	<li><code>0 &lt;= value &lt;= 10<sup>5</sup></code></li>
	<li>最多调用 <code>2 * 10<sup>5</sup></code> 次 <code>get</code> 和 <code>put</code></li>
</ul>
</div>

<p>&nbsp;</p>

<p><strong>进阶</strong>：是否可以在&nbsp;<code>O(1)</code> 时间复杂度内完成这两种操作？</p>

<p>&nbsp;</p>

本题与 LeetCode [第 146 题](../problem/0146.md) 相同。

## 解题思路

`LRU` 是 `Least Recently Used` 的缩写，即最近最少使用，是一种常用的缓存淘汰算法，选择最久未使用的页面予以淘汰。

![](../image/2-2-7.png)

可以维护一个有序单链表，越靠近链表尾部的节点是越早之前访问的。如上图所示：

- 要插入 B 的时候，发现缓存中有 B ，这时需要把 B 放到链首，因为它被使用了；
- 要插入 E 的时候，缓存中没有 E，直接把 E 插入链首；
- 要插入 F 的时候，缓存中没有 F，容量已满，需要淘汰掉 A ，因为 A 最久未被使用；
- 要插入 C 的时候，发现缓存中有 C ，这时需要把 C 放到链首；
- 要插入 H 的时候，缓存中没有 H，容量已满，需要淘汰掉 D ，因为 D 最久未被使用；

可以发现，LRU 更新和插入新节点都发生在链首，删除数据都发生在链尾。

`LRUCache` 类有两个方法：

- `get` 当有一个新的数据被访问时：
  - 如果此数据之前已经被缓存在链表中了，遍历得到这个数据对应的节点，并将其从原来的位置删除，然后再插入到链表的头部，返回数据的值；
  - 如果此数据没有在缓存链表中，则返回 `-1`；
- `put` 往链表里新增数据时：
  - 如果此数据之前已经被缓存在链表中了，更新此数据的值，并将其从原来的位置删除，再插入到链表的头部；
  - 如果此数据没有在缓存链表中，又分为两种情况：
    - 如果此时缓存未满，则将此节点直接插入到链表的头部；
    - 如果此时缓存已满，则链表尾节点删除，将新的数据节点插入链表的头部。

这样就用链表实现了一个 LRU 缓存，如果使用单向链表实现，则缓存访问的时间复杂度为 `O(n)`，因为不管缓存有没有满，都需要遍历一遍链表。

可以继续优化这个实现思路，比如使用双向链表，并引入 **哈希表（Hash table）** 来记录每个数据的位置，将缓存访问的时间复杂度降到 `O(1)`。

## 代码

```javascript
class Node {
	// @param {number} key
	// @param {number} value
	constructor(key, value) {
		this.key = key;
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class LRUCache {
	// @param {number} capacity
	constructor(capacity) {
		this.cap = capacity;
		this.cache = new Map();
		this.head = new Node(0, 0);
		this.tail = new Node(0, 0);
		this.head.next = this.tail;
		this.tail.prev = this.head;
	}

	// @param {number} key
	// @return {number}
	get(key) {
		if (this.cache.has(key)) {
			this.remove(this.cache.get(key));
			this.insert(this.cache.get(key));
			return this.cache.get(key).value;
		}
		return -1;
	}

	// @param {Node} node
	remove(node) {
		const prev = node.prev;
		const next = node.next;
		prev.next = next;
		next.prev = prev;
	}

	// @param {Node} node
	insert(node) {
		const next = this.head.next;
		this.head.next = node;
		next.prev = node;
		node.prev = this.head;
		node.next = next;
	}

	// @param {number} key
	// @param {number} value
	// @return {void}
	put(key, value) {
		if (this.cache.has(key)) {
			this.remove(this.cache.get(key));
		}
		this.cache.set(key, new Node(key, value));
		this.insert(this.cache.get(key));
		if (this.cache.size > this.cap) {
			const old = this.tail.prev;
			this.remove(old);
			this.cache.delete(old.key);
		}
	}
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
```

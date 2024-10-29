# [9. 用两个栈实现队列](https://2xiao.github.io/leetcode-js/offer/jz_offer_09_1.html)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`栈`](/tag/stack.md) [`设计`](/tag/design.md) [`队列`](/tag/queue.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof)

## 题目

使用两个栈实现先入先出队列。需要实现对应的两个函数：

- `appendTail`：在队列尾部插入整数。
- `deleteHead`：在队列头部删除整数（如果队列中没有元素，`deleteHead` 返回 `-1`）。

**Example:**

> 输入：["CQueue","appendTail","deleteHead","deleteHead"], [[], [3], [], []]
>
> 输出：[null,null,3,-1]

**Constraints:**

- `1 <= values <= 10000`
- 最多会对 `appendTail`、`deleteHead` 进行 `10000` 次调用

::: warning
本题与 LeetCode [第 232 题](../problem/0232.md) 相同。
:::

## 解题思路

我们可将两个“书车”看作两个“栈”，则本题可被转化为“用两个栈实现一个队列”。

## 代码

```javascript
class CQueue {
	constructor() {
		this.push_stack = [];
		this.pop_stack = [];
	}
	// @param {number} value
	// @return {void}
	appendTail(value) {
		this.push_stack.push(value);
	}
	// @return {number}
	deleteHead() {
		if (this.pop_stack.length + this.push_stack.length === 0) return -1;
		if (this.pop_stack.length > 0) {
			return this.pop_stack.pop();
		}
		while (this.push_stack.length > 0) {
			this.pop_stack.push(this.push_stack.pop());
		}
		return this.pop_stack.pop();
	}
}
/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */
```

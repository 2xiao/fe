# [45. 把数组排成最小的数](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`贪心`](/tag/greedy.md) [`字符串`](/tag/string.md) [`排序`](/tag/sorting.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/ba-shu-zu-pai-cheng-zui-xiao-de-shu-lcof)

## 题目

<p>闯关游戏需要破解一组密码，闯关组给出的有关密码的线索是：</p>

<ul>
	<li>一个拥有密码所有元素的非负整数数组 <code>password</code></li>
	<li>密码是 <code>password</code> 中所有元素拼接后得到的最小的一个数</li>
</ul>

<p>请编写一个程序返回这个密码。</p>

<p>&nbsp;</p>

<p><strong>示例 1:</strong></p>

<pre>
<strong>输入: </strong>password = [15, 8, 7]
<strong>输出: </strong>"1578"</pre>

<p><strong>示例&nbsp;2:</strong></p>

<pre>
<strong>输入: </strong>password = [0, 3, 30, 34, 5, 9]
<strong>输出: </strong>"03033459"</pre>

<p>&nbsp;</p>

<p><strong>提示:</strong></p>

<ul>
	<li><code>0 &lt; password.length &lt;= 100</code></li>
</ul>

<p><strong>说明: </strong></p>

<ul>
	<li>输出结果可能非常大，所以你需要返回一个字符串而不是整数</li>
	<li>拼接起来的数字可能会有前导 0，最后结果不需要去掉前导 0</li>
</ul>

<p>&nbsp;</p>


## 解题思路

要解决这个问题，需要对数组中的元素进行排序，使得拼接后的结果最小，可以使用自定义排序规则来实现。

1. **处理数组**：将数组中的数字转换为字符串。
2. **自定义排序**：定义一个比较函数，判断两个数的拼接顺序。对于任意两个字符串 `x` 和 `y`，我们将 `x` 和 `y` 拼接成两个不同的顺序（即 `xy` 和 `yx`），然后比较这两个拼接后的结果，决定它们的排序顺序。
3. **拼接结果**：对排序后的数组进行拼接，形成最终的密码字符串。

#### 复杂度分析

- **时间复杂度**：`O(n log n)`，其中 `n` 是数组的长度。
- **空间复杂度**：`O(n)`，用于存储字符串数组。

## 代码

```javascript
/**
 * @param {number[]} password
 * @return {string}
 */
var crackPassword = function (password) {
	// 将数字转换为字符串
	const arr = password.map(String);
	// 自定义比较函数
	arr.sort((a, b) => (a + b > b + a ? 1 : -1));
	// 拼接结果
	return arr.join('');
};
```

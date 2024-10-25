# [43. 1 ～ n 整数中 1 出现的次数](https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof)

🔴 <font color=#ff334b>Hard</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`数学`](/tag/math.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/1nzheng-shu-zhong-1chu-xian-de-ci-shu-lcof)

## 题目

<p>给定一个整数 <code>num</code>，计算所有小于等于 <code>num</code> 的非负整数中数字 <code>1</code> 出现的个数。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>num = 0
<strong>输出：</strong>0
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>num = 13
<strong>输出：</strong>6</pre>

<p>&nbsp;</p>

<p><strong>提示：</strong></p>

<ul>
	<li><code>0 &lt;= num &lt; 10<sup>9</sup></code></li>
</ul>

本题与 LeetCode [第 233 题](../problem/0233.md) 相同。

## 解题思路

每个位置上 `1` 的个数可以通过以下几个规律来计算：

1. **分位计算**：对于一个数字的每一位（个位、十位、百位等），我们可以把这个数字分为三部分：

   - 当前位的数字。
   - 当前位左边的所有数字（高位）。
   - 当前位右边的所有数字（低位）。

2. **当前位的贡献**：

   - 如果当前位是 `0`，那么 `1` 的个数只来自于高位的部分。
   - 如果当前位是 `1`，那么除了高位的部分外，还要加上`低位的数字 + 1`（因为当前位的 `1` 本身也算）。
   - 如果当前位大于 `1`，那么可以认为高位的所有组合都会有 `1` 出现在当前位。

3. **高位和低位的影响**：
   - 高位的组合数量直接影响到当前位的 `1` 的总数。
   - 低位的数字数量决定了当前位为 `1` 时的具体计数。

举个例子：考虑数字 `2345` 的千位、百位、十位和个位上 `1` 的个数：

- **千位**（2）：`1` 出现的次数是 `1000`，`1000~1999`，共计 `1000` 个数。
- **百位**（3）：`1` 出现的次数是 `300`，`2100~2199`、`1100~1199`、`100~199`，共计 `300` 个数。
- **十位**（4）：`1` 出现的次数是 `240`，`2x10~2x19(x=0~3)`、`1x10~1x19(x=0~9)`、`x10~x19(x=1~9)`、`10~19`，共计 `240` 个数。
- **个位**（5）：`1` 出现的次数是 `235`，`1`、`11`、`21`……`2341`，共计 `235` 个数。

#### 复杂度分析

- **时间复杂度**：`O(log num)`，因为每次循环处理一位数字。
- **空间复杂度**：`O(1)`，只使用了常数空间。

## 代码

```javascript
/**
 * @param {number} num
 * @return {number}
 */
var digitOneInNumber = function (num) {
	let res = 0,
		factor = 1, // 用于处理每一位
		curDigit = 0, // 当前位置的数字
		remainder = 0; // 当前位置右边的所有数字

	while (num >= factor) {
		curDigit = Math.floor((num / factor) % 10);
		remainder = num - Math.floor(num / factor) * factor;

		// 计算当前位对1的贡献
		if (curDigit == 0) {
			res += Math.floor(num / (factor * 10)) * factor;
		} else if (curDigit == 1) {
			res += Math.floor(num / (factor * 10)) * factor + remainder + 1;
		} else {
			res += (Math.floor(num / (factor * 10)) + 1) * factor;
		}

		// 处理下一位
		factor *= 10;
	}
	return res;
};
```

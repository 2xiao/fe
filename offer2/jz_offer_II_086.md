# [86. 分割回文子字符串](https://leetcode.cn/problems/M99OJA)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`深度优先搜索`](/tag/depth-first-search.md) [`广度优先搜索`](/tag/breadth-first-search.md) [`图`](/tag/graph.md) [`哈希表`](/tag/hash-table.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/M99OJA)

## 题目

<p>给定一个字符串 <code>s</code> ，请将 <code>s</code> 分割成一些子串，使每个子串都是 <strong>回文串</strong> ，返回 s 所有可能的分割方案。</p>

<p><meta charset="UTF-8" /><strong>回文串</strong>&nbsp;是正着读和反着读都一样的字符串。</p>

<p>&nbsp;</p>

<p><strong>示例 1：</strong></p>

<pre>
<strong>输入：</strong>s =<strong> </strong>&quot;google&quot;
<strong>输出：</strong>[[&quot;g&quot;,&quot;o&quot;,&quot;o&quot;,&quot;g&quot;,&quot;l&quot;,&quot;e&quot;],[&quot;g&quot;,&quot;oo&quot;,&quot;g&quot;,&quot;l&quot;,&quot;e&quot;],[&quot;goog&quot;,&quot;l&quot;,&quot;e&quot;]]
</pre>

<p><strong>示例 2：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;aab&quot;
<strong>输出：</strong>[[&quot;a&quot;,&quot;a&quot;,&quot;b&quot;],[&quot;aa&quot;,&quot;b&quot;]]
</pre>

<p><strong>示例 3：</strong></p>

<pre>
<strong>输入：</strong>s = &quot;a&quot;
<strong>输出：</strong>[[&quot;a&quot;]]</pre>

<p>&nbsp;</p>

<p><b>提示：</b></p>

<ul>
	<li><code>1 &lt;= s.length &lt;= 16</code></li>
	<li><code>s </code>仅由小写英文字母组成</li>
</ul>

<p>&nbsp;</p>

本题与 LeetCode [第 131 题](../problem/0131.md) 相同。

## 解题思路

这是一个典型的回溯问题，需要穷举所有可能的分割方式，并且保证每个分割出来的子串都是回文串。以下是解题思路：

1. 使用回溯法，定义一个 `track` 数组来存储当前的分割方案，以及一个 `res` 数组来存储所有的合法分割方案。
2. 从字符串的起始位置开始，逐步截取子串，判断截取的子串是否是回文串。
3. 如果是回文串，则将该子串加入 `track` 数组中，然后递归调用，继续向后截取子串。
4. 如果不是回文串，则回溯到上一层，尝试其他的分割方案。
5. 当截取到字符串的末尾时，将当前的 `track` 数组加入 `res` 数组，表示找到了一种合法的分割方案。

#### 空间复杂度

- **时间复杂度**：`O(n * 2^n)`，其中 `n` 是字符串的长度。
  - 每次递归调用时，需要检查子串是否为回文，回文判断的时间复杂度为 `O(n)`，因为需要遍历子串的字符进行比较；
  - 由于每个字符都有可能形成回文或不形成回文，最坏情况下回文判断次数为 `2^n`；
  - 所以总的时间复杂度接近于 `O(n * 2^n)` 这个级别，但因为重复的回文检查和回溯剪枝，实际的运行时间会远低于这个理论值。
- **空间复杂度**：`O(n)`(不包括结果数组的存储空间)。
  - 递归栈的空间复杂度 `O(n)`，回溯算法的递归深度最大为 `n`；
  - 使用了一个 `track` 数组来存储当前路径，它的空间复杂度是 `O(n)`。

## 代码

```javascript
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
	let res = [];
	let track = [];

	// 判断字符串是否是回文字符串
	const isPalindrome = (str) => {
		let left = 0;
		let right = str.length - 1;
		while (left < right) {
			if (str[left] !== str[right]) {
				return false;
			}
			left++;
			right--;
		}
		return true;
	};

	const backtrack = (start) => {
		// 截取到了字符串的末尾，代表找到了一种合法的截取方式
		if (start == s.length) {
			res.push([...track]);
			return;
		}
		for (let i = start; i < s.length; i++) {
			// 截取从索引 start 到索引 i + 1（不包括 i + 1）的子串
			const str = s.substring(start, i + 1);
			if (isPalindrome(str)) {
				track.push(str);
				backtrack(i + 1);
				track.pop();
			}
		}
	};
	backtrack(0);
	return res;
};
```

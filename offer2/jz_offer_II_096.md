# [96. 字符串交织](https://leetcode.cn/problems/IY6buf)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`字符串`](/tag/string.md) [`动态规划`](/tag/dynamic-programming.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/IY6buf)

## 题目

给定三个字符串 `s1`、`s2`、`s3`，请判断 `s3` 能不能由 `s1` 和 `s2` **交织（交错）** 组成。

两个字符串 `s` 和 `t` **交织** 的定义与过程如下，其中每个字符串都会被分割成若干 **非空** 子字符串：

- `s = s1 + s2 + ... + sn`
- `t = t1 + t2 + ... + tm`
- `|n - m| <= 1`
- **交织** 是 `s1 + t1 + s2 + t2 + s3 + t3 + ...` 或者 `t1 + s1 + t2 + s2 + t3 + s3 + ...`

**提示：**`a + b` 意味着字符串 `a` 和 `b` 连接。

**示例 1：**

![](https://assets.leetcode.com/uploads/2020/09/02/interleave.jpg)

> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
>
> **输出：** true

**示例 2：**

> **输入：** s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
>
> **输出：** false

**示例 3：**

> **输入：** s1 = "", s2 = "", s3 = ""
>
> **输出：** true

**提示：**

- `0 <= s1.length, s2.length <= 100`
- `0 <= s3.length <= 200`
- `s1`、`s2`、和 `s3` 都由小写英文字母组成

::: warning
本题与 LeetCode [第 97 题](../problem/0097.md) 相同。
:::

## 解题思路

### 思路一：动态规划

1. **动态规划**：

   - 使用一个二维布尔数组 `dp`，其中 `dp[i][j]` 表示 `s3` 的前 `i + j` 个字符可以由 `s1` 的前 `i` 个字符和 `s2` 的前 `j` 个字符交错形成。

2. **状态转移**：

   - 初始化 `dp[0][0]` 为 `true`，表示空字符串可以由两个空字符串交错形成。
   - 然后填充 `dp` 表：
     - 如果 `s1[i-1]` 和 `s3[i+j-1]` 相等，则 `dp[i][j]` 可以从 `dp[i-1][j]` 转移而来。
     - 如果 `s2[j-1]` 和 `s3[i+j-1]` 相等，则 `dp[i][j]` 可以从 `dp[i][j-1]` 转移而来。

3. **最终结果**：
   - `dp[s1.length][s2.length]` 表示 `s3` 是否可以由 `s1` 和 `s2` 交错形成。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，需要填充整个 `dp` 数组。
- **空间复杂度**：`O(m * n)`，使用的 DP 数组。

---

### 思路二：动态规划+压缩状态

要通过使用一维数组代替二维数组，可以将思路一的空间复杂度优化到 `O(n)`。

- 我们只需要保留当前行的信息，因此可以用一个长度为 `n + 1` 的一维数组来存储状态。
- 创建一个长度为 `n + 1` 的一维数组 `dp`，并初始化 `dp[0]` 为 `true`。
- 处理 `s2` 的字符，初始化 `dp` 的第一行。
- 处理 `s1` 的字符，更新 `dp` 数组。
- 在更新时，从后向前更新，以防止覆盖之前的数据。使用当前 `dp[j]` 和 `dp[j - 1]` 来判断是否可以交错形成 `s3` 的相应部分。

#### 复杂度分析

- **时间复杂度**：`O(m * n)`，与之前相同。
- **空间复杂度**：`O(n)`，通过使用一维数组代替二维数组来减少空间使用。

### 总结：

## 代码

::: code-tabs

@tab 动态规划

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	const m = s1.length,
		n = s2.length;

	if (m + n !== s3.length) return false;

	let dp = new Array(m + 1).fill(0).map((i) => new Array(n + 1).fill(false));
	dp[0][0] = true;

	for (let i = 0; i <= m; i++) {
		for (let j = 0; j <= n; j++) {
			if (i > 0 && s1[i - 1] == s3[i - 1 + j]) {
				dp[i][j] = dp[i][j] || dp[i - 1][j];
			}
			if (j > 0 && s2[j - 1] == s3[i + j - 1]) {
				dp[i][j] = dp[i][j] || dp[i][j - 1];
			}
		}
	}

	return dp[m][n];
};
```

@tab 动态规划+压缩状态

```javascript
/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
	const m = s1.length,
		n = s2.length;
	if (m + n !== s3.length) return false;

	let dp = new Array(n + 1);
	dp[0] = true;

	for (let j = 0; j <= n; j++) {
		dp[j] = j === 0 || (dp[j - 1] && s2[j - 1] === s3[j - 1]);
	}

	for (let i = 1; i <= m; i++) {
		dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
		for (let j = 1; j <= n; j++) {
			dp[j] =
				(dp[j] && s1[i - 1] === s3[i + j - 1]) ||
				(dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
		}
	}

	return dp[n];
};
```

:::

# [56-II. 数组中数字出现的次数 II](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof)

## 题目

教学过程中，教练示范一次，学员跟做三次。该过程被混乱剪辑后，记录于数组 `actions`，其中 `actions[i]`
表示做出该动作的人员编号。请返回教练的编号。

**示例 1：**

> **输入：** actions = [5, 7, 5, 5]
>
> **输出：** 7

**示例 2：**

> **输入：** actions = [12, 1, 6, 12, 6, 12, 6]
>
> **输出：** 1

**提示：**

- `1 <= actions.length <= 10000`
- `1 <= actions[i] < 2^31`

## 解题思路

1. **位计数**：初始化一个大小为 32 的数组 `count`（因为整数通常是 32 位的），用来计数每个位上 `1` 出现的次数；
2. **遍历**：遍历数组，对于每个数，更新 `count` 每个位上 1 的个数；
3. **取模**：对于每个位，如果该位的计数可以被 `3` 整除，说明该位不是唯一的数的一部分；否则，说明该位是唯一的数的一部分；
4. **构造结果**：计算结果，根据计数结果构造只出现一次的数；

#### 复杂度分析：

- **时间复杂度**: `O(n)`，其中 `n` 是数组的长度，需要遍历数组两次。
- **空间复杂度**: `O(1)`，只使用了常量的额外空间来存储计数数组（大小为 32）。

## 代码

```javascript
/**
 * @param {number[]} actions
 * @return {number}
 */
var trainingPlan = function (actions) {
	const count = new Array(32).fill(0);

	// 统计每个位上1的个数
	for (const num of actions) {
		for (let i = 0; i < 32; i++) {
			count[i] += (num >> i) & 1; // 统计第i位上的1的个数
		}
	}

	let result = 0;
	// 通过计数结果构造数返回值
	for (let i = 0; i < 32; i++) {
		if (count[i] % 3 !== 0) {
			result |= 1 << i;
		}
	}

	return result;
};
```

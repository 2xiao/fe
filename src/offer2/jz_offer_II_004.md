# [4. 只出现一次的数字](https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_004.html)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`位运算`](/tag/bit-manipulation.md) [`数组`](/tag/array.md)&emsp; 🔗&ensp;[`力扣`](https://leetcode.cn/problems/WGki4K)

## 题目

给你一个整数数组 `nums` ，除某个元素仅出现 **一次** 外，其余每个元素都恰出现 **三次 。** 请你找出并返回那个只出现了一次的元素。

**示例 1：**

> **输入：** nums = [2,2,3,2]
>
> **输出：** 3

**示例 2：**

> **输入：** nums = [0,1,0,1,0,1,100]
>
> **输出：** 100

**提示：**

- `1 <= nums.length <= 3 * 10^4`
- `-2^31 <= nums[i] <= 2^31 - 1`
- `nums` 中，除某个元素仅出现 **一次** 外，其余每个元素都恰出现 **三次**

**进阶：** 你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

::: warning
本题与 LeetCode [第 137 题](../problem/0137.md) 相同。
:::

## 解题思路

### 思路一：位运算

1. 使用两个变量 `ones` 和 `twos` 来分别记录当前位中出现 1 次和 2 次的数字，初始化为 `0`；
2. 遍历数组中的每一个数字，更新 `ones` 和 `twos` 的状态；
3. 使用位运算更新 `twos`，只在 `ones` 中存在的数字中增加计数，这样可以防止将已经出现 3 次的数字再次计入；

- `twos |= ones & num`: 将 `twos` 中的位更新为那些同时在 `ones` 和 `num` 中为 `1` 的位；
- `ones & num`: 这部分计算在 `ones` 和 `num` 中都为 `1` 的位，结果是一个新的整数；
- `twos |=`: 这部分是将计算得到的结果与 `twos` 进行按位或（OR）操作，更新 `twos` 的值；

4. 使用异或运算更新 `ones`，添加当前数字；

- `ones ^= num`: 任何一个数字异或它自己都等于 `0` (`x ^ x = 0`)，出现两次的数字在异或中会被抵消掉；

5. `threes` 变量通过 `ones & twos` 计算得出，表示哪些数字出现了 3 次；

6. 使用位清除操作将这些数字从 `ones` 和 `twos` 中移除，`ones &= ~threes`；

- `~threes`: 这是 `threes` 的按位取反（bitwise NOT），将所有的二进制位反转。即，如果 `threes` 中某个位置是 `1`，那么 `~threes` 中该位置就是 `0`，反之亦然。
- `ones` 中的每一位和 `~threes` 中的每一位进行按位与（AND）操作。
- 如果 `threes` 中的某一位是 `1`，那么 `~threes` 中的对应位是 `0`，因此 `ones` 的该位将被置为 `0`。
- 如果 `threes` 中的某一位是 `0`，那么 `~threes` 中的对应位是 `1`，因此 `ones` 的该位保持不变。

7. 在遍历完成后，`ones` 中的值就是只出现一次的数字。

#### 复杂度分析

- **时间复杂度**：`O(n)`，只需遍历数组一次。
- **空间复杂度**：`O(1)`，只使用了常数级别的额外空间。

---

### 思路二：位运算

1. **位计数**：初始化一个大小为 32 的数组 `count`（因为整数通常是 32 位的），用来计数每个位上 `1` 出现的次数；
2. **遍历**：遍历数组，对于每个数，更新 `count` 每个位上 1 的个数；
3. **取模**：对于每个位，如果该位的计数可以被 `3` 整除，说明该位不是唯一的数的一部分；否则，说明该位是唯一的数的一部分；
4. **构造结果**：计算结果，根据计数结果构造只出现一次的数；

#### 复杂度分析：

- **时间复杂度**: `O(n)`，其中 `n` 是数组的长度，需要遍历数组两次。
- **空间复杂度**: `O(1)`，只使用了常量的额外空间来存储计数数组（大小为 32）。

## 代码

::: code-tabs

@tab 思路一

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	let ones = 0,
		twos = 0;

	for (let num of nums) {
		// 更新 twos：只记录在 ones 中已经出现过的数字
		twos |= ones & num;

		// 更新 ones：将当前数字加入 ones
		ones ^= num;

		// 将出现 3 次的数字从 ones 和 twos 中移除
		const threes = ones & twos;
		ones &= ~threes;
		twos &= ~threes;
	}

	return ones; // 结果在 ones 中
};
```

@tab 思路二

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
	const count = new Array(32).fill(0);

	// 统计每个位上1的个数
	for (const num of nums) {
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

:::

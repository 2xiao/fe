# [12. 左右两边子数组的和相等](https://leetcode.cn/problems/tvdfij)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`前缀和`](/tag/prefix-sum.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/tvdfij)

## 题目

给你一个整数数组 `nums` ，请计算数组的 **中心下标** 。

数组**中心下标** 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。

如果中心下标位于数组最左端，那么左侧数之和视为 `0` ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。

如果数组有多个中心下标，应该返回 **最靠近左边** 的那一个。如果数组不存在中心下标，返回 `-1` 。

**示例 1：**

> **输入：** nums = [1,7,3,6,5,6]
>
> **输出：** 3
>
> **解释：**
>
> 中心下标是 3 。
>
> 左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，
>
> 右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。

**示例 2：**

> **输入：** nums = [1, 2, 3]
>
> **输出：** -1
>
> **解释：**
>
> 数组中不存在满足此条件的中心下标。

**示例 3：**

> **输入：** nums = [2, 1, -1]
>
> **输出：** 0
>
> **解释：**
>
> 中心下标是 0 。
>
> 左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），
>
> 右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。

**提示：**

- `1 <= nums.length <= 10^4`
- `-1000 <= nums[i] <= 1000`

::: warning
本题与 LeetCode [第 724 题](../problem/0724.md) 相同。
:::

## 解题思路

在数组中，找到一个数，使得它左边的数之和等于它的右边的数之和，如果存在，则返回这个数的下标索引，否作返回 `-1`。

这里面存在一个等式，只需要满足这个等式即可满足条件：`leftSum + num[i] = sum - leftSum` => `2 * leftSum + num[i] = sum`。

- **总和计算**：先计算数组的总和 `total`，然后通过逐步累加 `leftSum`（左侧元素和），检查当前索引是否满足中心索引的条件，即 `2 * leftSum + nums[i] === total`。
- 如果找到这样的索引，返回其值；如果找不到，返回 `-1`。
- 题目提到如果存在多个索引，则返回最左边那个，因此从左开始求和，而不是从右边。

#### 复杂度分析

- **时间复杂度**： `O(n)`，其中 `n` 是数组 `nums` 的长度。
  - 总和计算使用 `reduce` 方法遍历数组求和，时间复杂度为 `O(n)`；
  - 在主循环中，遍历数组每个元素，通过检查和更新 `leftSum` 判断是否满足条件，这个操作也是线性的 `O(n)`。
- **空间复杂度**： `O(1)`，使用了常数级别的额外空间。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
	const total = nums.reduce((a, b) => a + b, 0);
	let leftSum = 0;
	for (let i = 0; i < nums.length; i++) {
		if (2 * leftSum + nums[i] === total) {
			return i;
		}
		leftSum += nums[i];
	}
	return -1;
};
```

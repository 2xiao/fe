# [68. 查找插入位置](https://leetcode.cn/problems/N6YdxV)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/N6YdxV)

## 题目

给定一个排序的整数数组 `nums` 和一个整数目标值` target` ，请在数组中找到 `target
`，并返回其下标。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

请必须使用时间复杂度为 `O(log n)` 的算法。

**示例 1:**

> **输入:** nums = [1,3,5,6], target = 5
>
> **输出:** 2

**示例 2:**

> **输入:** nums = [1,3,5,6], target = 2
>
> **输出:** 1

**示例 3:**

> **输入:** nums = [1,3,5,6], target = 7
>
> **输出:** 4

**示例 4:**

> **输入:** nums = [1,3,5,6], target = 0
>
> **输出:** 0

**示例 5:**

> **输入:** nums = [1], target = 0
>
> **输出:** 0

**提示:**

- `1 <= nums.length <= 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` 为**无重复元素** 的**升序** 排列数组
- `-10^4 <= target <= 10^4`

::: warning
本题与 LeetCode [第 35 题](../problem/0035.md) 相同。
:::

## 解题思路

可以使用 **二分查找法** 来解决这个问题，二分查找的思路是每次将数组分成两半，逐步缩小查找范围 `[left, right]`，如果找到与 `target` 相等的数就返回 `mid` ，否则返回 `left`。

1. 初始化两个指针 `left` 和 `right`，分别指向数组的左右两端。
2. 计算中间位置 `mid`，比较 `nums[mid]` 和 `target`：
   - 如果 `nums[mid] == target`，返回 `mid`，即 `target` 的索引位置。
   - 如果 `nums[mid] < target`，说明 `target` 应该在右半部分，移动 `left` 指针到 `mid + 1`。
   - 如果 `nums[mid] > target`，说明 `target` 应该在左半部分，移动 `right` 指针到 `mid - 1`。
3. 如果遍历完数组仍未找到 `target`，则返回 `left`，此时 `left` 就是 `target` 应该插入的位置。

#### 复杂度分析

- **时间复杂度**：`O(log n)`，每次查找都会将数组的查找范围缩小一半。
- **空间复杂度**：`O(1)`，只使用了常数级别的额外空间

## 代码

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
	let left = 0;
	let right = nums.length - 1;
	while (left <= right) {
		const mid = Math.floor((right + left) / 2);
		if (nums[mid] == target) {
			return mid;
		} else if (nums[mid] < target) {
			left = mid + 1;
		} else if (nums[mid] > target) {
			right = mid - 1;
		}
	}
	return left;
};
```

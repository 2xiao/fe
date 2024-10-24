# [8. 和大于等于 target 的最短子数组](https://leetcode.cn/problems/2VG8Kg)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`二分查找`](/tag/binary-search.md) [`前缀和`](/tag/prefix-sum.md) [`滑动窗口`](/tag/sliding-window.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/2VG8Kg)

## 题目

给定一个含有 `n` 个正整数的数组和一个正整数 `target`。

找出该数组中满足其和 `≥ target` 的长度最小的 **连续子数组** `[numsl, numsl+1, ..., numsr-1,numsr]` ，并返回其长度。 如果不存在符合条件的子数组，返回 `0` 。

**示例 1：**

> **输入：** target = 7, nums = [2,3,1,2,4,3]
>
> **输出：** 2
>
> **解释：** 子数组 [4,3] 是该条件下的长度最小的子数组。

**示例 2：**

> **输入：** target = 4, nums = [1,4,4]
>
> **输出：** 1

**示例 3：**

> **输入：** target = 11, nums = [1,1,1,1,1,1,1,1]
>
> **输出：** 0

提示：

- `1 <= target <= 10^9`
- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^5`

进阶：

- 如果你已经实现 `O(n)` 时间复杂度的解法, 请尝试设计一个 `O(n log(n))` 时间复杂度的解法。

::: warning
本题与 LeetCode [第 209 题](../problem/0209.md) 相同。
:::

## 解题思路

### 思路一：滑动窗口

1. 初始化变量：使用两个指针（或滑动窗口）来遍历数组；
2. 扩大窗口：移动右指针，向右扩大求和；
3. 缩小窗口：一旦窗口总和大于等于 `target`，就移动左指针缩小窗口；
4. 更新最小长度：过程中更新最小长度；

#### 复杂度分析

- **时间复杂度**：`O(n)`，其中 n 是数组的长度；
- **空间复杂度**：`O(1)`

---

### 思路二：暴力查找

1. 初始化子数组的最小长度为无穷大；
2. 枚举数组 `nums` 中的每个下标作为子数组的开始下标；
3. 对于每个开始下标 `i`，需要找到大于或等于 `i` 的最小下标 `j`，使得从 `nums[i]` 到 `nums[j]` 的元素和大于或等于 `s`；
4. 更新子数组的最小长度（此时子数组的长度是 `j−i+1`）；

#### 复杂度分析

- **时间复杂度**：`O(n^2)`，需要遍历每个下标作为子数组的开始下标，对于每个开始下标，需要遍历其后面的下标；
- **空间复杂度**：`O(1)`

---

### 思路三：二分查找

1. 暴力查找的时间复杂度是 `O(n^2)`，因为在确定每个子数组的开始下标后，找到长度最小的子数组需要 `O(n)` 的时间。如果使用二分查找，则可以将时间优化到 `O(logn)`。
2. 为了使用二分查找，需要额外创建一个数组 sums 用于存储数组 nums 的前缀和，其中 `sums[i]` 表示从 `nums[0]` 到 `nums[i−1]` 的元素和。
3. 得到前缀和之后，对于每个开始下标 `i`，可通过二分查找得到大于或等于 `i` 的最小下标 `bound`，使得 `sums[bound]−sums[i−1]≥s`，并更新子数组的最小长度（此时子数组的长度是 `bound−(i−1)`）。

因为这道题保证了数组中每个元素都为正，所以前缀和一定是递增的，这一点保证了二分的正确性。如果题目没有说明数组中每个元素都为正，这里就不能使用二分来查找这个位置了。

#### 复杂度分析

- **时间复杂度**：`O(nlogn)`，遍历每个下标的时间复杂度是 `O(n)`，二分查找的时间复杂度是 `O(logn)`，因此总时间复杂度是 `O(nlogn)`。

- **空间复杂度**：`O(n)`，额外创建数组 `sums` 存储前缀和。

## 代码

::: code-tabs

@tab 滑动窗口

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let left = 0,
		sum = 0,
		minLength = Infinity;
	for (let right = 0; right < nums.length; right++) {
		sum += nums[right];
		while (sum >= target) {
			minLength = Math.min(minLength, right - left + 1);
			sum -= nums[left];
			left++;
		}
	}
	return minLength == Infinity ? 0 : minLength;
};
```

@tab 暴力查找

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let n = nums.length,
		res = Infinity;
	if (n == 0) return 0;

	for (let i = 0; i < n; i++) {
		let sum = 0;
		for (let j = i; j < n; j++) {
			sum += nums[j];
			if (sum >= target) {
				res = Math.min(res, j - i + 1);
				break;
			}
		}
	}
	return res == Infinity ? 0 : res;
};
```

@tab 二分查找

```javascript
/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
	let n = nums.length,
		sum = [0],
		res = Infinity;
	for (let i = 1; i <= n; i++) {
		sum[i] = nums[i - 1] + sum[i - 1];
	}
	for (let i = 1; i <= n; i++) {
		let newTarget = target + sum[i - 1];
		let bound = binarySearch(sum, newTarget, i, n);
		if (bound != -1) {
			res = Math.min(res, bound - i + 1);
		}
	}
	return res == Infinity ? 0 : res;
};

var binarySearch = function (arr, target, l, r) {
	if (arr[r] < target) return -1;
	while (l < r) {
		let mid = (l + r) >> 1;
		if (arr[mid] < target) {
			l = mid + 1;
		} else {
			r = mid;
		}
	}
	return arr[l] >= target ? l : -1;
};
```

:::

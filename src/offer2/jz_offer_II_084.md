# [84. 含有重复元素集合的全排列](https://leetcode.cn/problems/7p8L0Z)

🟠 <font color=#ffb800>Medium</font>&emsp; 🔖&ensp; [`数组`](/tag/array.md) [`回溯`](/tag/backtracking.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/7p8L0Z)

## 题目

给定一个可包含重复数字的整数集合 `nums` ，**按任意顺序** 返回它所有不重复的全排列。

**示例 1：**

> **输入：** nums = [1,1,2]
>
> **输出：**
>
> [[1,1,2],
>
> [1,2,1],
>
> [2,1,1]]

**示例 2：**

> **输入：** nums = [1,2,3]
>
> **输出：**[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

**提示：**

- `1 <= nums.length <= 8`
- `-10 <= nums[i] <= 10`

::: warning
本题与 LeetCode [第 47 题](../problem/0047.md) 相同。
:::

## 解题思路

可以使用回溯算法生成全排列，同时处理数组中可能存在重复元素的情况：

1. 定义一个结果数组 `res`，一个路径数组 `track` 用于记录当前排列的路径，以及一个布尔数组 `used` 用于标记某个元素是否已经被使用过。
2. 对输入数组 `nums` 进行升序排序，以方便在后续去重的过程中判断相邻元素是否相同。
3. 创建一个名为 `backtrack` 的递归函数，该函数用于生成全排列。函数没有参数，通过数组 `track` 和布尔数组 `used` 记录当前的路径和状态。
4. 在 `backtrack` 函数中，首先检查当前路径的长度是否等于输入数组 `nums` 的长度，如果是，则说明已经生成了一个完整的排列，将当前路径加入到结果数组 `res` 中，并直接返回。
5. 然后，从头开始遍历排序后的数组 `nums`，对于每个元素：
   - 如果该元素已经被使用过 (`used[i]` 为 `true`)，则跳过当前元素。
   - 如果该元素和前一个元素相同，且前一个元素没有被使用过 (`!used[i - 1]`)，则跳过当前元素。这是为了避免生成重复的排列，确保相同元素只在同一层递归中出现一次。
   - 否则，将当前元素加入到路径 `track` 中，标记该元素为已使用，递归调用 `backtrack` 函数，进入下一层，并在递归调用结束后，将当前元素从路径中弹出，标记为未使用，以便回溯到上一层，继续遍历其他元素。
6. 最后，返回结果数组 `res`，其中包含了所有满足条件的全排列。

标准全排列算法之所以出现重复，是因为把相同元素形成的排列序列视为不同的序列，但实际上它们应该是相同的；而如果固定相同元素形成的序列顺序，保证相同元素在排列中的相对位置保持不变，就避免了重复。

#### 复杂度分析

- **时间复杂度**：`O(n * n!)`，其中 `n` 是 `nums` 的长度。
  - 在回溯过程中，每次递归都要遍历 `n` 个元素，递归树的每一层都要做选择；
  - 对于每一层的递归，最多需要处理 `n!` 种情况；
  - 因此总的时间复杂度是 `O(n * n!)`。
- **空间复杂度**：`O(n)`（不包含结果数组使用的空间）递归调用栈的深度为 `n`，`used` 数组的大小为 `n`。

## 代码

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
	let res = [];
	let track = [];
	let used = new Array(nums.length).fill(false);

	// 先排序，让相同的元素靠在一起
	nums.sort((a, b) => a - b);

	const backtrack = () => {
		if (track.length == nums.length) {
			res.push([...track]);
			return;
		}
		for (let i = 0; i < nums.length; i++) {
			// 新添加的剪枝逻辑，固定相同的元素在排列中的相对位置
			if (used[i] || (i > 0 && nums[i] == nums[i - 1] && !used[i - 1])) {
				continue;
			}
			track.push(nums[i]);
			used[i] = true;
			backtrack(i + 1);
			track.pop();
			used[i] = false;
		}
	};

	backtrack();
	return res;
};
```

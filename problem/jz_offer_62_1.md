# [剑指 Offer 62. 圆圈中最后剩下的数字](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof)

🟢 <font color=#15bd66>Easy</font>&emsp; 🔖&ensp; [`递归`](/tag/recursion.md) [`数学`](/tag/math.md)&emsp; 🔗&ensp;[`LeetCode`](https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof)

## 题目

社团共有 `num` 位成员参与破冰游戏，编号为 `0 ~ num-1`。成员们按照编号顺序围绕圆桌而坐。社长抽取一个数字 `target`，从 0 号成员起开始计数，排在第 `target` 位的成员离开圆桌，且成员离开后从下一个成员开始计数。请返回游戏结束时最后一位成员的编号。

**示例 1：**

> **输入：** num = 7, target = 4
>
> **输出：** 1

**示例 2：**

> **输入：** num = 12, target = 5
>
> **输出：** 0

**提示：**

- `1 <= num <= 10^5`
- `1 <= target <= 10^6`

## 解题思路

这是一个经典的 **约瑟夫环问题**，也称为约瑟夫斯问题，可以通过数学递归或者迭代的方法解决。

### 思路一：递归

假设 `num` 个成员围坐成一个圈，每次计数到 `target` 号成员离开，要找到最后剩下的成员的编号。

- 当只有一个成员时（`num = 1`），最后剩下的成员显然是编号为 `0` 的成员。
- 当有 `num > 1` 个成员时，可以将问题简化为一个子问题：假设知道在 `num - 1` 个成员中的解法是什么，并且每次计数时剔除一名成员，最后结果会递归得到最后剩下的成员的编号。

递归公式为：`f(n) = (f(n - 1) + target) % n`

其中 `n` 是当前参与游戏的人数，`target` 是每次剔除的第 `target` 个人。

#### 复杂度分析

- **时间复杂度**：`O(num)`，需要求解的函数值有 `num` 个。
- **空间复杂度**：`O(num)`，函数的递归深度为 `num`，需要使用 `O(num)` 的栈空间。

### 思路二：迭代

上面的递归可以改写为迭代，避免递归使用栈空间。

可以通过递归公式，从人数为 1 开始，逐步迭代计算，最后得到 `num` 人的结果。

#### 复杂度分析

- **时间复杂度**：`O(num)`，需要从 `2` 遍历到 `num`，逐步计算每次删除后的编号。
- **空间复杂度**：`O(1)`，只用常数空间存储当前的结果编号。

## 代码

:::: code-tabs
@tab 递归

```javascript
/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
	// 递归函数
	const remove = (num) => {
		// 当 num 为 1 时，最后剩下的编号是 0
		if (num == 1) return 0;

		// 递归公式
		return (remove(num - 1) + target) % num;
	};
	return remove(num);
};
```

@tab 迭代

```javascript
/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
	// 当 num 为 1 时，最后剩下的编号是 0
	let res = 0;

	// 迭代计算最后的编号
	for (let i = 2; i <= num; i++) {
		res = (res + target) % i;
	}
	return res;
};
```

::::

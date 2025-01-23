import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as _}from"./app-MsFeWfVD.js";const h={},b=n("h1",{id:"_416-分割等和子集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_416-分割等和子集","aria-hidden":"true"},"#"),t(" 416. 分割等和子集")],-1),g=n("code",null,"数组",-1),f=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/partition-equal-subset-sum",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/partition-equal-subset-sum",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <code>true</code> <em>if you can partition the array into two subsets such that the sum of the elements in both subsets is equal or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,5,11,5]</p><p>Output: true</p><p>Explanation: The array can be partitioned as [1, 5, 5] and [11].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,5]</p><p>Output: false</p><p>Explanation: The array cannot be partitioned into equal sum subsets.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>只包含正整数</strong> 的 <strong>非空</strong> 数组 <code>nums</code> 。请你判断是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><p>这是一个典型的动态规划问题，可以通过状态转移方程来解决。问题可以转化为背包问题，即是否存在一组元素，使得它们的和恰好为数组元素和的一半。</p><p>定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示在前 <code>i</code> 个元素中是否存在一组元素的和等于 <code>j</code>。状态转移方程如下：</p><p><code>dp[i][j] = dp[i - 1][j] || dp[i - 1][j - nums[i - 1]]</code></p><ul><li><code>dp[i-1][j]</code> 表示不选取第 <code>i</code> 个元素。</li><li><code>dp[i-1][j-nums[i-1]]</code> 表示选取第 <code>i</code> 个元素。</li></ul><p>初始化状态：<code>dp[i][0] = true</code>，即对于前 <code>i</code> 个元素，总是可以找到一组元素的和为 0（即不选取任何元素）。</p><p>最终结果为 <code>dp[n][target]</code>，其中 <code>n</code> 为数组长度，<code>target</code> 为数组元素和的一半。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * target)</code>，其中 <code>n</code> 是数组长度，<code>target</code> 是数组元素和的一半。</li><li><strong>空间复杂度</strong>：<code>O(n * target)</code>，使用了一个二维动态规划数组。</li></ul><hr><h3 id="思路二-压缩状态的动态规划" tabindex="-1"><a class="header-anchor" href="#思路二-压缩状态的动态规划" aria-hidden="true">#</a> 思路二：压缩状态的动态规划</h3><p>注意到 <code>dp[i][j]</code> 都是通过上一行 <code>dp[i-1][..]</code> 转移过来的，再之前所有行的数据都不会再使用了。所以，我们可以对动态规划进行状态压缩，将二维 <code>dp</code> 数组压缩为一维，节约空间复杂度：</p><ul><li><code>dp[j]</code> 表示是否可以使用当前元素得到和为 <code>j</code> 的子集。</li><li>遍历 <code>nums</code> 数组中的每个数字 <code>num</code>，并更新 <code>dp</code> 数组。需要注意的是 <code>j</code> 应该从后往前反向遍历，确保了我们在更新当前状态时所依赖的状态已经被正确计算。</li><li>对于每个 <code>j</code> 从 <code>target</code> 到 <code>num</code>，根据 <code>dp[j]</code> 和 <code>dp[j - num]</code> 的值来更新 <code>dp[j]</code>。</li><li>最终结果存储在 <code>dp[target]</code> 中。如果为 <code>true</code>，表示存在一个和为 <code>target</code> 的子集，即数组可以被分割成两个和相等的子集。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"canPartition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" sum "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" num"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 如果数组元素和为奇数，不可能分割成两个和相等的子集"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" target "),n("span",{class:"token operator"},"="),t(" sum "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("n "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),t(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("target "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始化状态"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 动态规划计算"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<="),t(" target"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("j "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// 背包容量不足，不能装入第 i 个物品"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token comment"},"// 装入或不装入背包"),t(`
				dp`),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"||"),t(" dp"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"canPartition"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" sum "),n("span",{class:"token operator"},"="),t(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("acc"),n("span",{class:"token punctuation"},","),t(" num")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(" acc "),n("span",{class:"token operator"},"+"),t(" num"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 如果数组元素和为奇数，不可能分割成两个和相等的子集"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("sum "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" target "),n("span",{class:"token operator"},"="),t(" sum "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" dp "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),t("target "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 初始状态：空子集的和为 0"),t(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 动态规划计算"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" num "),n("span",{class:"token keyword"},"of"),t(" nums"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(" target"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},">="),t(" num"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			dp`),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(" dp"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"||"),t(" dp"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(" num"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(" dp"),n("span",{class:"token punctuation"},"["),t("target"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),z=n("td",{style:{"text-align":"center"}},"698",-1),L=n("td",{style:{"text-align":"left"}},"划分为k个相等的子集",-1),N=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},V=n("code",null,"位运算",-1),I=n("code",null,"记忆化搜索",-1),O=n("code",null,"数组",-1),B=n("code",null,"3+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/partition-to-k-equal-sum-subsets",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/partition-to-k-equal-sum-subsets",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"1981",-1),D=n("td",{style:{"text-align":"left"}},"最小化目标值与所选元素的差",-1),F=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"数组",-1),K=n("code",null,"动态规划",-1),Q=n("code",null,"矩阵",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/minimize-the-difference-between-target-and-chosen-elements",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/minimize-the-difference-between-target-and-chosen-elements",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"2025",-1),$=n("td",{style:{"text-align":"left"}},"分割数组的最多方案数",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"数组",-1),en=n("code",null,"哈希表",-1),an=n("code",null,"计数",-1),on=n("code",null,"2+",-1),cn=n("td",{style:{"text-align":"center"}},"🔴",-1),ln={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/maximum-number-of-ways-to-partition-an-array",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/maximum-number-of-ways-to-partition-an-array",target:"_blank",rel:"noopener noreferrer"},un=n("td",{style:{"text-align":"center"}},"2035",-1),dn=n("td",{style:{"text-align":"left"}},"将数组分成两个数组并最小化数组和的差",-1),kn=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},_n=n("code",null,"位运算",-1),hn=n("code",null,"数组",-1),bn=n("code",null,"双指针",-1),gn=n("code",null,"4+",-1),fn=n("td",{style:{"text-align":"center"}},"🔴",-1),yn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},xn={href:"https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference",target:"_blank",rel:"noopener noreferrer"},wn=n("td",{style:{"text-align":"center"}},"2395",-1),jn=n("td",{style:{"text-align":"left"}},"和相等的子数组",-1),qn=n("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},Cn=n("code",null,"数组",-1),En=n("code",null,"哈希表",-1),zn=n("td",{style:{"text-align":"center"}},"🟢",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},Tn={href:"https://leetcode.com/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},Vn=n("td",{style:{"text-align":"center"}},"2518",-1),In=n("td",{style:{"text-align":"left"}},"好分区的数目",-1),On=n("td",{style:{"text-align":"center"}},null,-1),Bn={style:{"text-align":"left"}},Pn=n("code",null,"数组",-1),Rn=n("code",null,"动态规划",-1),Gn=n("td",{style:{"text-align":"center"}},"🔴",-1),Mn={style:{"text-align":"center"}},Sn={href:"https://leetcode.cn/problems/number-of-great-partitions",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://leetcode.com/problems/number-of-great-partitions",target:"_blank",rel:"noopener noreferrer"},Fn=n("td",{style:{"text-align":"center"}},"2578",-1),Hn=n("td",{style:{"text-align":"left"}},"最小和分割",-1),Jn=n("td",{style:{"text-align":"center"}},null,-1),Kn={style:{"text-align":"left"}},Qn=n("code",null,"贪心",-1),Un=n("code",null,"数学",-1),Wn=n("code",null,"排序",-1),Xn=n("td",{style:{"text-align":"center"}},"🟢",-1),Yn={style:{"text-align":"center"}},Zn={href:"https://leetcode.cn/problems/split-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"},$n={href:"https://leetcode.com/problems/split-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"};function nt(tt,st){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",y,[v,s(o)]),t(),n("a",x,[w,s(o)])]),j,s(r,{id:"141",data:[{id:"动态规划"},{id:"压缩状态的动态规划"}]},{title0:e(({value:l,isActive:p})=>[t("动态规划")]),title1:e(({value:l,isActive:p})=>[t("压缩状态的动态规划")]),tab0:e(({value:l,isActive:p})=>[q]),tab1:e(({value:l,isActive:p})=>[A]),_:1}),C,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[z,L,N,n("td",T,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/memoization.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[O]),_:1}),t(),B]),P,n("td",R,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",M,[t("🔗"),s(o)])])]),n("tr",null,[S,D,F,n("td",H,[s(a,{to:"/tag/array.html"},{default:e(()=>[J]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[K]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[Q]),_:1})]),U,n("td",W,[n("a",X,[t("🀄️"),s(o)]),t(),n("a",Y,[t("🔗"),s(o)])])]),n("tr",null,[Z,$,nn,n("td",tn,[s(a,{to:"/tag/array.html"},{default:e(()=>[sn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[en]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[an]),_:1}),t(),on]),cn,n("td",ln,[n("a",pn,[t("🀄️"),s(o)]),t(),n("a",rn,[t("🔗"),s(o)])])]),n("tr",null,[un,dn,kn,n("td",mn,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[_n]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[hn]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[bn]),_:1}),t(),gn]),fn,n("td",yn,[n("a",vn,[t("🀄️"),s(o)]),t(),n("a",xn,[t("🔗"),s(o)])])]),n("tr",null,[wn,jn,qn,n("td",An,[s(a,{to:"/tag/array.html"},{default:e(()=>[Cn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[En]),_:1})]),zn,n("td",Ln,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Tn,[t("🔗"),s(o)])])]),n("tr",null,[Vn,In,On,n("td",Bn,[s(a,{to:"/tag/array.html"},{default:e(()=>[Pn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Rn]),_:1})]),Gn,n("td",Mn,[n("a",Sn,[t("🀄️"),s(o)]),t(),n("a",Dn,[t("🔗"),s(o)])])]),n("tr",null,[Fn,Hn,Jn,n("td",Kn,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[Qn]),_:1}),t(),s(a,{to:"/tag/math.html"},{default:e(()=>[Un]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[Wn]),_:1})]),Xn,n("td",Yn,[n("a",Zn,[t("🀄️"),s(o)]),t(),n("a",$n,[t("🔗"),s(o)])])])])])])}const at=u(h,[["render",nt],["__file","0416.html.vue"]]);export{at as default};

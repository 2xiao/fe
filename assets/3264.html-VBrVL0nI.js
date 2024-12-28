import{_ as r,r as o,o as k,c as d,a as n,b as s,d as a,w as t,e as m}from"./app-fEpXkbSw.js";const b={},h=n("h1",{id:"_3264-k-次乘运算后的最终数组-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3264-k-次乘运算后的最终数组-i","aria-hidden":"true"},"#"),s(" 3264. K 次乘运算后的最终数组 I")],-1),v=n("code",null,"数组",-1),y=n("code",null,"数学",-1),f=n("code",null,"模拟",-1),g=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/final-array-state-after-k-multiplication-operations-i",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),A=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code>, an integer <code>k</code>, and an integer <code>multiplier</code>.</p><p>You need to perform <code>k</code> operations on <code>nums</code>. In each operation:</p><ul><li>Find the <strong>minimum</strong> value <code>x</code> in <code>nums</code>. If there are multiple occurrences of the minimum value, select the one that appears <strong>first</strong>.</li><li>Replace the selected minimum value <code>x</code> with <code>x * multiplier</code>.</li></ul><p>Return an integer array denoting the <em>final state</em> of <code>nums</code> after performing all <code>k</code> operations.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [2,1,3,5,6], k = 5, multiplier = 2</p><p><strong>Output:</strong> [8,4,6,5,6]</p><p><strong>Explanation:</strong></p><table><thead><tr><th>Operation</th><th>Result</th></tr></thead><tbody><tr><td>After operation 1</td><td>[2, 2, 3, 5, 6]</td></tr><tr><td>After operation 2</td><td>[4, 2, 3, 5, 6]</td></tr><tr><td>After operation 3</td><td>[4, 4, 3, 5, 6]</td></tr><tr><td>After operation 4</td><td>[4, 4, 6, 5, 6]</td></tr><tr><td>After operation 5</td><td>[8, 4, 6, 5, 6]</td></tr></tbody></table><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [1,2], k = 3, multiplier = 4</p><p><strong>Output:</strong> [16,8]</p><p><strong>Explanation:</strong></p><table><thead><tr><th>Operation</th><th>Result</th></tr></thead><tbody><tr><td>After operation 1</td><td>[4, 2]</td></tr><tr><td>After operation 2</td><td>[4, 8]</td></tr><tr><td>After operation 3</td><td>[16, 8]</td></tr></tbody></table><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10</code></li><li><code>1 &lt;= multiplier &lt;= 5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，一个整数 <code>k</code> 和一个整数 <code>multiplier</code> 。</p><p>你需要对 <code>nums</code> 执行 <code>k</code> 次操作，每次操作中：</p><ul><li>找到 <code>nums</code> 中的 <strong>最小</strong> 值 <code>x</code> ，如果存在多个最小值，选择最 <strong>前面</strong> 的一个。</li><li>将 <code>x</code> 替换为 <code>x * multiplier</code> 。</li></ul><p>请你返回执行完 <code>k</code> 次乘运算之后，最终的 <code>nums</code> 数组。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [2,1,3,5,6], k = 5, multiplier = 2</p><p><strong>输出：</strong>[8,4,6,5,6]</p><p><strong>解释：</strong></p><table><thead><tr><th>操作</th><th>结果</th></tr></thead><tbody><tr><td>1 次操作后</td><td>[2, 2, 3, 5, 6]</td></tr><tr><td>2 次操作后</td><td>[4, 2, 3, 5, 6]</td></tr><tr><td>3 次操作后</td><td>[4, 4, 3, 5, 6]</td></tr><tr><td>4 次操作后</td><td>[4, 4, 6, 5, 6]</td></tr><tr><td>5 次操作后</td><td>[8, 4, 6, 5, 6]</td></tr></tbody></table><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [1,2], k = 3, multiplier = 4</p><p><strong>输出：</strong>[16,8]</p><p><strong>解释：</strong></p><table><thead><tr><th>操作</th><th>结果</th></tr></thead><tbody><tr><td>1 次操作后</td><td>[4, 2]</td></tr><tr><td>2 次操作后</td><td>[4, 8]</td></tr><tr><td>3 次操作后</td><td>[16, 8]</td></tr></tbody></table><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10</code></li><li><code>1 &lt;= multiplier &lt;= 5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-直接遍历法" tabindex="-1"><a class="header-anchor" href="#思路一-直接遍历法" aria-hidden="true">#</a> 思路一：直接遍历法</h3><ol><li>初始化操作次数 <code>k</code> 和倍乘因子 <code>multiplier</code>。</li><li>循环 <code>k</code> 次： <ul><li>遍历 <code>nums</code> 数组，找到数组中最小值的索引。</li><li>将该最小值更新为 <code>x * multiplier</code>。</li></ul></li><li>最终返回修改后的数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k * n)</code>，每次查找最小值需要遍历数组，时间复杂度为 <code>O(n)</code>，一共执行 <code>k</code> 次，总时间复杂度为 <code>O(k * n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数空间。</li></ul><h3 id="思路二-最小堆" tabindex="-1"><a class="header-anchor" href="#思路二-最小堆" aria-hidden="true">#</a> 思路二：最小堆</h3><ol><li>初始化最小堆 <code>minHeap</code>，最小堆的优先级为：按值从小到大排序，值相同时按索引排序。</li><li>循环 <code>k</code> 次： <ul><li>从最小堆中取出堆顶元素 <code>[num, idx]</code>，也就是当前的 <code>[最小值, 索引]</code>。</li><li>将该最小值更新为 <code>[num * multiplier, idx]</code>，并插入到堆中。</li></ul></li><li>将堆中数据按索引排序后，构建出仅含 <code>num</code> 的数组并返回。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n + k log n)</code><ul><li>初始构建堆的时间为 <code>O(n)</code>。</li><li>每次弹出堆顶和插入的时间复杂度为 <code>O(log n)</code>，执行 <code>k</code> 次，复杂度为 <code>O(k log n)</code>。</li><li>按索引排序的时间为 <code>O(n log n)</code>。</li><li>总时间复杂度为 <code>O(n log n + k log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了堆存储 <code>nums</code> 的所有元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',44),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"k"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"multiplier"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"multiplyMinimum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" multiplier")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" k"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 找到当前数组的最小值索引"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" minIndex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" nums"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" nums"),n("span",{class:"token punctuation"},"["),s("minIndex"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				minIndex `),n("span",{class:"token operator"},"="),s(" j"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 替换最小值"),s(`
		nums`),n("span",{class:"token punctuation"},"["),s("minIndex"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*="),s(" multiplier"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" nums"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"nums"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"k"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"multiplier"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getFinalState"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("nums"),n("span",{class:"token punctuation"},","),s(" k"),n("span",{class:"token punctuation"},","),s(" multiplier")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 构建 [num, idx] 数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" arr "),n("span",{class:"token operator"},"="),s(" nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("num"),n("span",{class:"token punctuation"},","),s(" idx")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"["),s("num"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 按值排序，值相同时按索引排序"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"priority"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 初始化最小堆"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" minHeap "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"MinHeap"),n("span",{class:"token punctuation"},"("),s("arr"),n("span",{class:"token punctuation"},","),s(" priority"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("k "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 获取当前最小值及其索引"),s(`
		`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token punctuation"},"["),s("num"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" minHeap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token comment"},"// 插入新的值到堆中"),s(`
		minHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),s("num "),n("span",{class:"token operator"},"*"),s(" multiplier"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		k`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 将堆中数据按 idx 排序后返回 num"),s(`
	`),n("span",{class:"token keyword"},"return"),s(` minHeap
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 按索引排序"),s(`
		`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"["),s("num"),n("span",{class:"token punctuation"},","),s(" idx"),n("span",{class:"token punctuation"},"]")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 构建仅含 num 的数组"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token comment"},"// 最小堆"),s(`
`),n("span",{class:"token keyword"},"class"),s(),n("span",{class:"token class-name"},"MinHeap"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),s("arr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function-variable function"},"priority"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"<"),s(" b"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap "),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("priority "),n("span",{class:"token operator"},"="),s(" priority"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 插入元素"),s(`
	`),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token comment"},"// 移除并返回堆顶"),s(`
	`),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" top "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" last "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" last"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" top"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"toArray"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"const"),s(" parent "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"/"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"priority"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
				i `),n("span",{class:"token operator"},"="),s(" parent"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" left "),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
			right `),n("span",{class:"token operator"},"="),s(" i "),n("span",{class:"token operator"},"*"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" min "),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`
			left `),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"&&"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"priority"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			min `),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s(`
			right `),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"&&"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"priority"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
		`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			min `),n("span",{class:"token operator"},"="),s(" right"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("min "),n("span",{class:"token operator"},"!=="),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("heap"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),s("min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(H,C){const u=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon"),i=o("CodeTabs");return k(),d("div",null,[h,n("p",null,[s("🟢 "),a(u,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[y]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",w,[_,a(l)]),s(),n("a",x,[O,a(l)])]),A,a(i,{id:"458",data:[{id:"直接遍历法"},{id:"最小堆"}]},{title0:t(({value:c,isActive:p})=>[s("直接遍历法")]),title1:t(({value:c,isActive:p})=>[s("最小堆")]),tab0:t(({value:c,isActive:p})=>[j]),tab1:t(({value:c,isActive:p})=>[I]),_:1})])}const L=r(b,[["render",E],["__file","3264.html.vue"]]);export{L as default};

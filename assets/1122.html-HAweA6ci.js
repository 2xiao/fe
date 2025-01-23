import{_ as i,r as e,o as d,c as k,a as n,b as s,d as t,w as a,e as m}from"./app-MsFeWfVD.js";const b={},h=n("h1",{id:"_1122-数组的相对排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1122-数组的相对排序","aria-hidden":"true"},"#"),s(" 1122. 数组的相对排序")],-1),g=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),f=n("code",null,"计数排序",-1),_=n("code",null,"排序",-1),y={href:"https://leetcode.cn/problems/relative-sort-array",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/relative-sort-array",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two arrays <code>arr1</code> and <code>arr2</code>, the elements of <code>arr2</code> are distinct, and all elements in <code>arr2</code> are also in <code>arr1</code>.</p><p>Sort the elements of <code>arr1</code> such that the relative ordering of items in <code>arr1</code> are the same as in <code>arr2</code>. Elements that do not appear in <code>arr2</code> should be placed at the end of <code>arr1</code> in <strong>ascending</strong> order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]</p><p>Output: [2,2,2,1,4,3,3,9,6,7,19]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]</p><p>Output: [22,28,8,6,17,44]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr1.length, arr2.length &lt;= 1000</code></li><li><code>0 &lt;= arr1[i], arr2[i] &lt;= 1000</code></li><li>All the elements of <code>arr2</code> are <strong>distinct</strong>.</li><li>Each <code>arr2[i]</code> is in <code>arr1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个数组，<code>arr1</code> 和 <code>arr2</code>，<code>arr2</code> 中的元素各不相同，<code>arr2</code> 中的每个元素都出现在 <code>arr1</code> 中。</p><p>对 <code>arr1</code> 中的元素进行排序，使 <code>arr1</code> 中项的相对顺序和 <code>arr2</code> 中的相对顺序相同。未在 <code>arr2</code> 中出现过的元素需要按照升序放在 <code>arr1</code> 的末尾。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]</p><p><strong>输出：</strong>[2,2,2,1,4,3,3,9,6,7,19]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入：</strong> arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]</p><p><strong>输出：</strong>[22,28,8,6,17,44]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr1.length, arr2.length &lt;= 1000</code></li><li><code>0 &lt;= arr1[i], arr2[i] &lt;= 1000</code></li><li><code>arr2</code> 中的元素 <code>arr2[i]</code> <strong>各不相同</strong></li><li><code>arr2</code> 中的每个元素 <code>arr2[i]</code> 都出现在 <code>arr1</code> 中</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-哈希表" tabindex="-1"><a class="header-anchor" href="#思路一-哈希表" aria-hidden="true">#</a> 思路一：哈希表</h3><ol><li><p><strong>统计 <code>arr1</code> 中元素的出现次数</strong><br> 使用一个哈希表 <code>count</code> 来记录 <code>arr1</code> 中每个元素的出现次数，避免多次遍历。</p></li><li><p><strong>按照 <code>arr2</code> 的顺序填充结果数组</strong><br> 遍历 <code>arr2</code>，根据其元素在 <code>count</code> 中的出现次数，将对应元素加入结果数组。</p></li><li><p><strong>处理未出现在 <code>arr2</code> 中的元素</strong><br> 将 <code>count</code> 中剩余的元素按升序排列，并依次加入结果数组。</p></li><li><p><strong>返回结果数组</strong><br> 合并两部分结果，得到最终的相对排序数组。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m + (n - m) log (n - m))</code>，其中 <code>m</code> 是 <code>arr2</code> 的长度，<code>n</code> 是 <code>arr1</code> 的长度。 <ul><li>构建哈希表 <code>count</code>，遍历 <code>arr1</code>，时间复杂度为 <code>O(n)</code>。</li><li>填充结果数组时，遍历 <code>arr2</code> 并查找哈希表：<code>O(m)</code>。</li><li>处理剩余元素并排序：<code>O((n - m) log (n - m))</code>。</li><li>总时间复杂度为 <code>O(n + m + (n - m) log (n - m))</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>， 使用了哈希表 <code>count</code> 和结果数组 <code>res</code>。</li></ul><hr><h3 id="思路二-循环遍历" tabindex="-1"><a class="header-anchor" href="#思路二-循环遍历" aria-hidden="true">#</a> 思路二：循环遍历</h3><ol><li><p><strong>遍历 <code>arr2</code></strong><br> 遍历 <code>arr2</code> 的每个元素，在 <code>arr1</code> 中查找与之匹配的元素，并将其加入结果数组 <code>res</code> 中。</p><ul><li>查找到的元素需要从 <code>arr1</code> 中标记为无效（可以用一个特殊值如 <code>-1</code> 表示）。</li><li>每次找到一个匹配的元素，增加计数器 <code>count</code>，以记录匹配的总数量。</li></ul></li><li><p><strong>处理剩余元素</strong><br><code>arr1</code> 中剩余未标记的元素即为未出现在 <code>arr2</code> 中的元素。对这些元素进行排序。</p></li><li><p><strong>拼接结果</strong><br> 将已排序的未匹配元素与结果数组 <code>res</code> 拼接，形成最终的返回结果。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n + n log n)</code>，其中 <code>m</code> 是 <code>arr2</code> 的长度，<code>n</code> 是 <code>arr1</code> 的长度。 <ul><li>外层循环遍历 <code>arr2</code>，内层循环遍历 <code>arr1</code>，两者形成嵌套，复杂度为 <code>O(m * n)</code>。</li><li>剩余元素的排序，复杂度为 <code>O(m log n)</code>。</li><li>总时间复杂度为 <code>O(m * n + n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了结果数组 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arr1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arr2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"relativeSortArray"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr1"),n("span",{class:"token punctuation"},","),s(" arr2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token comment"},"// 1. 统计 arr1 中每个元素的出现次数"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" arr1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		count`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 2. 按照 arr2 的顺序填充结果数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" arr2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"let"),s(" freq "),n("span",{class:"token operator"},"="),s(" count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("freq"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			count`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"delete"),n("span",{class:"token punctuation"},"("),s("num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 3. 将剩余元素按升序加入结果数组"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" remaining "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s(" freq"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" count"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("freq"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(" remaining"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("key"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	remaining`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 4. 合并结果并返回"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("remaining"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arr1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arr2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"relativeSortArray"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("arr1"),n("span",{class:"token punctuation"},","),s(" arr2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
		count `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 初始化结果数组和计数器"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" arr2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 遍历 arr2"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" arr1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 遍历 arr1"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("arr2"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"=="),s(" arr1"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// 找到匹配元素"),s(`
				res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),s("arr1"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 加入结果数组"),s(`
				arr1`),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 标记已处理的元素"),s(`
				count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 更新计数器"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	arr1`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 对剩余元素排序"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"concat"),n("span",{class:"token punctuation"},"("),s("arr1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 拼接结果"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(C,L){const p=e("font"),o=e("RouterLink"),r=e("ExternalLinkIcon"),u=e("CodeTabs");return d(),k("div",null,[h,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[v]),_:1}),s(),t(o,{to:"/tag/counting-sort.html"},{default:a(()=>[f]),_:1}),s(),t(o,{to:"/tag/sorting.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",y,[w,t(r)]),s(),n("a",x,[O,t(r)])]),j,t(u,{id:"251",data:[{id:"哈希表"},{id:"循环遍历"}]},{title0:a(({value:c,isActive:l})=>[s("哈希表")]),title1:a(({value:c,isActive:l})=>[s("循环遍历")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[E]),_:1})])}const N=i(b,[["render",A],["__file","1122.html.vue"]]);export{N as default};

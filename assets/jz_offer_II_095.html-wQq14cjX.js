import{_ as k,r as e,o as d,c as m,a as n,b as s,d as t,w as a,e as u}from"./app-mXo2sCT-.js";const b={},h={id:"_95-最长公共子序列",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_95-最长公共子序列","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_095.html",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"字符串",-1),_=n("code",null,"动态规划",-1),x={href:"https://leetcode.cn/problems/qJnOS7",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"力扣",-1),w=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个字符串 <code>text1</code> 和 <code>text2</code>，返回这两个字符串的最长 <strong>公共子序列</strong> 的长度。如果不存在 <strong>公共子序列</strong> ，返回 <code>0</code> 。</p><p>一个字符串的 <strong>子序列</strong> 是指这样一个新的字符串：它是由原字符串在不改变字符的相对顺序的情况下删除某些字符（也可以不删除任何字符）后组成的新字符串。</p><ul><li>例如，<code>&quot;ace&quot;</code> 是 <code>&quot;abcde&quot;</code> 的子序列，但 <code>&quot;aec&quot;</code> 不是 <code>&quot;abcde&quot;</code> 的子序列。</li></ul><p>两个字符串的 <strong>公共子序列</strong> 是这两个字符串所共同拥有的子序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> text1 = &quot;abcde&quot;, text2 = &quot;ace&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最长公共子序列是 &quot;ace&quot; ，它的长度为 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> text1 = &quot;abc&quot;, text2 = &quot;abc&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最长公共子序列是 &quot;abc&quot; ，它的长度为 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> text1 = &quot;abc&quot;, text2 = &quot;def&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 两个字符串没有公共子序列，返回 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text1.length, text2.length &lt;= 1000</code></li><li><code>text1</code> 和 <code>text2</code> 仅由小写英文字符组成。</li></ul>',13),y={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),A=u('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划-递归" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划-递归" aria-hidden="true">#</a> 思路一：动态规划-递归</h3><p>使用递归来解题的思路如下：</p><ul><li><p>定义一个递归函数 <code>helper(i, j)</code> ，<code>i</code> 和 <code>j</code> 代表两个字符串的下标，函数返回最长公共子序列的长度；</p></li><li><p>base case 是当 <code>i</code> 或 <code>j</code> 等于 <code>-1</code>，即其中一个字符串为空，最长公共子序列的长度为 <code>0</code> ;</p></li><li><p>用一个数组 <code>dp</code> 记录子问题的结果，避免重复计算；</p></li><li><p>如果 <code>dp[i][j]</code> 已经存在，则直接返回，否则就递归计算：</p><ul><li>若 <code>s1[i] == s2[j]</code>，说明当前字符相同，最长公共子序列的长度可以在之前的基础上加 <code>1</code>：<code>dp[i][j] = 1 + helper(i - 1, j - 1)</code>；</li><li>否则说明当前字符不同，最长公共子序列的长度为两个字符串中分别去掉当前字符后的最大值：<code>dp[i][j] = Math.max(helper(i, j - 1), helper(i - 1, j))</code>； <ul><li><code>dp[i-1][j]</code> 表示舍弃字符 <code>s1[i]</code> ；</li><li><code>dp[i][j-1]</code> 表示舍弃字符 <code>s2[j]</code>；</li><li>谁能让最长公共子序列最长，就选择谁；</li></ul></li></ul></li><li><p>最后调用递归函数即可。</p></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>text1</code> 的长度，<code>n</code> 是 <code>text2</code> 的长度。在最坏情况下，函数 <code>helper</code> 可能会被调用 <code>m * n</code> 次</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用了一个二维动态规划数组，动态规划数组的大小为 <code>(m+1) * (n+1)</code>；在最坏情况下，递归栈的深度可能达到 <code>m + n</code>（最坏情况下，递归每次只向左或下移动），栈的空间相对于 <code>dp</code> 的空间是可以忽略的。</p></li></ul><hr><h3 id="思路二-动态规划-dp-table" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-dp-table" aria-hidden="true">#</a> 思路二：动态规划-DP table</h3><p>定义一个二维数组 <code>dp</code> , 其中 <code>dp[i][j]</code> 表示 <code>text1[0...i-1]</code> 和 <code>text2[0...j-1]</code> 的最长公共子序列的长度。</p><p><code>dp[..][0]</code> 和 <code>dp[0][..]</code> 对应 base case，即任何一个字符串为空时，最长公共子序列长度为 <code>0</code>。</p><p>状态转移方程如下：</p><ul><li>当 <code>s1[i-1] === s2[j-1]</code>，那么这个字符一定在最长公共子序列中：<code>dp[i][j] = 1 + dp[i-1][j-1]</code></li><li>否则，这两个字符至少有一个不在最长公共子序列中，需要丢弃一个。取二者的最大值：<code>dp[i][j] = max(dp[i-1][j], dp[i][j-1])</code></li></ul><p>其中，<code>dp[i-1][j]</code> 表示舍弃字符 <code>s1[i]</code> ，<code>dp[i][j-1]</code> 表示舍弃字符 <code>s2[j]</code>，谁能让最长公共子序列最长，就选择谁。</p><p>DP table 和递归的思路大致相同，唯一不同的是，DP table 是自底向上求解，递归解法是自顶向下求解。递归函数的 base case 是 <code>i</code>, <code>j</code> 等于 <code>-1</code>，而 DP table 的数组索引至少是 <code>0</code>，所以 DP table 数组会偏移一位。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>text1</code> 的长度，<code>n</code> 是 <code>text2</code> 的长度。</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，使用了一个二维动态规划数组，动态规划数组的大小为 <code>(m+1) * (n+1)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',17),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"text1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"text2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"longestCommonSubsequence"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("text1"),n("span",{class:"token punctuation"},","),s(" text2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" text1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" text2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 记录子问题的计算结果，避免重复计算"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" j")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 递归的终止条件"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" j "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 避免重复计算子问题"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 状态转移"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("text1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" text2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 调用递归函数"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"text1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"text2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"longestCommonSubsequence"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("text1"),n("span",{class:"token punctuation"},","),s(" text2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" text1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" text2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组，多一行一列用于处理空字符串的情况"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 动态规划，计算最长公共子序列的长度"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("text1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" text2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"+"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function D(P,L){const l=e("ExternalLinkIcon"),i=e("font"),o=e("RouterLink"),r=e("CodeTabs");return d(),m("div",null,[n("h1",h,[v,s(),n("a",g,[s("95. 最长公共子序列"),t(l)])]),n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(o,{to:"/tag/string.html"},{default:a(()=>[f]),_:1}),s(),t(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",x,[j,t(l)])]),w,n("div",y,[q,n("p",null,[s("本题与 LeetCode "),t(o,{to:"/problem/1143.html"},{default:a(()=>[s("第 1143 题")]),_:1}),s(" 相同。")])]),A,t(r,{id:"216",data:[{id:"动态规划-递归"},{id:"动态规划-DP table"}]},{title0:a(({value:c,isActive:p})=>[s("动态规划-递归")]),title1:a(({value:c,isActive:p})=>[s("动态规划-DP table")]),tab0:a(({value:c,isActive:p})=>[I]),tab1:a(({value:c,isActive:p})=>[C]),_:1})])}const M=k(b,[["render",D],["__file","jz_offer_II_095.html.vue"]]);export{M as default};

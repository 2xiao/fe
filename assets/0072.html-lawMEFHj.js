import{_ as u,r as c,o as d,c as k,a as n,b as s,d as t,w as e,f as m,e as h}from"./app--GvfAkAr.js";const b={},_=n("h1",{id:"_72-编辑距离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_72-编辑距离","aria-hidden":"true"},"#"),s(" 72. 编辑距离")],-1),g=n("code",null,"字符串",-1),f=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/edit-distance",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/edit-distance",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>word1</code> and <code>word2</code>, return <em>the minimum number of operations required to convert<code>word1</code> to <code>word2</code></em>.</p><p>You have the following three operations permitted on a word:</p><ul><li>Insert a character</li><li>Delete a character</li><li>Replace a character</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: word1 = &quot;horse&quot;, word2 = &quot;ros&quot;</p><p>Output: 3</p><p>Explanation:</p><p>horse -&gt; rorse (replace &#39;h&#39; with &#39;r&#39;)</p><p>rorse -&gt; rose (remove &#39;r&#39;)</p><p>rose -&gt; ros (remove &#39;e&#39;)</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word1 = &quot;intention&quot;, word2 = &quot;execution&quot;</p><p>Output: 5</p><p>Explanation:</p><p>intention -&gt; inention (remove &#39;t&#39;)</p><p>inention -&gt; enention (replace &#39;i&#39; with &#39;e&#39;)</p><p>enention -&gt; exention (replace &#39;n&#39; with &#39;x&#39;)</p><p>exention -&gt; exection (replace &#39;n&#39; with &#39;c&#39;)</p><p>exection -&gt; execution (insert &#39;u&#39;)</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= word1.length, word2.length &lt;= 500</code></li><li><code>word1</code> and <code>word2</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个单词 <code>word1</code> 和 <code>word2</code>， 请返回 <em>将 <code>word1</code> 转换成 <code>word2</code> 所使用的最少操作数</em> 。</p><p>你可以对一个单词进行如下三种操作：</p><ul><li>插入一个字符</li><li>删除一个字符</li><li>替换一个字符</li></ul><p><code>word1</code> 和 <code>word2</code> 由小写英文字母组成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以从后往前挨个字符对比 <code>s1</code> 和 <code>s2</code>，对于每对字符 <code>s1[i]</code> 和 <code>s2[j]</code>，可以有四种操作：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>if (s1[i] == s2[j]) {\n  啥都别做（skip）\n  i, j 同时向前移动\n} else {\n  三选一：\n    1. 插入（Insert）： 在字符串 `s1` 的末尾插入一个字符，使其与字符串 `s2` 匹配。\n    2. 删除（Delete）： 删除字符串 `s1` 的末尾字符，使其与字符串 `s2` 匹配。\n    3. 替换（Replace）： 将字符串 `s1` 的末尾字符替换为另一个字符，使其与字符串 `s2` 匹配。\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个「三选一」到底该怎么选择呢？很简单，全试一遍，哪个操作最后得到的编辑距离最小，就选谁。</p><p>具体解法可以分为 <strong>递归</strong> 和 <strong>DP-table</strong> 两种方式。</p><h3 id="思路一-动态规划-递归" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划-递归" aria-hidden="true">#</a> 思路一：动态规划-递归</h3><p>使用递归来解题的思路如下：</p><ul><li><p>定义一个递归函数 <code>helper(i, j)</code> ，用一个数组 <code>dp</code> 记录子问题的结果，避免重复计算；</p></li><li><p>base case 是 <code>i</code> 走完 <code>s1</code> 或 <code>j</code> 走完 <code>s2</code>，可以直接返回另一个字符串剩下的长度；</p></li><li><p>如果 <code>dp[i][j]</code> 已经存在，则直接返回，否则就递归计算：</p><ul><li><p>若 <code>s1[i] == s2[j]</code>，说明此对字符本来就相等，不需要任何操作，递归计算 <code>dp[i][j] = helper(i - 1, j - 1)</code>;</p></li><li><p>否则取以下三种情况的最小值，别忘了操作数加一：<code>dp[i][j] = Math.min(helper(i, j - 1), helper(i - 1, j), helper(i - 1, j - 1)) + 1</code>;</p><ol><li>插入（Insert）： <code>helper(i, j - 1)</code>，在 <code>s1[i]</code> 插入一个和 <code>s2[j]</code> 一样的字符，那么 <code>s2[j]</code> 就被匹配了，前移 <code>j</code>，继续跟 <code>i</code> 对比；</li><li>删除（Delete）： <code>helper(i - 1, j)</code>，把 <code>s[i]</code> 这个字符删掉，前移 <code>i</code>，继续跟 <code>j</code> 对比；</li><li>替换（Replace）： <code>helper(i - 1, j - 1)</code>，把 <code>s1[i]</code> 替换成 <code>s2[j]</code>，那么 <code>s2[j]</code> 就被匹配了，同时前移 <code>i</code>，<code>j</code> 继续对比；</li></ol></li></ul></li><li><p>最后调用递归函数即可。</p></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>word1</code> 的长度，<code>n</code> 是 <code>word2</code> 的长度。动态规划的状态空间为 <code>m × n</code>，每个状态通过递归函数调用进行填充，虽然每个状态的计算是通过递归实现的，但由于使用了记忆化搜索（动态规划），每个状态仅计算一次。因此，总的时间复杂度为 <code>O(m * n)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，用于存储动态规划表 <code>dp</code>，该表的大小为 <code>m × n</code>，记录每个子问题的结果。此外，递归调用栈的深度也可能达到 <code>O(m + n)</code>，但这是常量因素，因此主要的空间复杂度来源于 <code>dp</code> 数组。</p></li></ul><hr><h3 id="思路二-动态规划-dp-table" tabindex="-1"><a class="header-anchor" href="#思路二-动态规划-dp-table" aria-hidden="true">#</a> 思路二：动态规划-DP table</h3><p>定义一个二维数组 <code>dp</code> , <code>dp[i][j]</code> 表示将长度为 <code>i</code> 的字符串 <code>s1</code> 转换为长度为 <code>j</code> 的字符串 <code>s2</code> 所需的最小编辑距离。<code>dp[..][0]</code> 和 <code>dp[0][..]</code> 对应 base case。</p><p>状态转移方程如下：</p><ul><li>当 <code>s1[i-1] === s2[j-1]</code>，即当前字符相同：<code>dp[i][j] = dp[i-1][j-1]</code></li><li>否则，取以下操作的最小值：<code>dp[i][j] = 1 + min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1])</code></li></ul><p>其中，<code>dp[i-1][j]</code> 表示删除操作，<code>dp[i][j-1]</code> 表示插入操作，<code>dp[i-1][j-1]</code> 表示替换操作。</p><p>DP table 和递归的思路大致相同，唯一不同的是，DP table 是自底向上求解，递归解法是自顶向下求解。递归函数的 base case 是 <code>i</code>, <code>j</code> 等于 <code>-1</code>，而 DP table 的数组索引至少是 <code>0</code>，所以 DP table 数组会偏移一位。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>word1</code> 的长度，<code>n</code> 是 <code>word2</code> 的长度。动态规划需要循环遍历 <code>m × n</code> 次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(m * n)</code>，用于存储动态规划表 <code>dp</code>，该表的大小为 <code>m × n</code>，记录每个子问题的结果。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',35),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minDistance"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("word1"),n("span",{class:"token punctuation"},","),s(" word2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" word1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" word2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"helper"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" j")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// base case"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(" i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("word1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" word2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 跳过"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(`
				Math`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s(`
					`),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 插入"),s(`
					`),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 删除"),s(`
					`),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token comment"},"// 替换"),s(`
				`),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"helper"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word1"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"word2"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minDistance"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("word1"),n("span",{class:"token punctuation"},","),s(" word2")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" m "),n("span",{class:"token operator"},"="),s(" word1"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" word2"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 初始化动态规划数组，多一行一列用于处理空字符串的情况"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("m "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 初始化边界条件"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" j"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 动态规划，计算最小编辑距离"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" m"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("word1"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=="),s(" word2"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
				dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),s("dp"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("m"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"161",-1),E=n("td",{style:{"text-align":"left"}},"相隔为 1 的编辑距离 🔒",-1),O=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},L=n("code",null,"双指针",-1),N=n("code",null,"字符串",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/one-edit-distance",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/one-edit-distance",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"583",-1),S=n("td",{style:{"text-align":"left"}},"两个字符串的删除操作",-1),G={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},z=n("code",null,"字符串",-1),F=n("code",null,"动态规划",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/delete-operation-for-two-strings",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"712",-1),W=n("td",{style:{"text-align":"left"}},"两个字符串的最小ASCII删除和",-1),X={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=n("code",null,"字符串",-1),nn=n("code",null,"动态规划",-1),sn=n("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/minimum-ascii-delete-sum-for-two-strings",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"1035",-1),cn=n("td",{style:{"text-align":"left"}},"不相交的线",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},rn=n("code",null,"数组",-1),un=n("code",null,"动态规划",-1),dn=n("td",{style:{"text-align":"center"}},"🟠",-1),kn={style:{"text-align":"center"}},mn={href:"https://leetcode.cn/problems/uncrossed-lines",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/uncrossed-lines",target:"_blank",rel:"noopener noreferrer"},bn=n("td",{style:{"text-align":"center"}},"2209",-1),_n=n("td",{style:{"text-align":"left"}},"用地毯覆盖后的最少白色砖块",-1),gn=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},vn=n("code",null,"字符串",-1),wn=n("code",null,"动态规划",-1),yn=n("code",null,"前缀和",-1),xn=n("td",{style:{"text-align":"center"}},"🔴",-1),jn={style:{"text-align":"center"}},qn={href:"https://leetcode.cn/problems/minimum-white-tiles-after-covering-with-carpets",target:"_blank",rel:"noopener noreferrer"},An={href:"https://leetcode.com/problems/minimum-white-tiles-after-covering-with-carpets",target:"_blank",rel:"noopener noreferrer"};function Dn(In,Cn){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[_,n("p",null,[s("🟠 "),t(i,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),n("a",v,[w,t(o)]),s(),n("a",y,[x,t(o)])]),j,t(r,{id:"259",data:[{id:"动态规划-递归"},{id:"动态规划-DP table"}]},{title0:e(({value:l,isActive:p})=>[s("动态规划-递归")]),title1:e(({value:l,isActive:p})=>[s("动态规划-DP table")]),tab0:e(({value:l,isActive:p})=>[q]),tab1:e(({value:l,isActive:p})=>[A]),_:1}),D,m(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[C,E,O,n("td",P,[t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/string.html"},{default:e(()=>[N]),_:1})]),R,n("td",V,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[T,S,n("td",G,[t(a,{to:"/problem/0583.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Y,[t(a,{to:"/tag/string.html"},{default:e(()=>[z]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[F]),_:1})]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])]),n("tr",null,[U,W,n("td",X,[t(a,{to:"/problem/0712.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",Z,[t(a,{to:"/tag/string.html"},{default:e(()=>[$]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[nn]),_:1})]),sn,n("td",tn,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",an,[s("🔗"),t(o)])])]),n("tr",null,[on,cn,ln,n("td",pn,[t(a,{to:"/tag/array.html"},{default:e(()=>[rn]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[un]),_:1})]),dn,n("td",kn,[n("a",mn,[s("🀄️"),t(o)]),s(),n("a",hn,[s("🔗"),t(o)])])]),n("tr",null,[bn,_n,gn,n("td",fn,[t(a,{to:"/tag/string.html"},{default:e(()=>[vn]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[wn]),_:1}),s(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[yn]),_:1})]),xn,n("td",jn,[n("a",qn,[s("🀄️"),t(o)]),s(),n("a",An,[s("🔗"),t(o)])])])])])])}const On=u(b,[["render",Dn],["__file","0072.html.vue"]]);export{On as default};

import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as m}from"./app-MkGfDfkx.js";const _={},b=n("h1",{id:"_392-判断子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_392-判断子序列","aria-hidden":"true"},"#"),t(" 392. 判断子序列")],-1),g=n("code",null,"双指针",-1),f=n("code",null,"字符串",-1),v=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if</em><code>s</code> _is a <strong>subsequence</strong> of _<code>t</code> <em>, or</em><code>false</code> <em>otherwise</em>.</p><p>A <strong>subsequence</strong> of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., <code>&quot;ace&quot;</code> is a subsequence of <code>&quot; _a_ b _c_ d _e_ &quot;</code> while <code>&quot;aec&quot;</code> is not).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abc&quot;, t = &quot;ahbgdc&quot;</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;axc&quot;, t = &quot;ahbgdc&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 100</code></li><li><code>0 &lt;= t.length &lt;= 10^4</code></li><li><code>s</code> and <code>t</code> consist only of lowercase English letters.</li></ul><p><strong>Follow up:</strong> Suppose there are lots of incoming <code>s</code>, say <code>s1, s2, ..., sk</code> where <code>k &gt;= 109</code>, and you want to check one by one to see if <code>t</code> has its subsequence. In this scenario, how would you change your code?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定字符串 <code>s</code> 和 <code>t</code> ，判断 <code>s</code> 是否为 <code>t</code> 的子序列。字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，<code>&quot;ace&quot;</code>是<code>&quot;abcde&quot;</code>的一个子序列，而<code>&quot;aec&quot;</code>不是）。</p><p><strong>进阶</strong> ：如果有大量输入的 <code>S</code>，称作<code> S1, S2, ... , Sk</code> 其中 <code>k &gt;= 10亿</code>，你需要依次检查它们是否为 <code>T</code> 的子序列。在这种情况下，你会怎样改变代码？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针" aria-hidden="true">#</a> 思路一：双指针</h3><ul><li>使用两个指针 <code>i</code> 和 <code>j</code>，分别遍历 <code>s</code> 和 <code>t</code>： <ol><li>指针 <code>i</code> 用于指向 <code>s</code> 中的当前字符；</li><li>指针 <code>j</code> 用于指向 <code>t</code> 中的当前字符。</li></ol></li><li>遍历 <code>t</code>： <ul><li>如果 <code>s[i] == t[j]</code>，说明匹配上了，<code>i++</code>。</li><li>始终移动 <code>j</code>，以确保字符的顺序性。</li></ul></li><li>如果 <code>i == s.length</code>，说明 <code>s</code> 的所有字符都能按顺序匹配上，返回 <code>true</code>；否则返回 <code>false</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>t</code> 的长度。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>。</li></ul><hr><h3 id="进阶-二分法-进阶版" tabindex="-1"><a class="header-anchor" href="#进阶-二分法-进阶版" aria-hidden="true">#</a> 进阶：二分法（进阶版）</h3><ul><li><p><strong>预处理 <code>t</code> 的索引位置</strong>：</p><ul><li>先用一个哈希表 <code>indexMap</code> 存储 <code>t</code> 中每个字符的所有出现位置（按照索引升序）。</li></ul></li><li><p><strong>二分查找加速匹配</strong>：</p><ul><li>遍历 <code>s</code> 中的每个字符，使用二分查找定位该字符在 <code>t</code> 中的下一个匹配位置。</li><li>在哈希表中，快速找到 <code>t</code> 中大于当前指针 <code>j</code> 的最小索引。</li><li>如果找不到，说明无法匹配当前字符，返回 <code>false</code>。</li></ul></li><li><p>二分查找函数 <code>left_bound</code>：在升序数组中找到第一个大于等于 <code>target</code> 的位置，若不存在返回 <code>-1</code>。</p></li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>: <code>O(n + m log n)</code>，其中 <code>n</code> 是字符串 <code>t</code> 的长度，<code>m</code> 是 <code>s</code> 的长度。</p><ul><li><strong>预处理</strong>：遍历 <code>t</code> 构建哈希表，时间复杂度为 <code>O(n)</code>。</li><li><strong>匹配</strong>：对于每个字符，在哈希表中查找位置，时间复杂度为 <code>O(m log n)</code>。</li><li><strong>总复杂度</strong>: <code>O(n + m log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>: <code>O(n)</code>，使用一个哈希表存储索引位置。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',24),M=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 指向 s 的指针"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 指向 t 的指针"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" j "),n("span",{class:"token operator"},"<"),t(" t"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" t"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 匹配上时移动 s 的指针"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		j`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 始终移动 t 的指针"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" i "),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 是否完全匹配"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"t"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isSubsequence"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("s"),n("span",{class:"token punctuation"},","),t(" t")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" indexMap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 构建字符位置的哈希表"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" t"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("indexMap"),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			indexMap`),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		indexMap`),n("span",{class:"token punctuation"},"["),t("t"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token comment"},"// 在 t 上的指针"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token comment"},"// 如果 s[i] 不在 t 中，直接返回 false"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token comment"},"// 找到大于等于 j 的下一个位置"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" pos "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"left_bound"),n("span",{class:"token punctuation"},"("),t("indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("pos "),n("span",{class:"token operator"},"=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token comment"},"// 更新指针位置"),t(`
		j `),n("span",{class:"token operator"},"="),t(" indexMap"),n("span",{class:"token punctuation"},"["),t("s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("pos"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// 二分查找：找到大于等于 target 的最小位置"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"left_bound"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("arr"),n("span",{class:"token punctuation"},","),t(" target")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		right `),n("span",{class:"token operator"},"="),t(" arr"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(" left "),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("right "),n("span",{class:"token operator"},"-"),t(" left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("arr"),n("span",{class:"token punctuation"},"["),t("mid"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" target"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			left `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			right `),n("span",{class:"token operator"},"="),t(" mid"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" left "),n("span",{class:"token operator"},"=="),t(" arr"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"?"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},":"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"792",-1),A=n("td",{style:{"text-align":"left"}},"匹配子序列的单词数",-1),I=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},N=n("code",null,"字典树",-1),V=n("code",null,"数组",-1),T=n("code",null,"哈希表",-1),B=n("code",null,"4+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/number-of-matching-subsequences",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/number-of-matching-subsequences",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"1055",-1),H=n("td",{style:{"text-align":"left"}},"形成字符串的最短路径 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"贪心",-1),Q=n("code",null,"双指针",-1),U=n("code",null,"字符串",-1),W=n("code",null,"1+",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/shortest-way-to-form-string",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/shortest-way-to-form-string",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"2486",-1),tn=n("td",{style:{"text-align":"left"}},"追加字符以获得子序列",-1),sn=n("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},an=n("code",null,"贪心",-1),on=n("code",null,"双指针",-1),cn=n("code",null,"字符串",-1),ln=n("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/append-characters-to-string-to-make-subsequence",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/append-characters-to-string-to-make-subsequence",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"center"}},"2825",-1),kn=n("td",{style:{"text-align":"left"}},"循环增长使字符串子序列等于另一个字符串",-1),hn={style:{"text-align":"center"}},mn={style:{"text-align":"left"}},_n=n("code",null,"双指针",-1),bn=n("code",null,"字符串",-1),gn=n("td",{style:{"text-align":"center"}},"🟠",-1),fn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/make-string-a-subsequence-using-cyclic-increments",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://leetcode.com/problems/make-string-a-subsequence-using-cyclic-increments",target:"_blank",rel:"noopener noreferrer"};function xn(wn,qn){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",w,[q,s(o)])]),j,s(r,{id:"211",data:[{id:"双指针"},{id:"进阶：二分法"}]},{title0:e(({value:l,isActive:i})=>[t("双指针")]),title1:e(({value:l,isActive:i})=>[t("进阶：二分法")]),tab0:e(({value:l,isActive:i})=>[M]),tab1:e(({value:l,isActive:i})=>[O]),_:1}),S,h(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[E,A,I,n("td",L,[s(a,{to:"/tag/trie.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[T]),_:1}),t(),B]),R,n("td",F,[n("a",G,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[D,H,J,n("td",K,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[P]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[U]),_:1}),t(),W]),X,n("td",Y,[n("a",Z,[t("🀄️"),s(o)]),t(),n("a",$,[t("🔗"),s(o)])])]),n("tr",null,[nn,tn,sn,n("td",en,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[an]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[on]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[cn]),_:1})]),ln,n("td",pn,[n("a",rn,[t("🀄️"),s(o)]),t(),n("a",un,[t("🔗"),s(o)])])]),n("tr",null,[dn,kn,n("td",hn,[s(a,{to:"/problem/2825.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",mn,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[_n]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[bn]),_:1})]),gn,n("td",fn,[n("a",vn,[t("🀄️"),s(o)]),t(),n("a",yn,[t("🔗"),s(o)])])])])])])}const Mn=u(_,[["render",xn],["__file","0392.html.vue"]]);export{Mn as default};

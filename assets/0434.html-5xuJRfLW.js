import{_ as u,r as t,o as d,c as k,a as n,b as s,d as a,w as e,e as m}from"./app-MsFeWfVD.js";const h={},b=n("h1",{id:"_434-字符串中的单词数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_434-字符串中的单词数","aria-hidden":"true"},"#"),s(" 434. 字符串中的单词数")],-1),g=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/number-of-segments-in-a-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/number-of-segments-in-a-string",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),y=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the number of segments in the string</em>.</p><p>A <strong>segment</strong> is defined to be a contiguous sequence of <strong>non-space characters</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;Hello, my name is John&quot;</p><p>Output: 5</p><p>Explanation: The five segments are [&quot;Hello,&quot;, &quot;my&quot;, &quot;name&quot;, &quot;is&quot;, &quot;John&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;Hello&quot;</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length &lt;= 300</code></li><li><code>s</code> consists of lowercase and uppercase English letters, digits, or one of the following characters <code>&quot;!@#$%^&amp;*()_+-=&#39;,.:&quot;</code>.</li><li>The only space character in <code>s</code> is <code>&#39; &#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>统计字符串中的单词个数，这里的单词指的是连续的不是空格的字符。</p><p>请注意，你可以假定字符串里不包括任何不可打印的字符。</p><p><strong>示例:</strong></p><blockquote><p><strong>输入:</strong> &quot;Hello, my name is John&quot;</p><p><strong>输出:</strong> 5</p><p><strong>解释:</strong> 这里的单词是指连续的不是空格的字符，所以 &quot;Hello,&quot; 算作 1 个单词。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-拆分数组" tabindex="-1"><a class="header-anchor" href="#思路一-拆分数组" aria-hidden="true">#</a> 思路一：拆分数组</h3><p>我们可以将字符串 <code>s</code> 以<strong>空格</strong>作为分隔符拆分成一个数组，然后过滤掉空字符串，最后计算数组的长度（单词数量）。</p><ol><li>使用 <code>split(&#39; &#39;)</code> 方法将字符串按<strong>空格</strong>拆分成多个子字符串。</li><li>使用 <code>filter()</code> 过滤掉数组中的空字符串（<code>&#39;&#39;</code>），因为空字符串不是有效单词。</li><li>返回过滤后的数组长度。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，其中 <code>n</code> 是字符串的长度。<code>split</code> 和 <code>filter</code> 操作都会遍历整个字符串。</li><li><strong>空间复杂度：</strong> <code>O(n)</code>，<code>split</code> 方法会生成一个新数组。</li></ul><h3 id="思路二-遍历字符串" tabindex="-1"><a class="header-anchor" href="#思路二-遍历字符串" aria-hidden="true">#</a> 思路二：遍历字符串</h3><p>考虑到时间复杂度和空间复杂度，有一种<strong>优化解法</strong>，通过直接遍历字符串并计算单词数量，避免使用 <code>split()</code> 方法和 <code>filter()</code> 方法，从而减少内存消耗。</p><p>通过<strong>遍历字符串</strong>，在遇到非空字符时开始计数，当遇到空格时，我们认为一个单词已经结束。这样可以直接计算单词数量，而不需要先把整个字符串拆分成数组。</p><ol><li>遍历字符串 <code>s</code>，用一个布尔值 <code>inWord</code> 来标记当前是否在一个单词中。</li><li>当遇到非空格字符时，如果当前不在一个单词中，说明一个新单词开始了，单词计数加 1。</li><li>当遇到空格时，设置 <code>inWord</code> 为 <code>false</code>，表示当前没有在一个单词中。</li><li>最后返回单词的数量。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度：</strong> <code>O(n)</code>，只遍历一次字符串。</li><li><strong>空间复杂度：</strong> <code>O(1)</code>，只用常数空间来存储计数器和标记。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',27),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"countSegments"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" i "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"countSegments"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" inWord "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),s("inWord"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
				inWord `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			inWord `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" count"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(j,C){const i=t("font"),r=t("RouterLink"),l=t("ExternalLinkIcon"),p=t("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟢 "),a(i,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(r,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",v,[f,a(l)]),s(),n("a",_,[q,a(l)])]),y,a(p,{id:"173",data:[{id:"拆分数组"},{id:"遍历字符串"}]},{title0:e(({value:o,isActive:c})=>[s("拆分数组")]),title1:e(({value:o,isActive:c})=>[s("遍历字符串")]),tab0:e(({value:o,isActive:c})=>[w]),tab1:e(({value:o,isActive:c})=>[x]),_:1})])}const W=u(h,[["render",E],["__file","0434.html.vue"]]);export{W as default};

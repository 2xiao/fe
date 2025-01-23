import{_ as k,r as e,o as d,c as m,a as n,b as s,d as a,w as t,e as p}from"./app-MsFeWfVD.js";const b={},g=n("h1",{id:"_16-不含重复字符的最长子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_16-不含重复字符的最长子字符串","aria-hidden":"true"},"#"),s(" 16. 不含重复字符的最长子字符串")],-1),h=n("code",null,"哈希表",-1),v=n("code",null,"字符串",-1),_=n("code",null,"滑动窗口",-1),w={href:"https://leetcode.cn/problems/wtcaE1",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串 <code>s</code> ，请你找出其中不含有重复字符的 <strong>最长连续子字符串</strong> 的长度。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;abcabcbb&quot;</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 因为无重复字符的最长子字符串是 &quot;abc&quot;，所以其长度为 3。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;bbbbb&quot;</p><p><strong>输出:</strong> 1</p><p><strong>解释:</strong> 因为无重复字符的最长子字符串是 &quot;b&quot;，所以其长度为 1。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;pwwkew&quot;</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 因为无重复字符的最长子串是 &quot;wke&quot;，所以其长度为 3。</p><blockquote><p>请注意，你的答案必须是 <strong>子串</strong> 的长度，&quot;pwke&quot; 是一个 <em>子序列，</em> 不是子串。</p></blockquote></blockquote><p><strong>示例 4:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;&quot;</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> 由英文字母、数字、符号和空格组成</li></ul>',12),y={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),S=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以使用 <strong>滑动窗口</strong> 技巧来解决。</p><ol><li><p><strong>定义滑动窗口</strong>：</p><ul><li>使用两个指针 <code>left</code> 和 <code>right</code> 来表示滑动窗口的左右边界。滑动窗口会随着指针的移动而扩大或收缩。</li><li>维护一个 <code>window</code> 对象，记录当前窗口中各字符出现的频次。</li></ul></li><li><p><strong>扩展右指针</strong>：</p><ul><li>每次将右指针 <code>right</code> 向右移动一格，将对应的字符加入 <code>window</code>，更新该字符的出现次数。</li></ul></li><li><p><strong>收缩左指针</strong>：</p><ul><li>如果当前字符已经在窗口中出现了不止一次（即 <code>window[c] &gt; 1</code>），说明当前窗口中有重复字符。此时我们要通过移动左指针 <code>left</code> 来缩小窗口，直到去掉重复的字符，保证窗口内每个字符只出现一次。</li></ul></li><li><p><strong>记录结果</strong>：</p><ul><li>每次调整完窗口后，检查当前窗口的大小，并更新最长子串的长度 <code>res</code>。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>当右指针遍历到字符串的末尾时，循环结束，返回 <code>res</code> 即为最长不含重复字符的子串长度。</li></ul></li></ol>',3),j=p('<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。</p><ul><li>外层的 <code>while</code> 循环遍历字符串 <code>s</code>，每个字符最多只会被左指针和右指针访问一次。因此，整个滑动窗口算法的时间复杂度为 <code>O(n)</code>，因为每个字符至多只会被访问两次（一次右指针移动，一次左指针移动）。</li><li>更新 <code>window</code> 和比较操作都是常数时间操作 <code>O(1)</code>，不会影响整体复杂度。</li></ul></li><li><p><strong>空间复杂度</strong>： <code>O(1)</code></p><ul><li>虽然在 <code>window</code> 中存储字符的频次，但 <code>window</code> 最多只会包含 128 个 ASCII 字符，因此空间复杂度为 <code>O(1)</code>，与字符串 <code>s</code> 的长度无关。</li><li>其他变量如 <code>left</code>、<code>right</code>、<code>res</code> 以及中间变量 <code>c</code> 和 <code>d</code> 都只占用常数空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',3),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" window "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 记录窗口内字符的频次"),s(`
		left `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 左指针"),s(`
		right `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token comment"},"// 右指针"),s(`
		res `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 记录最长子串的长度"),s(`

	`),n("span",{class:"token comment"},"// 遍历字符串"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("right "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" c "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 当前右指针指向的字符"),s(`
		right`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 右指针向右移动"),s(`
		window`),n("span",{class:"token punctuation"},"["),s("c"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"["),s("c"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 统计当前字符的频次"),s(`

		`),n("span",{class:"token comment"},"// 如果窗口内有重复字符，收缩窗口"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("window"),n("span",{class:"token punctuation"},"["),s("c"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"let"),s(" d "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 左指针指向的字符"),s(`
			left`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 左指针向右移动，缩小窗口"),s(`
			window`),n("span",{class:"token punctuation"},"["),s("d"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 减少窗口内字符频次"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 更新结果，记录最大长度"),s(`
		res `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"-"),s(" left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 返回最长不含重复字符的子串长度"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"lengthOfLongestSubstring"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" max "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" curStr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" char "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"charAt"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" pos "),n("span",{class:"token operator"},"="),s(" curStr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("char"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("pos "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			curStr `),n("span",{class:"token operator"},"="),s(" curStr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),s("pos "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" curStr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		curStr `),n("span",{class:"token operator"},"+="),s(" char"),n("span",{class:"token punctuation"},";"),s(`
		max `),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),s("max"),n("span",{class:"token punctuation"},","),s(" curStr"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" max"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(A,C){const i=e("font"),o=e("RouterLink"),u=e("ExternalLinkIcon"),r=e("CodeTabs");return d(),m("div",null,[g,n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/sliding-window.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",w,[f,a(u)])]),q,n("div",y,[x,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0003.html"},{default:t(()=>[s("第 3 题")]),_:1}),s(" 相同。")])]),S,n("p",null,[s("详细的滑动窗口答题框架讲解，可阅读 "),a(o,{to:"/book/slide_window.html"},{default:t(()=>[s("《3.11 滑动窗口》")]),_:1}),s("。")]),j,a(r,{id:"208",data:[{id:"滑动窗口框架"},{id:"简化版"}]},{title0:t(({value:c,isActive:l})=>[s("滑动窗口框架")]),title1:t(({value:c,isActive:l})=>[s("简化版")]),tab0:t(({value:c,isActive:l})=>[I]),tab1:t(({value:c,isActive:l})=>[O]),_:1})])}const N=k(b,[["render",L],["__file","jz_offer_II_016.html.vue"]]);export{N as default};

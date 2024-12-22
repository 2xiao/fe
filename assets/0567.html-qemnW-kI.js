import{_ as i,r as c,o as d,c as u,a as n,b as s,d as t,w as a,f as r,e as p}from"./app-U2ekqv2z.js";const k={},h=n("h1",{id:"_567-字符串的排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_567-字符串的排列","aria-hidden":"true"},"#"),s(" 567. 字符串的排列")],-1),m=n("code",null,"哈希表",-1),v=n("code",null,"双指针",-1),_=n("code",null,"字符串",-1),b=n("code",null,"滑动窗口",-1),g={href:"https://leetcode.cn/problems/permutation-in-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/permutation-in-string",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s1</code> and <code>s2</code>, return <code>true</code> <em>if</em><code>s2</code> <em>contains a permutation of</em><code>s1</code> <em>, or</em><code>false</code> <em>otherwise</em>.</p><p>In other words, return <code>true</code> if one of <code>s1</code>&#39;s permutations is the substring of <code>s2</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s1 = &quot;ab&quot;, s2 = &quot;eidbaooo&quot;</p><p>Output: true</p><p>Explanation: s2 contains one permutation of s1 (&quot;ba&quot;).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s1 = &quot;ab&quot;, s2 = &quot;eidboaoo&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 10^4</code></li><li><code>s1</code> and <code>s2</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>s1</code> 和 <code>s2</code> ，写一个函数来判断 <code>s2</code> 是否包含 <code>s1</code> 的排列。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>换句话说，<code>s1</code> 的排列之一是 <code>s2</code> 的 <strong>子串</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这种题目，是明显的滑动窗口算法，相当给你一个 <code>s1</code> 和一个 <code>s2</code>，请问你 <code>s2</code> 中是否存在一个子串，包含 <code>s1</code> 中所有字符且不包含其他字符。</p><p>滑动窗口算法的思路是这样：</p><ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>s1.length</code> 个字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求（不包含 <code>s1.length</code> 个字符了）；同时，每次增加 <code>left</code>，都要更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s2</code> 的尽头；</li></ol>',16),q=p(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n + m)</code>，其中 <code>n</code> 是 <code>s2</code> 的长度，<code>m</code> 是 <code>s1</code> 的长度。 <ul><li>初始化 <code>need</code> 字典需要遍历字符串 <code>s1</code>，时间复杂度是 <code>O(m)</code>；</li><li>滑动窗口遍历 <code>s2</code>，外层的 <code>while</code> 循环遍历字符串 <code>s2</code>，且每次迭代移动右边界 <code>right</code>，最多遍历 <code>n</code> 次；</li><li>内层 <code>while</code> 循环在窗口大小达到 <code>s1.length</code> 时才会触发，但它总共只移动 <code>left</code> 指针 <code>n</code> 次，因此总的移动操作是线性的。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(1)</code>，<code>need</code> 和 <code>window</code> 字典的大小最多是英文字母的数量（26 个字母），所以它们的空间复杂度是 <code>O(1)</code>，其他变量的存储是常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkInclusion</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> c <span class="token operator">=</span> s2<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 进行窗口内数据的一系列更新</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				valid <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 判断左侧窗口是否要收缩</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&gt;=</span> s1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 在这里判断是否找到了合法的子串</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">let</span> d <span class="token operator">=</span> s2<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 进行窗口内数据的一系列更新</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					valid<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 未找到符合条件的子串</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"76",-1),I=n("td",{style:{"text-align":"left"}},"最小覆盖子串",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"哈希表",-1),V=n("code",null,"字符串",-1),j=n("code",null,"滑动窗口",-1),B=n("td",{style:{"text-align":"center"}},"🔴",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"438",-1),T=n("td",{style:{"text-align":"left"}},"找到字符串中所有字母异位词",-1),z={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=n("code",null,"哈希表",-1),F=n("code",null,"字符串",-1),H=n("code",null,"滑动窗口",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/find-all-anagrams-in-a-string",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return d(),u("div",null,[h,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",g,[f,t(o)]),s(),n("a",w,[y,t(o)])]),x,n("p",null,[s("详细的滑动窗口答题框架讲解，可阅读 "),t(e,{to:"/book/slide_window.html"},{default:a(()=>[s("《3.11 滑动窗口》")]),_:1}),s("。")]),q,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,I,n("td",C,[t(e,{to:"/problem/0076.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",L,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[j]),_:1})]),B,n("td",R,[n("a",G,[s("🀄️"),t(o)]),s(),n("a",M,[s("🔗"),t(o)])])]),n("tr",null,[S,T,n("td",z,[t(e,{to:"/problem/0438.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",A,[t(e,{to:"/tag/hash-table.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])])])])])}const Z=i(k,[["render",U],["__file","0567.html.vue"]]);export{Z as default};

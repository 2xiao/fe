import{_ as i,r as p,o as l,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-MkGfDfkx.js";const k={},m=n("h1",{id:"_2182-构造限制重复的字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2182-构造限制重复的字符串","aria-hidden":"true"},"#"),s(" 2182. 构造限制重复的字符串")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),v=n("code",null,"计数",-1),_=n("code",null,"堆（优先队列）",-1),f={href:"https://leetcode.cn/problems/construct-string-with-repeat-limit",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/construct-string-with-repeat-limit",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),L=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> and an integer <code>repeatLimit</code>. Construct a new string <code>repeatLimitedString</code> using the characters of <code>s</code> such that no letter appears <strong>more than</strong> <code>repeatLimit</code> times <strong>in a row</strong>. You do <strong>not</strong> have to use all characters from <code>s</code>.</p><p>Return _the<strong>lexicographically largest</strong> _<code>repeatLimitedString</code> <em>possible</em>.</p><p>A string <code>a</code> is <strong>lexicographically larger</strong> than a string <code>b</code> if in the first position where <code>a</code> and <code>b</code> differ, string <code>a</code> has a letter that appears later in the alphabet than the corresponding letter in <code>b</code>. If the first <code>min(a.length, b.length)</code> characters do not differ, then the longer string is the lexicographically larger one.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;cczazcc&quot;, repeatLimit = 3</p><p>Output: &quot;zzcccac&quot;</p><p>Explanation: We use all of the characters from s to construct the repeatLimitedString &quot;zzcccac&quot;.</p><p>The letter &#39;a&#39; appears at most 1 time in a row.</p><p>The letter &#39;c&#39; appears at most 3 times in a row.</p><p>The letter &#39;z&#39; appears at most 2 times in a row.</p><p>Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.</p><p>The string is the lexicographically largest repeatLimitedString possible so we return &quot;zzcccac&quot;.</p><p>Note that the string &quot;zzcccca&quot; is lexicographically larger but the letter &#39;c&#39; appears more than 3 times in a row, so it is not a valid repeatLimitedString.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aababab&quot;, repeatLimit = 2</p><p>Output: &quot;bbabaa&quot;</p><p>Explanation: We use only some of the characters from s to construct the repeatLimitedString &quot;bbabaa&quot;.</p><p>The letter &#39;a&#39; appears at most 2 times in a row.</p><p>The letter &#39;b&#39; appears at most 2 times in a row.</p><p>Hence, no letter appears more than repeatLimit times in a row and the string is a valid repeatLimitedString.</p><p>The string is the lexicographically largest repeatLimitedString possible so we return &quot;bbabaa&quot;.</p><p>Note that the string &quot;bbabaaa&quot; is lexicographically larger but the letter &#39;a&#39; appears more than 2 times in a row, so it is not a valid repeatLimitedString.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= repeatLimit &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个整数 <code>repeatLimit</code> ，用 <code>s</code> 中的字符构造一个新字符串 <code>repeatLimitedString</code> ，使任何字母 <strong>连续</strong> 出现的次数都不超过 <code>repeatLimit</code> 次。你不必使用 <code>s</code> 中的全部字符。</p><p>返回 <strong>字典序最大的</strong> <code>repeatLimitedString</code> 。</p><p>如果在字符串 <code>a</code> 和 <code>b</code> 不同的第一个位置，字符串 <code>a</code> 中的字母在字母表中出现时间比字符串 <code>b</code> 对应的字母晚，则认为字符串 <code>a</code> 比字符串 <code>b</code> <strong>字典序更大</strong> 。如果字符串中前 <code>min(a.length, b.length)</code> 个字符都相同，那么较长的字符串字典序更大。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;cczazcc&quot;, repeatLimit = 3</p><p><strong>输出：</strong> &quot;zzcccac&quot;</p><p><strong>解释：</strong> 使用 s 中的所有字符来构造 repeatLimitedString &quot;zzcccac&quot;。</p><p>字母 &#39;a&#39; 连续出现至多 1 次。</p><p>字母 &#39;c&#39; 连续出现至多 3 次。</p><p>字母 &#39;z&#39; 连续出现至多 2 次。</p><p>因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。</p><p>该字符串是字典序最大的 repeatLimitedString ，所以返回 &quot;zzcccac&quot; 。</p><p>注意，尽管 &quot;zzcccca&quot; 字典序更大，但字母 &#39;c&#39; 连续出现超过 3 次，所以它不是一个有效的 repeatLimitedString 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aababab&quot;, repeatLimit = 2</p><p><strong>输出：</strong> &quot;bbabaa&quot;</p><p><strong>解释：</strong></p><p>使用 s 中的一些字符来构造 repeatLimitedString &quot;bbabaa&quot;。</p><p>字母 &#39;a&#39; 连续出现至多 2 次。</p><p>字母 &#39;b&#39; 连续出现至多 2 次。</p><p>因此，没有字母连续出现超过 repeatLimit 次，字符串是一个有效的 repeatLimitedString 。</p><p>该字符串是字典序最大的 repeatLimitedString ，所以返回 &quot;bbabaa&quot; 。</p><p>注意，尽管 &quot;bbabaaa&quot; 字典序更大，但字母 &#39;a&#39; 连续出现超过 2 次，所以它不是一个有效的 repeatLimitedString 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= repeatLimit &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频次并排序</strong>：</p><ul><li>使用 <code>count[26]</code> 数组记录 <code>s</code> 中每个字符的出现次数</li></ul></li><li><p><strong>从高到低处理字符</strong>：</p><ul><li>每次选择字典序最大的字符，添加到结果字符串中，且连续添加次数不超过 <code>repeatLimit</code>。</li><li>如果当前字符无法继续使用（因为会超出限制），则选择字典序次大的字符插入。</li><li>插入次靠后的字符后，可以重新尝试使用当前最靠后的字符。</li><li>若没有其他字符可以插入，则停止构造。</li></ul></li><li><p><strong>结束条件</strong>：</p><ul><li>当所有字符的频次都被用完时，退出循环，返回构造好的字符串。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是输入字符串的长度。 <ul><li>统计频次需要 <code>O(n)</code>。</li><li>每次寻找可用字符需要 <code>O(26)</code>（常数）。</li><li>构造结果字符串需要遍历所有字符，总计 <code>O(n)</code>。</li><li>总复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用一个 <code>res</code> 数组储存结果字符，最坏情况下会存储 <code>n</code> 个字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">repeatLimit</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">repeatLimitedString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> repeatLimit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getChar</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 统计每个字符的频次</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 标记是否还有更大的字符没有用完</span>
	<span class="token keyword">let</span> lastIdx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">25</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 找到第一个可以用的字符</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果还有更大的字符没用完，说明是超过重复限制了，插入次大字符一次，再接着插入更大的字符</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>lastIdx <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 插入次大字符一次</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getChar</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			count<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token comment">// 因为每次循环后会 i--，所以让 i = lastIdx + 1，保证下次进入循环时 i 是 lastIdx</span>
			i <span class="token operator">=</span> lastIdx <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			lastIdx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 插入当前字符，最多插入 repeatLimit 次</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> repeatLimit <span class="token operator">&amp;&amp;</span> count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">,</span> count<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">getChar</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 标记当前字符还没有用完</span>
				lastIdx <span class="token operator">=</span> i<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"358",-1),z=n("td",{style:{"text-align":"left"}},"K 距离间隔重排字符串 🔒",-1),C=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},E=n("code",null,"贪心",-1),O=n("code",null,"哈希表",-1),T=n("code",null,"字符串",-1),j=n("code",null,"3+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),A={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/rearrange-string-k-distance-apart",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/rearrange-string-k-distance-apart",target:"_blank",rel:"noopener noreferrer"};function R(H,W){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return l(),r("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/greedy.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",f,[q,t(o)]),s(),n("a",y,[x,t(o)])]),L,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[S,z,C,n("td",I,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[T]),_:1}),s(),j]),N,n("td",A,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])])])])])}const K=i(k,[["render",R],["__file","2182.html.vue"]]);export{K as default};

import{_ as i,r as c,o as u,c as d,a as n,b as s,d as a,w as t,f as r,e as p}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_1081-不同字符的最小子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1081-不同字符的最小子序列","aria-hidden":"true"},"#"),s(" 1081. 不同字符的最小子序列")],-1),m=n("code",null,"栈",-1),_=n("code",null,"贪心",-1),b=n("code",null,"字符串",-1),v=n("code",null,"单调栈",-1),f={href:"https://leetcode.cn/problems/smallest-subsequence-of-distinct-characters",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/smallest-subsequence-of-distinct-characters",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, return <em>the</em> <em>lexicographically smallest</em> <em>subsequence</em><em>of</em> <code>s</code> <em>that contains all the distinct characters of</em> <code>s</code> <em>exactly once</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;bcabc&quot;</p><p>Output: &quot;abc&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;cbacdcbc&quot;</p><p>Output: &quot;acdb&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists of lowercase English letters.</li></ul>',8),w=n("strong",null,"Note:",-1),j=p(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，请你去除字符串中重复的字母，使得每个字母只出现一次。需保证 <strong>返回结果的字典序最小</strong>（要求不能打乱其他字符的相对位置）。</p><p>比如说输入字符串 <code>s = &quot;babc&quot;</code>，去重且符合相对位置的字符串有两个，分别是 <code>&quot;bac&quot;</code> 和 <code>&quot;abc&quot;</code>，但是我们的算法得返回 <code>&quot;abc&quot;</code>，因为它的字典序更小。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>哈希表 + 单调栈</p><p>题目有三个要求：去重、不能打乱其他字符顺序、字典序最小。</p><ol><li><strong>去重</strong>：可以通过 <strong>「使用哈希表存储字母出现次数」</strong> 的方式，将每个字母出现的次数统计起来，再遍历一遍，去除重复的字母。</li><li><strong>不能打乱其他字符顺序</strong>：按顺序遍历，将非重复的字母存储到答案数组或者栈中，最后再拼接起来，就能保证不打乱其他字符顺序。</li><li><strong>字典序最小</strong>：意味着字典序小的字母应该尽可能放在前面。 <ol><li>对于第 <code>i</code> 个字符 <code>s[i]</code> 而言，如果第 <code>0</code> ~ <code>i - 1</code> 之间的某个字符 <code>s[j]</code> 在 <code>s[i]</code> 之后不再出现了，那么 <code>s[j]</code> 必须放到 <code>s[i]</code> 之前。</li><li>而如果 <code>s[j]</code> 在之后还会出现，并且 <code>s[j]</code> 的字典序大于 <code>s[i]</code>，我们则可以先舍弃 <code>s[j]</code>，把 <code>s[i]</code> 尽可能的放到前面。后边再考虑使用 <code>s[j]</code> 所对应的字符。</li></ol></li></ol><p>要满足第 3 条需求，我们可以使用 <strong>「单调栈」</strong> 来解决。我们使用单调栈存储 <code>s[i]</code> 之前出现的非重复、并且字典序最小的字符序列。整个算法步骤如下：</p><ol><li>先遍历一遍字符串，用哈希表 <code>count</code> 统计出每个字母出现的次数。</li><li>然后使用单调递减栈保存当前字符之前出现的非重复、并且字典序最小的字符序列。</li><li>当遍历到 <code>s[i]</code> 时，如果 <code>s[i]</code> 没有在栈中出现过(使用哈希表 <code>inStack</code> 标记)： <ol><li>比较 <code>s[i]</code> 和栈顶元素的字典序。如果 <code>s[i]</code> 的字典序小于栈顶元素，并且栈顶元素之后的出现次数大于 <code>0</code>，则将栈顶元素弹出。</li><li>然后继续判断 <code>s[i]</code> 和栈顶元素，直到栈顶元素出现次数为 <code>0</code> 时停止弹出。此时将 <code>s[i]</code> 添加到单调栈中。</li></ol></li><li>从哈希表 <code>count</code> 中减去 <code>s[i]</code> 出现的次数，继续遍历。</li><li>最后将单调栈中的字符依次拼接为答案字符串，并返回。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicateLetters</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> inStack <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> val <span class="token operator">=</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> val <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>inStack<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> top <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>top <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> top <span class="token operator">&amp;&amp;</span> count<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>top<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				inStack<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>top<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				top <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			inStack<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,12),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"1673",-1),N=n("td",{style:{"text-align":"left"}},"找出最具竞争力的子序列",-1),S=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},V=n("code",null,"栈",-1),I=n("code",null,"贪心",-1),B=n("code",null,"数组",-1),M=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/find-the-most-competitive-subsequence",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/find-the-most-competitive-subsequence",target:"_blank",rel:"noopener noreferrer"};function G(z,A){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return u(),d("div",null,[h,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[g,a(o)]),s(),n("a",y,[x,a(o)])]),q,n("p",null,[w,s(" This question is the same as "),a(e,{to:"/problem/0316.html"},{default:t(()=>[s("316")]),_:1})]),j,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[L,N,S,n("td",C,[a(e,{to:"/tag/stack.html"},{default:t(()=>[V]),_:1}),s(),a(e,{to:"/tag/greedy.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[B]),_:1}),s(),M]),O,n("td",R,[n("a",T,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])])])])])}const H=i(k,[["render",G],["__file","1081.html.vue"]]);export{H as default};

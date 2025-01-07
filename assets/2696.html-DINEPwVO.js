import{_ as i,r as e,o as l,c as u,a as n,b as s,d as t,w as a,e as r}from"./app-WL8GPOUO.js";const d={},k=n("h1",{id:"_2696-删除子串后的字符串最小长度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2696-删除子串后的字符串最小长度","aria-hidden":"true"},"#"),s(" 2696. 删除子串后的字符串最小长度")],-1),m=n("code",null,"栈",-1),h=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/minimum-string-length-after-removing-substrings",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/minimum-string-length-after-removing-substrings",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting only of <strong>uppercase</strong> English letters.</p><p>You can apply some operations to this string where, in one operation, you can remove <strong>any</strong> occurrence of one of the substrings <code>&quot;AB&quot;</code> or <code>&quot;CD&quot;</code> from <code>s</code>.</p><p>Return <em>the <strong>minimum</strong> possible length of the resulting string that you can obtain</em>.</p><p><strong>Note</strong> that the string concatenates after removing the substring and could produce new <code>&quot;AB&quot;</code> or <code>&quot;CD&quot;</code> substrings.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ABFCACDB&quot;</p><p>Output: 2</p><p>Explanation: We can do the following operations:</p><ul><li>Remove the substring &quot; <em>AB</em> FCACDB&quot;, so s = &quot;FCACDB&quot;.</li><li>Remove the substring &quot;FCA <em>CD</em> B&quot;, so s = &quot;FCAB&quot;.</li><li>Remove the substring &quot;FC <em>AB</em> &quot;, so s = &quot;FC&quot;.</li></ul><p>So the resulting length of the string is 2.</p><p>It can be shown that it is the minimum length that we can obtain.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ACBBD&quot;</p><p>Output: 5</p><p>Explanation: We cannot do any operations on the string so the length remains the same.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists only of uppercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个仅由 <strong>大写</strong> 英文字符组成的字符串 <code>s</code> 。</p><p>你可以对此字符串执行一些操作，在每一步操作中，你可以从 <code>s</code> 中删除 任一个 <code>&quot;AB&quot;</code> 或 <code>&quot;CD&quot;</code> 子字符串。</p><p>通过执行操作，删除所有 <code>&quot;AB&quot;</code> 和 <code>&quot;CD&quot;</code> 子串，返回可获得的最终字符串的 最小 可能长度。</p><p>注意，删除子串后，重新连接出的字符串可能会产生新的 <code>&quot;AB&quot;</code> 或 <code>&quot;CD&quot;</code> 子串。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>模拟移除过程</strong>：<br> 对于每次操作，我们需要查找并移除 <code>&quot;AB&quot;</code> 或 <code>&quot;CD&quot;</code>，这样在移除这些特定子串后，字符串会自动合并，形成新的字符串。这个过程可能导致出现新的可移除子串。因此，我们需要一直重复操作，直到再也无法找到 <code>&quot;AB&quot;</code> 或 <code>&quot;CD&quot;</code>。</p></li><li><p><strong>使用栈优化操作</strong>：<br> 使用栈来模拟这个过程。具体做法是从左到右遍历字符串的每个字符，将字符压入栈中，每次压入后检查栈顶的两个字符是否形成 <code>&quot;AB&quot;</code> 或 <code>&quot;CD&quot;</code>。如果形成，就将这两个字符弹出栈，模拟移除它们。这样，栈中的字符就是剩余未能被移除的部分。</p></li><li><p><strong>最终结果</strong>：<br> 遍历完成后，栈中的元素就是无法继续移除的字符，栈的长度就是最后剩下字符串的最小长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。我们只需遍历字符串一次，对于每个字符，压栈和弹栈的操作都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，栈中会保留所有字符，因此需要 <code>O(n)</code> 的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查栈顶的两个字符是否形成 &quot;AB&quot; 或 &quot;CD&quot;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> lastTwo <span class="token operator">=</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token comment">// 如果发现 &quot;AB&quot; 或 &quot;CD&quot;，则弹出这两个字符</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>lastTwo <span class="token operator">===</span> <span class="token string">&#39;AB&#39;</span> <span class="token operator">||</span> lastTwo <span class="token operator">===</span> <span class="token string">&#39;CD&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除栈顶字符</span>
				stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 再移除栈顶字符</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> stack<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 栈中剩余的字符就是最终字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function C(B,w){const p=e("font"),o=e("RouterLink"),c=e("ExternalLinkIcon");return l(),u("div",null,[k,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/stack.html"},{default:a(()=>[m]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[h]),_:1}),s(),t(o,{to:"/tag/simulation.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,t(c)]),s(),n("a",q,[_,t(c)])]),f])}const A=i(d,[["render",C],["__file","2696.html.vue"]]);export{A as default};

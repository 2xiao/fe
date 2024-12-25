import{_ as i,r as a,o as u,c as l,a as n,b as s,d as t,w as e,e as r}from"./app--GvfAkAr.js";const d={},k=n("h1",{id:"_1021-删除最外层的括号",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1021-删除最外层的括号","aria-hidden":"true"},"#"),s(" 1021. 删除最外层的括号")],-1),h=n("code",null,"栈",-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/remove-outermost-parentheses",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/remove-outermost-parentheses",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A valid parentheses string is either empty <code>&quot;&quot;</code>, <code>&quot;(&quot; + A + &quot;)&quot;</code>, or <code>A + B</code>, where <code>A</code> and <code>B</code> are valid parentheses strings, and <code>+</code> represents string concatenation.</p><ul><li>For example, <code>&quot;&quot;</code>, <code>&quot;()&quot;</code>, <code>&quot;(())()&quot;</code>, and <code>&quot;(()(()))&quot;</code> are all valid parentheses strings.</li></ul><p>A valid parentheses string <code>s</code> is primitive if it is nonempty, and there does not exist a way to split it into <code>s = A + B</code>, with <code>A</code> and <code>B</code> nonempty valid parentheses strings.</p><p>Given a valid parentheses string <code>s</code>, consider its primitive decomposition: <code>s = P1 + P2 + ... + Pk</code>, where <code>Pi</code> are primitive valid parentheses strings.</p><p>Return <code>s</code> <em>after removing the outermost parentheses of every primitive string in the primitive decomposition of</em><code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;(()())(())&quot;</p><p>Output: &quot;()()()&quot;</p><p>Explanation:</p><p>The input string is &quot;(()())(())&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot;.</p><p>After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; = &quot;()()()&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;(()())(())(()(()))&quot;</p><p>Output: &quot;()()()()(())&quot;</p><p>Explanation:</p><p>The input string is &quot;(()())(())(()(()))&quot;, with primitive decomposition &quot;(()())&quot; + &quot;(())&quot; + &quot;(()(()))&quot;.</p><p>After removing outer parentheses of each part, this is &quot;()()&quot; + &quot;()&quot; + &quot;()(())&quot; = &quot;()()()()(())&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;()()&quot;</p><p>Output: &quot;&quot;</p><p>Explanation:</p><p>The input string is &quot;()()&quot;, with primitive decomposition &quot;()&quot; + &quot;()&quot;.</p><p>After removing outer parentheses of each part, this is &quot;&quot; + &quot;&quot; = &quot;&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> is either <code>&#39;(&#39;</code> or <code>&#39;)&#39;</code>.</li><li><code>s</code> is a valid parentheses string.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>题目要求去掉最外层的括号。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>用栈模拟，当遇到 <code>(</code> 时入栈，当遇到 <code>)</code> 时入栈，只有当栈内元素个数大于 <code>1</code> 时（去掉最外层的括号），才将当前字符累加到输出的字符串 <code>str</code> 上。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeOuterParentheses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> str <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				str <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				str <span class="token operator">+=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> str<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function f(w,x){const c=a("font"),o=a("RouterLink"),p=a("ExternalLinkIcon");return u(),l("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),s("  🔗 "),n("a",v,[q,t(p)]),s(),n("a",b,[g,t(p)])]),_])}const A=i(d,[["render",f],["__file","1021.html.vue"]]);export{A as default};

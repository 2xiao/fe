import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-Ob52y8QZ.js";const k={},m=n("h1",{id:"_44-通配符匹配",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_44-通配符匹配","aria-hidden":"true"},"#"),s(" 44. 通配符匹配")],-1),h=n("code",null,"贪心",-1),b=n("code",null,"递归",-1),_=n("code",null,"字符串",-1),v=n("code",null,"动态规划",-1),g={href:"https://leetcode.cn/problems/wildcard-matching",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/wildcard-matching",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an input string (<code>s</code>) and a pattern (<code>p</code>), implement wildcard pattern matching with support for <code>&#39;?&#39;</code> and <code>&#39;*&#39;</code> where:</p><ul><li><code>&#39;?&#39;</code> Matches any single character.</li><li><code>&#39;*&#39;</code> Matches any sequence of characters (including the empty sequence).</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aa&quot;, p = &quot;a&quot;</p><p>Output: false</p><p>Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aa&quot;, p = &quot;*&quot;</p><p>Output: true</p><p>Explanation: &#39;*&#39; matches any sequence.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;cb&quot;, p = &quot;?a&quot;</p><p>Output: false</p><p>Explanation: &#39;?&#39; matches &#39;c&#39;, but the second letter is &#39;a&#39;, which does not match &#39;b&#39;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= s.length, p.length &lt;= 2000</code></li><li><code>s</code> contains only lowercase English letters.</li><li><code>p</code> contains only lowercase English letters, <code>&#39;?&#39;</code> or <code>&#39;*&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个输入字符串 (<code>s</code>) 和一个模式 (<code>p</code>)，请实现通配符匹配，支持 <code>?</code> 和 <code>*</code>。</p><ul><li><code>?</code> 可以匹配任何单个字符。</li><li><code>*</code> 可以匹配任意字符串（包括空字符串）。</li></ul><p>匹配应该覆盖整个输入字符串（而不是部分匹配）。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用动态规划来解决，具体思路如下：</p><ol><li><p>定义状态：<code>dp[i][j]</code> 表示字符串 <code>s</code> 的前 <code>i</code> 个字符是否能够匹配模式 <code>p</code> 的前 <code>j</code> 个字符。</p></li><li><p>初始化状态：<code>dp[0][0]</code> 表示空字符串匹配空模式，为 <code>True</code>；<code>dp[i][0]</code> 表示空模式，不管字符串 <code>s</code> 有多长，都为 <code>False</code>。</p></li><li><p>状态转移方程：</p><ul><li><p>当 <code>p[j-1]</code> 是普通字符且当前字符匹配时，<code>dp[i][j] = dp[i-1][j-1]</code>，表示结果与之前状态相同。</p></li><li><p>当 <code>p[j-1]</code> 是 <code>&#39;*&#39;</code> 时，<code>dp[i][j]</code> 可以通过以下三种情况获得：</p><ul><li>匹配零个字符：<code>dp[i][j] = dp[i][j-1]</code></li><li>匹配一个字符：<code>dp[i][j] = dp[i-1][j-1]</code></li><li>匹配多个字符：<code>dp[i][j] = dp[i-1][j]</code></li></ul></li></ul></li><li><p>最终返回 <code>dp[m][n]</code>，其中 <code>m</code> 和 <code>n</code> 分别是字符串 <code>s</code> 和模式 <code>p</code> 的长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(m * n)</code>，其中 <code>m</code> 和 <code>n</code> 分别是字符串 <code>s</code> 和模式 <code>p</code> 的长度。</li><li><strong>空间复杂度</strong>： <code>O(m * n)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isMatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> p<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 空字符串和空模式匹配</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化 dp[0][j]，处理 p 中可能出现 &#39;*&#39; 的情况</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;?&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">||</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"10",-1),E=n("td",{style:{"text-align":"left"}},"正则表达式匹配",-1),C={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"递归",-1),N=n("code",null,"字符串",-1),O=n("code",null,"动态规划",-1),V={style:{"text-align":"left"}},B={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/regular-expression-matching",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/regular-expression-matching",target:"_blank",rel:"noopener noreferrer"};function A(H,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/recursion.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",g,[f,a(o)]),s(),n("a",y,[j,a(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",C,[a(e,{to:"/problem/0010.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[a(e,{to:"/tag/recursion.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[O]),_:1})]),n("td",V,[a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})]),n("td",B,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",T,[s("🔗"),a(o)])])])])])])}const G=l(k,[["render",A],["__file","0044.html.vue"]]);export{G as default};

import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app--GvfAkAr.js";const k={},m=n("h1",{id:"_10-正则表达式匹配",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-正则表达式匹配","aria-hidden":"true"},"#"),s(" 10. 正则表达式匹配")],-1),h=n("code",null,"递归",-1),b=n("code",null,"字符串",-1),v=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/regular-expression-matching",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/regular-expression-matching",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),j=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an input string <code>s</code> and a pattern <code>p</code>, implement regular expression matching with support for <code>&#39;.&#39;</code> and <code>&#39;*&#39;</code> where:</p><ul><li><code>&#39;.&#39;</code> Matches any single character.​​​​</li><li><code>&#39;*&#39;</code> Matches zero or more of the preceding element.</li></ul><p>The matching should cover the <strong>entire</strong> input string (not partial).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aa&quot;, p = &quot;a&quot;</p><p>Output: false</p><p>Explanation: &quot;a&quot; does not match the entire string &quot;aa&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;aa&quot;, p = &quot;a*&quot;</p><p>Output: true</p><p>Explanation: &#39;*&#39; means zero or more of the preceding element, &#39;a&#39;. Therefore, by repeating &#39;a&#39; once, it becomes &quot;aa&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;ab&quot;, p = &quot;.*&quot;</p><p>Output: true</p><p>Explanation: &quot;.*&quot; means &quot;zero or more (*) of any character (.)&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 20</code></li><li><code>1 &lt;= p.length &lt;= 20</code></li><li><code>s</code> contains only lowercase English letters.</li><li><code>p</code> contains only lowercase English letters, <code>&#39;.&#39;</code>, and <code>&#39;*&#39;</code>.</li><li>It is guaranteed for each appearance of the character <code>&#39;*&#39;</code>, there will be a previous valid character to match.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个字符规律 <code>p</code>，请你来实现一个支持 <code>&#39;.&#39;</code> 和 <code>&#39;*&#39;</code> 的正则表达式匹配。</p><ul><li><code>&#39;.&#39;</code> 匹配任意单个字符</li><li><code>&#39;*&#39;</code> 匹配零个或多个前面的那一个元素</li></ul><p>所谓匹配，是要涵盖 <strong>整个</strong> 字符串 <code>s</code> 的，而不是部分字符串。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用动态规划来解决正则表达式匹配问题，可以使用一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示字符串 <code>s</code> 的前 <code>i</code> 个字符和模式 <code>p</code> 的前 <code>j</code> 个字符是否匹配。</p><p>动态规划的递推公式如下：</p><ol><li>如果 <code>p[j]</code> 不是 <code>&#39;*&#39;</code>，且当前字符 <code>s[i]</code> 和 <code>p[j]</code> 匹配，则 <code>dp[i][j] = dp[i-1][j-1]</code>，表示当前字符是否匹配取决于前面的字符是否匹配。</li><li>如果 <code>p[j]</code> 是 <code>&#39;*&#39;</code>，则有两种情况： <ul><li><code>&#39;*&#39;</code> 匹配零个字符，即 <code>dp[i][j] = dp[i][j-2]</code>。</li><li><code>&#39;*&#39;</code> 匹配多个字符，即 <code>dp[i][j] = dp[i-1][j]</code>，前提是当前字符 <code>s[i]</code> 和 <code>p[j-1]</code> 匹配。</li></ul></li><li>初始条件为 <code>dp[0][0] = true</code>，表示空字符串和空模式匹配。</li><li>初始化动态规划表 <code>dp</code> 的第一行，即 <code>dp[0][j]</code>，表示空字符串与模式 <code>p</code> 的前 <code>j</code> 个字符的匹配情况，要注意考虑第 <code>j</code> 个字符是 <code>&#39;*&#39;</code> 的情况，。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">p</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isMatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> p</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">match</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> s<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> m <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> p<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 空字符串和空模式匹配</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化 dp[0][j]，处理 p 中可能出现 &#39;*&#39; 的情况</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">match</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&amp;&amp;</span> <span class="token function">match</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"44",-1),q=n("td",{style:{"text-align":"left"}},"通配符匹配",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"贪心",-1),L=n("code",null,"递归",-1),N=n("code",null,"字符串",-1),V=n("code",null,"1+",-1),z=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/wildcard-matching",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/wildcard-matching",target:"_blank",rel:"noopener noreferrer"};function T(A,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/recursion.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",_,[g,a(o)]),s(),n("a",f,[y,a(o)])]),j,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[a(e,{to:"/problem/0044.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/recursion.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[N]),_:1}),s(),V]),z,n("td",B,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",O,[s("🔗"),a(o)])])])])])])}const H=l(k,[["render",T],["__file","0010.html.vue"]]);export{H as default};

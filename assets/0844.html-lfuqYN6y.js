import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-mXo2sCT-.js";const k={},h={id:"_844-比较含退格的字符串",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_844-比较含退格的字符串","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0844.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"栈",-1),f=n("code",null,"双指针",-1),g=n("code",null,"字符串",-1),v=n("code",null,"模拟",-1),y={href:"https://leetcode.cn/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),E=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if they are equal when both are typed into empty text editors</em>. <code>&#39;#&#39;</code> means a backspace character.</p><p>Note that after backspacing an empty text, the text will continue empty.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ab#c&quot;, t = &quot;ad#c&quot;</p><p>Output: true</p><p>Explanation: Both s and t become &quot;ac&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ab##&quot;, t = &quot;c#d#&quot;</p><p>Output: true</p><p>Explanation: Both s and t become &quot;&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;a#c&quot;, t = &quot;b&quot;</p><p>Output: false</p><p>Explanation: s becomes &quot;c&quot; while t becomes &quot;b&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, t.length &lt;= 200</code></li><li><code>s</code> and <code>t</code> only contain lowercase letters and <code>&#39;#&#39;</code> characters.</li></ul><p><strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time and <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给 2 个字符串，如果遇到 <code>#</code> 号字符，就回退一个字符。问最终的 2 个字符串是否完全一致。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以用栈的思想来模拟：</p><ul><li>遇到 <code>#</code> 字符就回退一个字符，注意 JS 中删除字符串的最后一个字符可以用 <code>str.slice(0, -1)</code>；</li><li>不是 <code>#</code> 号就入栈一个字符；</li><li>最后比较 2 个字符串即可；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">backspaceCompare</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token function">backspace</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token function">backspace</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">backspace</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>item <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> res <span class="token operator">=</span> res<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">else</span> res <span class="token operator">+=</span> item<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),N=n("td",{style:{"text-align":"center"}},"1598",-1),B={style:{"text-align":"left"}},I={href:"https://leetcode.com/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},L=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},V=n("code",null,"栈",-1),j=n("code",null,"数组",-1),R=n("code",null,"字符串",-1),S={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2390",-1),G={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},z=n("code",null,"栈",-1),A=n("code",null,"字符串",-1),D=n("code",null,"模拟",-1),H={style:{"text-align":"left"}};function K(P,Q){const o=l("ExternalLinkIcon"),c=l("font"),a=l("RouterLink");return r(),i("div",null,[n("h1",h,[_,t(),n("a",m,[t("844. 比较含退格的字符串"),s(o)])]),n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",q,[w,s(o)])]),E,d(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[N,n("td",B,[n("a",I,[t("文件夹操作日志搜集器"),s(o)])]),L,n("td",O,[s(a,{to:"/tag/stack.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[j]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[R]),_:1})]),n("td",S,[s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[F,n("td",G,[n("a",J,[t("从字符串中移除星号"),s(o)])]),M,n("td",T,[s(a,{to:"/tag/stack.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[D]),_:1})]),n("td",H,[s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const W=p(k,[["render",K],["__file","0844.html.vue"]]);export{W as default};

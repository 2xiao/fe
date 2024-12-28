import{_ as p,r as c,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_844-比较含退格的字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_844-比较含退格的字符串","aria-hidden":"true"},"#"),t(" 844. 比较含退格的字符串")],-1),_=n("code",null,"栈",-1),m=n("code",null,"双指针",-1),b=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>s</code> and <code>t</code>, return <code>true</code> <em>if they are equal when both are typed into empty text editors</em>. <code>&#39;#&#39;</code> means a backspace character.</p><p>Note that after backspacing an empty text, the text will continue empty.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;ab#c&quot;, t = &quot;ad#c&quot;</p><p>Output: true</p><p>Explanation: Both s and t become &quot;ac&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;ab##&quot;, t = &quot;c#d#&quot;</p><p>Output: true</p><p>Explanation: Both s and t become &quot;&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;a#c&quot;, t = &quot;b&quot;</p><p>Output: false</p><p>Explanation: s becomes &quot;c&quot; while t becomes &quot;b&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length, t.length &lt;= 200</code></li><li><code>s</code> and <code>t</code> only contain lowercase letters and <code>&#39;#&#39;</code> characters.</li></ul><p><strong>Follow up:</strong> Can you solve it in <code>O(n)</code> time and <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给 2 个字符串，如果遇到 <code>#</code> 号字符，就回退一个字符。问最终的 2 个字符串是否完全一致。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这一题可以用栈的思想来模拟：</p><ul><li>遇到 <code>#</code> 字符就回退一个字符，注意 JS 中删除字符串的最后一个字符可以用 <code>str.slice(0, -1)</code>；</li><li>不是 <code>#</code> 号就入栈一个字符；</li><li>最后比较 2 个字符串即可；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1598",-1),C=n("td",{style:{"text-align":"left"}},"文件夹操作日志搜集器",-1),N={style:{"text-align":"center"}},B={style:{"text-align":"left"}},I=n("code",null,"栈",-1),L=n("code",null,"数组",-1),O=n("code",null,"字符串",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2390",-1),G=n("td",{style:{"text-align":"left"}},"从字符串中移除星号",-1),J={style:{"text-align":"center"}},T={style:{"text-align":"left"}},z=n("code",null,"栈",-1),A=n("code",null,"字符串",-1),D=n("code",null,"模拟",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/removing-stars-from-a-string",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",f,[v,e(o)]),t(),n("a",y,[x,e(o)])]),q,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,C,n("td",N,[e(a,{to:"/problem/1598.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",B,[e(a,{to:"/tag/stack.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[O]),_:1})]),V,n("td",j,[n("a",R,[t("🀄️"),e(o)]),t(),n("a",S,[t("🔗"),e(o)])])]),n("tr",null,[F,G,n("td",J,[e(a,{to:"/problem/2390.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",T,[e(a,{to:"/tag/stack.html"},{default:s(()=>[z]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[D]),_:1})]),H,n("td",K,[n("a",M,[t("🀄️"),e(o)]),t(),n("a",P,[t("🔗"),e(o)])])])])])])}const Y=p(k,[["render",Q],["__file","0844.html.vue"]]);export{Y as default};

import{_ as i,r as p,o as r,c as u,a as n,b as s,d as a,w as t,f as d,e as c}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_557-反转字符串中的单词-iii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_557-反转字符串中的单词-iii","aria-hidden":"true"},"#"),s(" 557. 反转字符串中的单词 III")],-1),_=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;Let&#39;s take LeetCode contest&quot;</p><p>Output: &quot;s&#39;teL ekat edoCteeL tsetnoc&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;Mr Ding&quot;</p><p>Output: &quot;rM gniD&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 5 * 10^4</code></li><li><code>s</code> contains printable <strong>ASCII</strong> characters.</li><li><code>s</code> does not contain any leading or trailing spaces.</li><li>There is <strong>at least one</strong> word in <code>s</code>.</li><li>All the words in <code>s</code> are separated by a single space.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> ，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',11),y=n("li",null,"先将字符串按空格分割为子串数组；",-1),w=n("li",null,"再将反转后的单词连接起来；",-1),q=c(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，反转字符串需要遍历一半的字符。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于保存字符串被 <code>split</code> 后的数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> s
		<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reverse</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">reverse</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> arr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token punctuation">[</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>arr<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">]</span><span class="token punctuation">,</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"541",-1),C=n("td",{style:{"text-align":"left"}},"反转字符串 II",-1),E={style:{"text-align":"center"}},j={style:{"text-align":"left"}},N=n("code",null,"双指针",-1),V=n("code",null,"字符串",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/reverse-string-ii",target:"_blank",rel:"noopener noreferrer"};function M(R,S){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),u("div",null,[h,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[v,a(o)]),s(),n("a",b,[f,a(o)])]),x,n("ol",null,[y,n("li",null,[s("依次反转每一个子串，反转子串的方法同 "),a(e,{to:"/problem/0344.html"},{default:t(()=>[s("第 344 题")]),_:1}),s("；")]),w]),q,d(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[L,C,n("td",E,[a(e,{to:"/problem/0541.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",j,[a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[V]),_:1})]),O,n("td",B,[n("a",A,[s("🀄️"),a(o)]),s(),n("a",D,[s("🔗"),a(o)])])])])])])}const G=i(k,[["render",M],["__file","0557.html.vue"]]);export{G as default};

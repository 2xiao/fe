import{_ as l,r as t,o as r,c as i,a as n,b as s,d as a,w as o,e as d}from"./app-MkGfDfkx.js";const u={},h=n("h1",{id:"_58-最后一个单词的长度",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_58-最后一个单词的长度","aria-hidden":"true"},"#"),s(" 58. 最后一个单词的长度")],-1),k=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/length-of-last-word",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/length-of-last-word",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),b=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> consisting of words and spaces, return <em>the length of the <strong>last</strong> word in the string.</em></p><p>A <strong>word</strong> is a maximal substring consisting of non-space characters only.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;Hello World&quot;</p><p>Output: 5</p><p>Explanation: The last word is &quot;World&quot; with length 5.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot; fly me to the moon &quot;</p><p>Output: 4</p><p>Explanation: The last word is &quot;moon&quot; with length 4.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;luffy is still joyboy&quot;</p><p>Output: 6</p><p>Explanation: The last word is &quot;joyboy&quot; with length 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s</code> consists of only English letters and spaces <code>&#39; &#39;</code>.</li><li>There will be at least one word in <code>s</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串  <code>s</code>，由若干单词组成，单词前后用一些空格字符隔开。返回字符串中最后一个单词的长度。<strong>单词</strong>  是指仅由字母组成、不包含任何空格字符的最大子字符串。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>先 <code>trim</code> 过滤掉尾部的空格，再用最后一个字符的下标，减去最后一个空格下标，即为单词的长度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">lengthOfLastWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> s<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function v(x,w){const p=t("font"),c=t("RouterLink"),e=t("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:o(()=>[k]),_:1}),s("  🔗 "),n("a",m,[g,a(e)]),s(),n("a",_,[f,a(e)])]),b])}const y=l(u,[["render",v],["__file","0058.html.vue"]]);export{y as default};

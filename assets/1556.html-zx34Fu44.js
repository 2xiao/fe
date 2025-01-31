import{_ as l,r as o,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_1556-千位分隔数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1556-千位分隔数","aria-hidden":"true"},"#"),s(" 1556. 千位分隔数")],-1),h=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/thousand-separator",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/thousand-separator",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, add a dot (&quot;.&quot;) as the thousands separator and return it in string format.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 987</p><p>Output: &quot;987&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1234</p><p>Output: &quot;1.234&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 231 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code>，请你每隔三位添加点（即 &quot;.&quot; 符号）作为千位分隔符，并将结果以字符串格式返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 987</p><p><strong>输出：</strong> &quot;987&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 1234</p><p><strong>输出：</strong> &quot;1.234&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 123456789</p><p><strong>输出：</strong> &quot;123.456.789&quot;</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong> &quot;0&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt; 2^31</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>将数字 <code>n</code> 转换为字符串格式，方便进行字符串操作。</li><li>初始化指针 <code>p</code>，指向字符串的最后一个字符位置（<code>n.length - 1</code>）。</li><li>使用一个 <code>while</code> 循环，当指针 <code>p</code> 超过 2 时，每次切片字符串并插入 <code>.</code>： <ul><li><code>n.slice(0, p - 2)</code> 提取从起始位置到 <code>p - 3</code> 的部分。</li><li><code>n.slice(p - 2)</code> 提取从 <code>p - 2</code> 开始的剩余部分。</li><li>拼接这两个部分，中间插入一个 <code>.</code>。</li></ul></li><li>每次循环后，将 <code>p</code> 的位置减去 3，表示移动到下一个分隔符插入点。</li><li>最后返回完整的字符串。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>n</code> 的位数，循环过程中每次减少 3 位，总共需要 <code>O((length of n) / 3)</code> 次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，在原字符串基础上操作，未使用额外的存储结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">thousandSeparator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	n <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> n<span class="token punctuation">;</span>
	<span class="token keyword">let</span> p <span class="token operator">=</span> n<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>p <span class="token operator">&gt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		n <span class="token operator">=</span> n<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> p <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;.&#39;</span> <span class="token operator">+</span> n<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>p <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		p <span class="token operator">-=</span> <span class="token number">3</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function f(q,x){const p=o("font"),c=o("RouterLink"),e=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[m,a(e)]),s(),n("a",b,[_,a(e)])]),v])}const y=l(d,[["render",f],["__file","1556.html.vue"]]);export{y as default};

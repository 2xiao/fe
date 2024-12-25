import{_ as p,r as t,o as l,c as i,a as n,b as e,d as s,w as o,e as r}from"./app--GvfAkAr.js";const u={},h=n("h1",{id:"_1108-ip-地址无效化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1108-ip-地址无效化","aria-hidden":"true"},"#"),e(" 1108. IP 地址无效化")],-1),k=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/defanging-an-ip-address",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/defanging-an-ip-address",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),b=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a valid (IPv4) IP <code>address</code>, return a defanged version of that IP address.</p><p>A <em>defanged IP address</em> replaces every period <code>&quot;.&quot;</code> with <code>&quot;[.]&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: address = &quot;1.1.1.1&quot;</p><p>Output: &quot;1[.]1[.]1[.]1&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: address = &quot;255.100.50.0&quot;</p><p>Output: &quot;255[.]100[.]50[.]0&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The given <code>address</code> is a valid IPv4 address.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',10),f={href:"https://baike.baidu.com/item/IPv4",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"address",-1),x=r(`<p>所谓无效化 IP 地址，其实就是用 <code>&quot;[.]&quot;</code> 代替了每个 <code>&quot;.&quot;</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> address = &quot;1.1.1.1&quot;</p><p><strong>输出：</strong> &quot;1[.]1[.]1[.]1&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> address = &quot;255.100.50.0&quot;</p><p><strong>输出：</strong> &quot;255[.]100[.]50[.]0&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li>给出的 <code>address</code> 是一个有效的 IPv4 地址</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于这个问题，使用 JavaScript 的 <code>replaceAll()</code> 方法或正则表达式替换是一种更优化的方式。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串长度，<code>replaceAll()</code> 方法会遍历整个字符串，每个字符检查是否匹配目标模式。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，替换操作直接返回新字符串，仅新字符串所需的空间，没有额外的数组创建。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">address</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">defangIPaddr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">address</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> address<span class="token punctuation">.</span><span class="token function">replaceAll</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;[.]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function I(P,w){const c=t("font"),d=t("RouterLink"),a=t("ExternalLinkIcon");return l(),i("div",null,[h,n("p",null,[e("🟢 "),s(c,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(d,{to:"/tag/string.html"},{default:o(()=>[k]),_:1}),e("  🔗 "),n("a",_,[g,s(a)]),e(),n("a",m,[v,s(a)])]),b,n("p",null,[e("给你一个有效的 "),n("a",f,[e("IPv4"),s(a)]),e(" 地址 "),q,e("，返回这个 IP 地址的无效化版本。")]),x])}const E=p(u,[["render",I],["__file","1108.html.vue"]]);export{E as default};

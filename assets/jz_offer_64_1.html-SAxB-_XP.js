import{_ as p,r as o,o as l,c as d,a as n,b as a,d as e,w as s,e as i}from"./app--GvfAkAr.js";const u={},h=n("h1",{id:"_64-求1-2-n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_64-求1-2-n","aria-hidden":"true"},"#"),a(" 64. 求1+2+…+n")],-1),k=n("code",null,"位运算",-1),m=n("code",null,"递归",-1),_=n("code",null,"脑筋急转弯",-1),g={href:"https://leetcode.cn/problems/qiu-12n-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请设计一个机械累加器，计算从 1、2... 一直累加到目标数值 <code>target</code> 的总和。注意这是一个只能进行加法操作的程序，不具备乘除、if-else、switch-case、for 循环、while 循环，及条件判断语句等高级功能。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> target = 5</p><p>**输出: **15</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> target = 7</p><p>**输出: **28</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= target &lt;= 10000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于不允许使用循环和条件判断，可以使用递归和位运算来计算从 <code>1</code> 加到目标值 <code>target</code> 的总和，具体的思路如下：</p><ul><li>使用逻辑与（<code>&amp;</code>）和逻辑或（<code>||</code>）来处理递归。</li><li>当 <code>target</code> 为 <code>0</code> 时，逻辑或会返回 <code>0</code>，从而停止递归。</li></ul><p>这种方法使用了递归来替代循环，位运算来代替条件判断，避免了不允许的操作。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n = target</code>，由于使用递归，每次调用都会减少 <code>target</code> 的值，直到达到 0，因此，总共有 <code>target</code> 次递归调用。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，递归调用会在调用栈上占用空间，最坏情况下栈的深度为 <code>target</code>，因此空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mechanicalAccumulator</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>target <span class="token operator">&amp;&amp;</span> target <span class="token operator">+</span> <span class="token function">mechanicalAccumulator</span><span class="token punctuation">(</span>target <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function v(x,w){const c=o("font"),t=o("RouterLink"),r=o("ExternalLinkIcon");return l(),d("div",null,[h,n("p",null,[a("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[a("Medium")]),_:1}),a("  🔖  "),e(t,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),a(),e(t,{to:"/tag/recursion.html"},{default:s(()=>[m]),_:1}),a(),e(t,{to:"/tag/brainteaser.html"},{default:s(()=>[_]),_:1}),a("  🔗 "),n("a",g,[f,e(r)])]),b])}const q=p(u,[["render",v],["__file","jz_offer_64_1.html.vue"]]);export{q as default};

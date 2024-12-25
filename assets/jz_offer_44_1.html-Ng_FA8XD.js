import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app--GvfAkAr.js";const d={},k=n("h1",{id:"_44-数字序列中某一位的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_44-数字序列中某一位的数字","aria-hidden":"true"},"#"),s(" 44. 数字序列中某一位的数字")],-1),m=n("code",null,"数学",-1),v=n("code",null,"二分查找",-1),h={href:"https://leetcode.cn/problems/shu-zi-xu-lie-zhong-mou-yi-wei-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某班级学号记录系统发生错乱，原整数学号序列 <code>[0,1,2,3,4,...]</code> 分隔符丢失后变为 <code>01234...</code> 的字符序列。请实现一个函数返回该字符序列中的第 <code>k</code> 位数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> k = 5</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> k = 12</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 第 12 位数字在序列 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... 里是 1 ，它是 11 的一部分。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= k &lt; 2^31</code></li></ul>',8),g={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>确定数字的位数</strong>：</p><ul><li>计算在每个数字位数范围（1 ~ 9: 1 位、10 ~ 99: 2 位、100 ~ 999: 3 位等）中包含的数字总数，直到找到 <code>k</code> 位所在的范围。</li><li>对于 <code>m</code> 位数字，范围内的数字总个数为 <code>9 * 10^(m-1)</code>，且它们的总位数为 <code>m * 9 * 10^(m-1)</code>。</li></ul></li><li><p><strong>找到目标数字</strong>：</p><ul><li>确定 <code>k</code> 所在的具体数字范围后，计算出是哪个数字以及在这个数字中的具体位置。</li><li>通过计算偏移量确定要返回的数字。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_10 k)</code>，通过不断增加位数，最多会进行对数级别的计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间，存储了少量变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKthNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> digit <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数的数字总数</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 当前位数的起始数字</span>

	<span class="token comment">// 找到 k 所在的位数范围</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;</span> count <span class="token operator">*</span> digit<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		k <span class="token operator">-=</span> count <span class="token operator">*</span> digit<span class="token punctuation">;</span>
		digit<span class="token operator">++</span><span class="token punctuation">;</span>
		count <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		start <span class="token operator">*=</span> <span class="token number">10</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 找到 k 所在的具体数字</span>
	<span class="token keyword">const</span> num <span class="token operator">=</span> start <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> digit<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token punctuation">(</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> digit<span class="token punctuation">;</span>

	<span class="token comment">// 转换数字为字符串以获取具体的第 k 位数字</span>
	<span class="token keyword">return</span> <span class="token function">Number</span><span class="token punctuation">(</span><span class="token function">String</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function x(y,N){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[b,a(l)])]),_,n("div",g,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0400.html"},{default:t(()=>[s("第 400 题")]),_:1}),s(" 相同。")])]),w])}const z=i(d,[["render",x],["__file","jz_offer_44_1.html.vue"]]);export{z as default};

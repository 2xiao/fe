import{_ as l,r as p,o as i,c,a as n,b as t,d as s,w as e,f as d,e as u}from"./app--GvfAkAr.js";const m={},h=n("h1",{id:"_414-第三大的数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_414-第三大的数","aria-hidden":"true"},"#"),t(" 414. 第三大的数")],-1),k=n("code",null,"数组",-1),_=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/third-maximum-number",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/third-maximum-number",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the<strong>third distinct maximum</strong> number in this array. If the third maximum does not exist, return the <strong>maximum</strong> number</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,1]</p><p>Output: 1</p><p>Explanation:</p><p>The first distinct maximum is 3.</p><p>The second distinct maximum is 2.</p><p>The third distinct maximum is 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2]</p><p>Output: 2</p><p>Explanation:</p><p>The first distinct maximum is 2.</p><p>The second distinct maximum is 1.</p><p>The third distinct maximum does not exist, so the maximum (2) is returned instead.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,2,3,1]</p><p>Output: 1</p><p>Explanation:</p><p>The first distinct maximum is 3.</p><p>The second distinct maximum is 2 (both 2&#39;s are counted together since they have the same value).</p><p>The third distinct maximum is 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Can you find an <code>O(n)</code> solution?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个非空数组，返回此数组中 <strong>第三大的数</strong> 。如果不存在，则返回数组中最大的数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong>[3, 2, 1]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 第三大的数是 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong>[1, 2]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 第三大的数不存在, 所以返回最大的数 2 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong>[2, 2, 3, 1]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 注意，要求返回第三大的数，是指在所有不同数字中排第三大的数。</p><p>此例中存在两个值为 2 的数，它们都排第二。在所有不同数字中排第三大的数为 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li></ul><p><strong>进阶：</strong> 你能设计一个时间复杂度 <code>O(n)</code> 的解决方案吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>最直接的思路是对数组进行去重和排序，再根据数组长度返回第三大数或最大值。</p><p>但是这种解法的时间复杂度为 <code>O(n logn)</code>，要对数组排序；空间复杂度是 <code>O(n)</code>，要存储去重后的数组。</p><p>更优化的思路是，不对整个数组排序，而是维护前三个最大值，遍历一遍数组即可找到第三大数。</p><ul><li>使用变量 <code>first</code>、<code>second</code> 和 <code>third</code> 来保存前三大的数。</li><li>遍历数组时，动态更新前三大数。</li><li>如果 <code>third</code> 存在，就返回第三大数 <code>third</code>；</li><li>如果 <code>third</code> 不存在，就返回数组中的最大数 <code>first</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，线性遍历一次数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数个变量存储前三大数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">thirdMax</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> first <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span>
		second <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span>
		third <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> first <span class="token operator">||</span> num <span class="token operator">===</span> second <span class="token operator">||</span> num <span class="token operator">===</span> third<span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> first<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			third <span class="token operator">=</span> second<span class="token punctuation">;</span>
			second <span class="token operator">=</span> first<span class="token punctuation">;</span>
			first <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> second<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			third <span class="token operator">=</span> second<span class="token punctuation">;</span>
			second <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> third<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			third <span class="token operator">=</span> num<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> third <span class="token operator">===</span> <span class="token operator">-</span><span class="token number">Infinity</span> <span class="token operator">?</span> first <span class="token operator">:</span> third<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"215",-1),q=n("td",{style:{"text-align":"left"}},"数组中的第K个最大元素",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},T=n("code",null,"数组",-1),O=n("code",null,"分治",-1),C=n("code",null,"快速选择",-1),L=n("code",null,"2+",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2733",-1),F=n("td",{style:{"text-align":"left"}},"既不是最小值也不是最大值",-1),G=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"排序",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/neither-minimum-nor-maximum",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/neither-minimum-nor-maximum",target:"_blank",rel:"noopener noreferrer"};function J(P,Q){const r=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),c("div",null,[h,n("p",null,[t("🟢 "),s(r,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[_]),_:1}),t("  🔗 "),n("a",g,[b,s(o)]),t(),n("a",f,[v,s(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[s(a,{to:"/problem/0215.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/tag/quickselect.html"},{default:e(()=>[C]),_:1}),t(),L]),N,n("td",V,[n("a",j,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[R,F,G,n("td",K,[s(a,{to:"/tag/array.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[S]),_:1})]),z,n("td",A,[n("a",D,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])])])])])}const W=l(m,[["render",J],["__file","0414.html.vue"]]);export{W as default};

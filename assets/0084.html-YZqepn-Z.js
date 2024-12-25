import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app--GvfAkAr.js";const h={},k=n("h1",{id:"_84-柱状图中最大的矩形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_84-柱状图中最大的矩形","aria-hidden":"true"},"#"),s(" 84. 柱状图中最大的矩形")],-1),g=n("code",null,"栈",-1),m=n("code",null,"数组",-1),_=n("code",null,"单调栈",-1),b={href:"https://leetcode.cn/problems/largest-rectangle-in-histogram",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/largest-rectangle-in-histogram",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>heights</code> representing the histogram&#39;s bar height where the width of each bar is <code>1</code>, return <em>the area of the largest rectangle in the histogram</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: heights = [2,1,5,6,2,3]</p><p>Output: 10</p><p>Explanation: The above is a histogram where width of each bar is 1.</p><p>The largest rectangle is shown in the red area, which has an area = 10 units.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: heights = [2,4]</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= heights.length &lt;= 10^5</code></li><li><code>0 &lt;= heights[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <em>n</em> 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。</p><p>求在该柱状图中，能够勾勒出来的矩形的最大面积。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/histogram.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> heights = [2,1,5,6,2,3]</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong> 最大的矩形为图中红色区域，面积为 10</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/histogram-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> heights = [2,4]</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= heights.length &lt;=10^5</code></li><li><code>0 &lt;= heights[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>单调栈</strong>来维护一个递增的柱形高度序列，从而能够快速找到每根柱子左右两边的边界，计算出它能形成的最大矩形面积。</p><ol><li>遍历每个柱形</li></ol><p>从左到右遍历柱形，如果当前柱子的高度比栈顶柱子的高度大，则继续向右扩展。否则，弹出栈顶的柱子并计算它所能形成的矩形面积。</p><ol start="2"><li>计算面积</li></ol><p>每当遇到一个比栈顶元素高度小的柱子时，将栈顶柱子弹出，将其视为当前能够形成矩形的高度，并使用栈中的前一个柱子的索引来确定矩形的宽度范围。根据该宽度和高度来计算面积。</p><ol start="3"><li>结束时清空栈</li></ol><p>当遍历完成后，可能栈中还有未处理的柱子。这时将栈中的柱子逐个弹出，计算面积，直到栈为空。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是柱子的数量。每个柱子最多会被压入和弹出栈一次，因此时间复杂度是线性的。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用一个栈来存储柱子的索引，最坏情况下，栈的大小可能是 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">heights</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestRectangleArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 用于存储柱子的索引</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 添加一个高度为0的柱子，用来处理剩余的栈元素</span>
	heights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 矩形高度就是当前柱子的高度</span>
			<span class="token keyword">const</span> h <span class="token operator">=</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token comment">// 矩形宽度</span>
			<span class="token keyword">const</span> w <span class="token operator">=</span> stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> i <span class="token operator">:</span> i <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

			<span class="token comment">// 更新最大矩形面积</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> w <span class="token operator">*</span> h<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将当前柱子的索引存入栈中</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"85",-1),j=n("td",{style:{"text-align":"left"}},"最大矩形",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"栈",-1),N=n("code",null,"数组",-1),O=n("code",null,"动态规划",-1),V=n("code",null,"2+",-1),z=n("td",{style:{"text-align":"center"}},"🔴",-1),I={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"1793",-1),A=n("td",{style:{"text-align":"left"}},"好子数组的最大分数",-1),G=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},M=n("code",null,"栈",-1),S=n("code",null,"数组",-1),D=n("code",null,"双指针",-1),F=n("code",null,"2+",-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/maximum-score-of-a-good-subarray",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/maximum-score-of-a-good-subarray",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🔴 "),t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/monotonic-stack.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",v,[x,t(o)])]),y,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,j,n("td",E,[t(e,{to:"/problem/0085.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",C,[t(e,{to:"/tag/stack.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[O]),_:1}),s(),V]),z,n("td",I,[n("a",B,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[T,A,G,n("td",H,[t(e,{to:"/tag/stack.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[D]),_:1}),s(),F]),J,n("td",K,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])])])])])}const Z=c(h,[["render",U],["__file","0084.html.vue"]]);export{Z as default};

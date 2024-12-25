import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app--GvfAkAr.js";const k={},m=n("h1",{id:"_85-最大矩形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_85-最大矩形","aria-hidden":"true"},"#"),s(" 85. 最大矩形")],-1),h=n("code",null,"栈",-1),v=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),b=n("code",null,"矩阵",-1),_=n("code",null,"单调栈",-1),q={href:"https://leetcode.cn/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximal-rectangle",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>rows x cols</code> binary <code>matrix</code> filled with <code>0</code>&#39;s and <code>1</code>&#39;s, find the largest rectangle containing only <code>1</code>&#39;s and return <em>its area</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/maximal.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;],[&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;]]</p><p>Output: 6</p><p>Explanation: The maximal rectangle is shown in the above picture.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[&quot;0&quot;]]</p><p>Output: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: matrix = [[&quot;1&quot;]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>rows == matrix.length</code></li><li><code>cols == matrix[i].length</code></li><li><code>1 &lt;= row, cols &lt;= 200</code></li><li><code>matrix[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个由 <code>0</code> 和 <code>1</code> 组成的矩阵 <code>matrix</code> ，找出只包含 <code>1</code> 的最大矩形，并返回其面积。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>检查矩阵是否为空。</p></li><li><p>初始化一个数组 <code>heights</code>，用于存储当前行的高度。</p></li><li><p>将每一行视为基于上方连续 <code>1</code> 的高度。如果当前元素是 <code>1</code>，则其高度等于当前行的 <code>1</code> 的数量；如果是 <code>0</code>，则高度为 <code>0</code>。</p><ul><li>例如，给定矩阵：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;, &quot;0&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;, &quot;1&quot;],
  [&quot;1&quot;, &quot;0&quot;, &quot;0&quot;, &quot;1&quot;, &quot;0&quot;]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>对应的高度矩阵为：<div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[
  [1, 0, 1, 0, 0],
  [2, 0, 2, 1, 1],
  [3, 1, 3, 2, 2],
  [4, 0, 0, 3, 0]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>遍历每一行，更新 <code>heights</code> 数组。</p></li><li><p>对每一行调用 <code>largestRectangleArea</code> 函数计算最大矩形面积。</p><ul><li>对于每一行的高度数组，可以使用单调栈来计算最大矩形面积。</li><li>使用栈来维护高度的索引，确保栈中的高度是单调递增的。遍历高度数组，如果当前高度小于栈顶元素，计算以栈顶高度为最小高度的矩形面积，并更新最大面积。</li><li>通过遍历高度数组，计算以每个高度为最小高度的矩形面积。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是矩阵的行数，<code>n</code> 是列数。每行的最大矩形计算是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储高度数组和栈。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maximalRectangle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>matrix<span class="token punctuation">.</span>length <span class="token operator">||</span> <span class="token operator">!</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> heights <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 更新当前行的高度</span>
			heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;1&#39;</span> <span class="token operator">?</span> heights<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> <span class="token function">largestRectangleArea</span><span class="token punctuation">(</span>heights<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">largestRectangleArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxArea <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	heights<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 在数组末尾添加0以清空栈</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> h <span class="token operator">=</span> heights<span class="token punctuation">[</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> w <span class="token operator">=</span> stack<span class="token punctuation">.</span>length <span class="token operator">?</span> i <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">:</span> i<span class="token punctuation">;</span>
			maxArea <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxArea<span class="token punctuation">,</span> h <span class="token operator">*</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxArea<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"84",-1),E=n("td",{style:{"text-align":"left"}},"柱状图中最大的矩形",-1),O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},C=n("code",null,"栈",-1),I=n("code",null,"数组",-1),L=n("code",null,"单调栈",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/largest-rectangle-in-histogram",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/largest-rectangle-in-histogram",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"221",-1),z=n("td",{style:{"text-align":"left"}},"最大正方形",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},S=n("code",null,"数组",-1),D=n("code",null,"动态规划",-1),F=n("code",null,"矩阵",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/maximal-square",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/maximal-square",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",q,[x,a(o)]),s(),n("a",f,[y,a(o)])]),w,r(" prettier-ignore "),n("table",null,[A,n("tbody",null,[n("tr",null,[j,E,n("td",O,[a(e,{to:"/problem/0084.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",R,[a(e,{to:"/tag/stack.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[L]),_:1})]),N,n("td",V,[n("a",B,[s("🀄️"),a(o)]),s(),n("a",M,[s("🔗"),a(o)])])]),n("tr",null,[T,z,n("td",G,[a(e,{to:"/problem/0221.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",H,[a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[F]),_:1})]),J,n("td",K,[n("a",P,[s("🀄️"),a(o)]),s(),n("a",Q,[s("🔗"),a(o)])])])])])])}const Z=l(k,[["render",U],["__file","0085.html.vue"]]);export{Z as default};

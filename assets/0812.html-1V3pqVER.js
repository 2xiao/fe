import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fEpXkbSw.js";const k="/leetcode-js/assets/812-Yagtyt3i.png",m={},g=n("h1",{id:"_812-最大三角形面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_812-最大三角形面积","aria-hidden":"true"},"#"),s(" 812. 最大三角形面积")],-1),h=n("code",null,"几何",-1),b=n("code",null,"数组",-1),v=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/largest-triangle-area",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/largest-triangle-area",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of points on the <strong>X-Y</strong> plane <code>points</code> where <code>points[i] = [xi, yi]</code>, return <em>the area of the largest triangle that can be formed by any three different points</em>. Answers within <code>10^-5</code> of the actual answer will be accepted.</p><p><strong>Example 1:</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: points = [[0,0],[0,1],[1,0],[0,2],[2,0]]</p><p>Output: 2.00000</p><p>Explanation: The five points are shown in the above figure. The red triangle is the largest.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: points = [[1,0],[0,0],[0,1]]</p><p>Output: 0.50000</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= points.length &lt;= 50</code></li><li><code>-50 &lt;= xi, yi &lt;= 50</code></li><li>All the given points are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <strong>X-Y</strong> 平面上的点组成的数组 <code>points</code> ，其中 <code>points[i] = [xi, yi]</code> 。从其中取任意三个不同的点组成三角形，返回能组成的最大三角形的面积。与真实值误差在 <code>10^-5</code> 内的答案将会视为正确答案**。**</p><p><strong>示例 1：</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/04/04/1027.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> points = [[0,0],[0,1],[1,0],[0,2],[2,0]]</p><p><strong>输出：</strong> 2.00000</p><p><strong>解释：</strong> 输入中的 5 个点如上图所示，红色的三角形面积最大。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> points = [[1,0],[0,0],[0,1]]</p><p><strong>输出：</strong> 0.50000</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= points.length &lt;= 50</code></li><li><code>-50 &lt;= xi, yi &lt;= 50</code></li><li>给出的所有点 <strong>互不相同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题要求我们计算给定一组点中，可以组成的最大三角形的面积。可以使用几何学中的 <strong>叉积公式</strong> 来计算三角形的面积。</p><ol><li><p><strong>三角形面积的计算</strong>：</p><p>对于三角形 ABC，其中三个点的坐标分别为 <code>(Xa, Ya)</code>、<code>(Xb, Yb)</code> 和 <code>(Xc, Yc)</code>，三角形的面积可以使用叉积公式计算：</p><figure><img src="'+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>遍历所有点组合</strong>：</p><ul><li>给定 <code>points</code> 数组，包含了若干二维坐标点。要找到最大的三角形面积，需要遍历所有可能的点三元组组合，并计算这些组合所形成的三角形面积。</li><li>由于输入数组的长度较小（最大为 50），因此直接用三重循环遍历所有点组合是可行的。</li></ul></li><li><p><strong>更新最大面积</strong>：</p><ul><li>每次计算一个三角形的面积后，更新当前的最大面积值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^3)</code>，其中 <code>n</code> 是点的数量。有三重循环来遍历所有的点组合，由于题目中给定 <code>n &lt;= 50</code>，这样复杂度是可以接受的。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储中间结果。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestTriangleArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 计算三角形面积的函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getArea</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token number">0.5</span> <span class="token operator">*</span>
			Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>
				i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> j<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span>
					j<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> k<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span>
					k<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
					j<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> i<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
					k<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> j<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span>
					i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> k<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
			<span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> n <span class="token operator">=</span> points<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用来记录最大的三角形面积</span>

	<span class="token comment">// 三重循环遍历所有点的三元组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 计算面积并更新最大面积</span>
				res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token function">getArea</span><span class="token punctuation">(</span>points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> points<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> points<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"976",-1),E=n("td",{style:{"text-align":"left"}},"三角形的最大周长",-1),A={style:{"text-align":"center"}},C={style:{"text-align":"left"}},Y=n("code",null,"贪心",-1),z=n("code",null,"数组",-1),L=n("code",null,"数学",-1),N=n("code",null,"1+",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/largest-perimeter-triangle",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/largest-perimeter-triangle",target:"_blank",rel:"noopener noreferrer"};function O(T,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/geometry.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",_,[f,a(o)]),s(),n("a",y,[x,a(o)])]),w,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[q,E,n("td",A,[a(e,{to:"/problem/0976.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",C,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[Y]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[z]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:t(()=>[L]),_:1}),s(),N]),V,n("td",X,[n("a",B,[s("🀄️"),a(o)]),s(),n("a",I,[s("🔗"),a(o)])])])])])])}const G=l(m,[["render",O],["__file","0812.html.vue"]]);export{G as default};

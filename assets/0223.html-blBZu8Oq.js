import{_ as c,r as l,o as r,c as i,a as n,b as a,d as s,w as t,f as d,e as u}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_223-矩形面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_223-矩形面积","aria-hidden":"true"},"#"),a(" 223. 矩形面积")],-1),m=n("code",null,"几何",-1),_=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/rectangle-area",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/rectangle-area",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the coordinates of two <strong>rectilinear</strong> rectangles in a 2D plane, return <em>the total area covered by the two rectangles</em>.</p><p>The first rectangle is defined by its <strong>bottom-left</strong> corner <code>(ax1, ay1)</code> and its <strong>top-right</strong> corner <code>(ax2, ay2)</code>.</p><p>The second rectangle is defined by its <strong>bottom-left</strong> corner <code>(bx1, by1)</code> and its <strong>top-right</strong> corner <code>(bx2, by2)</code>.</p><p><strong>Example 1:</strong></p><p>![Rectangle Area](https://assets.leetcode.com/uploads/2021/05/08/rectangle- plane.png)</p><blockquote><p>Input: ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2</p><p>Output: 45</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2</p><p>Output: 16</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-10^4 &lt;= ax1 &lt;= ax2 &lt;= 10^4</code></li><li><code>-10^4 &lt;= ay1 &lt;= ay2 &lt;= 10^4</code></li><li><code>-10^4 &lt;= bx1 &lt;= bx2 &lt;= 10^4</code></li><li><code>-10^4 &lt;= by1 &lt;= by2 &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你 <strong>二维</strong> 平面上两个 <strong>由直线构成且边与坐标轴平行/垂直</strong> 的矩形，请你计算并返回两个矩形覆盖的总面积。</p><p>每个矩形由其 <strong>左下</strong> 顶点和 <strong>右上</strong> 顶点坐标表示：</p><ul><li>第一个矩形由其左下顶点 <code>(ax1, ay1)</code> 和右上顶点 <code>(ax2, ay2)</code> 定义。</li><li>第二个矩形由其左下顶点 <code>(bx1, by1)</code> 和右上顶点 <code>(bx2, by2)</code> 定义。</li></ul><p><strong>示例 1：</strong></p><p>![Rectangle Area](https://assets.leetcode.com/uploads/2021/05/08/rectangle- plane.png)</p><blockquote><p><strong>输入：</strong> ax1 = -3, ay1 = 0, ax2 = 3, ay2 = 4, bx1 = 0, by1 = -1, bx2 = 9, by2 = 2</p><p><strong>输出：</strong> 45</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> ax1 = -2, ay1 = -2, ax2 = 2, ay2 = 2, bx1 = -2, by1 = -2, bx2 = 2, by2 = 2</p><p><strong>输出：</strong> 16</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-10^4 &lt;= ax1, ay1, ax2, ay2, bx1, by1, bx2, by2 &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>矩形的面积计算</strong>：</p><ul><li><p>给定矩形的左下角和右上角的坐标，矩形面积可以用公式：</p><p><code>Area = (右上角的x坐标 - 左下角的x坐标) * (右上角的y坐标 - 左下角的y坐标)</code></p></li></ul></li><li><p><strong>判断重叠区域</strong>：</p><ul><li>两个矩形如果有重叠，那么重叠区域也可以看作一个矩形。需要计算这个重叠矩形的左下角和右上角坐标： <ul><li>左下角的 <code>x</code> 坐标：两个矩形左下角 <code>x</code> 坐标的较大值 <code>overlapX1 = max(ax1, bx1)</code> 。</li><li>左下角的 <code>y</code> 坐标：两个矩形左下角 <code>y</code> 坐标的较大值 <code>overlapY1 = max(ay1, by1)</code> 。</li><li>右上角的 <code>x</code> 坐标：两个矩形右上角 <code>x</code> 坐标的较小值 <code>overlapX2 = min(ax2, bx2)</code> 。</li><li>右上角的 <code>y</code> 坐标：两个矩形右上角 <code>y</code> 坐标的较小值 <code>overlapY2 = min(ay2, by2)</code> 。</li></ul></li></ul></li><li><p><strong>重叠面积计算</strong>：</p><ul><li><p>如果重叠矩形的宽度和高度都大于 0，才有重叠面积：</p><p><code>OverlapArea = (overlapX2 - overlapX1) * (overlapY2 - overlapY1)</code></p></li><li><p>否则，重叠面积为 0。</p></li></ul></li><li><p><strong>总面积计算</strong>：</p><ul><li><p>两个矩形的总面积等于各自面积之和减去重叠部分的面积：</p><p><code>TotalArea = Area1 + Area2 - OverlapArea</code></p></li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，所有操作都是常数时间的计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了几个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ax1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ay1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ax2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">ay2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">bx1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">by1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">bx2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">by2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">computeArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ax1<span class="token punctuation">,</span> ay1<span class="token punctuation">,</span> ax2<span class="token punctuation">,</span> ay2<span class="token punctuation">,</span> bx1<span class="token punctuation">,</span> by1<span class="token punctuation">,</span> bx2<span class="token punctuation">,</span> by2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 重叠矩形的边界</span>
	<span class="token keyword">const</span> overlapX1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ax1<span class="token punctuation">,</span> bx1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> overlapX2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ax2<span class="token punctuation">,</span> bx2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> overlapY1 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>ay1<span class="token punctuation">,</span> by1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> overlapY2 <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>ay2<span class="token punctuation">,</span> by2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算重叠面积</span>
	<span class="token keyword">let</span> overlap <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>overlapX1 <span class="token operator">&lt;</span> overlapX2 <span class="token operator">&amp;&amp;</span> overlapY1 <span class="token operator">&lt;</span> overlapY2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		overlap <span class="token operator">=</span> <span class="token punctuation">(</span>overlapX2 <span class="token operator">-</span> overlapX1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>overlapY2 <span class="token operator">-</span> overlapY1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算两个矩形的面积</span>
	<span class="token keyword">const</span> area1 <span class="token operator">=</span> <span class="token punctuation">(</span>ax2 <span class="token operator">-</span> ax1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>ay2 <span class="token operator">-</span> ay1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> area2 <span class="token operator">=</span> <span class="token punctuation">(</span>bx2 <span class="token operator">-</span> bx1<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token punctuation">(</span>by2 <span class="token operator">-</span> by1<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 总面积</span>
	<span class="token keyword">return</span> area1 <span class="token operator">+</span> area2 <span class="token operator">-</span> overlap<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),f=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"836",-1),q=n("td",{style:{"text-align":"left"}},"矩形重叠",-1),X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},A=n("code",null,"几何",-1),I=n("code",null,"数学",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/rectangle-overlap",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/rectangle-overlap",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"3025",-1),N=n("td",{style:{"text-align":"left"}},"人员站位的方案数 I",-1),V=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},T=n("code",null,"几何",-1),j=n("code",null,"数组",-1),B=n("code",null,"数学",-1),D=n("code",null,"2+",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-i",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/find-the-number-of-ways-to-place-people-i",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"3027",-1),J=n("td",{style:{"text-align":"left"}},"人员站位的方案数 II",-1),K=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"几何",-1),U=n("code",null,"数组",-1),W=n("code",null,"数学",-1),Z=n("code",null,"2+",-1),$=n("td",{style:{"text-align":"center"}},"🔴",-1),nn={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/find-the-number-of-ways-to-place-people-ii",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"3047",-1),en=n("td",{style:{"text-align":"left"}},"求交集区域内的最大正方形面积",-1),on=n("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},pn=n("code",null,"几何",-1),cn=n("code",null,"数组",-1),rn=n("code",null,"数学",-1),dn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/find-the-largest-area-of-square-inside-two-rectangles",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/find-the-largest-area-of-square-inside-two-rectangles",target:"_blank",rel:"noopener noreferrer"};function mn(_n,bn){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[a("🟠 "),s(p,{color:"#ffb800"},{default:t(()=>[a("Medium")]),_:1}),a("  🔖  "),s(e,{to:"/tag/geometry.html"},{default:t(()=>[m]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[_]),_:1}),a("  🔗 "),n("a",b,[g,s(o)]),a(),n("a",y,[x,s(o)])]),v,d(" prettier-ignore "),n("table",null,[f,n("tbody",null,[n("tr",null,[w,q,n("td",X,[s(e,{to:"/problem/0836.html"},{default:t(()=>[a("[✓]")]),_:1})]),n("td",Y,[s(e,{to:"/tag/geometry.html"},{default:t(()=>[A]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[I]),_:1})]),O,n("td",C,[n("a",E,[a("🀄️"),s(o)]),a(),n("a",L,[a("🔗"),s(o)])])]),n("tr",null,[M,N,V,n("td",R,[s(e,{to:"/tag/geometry.html"},{default:t(()=>[T]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[j]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[B]),_:1}),a(),D]),G,n("td",S,[n("a",z,[a("🀄️"),s(o)]),a(),n("a",F,[a("🔗"),s(o)])])]),n("tr",null,[H,J,K,n("td",P,[s(e,{to:"/tag/geometry.html"},{default:t(()=>[Q]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[U]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[W]),_:1}),a(),Z]),$,n("td",nn,[n("a",an,[a("🀄️"),s(o)]),a(),n("a",sn,[a("🔗"),s(o)])])]),n("tr",null,[tn,en,on,n("td",ln,[s(e,{to:"/tag/geometry.html"},{default:t(()=>[pn]),_:1}),a(),s(e,{to:"/tag/array.html"},{default:t(()=>[cn]),_:1}),a(),s(e,{to:"/tag/math.html"},{default:t(()=>[rn]),_:1})]),dn,n("td",un,[n("a",kn,[a("🀄️"),s(o)]),a(),n("a",hn,[a("🔗"),s(o)])])])])])])}const yn=c(k,[["render",mn],["__file","0223.html.vue"]]);export{yn as default};

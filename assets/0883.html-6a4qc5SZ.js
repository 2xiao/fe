import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as d}from"./app-U2ekqv2z.js";const u={},k=n("h1",{id:"_883-三维形体投影面积",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_883-三维形体投影面积","aria-hidden":"true"},"#"),s(" 883. 三维形体投影面积")],-1),g=n("code",null,"几何",-1),m=n("code",null,"数组",-1),h=n("code",null,"数学",-1),v=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/projection-area-of-3d-shapes",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/projection-area-of-3d-shapes",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>n x n</code> <code>grid</code> where we place some <code>1 x 1 x 1</code> cubes that are axis-aligned with the <code>x</code>, <code>y</code>, and <code>z</code> axes.</p><p>Each value <code>v = grid[i][j]</code> represents a tower of <code>v</code> cubes placed on top of the cell <code>(i, j)</code>.</p><p>We view the projection of these cubes onto the <code>xy</code>, <code>yz</code>, and <code>zx</code> planes.</p><p>A <strong>projection</strong> is like a shadow, that maps our <strong>3-dimensional</strong> figure to a <strong>2-dimensional</strong> plane. We are viewing the &quot;shadow&quot; when looking at the cubes from the top, the front, and the side.</p><p>Return <em>the total area of all three projections</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,2],[3,4]]</p><p>Output: 17</p><p>Explanation: Here are the three projections (&quot;shadows&quot;) of the shape made with each axis-aligned plane.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[2]]</p><p>Output: 5</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: grid = [[1,0],[0,2]]</p><p>Output: 8</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>0 &lt;= grid[i][j] &lt;= 50</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在 <code>n x n</code> 的网格 <code>grid</code> 中，我们放置了一些与 x，y，z 三轴对齐的 <code>1 x 1 x 1</code> 立方体。</p><p>每个值 <code>v = grid[i][j]</code> 表示 <code>v</code> 个正方体叠放在单元格 <code>(i, j)</code> 上。</p><p>现在，我们查看这些立方体在 <code>xy</code> 、<code>yz</code> 和 <code>zx</code> 平面上的 <em>投影</em> 。</p><p><strong>投影</strong> 就像影子，将 <strong>三维</strong> 形体映射到一个 <strong>二维</strong> 平面上。从顶部、前面和侧面看立方体时，我们会看到“影子”。</p><p>返回 <em>所有三个投影的总面积</em> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/08/02/shadow.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong>[[1,2],[3,4]]</p><p><strong>输出：</strong> 17</p><p><strong>解释：</strong> 这里有该形体在三个轴对齐平面上的三个投影(“阴影部分”)。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入：</strong> grid = [[2]]</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong>[[1,0],[0,2]]</p><p><strong>输出：</strong> 8</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>1 &lt;= n &lt;= 50</code></li><li><code>0 &lt;= grid[i][j] &lt;= 50</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题要求计算给定的 <code>n x n</code> 网格的三个投影面积，网格中的每个元素表示在该位置上的高度，投影面积是基于该网格的不同视角来计算的：</p><ul><li><strong>顶部投影面积</strong>：每个非零元素都会对面积做贡献，因此每个非零元素的投影在顶视图中占据一个单位的面积。</li><li><strong>正面投影面积</strong>：每一行的最大值决定该行从正面看到的投影面积。例如，第 <code>i</code> 行的最大元素决定了该行的投影面积。</li><li><strong>侧面投影面积</strong>：每一列的最大值决定该列从侧面看到的投影面积。例如，第 <code>j</code> 列的最大元素决定了该列的投影面积。</li></ul><ol><li><strong>遍历矩阵</strong>：由于矩阵的大小是 <code>n x n</code>，所以只需要遍历一次矩阵，在遍历行 <code>grid[i][j]</code> 时，可以通过 <code>grid[j][i]</code> 遍历列。</li><li><strong>顶部投影</strong>：对于每个位置 <code>grid[i][j]</code>，如果该值大于 0，投影面积加一。</li><li><strong>正面投影</strong>：对于每一行 <code>i</code>，找出该行的最大值 <code>maxRow</code>，将其添加到投影总面积中。</li><li><strong>侧面投影</strong>：对于每一列 <code>j</code>，找出该列的最大值 <code>maxCol</code>，将其添加到投影总面积中。</li><li><strong>返回结果</strong>：返回总的投影面积 <code>total</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 <code>n</code> 是网格的大小，需要遍历矩阵中的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常量空间来存储一些变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">projectionArea</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历每一行，计算顶部投影、正面投影</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> maxRow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前行的最大值</span>
		<span class="token keyword">let</span> maxCol <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前列的最大值</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 顶部投影：每个非零元素都会贡献一个面积</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> total<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 正面投影：当前行的最大值</span>
			maxRow <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxRow<span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 侧面投影：当前列的最大值</span>
			maxCol <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxCol<span class="token punctuation">,</span> grid<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将正面和侧面投影的最大值加入总面积</span>
		total <span class="token operator">+=</span> maxRow <span class="token operator">+</span> maxCol<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function j(y,q){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/geometry.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",x,[_,a(p)])]),w])}const C=l(u,[["render",j],["__file","0883.html.vue"]]);export{C as default};

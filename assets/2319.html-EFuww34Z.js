import{_ as i,r as l,o as r,c,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-MkGfDfkx.js";const g={},k=n("h1",{id:"_2319-判断矩阵是否是一个-x-矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2319-判断矩阵是否是一个-x-矩阵","aria-hidden":"true"},"#"),s(" 2319. 判断矩阵是否是一个 X 矩阵")],-1),h=n("code",null,"数组",-1),m=n("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/check-if-matrix-is-x-matrix",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/check-if-matrix-is-x-matrix",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A square matrix is said to be an <strong>X-Matrix</strong> if <strong>both</strong> of the following conditions hold:</p><ol><li>All the elements in the diagonals of the matrix are <strong>non-zero</strong>.</li><li>All other elements are 0.</li></ol><p>Given a 2D integer array <code>grid</code> of size <code>n x n</code> representing a square matrix, return <code>true</code> <em>if</em><code>grid</code> <em>is an X-Matrix</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/03/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]</p><p>Output: true</p><p>Explanation: Refer to the diagram above.</p><p>An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.</p><p>Thus, grid is an X-Matrix.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/03/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[5,7,0],[0,3,1],[0,5,0]]</p><p>Output: false</p><p>Explanation: Refer to the diagram above.</p><p>An X-Matrix should have the green elements (diagonals) be non-zero and the red elements be 0.</p><p>Thus, grid is not an X-Matrix.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>3 &lt;= n &lt;= 100</code></li><li><code>0 &lt;= grid[i][j] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果一个正方形矩阵满足下述 <strong>全部</strong> 条件，则称之为一个 <strong>X 矩阵</strong> ：</p><ol><li>矩阵对角线上的所有元素都 <strong>不是 0</strong></li><li>矩阵中所有其他元素都是 <strong>0</strong></li></ol><p>给你一个大小为 <code>n x n</code> 的二维整数数组 <code>grid</code> ，表示一个正方形矩阵。如果 <strong><code>grid</code></strong> 是一个 <strong>X 矩阵</strong> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/03/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 矩阵如上图所示。</p><p>X 矩阵应该满足：绿色元素（对角线上）都不是 0 ，红色元素都是 0 。</p><p>因此，grid 是一个 X 矩阵。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/05/03/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> grid = [[5,7,0],[0,3,1],[0,5,0]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 矩阵如上图所示。</p><p>X 矩阵应该满足：绿色元素（对角线上）都不是 0 ，红色元素都是 0 。</p><p>因此，grid 不是一个 X 矩阵。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == grid.length == grid[i].length</code></li><li><code>3 &lt;= n &lt;= 100</code></li><li><code>0 &lt;= grid[i][j] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历矩阵的每个元素</strong>：</p><ul><li>使用双重循环遍历二维数组，外层循环遍历行，内层循环遍历列。</li></ul></li><li><p><strong>检查对角线元素</strong>：</p><ul><li>如果当前元素位于主对角线（<code>i == j</code>）或副对角线（<code>i + j == n - 1</code>），判断该元素是否为非零。如果为零，则返回 <code>false</code>。</li></ul></li><li><p><strong>检查非对角线元素</strong>：</p><ul><li>如果当前元素不在上述两条对角线上，则判断它是否为零。如果不是零，则返回 <code>false</code>。</li></ul></li><li><p><strong>遍历完成返回结果</strong>：</p><ul><li>如果所有检查都通过，则说明该矩阵是一个 X 矩阵，返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，遍历矩阵，矩阵有 <code>n * n</code> 个元素，因此时间复杂度为 <code>O(n^2)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkXMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> j <span class="token operator">||</span> i <span class="token operator">+</span> j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1572",-1),j=n("td",{style:{"text-align":"left"}},"矩阵对角线元素的和",-1),X={style:{"text-align":"center"}},q={style:{"text-align":"left"}},z=n("code",null,"数组",-1),E=n("code",null,"矩阵",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/matrix-diagonal-sum",target:"_blank",rel:"noopener noreferrer"};function L(N,V){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return r(),c("div",null,[k,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",f,[b,t(o)]),s(),n("a",_,[x,t(o)])]),v,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,j,n("td",X,[t(e,{to:"/problem/1572.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",q,[t(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/matrix.html"},{default:a(()=>[E]),_:1})]),M,n("td",O,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",C,[s("🔗"),t(o)])])])])])])}const R=i(g,[["render",L],["__file","2319.html.vue"]]);export{R as default};

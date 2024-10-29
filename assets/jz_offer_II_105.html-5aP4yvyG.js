import{_ as i,r as o,o as u,c as r,a as s,b as n,d as a,w as t,e as c}from"./app-mXo2sCT-.js";const d={},k={id:"_105-岛屿的最大面积",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#_105-岛屿的最大面积","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_105.html",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"深度优先搜索",-1),h=s("code",null,"广度优先搜索",-1),g=s("code",null,"并查集",-1),_=s("code",null,"数组",-1),f=s("code",null,"矩阵",-1),j={href:"https://leetcode.cn/problems/ZL6zAn",target:"_blank",rel:"noopener noreferrer"},w=s("code",null,"力扣",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个由 <code>0</code> 和 <code>1</code> 组成的非空二维数组 <code>grid</code> ，用来表示海洋岛屿地图。</p><p>一个 <strong>岛屿</strong> 是由一些相邻的 <code>1</code> (代表土地) 构成的组合，这里的「相邻」要求两个 <code>1</code> 必须在水平或者竖直方向上相邻。你可以假设 <code>grid</code> 的四个边缘都被 <code>0</code>（代表水）包围着。</p><p>找到给定的二维数组中最大的岛屿面积。如果没有岛屿，则返回面积为 <code>0</code> 。</p><p><strong>示例 1:</strong></p><figure><img src="https://pic.leetcode-cn.com/1626667010-nSGPXz-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]</p><p><strong>输出:</strong> 6</p><p><strong>解释:</strong> 对于上面这个给定矩阵应返回 6。注意答案不应该是 11 ，因为岛屿只能包含水平或垂直的四个方向的 1 。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> grid = [[0,0,0,0,0,0,0,0]]</p><p><strong>输出:</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>grid[i][j] is either 0 or 1</code></li></ul>',11),x={class:"hint-container warning"},I=s("p",{class:"hint-container-title"},"注意",-1),z=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),L=c(`<p>遍历整个网格，并在每次找到一个陆地单元时，使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历所有相连的陆地单元，从而将整个岛屿标记为已访问。</p><ol><li>遍历网格：遍历每一个单元格，如果当前单元格是 <code>&#39;1&#39;</code>（陆地），则找到一个新的岛屿，计数器加一。</li><li>标记已访问：使用 DFS 从当前单元格开始，标记所有连通的陆地单元为 <code>&#39;0&#39;</code>（水），表示它们已被访问，并返回岛屿面积。</li><li>继续遍历：继续遍历剩余的单元格，直到整个网格被检查完。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是网格的行数，<code>n</code> 是网格的列数，每个格子最多会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，最坏情况下，递归的深度可能达到 <code>m * n</code>，因此递归调用栈的空间复杂度为 <code>O(m * n)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxAreaOfIsland</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 从 (i, j) 开始，将与之相邻的陆地都变成海水</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超出索引边界</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// (i, j) 已经是海水了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 将 (i, j) 变成海水</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// // 淹没上下左右的陆地，并返回相邻岛屿面积</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span>
			<span class="token number">1</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历 grid</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 记录最大岛屿面积</span>
				res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function S(q,B){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return u(),r("div",null,[s("h1",k,[m,n(),s("a",v,[n("105. 岛屿的最大面积"),a(p)])]),s("p",null,[n("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),n(),a(e,{to:"/tag/union-find.html"},{default:t(()=>[g]),_:1}),n(),a(e,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),n(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[f]),_:1}),n("  🔗 "),s("a",j,[w,a(p)])]),y,s("div",x,[I,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0695.html"},{default:t(()=>[n("第 695 题")]),_:1}),n(" 相同。")])]),z,s("p",null,[n("这道题和 "),a(e,{to:"/problem/0200.html"},{default:t(()=>[n("第 200 题 岛屿数量")]),_:1}),n(" 的解题思路是一样的，只不过需要给 dfs 函数加一个返回值，记录岛屿的面积。")]),L])}const O=i(d,[["render",S],["__file","jz_offer_II_105.html.vue"]]);export{O as default};

import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as d,e as u}from"./app-fEpXkbSw.js";const m={},k=n("h1",{id:"_733-图像渲染",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_733-图像渲染","aria-hidden":"true"},"#"),s(" 733. 图像渲染")],-1),g=n("code",null,"深度优先搜索",-1),h=n("code",null,"广度优先搜索",-1),v=n("code",null,"数组",-1),b=n("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/flood-fill",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/flood-fill",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an image represented by an <code>m x n</code> grid of integers <code>image</code>, where <code>image[i][j]</code> represents the pixel value of the image. You are also given three integers <code>sr</code>, <code>sc</code>, and <code>color</code>. Your task is to perform a <strong>flood fill</strong> on the image starting from the pixel <code>image[sr][sc]</code>.</p><p>To perform a <strong>flood fill</strong> :</p><ol><li>Begin with the starting pixel and change its color to <code>color</code>.</li><li>Perform the same process for each pixel that is <strong>directly adjacent</strong> (pixels that share a side with the original pixel, either horizontally or vertically) and shares the <strong>same color</strong> as the starting pixel.</li><li>Keep <strong>repeating</strong> this process by checking neighboring pixels of the <em>updated</em> pixels and modifying their color if it matches the original color of the starting pixel.</li><li>The process <strong>stops</strong> when there are <strong>no more</strong> adjacent pixels of the original color to update.</li></ol><p>Return the <strong>modified</strong> image after performing the flood fill.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2</p><p><strong>Output:</strong> [[2,2,2],[2,2,0],[2,0,1]]</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>From the center of the image with position <code>(sr, sc) = (1, 1)</code> (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.</p><p>Note the bottom corner is <strong>not</strong> colored 2, because it is not horizontally or vertically connected to the starting pixel.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0</p><p><strong>Output:</strong> [[0,0,0],[0,0,0]]</p><p><strong>Explanation:</strong></p><p>The starting pixel is already colored with 0, which is the same as the target color. Therefore, no changes are made to the image.</p><p><strong>Constraints:</strong></p><ul><li><code>m == image.length</code></li><li><code>n == image[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>0 &lt;= image[i][j], color &lt; 216</code></li><li><code>0 &lt;= sr &lt; m</code></li><li><code>0 &lt;= sc &lt; n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一幅以 <code>m x n</code> 的二维整数数组表示的图画 <code>image</code> ，其中 <code>image[i][j]</code> 表示该图画的像素值大小。你也被给予三个整数 <code>sr</code> , <code>sc</code> 和 <code>color</code> 。你应该从像素 <code>image[sr][sc]</code> 开始对图像进行上色 <strong>填充</strong> 。</p><p>为了完成 <strong>上色工作</strong> ：</p><ol><li>从初始像素开始，将其颜色改为 <code>color</code>。</li><li>对初始坐标的 <strong>上下左右四个方向上</strong> 相邻且与初始像素的原始颜色同色的像素点执行相同操作。</li><li>通过检查与初始像素的原始颜色相同的相邻像素并修改其颜色来继续 <strong>重复</strong> 此过程。</li><li>当 <strong>没有</strong> 其它原始颜色的相邻像素时 <strong>停止</strong> 操作。</li></ol><p>最后返回经过上色渲染 <strong>修改</strong> 后的图像 。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/06/01/flood1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>输入：</strong> image = [[1,1,1],[1,1,0],[1,0,1]]，sr = 1, sc = 1, color = 2</p><p><strong>输出：</strong>[[2,2,2],[2,2,0],[2,0,1]]</p><p><strong>解释：</strong> 在图像的正中间，坐标 <code>(sr,sc)=(1,1)</code> （即红色像素）,在路径上所有符合条件的像素点的颜色都被更改成相同的新颜色（即蓝色像素）。</p><p>注意，右下角的像素 <strong>没有</strong> 更改为 2，因为它不是在上下左右四个方向上与初始点相连的像素点。</p><p><strong>示例 2:</strong></p><p><strong>输入：</strong> image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, color = 0</p><p><strong>输出：</strong>[[0,0,0],[0,0,0]]</p><p><strong>解释：</strong> 初始像素已经用 0 着色，这与目标颜色相同。因此，不会对图像进行任何更改。</p><p><strong>提示:</strong></p><ul><li><code>m == image.length</code></li><li><code>n == image[i].length</code></li><li><code>1 &lt;= m, n &lt;= 50</code></li><li><code>0 &lt;= image[i][j], color &lt; 216</code></li><li><code>0 &lt;= sr &lt; m</code></li><li><code>0 &lt;= sc &lt; n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>如果起点 <code>(sr, sc)</code> 的颜色已经等于目标颜色 <code>color</code>，直接返回原始图像即可，避免无限递归。</li><li>定义一个方向数组 <code>dirc</code> 表示四连通的上下左右移动。</li><li>初始化递归函数 <code>dfs(r, c)</code>： <ul><li>从起点开始，将当前像素染为目标颜色。</li><li>遍历当前像素的四个方向（上下左右）。 <ul><li>如果某个方向的像素在图像的边界范围内，且颜色与原始起点颜色相同则递归处理。</li></ul></li></ul></li><li>调用 <code>dfs(sr, sc)</code> 开始深度优先搜索（DFS），将与起点颜色相同的连通区域全部染色。</li><li>返回更新后的图像。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，最坏情况下，所有像素都被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，DFS 使用的递归栈深度为连通分量的大小，最坏情况下为<code>O(m * n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">image</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">sr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">sc</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">color</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">floodFill</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">image<span class="token punctuation">,</span> sr<span class="token punctuation">,</span> sc<span class="token punctuation">,</span> color</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取图像的行数和列数</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> image<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> image<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 定义上下左右四个方向</span>
	<span class="token keyword">const</span> dirc <span class="token operator">=</span> <span class="token punctuation">[</span>
		<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> originColor <span class="token operator">=</span> image<span class="token punctuation">[</span>sr<span class="token punctuation">]</span><span class="token punctuation">[</span>sc<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 起点颜色</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 将当前像素染成目标颜色</span>
		image<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> color<span class="token punctuation">;</span>

		<span class="token comment">// 遍历四个方向</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>dr<span class="token punctuation">,</span> dc<span class="token punctuation">]</span> <span class="token keyword">of</span> dirc<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 计算相邻像素的坐标</span>
			<span class="token keyword">const</span> nr <span class="token operator">=</span> r <span class="token operator">+</span> dr<span class="token punctuation">;</span>
			<span class="token keyword">const</span> nc <span class="token operator">=</span> c <span class="token operator">+</span> dc<span class="token punctuation">;</span>
			<span class="token comment">// 对满足条件的像素递归</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				nr <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				nr <span class="token operator">&lt;</span> m <span class="token operator">&amp;&amp;</span>
				nc <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
				nc <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span>
				image<span class="token punctuation">[</span>nr<span class="token punctuation">]</span><span class="token punctuation">[</span>nc<span class="token punctuation">]</span> <span class="token operator">==</span> originColor
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>nr<span class="token punctuation">,</span> nc<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果目标颜色和起点颜色相同，无需执行染色</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>originColor <span class="token operator">!==</span> color<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>sr<span class="token punctuation">,</span> sc<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从起点开始递归搜索</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> image<span class="token punctuation">;</span> <span class="token comment">// 返回更新后的图像</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,43),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"463",-1),E=n("td",{style:{"text-align":"left"}},"岛屿的周长",-1),N={style:{"text-align":"center"}},L={style:{"text-align":"left"}},O=n("code",null,"深度优先搜索",-1),T=n("code",null,"广度优先搜索",-1),V=n("code",null,"数组",-1),z=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"};function S(Y,D){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",x,[y,a(o)])]),w,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[C,E,n("td",N,[a(e,{to:"/problem/0463.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",L,[a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[O]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[V]),_:1}),s(),z]),B,n("td",F,[n("a",I,[s("🀄️"),a(o)]),s(),n("a",R,[s("🔗"),a(o)])])])])])])}const P=l(m,[["render",S],["__file","0733.html.vue"]]);export{P as default};

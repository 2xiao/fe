import{_ as i,r as l,o as r,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app--GvfAkAr.js";const _={},h=t("h1",{id:"_200-岛屿数量",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_200-岛屿数量","aria-hidden":"true"},"#"),n(" 200. 岛屿数量")],-1),m=t("code",null,"深度优先搜索",-1),k=t("code",null,"广度优先搜索",-1),f=t("code",null,"并查集",-1),g=t("code",null,"数组",-1),b=t("code",null,"矩阵",-1),y={href:"https://leetcode.cn/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> 2D binary grid <code>grid</code> which represents a map of <code>&#39;1&#39;</code>s (land) and <code>&#39;0&#39;</code>s (water), return <em>the number of islands</em>.</p><p>An <strong>island</strong> is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: grid = [</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;1&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;]</p><p>]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;1&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;0&quot;,&quot;0&quot;],</p><p>[&quot;0&quot;,&quot;0&quot;,&quot;0&quot;,&quot;1&quot;,&quot;1&quot;]</p><p>]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 300</code></li><li><code>grid[i][j]</code> is <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由 <code>&#39;1&#39;</code>（陆地）和 <code>&#39;0&#39;</code>（水）组成的的二维网格，请你计算网格中岛屿的数量。</p><p>岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。</p><p>此外，你可以假设该网格的四条边均被水包围。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>遍历整个网格，并在每次找到一个陆地单元时，使用深度优先搜索（DFS）或广度优先搜索（BFS）来遍历所有相连的陆地单元，从而将整个岛屿标记为已访问。</p><ol><li>遍历网格：遍历每一个单元格，如果当前单元格是 <code>&#39;1&#39;</code>（陆地），则找到一个新的岛屿，计数器加一。</li><li>标记已访问：使用 DFS 从当前单元格开始，标记所有连通的陆地单元为 <code>&#39;0&#39;</code>（水），表示它们已被访问。</li><li>继续遍历：继续遍历剩余的单元格，直到整个网格被检查完。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是网格的行数，<code>n</code> 是网格的列数，每个格子最多会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，最坏情况下，递归的深度可能达到 <code>m * n</code>，因此递归调用栈的空间复杂度为 <code>O(m * n)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numIslands</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 从 (i, j) 开始，将与之相邻的陆地都变成海水</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 超出索引边界</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// (i, j) 已经是海水了</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将 (i, j) 变成海水</span>
		grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">;</span>
		<span class="token comment">// 淹没上下左右的陆地</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 下</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 grid</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 每发现一个岛屿，岛屿数量加一</span>
				res<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token comment">// 然后使用 DFS 将岛屿淹了</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>grid<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"130",-1),C=t("td",{style:{"text-align":"left"}},"被围绕的区域",-1),E={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"深度优先搜索",-1),O=t("code",null,"广度优先搜索",-1),S=t("code",null,"并查集",-1),V=t("code",null,"2+",-1),B=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/surrounded-regions",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/surrounded-regions",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"286",-1),A=t("td",{style:{"text-align":"left"}},"墙与门 🔒",-1),G=t("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},T=t("code",null,"广度优先搜索",-1),Y=t("code",null,"数组",-1),H=t("code",null,"矩阵",-1),J=t("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"305",-1),W=t("td",{style:{"text-align":"left"}},"岛屿数量 II 🔒",-1),X=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"并查集",-1),tt=t("code",null,"数组",-1),nt=t("code",null,"哈希表",-1),et=t("td",{style:{"text-align":"center"}},"🔴",-1),st={style:{"text-align":"center"}},at={href:"https://leetcode.cn/problems/number-of-islands-ii",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/number-of-islands-ii",target:"_blank",rel:"noopener noreferrer"},lt=t("td",{style:{"text-align":"center"}},"323",-1),ct=t("td",{style:{"text-align":"left"}},"无向图中连通分量的数目 🔒",-1),it=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},pt=t("code",null,"深度优先搜索",-1),dt=t("code",null,"广度优先搜索",-1),ut=t("code",null,"并查集",-1),_t=t("code",null,"1+",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),mt={style:{"text-align":"center"}},kt={href:"https://leetcode.cn/problems/number-of-connected-components-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},"419",-1),bt=t("td",{style:{"text-align":"left"}},"棋盘上的战舰",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},xt=t("code",null,"深度优先搜索",-1),qt=t("code",null,"数组",-1),wt=t("code",null,"矩阵",-1),jt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://leetcode.com/problems/battleships-in-a-board",target:"_blank",rel:"noopener noreferrer"},Lt=t("td",{style:{"text-align":"center"}},"694",-1),Nt=t("td",{style:{"text-align":"left"}},"不同岛屿的数量 🔒",-1),Ot=t("td",{style:{"text-align":"center"}},null,-1),St={style:{"text-align":"left"}},Vt=t("code",null,"深度优先搜索",-1),Bt=t("code",null,"广度优先搜索",-1),Dt=t("code",null,"并查集",-1),Ft=t("code",null,"2+",-1),Rt=t("td",{style:{"text-align":"center"}},"🟠",-1),zt={style:{"text-align":"center"}},At={href:"https://leetcode.cn/problems/number-of-distinct-islands",target:"_blank",rel:"noopener noreferrer"},Gt={href:"https://leetcode.com/problems/number-of-distinct-islands",target:"_blank",rel:"noopener noreferrer"},Mt=t("td",{style:{"text-align":"center"}},"695",-1),Tt=t("td",{style:{"text-align":"left"}},"岛屿的最大面积",-1),Yt={style:{"text-align":"center"}},Ht={style:{"text-align":"left"}},Jt=t("code",null,"深度优先搜索",-1),Kt=t("code",null,"广度优先搜索",-1),Pt=t("code",null,"并查集",-1),Qt=t("code",null,"2+",-1),Ut=t("td",{style:{"text-align":"center"}},"🟠",-1),Wt={style:{"text-align":"center"}},Xt={href:"https://leetcode.cn/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},Zt={href:"https://leetcode.com/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},$t=t("td",{style:{"text-align":"center"}},"1905",-1),tn=t("td",{style:{"text-align":"left"}},"统计子岛屿",-1),nn=t("td",{style:{"text-align":"center"}},null,-1),en={style:{"text-align":"left"}},sn=t("code",null,"深度优先搜索",-1),an=t("code",null,"广度优先搜索",-1),on=t("code",null,"并查集",-1),ln=t("code",null,"2+",-1),cn=t("td",{style:{"text-align":"center"}},"🟠",-1),rn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/count-sub-islands",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/count-sub-islands",target:"_blank",rel:"noopener noreferrer"},un=t("td",{style:{"text-align":"center"}},"1992",-1),_n=t("td",{style:{"text-align":"left"}},"找到所有的农场组",-1),hn=t("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},kn=t("code",null,"深度优先搜索",-1),fn=t("code",null,"广度优先搜索",-1),gn=t("code",null,"数组",-1),bn=t("code",null,"1+",-1),yn=t("td",{style:{"text-align":"center"}},"🟠",-1),vn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/find-all-groups-of-farmland",target:"_blank",rel:"noopener noreferrer"},qn={href:"https://leetcode.com/problems/find-all-groups-of-farmland",target:"_blank",rel:"noopener noreferrer"},wn=t("td",{style:{"text-align":"center"}},"2316",-1),jn=t("td",{style:{"text-align":"left"}},"统计无向图中无法互相到达点对数",-1),In=t("td",{style:{"text-align":"center"}},null,-1),Cn={style:{"text-align":"left"}},En=t("code",null,"深度优先搜索",-1),Ln=t("code",null,"广度优先搜索",-1),Nn=t("code",null,"并查集",-1),On=t("code",null,"1+",-1),Sn=t("td",{style:{"text-align":"center"}},"🟠",-1),Vn={style:{"text-align":"center"}},Bn={href:"https://leetcode.cn/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph",target:"_blank",rel:"noopener noreferrer"},Fn=t("td",{style:{"text-align":"center"}},"2658",-1),Rn=t("td",{style:{"text-align":"left"}},"网格图中鱼的最大数目",-1),zn=t("td",{style:{"text-align":"center"}},null,-1),An={style:{"text-align":"left"}},Gn=t("code",null,"深度优先搜索",-1),Mn=t("code",null,"广度优先搜索",-1),Tn=t("code",null,"并查集",-1),Yn=t("code",null,"2+",-1),Hn=t("td",{style:{"text-align":"center"}},"🟠",-1),Jn={style:{"text-align":"center"}},Kn={href:"https://leetcode.cn/problems/maximum-number-of-fish-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Pn={href:"https://leetcode.com/problems/maximum-number-of-fish-in-a-grid",target:"_blank",rel:"noopener noreferrer"};function Qn(Un,Wn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[h,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[f]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[b]),_:1}),n("  🔗 "),t("a",y,[v,e(o)]),n(),t("a",x,[q,e(o)])]),w,d(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[I,C,t("td",E,[e(a,{to:"/problem/0130.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",L,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[N]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[O]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[S]),_:1}),n(),V]),B,t("td",D,[t("a",F,[n("🀄️"),e(o)]),n(),t("a",R,[n("🔗"),e(o)])])]),t("tr",null,[z,A,G,t("td",M,[e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[T]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[H]),_:1})]),J,t("td",K,[t("a",P,[n("🀄️"),e(o)]),n(),t("a",Q,[n("🔗"),e(o)])])]),t("tr",null,[U,W,X,t("td",Z,[e(a,{to:"/tag/union-find.html"},{default:s(()=>[$]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[tt]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[nt]),_:1})]),et,t("td",st,[t("a",at,[n("🀄️"),e(o)]),n(),t("a",ot,[n("🔗"),e(o)])])]),t("tr",null,[lt,ct,it,t("td",rt,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[pt]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[dt]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[ut]),_:1}),n(),_t]),ht,t("td",mt,[t("a",kt,[n("🀄️"),e(o)]),n(),t("a",ft,[n("🔗"),e(o)])])]),t("tr",null,[gt,bt,yt,t("td",vt,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[qt]),_:1}),n(),e(a,{to:"/tag/matrix.html"},{default:s(()=>[wt]),_:1})]),jt,t("td",It,[t("a",Ct,[n("🀄️"),e(o)]),n(),t("a",Et,[n("🔗"),e(o)])])]),t("tr",null,[Lt,Nt,Ot,t("td",St,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Vt]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Bt]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[Dt]),_:1}),n(),Ft]),Rt,t("td",zt,[t("a",At,[n("🀄️"),e(o)]),n(),t("a",Gt,[n("🔗"),e(o)])])]),t("tr",null,[Mt,Tt,t("td",Yt,[e(a,{to:"/problem/0695.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Ht,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Jt]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Kt]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[Pt]),_:1}),n(),Qt]),Ut,t("td",Wt,[t("a",Xt,[n("🀄️"),e(o)]),n(),t("a",Zt,[n("🔗"),e(o)])])]),t("tr",null,[$t,tn,nn,t("td",en,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[sn]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[an]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[on]),_:1}),n(),ln]),cn,t("td",rn,[t("a",pn,[n("🀄️"),e(o)]),n(),t("a",dn,[n("🔗"),e(o)])])]),t("tr",null,[un,_n,hn,t("td",mn,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[kn]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[fn]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[gn]),_:1}),n(),bn]),yn,t("td",vn,[t("a",xn,[n("🀄️"),e(o)]),n(),t("a",qn,[n("🔗"),e(o)])])]),t("tr",null,[wn,jn,In,t("td",Cn,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[En]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Ln]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[Nn]),_:1}),n(),On]),Sn,t("td",Vn,[t("a",Bn,[n("🀄️"),e(o)]),n(),t("a",Dn,[n("🔗"),e(o)])])]),t("tr",null,[Fn,Rn,zn,t("td",An,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Gn]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Mn]),_:1}),n(),e(a,{to:"/tag/union-find.html"},{default:s(()=>[Tn]),_:1}),n(),Yn]),Hn,t("td",Jn,[t("a",Kn,[n("🀄️"),e(o)]),n(),t("a",Pn,[n("🔗"),e(o)])])])])])])}const Zn=i(_,[["render",Qn],["__file","0200.html.vue"]]);export{Zn as default};

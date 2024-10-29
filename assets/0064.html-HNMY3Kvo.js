import{_ as p,r as c,o as i,c as d,a as t,b as s,d as n,w as a,f as r,e as u}from"./app-mXo2sCT-.js";const _={},h={id:"_64-最小路径和",tabindex:"-1"},m=t("a",{class:"header-anchor",href:"#_64-最小路径和","aria-hidden":"true"},"#",-1),k={href:"https://2xiao.github.io/leetcode-js/problem/0064.html",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"数组",-1),f=t("code",null,"动态规划",-1),b=t("code",null,"矩阵",-1),y={href:"https://leetcode.cn/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},j=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>m x n</code> <code>grid</code> filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.</p><p><strong>Note:</strong> You can only move either down or right at any point in time.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/05/minpath.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[1,3,1],[1,5,1],[4,2,1]]</p><p>Output: 7</p><p>Explanation: Because the path 1 -&gt; 3 -&gt; 1 -&gt; 1 -&gt; 1 minimizes the sum.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[1,2,3],[4,5,6]]</p><p>Output: 12</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>0 &lt;= grid[i][j] &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含非负整数的 <code>m x n</code> 网格 <code>grid</code> ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。</p><p><strong>说明</strong>：每次只能向下或者向右移动一步。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>动态规划</strong>：使用动态规划来解决问题。定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示从 <code>(0, 0)</code> 到 <code>(i, j)</code> 的最小路径和。</p></li><li><p><strong>状态转移方程</strong>：可以从左上角到达 <code>(i, j)</code> 的路径有两条：从 <code>(i-1, j)</code> 向下移动和从 <code>(i, j-1)</code> 向右移动。因此，状态转移方程为 <code>dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1])</code>。</p></li><li><p><strong>边界条件</strong>：对于第一行和第一列，由于它们只能从上方或左侧移动到达，所以路径和等于前一个格子的路径和加上当前格子的值。即 <code>dp[0][j] = dp[0][j-1] + grid[0][j]</code> 和 <code>dp[i][0] = dp[i-1][0] + grid[i][0]</code>。</p></li><li><p><strong>初始化</strong>：初始化第一行和第一列的路径和。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，由于<code>dp[i][j]</code> 只与 <code>dp[i-1][j]</code> 及 <code>dp[i][j-1]</code> 有关，所以可以直接原地修改 <code>grid</code> 数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">grid</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minPathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">grid</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> grid<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理左上角的边界情况</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一行的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理第一列的边界情况</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">+</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> grid<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),M=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),q=t("td",{style:{"text-align":"center"}},"62",-1),E={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},V=t("code",null,"数学",-1),B=t("code",null,"动态规划",-1),I=t("code",null,"组合数学",-1),O={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"174",-1),H={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},G={style:{"text-align":"left"}},K=t("code",null,"数组",-1),P=t("code",null,"动态规划",-1),T=t("code",null,"矩阵",-1),Y={style:{"text-align":"left"}},A=t("td",{style:{"text-align":"center"}},"741",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"动态规划",-1),X=t("code",null,"矩阵",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"1937",-1),tt={style:{"text-align":"left"}},nt={href:"https://leetcode.com/problems/maximum-number-of-points-with-cost",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},et=t("code",null,"数组",-1),ot=t("code",null,"动态规划",-1),lt=t("code",null,"矩阵",-1),ct={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"2087",-1),it={style:{"text-align":"left"}},dt={href:"https://leetcode.com/problems/minimum-cost-homecoming-of-a-robot-in-a-grid",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"贪心",-1),ht=t("code",null,"数组",-1),mt={style:{"text-align":"left"}},kt=t("td",{style:{"text-align":"center"}},"2304",-1),gt={style:{"text-align":"left"}},ft={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},xt=t("code",null,"数组",-1),vt=t("code",null,"动态规划",-1),jt=t("code",null,"矩阵",-1),wt={style:{"text-align":"left"}},Mt=t("td",{style:{"text-align":"center"}},"2435",-1),qt={style:{"text-align":"left"}},Et={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Vt=t("code",null,"动态规划",-1),Bt=t("code",null,"矩阵",-1),It={style:{"text-align":"left"}},Ot=t("td",{style:{"text-align":"center"}},"2510",-1),zt={style:{"text-align":"left"}},Ht={href:"https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"},Rt=t("td",{style:{"text-align":"center"}},null,-1),St={style:{"text-align":"left"}},Gt=t("code",null,"数组",-1),Kt=t("code",null,"动态规划",-1),Pt=t("code",null,"矩阵",-1),Tt={style:{"text-align":"left"}},Yt=t("td",{style:{"text-align":"center"}},"2662",-1),At={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/minimum-cost-of-a-path-with-special-roads",target:"_blank",rel:"noopener noreferrer"},Ft=t("td",{style:{"text-align":"center"}},null,-1),Jt={style:{"text-align":"left"}},Qt=t("code",null,"图",-1),Ut=t("code",null,"数组",-1),Wt=t("code",null,"最短路",-1),Xt=t("code",null,"1+",-1),Zt={style:{"text-align":"left"}};function $t(tn,nn){const o=c("ExternalLinkIcon"),l=c("font"),e=c("RouterLink");return i(),d("div",null,[t("h1",h,[m,s(),t("a",k,[s("64. 最小路径和"),n(o)])]),t("p",null,[s("🟠 "),n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),n(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[f]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),t("a",y,[x,n(o)]),s(),t("a",v,[j,n(o)])]),w,r(" prettier-ignore "),t("table",null,[M,t("tbody",null,[t("tr",null,[q,t("td",E,[t("a",N,[s("不同路径"),n(o)])]),t("td",C,[n(e,{to:"/problem/0062.html"},{default:a(()=>[s("[✓]")]),_:1})]),t("td",L,[n(e,{to:"/tag/math.html"},{default:a(()=>[V]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[B]),_:1}),s(),n(e,{to:"/tag/combinatorics.html"},{default:a(()=>[I]),_:1})]),t("td",O,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[z,t("td",H,[t("a",R,[s("地下城游戏"),n(o)])]),t("td",S,[n(e,{to:"/problem/0174.html"},{default:a(()=>[s("[✓]")]),_:1})]),t("td",G,[n(e,{to:"/tag/array.html"},{default:a(()=>[K]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[P]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[T]),_:1})]),t("td",Y,[n(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),t("tr",null,[A,t("td",D,[t("a",F,[s("摘樱桃"),n(o)])]),J,t("td",Q,[n(e,{to:"/tag/array.html"},{default:a(()=>[U]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[W]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[X]),_:1})]),t("td",Z,[n(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",nt,[s("扣分后的最大得分"),n(o)])]),st,t("td",at,[n(e,{to:"/tag/array.html"},{default:a(()=>[et]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[ot]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[lt]),_:1})]),t("td",ct,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[pt,t("td",it,[t("a",dt,[s("网格图中机器人回家的最小代价"),n(o)])]),rt,t("td",ut,[n(e,{to:"/tag/greedy.html"},{default:a(()=>[_t]),_:1}),s(),n(e,{to:"/tag/array.html"},{default:a(()=>[ht]),_:1})]),t("td",mt,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[kt,t("td",gt,[t("a",ft,[s("网格中的最小路径代价"),n(o)])]),bt,t("td",yt,[n(e,{to:"/tag/array.html"},{default:a(()=>[xt]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[vt]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[jt]),_:1})]),t("td",wt,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[Mt,t("td",qt,[t("a",Et,[s("矩阵中和能被 K 整除的路径"),n(o)])]),Nt,t("td",Ct,[n(e,{to:"/tag/array.html"},{default:a(()=>[Lt]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Vt]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[Bt]),_:1})]),t("td",It,[n(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})])]),t("tr",null,[Ot,t("td",zt,[t("a",Ht,[s("检查是否有路径经过相同数量的 0 和 1 🔒"),n(o)])]),Rt,t("td",St,[n(e,{to:"/tag/array.html"},{default:a(()=>[Gt]),_:1}),s(),n(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Kt]),_:1}),s(),n(e,{to:"/tag/matrix.html"},{default:a(()=>[Pt]),_:1})]),t("td",Tt,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])]),t("tr",null,[Yt,t("td",At,[t("a",Dt,[s("前往目标的最小代价"),n(o)])]),Ft,t("td",Jt,[n(e,{to:"/tag/graph.html"},{default:a(()=>[Qt]),_:1}),s(),n(e,{to:"/tag/array.html"},{default:a(()=>[Ut]),_:1}),s(),n(e,{to:"/tag/shortest-path.html"},{default:a(()=>[Wt]),_:1}),s(),Xt]),t("td",Zt,[n(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})])])])])])}const an=p(_,[["render",$t],["__file","0064.html.vue"]]);export{an as default};

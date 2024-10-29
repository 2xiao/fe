import{_ as c,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-mXo2sCT-.js";const k={},m={id:"_289-生命游戏",tabindex:"-1"},b=n("a",{class:"header-anchor",href:"#_289-生命游戏","aria-hidden":"true"},"#",-1),h={href:"https://2xiao.github.io/leetcode-js/problem/0289.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),g=n("code",null,"矩阵",-1),_=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),j=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),N={href:"https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life",target:"_blank",rel:"noopener noreferrer"},L=n("strong",null,"Game of Life",-1),C=n("strong",null,"Life",-1),E=n("code",null,"m x n",-1),I=n("strong",null,"live",-1),q=n("code",null,"1",-1),A=n("strong",null,"dead",-1),O=n("code",null,"0",-1),V={href:"https://en.wikipedia.org/wiki/Moore_neighborhood",target:"_blank",rel:"noopener noreferrer"},z=d(`<ol><li>Any live cell with fewer than two live neighbors dies as if caused by under-population.</li><li>Any live cell with two or three live neighbors lives on to the next generation.</li><li>Any live cell with more than three live neighbors dies, as if by over-population.</li><li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li></ol><p>The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously. Given the current state of the <code>m x n</code> grid <code>board</code>, return <em>the next state</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/26/grid1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]]</p><p>Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/26/grid2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[1,1],[1,0]]</p><p>Output: [[1,1],[1,1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == board.length</code></li><li><code>n == board[i].length</code></li><li><code>1 &lt;= m, n &lt;= 25</code></li><li><code>board[i][j]</code> is <code>0</code> or <code>1</code>.</li></ul><p><strong>Follow up:</strong></p><ul><li>Could you solve it in-place? Remember that the board needs to be updated simultaneously: You cannot update some cells first and then use their updated values to update other cells.</li><li>In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches upon the border of the array (i.e., live cells reach the border). How would you address these problems?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>生命游戏</strong> ，简称为 <strong>生命</strong> ，是英国数学家约翰·何顿·康威在 1970 年发明的细胞自动机。</p><p>给定一个包含 <code>m × n</code> 个格子的面板，每一个格子都可以看成是一个细胞。每个细胞都具有一个初始状态： <code>1</code> 即为 <strong>活细胞</strong> （live），或 <code>0</code> 即为 <strong>死细胞</strong> （dead）。每个细胞与其八个相邻位置（水平，垂直，对角线）的细胞都遵循以下四条生存定律：</p><ol><li>如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡；</li><li>如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活；</li><li>如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡；</li><li>如果死细胞周围正好有三个活细胞，则该位置死细胞复活；</li></ol><p>下一个状态是通过将上述规则同时应用于当前状态下的每个细胞所形成的，其中细胞的出生和死亡是同时发生的。给你 <code>m x n</code> 网格面板 <code>board</code> 的当前状态，返回下一个状态。</p><p><strong>进阶：</strong></p><p>你可以使用原地算法解决本题吗？请注意，面板上所有格子需要同时被更新：你不能先更新某些格子，然后使用它们的更新后的值再更新其他格子。</p><p>本题中，我们使用二维数组来表示面板。原则上，面板是无限的，但当活细胞侵占了面板边界时会造成问题。你将如何解决这些问题？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历 <code>board</code> 中的细胞。</li></ol><ul><li><p>根据数组的细胞状态计算新一轮的细胞状态，这里会用到能同时代表过去状态和现在状态的复合状态：</p><ul><li>规则 1：如果活细胞周围八个位置的活细胞数少于两个，则该位置活细胞死亡。这时候，将细胞值改为 <code>-1</code>，代表这个细胞过去是活的现在死了；</li><li>规则 2：如果活细胞周围八个位置有两个或三个活细胞，则该位置活细胞仍然存活。这时候不改变细胞的值，仍为 <code>1</code>；</li><li>规则 3：如果活细胞周围八个位置有超过三个活细胞，则该位置活细胞死亡。这时候，将细胞的值改为 <code>-1</code>，代表这个细胞过去是活的现在死了。可以看到，因为规则 1 和规则 3 下细胞的起始终止状态是一致的，因此它们的复合状态也一致；</li><li>规则 4：如果死细胞周围正好有三个活细胞，则该位置死细胞复活。这时候，将细胞的值改为 <code>2</code>，代表这个细胞过去是死的现在活了。</li></ul></li></ul><ol start="2"><li>根据新的规则更新数组。</li></ol><ul><li><p>现在复合状态隐含了过去细胞的状态，所以我们可以在不复制数组的情况下完成原地更新；</p></li><li><p>对于最终的输出，需要将 <code>board</code> 转成 <code>0</code>，<code>1</code> 的形式。因此这时候需要再遍历一次数组：</p><ul><li>将复合状态为 <code>2</code> 的细胞的值改为 <code>1</code></li><li>将复合状态为 <code>-1</code> 的细胞的值改为 <code>0</code></li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(mn)</code>，其中 <code>m</code>，<code>n</code> 分别为 <code>board</code> 的行数和列数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除原数组外只需要常数的空间存放若干变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify board in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">gameOfLife</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> neighbors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		rows <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		cols <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 遍历面板每一个格子里的细胞</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 对于每一个细胞统计其八个相邻位置里的活细胞数量</span>
			<span class="token keyword">let</span> liveNeighbors <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> y <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>neighbors<span class="token punctuation">[</span>x<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> neighbors<span class="token punctuation">[</span>y<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
						<span class="token comment">// 相邻位置的坐标</span>
						<span class="token keyword">let</span> r <span class="token operator">=</span> i <span class="token operator">+</span> neighbors<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">,</span>
							c <span class="token operator">=</span> j <span class="token operator">+</span> neighbors<span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>

						<span class="token comment">// 查看相邻的细胞是否是活细胞</span>
						<span class="token keyword">if</span> <span class="token punctuation">(</span>
							r <span class="token operator">&lt;</span> rows <span class="token operator">&amp;&amp;</span>
							r <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
							c <span class="token operator">&lt;</span> cols <span class="token operator">&amp;&amp;</span>
							c <span class="token operator">&gt;=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
							Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span>
						<span class="token punctuation">)</span> <span class="token punctuation">{</span>
							liveNeighbors<span class="token operator">++</span><span class="token punctuation">;</span>
						<span class="token punctuation">}</span>
					<span class="token punctuation">}</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 规则 1 或规则 3</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>liveNeighbors <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">||</span> liveNeighbors <span class="token operator">&gt;</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// -1 代表这个细胞过去是活的现在死了</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 规则 4</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> liveNeighbors <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 2 代表这个细胞过去是死的现在活了</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 遍历 board 得到一次更新后的状态</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),B=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),M=n("td",{style:{"text-align":"center"}},"73",-1),T={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},D={style:{"text-align":"left"}},H=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),F=n("code",null,"矩阵",-1),J={style:{"text-align":"left"}};function S(Y,K){const o=p("ExternalLinkIcon"),l=p("font"),e=p("RouterLink");return i(),r("div",null,[n("h1",m,[b,s(),n("a",h,[s("289. 生命游戏"),a(o)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[y,a(o)]),s(),n("a",w,[x,a(o)])]),j,n("p",null,[s("According to "),n("a",N,[s("Wikipedia's article"),a(o)]),s(': "The '),L,s(" , also known simply as "),C,s(' , is a cellular automaton devised by the British mathematician John Horton Conway in 1970."')]),n("p",null,[s("The board is made up of an "),E,s(" grid of cells, where each cell has an initial state: "),I,s(" (represented by a "),q,s(") or "),A,s(" (represented by a "),O,s("). Each cell interacts with its "),n("a",V,[s("eight neighbors"),a(o)]),s(" (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):")]),z,u(" prettier-ignore "),n("table",null,[B,n("tbody",null,[n("tr",null,[M,n("td",T,[n("a",G,[s("矩阵置零"),a(o)])]),n("td",R,[a(e,{to:"/problem/0073.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",D,[a(e,{to:"/tag/array.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[W]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[F]),_:1})]),n("td",J,[a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])])])])])}const Q=c(k,[["render",S],["__file","0289.html.vue"]]);export{Q as default};

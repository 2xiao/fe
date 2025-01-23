import{_ as r,r as p,o as i,c as d,a as n,b as s,d as a,w as e,f as u,e as c}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_909-蛇梯棋",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_909-蛇梯棋","aria-hidden":"true"},"#"),s(" 909. 蛇梯棋")],-1),m=n("code",null,"广度优先搜索",-1),b=n("code",null,"数组",-1),v=n("code",null,"矩阵",-1),g={href:"https://leetcode.cn/problems/snakes-and-ladders",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/snakes-and-ladders",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("code",null,"n x n",-1),q=n("code",null,"board",-1),E=n("code",null,"1",-1),B=n("code",null,"n2",-1),V={href:"https://en.wikipedia.org/wiki/Boustrophedon",target:"_blank",rel:"noopener noreferrer"},C=n("strong",null,"Boustrophedon style",-1),I=n("code",null,"board[n - 1][0]",-1),Y=c('<p>You start on square <code>1</code> of the board. In each move, starting from square <code>curr</code>, do the following:</p><ul><li>Choose a destination square <code>next</code> with a label in the range <code>[curr + 1, min(curr + 6, n2)]</code>. <ul><li>This choice simulates the result of a standard <strong>6-sided die roll</strong> : i.e., there are always at most 6 destinations, regardless of the size of the board.</li></ul></li><li>If <code>next</code> has a snake or ladder, you <strong>must</strong> move to the destination of that snake or ladder. Otherwise, you move to <code>next</code>.</li><li>The game ends when you reach the square <code>n2</code>.</li></ul><p>A board square on row <code>r</code> and column <code>c</code> has a snake or ladder if <code>board[r][c] != -1</code>. The destination of that snake or ladder is <code>board[r][c]</code>. Squares <code>1</code> and <code>n2</code> are not the starting points of any snake or ladder.</p><p>Note that you only take a snake or ladder at most once per move. If the destination to a snake or ladder is the start of another snake or ladder, you do <strong>not</strong> follow the subsequent snake or ladder.</p><ul><li>For example, suppose the board is <code>[[-1,4],[-1,3]]</code>, and on the first move, your destination square is <code>2</code>. You follow the ladder to square <code>3</code>, but do <strong>not</strong> follow the subsequent ladder to <code>4</code>.</li></ul><p>Return <em>the least number of moves required to reach the square</em><code>n2</code> <em>. If it is not possible to reach the square, return</em><code>-1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/09/23/snakes.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]</p><p>Output: 4</p><p>Explanation:</p><p>In the beginning, you start at square 1 (at row 5, column 0).</p><p>You decide to move to square 2 and must take the ladder to square 15.</p><p>You then decide to move to square 17 and must take the snake to square 13.</p><p>You then decide to move to square 14 and must take the ladder to square 35.</p><p>You then decide to move to square 36, ending the game.</p><p>This is the lowest possible number of moves to reach the last square, so return 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: board = [[-1,-1],[-1,3]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == board.length == board[i].length</code></li><li><code>2 &lt;= n &lt;= 20</code></li><li><code>board[i][j]</code> is either <code>-1</code> or in the range <code>[1, n2]</code>.</li><li>The squares labeled <code>1</code> and <code>n2</code> are not the starting points of any snake or ladder.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',14),A=n("code",null,"n x n",-1),L=n("code",null,"board",-1),N=n("code",null,"1",-1),T=n("code",null,"n2",-1),j={href:"https://baike.baidu.com/item/%E7%89%9B%E8%80%95%E5%BC%8F%E8%BD%AC%E8%A1%8C%E4%B9%A6%E5%86%99%E6%B3%95/17195786",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"board[n - 1][0]",-1),z=c(`<p>你一开始位于棋盘上的方格 <code>1</code>。每一回合，玩家需要从当前方格 <code>curr</code> 开始出发，按下述要求前进：</p><ul><li>选定目标方格 <code>next</code> ，目标方格的编号在范围 <code>[curr + 1, min(curr + 6, n2)]</code> 。 <ul><li>该选择模拟了掷 <strong>六面体骰子</strong> 的情景，无论棋盘大小如何，玩家最多只能有 6 个目的地。</li></ul></li><li>传送玩家：如果目标方格 <code>next</code> 处存在蛇或梯子，那么玩家会传送到蛇或梯子的目的地。否则，玩家传送到目标方格 <code>next</code> 。</li><li>当玩家到达编号 <code>n2</code> 的方格时，游戏结束。</li></ul><p>如果 <code>board[r][c] != -1</code> ，位于 <code>r</code> 行 <code>c</code> 列的棋盘格中可能存在 “蛇” 或 “梯子”。那个蛇或梯子的目的地将会是 <code>board[r][c]</code>。编号为 <code>1</code> 和 <code>n2</code> 的方格不是任何蛇或梯子的起点。</p><p>注意，玩家在每回合的前进过程中最多只能爬过蛇或梯子一次：就算目的地是另一条蛇或梯子的起点，玩家也 <strong>不能</strong> 继续移动。</p><ul><li>举个例子，假设棋盘是 <code>[[-1,4],[-1,3]]</code> ，第一次移动，玩家的目标方格是 <code>2</code> 。那么这个玩家将会顺着梯子到达方格 <code>3</code> ，但 <strong>不能</strong> 顺着方格 <code>3</code> 上的梯子前往方格 <code>4</code> 。（简单来说，类似飞行棋，玩家掷出骰子点数后移动对应格数，遇到单向的路径（即梯子或蛇）可以直接跳到路径的终点，但如果多个路径首尾相连，也不能连续跳多个路径）</li></ul><p>返回达到编号为 <code>n2</code> 的方格所需的最少移动次数，如果不可能，则返回 <code>-1</code>。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/09/23/snakes.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>首先，从方格 1 [第 5 行，第 0 列] 开始。</p><p>先决定移动到方格 2 ，并必须爬过梯子移动到到方格 15 。</p><p>然后决定移动到方格 17 [第 3 行，第 4 列]，必须爬过蛇到方格 13 。</p><p>接着决定移动到方格 14 ，且必须通过梯子移动到方格 35 。</p><p>最后决定移动到方格 36 , 游戏结束。</p><p>可以证明需要至少 4 次移动才能到达最后一个方格，所以答案是 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> board = [[-1,-1],[-1,3]]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == board.length == board[i].length</code></li><li><code>2 &lt;= n &lt;= 20</code></li><li><code>board[i][j]</code> 的值是 <code>-1</code> 或在范围 <code>[1, n2]</code> 内</li><li>编号为 <code>1</code> 和 <code>n2</code> 的方格上没有蛇或梯子</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道经典的广度优先搜索（BFS）题，可以将棋盘上的格子看作是图中的节点，骰子每次掷出的 1 到 6 个点表示节点之间的边，蛇和梯子则是特殊的移动规则。</p><ol><li><p><strong>棋盘展平</strong>：</p><ul><li>我们需要先把二维数组 <code>board</code> 变为一维的，方便进行线性搜索（因为棋盘上的数字是连续的）。</li><li>从左往右、从右往左依次交替走棋盘的每一行，确保与棋盘上的编号一致。</li></ul></li><li><p><strong>广度优先搜索</strong>：</p><ul><li>使用队列存储每次可能的下一步移动。</li><li>从起始位置 <code>1</code> 开始，每次投骰子可以从 <code>1</code> 到 <code>6</code> 步，每一步到达一个新的位置。如果该位置上有梯子或蛇，就直接传送到指定的目标位置。</li><li>为了避免重复访问位置，需要记录访问过的位置（<code>visited</code>）。</li></ul></li><li><p><strong>终止条件</strong>：</p><ul><li>当到达最后一格 <code>n * n</code> 时，返回移动的次数。</li><li>如果队列遍历结束还没到达终点，返回 <code>-1</code> 表示无法到达。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，因为棋盘的大小是 <code>n * n</code>，最坏情况下每个格子都需要被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，使用队列和访问记录数组 <code>visited</code> 来存储棋盘上的状态信息。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">snakesAndLadders</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">*</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 将二维的board转换为一维的数组</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getBoardValue</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> r <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> x <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> r<span class="token punctuation">;</span>
		<span class="token keyword">const</span> y <span class="token operator">=</span> r <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> n <span class="token operator">:</span> n <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> board<span class="token punctuation">[</span>x<span class="token punctuation">]</span><span class="token punctuation">[</span>y<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// [position, moves]</span>
	visited<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>pos<span class="token punctuation">,</span> moves<span class="token punctuation">]</span> <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果到达终点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>pos <span class="token operator">===</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> moves<span class="token punctuation">;</span>

		<span class="token comment">// 掷骰子，尝试走 1-6 步</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> <span class="token number">6</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> next <span class="token operator">=</span> pos <span class="token operator">+</span> i<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>next <span class="token operator">&gt;</span> n <span class="token operator">*</span> n<span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span>

			<span class="token keyword">const</span> boardValue <span class="token operator">=</span> <span class="token function">getBoardValue</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>boardValue <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				next <span class="token operator">=</span> boardValue<span class="token punctuation">;</span> <span class="token comment">// 如果有梯子或蛇，跳到目标位置</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				visited<span class="token punctuation">[</span>next<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
				queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>next<span class="token punctuation">,</span> moves <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 如果不能到达终点</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),F=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),R=n("td",{style:{"text-align":"center"}},"2467",-1),S=n("td",{style:{"text-align":"left"}},"树上最大得分和路径",-1),M=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},G=n("code",null,"树",-1),H=n("code",null,"深度优先搜索",-1),J=n("code",null,"广度优先搜索",-1),K=n("code",null,"2+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/most-profitable-path-in-a-tree",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/most-profitable-path-in-a-tree",target:"_blank",rel:"noopener noreferrer"};function X(Z,$){const l=p("font"),t=p("RouterLink"),o=p("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/matrix.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",g,[_,a(o)]),s(),n("a",f,[y,a(o)])]),x,n("p",null,[s("You are given an "),w,s(" integer matrix "),q,s(" where the cells are labeled from "),E,s(" to "),B,s(" in a "),n("a",V,[C,a(o)]),s(" starting from the bottom left of the board (i.e. "),I,s(") and alternating direction each row.")]),Y,n("p",null,[s("给你一个大小为 "),A,s(" 的整数矩阵 "),L,s(" ，方格按从 "),N,s(" 到 "),T,s(" 编号，编号遵循 "),n("a",j,[s("转行交替方式"),a(o)]),s(" ，从左下角开始 （即，从 "),O,s(" 开始）的每一行改变方向。")]),z,u(" prettier-ignore "),n("table",null,[F,n("tbody",null,[n("tr",null,[R,S,M,n("td",D,[a(t,{to:"/tag/tree.html"},{default:e(()=>[G]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[H]),_:1}),s(),a(t,{to:"/tag/breadth-first-search.html"},{default:e(()=>[J]),_:1}),s(),K]),P,n("td",Q,[n("a",U,[s("🀄️"),a(o)]),s(),n("a",W,[s("🔗"),a(o)])])])])])])}const sn=r(k,[["render",X],["__file","0909.html.vue"]]);export{sn as default};

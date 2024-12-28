import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fEpXkbSw.js";const k={},m=n("h1",{id:"_1275-找出井字棋的获胜者",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1275-找出井字棋的获胜者","aria-hidden":"true"},"#"),s(" 1275. 找出井字棋的获胜者")],-1),g=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),v=n("code",null,"矩阵",-1),b=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/find-winner-on-a-tic-tac-toe-game",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>Tic-tac-toe</strong> is played by two players <code>A</code> and <code>B</code> on a <code>3 x 3</code> grid. The rules of Tic-Tac-Toe are:</p><ul><li>Players take turns placing characters into empty squares <code>&#39; &#39;</code>.</li><li>The first player <code>A</code> always places <code>&#39;X&#39;</code> characters, while the second player <code>B</code> always places <code>&#39;O&#39;</code> characters.</li><li><code>&#39;X&#39;</code> and <code>&#39;O&#39;</code> characters are always placed into empty squares, never on filled ones.</li><li>The game ends when there are <strong>three</strong> of the same (non-empty) character filling any row, column, or diagonal.</li><li>The game also ends if all squares are non-empty.</li><li>No more moves can be played if the game is over.</li></ul><p>Given a 2D integer array <code>moves</code> where <code>moves[i] = [rowi, coli]</code> indicates that the <code>ith</code> move will be played on <code>grid[rowi][coli]</code>. return <em>the winner of the game if it exists</em> (<code>A</code> or <code>B</code>). In case the game ends in a draw return <code>&quot;Draw&quot;</code>. If there are still movements to play return <code>&quot;Pending&quot;</code>.</p><p>You can assume that <code>moves</code> is valid (i.e., it follows the rules of <strong>Tic-Tac- Toe</strong>), the grid is initially empty, and <code>A</code> will play first.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]</p><p>Output: &quot;A&quot;</p><p>Explanation: A wins, they always play first.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]</p><p>Output: &quot;B&quot;</p><p>Explanation: B wins.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo3-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]</p><p>Output: &quot;Draw&quot;</p><p>Explanation: The game ends in a draw since there are no moves to make.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= moves.length &lt;= 9</code></li><li><code>moves[i].length == 2</code></li><li><code>0 &lt;= rowi, coli &lt;= 2</code></li><li>There are no repeated elements on <code>moves</code>.</li><li><code>moves</code> follow the rules of tic tac toe.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>井字棋</strong>是由两个玩家 <code>A</code> 和 <code>B</code> 在 <code>3 x 3</code> 的棋盘上进行的游戏。井字棋游戏的规则如下：</p><ul><li>玩家轮流将棋子放在空方格 (<code>&#39; &#39;</code>) 上。</li><li>第一个玩家 <code>A</code> 总是用 <code>&#39;X&#39;</code> 作为棋子，而第二个玩家 <code>B</code> 总是用 <code>&#39;O&#39;</code> 作为棋子。</li><li><code>&#39;X&#39;</code> 和 <code>&#39;O&#39;</code> 只能放在空方格中，而不能放在已经被占用的方格上。</li><li>只要有 <strong>3</strong> 个相同的（非空）棋子排成一条直线（行、列、对角线）时，游戏结束。</li><li>如果所有方块都放满棋子（不为空），游戏也会结束。</li><li>游戏结束后，棋子无法再进行任何移动。</li></ul><p>给你一个数组 <code>moves</code>，其中 <code>moves[i] = [rowi, coli]</code> 表示第 <code>i</code> 次移动在 <code>grid[rowi][coli]</code>。如果游戏存在获胜者（<code>A</code> 或 <code>B</code>），就返回该游戏的获胜者；如果游戏以平局结束，则返回 <code>&quot;Draw&quot;</code>；如果仍会有行动（游戏未结束），则返回 <code>&quot;Pending&quot;</code>。</p><p>你可以假设 <code>moves</code> 都 <strong>有效</strong> （遵循 <strong>井字棋</strong> 规则），网格最初是空的，<code>A</code> 将先行动。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo1-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> moves = [[0,0],[2,0],[1,1],[2,1],[2,2]]</p><p><strong>输出：</strong> &quot;A&quot;</p><p><strong>解释：</strong> &quot;A&quot; 获胜，他总是先走。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo2-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> moves = [[0,0],[1,1],[0,1],[0,2],[1,0],[2,0]]</p><p><strong>输出：</strong> &quot;B&quot;</p><p><strong>解释：</strong> &quot;B&quot; 获胜。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/22/xo3-grid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> moves = [[0,0],[1,1],[2,0],[1,0],[1,2],[2,1],[0,1],[0,2],[2,2]]</p><p><strong>输出：</strong> &quot;Draw&quot;</p><p><strong>解释：</strong> 由于没有办法再行动，游戏以平局结束。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= moves.length &lt;= 9</code></li><li><code>moves[i].length == 2</code></li><li><code>0 &lt;= moves[i][j] &lt;= 2</code></li><li><code>moves</code> 里没有重复的元素。</li><li><code>moves</code> 遵循井字棋的规则。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>使用一个二维数组 <code>grid</code> 模拟棋盘，初始化为空；</li><li>遍历 <code>moves</code>，按顺序将玩家的标记填入棋盘（<strong>X</strong> 或 <strong>O</strong>）；</li><li>每次填入后检查棋盘是否有获胜者，检查方式包括： <ul><li>每行、每列是否有相同标记；</li><li>两条对角线是否有相同标记；</li></ul></li><li>若某玩家获胜，立即返回该玩家的标记；</li><li>遍历结束后，根据是否填满棋盘判断返回 <code>&quot;Draw&quot;</code> 或 <code>&quot;Pending&quot;</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(1)</code></p><ul><li>棋盘填充：需要遍历 <code>moves</code>，长度最大为 9，耗时 <code>O(1)</code>。</li><li>检查获胜情况：每次检查棋盘行、列和对角线，耗时 <code>O(1)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，棋盘数组占用 <code>3 * 3</code> 的固定空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">moves</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">tictactoe</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">moves</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> grid <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化棋盘</span>

	<span class="token comment">// 填充棋盘</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> moves<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>r<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> moves<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		grid<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">&#39;X&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 奇偶数决定玩家</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查获胜情况</span>
	<span class="token keyword">const</span> <span class="token function-variable function">check</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查行和列</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 检查两条对角线</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>grid<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> x <span class="token operator">&amp;&amp;</span> grid<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断结果</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">&#39;X&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;B&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>moves<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">9</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;Draw&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 棋盘填满</span>
	<span class="token keyword">return</span> <span class="token string">&#39;Pending&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 棋局未结束</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"2525",-1),B=n("td",{style:{"text-align":"left"}},"根据规则将箱子分类",-1),O=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},j=n("code",null,"数学",-1),E=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/categorize-box-according-to-criteria",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/categorize-box-according-to-criteria",target:"_blank",rel:"noopener noreferrer"};function X(N,C){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/matrix.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/simulation.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[y,a(o)]),s(),n("a",_,[w,a(o)])]),x,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[A,B,O,n("td",T,[a(e,{to:"/tag/math.html"},{default:t(()=>[j]),_:1})]),E,n("td",z,[n("a",D,[s("🀄️"),a(o)]),s(),n("a",I,[s("🔗"),a(o)])])])])])])}const P=l(k,[["render",X],["__file","1275.html.vue"]]);export{P as default};

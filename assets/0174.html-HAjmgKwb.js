import{_ as l,r as c,o as i,c as r,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-Ob52y8QZ.js";const h="/leetcode-js/assets/174-d6TDM8Dt.png",k={},m=n("h1",{id:"_174-地下城游戏",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_174-地下城游戏","aria-hidden":"true"},"#"),t(" 174. 地下城游戏")],-1),_=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),f=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/dungeon-game",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),j=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The demons had captured the princess and imprisoned her in <strong>the bottom-right corner</strong> of a <code>dungeon</code>. The <code>dungeon</code> consists of <code>m x n</code> rooms laid out in a 2D grid. Our valiant knight was initially positioned in <strong>the top-left room</strong> and must fight his way through <code>dungeon</code> to rescue the princess.</p><p>The knight has an initial health point represented by a positive integer. If at any point his health point drops to <code>0</code> or below, he dies immediately.</p><p>Some of the rooms are guarded by demons (represented by negative integers), so the knight loses health upon entering these rooms; other rooms are either empty (represented as 0) or contain magic orbs that increase the knight&#39;s health (represented by positive integers).</p><p>To reach the princess as quickly as possible, the knight decides to move only <strong>rightward</strong> or <strong>downward</strong> in each step.</p><p>Return <em>the knight &#39;s minimum initial health so that he can rescue the princess</em>.</p><p><strong>Note</strong> that any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/13/dungeon-grid-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: dungeon = [[-2,-3,3],[-5,-10,1],[10,30,-5]]</p><p>Output: 7</p><p>Explanation: The initial health of the knight must be at least 7 if he follows the optimal path: RIGHT-&gt; RIGHT -&gt; DOWN -&gt; DOWN.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: dungeon = [[0]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == dungeon.length</code></li><li><code>n == dungeon[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>-1000 &lt;= dungeon[i][j] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>恶魔们抓住了公主并将她关在了地下城 <code>dungeon</code> 的 右下角 。地下城是由 <code>m x n</code> 个房间组成的二维网格。我们英勇的骑士最初被安置在 <strong>左上角</strong> 的房间里，他必须穿过地下城并通过对抗恶魔来拯救公主。</p><p>骑士的初始健康点数为一个正整数。如果他的健康点数在某一时刻降至 <code>0</code> 或以下，他会立即死亡。</p><p>有些房间由恶魔守卫，因此骑士在进入这些房间时会失去健康点数（若房间里的值为负整数，则表示骑士将损失健康点数）；其他房间要么是空的（房间里的值为 <code>0</code>），要么包含增加骑士健康点数的魔法球（若房间里的值为正整数，则表示骑士将增加健康点数）。</p><p>为了尽快解救公主，骑士决定每次只 <strong>向右</strong> 或 <strong>向下</strong> 移动一步。</p><p>返回确保骑士能够拯救到公主所需的最低初始健康点数。</p><p><strong>注意</strong>：任何房间都可能对骑士的健康点数造成威胁，也可能增加骑士的健康点数，包括骑士进入的左上角房间以及公主被监禁的右下角房间。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p><strong>错误的做法</strong>：</p><ul><li><p>这道题对 <code>dp</code> 数组的定义比较有意思，按照常理，<code>dp</code> 数组的定义应该是：从左上角 <code>(0, 0)</code> 走到 <code>(i, j)</code> 至少需要 <code>dp[i][j]</code> 的生命值。</p></li><li><p>但是如果只知道「能够从左上角到达 <code>(i, j)</code> 的最小生命值」，但并不知道「到达 <code>(i, j)</code> 时的生命值」，就无法进行状态转移。例如下面这种情况：</p></li></ul><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>图中，骑士救公主的最优路线是按照图中蓝色的线走到 <code>B</code>，最后走到 <code>A</code> ，这样初始血量只需要 <code>1</code> ；如果走黄色箭头这条路，先走到 <code>C</code> 然后走到 <code>A</code>，初始血量至少需要 <code>6</code>。</li><li>因为骑士走到 <code>B</code> 的时候生命值为 <code>11</code>，而走到 <code>C</code> 的时候生命值依然是 <code>1</code>。所以虽然骑士走到 <code>B</code> 和 <code>C</code> 的最少初始血量都是 <code>1</code>，但是最后需要选择从 <code>B</code> 走到 <code>A</code> 。</li><li><strong>所以说，之前对 <code>dp</code> 数组的定义是错误的，信息量不足，算法无法做出正确的状态转移。</strong></li></ul></li><li><p><strong>正确的做法</strong>：</p><ul><li>正确的做法需要反向思考，<code>dp</code> 数组的定义为：<strong>从 <code>(i, j)</code> 到达终点（右下角）所需的最少生命值是 <code>dp[i][j]</code>。</strong></li><li>从右下角开始逆向遍历，通过 <code>dp[i][j+1]</code> 和 <code>dp[i+1][j]</code> 推导出 <code>dp[i][j]</code>，最后返回 <code>dp[0][0]</code>。</li><li><strong>状态转移方程</strong>：<code>dp[i][j] = max(1, min(dp[i+1][j], dp[i][j+1]) - dungeon[i][j])</code>，其中 <code>dp[i+1][j]</code> 和 <code>dp[i][j+1]</code> 分别表示从下方和右方到达 <code>(i, j)</code> 的最小生命值，然后减去当前格子所需的生命值，最后取最大值为当前格子所需的最小生命值。</li><li><strong>初始化边界</strong>：为了处理边界情况，需要在右下角、最后一行、最后一列的位置初始化。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code>，遍历整个二维数组。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code>，使用了一个二维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">dungeon</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calculateMinimumHP</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dungeon</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> dungeon<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> dungeon<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 初始化 dp 数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理右下角的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理最后一行的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 处理最后一列的边界情况</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>
					<span class="token number">1</span><span class="token punctuation">,</span>
					Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">-</span> dungeon<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span>
				<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"62",-1),q=n("td",{style:{"text-align":"left"}},"不同路径",-1),T={style:{"text-align":"center"}},C={style:{"text-align":"left"}},N=n("code",null,"数学",-1),B=n("code",null,"动态规划",-1),I=n("code",null,"组合数学",-1),O={style:{"text-align":"left"}},E={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/unique-paths",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"64",-1),L=n("td",{style:{"text-align":"left"}},"最小路径和",-1),R={style:{"text-align":"center"}},V={style:{"text-align":"left"}},z=n("code",null,"数组",-1),G=n("code",null,"动态规划",-1),S=n("code",null,"矩阵",-1),W={style:{"text-align":"left"}},K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/minimum-path-sum",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"741",-1),Q=n("td",{style:{"text-align":"left"}},"摘樱桃",-1),U=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),Z=n("code",null,"动态规划",-1),$=n("code",null,"矩阵",-1),nn={style:{"text-align":"left"}},tn={style:{"text-align":"center"}},sn={href:"https://leetcode.cn/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/cherry-pickup",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"2214",-1),on=n("td",{style:{"text-align":"left"}},"通关游戏所需的最低生命值 🔒",-1),pn=n("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},ln=n("code",null,"贪心",-1),rn=n("code",null,"数组",-1),dn={style:{"text-align":"left"}},un={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/minimum-health-to-beat-game",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/minimum-health-to-beat-game",target:"_blank",rel:"noopener noreferrer"},mn=n("td",{style:{"text-align":"center"}},"2304",-1),_n=n("td",{style:{"text-align":"left"}},"网格中的最小路径代价",-1),gn=n("td",{style:{"text-align":"center"}},null,-1),fn={style:{"text-align":"left"}},bn=n("code",null,"数组",-1),yn=n("code",null,"动态规划",-1),xn=n("code",null,"矩阵",-1),vn={style:{"text-align":"left"}},jn={style:{"text-align":"center"}},wn={href:"https://leetcode.cn/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},Mn={href:"https://leetcode.com/problems/minimum-path-cost-in-a-grid",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"center"}},"2435",-1),Tn=n("td",{style:{"text-align":"left"}},"矩阵中和能被 K 整除的路径",-1),Cn=n("td",{style:{"text-align":"center"}},null,-1),Nn={style:{"text-align":"left"}},Bn=n("code",null,"数组",-1),In=n("code",null,"动态规划",-1),On=n("code",null,"矩阵",-1),En={style:{"text-align":"left"}},Hn={style:{"text-align":"center"}},An={href:"https://leetcode.cn/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Dn={href:"https://leetcode.com/problems/paths-in-matrix-whose-sum-is-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},Ln=n("td",{style:{"text-align":"center"}},"2510",-1),Rn=n("td",{style:{"text-align":"left"}},"检查是否有路径经过相同数量的 0 和 1 🔒",-1),Vn=n("td",{style:{"text-align":"center"}},null,-1),zn={style:{"text-align":"left"}},Gn=n("code",null,"数组",-1),Sn=n("code",null,"动态规划",-1),Wn=n("code",null,"矩阵",-1),Kn={style:{"text-align":"left"}},Pn={style:{"text-align":"center"}},Fn={href:"https://leetcode.cn/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"},Jn={href:"https://leetcode.com/problems/check-if-there-is-a-path-with-equal-number-of-0s-and-1s",target:"_blank",rel:"noopener noreferrer"};function Qn(Un,Xn){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[t("🔴 "),s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[f]),_:1}),t("  🔗 "),n("a",b,[y,s(o)]),t(),n("a",x,[v,s(o)])]),j,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[M,q,n("td",T,[s(e,{to:"/problem/0062.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",C,[s(e,{to:"/tag/math.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/tag/combinatorics.html"},{default:a(()=>[I]),_:1})]),n("td",O,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})]),n("td",E,[n("a",H,[t("🀄️"),s(o)]),t(),n("a",A,[t("🔗"),s(o)])])]),n("tr",null,[D,L,n("td",R,[s(e,{to:"/problem/0064.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",V,[s(e,{to:"/tag/array.html"},{default:a(()=>[z]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[S]),_:1})]),n("td",W,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})]),n("td",K,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",F,[t("🔗"),s(o)])])]),n("tr",null,[J,Q,U,n("td",X,[s(e,{to:"/tag/array.html"},{default:a(()=>[Y]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Z]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[$]),_:1})]),n("td",nn,[s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})]),n("td",tn,[n("a",sn,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])]),n("tr",null,[en,on,pn,n("td",cn,[s(e,{to:"/tag/greedy.html"},{default:a(()=>[ln]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[rn]),_:1})]),n("td",dn,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})]),n("td",un,[n("a",hn,[t("🀄️"),s(o)]),t(),n("a",kn,[t("🔗"),s(o)])])]),n("tr",null,[mn,_n,gn,n("td",fn,[s(e,{to:"/tag/array.html"},{default:a(()=>[bn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[yn]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[xn]),_:1})]),n("td",vn,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})]),n("td",jn,[n("a",wn,[t("🀄️"),s(o)]),t(),n("a",Mn,[t("🔗"),s(o)])])]),n("tr",null,[qn,Tn,Cn,n("td",Nn,[s(e,{to:"/tag/array.html"},{default:a(()=>[Bn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[In]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[On]),_:1})]),n("td",En,[s(p,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1})]),n("td",Hn,[n("a",An,[t("🀄️"),s(o)]),t(),n("a",Dn,[t("🔗"),s(o)])])]),n("tr",null,[Ln,Rn,Vn,n("td",zn,[s(e,{to:"/tag/array.html"},{default:a(()=>[Gn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[Sn]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[Wn]),_:1})]),n("td",Kn,[s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})]),n("td",Pn,[n("a",Fn,[t("🀄️"),s(o)]),t(),n("a",Jn,[t("🔗"),s(o)])])])])])])}const Zn=l(k,[["render",Qn],["__file","0174.html.vue"]]);export{Zn as default};

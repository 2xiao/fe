import{_ as i,r as p,o as l,c as r,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_2463-最小移动总距离",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2463-最小移动总距离","aria-hidden":"true"},"#"),t(" 2463. 最小移动总距离")],-1),m=n("code",null,"数组",-1),b=n("code",null,"动态规划",-1),g=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/minimum-total-distance-traveled",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/minimum-total-distance-traveled",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are some robots and factories on the X-axis. You are given an integer array <code>robot</code> where <code>robot[i]</code> is the position of the <code>ith</code> robot. You are also given a 2D integer array <code>factory</code> where <code>factory[j] = [positionj, limitj]</code> indicates that <code>positionj</code> is the position of the <code>jth</code> factory and that the <code>jth</code> factory can repair at most <code>limitj</code> robots.</p><p>The positions of each robot are <strong>unique</strong>. The positions of each factory are also <strong>unique</strong>. Note that a robot can be <strong>in the same position</strong> as a factory initially.</p><p>All the robots are initially broken; they keep moving in one direction. The direction could be the negative or the positive direction of the X-axis. When a robot reaches a factory that did not reach its limit, the factory repairs the robot, and it stops moving.</p><p><strong>At any moment</strong> , you can set the initial direction of moving for <strong>some</strong> robot. Your target is to minimize the total distance traveled by all the robots.</p><p>Return <em>the minimum total distance traveled by all the robots</em>. The test cases are generated such that all the robots can be repaired.</p><p><strong>Note that</strong></p><ul><li>All robots move at the same speed.</li><li>If two robots move in the same direction, they will never collide.</li><li>If two robots move in opposite directions and they meet at some point, they do not collide. They cross each other.</li><li>If a robot passes by a factory that reached its limits, it crosses it as if it does not exist.</li><li>If the robot moved from a position <code>x</code> to a position <code>y</code>, the distance it moved is <code>|y - x|</code>.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/15/example1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: robot = [0,4,6], factory = [[2,2],[6,2]]</p><p>Output: 4</p><p>Explanation: As shown in the figure:</p><ul><li>The first robot at position 0 moves in the positive direction. It will be repaired at the first factory.</li><li>The second robot at position 4 moves in the negative direction. It will be repaired at the first factory.</li><li>The third robot at position 6 will be repaired at the second factory. It does not need to move.</li></ul><p>The limit of the first factory is 2, and it fixed 2 robots.</p><p>The limit of the second factory is 2, and it fixed 1 robot.</p><p>The total distance is |2 - 0| + |2 - 4| + |6 - 6| = 4. It can be shown that we cannot achieve a better total distance than 4.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/09/15/example-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: robot = [1,-1], factory = [[-2,1],[2,1]]</p><p>Output: 2</p><p>Explanation: As shown in the figure:</p><ul><li>The first robot at position 1 moves in the positive direction. It will be repaired at the second factory.</li><li>The second robot at position -1 moves in the negative direction. It will be repaired at the first factory.</li></ul><p>The limit of the first factory is 1, and it fixed 1 robot.</p><p>The limit of the second factory is 1, and it fixed 1 robot.</p><p>The total distance is |2 - 1| + |(-2) - (-1)| = 2. It can be shown that we cannot achieve a better total distance than 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= robot.length, factory.length &lt;= 100</code></li><li><code>factory[j].length == 2</code></li><li><code>-10^9 &lt;= robot[i], positionj &lt;= 10^9</code></li><li><code>0 &lt;= limitj &lt;= robot.length</code></li><li>The input will be generated such that it is always possible to repair every robot.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>X 轴上有一些机器人和工厂。给你一个整数数组 <code>robot</code> ，其中 <code>robot[i]</code> 是第 <code>i</code> 个机器人的位置。再给你一个二维整数数组 <code>factory</code> ，其中 <code>factory[j] = [positionj, limitj]</code> ，表示第 <code>j</code> 个工厂的位置在 <code>positionj</code> ，且第 <code>j</code> 个工厂最多可以修理 <code>limitj</code> 个机器人。</p><p>每个机器人所在的位置 <strong>互不相同</strong> 。每个工厂所在的位置也 <strong>互不相同</strong> 。注意一个机器人可能一开始跟一个工厂在 <strong>相同的位置</strong> 。</p><p>所有机器人一开始都是坏的，他们会沿着设定的方向一直移动。设定的方向要么是 X 轴的正方向，要么是 X 轴的负方向。当一个机器人经过一个没达到上限的工厂时，这个工厂会维修这个机器人，且机器人停止移动。</p><p><strong>任何时刻</strong> ，你都可以设置 <strong>部分</strong> 机器人的移动方向。你的目标是最小化所有机器人总的移动距离。</p><p>请你返回所有机器人移动的最小总距离。测试数据保证所有机器人都可以被维修。</p><p><strong>注意：</strong></p><ul><li>所有机器人移动速度相同。</li><li>如果两个机器人移动方向相同，它们永远不会碰撞。</li><li>如果两个机器人迎面相遇，它们也不会碰撞，它们彼此之间会擦肩而过。</li><li>如果一个机器人经过了一个已经达到上限的工厂，机器人会当作工厂不存在，继续移动。</li><li>机器人从位置 <code>x</code> 到位置 <code>y</code> 的移动距离为 <code>|y - x|</code> 。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://pic.leetcode-cn.com/1667542978-utuiPv-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> robot = [0,4,6], factory = [[2,2],[6,2]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 如上图所示：</p><ul><li>第一个机器人从位置 0 沿着正方向移动，在第一个工厂处维修。</li><li>第二个机器人从位置 4 沿着负方向移动，在第一个工厂处维修。</li><li>第三个机器人在位置 6 被第二个工厂维修，它不需要移动。</li></ul><p>第一个工厂的维修上限是 2 ，它维修了 2 个机器人。</p><p>第二个工厂的维修上限是 2 ，它维修了 1 个机器人。</p><p>总移动距离是 |2 - 0| + |2 - 4| + |6 - 6| = 4 。没有办法得到比 4 更少的总移动距离。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://pic.leetcode-cn.com/1667542984-OAIRFN-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> robot = [1,-1], factory = [[-2,1],[2,1]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 如上图所示：</p><ul><li>第一个机器人从位置 1 沿着正方向移动，在第二个工厂处维修。</li><li>第二个机器人在位置 -1 沿着负方向移动，在第一个工厂处维修。</li></ul><p>第一个工厂的维修上限是 1 ，它维修了 1 个机器人。</p><p>第二个工厂的维修上限是 1 ，它维修了 1 个机器人。</p><p>总移动距离是 |2 - 1| + |(-2) - (-1)| = 2 。没有办法得到比 2 更少的总移动距离。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= robot.length, factory.length &lt;= 100</code></li><li><code>factory[j].length == 2</code></li><li><code>-10^9 &lt;= robot[i], positionj &lt;= 10^9</code></li><li><code>0 &lt;= limitj &lt;= robot.length</code></li><li>测试数据保证所有机器人都可以被维修。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来解决这个问题。</p><ol><li><p><strong>排序</strong>：首先对机器人和工厂的位置进行排序，以便于后续的计算。</p></li><li><p><strong>动态规划表</strong>：创建一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示前 <code>i</code> 个机器人使用前 <code>j</code> 个工厂的最小移动距离。</p></li><li><p><strong>初始化</strong>：</p><ul><li>初始化 <code>dp[0][0] = 0</code>，表示没有机器人和工厂的情况，总移动距离为 0。</li><li>对于其他状态，可以初始化为无穷大（表示不可能的状态）。</li></ul></li><li><p><strong>状态转移</strong>：</p><ul><li><p>使用内层循环来尝试当前工厂修理 <code>k</code> 个机器人，<code>k</code> 的范围是从 <code>0</code> 到当前工厂的限制（即 <code>limit[j]</code>），并且不能超过当前机器人的数量 <code>i</code>。</p></li><li><p>若不使用当前工厂，即：<code>k = 0</code> 时，<code>dp[i][j] = dp[i][j - 1]</code>；</p></li><li><p>若使用当前工厂修理 1 个机器人，即 k = 1 时，<code>dp[i][j] = dp[i - 1][j - 1] + distance</code>；</p><ul><li>其中 <code>distance</code> 是第 <code>i</code> 个机器人到第 <code>j</code> 个工厂的距离，即 <code>distance = Math.abs(robot[i - 1] - factory[j - 1][0])</code>；</li></ul></li><li><p>依此类推，遍历所有可能的 <code>k</code> 种情况，找出 <code>dp[i][j]</code> 的最小值。</p></li></ul></li><li><p><strong>结果返回</strong>：返回 <code>dp[n][m]</code>，即所有机器人使用所有工厂的最小总距离。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m * limit)</code>，其中 <code>n</code> 是机器人的数量，<code>m</code> 是工厂的数量，<code>limit</code> 是所有工厂的最大修理能力。</li><li><strong>空间复杂度</strong>：<code>O(n * m)</code>，用于存储 dp 表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">robot</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">factory</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumTotalDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">robot<span class="token punctuation">,</span> factory</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将工厂和机器人按位置排序</span>
	robot<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	factory<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> n <span class="token operator">=</span> robot<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		m <span class="token operator">=</span> factory<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// dp[i][j] 表示前 i 个机器人用前 j 个工厂的最小总距离</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始状态，0 个机器人和 0 个工厂的总距离为 0</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> m<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>position<span class="token punctuation">,</span> limit<span class="token punctuation">]</span> <span class="token operator">=</span> factory<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 不使用这个工厂的情况</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token comment">// 尝试用当前工厂修理 k 个机器人</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> k <span class="token operator">&lt;=</span> limit <span class="token operator">&amp;&amp;</span> i <span class="token operator">&gt;=</span> k<span class="token punctuation">;</span> k<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				distance <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>robot<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span> <span class="token operator">-</span> position<span class="token punctuation">)</span><span class="token punctuation">;</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> k<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> distance<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">[</span>m<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,40),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1011",-1),T=n("td",{style:{"text-align":"left"}},"在 D 天内送达包裹的能力",-1),I=n("td",{style:{"text-align":"center"}},null,-1),q={style:{"text-align":"left"}},A=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),E=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/capacity-to-ship-packages-within-d-days",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/capacity-to-ship-packages-within-d-days",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2585",-1),V=n("td",{style:{"text-align":"left"}},"获得分数的方法数",-1),X=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},B=n("code",null,"数组",-1),D=n("code",null,"动态规划",-1),M=n("td",{style:{"text-align":"center"}},"🔴",-1),Y={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/number-of-ways-to-earn-points",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/number-of-ways-to-earn-points",target:"_blank",rel:"noopener noreferrer"};function P(S,W){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return l(),r("div",null,[h,n("p",null,[t("🔴 "),s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(o,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[b]),_:1}),t(),s(o,{to:"/tag/sorting.html"},{default:a(()=>[g]),_:1}),t("  🔗 "),n("a",f,[v,s(e)]),t(),n("a",y,[_,s(e)])]),x,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[w,T,I,n("td",q,[s(o,{to:"/tag/array.html"},{default:a(()=>[A]),_:1}),t(),s(o,{to:"/tag/binary-search.html"},{default:a(()=>[N]),_:1})]),E,n("td",z,[n("a",C,[t("🀄️"),s(e)]),t(),n("a",L,[t("🔗"),s(e)])])]),n("tr",null,[O,V,X,n("td",R,[s(o,{to:"/tag/array.html"},{default:a(()=>[B]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[D]),_:1})]),M,n("td",Y,[n("a",F,[t("🀄️"),s(e)]),t(),n("a",H,[t("🔗"),s(e)])])])])])])}const J=i(k,[["render",P],["__file","2463.html.vue"]]);export{J as default};

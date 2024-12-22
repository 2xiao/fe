import{_ as r,r as c,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-U2ekqv2z.js";const h={},m=e("h1",{id:"_657-机器人能否返回原点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_657-机器人能否返回原点","aria-hidden":"true"},"#"),t(" 657. 机器人能否返回原点")],-1),k=e("code",null,"字符串",-1),_=e("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/robot-return-to-origin",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/robot-return-to-origin",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a robot starting at the position <code>(0, 0)</code>, the origin, on a 2D plane. Given a sequence of its moves, judge if this robot <strong>ends up at</strong><code>(0, 0)</code> after it completes its moves.</p><p>You are given a string <code>moves</code> that represents the move sequence of the robot where <code>moves[i]</code> represents its <code>ith</code> move. Valid moves are <code>&#39;R&#39;</code> (right), <code>&#39;L&#39;</code> (left), <code>&#39;U&#39;</code> (up), and <code>&#39;D&#39;</code> (down).</p><p>Return <code>true</code> <em>if the robot returns to the origin after it finishes all of its moves, or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Note</strong> : The way that the robot is &quot;facing&quot; is irrelevant. <code>&#39;R&#39;</code> will always make the robot move to the right once, <code>&#39;L&#39;</code> will always make it move left, etc. Also, assume that the magnitude of the robot&#39;s movement is the same for each move.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: moves = &quot;UD&quot;</p><p>Output: true</p><p><strong>Explanation</strong> : The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: moves = &quot;LL&quot;</p><p>Output: false</p><p><strong>Explanation</strong> : The robot moves left twice. It ends up two &quot;moves&quot; to the left of the origin. We return false because it is not at the origin at the end of its moves.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= moves.length &lt;= 2 * 10^4</code></li><li><code>moves</code> only contains the characters <code>&#39;U&#39;</code>, <code>&#39;D&#39;</code>, <code>&#39;L&#39;</code> and <code>&#39;R&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在二维平面上，有一个机器人从原点 <code>(0, 0)</code> 开始。给出它的移动顺序，判断这个机器人在完成移动后是否在** <code>(0, 0)</code> 处结束**。</p><p>移动顺序由字符串 <code>moves</code> 表示。字符 <code>move[i]</code> 表示其第 <code>i</code> 次移动。机器人的有效动作有 <code>R</code>（右），<code>L</code>（左），<code>U</code>（上）和 <code>D</code>（下）。</p><p>如果机器人在完成所有动作后返回原点，则返回 <code>true</code>。否则，返回 <code>false</code>。</p><p><strong>注意：</strong> 机器人“面朝”的方向无关紧要。 <code>“R”</code> 将始终使机器人向右移动一次，<code>“L”</code> 将始终向左移动等。此外，假设每次移动机器人的移动幅度相同。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> moves = &quot;UD&quot;</p><p><strong>输出:</strong> true</p><p><strong>解释：</strong> 机器人向上移动一次，然后向下移动一次。所有动作都具有相同的幅度，因此它最终回到它开始的原点。因此，我们返回 true。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> moves = &quot;LL&quot;</p><p><strong>输出:</strong> false</p><p><strong>解释：</strong> 机器人向左移动两次。它最终位于原点的左侧，距原点有两次 “移动” 的距离。我们返回 false，因为它在移动结束时没有返回原点。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= moves.length &lt;= 2 * 10^4</code></li><li><code>moves</code> 只包含字符 <code>&#39;U&#39;</code>, <code>&#39;D&#39;</code>, <code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化两个变量 <code>x</code> 和 <code>y</code>，表示当前位置的坐标，初始值为 <code>(0, 0)</code>。</li><li>遍历 <code>moves</code> 字符串，对于每个字符，根据其指示的方向更新坐标： <ul><li><code>&#39;L&#39;</code>：表示向左移动，<code>x</code> 坐标减 1（<code>x--</code>）。</li><li><code>&#39;R&#39;</code>：表示向右移动，<code>x</code> 坐标加 1（<code>x++</code>）。</li><li><code>&#39;U&#39;</code>：表示向上移动，<code>y</code> 坐标加 1（<code>y++</code>）。</li><li><code>&#39;D&#39;</code>：表示向下移动，<code>y</code> 坐标减 1（<code>y--</code>）。</li></ul></li><li>遍历结束后，检查 <code>x</code> 和 <code>y</code> 是否都为 0。 <ul><li>如果是，则返回 <code>true</code>，表示回到了原点；</li><li>否则，说明没有回到原点，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>moves</code> 的长度，只需要遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储坐标。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">moves</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">judgeCircle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">moves</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化坐标为原点 (0, 0)</span>

	<span class="token comment">// 遍历 moves 字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> move <span class="token keyword">of</span> moves<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;L&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 向左移动，x 坐标减 1</span>
			x<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 向右移动，x 坐标加 1</span>
			x<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;D&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 向下移动，y 坐标减 1</span>
			y<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>move <span class="token operator">==</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 向上移动，y 坐标加 1</span>
			y<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果 x 和 y 都是 0，则回到原点</span>
	<span class="token keyword">return</span> x <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> y <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"547",-1),q=e("td",{style:{"text-align":"left"}},"省份数量",-1),L={style:{"text-align":"center"}},R={style:{"text-align":"left"}},D=e("code",null,"深度优先搜索",-1),E=e("code",null,"广度优先搜索",-1),U=e("code",null,"并查集",-1),C=e("code",null,"1+",-1),N=e("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/number-of-provinces",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/number-of-provinces",target:"_blank",rel:"noopener noreferrer"},I=e("td",{style:{"text-align":"center"}},"2120",-1),O=e("td",{style:{"text-align":"left"}},"执行所有后缀指令",-1),B=e("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=e("code",null,"字符串",-1),S=e("code",null,"模拟",-1),W=e("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/execution-of-all-suffix-instructions-staying-in-a-grid",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/execution-of-all-suffix-instructions-staying-in-a-grid",target:"_blank",rel:"noopener noreferrer"},H=e("td",{style:{"text-align":"center"}},"2833",-1),J=e("td",{style:{"text-align":"left"}},"距离原点最远的点",-1),K=e("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},P=e("code",null,"字符串",-1),Q=e("code",null,"计数",-1),X=e("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/furthest-point-from-origin",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/furthest-point-from-origin",target:"_blank",rel:"noopener noreferrer"};function te(ne,se){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return i(),d("div",null,[m,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/string.html"},{default:s(()=>[k]),_:1}),t(),n(o,{to:"/tag/simulation.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),e("a",g,[v,n(a)]),t(),e("a",f,[b,n(a)])]),y,p(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[w,q,e("td",L,[n(o,{to:"/problem/0547.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",R,[n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[D]),_:1}),t(),n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[E]),_:1}),t(),n(o,{to:"/tag/union-find.html"},{default:s(()=>[U]),_:1}),t(),C]),N,e("td",T,[e("a",V,[t("🀄️"),n(a)]),t(),e("a",j,[t("🔗"),n(a)])])]),e("tr",null,[I,O,B,e("td",A,[n(o,{to:"/tag/string.html"},{default:s(()=>[G]),_:1}),t(),n(o,{to:"/tag/simulation.html"},{default:s(()=>[S]),_:1})]),W,e("td",Y,[e("a",z,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])]),e("tr",null,[H,J,K,e("td",M,[n(o,{to:"/tag/string.html"},{default:s(()=>[P]),_:1}),t(),n(o,{to:"/tag/counting.html"},{default:s(()=>[Q]),_:1})]),X,e("td",Z,[e("a",$,[t("🀄️"),n(a)]),t(),e("a",ee,[t("🔗"),n(a)])])])])])])}const ae=r(h,[["render",te],["__file","0657.html.vue"]]);export{ae as default};

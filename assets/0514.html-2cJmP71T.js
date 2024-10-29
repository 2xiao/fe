import{_ as i,r as p,o as l,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-mXo2sCT-.js";const d={},k={id:"_514-自由之路",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_514-自由之路","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0514.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),b=n("code",null,"字符串",-1),y=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/freedom-trail",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/freedom-trail",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),j=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In the video game Fallout 4, the quest <strong>&quot; Road to Freedom&quot;</strong> requires players to reach a metal dial called the <strong>&quot; Freedom Trail Ring&quot;</strong> and use the dial to spell a specific keyword to open the door.</p><p>Given a string <code>ring</code> that represents the code engraved on the outer ring and another string <code>key</code> that represents the keyword that needs to be spelled, return <em>the minimum number of steps to spell all the characters in the keyword</em>.</p><p>Initially, the first character of the ring is aligned at the <code>&quot;12:00&quot;</code> direction. You should spell all the characters in <code>key</code> one by one by rotating <code>ring</code> clockwise or anticlockwise to make each character of the string key aligned at the <code>&quot;12:00&quot;</code> direction and then by pressing the center button.</p><p>At the stage of rotating the ring to spell the key character <code>key[i]</code>:</p><ol><li>You can rotate the ring clockwise or anticlockwise by one place, which counts as <strong>one step</strong>. The final purpose of the rotation is to align one of <code>ring</code>&#39;s characters at the <code>&quot;12:00&quot;</code> direction, where this character must equal <code>key[i]</code>.</li><li>If the character <code>key[i]</code> has been aligned at the <code>&quot;12:00&quot;</code> direction, press the center button to spell, which also counts as <strong>one step</strong>. After the pressing, you could begin to spell the next character in the key (next stage). Otherwise, you have finished all the spelling.</li></ol><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/22/ring.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: ring = &quot;godding&quot;, key = &quot;gd&quot;</p><p>Output: 4</p><p>Explanation:</p><p>For the first key character &#39;g&#39;, since it is already in place, we just need 1 step to spell this character.</p><p>For the second key character &#39;d&#39;, we need to rotate the ring &quot;godding&quot; anticlockwise by two steps to make it become &quot;ddinggo&quot;.</p><p>Also, we need 1 more step for spelling.</p><p>So the final output is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: ring = &quot;godding&quot;, key = &quot;godding&quot;</p><p>Output: 13</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= ring.length, key.length &lt;= 100</code></li><li><code>ring</code> and <code>key</code> consist of only lower case English letters.</li><li>It is guaranteed that <code>key</code> could always be spelled by rotating <code>ring</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>电子游戏“辐射 4”中，任务 <strong>“通向自由”</strong> 要求玩家到达名为 <strong>“Freedom Trail Ring”</strong> 的金属表盘，并使用表盘拼写特定关键词才能开门。</p><p>给定一个字符串 <code>ring</code> ，表示刻在外环上的编码；给定另一个字符串 <code>key</code> ，表示需要拼写的关键词。您需要算出能够拼写关键词中所有字符的<strong>最少</strong>步数。</p><p>最初，<code>ring</code> 的第一个字符与 <code>12:00</code> 方向对齐。您需要顺时针或逆时针旋转 <code>ring</code> 以使 <code>key</code> 的一个字符在 <code>12:00</code> 方向对齐，然后按下中心按钮，以此逐个拼写完 <code>key</code> 中的所有字符。</p><p>旋转 <code>ring</code> 拼出 <code>key</code> 字符 <code>key[i]</code> 的阶段中：</p><p>您可以将 <code>ring</code> 顺时针或逆时针旋转 <strong>一个位置</strong> ，计为 1 步。旋转的最终目的是将字符串 <code>ring</code> 的一个字符与 <code>12:00</code> 方向对齐，并且这个字符必须等于字符 <code>key[i]</code> 。</p><p>如果字符 <code>key[i]</code> 已经对齐到 <code>12:00</code> 方向，您需要按下中心按钮进行拼写，这也将算作 <strong>1 步</strong>。按完之后，您可以开始拼写 <code>key</code> 的下一个字符（下一阶段）, 直至完成所有拼写。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/22/ring.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入: ring = &quot;godding&quot;, key = &quot;gd&quot;</p><p>输出: 4</p><p>解释:</p><p>对于 key 的第一个字符 &#39;g&#39;，已经在正确的位置, 我们只需要 1 步来拼写这个字符。</p><p>对于 key 的第二个字符 &#39;d&#39;，我们需要逆时针旋转 ring &quot;godding&quot; 2 步使它变成 &quot;ddinggo&quot;。</p><p>当然, 我们还需要 1 步进行拼写。</p><p>因此最终的输出是 4。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入: ring = &quot;godding&quot;, key = &quot;godding&quot;</p><p>输出: 13</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= ring.length, key.length &lt;= 100</code></li><li><code>ring</code> 和 <code>key</code> 只包含小写英文字母</li><li><strong>保证</strong> 字符串 <code>key</code> 一定可以由字符串 <code>ring</code> 旋转拼出</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>构建映射</strong>：首先构建一个映射 <code>map</code>，将每个字符在 <code>ring</code> 中的出现位置记录下来。</p></li><li><p><strong>动态规划递归</strong>：使用递归的方式进行动态规划。定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示指针在 <code>ring[i]</code> 时，到 <code>key[j]</code> 最少需要几步操作。</p></li><li><p><strong>递归函数</strong>：定义递归函数 <code>helper(i, j)</code>，表示当指针在 <code>ring[i]</code> 位置，需要匹配 <code>key[j]</code> 时的最小操作步数。</p></li><li><p><strong>递归结束条件</strong>：当 <code>j</code> 等于 <code>n</code> 时，表示已经匹配完整个 <code>key</code> 字符串，返回 0。</p></li><li><p><strong>递归过程</strong>：遍历 <code>key[j]</code> 对应的所有可能位置 <code>k</code>，计算旋转次数 <code>rotate</code>，然后递归调用 <code>helper(k, j + 1)</code>，加上当前的旋转次数和 1，取最小值作为结果。</p></li><li><p><strong>记忆化搜索</strong>：为了避免重复计算，使用数组 <code>dp</code> 进行记忆化搜索，记录已经计算过的状态。</p></li></ol><ul><li><strong>时间复杂度</strong>: <code>O(m * n)</code> - 其中 <code>m</code> 是 <code>ring</code> 的长度，<code>n</code> 是 <code>key</code> 的长度。对于 <code>key</code> 中的每个字符，都会考虑 <code>ring</code> 中的所有可能位置。</li><li><strong>空间复杂度</strong>: <code>O(m * n)</code> - 使用了一个二维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">ring</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRotateSteps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">ring<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> ring<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> key<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构建映射</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>ring<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>ring<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化动态规划数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 定义递归函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 递归结束条件</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token comment">// 记忆化搜索</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">;</span>
		<span class="token comment">// 遍历 key[j] 对应的所有可能位置</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> k <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 计算旋转表盘次数</span>
			<span class="token keyword">const</span> rotate <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>k <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span> m <span class="token operator">-</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>k <span class="token operator">-</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 递归调用，加上当前的旋转次数和 1，取最小值</span>
			res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">+</span> rotate <span class="token operator">+</span> <span class="token function">helper</span><span class="token punctuation">(</span>k<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回结果</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function x(I,E){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return l(),r("div",null,[n("h1",k,[g,s(),n("a",m,[s("514. 自由之路"),a(o)])]),n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",f,[_,a(o)]),s(),n("a",w,[q,a(o)])]),j])}const R=i(d,[["render",x],["__file","0514.html.vue"]]);export{R as default};

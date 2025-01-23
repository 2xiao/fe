import{_ as c,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-MsFeWfVD.js";const m={},h=n("h1",{id:"_1742-盒子中小球的最大数量",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1742-盒子中小球的最大数量","aria-hidden":"true"},"#"),s(" 1742. 盒子中小球的最大数量")],-1),k=n("code",null,"哈希表",-1),b=n("code",null,"数学",-1),g=n("code",null,"计数",-1),_={href:"https://leetcode.cn/problems/maximum-number-of-balls-in-a-box",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-number-of-balls-in-a-box",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are working in a ball factory where you have <code>n</code> balls numbered from <code>lowLimit</code> up to <code>highLimit</code> <strong>inclusive</strong> (i.e., <code>n == highLimit - lowLimit + 1</code>), and an infinite number of boxes numbered from <code>1</code> to <code>infinity</code>.</p><p>Your job at this factory is to put each ball in the box with a number equal to the sum of digits of the ball&#39;s number. For example, the ball number <code>321</code> will be put in the box number <code>3 + 2 + 1 = 6</code> and the ball number <code>10</code> will be put in the box number <code>1 + 0 = 1</code>.</p><p>Given two integers <code>lowLimit</code> and <code>highLimit</code>, return <em>the number of balls in the box with the most balls.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: lowLimit = 1, highLimit = 10</p><p>Output: 2</p><p>Explanation:</p><p>Box Number: 1 2 3 4 5 6 7 8 9 10 11 ...</p><p>Ball Count: 2 1 1 1 1 1 1 1 1 0 0 ...</p><p>Box 1 has the most number of balls with 2 balls.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: lowLimit = 5, highLimit = 15</p><p>Output: 2</p><p>Explanation:</p><p>Box Number: 1 2 3 4 5 6 7 8 9 10 11 ...</p><p>Ball Count: 1 1 1 1 2 2 1 1 1 0 0 ...</p><p>Boxes 5 and 6 have the most number of balls with 2 balls in each.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: lowLimit = 19, highLimit = 28</p><p>Output: 2</p><p>Explanation:</p><p>Box Number: 1 2 3 4 5 6 7 8 9 10 11 12 ...</p><p>Ball Count: 0 1 1 1 1 1 1 1 1 2 0 0 ...</p><p>Box 10 has the most number of balls with 2 balls.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= lowLimit &lt;= highLimit &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你在一家生产小球的玩具厂工作，有 <code>n</code> 个小球，编号从 <code>lowLimit</code> 开始，到 <code>highLimit</code> 结束（包括 <code>lowLimit</code> 和 <code>highLimit</code> ，即 <code>n == highLimit - lowLimit + 1</code>）。另有无限数量的盒子，编号从 <code>1</code> 到 <code>infinity</code> 。</p><p>你的工作是将每个小球放入盒子中，其中盒子的编号应当等于小球编号上每位数字的和。例如，编号 <code>321</code> 的小球应当放入编号 <code>3 + 2 + 1 = 6</code> 的盒子，而编号 <code>10</code> 的小球应当放入编号 <code>1 + 0 = 1</code> 的盒子。</p><p>给你两个整数 <code>lowLimit</code> 和 <code>highLimit</code> ，返回放有最多小球的盒子中的小球数量。 如果有多个盒子都满足放有最多小球，只需返回其中任一盒子的小球数量。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> lowLimit = 1, highLimit = 10</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>盒子编号：1 2 3 4 5 6 7 8 9 10 11 ...</p><p>小球数量：2 1 1 1 1 1 1 1 1 0 0 ...</p><p>编号 1 的盒子放有最多小球，小球数量为 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> lowLimit = 5, highLimit = 15</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>盒子编号：1 2 3 4 5 6 7 8 9 10 11 ...</p><p>小球数量：1 1 1 1 2 2 1 1 1 0 0 ...</p><p>编号 5 和 6 的盒子放有最多小球，每个盒子中的小球数量都是 2 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> lowLimit = 19, highLimit = 28</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>盒子编号：1 2 3 4 5 6 7 8 9 10 11 12 ...</p><p>小球数量：0 1 1 1 1 1 1 1 1 2 0 0 ...</p><p>编号 10 的盒子放有最多小球，小球数量为 2 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= lowLimit &lt;= highLimit &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数字和计算</strong>：</p><ul><li>定义一个辅助函数 <code>digitSum(n)</code> 用于计算一个数的各位数字之和。</li><li>通过逐位取余 (<code>n % 10</code>) 并整除 (<code>n = Math.floor(n / 10)</code>) 累加计算。</li></ul></li><li><p><strong>初始化计数器</strong>：</p><ul><li>使用一个数组 <code>count</code>，其索引表示可能的数字和（从 0 到 45）。因为数字和的最大值为 <code>99999</code> 的各位数字之和，即 <code>9 * 5 = 45</code>。</li></ul></li><li><p>从 <code>lowLimit</code> 到 <code>highLimit</code>，逐一计算数字和，将 <code>count</code> 对应索引的值加一。</p></li><li><p>记录过程中出现次数最多的盒子数，最终返回最大值。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(（h - l) * log_10(h))</code>，其中 <code>l</code> 为最小编号 <code>lowLimit</code>， <code>h</code> 为最大编号 <code>highLimit</code>。 <ul><li>需要遍历从 <code>lowLimit</code> 到 <code>highLimit</code>，计算数字和，共 <code>h - l + 1</code> 次。</li><li>计算数字和的时间复杂度为 <code>O(log_10(h))</code>。</li><li>总复杂度为 <code>O(（h - l) * log_10(h))</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅需额外的固定长度数组 <code>count</code> 和几个常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">lowLimit</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">highLimit</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">countBalls</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">lowLimit<span class="token punctuation">,</span> highLimit</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">46</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化 0-45 的计数器</span>
	<span class="token keyword">const</span> <span class="token function-variable function">digitSum</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 加上当前最低位</span>
			n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去掉最低位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录最大值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> lowLimit<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> highLimit<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> idx <span class="token operator">=</span> <span class="token function">digitSum</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算数字和</span>
		count<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 计数</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>count<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最大值</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"3160",-1),q=n("td",{style:{"text-align":"left"}},"所有球里面不同颜色的数目",-1),B=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),O=n("code",null,"模拟",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/find-the-number-of-distinct-colors-among-the-balls",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls",target:"_blank",rel:"noopener noreferrer"};function M(R,Y){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[k]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,t(o)]),s(),n("a",v,[x,t(o)])]),w,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[y,q,B,n("td",E,[t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/simulation.html"},{default:a(()=>[O]),_:1})]),I,n("td",V,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",S,[s("🔗"),t(o)])])])])])])}const F=c(m,[["render",M],["__file","1742.html.vue"]]);export{F as default};

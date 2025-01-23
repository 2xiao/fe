import{_ as l,r as c,o as p,c as r,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_2073-买票需要的时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2073-买票需要的时间","aria-hidden":"true"},"#"),t(" 2073. 买票需要的时间")],-1),g=n("code",null,"队列",-1),m=n("code",null,"数组",-1),_=n("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/time-needed-to-buy-tickets",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/time-needed-to-buy-tickets",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> people in a line queuing to buy tickets, where the <code>0th</code> person is at the <strong>front</strong> of the line and the <code>(n - 1)th</code> person is at the <strong>back</strong> of the line.</p><p>You are given a <strong>0-indexed</strong> integer array <code>tickets</code> of length <code>n</code> where the number of tickets that the <code>ith</code> person would like to buy is <code>tickets[i]</code>.</p><p>Each person takes <strong>exactly 1 second</strong> to buy a ticket. A person can only buy <strong>1 ticket at a time</strong> and has to go back to <strong>the end</strong> of the line (which happens <strong>instantaneously</strong>) in order to buy more tickets. If a person does not have any tickets left to buy, the person will <strong>leave</strong> the line.</p><p>Return the <strong>time taken</strong> for the person <strong>initially</strong> at position <strong>k</strong> (0-indexed) to finish buying tickets.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> tickets = [2,3,2], k = 2</p><p><strong>Output:</strong> 6</p><p><strong>Explanation:</strong></p><ul><li>The queue starts as [2,3,<em>2</em>], where the kth person is underlined.</li><li>After the person at the front has bought a ticket, the queue becomes [3,<em>2</em> ,1] at 1 second.</li><li>Continuing this process, the queue becomes [<em>2</em> ,1,2] at 2 seconds.</li><li>Continuing this process, the queue becomes [1,2,<em>1</em>] at 3 seconds.</li><li>Continuing this process, the queue becomes [2,<em>1</em>] at 4 seconds. Note: the person at the front left the queue.</li><li>Continuing this process, the queue becomes [<em>1</em> ,1] at 5 seconds.</li><li>Continuing this process, the queue becomes [1] at 6 seconds. The kth person has bought all their tickets, so return 6.</li></ul><p><strong>Example 2:</strong></p><p><strong>Input:</strong> tickets = [5,1,1,1], k = 0</p><p><strong>Output:</strong> 8</p><p><strong>Explanation:</strong></p><ul><li>The queue starts as [<em>5</em> ,1,1,1], where the kth person is underlined.</li><li>After the person at the front has bought a ticket, the queue becomes [1,1,1,<em>4</em>] at 1 second.</li><li>Continuing this process for 3 seconds, the queue becomes [<em>4</em>] at 4 seconds.</li><li>Continuing this process for 4 seconds, the queue becomes [] at 8 seconds. The kth person has bought all their tickets, so return 8.</li></ul><p><strong>Constraints:</strong></p><ul><li><code>n == tickets.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= tickets[i] &lt;= 100</code></li><li><code>0 &lt;= k &lt; n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个人前来排队买票，其中第 <code>0</code> 人站在队伍 <strong>最前方</strong> ，第 <code>(n - 1)</code> 人站在队伍 <strong>最后方</strong> 。</p><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>tickets</code> ，数组长度为 <code>n</code> ，其中第 <code>i</code> 人想要购买的票数为 <code>tickets[i]</code> 。</p><p>每个人买票都需要用掉 <strong>恰好 1 秒</strong> 。一个人 <strong>一次只能买一张票</strong> ，如果需要购买更多票，他必须走到 <strong>队尾</strong> 重新排队（<strong>瞬间</strong>发生，不计时间）。如果一个人没有剩下需要买的票，那他将会 <strong>离开</strong> 队伍。</p><p>返回位于位置 <code>k</code>（下标从 <strong>0</strong> 开始）的人完成买票需要的时间（以秒为单位）。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> tickets = [2,3,2], k = 2</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><ul><li>队伍一开始为 [2,3,2]，第 k 个人以下划线标识。</li><li>在最前面的人买完票后，队伍在第 1 秒变成 [3,<em>2</em> ,1]。</li><li>继续这个过程，队伍在第 2 秒变为[<em>2</em> ,1,2]。</li><li>继续这个过程，队伍在第 3 秒变为[1,2,<em>1</em>]。</li><li>继续这个过程，队伍在第 4 秒变为[2,<em>1</em>]。</li><li>继续这个过程，队伍在第 5 秒变为[<em>1</em> ,1]。</li><li>继续这个过程，队伍在第 6 秒变为[1]。第 k 个人完成买票，所以返回 6。</li></ul><p><strong>示例 2：</strong></p><p><strong>输入：</strong> tickets = [5,1,1,1], k = 0</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong></p><ul><li>队伍一开始为 [<em>5</em> ,1,1,1]，第 k 个人以下划线标识。</li><li>在最前面的人买完票后，队伍在第 1 秒变成 [1,1,1,<em>4</em>]。</li><li>继续这个过程 3 秒，队伍在第 4 秒变为[<em>4</em>]。</li><li>继续这个过程 4 秒，队伍在第 8 秒变为[]。第 k 个人完成买票，所以返回 8。</li></ul><p><strong>提示：</strong></p><ul><li><code>n == tickets.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= tickets[i] &lt;= 100</code></li><li><code>0 &lt;= k &lt; n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>初始化一个变量 <code>res</code>，用于累积所需的时间。</p></li><li><p>遍历队列，计算每个人对总时间的贡献：</p><ul><li><strong>前半段</strong>：对于索引 <code>i ≤ k</code> 的人，他们会至少购买 <code>Math.min(tickets[i], tickets[k])</code> 张票。</li><li><strong>后半段</strong>：对于索引 <code>i &gt; k</code> 的人，他们最多会购买 <code>Math.min(tickets[i], tickets[k] - 1)</code> 张票，因为在 <code>k</code> 的票买完之后，后续的人不会再购买。</li></ul></li><li><p>累加所有人的贡献，返回结果 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量级别的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">tickets</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">timeRequiredToBuy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tickets<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> tickets<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>tickets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> tickets<span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前人最多买到 tickets[k] 张票</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>tickets<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> tickets<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 后续人最多买到 tickets[k] - 1 张票</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,41),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1700",-1),C=n("td",{style:{"text-align":"left"}},"无法吃午餐的学生数量",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},N=n("code",null,"栈",-1),I=n("code",null,"队列",-1),L=n("code",null,"数组",-1),V=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/number-of-students-unable-to-eat-lunch",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/number-of-students-unable-to-eat-lunch",target:"_blank",rel:"noopener noreferrer"};function j(A,S){const i=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),r("div",null,[h,n("p",null,[t("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(o,{to:"/tag/queue.html"},{default:s(()=>[g]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",b,[f,e(a)]),t(),n("a",v,[y,e(a)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,C,n("td",E,[e(o,{to:"/problem/1700.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",T,[e(o,{to:"/tag/stack.html"},{default:s(()=>[N]),_:1}),t(),e(o,{to:"/tag/queue.html"},{default:s(()=>[I]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),V]),B,n("td",M,[n("a",O,[t("🀄️"),e(a)]),t(),n("a",R,[t("🔗"),e(a)])])])])])])}const z=l(k,[["render",j],["__file","2073.html.vue"]]);export{z as default};

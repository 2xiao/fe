import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app--GvfAkAr.js";const k={},m=n("h1",{id:"_2054-两个最好的不重叠活动",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2054-两个最好的不重叠活动","aria-hidden":"true"},"#"),s(" 2054. 两个最好的不重叠活动")],-1),g=n("code",null,"数组",-1),h=n("code",null,"二分查找",-1),v=n("code",null,"动态规划",-1),f=n("code",null,"排序",-1),_=n("code",null,"堆（优先队列）",-1),b={href:"https://leetcode.cn/problems/two-best-non-overlapping-events",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/two-best-non-overlapping-events",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),T=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> 2D integer array of <code>events</code> where <code>events[i] = [startTimei, endTimei, valuei]</code>. The <code>ith</code> event starts at <code>startTimei</code> and ends at <code>endTimei</code>, and if you attend this event, you will receive a value of <code>valuei</code>. You can choose <strong>at most</strong> <strong>two</strong> <strong>non-overlapping</strong> events to attend such that the sum of their values is <strong>maximized</strong>.</p><p>Return <em>this<strong>maximum</strong> sum.</em></p><p>Note that the start time and end time is <strong>inclusive</strong> : that is, you cannot attend two events where one of them starts and the other ends at the same time. More specifically, if you attend an event with end time <code>t</code>, the next event must start at or after <code>t + 1</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: events = [[1,3,2],[4,5,2],[2,4,3]]</p><p>Output: 4</p><p>Explanation: Choose the green events, 0 and 1 for a sum of 2 + 2 = 4.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture1.png" alt="Example 1
Diagram" tabindex="0" loading="lazy"><figcaption>Example 1 Diagram</figcaption></figure><blockquote><p>Input: events = [[1,3,2],[4,5,2],[1,5,5]]</p><p>Output: 5</p><p>Explanation: Choose event 2 for a sum of 5.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: events = [[1,5,3],[1,5,1],[6,6,5]]</p><p>Output: 8</p><p>Explanation: Choose events 0 and 2 for a sum of 3 + 5 = 8.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= events.length &lt;= 10^5</code></li><li><code>events[i].length == 3</code></li><li><code>1 &lt;= startTimei &lt;= endTimei &lt;= 10^9</code></li><li><code>1 &lt;= valuei &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的二维整数数组 <code>events</code> ，其中 <code>events[i] = [startTimei, endTimei, valuei]</code> 。第 <code>i</code> 个活动开始于 <code>startTimei</code> ，结束于 <code>endTimei</code> ，如果你参加这个活动，那么你可以得到价值 <code>valuei</code> 。你 <strong>最多</strong> 可以参加 <strong>两个时间不重叠</strong> 活动，使得它们的价值之和 <strong>最大</strong> 。</p><p>请你返回价值之和的 <strong>最大值</strong> 。</p><p>注意，活动的开始时间和结束时间是 <strong>包括</strong> 在活动时间内的，也就是说，你不能参加两个活动且它们之一的开始时间等于另一个活动的结束时间。更具体的，如果你参加一个活动，且结束时间为 <code>t</code> ，那么下一个活动必须在 <code>t + 1</code> 或之后的时间开始。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture5.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> events = [[1,3,2],[4,5,2],[2,4,3]]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 选择绿色的活动 0 和 1 ，价值之和为 2 + 2 = 4 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture1.png" alt="Example 1
Diagram" tabindex="0" loading="lazy"><figcaption>Example 1 Diagram</figcaption></figure><blockquote><p><strong>输入：</strong> events = [[1,3,2],[4,5,2],[1,5,5]]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 选择活动 2 ，价值和为 5 。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/09/21/picture3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> events = [[1,5,3],[1,5,1],[6,6,5]]</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 选择活动 0 和 2 ，价值之和为 3 + 5 = 8 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= events.length &lt;= 10^5</code></li><li><code>events[i].length == 3</code></li><li><code>1 &lt;= startTimei &lt;= endTimei &lt;= 10^9</code></li><li><code>1 &lt;= valuei &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用 <strong>排序 + 后缀数组 + 二分查找</strong> 来高效解决此问题。</p><ol><li>按开始时间排序</li></ol><ul><li>首先，将所有活动按其开始时间 <code>startTime</code> 升序排序。</li><li>排序方便后续通过二分查找快速找到当前活动之后的第一个有效活动。</li></ul><ol start="2"><li>构建后缀数组 <code>suffixMax</code></li></ol><ul><li>使用后缀数组 <code>suffixMax</code> 保存每个活动开始后剩余活动中的最大收益，<code>suffixMax[i]</code> 表示从活动 <code>i</code> 到最后一个活动的最大收益。</li><li>从后往前遍历活动列表，逐步更新 <code>suffixMax</code>：</li></ul><ol start="3"><li>遍历每个活动并尝试计算最大收益</li></ol><ul><li>对于每个活动 <code>i</code>，通过二分查找快速找到其结束时间之后开始的下一个活动。 <ul><li>如果存在这样的活动（索引为 <code>nextIdx</code>），则计算收益 <code>events[i][2] + suffixMax[nextIdx]</code>。</li><li>如果不存在，则仅考虑当前活动的收益 <code>events[i][2]</code>。</li></ul></li><li>使用变量 <code>maxSum</code> 不断更新最大收益。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code></p><ul><li><strong>排序</strong>：按 <code>startTime</code> 排序，时间复杂度为 <code>O(n log n)</code>。</li><li><strong>后缀数组</strong>：构建后缀数组需要 <code>O(n)</code>。</li><li><strong>二分查找</strong>：对于每个活动使用二分查找，时间复杂度为 <code>O(log n)</code>，总共 <code>n</code> 次查找，因此为 <code>O(n log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用了额外的后缀数组 <code>suffixMax</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">events</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxTwoEvents</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">events</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> events<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 按开始时间排序</span>
	events<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 后缀数组，保存每个活动开始后剩余活动中的最大收益</span>
	<span class="token keyword">let</span> suffixMax <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	suffixMax<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> events<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		suffixMax<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> suffixMax<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> maxSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 最大收益</span>

	<span class="token comment">// 对于每一个事件，找到在其结束后开始的下一个事件</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> nextIdx <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 下一个事件的 index</span>

		<span class="token comment">// 二分查找</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>events<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				nextIdx <span class="token operator">=</span> mid<span class="token punctuation">;</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>nextIdx <span class="token operator">!==</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果找到有效的下一个事件，更新最大和</span>
			maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">+</span> suffixMax<span class="token punctuation">[</span>nextIdx<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果找不到，仅考虑当前活动的收益</span>
			maxSum <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxSum<span class="token punctuation">,</span> events<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxSum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,43),M=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1235",-1),q=n("td",{style:{"text-align":"left"}},"规划兼职工作",-1),I=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},O=n("code",null,"数组",-1),C=n("code",null,"二分查找",-1),S=n("code",null,"动态规划",-1),N=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),D={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/maximum-profit-in-job-scheduling",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/maximum-profit-in-job-scheduling",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1751",-1),R=n("td",{style:{"text-align":"left"}},"最多可以参加的会议数目 II",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},F=n("code",null,"数组",-1),G=n("code",null,"二分查找",-1),H=n("code",null,"动态规划",-1),J=n("code",null,"1+",-1),K=n("td",{style:{"text-align":"center"}},"🔴",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/maximum-number-of-events-that-can-be-attended-ii",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended-ii",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},"2555",-1),X=n("td",{style:{"text-align":"left"}},"两个线段获得的最多奖品",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),sn=n("code",null,"二分查找",-1),tn=n("code",null,"滑动窗口",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/maximize-win-from-two-segments",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/maximize-win-from-two-segments",target:"_blank",rel:"noopener noreferrer"};function cn(ln,rn){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",b,[x,t(o)]),s(),n("a",y,[w,t(o)])]),T,u(" prettier-ignore "),n("table",null,[M,n("tbody",null,[n("tr",null,[E,q,I,n("td",z,[t(e,{to:"/tag/array.html"},{default:a(()=>[O]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1}),s(),N]),j,n("td",D,[n("a",L,[s("🀄️"),t(o)]),s(),n("a",V,[s("🔗"),t(o)])])]),n("tr",null,[B,R,Y,n("td",A,[t(e,{to:"/tag/array.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[H]),_:1}),s(),J]),K,n("td",P,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])]),n("tr",null,[W,X,Z,n("td",$,[t(e,{to:"/tag/array.html"},{default:a(()=>[nn]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[sn]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[tn]),_:1})]),an,n("td",en,[n("a",on,[s("🀄️"),t(o)]),s(),n("a",pn,[s("🔗"),t(o)])])])])])])}const dn=l(k,[["render",cn],["__file","2054.html.vue"]]);export{dn as default};

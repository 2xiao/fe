import{_ as c,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app--GvfAkAr.js";const k={},h=n("h1",{id:"_2406-将区间分为最少组数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2406-将区间分为最少组数","aria-hidden":"true"},"#"),t(" 2406. 将区间分为最少组数")],-1),m=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),v=n("code",null,"前缀和",-1),b=n("code",null,"排序",-1),f=n("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.cn/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),E=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a 2D integer array <code>intervals</code> where <code>intervals[i] = [lefti, righti]</code> represents the <strong>inclusive</strong> interval <code>[lefti, righti]</code>.</p><p>You have to divide the intervals into one or more <strong>groups</strong> such that each interval is in <strong>exactly</strong> one group, and no two intervals that are in the same group <strong>intersect</strong> each other.</p><p>Return <em>the<strong>minimum</strong> number of groups you need to make</em>.</p><p>Two intervals <strong>intersect</strong> if there is at least one common number between them. For example, the intervals <code>[1, 5]</code> and <code>[5, 8]</code> intersect.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]</p><p>Output: 3</p><p>Explanation: We can divide the intervals into the following groups:</p><ul><li>Group 1: [1, 5], [6, 8].</li><li>Group 2: [2, 3], [5, 10].</li><li>Group 3: [1, 10].</li></ul><p>It can be proven that it is not possible to divide the intervals into fewer than 3 groups.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: intervals = [[1,3],[5,6],[8,10],[11,13]]</p><p>Output: 1</p><p>Explanation: None of the intervals overlap, so we can put all of them in one group.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^5</code></li><li><code>intervals[i].length == 2</code></li><li><code>1 &lt;= lefti &lt;= righti &lt;= 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二维整数数组 <code>intervals</code> ，其中 <code>intervals[i] = [lefti, righti]</code> 表示 <strong>闭</strong> 区间 <code>[lefti, righti]</code> 。</p><p>你需要将 <code>intervals</code> 划分为一个或者多个区间 <strong>组</strong> ，每个区间 <strong>只</strong> 属于一个组，且同一个组中任意两个区间 <strong>不相交</strong> 。</p><p>请你返回 <strong>最少</strong> 需要划分成多少个组。</p><p>如果两个区间覆盖的范围有重叠（即至少有一个公共数字），那么我们称这两个区间是 <strong>相交</strong> 的。比方说区间 <code>[1, 5]</code> 和 <code>[5, 8]</code> 相交。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> intervals = [[5,10],[6,8],[1,5],[2,3],[1,10]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 我们可以将区间划分为如下的区间组：</p><ul><li>第 1 组：[1, 5] ，[6, 8] 。</li><li>第 2 组：[2, 3] ，[5, 10] 。</li><li>第 3 组：[1, 10] 。</li></ul><p>可以证明无法将区间划分为少于 3 个组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> intervals = [[1,3],[5,6],[8,10],[11,13]]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 所有区间互不相交，所以我们可以把它们全部放在一个组内。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= intervals.length &lt;= 10^5</code></li><li><code>intervals[i].length == 2</code></li><li><code>1 &lt;= lefti &lt;= righti &lt;= 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题考察了如何有效地处理区间重叠问题，属于典型的 <strong>区间调度问题</strong>，可以将这个问题转换为求区间的最大重叠数。</p><ol><li><p>将每个区间的起始时间和结束时间拆分成两个事件。将每个起始事件记录为正值，结束事件记录为负值。</p><ul><li>当遇到一个开始事件时，意味着需要新增一个组（可以理解为需要新的资源，如椅子、会议室等）；</li><li>当遇到一个结束事件时，意味着可以释放一个资源；</li></ul></li><li><p>将这些事件按照时间从小到大排序，如果时间相同，则开始事件（正值）优先于结束事件（负值）。</p></li><li><p>遍历所有的事件，维护当前进行中的区间数，并记录下最大同时进行的区间数，这个数即为需要的最少组数。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，因为需要对事件数组进行排序，<code>n</code> 是区间的数量。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储所有的事件。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">intervals</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minGroups</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">intervals</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> events <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 把每个区间的起始时间和结束时间作为事件存储</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>left<span class="token punctuation">,</span> right<span class="token punctuation">]</span> <span class="token keyword">of</span> intervals<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		events<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>left<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1 表示开始</span>
		events<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>right<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1 表示结束</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 按照时间排序，如果时间相同，先处理开始事件</span>
	events<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历所有事件，计算最大重叠数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>time<span class="token punctuation">,</span> type<span class="token punctuation">]</span> <span class="token keyword">of</span> events<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>type <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cur<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"56",-1),I=n("td",{style:{"text-align":"left"}},"合并区间",-1),L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},G=n("code",null,"数组",-1),O=n("code",null,"排序",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"1419",-1),Y=n("td",{style:{"text-align":"left"}},"数青蛙",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},S=n("code",null,"字符串",-1),W=n("code",null,"计数",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/minimum-number-of-frogs-croaking",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/minimum-number-of-frogs-croaking",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"2015",-1),P=n("td",{style:{"text-align":"left"}},"每段建筑物的平均高度 🔒",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=n("code",null,"贪心",-1),Z=n("code",null,"数组",-1),$=n("code",null,"排序",-1),nn=n("code",null,"1+",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),sn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/average-height-of-buildings-in-each-segment",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/average-height-of-buildings-in-each-segment",target:"_blank",rel:"noopener noreferrer"};function on(ln,pn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/greedy.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",x,[y,s(o)]),t(),n("a",w,[q,s(o)])]),E,u(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[C,I,n("td",L,[s(a,{to:"/problem/0056.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",V,[s(a,{to:"/tag/array.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[O]),_:1})]),j,n("td",B,[n("a",R,[t("🀄️"),s(o)]),t(),n("a",M,[t("🔗"),s(o)])])]),n("tr",null,[T,Y,n("td",D,[s(a,{to:"/problem/1419.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",F,[s(a,{to:"/tag/string.html"},{default:e(()=>[S]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[W]),_:1})]),z,n("td",A,[n("a",H,[t("🀄️"),s(o)]),t(),n("a",J,[t("🔗"),s(o)])])]),n("tr",null,[K,P,Q,n("td",U,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[$]),_:1}),t(),nn]),tn,n("td",sn,[n("a",en,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])])])])])}const rn=c(k,[["render",on],["__file","2406.html.vue"]]);export{rn as default};

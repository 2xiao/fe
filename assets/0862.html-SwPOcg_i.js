import{_ as c,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-U2ekqv2z.js";const k={},m=n("h1",{id:"_862-和至少为-k-的最短子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_862-和至少为-k-的最短子数组","aria-hidden":"true"},"#"),s(" 862. 和至少为 K 的最短子数组")],-1),h=n("code",null,"队列",-1),g=n("code",null,"数组",-1),_=n("code",null,"二分查找",-1),b=n("code",null,"前缀和",-1),f=n("code",null,"滑动窗口",-1),v=n("code",null,"单调队列",-1),y=n("code",null,"堆（优先队列）",-1),x={href:"https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),S=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return _the length of the shortest non-empty<strong>subarray</strong> of _<code>nums</code> <em>with a sum of at least</em><code>k</code>. If there is no such <strong>subarray</strong> , return <code>-1</code>.</p><p>A <strong>subarray</strong> is a <strong>contiguous</strong> part of an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1], k = 1</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2], k = 4</p><p>Output: -1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,-1,2], k = 3</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，找出 <code>nums</code> 中和至少为 <code>k</code> 的 <strong>最短非空子数组</strong> ，并返回该子数组的长度。如果不存在这样的 <strong>子数组</strong> ，返回 <code>-1</code> 。</p><p><strong>子数组</strong> 是数组中 <strong>连续</strong> 的一部分。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1], k = 1</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2], k = 4</p><p><strong>输出：</strong> -1</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,-1,2], k = 3</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题的难点在于 <code>nums[i]</code> 可能是负数，普通的滑动窗口方法不再适用：</p><ul><li>如果 <code>nums[i]</code> 都是非负数，我们可以使用滑动窗口（双指针）来找到满足条件的最短子数组，因为数组和随着窗口的扩大是单调递增的。</li><li>但是如果 <code>nums[i]</code> 包含负数，数组和可能会随着窗口的扩大而减小，打破了单调性，导致滑动窗口方法无法正确处理。</li></ul><p>为了应对 <code>nums[i]</code> 可能是负数的问题，引入<strong>前缀和</strong>和<strong>单调队列</strong>：</p><ol><li><strong>前缀和的作用</strong></li></ol><ul><li>使用前缀和数组 <code>prefixSum</code> 表示从数组开始到当前位置的累积和。</li><li><code>prefixSum[j] - prefixSum[i]</code> 可以直接计算出区间 <code>[i, j)</code> 的子数组和。</li></ul><ol start="2"><li><strong>单调队列的优化</strong></li></ol><ul><li><p>对于一个位置 <code>j</code>，如果找到一个 <code>i</code>，使得：</p><ul><li><code>prefixSum[j] - prefixSum[i] &gt;= k</code>，且</li><li><code>j - i</code> 是满足条件的最短长度， 则可以快速得到答案。</li></ul></li><li><p>使用一个单调队列（双端队列）<code>deque</code> 来存储前缀和的下标。单调队列维护如下性质：</p><ol><li>队列中的前缀和的下标单调递增（保证更小的下标出现在前面）。</li><li>队列中的前缀和值严格递增（保证更大的前缀和不会被需要）。</li><li>遍历过程中，弹出所有无效的下标。</li></ol></li></ul><ol start="3"><li><strong>具体步骤</strong></li></ol><ul><li>计算前缀和数组。</li><li>遍历数组的每个位置 <code>j</code>，维护一个单调递增队列： <ul><li><strong>弹出无效的下标</strong>：如果 <code>prefixSum[j] - prefixSum[deque[0]] &gt;= k</code>，说明队首的下标可以满足条件，弹出队首并尝试更新最短长度。</li><li><strong>维护单调性</strong>：如果队列中已有的下标对应的前缀和比 <code>prefixSum[j]</code> 大，说明当前的前缀和更优（对应的区间更短），弹出队尾直到队列单调递增。</li><li>将当前的前缀和下标 <code>j</code> 加入队列。</li></ul></li><li>如果在遍历完成后仍未找到满足条件的子数组，返回 <code>-1</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历 <code>nums</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，前缀和数组和单调队列都需要 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shortestSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> prefixSum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prefixSum<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> prefixSum<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> deque <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 双端队列存储前缀和的下标</span>
	<span class="token keyword">let</span> minLength <span class="token operator">=</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 弹出队首直到满足条件</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> prefixSum<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">-</span> prefixSum<span class="token punctuation">[</span>deque<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLength<span class="token punctuation">,</span> j <span class="token operator">-</span> deque<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 保持队列的单调性</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>deque<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> prefixSum<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> prefixSum<span class="token punctuation">[</span>deque<span class="token punctuation">[</span>deque<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			deque<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将当前下标加入队列</span>
		deque<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> minLength <span class="token operator">===</span> n <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> minLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"3095",-1),E=n("td",{style:{"text-align":"left"}},"或值至少 K 的最短子数组 I",-1),O=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},N=n("code",null,"位运算",-1),V=n("code",null,"数组",-1),B=n("code",null,"滑动窗口",-1),K=n("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/shortest-subarray-with-or-at-least-k-i",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-i",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"3097",-1),M=n("td",{style:{"text-align":"left"}},"或值至少为 K 的最短子数组 II",-1),T={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=n("code",null,"位运算",-1),F=n("code",null,"数组",-1),J=n("code",null,"滑动窗口",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/shortest-subarray-with-or-at-least-k-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🔴 "),t(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/queue.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/monotonic-queue.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",x,[w,t(o)]),s(),n("a",q,[j,t(o)])]),S,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[I,E,O,n("td",C,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[B]),_:1})]),K,n("td",A,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",G,[s("🔗"),t(o)])])]),n("tr",null,[H,M,n("td",T,[t(e,{to:"/problem/3097.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",z,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[J]),_:1})]),P,n("td",Q,[n("a",U,[s("🀄️"),t(o)]),s(),n("a",W,[s("🔗"),t(o)])])])])])])}const nn=c(k,[["render",X],["__file","0862.html.vue"]]);export{nn as default};

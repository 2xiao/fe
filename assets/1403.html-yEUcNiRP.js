import{_ as p,r as l,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-fEpXkbSw.js";const m={},h=n("h1",{id:"_1403-非递增顺序的最小子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1403-非递增顺序的最小子序列","aria-hidden":"true"},"#"),s(" 1403. 非递增顺序的最小子序列")],-1),k=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),b=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/minimum-subsequence-in-non-increasing-order",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-subsequence-in-non-increasing-order",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the array <code>nums</code>, obtain a subsequence of the array whose sum of elements is <strong>strictly greater</strong> than the sum of the non included elements in such subsequence.</p><p>If there are multiple solutions, return the subsequence with <strong>minimum size</strong> and if there still exist multiple solutions, return the subsequence with the <strong>maximum total sum</strong> of all its elements. A subsequence of an array can be obtained by erasing some (possibly zero) elements from the array.</p><p>Note that the solution with the given constraints is guaranteed to be <strong>unique</strong>. Also return the answer sorted in <strong>non-increasing</strong> order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,3,10,9,8]</p><p>Output: [10,9]</p><p>Explanation: The subsequences [10,9] and [10,8] are minimal such that the sum of their elements is strictly greater than the sum of elements not included. However, the subsequence [10,9] has the maximum total sum of its elements.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,4,7,6,7]</p><p>Output: [7,7,6]</p><p>Explanation: The subsequence [7,7] has the sum of its elements equal to 14 which is not strictly greater than the sum of elements not included (14 = 4 + 4 + 6). Therefore, the subsequence [7,6,7] is the minimal satisfying the conditions. Note the subsequence has to be returned in non-increasing order.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code>，请你从中抽取一个子序列，满足该子序列的元素之和 <strong>严格</strong> 大于未包含在该子序列中的各元素之和。</p><p>如果存在多个解决方案，只需返回 <strong>长度最小</strong> 的子序列。如果仍然有多个解决方案，则返回 <strong>元素之和最大</strong> 的子序列。</p><p>与子数组不同的地方在于，「数组的子序列」不强调元素在原数组中的连续性，也就是说，它可以通过从数组中分离一些（也可能不分离）元素得到。</p><p><strong>注意</strong> ，题目数据保证满足所有约束条件的解决方案是 <strong>唯一</strong> 的。同时，返回的答案应当按 <strong>非递增顺序</strong> 排列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,3,10,9,8]</p><p><strong>输出：</strong>[10,9]</p><p><strong>解释：</strong> 子序列 [10,9] 和 [10,8] 是最小的、满足元素之和大于其他各元素之和的子序列。但是 [10,9] 的元素之和最大。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,4,7,6,7]</p><p><strong>输出：</strong>[7,7,6]</p><p><strong>解释：</strong> 子序列 [7,7] 的和为 14 ，不严格大于剩下的其他元素之和（14 = 4 + 4 + 6）。因此，[7,6,7] 是满足题意的最小子序列。注意，元素按非递增顺序返回。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>对数组排序</strong><br> 将数组从大到小排序，这样可以直接从排序后的数组中依次选择最大的元素。</p></li><li><p><strong>贪心算法</strong><br> 遍历排序后的数组，累加元素值，直到子序列的和超过剩余部分的和（即子序列和大于总和的一半）。</p></li><li><p><strong>返回结果</strong><br> 返回构成子序列的数组部分。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度。</p><ul><li><strong>排序</strong>：数组排序的时间复杂度为 <code>O(n log n)</code>。</li><li><strong>遍历</strong>：遍历排序后的数组一次，时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是子序列的长度，结果数组 <code>res</code> 使用额外空间 <code>O(k)</code>，排序操作是原地排序，不需要额外空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minSubsequence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按降序排序</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> totalSum <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算总和</span>
	<span class="token keyword">let</span> subSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 子序列和</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储子序列</span>

	<span class="token comment">// 遍历排序后的数组，直到子序列和超过剩余部分</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		subSum <span class="token operator">+=</span> num<span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>subSum <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">&gt;</span> totalSum<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2210",-1),E=n("td",{style:{"text-align":"left"}},"统计数组中峰和谷的数量",-1),N=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},S=n("code",null,"数组",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"};function T(j,B){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/greedy.html"},{default:e(()=>[k]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,t(o)]),s(),n("a",f,[y,t(o)])]),x,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,E,N,n("td",O,[t(a,{to:"/tag/array.html"},{default:e(()=>[S]),_:1})]),C,n("td",I,[n("a",L,[s("🀄️"),t(o)]),s(),n("a",V,[s("🔗"),t(o)])])])])])])}const A=p(m,[["render",T],["__file","1403.html.vue"]]);export{A as default};

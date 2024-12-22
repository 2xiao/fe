import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-U2ekqv2z.js";const k={},m=n("h1",{id:"_1005-k-次取反后最大化的数组和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1005-k-次取反后最大化的数组和","aria-hidden":"true"},"#"),s(" 1005. K 次取反后最大化的数组和")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),b=n("code",null,"排序",-1),_={href:"https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximize-sum-of-array-after-k-negations",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, modify the array in the following way:</p><ul><li>choose an index <code>i</code> and replace <code>nums[i]</code> with <code>-nums[i]</code>.</li></ul><p>You should apply this process exactly <code>k</code> times. You may choose the same index <code>i</code> multiple times.</p><p>Return <em>the largest possible sum of the array after modifying it in this way</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,2,3], k = 1</p><p>Output: 5</p><p>Explanation: Choose index 1 and nums becomes [4,-2,3].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,-1,0,2], k = 3</p><p>Output: 6</p><p>Explanation: Choose indices (1, 2, 2) and nums becomes [3,1,0,2].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,-3,-1,5,-4], k = 2</p><p>Output: 13</p><p>Explanation: Choose indices (1, 4) and nums becomes [2,3,-1,5,4].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，按以下方法修改该数组：</p><ul><li>选择某个下标 <code>i</code> 并将 <code>nums[i]</code> 替换为 <code>-nums[i]</code> 。</li></ul><p>重复这个过程恰好 <code>k</code> 次。可以多次选择同一个下标 <code>i</code> 。</p><p>以这种方式修改数组后，返回数组 <strong>可能的最大和</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,2,3], k = 1</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 选择下标 1 ，nums 变为 [4,-2,3] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,-1,0,2], k = 3</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 选择下标 (1, 2, 2) ，nums 变为 [3,1,0,2] 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,-3,-1,5,-4], k = 2</p><p><strong>输出：</strong> 13</p><p><strong>解释：</strong> 选择下标 (1, 4) ，nums 变为 [2,3,-1,5,4] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>将数组从小到大排序，这样可以优先对负数进行取反，从而快速增加数组总和。</p></li><li><p>使用一个循环，尝试进行最多 <code>k</code> 次取反操作：</p><ul><li>如果当前元素是负数，则将其取反；</li><li>如果当前元素是非负数，并且还未完成所有 <code>k</code> 次操作，则找到当前绝对值最小的元素并取反。</li></ul></li><li><p>每次取反操作后，更新记录当前数组中绝对值最小的元素索引 <code>min</code>。</p></li><li><p>遍历数组并计算总和，返回最终结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code><ul><li>初始排序：<code>O(n log n)</code>。</li><li>遍历数组并执行取反：<code>O(k)</code>。</li><li>数组求和：<code>O(n)</code>。</li><li>总时间复杂度：<code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常量级额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestSumAfterKNegations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 对数组从小到大排序</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化最小值索引</span>

	<span class="token comment">// 进行 k 次操作</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 更新最小值索引</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>

		<span class="token comment">// 如果当前数是负数，则取反</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果遇到非负数，优先取反绝对值最小的数</span>
			nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>nums<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回数组的总和</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">acc<span class="token punctuation">,</span> cur</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> acc <span class="token operator">+</span> cur<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2099",-1),E=n("td",{style:{"text-align":"left"}},"找到和最大的长度为 K 的子序列",-1),O=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},N=n("code",null,"数组",-1),I=n("code",null,"哈希表",-1),L=n("code",null,"排序",-1),V=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"};function z(S,Y){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,a(o)]),s(),n("a",f,[y,a(o)])]),x,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,O,n("td",C,[a(e,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[L]),_:1}),s(),V]),j,n("td",B,[n("a",K,[s("🀄️"),a(o)]),s(),n("a",R,[s("🔗"),a(o)])])])])])])}const G=l(k,[["render",z],["__file","1005.html.vue"]]);export{G as default};

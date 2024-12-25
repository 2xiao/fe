import{_ as r,r as a,o as c,c as i,a as n,b as s,d as e,w as t,e as u}from"./app--GvfAkAr.js";const d={},m=n("h1",{id:"_1413-逐步求和得到正数的最小值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1413-逐步求和得到正数的最小值","aria-hidden":"true"},"#"),s(" 1413. 逐步求和得到正数的最小值")],-1),k=n("code",null,"数组",-1),g=n("code",null,"前缀和",-1),v={href:"https://leetcode.cn/problems/minimum-value-to-get-positive-step-by-step-sum",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code>, you start with an initial <strong>positive</strong> value <em>startValue</em>.</p><p>In each iteration, you calculate the step by step sum of <em>startValue</em> plus elements in <code>nums</code> (from left to right).</p><p>Return the minimum <strong>positive</strong> value of <em>startValue</em> such that the step by step sum is never less than 1.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-3,2,-3,4,2]</p><p>Output: 5</p><p>Explanation: If you choose startValue = 4, in the third iteration your step by step sum is less than 1.</p><p><strong>step by step sum</strong></p><p><strong>startValue = 4 | startValue = 5 | nums</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2]</p><p>Output: 1</p><p>Explanation: Minimum start value should be positive.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,-2,-3]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 。你可以选定任意的 <strong>正数</strong> startValue 作为初始值。</p><p>你需要从左到右遍历 <code>nums</code> 数组，并将 startValue 依次累加上 <code>nums</code> 数组中的值。</p><p>请你在确保累加和始终大于等于 1 的前提下，选出一个最小的 <strong>正数</strong> 作为 startValue 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [-3,2,-3,4,2]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 如果你选择 startValue = 4，在第三次累加时，和小于 1 。</p><p><strong>累加求和</strong></p><p><strong>startValue = 4 | startValue = 5 | nums</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>  (4 -3 ) = 1  | (5 -3 ) = 2    |  -3
  (1 +2 ) = 3  | (2 +2 ) = 4    |   2
  (3 -3 ) = 0  | (4 -3 ) = 1    |  -3
  (0 +4 ) = 4  | (1 +4 ) = 5    |   4
  (4 +2 ) = 6  | (5 +2 ) = 7    |   2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 最小的 startValue 需要是正数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,-2,-3]</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>使用 <code>sum</code> 表示累加和，初始值为 0。</li><li>使用 <code>res</code> 表示结果（即最小起始值），初始值为 1。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>对于数组中的每个元素 <code>num</code>，将其累加到 <code>sum</code> 中。</li><li>每次更新结果 <code>res</code>，使其等于当前值与 <code>1 - sum</code> 的最大值。这是因为： <ul><li>如果 <code>sum</code> 的值小于 1，则需要更大的起始值以确保累加和不小于 1。</li><li>更新规则：<code>res = Math.max(res, 1 - sum)</code>。</li></ul></li></ul></li><li><p>遍历结束后，<code>res</code> 即为满足条件的最小起始值。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minStartValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 累加和</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span> <span class="token comment">// 更新累加和</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">-</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新结果</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回最小起始值</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function x(y,V){const l=a("font"),o=a("RouterLink"),p=a("ExternalLinkIcon");return c(),i("div",null,[m,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/prefix-sum.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[h,e(p)]),s(),n("a",b,[_,e(p)])]),f])}const q=r(d,[["render",x],["__file","1413.html.vue"]]);export{q as default};

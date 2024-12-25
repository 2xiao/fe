import{_ as l,r as t,o as r,c as i,a as n,b as s,d as a,w as o,e as u}from"./app--GvfAkAr.js";const d={},k=n("h1",{id:"_1399-统计最大组的数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1399-统计最大组的数目","aria-hidden":"true"},"#"),s(" 1399. 统计最大组的数目")],-1),m=n("code",null,"哈希表",-1),g=n("code",null,"数学",-1),h={href:"https://leetcode.cn/problems/count-largest-group",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/count-largest-group",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code>.</p><p>Each number from <code>1</code> to <code>n</code> is grouped according to the sum of its digits.</p><p>Return <em>the number of groups that have the largest size</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 13</p><p>Output: 4</p><p>Explanation: There are 9 groups in total, they are grouped according sum of its digits of numbers from 1 to 13:</p><p>[1,10], [2,11], [3,12], [4,13], [5], [6], [7], [8], [9].</p><p>There are 4 groups with largest size.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: 2</p><p>Explanation: There are 2 groups [1], [2] of size 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> 。请你先求出从 <code>1</code> 到 <code>n</code> 的每个整数 10 进制表示下的数位和（每一位上的数字相加），然后把数位和相等的数字放到同一个组中。</p><p>请你统计每个组中的数字数目，并返回数字数目并列最多的组有多少个。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 13</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 总共有 9 个组，将 1 到 13 按数位求和后这些组分别是：</p><p>[1,10]，[2,11]，[3,12]，[4,13]，[5]，[6]，[7]，[8]，[9]。总共有 4 个组拥有的数字并列最多。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 总共有 2 个大小为 1 的组 [1]，[2]。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 15</p><p><strong>输出：</strong> 6</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> n = 24</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>理解数字和的计算</strong><br> 对于一个整数 <code>i</code>，其数字和可以通过计算所有位的和得到。例如，<code>123</code> 的数字和是 <code>1 + 2 + 3 = 6</code>。<br> 我们可以通过动态规划（<code>dp</code> 表示数字和的缓存）快速计算 <code>i</code> 的数字和：</p><ul><li><code>dp[i] = dp[Math.floor(i / 10)] + i % 10</code></li><li>即数字和等于去掉最后一位的数字和，加上最后一位。</li><li>可以看出需要缓存 <code>dp</code> 的最大值为 <code>Math.max(n / 10, 10)</code></li></ul></li><li><p><strong>统计数字和的频率</strong><br> 用一个数组 <code>count</code> 来记录每个数字和的出现频率，其中索引表示数字和（从 1 开始）。<br> 遍历从 <code>1</code> 到 <code>n</code> 的所有数字，计算每个数字的数字和，并更新对应的频率。</p></li><li><p><strong>计算最大组的数量</strong></p><ul><li>找到频率数组中最大的值 <code>largest</code>。</li><li>统计频率等于 <code>largest</code> 的组数。</li></ul></li><li><p>返回最大组的数量。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>， <ul><li><strong>遍历数字</strong>：从 <code>1</code> 到 <code>n</code> 需要遍历一次，时间复杂度为 <code>O(n)</code>。</li><li><strong>计算最大值和过滤</strong>：对 <code>count</code> 数组操作是常数级别的，时间复杂度为 <code>O(1)</code>（最多 <code>4 * 9 = 36</code> 项）。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，动态规划缓存 <code>dp</code> 和频率数组 <code>count</code> 的空间均为有限大小的常数级。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countLargestGroup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token number">0</span><span class="token operator">:</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// 缓存数字和的动态规划表</span>
	<span class="token keyword">const</span> dpSize <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 缓存大小的最大值</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">4</span> <span class="token operator">*</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 统计每个数字和的频率</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> quotient <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>i <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 十位</span>
		<span class="token keyword">const</span> reminder <span class="token operator">=</span> i <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 个位</span>
		<span class="token keyword">const</span> digitSum <span class="token operator">=</span> reminder <span class="token operator">+</span> dp<span class="token punctuation">[</span>quotient<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前数字的数字和</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> dpSize<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> digitSum<span class="token punctuation">;</span> <span class="token comment">// 更新动态规划缓存</span>
		<span class="token punctuation">}</span>
		count<span class="token punctuation">[</span>digitSum <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 更新数字和的频率</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> largest <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 找到最大组大小</span>
	<span class="token keyword">return</span> count<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">==</span> largest<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 统计最大组的数量</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function x(w,y){const c=t("font"),e=t("RouterLink"),p=t("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:o(()=>[m]),_:1}),s(),a(e,{to:"/tag/math.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(p)]),s(),n("a",v,[f,a(p)])]),_])}const E=l(d,[["render",x],["__file","1399.html.vue"]]);export{E as default};

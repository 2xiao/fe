import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as e,e as p}from"./app-fEpXkbSw.js";const d={},k=n("h1",{id:"_10-和为-k-的子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_10-和为-k-的子数组","aria-hidden":"true"},"#"),s(" 10. 和为 k 的子数组")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),_=n("code",null,"前缀和",-1),v={href:"https://leetcode.cn/problems/QTMn0o",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个整数数组和一个整数 <code>k</code>， 请找到该数组中和为 <code>k</code> 的连续子数组的个数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> nums = [1,1,1], k = 2</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong> 此题 [1,1] 与 [1,1] 为两种不同的情况</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> nums = [1,2,3], k = 3</p><p><strong>输出:</strong> 2</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li><li><code>-10^7 &lt;= k &lt;= 10^7</code></li></ul>',8),g={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了高效解决这个问题，可以使用<strong>前缀和</strong>和<strong>哈希表</strong>的组合。</p><p>前缀和指的是数组中从开始到某个位置的所有元素之和。利用前缀和，可以计算出任意子数组的和。</p><p>假设子数组的范围是从索引 <code>i</code> 到 <code>j</code>，那么它的和可以表示为：<code>sum(nums[i:j]) = prefixSum[j] - prefixSum[i-1]</code>，其中，<code>prefixSum[i]</code> 是从数组开头到索引 <code>i</code> 的前缀和。</p><p>如果想让这个子数组的和等于 <code>k</code>，就需要满足：<code>prefixSum[j] - prefixSum[i-1] = k</code>，换句话说，子数组的和等于 <code>k</code> 等价于在之前的某个位置 <code>i-1</code> 存在一个前缀和，它与当前前缀和的差为 <code>k</code>。</p><p>为了快速判断是否有这样的前缀和，使用哈希表记录每个前缀和出现的次数。每次遍历数组时，计算当前前缀和，并查看哈希表中是否存在 <code>prefixSum - k</code>，如果存在，说明从之前某个位置到当前位置的子数组和等于 <code>k</code>。</p><ol><li>初始化一个哈希表 <code>map</code>，用于记录前缀和出现的次数。初始时将 <code>map[0] = 1</code>，表示和为 0 的前缀和已经出现过一次（这是为了处理从数组开头的子数组）。</li><li>遍历数组，逐步累加计算当前前缀和 <code>prefixSum</code>。</li><li>每次计算新的前缀和时，查看 <code>map</code> 中是否存在 <code>prefixSum - k</code>，如果存在，说明找到了一个和为 <code>k</code> 的子数组，将计数器增加。</li><li>然后将当前的 <code>prefixSum</code> 的值更新到哈希表中。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。只需要遍历数组一次，哈希表的插入和查询都是常数时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下，所有前缀和都不同，哈希表需要记录所有前缀和。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subarraySum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化前缀和为0，出现1次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> num<span class="token punctuation">;</span> <span class="token comment">// 当前前缀和</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果存在前缀和差为k，则增加计数</span>
		<span class="token punctuation">}</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前前缀和的出现次数</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function y(S,j){const c=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/prefix-sum.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",v,[f,a(l)])]),b,n("div",g,[x,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0560.html"},{default:e(()=>[s("第 560 题")]),_:1}),s(" 相同。")])]),w])}const L=i(d,[["render",y],["__file","jz_offer_II_010.html.vue"]]);export{L as default};

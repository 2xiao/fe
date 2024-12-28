import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as r}from"./app-fEpXkbSw.js";const d={},k=n("h1",{id:"_594-最长和谐子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_594-最长和谐子序列","aria-hidden":"true"},"#"),s(" 594. 最长和谐子序列")],-1),m=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),h=n("code",null,"计数",-1),v=n("code",null,"排序",-1),b=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/longest-harmonious-subsequence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-harmonious-subsequence",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We define a harmonious array as an array where the difference between its maximum value and its minimum value is <strong>exactly</strong> <code>1</code>.</p><p>Given an integer array <code>nums</code>, return the length of its longest harmonious subsequence among all its possible subsequences.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [1,3,2,2,5,2,3,7]</p><p><strong>Output:</strong> 5</p><p><strong>Explanation:</strong></p><p>The longest harmonious subsequence is <code>[3,2,2,2,3]</code>.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [1,2,3,4]</p><p><strong>Output:</strong> 2</p><p><strong>Explanation:</strong></p><p>The longest harmonious subsequences are <code>[1,2]</code>, <code>[2,3]</code>, and <code>[3,4]</code>, all of which have a length of 2.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> nums = [1,1,1,1]</p><p><strong>Output:</strong> 0</p><p><strong>Explanation:</strong></p><p>No harmonic subsequence exists.</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>和谐数组是指一个数组里元素的最大值和最小值之间的差别 <strong>正好是<code>1</code></strong> 。</p><p>给你一个整数数组 <code>nums</code> ，请你在所有可能的 子序列 中找到最长的和谐子序列的长度。</p><p>数组的 <strong>子序列</strong> 是一个由数组派生出来的序列，它可以通过删除一些元素或不删除元素、且不改变其余元素的顺序而得到。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [1,3,2,2,5,2,3,7]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>最长和谐子序列是 <code>[3,2,2,2,3]</code>。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>最长和谐子序列是 <code>[1,2]</code>，<code>[2,3]</code> 和 <code>[3,4]</code>，长度都为 2。</p><p><strong>示例 3：</strong></p><p><strong>输入：</strong> nums = [1,1,1,1]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>不存在和谐子序列。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用哈希表统计频次：</strong></p><ul><li>遍历数组 <code>nums</code>，将每个元素的出现次数记录在 <code>Map</code> 中，方便后续查找元素的频次。</li></ul></li><li><p><strong>查找相邻数字：</strong></p><ul><li>遍历 <code>Map</code> 中的所有元素 <code>key</code>，对于每个 <code>key</code>： <ul><li>检查 <code>key + 1</code> 是否存在于 <code>Map</code> 中（保证最大值和最小值之差为 <code>1</code>）。</li><li>如果存在，则将 <code>key</code> 和 <code>key + 1</code> 的出现次数相加，作为当前和谐子序列的长度。</li></ul></li><li>使用一个变量 <code>maxLength</code> 记录遍历过程中找到的最大和谐子序列的长度。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>遍历完成后，<code>maxLength</code> 即为最长的和谐子序列的长度。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code><ul><li>遍历数组一次统计频次：<code>O(n)</code>。</li><li>遍历 <code>Map</code> 的键：<code>O(m)</code>（<code>m</code> 是数组中唯一数字的个数）。</li><li>总时间复杂度为 <code>O(n + m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用了 <code>Map</code> 记录频次。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLHS</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于统计每个数字的出现频次</span>

	<span class="token comment">// 统计数字的频次</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录最长和谐子序列的长度</span>

	<span class="token comment">// 遍历哈希表，查找和谐子序列</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 key + 1 是否存在</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 计算当前和谐子序列的长度</span>
			maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">+</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回最长和谐子序列的长度</span>
	<span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,47);function L(E,O){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/counting.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[v]),_:1}),s(),a(t,{to:"/tag/sliding-window.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[f,a(p)]),s(),n("a",y,[x,a(p)])]),w])}const M=l(d,[["render",L],["__file","0594.html.vue"]]);export{M as default};

import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-MsFeWfVD.js";const d={},m=n("h1",{id:"_2099-找到和最大的长度为-k-的子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2099-找到和最大的长度为-k-的子序列","aria-hidden":"true"},"#"),s(" 2099. 找到和最大的长度为 K 的子序列")],-1),h=n("code",null,"数组",-1),v=n("code",null,"哈希表",-1),b=n("code",null,"排序",-1),g=n("code",null,"堆（优先队列）",-1),_={href:"https://leetcode.cn/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> and an integer <code>k</code>. You want to find a <strong>subsequence</strong> of <code>nums</code> of length <code>k</code> that has the <strong>largest</strong> sum.</p><p>Return <em><strong>any</strong> such subsequence as an integer array of length</em> <code>k</code>.</p><p>A <strong>subsequence</strong> is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,1,3,3], k = 2</p><p>Output: [3,3]</p><p>Explanation:</p><p>The subsequence has the largest sum of 3 + 3 = 6.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,-2,3,4], k = 3</p><p>Output: [-1,3,4]</p><p>Explanation:</p><p>The subsequence has the largest sum of -1 + 3 + 4 = 6.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,4,3,3], k = 2</p><p>Output: [3,4]</p><p>Explanation:</p><p>The subsequence has the largest sum of 3 + 4 = 7.</p><p>Another possible subsequence is [4, 3].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。你需要找到 <code>nums</code> 中长度为 <code>k</code> 的 <strong>子序列</strong> ，且这个子序列的 <strong>和最大</strong>。</p><p>请你返回 <strong>任意</strong> 一个长度为 <code>k</code> 的整数子序列。</p><p><strong>子序列</strong> 定义为从一个数组里删除一些元素后，不改变剩下元素的顺序得到的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,3,3], k = 2</p><p><strong>输出：</strong>[3,3]</p><p><strong>解释：</strong></p><p>子序列有最大和：3 + 3 = 6 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-1,-2,3,4], k = 3</p><p><strong>输出：</strong>[-1,3,4]</p><p><strong>解释：</strong></p><p>子序列有最大和：-1 + 3 + 4 = 6 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,3,3], k = 2</p><p><strong>输出：</strong>[3,4]</p><p><strong>解释：</strong></p><p>子序列有最大和：3 + 4 = 7 。</p><p>另一个可行的子序列为 [4, 3] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>维护一个大小为 <code>k</code> 的最小堆</strong></p><ul><li><strong>为什么用最小堆</strong>： <ul><li>我们需要找到 <code>k</code> 个最大元素，但为了高效处理，我们使用最小堆来维护当前最大的 <code>k</code> 个元素。</li><li>堆顶始终是当前最小的元素，可以快速与新的元素比较并替换（如果新元素更大）。</li></ul></li><li>堆中存储的是数组元素及其索引，以便后续排序恢复顺序。</li></ul></li><li><p><strong>遍历数组 <code>nums</code></strong></p><ul><li>对于每个元素： <ul><li>如果堆的大小小于 <code>k</code>，直接将元素加入堆。</li><li>如果堆的大小等于 <code>k</code>，检查当前元素是否比堆顶元素更大： <ul><li>如果更大，则移除堆顶元素，将当前元素加入堆。</li><li>如果更小，跳过当前元素。</li></ul></li></ul></li><li><strong>堆中始终保存 <code>k</code> 个最大元素</strong>。</li></ul></li><li><p><strong>从堆中提取元素并按索引排序</strong></p><ul><li>堆中元素的顺序不一定与原数组一致，因此需要按照索引对堆中的元素进行排序。</li><li>按照索引排序后，提取堆中元素的值构成最终的子序列。</li></ul></li><li><p><strong>输出结果</strong></p><ul><li>返回排序后的子序列，即总和最大的长度为 <code>k</code> 的子序列。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log k + k log k)</code></p><ul><li>遍历 <code>nums</code> 的时间复杂度：<code>O(n)</code>。</li><li>每次 <code>insert</code> 和 <code>pop</code> 的复杂度：<code>O(log k)</code>，最多操作 <code>n</code> 次。</li><li>堆排序的复杂度：<code>O(k log k)</code>。</li><li>总复杂度：<code>O(n log k + k log k)</code>，对于小的 <code>k</code>，性能非常高效。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，堆的大小限制为 <code>k</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSubsequence</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">priority</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 最小堆</span>
	<span class="token keyword">const</span> heap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MinHeap</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> priority<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 维护大小为 k 的最小堆</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		heap<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span><span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 堆大小超过 k 时移除最小值</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 按索引排序并提取结果</span>
	<span class="token keyword">return</span> heap
		<span class="token punctuation">.</span><span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">MinHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token function-variable function">priority</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> arr<span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>priority <span class="token operator">=</span> priority<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">insert</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> top <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> last <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> last<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> top<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">toArray</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> n <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> smallest <span class="token operator">=</span> i<span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			smallest <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			smallest <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>smallest <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>smallest<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>smallest<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">priority</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"215",-1),O=n("td",{style:{"text-align":"left"}},"数组中的第K个最大元素",-1),C={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"分治",-1),V=n("code",null,"快速选择",-1),z=n("code",null,"2+",-1),A=n("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/kth-largest-element-in-an-array",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"1005",-1),B=n("td",{style:{"text-align":"left"}},"K 次取反后最大化的数组和",-1),K={style:{"text-align":"center"}},R={style:{"text-align":"left"}},H=n("code",null,"贪心",-1),S=n("code",null,"数组",-1),U=n("code",null,"排序",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/maximize-sum-of-array-after-k-negations",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximize-sum-of-array-after-k-negations",target:"_blank",rel:"noopener noreferrer"},P=n("td",{style:{"text-align":"center"}},"1356",-1),Q=n("td",{style:{"text-align":"left"}},"根据数字二进制下 1 的数目排序",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Z=n("code",null,"位运算",-1),$=n("code",null,"数组",-1),nn=n("code",null,"计数",-1),sn=n("code",null,"1+",-1),an=n("td",{style:{"text-align":"center"}},"🟢",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"2163",-1),cn=n("td",{style:{"text-align":"left"}},"删除元素后和的最小差值",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},rn=n("code",null,"数组",-1),kn=n("code",null,"动态规划",-1),dn=n("code",null,"堆（优先队列）",-1),mn=n("td",{style:{"text-align":"center"}},"🔴",-1),hn={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/minimum-difference-in-sums-after-removal-of-elements",target:"_blank",rel:"noopener noreferrer"},bn={href:"https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements",target:"_blank",rel:"noopener noreferrer"};function gn(_n,fn){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[f,a(p)]),s(),n("a",y,[w,a(p)])]),x,r(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,O,n("td",C,[a(e,{to:"/problem/0215.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[a(e,{to:"/tag/array.html"},{default:t(()=>[L]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/quickselect.html"},{default:t(()=>[V]),_:1}),s(),z]),A,n("td",D,[n("a",M,[s("🀄️"),a(p)]),s(),n("a",T,[s("🔗"),a(p)])])]),n("tr",null,[j,B,n("td",K,[a(e,{to:"/problem/1005.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",R,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[U]),_:1})]),Y,n("td",F,[n("a",G,[s("🀄️"),a(p)]),s(),n("a",J,[s("🔗"),a(p)])])]),n("tr",null,[P,Q,n("td",W,[a(e,{to:"/problem/1356.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",X,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[Z]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[$]),_:1}),s(),a(e,{to:"/tag/counting.html"},{default:t(()=>[nn]),_:1}),s(),sn]),an,n("td",tn,[n("a",en,[s("🀄️"),a(p)]),s(),n("a",pn,[s("🔗"),a(p)])])]),n("tr",null,[on,cn,ln,n("td",un,[a(e,{to:"/tag/array.html"},{default:t(()=>[rn]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[kn]),_:1}),s(),a(e,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[dn]),_:1})]),mn,n("td",hn,[n("a",vn,[s("🀄️"),a(p)]),s(),n("a",bn,[s("🔗"),a(p)])])])])])])}const wn=l(d,[["render",gn],["__file","2099.html.vue"]]);export{wn as default};

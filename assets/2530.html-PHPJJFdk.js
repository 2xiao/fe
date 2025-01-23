import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as k}from"./app-MsFeWfVD.js";const d={},m=n("h1",{id:"_2530-执行-k-次操作后的最大分数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2530-执行-k-次操作后的最大分数","aria-hidden":"true"},"#"),s(" 2530. 执行 K 次操作后的最大分数")],-1),h=n("code",null,"贪心",-1),v=n("code",null,"数组",-1),g=n("code",null,"堆（优先队列）",-1),b={href:"https://leetcode.cn/problems/maximal-score-after-applying-k-operations",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/maximal-score-after-applying-k-operations",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=k(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and an integer <code>k</code>. You have a <strong>starting score</strong> of <code>0</code>.</p><p>In one <strong>operation</strong> :</p><ol><li>choose an index <code>i</code> such that <code>0 &lt;= i &lt; nums.length</code>,</li><li>increase your <strong>score</strong> by <code>nums[i]</code>, and</li><li>replace <code>nums[i]</code> with <code>ceil(nums[i] / 3)</code>.</li></ol><p>Return <em>the maximum possible<strong>score</strong> you can attain after applying <strong>exactly</strong></em> <code>k</code> <em>operations</em>.</p><p>The ceiling function <code>ceil(val)</code> is the least integer greater than or equal to <code>val</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [10,10,10,10,10], k = 5</p><p>Output: 50</p><p>Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,10,3,3,3], k = 3</p><p>Output: 17</p><p>Explanation: You can do the following operations:</p><p>Operation 1: Select i = 1, so nums becomes [1,<strong><em>4</em></strong> ,3,3,3]. Your score increases by 10.</p><p>Operation 2: Select i = 1, so nums becomes [1,<strong><em>2</em></strong> ,3,3,3]. Your score increases by 4.</p><p>Operation 3: Select i = 2, so nums becomes [1,1,<em><strong>1</strong></em> ,3,3]. Your score increases by 3.</p><p>The final score is 10 + 4 + 3 = 17.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length, k &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和一个整数 <code>k</code> 。你的 <strong>起始分数</strong> 为 <code>0</code> 。</p><p>在一步 <strong>操作</strong> 中：</p><ol><li>选出一个满足 <code>0 &lt;= i &lt; nums.length</code> 的下标 <code>i</code> ，</li><li>将你的 <strong>分数</strong> 增加 <code>nums[i]</code> ，并且</li><li>将 <code>nums[i]</code> 替换为 <code>ceil(nums[i] / 3)</code> 。</li></ol><p>返回在 <strong>恰好</strong> 执行 <code>k</code> 次操作后，你可能获得的最大分数。</p><p>向上取整函数 <code>ceil(val)</code> 的结果是大于或等于 <code>val</code> 的最小整数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [10,10,10,10,10], k = 5</p><p><strong>输出：</strong> 50</p><p><strong>解释：</strong> 对数组中每个元素执行一次操作。最后分数是 10 + 10 + 10 + 10 + 10 = 50 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,10,3,3,3], k = 3</p><p><strong>输出：</strong> 17</p><p><strong>解释：</strong> 可以执行下述操作：</p><p>第 1 步操作：选中 i = 1 ，nums 变为 [1,<em><strong>4</strong></em> ,3,3,3] 。分数增加 10 。</p><p>第 2 步操作：选中 i = 1 ，nums 变为 [1,<em><strong>2</strong></em> ,3,3,3] 。分数增加 4 。</p><p>第 3 步操作：选中 i = 2 ，nums 变为 [1,2,<em><strong>1</strong></em> ,3,3] 。分数增加 3 。</p><p>最后分数是 10 + 4 + 3 = 17 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length, k &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>解决问题的最佳方法是使用 <strong>大顶堆（Max Heap）</strong>，因为它能够高效地找到和弹出当前数组中的最大值。</p><ol><li><p><strong>初始化大顶堆</strong>：首先将所有 <code>nums</code> 中的元素加入大顶堆，这样每次都可以轻松地找到当前最大的元素。</p></li><li><p><strong>执行操作</strong>：</p><ul><li>在 <code>k</code> 次操作中，每次从堆中弹出最大值，将其加入总分。</li><li>然后，将该最大值替换为它除以 3 的向上取整值，继续放回堆中。</li></ul></li><li><p><strong>返回结果</strong>：最终，所有从堆中弹出的元素会被累加成总分，即为最后的结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + k log n)</code><ul><li>初始化堆时将 <code>n</code> 个元素加入堆，时间复杂度为 <code>O(n)</code>。</li><li>每次操作需要弹出堆顶元素，并将新的元素插入堆。堆操作的时间复杂度是 <code>O(log n)</code>，总共需要执行 <code>k</code> 次操作，因此为 <code>O(k log n)</code>。</li><li>因此总时间复杂度为 <code>O(n + k log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为堆中最多同时存储 <code>n</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxKelements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> maxHeap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MaxHeap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> k<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> num <span class="token operator">=</span> maxHeap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		maxHeap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">class</span> <span class="token class-name">MaxHeap</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> max <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> max<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyUp</span><span class="token punctuation">(</span><span class="token parameter">idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>idx <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span>
				<span class="token punctuation">]</span><span class="token punctuation">;</span>
				idx <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token parameter">idx</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> idx <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> idx <span class="token operator">*</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> idx<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> idx<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>heap<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"239",-1),O=n("td",{style:{"text-align":"left"}},"滑动窗口最大值",-1),z={style:{"text-align":"center"}},E={style:{"text-align":"left"}},H=n("code",null,"队列",-1),Y=n("code",null,"数组",-1),C=n("code",null,"滑动窗口",-1),I=n("code",null,"2+",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),M={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"1962",-1),T=n("td",{style:{"text-align":"left"}},"移除石子使总数最小",-1),j=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},D=n("code",null,"贪心",-1),R=n("code",null,"数组",-1),K=n("code",null,"堆（优先队列）",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/remove-stones-to-minimize-the-total",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/remove-stones-to-minimize-the-total",target:"_blank",rel:"noopener noreferrer"};function J(P,Q){const c=o("font"),p=o("RouterLink"),e=o("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),a(p,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[y,a(e)]),s(),n("a",_,[f,a(e)])]),w,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,O,n("td",z,[a(p,{to:"/problem/0239.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(p,{to:"/tag/queue.html"},{default:t(()=>[H]),_:1}),s(),a(p,{to:"/tag/array.html"},{default:t(()=>[Y]),_:1}),s(),a(p,{to:"/tag/sliding-window.html"},{default:t(()=>[C]),_:1}),s(),I]),L,n("td",M,[n("a",N,[s("🀄️"),a(e)]),s(),n("a",V,[s("🔗"),a(e)])])]),n("tr",null,[S,T,j,n("td",B,[a(p,{to:"/tag/greedy.html"},{default:t(()=>[D]),_:1}),s(),a(p,{to:"/tag/array.html"},{default:t(()=>[R]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[K]),_:1})]),U,n("td",A,[n("a",F,[s("🀄️"),a(e)]),s(),n("a",G,[s("🔗"),a(e)])])])])])])}const X=l(d,[["render",J],["__file","2530.html.vue"]]);export{X as default};

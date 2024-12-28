import{_ as l,r,o as c,c as i,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_1574-删除最短的子数组使剩余数组有序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1574-删除最短的子数组使剩余数组有序","aria-hidden":"true"},"#"),s(" 1574. 删除最短的子数组使剩余数组有序")],-1),m=n("code",null,"栈",-1),g=n("code",null,"数组",-1),b=n("code",null,"双指针",-1),_=n("code",null,"二分查找",-1),v=n("code",null,"单调栈",-1),f={href:"https://leetcode.cn/problems/shortest-subarray-to-be-removed-to-make-array-sorted",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>arr</code>, remove a subarray (can be empty) from <code>arr</code> such that the remaining elements in <code>arr</code> are <strong>non-decreasing</strong>.</p><p>Return <em>the length of the shortest subarray to remove</em>.</p><p>A <strong>subarray</strong> is a contiguous subsequence of the array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,3,10,4,2,3,5]</p><p>Output: 3</p><p>Explanation: The shortest subarray we can remove is [10,4,2] of length 3. The remaining elements after that will be [1,2,3,3,5] which are sorted.</p><p>Another correct solution is to remove the subarray [3,10,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [5,4,3,2,1]</p><p>Output: 4</p><p>Explanation: Since the array is strictly decreasing, we can only keep a single element. Therefore we need to remove a subarray of length 4, either [5,4,3,2] or [4,3,2,1].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [1,2,3]</p><p>Output: 0</p><p>Explanation: The array is already non-decreasing. We do not need to remove any elements.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^5</code></li><li><code>0 &lt;= arr[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> ，请你删除一个子数组（可以为空），使得 <code>arr</code> 中剩下的元素是 <strong>非递减</strong> 的。</p><p>一个子数组指的是原数组中连续的一个子序列。</p><p>请你返回满足题目要求的最短子数组的长度。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,10,4,2,3,5]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 我们需要删除的最短子数组是 [10,4,2] ，长度为 3 。剩余元素形成非递减数组 [1,2,3,3,5] 。</p><p>另一个正确的解为删除子数组 [3,10,4] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [5,4,3,2,1]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 由于数组是严格递减的，我们只能保留一个元素。所以我们需要删除长度为 4 的子数组，要么删除 [5,4,3,2]，要么删除 [4,3,2,1]。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 数组已经是非递减的了，我们不需要删除任何元素。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [1]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^5</code></li><li><code>0 &lt;= arr[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>寻找左右有序区间</strong></li></ol><p>首先确定从两端扩展的两个有序区间：</p><ul><li><p><strong>左侧有序区间</strong>: 从 <code>arr[0]</code> 开始向右找出最长的非递减子数组，标记为 <code>[0, left]</code>。</p></li><li><p><strong>右侧有序区间</strong>: 从 <code>arr[n-1]</code> 开始向左找出最长的非递减子数组，标记为 <code>[right, n-1]</code>。</p></li><li><p>如果整个数组已经有序 (<code>left == n - 1</code>)，直接返回 0。</p></li></ul><ol start="2"><li><strong>初步计算结果</strong></li></ol><p>在只保留左侧或右侧区间的情况下，分别删除的子数组长度为：</p><ul><li>删除 <code>[left+1, n-1]</code>，即 <code>n - left - 1</code>。</li><li>删除 <code>[0, right-1]</code>，即 <code>right</code>。</li></ul><p>初始结果取二者的较小值。</p><ol start="3"><li><strong>合并左右区间</strong></li></ol><p>尝试合并左侧和右侧的有序区间。用两个指针 <code>i</code> 和 <code>j</code>：</p><ul><li><code>i</code> 从左侧有序区间 <code>[0, left]</code> 开始遍历。</li><li><code>j</code> 从右侧有序区间 <code>[right, n-1]</code> 开始遍历。</li></ul><p>对于每对 <code>arr[i]</code> 和 <code>arr[j]</code>：</p><ul><li>如果 <code>arr[i] &lt;= arr[j]</code>，说明 <code>arr[i]</code> 和 <code>arr[j]</code> 可以连通，将删除区间长度更新为 <code>j - i - 1</code>，并向右移动 <code>i</code>。</li><li>如果 <code>arr[i] &gt; arr[j]</code>，说明当前的 <code>j</code> 无法与 <code>i</code> 连通，需要向右移动 <code>j</code>。</li></ul><ol start="4"><li><strong>返回结果</strong></li></ol><p>最终返回最小的删除区间长度 <code>result</code>。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，找到左右有序区间的复杂度为 <code>O(n)</code>，双指针合并左右区间的复杂度为 <code>O(n)</code>，总时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLengthOfShortestSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token comment">// 寻找左右有序区间</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		left<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>right <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		right<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初步计算结果</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>n <span class="token operator">-</span> left <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 合并左右区间</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> right<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> left <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> j <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,46),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2970",-1),O=n("td",{style:{"text-align":"left"}},"统计移除递增子数组的数目 I",-1),I=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},C=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),T=n("code",null,"二分查找",-1),V=n("code",null,"1+",-1),S=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/count-the-number-of-incremovable-subarrays-i",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-i",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"2972",-1),G=n("td",{style:{"text-align":"left"}},"统计移除递增子数组的数目 II",-1),W=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},D=n("code",null,"数组",-1),F=n("code",null,"双指针",-1),H=n("code",null,"二分查找",-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/count-the-number-of-incremovable-subarrays-ii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/count-the-number-of-incremovable-subarrays-ii",target:"_blank",rel:"noopener noreferrer"};function U(X,Y){const p=r("font"),e=r("RouterLink"),o=r("ExternalLinkIcon");return c(),i("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/monotonic-stack.html"},{default:a(()=>[v]),_:1}),s("  🔗 "),n("a",f,[y,t(o)]),s(),n("a",x,[w,t(o)])]),j,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,O,I,n("td",L,[t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[T]),_:1}),s(),V]),S,n("td",B,[n("a",M,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[A,G,W,n("td",z,[t(e,{to:"/tag/array.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])])])])])}const $=l(k,[["render",U],["__file","1574.html.vue"]]);export{$ as default};

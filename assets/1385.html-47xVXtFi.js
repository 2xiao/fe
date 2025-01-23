import{_ as r,r as o,o as l,c as i,a as n,b as a,d as s,w as t,e as d}from"./app-MsFeWfVD.js";const u={},k=n("h1",{id:"_1385-两个数组间的距离值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1385-两个数组间的距离值","aria-hidden":"true"},"#"),a(" 1385. 两个数组间的距离值")],-1),m=n("code",null,"数组",-1),g=n("code",null,"双指针",-1),h=n("code",null,"二分查找",-1),v=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/find-the-distance-value-between-two-arrays",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/find-the-distance-value-between-two-arrays",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integer arrays <code>arr1</code> and <code>arr2</code>, and the integer <code>d</code>, <em>return the distance value between the two arrays</em>.</p><p>The distance value is defined as the number of elements <code>arr1[i]</code> such that there is not any element <code>arr2[j]</code> where <code>|arr1[i]-arr2[j]| &lt;= d</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2</p><p>Output: 2</p><p>Explanation:</p><p>For arr1[0]=4 we have:</p><p>|4-10|=6 &gt; d=2 |4-9|=5 &gt; d=2 |4-1|=3 &gt; d=2 |4-8|=4 &gt; d=2</p><p>For arr1[1]=5 we have:</p><p>|5-10|=5 &gt; d=2 |5-9|=4 &gt; d=2 |5-1|=4 &gt; d=2 |5-8|=3 &gt; d=2</p><p>For arr1[2]=8 we have:</p><p><strong>|8-10|=2 &lt;= d=2</strong></p><p><strong>|8-9|=1 &lt;= d=2</strong> |8-1|=7 &gt; d=2 <strong>|8-8|=0 &lt;= d=2</strong></p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3</p><p>Output: 2</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr1.length, arr2.length &lt;= 500</code></li><li><code>-1000 &lt;= arr1[i], arr2[j] &lt;= 1000</code></li><li><code>0 &lt;= d &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数数组 <code>arr1</code> ， <code>arr2</code> 和一个整数 <code>d</code> ，请你返回两个数组之间的 <strong>距离值</strong> 。</p><p>「<strong>距离值</strong> 」 定义为符合此距离要求的元素数目：对于元素 <code>arr1[i]</code> ，不存在任何元素 <code>arr2[j]</code> 满足 <code>|arr1[i]-arr2[j]| &lt;= d</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr1 = [4,5,8], arr2 = [10,9,1,8], d = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>对于 arr1[0]=4 我们有：</p><p>|4-10|=6 &gt; d=2 |4-9|=5 &gt; d=2 |4-1|=3 &gt; d=2 |4-8|=4 &gt; d=2</p><p>所以 arr1[0]=4 符合距离要求</p><p>对于 arr1[1]=5 我们有：</p><p>|5-10|=5 &gt; d=2 |5-9|=4 &gt; d=2 |5-1|=4 &gt; d=2 |5-8|=3 &gt; d=2</p><p>所以 arr1[1]=5 也符合距离要求</p><p>对于 arr1[2]=8 我们有：</p><p><strong>|8-10|=2 &lt;= d=2</strong></p><p><strong>|8-9|=1 &lt;= d=2</strong> |8-1|=7 &gt; d=2 <strong>|8-8|=0 &lt;= d=2</strong></p><p>存在距离小于等于 2 的情况，不符合距离要求</p><p>故而只有 arr1[0]=4 和 arr1[1]=5 两个符合距离要求，距离值为 2</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr1 = [1,4,2,3], arr2 = [-4,-3,6,10,20,30], d = 3</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr1 = [2,1,100,3], arr2 = [-5,-2,10,-3,7], d = 6</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr1.length, arr2.length &lt;= 500</code></li><li><code>-10^3 &lt;= arr1[i], arr2[j] &lt;= 10^3</code></li><li><code>0 &lt;= d &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序数组 arr2：</strong></p><ul><li>对数组 <code>arr2</code> 进行排序。这样做的目的是在后续的二分查找中能够更高效地判断 <code>arr1</code> 中每个元素是否与 <code>arr2</code> 中的元素距离小于等于 <code>d</code>。</li></ul></li><li><p><strong>遍历 arr1 中的每个元素：</strong></p><ul><li>对于 <code>arr1</code> 中的每个元素，希望和 <code>arr2</code> 中的所有元素的差的绝对值都大于 <code>d</code>。</li><li>因此，对于每个元素 <code>char</code>，计算一个区间 <code>[char - d, char + d]</code>，如果 <code>arr2</code> 中有任何元素落在这个区间内，都不符合距离要求。</li></ul></li><li><p><strong>二分查找：</strong></p><ul><li>使用二分查找来判断 <code>arr2</code> 中是否有元素在 <code>char - d</code> 到 <code>char + d</code> 的范围内。如果有，就认为这个元素不符合要求，跳过；否则，增加结果计数。</li><li>通过二分查找，能够高效地找到是否有元素在指定范围内。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终返回符合条件的 <code>arr1</code> 中元素的个数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n + m log n)</code>，其中 <code>n</code> 是 <code>arr2</code> 的长度，<code>m</code> 是 <code>arr1</code> 的长度。</p><ul><li>对 <code>arr2</code> 进行排序的时间复杂度是 <code>O(n log n)</code>。</li><li>对于 <code>arr1</code> 中的每个元素，使用二分查找在 <code>arr2</code> 中查找是否有元素在 <code>[char - d, char + d]</code> 范围内。每次二分查找的时间复杂度是 <code>O(log n)</code>，总共查找 <code>m</code> 次，时间复杂度是 <code>O(m log n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数量级的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">d</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findTheDistanceValue</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr1<span class="token punctuation">,</span> arr2<span class="token punctuation">,</span> d</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	arr2<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 arr2 中是否有元素落在 [char - d, char + d] 区间内</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">checkDistance</span><span class="token punctuation">(</span>arr2<span class="token punctuation">,</span> num <span class="token operator">-</span> d<span class="token punctuation">,</span> num <span class="token operator">+</span> d<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			distance<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> distance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">checkDistance</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> from<span class="token punctuation">,</span> to</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 二分查找</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> from <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> to<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> from<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function x(q,j){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),a(),s(e,{to:"/tag/two-pointers.html"},{default:t(()=>[g]),_:1}),a(),s(e,{to:"/tag/binary-search.html"},{default:t(()=>[h]),_:1}),a(),s(e,{to:"/tag/sorting.html"},{default:t(()=>[v]),_:1}),a("  🔗 "),n("a",b,[f,s(p)]),a(),n("a",_,[w,s(p)])]),y])}const O=r(u,[["render",x],["__file","1385.html.vue"]]);export{O as default};

import{_ as r,r as e,o as l,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-WL8GPOUO.js";const d={},k=n("h1",{id:"_1619-删除某些元素后的数组均值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1619-删除某些元素后的数组均值","aria-hidden":"true"},"#"),s(" 1619. 删除某些元素后的数组均值")],-1),m=n("code",null,"数组",-1),g=n("code",null,"排序",-1),h={href:"https://leetcode.cn/problems/mean-of-array-after-removing-some-elements",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/mean-of-array-after-removing-some-elements",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>arr</code>, return <em>the mean of the remaining integers after removing the smallest<code>5%</code> and the largest <code>5%</code> of the elements.</em></p><p>Answers within <code>10^-5</code> of the <strong>actual answer</strong> will be considered accepted.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]</p><p>Output: 2.00000</p><p>Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]</p><p>Output: 4.00000</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]</p><p>Output: 4.77778</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>20 &lt;= arr.length &lt;= 1000</code></li><li><code>arr.length</code> is a multiple of <code>20</code>.</li><li><code>0 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> ，请你删除最小 <code>5%</code> 的数字和最大 <code>5%</code> 的数字后，求剩余数字的平均值。</p><p>与 <strong>标准答案</strong> 误差在 <code>10^-5</code> 的结果都被视为正确结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]</p><p><strong>输出：</strong> 2.00000</p><p><strong>解释：</strong> 删除数组中最大和最小的元素后，所有元素都等于 2，所以平均值为 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]</p><p><strong>输出：</strong> 4.00000</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4]</p><p><strong>输出：</strong> 4.77778</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [9,7,8,7,7,8,4,4,6,8,8,7,6,8,8,9,2,6,0,0,1,10,8,6,3,3,5,1,10,9,0,7,10,0,10,4,1,10,6,9,3,6,0,0,2,7,0,6,7,2,9,7,7,3,0,1,6,1,10,3]</p><p><strong>输出：</strong> 5.27778</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> arr = [4,8,4,10,0,7,1,3,7,8,8,3,4,1,6,2,1,1,8,0,9,8,0,3,9,10,3,10,1,10,7,3,2,1,4,9,10,7,6,4,0,8,5,1,2,1,6,2,5,0,7,10,9,10,3,7,10,5,8,5,7,6,7,6,10,9,5,10,5,5,7,2,10,7,7,8,2,0,1,1]</p><p><strong>输出：</strong> 5.29167</p></blockquote><p><strong>提示：</strong></p><ul><li><code>20 &lt;= arr.length &lt;= 1000</code></li><li><code>arr.length</code> 是 <code>20</code> 的倍数</li><li><code>0 &lt;= arr[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>首先对数组进行升序排序，使得最小值和最大值出现在数组的两端。</p></li><li><p>数组中最小的 5% 和最大的 5% 元素分别位于前 <code>left = n * 0.05</code> 和后 <code>right = n * 0.05</code> 的位置。</p></li><li><p>遍历数组，仅在索引范围 <code>[left, right)</code> 内的元素累加求和。</p></li><li><p>剩余部分的长度为 <code>n * 0.9</code>，因此平均值为：<code>sum / (n * 0.9)</code></p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，排序：<code>O(n log n)</code>，遍历剩余部分：<code>O(n)</code>，总时间复杂度为：<code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序使用了原地操作，无额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trimMean</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	arr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token number">0.05</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token number">0.95</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> right<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> sum <span class="token operator">/</span> <span class="token punctuation">(</span>n <span class="token operator">*</span> <span class="token number">0.9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function x(q,w){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(p)]),s(),n("a",v,[f,a(p)])]),_])}const E=r(d,[["render",x],["__file","1619.html.vue"]]);export{E as default};

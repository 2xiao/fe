import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-MsFeWfVD.js";const d={},k=n("h1",{id:"_540-有序数组中的单一元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_540-有序数组中的单一元素","aria-hidden":"true"},"#"),s(" 540. 有序数组中的单一元素")],-1),m=n("code",null,"数组",-1),h=n("code",null,"二分查找",-1),v={href:"https://leetcode.cn/problems/single-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/single-element-in-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.</p><p>Return <em>the single element that appears only once</em>.</p><p>Your solution must run in <code>O(log n)</code> time and <code>O(1)</code> space.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,2,3,3,4,4,8,8]</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,3,7,7,10,11,11]</p><p>Output: 10</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个仅由整数组成的有序数组，其中每个元素都会出现两次，唯有一个数只会出现一次。</p><p>请你找出并返回只出现一次的那个数。</p><p>你设计的解决方案必须满足 <code>O(log n)</code> 时间复杂度和 <code>O(1)</code> 空间复杂度。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,1,2,3,3,4,4,8,8]</p><p><strong>输出:</strong> 2</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> nums = [3,3,7,7,10,11,11]</p><p><strong>输出:</strong> 10</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于数组是有序的，我们可以利用二分查找来解决问题，具体分析如下：</p><ol><li><p>观察规律，每个元素出现两次，且数组是严格有序的：</p><ul><li>假设所有元素都成对出现，则它们的索引呈现如下模式：成对元素的第一个位置为偶数，第二个位置为奇数。</li><li>例如，数组 <code>[1, 1, 2, 2, 3, 3, 4]</code> 中，元素成对的索引关系是 <code>(0, 1), (2, 3), (4, 5)</code>。</li><li>如果某个元素只出现一次，则从它之后，所有成对的索引模式将被打破。</li><li>例如，数组 <code>[1, 1, 2, 3, 3, 4, 4]</code> 中，<code>2</code> 只出现一次，从索引 2 开始，索引模式变为奇数偶数。</li></ul></li><li><p>我们可以通过二分查找定位唯一的数字：</p><ul><li>取中间索引 <code>mid</code>。</li><li>检查 <code>mid</code> 是否满足成对规律： <ul><li>如果 <code>mid</code> 是偶数，且 <code>nums[mid] == nums[mid + 1]</code>，说明唯一的数字在右半部分。</li><li>如果 <code>mid</code> 是奇数，且 <code>nums[mid] == nums[mid - 1]</code>，说明唯一的数字在右半部分。</li><li>否则，唯一的数字在左半部分。</li></ul></li><li>通过调整二分查找的范围 <code>left</code> 和 <code>right</code>，逐渐缩小范围，最终找到唯一的数字。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，每次查找范围缩小一半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">singleNonDuplicate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> idx<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 检查是否在成对索引模式下</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			<span class="token punctuation">(</span>mid <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span>
			<span class="token punctuation">(</span>mid <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> nums<span class="token punctuation">[</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 唯一元素在右边</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 唯一元素在左边或当前</span>
			idx <span class="token operator">=</span> mid<span class="token punctuation">;</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function x(y,w){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/binary-search.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",g,[_,a(p)])]),f])}const O=l(d,[["render",x],["__file","0540.html.vue"]]);export{O as default};

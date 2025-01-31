import{_ as l,r as c,o as i,c as d,a as n,b as t,d as e,w as s,f as p,e as u}from"./app-MkGfDfkx.js";const m={},h=n("h1",{id:"_153-寻找旋转排序数组中的最小值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_153-寻找旋转排序数组中的最小值","aria-hidden":"true"},"#"),t(" 153. 寻找旋转排序数组中的最小值")],-1),g=n("code",null,"数组",-1),k=n("code",null,"二分查找",-1),_={href:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Suppose an array of length <code>n</code> sorted in ascending order is <strong>rotated</strong> between <code>1</code> and <code>n</code> times. For example, the array <code>nums = [0,1,2,4,5,6,7]</code> might become:</p><ul><li><code>[4,5,6,7,0,1,2]</code> if it was rotated <code>4</code> times.</li><li><code>[0,1,2,4,5,6,7]</code> if it was rotated <code>7</code> times.</li></ul><p>Notice that <strong>rotating</strong> an array <code>[a[0], a[1], a[2], ..., a[n-1]]</code> 1 time results in the array <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code>.</p><p>Given the sorted rotated array <code>nums</code> of <strong>unique</strong> elements, return <em>the minimum element of this array</em>.</p><p>You must write an algorithm that runs in <code>O(log n) time.</code></p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,5,1,2]</p><p>Output: 1</p><p>Explanation: The original array was [1,2,3,4,5] rotated 3 times.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,5,6,7,0,1,2]</p><p>Output: 0</p><p>Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [11,13,15,17]</p><p>Output: 11</p><p>Explanation: The original array was [11,13,15,17] and it was rotated 4 times.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == nums.length</code></li><li><code>1 &lt;= n &lt;= 5000</code></li><li><code>-5000 &lt;= nums[i] &lt;= 5000</code></li><li>All the integers of <code>nums</code> are <strong>unique</strong>.</li><li><code>nums</code> is sorted and rotated between <code>1</code> and <code>n</code> times.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>已知一个长度为 <code>n</code> 的数组，预先按照升序排列，经由 <code>1</code> 到 <code>n</code> 次 <strong>旋转</strong> 后，得到输入数组。例如，原数组 <code>nums = [0,1,2,4,5,6,7]</code> 在变化后可能得到：</p><ul><li>若旋转 <code>4</code> 次，则可以得到 <code>[4,5,6,7,0,1,2]</code></li><li>若旋转 <code>7</code> 次，则可以得到 <code>[0,1,2,4,5,6,7]</code></li></ul><p>注意，数组 <code>[a[0], a[1], a[2], ..., a[n-1]]</code> <strong>旋转一次</strong> 的结果为数组 <code>[a[n-1], a[0], a[1], a[2], ..., a[n-2]]</code> 。</p><p>给你一个元素值 <strong>互不相同</strong> 的数组 <code>nums</code> ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 <strong>最小元素</strong> 。</p><p>你必须设计一个时间复杂度为 <code>O(log n)</code> 的算法解决此问题。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,5,1,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 原数组为 [1,2,3,4,5] ，旋转 3 次得到输入数组。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,5,6,7,0,1,2]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 原数组为 [0,1,2,4,5,6,7] ，旋转 3 次得到输入数组。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [11,13,15,17]</p><p><strong>输出：</strong> 11</p><p><strong>解释：</strong> 原数组为 [11,13,15,17] ，旋转 4 次得到输入数组。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>最直接的办法就是遍历一遍，找到最小值。但是还可以有更好的方法，可以用二分查找来降低算法的时间复杂度。</p><p>创建两个指针 <code>left</code>、<code>right</code>，分别指向数组首尾，然后计算出两个指针所指下标的中间值 <code>mid</code>，将 <code>mid</code> 与两个指针做比较。</p><ul><li>如果 <code>nums[mid] &gt; nums[right]</code>，则最小值不可能在 <code>mid</code> 左侧，一定在 <code>mid</code> 右侧，则将 <code>left</code> 移动到 <code>mid + 1</code> 位置，继续查找右侧区间。</li><li>如果 <code>nums[mid] &lt;= nums[right]</code>，则最小值一定在 <code>mid</code> 左侧，或者 <code>mid</code> 位置，将 <code>right</code> 移动到 <code>mid</code> 位置上，继续查找左侧区间。</li></ul><p>注意此时，循环结束的条件是：<code>left &lt; right</code>，因为 <code>left == right == mid</code> 时，如果循环结束的条件是 <code>left &lt;= right</code>，代码会进入 <code>right = mid</code>, 会无限循环下去。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，二分查找每次排除一半的可能性。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"33",-1),q=n("td",{style:{"text-align":"left"}},"搜索旋转排序数组",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/search-in-rotated-sorted-array",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"154",-1),B=n("td",{style:{"text-align":"left"}},"寻找旋转排序数组中的最小值 II",-1),M={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=n("code",null,"数组",-1),A=n("code",null,"二分查找",-1),F=n("td",{style:{"text-align":"center"}},"🔴",-1),G={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"};function D(H,J){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),n("a",_,[f,e(o)]),t(),n("a",b,[y,e(o)])]),v,p(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[e(a,{to:"/problem/0033.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[N]),_:1})]),C,n("td",L,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",T,[t("🔗"),e(o)])])]),n("tr",null,[j,B,n("td",M,[e(a,{to:"/problem/0154.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",R,[e(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[A]),_:1})]),F,n("td",G,[n("a",Y,[t("🀄️"),e(o)]),t(),n("a",z,[t("🔗"),e(o)])])])])])])}const P=l(m,[["render",D],["__file","0153.html.vue"]]);export{P as default};

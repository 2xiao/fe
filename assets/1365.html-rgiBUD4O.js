import{_ as c,r as p,o as u,c as r,a as n,b as s,d as t,w as a,f as i,e as d}from"./app-WL8GPOUO.js";const m={},k=n("h1",{id:"_1365-有多少小于当前数字的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1365-有多少小于当前数字的数字","aria-hidden":"true"},"#"),s(" 1365. 有多少小于当前数字的数字")],-1),h=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),g=n("code",null,"计数",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/how-many-numbers-are-smaller-than-the-current-number",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the array <code>nums</code>, for each <code>nums[i]</code> find out how many numbers in the array are smaller than it. That is, for each <code>nums[i]</code> you have to count the number of valid <code>j&#39;s</code> such that <code>j != i</code> <strong>and</strong> <code>nums[j] &lt; nums[i]</code>.</p><p>Return the answer in an array.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [8,1,2,2,3]</p><p>Output: [4,0,1,1,3]</p><p>Explanation:</p><p>For nums[0]=8 there exist four smaller numbers than it (1, 2, 2 and 3).</p><p>For nums[1]=1 does not exist any smaller number than it.</p><p>For nums[2]=2 there exist one smaller number than it (1).</p><p>For nums[3]=2 there exist one smaller number than it (1).</p><p>For nums[4]=3 there exist three smaller numbers than it (1, 2 and 2).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [6,5,4,8]</p><p>Output: [2,1,0,3]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [7,7,7,7]</p><p>Output: [0,0,0,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 500</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code>，对于其中每个元素 <code>nums[i]</code>，请你统计数组中比它小的所有数字的数目。</p><p>换而言之，对于每个 <code>nums[i]</code> 你必须计算出有效的 <code>j</code> 的数量，其中 <code>j</code> 满足 <code>j != i</code> <strong>且</strong> <code>nums[j] &lt; nums[i]</code> 。</p><p>以数组形式返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [8,1,2,2,3]</p><p><strong>输出：</strong>[4,0,1,1,3]</p><p><strong>解释：</strong></p><p>对于 nums[0]=8 存在四个比它小的数字：（1，2，2 和 3）。</p><p>对于 nums[1]=1 不存在比它小的数字。</p><p>对于 nums[2]=2 存在一个比它小的数字：（1）。</p><p>对于 nums[3]=2 存在一个比它小的数字：（1）。</p><p>对于 nums[4]=3 存在三个比它小的数字：（1，2 和 2）。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [6,5,4,8]</p><p><strong>输出：</strong>[2,1,0,3]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [7,7,7,7]</p><p><strong>输出：</strong>[0,0,0,0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 500</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序并记录索引：</strong></p><ul><li>遍历原始数组，将每个数字和其索引（<code>[num, index]</code>）作为一个元素存入二维数组。</li><li>为了高效地统计比每个数字小的数字个数，按照数组的值（<code>num</code>）对二维数组进行升序排序。</li></ul></li><li><p><strong>遍历排序数组：</strong></p><ul><li>如果当前数字和前一个数字不同，则更新小于当前数字的数量为当前索引值。</li><li>如果相同，直接使用前一个数字的结果。</li></ul></li><li><p><strong>回填结果：</strong></p><ul><li>根据原始索引，将计算结果填回到原数组的相应位置。</li></ul></li><li><p><strong>返回结果：</strong></p><ul><li>最终更新的原数组即为答案。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度。</p><ul><li>排序的时间复杂度为 <code>O(n log n)</code>。</li><li>遍历排序后的数组进行结果回填，时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，存储排序数组副本的开销。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">smallerNumbersThanCurrent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 创建 nums 的副本，并记录其原始索引</span>
	<span class="token keyword">const</span> sorted <span class="token operator">=</span> nums
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> index<span class="token punctuation">]</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历排序后的数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> sorted<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前数和前一个数相等，那么小于它的数量和前一个数一样</span>
			nums<span class="token punctuation">[</span>sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>sorted<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 否则，小于它的数量就是它在排序数组中的索引</span>
			nums<span class="token punctuation">[</span>sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"315",-1),E=n("td",{style:{"text-align":"left"}},"计算右侧小于当前元素的个数",-1),O=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},N=n("code",null,"树状数组",-1),F=n("code",null,"线段树",-1),I=n("code",null,"数组",-1),L=n("code",null,"4+",-1),V=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/count-of-smaller-numbers-after-self",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/count-of-smaller-numbers-after-self",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2389",-1),S=n("td",{style:{"text-align":"left"}},"和有限的最长子序列",-1),z=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},D=n("code",null,"贪心",-1),H=n("code",null,"数组",-1),J=n("code",null,"二分查找",-1),K=n("code",null,"2+",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/longest-subsequence-with-limited-sum",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/longest-subsequence-with-limited-sum",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟢 "),t(l,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",f,[v,t(o)]),s(),n("a",x,[y,t(o)])]),w,i(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[j,E,O,n("td",C,[t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),s(),L]),V,n("td",B,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",T,[s("🔗"),t(o)])])]),n("tr",null,[G,S,z,n("td",A,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[H]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[J]),_:1}),s(),K]),M,n("td",P,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])])])])])}const $=c(m,[["render",W],["__file","1365.html.vue"]]);export{$ as default};

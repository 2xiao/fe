import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-Ob52y8QZ.js";const k={},h=n("h1",{id:"_35-搜索插入位置",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_35-搜索插入位置","aria-hidden":"true"},"#"),t(" 35. 搜索插入位置")],-1),m=n("code",null,"数组",-1),_=n("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/search-insert-position",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/search-insert-position",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p><p>You must write an algorithm with <code>O(log n)</code> runtime complexity.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,5,6], target = 5</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,3,5,6], target = 2</p><p>Output: 1</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,3,5,6], target = 7</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> contains <strong>distinct</strong> values sorted in <strong>ascending</strong> order.</li><li><code>-10^4 &lt;= target &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。</p><p>请必须使用时间复杂度为 <code>O(log n)</code> 的算法。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>二分查找法</strong> 来解决这个问题，二分查找的思路是每次将数组分成两半，逐步缩小查找范围 <code>[left, right]</code>，如果找到与 <code>target</code> 相等的数就返回 <code>mid</code> ，否则返回 <code>left</code>。</p><ol><li>初始化两个指针 <code>left</code> 和 <code>right</code>，分别指向数组的左右两端。</li><li>计算中间位置 <code>mid</code>，比较 <code>nums[mid]</code> 和 <code>target</code>： <ul><li>如果 <code>nums[mid] == target</code>，返回 <code>mid</code>，即 <code>target</code> 的索引位置。</li><li>如果 <code>nums[mid] &lt; target</code>，说明 <code>target</code> 应该在右半部分，移动 <code>left</code> 指针到 <code>mid + 1</code>。</li><li>如果 <code>nums[mid] &gt; target</code>，说明 <code>target</code> 应该在左半部分，移动 <code>right</code> 指针到 <code>mid - 1</code>。</li></ul></li><li>如果遍历完数组仍未找到 <code>target</code>，则返回 <code>left</code>，此时 <code>left</code> 就是 <code>target</code> 应该插入的位置。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，每次查找都会将数组的查找范围缩小一半。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchInsert</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>right <span class="token operator">+</span> left<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"278",-1),E=n("td",{style:{"text-align":"left"}},"第一个错误的版本",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},q=n("code",null,"二分查找",-1),C=n("code",null,"交互",-1),L={style:{"text-align":"left"}},N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/first-bad-version",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"3065",-1),R=n("td",{style:{"text-align":"left"}},"超过阈值的最少操作数 I",-1),G=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},S=n("code",null,"数组",-1),T={style:{"text-align":"left"}},Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/minimum-operations-to-exceed-threshold-value-i",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i",target:"_blank",rel:"noopener noreferrer"};function D(F,H){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",g,[f,e(o)]),t(),n("a",b,[v,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,E,n("td",I,[e(a,{to:"/problem/0278.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",O,[e(a,{to:"/tag/binary-search.html"},{default:s(()=>[q]),_:1}),t(),e(a,{to:"/tag/interactive.html"},{default:s(()=>[C]),_:1})]),n("td",L,[e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})]),n("td",N,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",j,[t("🔗"),e(o)])])]),n("tr",null,[B,R,G,n("td",M,[e(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1})]),n("td",T,[e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})]),n("td",Y,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",A,[t("🔗"),e(o)])])])])])])}const K=p(k,[["render",D],["__file","0035.html.vue"]]);export{K as default};

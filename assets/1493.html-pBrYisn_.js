import{_ as l,r as c,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app--GvfAkAr.js";const m={},k=n("h1",{id:"_1493-删掉一个元素以后全为-1-的最长子数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1493-删掉一个元素以后全为-1-的最长子数组","aria-hidden":"true"},"#"),s(" 1493. 删掉一个元素以后全为 1 的最长子数组")],-1),h=n("code",null,"数组",-1),g=n("code",null,"动态规划",-1),b=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary array <code>nums</code>, you should delete one element from it.</p><p>Return <em>the size of the longest non-empty subarray containing only</em> <code>1</code> <em>&#39; s in the resulting array</em>. Return <code>0</code> if there is no such subarray.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,0,1]</p><p>Output: 3</p><p>Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1&#39;s.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,1,1,0,1,1,0,1]</p><p>Output: 5</p><p>Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1&#39;s is [1,1,1,1,1].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,1,1]</p><p>Output: 2</p><p>Explanation: You must delete one element.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个二进制数组 <code>nums</code> ，你需要从中删掉一个元素。</p><p>请你在删掉元素的结果数组中，返回最长的且只包含 1 的非空子数组的长度。</p><p>如果不存在这样的子数组，请返回 0 。</p><p><strong>提示 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,0,1]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 删掉位置 2 的数后，[1,1,1] 包含 3 个 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,1,1,0,1,1,0,1]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 删掉位置 4 的数字后，[0,1,1,1,1,1,0,1] 的最长全 1 子数组为 [1,1,1,1,1] 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 你必须要删除一个元素。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> 要么是 <code>0</code> 要么是 <code>1</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要解决这个问题，可以通过<strong>滑动窗口</strong>的方式找到删除一个元素后所能得到的最长的只包含 <code>1</code> 的子数组。</p><ol><li><strong>滑动窗口</strong>：保持一个窗口，它最多只能包含一个 <code>0</code>。当窗口包含超过一个 <code>0</code> 时，逐步移动窗口的左边界，直到窗口只包含一个 <code>0</code>。</li><li><strong>变量定义</strong>：定义 <code>left</code> 为窗口的左边界，<code>zeroCount</code> 记录窗口中 <code>0</code> 的数量，<code>max</code> 记录当前最大的窗口长度（只包含 <code>1</code> 的子数组）。</li><li><strong>遍历数组</strong>：用 <code>right</code> 作为窗口的右边界，每遇到一个 <code>0</code>，增加 <code>zeroCount</code>，如果 <code>zeroCount</code> 超过 1，移动 <code>left</code> 直到 <code>zeroCount</code> 不超过 1，在窗口大小符合条件时更新 <code>max</code>。</li><li><strong>考虑全是 <code>1</code> 的情况</strong>：如果数组全是 <code>1</code>，由于必须删除一个元素，最长子数组长度是 <code>nums.length - 1</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>nums</code> 数组的长度，每个元素最多被访问两次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestSubarray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		zeroCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			zeroCount<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果窗口中 0 的数量超过 1，缩小窗口</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>zeroCount <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				zeroCount<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 计算窗口长度，但排除删除的一个元素，确保当数组全是 1 时，返回 nums.length - 1</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> right <span class="token operator">-</span> left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"1004",-1),q=n("td",{style:{"text-align":"left"}},"最大连续1的个数 III",-1),z={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"二分查找",-1),N=n("code",null,"前缀和",-1),O=n("code",null,"1+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"};function A(M,S){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/sliding-window.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,t(o)]),s(),n("a",f,[x,t(o)])]),y,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[C,q,n("td",z,[t(a,{to:"/problem/1004.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),s(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[N]),_:1}),s(),O]),V,n("td",R,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])])])])])}const T=l(m,[["render",A],["__file","1493.html.vue"]]);export{T as default};

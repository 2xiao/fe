import{_ as c,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-WL8GPOUO.js";const m={},k=n("h1",{id:"_2148-元素计数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2148-元素计数","aria-hidden":"true"},"#"),t(" 2148. 元素计数")],-1),h=n("code",null,"数组",-1),g=n("code",null,"计数",-1),b=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/count-elements-with-strictly-smaller-and-greater-elements",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the number of elements that have <strong>both</strong> a strictly smaller and a strictly greater element appear in</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [11,7,2,15]</p><p>Output: 2</p><p>Explanation: The element 7 has the element 2 strictly smaller than it and the element 11 strictly greater than it.</p><p>Element 11 has element 7 strictly smaller than it and element 15 strictly greater than it.</p><p>In total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-3,3,3,90]</p><p>Output: 2</p><p>Explanation: The element 3 has the element -3 strictly smaller than it and the element 90 strictly greater than it.</p><p>Since there are two elements with the value 3, in total there are 2 elements having both a strictly smaller and a strictly greater element appear in nums.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，统计并返回在 <code>nums</code> 中同时至少具有一个严格较小元素和一个严格较大元素的元素数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [11,7,2,15]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 元素 7 ：严格较小元素是元素 2 ，严格较大元素是元素 11 。</p><p>元素 11 ：严格较小元素是元素 7 ，严格较大元素是元素 15 。</p><p>总计有 2 个元素都满足在 nums 中同时存在一个严格较小元素和一个严格较大元素。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-3,3,3,90]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 元素 3 ：严格较小元素是元素 -3 ，严格较大元素是元素 90 。</p><p>由于有两个元素的值为 3 ，总计有 2 个元素都满足在 nums 中同时存在一个严格较小元素和一个严格较大元素。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-10^5 &lt;= nums[i] &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>初始化最小值和最大值</strong>： <ul><li>使用 <code>min</code> 和 <code>max</code> 分别记录数组的最小值和最大值。</li><li>使用 <code>minCount</code> 和 <code>maxCount</code> 分别记录数组中值等于最小值和最大值的元素个数。</li><li>初始化为正无穷和负无穷，以便在遍历过程中正确更新。</li></ul></li><li><strong>遍历数组</strong>： <ul><li>更新 <code>min</code> 和 <code>max</code>： <ul><li>如果当前元素小于 <code>min</code>，更新 <code>min</code> 并将最小值的计数 <code>minCount</code> 重置为 1。</li><li>如果当前元素等于 <code>min</code>，仅增加 <code>minCount</code>。</li><li>同样处理最大值 <code>max</code> 和最大值计数 <code>maxCount</code>。</li></ul></li></ul></li><li><strong>计算结果</strong>： <ul><li>如果最小值和最大值相等（数组中的所有元素都相同），返回 <code>0</code>，因为不存在符合条件的元素。</li><li>否则，返回数组长度减去最小值和最大值的计数之和，即 <code>nums.length - minCount - maxCount</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countElements</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token number">Infinity</span><span class="token punctuation">,</span>
		minCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">,</span>
		maxCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&lt;</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> num<span class="token punctuation">;</span>
			minCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置计数</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> min<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minCount<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 增加计数</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> num<span class="token punctuation">;</span>
			maxCount <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置计数</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxCount<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 增加计数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">===</span> max<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 所有元素相同</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> minCount <span class="token operator">-</span> maxCount<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"744",-1),E=n("td",{style:{"text-align":"left"}},"寻找比目标字母大的最小字母",-1),q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/find-smallest-letter-greater-than-target",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/find-smallest-letter-greater-than-target",target:"_blank",rel:"noopener noreferrer"};function T(R,S){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",v,[_,s(o)]),t(),n("a",y,[f,s(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[C,E,n("td",q,[s(a,{to:"/problem/0744.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[N]),_:1})]),V,n("td",O,[n("a",j,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])])])])])}const z=c(m,[["render",T],["__file","2148.html.vue"]]);export{z as default};

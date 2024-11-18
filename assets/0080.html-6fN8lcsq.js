import{_ as r,r as l,o as i,c as u,a as n,b as s,d as e,w as t,f as d,e as c}from"./app-Ob52y8QZ.js";const h={},m=n("h1",{id:"_80-删除有序数组中的重复项-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_80-删除有序数组中的重复项-ii","aria-hidden":"true"},"#"),s(" 80. 删除有序数组中的重复项 II")],-1),k=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),w=n("code",null,"nums",-1),x=n("strong",null,"non-decreasing order",-1),I={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"in-place",-1),T=n("strong",null,"at most twice",-1),q=n("strong",null,"relative order",-1),C=n("strong",null,"same",-1),L=c("<p>Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the <strong>first part</strong> of the array <code>nums</code>. More formally, if there are <code>k</code> elements after removing the duplicates, then the first <code>k</code> elements of <code>nums</code> should hold the final result. It does not matter what you leave beyond the first <code>k</code> elements.</p><p>Return <code>k</code> <em>after placing the final result in the first</em><code>k</code> <em>slots of</em><code>nums</code>.</p>",2),N=n("strong",null,"not",-1),O={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},V=c(`<p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1,2,2,3]</p><p>Output: 5, nums = [1,1,2,2,3,_]</p><p>Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,0,1,1,1,1,2,3,3]</p><p>Output: 7, nums = [0,0,1,1,2,3,3,<em>,</em>]</p><p>Explanation: Your function should return k = 7, with the first seven elements of nums being 0, 0, 1, 1, 2, 3 and 3 respectively.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 3 * 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个有序数组 nums，对数组中的元素进行去重，使得原数组中的每个元素最多暴露 2 个。最后返回去重以后数组的长度值。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于 <code>nums</code> 是有序数组，一般最容易想到使用双指针的解法，双指针的关键点：移动两个指针的条件。</p><ul><li>快指针从头遍历数组，慢指针指向修改后的数组的末端；</li><li>当慢指针与快指针的数不相等时，移动慢指针到下一个位置，同时赋值慢指针；</li><li>当慢指针与快指针的数相等时，判断相等的次数，只有第一次相等时（因为不相等时已经移动过此数字一次了），才移动慢指针到下一个位置，同时赋值慢指针；</li><li>处理边界条件：当数组小于两个元素时，不做处理。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中<code>n</code> 表示 <code>nums</code> 的长度，需要遍历数组一遍。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用了常数个变量存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token keyword">return</span> len<span class="token punctuation">;</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sameTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">!=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow<span class="token operator">++</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			sameTime <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			sameTime<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>sameTime <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				slow<span class="token operator">++</span><span class="token punctuation">;</span>
				nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"26",-1),R=n("td",{style:{"text-align":"left"}},"删除有序数组中的重复项",-1),Y={style:{"text-align":"center"}},D={style:{"text-align":"left"}},M=n("code",null,"数组",-1),S=n("code",null,"双指针",-1),G={style:{"text-align":"left"}},z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const p=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/two-pointers.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",f,[v,e(a)]),s(),n("a",b,[g,e(a)])]),y,n("p",null,[s("Given an integer array "),w,s(" sorted in "),x,s(" , remove some duplicates "),n("a",I,[E,e(a)]),s(" such that each unique element appears "),T,s(". The "),q,s(" of the elements should be kept the "),C,s(".")]),L,n("p",null,[s("Do "),N,s(" allocate extra space for another array. You must do this by "),n("strong",null,[s("modifying the input array"),n("a",O,[s("in-place"),e(a)])]),s(" with O(1) extra memory.")]),V,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[B,R,n("td",Y,[e(o,{to:"/problem/0026.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",D,[e(o,{to:"/tag/array.html"},{default:t(()=>[M]),_:1}),s(),e(o,{to:"/tag/two-pointers.html"},{default:t(()=>[S]),_:1})]),n("td",G,[e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})]),n("td",z,[n("a",A,[s("🀄️"),e(a)]),s(),n("a",F,[s("🔗"),e(a)])])])])])])}const Q=r(h,[["render",H],["__file","0080.html.vue"]]);export{Q as default};

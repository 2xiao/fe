import{_ as d,r as l,o as i,c as p,a as e,b as n,d as t,w as s,f as u,e as c}from"./app-WL8GPOUO.js";const h={},_=e("h1",{id:"_27-移除元素",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_27-移除元素","aria-hidden":"true"},"#"),n(" 27. 移除元素")],-1),m=e("code",null,"数组",-1),k=e("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),y=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),n(" 题目")],-1),x=e("code",null,"nums",-1),w=e("code",null,"val",-1),E=e("code",null,"val",-1),q=e("code",null,"nums",-1),C={href:"https://en.wikipedia.org/wiki/In-place_algorithm",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"in-place",-1),N=e("em",null,"the number of elements in",-1),L=e("code",null,"nums",-1),V=e("em",null,"which are not equal to",-1),O=e("code",null,"val",-1),T=c('<p>Consider the number of elements in <code>nums</code> which are not equal to <code>val</code> be <code>k</code>, to get accepted, you need to do the following things:</p><ul><li>Change the array <code>nums</code> such that the first <code>k</code> elements of <code>nums</code> contain the elements which are not equal to <code>val</code>. The remaining elements of <code>nums</code> are not important as well as the size of <code>nums</code>.</li><li>Return <code>k</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,2,3], val = 3</p><p>Output: 2, nums = [2,2,<em>,</em>]</p><p>Explanation: Your function should return k = 2, with the first two elements of nums being 2.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,1,2,2,3,0,4,2], val = 2</p><p>Output: 5, nums = [0,1,4,0,3,<em>,</em>,_]</p><p>Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.</p><p>Note that the five elements can be returned in any order.</p><p>It does not matter what you leave beyond the returned k (hence they are underscores).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 50</code></li><li><code>0 &lt;= val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 nums 和一个数值 <code>val</code>，将数组中所有等于 <code>val</code> 的元素删除，并返回剩余的元素个数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',11),j=c(`<p>可以使用快慢指针，<code>fast</code> 指针往前遍历数组，遇到与 <code>val</code> 不同的数，就将它往前移，用 <code>slow</code> 指针标记与 <code>val</code> 不同的数要移动的位置，最后返回 <code>slow</code> 即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中<code>n</code> 表示 <code>nums</code> 的长度，需要遍历数组一遍。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用了常数个变量存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> fast <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> fast <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> fast<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span> <span class="token operator">!=</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>slow<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>fast<span class="token punctuation">]</span><span class="token punctuation">;</span>
			slow<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,6),z=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),B=e("td",{style:{"text-align":"center"}},"26",-1),R=e("td",{style:{"text-align":"left"}},"删除有序数组中的重复项",-1),Y={style:{"text-align":"center"}},G={style:{"text-align":"left"}},S=e("code",null,"数组",-1),A=e("code",null,"双指针",-1),D=e("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},K=e("td",{style:{"text-align":"center"}},"203",-1),M=e("td",{style:{"text-align":"left"}},"移除链表元素",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=e("code",null,"递归",-1),W=e("code",null,"链表",-1),X=e("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/remove-linked-list-elements",target:"_blank",rel:"noopener noreferrer"},ne=e("td",{style:{"text-align":"center"}},"283",-1),te=e("td",{style:{"text-align":"left"}},"移动零",-1),se={style:{"text-align":"center"}},ae={style:{"text-align":"left"}},oe=e("code",null,"数组",-1),le=e("code",null,"双指针",-1),ce=e("td",{style:{"text-align":"center"}},"🟢",-1),re={style:{"text-align":"center"}},de={href:"https://leetcode.cn/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},ie={href:"https://leetcode.com/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"};function pe(ue,he){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[_,e("p",null,[n("🟢 "),t(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",f,[v,t(o)]),n(),e("a",g,[b,t(o)])]),y,e("p",null,[n("Given an integer array "),x,n(" and an integer "),w,n(", remove all occurrences of "),E,n(" in "),q,n(),e("a",C,[I,t(o)]),n(". The order of the elements may be changed. Then return "),N,L,n(),V,O,n(".")]),T,e("p",null,[n("这道题和 "),t(a,{to:"/problem/0283.html"},{default:s(()=>[n("第 283 题")]),_:1}),n(" 基本一致，283 题是删除 0，这一题是给定的一个 val，实质是一样的。")]),j,u(" prettier-ignore "),e("table",null,[z,e("tbody",null,[e("tr",null,[B,R,e("td",Y,[t(a,{to:"/problem/0026.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",G,[t(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[A]),_:1})]),D,e("td",F,[e("a",H,[n("🀄️"),t(o)]),n(),e("a",J,[n("🔗"),t(o)])])]),e("tr",null,[K,M,e("td",P,[t(a,{to:"/problem/0203.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",Q,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[U]),_:1}),n(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[W]),_:1})]),X,e("td",Z,[e("a",$,[n("🀄️"),t(o)]),n(),e("a",ee,[n("🔗"),t(o)])])]),e("tr",null,[ne,te,e("td",se,[t(a,{to:"/problem/0283.html"},{default:s(()=>[n("[✓]")]),_:1})]),e("td",ae,[t(a,{to:"/tag/array.html"},{default:s(()=>[oe]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[le]),_:1})]),ce,e("td",re,[e("a",de,[n("🀄️"),t(o)]),n(),e("a",ie,[n("🔗"),t(o)])])])])])])}const me=d(h,[["render",pe],["__file","0027.html.vue"]]);export{me as default};

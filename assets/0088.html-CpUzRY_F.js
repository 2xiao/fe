import{_ as r,r as l,o as p,c as d,a as n,b as e,d as t,w as s,f as i,e as u}from"./app-U2ekqv2z.js";const m={},h=n("h1",{id:"_88-合并两个有序数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_88-合并两个有序数组","aria-hidden":"true"},"#"),e(" 88. 合并两个有序数组")],-1),_=n("code",null,"数组",-1),k=n("code",null,"双指针",-1),g=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in <strong>non-decreasing order</strong> , and two integers <code>m</code> and <code>n</code>, representing the number of elements in <code>nums1</code> and <code>nums2</code> respectively.</p><p><strong>Merge</strong> <code>nums1</code> and <code>nums2</code> into a single array sorted in <strong>non-decreasing order</strong>.</p><p>The final sorted array should not be returned by the function, but instead be <em>stored inside the array</em><code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a length of <code>n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3</p><p>Output: [1,2,2,3,5,6]</p><p>Explanation: The arrays we are merging are [1,2,3] and [2,5,6].</p><p>The result of the merge is [ <em>1</em> , <em>2</em> ,2, <em>3</em> ,5,6] with the underlined elements coming from nums1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [1], m = 1, nums2 = [], n = 0</p><p>Output: [1]</p><p>Explanation: The arrays we are merging are [1] and [].</p><p>The result of the merge is [1].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums1 = [0], m = 0, nums2 = [1], n = 1</p><p>Output: [1]</p><p>Explanation: The arrays we are merging are [] and [1].</p><p>The result of the merge is [1].</p><p>Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums1.length == m + n</code></li><li><code>nums2.length == n</code></li><li><code>0 &lt;= m, n &lt;= 200</code></li><li><code>1 &lt;= m + n &lt;= 200</code></li><li><code>-10^9 &lt;= nums1[i], nums2[j] &lt;= 10^9</code></li></ul><p><strong>Follow up:</strong> Can you come up with an algorithm that runs in <code>O(m + n)</code> time?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个按 递增顺序 排列的整数数组 <code>nums1</code> 和 <code>nums2</code>，另有两个整数 <code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目。</p><p>请你 合并 <code>nums2</code> 到 <code>nums1</code> 中，使合并后的数组同样按 递增顺序 排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了不大量移动元素，就要从 2 个数组长度之和的最后一个位置开始，依次选取两个数组中大的数，从第一个数组的尾巴开始往头放，只要循环一次以后，就生成了合并以后的数组了。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中<code>m</code> 和 <code>n</code> ，分别表示 <code>nums1</code> 和 <code>nums2</code> 中的元素数目，需要遍历一遍两个数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用了常数个变量存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify nums1 in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> m<span class="token punctuation">,</span> nums2<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> j <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> k <span class="token operator">=</span> m <span class="token operator">+</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums1<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums1<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			i<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			nums1<span class="token punctuation">[</span>k<span class="token punctuation">]</span> <span class="token operator">=</span> nums2<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		k<span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"21",-1),T=n("td",{style:{"text-align":"left"}},"合并两个有序链表",-1),j={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=n("code",null,"递归",-1),N=n("code",null,"链表",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"977",-1),R=n("td",{style:{"text-align":"left"}},"有序数组的平方",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},K=n("code",null,"数组",-1),M=n("code",null,"双指针",-1),S=n("code",null,"排序",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"986",-1),J=n("td",{style:{"text-align":"left"}},"区间列表的交集",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"双指针",-1),X=n("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"2516",-1),tn=n("td",{style:{"text-align":"left"}},"每种字符至少取 K 个",-1),sn={style:{"text-align":"center"}},an={style:{"text-align":"left"}},on=n("code",null,"哈希表",-1),ln=n("code",null,"字符串",-1),cn=n("code",null,"滑动窗口",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),pn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/take-k-of-each-character-from-left-and-right",target:"_blank",rel:"noopener noreferrer"};function mn(hn,_n){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[h,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",f,[b,t(o)]),e(),n("a",y,[v,t(o)])]),x,i(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,T,n("td",j,[t(a,{to:"/problem/0021.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",q,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[N]),_:1})]),O,n("td",I,[n("a",L,[e("🀄️"),t(o)]),e(),n("a",V,[e("🔗"),t(o)])])]),n("tr",null,[B,R,n("td",D,[t(a,{to:"/problem/0977.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",F,[t(a,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[M]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[S]),_:1})]),Y,n("td",z,[n("a",A,[e("🀄️"),t(o)]),e(),n("a",G,[e("🔗"),t(o)])])]),n("tr",null,[H,J,n("td",P,[t(a,{to:"/problem/0986.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",Q,[t(a,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[W]),_:1})]),X,n("td",Z,[n("a",$,[e("🀄️"),t(o)]),e(),n("a",nn,[e("🔗"),t(o)])])]),n("tr",null,[en,tn,n("td",sn,[t(a,{to:"/problem/2516.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",an,[t(a,{to:"/tag/hash-table.html"},{default:s(()=>[on]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[ln]),_:1}),e(),t(a,{to:"/tag/sliding-window.html"},{default:s(()=>[cn]),_:1})]),rn,n("td",pn,[n("a",dn,[e("🀄️"),t(o)]),e(),n("a",un,[e("🔗"),t(o)])])])])])])}const gn=r(m,[["render",mn],["__file","0088.html.vue"]]);export{gn as default};

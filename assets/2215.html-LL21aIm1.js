import{_ as r,r as c,o as p,c as i,a as n,b as s,d as e,w as t,f as d,e as u}from"./app--GvfAkAr.js";const m={},h=n("h1",{id:"_2215-找出两数组的不同",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2215-找出两数组的不同","aria-hidden":"true"},"#"),s(" 2215. 找出两数组的不同")],-1),_=n("code",null,"数组",-1),k=n("code",null,"哈希表",-1),g={href:"https://leetcode.cn/problems/find-the-difference-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-the-difference-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two <strong>0-indexed</strong> integer arrays <code>nums1</code> and <code>nums2</code>, return <em>a list</em><code>answer</code> <em>of size</em> <code>2</code> <em>where:</em></p><ul><li><code>answer[0]</code> <em>is a list of all<strong>distinct</strong> integers in</em> <code>nums1</code> <em>which are<strong>not</strong> present in</em> <code>nums2</code>.</li><li><code>answer[1]</code> <em>is a list of all<strong>distinct</strong> integers in</em> <code>nums2</code> <em>which are<strong>not</strong> present in</em> <code>nums1</code>.</li></ul><p><strong>Note</strong> that the integers in the lists may be returned in <strong>any</strong> order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums1 = [1,2,3], nums2 = [2,4,6]</p><p>Output: [[1,3],[4,6]]</p><p>Explanation: For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].</p><p>For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums1 = [1,2,3,3], nums2 = [1,1,2,2]</p><p>Output: [[3],[]]</p><p>Explanation: For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].</p><p>Every integer in nums2 is present in nums1. Therefore, answer[1] = [].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>-1000 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个下标从 <code>0</code> 开始的整数数组 <code>nums1</code> 和 <code>nums2</code> ，请你返回一个长度为 <code>2</code> 的列表 <code>answer</code> ，其中：</p><ul><li><code>answer[0]</code> 是 <code>nums1</code> 中所有<strong>不</strong> 存在于 <code>nums2</code> 中的 <strong>不同</strong> 整数组成的列表。</li><li><code>answer[1]</code> 是 <code>nums2</code> 中所有<strong>不</strong> 存在于 <code>nums1</code> 中的 <strong>不同</strong> 整数组成的列表。</li></ul><p><strong>注意：</strong> 列表中的整数可以按 <strong>任意</strong> 顺序返回。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [1,2,3], nums2 = [2,4,6]</p><p><strong>输出：</strong>[[1,3],[4,6]]</p><p><strong>解释：</strong> 对于 nums1 ，nums1[1] = 2 出现在 nums2 中下标 0 处，然而 nums1[0] = 1 和 nums1[2] = 3 没有出现在 nums2 中。因此，answer[0] = [1,3]。</p><p>对于 nums2 ，nums2[0] = 2 出现在 nums1 中下标 1 处，然而 nums2[1] = 4 和 nums2[2] = 6 没有出现在 nums2 中。因此，answer[1] = [4,6]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums1 = [1,2,3,3], nums2 = [1,1,2,2]</p><p><strong>输出：</strong>[[3],[]]</p><p><strong>解释：</strong> 对于 nums1 ，nums1[2] 和 nums1[3] 没有出现在 nums2 中。由于 nums1[2] == nums1[3] ，二者的值只需要在 answer[0] 中出现一次，故 answer[0] = [3]。</p><p>nums2 中的每个整数都在 nums1 中出现，因此，answer[1] = [] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums1.length, nums2.length &lt;= 1000</code></li><li><code>-1000 &lt;= nums1[i], nums2[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过使用集合来有效地找出在 <code>nums1</code> 中但不在 <code>nums2</code> 中的元素，以及在 <code>nums2</code> 中但不在 <code>nums1</code> 中的元素。</p><ol><li><strong>集合创建</strong>：使用 <code>Set</code> 来去重并存储 <code>nums1</code> 和 <code>nums2</code> 的元素。</li><li><strong>过滤独特元素</strong>： <ul><li>对于 <code>nums1</code>，使用 <code>filter</code> 方法找出那些不在 <code>set2</code> 中的元素。</li><li>对于 <code>nums2</code>，使用类似的方法找出那些不在 <code>set1</code> 中的元素。</li></ul></li><li><strong>返回结果</strong>：返回一个包含两个数组的列表，其中一个是 <code>nums1</code> 中独特的元素，另一个是 <code>nums2</code> 中独特的元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li>时间复杂度：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是 <code>nums1</code> 和 <code>nums2</code> 的长度。</li><li>空间复杂度：<code>O(n + m)</code>，用于存储集合。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums1<span class="token punctuation">,</span> nums2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 nums1, nums2 的元素分别存入集合</span>
	<span class="token keyword">const</span> set1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> set2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>nums2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 过滤出只在 nums1 中的元素</span>
	<span class="token keyword">const</span> answer1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set1<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>set2<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 过滤出只在 nums2 中的元素</span>
	<span class="token keyword">const</span> answer2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>set2<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token operator">!</span>set1<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token punctuation">[</span>answer1<span class="token punctuation">,</span> answer2<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"349",-1),E=n("td",{style:{"text-align":"left"}},"两个数组的交集",-1),q={style:{"text-align":"center"}},I={style:{"text-align":"left"}},N=n("code",null,"数组",-1),C=n("code",null,"哈希表",-1),L=n("code",null,"双指针",-1),S=n("code",null,"2+",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"350",-1),F=n("td",{style:{"text-align":"left"}},"两个数组的交集 II",-1),R={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=n("code",null,"数组",-1),G=n("code",null,"哈希表",-1),A=n("code",null,"双指针",-1),H=n("code",null,"2+",-1),J=n("td",{style:{"text-align":"center"}},"🟢",-1),K={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2248",-1),U=n("td",{style:{"text-align":"left"}},"多个数组求交集",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),Z=n("code",null,"哈希表",-1),$=n("code",null,"计数",-1),nn=n("code",null,"1+",-1),sn=n("td",{style:{"text-align":"center"}},"🟢",-1),en={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/intersection-of-multiple-arrays",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/intersection-of-multiple-arrays",target:"_blank",rel:"noopener noreferrer"};function on(cn,ln){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),i("div",null,[h,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",g,[f,e(o)]),s(),n("a",b,[y,e(o)])]),w,d(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[x,E,n("td",q,[e(a,{to:"/problem/0349.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/array.html"},{default:t(()=>[N]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[C]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[L]),_:1}),s(),S]),V,n("td",O,[n("a",T,[s("🀄️"),e(o)]),s(),n("a",j,[s("🔗"),e(o)])])]),n("tr",null,[B,F,n("td",R,[e(a,{to:"/problem/0350.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",z,[e(a,{to:"/tag/array.html"},{default:t(()=>[D]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[G]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[A]),_:1}),s(),H]),J,n("td",K,[n("a",M,[s("🀄️"),e(o)]),s(),n("a",P,[s("🔗"),e(o)])])]),n("tr",null,[Q,U,W,n("td",X,[e(a,{to:"/tag/array.html"},{default:t(()=>[Y]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[Z]),_:1}),s(),e(a,{to:"/tag/counting.html"},{default:t(()=>[$]),_:1}),s(),nn]),sn,n("td",en,[n("a",tn,[s("🀄️"),e(o)]),s(),n("a",an,[s("🔗"),e(o)])])])])])])}const pn=r(m,[["render",on],["__file","2215.html.vue"]]);export{pn as default};

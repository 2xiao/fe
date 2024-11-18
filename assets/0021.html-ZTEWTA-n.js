import{_ as i,r as c,o as d,c as r,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-Ob52y8QZ.js";const _={},h=t("h1",{id:"_21-合并两个有序链表",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_21-合并两个有序链表","aria-hidden":"true"},"#"),e(" 21. 合并两个有序链表")],-1),m=t("code",null,"递归",-1),g=t("code",null,"链表",-1),f={href:"https://leetcode.cn/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the heads of two sorted linked lists <code>list1</code> and <code>list2</code>.</p><p>Merge the two lists into one <strong>sorted</strong> list. The list should be made by splicing together the nodes of the first two lists.</p><p>Return <em>the head of the merged linked list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: list1 = [1,2,4], list2 = [1,3,4]</p><p>Output: [1,1,2,3,4,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: list1 = [], list2 = []</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: list1 = [], list2 = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in both lists is in the range <code>[0, 50]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>Both <code>list1</code> and <code>list2</code> are sorted in <strong>non-decreasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>合并 2 个有序链表</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用归并排序的思想，具体步骤如下：</p><ul><li>使用哑节点 <code>newHead</code> 构造一个头节点，并使用 <code>prev</code> 指向 <code>newHead</code> 用于遍历；</li><li>然后判断 <code>list1</code> 和 <code>list2</code> 头节点的值，将较小的头节点加入到合并后的链表中，并向后移动该链表的头节点指针；</li><li>重复上一步操作，直到两个链表中出现链表为空的情况；</li><li>将剩余链表链接到合并后的链表中；</li><li>返回合并后有序链表的头节点 <code>newHead.next</code>。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，其中 <code>m</code>、<code>n</code> 分别为 <code>list1</code> 和 <code>list2</code> 的长度，需要对每个节点遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，链表是原地修改的，没有占用额外的空间用于存储节点，只使用了常量级别的变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">list2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mergeTwoLists</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">list1<span class="token punctuation">,</span> list2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> newHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> newHead<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>list1 <span class="token operator">&amp;&amp;</span> list2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>list1<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> list2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1<span class="token punctuation">;</span>
			list1 <span class="token operator">=</span> list1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list2<span class="token punctuation">;</span>
			list2 <span class="token operator">=</span> list2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	prev<span class="token punctuation">.</span>next <span class="token operator">=</span> list1 <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">?</span> list1 <span class="token operator">:</span> list2<span class="token punctuation">;</span>
	<span class="token keyword">return</span> newHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"23",-1),q=t("td",{style:{"text-align":"left"}},"合并 K 个升序链表",-1),L={style:{"text-align":"center"}},N={style:{"text-align":"left"}},E=t("code",null,"链表",-1),H=t("code",null,"分治",-1),I=t("code",null,"堆（优先队列）",-1),C=t("code",null,"1+",-1),M={style:{"text-align":"left"}},O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/merge-k-sorted-lists",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"88",-1),T=t("td",{style:{"text-align":"left"}},"合并两个有序数组",-1),R={style:{"text-align":"center"}},z={style:{"text-align":"left"}},K=t("code",null,"数组",-1),S=t("code",null,"双指针",-1),Y=t("code",null,"排序",-1),A={style:{"text-align":"left"}},D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"148",-1),P=t("td",{style:{"text-align":"left"}},"排序链表",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=t("code",null,"链表",-1),X=t("code",null,"双指针",-1),Z=t("code",null,"分治",-1),$=t("code",null,"2+",-1),tt={style:{"text-align":"left"}},et={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/sort-list",target:"_blank",rel:"noopener noreferrer"},ot=t("td",{style:{"text-align":"center"}},"244",-1),at=t("td",{style:{"text-align":"left"}},"最短单词距离 II 🔒",-1),lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},it=t("code",null,"设计",-1),dt=t("code",null,"数组",-1),rt=t("code",null,"哈希表",-1),pt=t("code",null,"2+",-1),ut={style:{"text-align":"left"}},_t={style:{"text-align":"center"}},ht={href:"https://leetcode.cn/problems/shortest-word-distance-ii",target:"_blank",rel:"noopener noreferrer"},mt={href:"https://leetcode.com/problems/shortest-word-distance-ii",target:"_blank",rel:"noopener noreferrer"},gt=t("td",{style:{"text-align":"center"}},"1634",-1),ft=t("td",{style:{"text-align":"left"}},"求两个多项式链表的和 🔒",-1),kt=t("td",{style:{"text-align":"center"}},null,-1),bt={style:{"text-align":"left"}},yt=t("code",null,"链表",-1),xt=t("code",null,"数学",-1),vt=t("code",null,"双指针",-1),wt={style:{"text-align":"left"}},qt={style:{"text-align":"center"}},Lt={href:"https://leetcode.cn/problems/add-two-polynomials-represented-as-linked-lists",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"1940",-1),Ht=t("td",{style:{"text-align":"left"}},"排序数组之间的最长公共子序列 🔒",-1),It=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Mt=t("code",null,"数组",-1),Ot=t("code",null,"哈希表",-1),Vt=t("code",null,"计数",-1),jt={style:{"text-align":"left"}},Bt={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/longest-common-subsequence-between-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},Rt={href:"https://leetcode.com/problems/longest-common-subsequence-between-sorted-arrays",target:"_blank",rel:"noopener noreferrer"},zt=t("td",{style:{"text-align":"center"}},"2570",-1),Kt=t("td",{style:{"text-align":"left"}},"合并两个二维数组 - 求和法",-1),St=t("td",{style:{"text-align":"center"}},null,-1),Yt={style:{"text-align":"left"}},At=t("code",null,"数组",-1),Dt=t("code",null,"哈希表",-1),Ft=t("code",null,"双指针",-1),Gt={style:{"text-align":"left"}},Jt={style:{"text-align":"center"}},Pt={href:"https://leetcode.cn/problems/merge-two-2d-arrays-by-summing-values",target:"_blank",rel:"noopener noreferrer"},Qt={href:"https://leetcode.com/problems/merge-two-2d-arrays-by-summing-values",target:"_blank",rel:"noopener noreferrer"};function Ut(Wt,Xt){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return d(),r("div",null,[h,t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/recursion.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),t("a",f,[k,n(a)]),e(),t("a",b,[y,n(a)])]),x,p(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,q,t("td",L,[n(o,{to:"/problem/0023.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",N,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[E]),_:1}),e(),n(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[H]),_:1}),e(),n(o,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[I]),_:1}),e(),C]),t("td",M,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})]),t("td",O,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",j,[e("🔗"),n(a)])])]),t("tr",null,[B,T,t("td",R,[n(o,{to:"/problem/0088.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",z,[n(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[Y]),_:1})]),t("td",A,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})]),t("td",D,[t("a",F,[e("🀄️"),n(a)]),e(),t("a",G,[e("🔗"),n(a)])])]),t("tr",null,[J,P,t("td",Q,[n(o,{to:"/problem/0148.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",U,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[W]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[Z]),_:1}),e(),$]),t("td",tt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",et,[t("a",nt,[e("🀄️"),n(a)]),e(),t("a",st,[e("🔗"),n(a)])])]),t("tr",null,[ot,at,lt,t("td",ct,[n(o,{to:"/tag/design.html"},{default:s(()=>[it]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[dt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[rt]),_:1}),e(),pt]),t("td",ut,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",_t,[t("a",ht,[e("🀄️"),n(a)]),e(),t("a",mt,[e("🔗"),n(a)])])]),t("tr",null,[gt,ft,kt,t("td",bt,[n(o,{to:"/tag/linked-list.html"},{default:s(()=>[yt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[xt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[vt]),_:1})]),t("td",wt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",qt,[t("a",Lt,[e("🀄️"),n(a)]),e(),t("a",Nt,[e("🔗"),n(a)])])]),t("tr",null,[Et,Ht,It,t("td",Ct,[n(o,{to:"/tag/array.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Ot]),_:1}),e(),n(o,{to:"/tag/counting.html"},{default:s(()=>[Vt]),_:1})]),t("td",jt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",Bt,[t("a",Tt,[e("🀄️"),n(a)]),e(),t("a",Rt,[e("🔗"),n(a)])])]),t("tr",null,[zt,Kt,St,t("td",Yt,[n(o,{to:"/tag/array.html"},{default:s(()=>[At]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Dt]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Ft]),_:1})]),t("td",Gt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})]),t("td",Jt,[t("a",Pt,[e("🀄️"),n(a)]),e(),t("a",Qt,[e("🔗"),n(a)])])])])])])}const $t=i(_,[["render",Ut],["__file","0021.html.vue"]]);export{$t as default};

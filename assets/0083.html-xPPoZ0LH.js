import{_ as c,r as l,o as i,c as r,a as n,b as t,d as e,w as s,f as d,e as u}from"./app--GvfAkAr.js";const k={},h=n("h1",{id:"_83-删除排序链表中的重复元素",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_83-删除排序链表中的重复元素","aria-hidden":"true"},"#"),t(" 83. 删除排序链表中的重复元素")],-1),m=n("code",null,"链表",-1),_={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),b=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a sorted linked list, <em>delete all duplicates such that each element appears only once</em>. Return <em>the linked list <strong>sorted</strong> as well</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/list1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,1,2]</p><p>Output: [1,2]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/list2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,1,2,3,3]</p><p>Output: [1,2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 300]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li>The list is guaranteed to be <strong>sorted</strong> in ascending order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>删除链表中重复的结点，以保障每个结点只出现一次。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>按照题意做即可。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteDuplicates</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 删除和 prev.next 重复的节点</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>
				prev<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span>
				prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span>
				prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">===</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"82",-1),w=n("td",{style:{"text-align":"left"}},"删除排序链表中的重复元素 II",-1),N={style:{"text-align":"center"}},L={style:{"text-align":"left"}},E=n("code",null,"链表",-1),I=n("code",null,"双指针",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-list-ii",target:"_blank",rel:"noopener noreferrer"},q={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1836",-1),R=n("td",{style:{"text-align":"left"}},"从未排序的链表中移除重复元素 🔒",-1),T=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},O=n("code",null,"哈希表",-1),D=n("code",null,"链表",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/remove-duplicates-from-an-unsorted-linked-list",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟢 "),e(p,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),n("a",_,[v,e(o)]),t(),n("a",f,[g,e(o)])]),b,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,n("td",N,[e(a,{to:"/problem/0082.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",L,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[E]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[I]),_:1})]),j,n("td",C,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",q,[t("🔗"),e(o)])])]),n("tr",null,[B,R,T,n("td",z,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[O]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[D]),_:1})]),G,n("td",S,[n("a",A,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])])])])])}const P=c(k,[["render",H],["__file","0083.html.vue"]]);export{P as default};

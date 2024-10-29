import{_ as i,r as p,o as d,c as r,a as n,b as t,d as s,w as e,f as u,e as c}from"./app-mXo2sCT-.js";const k={},h={id:"_143-重排链表",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_143-重排链表","aria-hidden":"true"},"#",-1),_={href:"https://2xiao.github.io/leetcode-js/problem/0143.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"栈",-1),v=n("code",null,"递归",-1),f=n("code",null,"链表",-1),b=n("code",null,"双指针",-1),x={href:"https://leetcode.cn/problems/reorder-list",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/reorder-list",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"LeetCode",-1),q=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the head of a singly linked-list. The list can be represented as:</p><blockquote><p>L0 -&gt; L1 -&gt; … -&gt; Ln - 1 -&gt; Ln</p></blockquote><p><em>Reorder the list to be on the following form:</em></p><blockquote><p>L0 -&gt; Ln -&gt; L1 -&gt; Ln - 1 -&gt; L2 -&gt; Ln - 2 -&gt; …</p></blockquote><p>You may not modify the values in the list&#39;s nodes. Only nodes themselves may be changed.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/04/reorder1linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4]</p><p>Output: [1,4,2,3]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/09/reorder2-linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5]</p><p>Output: [1,5,2,4,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 5 * 10^4]</code>.</li><li><code>1 &lt;= Node.val &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>按照指定规则重新排序链表：第一个元素和最后一个元素排列在一起，接着第二个元素和倒数第二个元素排在一起，接着第三个元素和倒数第三个元素排在一起。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>最近简单的方法是先把链表存储到数组里，然后找到链表中间的结点，按照规则拼接即可，但这样时间复杂度是 <code>O(n)</code>，空间复杂度是 <code>O(n)</code>。</p><p>更好的做法是结合之前几道题的操作：链表逆序，找中间结点。</p>',19),N=n("code",null,"reverseBetween()",-1),O=c(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify head in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reorderList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

	<span class="token comment">// 寻找中间节点</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token operator">?.</span>next<span class="token operator">?.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 反转后一半链表，eg: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6 to 1-&gt;2-&gt;3-&gt;6-&gt;5-&gt;4</span>
	<span class="token keyword">const</span> middle <span class="token operator">=</span> slow<span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		middle<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 按要求重新拼接链表，eg: 1-&gt;2-&gt;3-&gt;6-&gt;5-&gt;4 to 1-&gt;6-&gt;2-&gt;5-&gt;3-&gt;4</span>
	<span class="token keyword">let</span> p3 <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> p4 <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>p3 <span class="token operator">!=</span> middle<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		middle<span class="token punctuation">.</span>next <span class="token operator">=</span> p4<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		p4<span class="token punctuation">.</span>next <span class="token operator">=</span> p3<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		p3<span class="token punctuation">.</span>next <span class="token operator">=</span> p4<span class="token punctuation">;</span>
		p3 <span class="token operator">=</span> p4<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		p4 <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"2095",-1),E={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},M=n("code",null,"链表",-1),R=n("code",null,"双指针",-1),T={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"2516",-1),Y={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/take-k-of-each-character-from-left-and-right",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},A=n("code",null,"哈希表",-1),F=n("code",null,"字符串",-1),G=n("code",null,"滑动窗口",-1),H={style:{"text-align":"left"}};function J(P,Q){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return d(),r("div",null,[n("h1",h,[m,t(),n("a",_,[t("143. 重排链表"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/stack.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/recursion.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/linked-list.html"},{default:e(()=>[f]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",x,[y,s(o)]),t(),n("a",w,[L,s(o)])]),q,n("p",null,[t("先找到链表的中间结点，然后利用逆序区间的操作，如 "),s(a,{to:"/problem/0092.html"},{default:e(()=>[t("第 92 题")]),_:1}),t(" 里的 "),N,t(" 操作，只不过这里的反转区间是从中点一直到末尾。最后利用 2 个指针，一个指向头结点，一个指向中间结点，开始拼接最终的结果。")]),O,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[C,n("td",E,[n("a",V,[t("删除链表的中间节点"),s(o)])]),B,n("td",I,[s(a,{to:"/tag/linked-list.html"},{default:e(()=>[M]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[R]),_:1})]),n("td",T,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[z,n("td",Y,[n("a",D,[t("每种字符至少取 K 个"),s(o)])]),K,n("td",S,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/sliding-window.html"},{default:e(()=>[G]),_:1})]),n("td",H,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const W=i(k,[["render",J],["__file","0143.html.vue"]]);export{W as default};

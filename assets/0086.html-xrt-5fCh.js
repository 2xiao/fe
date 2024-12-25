import{_ as l,r as c,o as i,c as r,a as n,b as a,d as e,w as s,f as d,e as u}from"./app--GvfAkAr.js";const k={},h=n("h1",{id:"_86-分隔链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_86-分隔链表","aria-hidden":"true"},"#"),a(" 86. 分隔链表")],-1),m=n("code",null,"链表",-1),v=n("code",null,"双指针",-1),_={href:"https://leetcode.cn/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/partition-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list and a value <code>x</code>, partition it such that all nodes <strong>less than</strong> <code>x</code> come before nodes <strong>greater than or equal</strong> to <code>x</code>.</p><p>You should <strong>preserve</strong> the original relative order of the nodes in each of the two partitions.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/04/partition.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,4,3,2,5,2], x = 3</p><p>Output: [1,2,2,4,3,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [2,1], x = 2</p><p>Output: [1,2]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[0, 200]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li><li><code>-200 &lt;= x &lt;= 200</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个链表的头节点 <code>head</code> 和一个特定值 <code>x</code> ，请你对链表进行分隔，使得所有 <strong>小于</strong> <code>x</code> 的节点都出现在 <strong>大于或等于</strong> <code>x</code> 的节点之前。</p><p>你应当 <strong>保留</strong> 两个分区中每个节点的初始相对位置。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题最简单的做法是构造双向链表，不过时间复杂度是 <code>O(n^2)</code>。</p><p>更优的方法是新构造 2 个链表，一个链表专门存储比 <code>x</code> 小的结点，另一个专门存储比 <code>x</code> 大的结点。在原链表头部开始扫描一边，依次把这两类点归类到 2 个新建链表中，有点入栈的意思。由于是从头开始扫描的原链表，所以原链表中的原有顺序会依旧被保存下来。最后 2 个新链表里面会存储好各自的结果，把这两个链表，比 <code>x</code> 小的链表拼接到 比 <code>x</code> 大的链表的前面，就能得到最后的答案了。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表中节点的数量。算法只需遍历一次链表，对每个节点进行常数时间的操作（判断并连接到合适的链表），因此整体时间复杂度为线性。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为该算法只使用了常量级别的额外空间来存储几个指针（<code>beforeHead</code>、<code>before</code>、<code>afterHead</code> 和 <code>after</code>）。没有使用额外的数据结构来存储节点，因此空间复杂度是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> beforeHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> before <span class="token operator">=</span> beforeHead<span class="token punctuation">;</span>
	<span class="token keyword">let</span> afterHead <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> after <span class="token operator">=</span> afterHead<span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			before<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
			before <span class="token operator">=</span> before<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			after<span class="token punctuation">.</span>next <span class="token operator">=</span> head<span class="token punctuation">;</span>
			after <span class="token operator">=</span> after<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	after<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	before<span class="token punctuation">.</span>next <span class="token operator">=</span> afterHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">return</span> beforeHead<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2161",-1),N=n("td",{style:{"text-align":"left"}},"根据给定数字划分数组",-1),L=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},q=n("code",null,"数组",-1),C=n("code",null,"双指针",-1),E=n("code",null,"模拟",-1),O=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/partition-array-according-to-given-pivot",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/partition-array-according-to-given-pivot",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[a("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[a("Medium")]),_:1}),a("  🔖  "),e(t,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),a(),e(t,{to:"/tag/two-pointers.html"},{default:s(()=>[v]),_:1}),a("  🔗 "),n("a",_,[f,e(o)]),a(),n("a",b,[g,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,N,L,n("td",H,[e(t,{to:"/tag/array.html"},{default:s(()=>[q]),_:1}),a(),e(t,{to:"/tag/two-pointers.html"},{default:s(()=>[C]),_:1}),a(),e(t,{to:"/tag/simulation.html"},{default:s(()=>[E]),_:1})]),O,n("td",V,[n("a",j,[a("🀄️"),e(o)]),a(),n("a",I,[a("🔗"),e(o)])])])])])])}const G=l(k,[["render",B],["__file","0086.html.vue"]]);export{G as default};

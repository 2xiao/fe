import{_ as i,r as o,o as r,c as d,a,b as n,d as s,w as e,e as p}from"./app--GvfAkAr.js";const u={},k=a("h1",{id:"_18-删除链表的节点",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_18-删除链表的节点","aria-hidden":"true"},"#"),n(" 18. 删除链表的节点")],-1),v=a("code",null,"链表",-1),h={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof",target:"_blank",rel:"noopener noreferrer"},_=a("code",null,"力扣",-1),m=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。</p><p>返回删除后的链表的头节点。</p><p><strong>示例 1</strong>:</p><blockquote><p>输入: head = [4,5,1,9], val = 5</p><p>输出: [4,1,9]</p><p>解释: 给定你链表中值为 <code>5</code> 的第二个节点，那么在调用了你的函数之后，该链表应变为 <code>4 -&gt; 1 -&gt; 9</code>.</p></blockquote><p><strong>示例 2</strong>:</p><blockquote><p>输入: head = [4,5,1,9], val = 1</p><p>输出: [4,5,9]</p><p>解释: 给定你链表中值为 <code>1</code> 的第三个节点，那么在调用了你的函数之后，该链表应变为 <code>4 -&gt; 5 -&gt; 9</code>.</p></blockquote><p><strong>说明</strong>：</p><ul><li>题目保证链表中节点的值互不相同</li><li>若使用 C 或 C++ 语言，你不需要 <code>free</code> 或 <code>delete</code> 被删除的节点</li></ul>',9),b={class:"hint-container warning"},f=a("p",{class:"hint-container-title"},"注意",-1),x=a("code",null,"head",-1),g=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>遍历链表，找到相应节点删除，然后返回 head 即可。需要注意删除头节点的特殊情况。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>head<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prev<span class="token punctuation">.</span>next <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			<span class="token keyword">return</span> head<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		prev <span class="token operator">=</span> prev<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function w(y,L){const c=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return r(),d("div",null,[k,a("p",null,[n("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[n("Easy")]),_:1}),n("  🔖  "),s(t,{to:"/tag/linked-list.html"},{default:e(()=>[v]),_:1}),n("  🔗 "),a("a",h,[_,s(l)])]),m,a("div",b,[f,a("p",null,[n("本题与 LeetCode "),s(t,{to:"/problem/0203.html"},{default:e(()=>[n("第 203 题")]),_:1}),n(" 类似，区别是链表中节点的值可能重复；升级版为"),s(t,{to:"/problem/0237.html"},{default:e(()=>[n("第 237 题")]),_:1}),n("，无法访问链表的 "),x,n(" 节点。")])]),g])}const j=i(u,[["render",w],["__file","jz_offer_18_1.html.vue"]]);export{j as default};

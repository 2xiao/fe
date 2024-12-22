import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app-U2ekqv2z.js";const d={},k=n("h1",{id:"_25-合并两个排序的链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_25-合并两个排序的链表","aria-hidden":"true"},"#"),s(" 25. 合并两个排序的链表")],-1),v=n("code",null,"递归",-1),m=n("code",null,"链表",-1),_={href:"https://leetcode.cn/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个以 有序链表 形式记录的训练计划 l1、l2，分别记录了两套核心肌群训练项目编号，请合并这两个训练计划，按训练项目编号 升序 记录于链表并返回。</p><p>注意：新链表是通过拼接给定的两个链表的所有节点组成的。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：l1 = [1,2,4], l2 = [1,3,4]</p><p>输出：[1,1,2,3,4,4]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：l1 = [], l2 = []</p><p>输出：[]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p>输入：l1 = [], l2 = [0]</p><p>输出：[0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= 链表长度 &lt;= 1000</code></li></ul>',11),f={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),g=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用归并排序的思想，具体步骤如下：</p><ul><li>使用哑节点 <code>res</code> 构造一个头节点，并使用 <code>cur</code> 指向 <code>res</code> 用于遍历；</li><li>然后判断 <code>l1</code> 和 <code>l2</code> 头节点的值，将较小的头节点加入到合并后的链表中，并向后移动该链表的头节点指针；</li><li>重复上一步操作，直到两个链表中出现链表为空的情况；</li><li>将剩余链表链接到合并后的链表中；</li><li>返回合并后有序链表的头节点 <code>res.next</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trainningPlan</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>l1 <span class="token operator">&amp;&amp;</span> l2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>l1<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> l2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1<span class="token punctuation">;</span>
			l1 <span class="token operator">=</span> l1<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l2<span class="token punctuation">;</span>
			l2 <span class="token operator">=</span> l2<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	cur<span class="token punctuation">.</span>next <span class="token operator">=</span> l1 <span class="token operator">==</span> <span class="token keyword">null</span> <span class="token operator">?</span> l2 <span class="token operator">:</span> l1<span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function w(y,L){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/recursion.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",_,[h,a(l)])]),b,n("div",f,[x,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0021.html"},{default:t(()=>[s("第 21 题")]),_:1}),s(" 相同。")])]),g])}const q=i(d,[["render",w],["__file","jz_offer_25_1.html.vue"]]);export{q as default};

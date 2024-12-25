import{_ as i,r as o,o as d,c as r,a as n,b as s,d as a,w as t,e as p}from"./app--GvfAkAr.js";const u={},k=n("h1",{id:"_26-重排链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_26-重排链表","aria-hidden":"true"},"#"),s(" 26. 重排链表")],-1),m=n("code",null,"栈",-1),v=n("code",null,"递归",-1),g=n("code",null,"链表",-1),h=n("code",null,"双指针",-1),_={href:"https://leetcode.cn/problems/LGjMqU",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个单链表 <code>L</code> 的头节点 <code>head</code> ，单链表 <code>L</code> 表示为：</p><p><code>L0 -&gt; L1 -&gt; … -&gt; Ln-1 -&gt; Ln</code></p><p>请将其重新排列后变为：</p><p><code>L0 -&gt; Ln -&gt; L1 -&gt; Ln-1 -&gt; L2 -&gt; Ln-2 -&gt; …</code></p><p>不能只是单纯的改变节点内部的值，而是需要实际的进行节点交换。</p><p><strong>示例 1:</strong></p><figure><img src="https://pic.leetcode-cn.com/1626420311-PkUiGI-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> head = [1,2,3,4]</p><p><strong>输出:</strong>[1,4,2,3]</p></blockquote><p><strong>示例 2:</strong></p><figure><img src="https://pic.leetcode-cn.com/1626420320-YUiulT-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> head = [1,2,3,4,5]</p><p><strong>输出:</strong>[1,5,2,4,3]</p></blockquote><p><strong>提示：</strong></p><ul><li>链表的长度范围为 <code>[1, 5 * 104]</code></li><li><code>1 &lt;= node.val &lt;= 1000</code></li></ul>',14),x={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=n("h2",{id:"解题思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),s(" 解题思路")],-1),L=n("p",null,[s("最近简单的方法是先把链表存储到数组里，然后找到链表中间的结点，按照规则拼接即可，但这样时间复杂度是 "),n("code",null,"O(n)"),s("，空间复杂度是 "),n("code",null,"O(n)"),s("。")],-1),I=n("p",null,"更好的做法是：链表逆序，找中间结点。",-1),j=n("code",null,"reverseBetween()",-1),q=p(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的长度。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function N(z,B){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return d(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/recursion.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",_,[b,a(l)])]),f,n("div",x,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0143.html"},{default:t(()=>[s("第 143 题")]),_:1}),s(" 相同。")])]),y,L,I,n("p",null,[s("先找到链表的中间结点，然后利用逆序区间的操作，如 "),a(e,{to:"/problem/0092.html"},{default:t(()=>[s("第 92 题")]),_:1}),s(" 里的 "),j,s(" 操作，只不过这里的反转区间是从中点一直到末尾。最后利用 2 个指针，一个指向头结点，一个指向中间结点，开始拼接最终的结果。")]),q])}const V=i(u,[["render",N],["__file","jz_offer_II_026.html.vue"]]);export{V as default};

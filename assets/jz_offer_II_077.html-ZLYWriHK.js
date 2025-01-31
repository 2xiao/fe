import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_77-链表排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_77-链表排序","aria-hidden":"true"},"#"),s(" 77. 链表排序")],-1),v=n("code",null,"链表",-1),m=n("code",null,"双指针",-1),b=n("code",null,"分治",-1),h=n("code",null,"排序",-1),g=n("code",null,"归并排序",-1),f={href:"https://leetcode.cn/problems/7WHec2",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定链表的头结点 <code>head</code> ，请将其按 <strong>升序</strong> 排列并返回 <strong>排序后的链表</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [4,2,1,3]</p><p><strong>输出：</strong>[1,2,3,4]</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/14/sort_list_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [-1,5,3,4,0]</p><p><strong>输出：</strong>[-1,0,3,4,5]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> head = []</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li>链表中节点的数目在范围 <code>[0, 5 * 104]</code> 内</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><p><strong>进阶：</strong> 你可以在 <code>O(n log n)</code> 时间复杂度和常数级空间复杂度下，对链表进行排序吗？</p>',13),x={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),L=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用归并排序（Merge Sort）对链表进行排序，归并排序的核心思想是分治和合并。</p><ol><li>首先，对链表进行分治，将链表一分为二。可以通过快慢指针找到链表的中点，然后分别对左右两部分进行排序。</li><li>对左右两个已排序的链表进行合并。合并两个有序链表的过程可以参考合并两个有序数组的算法。</li><li>递归地对左右两部分链表进行排序和合并，直到每个部分的长度为 <code>1</code>。</li><li>最终得到一个完全有序的链表。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是链表的长度。通过归并排序，可以在链表排序中达到 <code>O(n log n)</code> 的时间复杂度，且不需要额外的空间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> head<span class="token punctuation">;</span>

	<span class="token comment">// 找到链表中点</span>
	<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token function">findMid</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> left <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">const</span> right <span class="token operator">=</span> mid<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	mid<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 断开链表</span>

	<span class="token comment">// 递归对左右两部分进行排序</span>
	<span class="token keyword">const</span> sortLeft <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> sortRight <span class="token operator">=</span> <span class="token function">sortList</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 合并两个有序链表</span>
	<span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span>sortLeft<span class="token punctuation">,</span> sortRight<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 找到链表的中点（快慢指针）</span>
<span class="token keyword">var</span> <span class="token function-variable function">findMid</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> slow<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 合并两个有序链表</span>
<span class="token keyword">var</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>a <span class="token operator">&amp;&amp;</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">.</span>val <span class="token operator">&lt;</span> b<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
			a <span class="token operator">=</span> a<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
			b <span class="token operator">=</span> b<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		cur <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 处理剩余的节点</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> a<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function N(j,q){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/sorting.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/merge-sort.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",f,[_,a(l)])]),w,n("div",x,[y,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0148.html"},{default:t(()=>[s("第 148 题")]),_:1}),s(" 相同。")])]),L])}const z=i(d,[["render",N],["__file","jz_offer_II_077.html.vue"]]);export{z as default};

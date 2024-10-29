import{_ as i,r as o,o as u,c as r,a as s,b as n,d as a,w as t,e as c}from"./app-mXo2sCT-.js";const d={},k={id:"_25-链表中的两数相加",tabindex:"-1"},m=s("a",{class:"header-anchor",href:"#_25-链表中的两数相加","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_025.html",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"栈",-1),b=s("code",null,"链表",-1),_=s("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/lMSNwu",target:"_blank",rel:"noopener noreferrer"},f=s("code",null,"力扣",-1),y=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个 <strong>非空链表</strong> <code>l1</code>和 <code>l2</code> 来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。</p><p>可以假设除了数字 0 之外，这两个数字都不会以零开头。</p><p><strong>示例 1：</strong></p><figure><img src="https://pic.leetcode-cn.com/1626420025-fZfzMX-image.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> l1 = [7,2,4,3], l2 = [5,6,4]</p><p><strong>输出：</strong>[7,8,0,7]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> l1 = [2,4,3], l2 = [5,6,4]</p><p><strong>输出：</strong>[8,0,7]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> l1 = [0], l2 = [0]</p><p><strong>输出：</strong>[0]</p></blockquote><p><strong>提示：</strong></p><ul><li>链表的长度范围为<code> [1, 100]</code></li><li><code>0 &lt;= node.val &lt;= 9</code></li><li>输入数据保证链表代表的数字无前导 0</li></ul><p><strong>进阶：</strong> 如果输入链表不能修改该如何处理？换句话说，不能对列表中的节点进行翻转。</p>',13),w={class:"hint-container warning"},x=s("p",{class:"hint-container-title"},"注意",-1),N=s("h2",{id:"解题思路",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#解题思路","aria-hidden":"true"},"#"),n(" 解题思路")],-1),L=c(`<p>这道题的主要难点在于链表中数位的顺序与做加法的顺序是相反的，例如，数字 342 被表示为链表 <code>2 -&gt; 4 -&gt; 3</code>，而且要求不能反转链表。</p><p>为了逆序处理所有数位，可以使用栈：把所有数字压入栈中，再依次取出相加。计算过程中需要注意进位的情况。</p><ol><li><p><strong>使用栈</strong>：</p><ul><li>利用栈的后进先出特性，将链表的节点值推入两个栈 <code>stack1</code> 和 <code>stack2</code>，这样可以从低位到高位逐位相加。</li></ul></li><li><p><strong>逐位相加</strong>：</p><ul><li>从两个栈中逐位弹出数字并相加，同时处理进位。具体步骤如下： <ul><li>初始化 <code>carry</code> 为 0。</li><li>当两个栈都为空且 <code>carry</code> 为 0 时，停止循环。</li><li>从每个栈弹出一个数字（如果栈不为空），并加上 <code>carry</code>。</li><li>计算新的 <code>carry</code> 和当前位的数字。</li><li>创建一个新节点，将当前位的结果插入到结果链表的前面。</li></ul></li></ul></li><li><p><strong>构建结果链表</strong>：</p><ul><li>将每次计算得到的结果存储在新的链表中，从而形成最终的结果链表。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n + m)</code>，其中 <code>n</code> 为链表 <code>l1</code> 的长度 ，<code>m</code> 为链表 <code>l2</code> 的长度。</p><ul><li>首先，需要遍历两个链表以将它们的值推入栈中，这一部分的时间复杂度为 <code>O(n + m)</code>。</li><li>然后，需要遍历两个栈以进行逐位相加，这一部分的时间复杂度也为 <code>O(n + m)</code>。</li><li>因此，总时间复杂度为 <code>O(n + m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>： <code>O(n + m)</code></p><ul><li>使用两个栈分别存储两个链表的节点值，最坏情况下，栈的大小为 <code>O(n)</code> 和 <code>O(m)</code>，因此总空间复杂度为 <code>O(n + m)</code>。</li><li>除了栈之外，还需要存储结果链表，但在链表中存储的节点数是固定的，不会影响总体空间复杂度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">l2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoNumbers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">l1<span class="token punctuation">,</span> l2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">linkToStack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>head<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			head <span class="token operator">=</span> head<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> stack<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> stack1 <span class="token operator">=</span> <span class="token function">linkToStack</span><span class="token punctuation">(</span>l1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> stack2 <span class="token operator">=</span> <span class="token function">linkToStack</span><span class="token punctuation">(</span>l2<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>stack1<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> stack2<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">||</span> carry <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> carry<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack1<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> stack1<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack2<span class="token punctuation">.</span>length <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sum <span class="token operator">+=</span> stack2<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		sum <span class="token operator">%=</span> <span class="token number">10</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> node<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function I(O,j){const p=o("ExternalLinkIcon"),l=o("font"),e=o("RouterLink");return u(),r("div",null,[s("h1",k,[m,n(),s("a",v,[n("25. 链表中的两数相加"),a(p)])]),s("p",null,[n("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),n(),a(e,{to:"/tag/linked-list.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/tag/math.html"},{default:t(()=>[_]),_:1}),n("  🔗 "),s("a",g,[f,a(p)])]),y,s("div",w,[x,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0445.html"},{default:t(()=>[n("第 445 题")]),_:1}),n(" 相同。")])]),N,s("p",null,[n("这道题是 "),a(e,{to:"/problem/0002.html"},{default:t(()=>[n("第 2 题")]),_:1}),n(" 的变种题，第 2 题中的 2 个数是从个位逆序排到高位，这样相加只用从头加到尾，进位一直进位即可。")]),L])}const z=i(d,[["render",I],["__file","jz_offer_II_025.html.vue"]]);export{z as default};

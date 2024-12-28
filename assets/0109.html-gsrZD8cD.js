import{_ as p,r as l,o as r,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const h={},k=n("h1",{id:"_109-有序链表转换二叉搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_109-有序链表转换二叉搜索树","aria-hidden":"true"},"#"),e(" 109. 有序链表转换二叉搜索树")],-1),_=n("code",null,"树",-1),m=n("code",null,"二叉搜索树",-1),v=n("code",null,"链表",-1),b=n("code",null,"分治",-1),f=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),T=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list where elements are sorted in <strong>ascending order</strong> , convert <em>it to a</em> <strong><em>height-balanced</em></strong> <em>binary search tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/17/linked.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [-10,-3,0,5,9]</p><p>Output: [0,-3,9,-10,null,5]</p><p>Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in <code>head</code> is in the range <code>[0, 2 * 10^4]</code>.</li><li><code>-10^5 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个单链表的头节点 <code>head</code> ，其中的元素 按升序排序 ，将其转换为高度平衡的二叉搜索树。</p><p>本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差不超过 1。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过递归的方式实现，使用快慢指针找到链表的中间节点，并以中间节点为根构建左右子树。</p><ol><li><p><strong>找到链表的中间节点：</strong> 为了构建平衡二叉搜索树，我们需要找到链表的中间节点作为根节点。可以通过快慢指针的方式，一个指针每次走两步，另一个指针每次走一步，直到快指针到达链表末尾，慢指针即为中间节点。在这个过程中，用一个 <code>prev</code> 指针指向中间节点的前一个节点，方便从中间切断链表。</p></li><li><p><strong>以中间节点为根构建左右子树：</strong> 将找到的中间节点作为当前子树的根节点，然后递归地构建左子树和右子树。对于左子树，递归处理链表的前半部分；对于右子树，递归处理链表的后半部分。</p></li><li><p><strong>递归终止条件：</strong> 在递归过程中，当链表为空或只有一个节点时，直接返回对应的树节点。这是递归的终止条件。</p></li><li><p><strong>返回根节点：</strong> 最终返回根节点作为整棵平衡二叉搜索树的根。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedListToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用快慢指针找到链表中间节点</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> prev <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prev <span class="token operator">=</span> slow<span class="token punctuation">;</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 中间节点作为根节点</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 递归构建左右子树</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>prev<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		prev<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span> <span class="token comment">// 切断链表</span>
		root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">sortedListToBST</span><span class="token punctuation">(</span>slow<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"108",-1),B=n("td",{style:{"text-align":"left"}},"将有序数组转换为二叉搜索树",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=n("code",null,"树",-1),S=n("code",null,"二叉搜索树",-1),V=n("code",null,"数组",-1),j=n("code",null,"2+",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2196",-1),M=n("td",{style:{"text-align":"left"}},"根据描述创建二叉树",-1),A={style:{"text-align":"center"}},D={style:{"text-align":"left"}},F=n("code",null,"树",-1),H=n("code",null,"数组",-1),J=n("code",null,"哈希表",-1),K=n("code",null,"1+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/create-binary-tree-from-descriptions",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/create-binary-tree-from-descriptions",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/tree.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[v]),_:1}),e(),t(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/binary-tree.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",g,[y,t(o)]),e(),n("a",x,[w,t(o)])]),T,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[N,B,n("td",E,[t(a,{to:"/problem/0108.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",q,[t(a,{to:"/tag/tree.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[S]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[V]),_:1}),e(),j]),I,n("td",O,[n("a",R,[e("🀄️"),t(o)]),e(),n("a",z,[e("🔗"),t(o)])])]),n("tr",null,[G,M,n("td",A,[t(a,{to:"/problem/2196.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",D,[t(a,{to:"/tag/tree.html"},{default:s(()=>[F]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[J]),_:1}),e(),K]),P,n("td",Q,[n("a",U,[e("🀄️"),t(o)]),e(),n("a",W,[e("🔗"),t(o)])])])])])])}const nn=p(h,[["render",X],["__file","0109.html.vue"]]);export{nn as default};

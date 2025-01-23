import{_ as c,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const h={},k=n("h1",{id:"_98-验证二叉搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_98-验证二叉搜索树","aria-hidden":"true"},"#"),t(" 98. 验证二叉搜索树")],-1),_=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉搜索树",-1),g=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/validate-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, <em>determine if it is a valid binary search tree (BST)</em>.</p><p>A <strong>valid BST</strong> is defined as follows:</p><ul><li>The left subtree of a node contains only nodes with keys <strong>less than</strong> the node&#39;s key.</li><li>The right subtree of a node contains only nodes with keys <strong>greater than</strong> the node&#39;s key.</li><li>Both the left and right subtrees must also be binary search trees.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/01/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [2,1,3]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/01/tree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,1,4,null,null,3,6]</p><p>Output: false</p><p>Explanation: The root node&#39;s value is 5 but its right child&#39;s value is 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^4]</code>.</li><li><code>-2^31 &lt;= Node.val &lt;= 2^31 - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，判断其是否是一个有效的二叉搜索树。假设一个二叉搜索树具有如下特征：</p><ul><li>节点的左子树只包含小于当前节点的数。</li><li>节点的右子树只包含大于当前节点的数。</li><li>所有左子树和右子树自身必须也是二叉搜索树。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>初学者做这题很容易有误区：BST 不是左小右大么，那我只要检查 <code>root.val &gt; root.left.val</code> 且 <code>root.val &lt; root.right.val</code> 不就行了？</p><p>这样是不对的，因为 BST 左小右大的特性是指 <code>root.val</code> 要比左子树的所有节点都更大，要比右子树的所有节点都小，只检查左右两个子节点是不够的。</p><p>正确解法是通过使用辅助函数，增加函数参数列表，在参数中携带额外信息，递归地检查每个节点的值，将当前节点值的范围（min 和 max）传递给其左右子树，确保它们也在合适的范围内。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isValidBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> min<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&lt;=</span> min<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>max <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> root<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> max<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token punctuation">(</span>
			<span class="token function">helper</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> min<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">helper</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root<span class="token punctuation">.</span>val<span class="token punctuation">,</span> max<span class="token punctuation">)</span>
		<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"94",-1),N=n("td",{style:{"text-align":"left"}},"二叉树的中序遍历",-1),E={style:{"text-align":"center"}},S={style:{"text-align":"left"}},V=n("code",null,"栈",-1),j=n("code",null,"树",-1),C=n("code",null,"深度优先搜索",-1),L=n("code",null,"1+",-1),q=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"501",-1),A=n("td",{style:{"text-align":"left"}},"二叉搜索树中的众数",-1),G={style:{"text-align":"center"}},M={style:{"text-align":"left"}},D=n("code",null,"树",-1),F=n("code",null,"深度优先搜索",-1),H=n("code",null,"二叉搜索树",-1),J=n("code",null,"1+",-1),K=n("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/find-mode-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/find-mode-in-binary-search-tree",target:"_blank",rel:"noopener noreferrer"};function W(X,Y){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",b,[v,e(o)]),t(),n("a",y,[x,e(o)])]),w,d(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[B,N,n("td",E,[e(a,{to:"/problem/0094.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",S,[e(a,{to:"/tag/stack.html"},{default:s(()=>[V]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[j]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[C]),_:1}),t(),L]),q,n("td",I,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",O,[t("🔗"),e(o)])])]),n("tr",null,[R,A,n("td",G,[e(a,{to:"/problem/0501.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[e(a,{to:"/tag/tree.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/binary-search-tree.html"},{default:s(()=>[H]),_:1}),t(),J]),K,n("td",P,[n("a",Q,[t("🀄️"),e(o)]),t(),n("a",U,[t("🔗"),e(o)])])])])])])}const $=c(h,[["render",W],["__file","0098.html.vue"]]);export{$ as default};

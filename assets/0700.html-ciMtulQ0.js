import{_ as r,r as c,o as i,c as d,a as e,b as t,d as n,w as a,f as p,e as u}from"./app-mXo2sCT-.js";const h={},_={id:"_700-二叉搜索树中的搜索",tabindex:"-1"},f=e("a",{class:"header-anchor",href:"#_700-二叉搜索树中的搜索","aria-hidden":"true"},"#",-1),k={href:"https://2xiao.github.io/leetcode-js/problem/0700.html",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"树",-1),g=e("code",null,"二叉搜索树",-1),b=e("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/search-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),T=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary search tree (BST) and an integer <code>val</code>.</p><p>Find the node in the BST that the node&#39;s value equals <code>val</code> and return the subtree rooted with that node. If such a node does not exist, return <code>null</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/12/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3], val = 2</p><p>Output: [2,1,3]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/12/tree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [4,2,7,1,3], val = 5</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 5000]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^7</code></li><li><code>root</code> is a binary search tree.</li><li><code>1 &lt;= val &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定二叉搜索树（BST）的根节点和一个值，你需要在 BST 中找到节点值等于给定值的节点，返回以该节点为根的子树，如果节点不存在，则返回 <code>NULL</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用 BST 左小右大的特性，可以避免搜索整棵二叉树去寻找元素，从而提升效率。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root <span class="token operator">||</span> val <span class="token operator">==</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> root<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&lt;</span> root<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">searchBST</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),B=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),N=e("td",{style:{"text-align":"center"}},"270",-1),S={style:{"text-align":"left"}},E={href:"https://leetcode.com/problems/closest-binary-search-tree-value",target:"_blank",rel:"noopener noreferrer"},L=e("td",{style:{"text-align":"center"}},null,-1),j={style:{"text-align":"left"}},q=e("code",null,"树",-1),C=e("code",null,"深度优先搜索",-1),I=e("code",null,"二叉搜索树",-1),V=e("code",null,"2+",-1),z={style:{"text-align":"left"}},M=e("td",{style:{"text-align":"center"}},"701",-1),O={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/insert-into-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},F={style:{"text-align":"center"}},U={style:{"text-align":"left"}},Y=e("code",null,"树",-1),A=e("code",null,"二叉搜索树",-1),D=e("code",null,"二叉树",-1),G={style:{"text-align":"left"}},H=e("td",{style:{"text-align":"center"}},"2476",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},P=e("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},W=e("code",null,"树",-1),X=e("code",null,"深度优先搜索",-1),Z=e("code",null,"二叉搜索树",-1),$=e("code",null,"3+",-1),ee={style:{"text-align":"left"}};function te(ne,ae){const o=c("ExternalLinkIcon"),l=c("font"),s=c("RouterLink");return i(),d("div",null,[e("h1",_,[f,t(),e("a",k,[t("700. 二叉搜索树中的搜索"),n(o)])]),e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),n(s,{to:"/tag/tree.html"},{default:a(()=>[m]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[g]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),e("a",v,[y,n(o)]),t(),e("a",x,[w,n(o)])]),T,p(" prettier-ignore "),e("table",null,[B,e("tbody",null,[e("tr",null,[N,e("td",S,[e("a",E,[t("最接近的二叉搜索树值 🔒"),n(o)])]),L,e("td",j,[n(s,{to:"/tag/tree.html"},{default:a(()=>[q]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:a(()=>[C]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[I]),_:1}),t(),V]),e("td",z,[n(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1})])]),e("tr",null,[M,e("td",O,[e("a",R,[t("二叉搜索树中的插入操作"),n(o)])]),e("td",F,[n(s,{to:"/problem/0701.html"},{default:a(()=>[t("[✓]")]),_:1})]),e("td",U,[n(s,{to:"/tag/tree.html"},{default:a(()=>[Y]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[A]),_:1}),t(),n(s,{to:"/tag/binary-tree.html"},{default:a(()=>[D]),_:1})]),e("td",G,[n(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])]),e("tr",null,[H,e("td",J,[e("a",K,[t("二叉搜索树最近节点查询"),n(o)])]),P,e("td",Q,[n(s,{to:"/tag/tree.html"},{default:a(()=>[W]),_:1}),t(),n(s,{to:"/tag/depth-first-search.html"},{default:a(()=>[X]),_:1}),t(),n(s,{to:"/tag/binary-search-tree.html"},{default:a(()=>[Z]),_:1}),t(),$]),e("td",ee,[n(l,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1})])])])])])}const oe=r(h,[["render",te],["__file","0700.html.vue"]]);export{oe as default};

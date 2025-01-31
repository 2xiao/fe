import{_ as l,r as o,o as r,c as i,a as n,b as s,d as a,w as t,e as u}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_366-寻找二叉树的叶子节点-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_366-寻找二叉树的叶子节点-🔒","aria-hidden":"true"},"#"),s(" 366. 寻找二叉树的叶子节点 🔒")],-1),h=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/find-leaves-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-leaves-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree, collect a tree&#39;s nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.</p><p><strong>Example 1:</strong></p><pre><code>      1
     / \\
    2   3
   / \\
  4   5
</code></pre><blockquote><p>Input: [1,2,3,4,5]</p><p>Output: [[4,5,3],[2],[1]]</p><p>Explanation:</p><p>[[3,5,4],[2],[1]] and [[3,4,5],[2],[1]] are also considered correct answers since per each level it does not matter the order on which elements are returned.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1]</p><p>Output: [[1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵完全二叉树，请按以下要求的顺序收集它的全部节点：</p><ol><li>依次从左到右，每次收集并删除所有的叶子节点</li><li>重复如上过程直到整棵树为空</li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>二叉树节点的高度的定义是：节点到叶子节点的最长路径（边数），可以发现返回数组其实是按照二叉树的高度来分组的，只需求出每个节点左右子树的最大深度 - 1，即是该节点的高度。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLeaves</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> depth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		res<span class="token punctuation">[</span>depth <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> depth<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16);function y(w,E){const c=o("font"),e=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",f,[_,a(p)]),s(),n("a",b,[x,a(p)])]),g])}const N=l(d,[["render",y],["__file","0366.html.vue"]]);export{N as default};

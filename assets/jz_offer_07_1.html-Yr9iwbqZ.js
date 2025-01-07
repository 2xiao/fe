import{_ as r}from"./2-6-10-HM7phUUf.js";import{_ as i,r as o,o as u,c as d,a as n,b as s,d as a,w as e,e as p}from"./app-WL8GPOUO.js";const k={},m=n("h1",{id:"_7-重建二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-重建二叉树","aria-hidden":"true"},"#"),s(" 7. 重建二叉树")],-1),h=n("code",null,"树",-1),_=n("code",null,"数组",-1),f=n("code",null,"哈希表",-1),b=n("code",null,"分治",-1),v=n("code",null,"二叉树",-1),g={href:"https://leetcode.cn/problems/zhong-jian-er-cha-shu-lcof",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某二叉树的先序遍历结果记录于整数数组 <code>preorder</code>，它的中序遍历结果记录于整数数组 <code>inorder</code>。请根据 <code>preorder</code> 和 <code>inorder</code> 的提示构造出这棵二叉树并返回其根节点。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]</p><p>Output: [3,9,20,null,null,15,7]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>Input: preorder = [-1], inorder = [-1]</p><p>Output: [-1]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= preorder.length &lt;= 3000</code></li><li><code>inorder.length == preorder.length</code></li><li><code>-3000 &lt;= preorder[i], inorder[i] &lt;= 3000</code></li><li><code>preorder</code> 和 <code>inorder</code> 中均不含重复数字</li><li><code>inorder</code> 均出现在 <code>preorder</code></li><li><code>preorder</code> 保证 为二叉树的前序遍历序列</li><li><code>inorder</code> 保证 为二叉树的中序遍历序列</li></ul>',9),x={class:"hint-container warning"},j=n("p",{class:"hint-container-title"},"注意",-1),N=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>构造二叉树，第一件事一定是找根节点，然后想办法构造左右子树。</p><p>前序遍历结果第一个就是根节点的值，然后再根据中序遍历结果确定左右子树的节点。</p><p>不断的递归直到所有的树都生成完成。</p><figure><img src="'+r+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>递归时直接传入需要的 slice 范围作为输入, 可以避免申请对应 inorder 索引的内存。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">preorder</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">inorder</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deduceTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">preorder<span class="token punctuation">,</span> inorder</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>preorder<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> preorder<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>inorder<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> preorder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">deduceTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">deduceTree</span><span class="token punctuation">(</span>preorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> inorder<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">break</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function T(q,z){const c=o("font"),t=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/divide-and-conquer.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",g,[w,a(l)])]),y,n("div",x,[j,n("p",null,[s("本题与 LeetCode "),a(t,{to:"/problem/0105.html"},{default:e(()=>[s("第 105 题")]),_:1}),s(" 相同。")])]),N])}const V=i(k,[["render",T],["__file","jz_offer_07_1.html.vue"]]);export{V as default};

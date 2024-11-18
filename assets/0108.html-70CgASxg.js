import{_ as p,r as l,o as r,c as i,a as n,b as s,d as t,w as a,f as d,e as u}from"./app-Ob52y8QZ.js";const h={},k=n("h1",{id:"_108-将有序数组转换为二叉搜索树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_108-将有序数组转换为二叉搜索树","aria-hidden":"true"},"#"),s(" 108. 将有序数组转换为二叉搜索树")],-1),m=n("code",null,"树",-1),_=n("code",null,"二叉搜索树",-1),g=n("code",null,"数组",-1),f=n("code",null,"分治",-1),b=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/convert-sorted-array-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),T=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> where the elements are sorted in <strong>ascending order</strong> , convert <em>it to a</em> ** <em>height-balanced</em>** <em>binary search tree</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: nums = [-10,-3,0,5,9]</p><p>Output: [0,-3,9,-10,null,5]</p><p>Explanation: [0,-10,5,null,-3,null,9] is also accepted:</p><figure><img src="https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/18/btree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: nums = [1,3]</p><p>Output: [3,1]</p><p>Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> is sorted in a <strong>strictly increasing</strong> order.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，其中元素已经按 升序 排列，请你将其转换为一棵 高度平衡 二叉搜索树。</p><p>高度平衡 二叉树是一棵满足「每个节点的左右两个子树的高度差的绝对值不超过 1 」的二叉树。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过递归地选择数组中间元素构建树的节点：</p><ol><li>选择数组中间的元素作为当前节点的值，确保左右子树的节点数量相近，从而实现高度平衡。</li><li>递归地处理左右子数组，分别构建左右子树。</li><li>对于每个子数组，重复步骤 1 和步骤 2，直到子数组为空。</li><li>返回根节点，即整棵高度平衡的二叉搜索树。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedArrayToBST</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token comment">// 选择中间元素作为当前节点</span>
	<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 递归构建左右子树</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">sortedArrayToBST</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"109",-1),N=n("td",{style:{"text-align":"left"}},"有序链表转换二叉搜索树",-1),j={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=n("code",null,"树",-1),L=n("code",null,"二叉搜索树",-1),S=n("code",null,"链表",-1),V=n("code",null,"2+",-1),I={style:{"text-align":"left"}},z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree",target:"_blank",rel:"noopener noreferrer"};function O(R,G){const c=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/binary-search-tree.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[y,t(o)]),s(),n("a",x,[w,t(o)])]),T,d(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[B,N,n("td",j,[t(e,{to:"/problem/0109.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",q,[t(e,{to:"/tag/tree.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/binary-search-tree.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[S]),_:1}),s(),V]),n("td",I,[t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1})]),n("td",z,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",M,[s("🔗"),t(o)])])])])])])}const F=p(h,[["render",O],["__file","0108.html.vue"]]);export{F as default};

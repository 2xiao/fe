import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-fEpXkbSw.js";const d={},k=n("h1",{id:"_872-叶子相似的树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_872-叶子相似的树","aria-hidden":"true"},"#"),s(" 872. 叶子相似的树")],-1),m=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),g=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/leaf-similar-trees",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/leaf-similar-trees",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a <strong>leaf value sequence</strong> <em>.</em></p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>For example, in the given tree above, the leaf value sequence is <code>(6, 7, 4, 9, 8)</code>.</p><p>Two binary trees are considered <em>leaf-similar</em> if their leaf value sequence is the same.</p><p>Return <code>true</code> if and only if the two given trees with head nodes <code>root1</code> and <code>root2</code> are leaf-similar.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root1 = [1,2,3], root2 = [1,3,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in each tree will be in the range <code>[1, 200]</code>.</li><li>Both of the given trees will have values in the range <code>[0, 200]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请考虑一棵二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 <strong>叶值序列</strong> 。</p><figure><img src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/16/tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>举个例子，如上图所示，给定一棵叶值序列为 <code>(6, 7, 4, 9, 8)</code> 的树。</p><p>如果有两棵二叉树的叶值序列是相同，那么我们就认为它们是 *叶相似 *的。</p><p>如果给定的两个根结点分别为 <code>root1</code> 和 <code>root2</code> 的树是叶相似的，则返回 <code>true</code>；否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/03/leaf-similar-2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root1 = [1,2,3], root2 = [1,3,2]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li>给定的两棵树结点数在 <code>[1, 200]</code> 范围内</li><li>给定的两棵树上的值在 <code>[0, 200]</code> 范围内</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>DFS 遍历</strong>：通过 <code>dfs</code> 函数递归遍历树，直到找到叶子节点，每当遇到一个叶子节点时，收集叶子节点的值，并将其存储在数组中。</li><li><strong>比较叶子节点列表</strong>：遍历完两棵树的所有叶子节点后，只需要比较这两个保存叶子节点值的数组是否相等。如果相等，则返回 <code>true</code>，否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是树的节点总数。 <ul><li>对于每棵树，需要遍历一次树的所有节点，因此 <code>getLeafValues</code> 函数的时间复杂度是 <code>O(n)</code>。</li><li>比较两棵树的叶子节点列表需要 <code>O(k)</code> 时间，其中 <code>k</code> 是叶子节点的数量，最坏情况下 <code>k</code> 与 <code>n</code> 相等。</li><li>因此，总的时间复杂度是 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了递归来遍历树，递归调用栈的空间复杂度是 <code>O(h)</code>，其中 <code>h</code> 是树的高度。在最坏情况下，树的高度可能为 <code>n</code>，因此递归的空间复杂度为 <code>O(n)</code>，返回的 <code>result</code> 数组也占用 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">leafSimilar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取树的叶子节点值列表</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getLeafValues</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
			<span class="token comment">// 如果是叶子节点</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">.</span>left <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 获取两棵树的叶子节点值</span>
	<span class="token keyword">const</span> leaves1 <span class="token operator">=</span> <span class="token function">getLeafValues</span><span class="token punctuation">(</span>root1<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> leaves2 <span class="token operator">=</span> <span class="token function">getLeafValues</span><span class="token punctuation">(</span>root2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 比较叶子节点值是否相同</span>
	<span class="token keyword">return</span> leaves1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">===</span> leaves2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function w(x,q){const c=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",v,[h,a(p)]),s(),n("a",b,[_,a(p)])]),y])}const L=l(d,[["render",w],["__file","0872.html.vue"]]);export{L as default};

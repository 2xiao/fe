import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-MsFeWfVD.js";const k={},g=n("h1",{id:"_3319-第-k-大的完美二叉子树的大小",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3319-第-k-大的完美二叉子树的大小","aria-hidden":"true"},"#"),s(" 3319. 第 K 大的完美二叉子树的大小")],-1),h=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),f=n("code",null,"二叉树",-1),b=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/k-th-largest-perfect-subtree-size-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a <strong>binary tree</strong> and an integer <code>k</code>.</p><p>Return an integer denoting the size of the <code>kth</code> <strong>largest perfect binary</strong> subtree, or <code>-1</code> if it doesn&#39;t exist.</p><p>A <strong>perfect binary tree</strong> is a tree where all leaves are on the same level, and every parent has two children.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> root = [5,3,6,5,2,5,7,1,8,null,null,6,8], k = 2</p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The roots of the perfect binary subtrees are highlighted in black. Their sizes, in decreasing order are <code>[3, 3, 1, 1, 1, 1, 1, 1]</code>. The <code>2nd</code> largest size is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> root = [1,2,3,4,5,6,7], k = 1</p><p><strong>Output:</strong> 7</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The sizes of the perfect binary subtrees in decreasing order are <code>[7, 3, 3, 1, 1, 1, 1]</code>. The size of the largest perfect binary subtree is 7.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> root = [1,2,3,null,4], k = 3</p><p><strong>Output:</strong> -1</p><p><strong>Explanation:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>The sizes of the perfect binary subtrees in decreasing order are <code>[1, 1]</code>. There are fewer than 3 perfect binary subtrees.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 2000]</code>.</li><li><code>1 &lt;= Node.val &lt;= 2000</code></li><li><code>1 &lt;= k &lt;= 1024</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 <strong>二叉树</strong> 的根节点 <code>root</code> 和一个整数<code>k</code>。</p><p>返回第 <code>k</code> 大的 <strong>完美二叉子树</strong> 的大小，如果不存在则返回 <code>-1</code>。</p><p><strong>完美二叉树</strong> 是指所有叶子节点都在同一层级的树，且每个父节点恰有两个子节点。</p><p><strong>子树</strong> 是指树中的某一个节点及其所有后代形成的树。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> root = [5,3,6,5,2,5,7,1,8,null,null,6,8], k = 2</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完美二叉子树的根节点在图中以黑色突出显示。它们的大小按降序排列为 <code>[3, 3, 1, 1, 1, 1, 1, 1]</code>。<br> 第 <code>2</code> 大的完美二叉子树的大小是 3。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [1,2,3,4,5,6,7], k = 1</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完美二叉子树的大小按降序排列为 <code>[7, 3, 3, 1, 1, 1, 1]</code>。最大的完美二叉子树的大小是 7。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> root = [1,2,3,null,4], k = 3</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2024/06/21/image4.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>完美二叉子树的大小按降序排列为 <code>[1, 1]</code>。完美二叉子树的数量少于 3。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中的节点数目在 <code>[1, 2000]</code> 范围内。</li><li><code>1 &lt;= Node.val &lt;= 2000</code></li><li><code>1 &lt;= k &lt;= 1024</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>完美子树是指该树的所有叶子节点在同一层，且每个非叶子节点都有两个子节点。因此可以使用递归来遍历二叉树，检查每个节点的子树是否是完美子树。</p><p>在递归过程中，判断某个节点的左右子树是否高度相同且都是完美的。如果是，可以计算当前子树的节点数。</p><p>使用一个数组存储所有完美子树的大小。然后在递归完成后，排序该数组，并找到第 <code>k</code> 大的完美子树的大小。</p><p>如果数组的大小小于 <code>k</code>，返回 <code>-1</code>，否则返回数组中第 <code>k</code> 大的元素。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，每个节点遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储所有完美子树的大小。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthLargestPerfectSubtree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sizes <span class="token operator">=</span> <span class="token function">findPerfectSubtree</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>sizes<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 按降序排序</span>
	sizes<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> sizes<span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">findPerfectSubtree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> sizes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 递归函数，返回当前子树的高度、节点数和是否为完美二叉树</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>leftHeight<span class="token punctuation">,</span> leftCount<span class="token punctuation">,</span> isLeftPerfect<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> <span class="token punctuation">[</span>rightHeight<span class="token punctuation">,</span> rightCount<span class="token punctuation">,</span> isRightPerfect<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">const</span> rootCount <span class="token operator">=</span> leftCount <span class="token operator">+</span> rightCount <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

		<span class="token comment">// 检查是否为完美子树</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>leftHeight <span class="token operator">==</span> rightHeight <span class="token operator">&amp;&amp;</span> isLeftPerfect <span class="token operator">&amp;&amp;</span> isRightPerfect<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			sizes<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>rootCount<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>leftHeight <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rootCount<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>leftHeight<span class="token punctuation">,</span> rightHeight<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> rootCount<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> sizes<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),z=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"110",-1),q=n("td",{style:{"text-align":"left"}},"平衡二叉树",-1),T={style:{"text-align":"center"}},j={style:{"text-align":"left"}},E=n("code",null,"树",-1),N=n("code",null,"深度优先搜索",-1),L=n("code",null,"二叉树",-1),H=n("td",{style:{"text-align":"center"}},"🟢",-1),P={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"};function R(V,S){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[g,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/tree.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[f]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[_,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[z,n("tbody",null,[n("tr",null,[C,q,n("td",T,[t(e,{to:"/problem/0110.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",j,[t(e,{to:"/tag/tree.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/depth-first-search.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/binary-tree.html"},{default:a(()=>[L]),_:1})]),H,n("td",P,[n("a",I,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])])])])])}const M=l(k,[["render",R],["__file","3319.html.vue"]]);export{M as default};

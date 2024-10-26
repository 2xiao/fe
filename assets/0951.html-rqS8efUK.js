import{_ as r,r as e,o as c,c as i,a as n,b as s,d as a,w as o,e as u}from"./app-ZWutqmfO.js";const d={},k={id:"_951-翻转等价二叉树",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_951-翻转等价二叉树","aria-hidden":"true"},"#",-1),m={href:"https://leetcode.com/problems/flip-equivalent-binary-trees",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"树",-1),f=n("code",null,"深度优先搜索",-1),b=n("code",null,"二叉树",-1),v={href:"https://leetcode.com/problems/flip-equivalent-binary-trees",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>For a binary tree <strong>T</strong> , we can define a <strong>flip operation</strong> as follows: choose any node, and swap the left and right child subtrees.</p><p>A binary tree <strong>X</strong> is <em>flip equivalent</em> to a binary tree <strong>Y</strong> if and only if we can make <strong>X</strong> equal to <strong>Y</strong> after some number of flip operations.</p><p>Given the roots of two binary trees <code>root1</code> and <code>root2</code>, return <code>true</code> if the two trees are flip equivalent or <code>false</code> otherwise.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/11/29/tree_ex.png" alt="Flipped Trees
Diagram" tabindex="0" loading="lazy"><figcaption>Flipped Trees Diagram</figcaption></figure><blockquote><p>Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]</p><p>Output: true</p><p>Explanation: We flipped at nodes with values 1, 3, and 5.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root1 = [], root2 = []</p><p>Output: true</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root1 = [], root2 = [1]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in each tree is in the range <code>[0, 100]</code>.</li><li>Each tree will have <strong>unique node values</strong> in the range <code>[0, 99]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们可以为二叉树 <strong>T</strong> 定义一个 <strong>翻转操作</strong>，如下所示：选择任意节点，然后交换它的左子树和右子树。</p><p>只要经过一定次数的翻转操作后，能使 <strong>X</strong> 等于 <strong>Y</strong> ，我们就称二叉树 <strong>X</strong> <em>翻转等价</em> 于二叉树 <strong>Y</strong> 。</p><p>这些树由根节点 <code>root1</code> 和 <code>root2</code> 给出。如果两个二叉树是否是 <em>翻转等价</em> 的函数，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/11/29/tree_ex.png" alt="Flipped Trees
Diagram" tabindex="0" loading="lazy"><figcaption>Flipped Trees Diagram</figcaption></figure><blockquote><p><strong>输入：</strong> root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 我们翻转值为 1，3 以及 5 的三个节点。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> root1 = [], root2 = []</p><p><strong>输出:</strong> true</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> root1 = [], root2 = [1]</p><p><strong>输出:</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li>每棵树节点数在 <code>[0, 100]</code> 范围内</li><li>每棵树中的每个值都是唯一的、在 <code>[0, 99]</code> 范围内的整数</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>翻转等价的定义意味着可以通过一系列的翻转操作，使得两个二叉树结构相同，可以使用递归的方法来解决这个问题。</p><ol><li><p><strong>递归比较</strong>：递归比较两个节点的值和结构:</p><ul><li>如果两个节点都为 <code>null</code>，返回 <code>true</code>，表示两个树在这一位置相同；</li><li>如果只有一个节点为 <code>null</code>，返回 <code>false</code>，表示树结构不同；</li><li>如果两个节点的值不相等，直接返回 <code>false</code>；</li><li>如果两个节点的值相等，则递归检查左右子树；</li></ul></li><li><p><strong>递归检查子树</strong>：</p><ul><li>对于当前节点的左右子树，可以有两种比较方式： <ul><li><strong>不翻转</strong>：直接比较左子树与左子树，右子树与右子树。</li><li><strong>翻转</strong>：比较左子树与右子树，右子树与左子树。</li></ul></li><li>如果两种方式中任意一种成立，则返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，在最坏情况下，需要访问每个节点一次。</li><li><strong>空间复杂度</strong>：<code>O(h)</code>，其中 <code>h</code> 是树的高度。使用了递归，递归调用栈的深度与树的高度有关： <ul><li>在平衡的情况下，空间复杂度是 <code>O(log n)</code>；</li><li>而在极度不平衡的情况下（如链表），空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">flipEquiv</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root1<span class="token punctuation">,</span> root2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root1 <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>root2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 都是 null</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root1 <span class="token operator">||</span> <span class="token operator">!</span>root2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 其中一个是 null</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root1<span class="token punctuation">.</span>val <span class="token operator">!==</span> root2<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 检查当前节点的值是否相等</span>

	<span class="token comment">// 检查左右子树是否相等（翻转 or 不翻转）</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token punctuation">(</span><span class="token function">flipEquiv</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span>
			<span class="token function">flipEquiv</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">||</span>
		<span class="token punctuation">(</span><span class="token function">flipEquiv</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>left<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token function">flipEquiv</span><span class="token punctuation">(</span>root1<span class="token punctuation">.</span>right<span class="token punctuation">,</span> root2<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function w(y,x){const p=e("ExternalLinkIcon"),l=e("font"),t=e("RouterLink");return c(),i("div",null,[n("h1",k,[g,s(),n("a",m,[s("951. 翻转等价二叉树"),a(p)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/tree.html"},{default:o(()=>[h]),_:1}),s(),a(t,{to:"/tag/depth-first-search.html"},{default:o(()=>[f]),_:1}),s(),a(t,{to:"/tag/binary-tree.html"},{default:o(()=>[b]),_:1}),s("  🔗 "),n("a",v,[_,a(p)])]),q])}const T=r(d,[["render",w],["__file","0951.html.vue"]]);export{T as default};

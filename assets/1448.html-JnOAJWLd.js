import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-U2ekqv2z.js";const d={},k=n("h1",{id:"_1448-统计二叉树中好节点的数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1448-统计二叉树中好节点的数目","aria-hidden":"true"},"#"),s(" 1448. 统计二叉树中好节点的数目")],-1),m=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),h=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),b={href:"https://leetcode.cn/problems/count-good-nodes-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-good-nodes-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree <code>root</code>, a node <em>X</em> in the tree is named <strong>good</strong> if in the path from root to <em>X</em> there are no nodes with a value <em>greater than</em> X.</p><p>Return the number of <strong>good</strong> nodes in the binary tree.</p><p><strong>Example 1:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2020/04/02/test_sample_1.png" alt="" loading="lazy"></strong></p><blockquote><p><strong>Input:</strong> root = [3,1,4,3,null,1,5]</p><p>Output: 4</p><p>Explanation: Nodes in blue are <strong>good</strong>.</p><p>Root Node (3) is always a good node.</p><p>Node 4 -&gt; (3,4) is the maximum value in the path starting from the root.</p><p>Node 5 -&gt; (3,4,5) is the maximum value in the path</p><p>Node 3 -&gt; (3,1,3) is the maximum value in the path.</p></blockquote><p><strong>Example 2:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2020/04/02/test_sample_2.png" alt="" loading="lazy"></strong></p><blockquote><p><strong>Input:</strong> root = [3,3,null,4,2]</p><p>Output: 3</p><p>Explanation: Node 2 -&gt; (3, 3, 2) is not good, because &quot;3&quot; is higher than it.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> root = [1]</p><p>Output: 1</p><p>Explanation: Root is considered as <strong>good</strong>.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the binary tree is in the range <code>[1, 10^5]</code>.</li><li>Each node&#39;s value is between <code>[-10^4, 10^4]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵根为 <code>root</code> 的二叉树，请你返回二叉树中好节点的数目。</p><p>「好节点」X 定义为：从根到该节点 X 所经过的节点中，没有任何节点的值大于 X 的值。</p><p><strong>示例 1：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/05/16/test_sample_1.png)</strong></p><blockquote><p><strong>输入：</strong> root = [3,1,4,3,null,1,5]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 图中蓝色节点为好节点。</p><p>根节点 (3) 永远是个好节点。</p><p>节点 4 -&gt; (3,4) 是路径中的最大值。</p><p>节点 5 -&gt; (3,4,5) 是路径中的最大值。</p><p>节点 3 -&gt; (3,1,3) 是路径中的最大值。</p></blockquote><p><strong>示例 2：</strong></p><p><strong>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/05/16/test_sample_2.png)</strong></p><blockquote><p><strong>输入：</strong> root = [3,3,null,4,2]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 节点 2 -&gt; (3, 3, 2) 不是好节点，因为 &quot;3&quot; 比它大。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> root = [1]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 根节点是好节点。</p></blockquote><p><strong>提示：</strong></p><ul><li>二叉树中节点数目范围是 <code>[1, 10^5]</code> 。</li><li>每个节点权值的范围是 <code>[-10^4, 10^4]</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>树的深度优先搜索 (DFS)</strong>：</p><ul><li>使用 DFS 遍历二叉树。</li><li>每次进入一个节点时，记录从根节点到当前节点路径上的最大值 <code>max</code>。</li><li>如果当前节点值大于等于 <code>max</code>，则计数加 1，并更新路径上的最大值为当前节点值。</li></ul></li><li><p><strong>递归处理每个子树</strong>：</p><ul><li>遍历当前节点的左子树和右子树，递归传递更新后的最大值 <code>max</code>。</li></ul></li><li><p><strong>初始值选择</strong>：</p><ul><li>从根节点开始递归，初始路径最大值 <code>max</code> 设置为 <code>-Infinity</code>，因为根节点是好节点。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是节点总数，每个节点被访问一次。</li><li><strong>空间复杂度</strong>：<code>O()</code>，递归栈的最大深度为树的高度 <code>h</code>，因此空间复杂度为 <code>O(h)</code>。 <ul><li>在最坏情况下（链式结构），空间复杂度为 <code>O(n)</code>；</li><li>在最佳情况下（完全平衡二叉树），空间复杂度为 <code>O(log n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">goodNodes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录好节点数量</span>

	<span class="token comment">// 定义递归函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> max</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 如果当前节点为空，直接返回</span>

		<span class="token comment">// 判断当前节点是否是好节点</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>val <span class="token operator">&gt;=</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 是好节点，计数加 1</span>
			max <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span> <span class="token comment">// 更新路径上的最大值</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 递归遍历左子树和右子树</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> max<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从根节点开始，初始最大值为负无穷</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span> <span class="token comment">// 返回好节点数量</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function w(q,N){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/binary-tree.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[_,a(p)]),s(),n("a",f,[x,a(p)])]),y])}const O=l(d,[["render",w],["__file","1448.html.vue"]]);export{O as default};

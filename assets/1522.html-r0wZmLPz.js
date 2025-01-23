import{_ as r,r as p,o as i,c as d,a as n,b as s,d as a,w as t,f as u,e as l}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_1522-n-叉树的直径-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1522-n-叉树的直径-🔒","aria-hidden":"true"},"#"),s(" 1522. N 叉树的直径 🔒")],-1),m=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),v={href:"https://leetcode.cn/problems/diameter-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/diameter-of-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),y=l('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a root of an N-ary tree, you need to compute the length of the diameter of the tree.</p><p>The diameter of an N-ary tree is the length of the longest path between any two nodes in the tree. This path may or may not pass through the root.</p><p>(Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value.)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_2_1897.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,3,2,4,null,5,6]</p><p>Output: 3 Explanation: Diameter is shown in red color.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_1_1897.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,null,3,4,null,5,null,6]</p><p>Output: 4 <strong>Example 3:</strong></p></blockquote><figure><img src="https://assets.leetcode.com/uploads/2020/07/19/sample_3_1897.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</p><p>Output: 7</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The depth of the n-ary tree is less than or equal to <code>1000</code>.</li><li>The total number of nodes is between <code>[0, 10^4]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵 N 叉树的根节点，返回该树的 直径 。</p><p>N 叉树的 直径 是指树中任意两个节点之间最长路径的 长度 。这条路径可能经过也可能不经过根节点 <code>root</code> 。</p><p>两节点之间路径的 长度 由它们之间边数表示。</p><p>N 叉树的输入序列化以其层序遍历表示，每层之间由 <code>null</code> 分隔。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',20),x=l(`<p>同理 N 叉树的直径，可以使用递归来遍历树的每个节点，并记录以每个节点为根的子树的最大深度和次大深度。直径就是这两个深度之和。</p><p>需要灵活运用树的后序遍历，在 <code>maxDepth</code> 的后序遍历位置顺便计算最大直径。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">diameter</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">maxDepth</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果节点为空，深度为0</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 记录当前节点的最大深度和次大深度</span>
		<span class="token keyword">let</span> max_depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> second_max_depth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 遍历子节点</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> root<span class="token punctuation">.</span>children<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> depth <span class="token operator">=</span> <span class="token function">maxDepth</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">&gt;</span> max_depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				second_max_depth <span class="token operator">=</span> max_depth<span class="token punctuation">;</span>
				max_depth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>depth <span class="token operator">&gt;</span> second_max_depth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				second_max_depth <span class="token operator">=</span> depth<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 更新直径</span>
		res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max_depth <span class="token operator">+</span> second_max_depth<span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 返回当前节点的深度</span>
		<span class="token keyword">return</span> max_depth <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">maxDepth</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,5),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"543",-1),q=n("td",{style:{"text-align":"left"}},"二叉树的直径",-1),E={style:{"text-align":"center"}},T={style:{"text-align":"left"}},C=n("code",null,"树",-1),D=n("code",null,"深度优先搜索",-1),I=n("code",null,"二叉树",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/diameter-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/diameter-of-binary-tree",target:"_blank",rel:"noopener noreferrer"};function B(O,M){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,a(o)]),s(),n("a",f,[g,a(o)])]),y,n("p",null,[s("这题类似 "),a(e,{to:"/problem/0543.html"},{default:t(()=>[s("第 543 题 二叉树的直径")]),_:1}),s(" ，二叉树的直径，就是左右子树的最大深度之和，那么直接的想法是对每个节点计算左右子树的最大高度，得出每个节点的直径，从而得出最大的那个直径。")]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[N,q,n("td",E,[a(e,{to:"/problem/0543.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",T,[a(e,{to:"/tag/tree.html"},{default:t(()=>[C]),_:1}),s(),a(e,{to:"/tag/depth-first-search.html"},{default:t(()=>[D]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[I]),_:1})]),L,n("td",V,[n("a",z,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])])])])])}const G=r(k,[["render",B],["__file","1522.html.vue"]]);export{G as default};

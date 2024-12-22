import{_ as c,r as l,o as i,c as r,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-U2ekqv2z.js";const h={},k=n("h1",{id:"_2583-二叉树中的第-k-大层和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2583-二叉树中的第-k-大层和","aria-hidden":"true"},"#"),t(" 2583. 二叉树中的第 K 大层和")],-1),m=n("code",null,"树",-1),g=n("code",null,"广度优先搜索",-1),_=n("code",null,"二叉树",-1),f=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given the <code>root</code> of a binary tree and a positive integer <code>k</code>.</p><p>The <strong>level sum</strong> in the tree is the sum of the values of the nodes that are on the <strong>same</strong> level.</p><p>Return <em>the</em><code>kth</code> <em><strong>largest</strong> level sum in the tree (not necessarily distinct)</em>. If there are fewer than <code>k</code> levels in the tree, return <code>-1</code>.</p><p><strong>Note</strong> that two nodes are on the same level if they have the same distance from the root.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/12/14/binaryytreeedrawio-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,8,9,2,1,3,7,4,6], k = 2</p><p>Output: 13</p><p>Explanation: The level sums are the following:</p><ul><li>Level 1: 5.</li><li>Level 2: 8 + 9 = 17.</li><li>Level 3: 2 + 1 + 3 + 7 = 13.</li><li>Level 4: 4 + 6 = 10.</li></ul><p>The 2nd largest level sum is 13.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/12/14/treedrawio-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,null,3], k = 1</p><p>Output: 3</p><p>Explanation: The largest level sum is 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is <code>n</code>.</li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= Node.val &lt;= 10^6</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一棵二叉树的根节点 <code>root</code> 和一个正整数 <code>k</code> 。</p><p>树中的 <strong>层和</strong> 是指 <strong>同一层</strong> 上节点值的总和。</p><p>返回树中第 <code>k</code> 大的层和（不一定不同）。如果树少于 <code>k</code> 层，则返回 <code>-1</code> 。</p><p><strong>注意</strong> ，如果两个节点与根节点的距离相同，则认为它们在同一层。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/12/14/binaryytreeedrawio-2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [5,8,9,2,1,3,7,4,6], k = 2</p><p><strong>输出：</strong> 13</p><p><strong>解释：</strong> 树中每一层的层和分别是：</p><ul><li>Level 1: 5</li><li>Level 2: 8 + 9 = 17</li><li>Level 3: 2 + 1 + 3 + 7 = 13</li><li>Level 4: 4 + 6 = 10</li></ul><p>第 2 大的层和等于 13 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/12/14/treedrawio-3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [1,2,null,3], k = 1</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 最大的层和是 3 。</p></blockquote><p><strong>提示：</strong></p><ul><li>树中的节点数为 <code>n</code></li><li><code>2 &lt;= n &lt;= 10^5</code></li><li><code>1 &lt;= Node.val &lt;= 10^6</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>宽度优先搜索（BFS）</strong>：使用 BFS 遍历二叉树，计算同一层上节点的层和。</p></li><li><p><strong>收集路径和</strong>：在遍历过程中，将每一层的层和存储在一个数组中。</p></li><li><p><strong>排序并选择</strong>：对层和进行降序排序，以找到第 <code>k</code> 大的层和。</p></li><li><p><strong>边界条件</strong>：注意如果树少于 <code>k</code> 层，则返回 <code>-1</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是树中节点的数量。BFS 的遍历时间为 <code>O(n)</code>，然后对路径和进行排序需要 <code>O(n log n)</code> 的时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储路径和的数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">kthLargestLevelSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">,</span>
		levelSum <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> node <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">+=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>node<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		levelSum<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果树少于 k 层，则返回 -1</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>levelSum<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 按降序排序，返回第 k 大的层和</span>
	<span class="token keyword">return</span> levelSum<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">[</span>k <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"144",-1),S=n("td",{style:{"text-align":"left"}},"二叉树的前序遍历",-1),N={style:{"text-align":"center"}},B={style:{"text-align":"left"}},E=n("code",null,"栈",-1),T=n("code",null,"树",-1),O=n("code",null,"深度优先搜索",-1),C=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/binary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"1161",-1),R=n("td",{style:{"text-align":"left"}},"最大层内元素和",-1),K={style:{"text-align":"center"}},M={style:{"text-align":"left"}},Y=n("code",null,"树",-1),A=n("code",null,"深度优先搜索",-1),D=n("code",null,"广度优先搜索",-1),G=n("code",null,"1+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"3157",-1),W=n("td",{style:{"text-align":"left"}},"找到具有最小和的树的层数 🔒",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"树",-1),nn=n("code",null,"深度优先搜索",-1),tn=n("code",null,"广度优先搜索",-1),en=n("code",null,"1+",-1),sn=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/find-the-level-of-tree-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/find-the-level-of-tree-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"};function pn(cn,rn){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟠 "),e(p,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/tree.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/binary-tree.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",v,[b,e(o)]),t(),n("a",y,[x,e(o)])]),w,d(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[q,S,n("td",N,[e(a,{to:"/problem/0144.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",B,[e(a,{to:"/tag/stack.html"},{default:s(()=>[E]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[T]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[O]),_:1}),t(),C]),I,n("td",V,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",F,[t("🔗"),e(o)])])]),n("tr",null,[j,R,n("td",K,[e(a,{to:"/problem/1161.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",M,[e(a,{to:"/tag/tree.html"},{default:s(()=>[Y]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[D]),_:1}),t(),G]),H,n("td",J,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])]),n("tr",null,[U,W,X,n("td",Z,[e(a,{to:"/tag/tree.html"},{default:s(()=>[$]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[nn]),_:1}),t(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[tn]),_:1}),t(),en]),sn,n("td",an,[n("a",on,[t("🀄️"),e(o)]),t(),n("a",ln,[t("🔗"),e(o)])])])])])])}const un=c(h,[["render",pn],["__file","2583.html.vue"]]);export{un as default};

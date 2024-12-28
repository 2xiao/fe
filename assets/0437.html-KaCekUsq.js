import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-fEpXkbSw.js";const h={},m=n("h1",{id:"_437-路径总和-iii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_437-路径总和-iii","aria-hidden":"true"},"#"),t(" 437. 路径总和 III")],-1),k=n("code",null,"树",-1),_=n("code",null,"深度优先搜索",-1),g=n("code",null,"二叉树",-1),f={href:"https://leetcode.cn/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <em>the number of paths where the sum of the values along the path equals</em><code>targetSum</code>.</p><p>The path does not need to start or end at the root or a leaf, but it must go downwards (i.e., traveling only from parent nodes to child nodes).</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8</p><p>Output: 3</p><p>Explanation: The paths that sum to 8 are shown.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 1000]</code>.</li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树的根节点 <code>root</code> ，和一个整数 <code>targetSum</code> ，求该二叉树里节点值之和等于 <code>targetSum</code> 的 <strong>路径</strong> 的数目。</p><p><strong>路径</strong> 不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/04/09/pathsum3-1-tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> root = [10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 和等于 8 的路径有 3 条，如图所示。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示:</strong></p><ul><li>二叉树的节点个数的范围是 <code>[0,1000]</code></li><li><code>-10^9 &lt;= Node.val &lt;= 10^9</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>深度优先搜索 (DFS)</strong> 和<strong>前缀和</strong>来解决这个问题。</p><ul><li>维护一个哈希表 <code>map</code>，存储从根节点到当前节点的所有路径和的出现次数。</li><li>在每次访问一个节点时，我们计算当前路径和 <code>sum</code>，并检查在此路径之前是否有路径和 <code>sum - targetSum</code>。如果存在，则说明有一条从之前某个节点到当前节点的路径的和为 <code>targetSum</code>。</li><li>递归处理左右节点，并在递归返回时回退 <code>map</code>，保证每次路径的计算仅在当前分支有效。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的个数。每个节点仅被访问一次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，用于存储递归栈和前缀和哈希表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">targetSum</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pathSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> targetSum</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 当路径和正好等于targetSum时，需要有一个虚拟前缀和为0的路径</span>
	map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先遍历</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">root<span class="token punctuation">,</span> sum</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新当前路径和</span>
		sum <span class="token operator">+=</span> root<span class="token punctuation">.</span>val<span class="token punctuation">;</span>

		<span class="token comment">// 查找有多少个之前的路径和等于sum - targetSum</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum <span class="token operator">-</span> targetSum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新路径和的计数</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 递归处理左右子树</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">,</span> sum<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯时将当前节点的路径和从哈希表中删除</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sum<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"112",-1),I=n("td",{style:{"text-align":"left"}},"路径总和",-1),q={style:{"text-align":"center"}},N={style:{"text-align":"left"}},E=n("code",null,"树",-1),V=n("code",null,"深度优先搜索",-1),j=n("code",null,"广度优先搜索",-1),C=n("code",null,"1+",-1),L=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"113",-1),M=n("td",{style:{"text-align":"left"}},"路径总和 II",-1),R={style:{"text-align":"center"}},D={style:{"text-align":"left"}},F=n("code",null,"树",-1),G=n("code",null,"深度优先搜索",-1),A=n("code",null,"回溯",-1),H=n("code",null,"1+",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"666",-1),W=n("td",{style:{"text-align":"left"}},"路径总和 IV 🔒",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"树",-1),$=n("code",null,"深度优先搜索",-1),nn=n("code",null,"数组",-1),tn=n("code",null,"2+",-1),sn=n("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},ln=n("td",{style:{"text-align":"center"}},"687",-1),cn=n("td",{style:{"text-align":"left"}},"最长同值路径",-1),pn=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},un=n("code",null,"树",-1),dn=n("code",null,"深度优先搜索",-1),hn=n("code",null,"二叉树",-1),mn=n("td",{style:{"text-align":"center"}},"🟠",-1),kn={style:{"text-align":"center"}},_n={href:"https://leetcode.cn/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"},gn={href:"https://leetcode.com/problems/longest-univalue-path",target:"_blank",rel:"noopener noreferrer"};function fn(bn,vn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[k]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",f,[b,s(o)]),t(),n("a",v,[y,s(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[S,I,n("td",q,[s(a,{to:"/problem/0112.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",N,[s(a,{to:"/tag/tree.html"},{default:e(()=>[E]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[V]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[j]),_:1}),t(),C]),L,n("td",T,[n("a",O,[t("🀄️"),s(o)]),t(),n("a",B,[t("🔗"),s(o)])])]),n("tr",null,[z,M,n("td",R,[s(a,{to:"/problem/0113.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",D,[s(a,{to:"/tag/tree.html"},{default:e(()=>[F]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[G]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[A]),_:1}),t(),H]),J,n("td",K,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])]),n("tr",null,[U,W,X,n("td",Y,[s(a,{to:"/tag/tree.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[$]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[nn]),_:1}),t(),tn]),sn,n("td",en,[n("a",an,[t("🀄️"),s(o)]),t(),n("a",on,[t("🔗"),s(o)])])]),n("tr",null,[ln,cn,pn,n("td",rn,[s(a,{to:"/tag/tree.html"},{default:e(()=>[un]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[dn]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[hn]),_:1})]),mn,n("td",kn,[n("a",_n,[t("🀄️"),s(o)]),t(),n("a",gn,[t("🔗"),s(o)])])])])])])}const xn=p(h,[["render",fn],["__file","0437.html.vue"]]);export{xn as default};

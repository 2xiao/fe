import{_ as c,r as p,o as i,c as u,a as n,b as t,d as s,w as e,f as r,e as d}from"./app-mXo2sCT-.js";const h={},k={id:"_199-二叉树的右视图",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_199-二叉树的右视图","aria-hidden":"true"},"#",-1),f={href:"https://2xiao.github.io/leetcode-js/problem/0199.html",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"树",-1),m=n("code",null,"深度优先搜索",-1),b=n("code",null,"广度优先搜索",-1),v=n("code",null,"二叉树",-1),y={href:"https://leetcode.cn/problems/binary-tree-right-side-view",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/binary-tree-right-side-view",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),L=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree, imagine yourself standing on the <strong>right side</strong> of it, return <em>the values of the nodes you can see ordered from top to bottom</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/14/tree.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3,null,5,null,4]</p><p>Output: [1,3,4]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: root = [1,null,3]</p><p>Output: [1,3]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 100]</code>.</li><li><code>-100 &lt;= Node.val &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>从右边看一个树，输出看到的数字，注意有遮挡。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>该问题要求返回二叉树的<strong>右视图</strong>，即从二叉树的右侧观察时，每层最右边的节点。</p><p>解题的主要思路是<strong>层序遍历</strong>，按照层序把每层的元素都遍历出来，然后依次取每一层的最右边的元素即可，用 BFS + 队列实现。</p><ol><li><p><strong>边界情况</strong>：如果根节点为 <code>null</code>，直接返回空数组。</p></li><li><p><strong>层序遍历</strong>：</p><ul><li>使用一个队列来进行二叉树的层序遍历。队列初始时只包含根节点。</li><li>每次进入新一层时，获取当前队列的长度 <code>len</code>，表示当前层的节点数。</li><li>因为我们需要记录每一层的最右侧节点，因此在每层结束时，将当前队列中最后一个节点的值加入到结果数组 <code>res</code> 中。</li></ul></li><li><p><strong>节点处理</strong>：</p><ul><li>对于每一层的节点，逐一处理队列中的元素： <ul><li>如果当前节点有左子节点，则将左子节点加入队列。</li><li>如果当前节点有右子节点，则将右子节点加入队列。</li></ul></li></ul></li><li><p><strong>更新队列</strong>：</p><ul><li>处理完一层的所有节点后，将队列的前 <code>len</code> 个元素移除（因为它们已经处理过），继续处理下一层。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>当所有层都遍历完成后，返回结果数组 <code>res</code>，其中包含每层最右侧节点的值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是二叉树的节点数量，二叉树的每个节点在层序遍历时只会被访问一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，因为队列在最坏情况下最多需要存储一半的节点（完全二叉树的最后一层可能有 <code>n/2</code> 个节点）。且需要存储最终结果数组，其空间需求为 <code>O(L)</code>，其中 <code>L</code> 是二叉树的层数，最多为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">rightSideView</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"116",-1),E={style:{"text-align":"left"}},V={href:"https://leetcode.com/problems/populating-next-right-pointers-in-each-node",target:"_blank",rel:"noopener noreferrer"},j={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"树",-1),B=n("code",null,"深度优先搜索",-1),M=n("code",null,"广度优先搜索",-1),S=n("code",null,"2+",-1),T={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"545",-1),z={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/boundary-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},D=n("code",null,"树",-1),H=n("code",null,"深度优先搜索",-1),J=n("code",null,"二叉树",-1),K={style:{"text-align":"left"}};function P(Q,U){const o=p("ExternalLinkIcon"),l=p("font"),a=p("RouterLink");return i(),u("div",null,[n("h1",k,[_,t(),n("a",f,[t("199. 二叉树的右视图"),s(o)])]),n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[v]),_:1}),t("  🔗 "),n("a",y,[x,s(o)]),t(),n("a",w,[q,s(o)])]),L,r(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[O,n("td",E,[n("a",V,[t("填充每个节点的下一个右侧节点指针"),s(o)])]),n("td",j,[s(a,{to:"/problem/0116.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",C,[s(a,{to:"/tag/tree.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[M]),_:1}),t(),S]),n("td",T,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])]),n("tr",null,[R,n("td",z,[n("a",F,[t("二叉树的边界 🔒"),s(o)])]),G,n("td",A,[s(a,{to:"/tag/tree.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[H]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[J]),_:1})]),n("td",K,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const X=c(h,[["render",P],["__file","0199.html.vue"]]);export{X as default};

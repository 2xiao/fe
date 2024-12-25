import{_ as p,r as c,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app--GvfAkAr.js";const k={},h=n("h1",{id:"_95-不同的二叉搜索树-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_95-不同的二叉搜索树-ii","aria-hidden":"true"},"#"),s(" 95. 不同的二叉搜索树 II")],-1),_=n("code",null,"树",-1),m=n("code",null,"二叉搜索树",-1),f=n("code",null,"动态规划",-1),b=n("code",null,"回溯",-1),g=n("code",null,"二叉树",-1),v={href:"https://leetcode.cn/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return _all the structurally unique **BST &#39;**s (binary search trees), which has exactly _<code>n</code> <em>nodes of unique values from</em> <code>1</code> <em>to</em><code>n</code>. Return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/uniquebstn3.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3</p><p>Output: [[1,null,2,null,3],[1,null,3,2],[2,1,3],[3,1,null,null,2],[3,2,null,1]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: [[1]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，请你生成并返回所有由 <code>n</code> 个节点组成且节点值从 <code>1</code> 到 <code>n</code> 互不相同的不同 <strong>二叉搜索树</strong> 。可以按 <strong>任意顺序</strong> 返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用递归来解决：</p><ol><li>定义一个辅助函数 <code>helper</code>，该函数接收两个参数 <code>start</code> 和 <code>end</code>，表示当前范围内可以使用的节点值的范围。</li><li>如果 <code>start</code> 大于 <code>end</code>，说明当前范围为空，返回一个包含 <code>null</code> 的数组。</li><li>遍历当前范围内的所有节点值（从 <code>start</code> 到 <code>end</code>），以当前节点值作为根节点，递归生成左子树和右子树。</li><li>将左子树和右子树的所有可能组合连接到当前根节点，形成新的二叉搜索树。</li><li>返回所有生成的二叉搜索树的根节点数组。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateTrees</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> end</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">&gt;</span> end<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> end<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> leftTrees <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">const</span> rightTrees <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> end<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> left <span class="token keyword">of</span> leftTrees<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token keyword">of</span> rightTrees<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),T=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"96",-1),I=n("td",{style:{"text-align":"left"}},"不同的二叉搜索树",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"树",-1),V=n("code",null,"二叉搜索树",-1),j=n("code",null,"数学",-1),B=n("code",null,"2+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/unique-binary-search-trees",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/unique-binary-search-trees",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"241",-1),M=n("td",{style:{"text-align":"left"}},"为运算表达式设计优先级",-1),A=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"递归",-1),H=n("code",null,"记忆化搜索",-1),J=n("code",null,"数学",-1),K=n("code",null,"2+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/different-ways-to-add-parentheses",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),t(a,{to:"/tag/tree.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/backtracking.html"},{default:e(()=>[b]),_:1}),s(),t(a,{to:"/tag/binary-tree.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",v,[y,t(o)]),s(),n("a",x,[w,t(o)])]),q,u(" prettier-ignore "),n("table",null,[T,n("tbody",null,[n("tr",null,[N,I,n("td",C,[t(a,{to:"/problem/0096.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/tree.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/binary-search-tree.html"},{default:e(()=>[V]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[j]),_:1}),s(),B]),R,n("td",z,[n("a",O,[s("🀄️"),t(o)]),s(),n("a",S,[s("🔗"),t(o)])])]),n("tr",null,[G,M,A,n("td",D,[t(a,{to:"/tag/recursion.html"},{default:e(()=>[F]),_:1}),s(),t(a,{to:"/tag/memoization.html"},{default:e(()=>[H]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[J]),_:1}),s(),K]),P,n("td",Q,[n("a",U,[s("🀄️"),t(o)]),s(),n("a",W,[s("🔗"),t(o)])])])])])])}const nn=p(k,[["render",X],["__file","0095.html.vue"]]);export{nn as default};

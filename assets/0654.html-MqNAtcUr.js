import{_ as p,r as l,o as c,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app--GvfAkAr.js";const m={},k=n("h1",{id:"_654-最大二叉树",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_654-最大二叉树","aria-hidden":"true"},"#"),s(" 654. 最大二叉树")],-1),h=n("code",null,"栈",-1),g=n("code",null,"树",-1),f=n("code",null,"数组",-1),_=n("code",null,"分治",-1),b=n("code",null,"二叉树",-1),x=n("code",null,"单调栈",-1),v={href:"https://leetcode.cn/problems/maximum-binary-tree",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/maximum-binary-tree",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"LeetCode",-1),I=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> with no duplicates. A <strong>maximum binary tree</strong> can be built recursively from <code>nums</code> using the following algorithm:</p><ol><li>Create a root node whose value is the maximum value in <code>nums</code>.</li><li>Recursively build the left subtree on the <strong>subarray prefix</strong> to the <strong>left</strong> of the maximum value.</li><li>Recursively build the right subtree on the <strong>subarray suffix</strong> to the <strong>right</strong> of the maximum value.</li></ol><p>Return <em>the <strong>maximum binary tree</strong> built from</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/tree1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: nums = [3,2,1,6,0,5]</p><p>Output: [6,3,5,null,2,0,null,null,1]</p></blockquote><p>Explanation: The recursive calls are as follow:</p><ul><li>The largest value in [3,2,1,6,0,5] is 6. Left prefix is [3,2,1] and right suffix is [0,5]. <ul><li>The largest value in [3,2,1] is 3. Left prefix is [] and right suffix is [2,1]. <ul><li>Empty array, so no child.</li><li>The largest value in [2,1] is 2. Left prefix is [] and right suffix is [1]. <ul><li>Empty array, so no child.</li><li>Only one element, so child is a node with value 1.</li></ul></li></ul></li><li>The largest value in [0,5] is 5. Left prefix is [0] and right suffix is []. <ul><li>Only one element, so child is a node with value 0.</li><li>Empty array, so no child.</li></ul></li></ul></li></ul><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/12/24/tree2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: nums = [3,2,1]</p><p>Output: [3,null,2,null,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li>All integers in <code>nums</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个不重复的整数数组 <code>nums</code> 。 最大二叉树 可以用下面的算法从 <code>nums</code> 递归地构建:</p><ol><li>创建一个根节点，其值为 <code>nums</code> 中的最大值。</li><li>递归地在最大值 左边 的 子数组前缀上 构建左子树。</li><li>递归地在最大值 右边 的 子数组后缀上 构建右子树。</li></ol><p>返回 <code>nums</code> 构建的 最大二叉树 。</p><p><strong>示例 1</strong>：</p><blockquote><p>输入：nums = [3,2,1,6,0,5]</p><p>输出：[6,3,5,null,2,0,null,null,1]</p></blockquote><p><strong>解释</strong>：递归调用如下所示：</p><ul><li>[3,2,1,6,0,5] 中的最大值是 6 ，左边部分是 [3,2,1] ，右边部分是 [0,5] 。 <ul><li>[3,2,1] 中的最大值是 3 ，左边部分是 [] ，右边部分是 [2,1] 。 <ul><li>空数组，无子节点。</li><li>[2,1] 中的最大值是 2 ，左边部分是 [] ，右边部分是 [1] 。 <ul><li>空数组，无子节点。</li><li>只有一个元素，所以子节点是一个值为 1 的节点。</li></ul></li></ul></li><li>[0,5] 中的最大值是 5 ，左边部分是 [0] ，右边部分是 [] 。 <ul><li>只有一个元素，所以子节点是一个值为 0 的节点。</li><li>空数组，无子节点。</li></ul></li></ul></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>每个二叉树节点都可以认为是一棵子树的根节点，对于根节点，首先要做的当然是把想办法把自己先构造出来，然后想办法构造自己的左右子树。</p><p>所以，我们要遍历数组把找到最大值 <code>maxVal</code>，从而把根节点 <code>root</code> 做出来，然后对 <code>maxVal</code> 左边的数组和右边的数组进行递归构建，作为 <code>root</code> 的左右子树。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">constructMaximumBinaryTree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			max <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			maxIndex <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> root <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TreeNode</span><span class="token punctuation">(</span>max<span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> maxIndex<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	root<span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token function">constructMaximumBinaryTree</span><span class="token punctuation">(</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>maxIndex <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"998",-1),q=n("td",{style:{"text-align":"left"}},"最大二叉树 II",-1),N=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},B=n("code",null,"树",-1),C=n("code",null,"二叉树",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/maximum-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/maximum-binary-tree-ii",target:"_blank",rel:"noopener noreferrer"};function z(A,S){const i=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return c(),u("div",null,[k,n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/tree.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/monotonic-stack.html"},{default:t(()=>[x]),_:1}),s("  🔗 "),n("a",v,[y,a(o)]),s(),n("a",w,[T,a(o)])]),I,r(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[L,q,N,n("td",V,[a(e,{to:"/tag/tree.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[C]),_:1})]),j,n("td",R,[n("a",M,[s("🀄️"),a(o)]),s(),n("a",O,[s("🔗"),a(o)])])])])])])}const D=p(m,[["render",z],["__file","0654.html.vue"]]);export{D as default};

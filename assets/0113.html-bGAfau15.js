import{_ as r,r as l,o as d,c as k,a as t,b as n,d as s,w as e,f as h,e as m}from"./app-MkGfDfkx.js";const _={},f=t("h1",{id:"_113-路径总和-ii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_113-路径总和-ii","aria-hidden":"true"},"#"),n(" 113. 路径总和 II")],-1),b=t("code",null,"树",-1),g=t("code",null,"深度优先搜索",-1),v=t("code",null,"回溯",-1),y=t("code",null,"二叉树",-1),x={href:"https://leetcode.cn/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),S={href:"https://leetcode.com/problems/path-sum-ii",target:"_blank",rel:"noopener noreferrer"},I=t("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return _all <strong>root-to-leaf</strong> paths where the sum of the node values in the path equals _ <code>targetSum</code> <em>. Each path should be returned as a list of the node <strong>values</strong> , not node references</em>.</p><p>A <strong>root-to-leaf</strong> path is a path starting from the root and ending at any leaf node. A <strong>leaf</strong> is a node with no children.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsumii1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [5,4,8,11,null,13,4,7,2,null,null,5,1], targetSum = 22</p><p>Output: [[5,4,11,2],[5,8,4,5]]</p><p>Explanation: There are two paths whose sum equals targetSum:</p><p>5 + 4 + 11 + 2 = 22</p><p>5 + 8 + 4 + 5 = 22</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,3], targetSum = 5</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = [1,2], targetSum = 0</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-1000 &lt;= Node.val &lt;= 1000</code></li><li><code>-1000 &lt;= targetSum &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树和一个目标和，找到所有从根节点到叶子节点路径总和等于给定目标和的路径。说明: 叶子节点是指没有子节点的节点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-dfs" tabindex="-1"><a class="header-anchor" href="#思路一-dfs" aria-hidden="true">#</a> 思路一：DFS</h3><p>这道题可以使用深度优先搜索（DFS）进行解答。具体思路如下：</p><ol><li>使用 DFS 遍历二叉树的所有路径，同时记录当前路径和。</li><li>在遍历的过程中，维护一个路径列表，记录当前路径上的所有节点。</li><li>当遍历到叶子节点时，判断当前路径和是否等于目标和，如果等于则将当前路径加入结果列表。</li><li>最终返回结果列表。</li></ol><hr><h3 id="思路二-递归" tabindex="-1"><a class="header-anchor" href="#思路二-递归" aria-hidden="true">#</a> 思路二：递归</h3>',21),q=t("h2",{id:"代码",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#代码","aria-hidden":"true"},"#"),n(" 代码")],-1),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"targetSum"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"pathSum"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("root"),t("span",{class:"token punctuation"},","),n(" targetSum")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" path "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"const"),n(),t("span",{class:"token function-variable function"},"dfs"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("node"),t("span",{class:"token punctuation"},","),n(" sum")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("node"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 将当前节点添加到路径中"),n(`
		path`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		sum `),t("span",{class:"token operator"},"+="),n(" node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 如果当前节点为叶子节点且路径和等于目标和，将路径加入结果列表"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("node"),t("span",{class:"token punctuation"},"."),n("left "),t("span",{class:"token operator"},"&&"),n(),t("span",{class:"token operator"},"!"),n("node"),t("span",{class:"token punctuation"},"."),n("right "),t("span",{class:"token operator"},"&&"),n(" sum "),t("span",{class:"token operator"},"=="),n(" targetSum"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),t("span",{class:"token operator"},"..."),n("path"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`

		`),t("span",{class:"token comment"},"// 递归遍历左右子树"),n(`
		`),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},","),n(" sum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},","),n(" sum"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

		`),t("span",{class:"token comment"},"// 回溯，移除当前节点"),n(`
		path`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 调用内部的深度优先搜索函数"),n(`
	`),t("span",{class:"token function"},"dfs"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),L=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("TreeNode"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"targetSum"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"pathSum"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("root"),t("span",{class:"token punctuation"},","),n(" targetSum")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("left "),t("span",{class:"token operator"},"&&"),n(),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},"."),n("right "),t("span",{class:"token operator"},"&&"),n(" root"),t("span",{class:"token punctuation"},"."),n("val "),t("span",{class:"token operator"},"=="),n(" targetSum"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" tempLeft "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"pathSum"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("left"),t("span",{class:"token punctuation"},","),n(" targetSum "),t("span",{class:"token operator"},"-"),n(" root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("tempLeft"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"of"),n(" tempLeft"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token operator"},"..."),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" tempRight "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"pathSum"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("right"),t("span",{class:"token punctuation"},","),n(" targetSum "),t("span",{class:"token operator"},"-"),n(" root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("tempRight"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"of"),n(" tempRight"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token operator"},"..."),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),N=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),T=t("td",{style:{"text-align":"center"}},"112",-1),A=t("td",{style:{"text-align":"left"}},"路径总和",-1),V={style:{"text-align":"center"}},D={style:{"text-align":"left"}},F=t("code",null,"树",-1),R=t("code",null,"深度优先搜索",-1),B=t("code",null,"广度优先搜索",-1),O=t("code",null,"1+",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/path-sum",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"257",-1),K=t("td",{style:{"text-align":"left"}},"二叉树的所有路径",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"树",-1),W=t("code",null,"深度优先搜索",-1),X=t("code",null,"字符串",-1),Y=t("code",null,"2+",-1),Z=t("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/binary-tree-paths",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/binary-tree-paths",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"437",-1),et=t("td",{style:{"text-align":"left"}},"路径总和 III",-1),at={style:{"text-align":"center"}},ot={style:{"text-align":"left"}},lt=t("code",null,"树",-1),ct=t("code",null,"深度优先搜索",-1),pt=t("code",null,"二叉树",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),ut={style:{"text-align":"center"}},rt={href:"https://leetcode.cn/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/path-sum-iii",target:"_blank",rel:"noopener noreferrer"},kt=t("td",{style:{"text-align":"center"}},"666",-1),ht=t("td",{style:{"text-align":"left"}},"路径总和 IV 🔒",-1),mt=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},ft=t("code",null,"树",-1),bt=t("code",null,"深度优先搜索",-1),gt=t("code",null,"数组",-1),vt=t("code",null,"2+",-1),yt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},wt={href:"https://leetcode.cn/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},St={href:"https://leetcode.com/problems/path-sum-iv",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"2096",-1),jt=t("td",{style:{"text-align":"left"}},"从二叉树一个节点到另一个节点每一步的方向",-1),qt=t("td",{style:{"text-align":"center"}},null,-1),Et={style:{"text-align":"left"}},Lt=t("code",null,"树",-1),Nt=t("code",null,"深度优先搜索",-1),Ct=t("code",null,"字符串",-1),Tt=t("code",null,"1+",-1),At=t("td",{style:{"text-align":"center"}},"🟠",-1),Vt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another",target:"_blank",rel:"noopener noreferrer"};function Rt(Bt,Ot){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),u=l("CodeTabs");return d(),k("div",null,[f,t("p",null,[n("🟠 "),s(i,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[b]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[g]),_:1}),n(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[v]),_:1}),n(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[y]),_:1}),n("  🔗 "),t("a",x,[w,s(o)]),n(),t("a",S,[I,s(o)])]),j,t("p",null,[n("这一题是 "),s(a,{to:"/problem/0112.html"},{default:e(()=>[n("第 112 题")]),_:1}),n(" 和 "),s(a,{to:"/problem/0257.html"},{default:e(()=>[n("第 257 题")]),_:1}),n(" 的组合增强版。")]),t("p",null,[s(a,{to:"/problem/0112.html"},{default:e(()=>[n("第 112 题")]),_:1}),n(" 要求判断树中是否存在从根节点到叶子节点路径总和等于给定目标和； "),s(a,{to:"/problem/0257.html"},{default:e(()=>[n("第 257 题")]),_:1}),n(" 要求返回所有从根节点到叶子节点的路径；而本题要求返回所有从根节点到叶子节点路径总和等于给定目标和的路径。可以结合两道题的解题思路，采用递归实现。")]),q,s(u,{id:"133",data:[{id:"DFS"},{id:"递归"}]},{title0:e(({value:c,isActive:p})=>[n("DFS")]),title1:e(({value:c,isActive:p})=>[n("递归")]),tab0:e(({value:c,isActive:p})=>[E]),tab1:e(({value:c,isActive:p})=>[L]),_:1}),N,h(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[T,A,t("td",V,[s(a,{to:"/problem/0112.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",D,[s(a,{to:"/tag/tree.html"},{default:e(()=>[F]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[R]),_:1}),n(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[B]),_:1}),n(),O]),z,t("td",G,[t("a",M,[n("🀄️"),s(o)]),n(),t("a",H,[n("🔗"),s(o)])])]),t("tr",null,[J,K,t("td",P,[s(a,{to:"/problem/0257.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",Q,[s(a,{to:"/tag/tree.html"},{default:e(()=>[U]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[W]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[X]),_:1}),n(),Y]),Z,t("td",$,[t("a",tt,[n("🀄️"),s(o)]),n(),t("a",nt,[n("🔗"),s(o)])])]),t("tr",null,[st,et,t("td",at,[s(a,{to:"/problem/0437.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",ot,[s(a,{to:"/tag/tree.html"},{default:e(()=>[lt]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[ct]),_:1}),n(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[pt]),_:1})]),it,t("td",ut,[t("a",rt,[n("🀄️"),s(o)]),n(),t("a",dt,[n("🔗"),s(o)])])]),t("tr",null,[kt,ht,mt,t("td",_t,[s(a,{to:"/tag/tree.html"},{default:e(()=>[ft]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[bt]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[gt]),_:1}),n(),vt]),yt,t("td",xt,[t("a",wt,[n("🀄️"),s(o)]),n(),t("a",St,[n("🔗"),s(o)])])]),t("tr",null,[It,jt,qt,t("td",Et,[s(a,{to:"/tag/tree.html"},{default:e(()=>[Lt]),_:1}),n(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[Nt]),_:1}),n(),s(a,{to:"/tag/string.html"},{default:e(()=>[Ct]),_:1}),n(),Tt]),At,t("td",Vt,[t("a",Dt,[n("🀄️"),s(o)]),n(),t("a",Ft,[n("🔗"),s(o)])])])])])])}const Gt=r(_,[["render",Rt],["__file","0113.html.vue"]]);export{Gt as default};

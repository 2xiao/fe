import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as h,e as m}from"./app-mXo2sCT-.js";const b={},g={id:"_110-平衡二叉树",tabindex:"-1"},f=n("a",{class:"header-anchor",href:"#_110-平衡二叉树","aria-hidden":"true"},"#",-1),_={href:"https://2xiao.github.io/leetcode-js/problem/0110.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"树",-1),y=n("code",null,"深度优先搜索",-1),x=n("code",null,"二叉树",-1),w={href:"https://leetcode.cn/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"力扣",-1),B={href:"https://leetcode.com/problems/balanced-binary-tree",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),j=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary tree, determine if it is <strong>height-balanced</strong>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/06/balance_1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [3,9,20,null,null,15,7]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/06/balance_2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,2,2,3,3,null,null,4,4]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: root = []</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 5000]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二叉树，判断它是否是高度平衡的二叉树。</p><p>本题中，一棵高度平衡二叉树定义为：一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-自上向下递归" tabindex="-1"><a class="header-anchor" href="#思路一-自上向下递归" aria-hidden="true">#</a> 思路一：自上向下递归</h3><p>通过递归的方式，对每个节点进行判断，确保它的左右子树高度差不超过 1，并逐层向下判断:</p><ol><li>对于每个节点，计算其左子树和右子树的高度差。</li><li>如果某个节点的左右子树的高度差超过 1，则说明以该节点为根的子树不是平衡的，直接返回 <code>false</code>。</li><li>如果该节点是平衡的，继续递归检查其左子树和右子树是否平衡。</li><li>递归的终止条件是遍历到叶子节点，叶子节点是平衡的。</li><li>如果整棵树的所有节点都满足平衡条件，返回 <code>true</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>， <ul><li><strong><code>getHeight</code> 函数</strong>：每次调用 <code>getHeight</code> 会遍历树的节点以计算高度。在 <code>isBalanced</code> 函数中，对每个节点都调用了一次 <code>getHeight</code>。因此，对于一棵包含 <code>n</code> 个节点的树，<code>getHeight</code> 的时间复杂度是 <code>O(n)</code>。</li><li><strong><code>isBalanced</code> 函数</strong>：在最坏情况下，每个节点都会调用一次 <code>getHeight</code>，因此总的时间复杂度是 <code>O(n^2)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于递归的深度等于树的高度，在最坏情况下（例如完全不平衡的树），树的高度可能是 <code>n</code>，因此空间复杂度为 <code>O(n)</code>。在平衡树的情况下，空间复杂度是 <code>O(log n)</code>。</li></ul><hr><h3 id="思路二-自底向上递归" tabindex="-1"><a class="header-anchor" href="#思路二-自底向上递归" aria-hidden="true">#</a> 思路二：自底向上递归</h3><p>为了优化时间复杂度，可以使用自底向上的方法，在计算树的高度时同时检查树的平衡性，这样可以将时间复杂度降低到 <code>O(n)</code>。</p><ol><li><strong>单次遍历</strong>：<code>checkBalance</code> 函数在检查每个节点的高度时，直接判断其是否平衡，避免了重复遍历。</li><li><strong>返回值</strong>：如果发现不平衡，返回 <code>-1</code>，否则返回树的高度。这种方式使得可以在发现不平衡时立即停止后续的检查。</li></ol><h3 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h3><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，每个节点只遍历一次。</li><li><strong>空间复杂度</strong>： <code>O(h)</code>，其中 <code>h</code> 是树的高度（递归调用栈的深度），在最坏情况下为 <code>O(n)</code>，在平衡树情况下为 <code>O(log n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isBalanced"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 空树是平衡的"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 计算左右子树的高度差"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" diff "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 检查当前节点是否平衡，以及其左右子树是否平衡"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" diff "),n("span",{class:"token operator"},"<="),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token function"},"isBalanced"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token function"},"isBalanced"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// 计算树的高度"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"getHeight"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"+"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function"},"getHeight"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("TreeNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"root"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isBalanced"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),t("root"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token comment"},"// 检查平衡性和计算高度"),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"checkBalance"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("node"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 空树高度为0"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" leftHeight "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("left"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("leftHeight "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 左子树不平衡"),t(`

	`),n("span",{class:"token keyword"},"const"),t(" rightHeight "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"checkBalance"),n("span",{class:"token punctuation"},"("),t("node"),n("span",{class:"token punctuation"},"."),t("right"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("rightHeight "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 右子树不平衡"),t(`

	`),n("span",{class:"token comment"},"// 检查当前节点的平衡性"),t(`
	`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),t("leftHeight "),n("span",{class:"token operator"},"-"),t(" rightHeight"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},">"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 不平衡"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 返回当前树的高度"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("leftHeight"),n("span",{class:"token punctuation"},","),t(" rightHeight"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),T=n("td",{style:{"text-align":"center"}},"104",-1),I={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},M={style:{"text-align":"center"}},V={style:{"text-align":"left"}},A=n("code",null,"树",-1),z=n("code",null,"深度优先搜索",-1),R=n("code",null,"广度优先搜索",-1),G=n("code",null,"1+",-1),K={style:{"text-align":"left"}},S=n("td",{style:{"text-align":"center"}},"3319",-1),D={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/k-th-largest-perfect-subtree-size-in-binary-tree",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=n("code",null,"树",-1),U=n("code",null,"深度优先搜索",-1),W=n("code",null,"二叉树",-1),X=n("code",null,"1+",-1),Y={style:{"text-align":"left"}};function Z($,nn){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink"),r=c("CodeTabs");return d(),k("div",null,[n("h1",g,[f,t(),n("a",_,[t("110. 平衡二叉树"),s(o)])]),n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/tree.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[y]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[x]),_:1}),t("  🔗 "),n("a",w,[H,s(o)]),t(),n("a",B,[O,s(o)])]),j,s(r,{id:"175",data:[{id:"自上向下递归"},{id:"自底向上递归"}]},{title0:e(({value:i,isActive:p})=>[t("自上向下递归")]),title1:e(({value:i,isActive:p})=>[t("自底向上递归")]),tab0:e(({value:i,isActive:p})=>[E]),tab1:e(({value:i,isActive:p})=>[N]),_:1}),C,h(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[T,n("td",I,[n("a",L,[t("二叉树的最大深度"),s(o)])]),n("td",M,[s(a,{to:"/problem/0104.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",V,[s(a,{to:"/tag/tree.html"},{default:e(()=>[A]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[R]),_:1}),t(),G]),n("td",K,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})])]),n("tr",null,[S,n("td",D,[n("a",F,[t("第 K 大的完美二叉子树的大小"),s(o)])]),n("td",J,[s(a,{to:"/problem/3319.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",P,[s(a,{to:"/tag/tree.html"},{default:e(()=>[Q]),_:1}),t(),s(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/binary-tree.html"},{default:e(()=>[W]),_:1}),t(),X]),n("td",Y,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})])])])])])}const sn=u(b,[["render",Z],["__file","0110.html.vue"]]);export{sn as default};

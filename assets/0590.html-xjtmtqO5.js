import{_ as u,r as c,o as d,c as k,a as t,b as n,d as e,w as s,f as h,e as _}from"./app-Ob52y8QZ.js";const m={},f=t("h1",{id:"_590-n-叉树的后序遍历",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_590-n-叉树的后序遍历","aria-hidden":"true"},"#"),n(" 590. N 叉树的后序遍历")],-1),b=t("code",null,"栈",-1),g=t("code",null,"树",-1),v=t("code",null,"深度优先搜索",-1),y={href:"https://leetcode.cn/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/n-ary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},N=t("code",null,"LeetCode",-1),E=_('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>root</code> of an n-ary tree, return <em>the postorder traversal of its nodes&#39; values</em>.</p><p>Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/narytreeexample.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,3,2,4,null,5,6]</p><p>Output: [5,6,3,2,4,1]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/08/sample_4_964.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]</p><p>Output: [2,6,14,11,7,3,12,8,4,13,9,10,5,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[0, 10^4]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^4</code></li><li>The height of the n-ary tree is less than or equal to <code>1000</code>.</li></ul><p><strong>Follow up:</strong> Recursive solution is trivial, could you do it iteratively?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-递归" tabindex="-1"><a class="header-anchor" href="#思路一-递归" aria-hidden="true">#</a> 思路一：递归</h3><p>对于 n 叉树，<code>node.children</code> 表示节点的所有子节点。从根节点开始遍历，在访问每个节点时，递归地对每个子节点进行后序遍历，然后将其值添加到结果数组中。</p><hr><h3 id="思路二-迭代" tabindex="-1"><a class="header-anchor" href="#思路二-迭代" aria-hidden="true">#</a> 思路二：迭代</h3><p>同样，通过使用栈来模拟递归的过程，可以迭代地完成后序遍历。</p><p>先序遍历是中左右，后续遍历是左右中，那么我们只需要调整一下先序遍历的代码顺序，就变成中右左的遍历顺序，然后再反转 res 数组，输出的结果顺序就是左右中了。</p><p>具体实现时，将当前节点的值插入结果数组时，可以使用 <code>unshift</code> 方法。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',22),C=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorder"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"of"),n(" root"),t("span",{class:"token punctuation"},"."),n("children"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"..."),t("span",{class:"token function"},"postorder"),t("span",{class:"token punctuation"},"("),n("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("root"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("Node"),t("span",{class:"token operator"},"|"),t("span",{class:"token keyword"},"null"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"root"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"postorder"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token operator"},"!"),n("root"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" stack "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),n("root"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" res "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("stack"),t("span",{class:"token punctuation"},"."),n("length"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token keyword"},"let"),n(" node "),t("span",{class:"token operator"},"="),n(" stack"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"pop"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		res`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),n("node"),t("span",{class:"token punctuation"},"."),n("val"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token keyword"},"of"),n(" node"),t("span",{class:"token punctuation"},"."),n("children"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			stack`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),n("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" res"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),T=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),L=t("td",{style:{"text-align":"center"}},"145",-1),V=t("td",{style:{"text-align":"left"}},"二叉树的后序遍历",-1),A={style:{"text-align":"center"}},I={style:{"text-align":"left"}},z=t("code",null,"栈",-1),B=t("code",null,"树",-1),R=t("code",null,"深度优先搜索",-1),O=t("code",null,"1+",-1),S={style:{"text-align":"left"}},F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/binary-tree-postorder-traversal",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"429",-1),H=t("td",{style:{"text-align":"left"}},"N 叉树的层序遍历",-1),J=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=t("code",null,"树",-1),Q=t("code",null,"广度优先搜索",-1),U={style:{"text-align":"left"}},W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/n-ary-tree-level-order-traversal",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"589",-1),$=t("td",{style:{"text-align":"left"}},"N 叉树的前序遍历",-1),tt={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},et=t("code",null,"栈",-1),st=t("code",null,"树",-1),at=t("code",null,"深度优先搜索",-1),ot={style:{"text-align":"left"}},lt={style:{"text-align":"center"}},ct={href:"https://leetcode.cn/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"},rt={href:"https://leetcode.com/problems/n-ary-tree-preorder-traversal",target:"_blank",rel:"noopener noreferrer"};function it(pt,ut){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[f,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[v]),_:1}),n("  🔗 "),t("a",y,[x,e(o)]),n(),t("a",w,[N,e(o)])]),E,e(p,{id:"94",data:[{id:"递归"},{id:"迭代"}]},{title0:s(({value:r,isActive:i})=>[n("递归")]),title1:s(({value:r,isActive:i})=>[n("迭代")]),tab0:s(({value:r,isActive:i})=>[C]),tab1:s(({value:r,isActive:i})=>[j]),_:1}),T,h(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[L,V,t("td",A,[e(a,{to:"/problem/0145.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",I,[e(a,{to:"/tag/stack.html"},{default:s(()=>[z]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[B]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[R]),_:1}),n(),O]),t("td",S,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})]),t("td",F,[t("a",G,[n("🀄️"),e(o)]),n(),t("a",M,[n("🔗"),e(o)])])]),t("tr",null,[D,H,J,t("td",K,[e(a,{to:"/tag/tree.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[Q]),_:1})]),t("td",U,[e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})]),t("td",W,[t("a",X,[n("🀄️"),e(o)]),n(),t("a",Y,[n("🔗"),e(o)])])]),t("tr",null,[Z,$,t("td",tt,[e(a,{to:"/problem/0589.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",nt,[e(a,{to:"/tag/stack.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/tag/tree.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[at]),_:1})]),t("td",ot,[e(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})]),t("td",lt,[t("a",ct,[n("🀄️"),e(o)]),n(),t("a",rt,[n("🔗"),e(o)])])])])])])}const kt=u(m,[["render",it],["__file","0590.html.vue"]]);export{kt as default};

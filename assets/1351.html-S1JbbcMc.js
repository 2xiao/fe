import{_ as u,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as m,e as h}from"./app--GvfAkAr.js";const g={},b=n("h1",{id:"_1351-统计有序矩阵中的负数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1351-统计有序矩阵中的负数","aria-hidden":"true"},"#"),t(" 1351. 统计有序矩阵中的负数")],-1),_=n("code",null,"数组",-1),v=n("code",null,"二分查找",-1),f=n("code",null,"矩阵",-1),w={href:"https://leetcode.cn/problems/count-negative-numbers-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),j=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <code>m x n</code> matrix <code>grid</code> which is sorted in non-increasing order both row-wise and column-wise, return <em>the number of<strong>negative</strong> numbers in</em><code>grid</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]</p><p>Output: 8</p><p>Explanation: There are 8 negatives number in the matrix.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[3,2],[1,0]]</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>-100 &lt;= grid[i][j] &lt;= 100</code></li></ul><p><strong>Follow up:</strong> Could you find an <code>O(n + m)</code> solution?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m * n</code> 的矩阵 <code>grid</code>，矩阵中的元素无论是按行还是按列，都以非严格递减顺序排列。 请你统计并返回 <code>grid</code> 中 <strong>负数</strong> 的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 矩阵中共有 8 个负数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> grid = [[3,2],[1,0]]</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == grid.length</code></li><li><code>n == grid[i].length</code></li><li><code>1 &lt;= m, n &lt;= 100</code></li><li><code>-100 &lt;= grid[i][j] &lt;= 100</code></li></ul><p><strong>进阶：</strong> 你可以设计一个时间复杂度为 <code>O(n + m)</code> 的解决方案吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-逐行二分查找" tabindex="-1"><a class="header-anchor" href="#思路一-逐行二分查找" aria-hidden="true">#</a> 思路一：逐行二分查找</h3><ol><li>对每一行使用<strong>二分查找</strong>，找到第一个负数的位置。</li><li>由行的性质可知，该位置右侧的所有元素都是负数。</li><li>累计每行的负数数量，最终返回总数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析：</h4><ul><li><strong>时间复杂度</strong>：<code>O(m log n)</code>，其中 <code>m</code> 是行数，<code>n</code> 是列数。每一行执行一次二分查找，耗时 <code>O(log n)</code>，共 <code>m</code> 行。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量额外空间。</li></ul><hr><h3 id="思路二-矩阵逆向遍历" tabindex="-1"><a class="header-anchor" href="#思路二-矩阵逆向遍历" aria-hidden="true">#</a> 思路二：矩阵逆向遍历</h3><ol><li>从矩阵的<strong>右上角</strong>开始移动（<code>row = 0</code>，<code>col = n - 1</code>）： <ul><li>如果当前位置是正数，向下移动（增加行索引）。</li><li>如果当前位置是负数，向左移动（减少列索引）。</li></ul></li><li>每次遇到负数时，说明当前列从该行往下的所有元素都是负数。</li><li>累计负数的个数。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析：</h4><ul><li><strong>时间复杂度</strong>：<code>O(m + n)</code>，最多遍历 <code>m + n</code> 次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"grid"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countNegatives"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" count "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token comment"},"// 逐行二分查找"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" row "),n("span",{class:"token keyword"},"of"),t(" grid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
			right `),n("span",{class:"token operator"},"="),t(" row"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"<="),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"let"),t(" mid "),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"floor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("left "),n("span",{class:"token operator"},"+"),t(" right"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("row"),n("span",{class:"token punctuation"},"["),t("mid"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				right `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 负数在左侧"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				left `),n("span",{class:"token operator"},"="),t(" mid "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 正数在右侧"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token comment"},"// 剩下的负数数量是从 left 到行尾的元素"),t(`
		count `),n("span",{class:"token operator"},"+="),t(" row"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" count"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"grid"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countNegatives"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" grid"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" total "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" row "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		col `),n("span",{class:"token operator"},"="),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("row "),n("span",{class:"token operator"},"<"),t(" m "),n("span",{class:"token operator"},"&&"),t(" col "),n("span",{class:"token operator"},">="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("grid"),n("span",{class:"token punctuation"},"["),t("row"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("col"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token comment"},"// 当前列从 row 到底部的所有元素都是负数"),t(`
			total `),n("span",{class:"token operator"},"+="),t(" m "),n("span",{class:"token operator"},"-"),t(" row"),n("span",{class:"token punctuation"},";"),t(`
			col`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 左移列"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			row`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 下移行"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" total"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"2529",-1),V=n("td",{style:{"text-align":"left"}},"正整数和负整数的最大计数",-1),A=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},T=n("code",null,"数组",-1),B=n("code",null,"二分查找",-1),R=n("code",null,"计数",-1),F=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer",target:"_blank",rel:"noopener noreferrer"};function z(D,H){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),s(i,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[v]),_:1}),t(),s(a,{to:"/tag/matrix.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",w,[y,s(o)]),t(),n("a",x,[O,s(o)])]),j,s(p,{id:"213",data:[{id:"逐行二分查找"},{id:"矩阵逆向遍历"}]},{title0:e(({value:l,isActive:r})=>[t("逐行二分查找")]),title1:e(({value:l,isActive:r})=>[t("矩阵逆向遍历")]),tab0:e(({value:l,isActive:r})=>[q]),tab1:e(({value:l,isActive:r})=>[C]),_:1}),E,m(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[L,V,A,n("td",I,[s(a,{to:"/tag/array.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/binary-search.html"},{default:e(()=>[B]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[R]),_:1})]),F,n("td",G,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",S,[t("🔗"),s(o)])])])])])])}const K=u(g,[["render",z],["__file","1351.html.vue"]]);export{K as default};

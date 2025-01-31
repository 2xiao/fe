import{_ as d,r as c,o as u,c as k,a as n,b as e,d as s,w as t,f as m,e as h}from"./app-MkGfDfkx.js";const b={},_=n("h1",{id:"_1137-第-n-个泰波那契数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1137-第-n-个泰波那契数","aria-hidden":"true"},"#"),e(" 1137. 第 N 个泰波那契数")],-1),g=n("code",null,"记忆化搜索",-1),f=n("code",null,"数学",-1),v=n("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/n-th-tribonacci-number",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"LeetCode",-1),N=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The Tribonacci sequence <code>Tn</code> is defined as follows:</p><p><code>T0 = 0</code>, <code>T1 = 1</code>, <code>T2 = 1</code>, and <code>Tn+3 = Tn + Tn+1 + Tn+2</code> for <code>n &gt;= 0</code>.</p><p>Given <code>n</code>, return the value of <code>Tn</code>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> n = 4</p><p><strong>Output:</strong> 4</p><p><strong>Explanation:</strong></p><p>T_3 = 0 + 1 + 1 = 2</p><p>T_4 = 1 + 1 + 2 = 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> n = 25</p><p><strong>Output:</strong> 1389537</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 37</code></li><li>The answer is guaranteed to fit within a 32-bit integer, ie. <code>answer &lt;= 2^31 - 1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>泰波那契序列 <code>Tn</code> 定义如下：</p><p><code>T0 = 0</code>, <code>T1 = 1</code>, <code>T2 = 1</code>, 且在 <code>n &gt;= 0</code> 的条件下 <code>Tn+3 = Tn + Tn+1 + Tn+2</code></p><p>给你整数 <code>n</code>，请返回第 <code>n</code> 个泰波那契数 <code>Tn</code> 的值。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-动态规划" tabindex="-1"><a class="header-anchor" href="#思路一-动态规划" aria-hidden="true">#</a> 思路一：动态规划</h3><ol><li><p><strong>动态规划数组</strong>：首先创建一个数组 <code>dp</code>，用于存储泰波那契数列的中间状态。</p></li><li><p><strong>初始化</strong>：初始化前三项，即 <code>dp[0] = 0</code>、<code>dp[1] = 1</code>、<code>dp[2] = 1</code>，这是泰波那契数列的前三项。</p></li><li><p><strong>迭代计算</strong>：使用循环从第四项开始迭代计算，每次计算的值是前三项的和。</p></li><li><p><strong>返回结果</strong>：返回 <code>dp[n]</code>，即第 N 个泰波那契数。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历计算动态规划数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存储中间状态。</li></ul><hr><h3 id="思路二-滚动数组" tabindex="-1"><a class="header-anchor" href="#思路二-滚动数组" aria-hidden="true">#</a> 思路二：滚动数组</h3><ol><li><p><strong>滚动数组</strong>：考虑到当前项的计算只依赖于前三项，我们可以使用滚动数组的思想，只保留最近的三项，不需要额外的数组存储所有的中间状态。</p></li><li><p><strong>初始化</strong>：初始化前三项 <code>first = 0</code>, <code>second = 1</code>, <code>third = 1</code>。</p></li><li><p><strong>迭代计算</strong>：从第四项开始迭代计算，每次更新 <code>first</code>, <code>second</code>, <code>third</code> 的值。</p></li><li><p><strong>返回结果</strong>：返回 <code>third</code> 的值即为所求的第 N 个泰波那契数。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历计算动态规划数组。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用了常数个额外变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"tribonacci"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token comment"},"// 创建动态规划数组"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" dp "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token comment"},"// 初始化前三项"),e(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 迭代计算"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<="),e(" n"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		dp`),n("span",{class:"token punctuation"},"["),e("i"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(" dp"),n("span",{class:"token punctuation"},"["),e("i "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"+"),e(" dp"),n("span",{class:"token punctuation"},"["),e("i "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"+"),e(" dp"),n("span",{class:"token punctuation"},"["),e("i "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`

	`),n("span",{class:"token comment"},"// 返回结果"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" dp"),n("span",{class:"token punctuation"},"["),e("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"tribonacci"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"=="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"=="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token comment"},"// 初始化前三项"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" first "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" second "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" third "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 迭代计算"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<="),e(" n"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" temp "),n("span",{class:"token operator"},"="),e(" first "),n("span",{class:"token operator"},"+"),e(" second "),n("span",{class:"token operator"},"+"),e(" third"),n("span",{class:"token punctuation"},";"),e(`
		first `),n("span",{class:"token operator"},"="),e(" second"),n("span",{class:"token punctuation"},";"),e(`
		second `),n("span",{class:"token operator"},"="),e(" third"),n("span",{class:"token punctuation"},";"),e(`
		third `),n("span",{class:"token operator"},"="),e(" temp"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token comment"},"// 返回结果"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" third"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"70",-1),A=n("td",{style:{"text-align":"left"}},"爬楼梯",-1),L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},I=n("code",null,"记忆化搜索",-1),z=n("code",null,"数学",-1),B=n("code",null,"动态规划",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"509",-1),H=n("td",{style:{"text-align":"left"}},"斐波那契数",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},M=n("code",null,"递归",-1),P=n("code",null,"记忆化搜索",-1),Q=n("code",null,"数学",-1),U=n("code",null,"1+",-1),W=n("td",{style:{"text-align":"center"}},"🟢",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"};function $(nn,en){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return u(),k("div",null,[_,n("p",null,[e("🟢 "),s(i,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(a,{to:"/tag/memoization.html"},{default:t(()=>[g]),_:1}),e(),s(a,{to:"/tag/math.html"},{default:t(()=>[f]),_:1}),e(),s(a,{to:"/tag/dynamic-programming.html"},{default:t(()=>[v]),_:1}),e("  🔗 "),n("a",y,[x,s(o)]),e(),n("a",w,[T,s(o)])]),N,s(p,{id:"163",data:[{id:"动态规划"},{id:"滚动数组"}]},{title0:t(({value:l,isActive:r})=>[e("动态规划")]),title1:t(({value:l,isActive:r})=>[e("滚动数组")]),tab0:t(({value:l,isActive:r})=>[C]),tab1:t(({value:l,isActive:r})=>[E]),_:1}),j,m(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[q,A,n("td",L,[s(a,{to:"/problem/0070.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",V,[s(a,{to:"/tag/memoization.html"},{default:t(()=>[I]),_:1}),e(),s(a,{to:"/tag/math.html"},{default:t(()=>[z]),_:1}),e(),s(a,{to:"/tag/dynamic-programming.html"},{default:t(()=>[B]),_:1})]),R,n("td",G,[n("a",S,[e("🀄️"),s(o)]),e(),n("a",D,[e("🔗"),s(o)])])]),n("tr",null,[F,H,n("td",J,[s(a,{to:"/problem/0509.html"},{default:t(()=>[e("[✓]")]),_:1})]),n("td",K,[s(a,{to:"/tag/recursion.html"},{default:t(()=>[M]),_:1}),e(),s(a,{to:"/tag/memoization.html"},{default:t(()=>[P]),_:1}),e(),s(a,{to:"/tag/math.html"},{default:t(()=>[Q]),_:1}),e(),U]),W,n("td",X,[n("a",Y,[e("🀄️"),s(o)]),e(),n("a",Z,[e("🔗"),s(o)])])])])])])}const tn=d(b,[["render",$],["__file","1137.html.vue"]]);export{tn as default};

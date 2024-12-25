import{_ as u,r as l,o as d,c as k,a as n,b as t,d as s,w as a,f as m,e as h}from"./app--GvfAkAr.js";const g={},b=n("h1",{id:"_766-托普利茨矩阵",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_766-托普利茨矩阵","aria-hidden":"true"},"#"),t(" 766. 托普利茨矩阵")],-1),x=n("code",null,"数组",-1),_=n("code",null,"矩阵",-1),f={href:"https://leetcode.cn/problems/toeplitz-matrix",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/toeplitz-matrix",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> <code>matrix</code>, return <em><code>true</code> if the matrix is Toeplitz. Otherwise, return <code>false</code>.</em></p><p>A matrix is <strong>Toeplitz</strong> if every diagonal from top-left to bottom-right has the same elements.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]</p><p>Output: true</p><p>Explanation:</p><p>In the above grid, the diagonals are:</p><p>&quot;[9]&quot;, &quot;[5, 5]&quot;, &quot;[1, 1, 1]&quot;, &quot;[2, 2, 2]&quot;, &quot;[3, 3]&quot;, &quot;[4]&quot;.</p><p>In each diagonal all elements are the same, so the answer is True.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,2],[2,2]]</p><p>Output: false</p><p>Explanation:</p><p>The diagonal &quot;[1, 2]&quot; has different elements.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 20</code></li><li><code>0 &lt;= matrix[i][j] &lt;= 99</code></li></ul><p><strong>Follow up:</strong></p><ul><li>What if the <code>matrix</code> is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?</li><li>What if the <code>matrix</code> is so large that you can only load up a partial row into the memory at once?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的矩阵 <code>matrix</code> 。如果这个矩阵是托普利茨矩阵，返回 <code>true</code> ；否则，返回 __<code>false</code> _。_</p><p>如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 __<strong>托普利茨矩阵</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,2,3,4],[5,1,2,3],[9,5,1,2]]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>在上述矩阵中, 其对角线为:</p><p>&quot;[9]&quot;, &quot;[5, 5]&quot;, &quot;[1, 1, 1]&quot;, &quot;[2, 2, 2]&quot;, &quot;[3, 3]&quot;, &quot;[4]&quot;。</p><p>各条对角线上的所有元素均相同, 因此答案是 True 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> matrix = [[1,2],[2,2]]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>对角线 &quot;[1, 2]&quot; 上的元素不同。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 20</code></li><li><code>0 &lt;= matrix[i][j] &lt;= 99</code></li></ul><p><strong>进阶：</strong></p><ul><li>如果矩阵存储在磁盘上，并且内存有限，以至于一次最多只能将矩阵的一行加载到内存中，该怎么办？</li><li>如果矩阵太大，以至于一次只能将不完整的一行加载到内存中，该怎么办？</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>一个矩阵是 <strong>托普利茨矩阵</strong> 的条件是：<strong>任意从左上到右下的对角线上的所有元素都相等</strong>。 换句话说，对于矩阵的任意位置 <code>(i, j)</code>，如果其右下方的元素 <code>(i+1, j+1)</code> 存在，则 <code>matrix[i][j] == matrix[i+1][j+1]</code>。</p><hr><h3 id="基础版" tabindex="-1"><a class="header-anchor" href="#基础版" aria-hidden="true">#</a> 基础版</h3><ol><li><p><strong>遍历矩阵</strong>：</p><ul><li>从第一行和第一列开始，遍历所有可能的对角线上的元素。</li><li>检查是否满足 <code>matrix[i][j] == matrix[i+1][j+1]</code>。</li></ul></li><li><p><strong>注意边界条件</strong>：</p><ul><li>如果是矩阵的最后一行或者最后一列，则无需再进行比较。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，遍历矩阵中除最后一行和最后一列的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，原地比较，不使用额外空间。</li></ul><hr><h3 id="进阶版" tabindex="-1"><a class="header-anchor" href="#进阶版" aria-hidden="true">#</a> 进阶版</h3><ol><li><p><strong>行内存加载限制</strong>：</p><ul><li>由于内存限制，一次只能加载矩阵的一行。可以采用以下策略： <ul><li>逐行加载矩阵，保存上一行的内容到一个数组中。</li><li>加载当前行时，比较当前行与上一行相邻的元素是否相等。</li><li>只需存储两行的内容，空间复杂度为 <code>O(n)</code>。</li></ul></li></ul></li><li><p><strong>不完整行内存限制</strong>：</p><ul><li>假设一次只能加载矩阵的一部分，可以使用滑动窗口方法。 <ul><li>对于每次加载的一部分行或列，只记录必要的对角线元素，逐步验证其一致性。</li><li>例如，可以用一个固定长度的数组存储对角线的首元素，逐步更新和比较。</li></ul></li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，遍历矩阵中除最后一行和最后一列的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，只需存储一行的内容。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',39),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isToeplitzMatrix"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" m "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" n "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" m "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" n "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!=="),t(" matrix"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),z=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"matrix"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("boolean"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"isToeplitzMatrix"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"matrix"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prevRow "),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" matrix"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" j "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" j "),n("span",{class:"token operator"},"<"),t(" matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("j"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"!=="),t(" prevRow"),n("span",{class:"token punctuation"},"["),t("j "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		prevRow `),n("span",{class:"token operator"},"="),t(" matrix"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"422",-1),C=n("td",{style:{"text-align":"left"}},"有效的单词方块 🔒",-1),I=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"矩阵",-1),R=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/valid-word-square",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/valid-word-square",target:"_blank",rel:"noopener noreferrer"};function W(F,G){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon"),r=l("CodeTabs");return d(),k("div",null,[b,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/array.html"},{default:a(()=>[x]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[_]),_:1}),t("  🔗 "),n("a",f,[v,s(o)]),t(),n("a",y,[q,s(o)])]),w,s(r,{id:"329",data:[{id:"基础版"},{id:"进阶版"}]},{title0:a(({value:c,isActive:i})=>[t("基础版")]),title1:a(({value:c,isActive:i})=>[t("进阶版")]),tab0:a(({value:c,isActive:i})=>[j]),tab1:a(({value:c,isActive:i})=>[z]),_:1}),T,m(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[O,C,I,n("td",A,[s(e,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),t(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[N]),_:1})]),R,n("td",V,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",M,[t("🔗"),s(o)])])])])])])}const D=u(g,[["render",W],["__file","0766.html.vue"]]);export{D as default};

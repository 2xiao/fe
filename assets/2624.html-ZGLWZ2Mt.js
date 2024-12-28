import{_ as u,r as o,o as d,c as k,a as n,b as s,d as t,w as a,f as m,e as h}from"./app-fEpXkbSw.js";const b={},w=n("h1",{id:"_2624-蜗牛排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2624-蜗牛排序","aria-hidden":"true"},"#"),s(" 2624. 蜗牛排序")],-1),_={href:"https://leetcode.cn/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>snail(rowsCount, colsCount)</code> method that transforms the 1D array into a 2D array organised in the pattern known as <strong>snail traversal order</strong>. Invalid input values should output an empty array. If <code>rowsCount * colsCount !== nums.length</code>, the input is considered invalid.</p><p><strong>Snail traversal order</strong> starts at the top left cell with the first value of the current array. It then moves through the entire first column from top to bottom, followed by moving to the next column on the right and traversing it from bottom to top. This pattern continues, alternating the direction of traversal with each column, until the entire current array is covered. For example, when given the input array <code>[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]</code> with <code>rowsCount = 5</code> and <code>colsCount = 4</code>, the desired output matrix is shown below. Note that iterating the matrix following the arrows corresponds to the order of numbers in the original array.</p><p>![Traversal Diagram](https://assets.leetcode.com/uploads/2023/04/10/screen- shot-2023-04-10-at-100006-pm.png)</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>nums = [19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]</p><p>rowsCount = 5</p><p>colsCount = 4</p><p>Output:</p><p>[</p><p>[19,17,16,15],</p><p>[10,1,14,4],</p><p>[3,2,12,20],</p><p>[7,5,18,11],</p><p>[9,8,6,13]</p><p>]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>nums = [1,2,3,4]</p><p>rowsCount = 1</p><p>colsCount = 4</p><p>Output: [[1, 2, 3, 4]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>nums = [1,3]</p><p>rowsCount = 2</p><p>colsCount = 2</p><p>Output: []</p><p>Explanation: 2 multiplied by 2 is 4, and the original array [1,3] has a length of 2; therefore, the input is invalid.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 250</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>1 &lt;= rowsCount &lt;= 250</code></li><li><code>1 &lt;= colsCount &lt;= 250</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一段代码为所有数组实现 <code>snail(rowsCount，colsCount)</code> 方法，该方法将 1D 数组转换为以蜗牛排序的模式的 2D 数组。无效的输入值应该输出一个空数组。当 <code>rowsCount * colsCount !==``nums.length</code> 时。这个输入被认为是无效的。</p><p>蜗牛排序从左上角的单元格开始，从当前数组的第一个值开始。然后，它从上到下遍历第一列，接着移动到右边的下一列，并从下到上遍历它。将这种模式持续下去，每列交替变换遍历方向，直到覆盖整个数组。例如，当给定输入数组 <code>[19, 10, 3, 7, 9, 8, 5, 2, 1, 17, 16, 14, 12, 18, 6, 13, 11, 20, 4, 15]</code> ，当 <code>rowsCount = 5</code> 且 <code>colsCount = 4</code> 时，需要输出矩阵如下图所示。注意，矩阵沿箭头方向对应于原数组中数字的顺序</p><p>![Traversal Diagram](https://assets.leetcode.com/uploads/2023/04/10/screen- shot-2023-04-10-at-100006-pm.png)</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 250</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>1 &lt;= rowsCount &lt;= 250</code></li><li><code>1 &lt;= colsCount &lt;= 250</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一" tabindex="-1"><a class="header-anchor" href="#思路一" aria-hidden="true">#</a> 思路一</h3><ol><li><strong>输入验证</strong>： <ul><li>首先检查 <code>rowsCount * colsCount</code> 是否等于 <code>nums.length</code>，如果不相等，则返回空数组，因为此时无法将 <code>nums</code> 重组成指定行列数的二维数组。</li></ul></li><li><strong>初始化二维数组</strong>： <ul><li>创建一个大小为 <code>rowsCount</code> x <code>colsCount</code> 的空二维数组 <code>res</code>，用于存储最终的结果。</li></ul></li><li><strong>填充数组</strong>： <ul><li>使用一个索引 <code>index</code>，从 0 开始依次取出 <code>nums</code> 中的元素并填充到 <code>res</code> 中。</li><li>遍历 <code>col</code> 列，对于每一列 <code>col</code>，需要判断当前列是自上而下填充还是自下而上填充。 <ul><li>如果 <code>col</code> 是偶数列，则自上而下填充。</li><li>如果 <code>col</code> 是奇数列，则自下而上填充。</li></ul></li></ul></li><li><strong>返回结果</strong>： <ul><li>当所有元素填充完毕后，返回 <code>res</code>，即按蜗牛遍历顺序填充的二维数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n = rowsCount * colsCount</code>，由于遍历了 <code>nums</code> 数组的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组需要 <code>n = rowsCount * colsCount</code> 的存储空间。</li></ul><h3 id="思路二" tabindex="-1"><a class="header-anchor" href="#思路二" aria-hidden="true">#</a> 思路二</h3><p>填充数组的时候，还可以遍历 <code>nums</code> 中的元素，然后根据元素下标 <code>i</code> 来动态计算行和列：</p><ol><li>计算当前元素所在的列数：<code>col = (i / rowsCount) | 0</code>；</li><li>先计算当前元素所在列的奇偶：<code>dirction = col % 2 == 0</code>；</li><li>计算当前元素所在的行数： <ul><li>若列数是奇数（<code>dirction == true</code>），从上往下填充，行数为：<code>row = i % rowsCount</code>；</li><li>若列数是偶数（<code>dirction == false</code>），从下往上填充，行数为：<code>row = rowsCount - 1 - (i % rowsCount)</code>；</li></ul></li><li>将 <code>nums[i]</code> 填充到 <code>res[row][col]</code>；</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n = rowsCount * colsCount</code>，由于遍历了 <code>nums</code> 数组的所有元素。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组需要 <code>n = rowsCount * colsCount</code> 的存储空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"rowsCount"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"colsCount"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Array"),n("span",{class:"token punctuation"},"<"),s("Array"),n("span",{class:"token punctuation"},"<"),s("number"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"snail"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("rowsCount"),n("span",{class:"token punctuation"},","),s(" colsCount")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowsCount "),n("span",{class:"token operator"},"*"),s(" colsCount "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("rowsCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("colsCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" index "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" col "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" col "),n("span",{class:"token operator"},"<"),s(" colsCount"),n("span",{class:"token punctuation"},";"),s(" col"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("col "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 从上到下填充这一列"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" row "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" row "),n("span",{class:"token operator"},"<"),s(" rowsCount"),n("span",{class:"token punctuation"},";"),s(" row"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				res`),n("span",{class:"token punctuation"},"["),s("row"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token comment"},"// 从下到上填充这一列"),s(`
			`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" row "),n("span",{class:"token operator"},"="),s(" rowsCount "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" row "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" row"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				res`),n("span",{class:"token punctuation"},"["),s("row"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"rowsCount"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"colsCount"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Array"),n("span",{class:"token punctuation"},"<"),s("Array"),n("span",{class:"token punctuation"},"<"),s("number"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"."),s("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"snail"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("rowsCount"),n("span",{class:"token punctuation"},","),s(" colsCount")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("rowsCount "),n("span",{class:"token operator"},"*"),s(" colsCount "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("rowsCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("colsCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" rowsCount "),n("span",{class:"token operator"},"*"),s(" colsCount"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" col "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"/"),s(" rowsCount"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" dirction "),n("span",{class:"token operator"},"="),s(" col "),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" row "),n("span",{class:"token operator"},"="),s(" dirction "),n("span",{class:"token operator"},"?"),s(" i "),n("span",{class:"token operator"},"%"),s(" rowsCount "),n("span",{class:"token operator"},":"),s(" rowsCount "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"%"),s(" rowsCount"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
		res`),n("span",{class:"token punctuation"},"["),s("row"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("col"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token doc-comment comment"},`/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */`),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"2619",-1),O=n("td",{style:{"text-align":"left"}},"数组原型对象的最后一个元素",-1),j={style:{"text-align":"center"}},q=n("td",{style:{"text-align":"left"}},null,-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/array-prototype-last",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/array-prototype-last",target:"_blank",rel:"noopener noreferrer"},V=n("td",{style:{"text-align":"center"}},"2631",-1),B=n("td",{style:{"text-align":"left"}},"分组",-1),R={style:{"text-align":"center"}},S=n("td",{style:{"text-align":"left"}},null,-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/group-by",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2774",-1),H=n("td",{style:{"text-align":"left"}},"数组的上界 🔒",-1),J={style:{"text-align":"center"}},K=n("td",{style:{"text-align":"left"}},null,-1),P=n("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"};function Y(Z,$){const p=o("font"),e=o("ExternalLinkIcon"),i=o("CodeTabs"),c=o("RouterLink");return d(),k("div",null,[w,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",_,[y,t(e)]),s(),n("a",g,[v,t(e)])]),f,t(i,{id:"310",data:[{id:"思路一"},{id:"思路二"}]},{title0:a(({value:l,isActive:r})=>[s("思路一")]),title1:a(({value:l,isActive:r})=>[s("思路二")]),tab0:a(({value:l,isActive:r})=>[C]),tab1:a(({value:l,isActive:r})=>[x]),_:1}),A,m(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[E,O,n("td",j,[t(c,{to:"/problem/2619.html"},{default:a(()=>[s("[✓]")]),_:1})]),q,D,n("td",N,[n("a",T,[s("🀄️"),t(e)]),s(),n("a",L,[s("🔗"),t(e)])])]),n("tr",null,[V,B,n("td",R,[t(c,{to:"/problem/2631.html"},{default:a(()=>[s("[✓]")]),_:1})]),S,F,n("td",M,[n("a",W,[s("🀄️"),t(e)]),s(),n("a",z,[s("🔗"),t(e)])])]),n("tr",null,[G,H,n("td",J,[t(c,{to:"/problem/2774.html"},{default:a(()=>[s("[✓]")]),_:1})]),K,P,n("td",Q,[n("a",U,[s("🀄️"),t(e)]),s(),n("a",X,[s("🔗"),t(e)])])])])])])}const sn=u(b,[["render",Y],["__file","2624.html.vue"]]);export{sn as default};

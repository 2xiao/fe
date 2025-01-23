import{_ as u,r as c,o as d,c as k,a as n,b as s,d as t,w as e,f as m,e as h}from"./app-MsFeWfVD.js";const g={},b=n("h1",{id:"_463-岛屿的周长",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_463-岛屿的周长","aria-hidden":"true"},"#"),s(" 463. 岛屿的周长")],-1),_=n("code",null,"深度优先搜索",-1),f=n("code",null,"广度优先搜索",-1),v=n("code",null,"数组",-1),y=n("code",null,"矩阵",-1),w={href:"https://leetcode.cn/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),j={href:"https://leetcode.com/problems/island-perimeter",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),S=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given <code>row x col</code> <code>grid</code> representing a map where <code>grid[i][j] = 1</code> represents land and <code>grid[i][j] = 0</code> represents water.</p><p>Grid cells are connected <strong>horizontally/vertically</strong> (not diagonally). The <code>grid</code> is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).</p><p>The island doesn&#39;t have &quot;lakes&quot;, meaning the water inside isn&#39;t connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don&#39;t exceed 100. Determine the perimeter of the island.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/island.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]</p><p>Output: 16</p><p>Explanation: The perimeter is the 16 yellow stripes in the image above.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: grid = [[1]]</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: grid = [[1,0]]</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>row == grid.length</code></li><li><code>col == grid[i].length</code></li><li><code>1 &lt;= row, col &lt;= 100</code></li><li><code>grid[i][j]</code> is <code>0</code> or <code>1</code>.</li><li>There is exactly one island in <code>grid</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>row x col</code> 的二维网格地图 <code>grid</code> ，其中：<code>grid[i][j] = 1</code> 表示陆地， <code>grid[i][j] = 0</code> 表示水域。</p><p>网格中的格子 <strong>水平和垂直</strong> 方向相连（对角线方向不相连）。整个网格被水完全包围，但其中恰好有一个岛屿（或者说，一个或多个表示陆地的格子相连组成的岛屿）。</p><p>岛屿中没有“湖”（“湖” 指水域在岛屿内部且不和岛屿周围的水相连）。格子是边长为 1 的正方形。网格为长方形，且宽度和高度均不超过 100 。计算这个岛屿的周长。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/10/12/island.png)</p><blockquote><p><strong>输入：</strong> grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]</p><p><strong>输出：</strong> 16</p><p><strong>解释：</strong> 它的周长是上面图片中的 16 个黄色的边</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> grid = [[1]]</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> grid = [[1,0]]</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>提示：</strong></p><ul><li><code>row == grid.length</code></li><li><code>col == grid[i].length</code></li><li><code>1 &lt;= row, col &lt;= 100</code></li><li><code>grid[i][j]</code> 为 <code>0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-遍历矩阵" tabindex="-1"><a class="header-anchor" href="#思路一-遍历矩阵" aria-hidden="true">#</a> 思路一：遍历矩阵</h3><p>要计算岛屿的<strong>周长</strong>，可以遍历整个网格，对于每个陆地格子 <code>grid[i][j] == 1</code>，检查其<strong>四个相邻方向</strong>的格子：</p><ol><li>如果相邻的格子是<strong>水域</strong>或超出网格范围，则当前格子的周长贡献增加 <code>1</code>。</li><li>如果相邻的格子是陆地，则不增加贡献。</li></ol><p>通过遍历整个网格并按照上述规则计算周长，即可得到最终结果。</p><ol><li><strong>初始化</strong> <code>perimeter</code> 变量用于存储周长。</li><li>遍历整个网格： <ul><li>遇到 <code>grid[i][j] == 1</code> 时，检查当前格子的<strong>四个方向</strong>（上、下、左、右）。</li><li>如果某个方向出界或是水域，则 <code>perimeter</code> 加 <code>1</code>。</li></ul></li><li>遍历结束，返回 <code>perimeter</code>。</li></ol><h3 id="时间复杂度分析" tabindex="-1"><a class="header-anchor" href="#时间复杂度分析" aria-hidden="true">#</a> 时间复杂度分析</h3><ul><li><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是网格的行数和列数，因为需要遍历整个网格。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了输入网格，没有使用额外的空间。</li></ul><hr><h3 id="思路二-深度优先搜索-dfs" tabindex="-1"><a class="header-anchor" href="#思路二-深度优先搜索-dfs" aria-hidden="true">#</a> 思路二：深度优先搜索 (DFS)</h3><p>由于网格中只有单个连通岛屿，所以可以通过 <strong>DFS（深度优先搜索）</strong> 或 <strong>BFS（广度优先搜索）</strong> 来遍历岛屿，而不是简单的网格遍历，以减少不必要的网格遍历次数。</p><ol><li><p><strong><code>dfs</code> 函数</strong>：</p><ul><li>如果当前格子越界或是水域，周长贡献 <code>1</code>。</li><li>如果当前格子已访问过（标记为 <code>-1</code>），则不贡献周长，返回 <code>0</code>。</li><li>将当前格子标记为已访问。</li><li>递归地对四个相邻的格子进行深度优先搜索，将返回的贡献周长累加。</li></ul></li><li><p><strong>遍历网格</strong>：</p><ul><li>遍历整个网格，找到第一个陆地格子 <code>grid[i][j] === 1</code>，从该位置开始执行 DFS。</li><li>一旦找到一个陆地格子并启动 DFS 之后，就可以提前终止网格遍历，因为题目中只有一个岛屿。</li><li>由于岛屿是连通的，DFS 会访问所有的陆地格子，计算出总周长。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是网格的行数和列数，每个陆地格子最多被访问一次。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，栈的最大深度为岛屿中的陆地格子数量。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',41),D=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"grid"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"islandPerimeter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" perimeter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" rows "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" cols "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" rows"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" cols"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// 上"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(" perimeter"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token comment"},"// 下"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"==="),s(" rows "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(" perimeter"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token comment"},"// 左"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(" perimeter"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
				`),n("span",{class:"token comment"},"// 右"),s(`
				`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("j "),n("span",{class:"token operator"},"==="),s(" cols "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"||"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(" perimeter"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" perimeter"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"grid"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"islandPerimeter"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"grid"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" rows "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" cols "),n("span",{class:"token operator"},"="),s(" grid"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" perimeter "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 定义DFS函数"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"dfs"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("i"),n("span",{class:"token punctuation"},","),s(" j")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 边界条件：越界或者遇到水域时，贡献1"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" i "),n("span",{class:"token operator"},">="),s(" rows "),n("span",{class:"token operator"},"||"),s(" j "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"||"),s(" j "),n("span",{class:"token operator"},">="),s(" cols "),n("span",{class:"token operator"},"||"),s(" grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 如果已经访问过，直接返回0"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`

		`),n("span",{class:"token comment"},"// 标记为已访问"),s(`
		grid`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 递归检查四个方向，并累加周长"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 上"),s(`
		count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 下"),s(`
		count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 左"),s(`
		count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 右"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" count"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 遍历网格，找到第一个陆地开始DFS"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" rows"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" j "),n("span",{class:"token operator"},"<"),s(" cols"),n("span",{class:"token punctuation"},";"),s(" j"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("grid"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
				`),n("span",{class:"token comment"},"// 执行DFS并返回周长"),s(`
				`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"dfs"),n("span",{class:"token punctuation"},"("),s("i"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
			`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),s(" 相关题目")],-1),O=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),T=n("td",{style:{"text-align":"center"}},"695",-1),C=n("td",{style:{"text-align":"left"}},"岛屿的最大面积",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"深度优先搜索",-1),V=n("code",null,"广度优先搜索",-1),A=n("code",null,"并查集",-1),B=n("code",null,"2+",-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/max-area-of-island",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"733",-1),H=n("td",{style:{"text-align":"left"}},"图像渲染",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},M=n("code",null,"深度优先搜索",-1),Q=n("code",null,"广度优先搜索",-1),U=n("code",null,"数组",-1),W=n("code",null,"1+",-1),X=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/flood-fill",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/flood-fill",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"1034",-1),tn=n("td",{style:{"text-align":"left"}},"边界着色",-1),en=n("td",{style:{"text-align":"center"}},null,-1),an={style:{"text-align":"left"}},on=n("code",null,"深度优先搜索",-1),cn=n("code",null,"广度优先搜索",-1),ln=n("code",null,"数组",-1),pn=n("code",null,"1+",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/coloring-a-border",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/coloring-a-border",target:"_blank",rel:"noopener noreferrer"};function mn(hn,gn){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),i=c("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟢 "),t(r,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[_]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[f]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[v]),_:1}),s(),t(a,{to:"/tag/matrix.html"},{default:e(()=>[y]),_:1}),s("  🔗 "),n("a",w,[x,t(o)]),s(),n("a",j,[q,t(o)])]),S,t(i,{id:"307",data:[{id:"遍历矩阵"},{id:"深度优先搜索 (DFS)"}]},{title0:e(({value:l,isActive:p})=>[s("遍历矩阵")]),title1:e(({value:l,isActive:p})=>[s("深度优先搜索 (DFS)")]),tab0:e(({value:l,isActive:p})=>[D]),tab1:e(({value:l,isActive:p})=>[F]),_:1}),E,m(" prettier-ignore "),n("table",null,[O,n("tbody",null,[n("tr",null,[T,C,n("td",I,[t(a,{to:"/problem/0695.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",L,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[V]),_:1}),s(),t(a,{to:"/tag/union-find.html"},{default:e(()=>[A]),_:1}),s(),B]),z,n("td",P,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",G,[s("🔗"),t(o)])])]),n("tr",null,[Y,H,n("td",J,[t(a,{to:"/problem/0733.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",K,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[Q]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[U]),_:1}),s(),W]),X,n("td",Z,[n("a",$,[s("🀄️"),t(o)]),s(),n("a",nn,[s("🔗"),t(o)])])]),n("tr",null,[sn,tn,en,n("td",an,[t(a,{to:"/tag/depth-first-search.html"},{default:e(()=>[on]),_:1}),s(),t(a,{to:"/tag/breadth-first-search.html"},{default:e(()=>[cn]),_:1}),s(),t(a,{to:"/tag/array.html"},{default:e(()=>[ln]),_:1}),s(),pn]),rn,n("td",un,[n("a",dn,[s("🀄️"),t(o)]),s(),n("a",kn,[s("🔗"),t(o)])])])])])])}const _n=u(g,[["render",mn],["__file","0463.html.vue"]]);export{_n as default};

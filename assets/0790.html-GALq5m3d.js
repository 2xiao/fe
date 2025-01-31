import{_ as d,r as o,o as u,c as k,a as n,b as s,d as e,w as a,e as m}from"./app-MkGfDfkx.js";const b="/leetcode-js/assets/790-XJ0gDZXd.png",g={},v=n("h1",{id:"_790-多米诺和托米诺平铺",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_790-多米诺和托米诺平铺","aria-hidden":"true"},"#"),s(" 790. 多米诺和托米诺平铺")],-1),h=n("code",null,"动态规划",-1),f={href:"https://leetcode.cn/problems/domino-and-tromino-tiling",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/domino-and-tromino-tiling",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have two types of tiles: a <code>2 x 1</code> domino shape and a tromino shape. You may rotate these shapes.</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Given an integer n, return <em>the number of ways to tile an</em> <code>2 x n</code> <em>board</em>. Since the answer may be very large, return it <strong>modulo</strong> <code>109 + 7</code>.</p><p>In a tiling, every square must be covered by a tile. Two tilings are different if and only if there are two 4-directionally adjacent cells on the board such that exactly one of the tilings has both squares occupied by a tile.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 3</p><p>Output: 5</p><p>Explanation: The five different ways are show above.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有两种形状的瓷砖：一种是 <code>2 x 1</code> 的多米诺形，另一种是形如 &quot;L&quot; 的托米诺形。两种形状都可以旋转。</p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>给定整数 n ，返回可以平铺 <code>2 x n</code> 的面板的方法的数量。<strong>返回对</strong> <code>109 + 7</code> <strong>取模</strong> 的值。</p><p>平铺指的是每个正方形都必须有瓷砖覆盖。两个平铺不同，当且仅当面板上有四个方向上的相邻单元中的两个，使得恰好有一个平铺有一个瓷砖占据两个正方形。</p><p><strong>示例 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/07/15/lc-domino1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入:</strong> n = 3</p><p><strong>输出:</strong> 5</p><p><strong>解释:</strong> 五种不同的方法如上所示。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> n = 1</p><p><strong>输出:</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题的核心在于如何利用动态规划来枚举所有可能的铺法。</p><p>如图所示：</p><figure><img src="'+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li><code>dp[0] = 1</code>：空棋盘有一种铺法。</li><li><code>dp[1] = 1</code>：一个 <code>2 * 1</code> 的棋盘只能用一个竖直的多米诺骨牌铺满。</li><li><code>dp[2] = 2</code>：两个竖直多米诺骨牌或两个水平多米诺骨牌。</li><li><code>dp[3] = 5</code>： <ul><li><code>dp[3] = dp[2] + dp[1] + 2 * dp[0]</code></li><li>在 <code>dp[2]</code> 后面加一个竖直的多米诺骨牌：<code>2</code></li><li>在 <code>dp[1]</code> 后面加两个水平的多米诺骨牌：<code>1</code></li><li>在 <code>dp[0]</code> 后面加两个 L 形托米诺骨牌：<code>2</code></li></ul></li><li><code>dp[4] = 11</code>： <ul><li><code>dp[4] = dp[3] + dp[2] + 2 * dp[1] + 2 * dp[0]</code></li><li>在 <code>dp[3]</code> 后面加一个竖直的多米诺骨牌：<code>5</code></li><li>在 <code>dp[2]</code> 后面加两个水平的多米诺骨牌：<code>2</code></li><li>在 <code>dp[1]</code> 后面加两个 L 形托米诺骨牌：<code>2</code></li><li>在 <code>dp[0]</code> 后面加一个水平的多米诺骨牌和两个 L 形托米诺骨牌：<code>2</code></li></ul></li><li><code>dp[5] = 24</code>： <ul><li><code>dp[5] = dp[4] + dp[3] + 2 * dp[2] + 2 * dp[1] + 2 * dp[0]</code></li><li>在 <code>dp[4]</code> 后面加一个竖直的多米诺骨牌：<code>11</code></li><li>在 <code>dp[3]</code> 后面加两个水平的多米诺骨牌：<code>5</code></li><li>在 <code>dp[2]</code> 后面加两个 L 形托米诺骨牌：<code>4</code></li><li>在 <code>dp[1]</code> 后面加一个水平的多米诺骨牌和两个 L 形托米诺骨牌：<code>2</code></li><li>在 <code>dp[0]</code> 后面加两个水平的多米诺骨牌和两个 L 形托米诺骨牌：<code>2</code></li></ul></li></ul><p>由此可以得到递推关系：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dp[n] = dp[n-1] + dp[n-2] +  2 * (dp[n-3] + ... + d[0])
      = dp[n-1] + dp[n-2] + dp[n-3] + dp[n-3] + 2 * (dp[n-4] + ... + d[0])
      = dp[n-1] + dp[n-3] + (dp[n-2] + dp[n-3] + 2 * (dp[n-4] + ... + d[0]))
      = dp[n-1] + dp[n-3] + dp[n-1]
      = 2 * dp[n-1] + dp[n-3]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，动态规划需要遍历 <code>n</code>。</p></li><li><p><strong>空间复杂度</strong>：</p><ul><li>常规 DP：需要存储 <code>n + 1</code> 个状态，空间复杂度为 <code>O(n)</code>。</li><li>优化 DP：只需要三个变量，空间复杂度为 <code>O(1)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,34),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"numTilings"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"MOD"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1e9"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" dp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	dp`),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		dp`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" dp"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token constant"},"MOD"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" dp"),n("span",{class:"token punctuation"},"["),s("n"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"n"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"numTilings"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token constant"},"MOD"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1e9"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"7"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("n "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" dp0 "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
		dp1 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(`
		dp2 `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<="),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" curr "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),s(),n("span",{class:"token operator"},"*"),s(" dp2 "),n("span",{class:"token operator"},"+"),s(" dp0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token constant"},"MOD"),n("span",{class:"token punctuation"},";"),s(`
		dp0 `),n("span",{class:"token operator"},"="),s(" dp1"),n("span",{class:"token punctuation"},";"),s(`
		dp1 `),n("span",{class:"token operator"},"="),s(" dp2"),n("span",{class:"token punctuation"},";"),s(`
		dp2 `),n("span",{class:"token operator"},"="),s(" curr"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" dp2"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(O,D){const p=o("font"),i=o("RouterLink"),l=o("ExternalLinkIcon"),r=o("CodeTabs");return u(),k("div",null,[v,n("p",null,[s("🟠 "),e(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),e(i,{to:"/tag/dynamic-programming.html"},{default:a(()=>[h]),_:1}),s("  🔗 "),n("a",f,[_,e(l)]),s(),n("a",y,[w,e(l)])]),x,e(r,{id:"271",data:[{id:"动态规划"},{id:"动态规划（空间优化）"}]},{title0:a(({value:t,isActive:c})=>[s("动态规划")]),title1:a(({value:t,isActive:c})=>[s("动态规划（空间优化）")]),tab0:a(({value:t,isActive:c})=>[j]),tab1:a(({value:t,isActive:c})=>[q]),_:1})])}const C=d(g,[["render",L],["__file","0790.html.vue"]]);export{C as default};

import{_ as u,r as c,o as d,c as _,a as t,b as e,d as n,w as s,f as h,e as m}from"./app-Ob52y8QZ.js";const k={},g=t("h1",{id:"_198-打家劫舍",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_198-打家劫舍","aria-hidden":"true"},"#"),e(" 198. 打家劫舍")],-1),f=t("code",null,"数组",-1),b=t("code",null,"动态规划",-1),y={href:"https://leetcode.cn/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/house-robber",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),M=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security systems connected and <strong>it will automatically contact the police if two adjacent houses were broken into on the same night</strong>.</p><p>Given an integer array <code>nums</code> representing the amount of money of each house, return <em>the maximum amount of money you can rob tonight <strong>without alerting the police</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: 4</p><p>Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).</p><p>Total amount you can rob = 1 + 3 = 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,7,9,3,1]</p><p>Output: 12</p><p>Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).</p><p>Total amount you can rob = 2 + 9 + 1 = 12.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 400</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，<strong>如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警</strong>。</p><p>给定一个代表每个房屋存放金额的非负整数数组，计算你 <strong>不触动警报装置的情况下</strong> ，一夜之内能够偷窃到的最高金额。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：[1,2,3,1]</p><p>输出：4</p><p>解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。</p><p>偷窃到的最高金额 = 1 + 3 = 4 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：[2,7,9,3,1]</p><p>输出：12</p><p>解释：偷窃 1 号房屋 (金额 = 2), 偷窃 3 号房屋 (金额 = 9)，接着偷窃 5 号房屋 (金额 = 1)。</p><p>偷窃到的最高金额 = 2 + 9 + 1 = 12 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的动态规划问题。可以使用动态规划来解决，其中的关键是定义状态和状态转移方程。</p><ol start="2"><li><p><strong>状态定义</strong>：定义一个一维数组 <code>dp</code>，其中 <code>dp[i]</code> 表示在前 <code>i</code> 个房屋中能够打劫到的最大金额。</p></li><li><p><strong>状态转移方程</strong>：对于每个房屋，有两个选择：打劫或者不打劫。因此，状态转移方程为：<code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code></p></li><li><p><strong>初始化</strong>：初始化前两个状态，即 <code>dp[0] = nums[0]</code> 和 <code>dp[1] = Math.max(nums[0], nums[1])</code>。</p></li><li><p><strong>遍历计算</strong>：从第三个房屋开始遍历，根据状态转移方程更新每个状态。</p></li><li><p><strong>结果</strong>：最终答案为 <code>dp[n - 1]</code>，表示在所有房屋中能够打劫到的最大金额。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历整个数组。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存储中间状态。可以优化为 <code>O(1)</code>，只保留前两个状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',22),q=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"rob"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("n "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("n "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" dp "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"new"),e(),t("span",{class:"token class-name"},"Array"),t("span",{class:"token punctuation"},"("),e("n"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token comment"},"// 初始化前两个状态"),e(`
	dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	dp`),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`

	`),t("span",{class:"token comment"},"// 遍历计算"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		dp`),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("dp"),t("span",{class:"token punctuation"},"["),e("i "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},"]"),e(),t("span",{class:"token operator"},"+"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" dp"),t("span",{class:"token punctuation"},"["),e("i "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`

	`),t("span",{class:"token comment"},"// 返回结果"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" dp"),t("span",{class:"token punctuation"},"["),e("n "),t("span",{class:"token operator"},"-"),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[e(`/**
 * `),t("span",{class:"token keyword"},"@param"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),e(),t("span",{class:"token parameter"},"nums"),e(`
 * `),t("span",{class:"token keyword"},"@return"),e(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),e("number"),t("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),t("span",{class:"token keyword"},"var"),e(),t("span",{class:"token function-variable function"},"rob"),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token keyword"},"function"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"nums"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
	`),t("span",{class:"token keyword"},"const"),e(" n "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"."),e("length"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("n "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"if"),e(),t("span",{class:"token punctuation"},"("),e("n "),t("span",{class:"token operator"},"=="),e(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token keyword"},"return"),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" first "),t("span",{class:"token operator"},"="),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"let"),e(" second "),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" nums"),t("span",{class:"token punctuation"},"["),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token keyword"},"for"),e(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),e(" i "),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"2"),t("span",{class:"token punctuation"},";"),e(" i "),t("span",{class:"token operator"},"<"),e(" n"),t("span",{class:"token punctuation"},";"),e(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),e(),t("span",{class:"token punctuation"},"{"),e(`
		`),t("span",{class:"token keyword"},"let"),e(" temp "),t("span",{class:"token operator"},"="),e(" Math"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"max"),t("span",{class:"token punctuation"},"("),e("first "),t("span",{class:"token operator"},"+"),e(" nums"),t("span",{class:"token punctuation"},"["),e("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},","),e(" second"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),e(`
		first `),t("span",{class:"token operator"},"="),e(" second"),t("span",{class:"token punctuation"},";"),e(`
		second `),t("span",{class:"token operator"},"="),e(" temp"),t("span",{class:"token punctuation"},";"),e(`
	`),t("span",{class:"token punctuation"},"}"),e(`
	`),t("span",{class:"token keyword"},"return"),e(" second"),t("span",{class:"token punctuation"},";"),e(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),e(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),j=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),C=t("td",{style:{"text-align":"center"}},"152",-1),V=t("td",{style:{"text-align":"left"}},"乘积最大子数组",-1),A={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"数组",-1),O=t("code",null,"动态规划",-1),T={style:{"text-align":"left"}},R={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"213",-1),S=t("td",{style:{"text-align":"left"}},"打家劫舍 II",-1),Y=t("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},D=t("code",null,"数组",-1),F=t("code",null,"动态规划",-1),J={style:{"text-align":"left"}},K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/house-robber-ii",target:"_blank",rel:"noopener noreferrer"},U=t("td",{style:{"text-align":"center"}},"256",-1),W=t("td",{style:{"text-align":"left"}},"粉刷房子 🔒",-1),X=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"数组",-1),tt=t("code",null,"动态规划",-1),et={style:{"text-align":"left"}},nt={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/paint-house",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/paint-house",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"276",-1),lt=t("td",{style:{"text-align":"left"}},"栅栏涂色 🔒",-1),ct=t("td",{style:{"text-align":"center"}},null,-1),rt={style:{"text-align":"left"}},it=t("code",null,"动态规划",-1),pt={style:{"text-align":"left"}},ut={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/paint-fence",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/paint-fence",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"337",-1),mt=t("td",{style:{"text-align":"left"}},"打家劫舍 III",-1),kt=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},ft=t("code",null,"树",-1),bt=t("code",null,"深度优先搜索",-1),yt=t("code",null,"动态规划",-1),xt=t("code",null,"1+",-1),vt={style:{"text-align":"left"}},wt={style:{"text-align":"center"}},Mt={href:"https://leetcode.cn/problems/house-robber-iii",target:"_blank",rel:"noopener noreferrer"},qt={href:"https://leetcode.com/problems/house-robber-iii",target:"_blank",rel:"noopener noreferrer"},It=t("td",{style:{"text-align":"center"}},"600",-1),jt=t("td",{style:{"text-align":"left"}},"不含连续1的非负整数",-1),Et=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Vt=t("code",null,"动态规划",-1),At={style:{"text-align":"left"}},Lt={style:{"text-align":"center"}},Nt={href:"https://leetcode.cn/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/non-negative-integers-without-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"656",-1),Rt=t("td",{style:{"text-align":"left"}},"成本最小路径 🔒",-1),Bt=t("td",{style:{"text-align":"center"}},null,-1),Ht={style:{"text-align":"left"}},Gt=t("code",null,"数组",-1),St=t("code",null,"动态规划",-1),Yt={style:{"text-align":"left"}},zt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/coin-path",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/coin-path",target:"_blank",rel:"noopener noreferrer"},Jt=t("td",{style:{"text-align":"center"}},"740",-1),Kt=t("td",{style:{"text-align":"left"}},"删除并获得点数",-1),Pt=t("td",{style:{"text-align":"center"}},null,-1),Qt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Wt=t("code",null,"哈希表",-1),Xt=t("code",null,"动态规划",-1),Zt={style:{"text-align":"left"}},$t={style:{"text-align":"center"}},te={href:"https://leetcode.cn/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},ee={href:"https://leetcode.com/problems/delete-and-earn",target:"_blank",rel:"noopener noreferrer"},ne=t("td",{style:{"text-align":"center"}},"2140",-1),se=t("td",{style:{"text-align":"left"}},"解决智力问题",-1),oe=t("td",{style:{"text-align":"center"}},null,-1),ae={style:{"text-align":"left"}},le=t("code",null,"数组",-1),ce=t("code",null,"动态规划",-1),re={style:{"text-align":"left"}},ie={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/solving-questions-with-brainpower",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://leetcode.com/problems/solving-questions-with-brainpower",target:"_blank",rel:"noopener noreferrer"},de=t("td",{style:{"text-align":"center"}},"2320",-1),_e=t("td",{style:{"text-align":"left"}},"统计放置房子的方式数",-1),he=t("td",{style:{"text-align":"center"}},null,-1),me={style:{"text-align":"left"}},ke=t("code",null,"动态规划",-1),ge={style:{"text-align":"left"}},fe={style:{"text-align":"center"}},be={href:"https://leetcode.cn/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://leetcode.com/problems/count-number-of-ways-to-place-houses",target:"_blank",rel:"noopener noreferrer"},xe=t("td",{style:{"text-align":"center"}},"2560",-1),ve=t("td",{style:{"text-align":"left"}},"打家劫舍 IV",-1),we=t("td",{style:{"text-align":"center"}},null,-1),Me={style:{"text-align":"left"}},qe=t("code",null,"数组",-1),Ie=t("code",null,"二分查找",-1),je={style:{"text-align":"left"}},Ee={style:{"text-align":"center"}},Ce={href:"https://leetcode.cn/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},Ve={href:"https://leetcode.com/problems/house-robber-iv",target:"_blank",rel:"noopener noreferrer"},Ae=t("td",{style:{"text-align":"center"}},"2611",-1),Le=t("td",{style:{"text-align":"left"}},"老鼠和奶酪",-1),Ne=t("td",{style:{"text-align":"center"}},null,-1),Oe={style:{"text-align":"left"}},Te=t("code",null,"贪心",-1),Re=t("code",null,"数组",-1),Be=t("code",null,"排序",-1),He=t("code",null,"1+",-1),Ge={style:{"text-align":"left"}},Se={style:{"text-align":"center"}},Ye={href:"https://leetcode.cn/problems/mice-and-cheese",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://leetcode.com/problems/mice-and-cheese",target:"_blank",rel:"noopener noreferrer"},De=t("td",{style:{"text-align":"center"}},"2789",-1),Fe=t("td",{style:{"text-align":"left"}},"合并后数组中的最大元素",-1),Je=t("td",{style:{"text-align":"center"}},null,-1),Ke={style:{"text-align":"left"}},Pe=t("code",null,"贪心",-1),Qe=t("code",null,"数组",-1),Ue={style:{"text-align":"left"}},We={style:{"text-align":"center"}},Xe={href:"https://leetcode.cn/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"},Ze={href:"https://leetcode.com/problems/largest-element-in-an-array-after-merge-operations",target:"_blank",rel:"noopener noreferrer"};function $e(tn,en){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),_("div",null,[g,t("p",null,[e("🟠 "),n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),t("a",y,[x,n(a)]),e(),t("a",v,[w,n(a)])]),M,n(p,{id:"158",data:[{id:"动态规划"},{id:"动态规划-压缩状态"}]},{title0:s(({value:r,isActive:i})=>[e("动态规划")]),title1:s(({value:r,isActive:i})=>[e("动态规划-压缩状态")]),tab0:s(({value:r,isActive:i})=>[q]),tab1:s(({value:r,isActive:i})=>[I]),_:1}),j,h(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[C,V,t("td",A,[n(o,{to:"/problem/0152.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",L,[n(o,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[O]),_:1})]),t("td",T,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",R,[t("a",B,[e("🀄️"),n(a)]),e(),t("a",H,[e("🔗"),n(a)])])]),t("tr",null,[G,S,Y,t("td",z,[n(o,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[F]),_:1})]),t("td",J,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",K,[t("a",P,[e("🀄️"),n(a)]),e(),t("a",Q,[e("🔗"),n(a)])])]),t("tr",null,[U,W,X,t("td",Z,[n(o,{to:"/tag/array.html"},{default:s(()=>[$]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[tt]),_:1})]),t("td",et,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",nt,[t("a",st,[e("🀄️"),n(a)]),e(),t("a",ot,[e("🔗"),n(a)])])]),t("tr",null,[at,lt,ct,t("td",rt,[n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[it]),_:1})]),t("td",pt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",ut,[t("a",dt,[e("🀄️"),n(a)]),e(),t("a",_t,[e("🔗"),n(a)])])]),t("tr",null,[ht,mt,kt,t("td",gt,[n(o,{to:"/tag/tree.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[yt]),_:1}),e(),xt]),t("td",vt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",wt,[t("a",Mt,[e("🀄️"),n(a)]),e(),t("a",qt,[e("🔗"),n(a)])])]),t("tr",null,[It,jt,Et,t("td",Ct,[n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Vt]),_:1})]),t("td",At,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})]),t("td",Lt,[t("a",Nt,[e("🀄️"),n(a)]),e(),t("a",Ot,[e("🔗"),n(a)])])]),t("tr",null,[Tt,Rt,Bt,t("td",Ht,[n(o,{to:"/tag/array.html"},{default:s(()=>[Gt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[St]),_:1})]),t("td",Yt,[n(l,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})]),t("td",zt,[t("a",Dt,[e("🀄️"),n(a)]),e(),t("a",Ft,[e("🔗"),n(a)])])]),t("tr",null,[Jt,Kt,Pt,t("td",Qt,[n(o,{to:"/tag/array.html"},{default:s(()=>[Ut]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Wt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Xt]),_:1})]),t("td",Zt,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",$t,[t("a",te,[e("🀄️"),n(a)]),e(),t("a",ee,[e("🔗"),n(a)])])]),t("tr",null,[ne,se,oe,t("td",ae,[n(o,{to:"/tag/array.html"},{default:s(()=>[le]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ce]),_:1})]),t("td",re,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",ie,[t("a",pe,[e("🀄️"),n(a)]),e(),t("a",ue,[e("🔗"),n(a)])])]),t("tr",null,[de,_e,he,t("td",me,[n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ke]),_:1})]),t("td",ge,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",fe,[t("a",be,[e("🀄️"),n(a)]),e(),t("a",ye,[e("🔗"),n(a)])])]),t("tr",null,[xe,ve,we,t("td",Me,[n(o,{to:"/tag/array.html"},{default:s(()=>[qe]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[Ie]),_:1})]),t("td",je,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",Ee,[t("a",Ce,[e("🀄️"),n(a)]),e(),t("a",Ve,[e("🔗"),n(a)])])]),t("tr",null,[Ae,Le,Ne,t("td",Oe,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Te]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Re]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[Be]),_:1}),e(),He]),t("td",Ge,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",Se,[t("a",Ye,[e("🀄️"),n(a)]),e(),t("a",ze,[e("🔗"),n(a)])])]),t("tr",null,[De,Fe,Je,t("td",Ke,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[Pe]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Qe]),_:1})]),t("td",Ue,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),t("td",We,[t("a",Xe,[e("🀄️"),n(a)]),e(),t("a",Ze,[e("🔗"),n(a)])])])])])])}const sn=u(k,[["render",$e],["__file","0198.html.vue"]]);export{sn as default};

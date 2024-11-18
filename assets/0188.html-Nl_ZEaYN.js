import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-Ob52y8QZ.js";const k={},m=n("h1",{id:"_188-买卖股票的最佳时机-iv",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_188-买卖股票的最佳时机-iv","aria-hidden":"true"},"#"),s(" 188. 买卖股票的最佳时机 IV")],-1),h=n("code",null,"数组",-1),_=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>ith</code> day, and an integer <code>k</code>.</p><p>Find the maximum profit you can achieve. You may complete at most <code>k</code> transactions: i.e. you may buy at most <code>k</code> times and sell at most <code>k</code> times.</p><p><strong>Note:</strong> You may not engage in multiple transactions simultaneously (i.e., you must sell the stock before you buy again).</p><p><strong>Example 1:</strong></p><blockquote><p>Input: k = 2, prices = [2,4,1]</p><p>Output: 2</p><p>Explanation: Buy on day 1 (price = 2) and sell on day 2 (price = 4), profit = 4-2 = 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: k = 2, prices = [3,2,6,5,0,3]</p><p>Output: 7</p><p>Explanation: Buy on day 2 (price = 2) and sell on day 3 (price = 6), profit = 6-2 = 4. Then buy on day 5 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= 100</code></li><li><code>1 &lt;= prices.length &lt;= 1000</code></li><li><code>0 &lt;= prices[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>prices</code> 和一个整数 <code>k</code> ，其中 <code>prices[i]</code> 是某支给定的股票在第 <code>i</code> 天的价格。</p><p>设计一个算法来计算你所能获取的最大利润。你最多可以完成 <code>k</code> 笔交易。也就是说，你最多可以买 <code>k</code> 次，卖 <code>k</code> 次。</p><p><strong>注意</strong>：你不能同时参与多笔交易（你必须在再次购买前出售掉之前的股票）。</p><p><strong>示例 1：</strong></p><blockquote><p>输入：k = 2, prices = [2,4,1]</p><p>输出：2</p><p>解释：在第 1 天 (股票价格 = 2) 的时候买入，在第 2 天 (股票价格 = 4) 的时候卖出，这笔交易所能获得利润 = 4-2 = 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：k = 2, prices = [3,2,6,5,0,3]</p><p>输出：7</p><p>解释：在第 2 天 (股票价格 = 2) 的时候买入，在第 3 天 (股票价格 = 6) 的时候卖出, 这笔交易所能获得利润 = 6-2 = 4 。</p><p>随后，在第 5 天 (股票价格 = 0) 的时候买入，在第 6 天 (股票价格 = 3) 的时候卖出, 这笔交易所能获得利润 = 3-0 = 3 。</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>动态规划：</strong> 定义一个三维数组 <code>dp</code>，其中 <code>dp[i][j][0]</code> 表示截至第 <code>i</code> 天、最多进行 <code>j</code> 次交易、不持有股票时的最大利润， <code>dp[i][j][1]</code> 表示示截至第 <code>i</code> 天、最多进行 <code>j</code> 次交易、持有股票时的最大利润。</li></ol><div class="hint-container info"><p class="hint-container-title">相关信息</p><p>状态 <code>j</code> 的定义并不是「<strong>已进行的交易次数</strong>」，而是「<strong>最大交易次数的上限限制</strong>」。如果确定今天进行一次交易，且要保证截至今天最大交易次数上限为 <code>j</code>，那么昨天的最大交易次数上限必须是 <code>j - 1</code>。</p></div><ol start="2"><li><p><strong>状态转移方程：</strong></p><ul><li><code>dp[i][j][0] = max(dp[i-1][j][0], dp[i-1][j][1] + prices[i])</code>，表示在第 <code>i</code> 天，不持有股票的最大利润等于前一天不持有股票的最大利润或者前一天持有股票的最大利润加上今天卖出的利润的最大值。</li><li><code>dp[i][j][1] = max(dp[i-1][j][1], dp[i-1][j-1][0] - prices[i])</code>，表示在第 <code>i</code> 天，持有股票的最大利润等于前一天持有股票的最大利润或者前一天不持有股票的最大利润减去今天买入的利润的最大值。今天买入的话，前一天的交易次数上限要减一。</li></ul></li><li><p><strong>边界条件：</strong> 第一天（<code>i == 0</code>）时，<code>dp[0][j][0] = 0</code>，<code>dp[0][j][1] = -prices[0]</code>。</p></li><li><p><strong>初始化：</strong> 初始化利润为 0。</p></li><li><p><strong>返回最大利润：</strong> 最后返回 <code>dp[n - 1][k][0]</code>，即最后一天不持有股票的最大利润，因为若最后一天还持有股票没有卖出，收益肯定小于做了一次交易的情况。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n * k)</code>，遍历整个二维数组，其中 n 是股票价格数组的长度。</li><li><strong>空间复杂度</strong>: <code>O(n * k)</code>，使用了一个 <code>2 * k * n</code> 的三维数组来存储中间状态。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxProfit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k<span class="token punctuation">,</span> prices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> prices<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>k <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> k<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
				dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span>prices<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> prices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>k<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"121",-1),w=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机",-1),I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"数组",-1),N=n("code",null,"动态规划",-1),V={style:{"text-align":"left"}},B={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"122",-1),O=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 II",-1),A={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},H=n("code",null,"贪心",-1),R=n("code",null,"数组",-1),T=n("code",null,"动态规划",-1),F={style:{"text-align":"left"}},P={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"123",-1),G=n("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 III",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"动态规划",-1),W={style:{"text-align":"left"}},X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii",target:"_blank",rel:"noopener noreferrer"},nn=n("td",{style:{"text-align":"center"}},"2291",-1),sn=n("td",{style:{"text-align":"left"}},"最大股票收益 🔒",-1),an=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=n("code",null,"数组",-1),on=n("code",null,"动态规划",-1),pn={style:{"text-align":"left"}},cn={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/maximum-profit-from-trading-stocks",target:"_blank",rel:"noopener noreferrer"};function rn(dn,kn){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🔴 "),a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",b,[g,a(o)]),s(),n("a",f,[y,a(o)])]),v,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[j,w,n("td",I,[a(e,{to:"/problem/0121.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[a(e,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[N]),_:1})]),n("td",V,[a(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1})]),n("td",B,[n("a",C,[s("🀄️"),a(o)]),s(),n("a",L,[s("🔗"),a(o)])])]),n("tr",null,[M,O,n("td",A,[a(e,{to:"/problem/0122.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",Y,[a(e,{to:"/tag/greedy.html"},{default:t(()=>[H]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[R]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[T]),_:1})]),n("td",F,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})]),n("td",P,[n("a",S,[s("🀄️"),a(o)]),s(),n("a",z,[s("🔗"),a(o)])])]),n("tr",null,[D,G,n("td",J,[a(e,{to:"/problem/0123.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",K,[a(e,{to:"/tag/array.html"},{default:t(()=>[Q]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[U]),_:1})]),n("td",W,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})]),n("td",X,[n("a",Z,[s("🀄️"),a(o)]),s(),n("a",$,[s("🔗"),a(o)])])]),n("tr",null,[nn,sn,an,n("td",tn,[a(e,{to:"/tag/array.html"},{default:t(()=>[en]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[on]),_:1})]),n("td",pn,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})]),n("td",cn,[n("a",ln,[s("🀄️"),a(o)]),s(),n("a",un,[s("🔗"),a(o)])])])])])])}const hn=l(k,[["render",rn],["__file","0188.html.vue"]]);export{hn as default};

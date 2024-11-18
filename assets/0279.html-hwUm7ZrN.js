import{_ as p,r as c,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-Ob52y8QZ.js";const h={},_=n("h1",{id:"_279-完全平方数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_279-完全平方数","aria-hidden":"true"},"#"),t(" 279. 完全平方数")],-1),k=n("code",null,"广度优先搜索",-1),m=n("code",null,"数学",-1),f=n("code",null,"动态规划",-1),g={href:"https://leetcode.cn/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em>the least number of perfect square numbers that sum to</em> <code>n</code>.</p><p>A <strong>perfect square</strong> is an integer that is the square of an integer; in other words, it is the product of some integer with itself. For example, <code>1</code>, <code>4</code>, <code>9</code>, and <code>16</code> are perfect squares while <code>3</code> and <code>11</code> are not.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 12</p><p>Output: 3</p><p>Explanation: 12 = 4 + 4 + 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 13</p><p>Output: 2</p><p>Explanation: 13 = 4 + 9.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定正整数  n，找到若干个完全平方数（比如  1, 4, 9, 16, ...）使得它们的和等于 n。你需要让组成和的完全平方数的个数最少。给你一个整数 n ，返回和为 n 的完全平方数的 最少数量 。</p><p>完全平方数 是一个整数，其值等于另一个整数的平方；换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>由拉格朗日的四平方定理可得，每个自然数都可以表示为四个整数平方之和。 其中四个数字是整数。四平方和定理证明了任意一个正整数都可以被表示为至多四个正整数的平方和。这给出了本题的答案的上界。</li><li>n 的最少数量完全平方数之和，等于 n 减去任意一个比 n 小的完全平方数的最少数量完全平方数之和，再加一。</li><li><code>dp[i]</code> 表示<code>i</code>的完全平方和的最少数量，<code>dp[i - j * j] + 1</code>表示减去一个完全平方数 j 的完全平方之后的数量加 1 就等于<code>dp[i]</code>，只要在<code>dp[i]</code>, <code>dp[i - j * j] + 1</code>中寻找一个较少的就是最后<code>dp[i]</code>的值。</li><li><code>dp(i) = Math.min(dp[i], dp(i - j * j) + 1)</code></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n* sqrt(n))</code>，<code>n</code> 是输入的整数，需要循环 <code>n</code> 次，每次计算 <code>dp</code> 方程的复杂度 <code>sqrt(n)</code></li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个长度为 <code>n</code> 的辅助数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">square</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span> <span class="token comment">// 最坏情况是每次+1，如dp[3] = 1 + 1 + 1</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">-</span> j <span class="token operator">*</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j <span class="token operator">*</span> j<span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"204",-1),q=n("td",{style:{"text-align":"left"}},"计数质数",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},M=n("code",null,"数组",-1),C=n("code",null,"数学",-1),L=n("code",null,"枚举",-1),N=n("code",null,"1+",-1),V={style:{"text-align":"left"}},O={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"264",-1),F=n("td",{style:{"text-align":"left"}},"丑数 II",-1),G={style:{"text-align":"center"}},S={style:{"text-align":"left"}},T=n("code",null,"哈希表",-1),z=n("code",null,"数学",-1),D=n("code",null,"动态规划",-1),H=n("code",null,"1+",-1),J={style:{"text-align":"left"}},K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2787",-1),W=n("td",{style:{"text-align":"left"}},"将一个数字表示成幂的和的方案数",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"动态规划",-1),$={style:{"text-align":"left"}},nn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/ways-to-express-an-integer-as-sum-of-powers",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/ways-to-express-an-integer-as-sum-of-powers",target:"_blank",rel:"noopener noreferrer"};function sn(an,on){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[_,n("p",null,[t("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",g,[b,e(o)]),t(),n("a",x,[y,e(o)])]),v,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,q,E,n("td",I,[e(a,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[L]),_:1}),t(),N]),n("td",V,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})]),n("td",O,[n("a",B,[t("🀄️"),e(o)]),t(),n("a",A,[t("🔗"),e(o)])])]),n("tr",null,[R,F,n("td",G,[e(a,{to:"/problem/0264.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",S,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[z]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[D]),_:1}),t(),H]),n("td",J,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})]),n("td",K,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])]),n("tr",null,[U,W,X,n("td",Y,[e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Z]),_:1})]),n("td",$,[e(l,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1})]),n("td",nn,[n("a",tn,[t("🀄️"),e(o)]),t(),n("a",en,[t("🔗"),e(o)])])])])])])}const cn=p(h,[["render",sn],["__file","0279.html.vue"]]);export{cn as default};

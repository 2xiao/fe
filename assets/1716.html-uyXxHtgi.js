import{_ as l,r as p,o as r,c as i,a as n,b as e,d as t,w as a,f as d,e as u}from"./app-MkGfDfkx.js";const k={},h=n("h1",{id:"_1716-计算力扣银行的钱",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1716-计算力扣银行的钱","aria-hidden":"true"},"#"),e(" 1716. 计算力扣银行的钱")],-1),m=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/calculate-money-in-leetcode-bank",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/calculate-money-in-leetcode-bank",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Hercy wants to save money for his first car. He puts money in the Leetcode bank <strong>every day</strong>.</p><p>He starts by putting in <code>$1</code> on Monday, the first day. Every day from Tuesday to Sunday, he will put in <code>$1</code> more than the day before. On every subsequent Monday, he will put in <code>$1</code> more than the <strong>previous Monday</strong>.</p><p>Given <code>n</code>, return <em>the total amount of money he will have in the Leetcode bank at the end of the</em><code>nth</code> <em>day.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 4</p><p>Output: 10</p><p>Explanation: After the 4th day, the total is 1 + 2 + 3 + 4 = 10.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 37</p><p>Explanation: After the 10th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37. Notice that on the 2nd Monday, Hercy only puts in $2.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 20</p><p>Output: 96</p><p>Explanation: After the 20th day, the total is (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>Hercy 想要为购买第一辆车存钱。他 <strong>每天</strong> 都往力扣银行里存钱。</p><p>最开始，他在周一的时候存入 <code>1</code> 块钱。从周二到周日，他每天都比前一天多存入 <code>1</code> 块钱。在接下来每一个周一，他都会比 <strong>前一个周一</strong> 多存入 <code>1</code> 块钱。</p><p>给你 <code>n</code> ，请你返回在第 <code>n</code> 天结束的时候他在力扣银行总共存了多少块钱。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong> 第 4 天后，总额为 1 + 2 + 3 + 4 = 10 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 10</p><p><strong>输出：</strong> 37</p><p><strong>解释：</strong> 第 10 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4) = 37 。注意到第二个星期一，Hercy 存入 2 块钱。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 20</p><p><strong>输出：</strong> 96</p><p><strong>解释：</strong> 第 20 天后，总额为 (1 + 2 + 3 + 4 + 5 + 6 + 7) + (2 + 3 + 4 + 5 + 6 + 7 + 8) + (3 + 4 + 5 + 6 + 7 + 8) = 96 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>通过公式直接计算，可以将 <code>n</code> 天分为完整的周数和剩余天数分别计算。</p><ul><li><p><strong>完整周数</strong>：</p><ul><li>完整的 <code>weeks</code> 周内，每周固定的 1 到 7 的存款总和为：<code>28 * weeks</code>（首项为 <code>28</code>）。</li><li>每周递增 1 元 的部分：<code>(7 * (weeks - 1) * weeks) / 2</code></li><li>累计存款公式为：<code>28 * weeks + 7 * (weeks - 1) * weeks / 2</code>。</li></ul></li><li><p><strong>剩余天数</strong>：</p><ul><li>对于 <code>rest</code> 天，起始存款金额为 <code>weeks + 1</code>，每天递增 <code>1</code>。</li><li>累计存款公式为：<code>weeks * rest + (rest + 1) * rest / 2</code>。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，所有计算均为常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，无需额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">totalMoney</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> weeks <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 完整周数</span>
	<span class="token keyword">const</span> rest <span class="token operator">=</span> n <span class="token operator">%</span> <span class="token number">7</span><span class="token punctuation">;</span> <span class="token comment">// 剩余天数</span>

	<span class="token comment">// 计算总存款</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		<span class="token number">28</span> <span class="token operator">*</span> weeks <span class="token operator">+</span> <span class="token comment">// 每周固定的 1 到 7 的存款总和</span>
		<span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">*</span> <span class="token punctuation">(</span>weeks <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> weeks<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token comment">// 每周递增的部分</span>
		<span class="token punctuation">(</span><span class="token punctuation">(</span>rest <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">*</span> rest<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token comment">// 剩余天数的基础部分</span>
		weeks <span class="token operator">*</span> rest <span class="token comment">// 剩余天数递增的部分</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),f=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2591",-1),w=n("td",{style:{"text-align":"left"}},"将钱分给最多的儿童",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},L=n("code",null,"贪心",-1),H=n("code",null,"数学",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/distribute-money-to-maximum-children",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/distribute-money-to-maximum-children",target:"_blank",rel:"noopener noreferrer"};function I(V,$){const c=p("font"),o=p("RouterLink"),s=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/math.html"},{default:a(()=>[m]),_:1}),e("  🔗 "),n("a",g,[b,t(s)]),e(),n("a",_,[y,t(s)])]),v,d(" prettier-ignore "),n("table",null,[f,n("tbody",null,[n("tr",null,[x,w,q,n("td",E,[t(o,{to:"/tag/greedy.html"},{default:a(()=>[L]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:a(()=>[H]),_:1})]),M,n("td",N,[n("a",O,[e("🀄️"),t(s)]),e(),n("a",C,[e("🔗"),t(s)])])])])])])}const A=l(k,[["render",I],["__file","1716.html.vue"]]);export{A as default};

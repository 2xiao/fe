import{_ as l,r as c,o as r,c as p,a as n,b as e,d as t,w as o,f as d,e as i}from"./app-fEpXkbSw.js";const m={},h=n("h1",{id:"_2169-得到-0-的操作数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2169-得到-0-的操作数","aria-hidden":"true"},"#"),e(" 2169. 得到 0 的操作数")],-1),k=n("code",null,"数学",-1),g=n("code",null,"模拟",-1),b={href:"https://leetcode.cn/problems/count-operations-to-obtain-zero",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/count-operations-to-obtain-zero",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two <strong>non-negative</strong> integers <code>num1</code> and <code>num2</code>.</p><p>In one <strong>operation</strong> , if <code>num1 &gt;= num2</code>, you must subtract <code>num2</code> from <code>num1</code>, otherwise subtract <code>num1</code> from <code>num2</code>.</p><ul><li>For example, if <code>num1 = 5</code> and <code>num2 = 4</code>, subtract <code>num2</code> from <code>num1</code>, thus obtaining <code>num1 = 1</code> and <code>num2 = 4</code>. However, if <code>num1 = 4</code> and <code>num2 = 5</code>, after one operation, <code>num1 = 4</code> and <code>num2 = 1</code>.</li></ul><p>Return <em>the <strong>number of operations</strong> required to make either</em> <code>num1 = 0</code> <em>or</em><code>num2 = 0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = 2, num2 = 3</p><p>Output: 3</p><p>Explanation:</p><ul><li>Operation 1: num1 = 2, num2 = 3. Since num1 &lt; num2, we subtract num1 from num2 and get num1 = 2, num2 = 3 - 2 = 1.</li><li>Operation 2: num1 = 2, num2 = 1. Since num1 &gt; num2, we subtract num2 from num1.</li><li>Operation 3: num1 = 1, num2 = 1. Since num1 == num2, we subtract num2 from num1.</li></ul><p>Now num1 = 0 and num2 = 1. Since num1 == 0, we do not need to perform any further operations.</p><p>So the total number of operations required is 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = 10, num2 = 10</p><p>Output: 1</p><p>Explanation:</p><ul><li>Operation 1: num1 = 10, num2 = 10. Since num1 == num2, we subtract num2 from num1 and get num1 = 10 - 10 = 0.</li></ul><p>Now num1 = 0 and num2 = 10. Since num1 == 0, we are done.</p><p>So the total number of operations required is 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= num1, num2 &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个 <strong>非负</strong> 整数 <code>num1</code> 和 <code>num2</code> 。</p><p>每一步 <strong>操作</strong> 中，如果 <code>num1 &gt;= num2</code> ，你必须用 <code>num1</code> 减 <code>num2</code> ；否则，你必须用 <code>num2</code> 减 <code>num1</code> 。</p><ul><li>例如，<code>num1 = 5</code> 且 <code>num2 = 4</code> ，应该用 <code>num1</code> 减 <code>num2</code> ，因此，得到 <code>num1 = 1</code> 和 <code>num2 = 4</code> 。然而，如果 <code>num1 = 4</code>且 <code>num2 = 5</code> ，一步操作后，得到 <code>num1 = 4</code> 和 <code>num2 = 1</code> 。</li></ul><p>返回使 <code>num1 = 0</code> 或 <code>num2 = 0</code> 的 <strong>操作数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num1 = 2, num2 = 3</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><ul><li>操作 1 ：num1 = 2 ，num2 = 3 。由于 num1 &lt; num2 ，num2 减 num1 得到 num1 = 2 ，num2 = 3 - 2 = 1 。</li><li>操作 2 ：num1 = 2 ，num2 = 1 。由于 num1 &gt; num2 ，num1 减 num2 。</li><li>操作 3 ：num1 = 1 ，num2 = 1 。由于 num1 == num2 ，num1 减 num2 。</li></ul><p>此时 num1 = 0 ，num2 = 1 。由于 num1 == 0 ，不需要再执行任何操作。</p><p>所以总操作数是 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num1 = 10, num2 = 10</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><ul><li>操作 1 ：num1 = 10 ，num2 = 10 。由于 num1 == num2 ，num1 减 num2 得到 num1 = 10 - 10 = 0 。</li></ul><p>此时 num1 = 0 ，num2 = 10 。由于 num1 == 0 ，不需要再执行任何操作。</p><p>所以总操作数是 1 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= num1, num2 &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化一个计数器 <code>count</code> 为 0，用于记录操作次数。</li><li>使用一个 <code>while</code> 循环，当 <code>num1</code> 和 <code>num2</code> 都不为 0 时重复操作： <ul><li>如果 <code>num1 &gt;= num2</code>，将 <code>num1</code> 减去 <code>num2</code>。</li><li>否则，将 <code>num2</code> 减去 <code>num1</code>。</li><li>每次操作后，计数器 <code>count</code> 增加 1。</li></ul></li><li>返回最终的操作次数 <code>count</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log(min(num1, num2)))</code>，每次操作中，较大的数字减去较小的数字。这相当于寻找两个数的最大公约数（GCD），类似于辗转相除法。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，没有使用额外的空间，仅使用了常量变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>num1 <span class="token operator">!==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> num2 <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num1 <span class="token operator">&gt;=</span> num2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			num1 <span class="token operator">-=</span> num2<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			num2 <span class="token operator">-=</span> num1<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1342",-1),q=n("td",{style:{"text-align":"left"}},"将数字变成 0 的操作次数",-1),O={style:{"text-align":"center"}},S={style:{"text-align":"left"}},E=n("code",null,"位运算",-1),N=n("code",null,"数学",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/number-of-steps-to-reduce-a-number-to-zero",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero",target:"_blank",rel:"noopener noreferrer"};function z(j,B){const u=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return r(),p("div",null,[h,n("p",null,[e("🟢 "),t(u,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),t(s,{to:"/tag/math.html"},{default:o(()=>[k]),_:1}),e(),t(s,{to:"/tag/simulation.html"},{default:o(()=>[g]),_:1}),e("  🔗 "),n("a",b,[_,t(a)]),e(),n("a",f,[v,t(a)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",O,[t(s,{to:"/problem/1342.html"},{default:o(()=>[e("[✓]")]),_:1})]),n("td",S,[t(s,{to:"/tag/bit-manipulation.html"},{default:o(()=>[E]),_:1}),e(),t(s,{to:"/tag/math.html"},{default:o(()=>[N]),_:1})]),C,n("td",I,[n("a",L,[e("🀄️"),t(a)]),e(),n("a",V,[e("🔗"),t(a)])])])])])])}const D=l(m,[["render",z],["__file","2169.html.vue"]]);export{D as default};

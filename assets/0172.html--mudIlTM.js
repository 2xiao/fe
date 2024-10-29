import{_ as d,r as l,o as r,c as i,a as e,b as n,d as t,w as o,f as p,e as u}from"./app-mXo2sCT-.js";const _={},h={id:"_172-阶乘后的零",tabindex:"-1"},m=e("a",{class:"header-anchor",href:"#_172-阶乘后的零","aria-hidden":"true"},"#",-1),f={href:"https://2xiao.github.io/leetcode-js/problem/0172.html",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"数学",-1),k={href:"https://leetcode.cn/problems/factorial-trailing-zeroes",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/factorial-trailing-zeroes",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em>the number of trailing zeroes in</em><code>n!</code>.</p><p>Note that <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3</p><p>Output: 0</p><p>Explanation: 3! = 6, no trailing zero.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 5</p><p>Output: 1</p><p>Explanation: 5! = 120, one trailing zero.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 0</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 10^4</code></li></ul><p><strong>Follow up:</strong> Could you write a solution that works in logarithmic time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数 <code>n</code> ，返回 <code>n!</code> 结果中尾随零的数量。</p><p>提示 <code>n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1</code></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>两个数相乘结果末尾有 <code>0</code>，一定是因为两个数中有因子 <code>2</code> 和 <code>5</code>，也就是说，问题转化为：<code>n!</code> 最多可以分解出多少个因子 <code>2</code> 和 <code>5</code>？</p><p>最多可以分解出多少个因子 <code>2</code> 和 <code>5</code>，主要取决于能分解出几个因子 <code>5</code>，因为每个偶数都能分解出因子 <code>2</code>，因子 <code>2</code> 肯定比因子 <code>5</code> 多得多。</p><p>那么，问题转化为：<code>n!</code> 最多可以分解出多少个因子 <code>5</code>？</p><p>难点在于像 <code>25，50，125</code> 这样的数，可以提供不止一个因子 <code>5</code>，不能漏数了。</p><ul><li><p>我们假设 <code>n = 125</code>，来算一算 <code>125!</code> 的结果末尾有几个 <code>0</code>：</p></li><li><p>首先，<code>125 / 5 = 25</code>，这一步就是计算有多少个像 <code>5，15，20，25</code> 这些 <code>5</code> 的倍数，它们一定可以提供一个因子 <code>5</code>。</p></li><li><p>但是，像 <code>25，50，75</code> 这些 <code>25</code> 的倍数，可以提供两个因子 <code>5</code>，那么我们再计算出 <code>125!</code> 中有 <code>125 / 25 = 5</code> 个 <code>25</code> 的倍数，它们每人可以额外再提供一个因子 <code>5</code>。</p></li><li><p>接着，<code>125 = 5 x 5 x 5</code>，像 <code>125，250</code> 这些 <code>125</code> 的倍数，可以提供 <code>3</code> 个因子 <code>5</code>，那么我们还得再计算出 <code>125!</code> 中有 <code>125 / 125 = 1</code> 个 <code>125</code> 的倍数，它还可以额外再提供一个因子 <code>5</code>。</p></li><li><p>所以 <code>125!</code> 最多可以分解出 <code>25 + 5 + 1 = 31</code> 个因子 <code>5</code>，也就是说阶乘结果的末尾有 <code>31</code> 个 <code>0</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">trailingZeroes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		divisor <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>divisor <span class="token operator">&lt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> <span class="token punctuation">(</span>n <span class="token operator">/</span> divisor<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		divisor <span class="token operator">*=</span> <span class="token number">5</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),w=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"left"}},"难度")])],-1),z=e("td",{style:{"text-align":"center"}},"233",-1),E={style:{"text-align":"left"}},q={href:"https://leetcode.com/problems/number-of-digit-one",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},N={style:{"text-align":"left"}},I=e("code",null,"递归",-1),L=e("code",null,"数学",-1),V=e("code",null,"动态规划",-1),j={style:{"text-align":"left"}},B=e("td",{style:{"text-align":"center"}},"793",-1),H={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function",target:"_blank",rel:"noopener noreferrer"},M=e("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},F=e("code",null,"数学",-1),G=e("code",null,"二分查找",-1),K={style:{"text-align":"left"}},S=e("td",{style:{"text-align":"center"}},"2117",-1),T={style:{"text-align":"left"}},Z={href:"https://leetcode.com/problems/abbreviating-the-product-of-a-range",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},J=e("code",null,"数学",-1),P={style:{"text-align":"left"}},Q=e("td",{style:{"text-align":"center"}},"2245",-1),U={style:{"text-align":"left"}},W={href:"https://leetcode.com/problems/maximum-trailing-zeros-in-a-cornered-path",target:"_blank",rel:"noopener noreferrer"},X=e("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},$=e("code",null,"数组",-1),ee=e("code",null,"矩阵",-1),te=e("code",null,"前缀和",-1),ne={style:{"text-align":"left"}};function oe(se,ae){const a=l("ExternalLinkIcon"),c=l("font"),s=l("RouterLink");return r(),i("div",null,[e("h1",h,[m,n(),e("a",f,[n("172. 阶乘后的零"),t(a)])]),e("p",null,[n("🟠 "),t(c,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1}),n("  🔖  "),t(s,{to:"/tag/math.html"},{default:o(()=>[g]),_:1}),n("  🔗 "),e("a",k,[b,t(a)]),n(),e("a",x,[v,t(a)])]),y,p(" prettier-ignore "),e("table",null,[w,e("tbody",null,[e("tr",null,[z,e("td",E,[e("a",q,[n("数字 1 的个数"),t(a)])]),e("td",C,[t(s,{to:"/problem/0233.html"},{default:o(()=>[n("[✓]")]),_:1})]),e("td",N,[t(s,{to:"/tag/recursion.html"},{default:o(()=>[I]),_:1}),n(),t(s,{to:"/tag/math.html"},{default:o(()=>[L]),_:1}),n(),t(s,{to:"/tag/dynamic-programming.html"},{default:o(()=>[V]),_:1})]),e("td",j,[t(c,{color:"#ff334b"},{default:o(()=>[n("Hard")]),_:1})])]),e("tr",null,[B,e("td",H,[e("a",O,[n("阶乘函数后 K 个零"),t(a)])]),M,e("td",R,[t(s,{to:"/tag/math.html"},{default:o(()=>[F]),_:1}),n(),t(s,{to:"/tag/binary-search.html"},{default:o(()=>[G]),_:1})]),e("td",K,[t(c,{color:"#ff334b"},{default:o(()=>[n("Hard")]),_:1})])]),e("tr",null,[S,e("td",T,[e("a",Z,[n("一个区间内所有数乘积的缩写"),t(a)])]),A,e("td",D,[t(s,{to:"/tag/math.html"},{default:o(()=>[J]),_:1})]),e("td",P,[t(c,{color:"#ff334b"},{default:o(()=>[n("Hard")]),_:1})])]),e("tr",null,[Q,e("td",U,[e("a",W,[n("转角路径的乘积中最多能有几个尾随零"),t(a)])]),X,e("td",Y,[t(s,{to:"/tag/array.html"},{default:o(()=>[$]),_:1}),n(),t(s,{to:"/tag/matrix.html"},{default:o(()=>[ee]),_:1}),n(),t(s,{to:"/tag/prefix-sum.html"},{default:o(()=>[te]),_:1})]),e("td",ne,[t(c,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1})])])])])])}const le=d(_,[["render",oe],["__file","0172.html.vue"]]);export{le as default};

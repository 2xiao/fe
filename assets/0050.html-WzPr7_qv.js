import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MkGfDfkx.js";const h={},_=n("h1",{id:"_50-pow-x-n",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_50-pow-x-n","aria-hidden":"true"},"#"),t(" 50. Pow(x, n)")],-1),k=n("code",null,"递归",-1),m=n("code",null,"数学",-1),x={href:"https://leetcode.cn/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),y={href:"http://www.cplusplus.com/reference/valarray/pow/",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"x",-1),q=n("code",null,"n",-1),E=n("code",null,"xn",-1),I=u(`<p><strong>Example 1:</strong></p><blockquote><p>Input: x = 2.00000, n = 10</p><p>Output: 1024.00000</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = 2.10000, n = 3</p><p>Output: 9.26100</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: x = 2.00000, n = -2</p><p>Output: 0.25000</p><p>Explanation: 2-2 = 1/22 = 1/4 = 0.25</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-100.0 &lt; x &lt; 100.0</code></li><li><code>-2^31 &lt;= n &lt;= 2^31-1</code></li><li><code>n</code> is an integer.</li><li>Either <code>x</code> is not zero or <code>n &gt; 0</code>.</li><li><code>-10^4 &lt;= xn &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现 pow(x, n) ，即计算 x 的 n 次幂函数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>直接循环相乘可能会超时，因为做了很多重复计算，可以使用二分法来避免重复计算。</p><ul><li>用递归的方式，不断的将 <code>n</code> 二分下去，每次计算 <code>myPow(x, Math.floor(n / 2))</code>;</li><li>注意 <code>n</code> 为负数时，要提前处理 <code>x</code>；</li><li>注意 <code>n</code> 为奇数时，要手动多乘上一个被省略的 <code>x</code>；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(log n)</code></li><li><strong>空间复杂度</strong>: <code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myPow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		x <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> x<span class="token punctuation">;</span>
		n <span class="token operator">=</span> <span class="token operator">-</span>n<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token function">myPow</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp <span class="token operator">*</span> x<span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> temp <span class="token operator">*</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),L=n("td",{style:{"text-align":"center"}},"69",-1),N=n("td",{style:{"text-align":"left"}},"x 的平方根",-1),O={style:{"text-align":"center"}},V={style:{"text-align":"left"}},P=n("code",null,"数学",-1),j=n("code",null,"二分查找",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/sqrtx",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"372",-1),T=n("td",{style:{"text-align":"left"}},"超级次方",-1),A=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"数学",-1),G=n("code",null,"分治",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/super-pow",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/super-pow",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2550",-1),W=n("td",{style:{"text-align":"left"}},"猴子碰撞的方法数",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"递归",-1),$=n("code",null,"数学",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/count-collisions-of-monkeys-on-a-polygon",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/count-collisions-of-monkeys-on-a-polygon",target:"_blank",rel:"noopener noreferrer"};function an(on,ln){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[_,n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/recursion.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),n("a",x,[b,e(o)]),t(),n("a",f,[g,e(o)])]),v,n("p",null,[t("Implement "),n("a",y,[t("pow(x, n)"),e(o)]),t(", which calculates "),w,t(" raised to the power "),q,t(" (i.e., "),E,t(").")]),I,d(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[L,N,n("td",O,[e(a,{to:"/problem/0069.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",V,[e(a,{to:"/tag/math.html"},{default:s(()=>[P]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[j]),_:1})]),B,n("td",M,[n("a",R,[t("🀄️"),e(o)]),t(),n("a",z,[t("🔗"),e(o)])])]),n("tr",null,[S,T,A,n("td",D,[e(a,{to:"/tag/math.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[G]),_:1})]),H,n("td",J,[n("a",K,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])]),n("tr",null,[U,W,X,n("td",Y,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[Z]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[$]),_:1})]),nn,n("td",tn,[n("a",en,[t("🀄️"),e(o)]),t(),n("a",sn,[t("🔗"),e(o)])])])])])])}const pn=p(h,[["render",an],["__file","0050.html.vue"]]);export{pn as default};

import{_ as p,r as c,o as r,c as d,a as t,b as n,d as e,w as o,f as i,e as u}from"./app-U2ekqv2z.js";const k={},h=t("h1",{id:"_1071-字符串的最大公因子",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1071-字符串的最大公因子","aria-hidden":"true"},"#"),n(" 1071. 字符串的最大公因子")],-1),m=t("code",null,"数学",-1),g=t("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/greatest-common-divisor-of-strings",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/greatest-common-divisor-of-strings",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>For two strings <code>s</code> and <code>t</code>, we say &quot;<code>t</code> divides <code>s</code>&quot; if and only if <code>s = t + t + t + ... + t + t</code> (i.e., <code>t</code> is concatenated with itself one or more times).</p><p>Given two strings <code>str1</code> and <code>str2</code>, return <em>the largest string</em><code>x</code> <em>such that</em><code>x</code> <em>divides both</em><code>str1</code> <em>and</em><code>str2</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: str1 = &quot;ABCABC&quot;, str2 = &quot;ABC&quot;</p><p>Output: &quot;ABC&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: str1 = &quot;ABABAB&quot;, str2 = &quot;ABAB&quot;</p><p>Output: &quot;AB&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: str1 = &quot;LEET&quot;, str2 = &quot;CODE&quot;</p><p>Output: &quot;&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li><li><code>str1</code> and <code>str2</code> consist of English uppercase letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>对于字符串 <code>s</code> 和 <code>t</code>，只有在 <code>s = t + t + t + ... + t + t</code>（<code>t</code> 自身连接 1 次或多次）时，我们才认定 “<code>t</code> 能除尽 <code>s</code>”。</p><p>给定两个字符串 <code>str1</code> 和 <code>str2</code> 。返回 <em>最长字符串 <code>x</code>，要求满足 <code>x</code> 能除尽 <code>str1</code> 且 <code>x</code> 能除尽 <code>str2</code></em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;ABCABC&quot;, str2 = &quot;ABC&quot;</p><p><strong>输出：</strong> &quot;ABC&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;ABABAB&quot;, str2 = &quot;ABAB&quot;</p><p><strong>输出：</strong> &quot;AB&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> str1 = &quot;LEET&quot;, str2 = &quot;CODE&quot;</p><p><strong>输出：</strong> &quot;&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= str1.length, str2.length &lt;= 1000</code></li><li><code>str1</code> 和 <code>str2</code> 由大写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题本质上就是要求出两个字符串长度的最大公因数（GCD），然后判断长度为 GCD 的前缀字符串是不是公共分隔字符串。</p><ol><li><p><strong>计算最大公约数</strong>：</p><p>首先，计算两个字符串的长度 <code>len1</code> 和 <code>len2</code>，并找出它们的最大公约数（GCD），该值将决定可能的公共分隔字符串的长度；</p><p>计算 GCD 最常用高效的办法是 <strong>辗转相除法（欧几里得算法）</strong>：</p><ul><li><p><strong>定理</strong>：对于任意两个正整数 <code>a</code> 和 <code>b</code>（假设 <code>a &gt; b</code>），它们的最大公约数等于 <code>b</code> 和 <code>a</code> 除以 <code>b</code> 的余数（<code>a % b</code>）的最大公约数。</p></li><li><p>形式化表示为：<code>GCD(a, b) = GCD(b, a % b)</code></p></li><li><p>算法的步骤如下：</p><ol><li>如果 <code>b = 0</code>，则 <code>GCD(a, b) = a</code>。</li><li>否则，递归计算 <code>GCD(b, a % b)</code>。</li></ol></li><li><p>举例来说，假设我们要计算 <code>GCD(48, 18)</code>：</p><ul><li><code>GCD(48, 18)</code></li><li><code>48 % 18 = 12</code></li><li>现在计算 <code>GCD(18, 12)</code></li><li><code>18 % 12 = 6</code></li><li>现在计算 <code>GCD(12, 6)</code></li><li><code>12 % 6 = 0</code></li><li>现在计算 <code>GCD(6, 0)</code>，结果为 <code>6</code></li><li>最终，<code>GCD(48, 18)</code> 的结果是 <code>6</code></li></ul></li></ul></li><li><p><strong>候选字符串</strong>：</p><ul><li>生成一个候选字符串 <code>prefix</code>，其长度为 <code>gcd(len1, len2)</code>，并从 <code>str1</code> 的开始部分提取这一长度的子字符串；</li></ul></li><li><p><strong>验证是否能整除</strong>：</p><ul><li>检查 <code>prefix</code> 能否通过重复多次构造出 <code>str1</code> 和 <code>str2</code>；</li><li>如果能，则返回 <code>prefix</code>；否则返回空字符串；</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 是 <code>str1</code> 和 <code>str2</code> 的长度，需要遍历每个字符串来验证。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间用于存储长度和子字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">str2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">gcdOfStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">str1<span class="token punctuation">,</span> str2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 计算最大公约数的函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">gcd</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>b <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> temp <span class="token operator">=</span> b<span class="token punctuation">;</span>
			b <span class="token operator">=</span> a <span class="token operator">%</span> b<span class="token punctuation">;</span>
			a <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> a<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> gcdLen <span class="token operator">=</span> <span class="token function">gcd</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span>length<span class="token punctuation">,</span> str2<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> prefix <span class="token operator">=</span> str1<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> gcdLen<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查 prefix 是否能重复多次构造出 str1 和 str2</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		prefix<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>str1<span class="token punctuation">.</span>length <span class="token operator">/</span> gcdLen<span class="token punctuation">)</span> <span class="token operator">==</span> str1 <span class="token operator">&amp;&amp;</span>
		prefix<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>str2<span class="token punctuation">.</span>length <span class="token operator">/</span> gcdLen<span class="token punctuation">)</span> <span class="token operator">==</span> str2
	<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> prefix<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果不能整除，返回空字符串</span>
	<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"1979",-1),C=t("td",{style:{"text-align":"left"}},"找出数组的最大公约数",-1),B=t("td",{style:{"text-align":"center"}},null,-1),w={style:{"text-align":"left"}},A=t("code",null,"数组",-1),D=t("code",null,"数学",-1),G=t("code",null,"数论",-1),E=t("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},N=t("td",{style:{"text-align":"center"}},"2413",-1),V=t("td",{style:{"text-align":"left"}},"最小偶倍数",-1),j=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},R=t("code",null,"数学",-1),S=t("code",null,"数论",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"3334",-1),M=t("td",{style:{"text-align":"left"}},"数组的最大因子得分",-1),P=t("td",{style:{"text-align":"center"}},null,-1),Q=t("td",{style:{"text-align":"left"}},null,-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/find-the-maximum-factor-score-of-array",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/find-the-maximum-factor-score-of-array",target:"_blank",rel:"noopener noreferrer"};function Z($,tt){const l=c("font"),a=c("RouterLink"),s=c("ExternalLinkIcon");return r(),d("div",null,[h,t("p",null,[n("🟢 "),e(l,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),n("  🔗 "),t("a",_,[b,e(s)]),n(),t("a",f,[v,e(s)])]),x,i(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[y,C,B,t("td",w,[e(a,{to:"/tag/array.html"},{default:o(()=>[A]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:o(()=>[D]),_:1}),n(),e(a,{to:"/tag/number-theory.html"},{default:o(()=>[G]),_:1})]),E,t("td",L,[t("a",O,[n("🀄️"),e(s)]),n(),t("a",I,[n("🔗"),e(s)])])]),t("tr",null,[N,V,j,t("td",T,[e(a,{to:"/tag/math.html"},{default:o(()=>[R]),_:1}),n(),e(a,{to:"/tag/number-theory.html"},{default:o(()=>[S]),_:1})]),F,t("td",z,[t("a",H,[n("🀄️"),e(s)]),n(),t("a",J,[n("🔗"),e(s)])])]),t("tr",null,[K,M,P,Q,U,t("td",W,[t("a",X,[n("🀄️"),e(s)]),n(),t("a",Y,[n("🔗"),e(s)])])])])])])}const et=p(k,[["render",Z],["__file","1071.html.vue"]]);export{et as default};

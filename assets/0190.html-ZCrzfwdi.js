import{_ as i,r,o as c,c as p,a as e,b as t,d as n,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const h={},g=e("h1",{id:"_190-颠倒二进制位",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_190-颠倒二进制位","aria-hidden":"true"},"#"),t(" 190. 颠倒二进制位")],-1),_=e("code",null,"位运算",-1),m=e("code",null,"分治",-1),k={href:"https://leetcode.cn/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),y=e("h2",{id:"题目",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),t(" 题目")],-1),x=e("p",null,"Reverse bits of a given 32 bits unsigned integer.",-1),w=e("p",null,[e("strong",null,"Note:")],-1),q=e("li",null,"Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.",-1),E={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},I=e("strong",null,"Example 2",-1),N=e("code",null,"-3",-1),T=e("code",null,"-1073741825",-1),C=u(`<p><strong>Example 1:</strong></p><blockquote><p>Input: n = 00000010100101000001111010011100</p><p>Output:&gt; 964176192 (00111001011110000010100101000000)</p><p>Explanation: The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 11111111111111111111111111111101</p><p>Output: 3221225471 (10111111111111111111111111111111)</p><p>Explanation: The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code></li></ul><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>颠倒给定的 32 位无符号整数的二进制位。</p><p><strong>提示：</strong></p><ul><li>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。</li><li>在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 <code>-3</code>，输出表示有符号整数 <code>-1073741825</code>。</li></ul><p><strong>示例 1：</strong></p><blockquote><p>输入：n = 00000010100101000001111010011100</p><p>输出：964176192 (00111001011110000010100101000000)</p><p>解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：n = 11111111111111111111111111111101</p><p>输出：3221225471 (10111111111111111111111111111111)</p><p>解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。</p></blockquote><p><strong>提示：</strong></p><ul><li>输入是一个长度为 32 的二进制字符串</li></ul><p><strong>进阶</strong>: 如果多次调用这个函数，你将如何优化你的算法？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong><code>result</code> 初始化为 0</strong>：用于存储反转后的结果。</li><li><strong>循环 32 次</strong>：每次提取最低位并将其添加到 <code>result</code> 中。</li><li><strong><code>result &lt;&lt; 1</code></strong>：将结果左移一位，为下一位的填充腾出空间。</li><li><strong><code>n &amp; 1</code></strong>：获取当前 <code>n</code> 的最低位。</li><li><strong><code>n &gt;&gt;= 1</code></strong>：将 <code>n</code> 右移一位，准备提取下一个位。</li><li><strong><code>result &gt;&gt;&gt; 0</code></strong>：确保返回值是一个无符号整数（在 JavaScript 中用 <code>&gt;&gt;&gt;</code> 表示无符号右移）。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为处理的位数固定为 32 位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span> - a positive integer
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> - a positive integer
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reverseBits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 取 n 的最低位</span>
		result <span class="token operator">=</span> <span class="token punctuation">(</span>result <span class="token operator">&lt;&lt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token punctuation">(</span>n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 右移 n</span>
		n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 确保返回无符号整数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),J=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),L=e("td",{style:{"text-align":"center"}},"7",-1),V=e("td",{style:{"text-align":"left"}},"整数反转",-1),B={style:{"text-align":"center"}},O={style:{"text-align":"left"}},j=e("code",null,"数学",-1),R=e("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},A=e("td",{style:{"text-align":"center"}},"191",-1),D=e("td",{style:{"text-align":"left"}},"位1的个数",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},K=e("code",null,"位运算",-1),M=e("code",null,"分治",-1),P=e("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},X=e("td",{style:{"text-align":"center"}},"2119",-1),Y=e("td",{style:{"text-align":"left"}},"反转两次的数字",-1),Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},ee=e("code",null,"数学",-1),te=e("td",{style:{"text-align":"center"}},"🟢",-1),ne={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://leetcode.com/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"};function ae(re,le){const l=r("font"),o=r("RouterLink"),a=r("ExternalLinkIcon");return c(),p("div",null,[g,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[_]),_:1}),t(),n(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[m]),_:1}),t("  🔗 "),e("a",k,[b,n(a)]),t(),e("a",f,[v,n(a)])]),y,x,w,e("ul",null,[q,e("li",null,[t("In Java, the compiler represents the signed integers using "),e("a",E,[t("2's complement notation"),n(a)]),t(". Therefore, in "),I,t(" above, the input represents the signed integer "),N,t(" and the output represents the signed integer "),T,t(".")])]),C,d(" prettier-ignore "),e("table",null,[J,e("tbody",null,[e("tr",null,[L,V,e("td",B,[n(o,{to:"/problem/0007.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",O,[n(o,{to:"/tag/math.html"},{default:s(()=>[j]),_:1})]),R,e("td",S,[e("a",z,[t("🀄️"),n(a)]),t(),e("a",F,[t("🔗"),n(a)])])]),e("tr",null,[A,D,e("td",G,[n(o,{to:"/problem/0191.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",H,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[K]),_:1}),t(),n(o,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[M]),_:1})]),P,e("td",Q,[e("a",U,[t("🀄️"),n(a)]),t(),e("a",W,[t("🔗"),n(a)])])]),e("tr",null,[X,Y,e("td",Z,[n(o,{to:"/problem/2119.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",$,[n(o,{to:"/tag/math.html"},{default:s(()=>[ee]),_:1})]),te,e("td",ne,[e("a",se,[t("🀄️"),n(a)]),t(),e("a",oe,[t("🔗"),n(a)])])])])])])}const ce=i(h,[["render",ae],["__file","0190.html.vue"]]);export{ce as default};

import{_ as i,r,o as c,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-mXo2sCT-.js";const h={},g={id:"_190-颠倒二进制位",tabindex:"-1"},_=t("a",{class:"header-anchor",href:"#_190-颠倒二进制位","aria-hidden":"true"},"#",-1),m={href:"https://2xiao.github.io/leetcode-js/problem/0190.html",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"位运算",-1),b=t("code",null,"分治",-1),f={href:"https://leetcode.cn/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/reverse-bits",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),w=t("h2",{id:"题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),E=t("p",null,"Reverse bits of a given 32 bits unsigned integer.",-1),q=t("p",null,[t("strong",null,"Note:")],-1),I=t("li",null,"Note that in some languages, such as Java, there is no unsigned integer type. In this case, both input and output will be given as a signed integer type. They should not affect your implementation, as the integer's internal binary representation is the same, whether it is signed or unsigned.",-1),N={href:"https://en.wikipedia.org/wiki/Two%27s_complement",target:"_blank",rel:"noopener noreferrer"},T=t("strong",null,"Example 2",-1),C=t("code",null,"-3",-1),J=t("code",null,"-1073741825",-1),L=u(`<p><strong>Example 1:</strong></p><blockquote><p>Input: n = 00000010100101000001111010011100</p><p>Output:&gt; 964176192 (00111001011110000010100101000000)</p><p>Explanation: The input binary string <strong>00000010100101000001111010011100</strong> represents the unsigned integer 43261596, so return 964176192 which its binary representation is <strong>00111001011110000010100101000000</strong>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 11111111111111111111111111111101</p><p>Output: 3221225471 (10111111111111111111111111111111)</p><p>Explanation: The input binary string <strong>11111111111111111111111111111101</strong> represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is <strong>10111111111111111111111111111111</strong>.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The input must be a <strong>binary string</strong> of length <code>32</code></li></ul><p><strong>Follow up:</strong> If this function is called many times, how would you optimize it?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>颠倒给定的 32 位无符号整数的二进制位。</p><p><strong>提示：</strong></p><ul><li>请注意，在某些语言（如 Java）中，没有无符号整数类型。在这种情况下，输入和输出都将被指定为有符号整数类型，并且不应影响您的实现，因为无论整数是有符号的还是无符号的，其内部的二进制表示形式都是相同的。</li><li>在 Java 中，编译器使用二进制补码记法来表示有符号整数。因此，在 示例 2 中，输入表示有符号整数 <code>-3</code>，输出表示有符号整数 <code>-1073741825</code>。</li></ul><p><strong>示例 1：</strong></p><blockquote><p>输入：n = 00000010100101000001111010011100</p><p>输出：964176192 (00111001011110000010100101000000)</p><p>解释：输入的二进制串 00000010100101000001111010011100 表示无符号整数 43261596，因此返回 964176192，其二进制表示形式为 00111001011110000010100101000000。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入：n = 11111111111111111111111111111101</p><p>输出：3221225471 (10111111111111111111111111111111)</p><p>解释：输入的二进制串 11111111111111111111111111111101 表示无符号整数 4294967293，因此返回 3221225471 其二进制表示形式为 10111111111111111111111111111111 。</p></blockquote><p><strong>提示：</strong></p><ul><li>输入是一个长度为 32 的二进制字符串</li></ul><p><strong>进阶</strong>: 如果多次调用这个函数，你将如何优化你的算法？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong><code>result</code> 初始化为 0</strong>：用于存储反转后的结果。</li><li><strong>循环 32 次</strong>：每次提取最低位并将其添加到 <code>result</code> 中。</li><li><strong><code>result &lt;&lt; 1</code></strong>：将结果左移一位，为下一位的填充腾出空间。</li><li><strong><code>n &amp; 1</code></strong>：获取当前 <code>n</code> 的最低位。</li><li><strong><code>n &gt;&gt;= 1</code></strong>：将 <code>n</code> 右移一位，准备提取下一个位。</li><li><strong><code>result &gt;&gt;&gt; 0</code></strong>：确保返回值是一个无符号整数（在 JavaScript 中用 <code>&gt;&gt;&gt;</code> 表示无符号右移）。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为处理的位数固定为 32 位。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),V=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"7",-1),B={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/reverse-integer",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},z=t("code",null,"数学",-1),F={style:{"text-align":"left"}},M=t("td",{style:{"text-align":"center"}},"191",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},K=t("code",null,"位运算",-1),P=t("code",null,"分治",-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"2119",-1),W={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/a-number-after-a-double-reversal",target:"_blank",rel:"noopener noreferrer"},Y=t("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=t("code",null,"数学",-1),tt={style:{"text-align":"left"}};function et(nt,st){const o=r("ExternalLinkIcon"),l=r("font"),a=r("RouterLink");return c(),p("div",null,[t("h1",g,[_,e(),t("a",m,[e("190. 颠倒二进制位"),n(o)])]),t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[b]),_:1}),e("  🔗 "),t("a",f,[v,n(o)]),e(),t("a",y,[x,n(o)])]),w,E,q,t("ul",null,[I,t("li",null,[e("In Java, the compiler represents the signed integers using "),t("a",N,[e("2's complement notation"),n(o)]),e(". Therefore, in "),T,e(" above, the input represents the signed integer "),C,e(" and the output represents the signed integer "),J,e(".")])]),L,d(" prettier-ignore "),t("table",null,[V,t("tbody",null,[t("tr",null,[j,t("td",B,[t("a",O,[e("整数反转"),n(o)])]),t("td",R,[n(a,{to:"/problem/0007.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",S,[n(a,{to:"/tag/math.html"},{default:s(()=>[z]),_:1})]),t("td",F,[n(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),t("tr",null,[M,t("td",A,[t("a",D,[e("位1的个数"),n(o)])]),t("td",G,[n(a,{to:"/problem/0191.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",H,[n(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[K]),_:1}),e(),n(a,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[P]),_:1})]),t("td",Q,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),t("tr",null,[U,t("td",W,[t("a",X,[e("反转两次的数字"),n(o)])]),Y,t("td",Z,[n(a,{to:"/tag/math.html"},{default:s(()=>[$]),_:1})]),t("td",tt,[n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const ot=i(h,[["render",et],["__file","0190.html.vue"]]);export{ot as default};

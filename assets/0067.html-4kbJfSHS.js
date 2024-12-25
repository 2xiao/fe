import{_ as p,r as l,o as i,c as d,a as n,b as t,d as e,w as s,f as u,e as c}from"./app--GvfAkAr.js";const h={},_=n("h1",{id:"_67-二进制求和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_67-二进制求和","aria-hidden":"true"},"#"),t(" 67. 二进制求和")],-1),m=n("code",null,"位运算",-1),k=n("code",null,"数学",-1),b=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),q=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two binary strings <code>a</code> and <code>b</code>, return <em>their sum as a binary string</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = &quot;11&quot;, b = &quot;1&quot;</p><p>Output: &quot;100&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = &quot;1010&quot;, b = &quot;1011&quot;</p><p>Output: &quot;10101&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a.length, b.length &lt;= 10^4</code></li><li><code>a</code> and <code>b</code> consist only of <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code> characters.</li><li>Each string does not contain leading zeros except for the zero itself.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个二进制字符串 <code>a</code> 和 <code>b</code> ，以二进制字符串的形式返回它们的和。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',11),w=c(`<p>可以设置一个变量 <code>carry</code> 来表示进位，初始时 <code>carry = 0</code>。</p><p>遍历两个二进制字符串的每一位，从末尾开始逐位相加，并加上进位 <code>carry</code>。将相加的结果和进位的和对 <code>2</code> 取余数，得到当前位的值，对 <code>2</code> 取商，得到进位。将当前位的值插入结果字符串的开头，然后更新进位，继续遍历下一位，直到完成所有位的相加。</p><p>最后，若最高位有进位，还需将进位插入结果字符串的开头。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(max(m, n))</code>，其中 <code>m</code> 和 <code>n</code> 是字符串 <code>a</code> 和 <code>b</code> 的长度，因为需要逐位遍历两个二进制字符串，长度较长的字符串决定了迭代的次数。</li><li><strong>空间复杂度</strong>：<code>O(max(m, n))</code>，<code>res</code> 字符串会存储最终的结果，其最大长度为 <code>Math.max(m, n) + 1</code>（在最坏情况下需要存储进位的额外位数）</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addBinary</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// res 存储结果，carry 记录进位</span>
	<span class="token keyword">let</span> m <span class="token operator">=</span> a<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> b<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span>
		carry <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 模拟加法逻辑</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>m<span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> carry<span class="token punctuation">;</span>
		num <span class="token operator">+=</span> <span class="token function">Number</span><span class="token punctuation">(</span>a<span class="token punctuation">[</span>m <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>b<span class="token punctuation">[</span>n <span class="token operator">-</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">=</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">+</span> res<span class="token punctuation">;</span>
		carry <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> carry <span class="token operator">?</span> carry <span class="token operator">+</span> res <span class="token operator">:</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,8),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"2",-1),C=n("td",{style:{"text-align":"left"}},"两数相加",-1),L={style:{"text-align":"center"}},V={style:{"text-align":"left"}},B=n("code",null,"递归",-1),I=n("code",null,"链表",-1),O=n("code",null,"数学",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),M={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/add-two-numbers",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"43",-1),S=n("td",{style:{"text-align":"left"}},"字符串相乘",-1),T={style:{"text-align":"center"}},A={style:{"text-align":"left"}},D=n("code",null,"数学",-1),F=n("code",null,"字符串",-1),H=n("code",null,"模拟",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"66",-1),W=n("td",{style:{"text-align":"left"}},"加一",-1),X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"数学",-1),nn=n("td",{style:{"text-align":"center"}},"🟢",-1),tn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},an=n("td",{style:{"text-align":"center"}},"989",-1),on=n("td",{style:{"text-align":"left"}},"数组形式的整数加法",-1),ln={style:{"text-align":"center"}},cn={style:{"text-align":"left"}},rn=n("code",null,"数组",-1),pn=n("code",null,"数学",-1),dn=n("td",{style:{"text-align":"center"}},"🟢",-1),un={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"};function mn(kn,bn){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[_,n("p",null,[t("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",f,[y,e(o)]),t(),n("a",v,[x,e(o)])]),q,n("p",null,[t("这道题和 "),e(a,{to:"/problem/0002.html"},{default:s(()=>[t("第 2 题 两数之和")]),_:1}),t(" 思路相同。")]),w,u(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[N,C,n("td",L,[e(a,{to:"/problem/0002.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",V,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[B]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[O]),_:1})]),j,n("td",M,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",R,[t("🔗"),e(o)])])]),n("tr",null,[G,S,n("td",T,[e(a,{to:"/problem/0043.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",A,[e(a,{to:"/tag/math.html"},{default:s(()=>[D]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[t("🀄️"),e(o)]),t(),n("a",Q,[t("🔗"),e(o)])])]),n("tr",null,[U,W,n("td",X,[e(a,{to:"/problem/0066.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",Y,[e(a,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[$]),_:1})]),nn,n("td",tn,[n("a",en,[t("🀄️"),e(o)]),t(),n("a",sn,[t("🔗"),e(o)])])]),n("tr",null,[an,on,n("td",ln,[e(a,{to:"/problem/0989.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",cn,[e(a,{to:"/tag/array.html"},{default:s(()=>[rn]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[pn]),_:1})]),dn,n("td",un,[n("a",hn,[t("🀄️"),e(o)]),t(),n("a",_n,[t("🔗"),e(o)])])])])])])}const fn=p(h,[["render",mn],["__file","0067.html.vue"]]);export{fn as default};

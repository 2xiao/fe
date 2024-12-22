import{_ as c,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as _}from"./app-U2ekqv2z.js";const h={},u=t("h1",{id:"_9-回文数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_9-回文数","aria-hidden":"true"},"#"),e(" 9. 回文数")],-1),m=t("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=_(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>x</code>, return <code>true</code> if <code>x</code> is a <strong>palindrome</strong> ,and <code>false</code> otherwise .</p><p><strong>Example 1:</strong></p><blockquote><p>Input: x = 121</p><p>Output: true</p><p>Explanation: 121 reads as 121 from left to right and from right to left.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: x = -121</p><p>Output: false</p><p>Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: x = 10</p><p>Output: false</p><p>Explanation: Reads 01 from right to left. Therefore it is not a palindrome.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= x &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without converting the integer to a string?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>判断一个整数是不是回文数，先将整数转换为字符串。</p><p>然后用对撞指针分别一前一后开始扫描，如果前后的字段相同，则移动指针，否则直接返回 <code>false</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	x <span class="token operator">=</span> <span class="token string">&#39;&#39;</span> <span class="token operator">+</span> x<span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> x<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>x<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> x<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),v=t("td",{style:{"text-align":"center"}},"234",-1),w=t("td",{style:{"text-align":"left"}},"回文链表",-1),E={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=t("code",null,"栈",-1),N=t("code",null,"递归",-1),I=t("code",null,"链表",-1),L=t("code",null,"1+",-1),V=t("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"2217",-1),R=t("td",{style:{"text-align":"left"}},"找到指定长度的回文数",-1),T=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},K=t("code",null,"数组",-1),P=t("code",null,"数学",-1),S=t("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/find-palindrome-with-fixed-length",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/find-palindrome-with-fixed-length",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"2396",-1),J=t("td",{style:{"text-align":"left"}},"严格回文的数字",-1),M=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"脑筋急转弯",-1),W=t("code",null,"数学",-1),X=t("code",null,"双指针",-1),Y=t("td",{style:{"text-align":"center"}},"🟠",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/strictly-palindromic-number",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/strictly-palindromic-number",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"2843",-1),nt=t("td",{style:{"text-align":"left"}},"统计对称整数的数目",-1),st=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},at=t("code",null,"数学",-1),lt=t("code",null,"枚举",-1),rt=t("td",{style:{"text-align":"center"}},"🟢",-1),ct={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/count-symmetric-integers",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/count-symmetric-integers",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"3260",-1),_t=t("td",{style:{"text-align":"left"}},"找出最大的 N 位 K 回文数",-1),ht=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},mt=t("code",null,"贪心",-1),gt=t("code",null,"数学",-1),ft=t("code",null,"字符串",-1),kt=t("code",null,"2+",-1),bt=t("td",{style:{"text-align":"center"}},"🔴",-1),xt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/find-the-largest-palindrome-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/find-the-largest-palindrome-divisible-by-k",target:"_blank",rel:"noopener noreferrer"},wt=t("td",{style:{"text-align":"center"}},"3272",-1),Et=t("td",{style:{"text-align":"left"}},"统计好整数的数目",-1),qt=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Nt=t("code",null,"哈希表",-1),It=t("code",null,"数学",-1),Lt=t("code",null,"组合数学",-1),Vt=t("code",null,"1+",-1),jt=t("td",{style:{"text-align":"center"}},"🔴",-1),Bt={style:{"text-align":"center"}},Ft={href:"https://leetcode.cn/problems/find-the-count-of-good-integers",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/find-the-count-of-good-integers",target:"_blank",rel:"noopener noreferrer"};function Rt(Tt,Gt){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[u,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/math.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",g,[f,n(a)]),e(),t("a",k,[b,n(a)])]),x,p(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[v,w,t("td",E,[n(o,{to:"/problem/0234.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",q,[n(o,{to:"/tag/stack.html"},{default:s(()=>[C]),_:1}),e(),n(o,{to:"/tag/recursion.html"},{default:s(()=>[N]),_:1}),e(),n(o,{to:"/tag/linked-list.html"},{default:s(()=>[I]),_:1}),e(),L]),V,t("td",j,[t("a",B,[e("🀄️"),n(a)]),e(),t("a",F,[e("🔗"),n(a)])])]),t("tr",null,[O,R,T,t("td",G,[n(o,{to:"/tag/array.html"},{default:s(()=>[K]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[P]),_:1})]),S,t("td",z,[t("a",A,[e("🀄️"),n(a)]),e(),t("a",D,[e("🔗"),n(a)])])]),t("tr",null,[H,J,M,t("td",Q,[n(o,{to:"/tag/brainteaser.html"},{default:s(()=>[U]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[W]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[X]),_:1})]),Y,t("td",Z,[t("a",$,[e("🀄️"),n(a)]),e(),t("a",tt,[e("🔗"),n(a)])])]),t("tr",null,[et,nt,st,t("td",ot,[n(o,{to:"/tag/math.html"},{default:s(()=>[at]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[lt]),_:1})]),rt,t("td",ct,[t("a",it,[e("🀄️"),n(a)]),e(),t("a",dt,[e("🔗"),n(a)])])]),t("tr",null,[pt,_t,ht,t("td",ut,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[mt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[gt]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[ft]),_:1}),e(),kt]),bt,t("td",xt,[t("a",yt,[e("🀄️"),n(a)]),e(),t("a",vt,[e("🔗"),n(a)])])]),t("tr",null,[wt,Et,qt,t("td",Ct,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[Nt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[It]),_:1}),e(),n(o,{to:"/tag/combinatorics.html"},{default:s(()=>[Lt]),_:1}),e(),Vt]),jt,t("td",Bt,[t("a",Ft,[e("🀄️"),n(a)]),e(),t("a",Ot,[e("🔗"),n(a)])])])])])])}const Pt=c(h,[["render",Rt],["__file","0009.html.vue"]]);export{Pt as default};

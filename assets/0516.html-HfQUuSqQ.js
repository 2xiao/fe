import{_ as p,r as l,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-fEpXkbSw.js";const _="/leetcode-js/assets/516-K8BTjlD9.png",h={},k=n("h1",{id:"_516-最长回文子序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_516-最长回文子序列","aria-hidden":"true"},"#"),t(" 516. 最长回文子序列")],-1),m=n("code",null,"字符串",-1),g=n("code",null,"动态规划",-1),b={href:"https://leetcode.cn/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/longest-palindromic-subsequence",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, find <em>the longest palindromic <strong>subsequence</strong> &#39;s length in</em> <code>s</code>.</p><p>A <strong>subsequence</strong> is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;bbbab&quot;</p><p>Output: 4</p><p>Explanation: One possible longest palindromic subsequence is &quot;bbbb&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;cbbd&quot;</p><p>Output: 2</p><p>Explanation: One possible longest palindromic subsequence is &quot;bb&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> ，找出其中最长的回文子序列，并返回该序列的长度。</p><p>子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。</p><p><code>s</code> 仅由小写英文字母组成。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以使用动态规划来解决。们定义一个二维数组 <code>dp</code>，其中 <code>dp[i][j]</code> 表示字符串 <code>s</code> 在区间 <code>[i, j]</code> 内的最长回文子序列的长度。使用动态规划的方法来填充这个二维数组。</p><ol><li><p><strong>初始化动态规划数组：</strong> 对角线上的元素 <code>dp[i][i]</code> 均为 <code>1</code>，因为任何一个单个字符都是回文子序列。</p></li><li><p><strong>状态转移：</strong></p><ul><li>当 <code>s[i] === s[j]</code> 时，表示两个字符相同，可以将两个字符加入到已经找到的回文子序列中，因此 <code>dp[i][j] = dp[i+1][j-1] + 2</code>。</li><li>当 <code>s[i] !== s[j]</code> 时，表示两个字符不同，我们需要考虑去掉其中一个字符，然后取另一个区间的最长回文子序列，即 <code>dp[i][j] = Math.max(dp[i+1][j], dp[i][j-1])</code>。</li></ul></li><li><p><strong>遍历顺序：</strong> 由于状态转移方程需要依赖区间 <code>[i+1, j-1], [i+1, j], [i, j-1]</code> 的结果，因此我们需要按照区间长度从小到大的顺序遍历区间，即先遍历较短的区间，再根据较短区间的结果计算较长区间的结果。</p><figure><img src="'+_+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p><strong>返回结果：</strong> 最终结果存储在 <code>dp[0][n-1]</code> 中，即整个字符串的最长回文子序列长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^2)</code>，其中 n 是字符串的长度，动态规划数组的大小为 n^2。</li><li><strong>空间复杂度</strong>：<code>O(n^2)</code>，使用了一个二维动态规划数组。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindromeSubseq</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化动态规划数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 遍历区间长度</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> s<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"5",-1),j=n("td",{style:{"text-align":"left"}},"最长回文子串",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=n("code",null,"双指针",-1),C=n("code",null,"字符串",-1),L=n("code",null,"动态规划",-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"647",-1),M=n("td",{style:{"text-align":"left"}},"回文子串",-1),R=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},T=n("code",null,"双指针",-1),D=n("code",null,"字符串",-1),G=n("code",null,"动态规划",-1),K=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/palindromic-substrings",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/palindromic-substrings",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"730",-1),Q=n("td",{style:{"text-align":"left"}},"统计不同回文子序列",-1),U=n("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=n("code",null,"字符串",-1),Y=n("code",null,"动态规划",-1),Z=n("td",{style:{"text-align":"center"}},"🔴",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/count-different-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/count-different-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"1143",-1),en=n("td",{style:{"text-align":"left"}},"最长公共子序列",-1),an={style:{"text-align":"center"}},on={style:{"text-align":"left"}},ln=n("code",null,"字符串",-1),cn=n("code",null,"动态规划",-1),pn=n("td",{style:{"text-align":"center"}},"🟠",-1),rn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/longest-common-subsequence",target:"_blank",rel:"noopener noreferrer"},_n=n("td",{style:{"text-align":"center"}},"1682",-1),hn=n("td",{style:{"text-align":"left"}},"最长回文子序列 II 🔒",-1),kn=n("td",{style:{"text-align":"center"}},null,-1),mn={style:{"text-align":"left"}},gn=n("code",null,"字符串",-1),bn=n("code",null,"动态规划",-1),fn=n("td",{style:{"text-align":"center"}},"🟠",-1),yn={style:{"text-align":"center"}},xn={href:"https://leetcode.cn/problems/longest-palindromic-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/longest-palindromic-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},qn=n("td",{style:{"text-align":"center"}},"1771",-1),wn=n("td",{style:{"text-align":"left"}},"由子序列构造的最长回文串的长度",-1),jn=n("td",{style:{"text-align":"center"}},null,-1),En={style:{"text-align":"left"}},In=n("code",null,"字符串",-1),On=n("code",null,"动态规划",-1),Cn=n("td",{style:{"text-align":"center"}},"🔴",-1),Ln={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/maximize-palindrome-length-from-subsequences",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/maximize-palindrome-length-from-subsequences",target:"_blank",rel:"noopener noreferrer"},Bn=n("td",{style:{"text-align":"center"}},"2002",-1),zn=n("td",{style:{"text-align":"left"}},"两个回文子序列长度的最大乘积",-1),An=n("td",{style:{"text-align":"center"}},null,-1),Mn={style:{"text-align":"left"}},Rn=n("code",null,"位运算",-1),Sn=n("code",null,"字符串",-1),Tn=n("code",null,"动态规划",-1),Dn=n("code",null,"2+",-1),Gn=n("td",{style:{"text-align":"center"}},"🟠",-1),Kn={style:{"text-align":"center"}},Pn={href:"https://leetcode.cn/problems/maximum-product-of-the-length-of-two-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"},Fn={href:"https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences",target:"_blank",rel:"noopener noreferrer"};function Hn(Jn,Qn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",b,[f,s(o)]),t(),n("a",y,[x,s(o)])]),v,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,j,n("td",E,[s(a,{to:"/problem/0005.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[O]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[L]),_:1})]),N,n("td",V,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",z,[t("🔗"),s(o)])])]),n("tr",null,[A,M,R,n("td",S,[s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[D]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[G]),_:1})]),K,n("td",P,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])]),n("tr",null,[J,Q,U,n("td",W,[s(a,{to:"/tag/string.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])]),n("tr",null,[sn,en,n("td",an,[s(a,{to:"/problem/1143.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",on,[s(a,{to:"/tag/string.html"},{default:e(()=>[ln]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[cn]),_:1})]),pn,n("td",rn,[n("a",dn,[t("🀄️"),s(o)]),t(),n("a",un,[t("🔗"),s(o)])])]),n("tr",null,[_n,hn,kn,n("td",mn,[s(a,{to:"/tag/string.html"},{default:e(()=>[gn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[bn]),_:1})]),fn,n("td",yn,[n("a",xn,[t("🀄️"),s(o)]),t(),n("a",vn,[t("🔗"),s(o)])])]),n("tr",null,[qn,wn,jn,n("td",En,[s(a,{to:"/tag/string.html"},{default:e(()=>[In]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[On]),_:1})]),Cn,n("td",Ln,[n("a",Nn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])]),n("tr",null,[Bn,zn,An,n("td",Mn,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Rn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Sn]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[Tn]),_:1}),t(),Dn]),Gn,n("td",Kn,[n("a",Pn,[t("🀄️"),s(o)]),t(),n("a",Fn,[t("🔗"),s(o)])])])])])])}const Wn=p(h,[["render",Hn],["__file","0516.html.vue"]]);export{Wn as default};

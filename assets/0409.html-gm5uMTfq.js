import{_ as p,r as l,o as i,c as r,a as t,b as n,d as e,w as s,f as d,e as u}from"./app--GvfAkAr.js";const h={},_=t("h1",{id:"_409-最长回文串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_409-最长回文串","aria-hidden":"true"},"#"),n(" 409. 最长回文串")],-1),g=t("code",null,"贪心",-1),k=t("code",null,"哈希表",-1),m=t("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/longest-palindrome",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/longest-palindrome",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> which consists of lowercase or uppercase letters, return the length of the <strong>longest palindrome</strong> that can be built with those letters.</p><p>Letters are <strong>case sensitive</strong> , for example, <code>&quot;Aa&quot;</code> is not considered a palindrome.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;abccccdd&quot;</p><p>Output: 7</p><p>Explanation: One longest palindrome that can be built is &quot;dccaccd&quot;, whose length is 7.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a&quot;</p><p>Output: 1</p><p>Explanation: The longest palindrome that can be built is &quot;a&quot;, whose length is 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> consists of lowercase <strong>and/or</strong> uppercase English letters only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含大写字母和小写字母的字符串 <code>s</code> ，返回 <em>通过这些字母构造成的<strong>最长的 回文串</strong></em> 的长度。</p><p>在构造过程中，请注意 <strong>区分大小写</strong> 。比如 <code>&quot;Aa&quot;</code> 不能当做一个回文字符串。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;abccccdd&quot;</p><p><strong>输出:</strong> 7</p><p><strong>解释:</strong></p><p>我们可以构造的最长的回文串是&quot;dccaccd&quot;, 它的长度是 7。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;a&quot;</p><p><strong>输出:</strong> 1</p><p><strong>解释：</strong> 可以构造的最长回文串是&quot;a&quot;，它的长度是 1。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2000</code></li><li><code>s</code> 只由小写 <strong>和/或</strong> 大写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们要从给定字符串 <code>s</code> 中构造出<strong>最长的回文串</strong>。</p><ul><li>回文串具有对称性，字符成对分布，例如 <code>&#39;aa&#39;</code> 或 <code>&#39;bb&#39;</code>，因此每找到一对字符，就可以添加这两个字符到回文串的两端，贡献长度 <code>+2</code>。</li><li>最后如果还有未配对的字符，可以选一个放在回文串的中间，这样仍然是有效的回文串，贡献长度 <code>+1</code>。</li></ul><p>具体算法如下：</p><ol><li><p>使用一个 <code>Set</code> 数据结构来记录字符是否已配对。</p><ul><li>遍历字符串 <code>s</code>，对每个字符： <ul><li>如果字符已经存在于 <code>Set</code> 中，说明找到一对相同字符，将这对字符贡献的长度 <code>+2</code>，然后从 <code>Set</code> 中删除该字符（表示这对字符已被使用）。</li><li>如果字符不存在于 <code>Set</code> 中，将该字符添加到 <code>Set</code> 中，表示它当前未找到配对。</li></ul></li></ul></li><li><p>遍历结束后，<code>Set</code> 中剩余的字符都是未配对的字符：</p><ul><li>如果 <code>Set</code> 中有字符（<code>set.size &gt; 0</code>），说明可以选择一个字符放在回文串的中间，贡献长度 <code>+1</code>。</li></ul></li><li><p>返回最终计算得到的最长回文串的长度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历一遍字符串 <code>s</code>。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是字符的种类数（最多为 52 个大小写字母），<code>Set</code> 最多存储 <code>k</code> 个字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录字符是否配对</span>
	<span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 发现配对的字符，贡献长度 +2</span>
			maxLength <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
			set<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除已配对的字符</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 未找到配对，将字符加入 Set</span>
			set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果还有未配对的字符，可以放一个字符在回文串中间</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span>size <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		maxLength <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"266",-1),S=t("td",{style:{"text-align":"left"}},"回文排列 🔒",-1),L=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=t("code",null,"位运算",-1),N=t("code",null,"哈希表",-1),O=t("code",null,"字符串",-1),V=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/palindrome-permutation",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"2131",-1),A=t("td",{style:{"text-align":"left"}},"连接两字母单词得到的最长回文串",-1),R=t("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},G=t("code",null,"贪心",-1),P=t("code",null,"数组",-1),D=t("code",null,"哈希表",-1),F=t("code",null,"2+",-1),H=t("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/longest-palindrome-by-concatenating-two-letter-words",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"2384",-1),U=t("td",{style:{"text-align":"left"}},"最大回文数字",-1),W=t("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=t("code",null,"贪心",-1),Z=t("code",null,"哈希表",-1),$=t("code",null,"字符串",-1),tt=t("code",null,"1+",-1),nt=t("td",{style:{"text-align":"center"}},"🟠",-1),et={style:{"text-align":"center"}},st={href:"https://leetcode.cn/problems/largest-palindromic-number",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/largest-palindromic-number",target:"_blank",rel:"noopener noreferrer"};function ot(lt,ct){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[_,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:s(()=>[g]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),t("a",b,[f,e(o)]),n(),t("a",v,[x,e(o)])]),y,d(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[w,S,L,t("td",E,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[O]),_:1})]),V,t("td",I,[t("a",j,[n("🀄️"),e(o)]),n(),t("a",B,[n("🔗"),e(o)])])]),t("tr",null,[z,A,R,t("td",T,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[D]),_:1}),n(),F]),H,t("td",J,[t("a",K,[n("🀄️"),e(o)]),n(),t("a",M,[n("🔗"),e(o)])])]),t("tr",null,[Q,U,W,t("td",X,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[Y]),_:1}),n(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[Z]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[$]),_:1}),n(),tt]),nt,t("td",et,[t("a",st,[n("🀄️"),e(o)]),n(),t("a",at,[n("🔗"),e(o)])])])])])])}const it=p(h,[["render",ot],["__file","0409.html.vue"]]);export{it as default};

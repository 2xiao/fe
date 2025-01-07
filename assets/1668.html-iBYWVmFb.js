import{_ as r,r as c,o as l,c as i,a as e,b as t,d as o,w as n,f as p,e as u}from"./app-WL8GPOUO.js";const g={},h=e("h1",{id:"_1668-最大重复子字符串",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1668-最大重复子字符串","aria-hidden":"true"},"#"),t(" 1668. 最大重复子字符串")],-1),m=e("code",null,"字符串",-1),b=e("code",null,"动态规划",-1),k=e("code",null,"字符串匹配",-1),_={href:"https://leetcode.cn/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>For a string <code>sequence</code>, a string <code>word</code> is <strong><code>k</code>-repeating</strong> if <code>word</code> concatenated <code>k</code> times is a substring of <code>sequence</code>. The <code>word</code>&#39;s <strong>maximum<code>k</code>-repeating value</strong> is the highest value <code>k</code> where <code>word</code> is <code>k</code>-repeating in <code>sequence</code>. If <code>word</code> is not a substring of <code>sequence</code>, <code>word</code>&#39;s maximum <code>k</code>-repeating value is <code>0</code>.</p><p>Given strings <code>sequence</code> and <code>word</code>, return <em>the<strong>maximum<code>k</code>-repeating value</strong> of <code>word</code> in <code>sequence</code></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sequence = &quot;ababc&quot;, word = &quot;ab&quot;</p><p>Output: 2</p><p>Explanation: &quot;abab&quot; is a substring in &quot;<em>abab</em> c&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sequence = &quot;ababc&quot;, word = &quot;ba&quot;</p><p>Output: 1</p><p>Explanation: &quot;ba&quot; is a substring in &quot;a <em>ba</em> bc&quot;. &quot;baba&quot; is not a substring in &quot;ababc&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: sequence = &quot;ababc&quot;, word = &quot;ac&quot;</p><p>Output: 0</p><p>Explanation: &quot;ac&quot; is not a substring in &quot;ababc&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sequence.length &lt;= 100</code></li><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>sequence</code> and <code>word</code> contains only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>sequence</code> ，如果字符串 <code>word</code> 连续重复 <code>k</code> 次形成的字符串是 <code>sequence</code> 的一个子字符串，那么单词 <code>word</code> 的重复值为<code>k</code> 。单词 <code>word</code> 的 最大重复值 是单词 <code>word</code> 在 <code>sequence</code> 中最大的重复值。如果 <code>word</code> 不是 <code>sequence</code> 的子串，那么重复值 <code>k</code> 为 <code>0</code> 。</p><p>给你一个字符串 <code>sequence</code> 和 <code>word</code> ，请你返回最大重复值 <code>k</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sequence = &quot;ababc&quot;, word = &quot;ab&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> &quot;abab&quot; 是 &quot;<strong>abab</strong> c&quot; 的子字符串。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sequence = &quot;ababc&quot;, word = &quot;ba&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> &quot;ba&quot; 是 &quot;a<strong>ba</strong> bc&quot; 的子字符串，但 &quot;baba&quot; 不是 &quot;ababc&quot; 的子字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> sequence = &quot;ababc&quot;, word = &quot;ac&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> &quot;ac&quot; 不是 &quot;ababc&quot; 的子字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sequence.length &lt;= 100</code></li><li><code>1 &lt;= word.length &lt;= 100</code></li><li><code>sequence</code> 和 <code>word</code> 都只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>通过逐步构造 <code>word</code> 的重复形式，并检查它是否是 <code>sequence</code> 的子串，可以得到最大重复次数。</p><ol><li><p>初始化 <code>res = 0</code>，表示当前最大的重复次数。</p></li><li><p>使用 <code>String.prototype.includes</code> 方法来判断 <code>sequence</code> 是否包含 <code>word</code> 的 <code>(res + 1)</code> 次重复。</p><ul><li>如果包含，则增加 <code>res</code>，继续检查更高的重复次数。</li></ul></li><li><p>当 <code>sequence</code> 不再包含 <code>word</code> 的 <code>(res + 1)</code> 次重复时，停止循环，返回 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(k * n)</code>，其中 <code>k</code> 是最大重复次数，<code>n</code> 是 <code>sequence</code> 的长度。</p><ul><li>每次生成的重复字符串并检查是否为子串的时间复杂度为<code>O(n)</code>；</li><li>一共检查 <code>k</code> 次。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k * m)</code>，其中 <code>k</code> 是最大重复次数，<code>m</code> 是 <code>word</code> 的长度。每次生成的重复字符串需要占用额外空间，其长度为 <code>(res + 1) * m</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sequence</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxRepeating</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sequence<span class="token punctuation">,</span> word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>sequence<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>res <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"1566",-1),E=e("td",{style:{"text-align":"left"}},"重复至少 K 次且长度为 M 的模式",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=e("code",null,"数组",-1),L=e("code",null,"枚举",-1),N=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/detect-pattern-of-length-m-repeated-k-or-more-times",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times",target:"_blank",rel:"noopener noreferrer"},R=e("td",{style:{"text-align":"center"}},"3137",-1),K=e("td",{style:{"text-align":"left"}},"K 周期字符串需要的最少操作次数",-1),S=e("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},F=e("code",null,"哈希表",-1),G=e("code",null,"字符串",-1),M=e("code",null,"计数",-1),z=e("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-make-word-k-periodic",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/minimum-number-of-operations-to-make-word-k-periodic",target:"_blank",rel:"noopener noreferrer"};function J(P,Q){const d=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return l(),i("div",null,[h,e("p",null,[t("🟢 "),o(d,{color:"#15bd66"},{default:n(()=>[t("Easy")]),_:1}),t("  🔖  "),o(s,{to:"/tag/string.html"},{default:n(()=>[m]),_:1}),t(),o(s,{to:"/tag/dynamic-programming.html"},{default:n(()=>[b]),_:1}),t(),o(s,{to:"/tag/string-matching.html"},{default:n(()=>[k]),_:1}),t("  🔗 "),e("a",_,[q,o(a)]),t(),e("a",f,[w,o(a)])]),x,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[y,E,e("td",I,[o(s,{to:"/problem/1566.html"},{default:n(()=>[t("[✓]")]),_:1})]),e("td",O,[o(s,{to:"/tag/array.html"},{default:n(()=>[C]),_:1}),t(),o(s,{to:"/tag/enumeration.html"},{default:n(()=>[L]),_:1})]),N,e("td",V,[e("a",j,[t("🀄️"),o(a)]),t(),e("a",B,[t("🔗"),o(a)])])]),e("tr",null,[R,K,S,e("td",T,[o(s,{to:"/tag/hash-table.html"},{default:n(()=>[F]),_:1}),t(),o(s,{to:"/tag/string.html"},{default:n(()=>[G]),_:1}),t(),o(s,{to:"/tag/counting.html"},{default:n(()=>[M]),_:1})]),z,e("td",A,[e("a",D,[t("🀄️"),o(a)]),t(),e("a",H,[t("🔗"),o(a)])])])])])])}const W=r(g,[["render",J],["__file","1668.html.vue"]]);export{W as default};

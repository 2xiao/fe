import{_ as l,r,o as i,c as p,a as t,b as e,d as n,w as o,f as d,e as u}from"./app-MkGfDfkx.js";const g={},h=t("h1",{id:"_1805-字符串中不同整数的数目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1805-字符串中不同整数的数目","aria-hidden":"true"},"#"),e(" 1805. 字符串中不同整数的数目")],-1),m=t("code",null,"哈希表",-1),k=t("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/number-of-different-integers-in-a-string",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/number-of-different-integers-in-a-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>word</code> that consists of digits and lowercase English letters.</p><p>You will replace every non-digit character with a space. For example, <code>&quot;a123bc34d8ef34&quot;</code> will become <code>&quot; 123 34 8 34&quot;</code>. Notice that you are left with some integers that are separated by at least one space: <code>&quot;123&quot;</code>, <code>&quot;34&quot;</code>, <code>&quot;8&quot;</code>, and <code>&quot;34&quot;</code>.</p><p>Return _the number of<strong>different</strong> integers after performing the replacement operations on _<code>word</code>.</p><p>Two integers are considered different if their decimal representations <strong>without any leading zeros</strong> are different.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: word = &quot;a <em>123</em> bc <em>34</em> d <em>8</em> ef <em>34</em> &quot;</p><p>Output: 3</p><p>Explanation: The three different integers are &quot;123&quot;, &quot;34&quot;, and &quot;8&quot;. Notice that &quot;34&quot; is only counted once.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word = &quot;leet <em>1234</em> code <em>234</em> &quot;</p><p>Output: 2</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word = &quot;a <em>1</em> b <em>01</em> c <em>001</em> &quot;</p><p>Output: 1</p><p>Explanation: The three integers &quot;1&quot;, &quot;01&quot;, and &quot;001&quot; all represent the same integer because</p><p>the leading zeros are ignored when comparing their decimal values.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word.length &lt;= 1000</code></li><li><code>word</code> consists of digits and lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>word</code> ，该字符串由数字和小写英文字母组成。</p><p>请你用空格替换每个不是数字的字符。例如，<code>&quot;a123bc34d8ef34&quot;</code> 将会变成 <code>&quot; 123 34 8 34&quot;</code> 。注意，剩下的这些整数为（相邻彼此至少有一个空格隔开）：<code>&quot;123&quot;</code>、<code>&quot;34&quot;</code>、<code>&quot;8&quot;</code> 和 <code>&quot;34&quot;</code> 。</p><p>返回对 <code>word</code> 完成替换后形成的 <strong>不同</strong> 整数的数目。</p><p>只有当两个整数的 <strong>不含前导零</strong> 的十进制表示不同，才认为这两个整数也不同。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;a<strong>123</strong> bc<strong>34</strong> d<strong>8</strong> ef<strong>34</strong> &quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 不同的整数有 &quot;123&quot;、&quot;34&quot; 和 &quot;8&quot; 。注意，&quot;34&quot; 只计数一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;leet<strong>1234</strong> code<strong>234</strong> &quot;</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word = &quot;a<strong>1</strong> b<strong>01</strong> c<strong>001</strong> &quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> &quot;1&quot;、&quot;01&quot; 和 &quot;001&quot; 视为同一个整数的十进制表示，因为在比较十进制值时会忽略前导零的存在。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word.length &lt;= 1000</code></li><li><code>word</code> 由数字和小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><p>该问题要求我们从给定的字符串 <code>word</code> 中提取不同的整数个数。字符串中包含字母和数字，数字可能由字母分隔。目标是找到所有不同的整数，并返回其个数。</p><h3 id="步骤分析" tabindex="-1"><a class="header-anchor" href="#步骤分析" aria-hidden="true">#</a> 步骤分析</h3><ol><li><strong>移除字母</strong>：<code>/[a-z]/g</code>：用于匹配字符串中的所有小写字母。通过 <code>replace</code> 将所有字母替换为空格，确保字母不干扰数字的提取。</li><li><strong>分割数字</strong>：使用空格将字符串分割，得到所有数字的子字符串。</li><li><strong>过滤空字符串</strong>：去除任何空字符串，确保仅保留有效的数字部分。</li><li><strong>去除前导零</strong>：将每个数字字符串转换成 <code>BigInt</code>，确保我们可以处理大数字并去除前导零。为了避免整数溢出问题，使用 <code>BigInt</code> 来存储和比较大数字。</li><li><strong>使用 Set</strong>：通过 <code>Set</code> 去重，确保每个整数只出现一次。</li><li><strong>返回结果</strong>：返回 <code>Set</code> 的大小，即不同整数的个数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。正则替换，<code>split</code> 和 <code>map</code> 都需要遍历一遍字符串。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要是存储处理后的数字。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numDifferentIntegers</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 替换所有字母为 &#39; &#39;，然后分割成数字</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>
		word
			<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">!==</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
			<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>BigInt<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> set<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"2419",-1),y=t("td",{style:{"text-align":"left"}},"按位与最大的最长子数组",-1),E=t("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},N=t("code",null,"位运算",-1),B=t("code",null,"脑筋急转弯",-1),z=t("code",null,"数组",-1),C=t("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/longest-subarray-with-maximum-bitwise-and",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/longest-subarray-with-maximum-bitwise-and",target:"_blank",rel:"noopener noreferrer"};function V(T,j){const c=r("font"),s=r("RouterLink"),a=r("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),n(s,{to:"/tag/hash-table.html"},{default:o(()=>[m]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[k]),_:1}),e("  🔗 "),t("a",q,[f,n(a)]),e(),t("a",_,[b,n(a)])]),v,d(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[w,y,E,t("td",I,[n(s,{to:"/tag/bit-manipulation.html"},{default:o(()=>[N]),_:1}),e(),n(s,{to:"/tag/brainteaser.html"},{default:o(()=>[B]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:o(()=>[z]),_:1})]),C,t("td",L,[t("a",O,[e("🀄️"),n(a)]),e(),t("a",S,[e("🔗"),n(a)])])])])])])}const Y=l(g,[["render",V],["__file","1805.html.vue"]]);export{Y as default};

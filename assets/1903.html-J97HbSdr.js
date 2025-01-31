import{_ as c,r,o as l,c as u,a as n,b as t,d as s,w as e,f as i,e as d}from"./app-MkGfDfkx.js";const g={},m=n("h1",{id:"_1903-字符串中的最大奇数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1903-字符串中的最大奇数","aria-hidden":"true"},"#"),t(" 1903. 字符串中的最大奇数")],-1),h=n("code",null,"贪心",-1),k=n("code",null,"数学",-1),_=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/largest-odd-number-in-string",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/largest-odd-number-in-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>num</code>, representing a large integer. Return _the<strong>largest-valued odd</strong> integer (as a string) that is a <strong>non-empty substring</strong> of _<code>num</code> <em>, or an empty string</em><code>&quot;&quot;</code><em>if no odd integer exists</em>.</p><p>A <strong>substring</strong> is a contiguous sequence of characters within a string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num = &quot;52&quot;</p><p>Output: &quot;5&quot;</p><p>Explanation: The only non-empty substrings are &quot;5&quot;, &quot;2&quot;, and &quot;52&quot;. &quot;5&quot; is the only odd number.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num = &quot;4206&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: There are no odd numbers in &quot;4206&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: num = &quot;35427&quot;</p><p>Output: &quot;35427&quot;</p><p>Explanation: &quot;35427&quot; is already an odd number.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num.length &lt;= 10^5</code></li><li><code>num</code> only consists of digits and does not contain any leading zeros.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>num</code> ，表示一个大整数。请你在字符串 <code>num</code> 的所有 <strong>非空子字符串</strong> 中找出 <strong>值最大的奇数</strong> ，并以字符串形式返回。如果不存在奇数，则返回一个空字符串 <strong><code>&quot;&quot;</code></strong> 。</p><p><strong>子字符串</strong> 是字符串中的一个连续的字符序列。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;52&quot;</p><p><strong>输出：</strong> &quot;5&quot;</p><p><strong>解释：</strong> 非空子字符串仅有 &quot;5&quot;、&quot;2&quot; 和 &quot;52&quot; 。&quot;5&quot; 是其中唯一的奇数。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;4206&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> 在 &quot;4206&quot; 中不存在奇数。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> num = &quot;35427&quot;</p><p><strong>输出：</strong> &quot;35427&quot;</p><p><strong>解释：</strong> &quot;35427&quot; 本身就是一个奇数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num.length &lt;= 10^5</code></li><li><code>num</code> 仅由数字组成且不含前导零</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>由于我们需要找到最长的奇数结尾的子字符串，直接从字符串末尾开始向前遍历，找到最后一个奇数即可：</p><ul><li>如果当前字符是奇数（<code>num[i] % 2 == 1</code>），说明从字符串开头到 <code>i</code> 的部分是满足条件的最长前缀，直接使用 <code>slice(0, i + 1)</code> 截取从起始到索引 <code>i</code>（包括 <code>i</code>）的子字符串返回。</li><li>如果没有找到奇数，说明整个字符串没有奇数，返回空字符串。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了 <code>slice</code> 方法生成子字符串，最坏情况下长度为 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">num</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestOddNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 从后往前遍历，找到最后一个奇数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> num<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> num<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 如果没有奇数，返回空字符串</span>
	<span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2264",-1),E=n("td",{style:{"text-align":"left"}},"字符串中最大的 3 位相同数字",-1),N={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"字符串",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/largest-3-same-digit-number-in-string",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/largest-3-same-digit-number-in-string",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const p=r("font"),o=r("RouterLink"),a=r("ExternalLinkIcon");return l(),u("div",null,[m,n("p",null,[t("🟢 "),s(p,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/greedy.html"},{default:e(()=>[h]),_:1}),t(),s(o,{to:"/tag/math.html"},{default:e(()=>[k]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:e(()=>[_]),_:1}),t("  🔗 "),n("a",b,[q,s(a)]),t(),n("a",f,[v,s(a)])]),x,i(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,E,n("td",N,[s(o,{to:"/problem/2264.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",O,[s(o,{to:"/tag/string.html"},{default:e(()=>[C]),_:1})]),I,n("td",L,[n("a",V,[t("🀄️"),s(a)]),t(),n("a",j,[t("🔗"),s(a)])])])])])])}const A=c(g,[["render",B],["__file","1903.html.vue"]]);export{A as default};

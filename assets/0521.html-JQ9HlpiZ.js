import{_ as u,r as c,o as r,c as d,a as e,b as n,d as t,w as o,f as p,e as i}from"./app-MsFeWfVD.js";const b={},h=e("h1",{id:"_521-最长特殊序列-i",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_521-最长特殊序列-i","aria-hidden":"true"},"#"),n(" 521. 最长特殊序列 Ⅰ")],-1),g=e("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/longest-uncommon-subsequence-i",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/longest-uncommon-subsequence-i",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two strings <code>a</code> and <code>b</code>, return <em>the length of the<strong>longest uncommon subsequence</strong> between</em> <code>a</code> <em>and</em> <code>b</code>. <em>If no such uncommon subsequence exists, return</em> <code>-1</code> .</p><p>An <strong>uncommon subsequence</strong> between two strings is a string that is a <strong>subsequence of exactly one of them</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: a = &quot;aba&quot;, b = &quot;cdc&quot;</p><p>Output: 3</p><p>Explanation: One longest uncommon subsequence is &quot;aba&quot; because &quot;aba&quot; is a subsequence of &quot;aba&quot; but not &quot;cdc&quot;.</p><p>Note that &quot;cdc&quot; is also a longest uncommon subsequence.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: a = &quot;aaa&quot;, b = &quot;bbb&quot;</p><p>Output: 3</p><p>Explanation: The longest uncommon subsequences are &quot;aaa&quot; and &quot;bbb&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: a = &quot;aaa&quot;, b = &quot;aaa&quot;</p><p>Output: -1</p><p>Explanation: Every subsequence of string a is also a subsequence of string b. Similarly, every subsequence of string b is also a subsequence of string a. So the answer would be -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= a.length, b.length &lt;= 100</code></li><li><code>a</code> and <code>b</code> consist of lower-case English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>a</code> 和 <code>b</code>，请返回 _这两个字符串中<strong>最长的特殊序列</strong> _ 的长度。如果不存在，则返回 <code>-1</code> 。</p><p><strong>「最长特殊序列」</strong> 定义如下：该序列为 <strong>某字符串独有的最长 子序列（即不能是其他字符串的子序列）</strong> 。</p><p>字符串 <code>s</code> 的子序列是在从 <code>s</code> 中删除任意数量的字符后可以获得的字符串。</p><ul><li>例如，<code>&quot;abc&quot;</code> 是 <code>&quot;aebdc&quot;</code> 的子序列，因为删除 <code>&quot;aebdc&quot;</code> 中的<code>&#39;e&#39;</code> <code>&#39;d&#39;</code>字符可以得到 <code>&quot;abc&quot;</code> 。 <code>&quot;aebdc&quot;</code> 的子序列还包括 <code>&quot;aebdc&quot;</code> 、 <code>&quot;aeb&quot;</code> 和 <code>&quot;&quot;</code> (空字符串)。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> a = &quot;aba&quot;, b = &quot;cdc&quot;</p><p><strong>输出:</strong> 3</p><p><strong>解释:</strong> 最长特殊序列可为 &quot;aba&quot; (或 &quot;cdc&quot;)，两者均为自身的子序列且不是对方的子序列。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> a = &quot;aaa&quot;, b = &quot;bbb&quot;</p><p><strong>输出：</strong> 3</p><p><strong>解释:</strong> 最长特殊序列是 &quot;aaa&quot; 和 &quot;bbb&quot; 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> a = &quot;aaa&quot;, b = &quot;aaa&quot;</p><p><strong>输出：</strong> -1</p><p><strong>解释:</strong> 字符串 a 的每个子序列也是字符串 b 的每个子序列。同样，字符串 b 的每个子序列也是字符串 a 的子序列。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= a.length, b.length &lt;= 100</code></li><li><code>a</code> 和 <code>b</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h3><h4 id="题目理解" tabindex="-1"><a class="header-anchor" href="#题目理解" aria-hidden="true">#</a> 题目理解</h4><p><strong>最长特殊序列</strong> 是指在两个字符串中，不能作为另一个字符串子序列的独有最长子序列。</p><ul><li>如果 <code>a</code> 和 <code>b</code> 相等： <ul><li>两个字符串彼此是完全相同的，无法找到独特的子序列，返回 <code>-1</code>。</li></ul></li><li>如果 <code>a</code> 和 <code>b</code> 不相等： <ul><li>较长的字符串不会是较短字符串的子序列（因为子序列需要完全包含所有字符），因此较长字符串本身就是最长特殊序列，返回其长度。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(min(a.length, b.length))</code>，比较字符串是否相等需要 <code>O(min(a.length, b.length))</code> 的时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量空间存储辅助变量</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">a</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">b</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findLUSlength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 如果两个字符串相等，返回 -1</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">===</span> b<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果不相等，返回较长字符串的长度</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a<span class="token punctuation">.</span>length<span class="token punctuation">,</span> b<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"522",-1),y=e("td",{style:{"text-align":"left"}},"最长特殊序列 II",-1),w=e("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=e("code",null,"数组",-1),O=e("code",null,"哈希表",-1),L=e("code",null,"双指针",-1),N=e("code",null,"2+",-1),C=e("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/longest-uncommon-subsequence-ii",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/longest-uncommon-subsequence-ii",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return r(),d("div",null,[h,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),t(s,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),n("  🔗 "),e("a",q,[m,t(a)]),n(),e("a",k,[_,t(a)])]),f,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[x,y,w,e("td",E,[t(s,{to:"/tag/array.html"},{default:o(()=>[I]),_:1}),n(),t(s,{to:"/tag/hash-table.html"},{default:o(()=>[O]),_:1}),n(),t(s,{to:"/tag/two-pointers.html"},{default:o(()=>[L]),_:1}),n(),N]),C,e("td",V,[e("a",S,[n("🀄️"),t(a)]),n(),e("a",j,[n("🔗"),t(a)])])])])])])}const G=u(b,[["render",B],["__file","0521.html.vue"]]);export{G as default};

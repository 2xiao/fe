import{_ as l,r as t,o as i,c as r,a as n,b as s,d as a,w as e,e as u}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_1417-重新格式化字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1417-重新格式化字符串","aria-hidden":"true"},"#"),s(" 1417. 重新格式化字符串")],-1),g=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/reformat-the-string",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/reformat-the-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an alphanumeric string <code>s</code>. (<strong>Alphanumeric string</strong> is a string consisting of lowercase English letters and digits).</p><p>You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.</p><p>Return <em>the reformatted string</em> or return <strong>an empty string</strong> if it is impossible to reformat the string.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;a0b1c2&quot;</p><p>Output: &quot;0a1b2c&quot;</p><p>Explanation: No two adjacent characters have the same type in &quot;0a1b2c&quot;. &quot;a0b1c2&quot;, &quot;0a1b2c&quot;, &quot;0c2a1b&quot; are also valid permutations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: &quot;leetcode&quot; has only characters so we cannot separate them by digits.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;1229857369&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: &quot;1229857369&quot; has only digits so we cannot separate them by characters.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> consists of only lowercase English letters and/or digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个混合了数字和字母的字符串 <code>s</code>，其中的字母均为小写英文字母。</p><p>请你将该字符串重新格式化，使得任意两个相邻字符的类型都不同。也就是说，字母后面应该跟着数字，而数字后面应该跟着字母。</p><p>请你返回 <strong>重新格式化后</strong> 的字符串；如果无法按要求重新格式化，则返回一个 <strong>空字符串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a0b1c2&quot;</p><p><strong>输出：</strong> &quot;0a1b2c&quot;</p><p><strong>解释：</strong> &quot;0a1b2c&quot; 中任意两个相邻字符的类型都不同。 &quot;a0b1c2&quot;, &quot;0a1b2c&quot;, &quot;0c2a1b&quot; 也是满足题目要求的答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leetcode&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> &quot;leetcode&quot; 中只有字母，所以无法满足重新格式化的条件。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1229857369&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> &quot;1229857369&quot; 中只有数字，所以无法满足重新格式化的条件。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;covid2019&quot;</p><p><strong>输出：</strong> &quot;c2o0v1i9d&quot;</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;ab123&quot;</p><p><strong>输出：</strong> &quot;1a2b3&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 500</code></li><li><code>s</code> 仅由小写英文字母和/或数字组成。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分类字符</strong>：</p><ul><li>遍历字符串 <code>s</code>，将其中的数字存入数组 <code>digit</code>，字母存入数组 <code>alphabet</code>。</li><li>使用正则表达式 <code>/^[0-9]$/</code> 判断字符是否为数字。</li></ul></li><li><p><strong>检查是否可重排</strong>：</p><ul><li>如果数字与字母的数量差绝对值大于 1，则无法交替排列，返回空字符串 <code>&quot;&quot;</code>。</li></ul></li><li><p><strong>交替排列</strong>：</p><ul><li>根据 <code>digit</code> 和 <code>alphabet</code> 的长度决定哪一组先开始（长的那组先）。</li><li>遍历较长数组，同时从两组中交替拼接字符。</li></ul></li><li><p><strong>拼接结果</strong>：</p><ul><li>将交替拼接的结果存储到字符串 <code>res</code> 中。</li><li>如果某组长度多出一个字符，会自动拼接到末尾。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回最终的 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，遍历字符串一次，拼接结果也只需线性时间。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要存储两个数组 <code>digit</code> 和 <code>alphabet</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reformat</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> digit <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> alphabet <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 分类字符</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^[0-9]$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			digit<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			alphabet<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查是否可重排</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>digit<span class="token punctuation">.</span>length <span class="token operator">-</span> alphabet<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>

	<span class="token comment">// 交替排列</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> longer <span class="token operator">=</span> digit<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> alphabet<span class="token punctuation">.</span>length <span class="token operator">?</span> digit <span class="token operator">:</span> alphabet<span class="token punctuation">;</span>
	<span class="token keyword">let</span> shorter <span class="token operator">=</span> digit<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> alphabet<span class="token punctuation">.</span>length <span class="token operator">?</span> digit <span class="token operator">:</span> alphabet<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> longer<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">+=</span> longer<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>shorter<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> shorter<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,34);function f(_,w){const p=t("font"),c=t("RouterLink"),o=t("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(c,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",h,[b,a(o)]),s(),n("a",m,[v,a(o)])]),q])}const x=l(d,[["render",f],["__file","1417.html.vue"]]);export{x as default};

import{_ as l,r as o,o as i,c as u,a as n,b as s,d as a,w as e,e as r}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_187-重复的-dna-序列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_187-重复的-dna-序列","aria-hidden":"true"},"#"),s(" 187. 重复的 DNA 序列")],-1),A=n("code",null,"位运算",-1),h=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),m=n("code",null,"滑动窗口",-1),b=n("code",null,"哈希函数",-1),v=n("code",null,"滚动哈希",-1),C={href:"https://leetcode.cn/problems/repeated-dna-sequences",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/repeated-dna-sequences",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>DNA sequence</strong> is composed of a series of nucleotides abbreviated as <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, and <code>&#39;T&#39;</code>.</p><ul><li>For example, <code>&quot;ACGAATTCCG&quot;</code> is a <strong>DNA sequence</strong>.</li></ul><p>When studying <strong>DNA</strong> , it is useful to identify repeated sequences within the DNA.</p><p>Given a string <code>s</code> that represents a <strong>DNA sequence</strong> , return all the <strong><code>10</code>-letter-long</strong> sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT&quot;</p><p>Output: [&quot;AAAAACCCCC&quot;,&quot;CCCCCAAAAA&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;AAAAAAAAAAAAA&quot;</p><p>Output: [&quot;AAAAAAAAAA&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> is either <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, or <code>&#39;T&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>DNA 序列</strong> 由一系列核苷酸组成，缩写为 <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code> 和 <code>&#39;T&#39;</code>.。</p><ul><li>例如，<code>&quot;ACGAATTCCG&quot;</code> 是一个 <strong>DNA 序列</strong> 。</li></ul><p>在研究 <strong>DNA</strong> 时，识别 DNA 中的重复序列非常有用。</p><p>给定一个表示 <strong>DNA 序列</strong> 的字符串 <code>s</code> ，返回所有在 DNA 分子中出现不止一次的 <strong>长度为 <code>10</code></strong> 的序列(子字符串)。你可以按 <strong>任意顺序</strong> 返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT&quot;</p><p><strong>输出：</strong>[&quot;AAAAACCCCC&quot;,&quot;CCCCCAAAAA&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;AAAAAAAAAAAAA&quot;</p><p><strong>输出：</strong>[&quot;AAAAAAAAAA&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]\`\`==\`\`&#39;A&#39;</code>、<code>&#39;C&#39;</code>、<code>&#39;G&#39;</code> or <code>&#39;T&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>滑动窗口获取长度为 10 的子串</strong>：</p><ul><li>使用一个长度为 10 的滑动窗口，遍历字符串 <code>s</code>。</li><li>对每个窗口内的子串进行处理。</li></ul></li><li><p><strong>使用集合记录子串出现情况</strong>：</p><ul><li>使用两个 <code>Set</code>： <ul><li><code>subSet</code> 记录所有已扫描到的子串。</li><li><code>res</code> 记录重复出现的子串。</li></ul></li><li>对于每个子串： <ul><li>如果已经在 <code>subSet</code> 中且不在 <code>res</code> 中，将其加入 <code>res</code>。</li><li>否则，将其加入 <code>subSet</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>将 <code>res</code> 中的子串转换为数组并返回。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串一次，窗口大小为 10，每次取子串的复杂度为 <code>O(10)</code>，总复杂度为 <code>O((n - 10) * 10)</code>，简化为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用两个 <code>Set</code> 存储子串，最坏情况下存储 <code>O(n)</code> 个长度为 10 的字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findRepeatedDnaSequences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> subSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历所有长度为 10 的子串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n <span class="token operator">-</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> substr <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果子串已经在 subSet 中且不在 res 中，则加入 res</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>subSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>substr<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>substr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			subSet<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>substr<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回结果数组</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function y(x,N){const p=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/bit-manipulation.html"},{default:e(()=>[A]),_:1}),s(),a(t,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/string.html"},{default:e(()=>[g]),_:1}),s(),a(t,{to:"/tag/sliding-window.html"},{default:e(()=>[m]),_:1}),s(),a(t,{to:"/tag/hash-function.html"},{default:e(()=>[b]),_:1}),s(),a(t,{to:"/tag/rolling-hash.html"},{default:e(()=>[v]),_:1}),s("  🔗 "),n("a",C,[_,a(c)]),s(),n("a",f,[q,a(c)])]),w])}const G=l(d,[["render",y],["__file","0187.html.vue"]]);export{G as default};

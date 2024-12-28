import{_ as l,r as t,o as r,c as i,a as n,b as s,d as e,w as o,e as d}from"./app-fEpXkbSw.js";const u={},k=n("h1",{id:"_1935-可以输入的最大单词数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1935-可以输入的最大单词数","aria-hidden":"true"},"#"),s(" 1935. 可以输入的最大单词数")],-1),b=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/maximum-number-of-words-you-can-type",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/maximum-number-of-words-you-can-type",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a malfunctioning keyboard where some letter keys do not work. All other keys on the keyboard work properly.</p><p>Given a string <code>text</code> of words separated by a single space (no leading or trailing spaces) and a string <code>brokenLetters</code> of all <strong>distinct</strong> letter keys that are broken, return <em>the<strong>number of words</strong> in</em> <code>text</code> <em>you can fully type using this keyboard</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: text = &quot;hello world&quot;, brokenLetters = &quot;ad&quot;</p><p>Output: 1</p><p>Explanation: We cannot type &quot;world&quot; because the &#39;d&#39; key is broken.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: text = &quot;leet code&quot;, brokenLetters = &quot;lt&quot;</p><p>Output: 1</p><p>Explanation: We cannot type &quot;leet&quot; because the &#39;l&#39; and &#39;t&#39; keys are broken.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: text = &quot;leet code&quot;, brokenLetters = &quot;e&quot;</p><p>Output: 0</p><p>Explanation: We cannot type either word because the &#39;e&#39; key is broken.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= text.length &lt;= 10^4</code></li><li><code>0 &lt;= brokenLetters.length &lt;= 26</code></li><li><code>text</code> consists of words separated by a single space without any leading or trailing spaces.</li><li>Each word only consists of lowercase English letters.</li><li><code>brokenLetters</code> consists of <strong>distinct</strong> lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>键盘出现了一些故障，有些字母键无法正常工作。而键盘上所有其他键都能够正常工作。</p><p>给你一个由若干单词组成的字符串 <code>text</code> ，单词间由单个空格组成（不含前导和尾随空格）；另有一个字符串 <code>brokenLetters</code> ，由所有已损坏的不同字母键组成，返回你可以使用此键盘完全输入的 <code>text</code> 中单词的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;hello world&quot;, brokenLetters = &quot;ad&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 无法输入 &quot;world&quot; ，因为字母键 &#39;d&#39; 已损坏。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;leet code&quot;, brokenLetters = &quot;lt&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 无法输入 &quot;leet&quot; ，因为字母键 &#39;l&#39; 和 &#39;t&#39; 已损坏。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> text = &quot;leet code&quot;, brokenLetters = &quot;e&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 无法输入任何单词，因为字母键 &#39;e&#39; 已损坏。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= text.length &lt;= 10^4</code></li><li><code>0 &lt;= brokenLetters.length &lt;= 26</code></li><li><code>text</code> 由若干用单个空格分隔的单词组成，且不含任何前导和尾随空格</li><li>每个单词仅由小写英文字母组成</li><li><code>brokenLetters</code> 由 <strong>互不相同</strong> 的小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分割单词</strong>：</p><ul><li>使用 <code>split(&#39; &#39;)</code> 将 <code>text</code> 按空格分割为多个单词。</li></ul></li><li><p><strong>处理损坏字符</strong>：</p><ul><li>若 <code>brokenLetters</code> 为空，直接返回单词总数。</li><li>使用 <code>Set</code> 数据结构存储 <code>brokenLetters</code> 的字符，方便快速查找是否存在某个损坏的字符。</li></ul></li><li><p><strong>遍历单词</strong>：</p><ul><li>对每个单词，逐字符检查是否包含在 <code>broken</code> 集合中。</li><li>如果存在任意一个字符在 <code>broken</code> 中，则当前单词无法输入，计入 <code>brokenCount</code>。</li></ul></li><li><p><strong>计算可输入单词数</strong>：</p><ul><li>总单词数减去无法输入的单词数即为结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + k)</code></p><ul><li>分割单词：<code>O(k)</code>，其中 <code>k</code> 为损坏字符串 <code>text</code> 的长度。</li><li>遍历单词：假设单词总长度为 <code>n</code>，每个字符需要 <code>O(1)</code> 时间检查是否存在于 <code>broken</code> 集合中，总耗时 <code>O(n)</code>。</li><li>总时间复杂度：<code>O(n + k)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li>主要为单词列表 <code>words</code> 数组所占用的空间。</li><li><code>broken</code> 集合存储损坏字母最多 <code>O(26)</code>，可视为 <code>O(1)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">text</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">brokenLetters</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canBeTypedWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">text<span class="token punctuation">,</span> brokenLetters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> words <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>brokenLetters<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token keyword">let</span> broken <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>brokenLetters<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> brokenCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>broken<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				brokenCount<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> brokenCount<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function f(q,_){const c=t("font"),a=t("RouterLink"),p=t("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/hash-table.html"},{default:o(()=>[b]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),s("  🔗 "),n("a",h,[m,e(p)]),s(),n("a",v,[w,e(p)])]),y])}const L=l(u,[["render",f],["__file","1935.html.vue"]]);export{L as default};

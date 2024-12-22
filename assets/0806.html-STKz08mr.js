import{_ as p,r as a,o as l,c as d,a as n,b as s,d as e,w as t,e as r}from"./app-U2ekqv2z.js";const u={},h=n("h1",{id:"_806-写字符串需要的行数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_806-写字符串需要的行数","aria-hidden":"true"},"#"),s(" 806. 写字符串需要的行数")],-1),k=n("code",null,"数组",-1),m=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/number-of-lines-to-write-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/number-of-lines-to-write-string",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> of lowercase English letters and an array <code>widths</code> denoting <strong>how many pixels wide</strong> each lowercase English letter is. Specifically, <code>widths[0]</code> is the width of <code>&#39;a&#39;</code>, <code>widths[1]</code> is the width of <code>&#39;b&#39;</code>, and so on.</p><p>You are trying to write <code>s</code> across several lines, where <strong>each line is no longer than</strong><code>100</code><strong>pixels</strong>. Starting at the beginning of <code>s</code>, write as many letters on the first line such that the total width does not exceed <code>100</code> pixels. Then, from where you stopped in <code>s</code>, continue writing as many letters as you can on the second line. Continue this process until you have written all of <code>s</code>.</p><p>Return <em>an array</em><code>result</code> <em>of length 2 where:</em></p><ul><li><code>result[0]</code><em>is the total number of lines.</em></li><li><code>result[1]</code><em>is the width of the last line in pixels.</em></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = &quot;abcdefghijklmnopqrstuvwxyz&quot;</p><p>Output: [3,60]</p><p>Explanation: You can write s as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abcdefghij // 100 pixels wide
klmnopqrst // 100 pixels wide
uvwxyz // 60 pixels wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a total of 3 lines, and the last line is 60 pixels wide.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10], s = &quot;bbbcccdddaaa&quot;</p><p>Output: [2,4]</p><p>Explanation: You can write s as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bbbcccdddaa // 98 pixels wide
a // 4 pixels wide
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>There are a total of 2 lines, and the last line is 4 pixels wide.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>widths.length == 26</code></li><li><code>2 &lt;= widths[i] &lt;= 10</code></li><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> contains only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>我们要把给定的字符串 <code>S</code> 从左到右写到每一行上，每一行的最大宽度为 100 个单位，如果我们在写某个字母的时候会使这行超过了 100 个单位，那么我们应该把这个字母写到下一行。我们给定了一个数组 <code>widths</code> ，这个数组 widths[0] 代表 &#39;a&#39; 需要的单位， widths[1] 代表 &#39;b&#39; 需要的单位，...， widths[25] 代表 &#39;z&#39; 需要的单位。</p><p>现在回答两个问题：至少多少行能放下<code>S</code>，以及最后一行使用的宽度是多少个单位？将你的答案作为长度为 2 的整数列表返回。</p><blockquote><p><strong>示例 1:</strong></p><p><strong>输入:</strong></p><p>widths = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]</p><p>S = &quot;abcdefghijklmnopqrstuvwxyz&quot;</p><p><strong>输出:</strong> [3, 60]</p><p><strong>解释:</strong> 所有的字符拥有相同的占用单位 10。所以书写所有的 26 个字母，</p><p>我们需要 2 个整行和占用 60 个单位的一行。</p><p><strong>示例 2:</strong></p><p><strong>输入:</strong></p><p>widths = [4,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]</p><p>S = &quot;bbbcccdddaaa&quot;</p><p><strong>输出:</strong> [2, 4]</p><p><strong>解释:</strong> 除去字母&#39;a&#39;所有的字符都是相同的单位 10，并且字符串 &quot;bbbcccdddaa&quot; 将会覆盖 <code>9 * 10 + 2 * 4 = 98</code> 个单位.</p><p>最后一个字母 &#39;a&#39; 将会被写到第二行，因为第一行只剩下 2 个单位了。</p><p>所以，这个答案是 2 行，第二行有 4 个单位宽度。</p></blockquote><p><strong>注:</strong></p><ul><li>字符串 <code>S</code> 的长度在 [1, 1000] 的范围。</li><li><code>S</code> 只包含小写字母。</li><li><code>widths</code> 是长度为 <code>26</code>的数组。</li><li><code>widths[i]</code> 值的范围在 <code>[2, 10]</code>。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>lineWidth</code>：用来记录当前行已使用的宽度。</li><li><code>lines</code>：记录行数。</li></ul></li><li><p><strong>遍历字符串 <code>S</code></strong>：</p><ul><li>对于字符串中的每个字符 <code>c</code>，我们需要找到它对应的宽度 <code>widths[c - &#39;a&#39;]</code>，然后检查当前行剩余的空间。</li><li>如果当前行能容纳该字符，则将该字符加入当前行并更新 <code>lineWidth</code>。</li><li>如果当前行不能容纳该字符，则换行，增加 <code>lines</code> 并将该字符放入下一行。</li></ul></li><li><p><strong>最后的行宽</strong>：</p><ul><li>最后返回的结果中，第二个值应该是最后一行的宽度（即 <code>lineWidth</code>）。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>S</code> 的长度。只需要遍历一次字符串，对于每个字符进行常数时间的计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">S</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">widths</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">numberOfLines</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token constant">S</span><span class="token punctuation">,</span> widths</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> lines <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 至少有一行</span>
	<span class="token keyword">let</span> lineWidth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前行的宽度</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token constant">S</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> width <span class="token operator">=</span> widths<span class="token punctuation">[</span><span class="token constant">S</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>lineWidth <span class="token operator">+</span> width <span class="token operator">&lt;=</span> <span class="token number">100</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前行可以容纳这个字母</span>
			lineWidth <span class="token operator">+=</span> width<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前行不能容纳，换行</span>
			lines<span class="token operator">++</span><span class="token punctuation">;</span>
			lineWidth <span class="token operator">=</span> width<span class="token punctuation">;</span> <span class="token comment">// 新行开始，当前字母占用当前行的宽度</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token punctuation">[</span>lines<span class="token punctuation">,</span> lineWidth<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23);function _(x,y){const i=a("font"),o=a("RouterLink"),c=a("ExternalLinkIcon");return l(),d("div",null,[h,n("p",null,[s("🟢 "),e(i,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",b,[v,e(c)]),s(),n("a",g,[w,e(c)])]),f])}const S=p(u,[["render",_],["__file","0806.html.vue"]]);export{S as default};

import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app--GvfAkAr.js";const k={},h=n("h1",{id:"_1002-查找共用字符",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1002-查找共用字符","aria-hidden":"true"},"#"),s(" 1002. 查找共用字符")],-1),m=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/find-common-characters",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/find-common-characters",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string array <code>words</code>, return <em>an array of all characters that show up in all strings within the</em><code>words</code> <em>(including duplicates)</em>. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;bella&quot;,&quot;label&quot;,&quot;roller&quot;]</p><p>Output: [&quot;e&quot;,&quot;l&quot;,&quot;l&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;cool&quot;,&quot;lock&quot;,&quot;cook&quot;]</p><p>Output: [&quot;c&quot;,&quot;o&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> ，请你找出所有在 <code>words</code> 的每个字符串中都出现的共用字符（<strong>包括重复字符</strong> ），并以数组形式返回。你可以按 <strong>任意顺序</strong> 返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;bella&quot;,&quot;label&quot;,&quot;roller&quot;]</p><p><strong>输出：</strong>[&quot;e&quot;,&quot;l&quot;,&quot;l&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;cool&quot;,&quot;lock&quot;,&quot;cook&quot;]</p><p><strong>输出：</strong>[&quot;c&quot;,&quot;o&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>每个字符串可以用一个长度为 26 的数组表示，记录每个字符的出现频率。 使用这些频率数组，求出所有字符串的字符频率的<strong>交集</strong>，即每个字符的最小频率。</p><ol><li>初始化一个数组 <code>minFreq</code>，长度为 26，初始值为 <code>Infinity</code>，表示每个字符的最小频率。</li><li>遍历 <code>words</code> 中的每个字符串，计算它的字符频率。</li><li>更新 <code>minFreq</code>，对于每个字符，取当前频率和最小频率的较小值。</li><li>根据 <code>minFreq</code> 构造结果数组，如果某个字符在 <code>minFreq</code> 中的值为 <code>k</code>，则将该字符添加 <code>k</code> 次到结果数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n * m)</code></p><ul><li>遍历每个字符串的字符频率：<code>O(n * m)</code>，其中 <code>n</code> 是 <code>words</code> 的长度，<code>m</code> 是每个字符串的平均长度。</li><li>遍历字符频率数组进行交集：<code>O(26 * n)</code>，常数时间复杂度。</li><li>总时间复杂度为 <code>O(n * m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个大小为 <code>26</code> 的数组 <code>minFreq</code> 和一个 <code>freq</code> 数组，空间复杂度为 <code>O(26)</code>，即 <code>O(1)</code>（常数空间）。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">commonChars</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> minFreq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">Infinity</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化最小频率数组</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">26</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前单词的字符频率</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			freq<span class="token punctuation">[</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minFreq<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minFreq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> freq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新最小频率</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">26</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>minFreq<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			minFreq<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"350",-1),C=n("td",{style:{"text-align":"left"}},"两个数组的交集 II",-1),F={style:{"text-align":"center"}},O={style:{"text-align":"left"}},I=n("code",null,"数组",-1),E=n("code",null,"哈希表",-1),A=n("code",null,"双指针",-1),L=n("code",null,"2+",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"};function R(S,G){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[_]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",g,[f,a(e)]),s(),n("a",q,[v,a(e)])]),w,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,C,n("td",F,[a(o,{to:"/problem/0350.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",O,[a(o,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[E]),_:1}),s(),a(o,{to:"/tag/two-pointers.html"},{default:t(()=>[A]),_:1}),s(),L]),N,n("td",V,[n("a",j,[s("🀄️"),a(e)]),s(),n("a",B,[s("🔗"),a(e)])])])])])])}const T=l(k,[["render",R],["__file","1002.html.vue"]]);export{T as default};

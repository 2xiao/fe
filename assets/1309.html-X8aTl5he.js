import{_ as l,r as o,o as i,c as r,a as n,b as s,d as a,w as t,e as d}from"./app--GvfAkAr.js";const u={},k=n("h1",{id:"_1309-解码字母到整数映射",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1309-解码字母到整数映射","aria-hidden":"true"},"#"),s(" 1309. 解码字母到整数映射")],-1),m=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/decrypt-string-from-alphabet-to-integer-mapping",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> formed by digits and <code>&#39;#&#39;</code>. We want to map <code>s</code> to English lowercase characters as follows:</p><ul><li>Characters (<code>&#39;a&#39;</code> to <code>&#39;i&#39;</code>) are represented by (<code>&#39;1&#39;</code> to <code>&#39;9&#39;</code>) respectively.</li><li>Characters (<code>&#39;j&#39;</code> to <code>&#39;z&#39;</code>) are represented by (<code>&#39;10#&#39;</code> to <code>&#39;26#&#39;</code>) respectively.</li></ul><p>Return <em>the string formed after mapping</em>.</p><p>The test cases are generated so that a unique mapping will always exist.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;10#11#12&quot;</p><p>Output: &quot;jkab&quot;</p><p>Explanation: &quot;j&quot; -&gt; &quot;10#&quot; , &quot;k&quot; -&gt; &quot;11#&quot; , &quot;a&quot; -&gt; &quot;1&quot; , &quot;b&quot; -&gt; &quot;2&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;1326#&quot;</p><p>Output: &quot;acz&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s</code> consists of digits and the <code>&#39;#&#39;</code> letter.</li><li><code>s</code> will be a valid string such that mapping is always possible.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，它由数字（<code>&#39;0&#39;</code> - <code>&#39;9&#39;</code>）和 <code>&#39;#&#39;</code> 组成。我们希望按下述规则将 <code>s</code> 映射为一些小写英文字符：</p><ul><li>字符（<code>&#39;a&#39;</code> - <code>&#39;i&#39;</code>）分别用（<code>&#39;1&#39;</code> - <code>&#39;9&#39;</code>）表示。</li><li>字符（<code>&#39;j&#39;</code> - <code>&#39;z&#39;</code>）分别用（<code>&#39;10#&#39;</code> - <code>&#39;26#&#39;</code>）表示。</li></ul><p>返回映射之后形成的新字符串。</p><p>题目数据保证映射始终唯一。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;10#11#12&quot;</p><p><strong>输出：</strong> &quot;jkab&quot;</p><p><strong>解释：</strong> &quot;j&quot; -&gt; &quot;10#&quot; , &quot;k&quot; -&gt; &quot;11#&quot; , &quot;a&quot; -&gt; &quot;1&quot; , &quot;b&quot; -&gt; &quot;2&quot;.</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1326#&quot;</p><p><strong>输出：</strong> &quot;acz&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 1000</code></li><li><code>s[i]</code> 只包含数字（<code>&#39;0&#39;</code>-<code>&#39;9&#39;</code>）和 <code>&#39;#&#39;</code> 字符。</li><li><code>s</code> 是映射始终存在的有效字符串。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>创建一个空字符串 <code>res</code> 来存储解码后的字母。</p></li><li><p>使用 <code>for</code> 循环逐字符遍历字符串 <code>s</code>。</p></li><li><p><strong>检查特殊规则</strong></p><ul><li>如果当前字符的后两位是 <code>#</code>，说明这是一个 <code>10#-26#</code> 的编码。 <ul><li>提取两个字符（<code>s[i]</code> 和 <code>s[i+1]</code>）组合成数字。</li><li>跳过这三个字符（<code>i</code> 增加 2）。</li></ul></li><li>如果没有 <code>#</code>，直接解码当前字符。</li></ul></li><li><p><strong>解码数字为字母</strong></p><ul><li>使用 ASCII 码转换，计算出对应字母并追加到结果字符串。</li><li><code>String.fromCharCode(&#39;a&#39;.charCodeAt() + num - 1)</code></li></ul></li><li><p>遍历完成后，返回解码结果字符串 <code>res</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串长度，遍历字符串 <code>s</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个结果字符串 <code>res</code> 和临时变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">freqAlphabets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果字符串</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前字符对应的数字</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查是否是特殊规则</span>
			num <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> s<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 组合两位数字</span>
			i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span> <span class="token comment">// 跳过两个字符</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 解码数字为字母并追加到结果</span>
		res <span class="token operator">+=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回解码后的字符串</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function f(_,y){const c=o("font"),p=o("RouterLink"),e=o("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[h,a(e)]),s(),n("a",b,[q,a(e)])]),v])}const x=l(u,[["render",f],["__file","1309.html.vue"]]);export{x as default};

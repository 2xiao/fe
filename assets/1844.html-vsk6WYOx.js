import{_ as i,r as c,o as p,c as r,a as s,b as n,d as t,w as e,f as d,e as u}from"./app-MkGfDfkx.js";const h={},g=s("h1",{id:"_1844-将所有数字用字符替换",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1844-将所有数字用字符替换","aria-hidden":"true"},"#"),n(" 1844. 将所有数字用字符替换")],-1),k=s("code",null,"字符串",-1),f={href:"https://leetcode.cn/problems/replace-all-digits-with-characters",target:"_blank",rel:"noopener noreferrer"},m=s("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/replace-all-digits-with-characters",target:"_blank",rel:"noopener noreferrer"},b=s("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> string <code>s</code> that has lowercase English letters in its <strong>even</strong> indices and digits in its <strong>odd</strong> indices.</p><p>You must perform an operation <code>shift(c, x)</code>, where <code>c</code> is a character and <code>x</code> is a digit, that returns the <code>xth</code> character after <code>c</code>.</p><ul><li>For example, <code>shift(&#39;a&#39;, 5) = &#39;f&#39;</code> and <code>shift(&#39;x&#39;, 0) = &#39;x&#39;</code>.</li></ul><p>For every <strong>odd</strong> index <code>i</code>, you want to replace the digit <code>s[i]</code> with the result of the <code>shift(s[i-1], s[i])</code> operation.</p><p>Return <code>s</code> ** after replacing all digits. It is <strong>guaranteed</strong> that <strong><code>shift(s[i-1], s[i])</code></strong> will never exceed **<code>&#39;z&#39;</code>.</p><p><strong>Note</strong> that <code>shift(c, x)</code> is <strong>not</strong> a preloaded function, but an operation <em>to be implemented</em> as part of the solution.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;a1c1e1&quot;</p><p>Output: &quot;abcdef&quot;</p><p>Explanation: The digits are replaced as follows:</p><ul><li>s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;</li><li>s[3] -&gt; shift(&#39;c&#39;,1) = &#39;d&#39;</li><li>s[5] -&gt; shift(&#39;e&#39;,1) = &#39;f&#39;</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a1b2c3d4e&quot;</p><p>Output: &quot;abbdcfdhe&quot;</p><p>Explanation: The digits are replaced as follows:</p><ul><li>s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;</li><li>s[3] -&gt; shift(&#39;b&#39;,2) = &#39;d&#39;</li><li>s[5] -&gt; shift(&#39;c&#39;,3) = &#39;f&#39;</li><li>s[7] -&gt; shift(&#39;d&#39;,4) = &#39;h&#39;</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> consists only of lowercase English letters and digits.</li><li><code>shift(s[i-1], s[i]) &lt;= &#39;z&#39;</code> for all <strong>odd</strong> indices <code>i</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的字符串 <code>s</code> ，它的 <strong>偶数</strong> 下标处为小写英文字母，<strong>奇数</strong> 下标处为数字。</p><p>定义一个函数 <code>shift(c, x)</code> ，其中 <code>c</code> 是一个字符且 <code>x</code> 是一个数字，函数返回字母表中 <code>c</code> 后面第 <code>x</code> 个字符。</p><ul><li>比方说，<code>shift(&#39;a&#39;, 5) = &#39;f&#39;</code> 和 <code>shift(&#39;x&#39;, 0) = &#39;x&#39;</code> 。</li></ul><p>对于每个 <strong>奇数</strong> 下标 <code>i</code> ，你需要将数字 <code>s[i]</code> 用 <code>shift(s[i-1], s[i])</code> 替换。</p><p>请你替换所有数字以后，将字符串 <code>s</code> 返回。题目 <strong>保证</strong> <code>shift(s[i-1], s[i])</code> 不会超过 <code>&#39;z&#39;</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a1c1e1&quot;</p><p><strong>输出：</strong> &quot;abcdef&quot;</p><p><strong>解释：</strong> 数字被替换结果如下：</p><ul><li>s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;</li><li>s[3] -&gt; shift(&#39;c&#39;,1) = &#39;d&#39;</li><li>s[5] -&gt; shift(&#39;e&#39;,1) = &#39;f&#39;</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a1b2c3d4e&quot;</p><p><strong>输出：</strong> &quot;abbdcfdhe&quot;</p><p><strong>解释：</strong> 数字被替换结果如下：</p><ul><li>s[1] -&gt; shift(&#39;a&#39;,1) = &#39;b&#39;</li><li>s[3] -&gt; shift(&#39;b&#39;,2) = &#39;d&#39;</li><li>s[5] -&gt; shift(&#39;c&#39;,3) = &#39;f&#39;</li><li>s[7] -&gt; shift(&#39;d&#39;,4) = &#39;h&#39;</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 只包含小写英文字母和数字。</li><li>对所有 <strong>奇数</strong> 下标处的 <code>i</code> ，满足 <code>shift(s[i-1], s[i]) &lt;= &#39;z&#39;</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历字符串</strong>：我们从索引为 1 的位置开始，每隔一个字符进行操作（即索引为奇数的字符）。对于每个这样的字符：</p><ul><li>获取前一个字符的 ASCII 码。</li><li>将当前字符（数字字符）转换为数字，并加到前一个字符的 ASCII 码上。</li><li>将该字符替换为得到的新字符。</li></ul></li><li><p><strong>字符的转换</strong>：</p><ul><li>使用 <code>charCodeAt()</code> 方法获取前一个字符的 ASCII 码。</li><li>使用 <code>String.fromCharCode()</code> 方法将计算得到的 ASCII 值转换回字符。</li></ul></li><li><p><strong>返回结果</strong>：最终将修改后的字符数组重新拼接成字符串返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度，只需遍历一次字符串。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，需要将字符串拆分为字符数组来操作。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">replaceDigits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> chars <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 从索引为1的字符开始，每隔一个字符处理</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 获取前一个字符的 ASCII 码</span>
		<span class="token keyword">const</span> prev <span class="token operator">=</span> chars<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 计算新的字符并替换</span>
		chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>prev <span class="token operator">+</span> <span class="token function">Number</span><span class="token punctuation">(</span>chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 将字符数组重新拼接为字符串并返回</span>
	<span class="token keyword">return</span> chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),x=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"题号"),s("th",{style:{"text-align":"left"}},"标题"),s("th",{style:{"text-align":"center"}},"题解"),s("th",{style:{"text-align":"left"}},"标签"),s("th",{style:{"text-align":"center"}},"难度"),s("th",{style:{"text-align":"center"}},"力扣")])],-1),y=s("td",{style:{"text-align":"center"}},"848",-1),q=s("td",{style:{"text-align":"left"}},"字母移位",-1),w=s("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},I=s("code",null,"数组",-1),E=s("code",null,"字符串",-1),S=s("code",null,"前缀和",-1),A=s("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/shifting-letters",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/shifting-letters",target:"_blank",rel:"noopener noreferrer"};function j(z,O){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return p(),r("div",null,[g,s("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:e(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/string.html"},{default:e(()=>[k]),_:1}),n("  🔗 "),s("a",f,[m,t(o)]),n(),s("a",_,[b,t(o)])]),v,d(" prettier-ignore "),s("table",null,[x,s("tbody",null,[s("tr",null,[y,q,w,s("td",C,[t(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),n(),t(a,{to:"/tag/string.html"},{default:e(()=>[E]),_:1}),n(),t(a,{to:"/tag/prefix-sum.html"},{default:e(()=>[S]),_:1})]),A,s("td",N,[s("a",L,[n("🀄️"),t(o)]),n(),s("a",V,[n("🔗"),t(o)])])])])])])}const R=i(h,[["render",j],["__file","1844.html.vue"]]);export{R as default};

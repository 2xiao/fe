import{_ as i,r as t,o as u,c as r,a as n,b as s,d as a,w as o,e as p}from"./app--GvfAkAr.js";const d={},k=n("h1",{id:"_67-把字符串转换成整数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_67-把字符串转换成整数","aria-hidden":"true"},"#"),s(" 67. 把字符串转换成整数")],-1),m=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/ba-zi-fu-chuan-zhuan-huan-cheng-zheng-shu-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),h=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请你来实现一个 <code>myAtoi(string s)</code> 函数，使其能将字符串转换成一个 32 位有符号整数（类似 C/C++ 中的 <code>atoi</code> 函数）。</p><p>函数 <code>myAtoi(string s)</code> 的算法如下：</p><ol><li>读入字符串并丢弃无用的前导空格</li><li>检查下一个字符（假设还未到字符末尾）为正还是负号，读取该字符（如果有）。 确定最终结果是负数还是正数。 如果两者都不存在，则假定结果为正。</li><li>读入下一个字符，直到到达下一个非数字字符或到达输入的结尾。字符串的其余部分将被忽略。</li><li>将前面步骤读入的这些数字转换为整数（即，&quot;123&quot; -&gt; 123， &quot;0032&quot; -&gt; 32）。如果没有读入数字，则整数为 <code>0</code> 。必要时更改符号（从步骤 2 开始）。</li><li>如果整数数超过 32 位有符号整数范围 <code>[−231, 2^31 − 1]</code> ，需要截断这个整数，使其保持在这个范围内。具体来说，小于 <code>− 2^31</code> 的整数应该被固定为 <code>− 2^31</code> ，大于 <code>2^31 − 1</code> 的整数应该被固定为 <code>2^31 − 1</code> 。</li><li>返回整数作为最终结果。</li></ol><p><strong>注意：</strong></p><ul><li>本题中的空白字符只包括空格字符 <code>&#39; &#39;</code> 。</li><li>除前导空格或数字后的其余字符串外，<strong>请勿忽略</strong> 任何其他字符。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;42&quot;</p><p><strong>输出：</strong> 42</p><p><strong>解释：</strong> 加粗的字符串为已经读入的字符，插入符号是当前读取的字符。</p><p>第 1 步：&quot;42&quot;（当前没有读入字符，因为没有前导空格）</p><p>第 2 步：&quot;42&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）</p><p>第 3 步：&quot;<em>42</em> &quot;（读入 &quot;42&quot;）</p><p>解析得到整数 42 。</p><p>由于 &quot;42&quot; 在范围 [-2^31, 2^31 - 1] 内，最终结果为 42 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot; -42&quot;</p><p><strong>输出：</strong> -42</p><p><strong>解释：</strong></p><p>第 1 步：&quot; -42&quot;（读入前导空格，但忽视掉）</p><p>第 2 步：&quot; <strong>-</strong> 42&quot;（读入 &#39;-&#39; 字符，所以结果应该是负数）</p><p>第 3 步：&quot; -<strong>42</strong>&quot;（读入 &quot;42&quot;）</p><p>解析得到整数 -42 。</p><p>由于 &quot;-42&quot; 在范围 [-2^31, 2^31 - 1] 内，最终结果为 -42 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;4193 with words&quot;</p><p><strong>输出：</strong> 4193</p><p><strong>解释：</strong></p><p>第 1 步：&quot;4193 with words&quot;（当前没有读入字符，因为没有前导空格）</p><p>第 2 步：&quot;4193 with words&quot;（当前没有读入字符，因为这里不存在 &#39;-&#39; 或者 &#39;+&#39;）</p><p>第 3 步：&quot;<em>4193</em> with words&quot;（读入 &quot;4193&quot;；由于下一个字符不是一个数字，所以读入停止）</p><p>解析得到整数 4193 。</p><p>由于 &quot;4193&quot; 在范围 [-2^31, 2^31 - 1] 内，最终结果为 4193 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= s.length &lt;= 200</code></li><li><code>s</code> 由英文字母（大写和小写）、数字（<code>0-9</code>）、<code>&#39; &#39;</code>、<code>&#39;+&#39;</code>、<code>&#39;-&#39;</code> 和 <code>&#39;.&#39;</code> 组成</li></ul>',14),b={class:"hint-container warning"},q=n("p",{class:"hint-container-title"},"注意",-1),_=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求实现类似 <code>C++</code> 中 <code>atoi</code> 函数的功能，这个函数功能是将字符串类型的数字转成 <code>int</code> 类型数字。</p><ol><li>先去除字符串中的前导空格，并判断记录数字的符号 <code>sign</code>；</li><li>遍历字符串，如果 <code>s[i]</code> 是整型，则将其转换成数字类型存入 <code>res</code>；</li><li>如果遇到非整型，则立刻结束遍历；</li><li>将数字乘以 <code>sign</code>；</li><li>判断是否超过 <code>int</code> 类型的上限 <code>[-2^31, 2^31 - 1]</code>，如果超过上限，需要输出边界，即 <code>-2^31</code>，或者 <code>2^31 - 1</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度； <ul><li>对输入字符串进行 <code>trim()</code> 操作，去除字符串开头和结尾的空格，此操作的时间复杂度为 <code>O(n)</code>；</li><li>遍历字符串，在最坏的情况下，可能需要遍历整个字符串，时间复杂度为 <code>O(n)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了几个变量（如 <code>i</code>, <code>res</code>, 和 <code>sign</code>），没有使用额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">myAtoi</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sign <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
		sign <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span><span class="token function">isNaN</span><span class="token punctuation">(</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> res <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	res <span class="token operator">*=</span> sign<span class="token punctuation">;</span>
	res <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">**</span> <span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function f(w,y){const c=t("font"),e=t("RouterLink"),l=t("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:o(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),s("  🔗 "),n("a",v,[g,a(l)])]),h,n("div",b,[q,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0008.html"},{default:o(()=>[s("第 8 题")]),_:1}),s(" 相同。")])]),_])}const C=i(d,[["render",f],["__file","jz_offer_67_1.html.vue"]]);export{C as default};

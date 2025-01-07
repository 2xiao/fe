import{_ as p,r as e,o as c,c as u,a as n,b as s,d as a,w as l,e as i}from"./app-WL8GPOUO.js";const d={},r=n("h1",{id:"_2777-日期范围生成器-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2777-日期范围生成器-🔒","aria-hidden":"true"},"#"),s(" 2777. 日期范围生成器 🔒")],-1),k={href:"https://leetcode.cn/problems/date-range-generator",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/date-range-generator",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),b=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a start date <code>start</code>, an end date <code>end</code>, and a positive integer <code>step</code>, return a generator object that yields dates in the range from <code>start</code> to <code>end</code> inclusive.</p><p>The value of <code>step</code> indicates the number of days between consecutive yielded values.</p><p>All yielded dates must be in the string format <code>YYYY-MM-DD</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: start = &quot;2023-04-01&quot;, end = &quot;2023-04-04&quot;, step = 1</p><p>Output: [&quot;2023-04-01&quot;,&quot;2023-04-02&quot;,&quot;2023-04-03&quot;,&quot;2023-04-04&quot;]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-01&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-02&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-03&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-04&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: start = &quot;2023-04-10&quot;, end = &quot;2023-04-20&quot;, step = 3</p><p>Output: [&quot;2023-04-10&quot;,&quot;2023-04-13&quot;,&quot;2023-04-16&quot;,&quot;2023-04-19&quot;]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-10&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-13&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-16&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-19&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: start = &quot;2023-04-10&quot;, end = &quot;2023-04-10&quot;, step = 1</p><p>Output: [&quot;2023-04-10&quot;]</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-10&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>new Date(start) &lt;= new Date(end)</code></li><li><code>start</code> and <code>end</code> dates are in the string format <code>YYYY-MM-DD</code></li><li><code>0 &lt;= The difference in days between the start date and the end date &lt;= 1500</code></li><li><code>1 &lt;= step &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定起始日期 <code>start</code> 、结束日期 <code>end</code> 和正整数 <code>step</code> ，返回一个生成器对象，该生成器对象按照从 <code>start</code> 到 <code>end</code>（包括 start 和 end ）的范围生成日期。</p><p><code>step</code> 的值表示连续生成的日期之间的天数间隔。</p><p>所有日期都以字符串格式 <code>YYYY-MM-DD</code> 表示。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> start = &quot;2023-04-01&quot;, end = &quot;2023-04-04&quot;, step = 1</p><p><strong>输出：</strong>[&quot;2023-04-01&quot;,&quot;2023-04-02&quot;,&quot;2023-04-03&quot;,&quot;2023-04-04&quot;]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-01&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-02&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-03&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-04&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> start = &quot;2023-04-10&quot;, end = &quot;2023-04-20&quot;, step = 3</p><p><strong>输出：</strong>[&quot;2023-04-10&quot;,&quot;2023-04-13&quot;,&quot;2023-04-16&quot;,&quot;2023-04-19&quot;]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-10&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-13&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-16&#39;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-19&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> start = &quot;2023-04-10&quot;, end = &quot;2023-04-10&quot;, step = 1</p><p><strong>输出：</strong>[&quot;2023-04-10&quot;]</p><p><strong>解释：</strong></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> g <span class="token operator">=</span> <span class="token function">dateRangeGenerator</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>value<span class="token punctuation">;</span> <span class="token comment">// &#39;2023-04-10&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>new Date(start) &lt;= new Date(end)</code></li><li><code>start</code> 和 <code>end</code> 的日期格式是 <code>YYYY-MM-DD</code></li><li><code>0 &lt;= 结束日期与开始日期之间的天数差 &lt;= 1500</code></li><li><code>1 &lt;= step &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>生成器函数：</strong> 生成器函数可以通过 <code>function*</code> 声明来创建，它允许在迭代过程中暂停并返回一个值。每次调用 <code>next()</code> 时，生成器会返回下一个日期。</p></li><li><p><strong>生成器逻辑：</strong></p><ul><li><code>currentDate</code> 是从 <code>start</code> 日期创建的 <code>Date</code> 对象，用于存储当前日期。</li><li><code>endDate</code> 是 <code>end</code> 日期的 <code>Date</code> 对象，表示结束日期。</li><li><code>step</code> 表示从当前日期到下一个日期的天数差，需要使用 <code>Date</code> 对象的 <code>setDate()</code> 方法来增加或减少天数。</li><li>生成器通过 <code>while (currentDate &lt;= endDate)</code> 循环生成日期，直到 <code>currentDate</code> 超过 <code>endDate</code>。</li><li>每次循环中，生成器返回当前日期（格式化后的字符串），然后将 <code>currentDate</code> 增加 <code>step</code> 天。</li></ul></li><li><p><strong>日期格式化：</strong> 使用 <code>toISOString()</code> 方法来获取标准的 ISO 格式日期（例如：<code>2024-11-04T00:00:00.000Z</code>），然后从中提取 <code>YYYY-MM-DD</code> 部分。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是生成的日期数，每次调用 <code>next()</code> 时，都会执行一次日期计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，生成器是惰性求值的，不会在内存中存储所有的日期，空间复杂度是常数级别。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">start</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">end</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">step</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Generator<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dateRangeGenerator</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>start<span class="token punctuation">,</span> end<span class="token punctuation">,</span> step<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> curDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span><span class="token punctuation">,</span>
		endDate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span>end<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 生成日期直到超出结束日期</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>curDate <span class="token operator">&lt;=</span> endDate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 使用 toISOString 提取 YYYY-MM-DD 格式</span>
		<span class="token keyword">yield</span> curDate<span class="token punctuation">.</span><span class="token function">toISOString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;T&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 设置新的日期</span>
		curDate<span class="token punctuation">.</span><span class="token function">setDate</span><span class="token punctuation">(</span>curDate<span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> step<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function q(h,f){const o=e("font"),t=e("ExternalLinkIcon");return c(),u("div",null,[r,n("p",null,[s("🟠 "),a(o,{color:"#ffb800"},{default:l(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[v,a(t)]),s(),n("a",m,[g,a(t)])]),b])}const D=p(d,[["render",q],["__file","2777.html.vue"]]);export{D as default};

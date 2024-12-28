import{_ as r,r as t,o as i,c as u,a as n,b as s,d as a,w as o,e as c}from"./app-fEpXkbSw.js";const d={},k=n("h1",{id:"_1154-一年中的第几天",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1154-一年中的第几天","aria-hidden":"true"},"#"),s(" 1154. 一年中的第几天")],-1),m=n("code",null,"数学",-1),b=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/day-of-the-year",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/day-of-the-year",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),f=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),y=n("code",null,"date",-1),w={href:"https://en.wikipedia.org/wiki/Gregorian_calendar",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"YYYY-MM-DD",-1),q=n("em",null,"the day number of the year",-1),Y=c('<p><strong>Example 1:</strong></p><blockquote><p>Input: date = &quot;2019-01-09&quot;</p><p>Output: 9</p><p>Explanation: Given date is the 9th day of the year in 2019.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: date = &quot;2019-02-10&quot;</p><p>Output: 41</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>date.length == 10</code></li><li><code>date[4] == date[7] == &#39;-&#39;</code>, and all other <code>date[i]</code>&#39;s are digits</li><li><code>date</code> represents a calendar date between Jan 1st, 1900 and Dec 31th, 2019.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2>',7),E=n("code",null,"date",-1),I=n("code",null,"YYYY-MM-DD",-1),M={href:"https://baike.baidu.com/item/%E5%85%AC%E5%85%83/17855",target:"_blank",rel:"noopener noreferrer"},L=c(`<p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> date = &quot;2019-01-09&quot;</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 给定日期是 2019 年的第九天。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> date = &quot;2019-02-10&quot;</p><p><strong>输出：</strong> 41</p></blockquote><p><strong>提示：</strong></p><ul><li><code>date.length == 10</code></li><li><code>date[4] == date[7] == &#39;-&#39;</code>，其他的 <code>date[i]</code> 都是数字</li><li><code>date</code> 表示的范围从 1900 年 1 月 1 日至 2019 年 12 月 31 日</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>提取年份、月份和日期</strong><br> 从输入的字符串 <code>date</code> 中提取出年份、月份和日期。</p></li><li><p><strong>判断是否是闰年</strong><br> 由于闰年 2 月有 29 天，需要根据年份判断该年是否为闰年：</p><ul><li>闰年的判断规则是：如果年份能被 4 整除且不能被 100 整除，或者能被 400 整除，则是闰年。</li></ul></li><li><p><strong>计算从 1 月 1 日到给定日期的天数</strong><br> 我们可以通过一个数组存储每个月的天数，普通年份中：</p><ul><li>1 月：31 天</li><li>2 月：28 天</li><li>3 月：31 天</li><li>4 月：30 天</li><li>...</li></ul><p>如果是闰年，那么 2 月就有 29 天。</p></li><li><p><strong>累加从 1 月 1 日到给定日期的天数</strong><br> 从 1 月到前一个月的天数之和再加上当前月的天数，即可得到给定日期是当年的第几天。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code><ul><li>字符串拆分和映射操作是 <code>O(1)</code> 的操作。</li><li>累加天数部分的时间复杂度是 <code>O(1)</code>，因为数组长度是固定的（12 个月）。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个常量大小的数组 <code>daysInMonth</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">date</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">dayOfYear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">date</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> daysInMonth <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 普通年份的每月天数</span>

	<span class="token comment">// 提取年份、月份和日期</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>year<span class="token punctuation">,</span> month<span class="token punctuation">,</span> day<span class="token punctuation">]</span> <span class="token operator">=</span> date<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>Number<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断是否是闰年</span>
	<span class="token keyword">const</span> isLeapYear <span class="token operator">=</span> <span class="token punctuation">(</span>year <span class="token operator">%</span> <span class="token number">4</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> year <span class="token operator">%</span> <span class="token number">100</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">||</span> year <span class="token operator">%</span> <span class="token number">400</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 如果是闰年，2月的天数为29天</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>isLeapYear<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		daysInMonth<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">29</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算从1月1日到给定日期的天数</span>
	<span class="token keyword">let</span> days <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> month <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		days <span class="token operator">+=</span> daysInMonth<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	days <span class="token operator">+=</span> day<span class="token punctuation">;</span> <span class="token comment">// 加上当前月的天数</span>

	<span class="token keyword">return</span> days<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function O(C,D){const l=t("font"),p=t("RouterLink"),e=t("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟢 "),a(l,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),a(p,{to:"/tag/math.html"},{default:o(()=>[m]),_:1}),s(),a(p,{to:"/tag/string.html"},{default:o(()=>[b]),_:1}),s("  🔗 "),n("a",h,[v,a(e)]),s(),n("a",_,[g,a(e)])]),f,n("p",null,[s("Given a string "),y,s(" representing a "),n("a",w,[s("Gregorian calendar"),a(e)]),s(" date formatted as "),x,s(", return "),q,s(".")]),Y,n("p",null,[s("给你一个字符串 "),E,s(" ，按 "),I,s(" 格式表示一个 "),n("a",M,[s("现行公元纪年法"),a(e)]),s(" 日期。返回该日期是当年的第几天。")]),L])}const G=r(d,[["render",O],["__file","1154.html.vue"]]);export{G as default};

import{_ as l,r as s,o as r,c as i,a as n,b as e,d as a,w as t,e as d}from"./app--GvfAkAr.js";const u={},k=n("h1",{id:"_492-构造矩形",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_492-构造矩形","aria-hidden":"true"},"#"),e(" 492. 构造矩形")],-1),h=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/construct-the-rectangle",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/construct-the-rectangle",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A web developer needs to know how to design a web page&#39;s size. So, given a specific rectangular web page&#39;s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:</p><ol><li>The area of the rectangular web page you designed must equal to the given target area.</li><li>The width <code>W</code> should not be larger than the length <code>L</code>, which means <code>L &gt;= W</code>.</li><li>The difference between length <code>L</code> and width <code>W</code> should be as small as possible.</li></ol><p>Return <em>an array<code>[L, W]</code> where <code>L</code> and <code>W</code> are the length and width of the web page you designed in sequence.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: area = 4</p><p>Output: [2,2]</p><p>Explanation: The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1].</p><p>But according to requirement 2, [1,4] is illegal; according to requirement 3, [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: area = 37</p><p>Output: [37,1]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: area = 122122</p><p>Output: [427,286]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= area &lt;= 10^7</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>作为一位 web 开发者， 懂得怎样去规划一个页面的尺寸是很重要的。 所以，现给定一个具体的矩形页面面积，你的任务是设计一个长度为 L 和宽度为 W 且满足以下要求的矩形的页面。要求：</p><ol><li>你设计的矩形页面必须等于给定的目标面积。</li><li>宽度 <code>W</code> 不应大于长度 <code>L</code> ，换言之，要求 <code>L &gt;= W </code>。</li><li>长度 <code>L</code> 和宽度 <code>W</code> 之间的差距应当尽可能小。</li></ol><p>返回一个 <em>数组</em> <code>[L, W]</code>，其中 <em><code>L</code> 和 <code>W</code> 是你按照顺序设计的网页的长度和宽度</em>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> 4</p><p><strong>输出:</strong> [2, 2]</p><p><strong>解释:</strong> 目标面积是 4， 所有可能的构造方案有 [1,4], [2,2], [4,1]。</p><p>但是根据要求 2，[1,4] 不符合要求; 根据要求 3，[2,2] 比 [4,1] 更能符合要求. 所以输出长度 L 为 2， 宽度 W 为 2。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> area = 37</p><p><strong>输出:</strong> [37,1]</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> area = 122122</p><p><strong>输出:</strong> [427,286]</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= area &lt;= 10^7</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>从平方根开始寻找宽度</strong>：</p><ul><li>由于我们需要找到差距最小的 <code>L</code> 和 <code>W</code>，最优解通常出现在接近于正方形的矩形上。</li><li>设 <code>W</code> 是矩形的宽度，从 <code>Math.floor(sqrt(area))</code> 开始向下枚举，因为平方根附近的因子组合差值较小。</li></ul></li><li><p><strong>检查是否满足条件</strong>：</p><ul><li>对每个候选宽度 <code>W</code>，判断 <code>area % W == 0</code> 是否成立。如果成立，说明 <code>W</code> 可以作为宽度。</li><li>计算对应的长度 <code>L = area / W</code>，此时满足 <code>L * W == area</code>。</li><li>因为我们从较大的平方根开始向下搜索，所以第一个满足条件的解一定保证了 <code>L &gt;= W</code>。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>当找到满足条件的 <code>W</code> 和 <code>L</code>，直接返回 <code>[L, W]</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(sqrt(area))</code>，最坏情况下，需要从 <code>sqrt(area)</code> 开始向下枚举到 1。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">area</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">constructRectangle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">area</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> <span class="token constant">W</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 从最接近平方根的数开始</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>area <span class="token operator">%</span> <span class="token constant">W</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 寻找能整除面积的宽度</span>
		<span class="token constant">W</span><span class="token operator">--</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">const</span> <span class="token constant">L</span> <span class="token operator">=</span> area <span class="token operator">/</span> <span class="token constant">W</span><span class="token punctuation">;</span> <span class="token comment">// 计算对应的长度</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token constant">L</span><span class="token punctuation">,</span> <span class="token constant">W</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回满足条件的 [L, W]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function f(w,W){const c=s("font"),p=s("RouterLink"),o=s("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),a(p,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),e("  🔗 "),n("a",g,[m,a(o)]),e(),n("a",b,[v,a(o)])]),_])}const q=l(u,[["render",f],["__file","0492.html.vue"]]);export{q as default};

import{_ as c,r as o,o as r,c as i,a as n,b as s,d as e,w as t,e as d}from"./app--GvfAkAr.js";const u={},h=n("h1",{id:"_2938-区分黑球与白球",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2938-区分黑球与白球","aria-hidden":"true"},"#"),s(" 2938. 区分黑球与白球")],-1),k=n("code",null,"贪心",-1),g=n("code",null,"双指针",-1),m=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/separate-black-and-white-balls",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/separate-black-and-white-balls",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> balls on a table, each ball has a color black or white.</p><p>You are given a <strong>0-indexed</strong> binary string <code>s</code> of length <code>n</code>, where <code>1</code> and <code>0</code> represent black and white balls, respectively.</p><p>In each step, you can choose two adjacent balls and swap them.</p><p>Return <em>the<strong>minimum</strong> number of steps to group all the black balls to the right and all the white balls to the left</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;101&quot;</p><p>Output: 1</p><p>Explanation: We can group all the black balls to the right in the following way:</p><ul><li>Swap s[0] and s[1], s = &quot;011&quot;.</li></ul><p>Initially, 1s are not grouped together, requiring at least 1 step to group them to the right.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;100&quot;</p><p>Output: 2</p><p>Explanation: We can group all the black balls to the right in the following way:</p><ul><li>Swap s[0] and s[1], s = &quot;010&quot;.</li><li>Swap s[1] and s[2], s = &quot;001&quot;.</li></ul><p>It can be proven that the minimum number of steps needed is 2.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;0111&quot;</p><p>Output: 0</p><p>Explanation: All the black balls are already grouped to the right.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n == s.length &lt;= 10^5</code></li><li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>桌子上有 <code>n</code> 个球，每个球的颜色不是黑色，就是白色。</p><p>给你一个长度为 <code>n</code> 、下标从 <strong>0</strong> 开始的二进制字符串 <code>s</code>，其中 <code>1</code> 和 <code>0</code> 分别代表黑色和白色的球。</p><p>在每一步中，你可以选择两个相邻的球并交换它们。</p><p>返回「将所有黑色球都移到右侧，所有白色球都移到左侧所需的 <strong>最小步数</strong> 」。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;101&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 我们可以按以下方式将所有黑色球移到右侧：</p><ul><li>交换 s[0] 和 s[1]，s = &quot;011&quot;。</li></ul><p>最开始，1 没有都在右侧，需要至少 1 步将其移到右侧。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;100&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 我们可以按以下方式将所有黑色球移到右侧：</p><ul><li>交换 s[0] 和 s[1]，s = &quot;010&quot;。</li><li>交换 s[1] 和 s[2]，s = &quot;001&quot;。</li></ul><p>可以证明所需的最小步数为 2 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;0111&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 所有黑色球都已经在右侧。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n == s.length &lt;= 10^5</code></li><li><code>s[i]</code> 不是 <code>&#39;0&#39;</code>，就是 <code>&#39;1&#39;</code>。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>问题要求将所有黑色球（<code>1</code>）移到右侧，所有白色球（<code>0</code>）移到左侧，并计算最小的步数，在每次操作中，可以选择相邻的两个球进行交换。</p><p>解题的关键是计算白色球和黑色球之间的“错位”程度，因此，可以从左到右遍历字符串，并计算每个白色球被黑色球阻挡的步数。</p><ol><li>用 <code>curWhite</code> 记录遍历时白色球的数量，初始化为 <code>-1</code>，每遇到一个白色球，就增加 <code>curWhite</code> 计数。</li><li>用 <code>minStep</code> 记录所有白色球需要的总移动步数，初始化为 <code>0</code>。</li><li>从左到右遍历字符串 <code>s</code>，每当遇到一个白色球时：</li></ol><ul><li>将 <code>curWhite</code> 加 1，表示当前白色球数加一。</li><li>计算当前白色球应该在的位置与它当前所在的位置的差值，并加到 <code>minStep</code> 中。</li></ul><ol start="4"><li>最终 <code>minStep</code> 的值就是将所有白色球移到左侧、所有黑色球移到右侧所需的最小步数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。我们仅需遍历字符串一次，每次操作的复杂度为常数级。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了几个辅助变量外，没有额外使用其他空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumSteps</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> curWhite <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>
		minStep <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curWhite<span class="token operator">++</span><span class="token punctuation">;</span>
			minStep <span class="token operator">+=</span> i <span class="token operator">-</span> curWhite<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> minStep<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function w(x,y){const l=o("font"),a=o("RouterLink"),p=o("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟠 "),e(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:t(()=>[k]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[g]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",b,[v,e(p)]),s(),n("a",_,[q,e(p)])]),f])}const E=c(u,[["render",w],["__file","2938.html.vue"]]);export{E as default};

import{_ as l,r as t,o as p,c as d,a as n,b as e,d as s,w as o,e as r}from"./app-PpWft8bW.js";const u={},h={id:"_1732-找到最高海拔",tabindex:"-1"},g=n("a",{class:"header-anchor",href:"#_1732-找到最高海拔","aria-hidden":"true"},"#",-1),k={href:"https://2xiao.github.io/leetcode-js/problem/1732.html",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"数组",-1),b=n("code",null,"前缀和",-1),v={href:"https://leetcode.cn/problems/find-the-highest-altitude",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-the-highest-altitude",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is a biker going on a road trip. The road trip consists of <code>n + 1</code> points at different altitudes. The biker starts his trip on point <code>0</code> with altitude equal <code>0</code>.</p><p>You are given an integer array <code>gain</code> of length <code>n</code> where <code>gain[i]</code> is the <strong>net gain in altitude</strong> between points <code>i</code>​​​​​​ and <code>i + 1</code> for all (<code>0 &lt;= i &lt; n</code>). Return <em>the<strong>highest altitude</strong> of a point.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: gain = [-5,1,5,0,-7]</p><p>Output: 1</p><p>Explanation: The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: gain = [-4,-3,-2,-1,4,3,2]</p><p>Output: 0</p><p>Explanation: The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == gain.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>-100 &lt;= gain[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一个自行车手打算进行一场公路骑行，这条路线总共由 <code>n + 1</code> 个不同海拔的点组成。自行车手从海拔为 <code>0</code> 的点 <code>0</code> 开始骑行。</p><p>给你一个长度为 <code>n</code> 的整数数组 <code>gain</code> ，其中 <code>gain[i]</code> 是点 <code>i</code> 和点 <code>i + 1</code> 的 <strong>净海拔高度差</strong> （<code>0 &lt;= i &lt; n</code>）。请你返回 <strong>最高点的海拔</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> gain = [-5,1,5,0,-7]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 海拔高度依次为 [0,-5,-4,1,1,-6] 。最高海拔为 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> gain = [-4,-3,-2,-1,4,3,2]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 海拔高度依次为 [0,-4,-7,-9,-10,-6,-3,-1] 。最高海拔为 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == gain.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>-100 &lt;= gain[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过遍历 <code>gain</code> 数组来计算每个点的海拔高度，记录最高的海拔值。</p><ol><li><strong>初始化</strong>：设置 <code>max</code> 为 0（起始海拔）和 <code>altitude</code> 为 0。</li><li><strong>遍历 <code>gain</code> 数组</strong>： <ul><li>对于每个海拔变化 <code>h</code>，更新当前海拔 <code>altitude</code>。</li><li>更新最高海拔 <code>max</code> 为当前海拔与之前最高海拔的最大值。</li></ul></li><li><strong>返回结果</strong>：遍历结束后，返回最高海拔 <code>max</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">gain</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">largestAltitude</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">gain</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 记录最高海拔，初始化为 0</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 初始海拔为 0</span>
	<span class="token keyword">let</span> altitude <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> h <span class="token keyword">of</span> gain<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 计算当前海拔</span>
		altitude <span class="token operator">+=</span> h<span class="token punctuation">;</span>
		<span class="token comment">// 更新最高海拔</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> altitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 返回最高海拔</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function y(q,E){const a=t("ExternalLinkIcon"),i=t("font"),c=t("RouterLink");return p(),d("div",null,[n("h1",h,[g,e(),n("a",k,[e("1732. 找到最高海拔"),s(a)])]),n("p",null,[e("🟢 "),s(i,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(c,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),e(),s(c,{to:"/tag/prefix-sum.html"},{default:o(()=>[b]),_:1}),e("  🔗 "),n("a",v,[_,s(a)]),e(),n("a",f,[x,s(a)])]),w])}const L=l(u,[["render",y],["__file","1732.html.vue"]]);export{L as default};

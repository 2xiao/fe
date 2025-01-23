import{_ as p,r as a,o as r,c as i,a as n,b as e,d as s,w as o,e as d}from"./app-MsFeWfVD.js";const u={},k=n("h1",{id:"_1725-可以形成最大正方形的矩形数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1725-可以形成最大正方形的矩形数目","aria-hidden":"true"},"#"),e(" 1725. 可以形成最大正方形的矩形数目")],-1),g=n("code",null,"数组",-1),h={href:"https://leetcode.cn/problems/number-of-rectangles-that-can-form-the-largest-square",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>rectangles</code> where <code>rectangles[i] = [li, wi]</code> represents the <code>ith</code> rectangle of length <code>li</code> and width <code>wi</code>.</p><p>You can cut the <code>ith</code> rectangle to form a square with a side length of <code>k</code> if both <code>k &lt;= li</code> and <code>k &lt;= wi</code>. For example, if you have a rectangle <code>[4,6]</code>, you can cut it to get a square with a side length of at most <code>4</code>.</p><p>Let <code>maxLen</code> be the side length of the <strong>largest</strong> square you can obtain from any of the given rectangles.</p><p>Return _the <strong>number</strong> of rectangles that can make a square with a side length of _<code>maxLen</code>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> rectangles = [[5,8],[3,9],[5,12],[16,5]]</p><p>Output: 3</p><p>Explanation: The largest squares you can get from each rectangle are of lengths [5,3,5,5].</p><p>The largest possible square is of length 5, and you can get it out of 3 rectangles.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> rectangles = [[2,3],[3,7],[4,3],[3,7]]</p><p>Output: 3</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= rectangles.length &lt;= 1000</code></li><li><code>rectangles[i].length == 2</code></li><li><code>1 &lt;= li, wi &lt;= 10^9</code></li><li><code>li != wi</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>rectangles</code> ，其中 <code>rectangles[i] = [li, wi]</code> 表示第 <code>i</code> 个矩形的长度为 <code>li</code> 、宽度为 <code>wi</code> 。</p><p>如果存在 <code>k</code> 同时满足 <code>k &lt;= li</code> 和 <code>k &lt;= wi</code> ，就可以将第 <code>i</code> 个矩形切成边长为 <code>k</code> 的正方形。例如，矩形 <code>[4,6]</code> 可以切成边长最大为 <code>4</code> 的正方形。</p><p>设 <code>maxLen</code> 为可以从矩形数组 <code>rectangles</code> 切分得到的 <strong>最大正方形</strong> 的边长。</p><p>请你统计有多少个矩形能够切出边长为 <code>maxLen</code> 的正方形，并返回矩形 <strong>数目</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> rectangles = [[5,8],[3,9],[5,12],[16,5]]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 能从每个矩形中切出的最大正方形边长分别是 [5,3,5,5] 。</p><p>最大正方形的边长为 5 ，可以由 3 个矩形切分得到。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> rectangles = [[2,3],[3,7],[4,3],[3,7]]</p><p><strong>输出：</strong> 3</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= rectangles.length &lt;= 1000</code></li><li><code>rectangles[i].length == 2</code></li><li><code>1 &lt;= li, wi &lt;= 10^9</code></li><li><code>li != wi</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化变量</strong>：</p><ul><li>用 <code>largest</code> 记录当前能够切出的最大正方形的边长，初始值为 <code>0</code>。</li><li>用 <code>count</code> 记录可以切出最大正方形的矩形数量，初始值为 <code>0</code>。</li></ul></li><li><p><strong>遍历矩形</strong>：</p><ul><li>对于每个矩形 <code>(l, w)</code>，计算其可以切出的最大正方形边长 <code>len = Math.min(l, w)</code>。</li><li>如果当前边长 <code>len</code> 大于 <code>largest</code>： <ul><li>更新 <code>largest</code> 为当前边长。</li><li>重置 <code>count</code> 为 <code>1</code>。</li></ul></li><li>如果当前边长 <code>len</code> 等于 <code>largest</code>： <ul><li>增加 <code>count</code>。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，返回 <code>count</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是矩形的数量，需要遍历一次 <code>rectangles</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">rectangles</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countGoodRectangles</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">rectangles</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> largest <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>l<span class="token punctuation">,</span> w<span class="token punctuation">]</span> <span class="token keyword">of</span> rectangles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>l<span class="token punctuation">,</span> w<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 当前矩形能切出的最大正方形边长</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 找到更大的正方形</span>
			count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 重置计数</span>
			largest <span class="token operator">=</span> len<span class="token punctuation">;</span> <span class="token comment">// 更新最大正方形边长</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>largest <span class="token operator">==</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 计数加一</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function _(w,y){const c=a("font"),l=a("RouterLink"),t=a("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[e("🟢 "),s(c,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),s(l,{to:"/tag/array.html"},{default:o(()=>[g]),_:1}),e("  🔗 "),n("a",h,[m,s(t)]),e(),n("a",b,[v,s(t)])]),f])}const q=p(u,[["render",_],["__file","1725.html.vue"]]);export{q as default};

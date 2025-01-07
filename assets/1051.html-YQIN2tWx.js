import{_ as r,r as a,o as i,c as l,a as n,b as s,d as e,w as t,e as d}from"./app-WL8GPOUO.js";const u={},g=n("h1",{id:"_1051-高度检查器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1051-高度检查器","aria-hidden":"true"},"#"),s(" 1051. 高度检查器")],-1),h=n("code",null,"数组",-1),m=n("code",null,"计数排序",-1),k=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/height-checker",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/height-checker",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A school is trying to take an annual photo of all the students. The students are asked to stand in a single file line in <strong>non-decreasing order</strong> by height. Let this ordering be represented by the integer array <code>expected</code> where <code>expected[i]</code> is the expected height of the <code>ith</code> student in line.</p><p>You are given an integer array <code>heights</code> representing the <strong>current order</strong> that the students are standing in. Each <code>heights[i]</code> is the height of the <code>ith</code> student in line (<strong>0-indexed</strong>).</p><p>Return <em>the<strong>number of indices</strong> where</em> <code>heights[i] != expected[i]</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: heights = [1,1,4,2,1,3]</p><p>Output: 3</p><p>Explanation:</p><p>heights: [1,1,<em><strong>4</strong></em> ,2,<em><strong>1</strong></em> ,<em><strong>3</strong></em>]</p><p>expected: [1,1,<em><strong>1</strong></em> ,2,<em><strong>3</strong></em> ,<em><strong>4</strong></em>]</p><p>Indices 2, 4, and 5 do not match.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: heights = [5,1,2,3,4]</p><p>Output: 5</p><p>Explanation:</p><p>heights: [<em>5</em> ,<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,<em><strong>3</strong></em> ,<em><strong>4</strong></em>]</p><p>expected: [<em>1</em> ,<em><strong>2</strong></em> ,<em><strong>3</strong></em> ,<em><strong>4</strong></em> ,<em><strong>5</strong></em>]</p><p>All indices do not match.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: heights = [1,2,3,4,5]</p><p>Output: 0</p><p>Explanation:</p><p>heights: [1,2,3,4,5]</p><p>expected: [1,2,3,4,5]</p><p>All indices match.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= heights.length &lt;= 100</code></li><li><code>1 &lt;= heights[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>学校打算为全体学生拍一张年度纪念照。根据要求，学生需要按照 <strong>非递减</strong> 的高度顺序排成一行。</p><p>排序后的高度情况用整数数组 <code>expected</code> 表示，其中 <code>expected[i]</code> 是预计排在这一行中第 <code>i</code> 位的学生的高度（<strong>下标从 0 开始</strong> ）。</p><p>给你一个整数数组 <code>heights</code> ，表示 <strong>当前学生站位</strong> 的高度情况。<code>heights[i]</code> 是这一行中第 <code>i</code> 位学生的高度（<strong>下标从 0 开始</strong> ）。</p><p>返回满足 <code>heights[i] != expected[i]</code> 的 <strong>下标数量</strong> 。</p><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong> heights = [1,1,4,2,1,3]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>高度：[1,1,<em><strong>4</strong></em> ,2,<em><strong>1</strong></em> ,<em><strong>3</strong></em>]</p><p>预期：[1,1,<em><strong>1</strong></em> ,2,<em><strong>3</strong></em> ,<em><strong>4</strong></em>]</p><p>下标 2 、4 、5 处的学生高度不匹配。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> heights = [5,1,2,3,4]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong></p><p>高度：[<em><strong>5</strong></em> ,<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,<em><strong>3</strong></em> ,<em><strong>4</strong></em>]</p><p>预期：[<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,<em><strong>3</strong></em> ,<em><strong>4</strong></em> ,<em><strong>5</strong></em>]</p><p>所有下标的对应学生高度都不匹配。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> heights = [1,2,3,4,5]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>高度：[1,2,3,4,5]</p><p>预期：[1,2,3,4,5]</p><p>所有下标的对应学生高度都匹配。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= heights.length &lt;= 100</code></li><li><code>1 &lt;= heights[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题需要注意的点是，在 JavaScript 中，排序是原地进行的，直接排序会改变原数组。</p><ul><li>将 <code>heights</code> 数组拷贝一份，命名为 <code>expected</code>。</li><li>对 <code>expected</code> 进行排序，得到非递减顺序的高度数组。</li><li>遍历两个数组，统计对应位置高度不同的下标数量。</li></ul><ol start="4"><li><strong>时间复杂度</strong>： <ul><li>排序需要 <code>O(n log n)</code>。</li><li>遍历两个数组对比需要 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n log n)</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code></p><ul><li>排序：<code>O(n log n)</code></li><li>遍历比较：<code>O(n)</code></li><li>总时间复杂度：<code>O(n log n)</code></li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，排序的辅助数组占用的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">heights</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">heightChecker</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">heights</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 生成期望的高度顺序</span>
	<span class="token keyword">const</span> expected <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>heights<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计不符合期望的下标数量</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> heights<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heights<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> expected<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,33);function y(w,q){const c=a("font"),o=a("RouterLink"),p=a("ExternalLinkIcon");return i(),l("div",null,[g,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(o,{to:"/tag/counting-sort.html"},{default:t(()=>[m]),_:1}),s(),e(o,{to:"/tag/sorting.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",b,[v,e(p)]),s(),n("a",_,[x,e(p)])]),f])}const O=r(u,[["render",y],["__file","1051.html.vue"]]);export{O as default};

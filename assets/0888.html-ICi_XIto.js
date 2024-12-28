import{_ as i,r as t,o as l,c as r,a as n,b as s,d as a,w as e,e as d}from"./app-fEpXkbSw.js";const u={},k=n("h1",{id:"_888-公平的糖果交换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_888-公平的糖果交换","aria-hidden":"true"},"#"),s(" 888. 公平的糖果交换")],-1),b=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),m=n("code",null,"二分查找",-1),g=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/fair-candy-swap",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),S={href:"https://leetcode.com/problems/fair-candy-swap",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Alice and Bob have a different total number of candies. You are given two integer arrays <code>aliceSizes</code> and <code>bobSizes</code> where <code>aliceSizes[i]</code> is the number of candies of the <code>ith</code> box of candy that Alice has and <code>bobSizes[j]</code> is the number of candies of the <code>jth</code> box of candy that Bob has.</p><p>Since they are friends, they would like to exchange one candy box each so that after the exchange, they both have the same total amount of candy. The total amount of candy a person has is the sum of the number of candies in each box they have.</p><p>Return a <em>n integer array</em><code>answer</code> <em>where</em><code>answer[0]</code><em>is the number of candies in the box that Alice must exchange, and</em><code>answer[1]</code><em>is the number of candies in the box that Bob must exchange</em>. If there are multiple answers, you may <strong>return any</strong> one of them. It is guaranteed that at least one answer exists.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: aliceSizes = [1,1], bobSizes = [2,2]</p><p>Output: [1,2]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: aliceSizes = [1,2], bobSizes = [2,3]</p><p>Output: [1,2]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: aliceSizes = [2], bobSizes = [1,3]</p><p>Output: [2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= aliceSizes.length, bobSizes.length &lt;= 10^4</code></li><li><code>1 &lt;= aliceSizes[i], bobSizes[j] &lt;= 10^5</code></li><li>Alice and Bob have a different total number of candies.</li><li>There will be at least one valid answer for the given input.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>爱丽丝和鲍勃拥有不同总数量的糖果。给你两个数组 <code>aliceSizes</code> 和 <code>bobSizes</code> ，<code>aliceSizes[i]</code> 是爱丽丝拥有的第 <code>i</code> 盒糖果中的糖果数量，<code>bobSizes[j]</code> 是鲍勃拥有的第 <code>j</code> 盒糖果中的糖果数量。</p><p>两人想要互相交换一盒糖果，这样在交换之后，他们就可以拥有相同总数量的糖果。一个人拥有的糖果总数量是他们每盒糖果数量的总和。</p><p>返回一个整数数组 <code>answer</code>，其中 <code>answer[0]</code> 是爱丽丝必须交换的糖果盒中的糖果的数目，<code>answer[1]</code> 是鲍勃必须交换的糖果盒中的糖果的数目。如果存在多个答案，你可以返回其中 <strong>任何一个</strong> 。题目测试用例保证存在与输入对应的答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> aliceSizes = [1,1], bobSizes = [2,2]</p><p><strong>输出：</strong>[1,2]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> aliceSizes = [1,2], bobSizes = [2,3]</p><p><strong>输出：</strong>[1,2]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> aliceSizes = [2], bobSizes = [1,3]</p><p><strong>输出：</strong>[2,3]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> aliceSizes = [1,2,5], bobSizes = [2,4]</p><p><strong>输出：</strong>[5,4]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= aliceSizes.length, bobSizes.length &lt;= 10^4</code></li><li><code>1 &lt;= aliceSizes[i], bobSizes[j] &lt;= 10^5</code></li><li>爱丽丝和鲍勃的糖果总数量不同。</li><li>题目数据保证对于给定的输入至少存在一个有效答案。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用 <code>reduce</code> 函数计算爱丽丝和鲍勃各自拥有的糖果总数。记爱丽丝的总糖果数为 <code>sumAlice</code>，鲍勃的总糖果数为 <code>sumBob</code>。</p></li><li><p>为了使两人的糖果数量相同，假设爱丽丝交换的是 <code>x</code> 盒糖果，鲍勃交换的是 <code>y</code> 盒糖果。要满足以下条件： <code>sumAlice - x + y = sumBob + x - y</code> 通过整理，得到： <code>x - y = (sumAlice - sumBob) / 2</code></p></li><li><p><strong>使用集合查找交换的糖果</strong>：</p><ul><li>假设 <code>target = (sumAlice - sumBob) / 2</code></li><li>遍历爱丽丝的糖果盒数组，对于每个 <code>aliceSizes</code> 中 <code>x</code>，检查 <code>y = x - target</code> 是否在 <code>bobSizes</code> 中。</li><li>如果是，说明爱丽丝和鲍勃可以交换 <code>x</code> 和 <code>y</code> 盒糖果，返回 <code>[x, y]</code>。</li><li>使用 Set 存储鲍勃的糖果数量，这样可以在 <code>O(1)</code> 时间内检查是否存在符合条件的 <code>y</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是 <code>aliceSizes</code> 和 <code>bobSizes</code> 的长度，需要遍历两个数组求和。</li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用 Set 存储鲍勃的糖果数量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">aliceSizes</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">bobSizes</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fairCandySwap</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">aliceSizes<span class="token punctuation">,</span> bobSizes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> sumAlice <span class="token operator">=</span> aliceSizes<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> sumBob <span class="token operator">=</span> bobSizes<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算目标差值</span>
	<span class="token keyword">const</span> target <span class="token operator">=</span> <span class="token punctuation">(</span>sumAlice <span class="token operator">-</span> sumBob<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用 Set 存储鲍勃的糖果数量，便于查找</span>
	<span class="token keyword">const</span> bobSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>bobSizes<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> x <span class="token keyword">of</span> aliceSizes<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> y <span class="token operator">=</span> x <span class="token operator">-</span> target<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>bobSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回交换的糖果数量</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function z(x,w){const p=t("font"),o=t("RouterLink"),c=t("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟢 "),a(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:e(()=>[b]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:e(()=>[h]),_:1}),s(),a(o,{to:"/tag/binary-search.html"},{default:e(()=>[m]),_:1}),s(),a(o,{to:"/tag/sorting.html"},{default:e(()=>[g]),_:1}),s("  🔗 "),n("a",v,[f,a(c)]),s(),n("a",S,[_,a(c)])]),y])}const B=i(u,[["render",z],["__file","0888.html.vue"]]);export{B as default};

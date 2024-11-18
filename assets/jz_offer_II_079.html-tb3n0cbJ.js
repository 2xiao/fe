import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-Ob52y8QZ.js";const d={},k=n("h1",{id:"_79-所有子集",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_79-所有子集","aria-hidden":"true"},"#"),s(" 79. 所有子集")],-1),m=n("code",null,"位运算",-1),v=n("code",null,"数组",-1),b=n("code",null,"回溯",-1),h={href:"https://leetcode.cn/problems/TVdhkn",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个整数数组 <code>nums</code> ，数组中的元素 <strong>互不相同</strong> 。返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。你可以按 <strong>任意顺序</strong> 返回解集。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong>[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0]</p><p><strong>输出：</strong>[[],[0]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li><code>nums</code> 中的所有元素 <strong>互不相同</strong></li></ul>',9),f={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),x=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归函数实现:</p><ol><li>定义一个结果集 <code>res</code> 用于存储所有的子集。</li><li>定义一个辅助数组 <code>track</code> 用于记录当前回溯路径上的元素。</li><li>编写回溯算法的核心函数 <code>backtrack</code>，其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在 <code>backtrack</code> 函数中，首先将当前路径 <code>track</code> 加入结果集 <code>res</code>，这表示当前的 <code>track</code> 是一个有效的子集。</li><li>然后使用循环遍历从 <code>start</code> 到数组末尾的元素，对于每个元素，做出选择（将其加入 <code>track</code>），然后递归调用 <code>backtrack</code> 进入下一层。</li><li>在递归调用返回后，需要撤销选择，即将 <code>track</code> 的末尾元素弹出，以便进行下一次选择。</li><li>通过回溯的过程，可以遍历所有可能的子集。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(2^n * n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。这是因为对于每个元素，都有两种选择：选择或不选择，所以总共有 <code>2^n</code> 种可能的子集。在每个选择中，都需要花费 <code>O(n)</code> 的时间来复制当前的路径。</p></li><li><p><strong>空间复杂度</strong>：<code>O(2^n * k)</code></p><ul><li>空间复杂度主要取决于递归调用的栈空间和存储结果集的空间。</li><li>递归调用栈的最大深度是数组 <code>nums</code> 的长度，所以空间复杂度是 <code>O(n)</code>。</li><li>此外，存储结果集的空间复杂度为 <code>O(总子集个数 * 平均子集大小)</code>。在这里，总子集个数为 <code>2^n</code>，平均子集大小为 <code>k</code>（题目要求生成大小为 <code>k</code> 的子集），因此空间复杂度为 <code>O(2^n * k)</code>。</li><li>综合考虑以上两部分，整体的空间复杂度为 <code>O(n + 2^n * k)</code>。</li><li>在一般情况下，由于 <code>2^n</code> 的增长速度较大，因此空间复杂度可以近似表示为 <code>O(2^n * k)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsets</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 用于存储结果</span>
	<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 用于记录回溯路径</span>
	<span class="token keyword">const</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 前序遍历位置，每个节点的值都是一个子集</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 回溯算法标准框架</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 做选择</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 回溯遍历下一层节点</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 撤销选择</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(O,I){const p=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",h,[_,a(l)])]),g,n("div",f,[w,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0078.html"},{default:t(()=>[s("第 78 题")]),_:1}),s(" 相同。")])]),x])}const L=i(d,[["render",y],["__file","jz_offer_II_079.html.vue"]]);export{L as default};

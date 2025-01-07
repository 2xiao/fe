import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-WL8GPOUO.js";const d={},k=n("h1",{id:"_83-没有重复元素集合的全排列",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_83-没有重复元素集合的全排列","aria-hidden":"true"},"#"),s(" 83. 没有重复元素集合的全排列")],-1),m=n("code",null,"数组",-1),v=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/VvJkup",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),_=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个不含重复数字的整数数组 <code>nums</code> ，返回其 <strong>所有可能的全排列</strong> 。可以 <strong>按任意顺序</strong> 返回答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong>[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1]</p><p><strong>输出：</strong>[[0,1],[1,0]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1]</p><p><strong>输出：</strong>[[1]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 6</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li><li><code>nums</code> 中的所有整数 <strong>互不相同</strong></li></ul>',10),f={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),w=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的回溯问题，可以通过深度优先搜索（DFS）来解决。</p><ol><li>使用一个数组 <code>used</code> 来标记数字是否已经被使用过，确保每个数字在排列中只使用一次，初始时都为 <code>false</code>。</li><li>定义一个 <code>backtrack</code> 函数，用于搜索所有可能的排列。在函数中进行如下操作： <ul><li>如果当前排列的长度等于输入序列的长度，说明已经得到一个完整的排列，将其添加到结果数组中。</li><li>否则，遍历输入序列的每个数字，如果当前数字没有被使用过，就将其加入当前排列中，并标记为已使用。</li><li>然后递归调用 <code>backtrack</code> 函数，继续搜索下一个位置的数字。</li><li>在递归完成后，需要回溯，即将当前数字从排列中移除，并标记为未使用，使其可以在其他位置被使用。</li></ul></li><li>最后返回结果数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * n!)</code>，其中 <code>n</code> 是 <code>nums</code> 的长度。主要由递归调用栈的深度决定，递归深度（即排列的数量 <code>n!</code>）乘以每次操作的时间复杂度 <code>O(n)</code>，总时间复杂度为 <code>O(n * n!)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n * n!)</code>，空间复杂度主要由以下几个部分组成： <ul><li>结果数组<code>res</code> 用于存储所有生成的唯一排列，在最坏情况下（所有元素都不相同），生成的排列数为 <code>n!</code>，因此结果数组的空间复杂度为 <code>O(n * n!)</code>；</li><li>临时数组 <code>track</code>，在每个递归调用中，<code>track</code> 的最大长度为 <code>n</code>，因此其空间复杂度为 <code>O(n)</code>；</li><li>布尔数组 <code>used</code> 用于标记哪些元素已经被使用，大小为 <code>n</code>，因此占用 <code>O(n)</code> 的空间。</li><li>综合考虑，最主要的空间复杂度来源于结果数组 <code>res</code>，因此整体空间复杂度为 <code>O(n * n!)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">permute</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> used <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">track</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>used<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 做选择</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

			<span class="token comment">// 递归</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>track<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 撤销选择，回溯</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			used<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(x,O){const p=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(l)])]),_,n("div",f,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0046.html"},{default:t(()=>[s("第 46 题")]),_:1}),s(" 相同。")])]),w])}const I=i(d,[["render",y],["__file","jz_offer_II_083.html.vue"]]);export{I as default};

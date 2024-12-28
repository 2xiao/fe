import{_ as l,r as p,o as r,c as i,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-fEpXkbSw.js";const k={},m=n("h1",{id:"_3097-或值至少为-k-的最短子数组-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3097-或值至少为-k-的最短子数组-ii","aria-hidden":"true"},"#"),s(" 3097. 或值至少为 K 的最短子数组 II")],-1),g=n("code",null,"位运算",-1),h=n("code",null,"数组",-1),b=n("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/shortest-subarray-with-or-at-least-k-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/shortest-subarray-with-or-at-least-k-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array <code>nums</code> of <strong>non-negative</strong> integers and an integer <code>k</code>.</p><p>An array is called <strong>special</strong> if the bitwise <code>OR</code> of all of its elements is <strong>at least</strong> <code>k</code>.</p><p>Return <em>the length of the<strong>shortest</strong> <strong>special</strong> <strong>non-empty</strong> subarray of</em><code>nums</code>, <em>or return</em> <code>-1</code> <em>if no special subarray exists</em>.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [1,2,3], k = 2</p><p><strong>Output:</strong> 1</p><p><strong>Explanation:</strong></p><p>The subarray <code>[3]</code> has <code>OR</code> value of <code>3</code>. Hence, we return <code>1</code>.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [2,1,8], k = 10</p><p><strong>Output:</strong> 3</p><p><strong>Explanation:</strong></p><p>The subarray <code>[2,1,8]</code> has <code>OR</code> value of <code>11</code>. Hence, we return <code>3</code>.</p><p><strong>Example 3:</strong></p><p><strong>Input:</strong> nums = [1,2], k = 0</p><p><strong>Output:</strong> 1</p><p><strong>Explanation:</strong></p><p>The subarray <code>[1]</code> has <code>OR</code> value of <code>1</code>. Hence, we return <code>1</code>.</p><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^9</code></li><li><code>0 &lt;= k &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>非负</strong> 整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p><p>如果一个数组中所有元素的按位或运算 <code>OR</code> 的值 <strong>至少</strong> 为 <code>k</code> ，那么我们称这个数组是 <strong>特别的</strong> 。</p><p>请你返回 <code>nums</code> 中 <strong>最短特别非空</strong> 子数组的长度，如果特别子数组不存在，那么返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><p><strong>输入：</strong> nums = [1,2,3], k = 2</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>子数组 <code>[3]</code> 的按位 <code>OR</code> 值为 <code>3</code> ，所以我们返回 <code>1</code> 。</p><p><strong>示例 2：</strong></p><p><strong>输入：</strong> nums = [2,1,8], k = 10</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>子数组 <code>[2,1,8]</code> 的按位 <code>OR</code> 值为 <code>11</code> ，所以我们返回 <code>3</code> 。</p><p><strong>示例 3：</strong></p><p><strong>输入：</strong> nums = [1,2], k = 0</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong></p><p>子数组 <code>[1]</code> 的按位 <code>OR</code> 值为 <code>1</code> ，所以我们返回 <code>1</code> 。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 2 * 10^5</code></li><li><code>0 &lt;= nums[i] &lt;= 10^9</code></li><li><code>0 &lt;= k &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用<strong>滑动窗口</strong>和<strong>位计数数组</strong>来有效计算窗口中所有数的按位 OR 值。</p><ol><li><p><strong>滑动窗口</strong>：用两个指针 <code>start</code> 和 <code>end</code> 形成一个窗口 <code>[start, end]</code>。<code>end</code> 向右扩展窗口，<code>start</code> 向右收缩窗口。</p></li><li><p><strong>位计数数组</strong> <code>count</code>：</p><ul><li><code>count[i]</code> 表示当前窗口中有多少个数在二进制的第 <code>i</code> 位上是 <code>1</code>。</li><li>使用 <code>updateBits</code> 函数来更新 <code>count</code> 数组。对窗口右边界 <code>nums[end]</code> 调用 <code>updateBits</code> 使窗口扩展，对窗口左边界 <code>nums[start]</code> 调用 <code>updateBits</code> 使窗口收缩。</li></ul></li><li><p><strong>快速计算 OR 值</strong>：</p><ul><li>在 <code>getVal</code> 函数中，将 <code>count</code> 数组转化为 OR 值。只要 <code>count[i] &gt; 0</code>，就说明该位上至少有一个 <code>1</code>，在 OR 运算中该位也应为 <code>1</code>。</li><li>当 <code>getVal(count) &gt;= k</code> 时，窗口满足条件，更新 <code>minLength</code>。</li></ul></li><li><p><strong>更新最小长度</strong>：</p><ul><li>当窗口的 OR 值满足 <code>&gt;= k</code> 时，计算当前窗口的长度并更新最小长度 <code>minLength</code>。</li><li>然后右移 <code>start</code> 收缩窗口，直到不再满足 <code>getVal(count) &gt;= k</code> 为止。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历 <code>n</code> 个元素，每次更新窗口的位计数数组需要 <code>O(32)</code> 操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，用于存储位计数数组 <code>count</code> 占用<code>O(32)</code>的空间，也就是<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">minimumSubarrayLength</span><span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span><span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 位计数数组</span>
	<span class="token keyword">let</span> start <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		minLength <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> end <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> end <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> end<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 更新窗口的 OR 结果</span>
		<span class="token function">updateBits</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>end<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 符合条件的情况下，尝试缩小窗口</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;=</span> end <span class="token operator">&amp;&amp;</span> <span class="token function">getVal</span><span class="token punctuation">(</span>count<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			minLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>minLength<span class="token punctuation">,</span> end <span class="token operator">-</span> start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">updateBits</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			start<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> minLength <span class="token operator">===</span> nums<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">?</span> <span class="token operator">-</span><span class="token number">1</span> <span class="token operator">:</span> minLength<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// 更新位计数数组</span>
<span class="token keyword">function</span> <span class="token function">updateBits</span><span class="token punctuation">(</span><span class="token parameter">count<span class="token punctuation">,</span> num<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>num <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+=</span> val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 根据位计数数组生成当前窗口的 OR 值</span>
<span class="token keyword">function</span> <span class="token function">getVal</span><span class="token punctuation">(</span><span class="token parameter">count</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> ans <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			ans <span class="token operator">|=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> ans<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,50),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"325",-1),R=n("td",{style:{"text-align":"left"}},"和等于 k 的最长子数组长度 🔒",-1),L=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},B=n("code",null,"数组",-1),E=n("code",null,"哈希表",-1),I=n("code",null,"前缀和",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/maximum-size-subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},q=n("td",{style:{"text-align":"center"}},"862",-1),H=n("td",{style:{"text-align":"left"}},"和至少为 K 的最短子数组",-1),z={style:{"text-align":"center"}},A={style:{"text-align":"left"}},K=n("code",null,"队列",-1),M=n("code",null,"数组",-1),S=n("code",null,"二分查找",-1),Y=n("code",null,"4+",-1),D=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/shortest-subarray-with-sum-at-least-k",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,a(o)]),s(),n("a",f,[y,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[O,R,L,n("td",V,[a(e,{to:"/tag/array.html"},{default:t(()=>[B]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[I]),_:1})]),C,n("td",N,[n("a",T,[s("🀄️"),a(o)]),s(),n("a",j,[s("🔗"),a(o)])])]),n("tr",null,[q,H,n("td",z,[a(e,{to:"/problem/0862.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",A,[a(e,{to:"/tag/queue.html"},{default:t(()=>[K]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[M]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[S]),_:1}),s(),Y]),D,n("td",F,[n("a",G,[s("🀄️"),a(o)]),s(),n("a",J,[s("🔗"),a(o)])])])])])])}const X=l(k,[["render",P],["__file","3097.html.vue"]]);export{X as default};

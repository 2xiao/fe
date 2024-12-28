import{_ as l,r as p,o as i,c as r,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-fEpXkbSw.js";const k={},m=n("h1",{id:"_2164-对奇偶下标分别排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2164-对奇偶下标分别排序","aria-hidden":"true"},"#"),s(" 2164. 对奇偶下标分别排序")],-1),h=n("code",null,"数组",-1),g=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. Rearrange the values of <code>nums</code> according to the following rules:</p><ol><li>Sort the values at <strong>odd indices</strong> of <code>nums</code> in <strong>non-increasing</strong> order.</li></ol><ul><li>For example, if <code>nums = [4,1 ,2,3]</code> before this step, it becomes <code>[4,3 ,2,1]</code> after. The values at odd indices <code>1</code> and <code>3</code> are sorted in non-increasing order.</li></ul><ol start="2"><li>Sort the values at <strong>even indices</strong> of <code>nums</code> in <strong>non-decreasing</strong> order.</li></ol><ul><li>For example, if <code>nums = [4 ,1,2 ,3]</code> before this step, it becomes <code>[2 ,1,4 ,3]</code> after. The values at even indices <code>0</code> and <code>2</code> are sorted in non-decreasing order.</li></ul><p>Return <em>the array formed after rearranging the values of</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,1,2,3]</p><p>Output: [2,3,4,1]</p><p>Explanation:</p><p>First, we sort the values present at odd indices (1 and 3) in non-increasing order.</p><p>So, nums changes from [4,<strong><em>1</em></strong> ,2,<strong><em>3</em></strong>] to [4,3 ,2,<strong><em>1</em></strong>].</p><p>Next, we sort the values present at even indices (0 and 2) in non-decreasing order.</p><p>So, nums changes from [4 ,1,<strong><em>2</em></strong> ,3] to [2 ,3,4 ,1].</p><p>Thus, the array formed after rearranging the values is [2,3,4,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,1]</p><p>Output: [2,1]</p><p>Explanation:</p><p>Since there is exactly one odd index and one even index, no rearrangement of values takes place.</p><p>The resultant array formed is [2,1], which is the same as the initial array.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 。根据下述规则重排 <code>nums</code> 中的值：</p><ol><li>按 <strong>非递增</strong> 顺序排列 <code>nums</code> <strong>奇数下标</strong> 上的所有值。 <ul><li>举个例子，如果排序前 <code>nums = [4,1 ,2,3]</code> ，对奇数下标的值排序后变为 <code>[4,3 ,2,1]</code> 。奇数下标 <code>1</code> 和 <code>3</code> 的值按照非递增顺序重排。</li></ul></li><li>按 <strong>非递减</strong> 顺序排列 <code>nums</code> <strong>偶数下标</strong> 上的所有值。 <ul><li>举个例子，如果排序前 <code>nums = [4 ,1,2 ,3]</code> ，对偶数下标的值排序后变为 <code>[2 ,1,4 ,3]</code> 。偶数下标 <code>0</code> 和 <code>2</code> 的值按照非递减顺序重排。</li></ul></li></ol><p>返回重排 <code>nums</code> 的值之后形成的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,1,2,3]</p><p><strong>输出：</strong>[2,3,4,1]</p><p><strong>解释：</strong></p><p>首先，按非递增顺序重排奇数下标（1 和 3）的值。</p><p>所以，nums 从 [4,1 ,2,3] 变为 [4,3 ,2,1] 。</p><p>然后，按非递减顺序重排偶数下标（0 和 2）的值。</p><p>所以，nums 从 [4 ,1,2 ,3] 变为 [2 ,3,4 ,1] 。</p><p>因此，重排之后形成的数组是 [2,3,4,1] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1]</p><p><strong>输出：</strong>[2,1]</p><p><strong>解释：</strong></p><p>由于只有一个奇数下标和一个偶数下标，所以不会发生重排。</p><p>形成的结果数组是 [2,1] ，和初始数组一样。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分离奇数索引和偶数索引</strong>：</p><ul><li>遍历数组，分别将偶数索引位置的数字放入数组 <code>even</code>，奇数索引位置的数字放入数组 <code>odd</code>。</li></ul></li><li><p><strong>排序</strong>：</p><ul><li>对 <code>even</code> 数组进行升序排序。</li><li>对 <code>odd</code> 数组进行降序排序。</li></ul></li><li><p><strong>重新合并</strong>：</p><ul><li>遍历原数组，根据索引的奇偶性，将排序后的数字重新放回原数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n log n)</code></p><ul><li>遍历数组将数字分为 <code>even</code> 和 <code>odd</code>：<code>O(n)</code>。</li><li>对 <code>even</code> 数组升序排序：<code>O((n/2) log(n/2))</code>。</li><li>对 <code>odd</code> 数组降序排序：<code>O((n/2) log(n/2))</code>。</li><li>合并排序后的数组：<code>O(n)</code>。</li></ul><p>综合时间复杂度为 <code>O(n log n)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，需要额外的空间存储 <code>even</code> 和 <code>odd</code> 数组。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortEvenOdd</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> even <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> odd <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 分离奇数索引和偶数索引的数字</span>
	nums<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			even<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			odd<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 对偶数索引部分升序排序</span>
	even<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 对奇数索引部分降序排序</span>
	odd<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 合并回原数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> even<span class="token punctuation">[</span>i <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> odd<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"905",-1),E=n("td",{style:{"text-align":"left"}},"按奇偶排序数组",-1),O={style:{"text-align":"center"}},q={style:{"text-align":"left"}},I=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),S=n("code",null,"排序",-1),C=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"922",-1),j=n("td",{style:{"text-align":"left"}},"按奇偶排序数组 II",-1),B={style:{"text-align":"center"}},F={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"双指针",-1),A=n("code",null,"排序",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"};function K(M,P){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[_,e(o)]),s(),n("a",b,[f,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,E,n("td",O,[e(a,{to:"/problem/0905.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[N]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[S]),_:1})]),C,n("td",L,[n("a",T,[s("🀄️"),e(o)]),s(),n("a",V,[s("🔗"),e(o)])])]),n("tr",null,[R,j,n("td",B,[e(a,{to:"/problem/0922.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",F,[e(a,{to:"/tag/array.html"},{default:t(()=>[Y]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[z]),_:1}),s(),e(a,{to:"/tag/sorting.html"},{default:t(()=>[A]),_:1})]),D,n("td",G,[n("a",H,[s("🀄️"),e(o)]),s(),n("a",J,[s("🔗"),e(o)])])])])])])}const U=l(k,[["render",K],["__file","2164.html.vue"]]);export{U as default};

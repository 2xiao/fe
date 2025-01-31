import{_ as l,r as c,o as r,c as i,a as n,b as s,d as e,w as a,f as u,e as d}from"./app-MkGfDfkx.js";const k={},m=n("h1",{id:"_2190-数组中紧跟-key-之后出现最频繁的数字",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2190-数组中紧跟-key-之后出现最频繁的数字","aria-hidden":"true"},"#"),s(" 2190. 数组中紧跟 key 之后出现最频繁的数字")],-1),h=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),b=n("code",null,"计数",-1),v={href:"https://leetcode.cn/problems/most-frequent-number-following-key-in-an-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/most-frequent-number-following-key-in-an-array",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code>. You are also given an integer <code>key</code>, which is present in <code>nums</code>.</p><p>For every unique integer <code>target</code> in <code>nums</code>, <strong>count</strong> the number of times <code>target</code> immediately follows an occurrence of <code>key</code> in <code>nums</code>. In other words, count the number of indices <code>i</code> such that:</p><ul><li><code>0 &lt;= i &lt;= nums.length - 2</code>,</li><li><code>nums[i] == key</code> and,</li><li><code>nums[i + 1] == target</code>.</li></ul><p>Return <em>the</em><code>target</code> <em>with the<strong>maximum</strong> count</em>. The test cases will be generated such that the <code>target</code> with maximum count is unique.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,100,200,1,100], key = 1</p><p>Output: 100</p><p>Explanation: For target = 100, there are 2 occurrences at indices 1 and 4 which follow an occurrence of key.</p><p>No other integers follow an occurrence of key, so we return 100.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,3], key = 2</p><p>Output: 2</p><p>Explanation: For target = 2, there are 3 occurrences at indices 1, 2, and 3 which follow an occurrence of key.</p><p>For target = 3, there is only one occurrence at index 4 which follows an occurrence of key.</p><p>target = 2 has the maximum number of occurrences following an occurrence of key, so we return 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li>The test cases will be generated such that the answer is unique.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> ，同时给你一个整数 <code>key</code> ，它在 <code>nums</code> 出现过。</p><p><strong>统计</strong> 在 <code>nums</code> 数组中紧跟着 <code>key</code> 后面出现的不同整数 <code>target</code> 的出现次数。换言之，<code>target</code> 的出现次数为满足以下条件的 <code>i</code> 的数目：</p><ul><li><code>0 &lt;= i &lt;= n - 2</code></li><li><code>nums[i] == key</code> 且</li><li><code>nums[i + 1] == target</code> 。</li></ul><p>请你返回出现 <strong>最多</strong> 次数的 <code>target</code> 。测试数据保证出现次数最多的 <code>target</code> 是唯一的。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,100,200,1,100], key = 1</p><p><strong>输出：</strong> 100</p><p><strong>解释：</strong> 对于 target = 100 ，在下标 1 和 4 处出现过 2 次，且都紧跟着 key 。</p><p>没有其他整数在 key 后面紧跟着出现，所以我们返回 100 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,2,2,3], key = 2</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 对于 target = 2 ，在下标 1 ，2 和 3 处出现过 3 次，且都紧跟着 key 。</p><p>对于 target = 3 ，在下标 4 出出现过 1 次，且紧跟着 key 。</p><p>target = 2 是紧跟着 key 之后出现次数最多的数字，所以我们返回 2 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li>测试数据保证答案是唯一的。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>遍历数组 <code>nums</code>，当 <code>nums[i]</code> 等于 <code>key</code> 时，记录 <code>nums[i + 1]</code> 的出现次数。</li><li>使用 <code>Map</code> 数据结构存储数字及其对应的出现频率。</li><li>遍历 <code>Map</code>，找出出现次数最多的数字。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + m)</code><ul><li>遍历数组的时间复杂度：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。</li><li>遍历 <code>Map</code> 的时间复杂度：<code>O(m)</code>，其中 <code>m</code> 是紧随 <code>key</code> 之后的唯一数字的个数。</li><li>总时间复杂度：<code>O(n + m)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m)</code>，使用了 <code>Map</code> 存储紧随 <code>key</code> 之后数字的频率，其中 <code>m</code> 是不同数字的个数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mostFrequent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于记录数字及其出现的频率</span>

	<span class="token comment">// 统计紧随 key 之后数字的频率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前数字等于 key</span>
			freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新频率</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 找出频率最大的数字</span>
	<span class="token keyword">let</span> maxFreq <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		res<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>num<span class="token punctuation">,</span> val<span class="token punctuation">]</span> <span class="token keyword">of</span> freq<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历 Map</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>val <span class="token operator">&gt;</span> maxFreq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前频率大于最大频率</span>
			maxFreq <span class="token operator">=</span> val<span class="token punctuation">;</span> <span class="token comment">// 更新最大频率</span>
			res <span class="token operator">=</span> num<span class="token punctuation">;</span> <span class="token comment">// 更新结果</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回出现频率最高的数字</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1636",-1),E=n("td",{style:{"text-align":"left"}},"按照频率将数组升序排序",-1),F={style:{"text-align":"center"}},O={style:{"text-align":"left"}},M=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),C=n("code",null,"排序",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const p=c("font"),t=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(t,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),e(t,{to:"/tag/counting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[y,e(o)]),s(),n("a",_,[f,e(o)])]),w,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,E,n("td",F,[e(t,{to:"/problem/1636.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",O,[e(t,{to:"/tag/array.html"},{default:a(()=>[M]),_:1}),s(),e(t,{to:"/tag/hash-table.html"},{default:a(()=>[N]),_:1}),s(),e(t,{to:"/tag/sorting.html"},{default:a(()=>[C]),_:1})]),I,n("td",L,[n("a",V,[s("🀄️"),e(o)]),s(),n("a",j,[s("🔗"),e(o)])])])])])])}const S=l(k,[["render",B],["__file","2190.html.vue"]]);export{S as default};

import{_ as c,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-U2ekqv2z.js";const k={},m=n("h1",{id:"_2563-统计公平数对的数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2563-统计公平数对的数目","aria-hidden":"true"},"#"),s(" 2563. 统计公平数对的数目")],-1),h=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),g=n("code",null,"二分查找",-1),b=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/count-the-number-of-fair-pairs",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/count-the-number-of-fair-pairs",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code> of size <code>n</code> and two integers <code>lower</code> and <code>upper</code>, return <em>the number of fair pairs</em>.</p><p>A pair <code>(i, j)</code> is <strong>fair</strong> if:</p><ul><li><code>0 &lt;= i &lt; j &lt; n</code>, and</li><li><code>lower &lt;= nums[i] + nums[j] &lt;= upper</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,7,4,4,5], lower = 3, upper = 6</p><p>Output: 6</p><p>Explanation: There are 6 fair pairs: (0,3), (0,4), (0,5), (1,3), (1,4), and (1,5).</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,7,9,2,5], lower = 11, upper = 11</p><p>Output: 1</p><p>Explanation: There is a single fair pair: (2,3).</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums.length == n</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= lower &lt;= upper &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始、长度为 <code>n</code> 的整数数组 <code>nums</code> ，和两个整数 <code>lower</code> 和 <code>upper</code> ，返回 <strong>公平数对的数目</strong>。</p><p>如果 <code>(i, j)</code> 数对满足以下情况，则认为它是一个 <strong>公平数对</strong> ：</p><ul><li><code>0 &lt;= i &lt; j &lt; n</code>，且</li><li><code>lower &lt;= nums[i] + nums[j] &lt;= upper</code></li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,7,4,4,5], lower = 3, upper = 6</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 共计 6 个公平数对：(0,3)、(0,4)、(0,5)、(1,3)、(1,4) 和 (1,5) 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,7,9,2,5], lower = 11, upper = 11</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 只有单个公平数对：(2,3) 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums.length == n</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= lower &lt;= upper &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序数组</strong>: 首先对数组 <code>nums</code> 进行排序，排序后的数组可以帮助我们在一段连续区域内利用二分查找快速找到满足特定和的数对。</p></li><li><p><strong>双指针遍历数组</strong>: 遍历排序后的数组，对每个 <code>nums[i]</code>，希望找到 <code>nums[j]</code>，满足 <code>lower - nums[i] &lt;= nums[j] &lt;= upper - nums[i]</code>。</p></li><li><p><strong>使用二分查找定位范围</strong>:</p><ul><li>对于每个 <code>i</code>： <ul><li>使用 <code>lowerBound</code> 函数在 <code>i+1</code> 到末尾的范围内找到第一个满足 <code>nums[j] &gt;= lower - nums[i]</code> 的位置。</li><li>使用 <code>upperBound</code> 函数在 <code>i+1</code> 到末尾的范围内找到第一个不满足 <code>nums[j] &lt;= upper - nums[i]</code> 的位置。</li></ul></li><li><code>lowerBound</code> 返回的索引为符合条件的 <code>j</code> 值的起始位置，而 <code>upperBound</code> 返回的是结束位置（不包含在范围内）。</li><li>两个索引的差值 <code>up - low</code> 即为当前 <code>i</code> 下满足条件的 <code>j</code> 数量。</li></ul></li><li><p><strong>结果累加</strong>: 对于每个 <code>i</code>，累加 <code>up - low</code> 到结果 <code>res</code> 中。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>。 <ul><li>排序的时间复杂度是 <code>O(n log n)</code>。</li><li>外层循环遍历 <code>nums</code> 需要 <code>O(n)</code> 次，每次调用 <code>lowerBound</code> 和 <code>upperBound</code> 都是 <code>O(log n)</code> 的时间复杂度，因此双指针的复杂度是 <code>O(n log n)</code>。</li><li>总体时间复杂度为 <code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了常数级额外空间（不考虑排序空间开销）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">lower</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">upper</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countFairPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> lower<span class="token punctuation">,</span> upper</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 1. 对 nums 进行排序</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// 2. 遍历 nums，将 nums 中的每个元素作为起始点</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 3. 使用二分查找满足条件的起始位置和结束位置（不包含在范围内）</span>
		<span class="token keyword">const</span> low <span class="token operator">=</span> <span class="token function">lowerBound</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> lower <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> up <span class="token operator">=</span> <span class="token function">upperBound</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> upper <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 4. 将满足条件的公平数对数量加入 res 中</span>
		res <span class="token operator">+=</span> up <span class="token operator">-</span> low<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数，找到第一个使得 nums[index] &gt;= target 的 index</span>
<span class="token keyword">var</span> <span class="token function-variable function">lowerBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			end <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数，找到第一个使得 nums[index] &gt; target 的 index</span>
<span class="token keyword">var</span> <span class="token function-variable function">upperBound</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target<span class="token punctuation">,</span> start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> end <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>start <span class="token operator">&lt;</span> end<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>start <span class="token operator">+</span> end<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			end <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			start <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> start<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"327",-1),O=n("td",{style:{"text-align":"left"}},"区间和的个数",-1),q=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=n("code",null,"树状数组",-1),L=n("code",null,"线段树",-1),N=n("code",null,"数组",-1),V=n("code",null,"4+",-1),I=n("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/count-of-range-sum",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/count-of-range-sum",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"1865",-1),F=n("td",{style:{"text-align":"left"}},"找出和为指定值的下标对",-1),G=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},M=n("code",null,"设计",-1),P=n("code",null,"数组",-1),S=n("code",null,"哈希表",-1),D=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/finding-pairs-with-a-certain-sum",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/finding-pairs-with-a-certain-sum",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2006",-1),W=n("td",{style:{"text-align":"left"}},"差的绝对值为 K 的数对数目",-1),X=n("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},Z=n("code",null,"数组",-1),$=n("code",null,"哈希表",-1),nn=n("code",null,"计数",-1),sn=n("td",{style:{"text-align":"center"}},"🟢",-1),tn={style:{"text-align":"center"}},an={href:"https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"2824",-1),pn=n("td",{style:{"text-align":"left"}},"统计和小于目标的下标对数目",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),cn={style:{"text-align":"left"}},rn=n("code",null,"数组",-1),un=n("code",null,"双指针",-1),dn=n("code",null,"二分查找",-1),kn=n("code",null,"1+",-1),mn=n("td",{style:{"text-align":"center"}},"🟢",-1),hn={style:{"text-align":"center"}},_n={href:"https://leetcode.cn/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"},gn={href:"https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"};function bn(vn,fn){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,t(o)]),s(),n("a",y,[w,t(o)])]),x,u(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[B,O,q,n("td",E,[t(e,{to:"/tag/binary-indexed-tree.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/segment-tree.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),s(),V]),I,n("td",T,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",z,[s("🔗"),t(o)])])]),n("tr",null,[A,F,G,n("td",K,[t(e,{to:"/tag/design.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[P]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[S]),_:1})]),D,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",Q,[s("🔗"),t(o)])])]),n("tr",null,[U,W,X,n("td",Y,[t(e,{to:"/tag/array.html"},{default:a(()=>[Z]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[$]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[nn]),_:1})]),sn,n("td",tn,[n("a",an,[s("🀄️"),t(o)]),s(),n("a",en,[s("🔗"),t(o)])])]),n("tr",null,[on,pn,ln,n("td",cn,[t(e,{to:"/tag/array.html"},{default:a(()=>[rn]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[un]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[dn]),_:1}),s(),kn]),mn,n("td",hn,[n("a",_n,[s("🀄️"),t(o)]),s(),n("a",gn,[s("🔗"),t(o)])])])])])])}const wn=c(k,[["render",bn],["__file","2563.html.vue"]]);export{wn as default};

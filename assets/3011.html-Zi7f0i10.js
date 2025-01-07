import{_ as l,r as p,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-WL8GPOUO.js";const k={},m=n("h1",{id:"_3011-判断一个数组是否可以变为有序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3011-判断一个数组是否可以变为有序","aria-hidden":"true"},"#"),s(" 3011. 判断一个数组是否可以变为有序")],-1),h=n("code",null,"位运算",-1),b=n("code",null,"数组",-1),g=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/find-if-array-can-be-sorted",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-if-array-can-be-sorted",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> array of <strong>positive</strong> integers <code>nums</code>.</p><p>In one <strong>operation</strong> , you can swap any two <strong>adjacent</strong> elements if they have the <strong>same</strong> number of set bits. You are allowed to do this operation <strong>any</strong> number of times (<strong>including zero</strong>).</p><p>Return <code>true</code> <em>if you can sort the array, else return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [8,4,2,30,15]</p><p>Output: true</p><p>Explanation: Let&#39;s look at the binary representation of every element. The numbers 2, 4, and 8 have one set bit each with binary representation &quot;10&quot;, &quot;100&quot;, and &quot;1000&quot; respectively. The numbers 15 and 30 have four set bits each with binary representation &quot;1111&quot; and &quot;11110&quot;.</p><p>We can sort the array using 4 operations:</p><ul><li>Swap nums[0] with nums[1]. This operation is valid because 8 and 4 have one set bit each. The array becomes [4,8,2,30,15].</li><li>Swap nums[1] with nums[2]. This operation is valid because 8 and 2 have one set bit each. The array becomes [4,2,8,30,15].</li><li>Swap nums[0] with nums[1]. This operation is valid because 4 and 2 have one set bit each. The array becomes [2,4,8,30,15].</li><li>Swap nums[3] with nums[4]. This operation is valid because 30 and 15 have four set bits each. The array becomes [2,4,8,15,30].</li></ul><p>The array has become sorted, hence we return true.</p><p>Note that there may be other sequences of operations which also sort the array.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5]</p><p>Output: true</p><p>Explanation: The array is already sorted, hence we return true.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,16,8,4,2]</p><p>Output: false</p><p>Explanation: It can be shown that it is not possible to sort the input array using any number of operations.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 28</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始且全是 <strong>正</strong> 整数的数组 <code>nums</code> 。</p><p>一次 <strong>操作</strong> 中，如果两个 <strong>相邻</strong> 元素在二进制下 设置位 的数目 <strong>相同</strong> ，那么你可以将这两个元素交换。你可以执行这个操作 <strong>任意次</strong> （<strong>也可以 0 次</strong> ）。</p><p>如果你可以使数组变为非降序，请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [8,4,2,30,15]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 我们先观察每个元素的二进制表示。 2 ，4 和 8 分别都只有一个数位为 1 ，分别为 &quot;10&quot; ，&quot;100&quot; 和 &quot;1000&quot; 。15 和 30 分别有 4 个数位为 1 ：&quot;1111&quot; 和 &quot;11110&quot; 。</p><p>我们可以通过 4 个操作使数组非降序：</p><ul><li>交换 nums[0] 和 nums[1] 。8 和 4 分别只有 1 个数位为 1 。数组变为 [4,8,2,30,15] 。</li><li>交换 nums[1] 和 nums[2] 。8 和 2 分别只有 1 个数位为 1 。数组变为 [4,2,8,30,15] 。</li><li>交换 nums[0] 和 nums[1] 。4 和 2 分别只有 1 个数位为 1 。数组变为 [2,4,8,30,15] 。</li><li>交换 nums[3] 和 nums[4] 。30 和 15 分别有 4 个数位为 1 ，数组变为 [2,4,8,15,30] 。</li></ul><p>数组变成有序的，所以我们返回 true 。</p><p>注意我们还可以通过其他的操作序列使数组变得有序。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,5]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 数组已经是非降序的，所以我们返回 true 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,16,8,4,2]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 无法通过操作使数组变为非降序。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 28</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>首先计算数组 <code>nums</code> 中每个数字的二进制表示中“1”的个数（即设置位的数量），并将每个数字的设置位数存储在一个数组 <code>bitCounts</code> 中。</p></li><li><p>由于只能交换相邻的元素，需要将具有相同设置位数量的相邻元素视为一个连续的“子数组”，并对子数组进行单独排序。</p></li><li><p>通过上述分组排序，拼接成一个新的数组，逐项检查是否是非降序排列。如果是，则返回 <code>true</code>；否则返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 为 <code>nums</code> 的长度，每个相同设置位数的分组排序所需的复杂度为 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储每个数字的设置位数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canSortArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 计算每个数字的设置位数</span>
	<span class="token keyword">const</span> bitCount <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 将 nums 中相邻相同设置位数的元素按组进行排序</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> j <span class="token operator">=</span> i<span class="token punctuation">;</span>

		<span class="token comment">// 找出相同设置位数的连续子数组</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> bitCount<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> bitCount<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 对该子数组进行排序</span>
		nums <span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token operator">...</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token operator">...</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">,</span>
			<span class="token operator">...</span>nums<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span>
		<span class="token punctuation">]</span><span class="token punctuation">;</span>

		<span class="token comment">// 更新 i 为 j 继续检查下一个分组</span>
		i <span class="token operator">=</span> j<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查排序后的 nums 是否是非降序的</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"1356",-1),T=n("td",{style:{"text-align":"left"}},"根据数字二进制下 1 的数目排序",-1),j={style:{"text-align":"center"}},C={style:{"text-align":"left"}},E=n("code",null,"位运算",-1),I=n("code",null,"数组",-1),S=n("code",null,"计数",-1),L=n("code",null,"1+",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"};function R(Y,z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[b]),_:1}),s(),t(e,{to:"/tag/sorting.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[_,t(o)]),s(),n("a",f,[y,t(o)])]),w,u(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,T,n("td",j,[t(e,{to:"/problem/1356.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",C,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[E]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/counting.html"},{default:a(()=>[S]),_:1}),s(),L]),N,n("td",O,[n("a",V,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])])])])])}const M=l(k,[["render",R],["__file","3011.html.vue"]]);export{M as default};

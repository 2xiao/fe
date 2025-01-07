import{_ as i,r as l,o as p,c as d,a as n,b as s,d as e,w as t,f as r,e as u}from"./app-WL8GPOUO.js";const k={},m=n("h1",{id:"_2200-找出数组中的所有-k-近邻下标",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2200-找出数组中的所有-k-近邻下标","aria-hidden":"true"},"#"),s(" 2200. 找出数组中的所有 K 近邻下标")],-1),h=n("code",null,"数组",-1),_=n("code",null,"双指针",-1),g={href:"https://leetcode.cn/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>0-indexed</strong> integer array <code>nums</code> and two integers <code>key</code> and <code>k</code>. A <strong>k-distant index</strong> is an index <code>i</code> of <code>nums</code> for which there exists at least one index <code>j</code> such that <code>|i - j| &lt;= k</code> and <code>nums[j] == key</code>.</p><p>Return <em>a list of all k-distant indices sorted in <strong>increasing order</strong></em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,9,1,3,9,5], key = 9, k = 1</p><p>Output: [1,2,3,4,5,6]</p><p>Explanation: Here, nums[2] == key and nums[5] == key.</p><ul><li>For index 0, |0 - 2| &gt; k and |0 - 5| &gt; k, so there is no j where |0 - j| &lt;= k and nums[j] == key. Thus, 0 is not a k-distant index.</li><li>For index 1, |1 - 2| &lt;= k and nums[2] == key, so 1 is a k-distant index.</li><li>For index 2, |2 - 2| &lt;= k and nums[2] == key, so 2 is a k-distant index.</li><li>For index 3, |3 - 2| &lt;= k and nums[2] == key, so 3 is a k-distant index.</li><li>For index 4, |4 - 5| &lt;= k and nums[5] == key, so 4 is a k-distant index.</li><li>For index 5, |5 - 5| &lt;= k and nums[5] == key, so 5 is a k-distant index.</li><li>For index 6, |6 - 5| &lt;= k and nums[5] == key, so 6 is a k-distant index.</li></ul><p>Thus, we return [1,2,3,4,5,6] which is sorted in increasing order.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,2,2,2,2], key = 2, k = 2</p><p>Output: [0,1,2,3,4]</p><p>Explanation: For all indices i in nums, there exists some index j such that |i - j| &lt;= k and nums[j] == key, so every index is a k-distant index.</p><p>Hence, we return [0,1,2,3,4].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>key</code> is an integer from the array <code>nums</code>.</li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>nums</code> 和两个整数 <code>key</code> 和 <code>k</code> 。<strong>K 近邻下标</strong> 是 <code>nums</code> 中的一个下标 <code>i</code> ，并满足至少存在一个下标 <code>j</code> 使得 <code>|i - j| &lt;= k</code> 且 <code>nums[j] == key</code> 。</p><p>以列表形式返回按 <strong>递增顺序</strong> 排序的所有 K 近邻下标。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,9,1,3,9,5], key = 9, k = 1</p><p><strong>输出：</strong>[1,2,3,4,5,6]</p><p><strong>解释：</strong> 因此，nums[2] == key 且 nums[5] == key 。</p><ul><li>对下标 0 ，|0 - 2| &gt; k 且 |0 - 5| &gt; k ，所以不存在 j 使得 |0 - j| &lt;= k 且 nums[j] == key 。所以 0 不是一个 K 近邻下标。</li><li>对下标 1 ，|1 - 2| &lt;= k 且 nums[2] == key ，所以 1 是一个 K 近邻下标。</li><li>对下标 2 ，|2 - 2| &lt;= k 且 nums[2] == key ，所以 2 是一个 K 近邻下标。</li><li>对下标 3 ，|3 - 2| &lt;= k 且 nums[2] == key ，所以 3 是一个 K 近邻下标。</li><li>对下标 4 ，|4 - 5| &lt;= k 且 nums[5] == key ，所以 4 是一个 K 近邻下标。</li><li>对下标 5 ，|5 - 5| &lt;= k 且 nums[5] == key ，所以 5 是一个 K 近邻下标。</li><li>对下标 6 ，|6 - 5| &lt;= k 且 nums[5] == key ，所以 6 是一个 K 近邻下标。</li></ul><p>因此，按递增顺序返回 [1,2,3,4,5,6] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,2,2,2,2], key = 2, k = 2</p><p><strong>输出：</strong>[0,1,2,3,4]</p><p><strong>解释：</strong> 对 nums 的所有下标 i ，总存在某个下标 j 使得 |i - j| &lt;= k 且 nums[j] == key ，所以每个下标都是一个 K 近邻下标。</p><p>因此，返回 [0,1,2,3,4] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>1 &lt;= nums[i] &lt;= 1000</code></li><li><code>key</code> 是数组 <code>nums</code> 中的一个整数</li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化双指针</strong>：</p><ul><li><code>i</code>：用于遍历 <code>nums</code>，找到所有值等于 <code>key</code> 的下标。</li><li><code>j</code>：用于生成满足条件的下标 <code>j</code>。</li></ul></li><li><p><strong>遍历 <code>nums</code> 寻找目标值</strong>：</p><ul><li>指针 <code>i</code> 找到满足 <code>nums[i] === key</code> 的下标。</li><li>如果当前值不等于 <code>key</code>，继续移动 <code>i</code>。</li></ul></li><li><p><strong>调整指针 <code>j</code> 的位置</strong>：</p><ul><li>如果 <code>|i - j| &gt; k</code>，说明当前 <code>j</code> 不符合条件，将其移动到满足条件的位置。</li><li>当 <code>|i - j| &lt;= k</code>，逐一将所有符合条件的下标 <code>j</code> 加入结果数组 <code>res</code>。</li></ul></li><li><p><strong>继续移动 <code>i</code></strong>：</p><ul><li>继续寻找下一个满足 <code>nums[i] === key</code> 的位置。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>指针 <code>i</code> 遍历数组一次，时间复杂度为 <code>O(n)</code>。</li><li>指针 <code>j</code> 在每个满足 <code>nums[i] === key</code> 的范围内移动，总的移动次数不会超过 <code>O(n)</code>。</li><li>总时间复杂度为 <code>O(n)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组 <code>res</code> 使用额外空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findKDistantIndices</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> key<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 遍历数组的指针</span>
	<span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 满足条件的下标指针</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 找到 nums[i] === key 的位置</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 调整 j，使其满足 |i - j| &lt;= k</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span> <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 将满足条件的下标加入结果数组</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> k <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>j<span class="token punctuation">)</span><span class="token punctuation">;</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 移动到下一个可能的 key 的位置</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1",-1),w=n("td",{style:{"text-align":"left"}},"两数之和",-1),K={style:{"text-align":"center"}},q={style:{"text-align":"left"}},E=n("code",null,"数组",-1),F=n("code",null,"哈希表",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},"243",-1),V=n("td",{style:{"text-align":"left"}},"最短单词距离 🔒",-1),B=n("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},T=n("code",null,"数组",-1),H=n("code",null,"字符串",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/shortest-word-distance",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/shortest-word-distance",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"2817",-1),z=n("td",{style:{"text-align":"left"}},"限制条件下元素之间的最小绝对差",-1),G=n("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},P=n("code",null,"数组",-1),Q=n("code",null,"二分查找",-1),U=n("code",null,"有序集合",-1),W=n("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/minimum-absolute-difference-between-elements-with-constraint",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint",target:"_blank",rel:"noopener noreferrer"};function nn(sn,en){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[m,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/two-pointers.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",g,[y,e(o)]),s(),n("a",b,[v,e(o)])]),f,r(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[j,w,n("td",K,[e(a,{to:"/problem/0001.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),s(),e(a,{to:"/tag/hash-table.html"},{default:t(()=>[F]),_:1})]),O,n("td",C,[n("a",I,[s("🀄️"),e(o)]),s(),n("a",L,[s("🔗"),e(o)])])]),n("tr",null,[N,V,B,n("td",R,[e(a,{to:"/tag/array.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[H]),_:1})]),M,n("td",A,[n("a",D,[s("🀄️"),e(o)]),s(),n("a",S,[s("🔗"),e(o)])])]),n("tr",null,[Y,z,G,n("td",J,[e(a,{to:"/tag/array.html"},{default:t(()=>[P]),_:1}),s(),e(a,{to:"/tag/binary-search.html"},{default:t(()=>[Q]),_:1}),s(),e(a,{to:"/tag/ordered-set.html"},{default:t(()=>[U]),_:1})]),W,n("td",X,[n("a",Z,[s("🀄️"),e(o)]),s(),n("a",$,[s("🔗"),e(o)])])])])])])}const an=i(k,[["render",nn],["__file","2200.html.vue"]]);export{an as default};

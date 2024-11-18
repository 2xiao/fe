import{_ as c,r as p,o as i,c as r,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-Ob52y8QZ.js";const m={},k=n("h1",{id:"_1679-k-和数对的最大数目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1679-k-和数对的最大数目","aria-hidden":"true"},"#"),t(" 1679. K 和数对的最大数目")],-1),h=n("code",null,"数组",-1),_=n("code",null,"哈希表",-1),g=n("code",null,"双指针",-1),f=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> and an integer <code>k</code>.</p><p>In one operation, you can pick two numbers from the array whose sum equals <code>k</code> and remove them from the array.</p><p>Return <em>the maximum number of operations you can perform on the array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4], k = 5</p><p>Output: 2</p><p>Explanation: Starting with nums = [1,2,3,4]:</p><ul><li>Remove numbers 1 and 4, then nums = [2,3]</li><li>Remove numbers 2 and 3, then nums = []</li></ul><p>There are no more pairs that sum up to 5, hence a total of 2 operations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,1,3,4,3], k = 6</p><p>Output: 1</p><p>Explanation: Starting with nums = [3,1,3,4,3]:</p><ul><li>Remove the first two 3&#39;s, then nums = [1,4,3]</li></ul><p>There are no more pairs that sum up to 6, hence a total of 1 operation.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> 。</p><p>每一步操作中，你需要从数组中选出和为 <code>k</code> 的两个整数，并将它们移出数组。</p><p>返回你可以对数组执行的最大操作数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4], k = 5</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 开始时 nums = [1,2,3,4]：</p><ul><li>移出 1 和 4 ，之后 nums = [2,3]</li><li>移出 2 和 3 ，之后 nums = []</li></ul><p>不再有和为 5 的数对，因此最多执行 2 次操作。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,3,4,3], k = 6</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 开始时 nums = [3,1,3,4,3]：</p><ul><li>移出前两个 3 ，之后 nums = [1,4,3]</li></ul><p>不再有和为 6 的数对，因此最多执行 1 次操作。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>1 &lt;= nums[i] &lt;= 10^9</code></li><li><code>1 &lt;= k &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用哈希表（Map）</strong>：</p><ul><li>使用一个 <code>Map</code> 来存储每个数字的频率，以便快速查找所需配对数字的数量。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>对于数组中的每个数字，计算其配对数字（<code>k - num</code>）。</li><li>检查哈希表中是否存在这个配对数字。</li></ul></li><li><p><strong>配对处理</strong>：</p><ul><li>如果配对数字存在，则增加操作次数 <code>res</code>。</li><li>更新配对数字的频率，如果频率减到零，则从 <code>Map</code> 中删除该数字。</li><li>如果配对数字不存在，则将当前数字的频率添加到 <code>Map</code> 中。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回可以进行的最大操作次数 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，只需遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储 <code>Map</code> 中每个数字的频率。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> k <span class="token operator">-</span> num<span class="token punctuation">;</span> <span class="token comment">// 计算配对数字</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 找到一对，增加操作次数</span>
			res<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 更新配对数字的计数</span>
			<span class="token keyword">const</span> anotherCount <span class="token operator">=</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>anotherCount <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>another<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果计数为0，删除该数字</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>another<span class="token punctuation">,</span> anotherCount<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新计数</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 更新当前数字的计数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回最大操作次数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),M=n("td",{style:{"text-align":"center"}},"1",-1),C=n("td",{style:{"text-align":"left"}},"两数之和",-1),E={style:{"text-align":"center"}},R={style:{"text-align":"left"}},I=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N={style:{"text-align":"left"}},O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},"1711",-1),S=n("td",{style:{"text-align":"left"}},"大餐计数",-1),T=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),A={style:{"text-align":"left"}},D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"2491",-1),J=n("td",{style:{"text-align":"left"}},"划分技能点相等的团队",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=n("code",null,"数组",-1),W=n("code",null,"哈希表",-1),X=n("code",null,"双指针",-1),Z=n("code",null,"1+",-1),$={style:{"text-align":"left"}},nn={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/divide-players-into-teams-of-equal-skill",target:"_blank",rel:"noopener noreferrer"};function en(an,on){const l=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[f]),_:1}),t("  🔗 "),n("a",b,[v,s(o)]),t(),n("a",y,[x,s(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[M,C,n("td",E,[s(a,{to:"/problem/0001.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",R,[s(a,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[L]),_:1})]),n("td",N,[s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1})]),n("td",O,[n("a",V,[t("🀄️"),s(o)]),t(),n("a",j,[t("🔗"),s(o)])])]),n("tr",null,[B,S,T,n("td",K,[s(a,{to:"/tag/array.html"},{default:e(()=>[Y]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[z]),_:1})]),n("td",A,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})]),n("td",D,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",G,[t("🔗"),s(o)])])]),n("tr",null,[H,J,n("td",P,[s(a,{to:"/problem/2491.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",Q,[s(a,{to:"/tag/array.html"},{default:e(()=>[U]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[X]),_:1}),t(),Z]),n("td",$,[s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1})]),n("td",nn,[n("a",tn,[t("🀄️"),s(o)]),t(),n("a",sn,[t("🔗"),s(o)])])])])])])}const pn=c(m,[["render",en],["__file","1679.html.vue"]]);export{pn as default};

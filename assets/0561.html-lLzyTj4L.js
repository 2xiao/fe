import{_ as c,r as l,o as r,c as p,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const h={},m=n("h1",{id:"_561-数组拆分",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_561-数组拆分","aria-hidden":"true"},"#"),t(" 561. 数组拆分")],-1),_=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),k=n("code",null,"计数排序",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> of <code>2n</code> integers, group these integers into <code>n</code> pairs <code>(a1, b1), (a2, b2), ..., (an, bn)</code> such that the sum of <code>min(ai, bi)</code> for all <code>i</code> is <strong>maximized</strong>. Return <em>the maximized sum</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,4,3,2]</p><p>Output: 4</p><p>Explanation: All possible pairings (ignoring the ordering of elements) are:</p><ol><li><p>(1, 4), (2, 3) -&gt; min(1, 4) + min(2, 3) = 1 + 2 = 3</p></li><li><p>(1, 3), (2, 4) -&gt; min(1, 3) + min(2, 4) = 1 + 2 = 3</p></li><li><p>(1, 2), (3, 4) -&gt; min(1, 2) + min(3, 4) = 1 + 3 = 4</p></li></ol><p>So the maximum possible sum is 4.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [6,2,6,5,1,2]</p><p>Output: 9</p><p>Explanation: The optimal pairing is (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>nums.length == 2 * n</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定长度为 <code>2n</code> 的整数数组 <code>nums</code> ，你的任务是将这些数分成 <code>n</code> 对, 例如 <code>(a1, b1), (a2, b2), ..., (an, bn)</code> ，使得从 <code>1</code> 到 <code>n</code> 的 <code>min(ai, bi)</code> 总和最大。</p><p>返回该 <strong>最大总和</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,4,3,2]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 所有可能的分法（忽略元素顺序）为：</p><ol><li><p>(1, 4), (2, 3) -&gt; min(1, 4) + min(2, 3) = 1 + 2 = 3</p></li><li><p>(1, 3), (2, 4) -&gt; min(1, 3) + min(2, 4) = 1 + 2 = 3</p></li><li><p>(1, 2), (3, 4) -&gt; min(1, 2) + min(3, 4) = 1 + 3 = 4</p></li></ol><p>所以最大总和为 4</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [6,2,6,5,1,2]</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 最优的分法为 (2, 1), (2, 5), (6, 6). min(2, 1) + min(2, 5) + min(6, 6) = 1 + 2 + 6 = 9</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li><li><code>nums.length == 2 * n</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了使 <code>min(ai, bi)</code> 的总和最大，我们需要使用贪心算法，通过某种方式对数组进行分组，使较小的值尽可能地保留在一组中。</p><ol><li><strong>排序数组</strong>：将数组按照从小到大的顺序排列，排序后的数组可以方便地配对。</li><li><strong>两两配对</strong>： <ul><li>贪心地选择相邻的两个数作为一组，即配对为 <code>(ai, bi)</code>。</li><li>由于数组已经排序，相邻的两个数中较小的值即为 <code>ai</code>，可以最大化其在每组中的贡献。</li></ul></li><li><strong>计算总和</strong>： <ul><li>配对后，直接累加每一组中的较小值即可。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度。 <ul><li>排序的时间复杂度为 <code>O(n log n)</code>；</li><li>累加的时间复杂度为 <code>O(n)</code>；</li><li>总复杂度为 <code>O(n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，通常使用原地排序，空间复杂度为 <code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">arrayPairSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 对数组进行升序排序</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 累加排序后数组中索引为偶数的元素</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1984",-1),O=n("td",{style:{"text-align":"left"}},"学生分数的最小差值",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=n("code",null,"数组",-1),V=n("code",null,"排序",-1),I=n("code",null,"滑动窗口",-1),j=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/minimum-difference-between-highest-and-lowest-of-k-scores",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2144",-1),T=n("td",{style:{"text-align":"left"}},"打折购买糖果的最小开销",-1),A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},P=n("code",null,"贪心",-1),D=n("code",null,"数组",-1),F=n("code",null,"排序",-1),H=n("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2155",-1),U=n("td",{style:{"text-align":"left"}},"分组得分最高的所有下标",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"数组",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/all-divisions-with-the-highest-score-of-a-binary-array",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/all-divisions-with-the-highest-score-of-a-binary-array",target:"_blank",rel:"noopener noreferrer"};function en(sn,on){const i=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return r(),p("div",null,[m,n("p",null,[t("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(o,{to:"/tag/greedy.html"},{default:s(()=>[_]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),e(o,{to:"/tag/counting-sort.html"},{default:s(()=>[k]),_:1}),t(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),t("  🔗 "),n("a",f,[y,e(a)]),t(),n("a",v,[x,e(a)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,O,n("td",C,[e(o,{to:"/problem/1984.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",L,[e(o,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),t(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[V]),_:1}),t(),e(o,{to:"/tag/sliding-window.html"},{default:s(()=>[I]),_:1})]),j,n("td",B,[n("a",R,[t("🀄️"),e(a)]),t(),n("a",S,[t("🔗"),e(a)])])]),n("tr",null,[z,T,n("td",A,[e(o,{to:"/problem/2144.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",G,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[P]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),t(),e(o,{to:"/tag/sorting.html"},{default:s(()=>[F]),_:1})]),H,n("td",J,[n("a",K,[t("🀄️"),e(a)]),t(),n("a",M,[t("🔗"),e(a)])])]),n("tr",null,[Q,U,W,n("td",X,[e(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),e(a)]),t(),n("a",tn,[t("🔗"),e(a)])])])])])])}const ln=c(h,[["render",en],["__file","0561.html.vue"]]);export{ln as default};

import{_ as p,r as i,o as l,c as r,a as t,b as n,d as e,w as o,f as d,e as u}from"./app-MsFeWfVD.js";const h={},m=t("h1",{id:"_1217-玩筹码",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1217-玩筹码","aria-hidden":"true"},"#"),n(" 1217. 玩筹码")],-1),g=t("code",null,"贪心",-1),_=t("code",null,"数组",-1),k=t("code",null,"数学",-1),f={href:"https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>We have <code>n</code> chips, where the position of the <code>ith</code> chip is <code>position[i]</code>.</p><p>We need to move all the chips to <strong>the same position</strong>. In one step, we can change the position of the <code>ith</code> chip from <code>position[i]</code> to:</p><ul><li><code>position[i] + 2</code> or <code>position[i] - 2</code> with <code>cost = 0</code>.</li><li><code>position[i] + 1</code> or <code>position[i] - 1</code> with <code>cost = 1</code>.</li></ul><p>Return <em>the minimum cost</em> needed to move all the chips to the same position.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: position = [1,2,3]</p><p>Output: 1</p><p>Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.</p><p>Second step: Move the chip at position 2 to position 1 with cost = 1.</p><p>Total cost is 1.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: position = [2,2,2,3,3]</p><p>Output: 2</p><p>Explanation: We can move the two chips at position 3 to position 2. Each move has cost = 1. The total cost = 2.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: position = [1,1000000000]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= position.length &lt;= 100</code></li><li><code>1 &lt;= position[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有 <code>n</code> 个筹码。第 <code>i</code> 个筹码的位置是 <code>position[i]</code> 。</p><p>我们需要把所有筹码移到同一个位置。在一步中，我们可以将第 <code>i</code> 个筹码的位置从 <code>position[i]</code> 改变为:</p><ul><li><code>position[i] + 2</code> 或 <code>position[i] - 2</code> ，此时 <code>cost = 0</code></li><li><code>position[i] + 1</code> 或 <code>position[i] - 1</code> ，此时 <code>cost = 1</code></li></ul><p>返回将所有筹码移动到同一位置上所需要的 <em>最小代价</em> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/15/chips_e1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> position = [1,2,3]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 第一步:将位置 3 的筹码移动到位置 1，成本为 0。</p><p>第二步:将位置 2 的筹码移动到位置 1，成本= 1。</p><p>总成本是 1。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/08/15/chip_e2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> position = [2,2,2,3,3]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 我们可以把位置 3 的两个筹码移到位置 2。每一步的成本为 1。总成本= 2。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入：</strong> position = [1,1000000000]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= position.length &lt;= 100</code></li><li><code>1 &lt;= position[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>筹码移动到距离为 2 的位置代价为 0，因此我们可以自由移动筹码到 <strong>奇数位置</strong> 或 <strong>偶数位置</strong>。</p><p>为了代价最小，可以先将所有筹码聚集到相邻的奇数位置和偶数位置，然后将较少的一摞移动到较多的一摞上去。</p><ol><li>统计奇数位置和偶数位置的筹码个数。</li><li>将奇数位置的筹码移到偶数位置（或者相反），代价为较小的一方的个数，因为这些筹码必须跨越 1 的距离。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组统计奇数和偶数筹码个数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间存储变量 <code>odd</code> 和 <code>even</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">position</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minCostToMoveChips</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">position</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> odd <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		even <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 奇数位置和偶数位置的筹码数量</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> position<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			even<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 偶数位置筹码</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			odd<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 奇数位置筹码</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回移动代价最小的值</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>even<span class="token punctuation">,</span> odd<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"1769",-1),E=t("td",{style:{"text-align":"left"}},"移动所有球到每个盒子所需的最小操作数",-1),j={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=t("code",null,"数组",-1),L=t("code",null,"字符串",-1),N=t("code",null,"前缀和",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-move-all-balls-to-each-box",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"2578",-1),B=t("td",{style:{"text-align":"left"}},"最小和分割",-1),R=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},S=t("code",null,"贪心",-1),F=t("code",null,"数学",-1),A=t("code",null,"排序",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/split-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/split-with-minimum-sum",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const c=i("font"),s=i("RouterLink"),a=i("ExternalLinkIcon");return l(),r("div",null,[m,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),e(s,{to:"/tag/greedy.html"},{default:o(()=>[g]),_:1}),n(),e(s,{to:"/tag/array.html"},{default:o(()=>[_]),_:1}),n(),e(s,{to:"/tag/math.html"},{default:o(()=>[k]),_:1}),n("  🔗 "),t("a",f,[b,e(a)]),n(),t("a",v,[x,e(a)])]),y,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,E,t("td",j,[e(s,{to:"/problem/1769.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",C,[e(s,{to:"/tag/array.html"},{default:o(()=>[I]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[L]),_:1}),n(),e(s,{to:"/tag/prefix-sum.html"},{default:o(()=>[N]),_:1})]),O,t("td",V,[t("a",z,[n("🀄️"),e(a)]),n(),t("a",M,[n("🔗"),e(a)])])]),t("tr",null,[T,B,R,t("td",W,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[S]),_:1}),n(),e(s,{to:"/tag/math.html"},{default:o(()=>[F]),_:1}),n(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[A]),_:1})]),D,t("td",G,[t("a",H,[n("🀄️"),e(a)]),n(),t("a",J,[n("🔗"),e(a)])])])])])])}const X=p(h,[["render",K],["__file","1217.html.vue"]]);export{X as default};

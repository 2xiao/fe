import{_ as r,r as l,o as i,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const m={},h=t("h1",{id:"_2006-差的绝对值为-k-的数对数目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2006-差的绝对值为-k-的数对数目","aria-hidden":"true"},"#"),n(" 2006. 差的绝对值为 K 的数对数目")],-1),_=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),k=t("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> and an integer <code>k</code>, return <em>the number of pairs</em><code>(i, j)</code> <em>where</em> <code>i &lt; j</code> <em>such that</em> <code>|nums[i] - nums[j]| == k</code>.</p><p>The value of <code>|x|</code> is defined as:</p><ul><li><code>x</code> if <code>x &gt;= 0</code>.</li><li><code>-x</code> if <code>x &lt; 0</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2,1], k = 1</p><p>Output: 4</p><p>Explanation: The pairs with an absolute difference of 1 are:</p><ul><li>[<strong><em>1</em></strong> ,<strong><em>2</em></strong> ,2,1]</li><li>[<strong><em>1</em></strong> ,2,<strong><em>2</em></strong> ,1]</li><li>[1,<strong><em>2</em></strong> ,2,<strong><em>1</em></strong>]</li><li>[1,2,<strong><em>2</em></strong> ,<strong><em>1</em></strong>]</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,3], k = 3</p><p>Output: 0</p><p>Explanation: There are no pairs with an absolute difference of 3.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,2,1,5,4], k = 2</p><p>Output: 3</p><p>Explanation: The pairs with an absolute difference of 2 are:</p><ul><li>[<strong><em>3</em></strong> ,2,<strong><em>1</em></strong> ,5,4]</li><li>[<strong><em>3</em></strong> ,2,1,<strong><em>5</em></strong> ,4]</li><li>[3,<strong><em>2</em></strong> ,1,5,<strong><em>4</em></strong>]</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 99</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请你返回数对 <code>(i, j)</code> 的数目，满足 <code>i &lt; j</code> 且 <code>|nums[i] - nums[j]| == k</code> 。</p><p><code>|x|</code> 的值定义为：</p><ul><li>如果 <code>x &gt;= 0</code> ，那么值为 <code>x</code> 。</li><li>如果 <code>x &lt; 0</code> ，那么值为 <code>-x</code> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,2,1], k = 1</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 差的绝对值为 1 的数对为：</p><ul><li>[<em><strong>1</strong></em> ,<em><strong>2</strong></em> ,2,1]</li><li>[<em><strong>1</strong></em> ,2,<em><strong>2</strong></em> ,1]</li><li>[1,<em><strong>2</strong></em> ,2,<em><strong>1</strong></em>]</li><li>[1,2,<em><strong>2</strong></em> ,<em><strong>1</strong></em>]</li></ul></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,3], k = 3</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 没有任何数对差的绝对值为 3 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,2,1,5,4], k = 2</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 差的绝对值为 2 的数对为：</p><ul><li>[<em><strong>3</strong></em> ,2,<em><strong>1</strong></em> ,5,4]</li><li>[<em><strong>3</strong></em> ,2,1,<em><strong>5</strong></em> ,4]</li><li>[3,<em><strong>2</strong></em> ,1,5,<em><strong>4</strong></em>]</li></ul></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 200</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 99</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表记录当前元素出现的次数，从而高效统计符合条件的元素对，避免暴力双循环的时间复杂度 <code>O(n^2)</code>。</p><ul><li>使用一个 <code>Map</code> 记录数组中每个数字的出现频率，动态更新频率表。</li><li>遍历数组时，对于每个元素 <code>num</code>： <ul><li>检查 <code>num - k</code> 是否存在于频率表中，若存在，则将对应频率加到结果中。</li><li>检查 <code>num + k</code> 是否存在于频率表中，若存在，则将对应频率加到结果中。</li></ul></li><li>更新 <code>num</code> 在频率表中的值，表示当前遍历到的数字出现了一次。</li><li>返回累计的计数结果。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为数组的长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，频率表存储数组中每个元素的频率，最坏情况下存储 <code>n</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countKDifference</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用于存储每个数字的频率</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查差值为 k 的数字是否已经出现</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num <span class="token operator">-</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num <span class="token operator">+</span> k<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 更新当前数字的频率</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"1",-1),E=t("td",{style:{"text-align":"left"}},"两数之和",-1),j={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=t("code",null,"数组",-1),I=t("code",null,"哈希表",-1),L=t("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"532",-1),K=t("td",{style:{"text-align":"left"}},"数组中的 k-diff 数对",-1),M=t("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},D=t("code",null,"数组",-1),G=t("code",null,"哈希表",-1),S=t("code",null,"双指针",-1),z=t("code",null,"2+",-1),A=t("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/k-diff-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/k-diff-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"1865",-1),Q=t("td",{style:{"text-align":"left"}},"找出和为指定值的下标对",-1),U=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"设计",-1),Y=t("code",null,"数组",-1),Z=t("code",null,"哈希表",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/finding-pairs-with-a-certain-sum",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/finding-pairs-with-a-certain-sum",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2176",-1),ot=t("td",{style:{"text-align":"left"}},"统计数组中相等且可以被整除的数对",-1),at={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},ct=t("code",null,"数组",-1),rt=t("td",{style:{"text-align":"center"}},"🟢",-1),it={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/count-equal-and-divisible-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/count-equal-and-divisible-pairs-in-an-array",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"2364",-1),mt=t("td",{style:{"text-align":"left"}},"统计坏数对的数目",-1),ht=t("td",{style:{"text-align":"center"}},null,-1),_t={style:{"text-align":"left"}},gt=t("code",null,"数组",-1),kt=t("code",null,"哈希表",-1),ft=t("code",null,"数学",-1),bt=t("code",null,"1+",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/count-number-of-bad-pairs",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/count-number-of-bad-pairs",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"2563",-1),Et=t("td",{style:{"text-align":"left"}},"统计公平数对的数目",-1),jt={style:{"text-align":"center"}},Ot={style:{"text-align":"left"}},Ct=t("code",null,"数组",-1),It=t("code",null,"双指针",-1),Lt=t("code",null,"二分查找",-1),Nt=t("code",null,"1+",-1),Tt=t("td",{style:{"text-align":"center"}},"🟠",-1),Vt={style:{"text-align":"center"}},Bt={href:"https://leetcode.cn/problems/count-the-number-of-fair-pairs",target:"_blank",rel:"noopener noreferrer"},Kt={href:"https://leetcode.com/problems/count-the-number-of-fair-pairs",target:"_blank",rel:"noopener noreferrer"};function Mt(Rt,Dt){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[h,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),n(),e(o,{to:"/tag/counting.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),t("a",f,[b,e(a)]),n(),t("a",x,[y,e(a)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,E,t("td",j,[e(o,{to:"/problem/0001.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",O,[e(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[I]),_:1})]),L,t("td",N,[t("a",T,[n("🀄️"),e(a)]),n(),t("a",V,[n("🔗"),e(a)])])]),t("tr",null,[B,K,M,t("td",R,[e(o,{to:"/tag/array.html"},{default:s(()=>[D]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),n(),z]),A,t("td",F,[t("a",H,[n("🀄️"),e(a)]),n(),t("a",J,[n("🔗"),e(a)])])]),t("tr",null,[P,Q,U,t("td",W,[e(o,{to:"/tag/design.html"},{default:s(()=>[X]),_:1}),n(),e(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",nt,[n("🀄️"),e(a)]),n(),t("a",et,[n("🔗"),e(a)])])]),t("tr",null,[st,ot,t("td",at,[e(o,{to:"/problem/2176.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",lt,[e(o,{to:"/tag/array.html"},{default:s(()=>[ct]),_:1})]),rt,t("td",it,[t("a",pt,[n("🀄️"),e(a)]),n(),t("a",dt,[n("🔗"),e(a)])])]),t("tr",null,[ut,mt,ht,t("td",_t,[e(o,{to:"/tag/array.html"},{default:s(()=>[gt]),_:1}),n(),e(o,{to:"/tag/hash-table.html"},{default:s(()=>[kt]),_:1}),n(),e(o,{to:"/tag/math.html"},{default:s(()=>[ft]),_:1}),n(),bt]),xt,t("td",yt,[t("a",vt,[n("🀄️"),e(a)]),n(),t("a",wt,[n("🔗"),e(a)])])]),t("tr",null,[qt,Et,t("td",jt,[e(o,{to:"/problem/2563.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Ot,[e(o,{to:"/tag/array.html"},{default:s(()=>[Ct]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[It]),_:1}),n(),e(o,{to:"/tag/binary-search.html"},{default:s(()=>[Lt]),_:1}),n(),Nt]),Tt,t("td",Vt,[t("a",Bt,[n("🀄️"),e(a)]),n(),t("a",Kt,[n("🔗"),e(a)])])])])])])}const St=r(m,[["render",Mt],["__file","2006.html.vue"]]);export{St as default};

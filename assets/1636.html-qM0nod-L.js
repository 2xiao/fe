import{_ as p,r as l,o as r,c as i,a as n,b as t,d as s,w as e,f as d,e as u}from"./app--GvfAkAr.js";const h={},_=n("h1",{id:"_1636-按照频率将数组升序排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1636-按照频率将数组升序排序","aria-hidden":"true"},"#"),t(" 1636. 按照频率将数组升序排序")],-1),k=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),g=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code>, sort the array in <strong>increasing</strong> order based on the frequency of the values. If multiple values have the same frequency, sort them in <strong>decreasing</strong> order.</p><p>Return the <em>sorted array</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,2,2,2,3]</p><p>Output: [3,1,1,2,2,2]</p><p>Explanation: &#39;3&#39; has a frequency of 1, &#39;1&#39; has a frequency of 2, and &#39;2&#39; has a frequency of 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3,1,3,2]</p><p>Output: [1,3,3,2,2]</p><p>Explanation: &#39;2&#39; and &#39;3&#39; both have a frequency of 2, so they are sorted in decreasing order.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [-1,1,-6,4,5,-6,1,4,1]</p><p>Output: [5,-1,4,4,-6,-6,1,1,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，请你将数组按照每个值的频率 <strong>升序</strong> 排序。如果有多个值的频率相同，请你按照数值本身将它们 <strong>降序</strong> 排序。</p><p>请你返回排序后的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,2,2,2,3]</p><p><strong>输出：</strong>[3,1,1,2,2,2]</p><p><strong>解释：</strong> &#39;3&#39; 频率为 1，&#39;1&#39; 频率为 2，&#39;2&#39; 频率为 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3,1,3,2]</p><p><strong>输出：</strong>[1,3,3,2,2]</p><p><strong>解释：</strong> &#39;2&#39; 和 &#39;3&#39; 频率都为 2 ，所以它们之间按照数值本身降序排序。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [-1,1,-6,4,5,-6,1,4,1]</p><p><strong>输出：</strong>[5,-1,4,4,-6,-6,1,1,1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>-100 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频率</strong>：</p><ul><li>使用哈希表 <code>freq</code> 存储每个数字的频率。键是数字，值是该数字出现的次数。</li></ul></li><li><p><strong>排序频率表</strong>：</p><ul><li>将 <code>freq</code> 转化为数组，按以下规则排序： <ul><li>优先按频率升序排列。</li><li>如果频率相同，则按数字降序排列。</li></ul></li></ul></li><li><p><strong>生成结果数组</strong>：</p><ul><li>根据排序后的频率表，依次将数字填入结果数组，每个数字出现的次数等于其频率。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + m log m)</code></p><ul><li>统计频率：<code>O(n)</code>，<code>n</code> 是数组长度。</li><li>排序：<code>O(m log m)</code>，<code>m</code> 是数字种类数（<code>freq</code> 中的键数目）。</li><li>构造结果数组：<code>O(n)</code>。</li><li>总体时间复杂度为 <code>O(n + m log m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是数字种类数，使用了 <code>freq</code> 存储频率。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">frequencySort</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计频率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 排序频率表</span>
	<span class="token keyword">const</span> sortedFreq <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>freq<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">===</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 频率相同时按数字降序</span>
		<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 频率升序</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 构造结果数组</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>key<span class="token punctuation">,</span> val<span class="token punctuation">]</span> <span class="token keyword">of</span> sortedFreq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>val<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			nums<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> key<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"451",-1),E=n("td",{style:{"text-align":"left"}},"根据字符出现频率排序",-1),O={style:{"text-align":"center"}},I={style:{"text-align":"left"}},C=n("code",null,"哈希表",-1),L=n("code",null,"字符串",-1),N=n("code",null,"桶排序",-1),V=n("code",null,"3+",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/sort-characters-by-frequency",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2190",-1),A=n("td",{style:{"text-align":"left"}},"数组中紧跟 key 之后出现最频繁的数字",-1),G=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},T=n("code",null,"数组",-1),z=n("code",null,"哈希表",-1),D=n("code",null,"计数",-1),H=n("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/most-frequent-number-following-key-in-an-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/most-frequent-number-following-key-in-an-array",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"2206",-1),U=n("td",{style:{"text-align":"left"}},"将数组划分成相等数对",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Y=n("code",null,"位运算",-1),Z=n("code",null,"数组",-1),$=n("code",null,"哈希表",-1),nn=n("code",null,"1+",-1),tn=n("td",{style:{"text-align":"center"}},"🟢",-1),sn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/divide-array-into-equal-pairs",target:"_blank",rel:"noopener noreferrer"},an={href:"https://leetcode.com/problems/divide-array-into-equal-pairs",target:"_blank",rel:"noopener noreferrer"},on=n("td",{style:{"text-align":"center"}},"2341",-1),ln=n("td",{style:{"text-align":"left"}},"数组能形成多少数对",-1),cn=n("td",{style:{"text-align":"center"}},null,-1),pn={style:{"text-align":"left"}},rn=n("code",null,"数组",-1),dn=n("code",null,"哈希表",-1),un=n("code",null,"计数",-1),hn=n("td",{style:{"text-align":"center"}},"🟢",-1),_n={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},mn={href:"https://leetcode.com/problems/maximum-number-of-pairs-in-array",target:"_blank",rel:"noopener noreferrer"},gn=n("td",{style:{"text-align":"center"}},"2374",-1),fn=n("td",{style:{"text-align":"left"}},"边积分最高的节点",-1),bn=n("td",{style:{"text-align":"center"}},null,-1),yn={style:{"text-align":"left"}},vn=n("code",null,"图",-1),xn=n("code",null,"哈希表",-1),qn=n("td",{style:{"text-align":"center"}},"🟠",-1),wn={style:{"text-align":"center"}},En={href:"https://leetcode.cn/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},On={href:"https://leetcode.com/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},In=n("td",{style:{"text-align":"center"}},"2418",-1),Cn=n("td",{style:{"text-align":"left"}},"按身高排序",-1),Ln=n("td",{style:{"text-align":"center"}},null,-1),Nn={style:{"text-align":"left"}},Vn=n("code",null,"数组",-1),jn=n("code",null,"哈希表",-1),Bn=n("code",null,"字符串",-1),Rn=n("code",null,"1+",-1),Fn=n("td",{style:{"text-align":"center"}},"🟢",-1),Sn={style:{"text-align":"center"}},An={href:"https://leetcode.cn/problems/sort-the-people",target:"_blank",rel:"noopener noreferrer"},Gn={href:"https://leetcode.com/problems/sort-the-people",target:"_blank",rel:"noopener noreferrer"};function Mn(Tn,zn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[_,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[k]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",f,[b,s(o)]),t(),n("a",y,[v,s(o)])]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,E,n("td",O,[s(a,{to:"/problem/0451.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",I,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[C]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/bucket-sort.html"},{default:e(()=>[N]),_:1}),t(),V]),j,n("td",B,[n("a",R,[t("🀄️"),s(o)]),t(),n("a",F,[t("🔗"),s(o)])])]),n("tr",null,[S,A,G,n("td",M,[s(a,{to:"/tag/array.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[z]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[D]),_:1})]),H,n("td",J,[n("a",K,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])]),n("tr",null,[Q,U,W,n("td",X,[s(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[Y]),_:1}),t(),s(a,{to:"/tag/array.html"},{default:e(()=>[Z]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[$]),_:1}),t(),nn]),tn,n("td",sn,[n("a",en,[t("🀄️"),s(o)]),t(),n("a",an,[t("🔗"),s(o)])])]),n("tr",null,[on,ln,cn,n("td",pn,[s(a,{to:"/tag/array.html"},{default:e(()=>[rn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[dn]),_:1}),t(),s(a,{to:"/tag/counting.html"},{default:e(()=>[un]),_:1})]),hn,n("td",_n,[n("a",kn,[t("🀄️"),s(o)]),t(),n("a",mn,[t("🔗"),s(o)])])]),n("tr",null,[gn,fn,bn,n("td",yn,[s(a,{to:"/tag/graph.html"},{default:e(()=>[vn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[xn]),_:1})]),qn,n("td",wn,[n("a",En,[t("🀄️"),s(o)]),t(),n("a",On,[t("🔗"),s(o)])])]),n("tr",null,[In,Cn,Ln,n("td",Nn,[s(a,{to:"/tag/array.html"},{default:e(()=>[Vn]),_:1}),t(),s(a,{to:"/tag/hash-table.html"},{default:e(()=>[jn]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Bn]),_:1}),t(),Rn]),Fn,n("td",Sn,[n("a",An,[t("🀄️"),s(o)]),t(),n("a",Gn,[t("🔗"),s(o)])])])])])])}const Hn=p(h,[["render",Mn],["__file","1636.html.vue"]]);export{Hn as default};

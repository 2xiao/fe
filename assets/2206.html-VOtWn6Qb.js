import{_ as i,r as l,o as r,c as p,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const h={},_=n("h1",{id:"_2206-将数组划分成相等数对",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2206-将数组划分成相等数对","aria-hidden":"true"},"#"),e(" 2206. 将数组划分成相等数对")],-1),m=n("code",null,"位运算",-1),k=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),f=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/divide-array-into-equal-pairs",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/divide-array-into-equal-pairs",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>nums</code> consisting of <code>2 * n</code> integers.</p><p>You need to divide <code>nums</code> into <code>n</code> pairs such that:</p><ul><li>Each element belongs to <strong>exactly one</strong> pair.</li><li>The elements present in a pair are <strong>equal</strong>.</li></ul><p>Return <code>true</code> <em>if nums can be divided into</em> <code>n</code> <em>pairs, otherwise return</em><code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,2,3,2,2,2]</p><p>Output: true</p><p>Explanation:</p><p>There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.</p><p>If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: false</p><p>Explanation:</p><p>There is no way to divide nums into 4 / 2 = 2 pairs such that the pairs satisfy every condition.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>nums.length == 2 * n</code></li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 500</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，它包含 <code>2 * n</code> 个整数。</p><p>你需要将 <code>nums</code> 划分成 <code>n</code> 个数对，满足：</p><ul><li>每个元素 <strong>只属于一个</strong> 数对。</li><li>同一数对中的元素 <strong>相等</strong> 。</li></ul><p>如果可以将 <code>nums</code> 划分成 <code>n</code> 个数对，请你返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,2,3,2,2,2]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong></p><p>nums 中总共有 6 个元素，所以它们应该被划分成 6 / 2 = 3 个数对。</p><p>nums 可以划分成 (2, 2) ，(3, 3) 和 (2, 2) ，满足所有要求。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong></p><p>无法将 nums 划分成 4 / 2 = 2 个数对且满足所有要求。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>nums.length == 2 * n</code></li><li><code>1 &lt;= n &lt;= 500</code></li><li><code>1 &lt;= nums[i] &lt;= 500</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>统计频率</strong>：</p><ul><li>使用 <code>Map</code> 数据结构统计每个数字在数组中出现的频率。</li></ul></li><li><p><strong>检查频率是否为偶数</strong>：</p><ul><li>遍历所有频率值，判断是否存在奇数频率。</li><li>如果存在奇数频率，则无法划分，返回 <code>false</code>；否则返回 <code>true</code>。</li></ul></li><li><p><strong>优化判定</strong>：</p><ul><li>直接使用数组的 <code>filter</code> 方法，筛选出所有奇数频率的元素，如果筛选结果长度为 0，则说明所有频率均为偶数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code></p><ul><li>统计频率的时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是数组长度。</li><li>检查频率的时间复杂度为 <code>O(m)</code>，其中 <code>m</code> 是不同数字的个数。</li><li>总时间复杂度为 <code>O(n)</code>（因为通常 <code>m &lt;&lt; n</code>）。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是数组中不同数字的个数，<code>Map</code> 存储所有不同数字的频率。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">divideArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计每个数字的频率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 检查是否存在奇数频率的数字</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>freq<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1636",-1),I=n("td",{style:{"text-align":"left"}},"按照频率将数组升序排序",-1),O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),V=n("code",null,"排序",-1),T=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/sort-array-by-increasing-frequency",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"3069",-1),Y=n("td",{style:{"text-align":"left"}},"将元素分配到两个数组中 I",-1),A=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=n("code",null,"数组",-1),D=n("code",null,"模拟",-1),F=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/distribute-elements-into-two-arrays-i",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/distribute-elements-into-two-arrays-i",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"3072",-1),P=n("td",{style:{"text-align":"left"}},"将元素分配到两个数组中 II",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"树状数组",-1),X=n("code",null,"线段树",-1),Z=n("code",null,"数组",-1),$=n("code",null,"1+",-1),nn=n("td",{style:{"text-align":"center"}},"🔴",-1),en={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/distribute-elements-into-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/distribute-elements-into-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"};function an(on,ln){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),p("div",null,[_,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/counting.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",b,[y,t(o)]),e(),n("a",v,[x,t(o)])]),w,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[E,I,n("td",O,[t(a,{to:"/problem/1636.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[V]),_:1})]),T,n("td",j,[n("a",B,[e("🀄️"),t(o)]),e(),n("a",M,[e("🔗"),t(o)])])]),n("tr",null,[R,Y,A,n("td",S,[t(a,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),e(),t(a,{to:"/tag/simulation.html"},{default:s(()=>[D]),_:1})]),F,n("td",G,[n("a",H,[e("🀄️"),t(o)]),e(),n("a",J,[e("🔗"),t(o)])])]),n("tr",null,[K,P,Q,n("td",U,[t(a,{to:"/tag/binary-indexed-tree.html"},{default:s(()=>[W]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[X]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[Z]),_:1}),e(),$]),nn,n("td",en,[n("a",tn,[e("🀄️"),t(o)]),e(),n("a",sn,[e("🔗"),t(o)])])])])])])}const rn=i(h,[["render",an],["__file","2206.html.vue"]]);export{rn as default};

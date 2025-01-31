import{_ as c,r as l,o as i,c as d,a as e,b as t,d as n,w as s,f as p,e as u}from"./app-MkGfDfkx.js";const h={},_=e("h1",{id:"_162-寻找峰值",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_162-寻找峰值","aria-hidden":"true"},"#"),t(" 162. 寻找峰值")],-1),m=e("code",null,"数组",-1),k=e("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-peak-element",target:"_blank",rel:"noopener noreferrer"},y=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A peak element is an element that is strictly greater than its neighbors.</p><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to <strong>any of the peaks</strong>.</p><p>You may imagine that <code>nums[-1] = nums[n] = -∞</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.</p><p>You must write an algorithm that runs in <code>O(log n)</code> time.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,1]</p><p>Output: 2</p><p>Explanation: 3 is a peak element and your function should return the index number 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,1,3,5,6,4]</p><p>Output: 5</p><p>Explanation: Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>-2^31 &lt;= nums[i] &lt;= 2^31 - 1</code></li><li><code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>峰值元素是指其值严格大于左右相邻值的元素。</p><p>给你一个整数数组 <code>nums</code>，找到峰值元素并返回其索引。数组可能包含多个峰值，在这种情况下，返回 <strong>任何一个峰值</strong> 所在位置即可。</p><p>你可以假设 <code>nums[-1] = nums[n] = -∞</code> 。</p><p>你必须实现时间复杂度为 <code>O(log n)</code> 的算法来解决此问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要求算法在 <code>O(log n)</code> 的时间内完成，可以使用二分查找来解决。</p><p>在每一步二分查找中，可以找到中间元素 <code>mid</code>，然后与其相邻的元素 <code>mid-1</code> 和 <code>mid+1</code> 进行比较。如果 <code>nums[mid] &gt; nums[mid-1]</code> 且 <code>nums[mid] &gt; nums[mid+1]</code>，则 <code>mid</code> 即为峰值元素的位置。如果 <code>nums[mid-1] &gt; nums[mid]</code>，则峰值元素必然在 <code>mid</code> 的左侧；如果 <code>nums[mid+1] &gt; nums[mid]</code>，则峰值元素必然在 <code>mid</code> 的右侧。</p><p>通过不断缩小搜索范围，最终可以找到一个峰值元素的位置。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findPeakElement</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),v=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"852",-1),E=e("td",{style:{"text-align":"left"}},"山脉数组的峰顶索引",-1),I={style:{"text-align":"center"}},q={style:{"text-align":"left"}},C=e("code",null,"数组",-1),L=e("code",null,"二分查找",-1),N=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/peak-index-in-a-mountain-array",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"1901",-1),Y=e("td",{style:{"text-align":"left"}},"寻找峰值 II",-1),M=e("td",{style:{"text-align":"center"}},null,-1),R={style:{"text-align":"left"}},A=e("code",null,"数组",-1),G=e("code",null,"二分查找",-1),P=e("code",null,"矩阵",-1),S=e("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/find-a-peak-element-ii",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/find-a-peak-element-ii",target:"_blank",rel:"noopener noreferrer"},F=e("td",{style:{"text-align":"center"}},"2137",-1),H=e("td",{style:{"text-align":"left"}},"通过倒水操作让所有的水桶所含水量相等 🔒",-1),J=e("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},Q=e("code",null,"数组",-1),U=e("code",null,"二分查找",-1),W=e("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/pour-water-between-buckets-to-make-water-levels-equal",target:"_blank",rel:"noopener noreferrer"},ee=e("td",{style:{"text-align":"center"}},"2210",-1),te=e("td",{style:{"text-align":"left"}},"统计数组中峰和谷的数量",-1),ne={style:{"text-align":"center"}},se={style:{"text-align":"left"}},ae=e("code",null,"数组",-1),oe=e("td",{style:{"text-align":"center"}},"🟢",-1),le={style:{"text-align":"center"}},re={href:"https://leetcode.cn/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},ce={href:"https://leetcode.com/problems/count-hills-and-valleys-in-an-array",target:"_blank",rel:"noopener noreferrer"},ie=e("td",{style:{"text-align":"center"}},"2951",-1),de=e("td",{style:{"text-align":"left"}},"找出峰值",-1),pe=e("td",{style:{"text-align":"center"}},null,-1),ue={style:{"text-align":"left"}},he=e("code",null,"数组",-1),_e=e("code",null,"枚举",-1),me=e("td",{style:{"text-align":"center"}},"🟢",-1),ke={style:{"text-align":"center"}},ge={href:"https://leetcode.cn/problems/find-the-peaks",target:"_blank",rel:"noopener noreferrer"},fe={href:"https://leetcode.com/problems/find-the-peaks",target:"_blank",rel:"noopener noreferrer"};function be(ye,xe){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[_,e("p",null,[t("🟠 "),n(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[k]),_:1}),t("  🔗 "),e("a",g,[f,n(o)]),t(),e("a",b,[y,n(o)])]),x,p(" prettier-ignore "),e("table",null,[v,e("tbody",null,[e("tr",null,[w,E,e("td",I,[n(a,{to:"/problem/0852.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",q,[n(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),t(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[L]),_:1})]),N,e("td",O,[e("a",V,[t("🀄️"),n(o)]),t(),e("a",j,[t("🔗"),n(o)])])]),e("tr",null,[B,Y,M,e("td",R,[n(a,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),t(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[G]),_:1}),t(),n(a,{to:"/tag/matrix.html"},{default:s(()=>[P]),_:1})]),S,e("td",T,[e("a",z,[t("🀄️"),n(o)]),t(),e("a",D,[t("🔗"),n(o)])])]),e("tr",null,[F,H,J,e("td",K,[n(a,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),t(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[U]),_:1})]),W,e("td",X,[e("a",Z,[t("🀄️"),n(o)]),t(),e("a",$,[t("🔗"),n(o)])])]),e("tr",null,[ee,te,e("td",ne,[n(a,{to:"/problem/2210.html"},{default:s(()=>[t("[✓]")]),_:1})]),e("td",se,[n(a,{to:"/tag/array.html"},{default:s(()=>[ae]),_:1})]),oe,e("td",le,[e("a",re,[t("🀄️"),n(o)]),t(),e("a",ce,[t("🔗"),n(o)])])]),e("tr",null,[ie,de,pe,e("td",ue,[n(a,{to:"/tag/array.html"},{default:s(()=>[he]),_:1}),t(),n(a,{to:"/tag/enumeration.html"},{default:s(()=>[_e]),_:1})]),me,e("td",ke,[e("a",ge,[t("🀄️"),n(o)]),t(),e("a",fe,[t("🔗"),n(o)])])])])])])}const we=c(h,[["render",be],["__file","0162.html.vue"]]);export{we as default};

import{_ as i,r as l,o as p,c as d,a as t,b as e,d as n,w as s,f as u,e as r}from"./app-U2ekqv2z.js";const h={},_=t("h1",{id:"_724-寻找数组的中心下标",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_724-寻找数组的中心下标","aria-hidden":"true"},"#"),e(" 724. 寻找数组的中心下标")],-1),m=t("code",null,"数组",-1),f=t("code",null,"前缀和",-1),k={href:"https://leetcode.cn/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),y=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code>, calculate the <strong>pivot index</strong> of this array.</p><p>The <strong>pivot index</strong> is the index where the sum of all the numbers <strong>strictly</strong> to the left of the index is equal to the sum of all the numbers <strong>strictly</strong> to the index&#39;s right.</p><p>If the index is on the left edge of the array, then the left sum is <code>0</code> because there are no elements to the left. This also applies to the right edge of the array.</p><p>Return <em>the <strong>leftmost pivot index</strong></em>. If no such index exists, return <code>-1</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,7,3,6,5,6]</p><p>Output: 3</p><p>Explanation:</p><p>The pivot index is 3.</p><p>Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11</p><p>Right sum = nums[4] + nums[5] = 5 + 6 = 11</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: -1</p><p>Explanation:</p><p>There is no index that satisfies the conditions in the problem statement.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [2,1,-1]</p><p>Output: 0</p><p>Explanation:</p><p>The pivot index is 0.</p><p>Left sum = 0 (no elements to the left of index 0)</p><p>Right sum = nums[1] + nums[2] = 1 + -1 = 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul>',13),v=t("strong",null,"Note:",-1),w=r(`<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数类型的数组  nums，请编写一个能够返回数组 “中心索引” 的方法。我们是这样定义数组 中心索引 的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在数组中，找到一个数，使得它左边的数之和等于它的右边的数之和，如果存在，则返回这个数的下标索引，否作返回 <code>-1</code>。</p><p>这里面存在一个等式，只需要满足这个等式即可满足条件：<code>leftSum + num[i] = sum - leftSum</code> =&gt; <code>2 * leftSum + num[i] = sum</code>。</p><ul><li><strong>总和计算</strong>：先计算数组的总和 <code>total</code>，然后通过逐步累加 <code>leftSum</code>（左侧元素和），检查当前索引是否满足中心索引的条件，即 <code>2 * leftSum + nums[i] === total</code>。</li><li>如果找到这样的索引，返回其值；如果找不到，返回 <code>-1</code>。</li><li>题目提到如果存在多个索引，则返回最左边那个，因此从左开始求和，而不是从右边。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。 <ul><li>总和计算使用 <code>reduce</code> 方法遍历数组求和，时间复杂度为 <code>O(n)</code>；</li><li>在主循环中，遍历数组每个元素，通过检查和更新 <code>leftSum</code> 判断是否满足条件，这个操作也是线性的 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pivotIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> leftSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> leftSum <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		leftSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,11),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"560",-1),S=t("td",{style:{"text-align":"left"}},"和为 K 的子数组",-1),I={style:{"text-align":"center"}},L={style:{"text-align":"left"}},O=t("code",null,"数组",-1),T=t("code",null,"哈希表",-1),N=t("code",null,"前缀和",-1),C=t("td",{style:{"text-align":"center"}},"🟠",-1),R={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"1991",-1),G=t("td",{style:{"text-align":"left"}},"找到数组的中间位置",-1),K=t("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=t("code",null,"数组",-1),D=t("code",null,"前缀和",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/find-the-middle-index-in-array",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},"2219",-1),Q=t("td",{style:{"text-align":"left"}},"数组的最大总分 🔒",-1),U=t("td",{style:{"text-align":"center"}},null,-1),W={style:{"text-align":"left"}},X=t("code",null,"数组",-1),Y=t("code",null,"前缀和",-1),Z=t("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/maximum-sum-score-of-array",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"2270",-1),st=t("td",{style:{"text-align":"left"}},"分割数组的方案数",-1),at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},lt=t("code",null,"数组",-1),rt=t("code",null,"前缀和",-1),ct=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/number-of-ways-to-split-array",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"2574",-1),ht=t("td",{style:{"text-align":"left"}},"左右元素和的差值",-1),_t=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),kt=t("code",null,"前缀和",-1),gt=t("td",{style:{"text-align":"center"}},"🟢",-1),xt={style:{"text-align":"center"}},bt={href:"https://leetcode.cn/problems/left-and-right-sum-differences",target:"_blank",rel:"noopener noreferrer"},yt={href:"https://leetcode.com/problems/left-and-right-sum-differences",target:"_blank",rel:"noopener noreferrer"};function vt(wt,qt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[_,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",k,[g,n(o)]),e(),t("a",x,[b,n(o)])]),y,t("p",null,[v,e(" This question is the same as "),n(a,{to:"/problem/1991.html"},{default:s(()=>[e("1991")]),_:1})]),w,u(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[E,S,t("td",I,[n(a,{to:"/problem/0560.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",L,[n(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(a,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[N]),_:1})]),C,t("td",R,[t("a",V,[e("🀄️"),n(o)]),e(),t("a",j,[e("🔗"),n(o)])])]),t("tr",null,[B,G,K,t("td",z,[n(a,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[D]),_:1})]),F,t("td",H,[t("a",J,[e("🀄️"),n(o)]),e(),t("a",M,[e("🔗"),n(o)])])]),t("tr",null,[P,Q,U,t("td",W,[n(a,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[Y]),_:1})]),Z,t("td",$,[t("a",tt,[e("🀄️"),n(o)]),e(),t("a",et,[e("🔗"),n(o)])])]),t("tr",null,[nt,st,at,t("td",ot,[n(a,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[rt]),_:1})]),ct,t("td",it,[t("a",pt,[e("🀄️"),n(o)]),e(),t("a",dt,[e("🔗"),n(o)])])]),t("tr",null,[ut,ht,_t,t("td",mt,[n(a,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[kt]),_:1})]),gt,t("td",xt,[t("a",bt,[e("🀄️"),n(o)]),e(),t("a",yt,[e("🔗"),n(o)])])])])])])}const St=i(h,[["render",vt],["__file","0724.html.vue"]]);export{St as default};

import{_ as r,r as l,o as i,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-U2ekqv2z.js";const h={},_=t("h1",{id:"_238-除自身以外数组的乘积",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_238-除自身以外数组的乘积","aria-hidden":"true"},"#"),e(" 238. 除自身以外数组的乘积")],-1),m=t("code",null,"数组",-1),k=t("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},g=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>an array</em> <code>answer</code> <em>such that</em><code>answer[i]</code> <em>is equal to the product of all the elements of</em> <code>nums</code> <em>except</em><code>nums[i]</code>.</p><p>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</p><p>You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,3,4]</p><p>Output: [24,12,8,6]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-1,1,0,-3,3]</p><p>Output: [0,0,9,0,0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^5</code></li><li><code>-30 &lt;= nums[i] &lt;= 30</code></li><li>The product of any prefix or suffix of <code>nums</code> is <strong>guaranteed</strong> to fit in a <strong>32-bit</strong> integer.</li></ul><p><strong>Follow up:</strong> Can you solve the problem in <code>O(1)</code> extra space complexity? (The output array <strong>does not</strong> count as extra space for space complexity analysis.)</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个数组 <code>nums</code>。要求返回数组 <code>answer</code>，其中 <code>answer[i]</code> 等于 <code>nums</code> 中除 <code>nums[i]</code> 之外其余各元素的乘积。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>两次遍历。</p><p>构造一个答案数组 <code>res</code>，长度和数组 <code>nums</code> 长度一致。</p><p>先从左到右遍历一遍 <code>nums</code> 数组，将 <code>nums[i]</code> 左侧的元素乘积累积起来，存储到 <code>res</code> 数组中。</p><p>再从右到左遍历一遍，将 <code>nums[i]</code> 右侧的元素乘积累积起来，再乘以原本 <code>res[i]</code> 的值，即为 <code>nums</code> 中除了 <code>nums[i]</code> 之外的其他所有元素乘积。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组两次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，使用了一个数组来存放最终的结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">productExceptSelf</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> left<span class="token punctuation">;</span>
		left <span class="token operator">*=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">*=</span> right<span class="token punctuation">;</span>
		right <span class="token operator">*=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"42",-1),q=t("td",{style:{"text-align":"left"}},"接雨水",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=t("code",null,"栈",-1),O=t("code",null,"数组",-1),L=t("code",null,"双指针",-1),N=t("code",null,"2+",-1),V=t("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"152",-1),S=t("td",{style:{"text-align":"left"}},"乘积最大子数组",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},M=t("code",null,"数组",-1),Y=t("code",null,"动态规划",-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/maximum-product-subarray",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"265",-1),K=t("td",{style:{"text-align":"left"}},"粉刷房子 II 🔒",-1),P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"动态规划",-1),X=t("td",{style:{"text-align":"center"}},"🔴",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/paint-house-ii",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/paint-house-ii",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},"2163",-1),nt=t("td",{style:{"text-align":"left"}},"删除元素后和的最小差值",-1),st=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},ot=t("code",null,"数组",-1),lt=t("code",null,"动态规划",-1),ct=t("code",null,"堆（优先队列）",-1),rt=t("td",{style:{"text-align":"center"}},"🔴",-1),it={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/minimum-difference-in-sums-after-removal-of-elements",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"2906",-1),ht=t("td",{style:{"text-align":"left"}},"构造乘积矩阵",-1),_t=t("td",{style:{"text-align":"center"}},null,-1),mt={style:{"text-align":"left"}},kt=t("code",null,"数组",-1),ft=t("code",null,"矩阵",-1),gt=t("code",null,"前缀和",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},xt={href:"https://leetcode.cn/problems/construct-product-matrix",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/construct-product-matrix",target:"_blank",rel:"noopener noreferrer"};function wt(qt,Ct){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),p("div",null,[_,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),t("a",f,[g,n(o)]),e(),t("a",b,[y,n(o)])]),x,d(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[w,q,t("td",C,[n(a,{to:"/problem/0042.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",E,[n(a,{to:"/tag/stack.html"},{default:s(()=>[I]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),n(a,{to:"/tag/two-pointers.html"},{default:s(()=>[L]),_:1}),e(),N]),V,t("td",T,[t("a",j,[e("🀄️"),n(o)]),e(),t("a",B,[e("🔗"),n(o)])])]),t("tr",null,[R,S,t("td",F,[n(a,{to:"/problem/0152.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",G,[n(a,{to:"/tag/array.html"},{default:s(()=>[M]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Y]),_:1})]),z,t("td",A,[t("a",D,[e("🀄️"),n(o)]),e(),t("a",H,[e("🔗"),n(o)])])]),t("tr",null,[J,K,P,t("td",Q,[n(a,{to:"/tag/array.html"},{default:s(()=>[U]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[W]),_:1})]),X,t("td",Z,[t("a",$,[e("🀄️"),n(o)]),e(),t("a",tt,[e("🔗"),n(o)])])]),t("tr",null,[et,nt,st,t("td",at,[n(a,{to:"/tag/array.html"},{default:s(()=>[ot]),_:1}),e(),n(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[lt]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[ct]),_:1})]),rt,t("td",it,[t("a",pt,[e("🀄️"),n(o)]),e(),t("a",dt,[e("🔗"),n(o)])])]),t("tr",null,[ut,ht,_t,t("td",mt,[n(a,{to:"/tag/array.html"},{default:s(()=>[kt]),_:1}),e(),n(a,{to:"/tag/matrix.html"},{default:s(()=>[ft]),_:1}),e(),n(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[gt]),_:1})]),bt,t("td",yt,[t("a",xt,[e("🀄️"),n(o)]),e(),t("a",vt,[e("🔗"),n(o)])])])])])])}const It=r(h,[["render",wt],["__file","0238.html.vue"]]);export{It as default};

import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const h={},k=n("h1",{id:"_611-有效三角形的个数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_611-有效三角形的个数","aria-hidden":"true"},"#"),t(" 611. 有效三角形的个数")],-1),m=n("code",null,"贪心",-1),_=n("code",null,"数组",-1),g=n("code",null,"双指针",-1),f=n("code",null,"二分查找",-1),b=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/valid-triangle-number",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/valid-triangle-number",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),E=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, return <em>the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,2,3,4]</p><p>Output: 3</p><p>Explanation: Valid combinations are:</p><p>2,3,4 (using the first 2)</p><p>2,3,4 (using the second 2)</p><p>2,2,3</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,2,3,4]</p><p>Output: 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含非负整数的数组，你的任务是统计其中可以组成三角形三条边的三元组个数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>构成三角形的条件为：任意两边和大于第三边，或者任意两边差小于第三边。只要满足这两个条件之一就可以构成三角形。以任意两边和大于第三边为例，如果用 <code>a</code>、<code>b</code>、<code>c</code> 来表示的话，应该同时满足 <code>a + b &gt; c</code>、<code>a + c &gt; b</code>、<code>b + c &gt; a</code>。如果我们将三条边升序排序，假设 <code>a &lt;= b &lt;= c</code>，则如果满足 <code>a + b &gt; c</code>，则 <code>a + c &gt; b</code> 和 <code>b + c &gt; a</code> 一定成立。</p><p>所以我们可以先对 <code>nums</code> 进行排序。然后固定最大边 <code>i</code>，利用对撞指针 <code>left</code>、<code>right</code> 查找较小的两条边。然后判断是否构成三角形并统计三元组个数。</p><p>为了避免重复计算和漏解，要严格保证三条边的序号关系为：<code>left &lt; right &lt; i</code>。具体做法如下：</p><ul><li>对数组从小到大排序，使用 <code>res</code> 记录三元组个数。</li><li>从 <code>i = 2</code> 开始遍历数组的每一条边，<code>i</code> 作为最大边。</li><li>使用双指针 <code>left</code>、<code>right</code>。<code>left</code> 指向 <code>0</code>，<code>right</code> 指向 <code>i - 1</code>。 <ul><li>如果 <code>nums[left] + nums[right] &lt;= nums[i]</code>，说明第一条边太短了，可以增加第一条边长度，所以将 <code>left</code> 右移，即 <code>left += 1</code>。</li><li>如果 <code>nums[left] + nums[right] &gt; nums[i]</code>，说明可以构成三角形，并且第二条边固定为 <code>right</code> 边的话，第一条边可以在 <code>[left, right - 1]</code> 中任意选择。所以三元组个数要加上 <code>right - left</code>。即 <code>res += (right - left)</code>。</li></ul></li><li>直到 <code>left == right</code> 跳出循环，输出三元组个数 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">triangleNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	nums <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">+</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				left<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				res <span class="token operator">+=</span> right <span class="token operator">-</span> left<span class="token punctuation">;</span>
				right<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"259",-1),C=n("td",{style:{"text-align":"left"}},"较小的三数之和 🔒",-1),L={style:{"text-align":"center"}},q={style:{"text-align":"left"}},I=n("code",null,"数组",-1),j=n("code",null,"双指针",-1),B=n("code",null,"二分查找",-1),O=n("code",null,"1+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2971",-1),z=n("td",{style:{"text-align":"left"}},"找到最大周长的多边形",-1),A=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"贪心",-1),H=n("code",null,"数组",-1),J=n("code",null,"前缀和",-1),K=n("code",null,"1+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/find-polygon-with-the-largest-perimeter",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/find-polygon-with-the-largest-perimeter",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[b]),_:1}),t("  🔗 "),n("a",v,[y,e(o)]),t(),n("a",x,[w,e(o)])]),E,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[V,C,n("td",L,[e(a,{to:"/problem/0259.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",q,[e(a,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[j]),_:1}),t(),e(a,{to:"/tag/binary-search.html"},{default:s(()=>[B]),_:1}),t(),O]),R,n("td",G,[n("a",M,[t("🀄️"),e(o)]),t(),n("a",S,[t("🔗"),e(o)])])]),n("tr",null,[T,z,A,n("td",D,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[F]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),t(),e(a,{to:"/tag/prefix-sum.html"},{default:s(()=>[J]),_:1}),t(),K]),P,n("td",Q,[n("a",U,[t("🀄️"),e(o)]),t(),n("a",W,[t("🔗"),e(o)])])])])])])}const nn=p(h,[["render",X],["__file","0611.html.vue"]]);export{nn as default};

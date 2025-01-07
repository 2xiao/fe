import{_ as p,r as l,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-WL8GPOUO.js";const h={},m=n("h1",{id:"_922-按奇偶排序数组-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_922-按奇偶排序数组-ii","aria-hidden":"true"},"#"),t(" 922. 按奇偶排序数组 II")],-1),_=n("code",null,"数组",-1),k=n("code",null,"双指针",-1),g=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code>, half of the integers in <code>nums</code> are <strong>odd</strong> , and the other half are <strong>even</strong>.</p><p>Sort the array so that whenever <code>nums[i]</code> is odd, <code>i</code> is <strong>odd</strong> , and whenever <code>nums[i]</code> is even, <code>i</code> is <strong>even</strong>.</p><p>Return <em>any answer array that satisfies this condition</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [4,2,5,7]</p><p>Output: [4,5,2,7]</p><p>Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,3]</p><p>Output: [2,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>nums.length</code> is even.</li><li>Half of the integers in <code>nums</code> are even.</li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><p><strong>Follow Up:</strong> Could you solve it in-place?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个非负整数数组 <code>nums</code>， <code>nums</code> 中一半整数是 <strong>奇数</strong> ，一半整数是 <strong>偶数</strong> 。</p><p>对数组进行排序，以便当 <code>nums[i]</code> 为奇数时，<code>i</code> 也是 <strong>奇数</strong> ；当 <code>nums[i]</code> 为偶数时， <code>i</code> 也是 <strong>偶数</strong> 。</p><p>你可以返回 <em>任何满足上述条件的数组作为答案</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,2,5,7]</p><p><strong>输出：</strong>[4,5,2,7]</p><p><strong>解释：</strong>[4,7,2,5]，[2,5,4,7]，[2,7,4,5] 也会被接受。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,3]</p><p><strong>输出：</strong>[2,3]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 2 * 10^4</code></li><li><code>nums.length</code> 是偶数</li><li><code>nums</code> 中一半是偶数</li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li></ul><p><strong>进阶：</strong> 可以不使用额外空间解决问题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>想要不使用额外空间，可以用双指针法实现。</p><ol><li><p><strong>双指针初始化</strong></p><ul><li><code>even</code> 指针：指向偶数索引（从索引 0 开始），用于检查偶数位置是否存放偶数。</li><li><code>odd</code> 指针：指向奇数索引（从索引 1 开始），用于检查奇数位置是否存放奇数。</li></ul></li><li><p><strong>扫描和交换</strong></p><ul><li>遍历数组，同时检查 <code>odd</code> 和 <code>even</code> 指针的值： <ul><li>如果 <code>nums[odd]</code> 是奇数（满足条件），则 <code>odd</code> 指针后移两个单位，直到 <code>nums[odd]</code> 是偶数（不满足条件）。</li><li>如果 <code>nums[even]</code> 是偶数（满足条件），则 <code>even</code> 指针后移两个单位，直到 <code>nums[odd]</code> 是奇数（不满足条件）。</li><li>如果 <code>nums[odd]</code> 和 <code>nums[even]</code> 都不符合条件，则交换这两个位置的值，随后各自后移两位。</li></ul></li><li>直到任何一个指针超出数组长度，结束循环。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>完成调整后返回数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组一次，查找错误位置并交换。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，直接在原数组上进行交换，不使用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortArrayByParityII</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> even <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化双指针</span>
	<span class="token keyword">let</span> odd <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>even <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> odd <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 找到偶数位置存放奇数的错误</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>even <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>even<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			even <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 找到奇数位置存放偶数的错误</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>odd <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>odd<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			odd <span class="token operator">+=</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 如果错误位置均有效，则交换值</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>even <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> odd <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>odd<span class="token punctuation">]</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>odd<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>even<span class="token punctuation">]</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>even<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> nums<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"905",-1),I=n("td",{style:{"text-align":"left"}},"按奇偶排序数组",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),V=n("code",null,"排序",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2149",-1),A=n("td",{style:{"text-align":"left"}},"按符号重排数组",-1),F=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},H=n("code",null,"数组",-1),P=n("code",null,"双指针",-1),T=n("code",null,"模拟",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/rearrange-array-elements-by-sign",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"2164",-1),M=n("td",{style:{"text-align":"left"}},"对奇偶下标分别排序",-1),Q={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=n("code",null,"数组",-1),Y=n("code",null,"排序",-1),Z=n("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},en=n("td",{style:{"text-align":"center"}},"2231",-1),sn=n("td",{style:{"text-align":"left"}},"按奇偶性交换后的最大数字",-1),an={style:{"text-align":"center"}},on={style:{"text-align":"left"}},ln=n("code",null,"排序",-1),cn=n("code",null,"堆（优先队列）",-1),pn=n("td",{style:{"text-align":"center"}},"🟢",-1),rn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"};function hn(mn,_n){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),i("div",null,[m,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",b,[v,e(o)]),t(),n("a",y,[f,e(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,I,n("td",E,[e(a,{to:"/problem/0905.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",C,[e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[N]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[V]),_:1})]),B,n("td",O,[n("a",j,[t("🀄️"),e(o)]),t(),n("a",R,[t("🔗"),e(o)])])]),n("tr",null,[S,A,F,n("td",G,[e(a,{to:"/tag/array.html"},{default:s(()=>[H]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[P]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[T]),_:1})]),U,n("td",z,[n("a",D,[t("🀄️"),e(o)]),t(),n("a",J,[t("🔗"),e(o)])])]),n("tr",null,[K,M,n("td",Q,[e(a,{to:"/problem/2164.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",W,[e(a,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),e(o)]),t(),n("a",tn,[t("🔗"),e(o)])])]),n("tr",null,[en,sn,n("td",an,[e(a,{to:"/problem/2231.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",on,[e(a,{to:"/tag/sorting.html"},{default:s(()=>[ln]),_:1}),t(),e(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[cn]),_:1})]),pn,n("td",rn,[n("a",dn,[t("🀄️"),e(o)]),t(),n("a",un,[t("🔗"),e(o)])])])])])])}const gn=p(h,[["render",hn],["__file","0922.html.vue"]]);export{gn as default};

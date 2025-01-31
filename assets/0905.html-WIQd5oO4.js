import{_ as r,r as l,o as p,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MkGfDfkx.js";const h={},_=n("h1",{id:"_905-按奇偶排序数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_905-按奇偶排序数组","aria-hidden":"true"},"#"),t(" 905. 按奇偶排序数组")],-1),m=n("code",null,"数组",-1),k=n("code",null,"双指针",-1),g=n("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sort-array-by-parity",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, move all the even integers at the beginning of the array followed by all the odd integers.</p><p>Return <em><strong>any array</strong> that satisfies this condition</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,1,2,4]</p><p>Output: [2,4,3,1]</p><p>Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [0]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>0 &lt;= nums[i] &lt;= 5000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，将 <code>nums</code> 中的的所有偶数元素移动到数组的前面，后跟所有奇数元素。</p><p>返回满足此条件的 <strong>任一数组</strong> 作为答案。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,1,2,4]</p><p><strong>输出：</strong>[2,4,3,1]</p><p><strong>解释：</strong>[4,2,3,1]、[2,4,1,3] 和 [4,2,1,3] 也会被视作正确答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0]</p><p><strong>输出：</strong>[0]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 5000</code></li><li><code>0 &lt;= nums[i] &lt;= 5000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求按照「偶数在前，奇数在后」的顺序对数组进行排列，可以通过遍历数组并在原地进行交换来实现。</p><ol><li><p><strong>定义变量</strong></p><ul><li>使用变量 <code>count</code> 记录当前「偶数部分」的分界点索引，即下一个偶数应该被放置的位置。</li><li>初始化 <code>count</code> 为 <code>0</code>，表示当前还没有处理任何偶数。</li></ul></li><li><p><strong>遍历数组</strong></p><ul><li>遍历数组中的每个元素 <code>nums[i]</code>： <ol><li>如果 <code>nums[i]</code> 是偶数，则将它与 <code>nums[count]</code> 进行交换，将偶数移到「偶数部分」的尾部。</li><li>将分界点 <code>count</code> 向前移动一位。</li></ol></li><li>如果 <code>nums[i]</code> 是奇数，则不需要任何操作，继续检查下一个元素。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>遍历结束后，数组已经按照「偶数在前，奇数在后」的顺序排列，直接返回 <code>nums</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组一次，每次交换元素的操作是常数时间</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortArrayByParity</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录下一个偶数应该放置的位置</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果是偶数</span>
			<span class="token comment">// 交换 nums[i] 和 nums[count]</span>
			<span class="token keyword">let</span> temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>count<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
			nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 偶数部分的边界右移</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> nums<span class="token punctuation">;</span> <span class="token comment">// 返回排列后的数组</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"922",-1),E=n("td",{style:{"text-align":"left"}},"按奇偶排序数组 II",-1),I={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),V=n("code",null,"排序",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/sort-array-by-parity-ii",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2164",-1),A=n("td",{style:{"text-align":"left"}},"对奇偶下标分别排序",-1),G={style:{"text-align":"center"}},P={style:{"text-align":"left"}},S=n("code",null,"数组",-1),z=n("code",null,"排序",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/sort-even-and-odd-indices-independently",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"2231",-1),M=n("td",{style:{"text-align":"left"}},"按奇偶性交换后的最大数字",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"排序",-1),X=n("code",null,"堆（优先队列）",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity",target:"_blank",rel:"noopener noreferrer"};function tn(en,sn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[_,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",b,[y,e(o)]),t(),n("a",f,[v,e(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",I,[e(a,{to:"/problem/0922.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",C,[e(a,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[N]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[V]),_:1})]),B,n("td",O,[n("a",j,[t("🀄️"),e(o)]),t(),n("a",R,[t("🔗"),e(o)])])]),n("tr",null,[T,A,n("td",G,[e(a,{to:"/problem/2164.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",P,[e(a,{to:"/tag/array.html"},{default:s(()=>[S]),_:1}),t(),e(a,{to:"/tag/sorting.html"},{default:s(()=>[z]),_:1})]),D,n("td",F,[n("a",H,[t("🀄️"),e(o)]),t(),n("a",J,[t("🔗"),e(o)])])]),n("tr",null,[K,M,n("td",Q,[e(a,{to:"/problem/2231.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",U,[e(a,{to:"/tag/sorting.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/heap-priority-queue.html"},{default:s(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[t("🀄️"),e(o)]),t(),n("a",nn,[t("🔗"),e(o)])])])])])])}const on=r(h,[["render",tn],["__file","0905.html.vue"]]);export{on as default};

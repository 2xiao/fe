import{_ as l,r as p,o as r,c as i,a as n,b as t,d as s,w as a,f as u,e as d}from"./app-U2ekqv2z.js";const k={},h=n("h1",{id:"_1356-根据数字二进制下-1-的数目排序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1356-根据数字二进制下-1-的数目排序","aria-hidden":"true"},"#"),t(" 1356. 根据数字二进制下 1 的数目排序")],-1),g=n("code",null,"位运算",-1),m=n("code",null,"数组",-1),_=n("code",null,"计数",-1),b=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer array <code>arr</code>. Sort the integers in the array in ascending order by the number of <code>1</code>&#39;s in their binary representation and in case of two or more integers have the same number of <code>1</code>&#39;s you have to sort them in ascending order.</p><p>Return <em>the array after sorting it</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [0,1,2,3,4,5,6,7,8]</p><p>Output: [0,1,2,4,8,3,5,6,7]</p><p><strong>Explantion:</strong> [0] is the only integer with 0 bits.</p><p>[1,2,4,8] all have 1 bit.</p><p>[3,5,6] have 2 bits.</p><p>[7] has 3 bits.</p><p>The sorted array by bits is [0,1,2,4,8,3,5,6,7]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1024,512,256,128,64,32,16,8,4,2,1]</p><p>Output: [1,2,4,8,16,32,64,128,256,512,1024]</p><p><strong>Explantion:</strong> All integers have 1 bit in the binary representation, you should just sort them in ascending order.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 500</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> 。请你将数组中的元素按照其二进制表示中数字 <strong>1</strong> 的数目升序排序。</p><p>如果存在多个数字二进制中 <strong>1</strong> 的数目相同，则必须将它们按照数值大小升序排列。</p><p>请你返回排序后的数组。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [0,1,2,3,4,5,6,7,8]</p><p><strong>输出：</strong>[0,1,2,4,8,3,5,6,7]</p><p><strong>解释：</strong>[0] 是唯一一个有 0 个 1 的数。</p><p>[1,2,4,8] 都有 1 个 1 。</p><p>[3,5,6] 有 2 个 1 。</p><p>[7] 有 3 个 1 。</p><p>按照 1 的个数排序得到的结果数组为 [0,1,2,4,8,3,5,6,7]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1024,512,256,128,64,32,16,8,4,2,1]</p><p><strong>输出：</strong>[1,2,4,8,16,32,64,128,256,512,1024]</p><p><strong>解释：</strong> 数组中所有整数二进制下都只有 1 个 1 ，所以你需要按照数值大小将它们排序。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [10000,10000]</p><p><strong>输出：</strong>[10000,10000]</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,3,5,7,11,13,17,19]</p><p><strong>输出：</strong>[2,3,5,17,7,11,13,19]</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> arr = [10,100,1000,10000]</p><p><strong>输出：</strong>[10,100,10000,1000]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 500</code></li><li><code>0 &lt;= arr[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>定义一个辅助函数 <code>countBits</code>，利用位运算计算每个数字的二进制表示中 <code>1</code> 的个数。</p><ul><li>方法是将数字不断右移 (<code>n &gt;&gt;= 1</code>)，同时检查最低位是否为 <code>1</code> (<code>n &amp; 1</code>)。</li></ul></li><li><p>将数组 <code>arr</code> 映射为 <code>[countBits(n), n]</code> 的形式。</p></li><li><p>使用自定义排序规则排序：</p><ul><li>若 <code>1</code> 的个数不同，按 <code>1</code> 的个数排序；</li><li>若相同，按数字大小排序。</li></ul></li><li><p>提取排序后的数字并返回结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k + n log n)</code><ul><li>计算 <code>1</code> 的个数：对每个数字调用 <code>countBits</code>，复杂度为 <code>O(log k)</code>，其中 <code>k</code> 是数组中最大数字。</li><li>排序：<code>O(n log n)</code>，其中 <code>n</code> 是数组长度。</li><li>总复杂度为 <code>O(n log k + n log n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，映射和排序的辅助数组占用 <code>O(n)</code> 空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortByBits</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">countBits</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> n <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 检查最低位是否为 1</span>
			n <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移一位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> arr
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token function">countBits</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">,</span> n<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// 映射为 [1 的个数, 数字]</span>
		<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">===</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 按数字大小排序</span>
			<span class="token keyword">return</span> a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> b<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 按 1 的个数排序</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>bits<span class="token punctuation">,</span> n<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> n<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 提取排序后的数字</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),B=n("td",{style:{"text-align":"center"}},"2099",-1),E=n("td",{style:{"text-align":"left"}},"找到和最大的长度为 K 的子序列",-1),O=n("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"哈希表",-1),V=n("code",null,"排序",-1),j=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum",target:"_blank",rel:"noopener noreferrer"},A=n("td",{style:{"text-align":"center"}},"3011",-1),K=n("td",{style:{"text-align":"left"}},"判断一个数组是否可以变为有序",-1),Y={style:{"text-align":"center"}},z={style:{"text-align":"left"}},D=n("code",null,"位运算",-1),F=n("code",null,"数组",-1),G=n("code",null,"排序",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/find-if-array-can-be-sorted",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/find-if-array-can-be-sorted",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/counting.html"},{default:a(()=>[_]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[b]),_:1}),t("  🔗 "),n("a",f,[v,s(o)]),t(),n("a",y,[x,s(o)])]),w,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[B,E,O,n("td",C,[s(e,{to:"/tag/array.html"},{default:a(()=>[L]),_:1}),t(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[V]),_:1}),t(),j]),I,n("td",R,[n("a",S,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[A,K,n("td",Y,[s(e,{to:"/problem/3011.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",z,[s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[D]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[F]),_:1}),t(),s(e,{to:"/tag/sorting.html"},{default:a(()=>[G]),_:1})]),H,n("td",J,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])])])])])}const Z=l(k,[["render",Q],["__file","1356.html.vue"]]);export{Z as default};

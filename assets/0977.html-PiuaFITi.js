import{_ as r,r as l,o as c,c as i,a as n,b as s,d as t,w as e,f as d,e as u}from"./app-WL8GPOUO.js";const k={},h=n("h1",{id:"_977-有序数组的平方",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_977-有序数组的平方","aria-hidden":"true"},"#"),s(" 977. 有序数组的平方")],-1),g=n("code",null,"数组",-1),m=n("code",null,"双指针",-1),_=n("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> sorted in <strong>non-decreasing</strong> order, return <em>an array of<strong>the squares of each number</strong> sorted in non-decreasing order</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [-4,-1,0,3,10]</p><p>Output: [0,1,9,16,100]</p><p>Explanation: After squaring, the array becomes [16,1,0,9,100].</p><p>After sorting, it becomes [0,1,9,16,100].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [-7,-3,2,3,11]</p><p>Output: [4,9,9,49,121]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> is sorted in <strong>non-decreasing</strong> order.</li></ul><p><strong>Follow up:</strong> Squaring each element and sorting the new array is very trivial, could you find an <code>O(n)</code> solution using a different approach?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个按 <strong>非递减顺序</strong> 排序的整数数组 <code>nums</code>，返回 <strong>每个数字的平方</strong> 组成的新数组，要求也按 <strong>非递减顺序</strong> 排序。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [-4,-1,0,3,10]</p><p><strong>输出：</strong>[0,1,9,16,100]</p><p><strong>解释：</strong> 平方后，数组变为 [16,1,0,9,100]</p><p>排序后，数组变为 [0,1,9,16,100]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [-7,-3,2,3,11]</p><p><strong>输出：</strong>[4,9,9,49,121]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>nums</code> 已按 <strong>非递减顺序</strong> 排序</li></ul><p><strong>进阶：</strong> 请你设计时间复杂度为 <code>O(n)</code> 的算法解决本问题。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>平方和排序</strong>:</p><ul><li>负数的平方会变成正数，所以需要将负数和正数的平方进行比较。</li><li>对于一个已经排好序的数组，负数的平方值在数组前部（较小的绝对值），正数的平方值在数组后部（较大的绝对值）。因此可以利用双指针的方式从两端开始，比较左右两侧的平方值并按升序放入结果数组。</li></ul></li><li><p><strong>初始化</strong>:</p><ul><li>初始化一个和输入数组同样长度的结果数组 <code>res</code>。</li><li>使用两个指针 <code>left</code> 和 <code>right</code>，分别指向数组的两端。</li><li>变量 <code>i</code> 用于指示当前填充位置，由于结果数组需要按升序排列，所以从数组的末尾（最大位置）开始填充。</li></ul></li><li><p><strong>填充结果数组</strong>:</p><ul><li>每次比较 <code>nums[left]</code> 和 <code>nums[right]</code> 的绝对值大小，较大的平方值填入结果数组的末尾，并更新对应的指针（<code>left</code> 或 <code>right</code>）。</li><li>当左右指针交错时，循环结束，最终得到的数组就是按升序排列的平方数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，双指针法遍历整个数组，每个元素都只访问一次。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，构造了一个大小为 <code>n</code> 的结果数组 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">sortedSquares</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>i<span class="token operator">--</span><span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">**</span> <span class="token number">2</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"88",-1),E=n("td",{style:{"text-align":"left"}},"合并两个有序数组",-1),O={style:{"text-align":"center"}},C={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"双指针",-1),V=n("code",null,"排序",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"360",-1),M=n("td",{style:{"text-align":"left"}},"有序转化数组 🔒",-1),R=n("td",{style:{"text-align":"center"}},null,-1),F={style:{"text-align":"left"}},G=n("code",null,"数组",-1),T=n("code",null,"数学",-1),z=n("code",null,"双指针",-1),D=n("code",null,"1+",-1),H=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const p=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return c(),i("div",null,[h,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[m]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",f,[b,t(o)]),s(),n("a",v,[y,t(o)])]),x,d(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,E,n("td",O,[t(a,{to:"/problem/0088.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",C,[t(a,{to:"/tag/array.html"},{default:e(()=>[L]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[N]),_:1}),s(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[V]),_:1})]),I,n("td",j,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[S,M,R,n("td",F,[t(a,{to:"/tag/array.html"},{default:e(()=>[G]),_:1}),s(),t(a,{to:"/tag/math.html"},{default:e(()=>[T]),_:1}),s(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[z]),_:1}),s(),D]),H,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])])])])])}const Y=r(k,[["render",Q],["__file","0977.html.vue"]]);export{Y as default};

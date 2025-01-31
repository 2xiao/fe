import{_ as l,r as p,o as r,c as i,a as n,b as s,d as e,w as a,f as u,e as d}from"./app-MkGfDfkx.js";const k={},h=n("h1",{id:"_1752-检查数组是否经排序和轮转得到",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1752-检查数组是否经排序和轮转得到","aria-hidden":"true"},"#"),s(" 1752. 检查数组是否经排序和轮转得到")],-1),m=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/check-if-array-is-sorted-and-rotated",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/check-if-array-is-sorted-and-rotated",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>nums</code>, return <code>true</code> <em>if the array was originally sorted in non-decreasing order, then rotated <strong>some</strong> number of positions (including zero)</em>. Otherwise, return <code>false</code>.</p><p>There may be <strong>duplicates</strong> in the original array.</p><p><strong>Note:</strong> An array <code>A</code> rotated by <code>x</code> positions results in an array <code>B</code> of the same length such that <code>A[i] == B[(i+x) % A.length]</code>, where <code>%</code> is the modulo operation.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [3,4,5,1,2]</p><p>Output: true</p><p>Explanation: [1,2,3,4,5] is the original sorted array.</p><p>You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [2,1,3,4]</p><p>Output: false</p><p>Explanation: There is no sorted array once rotated that can make nums.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3]</p><p>Output: true</p><p>Explanation: [1,2,3] is the original sorted array.</p><p>You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个数组 <code>nums</code> 。<code>nums</code> 的源数组中，所有元素与 <code>nums</code> 相同，但按非递减顺序排列。</p><p>如果 <code>nums</code> 能够由源数组轮转若干位置（包括 0 个位置）得到，则返回 <code>true</code>；否则，返回 <code>false</code> 。</p><p>源数组中可能存在 <strong>重复项</strong> 。</p><p><strong>注意：</strong> 我们称数组 <code>A</code> 在轮转 <code>x</code> 个位置后得到长度相同的数组 <code>B</code> ，当它们满足 <code>A[i] == B[(i+x) % A.length]</code> ，其中 <code>%</code> 为取余运算。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [3,4,5,1,2]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong>[1,2,3,4,5] 为有序的源数组。</p><p>可以轮转 x = 3 个位置，使新数组从值为 3 的元素开始：[3,4,5,1,2] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,3,4]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 源数组无法经轮转得到 nums 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong>[1,2,3] 为有序的源数组。</p><p>可以轮转 x = 0 个位置（即不轮转）得到 nums 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>1 &lt;= nums[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求判断数组是否可以通过旋转成为非递减顺序数组。通过分析，可以总结出关键点：</p><ul><li>若数组是旋转后形成的非递减序列，则最多只会出现一次由较大元素到较小元素的递减情况。</li><li>其中，若数组中的数全都相同，则出现 0 次递减情况。</li></ul><ol><li><p><strong>遍历数组并统计递减次数</strong>：</p><ul><li>遍历数组，检查相邻元素 <code>nums[i-1]</code> 和 <code>nums[i]</code> 是否满足递减条件，即 <code>nums[i-1] &gt; nums[i]</code>。</li><li>递减次数记录在变量 <code>count</code> 中。</li></ul></li><li><p><strong>检查首尾是否递减</strong>：</p><ul><li>因为数组是循环的，还需要判断最后一个元素和第一个元素之间是否存在递减，即 <code>nums[n-1] &gt; nums[0]</code>。</li></ul></li><li><p><strong>判断递减次数是否符合要求</strong>：</p><ul><li>若数组是旋转后形成的非递减序列，则递减次数 <code>count</code> 至多为 1。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>

<span class="token keyword">var</span> <span class="token function-variable function">check</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 检查递减次数</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 检查首尾递减</span>
	<span class="token keyword">return</span> count <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 至多有1次递减</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),v=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2124",-1),w=n("td",{style:{"text-align":"left"}},"检查是否所有 A 都在 B 之前",-1),q={style:{"text-align":"center"}},E={style:{"text-align":"left"}},A=n("code",null,"字符串",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/check-if-all-as-appears-before-all-bs",target:"_blank",rel:"noopener noreferrer"};function I(L,V){const c=p("font"),o=p("RouterLink"),t=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),e(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,e(t)]),s(),n("a",_,[f,e(t)])]),y,u(" prettier-ignore "),n("table",null,[v,n("tbody",null,[n("tr",null,[x,w,n("td",q,[e(o,{to:"/problem/2124.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[e(o,{to:"/tag/string.html"},{default:a(()=>[A]),_:1})]),B,n("td",N,[n("a",O,[s("🀄️"),e(t)]),s(),n("a",C,[s("🔗"),e(t)])])])])])])}const T=l(k,[["render",I],["__file","1752.html.vue"]]);export{T as default};

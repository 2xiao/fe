import{_ as c,r as a,o as l,c as i,a as n,b as s,d as e,w as t,e as d}from"./app--GvfAkAr.js";const u={},k=n("h1",{id:"_1486-数组异或操作",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1486-数组异或操作","aria-hidden":"true"},"#"),s(" 1486. 数组异或操作")],-1),m=n("code",null,"位运算",-1),h=n("code",null,"数学",-1),g={href:"https://leetcode.cn/problems/xor-operation-in-an-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/xor-operation-in-an-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an integer <code>n</code> and an integer <code>start</code>.</p><p>Define an array <code>nums</code> where <code>nums[i] = start + 2 * i</code> (<strong>0-indexed</strong>) and <code>n == nums.length</code>.</p><p>Return <em>the bitwise XOR of all elements of</em> <code>nums</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 5, start = 0</p><p>Output: 8</p><p>Explanation: Array nums is equal to [0, 2, 4, 6, 8] where (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8.</p><p>Where &quot;^&quot; corresponds to bitwise XOR operator.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 4, start = 3</p><p>Output: 8</p><p>Explanation: Array nums is equal to [3, 5, 7, 9] where (3 ^ 5 ^ 7 ^ 9) = 8.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= start &lt;= 1000</code></li><li><code>n == nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数，<code>n</code> 和 <code>start</code> 。</p><p>数组 <code>nums</code> 定义为：<code>nums[i] = start + 2*i</code>（下标从 0 开始）且 <code>n == nums.length</code> 。</p><p>请返回 <code>nums</code> 中所有元素按位异或（<strong>XOR</strong> ）后得到的结果。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 5, start = 0</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 数组 nums 为 [0, 2, 4, 6, 8]，其中 (0 ^ 2 ^ 4 ^ 6 ^ 8) = 8 。</p><p>&quot;^&quot; 为按位异或 XOR 运算符。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 4, start = 3</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 数组 nums 为 [3, 5, 7, 9]，其中 (3 ^ 5 ^ 7 ^ 9) = 8.</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 1, start = 7</p><p><strong>输出：</strong> 7</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> n = 10, start = 5</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 1000</code></li><li><code>0 &lt;= start &lt;= 1000</code></li><li><code>n == nums.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求我们从一个数组生成规则 <code>nums[i] = start + 2 * i</code>，然后对该数组的所有元素执行按位异或操作。可以在遍历过程中使用一个累积变量 <code>res</code> 存储结果，直接更新，而不需要显式生成数组。</p><ol><li>初始化结果变量 <code>res</code> 为 <code>0</code>。</li><li>遍历从 <code>0</code> 到 <code>n-1</code>： <ul><li>计算当前值 <code>nums[i] = start + 2 * i</code>。</li><li>将 <code>nums[i]</code> 与 <code>res</code> 按位异或。</li></ul></li><li>返回 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，遍历 <code>n</code> 次，每次计算和异或操作为常数时间。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，使用常数个变量，没有额外的空间消耗。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">start</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">xorOperation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> start</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">^=</span> start <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function x(q,w){const p=a("font"),o=a("RouterLink"),r=a("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[m]),_:1}),s(),e(o,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[b,e(r)]),s(),n("a",_,[v,e(r)])]),f])}const O=c(u,[["render",x],["__file","1486.html.vue"]]);export{O as default};

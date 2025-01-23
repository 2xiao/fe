import{_ as i,r as e,o as l,c as r,a as n,b as s,d as o,w as t,e as d}from"./app-MsFeWfVD.js";const u={},m=n("h1",{id:"_2057-值相等的最小索引",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2057-值相等的最小索引","aria-hidden":"true"},"#"),s(" 2057. 值相等的最小索引")],-1),k=n("code",null,"数组",-1),g={href:"https://leetcode.cn/problems/smallest-index-with-equal-value",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/smallest-index-with-equal-value",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a <strong>0-indexed</strong> integer array <code>nums</code>, return <em>the <strong>smallest</strong> index <em><code>i</code><em>of</em><code>nums</code> <em>such that</em><code>i mod 10 == nums[i]</code></em>, or</em><code>-1</code> <em>if such index does not exist</em>.</p><p><code>x mod y</code> denotes the <strong>remainder</strong> when <code>x</code> is divided by <code>y</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,2]</p><p>Output: 0</p><p>Explanation:</p><p>i=0: 0 mod 10 = 0 == nums[0].</p><p>i=1: 1 mod 10 = 1 == nums[1].</p><p>i=2: 2 mod 10 = 2 == nums[2].</p><p>All indices have i mod 10 == nums[i], so we return the smallest index 0.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [4,3,2,1]</p><p>Output: 2</p><p>Explanation:</p><p>i=0: 0 mod 10 = 0 != nums[0].</p><p>i=1: 1 mod 10 = 1 != nums[1].</p><p>i=2: 2 mod 10 = 2 == nums[2].</p><p>i=3: 3 mod 10 = 3 != nums[3].</p><p>2 is the only index which has i mod 10 == nums[i].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1,2,3,4,5,6,7,8,9,0]</p><p>Output: -1</p><p>Explanation: No index satisfies i mod 10 == nums[i].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个下标从 0 开始的整数数组 <code>nums</code> ，返回 <code>nums</code> 中满足 <strong><code>i mod 10 == nums[i]</code></strong> 的最小下标 <code>i</code> ；如果不存在这样的下标，返回 **<code>-1</code> ** 。</p><p><code>x mod y</code> 表示 <code>x</code> 除以 <code>y</code> 的 <strong>余数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,2]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>i=0: 0 mod 10 = 0 == nums[0].</p><p>i=1: 1 mod 10 = 1 == nums[1].</p><p>i=2: 2 mod 10 = 2 == nums[2].</p><p>所有下标都满足 i mod 10 == nums[i] ，所以返回最小下标 0</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [4,3,2,1]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><p>i=0: 0 mod 10 = 0 != nums[0].</p><p>i=1: 1 mod 10 = 1 != nums[1].</p><p>i=2: 2 mod 10 = 2 == nums[2].</p><p>i=3: 3 mod 10 = 3 != nums[3].</p><p>2 唯一一个满足 i mod 10 == nums[i] 的下标</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,5,6,7,8,9,0]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 不存在满足 i mod 10 == nums[i] 的下标</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> nums = [2,1,3,5,2]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 1 是唯一一个满足 i mod 10 == nums[i] 的下标</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 100</code></li><li><code>0 &lt;= nums[i] &lt;= 9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历数组</strong>：</p><ul><li>使用一个 <code>for</code> 循环遍历数组 <code>nums</code>。</li><li>对于每个索引 <code>i</code>，检查是否满足条件 <code>i % 10 == nums[i]</code>。</li></ul></li><li><p><strong>找到第一个满足条件的索引</strong>：</p><ul><li>如果某个索引满足条件，则立即返回该索引。</li><li>如果遍历完数组仍没有找到符合条件的索引，则返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外的数据结构。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">smallestEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function x(f,y){const p=e("font"),c=e("RouterLink"),a=e("ExternalLinkIcon");return l(),r("div",null,[m,n("p",null,[s("🟢 "),o(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),o(c,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s("  🔗 "),n("a",g,[h,o(a)]),s(),n("a",b,[_,o(a)])]),v])}const w=i(u,[["render",x],["__file","2057.html.vue"]]);export{w as default};

import{_ as r,r as e,o as l,c as u,a as n,b as s,d as a,w as t,e as i}from"./app-U2ekqv2z.js";const d={},k=n("h1",{id:"_1207-独一无二的出现次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1207-独一无二的出现次数","aria-hidden":"true"},"#"),s(" 1207. 独一无二的出现次数")],-1),h=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),g={href:"https://leetcode.cn/problems/unique-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/unique-number-of-occurrences",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, return <code>true</code> _if the number of occurrences of each value in the array is<strong>unique</strong> or _<code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,2,1,1,3]</p><p>Output: true</p><p>Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2]</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>-1000 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code>，如果每个数的出现次数都是独一无二的，就返回 <code>true</code>；否则返回 <code>false</code>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,2,1,1,3]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 在该数组中，1 出现了 3 次，2 出现了 2 次，3 只出现了 1 次。没有两个数的出现次数相同。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2]</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [-3,0,1,-3,1,1,1,-3,10,0]</p><p><strong>输出：</strong> true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>-1000 &lt;= arr[i] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>使用 <code>Map</code> 统计频率</strong>：</p><ul><li>遍历数组 <code>arr</code>，对每个元素的出现次数进行统计，存入 <code>Map</code> 中。键是元素，值是该元素的出现次数。</li></ul></li><li><p><strong>检查频率的唯一性</strong>：</p><ul><li>将 <code>Map</code> 的值（即每个元素的出现次数）存入一个 <code>Set</code> 中，由于 <code>Set</code> 的特性，重复的值会被自动过滤。</li><li>比较 <code>Set</code> 的大小和 <code>Map</code> 的大小，如果两者大小相同，则说明所有出现次数是唯一的。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了额外的空间来存储频率对象和集合，最坏情况下它们的空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">uniqueOccurrences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 统计每个元素的出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>num<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 检查频率是否唯一</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span>size <span class="token operator">==</span> map<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26);function x(w,q){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",g,[b,a(p)]),s(),n("a",_,[v,a(p)])]),f])}const E=r(d,[["render",x],["__file","1207.html.vue"]]);export{E as default};

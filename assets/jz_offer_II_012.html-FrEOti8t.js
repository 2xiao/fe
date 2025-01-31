import{_ as r,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as p}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_12-左右两边子数组的和相等",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_12-左右两边子数组的和相等","aria-hidden":"true"},"#"),s(" 12. 左右两边子数组的和相等")],-1),m=n("code",null,"数组",-1),h=n("code",null,"前缀和",-1),g={href:"https://leetcode.cn/problems/tvdfij",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给你一个整数数组 <code>nums</code> ，请计算数组的 <strong>中心下标</strong> 。</p><p>数组<strong>中心下标</strong> 是数组的一个下标，其左侧所有元素相加的和等于右侧所有元素相加的和。</p><p>如果中心下标位于数组最左端，那么左侧数之和视为 <code>0</code> ，因为在下标的左侧不存在元素。这一点对于中心下标位于数组最右端同样适用。</p><p>如果数组有多个中心下标，应该返回 <strong>最靠近左边</strong> 的那一个。如果数组不存在中心下标，返回 <code>-1</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,7,3,6,5,6]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>中心下标是 3 。</p><p>左侧数之和 sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11 ，</p><p>右侧数之和 sum = nums[4] + nums[5] = 5 + 6 = 11 ，二者相等。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1, 2, 3]</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong></p><p>数组中不存在满足此条件的中心下标。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [2, 1, -1]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong></p><p>中心下标是 0 。</p><p>左侧数之和 sum = 0 ，（下标 0 左侧不存在元素），</p><p>右侧数之和 sum = nums[1] + nums[2] = 1 + -1 = 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^4</code></li><li><code>-1000 &lt;= nums[i] &lt;= 1000</code></li></ul>',13),b={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),x=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在数组中，找到一个数，使得它左边的数之和等于它的右边的数之和，如果存在，则返回这个数的下标索引，否作返回 <code>-1</code>。</p><p>这里面存在一个等式，只需要满足这个等式即可满足条件：<code>leftSum + num[i] = sum - leftSum</code> =&gt; <code>2 * leftSum + num[i] = sum</code>。</p><ul><li><strong>总和计算</strong>：先计算数组的总和 <code>total</code>，然后通过逐步累加 <code>leftSum</code>（左侧元素和），检查当前索引是否满足中心索引的条件，即 <code>2 * leftSum + nums[i] === total</code>。</li><li>如果找到这样的索引，返回其值；如果找不到，返回 <code>-1</code>。</li><li>题目提到如果存在多个索引，则返回最左边那个，因此从左开始求和，而不是从右边。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度。 <ul><li>总和计算使用 <code>reduce</code> 方法遍历数组求和，时间复杂度为 <code>O(n)</code>；</li><li>在主循环中，遍历数组每个元素，通过检查和更新 <code>leftSum</code> 判断是否满足条件，这个操作也是线性的 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(1)</code>，使用了常数级别的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">pivotIndex</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> total <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> leftSum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> leftSum <span class="token operator">+</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> total<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> i<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		leftSum <span class="token operator">+=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function w(y,S){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/prefix-sum.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[_,a(l)])]),v,n("div",b,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0724.html"},{default:t(()=>[s("第 724 题")]),_:1}),s(" 相同。")])]),x])}const j=r(d,[["render",w],["__file","jz_offer_II_012.html.vue"]]);export{j as default};

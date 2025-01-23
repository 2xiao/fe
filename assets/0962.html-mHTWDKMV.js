import{_ as l,r as e,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-MsFeWfVD.js";const d={},k=n("h1",{id:"_962-最大宽度坡",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_962-最大宽度坡","aria-hidden":"true"},"#"),s(" 962. 最大宽度坡")],-1),m=n("code",null,"栈",-1),h=n("code",null,"数组",-1),g=n("code",null,"单调栈",-1),v={href:"https://leetcode.cn/problems/maximum-width-ramp",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/maximum-width-ramp",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>ramp</strong> in an integer array <code>nums</code> is a pair <code>(i, j)</code> for which <code>i &lt; j</code> and <code>nums[i] &lt;= nums[j]</code>. The <strong>width</strong> of such a ramp is <code>j - i</code>.</p><p>Given an integer array <code>nums</code>, return _the maximum width of a<strong>ramp</strong> in _<code>nums</code>. If there is no <strong>ramp</strong> in <code>nums</code>, return <code>0</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [6,0,8,2,1,5]</p><p>Output: 4</p><p>Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [9,8,1,0,1,9,4,0,4,1]</p><p>Output: 7</p><p>Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 5 * 10^4</code></li><li><code>0 &lt;= nums[i] &lt;= 5 * 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>A</code>， <em>坡</em> 是元组 <code>(i, j)</code>，其中 <code>i &lt; j</code> 且 <code>A[i] &lt;= A[j]</code>。这样的坡的宽度为 <code>j - i</code>。</p><p>找出 <code>A</code> 中的坡的最大宽度，如果不存在，返回 0 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong>[6,0,8,2,1,5]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong></p><p>最大宽度的坡为 (i, j) = (1, 5): A[1] = 0 且 A[5] = 5.</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong>[9,8,1,0,1,9,4,0,4,1]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong></p><p>最大宽度的坡为 (i, j) = (2, 9): A[2] = 1 且 A[9] = 1.</p></blockquote><p><strong>提示：</strong></p><ol><li><code>2 &lt;= A.length &lt;= 50000</code></li><li><code>0 &lt;= A[i] &lt;= 50000</code></li></ol><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>单调递减栈法</strong>：</p><ul><li>通过维护一个 <strong>单调递减栈</strong> 存储可能成为坡起点的索引 <code>i</code>，确保栈顶元素对应的值 <code>nums[i]</code> 是比其后的任何值都要大或相等的。</li><li>当从左到右遍历数组时，如果当前元素 <code>nums[i]</code> 比栈顶元素对应的值小，那么就将其索引 <code>i</code> 压入栈中，这保证了栈中存储的是可能成为坡的起点的索引。</li></ul></li><li><p><strong>从右向左遍历寻找最大坡</strong>：</p><ul><li>构建好单调递减栈之后，从右向左遍历数组，尝试找到满足条件 <code>nums[i] &lt;= nums[j]</code> 的最大坡宽度。</li><li>如果发现当前元素 <code>nums[j]</code> 大于或等于栈顶索引对应的元素 <code>nums[stack顶]</code>，那么计算 <code>j - i</code> 的差值，并更新最大坡宽度。此时，弹出栈顶元素，因为它已经形成了最宽的坡，无法再与后续的 <code>j</code> 配对。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历数组两次，一次是构建单调栈，一次是从右向左检查坡的宽度。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，栈最多会存储 <code>n</code> 个索引。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxWidthRamp</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		maxWidth <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">||</span> nums<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">&gt;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> nums<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">;</span> j<span class="token operator">--</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> nums<span class="token punctuation">[</span>stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			maxWidth <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxWidth<span class="token punctuation">,</span> j <span class="token operator">-</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> maxWidth<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24);function j(w,y){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/monotonic-stack.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",v,[b,a(p)]),s(),n("a",_,[f,a(p)])]),x])}const q=l(d,[["render",j],["__file","0962.html.vue"]]);export{q as default};

import{_ as p,r,o as i,c as u,a as n,b as e,d as t,w as s,f as d,e as o}from"./app-mXo2sCT-.js";const m={},h={id:"_2626-数组归约运算",tabindex:"-1"},_=n("a",{class:"header-anchor",href:"#_2626-数组归约运算","aria-hidden":"true"},"#",-1),f={href:"https://2xiao.github.io/leetcode-js/problem/2626.html",target:"_blank",rel:"noopener noreferrer"},k={href:"https://leetcode.cn/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=o('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code>, a reducer function <code>fn</code>, and an initial value <code>init</code>, return the final result obtained by executing the <code>fn</code> function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.</p><p>This result is achieved through the following operations: <code>val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ...</code> until every element in the array has been processed. The ultimate value of <code>val</code> is then returned.</p><p>If the length of the array is 0, the function should return <code>init</code>.</p><p>Please solve it without using the built-in <code>Array.reduce</code> method.</p><p><strong>Example 1:</strong></p>',6),x=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"nums = [1,2,3,4]"),n("p",{return:"",accum:"","+":"","curr;":""},"fn = function sum(accum, curr)"),n("p",null,"init = 0"),n("p",null,"Output: 10"),n("p",null,"Explanation:"),n("p",null,"initially, the value is init=0."),n("p",null,"(0) + nums[0] = 1"),n("p",null,"(1) + nums[1] = 3"),n("p",null,"(3) + nums[2] = 6"),n("p",null,"(6) + nums[3] = 10"),n("p",null,"The final answer is 10.")],-1),w=o("<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>nums = [1,2,3,4]</p><p>fn = function sum(accum, curr) { return accum + curr * curr; }</p><p>init = 100</p><p>Output: 130</p><p>Explanation:</p><p>initially, the value is init=100.</p><p>(100) + nums[0] * nums[0] = 101</p><p>(101) + nums[1] * nums[1] = 105</p><p>(105) + nums[2] * nums[2] = 114</p><p>(114) + nums[3] * nums[3] = 130</p><p>The final answer is 130.</p></blockquote><p><strong>Example 3:</strong></p>",3),E=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"nums = []"),n("p",{return:"","0;":""},"fn = function sum(accum, curr)"),n("p",null,"init = 25"),n("p",null,"Output: 25"),n("p",null,"Explanation: For empty arrays, the answer is always init.")],-1),q=o('<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li><code>0 &lt;= init &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数数组 <code>nums</code>、一个 reducer 函数 <code>fn</code> 和一个初始值 <code>init</code>，返回通过依次对数组的每个元素执行 <code>fn</code> 函数得到的最终结果。</p><p>通过以下操作实现这个结果：<code>val = fn(init, nums[0])，val = fn(val, nums[1])，val = fn(val, nums[2])，...</code> 直到处理数组中的每个元素。然后返回 <code>val</code> 的最终值。</p><p>如果数组的长度为 0，则函数应返回 <code>init</code>。</p><p>请你在不使用内置数组方法的 <code>Array.reduce</code> 前提下解决这个问题。</p><p><strong>示例 1：</strong></p>',8),V=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"nums = [1,2,3,4]"),n("p",{return:"",accum:"","+":"","curr;":""},"fn = function sum(accum, curr)"),n("p",null,"init = 0"),n("p",null,[n("strong",null,"输出："),e(" 10")]),n("p",null,[n("strong",null,"解释：")]),n("p",null,"初始值为 init=0 。"),n("p",null,"(0) + nums[0] = 1"),n("p",null,"(1) + nums[1] = 3"),n("p",null,"(3) + nums[2] = 6"),n("p",null,"(6) + nums[3] = 10"),n("p",null,"Val 最终值为 10。")],-1),I=o("<p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>nums = [1,2,3,4]</p><p>fn = function sum(accum, curr) { return accum + curr * curr; }</p><p>init = 100</p><p><strong>输出：</strong> 130</p><p><strong>解释：</strong></p><p>初始值为 init=100 。</p><p>(100) + nums[0]^2 = 101</p><p>(101) + nums[1]^2 = 105</p><p>(105) + nums[2]^2 = 114</p><p>(114) + nums[3]^2 = 130</p><p>Val 最终值为 130。</p></blockquote><p><strong>示例 3:</strong></p>",3),C=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("p",null,"nums = []"),n("p",{return:"","0;":""},"fn = function sum(accum, curr)"),n("p",null,"init = 25"),n("p",null,[n("strong",null,"输出："),e(" 25")]),n("p",null,[n("strong",null,"解释："),e(" 这是一个空数组，所以返回 init 。")])],-1),L=o(`<p><strong>提示：</strong></p><ul><li><code>0 &lt;= nums.length &lt;= 1000</code></li><li><code>0 &lt;= nums[i] &lt;= 1000</code></li><li><code>0 &lt;= init &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题主要考察如何实现 <code>reduce</code> 函数，模拟 JavaScript 内置的 <code>Array.prototype.reduce</code> 方法，逐一处理数组中的元素并将其与当前聚合值结合，最终返回聚合的结果，其关键在于遍历数组并不断更新聚合值，操作非常常见，尤其在处理数据时常用于累加、最大最小值计算等场景。</p><ol><li><strong>初始化结果</strong>：将 <code>init</code> 作为初始的聚合值 <code>res</code>。</li><li><strong>遍历数组</strong>：从数组的第一个元素开始，依次将当前聚合值 <code>res</code> 和数组元素 <code>nums[i]</code> 传入回调函数 <code>fn</code>，并将 <code>fn</code> 返回的结果作为新的聚合值。</li><li><strong>返回结果</strong>：遍历结束后，返回聚合后的最终值。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组 <code>nums</code> 的长度，需要遍历整个数组，每个元素执行一次 <code>fn</code> 操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只需要常量空间来存储聚合结果和计数器。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">init</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">reduce</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> fn<span class="token punctuation">,</span> init</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> init<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>res<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,10),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),O=n("td",{style:{"text-align":"center"}},"2631",-1),T={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},B=n("td",{style:{"text-align":"left"}},null,-1),F={style:{"text-align":"left"}},R=n("td",{style:{"text-align":"center"}},"2634",-1),S={style:{"text-align":"left"}},G={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},M=n("td",{style:{"text-align":"left"}},null,-1),P={style:{"text-align":"left"}},z=n("td",{style:{"text-align":"center"}},"2635",-1),D={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},K={style:{"text-align":"center"}},Q=n("td",{style:{"text-align":"left"}},null,-1),U={style:{"text-align":"left"}};function W(X,Y){const a=r("ExternalLinkIcon"),l=r("font"),c=r("RouterLink");return i(),u("div",null,[n("h1",h,[_,e(),n("a",f,[e("2626. 数组归约运算"),t(a)])]),n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",k,[g,t(a)]),e(),n("a",b,[v,t(a)])]),y,x,w,E,q,V,I,C,L,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[O,n("td",T,[n("a",j,[e("分组"),t(a)])]),n("td",A,[t(c,{to:"/problem/2631.html"},{default:s(()=>[e("[✓]")]),_:1})]),B,n("td",F,[t(l,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})])]),n("tr",null,[R,n("td",S,[n("a",G,[e("过滤数组中的元素"),t(a)])]),n("td",J,[t(c,{to:"/problem/2634.html"},{default:s(()=>[e("[✓]")]),_:1})]),M,n("td",P,[t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])]),n("tr",null,[z,n("td",D,[n("a",H,[e("转换数组中的每个元素"),t(a)])]),n("td",K,[t(c,{to:"/problem/2635.html"},{default:s(()=>[e("[✓]")]),_:1})]),Q,n("td",U,[t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})])])])])])}const $=p(m,[["render",W],["__file","2626.html.vue"]]);export{$ as default};

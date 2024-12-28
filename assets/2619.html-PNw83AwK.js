import{_ as c,r as a,o as p,c as i,a as e,b as t,d as n,w as o,f as d,e as u}from"./app-fEpXkbSw.js";const h={},_=e("h1",{id:"_2619-数组原型对象的最后一个元素",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2619-数组原型对象的最后一个元素","aria-hidden":"true"},"#"),t(" 2619. 数组原型对象的最后一个元素")],-1),g={href:"https://leetcode.cn/problems/array-prototype-last",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/array-prototype-last",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>array.last()</code> method on any array and it will return the last element. If there are no elements in the array, it should return <code>-1</code>.</p><p>You may assume the array is the output of <code>JSON.parse</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [null, {}, 3]</p><p>Output: 3</p><p>Explanation: Calling nums.last() should return the last element: 3.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = []</p><p>Output: -1</p><p>Explanation: Because there are no elements, return -1.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr</code> is a valid JSON array</li><li><code>0 &lt;= arr.length &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一段代码实现一个数组方法，使任何数组都可以调用 <code>array.last()</code> 方法，这个方法将返回数组最后一个元素。如果数组中没有元素，则返回 <code>-1</code> 。</p><p>你可以假设数组是 <code>JSON.parse</code> 的输出结果。</p><p><strong>示例 1 ：</strong></p><blockquote><p><strong>输入：</strong> nums = [null, {}, 3]</p><p><strong>输出：</strong> 3</p><p><strong>解释</strong> ：调用 nums.last() 后返回最后一个元素： 3。</p></blockquote><p><strong>示例 2 ：</strong></p><blockquote><p><strong>输入：</strong> nums = []</p><p><strong>输出：</strong> -1</p><p><strong>解释：</strong> 因为此数组没有元素，所以应该返回 -1。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>arr</code> 是一个有效的 JSON 数组</li><li><code>0 &lt;= arr.length &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>扩展 Array 原型</strong>：使用 <code>Array.prototype</code> 扩展数组的功能。</li><li><strong>定义 <code>last</code> 方法</strong>：在该方法中，检查数组的长度。 <ul><li>如果数组不为空，返回最后一个元素（使用 <code>this[this.length - 1]</code>）。</li><li>如果数组为空，返回 <code>-1</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为访问数组的最后一个元素是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不需要额外的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">null</span><span class="token operator">|</span>boolean<span class="token operator">|</span>number<span class="token operator">|</span>string<span class="token operator">|</span>Array<span class="token operator">|</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">last</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),f=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2624",-1),v=e("td",{style:{"text-align":"left"}},"蜗牛排序",-1),w={style:{"text-align":"center"}},N=e("td",{style:{"text-align":"left"}},null,-1),O=e("td",{style:{"text-align":"center"}},"🟠",-1),q={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},I=e("td",{style:{"text-align":"center"}},"2774",-1),L=e("td",{style:{"text-align":"left"}},"数组的上界 🔒",-1),S={style:{"text-align":"center"}},V=e("td",{style:{"text-align":"left"}},null,-1),j=e("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"};function R(T,W){const l=a("font"),s=a("ExternalLinkIcon"),r=a("RouterLink");return p(),i("div",null,[_,e("p",null,[t("🟢 "),n(l,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔗 "),e("a",g,[m,n(s)]),t(),e("a",k,[b,n(s)])]),y,d(" prettier-ignore "),e("table",null,[f,e("tbody",null,[e("tr",null,[x,v,e("td",w,[n(r,{to:"/problem/2624.html"},{default:o(()=>[t("[✓]")]),_:1})]),N,O,e("td",q,[e("a",E,[t("🀄️"),n(s)]),t(),e("a",C,[t("🔗"),n(s)])])]),e("tr",null,[I,L,e("td",S,[n(r,{to:"/problem/2774.html"},{default:o(()=>[t("[✓]")]),_:1})]),V,j,e("td",A,[e("a",B,[t("🀄️"),n(s)]),t(),e("a",J,[t("🔗"),n(s)])])])])])])}const z=c(h,[["render",R],["__file","2619.html.vue"]]);export{z as default};

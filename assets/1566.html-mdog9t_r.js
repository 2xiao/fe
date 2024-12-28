import{_ as c,r,o as l,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const k={},m=n("h1",{id:"_1566-重复至少-k-次且长度为-m-的模式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1566-重复至少-k-次且长度为-m-的模式","aria-hidden":"true"},"#"),t(" 1566. 重复至少 K 次且长度为 M 的模式")],-1),g=n("code",null,"数组",-1),h=n("code",null,"枚举",-1),b={href:"https://leetcode.cn/problems/detect-pattern-of-length-m-repeated-k-or-more-times",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of positive integers <code>arr</code>, find a pattern of length <code>m</code> that is repeated <code>k</code> or more times.</p><p>A <strong>pattern</strong> is a subarray (consecutive sub-sequence) that consists of one or more values, repeated multiple times <strong>consecutively</strong> without overlapping. A pattern is defined by its length and the number of repetitions.</p><p>Return <code>true</code> <em>if there exists a pattern of length</em> <code>m</code> <em>that is repeated</em> <code>k</code><em>or more times, otherwise return</em> <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [1,2,4,4,4,4], m = 1, k = 3</p><p>Output: true</p><p>Explanation: The pattern <strong>(4)</strong> of length 1 is repeated 4 consecutive times. Notice that pattern can be repeated k or more times but not less.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [1,2,1,2,1,1,1,3], m = 2, k = 2</p><p>Output: true</p><p>Explanation: The pattern <strong>(1,2)</strong> of length 2 is repeated 2 consecutive times. Another valid pattern <strong>(2,1) is</strong> also repeated 2 times.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [1,2,1,2,1,3], m = 2, k = 3</p><p>Output: false</p><p>Explanation: The pattern (1,2) is of length 2 but is repeated only 2 times. There is no pattern of length 2 that is repeated 3 or more times.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 100</code></li><li><code>1 &lt;= arr[i] &lt;= 100</code></li><li><code>1 &lt;= m &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个正整数数组 <code>arr</code>，请你找出一个长度为 <code>m</code> 且在数组中至少重复 <code>k</code> 次的模式。</p><p><strong>模式</strong> 是由一个或多个值组成的子数组（连续的子序列），<strong>连续</strong> 重复多次但 <strong>不重叠</strong> 。 模式由其长度和重复次数定义。</p><p>如果数组中存在至少重复 <code>k</code> 次且长度为 <code>m</code> 的模式，则返回 <code>true</code> ，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,4,4,4,4], m = 1, k = 3</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 模式 <strong>(4)</strong> 的长度为 1 ，且连续重复 4 次。注意，模式可以重复 k 次或更多次，但不能少于 k 次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,1,2,1,1,1,3], m = 2, k = 2</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 模式 <strong>(1,2)</strong> 长度为 2 ，且连续重复 2 次。另一个符合题意的模式是 <strong>(2,1)</strong> ，同样重复 2 次。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,1,2,1,3], m = 2, k = 3</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 模式 <strong>(1,2)</strong> 长度为 2 ，但是只连续重复 2 次。不存在长度为 2 且至少重复 3 次的模式。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> arr = [1,2,3,1,2], m = 2, k = 2</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 模式 <strong>(1,2)</strong> 出现 2 次但并不连续，所以不能算作连续重复 2 次。</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> arr = [2,2,2,2], m = 2, k = 3</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 长度为 2 的模式只有 <strong>(2,2)</strong> ，但是只连续重复 2 次。注意，不能计算重叠的重复次数。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 100</code></li><li><code>1 &lt;= arr[i] &lt;= 100</code></li><li><code>1 &lt;= m &lt;= 100</code></li><li><code>2 &lt;= k &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>题目要求在数组中找到一个长度为 <code>m</code> 的模式，该模式连续重复至少 <code>k</code> 次。</p></li><li><p>假设符合要求的模式为 <code>arr[i, i+1, ..., i+m-1]</code>，需要验证连续字符串 <code>arr[i, i+1, ..., i + m * k - 1]</code> 是否构成该模式的连续 <code>k</code> 次重复。</p></li><li><p>定义计数器 <code>count</code>，用于记录匹配当前模式的连续元素长度，初始化为 <code>m</code>。</p></li><li><p>遍历数组时，比较当前元素 <code>arr[i]</code> 和相隔 <code>m</code> 的元素 <code>arr[i+m]</code>：</p><ul><li>如果相等，说明模式连续有效，计数器加 <code>1</code>。</li><li>如果不相等，说明模式中断，计数器重置为 <code>m</code>。</li></ul></li><li><p>当计数器达到 <code>m * k</code> 时，表示模式已重复至少 <code>k</code> 次，返回 <code>true</code>。</p></li><li><p>如果遍历完整个数组仍未找到符合条件的模式，返回 <code>false</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">m</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">containsPattern</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> m<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> m<span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> arr<span class="token punctuation">[</span>i <span class="token operator">+</span> m<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> m <span class="token operator">*</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count <span class="token operator">=</span> m<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1668",-1),q=n("td",{style:{"text-align":"left"}},"最大重复子字符串",-1),E={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=n("code",null,"字符串",-1),I=n("code",null,"动态规划",-1),L=n("code",null,"字符串匹配",-1),O=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"};function A(B,R){const p=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon");return l(),i("div",null,[m,n("p",null,[t("🟢 "),e(p,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[h]),_:1}),t("  🔗 "),n("a",b,[_,e(o)]),t(),n("a",f,[v,e(o)])]),x,d(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,q,n("td",E,[e(a,{to:"/problem/1668.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",N,[e(a,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/string-matching.html"},{default:s(()=>[L]),_:1})]),O,n("td",T,[n("a",V,[t("🀄️"),e(o)]),t(),n("a",j,[t("🔗"),e(o)])])])])])])}const K=c(k,[["render",A],["__file","1566.html.vue"]]);export{K as default};

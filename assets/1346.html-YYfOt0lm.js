import{_ as r,r as l,o as p,c as i,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-WL8GPOUO.js";const h={},k=n("h1",{id:"_1346-检查整数及其两倍数是否存在",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1346-检查整数及其两倍数是否存在","aria-hidden":"true"},"#"),e(" 1346. 检查整数及其两倍数是否存在")],-1),_=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),g=n("code",null,"双指针",-1),b=n("code",null,"二分查找",-1),f=n("code",null,"排序",-1),v={href:"https://leetcode.cn/problems/check-if-n-and-its-double-exist",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/check-if-n-and-its-double-exist",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),j=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array <code>arr</code> of integers, check if there exist two indices <code>i</code> and <code>j</code> such that :</p><ul><li><code>i != j</code></li><li><code>0 &lt;= i, j &lt; arr.length</code></li><li><code>arr[i] == 2 * arr[j]</code></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [10,2,5,3]</p><p>Output: true</p><p>Explanation: For i = 0 and j = 2, arr[i] == 10 == 2 _ 5 == 2 _ arr[j]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [3,1,7,11]</p><p>Output: false</p><p>Explanation: There is no i and j that satisfy the conditions.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 500</code></li><li><code>-10^3 &lt;= arr[i] &lt;= 10^3</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code>，请你检查是否存在两个整数 <code>N</code> 和 <code>M</code>，满足 <code>N</code> 是 <code>M</code> 的两倍（即，<code>N = 2 * M</code>）。</p><p>更正式地，检查是否存在两个下标 <code>i</code> 和 <code>j</code> 满足：</p><ul><li><code>i != j</code></li><li><code>0 &lt;= i, j &lt; arr.length</code></li><li><code>arr[i] == 2 * arr[j]</code></li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arr = [10,2,5,3]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> N = 10 是 M = 5 的两倍，即 10 = 2 * 5 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> arr = [7,1,14,11]</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> N = 14 是 M = 7 的两倍，即 14 = 2 * 7 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> arr = [3,1,7,11]</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 在该情况下不存在 N 和 M 满足 N = 2 * M 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= arr.length &lt;= 500</code></li><li><code>-10^3 &lt;= arr[i] &lt;= 10^3</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用哈希集合 (Set) 解决。</p><ul><li>遍历数组中的每个数字 <code>num</code>。</li><li>对于每个 <code>num</code>，检查以下两种情况： <ul><li>是否存在 <code>2 * num</code> 在集合中（即 <code>num</code> 的两倍已出现）。</li><li>是否存在 <code>num / 2</code> 在集合中（即 <code>num</code> 是某个数的两倍）。</li></ul></li><li>如果满足上述任意条件，则返回 <code>true</code>。</li><li>否则，将当前数字添加到集合中。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组长度，需要遍历数组中的每个元素一次，每次查找和插入集合的复杂度为 <code>O(1)</code>，总时间复杂度为 <code>O(n)</code>，</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用一个集合来存储最多 <code>n</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkIfExist</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> num <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查 set 中是否存在 2 * num or num / 2</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> num<span class="token punctuation">)</span> <span class="token operator">||</span> set<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>num <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 将当前数字加入 set 中</span>
		set<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 没找到两倍数</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"2154",-1),E=n("td",{style:{"text-align":"left"}},"将找到的值乘以 2",-1),M={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"数组",-1),I=n("code",null,"哈希表",-1),L=n("code",null,"排序",-1),V=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),S={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/keep-multiplying-found-values-by-two",target:"_blank",rel:"noopener noreferrer"};function F(G,z){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[k,n("p",null,[e("🟢 "),t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),n("a",v,[x,t(o)]),e(),n("a",y,[w,t(o)])]),j,d(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[q,E,n("td",M,[t(a,{to:"/problem/2154.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",O,[t(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[I]),_:1}),e(),t(a,{to:"/tag/sorting.html"},{default:s(()=>[L]),_:1}),e(),V]),B,n("td",S,[n("a",R,[e("🀄️"),t(o)]),e(),n("a",T,[e("🔗"),t(o)])])])])])])}const D=r(h,[["render",F],["__file","1346.html.vue"]]);export{D as default};

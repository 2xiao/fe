import{_ as p,r as c,o as l,c as i,a as n,b as t,d as e,w as s,f as u,e as d}from"./app-fEpXkbSw.js";const h={},m=n("h1",{id:"_3309-连接二进制表示可形成的最大数值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_3309-连接二进制表示可形成的最大数值","aria-hidden":"true"},"#"),t(" 3309. 连接二进制表示可形成的最大数值")],-1),g=n("code",null,"位运算",-1),k=n("code",null,"数组",-1),_=n("code",null,"枚举",-1),b={href:"https://leetcode.cn/problems/maximum-possible-number-by-binary-concatenation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/maximum-possible-number-by-binary-concatenation",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>nums</code> of size 3.</p><p>Return the <strong>maximum</strong> possible number whose <em>binary representation</em> can be formed by <strong>concatenating</strong> the <em>binary representation</em> of <strong>all</strong> elements in <code>nums</code> in some order.</p><p><strong>Note</strong> that the binary representation of any number <em>does not</em> contain leading zeros.</p><p><strong>Example 1:</strong></p><p><strong>Input:</strong> nums = [1,2,3]</p><p><strong>Output:</strong> 30</p><p><strong>Explanation:</strong></p><p>Concatenate the numbers in the order <code>[3, 1, 2]</code> to get the result <code>&quot;11110&quot;</code>, which is the binary representation of 30.</p><p><strong>Example 2:</strong></p><p><strong>Input:</strong> nums = [2,8,16]</p><p><strong>Output:</strong> 1296</p><p><strong>Explanation:</strong></p><p>Concatenate the numbers in the order <code>[2, 8, 16]</code> to get the result <code>&quot;10100010000&quot;</code>, which is the binary representation of 1296.</p><p><strong>Constraints:</strong></p><ul><li><code>nums.length == 3</code></li><li><code>1 &lt;= nums[i] &lt;= 127</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>3</code> 的整数数组 <code>nums</code>。</p><p>现以某种顺序 <strong>连接</strong> 数组 <code>nums</code> 中所有元素的 <strong>二进制表示</strong> ，请你返回可以由这种方法形成的 <strong>最大</strong> 数值。</p><p><strong>注意</strong> 任何数字的二进制表示 <strong>不含</strong> 前导零。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题的关键在于如何比较两个数 <code>a</code> 和 <code>b</code> 的拼接顺序。我们需要比较 <code>a+b</code> 和 <code>b+a</code>，判断哪种拼接方式会生成更大的数。通过这样的比较来决定排序的优先级。</p><ol><li>将每个整数转换为二进制字符串。</li><li>使用自定义的排序函数来比较两两拼接的结果，按从大到小的顺序排序。</li><li>排序完成后，将这些二进制字符串拼接在一起。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n log n)</code>，其中 <code>n</code> 是数组的长度，<code>m</code> 是二进制字符串的平均长度，排序的时间复杂度为 <code>O(n log n)</code>，由于每次比较涉及字符串操作，故总体时间复杂度为 <code>O(m * n log n)</code></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，额外空间主要用于存储二进制字符串。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxGoodNumber</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> binaryArr <span class="token operator">=</span> nums<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> num<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	binaryArr<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">+</span> a <span class="token operator">-</span> <span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>binaryArr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"1680",-1),E=n("td",{style:{"text-align":"left"}},"连接连续二进制数字",-1),N=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},I=n("code",null,"位运算",-1),L=n("code",null,"数学",-1),V=n("code",null,"模拟",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),q={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/concatenation-of-consecutive-binary-numbers",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers",target:"_blank",rel:"noopener noreferrer"};function R(z,S){const r=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return l(),i("div",null,[m,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/enumeration.html"},{default:s(()=>[_]),_:1}),t("  🔗 "),n("a",b,[f,e(o)]),t(),n("a",y,[x,e(o)])]),v,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[C,E,N,n("td",O,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[I]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[V]),_:1})]),j,n("td",q,[n("a",A,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])])])])])}const M=p(h,[["render",R],["__file","3309.html.vue"]]);export{M as default};

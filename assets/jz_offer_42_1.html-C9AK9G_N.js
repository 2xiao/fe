import{_ as i,r as o,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-Ob52y8QZ.js";const d={},k=n("h1",{id:"_42-连续子数组的最大和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_42-连续子数组的最大和","aria-hidden":"true"},"#"),s(" 42. 连续子数组的最大和")],-1),m=n("code",null,"数组",-1),h=n("code",null,"分治",-1),_=n("code",null,"动态规划",-1),v={href:"https://leetcode.cn/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>某公司每日销售额记于整数数组 <code>sales</code>，请返回所有 <strong>连续</strong> 一或多天销售额总和的最大值。</p><p>要求实现时间复杂度为 <code>O(n)</code> 的算法。</p><p><strong>示例 1:</strong></p><blockquote><p>输入：sales = [-2,1,-3,4,-1,2,1,-5,4]</p><p>输出：6</p><p>解释：[4,-1,2,1] 此连续四天的销售总额最高，为 6。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p>输入：sales = [5,4,-1,7,8]</p><p>输出：23</p><p>解释：[5,4,-1,7,8] 此连续五天的销售总额最高，为 23。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= arr.length &lt;= 10^5</code></li><li><code>-100 &lt;= arr[i] &lt;= 100</code></li></ul>',9),x={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个典型的动态规划问题。</p><p>可以定义一个状态数组 <code>dp</code>，其中 <code>dp[i]</code> 表示以第 <code>i</code> 个元素结尾的子数组的最大和。状态转移方程如下：</p><p><code>dp[i] = Math.max(dp[i - 1] + sales[i], sales[i])</code></p><p>即以第 <code>i</code> 个元素结尾的子数组的最大和，要么是将第 <code>i</code> 个元素添加到前一个子数组中，要么是以第 <code>i</code> 个元素作为起点重新开始一个新的子数组。</p><p>同时维护一个变量 <code>max</code>，用于记录全局最大和。遍历整个数组时，不断更新 <code>dp[i]</code> 和 <code>max</code>，最终 <code>max</code> 就是所求的最大和。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">sales</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxSales</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sales</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>sales<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> max <span class="token operator">=</span> dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> sales<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sales<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dp<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> sales<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> sales<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function y(j,q){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,a(l)])]),f,n("div",x,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0053.html"},{default:t(()=>[s("第 53 题")]),_:1}),s(" 相同。")])]),w])}const L=i(d,[["render",y],["__file","jz_offer_42_1.html.vue"]]);export{L as default};

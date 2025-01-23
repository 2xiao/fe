import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app-MsFeWfVD.js";const d={},k=n("h1",{id:"_14-剪绳子",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_14-剪绳子","aria-hidden":"true"},"#"),s(" 14. 剪绳子")],-1),m=n("code",null,"数学",-1),b=n("code",null,"动态规划",-1),_={href:"https://leetcode.cn/problems/jian-sheng-zi-lcof",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),h=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现需要将一根长为正整数 bamboo_len 的竹子砍为若干段，每段长度均为正整数。请返回每段竹子长度的最大乘积是多少。</p><p><strong>示例 1:</strong></p><blockquote><p>输入: bamboo_len = 12</p><p>输出：81</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= bamboo_len &lt;= 58</code></li></ul>',6),f={class:"hint-container warning"},g=n("p",{class:"hint-container-title"},"注意",-1),j=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用动态规划来解决：</p><ol><li><p><strong>定义状态：</strong> 设 <code>dp[i]</code> 表示整数 <code>i</code> 拆分后的最大乘积。</p></li><li><p><strong>状态转移方程：</strong> 对于整数 i，其拆分成两个数 <code>j</code> 和 <code>i - j</code>。dp[i] 的值取决于这两个数拆分后的最大乘积，即 <code>dp[i] = max(j * (i - j), j * dp[i - j])</code>。需要遍历所有可能的 <code>j</code> 来找到最大的乘积。</p></li><li><p><strong>初始状态：</strong> dp[2] = 1，因为数字 2 只能拆分成 <code>1 + 1</code>，乘积为 <code>1</code>。</p></li><li><p><strong>计算顺序：</strong> 从小到大计算 <code>dp</code> 数组的值，直到计算出 <code>dp[n]</code>。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">bamboo_len</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cuttingBamboo</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">bamboo_len</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 定义状态数组</span>
	<span class="token keyword">const</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>bamboo_len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始状态</span>
	dp<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 计算状态转移</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> bamboo_len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> curMax <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			curMax <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>curMax<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>j <span class="token operator">*</span> dp<span class="token punctuation">[</span>i <span class="token operator">-</span> j<span class="token punctuation">]</span><span class="token punctuation">,</span> j <span class="token operator">*</span> <span class="token punctuation">(</span>i <span class="token operator">-</span> j<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		dp<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> curMax<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>bamboo_len<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function x(w,y){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/dynamic-programming.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",_,[v,a(l)])]),h,n("div",f,[g,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0343.html"},{default:t(()=>[s("第 343 题")]),_:1}),s(" 相同。")])]),j])}const L=i(d,[["render",x],["__file","jz_offer_14_1.html.vue"]]);export{L as default};

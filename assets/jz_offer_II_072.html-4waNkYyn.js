import{_ as r,r as o,o as i,c as d,a as n,b as s,d as a,w as t,e as p}from"./app-WL8GPOUO.js";const u={},k=n("h1",{id:"_72-求平方根",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_72-求平方根","aria-hidden":"true"},"#"),s(" 72. 求平方根")],-1),m=n("code",null,"数学",-1),h=n("code",null,"二分查找",-1),v={href:"https://leetcode.cn/problems/jJ0w9p",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个非负整数 <code>x</code> ，计算并返回 <code>x</code> 的平方根，即实现 <code>int sqrt(int x)</code> 函数。</p><p>正数的平方根有两个，只输出其中的正数平方根。</p><p>如果平方根不是整数，输出只保留整数的部分，小数部分将被舍去。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> x = 4</p><p><strong>输出:</strong> 2</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> x = 8</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong> 8 的平方根是 2.82842...，由于小数部分将被舍去，所以返回 2</p></blockquote><p><strong>提示:</strong></p><ul><li><code>0 &lt;= x &lt;= 2^31 - 1</code></li></ul>',10),g={class:"hint-container warning"},f=n("p",{class:"hint-container-title"},"注意",-1),x=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以通过二分查找得到答案。</p><ul><li>二分查找的下界为 <code>0</code>，上界可以粗略地设定为 <code>x</code>。</li><li>在二分查找的每一步中，只需要比较中间元素 <code>mid</code> 的平方与 <code>x</code> 的大小关系，并通过比较的结果调整上下界的范围。- 由于所有的运算都是整数运算，不会存在误差，因此在得到最终的答案 <code>res</code> 后，也就不需要再去尝试 <code>res+1</code> 了。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(logx)</code>，即为二分查找需要的次数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">x</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">mySqrt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">||</span> x <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> x<span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> x<span class="token punctuation">,</span>
		res<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>mid <span class="token operator">*</span> mid <span class="token operator">&gt;</span> x<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			res <span class="token operator">=</span> mid<span class="token punctuation">;</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function w(y,j){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",v,[_,a(l)])]),b,n("div",g,[f,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0069.html"},{default:t(()=>[s("第 69 题")]),_:1}),s(" 相同。")])]),x])}const I=r(u,[["render",w],["__file","jz_offer_II_072.html.vue"]]);export{I as default};

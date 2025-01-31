import{_ as r,r as c,o as p,c as d,a as n,b as e,d as t,w as s,f as i,e as u}from"./app-MkGfDfkx.js";const h={},k=n("h1",{id:"_1952-三除数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1952-三除数","aria-hidden":"true"},"#"),e(" 1952. 三除数")],-1),_=n("code",null,"数学",-1),m=n("code",null,"枚举",-1),g=n("code",null,"数论",-1),f={href:"https://leetcode.cn/problems/three-divisors",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/three-divisors",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <code>true</code> <em>if</em> <code>n</code> <em>has<strong>exactly three positive divisors</strong>. Otherwise, return</em> <code>false</code>.</p><p>An integer <code>m</code> is a <strong>divisor</strong> of <code>n</code> if there exists an integer <code>k</code> such that <code>n = k * m</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 2</p><p>Output: false</p><p><strong>Explantion:</strong> 2 has only two divisors: 1 and 2.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 4</p><p>Output: true</p><p><strong>Explantion:</strong> 4 has three divisors: 1, 2, and 4.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> 。如果 <code>n</code> <strong>恰好有三个正除数</strong> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>如果存在整数 <code>k</code> ，满足 <code>n = k * m</code> ，那么整数 <code>m</code> 就是 <code>n</code> 的一个 <strong>除数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 2 只有两个除数：1 和 2 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 4 有三个除数：1、2 和 4 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们需要判断一个整数 <code>n</code> 是否有且只有三个正整数因子。这意味着 <code>n</code> 的因子必须是：</p><ol><li><code>1</code></li><li><code>n</code> 自身</li><li>另一个不同的因子 <code>x</code></li></ol><p>因此，对于一个数 <code>n</code>，要使其正好只有三个因子，满足条件的数必须是 <strong>完全平方数</strong> 且其平方根是一个质数。</p><p>因为，完全平方数 <code>n</code> 的因子包括 <code>1</code>、<code>√n</code> 和 <code>n</code>，而如果 <code>√n</code> 是质数，因子个数正好是 3。</p><ol><li><strong>检查 <code>n</code> 是否为完全平方数</strong>： <ul><li>计算 <code>sqrt = √n</code>。</li><li>如果 <code>sqrt</code> 不是整数，直接返回 <code>false</code>。</li></ul></li><li><strong>判断平方根是否是质数</strong>： <ul><li>检查 <code>sqrt</code> 是否仅能被 <code>1</code> 和自身整除。</li></ul></li><li><strong>返回结果</strong>： <ul><li>如果 <code>n</code> 是完全平方数且 <code>sqrt</code> 是质数，则返回 <code>true</code>；否则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(√√n)</code>，需要判断 <code>sqrt = √n</code> 是否为质数，时间复杂度约为 <code>O(√√n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常量空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isThree</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> sqrt <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">sqrt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>Number<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span>sqrt<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 检查是否为完全平方数</span>

	<span class="token comment">// 判断平方根是否是质数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">*</span> i <span class="token operator">&lt;=</span> sqrt<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sqrt <span class="token operator">%</span> i <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 如果能被其他数整除，则不是质数</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sqrt <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 1 不是质数</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"1979",-1),E=n("td",{style:{"text-align":"left"}},"找出数组的最大公约数",-1),N={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"数组",-1),I=n("code",null,"数学",-1),L=n("code",null,"数论",-1),V=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/find-greatest-common-divisor-of-array",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2413",-1),A=n("td",{style:{"text-align":"left"}},"最小偶倍数",-1),G=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},S=n("code",null,"数学",-1),z=n("code",null,"数论",-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/smallest-even-multiple",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),d("div",null,[k,n("p",null,[e("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(o,{to:"/tag/math.html"},{default:s(()=>[_]),_:1}),e(),t(o,{to:"/tag/enumeration.html"},{default:s(()=>[m]),_:1}),e(),t(o,{to:"/tag/number-theory.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",f,[b,t(a)]),e(),n("a",v,[x,t(a)])]),y,i(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,E,n("td",N,[t(o,{to:"/problem/1979.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",O,[t(o,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),e(),t(o,{to:"/tag/math.html"},{default:s(()=>[I]),_:1}),e(),t(o,{to:"/tag/number-theory.html"},{default:s(()=>[L]),_:1})]),V,n("td",j,[n("a",B,[e("🀄️"),t(a)]),e(),n("a",R,[e("🔗"),t(a)])])]),n("tr",null,[T,A,G,n("td",M,[t(o,{to:"/tag/math.html"},{default:s(()=>[S]),_:1}),e(),t(o,{to:"/tag/number-theory.html"},{default:s(()=>[z]),_:1})]),D,n("td",F,[n("a",H,[e("🀄️"),t(a)]),e(),n("a",J,[e("🔗"),t(a)])])])])])])}const W=r(h,[["render",K],["__file","1952.html.vue"]]);export{W as default};

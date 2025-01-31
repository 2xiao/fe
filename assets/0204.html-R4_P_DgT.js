import{_ as r,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-MkGfDfkx.js";const _={},h=t("h1",{id:"_204-计数质数",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_204-计数质数","aria-hidden":"true"},"#"),e(" 204. 计数质数")],-1),m=t("code",null,"数组",-1),g=t("code",null,"数学",-1),k=t("code",null,"枚举",-1),f=t("code",null,"数论",-1),b={href:"https://leetcode.cn/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/count-primes",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em>the number of prime numbers that are strictly less than</em> <code>n</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 10</p><p>Output: 4</p><p>Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 0</p><p>Output: 0</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 5 * 10^6</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定整数 <code>n</code> ，返回 <em>所有小于非负整数 <code>n</code> 的质数的数量</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 10</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 0</p><p><strong>输出：</strong> 0</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出</strong> ：0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= n &lt;= 5 * 10^6</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个经典的筛法问题，可以用 <strong>埃拉托色尼筛法</strong>（Sieve of Eratosthenes）高效地解决。</p><ol><li><p><strong>初始化状态数组</strong>：</p><ul><li>创建一个数组 <code>seen</code>，大小为 <code>n</code>，初始值为 <code>0</code>，用于标记数字是否为合数（非质数）。</li><li>如果 <code>seen[i] = 0</code>，说明 <code>i</code> 是质数；如果 <code>seen[i] = 1</code>，说明 <code>i</code> 是合数。</li></ul></li><li><p><strong>从最小的质数 <code>2</code> 开始筛选</strong>：</p><ul><li>遍历从 <code>2</code> 到 <code>n-1</code> 的每个数： <ul><li>如果当前数 <code>i</code> 是质数（<code>seen[i] == 0</code>），将其计入结果。</li><li>从 <code>i * i</code> 开始，将所有 <code>i</code> 的倍数标记为合数（<code>seen[j] = 1</code>）。</li></ul></li></ul></li><li><p><strong>提前优化筛选范围</strong>：</p><ul><li>由于小于 <code>i * i</code> 的倍数在之前已经被其他质数标记过，因此从 <code>i * i</code> 开始筛选。</li></ul></li><li><p><strong>统计质数个数</strong>：</p><ul><li>遍历 <code>seen</code> 数组，计算未被标记的数（质数）的数量。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回计数值 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log log n)</code>，外层循环遍历所有数 <code>2</code> 到 <code>n-1</code>，但每个数的倍数最多被标记一次，因此整体复杂度为 <code>O(n log log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用一个大小为 <code>n</code> 的数组 <code>seen</code> 来标记数字。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countPrimes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> seen <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历从 2 到 n-1 的所有数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>seen<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 如果已标记为合数，跳过</span>

		res<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 当前数是质数</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> i <span class="token operator">*</span> i<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j <span class="token operator">+=</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			seen<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 标记所有 i 的倍数为合数</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),j=t("td",{style:{"text-align":"center"}},"263",-1),E=t("td",{style:{"text-align":"left"}},"丑数",-1),I={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=t("code",null,"数学",-1),L=t("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/ugly-number",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"264",-1),S=t("td",{style:{"text-align":"left"}},"丑数 II",-1),T={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=t("code",null,"哈希表",-1),M=t("code",null,"数学",-1),P=t("code",null,"动态规划",-1),z=t("code",null,"1+",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/ugly-number-ii",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"279",-1),Q=t("td",{style:{"text-align":"left"}},"完全平方数",-1),U={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"广度优先搜索",-1),Y=t("code",null,"数学",-1),Z=t("code",null,"动态规划",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/perfect-squares",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2427",-1),ot=t("td",{style:{"text-align":"left"}},"公因子的数目",-1),at=t("td",{style:{"text-align":"center"}},null,-1),lt={style:{"text-align":"left"}},ct=t("code",null,"数学",-1),rt=t("code",null,"枚举",-1),it=t("code",null,"数论",-1),dt=t("td",{style:{"text-align":"center"}},"🟢",-1),pt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/number-of-common-factors",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/number-of-common-factors",target:"_blank",rel:"noopener noreferrer"},ht=t("td",{style:{"text-align":"center"}},"2761",-1),mt=t("td",{style:{"text-align":"left"}},"和等于目标值的质数对",-1),gt=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},ft=t("code",null,"数组",-1),bt=t("code",null,"数学",-1),yt=t("code",null,"枚举",-1),xt=t("code",null,"1+",-1),vt=t("td",{style:{"text-align":"center"}},"🟠",-1),wt={style:{"text-align":"center"}},qt={href:"https://leetcode.cn/problems/prime-pairs-with-target-sum",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/prime-pairs-with-target-sum",target:"_blank",rel:"noopener noreferrer"},Et=t("td",{style:{"text-align":"center"}},"3233",-1),It=t("td",{style:{"text-align":"left"}},"统计不是特殊数字的数字数量",-1),Ot=t("td",{style:{"text-align":"center"}},null,-1),Ct={style:{"text-align":"left"}},Lt=t("code",null,"数组",-1),Nt=t("code",null,"数学",-1),Vt=t("code",null,"数论",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Rt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/find-the-count-of-numbers-which-are-not-special",target:"_blank",rel:"noopener noreferrer"},Tt={href:"https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special",target:"_blank",rel:"noopener noreferrer"};function At(Gt,Mt){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[k]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",b,[y,n(a)]),e(),t("a",x,[v,n(a)])]),w,p(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[j,E,t("td",I,[n(o,{to:"/problem/0263.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",O,[n(o,{to:"/tag/math.html"},{default:s(()=>[C]),_:1})]),L,t("td",N,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",B,[e("🔗"),n(a)])])]),t("tr",null,[R,S,t("td",T,[n(o,{to:"/problem/0264.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",A,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[G]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[M]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[P]),_:1}),e(),z]),D,t("td",F,[t("a",H,[e("🀄️"),n(a)]),e(),t("a",J,[e("🔗"),n(a)])])]),t("tr",null,[K,Q,t("td",U,[n(o,{to:"/problem/0279.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",W,[n(o,{to:"/tag/breadth-first-search.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Y]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,at,t("td",lt,[n(o,{to:"/tag/math.html"},{default:s(()=>[ct]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[rt]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[it]),_:1})]),dt,t("td",pt,[t("a",ut,[e("🀄️"),n(a)]),e(),t("a",_t,[e("🔗"),n(a)])])]),t("tr",null,[ht,mt,gt,t("td",kt,[n(o,{to:"/tag/array.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[bt]),_:1}),e(),n(o,{to:"/tag/enumeration.html"},{default:s(()=>[yt]),_:1}),e(),xt]),vt,t("td",wt,[t("a",qt,[e("🀄️"),n(a)]),e(),t("a",jt,[e("🔗"),n(a)])])]),t("tr",null,[Et,It,Ot,t("td",Ct,[n(o,{to:"/tag/array.html"},{default:s(()=>[Lt]),_:1}),e(),n(o,{to:"/tag/math.html"},{default:s(()=>[Nt]),_:1}),e(),n(o,{to:"/tag/number-theory.html"},{default:s(()=>[Vt]),_:1})]),Bt,t("td",Rt,[t("a",St,[e("🀄️"),n(a)]),e(),t("a",Tt,[e("🔗"),n(a)])])])])])])}const zt=r(_,[["render",At],["__file","0204.html.vue"]]);export{zt as default};

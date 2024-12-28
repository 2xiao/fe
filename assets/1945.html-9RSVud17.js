import{_ as r,r as l,o as i,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const g={},k=t("h1",{id:"_1945-字符串转化后的各位数字之和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1945-字符串转化后的各位数字之和","aria-hidden":"true"},"#"),n(" 1945. 字符串转化后的各位数字之和")],-1),h=t("code",null,"字符串",-1),m=t("code",null,"模拟",-1),_={href:"https://leetcode.cn/problems/sum-of-digits-of-string-after-convert",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/sum-of-digits-of-string-after-convert",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting of lowercase English letters, and an integer <code>k</code>. Your task is to <em>convert</em> the string into an integer by a special process, and then <em>transform</em> it by summing its digits repeatedly <code>k</code> times. More specifically, perform the following steps:</p><ol><li><strong>Convert</strong> <code>s</code> into an integer by replacing each letter with its position in the alphabet (i.e. replace <code>&#39;a&#39;</code> with <code>1</code>, <code>&#39;b&#39;</code> with <code>2</code>, ..., <code>&#39;z&#39;</code> with <code>26</code>).</li><li><strong>Transform</strong> the integer by replacing it with the sum of its digits.</li><li>Repeat the <strong>transform</strong> operation (step 2) <code>k</code> <strong>times</strong> in total.</li></ol><p>For example, if <code>s = &quot;zbax&quot;</code> and <code>k = 2</code>, then the resulting integer would be <code>8</code> by the following operations:</p><ol><li><strong>Convert</strong> : <code>&quot;zbax&quot; ➝ &quot;(26)(2)(1)(24)&quot; ➝ &quot;262124&quot; ➝ 262124</code></li><li><strong>Transform #1</strong> : <code>262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17</code></li><li><strong>Transform #2</strong> : <code>17 ➝ 1 + 7 ➝ 8</code></li></ol><p>Return the <strong>resulting</strong> <strong>integer</strong> after performing the <strong>operations</strong> described above.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;iiii&quot;, k = 1</p><p><strong>Output:</strong> 36</p><p><strong>Explanation:</strong></p><p>The operations are as follows:</p><ul><li>Convert: &quot;iiii&quot; ➝ &quot;(9)(9)(9)(9)&quot; ➝ &quot;9999&quot; ➝ 9999</li><li>Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36</li></ul><p>Thus the resulting integer is 36.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;leetcode&quot;, k = 2</p><p><strong>Output:</strong> 6</p><p><strong>Explanation:</strong></p><p>The operations are as follows:</p><ul><li>Convert: &quot;leetcode&quot; ➝ &quot;(12)(5)(5)(20)(3)(15)(4)(5)&quot; ➝ &quot;12552031545&quot; ➝ 12552031545</li><li>Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33</li><li>Transform #2: 33 ➝ 3 + 3 ➝ 6</li></ul><p>Thus the resulting integer is 6.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> s = &quot;zbax&quot;, k = 2</p><p><strong>Output:</strong> 8</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10</code></li><li><code>s</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由小写字母组成的字符串 <code>s</code> ，以及一个整数 <code>k</code> 。你的任务是通过一种特殊处理将字符串转为整数，然后通过重复对它的数位求和 <code>k</code> 次来进行转换。更具体地说，执行以下步骤：</p><ol><li>用字母在字母表中的位置 <strong>替换</strong> 该字母，将 <code>s</code> <strong>转化</strong> 为一个整数（也就是，<code>&#39;a&#39;</code> 用 <code>1</code> 替换，<code>&#39;b&#39;</code> 用 <code>2</code> 替换，... <code>&#39;z&#39;</code> 用 <code>26</code> 替换）。</li><li>接着，将整数 <strong>转换</strong> 为其 <strong>各位数字之和</strong> 。</li><li>共重复 <strong>转换</strong> 操作（第 2 步） <code>k</code> <strong>次</strong> 。</li></ol><p>例如，如果 <code>s = &quot;zbax&quot;</code> 且 <code>k = 2</code> ，那么执行下述步骤后得到的结果是整数 <code>8</code> ：</p><ul><li><strong>转化：</strong><code>&quot;zbax&quot; ➝ &quot;(26)(2)(1)(24)&quot; ➝ &quot;262124&quot; ➝ 262124</code></li><li><strong>转换 #1</strong> ：<code>262124 ➝ 2 + 6 + 2 + 1 + 2 + 4 ➝ 17</code></li><li><strong>转换 #2</strong> ：<code>17 ➝ 1 + 7 ➝ 8</code></li></ul><p>返回执行上述 <strong>操作</strong> 后得到的 <strong>结果整数</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;iiii&quot;, k = 1</p><p><strong>输出：</strong> 36</p><p><strong>解释：</strong></p><p>操作如下：</p><ul><li>转化：&quot;iiii&quot; ➝ &quot;(9)(9)(9)(9)&quot; ➝ &quot;9999&quot; ➝ 9999</li><li>转换 #1：9999 ➝ 9 + 9 + 9 + 9 ➝ 36</li></ul><p>因此，结果整数为 36 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leetcode&quot;, k = 2</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>操作如下：</p><ul><li>转化：&quot;leetcode&quot; ➝ &quot;(12)(5)(5)(20)(3)(15)(4)(5)&quot; ➝ &quot;12552031545&quot; ➝ 12552031545</li><li>转换 #1：12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33</li><li>转换 #2：33 ➝ 3 + 3 ➝ 6</li></ul><p>因此，结果整数为 6 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;zbax&quot;, k = 2</p><p><strong>输出：</strong> 8</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>1 &lt;= k &lt;= 10</code></li><li><code>s</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义 <code>transform</code> 函数</strong></p><ul><li><code>transform</code> 函数用来将一个整数的所有数位相加并返回累加和。</li><li>使用循环逐位提取数位（利用取余和整除操作）并累加。</li><li>例如：输入 <code>123</code> 时，输出 <code>1 + 2 + 3 = 6</code>。</li></ul></li><li><p><strong>字符转换为数值并求和</strong></p><ul><li>每个字符从 <code>&#39;a&#39;</code> 到 <code>&#39;z&#39;</code> 对应数值 <code>1</code> 到 <code>26</code>。</li><li>通过 <code>char.charCodeAt() - 96</code> 计算字母的数值。</li><li>如果字母数值超过 <code>9</code>，通过 <code>transform</code> 函数进一步拆解并求和，将其转化为数位之和。</li></ul></li><li><p><strong>重复数位求和 <code>k</code> 次</strong></p><ul><li>初次求和得到的结果存储在变量 <code>sum</code> 中。</li><li>每次调用 <code>transform</code> 函数对当前的数值进行数位求和，并更新 <code>sum</code>。</li><li>如果在循环中某一次结果已经小于 10，则提前终止，避免无意义的重复计算。</li></ul></li><li><p><strong>返回结果</strong></p><ul><li>在 <code>k</code> 次迭代结束后，<code>sum</code> 中存储的即为最终结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + k * log_10(m))</code></p><ul><li>初次字符映射：<code>O(n)</code>，其中 <code>n</code> 是字符串 <code>s</code> 的长度。</li><li>每次数位求和：近似 <code>O(log_10(m))</code>，其中 <code>m</code> 是当前数值的大小。</li><li>总体复杂度为 <code>O(n + k * log_10(m))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数空间，无需额外数组存储。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">getLucky</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 数位求和函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">transform</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">return</span> n<span class="token punctuation">;</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res <span class="token operator">+=</span> n <span class="token operator">%</span> <span class="token number">10</span><span class="token punctuation">;</span> <span class="token comment">// 累加当前数位</span>
			n <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>n <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 去掉最低位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化，将字符映射为字母顺序值并求和</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">+=</span> <span class="token function">transform</span><span class="token punctuation">(</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">96</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 执行数位求和 k - 1 次，因为在上面已经执行过一次了</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>k<span class="token operator">--</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		sum <span class="token operator">=</span> <span class="token function">transform</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 如果数值稳定为个位数，提前结束</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,35),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"202",-1),w=t("td",{style:{"text-align":"left"}},"快乐数",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},T=t("code",null,"哈希表",-1),z=t("code",null,"数学",-1),O=t("code",null,"双指针",-1),L=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/happy-number",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"258",-1),j=t("td",{style:{"text-align":"left"}},"各位相加",-1),B={style:{"text-align":"center"}},A={style:{"text-align":"left"}},M=t("code",null,"数学",-1),Y=t("code",null,"数论",-1),F=t("code",null,"模拟",-1),S=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/add-digits",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"2180",-1),K=t("td",{style:{"text-align":"left"}},"统计各位数字之和为偶数的整数个数",-1),P={style:{"text-align":"center"}},Q={style:{"text-align":"left"}},U=t("code",null,"数学",-1),W=t("code",null,"模拟",-1),X=t("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/count-integers-with-even-digit-sum",target:"_blank",rel:"noopener noreferrer"},tt={href:"https://leetcode.com/problems/count-integers-with-even-digit-sum",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"3300",-1),et=t("td",{style:{"text-align":"left"}},"替换为数位和以后的最小元素",-1),st=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},at=t("code",null,"数组",-1),lt=t("code",null,"数学",-1),ct=t("td",{style:{"text-align":"center"}},"🟢",-1),rt={style:{"text-align":"center"}},it={href:"https://leetcode.cn/problems/minimum-element-after-replacement-with-digit-sum",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/minimum-element-after-replacement-with-digit-sum",target:"_blank",rel:"noopener noreferrer"};function dt(ut,gt){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),p("div",null,[k,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(o,{to:"/tag/string.html"},{default:s(()=>[h]),_:1}),n(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),t("a",_,[b,e(a)]),n(),t("a",f,[v,e(a)])]),q,d(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[x,w,t("td",C,[e(o,{to:"/problem/0202.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[T]),_:1}),n(),e(o,{to:"/tag/math.html"},{default:s(()=>[z]),_:1}),n(),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[O]),_:1})]),L,t("td",I,[t("a",N,[n("🀄️"),e(a)]),n(),t("a",V,[n("🔗"),e(a)])])]),t("tr",null,[R,j,t("td",B,[e(o,{to:"/problem/0258.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(o,{to:"/tag/math.html"},{default:s(()=>[M]),_:1}),n(),e(o,{to:"/tag/number-theory.html"},{default:s(()=>[Y]),_:1}),n(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[F]),_:1})]),S,t("td",D,[t("a",G,[n("🀄️"),e(a)]),n(),t("a",H,[n("🔗"),e(a)])])]),t("tr",null,[J,K,t("td",P,[e(o,{to:"/problem/2180.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",Q,[e(o,{to:"/tag/math.html"},{default:s(()=>[U]),_:1}),n(),e(o,{to:"/tag/simulation.html"},{default:s(()=>[W]),_:1})]),X,t("td",Z,[t("a",$,[n("🀄️"),e(a)]),n(),t("a",tt,[n("🔗"),e(a)])])]),t("tr",null,[nt,et,st,t("td",ot,[e(o,{to:"/tag/array.html"},{default:s(()=>[at]),_:1}),n(),e(o,{to:"/tag/math.html"},{default:s(()=>[lt]),_:1})]),ct,t("td",rt,[t("a",it,[n("🀄️"),e(a)]),n(),t("a",pt,[n("🔗"),e(a)])])])])])])}const ht=r(g,[["render",dt],["__file","1945.html.vue"]]);export{ht as default};

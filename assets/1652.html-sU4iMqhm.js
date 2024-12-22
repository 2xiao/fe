import{_ as l,r as c,o as r,c as i,a as n,b as s,d as e,w as t,f as d,e as u}from"./app-U2ekqv2z.js";const k={},h=n("h1",{id:"_1652-拆炸弹",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1652-拆炸弹","aria-hidden":"true"},"#"),s(" 1652. 拆炸弹")],-1),m=n("code",null,"数组",-1),g=n("code",null,"滑动窗口",-1),b={href:"https://leetcode.cn/problems/defuse-the-bomb",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/defuse-the-bomb",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a bomb to defuse, and your time is running out! Your informer will provide you with a <strong>circular</strong> array <code>code</code> of length of <code>n</code> and a key <code>k</code>.</p><p>To decrypt the code, you must replace every number. All the numbers are replaced <strong>simultaneously</strong>.</p><ul><li>If <code>k &gt; 0</code>, replace the <code>ith</code> number with the sum of the <strong>next</strong> <code>k</code> numbers.</li><li>If <code>k &lt; 0</code>, replace the <code>ith</code> number with the sum of the <strong>previous</strong> <code>k</code> numbers.</li><li>If <code>k == 0</code>, replace the <code>ith</code> number with <code>0</code>.</li></ul><p>As <code>code</code> is circular, the next element of <code>code[n-1]</code> is <code>code[0]</code>, and the previous element of <code>code[0]</code> is <code>code[n-1]</code>.</p><p>Given the <strong>circular</strong> array <code>code</code> and an integer key <code>k</code>, return <em>the decrypted code to defuse the bomb</em>!</p><p><strong>Example 1:</strong></p><blockquote><p>Input: code = [5,7,1,4], k = 3</p><p>Output: [12,10,16,13]</p><p>Explanation: Each number is replaced by the sum of the next 3 numbers. The decrypted code is [7+1+4, 1+4+5, 4+5+7, 5+7+1]. Notice that the numbers wrap around.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: code = [1,2,3,4], k = 0</p><p>Output: [0,0,0,0]</p><p>Explanation: When k is zero, the numbers are replaced by 0.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: code = [2,4,9,3], k = -2</p><p>Output: [12,5,6,13]</p><p>Explanation: The decrypted code is [3+9, 2+3, 4+2, 9+4]. Notice that the numbers wrap around again. If k is negative, the sum is of the <strong>previous</strong> numbers.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == code.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= code[i] &lt;= 100</code></li><li><code>-(n - 1) &lt;= k &lt;= n - 1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>你有一个炸弹需要拆除，时间紧迫！你的情报员会给你一个长度为 <code>n</code> 的 <strong>循环</strong> 数组 <code>code</code> 以及一个密钥 <code>k</code> 。</p><p>为了获得正确的密码，你需要替换掉每一个数字。所有数字会 <strong>同时</strong> 被替换。</p><ul><li>如果 <code>k &gt; 0</code> ，将第 <code>i</code> 个数字用 <strong>接下来</strong> <code>k</code> 个数字之和替换。</li><li>如果 <code>k &lt; 0</code> ，将第 <code>i</code> 个数字用 <strong>之前</strong> <code>k</code> 个数字之和替换。</li><li>如果 <code>k == 0</code> ，将第 <code>i</code> 个数字用 <code>0</code> 替换。</li></ul><p>由于 <code>code</code> 是循环的， <code>code[n-1]</code> 下一个元素是 <code>code[0]</code> ，且 <code>code[0]</code> 前一个元素是 <code>code[n-1]</code> 。</p><p>给你 <strong>循环</strong> 数组 <code>code</code> 和整数密钥 <code>k</code> ，请你返回解密后的结果来拆除炸弹！</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> code = [5,7,1,4], k = 3</p><p><strong>输出：</strong>[12,10,16,13]</p><p><strong>解释：</strong> 每个数字都被接下来 3 个数字之和替换。解密后的密码为 [7+1+4, 1+4+5, 4+5+7, 5+7+1]。注意到数组是循环连接的。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> code = [1,2,3,4], k = 0</p><p><strong>输出：</strong>[0,0,0,0]</p><p><strong>解释：</strong> 当 k 为 0 时，所有数字都被 0 替换。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> code = [2,4,9,3], k = -2</p><p><strong>输出：</strong>[12,5,6,13]</p><p><strong>解释：</strong> 解密后的密码为 [3+9, 2+3, 4+2, 9+4] 。注意到数组是循环连接的。如果 k 是负数，那么和为 <strong>之前</strong> 的数字。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == code.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= code[i] &lt;= 100</code></li><li><code>-(n - 1) &lt;= k &lt;= n - 1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始滑动窗口</li></ol><ul><li>使用变量 <code>sum</code> 来记录第一个窗口的和。</li><li>对于 <code>k &gt; 0</code>，初始窗口范围是数组第 1 到第 <code>k</code> 个元素。</li><li>对于 <code>k &lt; 0</code>，初始窗口范围是数组倒数第 1 到倒数第 <code>|k|</code> 个元素。</li><li>通过循环计算初始窗口的和 <code>sum</code>。</li></ul><ol start="2"><li>滑动窗口遍历数组</li></ol><ul><li>从索引 <code>i = 1</code> 开始，逐步更新 <code>sum</code> 和结果数组 <code>res</code>： <ul><li><strong>当 <code>k &gt; 0</code> 时</strong>： <ul><li>将窗口的右端扩展到 <code>(i + k) % n</code>。</li><li>从窗口中移除的元素是当前索引 <code>i</code> 的元素。</li></ul></li><li><strong>当 <code>k &lt; 0</code> 时</strong>： <ul><li>从窗口中移除的元素是窗口左端 <code>(i + k - 1 + n) % n</code>。</li><li>将窗口的左端扩展到 <code>(i - 1 + n) % n</code>。</li></ul></li></ul></li><li>将更新后的 <code>sum</code> 追加到结果数组 <code>res</code>。</li></ul><ol start="3"><li>最终返回结果数组 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n + |k|)</code>，初始窗口和计算需要 <code>O(|k|)</code>，数组遍历和滑动窗口更新需要 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组 <code>res</code> 占用 <code>O(n)</code> 空间，其余变量为常数级空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">code</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decrypt</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">code<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> code<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 如果 k == 0，返回一个全为 0 的数组</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> direction <span class="token operator">=</span> k <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 确定方向</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> idx <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">+</span> i <span class="token operator">*</span> direction <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">;</span>
		sum <span class="token operator">+=</span> code<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 初始化结果数组并加入第一个窗口的和</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span>sum<span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历数组更新窗口和结果</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>k <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// k &gt; 0 时，扩展窗口右端 (i + k) % n，移除窗口左端 i</span>
			sum <span class="token operator">=</span> sum <span class="token operator">+</span> code<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">]</span> <span class="token operator">-</span> code<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token comment">// k &lt; 0 时，移除窗口左端 (i + k - 1 + n) % n，扩展窗口左端 (i - 1 + n) % n</span>
			sum <span class="token operator">=</span> sum <span class="token operator">-</span> code<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">+</span> k <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">]</span> <span class="token operator">+</span> code<span class="token punctuation">[</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">+</span> n<span class="token punctuation">)</span> <span class="token operator">%</span> n<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"2490",-1),q=n("td",{style:{"text-align":"left"}},"回环句",-1),E={style:{"text-align":"center"}},I={style:{"text-align":"left"}},O=n("code",null,"字符串",-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/circular-sentence",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/circular-sentence",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"2515",-1),j=n("td",{style:{"text-align":"left"}},"到目标字符串的最短距离",-1),A=n("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},R=n("code",null,"数组",-1),Y=n("code",null,"字符串",-1),z=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/shortest-distance-to-target-string-in-a-circular-array",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2516",-1),W=n("td",{style:{"text-align":"left"}},"每种字符至少取 K 个",-1),D={style:{"text-align":"center"}},F={style:{"text-align":"left"}},H=n("code",null,"哈希表",-1),J=n("code",null,"字符串",-1),P=n("code",null,"滑动窗口",-1),Q=n("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/take-k-of-each-character-from-left-and-right",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/take-k-of-each-character-from-left-and-right",target:"_blank",rel:"noopener noreferrer"};function $(nn,sn){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(a,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),e(a,{to:"/tag/sliding-window.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,e(o)]),s(),n("a",v,[f,e(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",E,[e(a,{to:"/problem/2490.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/string.html"},{default:t(()=>[O]),_:1})]),N,n("td",C,[n("a",L,[s("🀄️"),e(o)]),s(),n("a",V,[s("🔗"),e(o)])])]),n("tr",null,[T,j,A,n("td",B,[e(a,{to:"/tag/array.html"},{default:t(()=>[R]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[Y]),_:1})]),z,n("td",G,[n("a",K,[s("🀄️"),e(o)]),s(),n("a",M,[s("🔗"),e(o)])])]),n("tr",null,[S,W,n("td",D,[e(a,{to:"/problem/2516.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",F,[e(a,{to:"/tag/hash-table.html"},{default:t(()=>[H]),_:1}),s(),e(a,{to:"/tag/string.html"},{default:t(()=>[J]),_:1}),s(),e(a,{to:"/tag/sliding-window.html"},{default:t(()=>[P]),_:1})]),Q,n("td",U,[n("a",X,[s("🀄️"),e(o)]),s(),n("a",Z,[s("🔗"),e(o)])])])])])])}const tn=l(k,[["render",$],["__file","1652.html.vue"]]);export{tn as default};

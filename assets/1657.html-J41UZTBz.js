import{_ as p,r as c,o as r,c as d,a as t,b as n,d as e,w as o,f as i,e as u}from"./app--GvfAkAr.js";const m={},g=t("h1",{id:"_1657-确定两个字符串是否接近",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1657-确定两个字符串是否接近","aria-hidden":"true"},"#"),n(" 1657. 确定两个字符串是否接近")],-1),_=t("code",null,"哈希表",-1),h=t("code",null,"字符串",-1),k=t("code",null,"计数",-1),b=t("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/determine-if-two-strings-are-close",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/determine-if-two-strings-are-close",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Two strings are considered <strong>close</strong> if you can attain one from the other using the following operations:</p><ul><li>Operation 1: Swap any two <strong>existing</strong> characters.</li><li>For example, <code>a _b_ cd _e_ -&gt; a _e_ cd _b_</code></li><li>Operation 2: Transform <strong>every</strong> occurrence of one <strong>existing</strong> character into another <strong>existing</strong> character, and do the same with the other character.</li><li>For example, <code>_aa_ c _abb_ -&gt; _bb_ c _baa_</code> (all <code>a</code>&#39;s turn into <code>b</code>&#39;s, and all <code>b</code>&#39;s turn into <code>a</code>&#39;s)</li></ul><p>You can use the operations on either string as many times as necessary.</p><p>Given two strings, <code>word1</code> and <code>word2</code>, return <code>true</code> <em>if</em><code>word1</code> <em>and</em><code>word2</code> _are<strong>close</strong> , and _<code>false</code> <em>otherwise.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: word1 = &quot;abc&quot;, word2 = &quot;bca&quot;</p><p>Output: true</p><p>Explanation: You can attain word2 from word1 in 2 operations.</p><p>Apply Operation 1: &quot;a <em>bc</em> &quot; -&gt; &quot;a <em>cb</em> &quot;</p><p>Apply Operation 1: &quot;<em>a</em> c <em>b</em> &quot; -&gt; &quot;<em>b</em> c <em>a</em> &quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: word1 = &quot;a&quot;, word2 = &quot;aa&quot;</p><p>Output: false</p><p>Explanation: It is impossible to attain word2 from word1, or vice versa, in any number of operations.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: word1 = &quot;cabbba&quot;, word2 = &quot;abbccc&quot;</p><p>Output: true</p><p>Explanation: You can attain word2 from word1 in 3 operations.</p><p>Apply Operation 1: &quot;ca <em>b</em> bb <em>a</em> &quot; -&gt; &quot;ca <em>a</em> bb <em>b</em> &quot;</p><p>Apply Operation 2: &quot;<em>c</em> aa <em>bbb</em> &quot; -&gt; &quot;<em>b</em> aa <em>ccc</em> &quot;</p><p>Apply Operation 2: &quot;<em>baa</em> ccc&quot; -&gt; &quot;<em>abb</em> ccc&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 10^5</code></li><li><code>word1</code> and <code>word2</code> contain only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果可以使用以下操作从一个字符串得到另一个字符串，则认为两个字符串 <strong>接近</strong> ：</p><ul><li>操作 1：交换任意两个 <strong>现有</strong> 字符。 <ul><li>例如，<code>a _b_ cd _e_ -&gt; a _e_ cd _b_</code></li></ul></li><li>操作 2：将一个 <strong>现有</strong> 字符的每次出现转换为另一个 <strong>现有</strong> 字符，并对另一个字符执行相同的操作。 <ul><li>例如，<code> _aa_ c _abb_ -&gt; _bb_ c _baa_</code>（所有 <code>a</code> 转化为 <code>b</code> ，而所有的 <code>b</code> 转换为 <code>a</code> ）</li></ul></li></ul><p>你可以根据需要对任意一个字符串多次使用这两种操作。</p><p>给你两个字符串，<code>word1</code> 和 <code>word2</code> 。如果 <code>word1</code> 和 <code>word2</code> 接近 ，就返回 <code>true</code>；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;abc&quot;, word2 = &quot;bca&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 2 次操作从 word1 获得 word2 。</p><p>执行操作 1：&quot;a <em>bc</em> &quot; -&gt; &quot;a <em>cb</em> &quot;</p><p>执行操作 1：&quot;<em>a</em> c <em>b</em> &quot; -&gt; &quot;<em>b</em> c <em>a</em> &quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;a&quot;, word2 = &quot;aa&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 不管执行多少次操作，都无法从 word1 得到 word2 ，反之亦然。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> word1 = &quot;cabbba&quot;, word2 = &quot;abbccc&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 3 次操作从 word1 获得 word2 。</p><p>执行操作 1：&quot;ca <em>b</em> bb <em>a</em> &quot; -&gt; &quot;ca <em>a</em> bb <em>b</em> &quot;</p><p>执行操作 2：&quot;<em>c</em> aa <em>bbb</em> &quot; -&gt; &quot;<em>b</em> aa <em>ccc</em> &quot;</p><p>执行操作 2：&quot;<em>baa</em> ccc&quot; -&gt; &quot;<em>abb</em> ccc&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= word1.length, word2.length &lt;= 10^5</code></li><li><code>word1</code> 和 <code>word2</code> 仅包含小写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>长度检查</strong>：</p><ul><li>首先检查 <code>word1</code> 和 <code>word2</code> 的长度。如果它们的长度不同，则直接返回 <code>false</code>。</li></ul></li><li><p><strong>字符统计</strong>：</p><ul><li>定义一个辅助函数 <code>count(str)</code> 来统计字符串中每个字符的出现次数。</li><li>使用 <code>Map</code> 来存储字符及其对应的出现次数。</li><li>在统计时，遍历字符串中的每个字符，将其添加到 <code>Map</code> 中，并更新其计数。</li></ul></li><li><p><strong>生成唯一标识</strong>：</p><ul><li>在 <code>count</code> 函数中，将 <code>Map</code> 的键（字符）和对应的值（出现次数）分别提取出来，并进行排序。</li><li>将字符和频率数组转换为以逗号分隔的字符串，作为唯一标识。</li></ul></li><li><p><strong>比较结果</strong>：</p><ul><li>调用 <code>count</code> 函数分别对 <code>word1</code> 和 <code>word2</code> 进行统计，并比较它们的字符和频率标识。如果两者相同，返回 <code>true</code>；否则返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，统计字符的时间是 <code>O(n)</code>。虽然在排序字符和频率时，每次操作都是 <code>O(m log m)</code>，其中 <code>m</code> 是不同字符的数量，但是由于字符集有限（假设最多有 26 个小写字母），这在实际情况下是常数级别的，因此整体复杂度近似为 <code>O(n)</code>。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，在最坏的情况下，可能需要存储所有字符及其出现次数，空间复杂度取决于字符集的大小，但仍然是常数级别。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">word2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">closeStrings</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word1<span class="token punctuation">,</span> word2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>word1<span class="token punctuation">.</span>length <span class="token operator">!==</span> word2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>map<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token operator">...</span>map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">count</span><span class="token punctuation">(</span>word1<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token function">count</span><span class="token punctuation">(</span>word2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),v=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),O=t("td",{style:{"text-align":"center"}},"859",-1),E=t("td",{style:{"text-align":"left"}},"亲密字符串",-1),I={style:{"text-align":"center"}},A={style:{"text-align":"left"}},C=t("code",null,"哈希表",-1),L=t("code",null,"字符串",-1),M=t("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/buddy-strings",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"1247",-1),S=t("td",{style:{"text-align":"left"}},"交换字符使得字符串相同",-1),T=t("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},F=t("code",null,"贪心",-1),R=t("code",null,"数学",-1),G=t("code",null,"字符串",-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/minimum-swaps-to-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/minimum-swaps-to-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"1347",-1),P=t("td",{style:{"text-align":"left"}},"制造字母异位词的最小步骤数",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"哈希表",-1),X=t("code",null,"字符串",-1),Z=t("code",null,"计数",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/minimum-number-of-steps-to-make-two-strings-anagram",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram",target:"_blank",rel:"noopener noreferrer"};function ot(st,at){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return r(),d("div",null,[g,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1}),n("  🔖  "),e(s,{to:"/tag/hash-table.html"},{default:o(()=>[_]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[h]),_:1}),n(),e(s,{to:"/tag/counting.html"},{default:o(()=>[k]),_:1}),n(),e(s,{to:"/tag/sorting.html"},{default:o(()=>[b]),_:1}),n("  🔗 "),t("a",f,[w,e(a)]),n(),t("a",q,[y,e(a)])]),x,i(" prettier-ignore "),t("table",null,[v,t("tbody",null,[t("tr",null,[O,E,t("td",I,[e(s,{to:"/problem/0859.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",A,[e(s,{to:"/tag/hash-table.html"},{default:o(()=>[C]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[L]),_:1})]),M,t("td",N,[t("a",V,[n("🀄️"),e(a)]),n(),t("a",j,[n("🔗"),e(a)])])]),t("tr",null,[B,S,T,t("td",Y,[e(s,{to:"/tag/greedy.html"},{default:o(()=>[F]),_:1}),n(),e(s,{to:"/tag/math.html"},{default:o(()=>[R]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[G]),_:1})]),z,t("td",D,[t("a",H,[n("🀄️"),e(a)]),n(),t("a",J,[n("🔗"),e(a)])])]),t("tr",null,[K,P,Q,t("td",U,[e(s,{to:"/tag/hash-table.html"},{default:o(()=>[W]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[X]),_:1}),n(),e(s,{to:"/tag/counting.html"},{default:o(()=>[Z]),_:1})]),$,t("td",tt,[t("a",nt,[n("🀄️"),e(a)]),n(),t("a",et,[n("🔗"),e(a)])])])])])])}const lt=p(m,[["render",ot],["__file","1657.html.vue"]]);export{lt as default};

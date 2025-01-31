import{_ as p,r as c,o as r,c as u,a as t,b as n,d as s,w as o,f as i,e as d}from"./app-MkGfDfkx.js";const h={},k=t("h1",{id:"_2085-统计出现过一次的公共字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2085-统计出现过一次的公共字符串","aria-hidden":"true"},"#"),n(" 2085. 统计出现过一次的公共字符串")],-1),_=t("code",null,"数组",-1),g=t("code",null,"哈希表",-1),q=t("code",null,"字符串",-1),m=t("code",null,"计数",-1),f={href:"https://leetcode.cn/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two string arrays <code>words1</code> and <code>words2</code>, return <em>the number of strings that appear <strong>exactly once</strong> in <strong>each</strong> of the two arrays.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: words1 = [&quot;leetcode&quot;,&quot;is&quot;,&quot;amazing&quot;,&quot;as&quot;,&quot;is&quot;], words2 = [&quot;amazing&quot;,&quot;leetcode&quot;,&quot;is&quot;]</p><p>Output: 2</p><p>Explanation:</p><ul><li>&quot;leetcode&quot; appears exactly once in each of the two arrays. We count this string.</li><li>&quot;amazing&quot; appears exactly once in each of the two arrays. We count this string.</li><li>&quot;is&quot; appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.</li><li>&quot;as&quot; appears once in words1, but does not appear in words2. We do not count this string.</li></ul><p>Thus, there are 2 strings that appear exactly once in each of the two arrays.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words1 = [&quot;b&quot;,&quot;bb&quot;,&quot;bbb&quot;], words2 = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;]</p><p>Output: 0</p><p>Explanation: There are no strings that appear in each of the two arrays.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words1 = [&quot;a&quot;,&quot;ab&quot;], words2 = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;ab&quot;]</p><p>Output: 1</p><p>Explanation: The only string that appears exactly once in each of the two arrays is &quot;ab&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words1.length, words2.length &lt;= 1000</code></li><li><code>1 &lt;= words1[i].length, words2[j].length &lt;= 30</code></li><li><code>words1[i]</code> and <code>words2[j]</code> consists only of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串数组 <code>words1</code> 和 <code>words2</code> ，请你返回在两个字符串数组中 <strong>都恰好出现一次</strong> 的字符串的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;leetcode&quot;,&quot;is&quot;,&quot;amazing&quot;,&quot;as&quot;,&quot;is&quot;], words2 = [&quot;amazing&quot;,&quot;leetcode&quot;,&quot;is&quot;]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong></p><ul><li>&quot;leetcode&quot; 在两个数组中都恰好出现一次，计入答案。</li><li>&quot;amazing&quot; 在两个数组中都恰好出现一次，计入答案。</li><li>&quot;is&quot; 在两个数组中都出现过，但在 words1 中出现了 2 次，不计入答案。</li><li>&quot;as&quot; 在 words1 中出现了一次，但是在 words2 中没有出现过，不计入答案。</li></ul><p>所以，有 2 个字符串在两个数组中都恰好出现了一次。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;b&quot;,&quot;bb&quot;,&quot;bbb&quot;], words2 = [&quot;a&quot;,&quot;aa&quot;,&quot;aaa&quot;]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 没有字符串在两个数组中都恰好出现一次。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words1 = [&quot;a&quot;,&quot;ab&quot;], words2 = [&quot;a&quot;,&quot;a&quot;,&quot;a&quot;,&quot;ab&quot;]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 唯一在两个数组中都出现一次的字符串是 &quot;ab&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words1.length, words2.length &lt;= 1000</code></li><li><code>1 &lt;= words1[i].length, words2[j].length &lt;= 30</code></li><li><code>words1[i]</code> 和 <code>words2[j]</code> 都只包含小写英文字母。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化两个 <code>Map</code> 类型的变量 <code>freq1</code> 和 <code>freq2</code>。</li><li>遍历 <code>words1</code> 数组，将每个单词的出现次数存储到 <code>freq1</code> 中。</li><li>遍历 <code>words2</code> 数组，将每个单词的出现次数存储到 <code>freq2</code> 中。</li><li>遍历 <code>freq1</code> 的所有键： <ul><li>判断当前单词在 <code>freq1</code> 中的频率是否为 1。</li><li>同时判断它在 <code>freq2</code> 中的频率是否为 1。</li><li>如果满足上述条件，则增加计数。</li></ul></li><li>返回计数结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n1 + n2 + k1)</code></p><ul><li>遍历 <code>words1</code> 和 <code>words2</code> 频率统计：<code>O(n1 + n2)</code>，其中 <code>n1</code> 和 <code>n2</code> 分别是两个数组的长度。</li><li>遍历 <code>freq1</code> 的键筛选单词：<code>O(k1)</code>，其中 <code>k1</code> 是 <code>freq1</code> 的键数。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k1 + k2)</code>，，其中 <code>k1</code> 和 <code>k2</code> 分别是 <code>words1</code> 和 <code>words2</code> 的单词种类数，两个 Map 存储 <code>words1</code> 和 <code>words2</code> 的单词频率。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">countWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words1<span class="token punctuation">,</span> words2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> freq1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> freq2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 统计 words1 和 words2 的频率</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq1<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		freq2<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token punctuation">(</span>freq2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 遍历 words1，统计符合条件的单词</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>freq1<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
		<span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> freq1<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> freq2<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">1</span>
	<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"349",-1),j=t("td",{style:{"text-align":"left"}},"两个数组的交集",-1),O={style:{"text-align":"center"}},z={style:{"text-align":"left"}},C=t("code",null,"数组",-1),I=t("code",null,"哈希表",-1),L=t("code",null,"双指针",-1),N=t("code",null,"2+",-1),V=t("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/intersection-of-two-arrays",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"884",-1),R=t("td",{style:{"text-align":"left"}},"两句话中的不常见单词",-1),G={style:{"text-align":"center"}},K={style:{"text-align":"left"}},S=t("code",null,"哈希表",-1),A=t("code",null,"字符串",-1),D=t("code",null,"计数",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/uncommon-words-from-two-sentences",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/uncommon-words-from-two-sentences",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"2053",-1),U=t("td",{style:{"text-align":"left"}},"数组中第 K 个独一无二的字符串",-1),X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},Z=t("code",null,"数组",-1),$=t("code",null,"哈希表",-1),tt=t("code",null,"字符串",-1),nt=t("code",null,"1+",-1),st=t("td",{style:{"text-align":"center"}},"🟢",-1),ot={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/kth-distinct-string-in-an-array",target:"_blank",rel:"noopener noreferrer"},at={href:"https://leetcode.com/problems/kth-distinct-string-in-an-array",target:"_blank",rel:"noopener noreferrer"};function ct(lt,pt){const l=c("font"),e=c("RouterLink"),a=c("ExternalLinkIcon");return r(),u("div",null,[k,t("p",null,[n("🟢 "),s(l,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),s(e,{to:"/tag/array.html"},{default:o(()=>[_]),_:1}),n(),s(e,{to:"/tag/hash-table.html"},{default:o(()=>[g]),_:1}),n(),s(e,{to:"/tag/string.html"},{default:o(()=>[q]),_:1}),n(),s(e,{to:"/tag/counting.html"},{default:o(()=>[m]),_:1}),n("  🔗 "),t("a",f,[w,s(a)]),n(),t("a",b,[y,s(a)])]),v,i(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[E,j,t("td",O,[s(e,{to:"/problem/0349.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",z,[s(e,{to:"/tag/array.html"},{default:o(()=>[C]),_:1}),n(),s(e,{to:"/tag/hash-table.html"},{default:o(()=>[I]),_:1}),n(),s(e,{to:"/tag/two-pointers.html"},{default:o(()=>[L]),_:1}),n(),N]),V,t("td",W,[t("a",M,[n("🀄️"),s(a)]),n(),t("a",T,[n("🔗"),s(a)])])]),t("tr",null,[B,R,t("td",G,[s(e,{to:"/problem/0884.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",K,[s(e,{to:"/tag/hash-table.html"},{default:o(()=>[S]),_:1}),n(),s(e,{to:"/tag/string.html"},{default:o(()=>[A]),_:1}),n(),s(e,{to:"/tag/counting.html"},{default:o(()=>[D]),_:1})]),F,t("td",H,[t("a",J,[n("🀄️"),s(a)]),n(),t("a",P,[n("🔗"),s(a)])])]),t("tr",null,[Q,U,t("td",X,[s(e,{to:"/problem/2053.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",Y,[s(e,{to:"/tag/array.html"},{default:o(()=>[Z]),_:1}),n(),s(e,{to:"/tag/hash-table.html"},{default:o(()=>[$]),_:1}),n(),s(e,{to:"/tag/string.html"},{default:o(()=>[tt]),_:1}),n(),nt]),st,t("td",ot,[t("a",et,[n("🀄️"),s(a)]),n(),t("a",at,[n("🔗"),s(a)])])])])])])}const ut=p(h,[["render",ct],["__file","2085.html.vue"]]);export{ut as default};

import{_ as l,r,o as d,c as i,a as t,b as n,d as e,w as o,f as p,e as u}from"./app-MsFeWfVD.js";const g={},h=t("h1",{id:"_2185-统计包含给定前缀的字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2185-统计包含给定前缀的字符串","aria-hidden":"true"},"#"),n(" 2185. 统计包含给定前缀的字符串")],-1),m=t("code",null,"数组",-1),_=t("code",null,"字符串",-1),f=t("code",null,"字符串匹配",-1),k={href:"https://leetcode.cn/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/counting-words-with-a-given-prefix",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of strings <code>words</code> and a string <code>pref</code>.</p><p>Return <em>the number of strings in</em><code>words</code> <em>that contain</em><code>pref</code> <em>as a<strong>prefix</strong></em>.</p><p>A <strong>prefix</strong> of a string <code>s</code> is any leading contiguous substring of <code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;pay&quot;,&quot;<strong><em>at</em></strong> tention&quot;,&quot;practice&quot;,&quot;<em><strong>at</strong></em> tend&quot;], pref = &quot;at&quot;</p><p>Output: 2</p><p>Explanation: The 2 strings that contain &quot;at&quot; as a prefix are: &quot;<em><strong>at</strong></em> tention&quot; and &quot;<em><strong>at</strong></em> tend&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;leetcode&quot;,&quot;win&quot;,&quot;loops&quot;,&quot;success&quot;], pref = &quot;code&quot;</p><p>Output: 0</p><p>Explanation: There are no strings that contain &quot;code&quot; as a prefix.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length, pref.length &lt;= 100</code></li><li><code>words[i]</code> and <code>pref</code> consist of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> 和一个字符串 <code>pref</code> 。</p><p>返回 <code>words</code> 中以 <code>pref</code> 作为 <strong>前缀</strong> 的字符串的数目。</p><p>字符串 <code>s</code> 的 <strong>前缀</strong> 就是 <code>s</code> 的任一前导连续字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;pay&quot;,&quot;<em><strong>at</strong></em> tention&quot;,&quot;practice&quot;,&quot;<em><strong>at</strong></em> tend&quot;], pref = &quot;at&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 以 &quot;at&quot; 作为前缀的字符串有两个，分别是：&quot;<em><strong>at</strong></em> tention&quot; 和 &quot;<em><strong>at</strong></em> tend&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;leetcode&quot;,&quot;win&quot;,&quot;loops&quot;,&quot;success&quot;], pref = &quot;code&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 不存在以 &quot;code&quot; 作为前缀的字符串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 100</code></li><li><code>1 &lt;= words[i].length, pref.length &lt;= 100</code></li><li><code>words[i]</code> 和 <code>pref</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>初始化计数器</strong>：<code>count</code> 用于统计满足条件的单词数量。</li><li><strong>遍历单词</strong>：使用 <code>for...of</code> 遍历 <code>words</code> 中的每个单词。</li><li><strong>检查前缀</strong>：使用 <code>startsWith</code> 方法判断单词是否以 <code>pref</code> 开头。</li><li><strong>更新计数器</strong>：如果满足条件，计数器 <code>count</code> 增加。</li><li><strong>返回结果</strong>：最后返回满足条件的单词数量。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是 <code>words</code> 的长度，<code>n</code> 是 <code>pref</code> 的长度，对于每个单词，<code>startsWith</code> 方法最多需要检查前缀的长度 <code>n</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了一个计数器变量，没有额外的存储需求。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">pref</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">prefixCount</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> pref</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 初始化计数器</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历每个单词</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>word<span class="token punctuation">.</span><span class="token function">startsWith</span><span class="token punctuation">(</span>pref<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 检查是否以 pref 为前缀</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 如果满足条件，计数器 +1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span> <span class="token comment">// 返回最终计数结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"1455",-1),E=t("td",{style:{"text-align":"left"}},"检查单词是否为句中其他单词的前缀",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},N=t("code",null,"双指针",-1),V=t("code",null,"字符串",-1),I=t("code",null,"字符串匹配",-1),O=t("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"2255",-1),W=t("td",{style:{"text-align":"left"}},"统计是给定字符串前缀的字符串数目",-1),A={style:{"text-align":"center"}},S={style:{"text-align":"left"}},Y=t("code",null,"数组",-1),z=t("code",null,"字符串",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),F={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/count-prefixes-of-a-given-string",target:"_blank",rel:"noopener noreferrer"};function J(K,M){const c=r("font"),s=r("RouterLink"),a=r("ExternalLinkIcon");return d(),i("div",null,[h,t("p",null,[n("🟢 "),e(c,{color:"#15bd66"},{default:o(()=>[n("Easy")]),_:1}),n("  🔖  "),e(s,{to:"/tag/array.html"},{default:o(()=>[m]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[_]),_:1}),n(),e(s,{to:"/tag/string-matching.html"},{default:o(()=>[f]),_:1}),n("  🔗 "),t("a",k,[q,e(a)]),n(),t("a",b,[v,e(a)])]),x,p(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[y,E,t("td",C,[e(s,{to:"/problem/1455.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",L,[e(s,{to:"/tag/two-pointers.html"},{default:o(()=>[N]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[V]),_:1}),n(),e(s,{to:"/tag/string-matching.html"},{default:o(()=>[I]),_:1})]),O,t("td",j,[t("a",B,[n("🀄️"),e(a)]),n(),t("a",R,[n("🔗"),e(a)])])]),t("tr",null,[T,W,t("td",A,[e(s,{to:"/problem/2255.html"},{default:o(()=>[n("[✓]")]),_:1})]),t("td",S,[e(s,{to:"/tag/array.html"},{default:o(()=>[Y]),_:1}),n(),e(s,{to:"/tag/string.html"},{default:o(()=>[z]),_:1})]),D,t("td",F,[t("a",G,[n("🀄️"),e(a)]),n(),t("a",H,[n("🔗"),e(a)])])])])])])}const Q=l(g,[["render",J],["__file","2185.html.vue"]]);export{Q as default};

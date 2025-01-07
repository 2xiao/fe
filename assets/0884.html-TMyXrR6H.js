import{_ as l,r as c,o as r,c as i,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-WL8GPOUO.js";const k={},g=n("h1",{id:"_884-两句话中的不常见单词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_884-两句话中的不常见单词","aria-hidden":"true"},"#"),s(" 884. 两句话中的不常见单词")],-1),h=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),_=n("code",null,"计数",-1),b={href:"https://leetcode.cn/problems/uncommon-words-from-two-sentences",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/uncommon-words-from-two-sentences",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>sentence</strong> is a string of single-space separated words where each word consists only of lowercase letters.</p><p>A word is <strong>uncommon</strong> if it appears exactly once in one of the sentences, and <strong>does not appear</strong> in the other sentence.</p><p>Given two <strong>sentences</strong> <code>s1</code> and <code>s2</code>, return <em>a list of all the<strong>uncommon words</strong></em>. You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> s1 = &quot;this apple is sweet&quot;, s2 = &quot;this apple is sour&quot;</p><p><strong>Output:</strong> [&quot;sweet&quot;,&quot;sour&quot;]</p><p><strong>Explanation:</strong> The word <code>&quot;sweet&quot;</code> appears only in <code>s1</code>, while the word <code>&quot;sour&quot;</code> appears only in <code>s2</code>.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> s1 = &quot;apple apple&quot;, s2 = &quot;banana&quot;</p><p><strong>Output:</strong> [&quot;banana&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 200</code></li><li><code>s1</code> and <code>s2</code> consist of lowercase English letters and spaces.</li><li><code>s1</code> and <code>s2</code> do not have leading or trailing spaces.</li><li>All the words in <code>s1</code> and <code>s2</code> are separated by a single space.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>句子</strong> 是一串由空格分隔的单词。每个 <strong>单词</strong> 仅由小写字母组成。</p><p>如果某个单词在其中一个句子中恰好出现一次，在另一个句子中却 <strong>没有出现</strong> ，那么这个单词就是 <strong>不常见的</strong> 。</p><p>给你两个 <strong>句子</strong> <code>s1</code> 和 <code>s2</code> ，返回所有 <strong>不常用单词</strong> 的列表。返回列表中单词可以按 <strong>任意顺序</strong> 组织。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;this apple is sweet&quot;, s2 = &quot;this apple is sour&quot;</p><p><strong>输出：</strong>[&quot;sweet&quot;,&quot;sour&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s1 = &quot;apple apple&quot;, s2 = &quot;banana&quot;</p><p><strong>输出：</strong>[&quot;banana&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 200</code></li><li><code>s1</code> 和 <code>s2</code> 由小写英文字母和空格组成</li><li><code>s1</code> 和 <code>s2</code> 都不含前导或尾随空格</li><li><code>s1</code> 和 <code>s2</code> 中的所有单词间均由单个空格分隔</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>分割句子成单词</strong>：</p><ul><li>将两个句子 <code>s1</code> 和 <code>s2</code> 按空格分割成单词数组。即，<code>s1.split(&#39; &#39;)</code> 和 <code>s2.split(&#39; &#39;)</code>。</li></ul></li><li><p><strong>统计每个单词出现的次数</strong>：</p><ul><li>使用一个 <code>Map</code> 来记录每个单词在两个句子中出现的次数。</li><li>遍历 <code>s1</code> 中的每个单词，更新 <code>Map</code> 中该单词的计数。</li><li>同样，遍历 <code>s2</code> 中的每个单词，更新 <code>Map</code> 中该单词的计数。</li></ul></li><li><p><strong>筛选不常见的单词</strong>：</p><ul><li>不常见的单词是只在一个句子中出现过的单词，因此它们在 <code>Map</code> 中的计数为 1。</li><li>遍历 <code>Map</code> 的所有键，筛选出计数为 1 的单词。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回不常见的单词数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n + m)</code>，其中 <code>n</code> 和 <code>m</code> 分别是 <code>s1</code> 和 <code>s2</code> 中的字符数。</p><ul><li>分割句子并将其转化为单词数组的时间复杂度是 <code>O(n + m)</code>。</li><li>遍历单词数组并更新 <code>Map</code> 中每个单词的计数的时间复杂度是 <code>O(n + m)</code>。</li><li>筛选出计数为 1 的单词的时间复杂度是 <code>O(k)</code>，其中 <code>k</code> 是 <code>Map</code> 中的单词数量，最多为 <code>n + m</code>。</li><li>总时间复杂度是 <code>O(n + m)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n + m)</code>，使用一个 <code>Map</code> 来存储所有出现的单词，最坏情况下，<code>Map</code> 中可能会存储所有单词。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">uncommonFromSentences</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用 Map 来统计每个单词出现的次数</span>

	<span class="token keyword">const</span> words1 <span class="token operator">=</span> s1<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分割句子 s1 为单词数组</span>
	<span class="token keyword">const</span> words2 <span class="token operator">=</span> s2<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 分割句子 s2 为单词数组</span>

	<span class="token comment">// 遍历 s1 中的单词，统计出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 遍历 s2 中的单词，统计出现次数</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>word<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 过滤出出现次数为 1 的单词</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>count<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2085",-1),M=n("td",{style:{"text-align":"left"}},"统计出现过一次的公共字符串",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},C=n("code",null,"数组",-1),L=n("code",null,"哈希表",-1),N=n("code",null,"字符串",-1),V=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),j={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/count-common-words-with-one-occurrence",target:"_blank",rel:"noopener noreferrer"};function R(S,T){const p=c("font"),o=c("RouterLink"),e=c("ExternalLinkIcon");return r(),i("div",null,[g,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[h]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s(),t(o,{to:"/tag/counting.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",b,[f,t(e)]),s(),n("a",v,[w,t(e)])]),y,u(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[x,M,n("td",E,[t(o,{to:"/problem/2085.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",O,[t(o,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[L]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[N]),_:1}),s(),V]),I,n("td",j,[n("a",A,[s("🀄️"),t(e)]),s(),n("a",B,[s("🔗"),t(e)])])])])])])}const G=l(k,[["render",R],["__file","0884.html.vue"]]);export{G as default};

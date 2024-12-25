import{_ as l,r as e,o as i,c as u,a as n,b as a,d as s,w as t,e as d}from"./app--GvfAkAr.js";const r={},k=n("h1",{id:"_824-山羊拉丁文",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_824-山羊拉丁文","aria-hidden":"true"},"#"),a(" 824. 山羊拉丁文")],-1),m=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/goat-latin",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/goat-latin",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>sentence</code> that consist of words separated by spaces. Each word consists of lowercase and uppercase letters only.</p><p>We would like to convert the sentence to &quot;Goat Latin&quot; (a made-up language similar to Pig Latin.) The rules of Goat Latin are as follows:</p><ul><li>If a word begins with a vowel (<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, or <code>&#39;u&#39;</code>), append <code>&quot;ma&quot;</code> to the end of the word. <blockquote><ul><li>For example, the word <code>&quot;apple&quot;</code> becomes <code>&quot;applema&quot;</code>.</li></ul></blockquote></li><li>If a word begins with a consonant (i.e., not a vowel), remove the first letter and append it to the end, then add <code>&quot;ma&quot;</code>. <blockquote><ul><li>For example, the word <code>&quot;goat&quot;</code> becomes <code>&quot;oatgma&quot;</code>.</li></ul></blockquote></li><li>Add one letter <code>&#39;a&#39;</code> to the end of each word per its word index in the sentence, starting with <code>1</code>. <blockquote><ul><li>For example, the first word gets <code>&quot;a&quot;</code> added to the end, the second word gets <code>&quot;aa&quot;</code> added to the end, and so on.</li></ul></blockquote></li></ul><p>Return <em>the final sentence representing the conversion from sentence to Goat Latin</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: sentence = &quot;I speak Goat Latin&quot;</p><p>Output: &quot;Imaa peaksmaaa oatGmaaaa atinLmaaaaa&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: sentence = &quot;The quick brown fox jumped over the lazy dog&quot;</p><p>Output: &quot;heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 150</code></li><li><code>sentence</code> consists of English letters and spaces.</li><li><code>sentence</code> has no leading or trailing spaces.</li><li>All the words in <code>sentence</code> are separated by a single space.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由若干单词组成的句子 <code>sentence</code> ，单词间由空格分隔。每个单词仅由大写和小写英文字母组成。</p><p>请你将句子转换为 <em>“</em> 山羊拉丁文（ <em>Goat Latin</em> ） <em>”</em> （一种类似于 猪拉丁文 - Pig Latin 的虚构语言）。山羊拉丁文的规则如下：</p><ul><li>如果单词以元音开头（<code>&#39;a&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;i&#39;</code>, <code>&#39;o&#39;</code>, <code>&#39;u&#39;</code>），在单词后添加<code>&quot;ma&quot;</code>。 <blockquote><ul><li>例如，单词 <code>&quot;apple&quot;</code> 变为 <code>&quot;applema&quot;</code> 。</li></ul></blockquote></li><li>如果单词以辅音字母开头（即，非元音字母），移除第一个字符并将它放到末尾，之后再添加<code>&quot;ma&quot;</code>。 <blockquote><ul><li>例如，单词 <code>&quot;goat&quot;</code> 变为 <code>&quot;oatgma&quot;</code> 。</li></ul></blockquote></li><li>根据单词在句子中的索引，在单词最后添加与索引相同数量的字母<code>&#39;a&#39;</code>，索引从 <code>1</code> 开始。 <blockquote><ul><li>例如，在第一个单词后添加 <code>&quot;a&quot;</code> ，在第二个单词后添加 <code>&quot;aa&quot;</code> ，以此类推。</li></ul></blockquote></li></ul><p>返回将 <code>sentence</code> 转换为山羊拉丁文后的句子。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;I speak Goat Latin&quot;</p><p><strong>输出：</strong> &quot;Imaa peaksmaaa oatGmaaaa atinLmaaaaa&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> sentence = &quot;The quick brown fox jumped over the lazy dog&quot;</p><p><strong>输出：</strong> &quot;heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= sentence.length &lt;= 150</code></li><li><code>sentence</code> 由英文字母和空格组成</li><li><code>sentence</code> 不含前导或尾随空格</li><li><code>sentence</code> 中的所有单词由单个空格分隔</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>定义元音集合 <code>vowel</code>，包括大小写的元音字母。</p></li><li><p>遍历句子中的每个单词，检查首字母是否属于元音集合。</p><ul><li>如果首字母是元音：在单词末尾追加 <code>&quot;ma&quot;</code>。</li><li>如果首字母是辅音：将首字母移到单词末尾，再追加 <code>&quot;ma&quot;</code>。</li></ul></li><li><p>对于每个单词，根据其在句子中的位置（索引 <code>i</code>），在单词末尾追加 <code>i + 1</code> 个 <code>&quot;a&quot;</code>。</p></li><li><p>处理完所有单词后，将单词数组重新拼接成一个句子并返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是句子的总长度。</p><ul><li>分割单词需要遍历整个句子，时间复杂度为 <code>O(n)</code>。</li><li>处理每个单词，包括追加字符串，假设单词平均长度为 <code>m</code>，总操作为 <code>O(m * k)</code>，其中 <code>k</code> 是单词数。</li><li>拼接单词数组为句子，时间复杂度为 <code>O(n)</code>。</li><li>总时间复杂度：<code>O(n + m * k) ≈ O(n)</code>，因为句子总长度 <code>n</code> 通常是主要影响因素。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code></p><ul><li>存储单词数组的空间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是单词的数量。</li><li>结果返回一个新的字符串，空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">sentence</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">toGoatLatin</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">sentence</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> vowel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;e&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;i&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;o&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;u&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;E&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;I&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;U&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 定义元音集合</span>
	<span class="token keyword">let</span> words <span class="token operator">=</span> sentence<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 按空格分割句子，得到单词数组</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> word <span class="token operator">=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 当前单词</span>
		<span class="token comment">// 判断首字母是否是元音</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>vowel<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			word <span class="token operator">+=</span> <span class="token string">&#39;ma&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 元音情况</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			word <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token string">&#39;ma&#39;</span><span class="token punctuation">;</span> <span class="token comment">// 辅音情况</span>
		<span class="token punctuation">}</span>
		word <span class="token operator">+=</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 根据索引追加 &quot;a&quot;</span>
		words<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> word<span class="token punctuation">;</span> <span class="token comment">// 更新单词数组</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 拼接单词数组为句子</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function w(f,_){const c=e("font"),p=e("RouterLink"),o=e("ExternalLinkIcon");return i(),u("div",null,[k,n("p",null,[a("🟢 "),s(c,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1}),a("  🔖  "),s(p,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),a("  🔗 "),n("a",h,[q,s(o)]),a(),n("a",g,[b,s(o)])]),v])}const y=l(r,[["render",w],["__file","0824.html.vue"]]);export{y as default};

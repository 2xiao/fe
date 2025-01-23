import{_ as l,r as e,o as u,c as i,a as n,b as s,d as t,w as a,e as r}from"./app-MsFeWfVD.js";const d={},k=n("h1",{id:"_748-最短补全词",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_748-最短补全词","aria-hidden":"true"},"#"),s(" 748. 最短补全词")],-1),q=n("code",null,"数组",-1),g=n("code",null,"哈希表",-1),m=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/shortest-completing-word",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/shortest-completing-word",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),f=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>licensePlate</code> and an array of strings <code>words</code>, find the <strong>shortest completing</strong> word in <code>words</code>.</p><p>A <strong>completing</strong> word is a word that <strong>contains all the letters</strong> in <code>licensePlate</code>. <strong>Ignore numbers and spaces</strong> in <code>licensePlate</code>, and treat letters as <strong>case insensitive</strong>. If a letter appears more than once in <code>licensePlate</code>, then it must appear in the word the same number of times or more.</p><p>For example, if <code>licensePlate\`\` = &quot;aBc 12c&quot;</code>, then it contains letters <code>&#39;a&#39;</code>, <code>&#39;b&#39;</code> (ignoring case), and <code>&#39;c&#39;</code> twice. Possible <strong>completing</strong> words are <code>&quot;abccdef&quot;</code>, <code>&quot;caaacab&quot;</code>, and <code>&quot;cbca&quot;</code>.</p><p>Return _the shortest<strong>completing</strong> word in _<code>words</code> <em>.</em> It is guaranteed an answer exists. If there are multiple shortest <strong>completing</strong> words, return the <strong>first</strong> one that occurs in <code>words</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: licensePlate = &quot;1s3 PSt&quot;, words = [&quot;step&quot;,&quot;steps&quot;,&quot;stripe&quot;,&quot;stepple&quot;]</p><p>Output: &quot;steps&quot;</p><p>Explanation: licensePlate contains letters &#39;s&#39;, &#39;p&#39;, &#39;s&#39; (ignoring case), and &#39;t&#39;.</p><p>&quot;step&quot; contains &#39;t&#39; and &#39;p&#39;, but only contains 1 &#39;s&#39;.</p><p>&quot;steps&quot; contains &#39;t&#39;, &#39;p&#39;, and both &#39;s&#39; characters.</p><p>&quot;stripe&quot; is missing an &#39;s&#39;.</p><p>&quot;stepple&quot; is missing an &#39;s&#39;.</p><p>Since &quot;steps&quot; is the only word containing all the letters, that is the answer.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: licensePlate = &quot;1s3 456&quot;, words = [&quot;looks&quot;,&quot;pest&quot;,&quot;stew&quot;,&quot;show&quot;]</p><p>Output: &quot;pest&quot;</p><p>Explanation: licensePlate only contains the letter &#39;s&#39;. All the words contain &#39;s&#39;, but among these &quot;pest&quot;, &quot;stew&quot;, and &quot;show&quot; are shortest. The answer is &quot;pest&quot; because it is the word that appears earliest of the 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= licensePlate.length &lt;= 7</code></li><li><code>licensePlate</code> contains digits, letters (uppercase or lowercase), or space <code>&#39; &#39;</code>.</li><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length &lt;= 15</code></li><li><code>words[i]</code> consists of lower case English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>licensePlate</code> 和一个字符串数组 <code>words</code> ，请你找出 <code>words</code> 中的 <strong>最短补全词</strong> 。</p><p><strong>补全词</strong> 是一个包含 <code>licensePlate</code> 中所有字母的单词。<strong>忽略</strong> <code>licensePlate</code> 中的 <strong>数字和空格</strong> 。<strong>不区分大小写</strong> 。如果某个字母在 <code>licensePlate</code> 中出现不止一次，那么该字母在补全词中的出现次数应当一致或者更多。</p><p>例如：<code>licensePlate\`\` = &quot;aBc 12c&quot;</code>，那么它的补全词应当包含字母 <code>&#39;a&#39;</code>、<code>&#39;b&#39;</code> （忽略大写）和两个 <code>&#39;c&#39;</code> 。可能的 <strong>补全词</strong> 有 <code>&quot;abccdef&quot;</code>、<code>&quot;caaacab&quot;</code> 以及 <code>&quot;cbca&quot;</code> 。</p><p>请返回 <code>words</code> 中的 <strong>最短补全词</strong> 。题目数据保证一定存在一个最短补全词。当有多个单词都符合最短补全词的匹配条件时取 <code>words</code> 中 <strong>第一个</strong> 出现的那个。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> licensePlate = &quot;1s3 PSt&quot;, words = [&quot;step&quot;, &quot;steps&quot;, &quot;stripe&quot;, &quot;stepple&quot;]</p><p><strong>输出：</strong> &quot;steps&quot;</p><p><strong>解释：</strong> 最短补全词应该包括 &quot;s&quot;、&quot;p&quot;、&quot;s&quot;（忽略大小写） 以及 &quot;t&quot;。</p><p>&quot;step&quot; 包含 &quot;t&quot;、&quot;p&quot;，但只包含一个 &quot;s&quot;，所以它不符合条件。</p><p>&quot;steps&quot; 包含 &quot;t&quot;、&quot;p&quot; 和两个 &quot;s&quot;。</p><p>&quot;stripe&quot; 缺一个 &quot;s&quot;。</p><p>&quot;stepple&quot; 缺一个 &quot;s&quot;。</p><p>因此，&quot;steps&quot; 是唯一一个包含所有字母的单词，也是本例的答案。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> licensePlate = &quot;1s3 456&quot;, words = [&quot;looks&quot;, &quot;pest&quot;, &quot;stew&quot;, &quot;show&quot;]</p><p><strong>输出：</strong> &quot;pest&quot;</p><p><strong>解释：</strong> licensePlate 只包含字母 &quot;s&quot; 。所有的单词都包含字母 &quot;s&quot; ，其中 &quot;pest&quot;、&quot;stew&quot;、和 &quot;show&quot; 三者最短。答案是 &quot;pest&quot; ，因为它是三个单词中在 words 里最靠前的那个。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= licensePlate.length &lt;= 7</code></li><li><code>licensePlate</code> 由数字、大小写字母或空格 <code>&#39; &#39;</code> 组成</li><li><code>1 &lt;= words.length &lt;= 1000</code></li><li><code>1 &lt;= words[i].length &lt;= 15</code></li><li><code>words[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>处理 <code>licensePlate</code></strong>：</p><ul><li>转换为小写。</li><li>去掉所有非字母字符。</li><li>统计字母出现的次数，存储在一个字典中。</li></ul></li><li><p><strong>检查单词是否满足条件</strong>：</p><ul><li>对每个单词进行字母计数。</li><li>确保每个字母在单词中的出现次数不少于 <code>licensePlate</code> 中对应字母的出现次数。</li></ul></li><li><p><strong>遍历 <code>words</code></strong>：</p><ul><li>对每个单词进行检查，如果满足条件则更新最短补全词。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回满足条件的最短单词。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(l + n * a)</code></p><ul><li>构建 <code>licensePlate</code> 字符统计表的时间为 <code>O(l)</code>，其中 <code>l</code> 是 <code>licensePlate</code> 的长度。</li><li>遍历每个单词并检查的时间为 <code>O(n * a)</code>，其中 <code>n</code> 是 <code>words</code> 的长度，<code>a</code> 是单词的平均长度。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，遍历 <code>words</code> 数组时，对每个单词生成一个计数表，每个计数表最多需要 <code>O(26)</code> 空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">licensePlate</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">shortestCompletingWord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">licensePlate<span class="token punctuation">,</span> words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 统计单词中每个字母的出现次数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">countLetters</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> char <span class="token keyword">of</span> str<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">[a-z]</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 只统计字母</span>
				count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> licenseCount <span class="token operator">=</span> <span class="token function">countLetters</span><span class="token punctuation">(</span>licensePlate<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查单词是否满足条件</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> wordCount <span class="token operator">=</span> <span class="token function">countLetters</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> <span class="token punctuation">[</span>char<span class="token punctuation">,</span> freq<span class="token punctuation">]</span> <span class="token keyword">of</span> licenseCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>wordCount<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> freq<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res <span class="token operator">||</span> word<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				res <span class="token operator">=</span> word<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function _(y,P){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:a(()=>[q]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:a(()=>[g]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",h,[v,t(p)]),s(),n("a",w,[b,t(p)])]),f])}const C=l(d,[["render",_],["__file","0748.html.vue"]]);export{C as default};

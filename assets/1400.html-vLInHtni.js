import{_ as l,r as e,o as r,c as u,a as n,b as s,d as a,w as t,e as i}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_1400-构造-k-个回文字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1400-构造-k-个回文字符串","aria-hidden":"true"},"#"),s(" 1400. 构造 K 个回文字符串")],-1),g=n("code",null,"贪心",-1),m=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),h=n("code",null,"计数",-1),v={href:"https://leetcode.cn/problems/construct-k-palindrome-strings",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/construct-k-palindrome-strings",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and an integer <code>k</code>, return <code>true</code> <em>if you can use all the characters in</em><code>s</code> <em>to construct</em><code>k</code> <em>palindrome strings or</em><code>false</code><em>otherwise</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;annabelle&quot;, k = 2</p><p>Output: true</p><p>Explanation: You can construct two palindromes using all characters in s.</p><p>Some possible constructions &quot;anna&quot; + &quot;elble&quot;, &quot;anbna&quot; + &quot;elle&quot;, &quot;anellena&quot; + &quot;b&quot;</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;leetcode&quot;, k = 3</p><p>Output: false</p><p>Explanation: It is impossible to construct 3 palindromes using all the characters of s.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;true&quot;, k = 4</p><p>Output: true</p><p>Explanation: The only possible solution is to put each character in a separate string.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> consists of lowercase English letters.</li><li><code>1 &lt;= k &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个整数 <code>k</code> 。请你用 <code>s</code> 字符串中 <strong>所有字符</strong> 构造 <code>k</code> 个非空 <strong>回文串</strong> 。</p><p>如果你可以用 <code>s</code> 中所有字符构造 <code>k</code> 个回文字符串，那么请你返回 <strong>True</strong> ，否则返回 <strong>False</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;annabelle&quot;, k = 2</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 可以用 s 中所有字符构造 2 个回文字符串。</p><p>一些可行的构造方案包括：&quot;anna&quot; + &quot;elble&quot;，&quot;anbna&quot; + &quot;elle&quot;，&quot;anellena&quot; + &quot;b&quot;</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leetcode&quot;, k = 3</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 无法用 s 中所有字符构造 3 个回文串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;true&quot;, k = 4</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 唯一可行的方案是让 s 中每个字符单独构成一个字符串。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;yzyzyzyzyzyzyzy&quot;, k = 2</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 你只需要将所有的 z 放在一个字符串中，所有的 y 放在另一个字符串中。那么两个字符串都是回文串。</p></blockquote><p><strong>示例 5：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;cr&quot;, k = 7</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 我们没有足够的字符去构造 7 个回文串。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s</code> 中所有字符都是小写英文字母。</li><li><code>1 &lt;= k &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>回文串的性质</strong>：</p><ul><li>回文串中，字符出现奇数次的个数最多为 1（单个字符可以处于回文中心），其他字符必须出现偶数次。</li><li>例如： <ul><li><code>aabb</code> 是回文，奇数次的字符为 0 个。</li><li><code>abcba</code> 是回文，奇数次的字符为 1 个。</li></ul></li><li>如果允许多个回文串，字符出现奇数次的个数不能超过回文串的个数。</li></ul></li><li><p><strong>贪心分配</strong>：</p><ul><li>使用 <code>Map</code> 或数组统计每个字符的出现次数。</li><li>遍历频率表，记录出现奇数次的字符数量 <code>count</code>。</li><li>每个出现奇数次的字符可以单独放入一个回文串中。</li><li>如果奇数次的字符数量 <code>count</code> 大于 <code>k</code>，无法构造出 <code>k</code> 个回文串。</li><li>如果字符串的长度小于 <code>k</code>，也无法构造。</li></ul></li><li><p><strong>条件判断</strong>：</p><ul><li>如果字符串的长度 <code>s.length</code> 小于 <code>k</code>，返回 <code>false</code>。</li><li>如果奇数次字符的数量 <code>count</code> 大于 <code>k</code>，返回 <code>false</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，统计字符频率需要遍历字符串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用 <code>Map</code> 存储字符频率，最多存储 26 个字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canConstruct</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 统计字符频率</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>char<span class="token punctuation">,</span> <span class="token punctuation">(</span>map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 计算出现奇数次的字符数量</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>value <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 判断条件</span>
	<span class="token keyword">return</span> s<span class="token punctuation">.</span>length <span class="token operator">&gt;=</span> k <span class="token operator">&amp;&amp;</span> count <span class="token operator">&lt;=</span> k<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31);function w(x,E){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/greedy.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/counting.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",v,[q,a(p)]),s(),n("a",_,[f,a(p)])]),y])}const I=l(d,[["render",w],["__file","1400.html.vue"]]);export{I as default};

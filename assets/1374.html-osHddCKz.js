import{_ as p,r as e,o as l,c as u,a as n,b as t,d as s,w as o,e as i}from"./app-fEpXkbSw.js";const d={},h=n("h1",{id:"_1374-生成每种字符都是奇数个的字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1374-生成每种字符都是奇数个的字符串","aria-hidden":"true"},"#"),t(" 1374. 生成每种字符都是奇数个的字符串")],-1),g=n("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/generate-a-string-with-characters-that-have-odd-counts",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),_=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, <em>return a string with<code>n</code> characters such that each character in such string occurs <strong>an odd number of times</strong></em>.</p><p>The returned string must contain only lowercase English letters. If there are multiples valid strings, return <strong>any</strong> of them.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 4</p><p>Output: &quot;pppz&quot;</p><p>Explanation: &quot;pppz&quot; is a valid string since the character &#39;p&#39; occurs three times and the character &#39;z&#39; occurs once. Note that there are many other valid strings such as &quot;ohhh&quot; and &quot;love&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 2</p><p>Output: &quot;xy&quot;</p><p>Explanation: &quot;xy&quot; is a valid string since the characters &#39;x&#39; and &#39;y&#39; occur once. Note that there are many other valid strings such as &quot;ag&quot; and &quot;ur&quot;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 7</p><p>Output: &quot;holasss&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code>，请你返回一个含 <code>n</code> 个字符的字符串，其中每种字符在该字符串中都恰好出现 <strong>奇数次</strong> 。</p><p>返回的字符串必须只含小写英文字母。如果存在多个满足题目要求的字符串，则返回其中任意一个即可。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 4</p><p><strong>输出：</strong> &quot;pppz&quot;</p><p><strong>解释：</strong> &quot;pppz&quot; 是一个满足题目要求的字符串，因为 &#39;p&#39; 出现 3 次，且 &#39;z&#39; 出现 1 次。当然，还有很多其他字符串也满足题目要求，比如：&quot;ohhh&quot; 和 &quot;love&quot;。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 2</p><p><strong>输出：</strong> &quot;xy&quot;</p><p><strong>解释：</strong> &quot;xy&quot; 是一个满足题目要求的字符串，因为 &#39;x&#39; 和 &#39;y&#39; 各出现 1 次。当然，还有很多其他字符串也满足题目要求，比如：&quot;ag&quot; 和 &quot;ur&quot;。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 7</p><p><strong>输出：</strong> &quot;holasss&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 500</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li><p>判断 <code>n</code> 的奇偶性：</p><ul><li>如果 <code>n</code> 是 <strong>奇数</strong>，直接返回由 <code>n</code> 个 <code>&#39;a&#39;</code> 组成的字符串（每个字符的出现次数为奇数）。</li><li>如果 <code>n</code> 是 <strong>偶数</strong>，返回由 <code>n-1</code> 个 <code>&#39;a&#39;</code> 和 1 个 <code>&#39;b&#39;</code> 组成的字符串（<code>&#39;a&#39;</code> 的出现次数为奇数，<code>&#39;b&#39;</code> 的出现次数也为奇数）。</li></ul></li><li><p>使用字符串的 <code>.repeat()</code> 方法快速生成指定长度的字符串。</p></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，使用 <code>.repeat()</code> 方法生成字符串，复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，返回的结果字符串占用 <code>O(n)</code> 的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateTheString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">repeat</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,28);function v(f,x){const c=e("font"),r=e("RouterLink"),a=e("ExternalLinkIcon");return l(),u("div",null,[h,n("p",null,[t("🟢 "),s(c,{color:"#15bd66"},{default:o(()=>[t("Easy")]),_:1}),t("  🔖  "),s(r,{to:"/tag/string.html"},{default:o(()=>[g]),_:1}),t("  🔗 "),n("a",k,[m,s(a)]),t(),n("a",q,[b,s(a)])]),_])}const w=p(d,[["render",v],["__file","1374.html.vue"]]);export{w as default};

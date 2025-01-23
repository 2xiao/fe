import{_ as l,r as a,o as u,c as i,a as n,b as s,d as t,w as o,e as r}from"./app-MsFeWfVD.js";const d={},k=n("h1",{id:"_1544-整理字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1544-整理字符串","aria-hidden":"true"},"#"),s(" 1544. 整理字符串")],-1),g=n("code",null,"栈",-1),h=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/make-the-string-great",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/make-the-string-great",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> of lower and upper case English letters.</p><p>A good string is a string which doesn&#39;t have <strong>two adjacent characters</strong><code>s[i]</code> and <code>s[i + 1]</code> where:</p><ul><li><code>0 &lt;= i &lt;= s.length - 2</code></li><li><code>s[i]</code> is a lower-case letter and <code>s[i + 1]</code> is the same letter but in upper-case or <strong>vice-versa</strong>.</li></ul><p>To make the string good, you can choose <strong>two adjacent</strong> characters that make the string bad and remove them. You can keep doing this until the string becomes good.</p><p>Return <em>the string</em> after making it good. The answer is guaranteed to be unique under the given constraints.</p><p><strong>Notice</strong> that an empty string is also good.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;leEeetcode&quot;</p><p>Output: &quot;leetcode&quot;</p><p>Explanation: In the first step, either you choose i = 1 or i = 2, both will result &quot;leEeetcode&quot; to be reduced to &quot;leetcode&quot;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abBAcC&quot;</p><p>Output: &quot;&quot;</p><p>Explanation: We have many possible scenarios, and all lead to the same answer. For example:</p><p>&quot;abBAcC&quot; --&gt; &quot;aAcC&quot; --&gt; &quot;cC&quot; --&gt; &quot;&quot;</p><p>&quot;abBAcC&quot; --&gt; &quot;abBA&quot; --&gt; &quot;aA&quot; --&gt; &quot;&quot;</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;s&quot;</p><p>Output: &quot;s&quot;</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> contains only lower and upper case English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个由大小写英文字母组成的字符串 <code>s</code> 。</p><p>一个整理好的字符串中，两个相邻字符 <code>s[i]</code> 和 <code>s[i+1]</code>，其中 <code>0&lt;= i &lt;= s.length-2</code> ，要满足如下条件:</p><ul><li>若 <code>s[i]</code> 是小写字符，则 <code>s[i+1]</code> 不可以是相同的大写字符。</li><li>若 <code>s[i]</code> 是大写字符，则 <code>s[i+1]</code> 不可以是相同的小写字符。</li></ul><p>请你将字符串整理好，每次你都可以从字符串中选出满足上述条件的 <strong>两个相邻</strong> 字符并删除，直到字符串整理好为止。</p><p>请返回整理好的 <strong>字符串</strong> 。题目保证在给出的约束条件下，测试样例对应的答案是唯一的。</p><p><strong>注意：</strong> 空字符串也属于整理好的字符串，尽管其中没有任何字符。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;leEeetcode&quot;</p><p><strong>输出：</strong> &quot;leetcode&quot;</p><p><strong>解释：</strong> 无论你第一次选的是 i = 1 还是 i = 2，都会使 &quot;leEeetcode&quot; 缩减为 &quot;leetcode&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abBAcC&quot;</p><p><strong>输出：</strong> &quot;&quot;</p><p><strong>解释：</strong> 存在多种不同情况，但所有的情况都会导致相同的结果。例如：</p><p>&quot;abBAcC&quot; --&gt; &quot;aAcC&quot; --&gt; &quot;cC&quot; --&gt; &quot;&quot;</p><p>&quot;abBAcC&quot; --&gt; &quot;abBA&quot; --&gt; &quot;aA&quot; --&gt; &quot;&quot;</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;s&quot;</p><p><strong>输出：</strong> &quot;s&quot;</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 100</code></li><li><code>s</code> 只包含小写和大写英文字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以用 <strong>栈</strong> 来解决这个问题。</p><ol><li><p>遍历字符串中的每个字符：</p><ul><li>如果栈顶元素和当前字符形成一个大小写匹配对（ASCII 差值为 32），则从栈中移除栈顶元素。</li><li>否则，将当前字符压入栈中。</li></ul></li><li><p>遍历结束后，栈中的字符构成了最终的字符串，将其转换为字符串返回。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串，每个字符最多被压入和弹出栈一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，最坏情况下栈中存储所有字符。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">makeGood</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 检查是否存在相邻的大写/小写字符</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>
			stack<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
			Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>char<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">32</span>
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除大小写匹配的字符</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 压入当前字符</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function f(w,x){const c=a("font"),e=a("RouterLink"),p=a("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:o(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:o(()=>[g]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:o(()=>[h]),_:1}),s("  🔗 "),n("a",m,[q,t(p)]),s(),n("a",b,[v,t(p)])]),_])}const C=l(d,[["render",f],["__file","1544.html.vue"]]);export{C as default};

import{_ as p,r as c,o as r,c as i,a as n,b as t,d as s,w as e,f as u,e as d}from"./app-WL8GPOUO.js";const h={},g=n("h1",{id:"_1221-分割平衡字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1221-分割平衡字符串","aria-hidden":"true"},"#"),t(" 1221. 分割平衡字符串")],-1),k=n("code",null,"贪心",-1),m=n("code",null,"字符串",-1),b=n("code",null,"计数",-1),L={href:"https://leetcode.cn/problems/split-a-string-in-balanced-strings",target:"_blank",rel:"noopener noreferrer"},R=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/split-a-string-in-balanced-strings",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>Balanced</strong> strings are those that have an equal quantity of <code>&#39;L&#39;</code> and <code>&#39;R&#39;</code> characters.</p><p>Given a <strong>balanced</strong> string <code>s</code>, split it into some number of substrings such that:</p><ul><li>Each substring is balanced.</li></ul><p>Return <em>the <strong>maximum</strong> number of balanced strings you can obtain.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;RLRRLLRLRL&quot;</p><p>Output: 4</p><p>Explanation: s can be split into &quot;RL&quot;, &quot;RRLL&quot;, &quot;RL&quot;, &quot;RL&quot;, each substring contains same number of &#39;L&#39; and &#39;R&#39;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;RLRRRLLRLL&quot;</p><p>Output: 2</p><p>Explanation: s can be split into &quot;RL&quot;, &quot;RRRLLRLL&quot;, each substring contains same number of &#39;L&#39; and &#39;R&#39;.</p><p>Note that s cannot be split into &quot;RL&quot;, &quot;RR&quot;, &quot;RL&quot;, &quot;LR&quot;, &quot;LL&quot;, because the 2nd and 5th substrings are not balanced.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;LLLLRRRR&quot;</p><p>Output: 1</p><p>Explanation: s can be split into &quot;LLLLRRRR&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= s.length &lt;= 1000</code></li><li><code>s[i]</code> is either <code>&#39;L&#39;</code> or <code>&#39;R&#39;</code>.</li><li><code>s</code> is a <strong>balanced</strong> string.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>平衡字符串</strong> 中，<code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code> 字符的数量是相同的。</p><p>给你一个平衡字符串 <code>s</code>，请你将它分割成尽可能多的子字符串，并满足：</p><ul><li>每个子字符串都是平衡字符串。</li></ul><p>返回可以通过分割得到的平衡字符串的 <strong>最大数量</strong>。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;RLRRLLRLRL&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> s 可以分割为 &quot;RL&quot;、&quot;RRLL&quot;、&quot;RL&quot;、&quot;RL&quot; ，每个子字符串中都包含相同数量的 &#39;L&#39; 和 &#39;R&#39; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;RLRRRLLRLL&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> s 可以分割为 &quot;RL&quot;、&quot;RRRLLRLL&quot;，每个子字符串中都包含相同数量的 &#39;L&#39; 和 &#39;R&#39; 。</p><p>注意，s 无法分割为 &quot;RL&quot;、&quot;RR&quot;、&quot;RL&quot;、&quot;LR&quot;、&quot;LL&quot; 因为第 2 个和第 5 个子字符串不是平衡字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;LLLLRRRR&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> s 只能保持原样 &quot;LLLLRRRR&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= s.length &lt;= 1000</code></li><li><code>s[i] = &#39;L&#39; 或 &#39;R&#39;</code></li><li><code>s</code> 是一个 <strong>平衡</strong> 字符串</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>使用一个计数器 <code>count</code> 来记录当前分割字符串的平衡状态： <ul><li>遇到 <code>&#39;R&#39;</code> 时，<code>count--</code>。</li><li>遇到 <code>&#39;L&#39;</code> 时，<code>count++</code>。</li></ul></li><li>当 <code>count == 0</code> 时，说明我们找到一个平衡字符串，计数器 <code>res++</code>。</li><li>遍历字符串，最终返回 <code>res</code> 即为分割出的平衡字符串的个数。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串 <code>s</code> 一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常量空间存储 <code>count</code> 和 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">balancedStringSplit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录当前的平衡状态</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 记录平衡字符串的数量</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;R&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">--</span><span class="token punctuation">;</span> <span class="token comment">// 遇到 &#39;R&#39;，减少平衡值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 遇到 &#39;L&#39;，增加平衡值</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 平衡字符串结束，计数加 1</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),f=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2788",-1),y=n("td",{style:{"text-align":"left"}},"按分隔符拆分字符串",-1),w=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},N=n("code",null,"数组",-1),C=n("code",null,"字符串",-1),I=n("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/split-strings-by-separator",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/split-strings-by-separator",target:"_blank",rel:"noopener noreferrer"};function j(S,G){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),i("div",null,[g,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(o,{to:"/tag/greedy.html"},{default:e(()=>[k]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:e(()=>[m]),_:1}),t(),s(o,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),t("  🔗 "),n("a",L,[R,s(a)]),t(),n("a",q,[_,s(a)])]),v,u(" prettier-ignore "),n("table",null,[f,n("tbody",null,[n("tr",null,[x,y,w,n("td",E,[s(o,{to:"/tag/array.html"},{default:e(()=>[N]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:e(()=>[C]),_:1})]),I,n("td",O,[n("a",V,[t("🀄️"),s(a)]),t(),n("a",B,[t("🔗"),s(a)])])])])])])}const z=p(h,[["render",j],["__file","1221.html.vue"]]);export{z as default};

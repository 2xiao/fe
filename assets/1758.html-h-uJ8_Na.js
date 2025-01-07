import{_ as l,r as c,o as r,c as i,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-WL8GPOUO.js";const k={},h=n("h1",{id:"_1758-生成交替二进制字符串的最少操作数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1758-生成交替二进制字符串的最少操作数","aria-hidden":"true"},"#"),t(" 1758. 生成交替二进制字符串的最少操作数")],-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/minimum-changes-to-make-alternating-binary-string",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),q=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> consisting only of the characters <code>&#39;0&#39;</code> and <code>&#39;1&#39;</code>. In one operation, you can change any <code>&#39;0&#39;</code> to <code>&#39;1&#39;</code> or vice versa.</p><p>The string is called alternating if no two adjacent characters are equal. For example, the string <code>&quot;010&quot;</code> is alternating, while the string <code>&quot;0100&quot;</code> is not.</p><p>Return <em>the <strong>minimum</strong> number of operations needed to make</em> <code>s</code> <em>alternating</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;0100&quot;</p><p>Output: 1</p><p>Explanation: If you change the last character to &#39;1&#39;, s will be &quot;0101&quot;, which is alternating.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;10&quot;</p><p>Output: 0</p><p>Explanation: s is already alternating.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;1111&quot;</p><p>Output: 2</p><p>Explanation: You need two operations to reach &quot;0101&quot; or &quot;1010&quot;.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个仅由字符 <code>&#39;0&#39;</code> 和 <code>&#39;1&#39;</code> 组成的字符串 <code>s</code> 。一步操作中，你可以将任一 <code>&#39;0&#39;</code> 变成 <code>&#39;1&#39;</code> ，或者将 <code>&#39;1&#39;</code> 变成 <code>&#39;0&#39;</code> 。</p><p><strong>交替字符串</strong> 定义为：如果字符串中不存在相邻两个字符相等的情况，那么该字符串就是交替字符串。例如，字符串 <code>&quot;010&quot;</code> 是交替字符串，而字符串 <code>&quot;0100&quot;</code> 不是。</p><p>返回使 <code>s</code> 变成 <strong>交替字符串</strong> 所需的 <strong>最少</strong> 操作数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;0100&quot;</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 如果将最后一个字符变为 &#39;1&#39; ，s 就变成 &quot;0101&quot; ，即符合交替字符串定义。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;10&quot;</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> s 已经是交替字符串。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;1111&quot;</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 需要 2 步操作得到 &quot;0101&quot; 或 &quot;1010&quot; 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^4</code></li><li><code>s[i]</code> 是 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>题目要求将字符串 <code>s</code> 变成交替字符串，交替字符串有两种可能的形式：</p><ol><li>以 <code>0</code> 开头：<code>010101...</code></li><li>以 <code>1</code> 开头：<code>101010...</code></li></ol><p>目标是计算将 <code>s</code> 变为两种交替字符串之一所需的最小操作数。</p><ol><li><p>遍历字符串，计算将其转换为以 <code>0</code> 开头的交替模式所需的操作次数。</p><ul><li>对每个字符 <code>s[i]</code>： <ul><li>如果位置 <code>i</code> 为偶数，且 <code>s[i] == 1</code>，则 <code>s[i]</code> 和当前模式的期望字符不同，操作次数加 1。</li><li>如果位置 <code>i</code> 为奇数，且 <code>s[i] == 0</code>，则 <code>s[i]</code> 和当前模式的期望字符不同，操作次数加 1。</li></ul></li></ul></li><li><p>遍历结束后，<code>count</code> 即为以 <code>0</code> 开头的交替模式所需的操作次数。</p></li><li><p>以 <code>1</code> 开头的交替模式所需的操作次数为 <code>n - count</code></p></li><li><p>取两种模式的操作次数中的较小值返回即可。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历字符串一遍。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数级的额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>count<span class="token punctuation">,</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> count<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),f=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2957",-1),y=n("td",{style:{"text-align":"left"}},"消除相邻近似相等字符",-1),w=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},I=n("code",null,"贪心",-1),j=n("code",null,"字符串",-1),O=n("code",null,"动态规划",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/remove-adjacent-almost-equal-characters",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/remove-adjacent-almost-equal-characters",target:"_blank",rel:"noopener noreferrer"};function B(R,T){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[t("🟢 "),e(p,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(o,{to:"/tag/string.html"},{default:s(()=>[g]),_:1}),t("  🔗 "),n("a",m,[_,e(a)]),t(),n("a",b,[v,e(a)])]),q,d(" prettier-ignore "),n("table",null,[f,n("tbody",null,[n("tr",null,[x,y,w,n("td",E,[e(o,{to:"/tag/greedy.html"},{default:s(()=>[I]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[j]),_:1}),t(),e(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[O]),_:1})]),C,n("td",L,[n("a",N,[t("🀄️"),e(a)]),t(),n("a",V,[t("🔗"),e(a)])])])])])])}const F=l(k,[["render",B],["__file","1758.html.vue"]]);export{F as default};

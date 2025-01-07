import{_ as c,r,o as i,c as d,a as e,b as t,d as s,w as n,f as p,e as u}from"./app-WL8GPOUO.js";const g={},h=e("h1",{id:"_2299-强密码检验器-ii",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2299-强密码检验器-ii","aria-hidden":"true"},"#"),t(" 2299. 强密码检验器 II")],-1),_=e("code",null,"字符串",-1),k={href:"https://leetcode.cn/problems/strong-password-checker-ii",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/strong-password-checker-ii",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A password is said to be <strong>strong</strong> if it satisfies all the following criteria:</p><ul><li>It has at least <code>8</code> characters.</li><li>It contains at least <strong>one lowercase</strong> letter.</li><li>It contains at least <strong>one uppercase</strong> letter.</li><li>It contains at least <strong>one digit</strong>.</li><li>It contains at least <strong>one special character</strong>. The special characters are the characters in the following string: <code>&quot;!@#$%^&amp;*()-+&quot;</code>.</li><li>It does <strong>not</strong> contain <code>2</code> of the same character in adjacent positions (i.e., <code>&quot;aab&quot;</code> violates this condition, but <code>&quot;aba&quot;</code> does not).</li></ul><p>Given a string <code>password</code>, return <code>true</code> <em>if it is a<strong>strong</strong> password</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: password = &quot;IloveLe3tcode!&quot;</p><p>Output: true</p><p>Explanation: The password meets all the requirements. Therefore, we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: password = &quot;Me+You--IsMyDream&quot;</p><p>Output: false</p><p>Explanation: The password does not contain a digit and also contains 2 of the same character in adjacent positions. Therefore, we return false.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: password = &quot;1aB!&quot;</p><p>Output: false</p><p>Explanation: The password does not meet the length requirement. Therefore, we return false.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= password.length &lt;= 100</code></li><li><code>password</code> consists of letters, digits, and special characters: <code>&quot;!@#$%^&amp;*()-+&quot;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>如果一个密码满足以下所有条件，我们称它是一个 <strong>强</strong> 密码：</p><ul><li>它有至少 <code>8</code> 个字符。</li><li>至少包含 <strong>一个小写英文</strong> 字母。</li><li>至少包含 <strong>一个大写英文</strong> 字母。</li><li>至少包含 <strong>一个数字</strong> 。</li><li>至少包含 <strong>一个特殊字符</strong> 。特殊字符为：<code>&quot;!@#$%^&amp;*()-+&quot;</code> 中的一个。</li><li>它 <strong>不</strong> 包含 <code>2</code> 个连续相同的字符（比方说 <code>&quot;aab&quot;</code> 不符合该条件，但是 <code>&quot;aba&quot;</code> 符合该条件）。</li></ul><p>给你一个字符串 <code>password</code> ，如果它是一个 <strong>强</strong> 密码，返回 <code>true</code>，否则返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> password = &quot;IloveLe3tcode!&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 密码满足所有的要求，所以我们返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> password = &quot;Me+You--IsMyDream&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 密码不包含数字，且包含 2 个连续相同的字符。所以我们返回 false 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> password = &quot;1aB!&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 密码不符合长度要求。所以我们返回 false 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= password.length &lt;= 100</code></li><li><code>password</code> 包含字母，数字和 <code>&quot;!@#$%^&amp;*()-+&quot;</code> 这些特殊字符。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用正则表达式来验证是否满足条件。</p></li><li><p><strong>正则表达式的拆解：</strong></p><ul><li><code>^</code>: 匹配字符串的开始。</li><li><code>(?!.*(.)\\1)</code>: 确保字符串中没有相邻的两个相同字符。 <ul><li><code>.*(.)</code> 匹配任意字符后跟一个捕获的字符。</li><li><code>\\1</code> 表示重复捕获的字符。</li></ul></li><li><code>(?=.*[a-z])</code>: 确保字符串包含至少一个小写字母。</li><li><code>(?=.*[A-Z])</code>: 确保字符串包含至少一个大写字母。</li><li><code>(?=.*[0-9])</code>: 确保字符串包含至少一个数字。</li><li><code>(?=.*[!@#$%^&amp;*()+-])</code>: 确保字符串包含至少一个特殊字符。</li><li><code>.{8,}</code>: 确保字符串长度至少为 8。</li><li><code>$</code>: 匹配字符串的结尾。</li></ul></li><li><p>使用 <code>RegExp.prototype.exec()</code> 方法匹配正则表达式，返回 <code>null</code> 表示不符合条件。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，正则表达式匹配操作对长度为 <code>n</code> 的字符串需线性扫描。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了固定的正则表达式和一些辅助变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">password</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">strongPasswordCheckerII</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">password</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> regex <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RegExp</span><span class="token punctuation">(</span>
		<span class="token string">&#39;^(?!.*(.)\\\\1)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&amp;*()+-]).{8,}$&#39;</span><span class="token punctuation">,</span>
		<span class="token string">&#39;g&#39;</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> regex<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>password<span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,31),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),w=e("td",{style:{"text-align":"center"}},"420",-1),v=e("td",{style:{"text-align":"left"}},"强密码检验器",-1),y=e("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},E=e("code",null,"贪心",-1),T=e("code",null,"字符串",-1),$=e("code",null,"堆（优先队列）",-1),L=e("td",{style:{"text-align":"center"}},"🔴",-1),C={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/strong-password-checker",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/strong-password-checker",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"468",-1),N=e("td",{style:{"text-align":"left"}},"验证IP地址",-1),V=e("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},R=e("code",null,"字符串",-1),A=e("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/validate-ip-address",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/validate-ip-address",target:"_blank",rel:"noopener noreferrer"};function Y(Z,G){const l=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon");return i(),d("div",null,[h,e("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:n(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:n(()=>[_]),_:1}),t("  🔗 "),e("a",k,[m,s(o)]),t(),e("a",f,[b,s(o)])]),x,p(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[w,v,y,e("td",I,[s(a,{to:"/tag/greedy.html"},{default:n(()=>[E]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:n(()=>[T]),_:1}),t(),s(a,{to:"/tag/heap-priority-queue.html"},{default:n(()=>[$]),_:1})]),L,e("td",C,[e("a",O,[t("🀄️"),s(o)]),t(),e("a",j,[t("🔗"),s(o)])])]),e("tr",null,[B,N,V,e("td",M,[s(a,{to:"/tag/string.html"},{default:n(()=>[R]),_:1})]),A,e("td",z,[e("a",D,[t("🀄️"),s(o)]),t(),e("a",P,[t("🔗"),s(o)])])])])])])}const F=c(g,[["render",Y],["__file","2299.html.vue"]]);export{F as default};

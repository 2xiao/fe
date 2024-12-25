import{_ as l,r as c,o as r,c as d,a as t,b as e,d as n,w as s,f as i,e as u}from"./app--GvfAkAr.js";const k={},g=t("h1",{id:"_2337-移动片段得到字符串",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2337-移动片段得到字符串","aria-hidden":"true"},"#"),e(" 2337. 移动片段得到字符串")],-1),_=t("code",null,"双指针",-1),h=t("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/move-pieces-to-obtain-a-string",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/move-pieces-to-obtain-a-string",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"LeetCode",-1),R=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two strings <code>start</code> and <code>target</code>, both of length <code>n</code>. Each string consists <strong>only</strong> of the characters <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and <code>&#39;_&#39;</code> where:</p><ul><li>The characters <code>&#39;L&#39;</code> and <code>&#39;R&#39;</code> represent pieces, where a piece <code>&#39;L&#39;</code> can move to the <strong>left</strong> only if there is a <strong>blank</strong> space directly to its left, and a piece <code>&#39;R&#39;</code> can move to the <strong>right</strong> only if there is a <strong>blank</strong> space directly to its right.</li><li>The character <code>&#39;_&#39;</code> represents a blank space that can be occupied by <strong>any</strong> of the <code>&#39;L&#39;</code> or <code>&#39;R&#39;</code> pieces.</li></ul><p>Return <code>true</code> <em>if it is possible to obtain the string</em> <code>target</code> <em>by moving the pieces of the string</em><code>start</code> <em><strong>any</strong> number of times</em>. Otherwise, return <code>false</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: <code>start = &quot;_L__R__R_&quot;, target = &quot;L______RR&quot;</code></p><p>Output: true</p><p>Explanation: We can obtain the string target from start by doing the following moves:</p><ul><li>Move the first piece one step to the left, start becomes equal to <code>&quot;L___R__R_&quot;</code>.</li><li>Move the last piece one step to the right, start becomes equal to <code>&quot;L___R___R&quot;</code>.</li><li>Move the second piece three steps to the right, start becomes equal to <code>&quot;L______RR&quot;</code>.</li></ul><p>Since it is possible to get the string target from start, we return true.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: <code>start = &quot;R_L_&quot;, target = &quot;__LR&quot;</code></p><p>Output: false</p><p>Explanation: The &#39;R&#39; piece in the string start can move one step to the right to obtain <code>&quot;_RL_&quot;</code>.</p><p>After that, no pieces can move anymore, so it is impossible to obtain the string target from start.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: <code>start = &quot;_R&quot;, target = &quot;R_&quot;</code></p><p>Output: false</p><p>Explanation: The piece in the string start can move only to the right, so it is impossible to obtain the string target from start.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == start.length == target.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>start</code> and <code>target</code> consist of the characters <code>&#39;L&#39;</code>, <code>&#39;R&#39;</code>, and <code>&#39;_&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个字符串 <code>start</code> 和 <code>target</code> ，长度均为 <code>n</code> 。每个字符串 <strong>仅</strong> 由字符 <code>&#39;L&#39;</code>、<code>&#39;R&#39;</code> 和 <code>&#39;_&#39;</code> 组成，其中：</p><ul><li>字符 <code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code> 表示片段，其中片段 <code>&#39;L&#39;</code> 只有在其左侧直接存在一个 <strong>空位</strong> 时才能向 <strong>左</strong> 移动，而片段 <code>&#39;R&#39;</code> 只有在其右侧直接存在一个 <strong>空位</strong> 时才能向 <strong>右</strong> 移动。</li><li>字符 <code>&#39;_&#39;</code> 表示可以被 <strong>任意</strong> <code>&#39;L&#39;</code> 或 <code>&#39;R&#39;</code> 片段占据的空位。</li></ul><p>如果在移动字符串 <code>start</code> 中的片段任意次之后可以得到字符串 <code>target</code> ，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> <code>start = &quot;_L__R__R_&quot;, target = &quot;L______RR&quot;</code></p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 可以从字符串 start 获得 target ，需要进行下面的移动：</p><ul><li>将第一个片段向左移动一步，字符串现在变为 <code>&quot;L___R__R_&quot;</code> 。</li><li>将最后一个片段向右移动一步，字符串现在变为 <code>&quot;L___R___R&quot;</code> 。</li><li>将第二个片段向右移动三步，字符串现在变为 <code>&quot;L______RR&quot;</code> 。</li></ul><p>可以从字符串 start 得到 target ，所以返回 true 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> <code>start = &quot;R_L_&quot;, target = &quot;__LR&quot;</code></p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 字符串 start 中的 &#39;R&#39; 片段可以向右移动一步得到 <code>&quot;_RL_&quot;</code> 。</p><p>但是，在这一步之后，不存在可以移动的片段，所以无法从字符串 start 得到 target 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> <code>start = &quot;_R&quot;, target = &quot;R_&quot;</code></p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 字符串 start 中的片段只能向右移动，所以无法从字符串 start 得到 target 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == start.length == target.length</code></li><li><code>1 &lt;= n &lt;= 10^5</code></li><li><code>start</code> 和 <code>target</code> 由字符 <code>&#39;L&#39;</code>、<code>&#39;R&#39;</code> 和 <code>&#39;_&#39;</code> 组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本题要求验证是否可以通过移动 <code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code> 从字符串 <code>start</code> 变为字符串 <code>target</code>，移动规则是：</p><ol><li><code>&#39;L&#39;</code> 可以向左移动，但不能向右；</li><li><code>&#39;R&#39;</code> 可以向右移动，但不能向左；</li><li><code>start</code> 和 <code>target</code> 的空位 <code>_</code> 可以被占据。</li></ol><p>如果 <code>start</code> 移动后可以得到 <code>target</code>，必须满足以下要求：</p><ul><li><code>start</code> 和 <code>target</code> 的 <code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code> 的相对顺序必须一致。换句话说，<code>start</code> 和 <code>target</code> 去掉 <code>&#39;_&#39;</code> 后必须有相同的字符序列，否则无法通过任何移动变换得到。</li><li>对于 <code>&#39;L&#39;</code>：<code>start</code> 中的 <code>&#39;L&#39;</code> 的下标必须大于等于 <code>target</code> 中对应 <code>&#39;L&#39;</code> 的下标，因为 <code>&#39;L&#39;</code> 只能向左移动。</li><li>对于 <code>&#39;R&#39;</code>：<code>start</code> 中的 <code>&#39;R&#39;</code> 的下标必须小于等于 <code>target</code> 中对应 <code>&#39;R&#39;</code> 的下标，因为 <code>&#39;R&#39;</code> 只能向右移动。</li></ul><p>因此，可以使用两个指针分别遍历 <code>start</code> 和 <code>target</code>，逐一验证每个 <code>&#39;L&#39;</code> 和 <code>&#39;R&#39;</code> 的位置关系是否符合上述规则。</p><ol><li>从 <code>start</code> 和 <code>target</code> 中去掉所有的 <code>&#39;_&#39;</code>，如果剩下的字符序列不同，直接返回 <code>false</code>。</li><li>使用双指针遍历 <code>start</code> 和 <code>target</code>： <ul><li>如果遇到 <code>&#39;L&#39;</code>，检查 <code>start</code> 中的索引是否大于等于 <code>target</code> 中的索引。</li><li>如果遇到 <code>&#39;R&#39;</code>，检查 <code>start</code> 中的索引是否小于等于 <code>target</code> 中的索引。</li></ul></li><li>如果所有的字符都满足规则，返回 <code>true</code>；否则返回 <code>false</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，双指针遍历字符串 <code>start</code> 和 <code>target</code>，每个字符最多遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了固定数量的变量，没有额外空间开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">start</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">canChange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">start<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> n <span class="token operator">=</span> start<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 双指针遍历</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">||</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 跳过 start 和 target 中的空位 &#39;_&#39;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> start<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;</span> n <span class="token operator">&amp;&amp;</span> target<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;_&#39;</span><span class="token punctuation">)</span> j<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果两者同时结束，说明匹配成功</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> n <span class="token operator">&amp;&amp;</span> j <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果只有一个结束，说明匹配失败</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">===</span> n <span class="token operator">||</span> j <span class="token operator">===</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		<span class="token comment">// 当前字符必须一致，否则匹配失败</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">!==</span> target<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

		<span class="token comment">// 验证移动规则</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;L&#39;</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;</span> j<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// &#39;L&#39; 不能向右移动</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;R&#39;</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&gt;</span> j<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// &#39;R&#39; 不能向左移动</span>

		<span class="token comment">// 移动指针</span>
		i<span class="token operator">++</span><span class="token punctuation">;</span>
		j<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"20",-1),L=t("td",{style:{"text-align":"left"}},"有效的括号",-1),x={style:{"text-align":"center"}},w={style:{"text-align":"left"}},j=t("code",null,"栈",-1),E=t("code",null,"字符串",-1),C=t("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"777",-1),V=t("td",{style:{"text-align":"left"}},"在LR字符串中交换相邻字符",-1),M=t("td",{style:{"text-align":"center"}},null,-1),B={style:{"text-align":"left"}},S=t("code",null,"双指针",-1),A=t("code",null,"字符串",-1),W=t("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/swap-adjacent-in-lr-string",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/swap-adjacent-in-lr-string",target:"_blank",rel:"noopener noreferrer"};function F(G,H){const p=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),d("div",null,[g,t("p",null,[e("🟠 "),n(p,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[_]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[h]),_:1}),e("  🔗 "),t("a",m,[b,n(a)]),e(),t("a",v,[f,n(a)])]),R,i(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[y,L,t("td",x,[n(o,{to:"/problem/0020.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",w,[n(o,{to:"/tag/stack.html"},{default:s(()=>[j]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[E]),_:1})]),C,t("td",O,[t("a",I,[e("🀄️"),n(a)]),e(),t("a",N,[e("🔗"),n(a)])])]),t("tr",null,[T,V,M,t("td",B,[n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[A]),_:1})]),W,t("td",Y,[t("a",z,[e("🀄️"),n(a)]),e(),t("a",D,[e("🔗"),n(a)])])])])])])}const K=l(k,[["render",F],["__file","2337.html.vue"]]);export{K as default};

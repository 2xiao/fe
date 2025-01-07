import{_ as p,r as c,o as i,c as r,a as n,b as t,d as s,w as e,f as d,e as u}from"./app-WL8GPOUO.js";const k={},h=n("h1",{id:"_22-括号生成",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_22-括号生成","aria-hidden":"true"},"#"),t(" 22. 括号生成")],-1),_=n("code",null,"字符串",-1),m=n("code",null,"动态规划",-1),g=n("code",null,"回溯",-1),f={href:"https://leetcode.cn/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given <code>n</code> pairs of parentheses, write a function to <em>generate all combinations of well-formed parentheses</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3</p><p>Output: [&quot;((()))&quot;,&quot;(()())&quot;,&quot;(())()&quot;,&quot;()(())&quot;,&quot;()()()&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: [&quot;()&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 8</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>数字 <code>n</code> 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 <strong>有效的</strong> 括号组合。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>定义一个空数组 <code>res</code> 用于存储最终结果，以及一个空数组 <code>track</code> 用于存储当前生成的括号组合。</li><li>编写回溯函数 <code>backtrack</code>，该函数接收两个参数 <code>left</code> 和 <code>right</code>，分别表示当前已使用的左括号和右括号的数量。</li><li>在回溯函数中，通过判断条件进行剪枝： <ul><li>如果 <code>left</code> 小于 <code>right</code>，说明生成的括号组合是无效的，直接返回。</li><li>如果 <code>left</code> 或 <code>right</code> 的数量超过 <code>n</code>，说明已经超出有效范围，直接返回。</li></ul></li><li>如果 <code>left</code> 和 <code>right</code> 都等于 <code>n</code>，则说明已经生成了有效的括号组合，将当前 <code>track</code> 中的括号组合转为字符串并加入 <code>res</code> 数组。</li><li>在回溯函数中，分别尝试添加左括号和右括号，并递归调用下一层。之后需要撤销当前的选择，继续尝试下一个选择。</li><li>调用回溯函数 <code>backtrack</code> 的初始状态是 <code>(0, 0)</code>，表示左右括号的数量都为 0。</li><li>最终返回结果数组 <code>res</code>。</li></ol><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(4^n / √n)</code>，生成合法括号组合的时间复杂度由卡特兰数决定，对于 <code>n</code> 对括号，其数量为 <code>C(2n, n)/(n + 1)</code>，即 <code>O(4^n / √n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>(不包括结果数组的存储空间)。 <ul><li>递归栈的空间复杂度 <code>O(n)</code>，回溯的最大递归深度为 <code>2n</code>，因为每次递归都会处理一个括号，直到所有 <code>2n</code> 个括号被处理完；</li><li>使用了一个 <code>track</code> 数组来存储当前路径，它的空间复杂度是 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">generateParenthesis</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right <span class="token operator">||</span> left <span class="token operator">&gt;</span> n <span class="token operator">||</span> right <span class="token operator">&gt;</span> n<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">==</span> n <span class="token operator">&amp;&amp;</span> right <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">backtrack</span><span class="token punctuation">(</span>left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">backtrack</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,17),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"17",-1),O=n("td",{style:{"text-align":"left"}},"电话号码的字母组合",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"哈希表",-1),N=n("code",null,"字符串",-1),V=n("code",null,"回溯",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),I={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"20",-1),M=n("td",{style:{"text-align":"left"}},"有效的括号",-1),P={style:{"text-align":"center"}},S={style:{"text-align":"left"}},T=n("code",null,"栈",-1),z=n("code",null,"字符串",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/valid-parentheses",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2116",-1),K=n("td",{style:{"text-align":"left"}},"判断一个括号字符串是否有效",-1),Q=n("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=n("code",null,"栈",-1),X=n("code",null,"贪心",-1),Y=n("code",null,"字符串",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid",target:"_blank",rel:"noopener noreferrer"};function sn(en,an){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(l,{color:"#ffb800"},{default:e(()=>[t("Medium")]),_:1}),t("  🔖  "),s(a,{to:"/tag/string.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[m]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",f,[b,s(o)]),t(),n("a",v,[x,s(o)])]),y,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,O,n("td",C,[s(a,{to:"/problem/0017.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",E,[s(a,{to:"/tag/hash-table.html"},{default:e(()=>[L]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[N]),_:1}),t(),s(a,{to:"/tag/backtracking.html"},{default:e(()=>[V]),_:1})]),j,n("td",I,[n("a",B,[t("🀄️"),s(o)]),t(),n("a",R,[t("🔗"),s(o)])])]),n("tr",null,[G,M,n("td",P,[s(a,{to:"/problem/0020.html"},{default:e(()=>[t("[✓]")]),_:1})]),n("td",S,[s(a,{to:"/tag/stack.html"},{default:e(()=>[T]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[z]),_:1})]),A,n("td",D,[n("a",F,[t("🀄️"),s(o)]),t(),n("a",H,[t("🔗"),s(o)])])]),n("tr",null,[J,K,Q,n("td",U,[s(a,{to:"/tag/stack.html"},{default:e(()=>[W]),_:1}),t(),s(a,{to:"/tag/greedy.html"},{default:e(()=>[X]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[Y]),_:1})]),Z,n("td",$,[n("a",nn,[t("🀄️"),s(o)]),t(),n("a",tn,[t("🔗"),s(o)])])])])])])}const cn=p(k,[["render",sn],["__file","0022.html.vue"]]);export{cn as default};

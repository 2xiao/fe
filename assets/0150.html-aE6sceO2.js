import{_ as l,r as p,o as i,c as u,a as n,b as s,d as t,w as a,f as r,e as d}from"./app-WL8GPOUO.js";const k={},h=n("h1",{id:"_150-逆波兰表达式求值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_150-逆波兰表达式求值","aria-hidden":"true"},"#"),s(" 150. 逆波兰表达式求值")],-1),_=n("code",null,"栈",-1),g=n("code",null,"数组",-1),m=n("code",null,"数学",-1),f={href:"https://leetcode.cn/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/evaluate-reverse-polish-notation",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),x=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),y=n("code",null,"tokens",-1),w={href:"http://en.wikipedia.org/wiki/Reverse_Polish_notation",target:"_blank",rel:"noopener noreferrer"},E=d(`<p>Evaluate the expression. Return <em>an integer that represents the value of the expression</em>.</p><p><strong>Note</strong> that:</p><ul><li>The valid operators are <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, and <code>&#39;/&#39;</code>.</li><li>Each operand may be an integer or another expression.</li><li>The division between two integers always <strong>truncates toward zero</strong>.</li><li>There will not be any division by zero.</li><li>The input represents a valid arithmetic expression in a reverse polish notation.</li><li>The answer and all the intermediate calculations can be represented in a <strong>32-bit</strong> integer.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]</p><p>Output: 9</p><p>Explanation: ((2 + 1) * 3) = 9</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]</p><p>Output: 6</p><p>Explanation: (4 + (13 / 5)) = 6</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;<em>&quot;,&quot;/&quot;,&quot;</em>&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]</p><p>Output: 22</p><p>Explanation: ((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5</p><p>= ((10 _ (6 / (12 _ -11))) + 17) + 5</p><p>= ((10 * (6 / -132)) + 17) + 5</p><p>= ((10 * 0) + 17) + 5</p><p>= (0 + 17) + 5</p><p>= 17 + 5</p><p>= 22</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= tokens.length &lt;= 10^4</code></li><li><code>tokens[i]</code> is either an operator: <code>&quot;+&quot;</code>, <code>&quot;-&quot;</code>, <code>&quot;*&quot;</code>, or <code>&quot;/&quot;</code>, or an integer in the range <code>[-200, 200]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>tokens</code> ，表示一个根据 <strong>逆波兰表示法</strong> 表示的算术表达式。</p><p>请你计算该表达式。返回一个表示表达式值的整数。</p><p>注意：</p><ul><li>有效的算符为 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code> 和 <code>&#39;/&#39;</code> 。</li><li>每个操作数（运算对象）都可以是一个整数或者另一个表达式。</li><li>两个整数之间的除法总是 <strong>向零截断</strong> 。</li><li>表达式中不含除零运算。</li><li>输入是一个根据逆波兰表示法表示的算术表达式。</li><li>答案及所有中间计算结果可以用 <strong>32 位</strong> 整数表示。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>逆波兰表达式发明出来就是为了方便计算机运用「栈」进行表达式运算的，其运算规则如下：</p><p>按顺序遍历逆波兰表达式中的字符，如果是数字，则放入栈；如果是运算符，则将栈顶的两个元素拿出来进行运算，再将结果放入栈。对于减法和除法，运算顺序别搞反了，栈顶第二个数是被除（减）数。</p><ol><li><p><strong>遍历输入</strong>：</p><ul><li>遍历输入的字符串数组 <code>tokens</code>，对于每个元素： <ul><li><strong>操作数</strong>：如果当前元素是数字（字符串形式），将其转换为数字并推入栈中。</li><li><strong>操作符</strong>：如果当前元素是操作符（<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>），需要执行相应的操作： <ul><li>从栈中弹出最近的两个操作数。</li><li>根据操作符计算结果并将其压入栈中。</li></ul></li></ul></li></ul></li><li><p><strong>实现操作</strong>：</p><ul><li>对于每个操作符，进行相应的计算： <ul><li><strong>加法（<code>+</code>）</strong>：弹出两个数字相加，将结果压入栈中。</li><li><strong>减法（<code>-</code>）</strong>：弹出两个数字，计算第二个减第一个的结果，然后压入栈中。</li><li><strong>乘法（<code>*</code>）</strong>：弹出两个数字相乘，结果压入栈中。</li><li><strong>除法（<code>/</code>）</strong>：注意要处理整数除法的取整方式（向零取整），将第二个数字除以第一个数字的结果压入栈中。</li></ul></li></ul></li><li><p><strong>最终结果</strong>：</p><ul><li>遍历结束后，栈中只会剩下一个数字，即为最终结果，返回这个值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 为 <code>tokens</code> 数组的长度，只需遍历整个数组一次，每个操作（如加法、减法、乘法、除法和入栈、出栈操作）都是常数时间操作。</p></li><li><p><strong>空间复杂度</strong>： <code>O(n)</code>，在最坏情况下，栈可能会存储所有的操作数，例如在输入全为数字的情况下，栈的最大大小为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">tokens</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">evalRPN</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> temp <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> temp<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),O=n("td",{style:{"text-align":"center"}},"224",-1),R=n("td",{style:{"text-align":"left"}},"基本计算器",-1),T={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=n("code",null,"栈",-1),L=n("code",null,"递归",-1),V=n("code",null,"数学",-1),j=n("code",null,"1+",-1),B=n("td",{style:{"text-align":"center"}},"🔴",-1),P={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"282",-1),Y=n("td",{style:{"text-align":"left"}},"给表达式添加运算符",-1),A=n("td",{style:{"text-align":"center"}},null,-1),D={style:{"text-align":"left"}},F=n("code",null,"数学",-1),G=n("code",null,"字符串",-1),H=n("code",null,"回溯",-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/expression-add-operators",target:"_blank",rel:"noopener noreferrer"};function W(X,Z){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[m]),_:1}),s("  🔗 "),n("a",f,[v,t(o)]),s(),n("a",b,[q,t(o)])]),x,n("p",null,[s("You are given an array of strings "),y,s(" that represents an arithmetic expression in a "),n("a",w,[s("Reverse Polish Notation"),t(o)]),s(".")]),E,r(" prettier-ignore "),n("table",null,[N,n("tbody",null,[n("tr",null,[O,R,n("td",T,[t(e,{to:"/problem/0224.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",C,[t(e,{to:"/tag/stack.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/recursion.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[V]),_:1}),s(),j]),B,n("td",P,[n("a",z,[s("🀄️"),t(o)]),s(),n("a",M,[s("🔗"),t(o)])])]),n("tr",null,[S,Y,A,n("td",D,[t(e,{to:"/tag/math.html"},{default:a(()=>[F]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[G]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[H]),_:1})]),J,n("td",K,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])])])])])}const nn=l(k,[["render",W],["__file","0150.html.vue"]]);export{nn as default};

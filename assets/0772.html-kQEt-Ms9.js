import{_ as l,r as c,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-MkGfDfkx.js";const k={},h=n("h1",{id:"_772-基本计算器-iii-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_772-基本计算器-iii-🔒","aria-hidden":"true"},"#"),s(" 772. 基本计算器 III 🔒")],-1),m=n("code",null,"栈",-1),_=n("code",null,"递归",-1),v=n("code",null,"数学",-1),g=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/basic-calculator-iii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/basic-calculator-iii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement a basic calculator to evaluate a simple expression string.</p><p>The expression string contains only non-negative integers, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, <code>&#39;/&#39;</code> operators, and open <code>&#39;(&#39;</code> and closing parentheses <code>&#39;)&#39;</code>. The integer division should <strong>truncate toward zero</strong>.</p><p>You may assume that the given expression is always valid. All intermediate results will be in the range of <code>[-2^31, 2^31 - 1]</code>.</p><p>calculator to evaluate it, and return <em>the result of the evaluation</em>.</p><p><strong>Note:</strong> You are <strong>not</strong> allowed to use any built-in function which evaluates strings as mathematical expressions, such as <code>eval()</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;1+1&quot;</p><p>Output: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;6-4/2&quot;</p><p>Output: 4</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;2*(5+5*2)/3+(6/2+8)&quot;</p><p>Output: 21</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s &lt;= 10^4</code></li><li><code>s</code> consists of digits, <code>&#39;+&#39;</code>, <code>&#39;-&#39;</code>, <code>&#39;*&#39;</code>, <code>&#39;/&#39;</code>, <code>&#39;(&#39;</code> and <code>&#39;)&#39;</code>.</li><li><code>s</code> represents a valid expression.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现一个基本的计算器来计算简单的表达式字符串。</p><p>表达式字符串只包含非负整数，算符 <code>&#39;+&#39;</code>、<code>&#39;-&#39;</code>、<code>&#39;*&#39;</code>、<code>&#39;/&#39;</code>、左括号 <code>&#39;(&#39;</code> 和右括号<code>&#39;）&#39;</code> 。整数除法需要 <strong>向下截断</strong> 。</p><p>你可以假定给定的表达式总是有效的。所有的中间结果的范围均满足 <code>[-2^31, 2^31 - 1]</code> 。</p><p><strong>注意</strong>：你不能使用任何将字符串作为表达式求值的内置函数，比如 <code>eval()</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题与四则运算类似，涉及操作符优先级处理和括号表达式的递归计算。可以使用 <strong>栈 (stack)</strong> 来帮助处理表达式，并使用 <strong>递归</strong> 来处理括号中的子表达式。</p><ol><li>定义一个递归函数 <code>helper</code> 用于递归地遍历字符串，<code>isDigit</code> 辅助函数用于判断当前字符是否为数字。</li><li>在递归函数 <code>helper</code> 中，使用一个栈 存储操作数。</li><li>遍历表达式字符串： <ul><li>遇到数字时，计算整个数字（可能有多位）。</li><li>遇到 <code>+</code>, <code>-</code> 时，低优先级，放入栈中，等其他优先级高的运算处理完再做加减法。</li><li>遇到 <code>*</code>, <code>/</code> 时，高优先级，需要立即计算，并将结果更新到栈中。</li><li>遇到左括号 <code>(</code> 时，递归计算括号内的表达式，这样可以优先计算嵌套的表达式。</li><li>遇到右括号 <code>)</code> 时，跳出循环，返回当前子表达式的结果。</li></ul></li><li>最后将栈中的所有数字求和（因为乘除法已经处理了，只剩下加减法）。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是输入字符串的长度。每个字符在遍历过程中会被处理一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，主要是栈的深度用于存储括号内的中间结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">calculate</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">helper</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> sign <span class="token operator">=</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">;</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> char <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isDigit</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				num <span class="token operator">=</span> num <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> <span class="token function">parseInt</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算完整的数字</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 跳过 &#39;(&#39;</span>
				num <span class="token operator">=</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归计算括号内的表达式</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isDigit</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">!==</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> i <span class="token operator">===</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">===</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">===</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span>num<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">===</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">===</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">trunc</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> num<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				sign <span class="token operator">=</span> char<span class="token punctuation">;</span> <span class="token comment">// 更新当前符号</span>
				num <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 重置 num</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 结束当前括号的计算</span>
			<span class="token punctuation">}</span>

			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回当前栈中数字的总和</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> <span class="token function">helper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数：判断字符是否为数字</span>
<span class="token keyword">const</span> <span class="token function-variable function">isDigit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> char <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> char <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"224",-1),E=n("td",{style:{"text-align":"left"}},"基本计算器",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},C=n("code",null,"栈",-1),L=n("code",null,"递归",-1),O=n("code",null,"数学",-1),D=n("code",null,"1+",-1),j=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/basic-calculator",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"227",-1),z=n("td",{style:{"text-align":"left"}},"基本计算器 II",-1),A={style:{"text-align":"center"}},H={style:{"text-align":"left"}},M=n("code",null,"栈",-1),S=n("code",null,"数学",-1),F=n("code",null,"字符串",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/basic-calculator-ii",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/basic-calculator-ii",target:"_blank",rel:"noopener noreferrer"},Q=n("td",{style:{"text-align":"center"}},"770",-1),U=n("td",{style:{"text-align":"left"}},"基本计算器 IV",-1),W=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},Z=n("code",null,"栈",-1),$=n("code",null,"递归",-1),nn=n("code",null,"哈希表",-1),sn=n("code",null,"2+",-1),tn=n("td",{style:{"text-align":"center"}},"🔴",-1),an={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/basic-calculator-iv",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/basic-calculator-iv",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"1597",-1),pn=n("td",{style:{"text-align":"left"}},"根据中缀表达式构造二叉表达式树 🔒",-1),ln=n("td",{style:{"text-align":"center"}},null,-1),rn={style:{"text-align":"left"}},un=n("code",null,"栈",-1),dn=n("code",null,"树",-1),kn=n("code",null,"字符串",-1),hn=n("code",null,"1+",-1),mn=n("td",{style:{"text-align":"center"}},"🔴",-1),_n={style:{"text-align":"center"}},vn={href:"https://leetcode.cn/problems/build-binary-expression-tree-from-infix-expression",target:"_blank",rel:"noopener noreferrer"},gn={href:"https://leetcode.com/problems/build-binary-expression-tree-from-infix-expression",target:"_blank",rel:"noopener noreferrer"};function bn(fn,yn){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🔴 "),t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/recursion.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,t(o)]),s(),n("a",y,[x,t(o)])]),w,u(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[q,E,n("td",N,[t(e,{to:"/problem/0224.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",V,[t(e,{to:"/tag/stack.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/recursion.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[O]),_:1}),s(),D]),j,n("td",B,[n("a",T,[s("🀄️"),t(o)]),s(),n("a",R,[s("🔗"),t(o)])])]),n("tr",null,[Y,z,n("td",A,[t(e,{to:"/problem/0227.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",H,[t(e,{to:"/tag/stack.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/math.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[F]),_:1})]),G,n("td",J,[n("a",K,[s("🀄️"),t(o)]),s(),n("a",P,[s("🔗"),t(o)])])]),n("tr",null,[Q,U,W,n("td",X,[t(e,{to:"/tag/stack.html"},{default:a(()=>[Z]),_:1}),s(),t(e,{to:"/tag/recursion.html"},{default:a(()=>[$]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[nn]),_:1}),s(),sn]),tn,n("td",an,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])]),n("tr",null,[cn,pn,ln,n("td",rn,[t(e,{to:"/tag/stack.html"},{default:a(()=>[un]),_:1}),s(),t(e,{to:"/tag/tree.html"},{default:a(()=>[dn]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[kn]),_:1}),s(),hn]),mn,n("td",_n,[n("a",vn,[s("🀄️"),t(o)]),s(),n("a",gn,[s("🔗"),t(o)])])])])])])}const wn=l(k,[["render",bn],["__file","0772.html.vue"]]);export{wn as default};

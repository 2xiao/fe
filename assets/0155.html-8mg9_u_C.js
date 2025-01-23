import{_ as l,r as p,o as i,c as u,a as n,b as s,d as t,w as a,f as d,e as r}from"./app-MsFeWfVD.js";const k={},m=n("h1",{id:"_155-最小栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_155-最小栈","aria-hidden":"true"},"#"),s(" 155. 最小栈")],-1),h=n("code",null,"栈",-1),_=n("code",null,"设计",-1),v={href:"https://leetcode.cn/problems/min-stack",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/min-stack",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.</p><p>Implement the <code>MinStack</code> class:</p><ul><li><code>MinStack()</code> initializes the stack object.</li><li><code>void push(int val)</code> pushes the element <code>val</code> onto the stack.</li><li><code>void pop()</code> removes the element on the top of the stack.</li><li><code>int top()</code> gets the top element of the stack.</li><li><code>int getMin()</code> retrieves the minimum element in the stack.</li></ul><p>You must implement a solution with <code>O(1)</code> time complexity for each function.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MinStack&quot;,&quot;push&quot;,&quot;push&quot;,&quot;push&quot;,&quot;getMin&quot;,&quot;pop&quot;,&quot;top&quot;,&quot;getMin&quot;]</p><p>[[],[-2],[0],[-3],[],[],[],[]]</p><p><strong>Output</strong></p><p>[null,null,null,null,-3,null,0,-2]</p><p><strong>Explanation</strong></p><p>MinStack minStack = new MinStack();</p><p>minStack.push(-2);</p><p>minStack.push(0);</p><p>minStack.push(-3);</p><p>minStack.getMin(); // return -3</p><p>minStack.pop();</p><p>minStack.top(); // return 0</p><p>minStack.getMin(); // return -2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= val &lt;= 2^31 - 1</code></li><li>Methods <code>pop</code>, <code>top</code> and <code>getMin</code> operations will always be called on <strong>non-empty</strong> stacks.</li><li>At most <code>3 * 10^4</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>getMin</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个支持 <code>push</code> ，<code>pop</code> ，<code>top</code> 操作，并能在常数时间内检索到最小元素的栈。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以在元素每次入栈时，将当前栈内的最小元素作为数组的第二个参数一起入栈，同时保存当前值和栈内最小值：<code>[val, min]</code>，这样不管出栈时栈内最小元素如何变化，都可以直接返回 <code>min</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MinStack</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @param {number} val</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>val<span class="token punctuation">,</span> val<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> min <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			min <span class="token operator">=</span> val <span class="token operator">&lt;</span> min <span class="token operator">?</span> val <span class="token operator">:</span> min<span class="token punctuation">;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>val<span class="token punctuation">,</span> min<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">getMin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token doc-comment comment">/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,16),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"239",-1),q=n("td",{style:{"text-align":"left"}},"滑动窗口最大值",-1),M={style:{"text-align":"center"}},S={style:{"text-align":"left"}},j=n("code",null,"队列",-1),C=n("code",null,"数组",-1),E=n("code",null,"滑动窗口",-1),L=n("code",null,"2+",-1),N=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"716",-1),R=n("td",{style:{"text-align":"left"}},"最大栈 🔒",-1),Y=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},A=n("code",null,"栈",-1),D=n("code",null,"设计",-1),T=n("code",null,"链表",-1),F=n("code",null,"2+",-1),G=n("td",{style:{"text-align":"center"}},"🔴",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/max-stack",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/max-stack",target:"_blank",rel:"noopener noreferrer"};function P(Q,U){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),t(c,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/stack.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/design.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",v,[b,t(o)]),s(),n("a",g,[f,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,n("td",M,[t(e,{to:"/problem/0239.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",S,[t(e,{to:"/tag/queue.html"},{default:a(()=>[j]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),s(),t(e,{to:"/tag/sliding-window.html"},{default:a(()=>[E]),_:1}),s(),L]),N,n("td",V,[n("a",I,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[O,R,Y,n("td",z,[t(e,{to:"/tag/stack.html"},{default:a(()=>[A]),_:1}),s(),t(e,{to:"/tag/design.html"},{default:a(()=>[D]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[T]),_:1}),s(),F]),G,n("td",H,[n("a",J,[s("🀄️"),t(o)]),s(),n("a",K,[s("🔗"),t(o)])])])])])])}const X=l(k,[["render",P],["__file","0155.html.vue"]]);export{X as default};

import{_ as l,r as c,o as i,c as u,a as n,b as s,d as t,w as e,f as d,e as r}from"./app-Ob52y8QZ.js";const k={},m=n("h1",{id:"_225-用队列实现栈",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_225-用队列实现栈","aria-hidden":"true"},"#"),s(" 225. 用队列实现栈")],-1),h=n("code",null,"栈",-1),v=n("code",null,"设计",-1),b=n("code",null,"队列",-1),_={href:"https://leetcode.cn/problems/implement-stack-using-queues",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/implement-stack-using-queues",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (<code>push</code>, <code>top</code>, <code>pop</code>, and <code>empty</code>).</p><p>Implement the <code>MyStack</code> class:</p><ul><li><code>void push(int x)</code> Pushes element x to the top of the stack.</li><li><code>int pop()</code> Removes the element on the top of the stack and returns it.</li><li><code>int top()</code> Returns the element on the top of the stack.</li><li><code>boolean empty()</code> Returns <code>true</code> if the stack is empty, <code>false</code> otherwise.</li></ul><p><strong>Notes:</strong></p><ul><li>You must use <strong>only</strong> standard operations of a queue, which means that only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code> and <code>is empty</code> operations are valid.</li><li>Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue&#39;s standard operations.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyStack&quot;, &quot;push&quot;, &quot;push&quot;, &quot;top&quot;, &quot;pop&quot;, &quot;empty&quot;]</p><p>[[], [1], [2], [], [], []]</p><p><strong>Output</strong></p><p>[null, null, null, 2, 2, false]</p><p><strong>Explanation</strong></p><p>MyStack myStack = new MyStack();</p><p>myStack.push(1);</p><p>myStack.push(2);</p><p>myStack.top(); // return 2</p><p>myStack.pop(); // return 2</p><p>myStack.empty(); // return False</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= x &lt;= 9</code></li><li>At most <code>100</code> calls will be made to <code>push</code>, <code>pop</code>, <code>top</code>, and <code>empty</code>.</li><li>All the calls to <code>pop</code> and <code>top</code> are valid.</li></ul><p><strong>Follow-up:</strong> Can you implement the stack using only one queue?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>题目要求用队列实现一个栈的基本操作：<code>push(x)</code>、<code>pop()</code>、<code>top()</code>、<code>empty()</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>用一个数组来模拟栈，只能使用队列的基本操作，即： <code>push</code>, <code>shift</code>, <code>array[0]</code>, <code>array.length</code></li><li>每次入栈的时候，将队列内的元素前后颠倒。</li><li><code>push(x)</code> 的时间复杂度为 <code>O(n)</code></li><li><code>pop()</code>、<code>top()</code>、<code>empty()</code> 的时间复杂度为 <code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">MyStack</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @param {number} x</span>
	<span class="token comment">// @return {void}</span>
	<span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {number}</span>
	<span class="token function">top</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// @return {boolean}</span>
	<span class="token function">empty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>stack<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),q=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"232",-1),S=n("td",{style:{"text-align":"left"}},"用栈实现队列",-1),j={style:{"text-align":"center"}},E={style:{"text-align":"left"}},M=n("code",null,"栈",-1),C=n("code",null,"设计",-1),I=n("code",null,"队列",-1),L={style:{"text-align":"left"}},N={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/implement-queue-using-stacks",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/implement-queue-using-stacks",target:"_blank",rel:"noopener noreferrer"};function O(B,F){const p=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(a,{to:"/tag/stack.html"},{default:e(()=>[h]),_:1}),s(),t(a,{to:"/tag/design.html"},{default:e(()=>[v]),_:1}),s(),t(a,{to:"/tag/queue.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[y,t(o)]),s(),n("a",f,[g,t(o)])]),x,d(" prettier-ignore "),n("table",null,[q,n("tbody",null,[n("tr",null,[w,S,n("td",j,[t(a,{to:"/problem/0232.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",E,[t(a,{to:"/tag/stack.html"},{default:e(()=>[M]),_:1}),s(),t(a,{to:"/tag/design.html"},{default:e(()=>[C]),_:1}),s(),t(a,{to:"/tag/queue.html"},{default:e(()=>[I]),_:1})]),n("td",L,[t(p,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})]),n("td",N,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",V,[s("🔗"),t(o)])])])])])])}const A=l(k,[["render",O],["__file","0225.html.vue"]]);export{A as default};

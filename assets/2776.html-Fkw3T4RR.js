import{_ as p,r as o,o as l,c as i,a as n,b as s,d as a,w as u,e as t}from"./app-fEpXkbSw.js";const r={},k=n("h1",{id:"_2776-转换回调函数为-promise-函数-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2776-转换回调函数为-promise-函数-🔒","aria-hidden":"true"},"#"),s(" 2776. 转换回调函数为 Promise 函数 🔒")],-1),d={href:"https://leetcode.cn/problems/convert-callback-based-function-to-promise-based-function",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/convert-callback-based-function-to-promise-based-function",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=t(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that accepts another function <code>fn</code> and converts the callback- based function into a promise-based function.</p><p>The function <code>fn</code> takes a callback as its first argument, along with any additional arguments <code>args</code> passed as separate inputs.</p><p>The <code>promisify</code> function returns a new function that should return a promise. The promise should resolve with the argument passed as the first parameter of the callback when the callback is invoked without error, and reject with the error when the callback is called with an error as the second argument.</p><p>The following is an example of a function that could be passed into <code>promisify</code>.</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;a and b must be positive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">callback</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This is the equivalent code based on promises:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;a and b must be positive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Example 1:</strong></p>`,9),h=n("blockquote",null,[n("p",null,"Input:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function-variable function"},"fn"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callback"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"*"),s(" b "),n("span",{class:"token operator"},"*"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
args `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",{"resolved:6":""},"Output:"),n("p",null,"Explanation:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" asyncFunc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"promisify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"asyncFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("console"),n("span",{class:"token punctuation"},"."),s("log"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 6"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"fn is called with a callback as the first argument and args as the rest. The promise based version of fn resolves a value of 6 when called with (1, 2, 3).")],-1),g=n("p",null,[n("strong",null,"Example 2:")],-1),y=n("blockquote",null,[n("p",null,"Input:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function-variable function"},"fn"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callback"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"*"),s(" b "),n("span",{class:"token operator"},"*"),s(" c"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Promise Rejected'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

args `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",{"rejected:PromiseRejected":""},"Output:"),n("p",null,"Explanation:"),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" asyncFunc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"promisify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"asyncFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),s("console"),n("span",{class:"token punctuation"},"."),s("log"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "Promise Rejected"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"fn is called with a callback as the first argument and args as the rest. As the second argument, the callback accepts an error message, so when fn is called, the promise is rejected with a error message provided in the callback. Note that it did not matter what was passed as the first argument into the callback.")],-1),w=t(`<p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= args.length &lt;= 100</code></li><li><code>0 &lt;= args[i] &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数，接受另一个函数 <code>fn</code> ，并将基于回调函数的函数转换为基于 Promise 的函数。</p><p><code>promisify</code> 函数接受一个函数 <code>fn</code> ，<code>fn</code> 将回调函数作为其第一个参数，并且还可以接受其他额外的参数。</p><p><code>promisify</code> 返回一个新函数，新函数会返回一个 Promise 对象。当回调函数被成功调用时，新函数返回的 Promise 对象应该使用原始函数的结果进行解析；当回调函数被调用出现错误时，返回的 Promise 对象应该被拒绝并携带错误信息。最终返回的基于 Promise 的函数应该接受额外的参数作为输入。</p><p>以下是一个可以传递给 <code>promisify</code> 的函数示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">callback<span class="token punctuation">,</span> a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> err <span class="token operator">=</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;a and b must be positive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token function">callback</span><span class="token punctuation">(</span>a <span class="token operator">+</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是基于 Promise 的等效代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> b <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">throw</span> <span class="token function">Error</span><span class="token punctuation">(</span><span class="token string">&#39;a and b must be positive&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>示例 1：</strong></p>`,11),j=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function-variable function"},"fn"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callback"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"*"),s(" b "),n("span",{class:"token operator"},"*"),s(" c"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

args `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("strong",{"resolved:6":""},"输出：")]),n("p",null,[n("strong",null,"解释：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" asyncFunc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"promisify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"asyncFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),s("console"),n("span",{class:"token punctuation"},"."),s("log"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 6"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"fn 以回调函数作为第一个参数和 args 作为其余参数进行调用。当使用 (1, 2, 3) 调用时，基于 Promise 的 fn 将解析为值 6。")],-1),_=n("p",null,[n("strong",null,"示例 2：")],-1),x=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token function-variable function"},"fn"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("callback"),n("span",{class:"token punctuation"},","),s(" a"),n("span",{class:"token punctuation"},","),s(" b"),n("span",{class:"token punctuation"},","),s(" c")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),s("a "),n("span",{class:"token operator"},"*"),s(" b "),n("span",{class:"token operator"},"*"),s(" c"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'Promise Rejected'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`

args `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("strong",{"rejected:PromiseRejected":""},"输出：")]),n("p",null,[n("strong",null,"解释：")]),n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" asyncFunc "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"promisify"),n("span",{class:"token punctuation"},"("),s("fn"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token function"},"asyncFunc"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"5"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"6"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),s("console"),n("span",{class:"token punctuation"},"."),s("log"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},'// "Promise Rejected"'),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,"fn 以回调函数作为第一个参数和 args 作为其余参数进行调用。在回调函数的第二个参数中，接受一个错误消息，因此当调用 fn 时，Promise 被拒绝并携带回调函数中提供的错误消息。请注意，不管将什么作为回调函数的第一个参数传递都无关紧要。")],-1),P=t(`<p><strong>提示：</strong></p><ul><li><code>1 &lt;= args.length &lt;= 100</code></li><li><code>0 &lt;= args[i] &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>理解回调函数结构</strong>：</p><ul><li><code>fn</code> 接受回调函数 <code>callback</code> 作为第一个参数，其余参数作为执行 <code>fn</code> 的输入参数。</li><li>回调函数的形式为 <code>callback(result, error)</code>，如果 <code>error</code> 不为空，则表示函数执行失败，否则表示成功。</li></ul></li><li><p><strong>包装为 Promise</strong>：</p><ul><li>创建并返回一个新函数，该函数返回一个 Promise。</li><li>该函数使用 <code>fn</code> 进行调用，并传递一个自定义回调函数 <code>callback</code> 以及除 <code>callback</code> 以外的其他参数。</li></ul></li><li><p><strong>处理 Promise 解析和拒绝</strong>：</p><ul><li>自定义 <code>callback</code> 检查回调函数的第二个参数 <code>error</code>。</li><li>如果 <code>error</code> 存在，则拒绝 Promise；否则，将第一个参数 <code>result</code> 传递给 <code>resolve</code>，实现成功解析。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，创建和返回 Promise 的时间是常数级别。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅创建一个 Promise 对象和回调函数，空间需求恒定。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">&lt;</span>any<span class="token punctuation">&gt;</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">promisify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> <span class="token function-variable function">callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span> error</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token function">fn</span><span class="token punctuation">(</span>callback<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * const asyncFunc = promisify(callback =&gt; callback(42));
 * asyncFunc().then(console.log); // 42
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function E(F,T){const c=o("font"),e=o("ExternalLinkIcon");return l(),i("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:u(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",d,[m,a(e)]),s(),n("a",b,[v,a(e)])]),f,h,g,y,w,j,_,x,P])}const q=p(r,[["render",E],["__file","2776.html.vue"]]);export{q as default};

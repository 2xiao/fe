import{_ as i,r as l,o as d,c as p,a as t,b as n,d as e,w as a,f as r,e as u}from"./app--GvfAkAr.js";const m={},h=t("h1",{id:"_2676-节流-🔒",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2676-节流-🔒","aria-hidden":"true"},"#"),n(" 2676. 节流 🔒")],-1),g={href:"https://leetcode.cn/problems/throttle",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/throttle",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code> and a time in milliseconds <code>t</code>, return a <strong>throttled</strong> version of that function.</p><p>A <strong>throttled</strong> function is first called without delay and then, for a time interval of <code>t</code> milliseconds, can&#39;t be executed but should store the latest function arguments provided to call <code>fn</code> with them after the end of the delay.</p><p>For instance, <code>t = 50ms</code>, and the function was called at <code>30ms</code>, <code>40ms</code>, and <code>60ms</code>.</p><p>At <code>30ms</code>, without delay, the <strong>throttled</strong> function <code>fn</code> should be called with the arguments, and calling the <strong>throttled</strong> function <code>fn</code> should be blocked for the following <code>t</code> milliseconds.</p><p>At <code>40ms</code>, the function should just save arguments.</p><p>At <code>60ms</code>, arguments should overwrite currently stored arguments from the second call because the second and third calls are made before <code>80ms</code>. Once the delay has passed, the <strong>throttled</strong> function <code>fn</code> should be called with the latest arguments provided during the delay period, and it should also create another delay period of <code>80ms + t</code>.</p><figure><img src="https://fastly.jsdelivr.net/gh/doocs/leetcode@main/solution/2600-2699/2676.Throttle/images/screen-shot-2023-04-08-at-120313-pm.png" alt="Throttle Diagram" tabindex="0" loading="lazy"><figcaption>Throttle Diagram</figcaption></figure><p>The above diagram shows how throttle will transform events. Each rectangle represents 100ms and the throttle time is 400ms. Each color represents a different set of inputs.</p><p><strong>Example 1:</strong></p><blockquote><p><strong>Input:</strong> t = 100, calls = [{&quot;t&quot;:20,&quot;inputs&quot;:[1]}]</p><p><strong>Output:</strong> [{&quot;t&quot;:20,&quot;inputs&quot;:[1]}]</p><p><strong>Explanation:</strong> The 1st call is always called without delay</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p><strong>Input:</strong> t = 50, calls = [ {&quot;t&quot;:50,&quot;inputs&quot;:[1]}, {&quot;t&quot;:75,&quot;inputs&quot;:[2]} ]</p><p><strong>Output:</strong> [{&quot;t&quot;:50,&quot;inputs&quot;:[1]},{&quot;t&quot;:100,&quot;inputs&quot;:[2]}]</p><p><strong>Explanation:</strong></p><ul><li>The 1st is called a function with arguments (1) without delay.</li><li>The 2nd is called at 75ms, within the delay period because 50ms + 50ms = 100ms, so the next call can be reached at 100ms. Therefore, we save arguments from the 2nd call to use them at the callback of the 1st call.</li></ul></blockquote><p><strong>Example 3:</strong></p><blockquote><p><strong>Input:</strong> t = 70, calls = [ {&quot;t&quot;:50,&quot;inputs&quot;:[1]}, {&quot;t&quot;:75,&quot;inputs&quot;:[2]}, {&quot;t&quot;:90,&quot;inputs&quot;:[8]}, {&quot;t&quot;: 140, &quot;inputs&quot;:[5,7]}, {&quot;t&quot;: 300, &quot;inputs&quot;: [9,4]} ]</p><p><strong>Output:</strong> [{&quot;t&quot;:50,&quot;inputs&quot;:[1]},{&quot;t&quot;:120,&quot;inputs&quot;:[8]},{&quot;t&quot;:190,&quot;inputs&quot;:[5,7]},{&quot;t&quot;:300,&quot;inputs&quot;:[9,4]}]</p><p><strong>Explanation:</strong></p><ul><li>The 1st is called a function with arguments (1) without delay.</li><li>The 2nd is called at 75ms within the delay period because 50ms + 70ms = 120ms, so it should only save arguments.</li><li>The 3rd is also called within the delay period, and because we need just the latest function arguments, we overwrite previous ones. After the delay period, we do a callback at 120ms with saved arguments. That callback makes another delay period of 120ms + 70ms = 190ms so that the next function can be called at 190ms.</li><li>The 4th is called at 140ms in the delay period, so it should be called as a callback at 190ms. That will create another delay period of 190ms + 70ms = 260ms.</li><li>The 5th is called at 300ms, but it is after 260ms, so it should be called immediately and should create another delay period of 300ms + 70ms = 370ms.</li></ul></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>1 &lt;= calls.length &lt;= 10</code></li><li><code>0 &lt;= calls[i].t &lt;= 1000</code></li><li><code>0 &lt;= calls[i].inputs[j], calls[i].inputs.length &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个函数 <code>fn</code> 和一个以毫秒为单位的时间 <code>t</code> ，请你返回该函数的 <strong>节流</strong> 版本。</p><p><strong>节流</strong> 函数首先立即被调用，然后在 <code>t</code> 毫秒的时间间隔内不能再次执行，但应该存储最新的函数参数，以便在延迟结束后使用这些参数调用 <code>fn</code> 。</p><p>例如，<code>t = 50ms</code> ，并且函数在 <code>30ms</code> 、 <code>40ms</code> 和 <code>60ms</code> 时被调用。</p><p>在 <code>30ms</code>，节流函数 <code>fn</code> 会以这些函数调用，并且对节流函数<code>fn</code> 的调用在接下来的<code>t</code> 毫秒会被阻塞。</p><p>在 <code>40ms</code>，函数应当只是存储参数。</p><p>在 <code>60ms</code>，参数应该覆盖第二次调用中当前存储的参数，因为第二次和第三次调用是在 <code>80ms</code> 之前进行的。延迟结束后，应该使用延迟期间提供的最新参数来调用 <strong>节流</strong> 函数 <code>fn</code>，并且它还应该创建另一个 <code>80ms + t</code> 的延迟。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个 <code>throttle</code> 函数的核心思想是通过控制函数的执行频率，防止在短时间内频繁调用同一个函数。通过设置一个延迟时间 <code>t</code>，可以确保在某个时间窗口内，函数只会执行一次。如果在延迟期间再次调用函数，它会保存最新的参数，并在延迟结束后使用这些参数再次执行函数。</p><ol><li><p><strong>初始化变量</strong>：</p><ul><li><code>pending</code>: 用来标识当前是否有一个正在进行的延迟计时，如果为 <code>true</code>，意味着当前函数调用正在被节流，不允许立即再次调用。</li><li><code>nestArgs</code>: 用来存储最新的函数参数，当节流期间再次调用函数时，它会保存最新传递的参数。</li></ul></li><li><p><strong>立即执行</strong>：</p><ul><li>在没有延迟的情况下（<code>pending</code> 为 <code>false</code>），立即调用传递的函数 <code>fn(...args)</code>，并将 <code>pending</code> 设为 <code>true</code>，表示此时函数进入节流状态。</li><li>设置一个 <code>setTimeout</code>，确保在延迟 <code>t</code> 毫秒后，重置 <code>pending</code> 状态，以允许函数在延迟结束后再次执行。</li></ul></li><li><p><strong>延迟期间存储最新参数</strong>：</p><ul><li>当延迟时间内再次调用节流函数时，更新最新的参数到 <code>nestArgs</code>，确保最新的一次调用不会丢失。</li></ul></li><li><p><strong>延迟结束后执行最新参数</strong>：</p><ul><li>一旦延迟结束，检查是否存在存储的最新参数。如果存在，则再次递归调用节流函数，使用最新的参数进行调用。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次调用 <code>throttle</code> 函数的时间复杂度为 <code>O(1)</code>，因为它只是简单的检查计时器和存储参数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，主要用于存储最新参数 <code>lastArgs</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span> milliseconds
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">throttle</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> pending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
		nestArgs<span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">throttleFn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 更新最新的参数</span>
		nestArgs <span class="token operator">=</span> args<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pending<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 立即调用</span>
			<span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
			pending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			nestArgs <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
			<span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				pending <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
				<span class="token comment">// 在延迟结束后，使用最新参数递归调用节流函数</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>nestArgs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token function">throttleFn</span><span class="token punctuation">(</span><span class="token operator">...</span>nestArgs<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> throttleFn<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const throttled = throttle(console.log, 100);
 * throttled(&quot;log&quot;); // logged immediately.
 * throttled(&quot;log&quot;); // logged at t=100ms.
 */</span>

<span class="token doc-comment comment">/**
 * // 测试函数
 * function runTest() <span class="token punctuation">{</span>
 * 	const calls = [
 * 		<span class="token punctuation">{</span> t: 50, inputs: [1] <span class="token punctuation">}</span>,
 * 		<span class="token punctuation">{</span> t: 75, inputs: [2] <span class="token punctuation">}</span>,
 * 		<span class="token punctuation">{</span> t: 90, inputs: [8] <span class="token punctuation">}</span>,
 * 		<span class="token punctuation">{</span> t: 140, inputs: [5, 7] <span class="token punctuation">}</span>,
 * 		<span class="token punctuation">{</span> t: 300, inputs: [9, 4] <span class="token punctuation">}</span>
 * 	];
 *
 * 	const results = [];
 * 	const start = performance.now();
 * 	const throttledLog = throttle((...args) =&gt; <span class="token punctuation">{</span>
 * 		const time = performance.now();
 * 		results.push(<span class="token punctuation">{</span> t: Math.floor(time), inputs: args <span class="token punctuation">}</span>);
 * 		console.log(\`Executed at $<span class="token punctuation">{</span>time - start<span class="token punctuation">}</span>ms with arguments:\`, args);
 * 	<span class="token punctuation">}</span>, 70);
 *
 * 	calls.forEach((call) =&gt; <span class="token punctuation">{</span>
 * 		setTimeout(() =&gt; <span class="token punctuation">{</span>
 * 			throttledLog(...call.inputs);
 * 		<span class="token punctuation">}</span>, call.t);
 * 	<span class="token punctuation">}</span>);
 *
 * 	// 延迟300ms后打印结果
 * 	setTimeout(() =&gt; <span class="token punctuation">{</span>
 * 		console.log(&#39;Final Results:&#39;, results);
 * 	<span class="token punctuation">}</span>, 400);
 * <span class="token punctuation">}</span>
 * runTest();
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),_=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"2627",-1),y=t("td",{style:{"text-align":"left"}},"函数防抖",-1),x={style:{"text-align":"center"}},w=t("td",{style:{"text-align":"left"}},null,-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/debounce",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},"2636",-1),L=t("td",{style:{"text-align":"left"}},"Promise 对象池 🔒",-1),O={style:{"text-align":"center"}},C=t("td",{style:{"text-align":"left"}},null,-1),I=t("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},R=t("td",{style:{"text-align":"center"}},"2637",-1),D=t("td",{style:{"text-align":"left"}},"有时间限制的 Promise 对象",-1),M={style:{"text-align":"center"}},P=t("td",{style:{"text-align":"left"}},null,-1),z=t("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const c=l("font"),s=l("ExternalLinkIcon"),o=l("RouterLink");return d(),p("div",null,[h,t("p",null,[n("🟠 "),e(c,{color:"#ffb800"},{default:a(()=>[n("Medium")]),_:1}),n("  🔗 "),t("a",g,[v,e(s)]),n(),t("a",k,[b,e(s)])]),f,r(" prettier-ignore "),t("table",null,[_,t("tbody",null,[t("tr",null,[q,y,t("td",x,[e(o,{to:"/problem/2627.html"},{default:a(()=>[n("[✓]")]),_:1})]),w,T,t("td",A,[t("a",E,[n("🀄️"),e(s)]),n(),t("a",j,[n("🔗"),e(s)])])]),t("tr",null,[F,L,t("td",O,[e(o,{to:"/problem/2636.html"},{default:a(()=>[n("[✓]")]),_:1})]),C,I,t("td",N,[t("a",V,[n("🀄️"),e(s)]),n(),t("a",B,[n("🔗"),e(s)])])]),t("tr",null,[R,D,t("td",M,[e(o,{to:"/problem/2637.html"},{default:a(()=>[n("[✓]")]),_:1})]),P,z,t("td",G,[t("a",S,[n("🀄️"),e(s)]),n(),t("a",$,[n("🔗"),e(s)])])])])])])}const U=i(m,[["render",H],["__file","2676.html.vue"]]);export{U as default};

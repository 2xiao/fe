import{_ as c,r as l,o as r,c as p,a as e,b as n,d as t,w as o,f as d,e as u}from"./app-fEpXkbSw.js";const m={},h=e("h1",{id:"_2636-promise-对象池-🔒",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2636-promise-对象池-🔒","aria-hidden":"true"},"#"),n(" 2636. Promise 对象池 🔒")],-1),f={href:"https://leetcode.cn/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},v=e("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of asynchronous functions <code>functions</code> and a pool limit <code>n</code>, return an asynchronous function <code>promisePool</code>. It should return a promise that resolves when all the input functions resolve.</p><p>Pool limit is defined as the maximum number promises that can be pending at once. <code>promisePool</code> should begin execution of as many functions as possible and continue executing new functions when old promises resolve. <code>promisePool</code> should execute <code>functions[i]</code> then <code>functions[i + 1]</code> then <code>functions[i + 2]</code>, etc. When the last promise resolves, <code>promisePool</code> should also resolve.</p><p>For example, if <code>n = 1</code>, <code>promisePool</code> will execute one function at a time in series. However, if <code>n = 2</code>, it first executes two functions. When either of the two functions resolve, a 3rd function should be executed (if available), and so on until there are no functions left to execute.</p><p>You can assume all functions never reject. It is acceptable for <code>promisePool</code> to return a promise that resolves any value.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: functions = [</p><p>() =&gt; new Promise(res =&gt; setTimeout(res, 300)), () =&gt; new Promise(res =&gt; setTimeout(res, 400)), () =&gt; new Promise(res =&gt; setTimeout(res, 200)) ] n = 2</p><p>Output: [[300,400,500],500]</p><p>Explanation: Three functions are passed in. They sleep for 300ms, 400ms, and 200ms respectively. They resolve at 300ms, 400ms, and 500ms respectively. The returned promise resolves at 500ms.</p><ul><li>At t=0, the first 2 functions are executed. The pool size limit of 2 is reached.</li><li>At t=300, the 1st function resolves, and the 3rd function is executed. Pool size is 2.</li><li>At t=400, the 2nd function resolves. There is nothing left to execute. Pool size is 1.</li><li>At t=500, the 3rd function resolves. Pool size is zero so the returned promise also resolves.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: functions = [</p><p>() =&gt; new Promise(res =&gt; setTimeout(res, 300)), () =&gt; new Promise(res =&gt; setTimeout(res, 400)), () =&gt; new Promise(res =&gt; setTimeout(res, 200)) ] n = 5</p><p>Output: [[300,400,200],400]</p><p>Explanation: The three input promises resolve at 300ms, 400ms, and 200ms respectively. The returned promise resolves at 400ms.</p><ul><li>At t=0, all 3 functions are executed. The pool limit of 5 is never met.</li><li>At t=200, the 3rd function resolves. Pool size is 2.</li><li>At t=300, the 1st function resolved. Pool size is 1.</li><li>At t=400, the 2nd function resolves. Pool size is 0, so the returned promise also resolves.</li></ul></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: functions = [</p><p>() =&gt; new Promise(res =&gt; setTimeout(res, 300)), () =&gt; new Promise(res =&gt; setTimeout(res, 400)), () =&gt; new Promise(res =&gt; setTimeout(res, 200)) ] n = 1</p><p>Output: [[300,700,900],900]</p><p>Explanation: The three input promises resolve at 300ms, 700ms, and 900ms respectively. The returned promise resolves at 900ms.</p><ul><li>At t=0, the 1st function is executed. Pool size is 1.</li><li>At t=300, the 1st function resolves and the 2nd function is executed. Pool size is 1.</li><li>At t=700, the 2nd function resolves and the 3rd function is executed. Pool size is 1.</li><li>At t=900, the 3rd function resolves. Pool size is 0 so the returned promise resolves.</li></ul></blockquote><p>Constraints:</p><p><code>0 &lt;= functions.length &lt;= 10</code><code>1 &lt;= n &lt;= 10</code></p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个异步函数 <code>promisePool</code> ，它接收一个异步函数数组 <code>functions</code> 和 <strong>池限制</strong> <code>n</code>。它应该返回一个 promise 对象，当所有输入函数都执行完毕后，promise 对象就执行完毕。</p><p><strong>池限制</strong> 定义是一次可以挂起的最多 promise 对象的数量。<code>promisePool</code> 应该开始执行尽可能多的函数，并在旧的 promise 执行完毕后继续执行新函数。<code>promisePool</code> 应该先执行 <code>functions[i]</code>，再执行 <code>functions[i + 1]</code>，然后执行 <code>functions[i + 2]</code>，等等。当最后一个 promise 执行完毕时，<code>promisePool</code> 也应该执行完毕。</p><p>例如，如果 <code>n = 1</code> , <code>promisePool</code> 在序列中每次执行一个函数。然而，如果 <code>n = 2</code> ，它首先执行两个函数。当两个函数中的任何一个执行完毕后，再执行第三个函数(如果它是可用的)，依此类推，直到没有函数要执行为止。</p><p>你可以假设所有的 <code>functions</code> 都不会被拒绝。对于 <code>promisePool</code> 来说，返回一个可以解析任何值的 promise 都是可以接受的。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>池限制</strong>的核心是控制并发数量，即同时只能有最多 <code>n</code> 个异步任务在执行，需要在一个任务执行完后，才能启动新的任务。</p><ol><li><p>定义一个调度器函数<code>executeNext</code>，它会递归地调用自身以确保所有任务按顺序执行。每次执行一个函数后，会继续执行下一个函数，直到函数数组为空。</p></li><li><p>创建并发池，使用 <code>Array(n).fill(null)</code> 创建一个长度为 <code>n</code> 的数组，<code>map</code> 方法用来调用 <code>executeNext</code>，即启动 <code>n</code> 个并发任务。</p></li><li><p><code>Promise.all</code> 会等待所有并发任务完成，确保 <code>promisePool</code> 函数在所有任务都执行完后才 resolve。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(m)</code>，其中 <code>m</code> 是 <code>functions</code> 的长度。每个任务的执行时间取决于各自的执行时间，总共会执行 <code>m</code> 个任务。</li><li><strong>空间复杂度</strong>: <code>O(n)</code>，因为最多会同时执行 <code>n</code> 个任务。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">functions</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">promisePool</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">functions<span class="token punctuation">,</span> n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">executeNext</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>functions<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span> <span class="token comment">// 所有函数都执行完毕</span>
		<span class="token keyword">const</span> fn <span class="token operator">=</span> functions<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 取出下一个要执行的函数</span>
		<span class="token keyword">await</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 执行函数并等待其完成</span>
		<span class="token keyword">await</span> <span class="token function">executeNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归调用，处理下一个任务</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 创建 n 个并发任务，开始执行</span>
	<span class="token keyword">const</span> pool <span class="token operator">=</span> <span class="token function">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>executeNext<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 等待所有并发任务都完成</span>
	<span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span>pool<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Example usage:
 * const sleep = (time) =&gt; new Promise(resolve =&gt; setTimeout(resolve, time));
 *
 * promisePool([() =&gt; sleep(500), () =&gt; sleep(400), () =&gt; sleep(300)], 2)
 *   .then(() =&gt; console.log(&#39;All functions done&#39;));
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),b=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),x=e("td",{style:{"text-align":"center"}},"2621",-1),y=e("td",{style:{"text-align":"left"}},"睡眠函数",-1),w={style:{"text-align":"center"}},P=e("td",{style:{"text-align":"left"}},null,-1),T=e("td",{style:{"text-align":"center"}},"🟢",-1),A={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/sleep",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/sleep",target:"_blank",rel:"noopener noreferrer"},E=e("td",{style:{"text-align":"center"}},"2622",-1),I=e("td",{style:{"text-align":"left"}},"有时间限制的缓存",-1),q={style:{"text-align":"center"}},C=e("td",{style:{"text-align":"left"}},null,-1),L=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"2637",-1),F=e("td",{style:{"text-align":"left"}},"有时间限制的 Promise 对象",-1),R={style:{"text-align":"center"}},W=e("td",{style:{"text-align":"left"}},null,-1),G=e("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},Y=e("td",{style:{"text-align":"center"}},"2676",-1),D=e("td",{style:{"text-align":"left"}},"节流 🔒",-1),J={style:{"text-align":"center"}},K=e("td",{style:{"text-align":"left"}},null,-1),Q=e("td",{style:{"text-align":"center"}},"🟠",-1),U={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/throttle",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/throttle",target:"_blank",rel:"noopener noreferrer"};function $(ee,ne){const i=l("font"),s=l("ExternalLinkIcon"),a=l("RouterLink");return r(),p("div",null,[h,e("p",null,[n("🟠 "),t(i,{color:"#ffb800"},{default:o(()=>[n("Medium")]),_:1}),n("  🔗 "),e("a",f,[k,t(s)]),n(),e("a",_,[v,t(s)])]),g,d(" prettier-ignore "),e("table",null,[b,e("tbody",null,[e("tr",null,[x,y,e("td",w,[t(a,{to:"/problem/2621.html"},{default:o(()=>[n("[✓]")]),_:1})]),P,T,e("td",A,[e("a",z,[n("🀄️"),t(s)]),n(),e("a",N,[n("🔗"),t(s)])])]),e("tr",null,[E,I,e("td",q,[t(a,{to:"/problem/2622.html"},{default:o(()=>[n("[✓]")]),_:1})]),C,L,e("td",O,[e("a",V,[n("🀄️"),t(s)]),n(),e("a",j,[n("🔗"),t(s)])])]),e("tr",null,[B,F,e("td",R,[t(a,{to:"/problem/2637.html"},{default:o(()=>[n("[✓]")]),_:1})]),W,G,e("td",H,[e("a",M,[n("🀄️"),t(s)]),n(),e("a",S,[n("🔗"),t(s)])])]),e("tr",null,[Y,D,e("td",J,[t(a,{to:"/problem/2676.html"},{default:o(()=>[n("[✓]")]),_:1})]),K,Q,e("td",U,[e("a",X,[n("🀄️"),t(s)]),n(),e("a",Z,[n("🔗"),t(s)])])])])])])}const se=c(m,[["render",$],["__file","2636.html.vue"]]);export{se as default};

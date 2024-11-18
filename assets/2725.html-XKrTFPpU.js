import{_ as o,r as l,o as i,c as p,a as n,b as e,d as s,w as u,e as t}from"./app-Ob52y8QZ.js";const d={},r=n("h1",{id:"_2725-间隔取消",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2725-间隔取消","aria-hidden":"true"},"#"),e(" 2725. 间隔取消")],-1),m={href:"https://leetcode.cn/problems/interval-cancellation",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/interval-cancellation",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),b=t('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code>, an array of arguments <code>args</code>, and an interval time <code>t</code>, return a cancel function <code>cancelFn</code>.</p><p>After a delay of <code>cancelTimeMs</code>, the returned cancel function <code>cancelFn</code> will be invoked.</p><blockquote><p>setTimeout(cancelFn, cancelTimeMs)</p></blockquote><p>The function <code>fn</code> should be called with <code>args</code> immediately and then called again every <code>t</code> milliseconds until <code>cancelFn</code> is called at <code>cancelTimeMs</code> ms.</p><p><strong>Example 1:</strong></p>',6),h=n("blockquote",null,[n("p",null,"Input: fn = (x) => x * 2, args = [4], t = 35"),n("p",null,"Output:"),n("p",null,"["),n("p",null,'{"time": 0, "returned": 8},'),n("p",null,'{"time": 35, "returned": 8},'),n("p",null,'{"time": 70, "returned": 8},'),n("p",null,'{"time": 105, "returned": 8},'),n("p",null,'{"time": 140, "returned": 8},'),n("p",{"time:175,returned:8":""}),n("p",null,"]"),n("p",null,"Explanation:"),n("p",null,"const cancelTimeMs = 190;"),n("p",null,"const cancelFn = cancellable((x) => x * 2, [4], 35);"),n("p",null,"setTimeout(cancelFn, cancelTimeMs);"),n("p",null,"Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled."),n("p",null,"1st fn call is at 0ms. fn(4) returns 8."),n("p",null,"2nd fn call is at 35ms. fn(4) returns 8."),n("p",null,"3rd fn call is at 70ms. fn(4) returns 8."),n("p",null,"4th fn call is at 105ms. fn(4) returns 8."),n("p",null,"5th fn call is at 140ms. fn(4) returns 8."),n("p",null,"6th fn call is at 175ms. fn(4) returns 8."),n("p",null,"Cancelled at 190ms")],-1),g=n("p",null,[n("strong",null,"Example 2:")],-1),x=n("blockquote",null,[n("p",null,"Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30"),n("p",null,"Output:"),n("p",null,"["),n("p",null,'{"time": 0, "returned": 10},'),n("p",null,'{"time": 30, "returned": 10},'),n("p",null,'{"time": 60, "returned": 10},'),n("p",null,'{"time": 90, "returned": 10},'),n("p",null,'{"time": 120, "returned": 10},'),n("p",{"time:150,returned:10":""}),n("p",null,"]"),n("p",null,"Explanation:"),n("p",null,"const cancelTimeMs = 165;"),n("p",null,"const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30)"),n("p",null,"setTimeout(cancelFn, cancelTimeMs)"),n("p",null,"Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled."),n("p",null,"1st fn call is at 0ms"),n("p",null,"2nd fn call is at 30ms"),n("p",null,"3rd fn call is at 60ms"),n("p",null,"4th fn call is at 90ms"),n("p",null,"5th fn call is at 120ms"),n("p",null,"6th fn call is at 150ms"),n("p",null,"Cancelled at 165ms")],-1),_=n("p",null,[n("strong",null,"Example 3:")],-1),q=n("blockquote",null,[n("p",null,"Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50"),n("p",null,"Output:"),n("p",null,"["),n("p",null,'{"time": 0, "returned": 9},'),n("p",null,'{"time": 50, "returned": 9},'),n("p",null,'{"time": 100, "returned": 9},'),n("p",{"time:150,returned:9":""}),n("p",null,"]"),n("p",null,"Explanation:"),n("p",null,"const cancelTimeMs = 180;"),n("p",null,"const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)"),n("p",null,"setTimeout(cancelFn, cancelTimeMs)"),n("p",null,"Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled."),n("p",null,"1st fn call is at 0ms"),n("p",null,"2nd fn call is at 50ms"),n("p",null,"3rd fn call is at 100ms"),n("p",null,"4th fn call is at 150ms"),n("p",null,"Cancelled at 180ms")],-1),T=t(`<p><strong>Constraints:</strong></p><ul><li><code>fn</code> is a function</li><li><code>args</code> is a valid JSON array</li><li><code>1 &lt;= args.length &lt;= 10</code></li><li><code>30 &lt;= t &lt;= 100</code></li><li><code>10 &lt;= cancelTimeMs &lt;= 500</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现给定一个函数 <code>fn</code>，一个参数数组 <code>args</code> 和一个时间间隔 <code>t</code>，返回一个取消函数 <code>cancelFn</code>。</p><p>在经过 <code>cancelTimeMs</code> 毫秒的延迟后，将调用返回的取消函数 <code>cancelFn</code>。</p><blockquote><p>setTimeout(cancelFn, cancelTimeMs)</p></blockquote><p>函数 <code>fn</code> 应立即使用参数 <code>args</code> 调用，然后每隔 <code>t</code> 毫秒调用一次，直到在 <code>cancelTimeMs</code> 毫秒时调用 <code>cancelFn</code>。</p><p><strong>提示：</strong></p><ul><li><code>fn</code> 是一个函数</li><li><code>args</code> 是一个有效的 JSON 数组</li><li><code>1 &lt;= args.length &lt;= 10</code></li><li><code>30 &lt;= t &lt;= 100</code></li><li><code>10 &lt;= cancelT &lt;= 500</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>题目要求函数 <code>fn</code> 应立即使用参数 <code>args</code> 调用，然后每隔 <code>t</code> 毫秒调用一次，所以立即手动执行 <code>fn</code> 一次。</li><li>使用 <code>setInterval</code> 来启动定时器，每隔 <code>delay</code> 毫秒会执行一次传入的函数 <code>fn</code>，第一次执行发生在 <code>delay</code> 毫秒之后。</li><li><code>setInterval</code> 返回一个 <code>intervalId</code>，这是唯一标识这个定时器的值，可以通过调用 <code>clearInterval(intervalId)</code> 来取消定时器。</li><li>返回取消函数，这个取消函数在被调用时，会停止定时器的继续执行。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为 <code>setInterval</code> 和 <code>clearInterval</code> 都是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只存储了 <code>intervalId</code> 作为唯一的定时器标识。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cancellable</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> args<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 立即调用一次 fn</span>
	<span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用 setInterval 启动定时器，每隔 t 毫秒执行一次 fn</span>
	<span class="token keyword">const</span> intervalId <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回一个取消函数，可以通过调用该函数来清除定时器</span>
	<span class="token keyword">const</span> <span class="token function-variable function">cancelFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">clearInterval</span><span class="token punctuation">(</span>intervalId<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> cancelFn<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 *  const result = [];
 *
 *  const fn = (x) =&gt; x * 2;
 *  const args = [4], t = 35, cancelTimeMs = 190;
 *
 *  const start = performance.now();
 *
 *  const log = (...argsArr) =&gt; <span class="token punctuation">{</span>
 *      const diff = Math.floor(performance.now() - start);
 *      result.push(<span class="token punctuation">{</span>&quot;time&quot;: diff, &quot;returned&quot;: fn(...argsArr)<span class="token punctuation">}</span>);
 *  <span class="token punctuation">}</span>
 *
 *  const cancel = cancellable(log, args, t);
 *
 *  setTimeout(cancel, cancelTimeMs);
 *
 *  setTimeout(() =&gt; <span class="token punctuation">{</span>
 *      console.log(result);
 *      // [
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:0,&quot;returned&quot;:8<span class="token punctuation">}</span>,
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:35,&quot;returned&quot;:8<span class="token punctuation">}</span>,
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:70,&quot;returned&quot;:8<span class="token punctuation">}</span>,
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:105,&quot;returned&quot;:8<span class="token punctuation">}</span>,
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:140,&quot;returned&quot;:8<span class="token punctuation">}</span>,
 *      //     <span class="token punctuation">{</span>&quot;time&quot;:175,&quot;returned&quot;:8<span class="token punctuation">}</span>
 *      // ]
 *  <span class="token punctuation">}</span>, cancelTimeMs + t + 15)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15);function y(F,I){const c=l("font"),a=l("ExternalLinkIcon");return i(),p("div",null,[r,n("p",null,[e("🟢 "),s(c,{color:"#15bd66"},{default:u(()=>[e("Easy")]),_:1}),e("  🔗 "),n("a",m,[v,s(a)]),e(),n("a",k,[f,s(a)])]),b,h,g,x,_,q,T])}const w=o(d,[["render",y],["__file","2725.html.vue"]]);export{w as default};

import{_ as p,r as l,o as r,c as u,a as n,b as t,d as e,w as a,f as d,e as c}from"./app--GvfAkAr.js";const m={},h=n("h1",{id:"_2637-有时间限制的-promise-对象",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2637-有时间限制的-promise-对象","aria-hidden":"true"},"#"),t(" 2637. 有时间限制的 Promise 对象")],-1),_={href:"https://leetcode.cn/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},k=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"LeetCode",-1),v=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an asynchronous function <code>fn</code> and a time <code>t</code> in milliseconds, return a new <strong>time limited</strong> version of the input function. <code>fn</code> takes arguments provided to the **time limited **function.</p><p>The <strong>time limited</strong> function should follow these rules:</p><ul><li>If the <code>fn</code> completes within the time limit of <code>t</code> milliseconds, the <strong>time limited</strong> function should resolve with the result.</li><li>If the execution of the <code>fn</code> exceeds the time limit, the <strong>time limited</strong> function should reject with the string <code>&quot;Time Limit Exceeded&quot;</code>.</li></ul><p><strong>Example 1:</strong></p>',5),b=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (n) => {"),n("p",null,"await new Promise(res => setTimeout(res, 100));"),n("p",null,"return n * n;"),n("p",null,"}"),n("p",null,"inputs = [5]"),n("p",null,"t = 50"),n("p",{"rejected:TimeLimitExceeded,time:50":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"const limited = timeLimit(fn, t)"),n("p",null,"const start = performance.now()"),n("p",null,"let result;"),n("p",null,"try {"),n("p",null,"const res = await limited(...inputs)"),n("p",null,'result = {"resolved": res, "time": Math.floor(performance.now() - start)};'),n("p",null,"} catch (err) {"),n("p",null,'result = {"rejected": err, "time": Math.floor(performance.now() - start)};'),n("p",null,"}"),n("p",null,"console.log(result) // Output"),n("p",null,"The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached.")],-1),x=n("p",null,[n("strong",null,"Example 2:")],-1),y=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (n) => {"),n("p",null,"await new Promise(res => setTimeout(res, 100));"),n("p",null,"return n * n;"),n("p",null,"}"),n("p",null,"inputs = [5]"),n("p",null,"t = 150"),n("p",{"resolved:25,time:100":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),T=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async (a, b) => {"),n("p",null,"await new Promise(res => setTimeout(res, 120));"),n("p",null,"return a + b;"),n("p",null,"}"),n("p",null,"inputs = [5,10]"),n("p",null,"t = 150"),n("p",{"resolved:15,time:120":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.")],-1),E=n("p",null,[n("strong",null,"Example 4:")],-1),L=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"fn = async () => {"),n("p",null,'throw "Error";'),n("p",null,"}"),n("p",null,"inputs = []"),n("p",null,"t = 1000"),n("p",{"rejected:Error,time:0":""},"Output:"),n("p",null,"Explanation:"),n("p",null,"The function immediately throws an error.")],-1),q=c(`<p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= inputs.length &lt;= 10</code></li><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>fn</code> returns a promise</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，它接受一个异步函数 <code>fn</code> 和一个以毫秒为单位的时间 <code>t</code>。它应根据限时函数返回一个有 <strong>限时</strong> 效果的函数。函数 <code>fn</code> 接受提供给 <strong>限时</strong> 函数的参数。</p><p><strong>限时</strong> 函数应遵循以下规则：</p><ul><li>如果 <code>fn</code> 在 <code>t</code> 毫秒的时间限制内完成，<strong>限时</strong> 函数应返回结果。</li><li>如果 <code>fn</code> 的执行超过时间限制，<strong>限时</strong> 函数应拒绝并返回字符串 <code>&quot;Time Limit Exceeded&quot;</code> 。</li></ul><p><strong>提示：</strong></p><ul><li><code>0 &lt;= inputs.length &lt;= 10</code></li><li><code>0 &lt;= t &lt;= 1000</code></li><li><code>fn</code> 返回一个 Promise 对象</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>在 <code>timeLimit</code> 中返回了一个新的异步函数，并通过 <code>Promise</code> 来控制结果的返回。</li><li>设置一个定时器 <code>setTimeout</code> 用来判断 <code>fn</code> 是否超时，当超过给定的时间 <code>t</code> 时，定时器将触发，拒绝 Promise 并返回 <code>&quot;Time Limit Exceeded&quot;</code>。</li><li>执行异步函数 <code>fn</code>，如果 <code>fn</code> 在规定时间内完成，无论是成功还是失败，都清理定时器以确保其不会再次执行。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：取决于传入的 <code>fn</code> 的复杂度，假设为 <code>O(fn)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅有定时器和 Promise 相关的内存开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">t</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">timeLimit</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> t</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// 超时后拒绝 Promise</span>
			<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">&#39;Time Limit Exceeded&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> t<span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 执行异步函数 fn</span>
			<span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 成功时清除定时器</span>
					<span class="token function">resolve</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span>
				<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
					<span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 失败时清除定时器</span>
					<span class="token function">reject</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const limited = timeLimit((t) =&gt; new Promise(res =&gt; setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // &quot;Time Limit Exceeded&quot; at t=100ms
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,15),P=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"2621",-1),I=n("td",{style:{"text-align":"left"}},"睡眠函数",-1),O={style:{"text-align":"center"}},C=n("td",{style:{"text-align":"left"}},null,-1),N=n("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/sleep",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/sleep",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2622",-1),R=n("td",{style:{"text-align":"left"}},"有时间限制的缓存",-1),G={style:{"text-align":"center"}},H=n("td",{style:{"text-align":"left"}},null,-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},J=n("td",{style:{"text-align":"center"}},"2627",-1),K=n("td",{style:{"text-align":"left"}},"函数防抖",-1),Q={style:{"text-align":"center"}},U=n("td",{style:{"text-align":"left"}},null,-1),W=n("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/debounce",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"2636",-1),nn=n("td",{style:{"text-align":"left"}},"Promise 对象池 🔒",-1),tn={style:{"text-align":"center"}},en=n("td",{style:{"text-align":"left"}},null,-1),sn=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},cn=n("td",{style:{"text-align":"center"}},"2676",-1),pn=n("td",{style:{"text-align":"left"}},"节流 🔒",-1),rn={style:{"text-align":"center"}},un=n("td",{style:{"text-align":"left"}},null,-1),dn=n("td",{style:{"text-align":"center"}},"🟠",-1),mn={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/throttle",target:"_blank",rel:"noopener noreferrer"},_n={href:"https://leetcode.com/problems/throttle",target:"_blank",rel:"noopener noreferrer"};function kn(fn,gn){const i=l("font"),s=l("ExternalLinkIcon"),o=l("RouterLink");return r(),u("div",null,[h,n("p",null,[t("🟠 "),e(i,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",_,[k,e(s)]),t(),n("a",f,[g,e(s)])]),v,b,x,y,w,T,E,L,q,d(" prettier-ignore "),n("table",null,[P,n("tbody",null,[n("tr",null,[j,I,n("td",O,[e(o,{to:"/problem/2621.html"},{default:a(()=>[t("[✓]")]),_:1})]),C,N,n("td",V,[n("a",B,[t("🀄️"),e(s)]),t(),n("a",M,[t("🔗"),e(s)])])]),n("tr",null,[F,R,n("td",G,[e(o,{to:"/problem/2622.html"},{default:a(()=>[t("[✓]")]),_:1})]),H,S,n("td",z,[n("a",A,[t("🀄️"),e(s)]),t(),n("a",D,[t("🔗"),e(s)])])]),n("tr",null,[J,K,n("td",Q,[e(o,{to:"/problem/2627.html"},{default:a(()=>[t("[✓]")]),_:1})]),U,W,n("td",X,[n("a",Y,[t("🀄️"),e(s)]),t(),n("a",Z,[t("🔗"),e(s)])])]),n("tr",null,[$,nn,n("td",tn,[e(o,{to:"/problem/2636.html"},{default:a(()=>[t("[✓]")]),_:1})]),en,sn,n("td",an,[n("a",on,[t("🀄️"),e(s)]),t(),n("a",ln,[t("🔗"),e(s)])])]),n("tr",null,[cn,pn,n("td",rn,[e(o,{to:"/problem/2676.html"},{default:a(()=>[t("[✓]")]),_:1})]),un,dn,n("td",mn,[n("a",hn,[t("🀄️"),e(s)]),t(),n("a",_n,[t("🔗"),e(s)])])])])])])}const bn=p(m,[["render",kn],["__file","2637.html.vue"]]);export{bn as default};

import{_ as i,r as l,o as p,c as r,a as e,b as t,d as n,w as a,f as d,e as u}from"./app-MkGfDfkx.js";const m={},h=e("h1",{id:"_2623-记忆函数",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2623-记忆函数","aria-hidden":"true"},"#"),t(" 2623. 记忆函数")],-1),f={href:"https://leetcode.cn/problems/memoize",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/memoize",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a function <code>fn</code>, return a <strong>memoized</strong> version of that function.</p><p>A **memoized **function is a function that will never be called twice with the same inputs. Instead it will return a cached value.</p><p>You can assume there are <strong>3</strong> possible input functions: <code>sum</code>, <code>fib</code>, and <code>factorial</code>.</p><ul><li><code>sum</code> accepts two integers <code>a</code> and <code>b</code> and returns <code>a + b</code>. Assume that if a value has already been cached for the arguments <code>(b, a)</code> where <code>a != b</code>, it cannot be used for the arguments <code>(a, b)</code>. For example, if the arguments are <code>(3, 2)</code> and <code>(2, 3)</code>, two separate calls should be made.</li><li><code>fib</code> accepts a single integer <code>n</code> and returns <code>1</code> if <code>n &lt;= 1</code> or <code>fib(n - 1) + fib(n - 2)</code> otherwise.</li><li><code>factorial</code> accepts a single integer <code>n</code> and returns <code>1</code> if <code>n &lt;= 1</code> or <code>factorial(n - 1) * n</code> otherwise.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>fnName = &quot;sum&quot;</p><p>actions = [&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]</p><p>values = [[2,2],[2,2],[],[1,2],[]]</p><p>Output: [4,4,1,3,2]</p><p>Explanation:</p><p>const sum = (a, b) =&gt; a + b;</p><p>const memoizedSum = memoize(sum);</p><p>memoizedSum(2, 2); // &quot;call&quot; - returns 4. sum() was called as (2, 2) was not seen before.</p><p>memoizedSum(2, 2); // &quot;call&quot; - returns 4. However sum() was not called because the same inputs were seen before.</p><p>// &quot;getCallCount&quot; - total call count: 1</p><p>memoizedSum(1, 2); // &quot;call&quot; - returns 3. sum() was called as (1, 2) was not seen before.</p><p>// &quot;getCallCount&quot; - total call count: 2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: fnName = &quot;factorial&quot;</p><p>actions = [&quot;call&quot;,&quot;call&quot;,&quot;call&quot;,&quot;getCallCount&quot;,&quot;call&quot;,&quot;getCallCount&quot;]</p><p>values = [[2],[3],[2],[],[3],[]]</p><p>Output: [2,6,2,2,6,2]</p><p>Explanation:</p><p>const factorial = (n) =&gt; (n &lt;= 1) ? 1 : (n * factorial(n - 1));</p><p>const memoFactorial = memoize(factorial);</p><p>memoFactorial(2); // &quot;call&quot; - returns 2.</p><p>memoFactorial(3); // &quot;call&quot; - returns 6.</p><p>memoFactorial(2); // &quot;call&quot; - returns 2. However factorial was not called because 2 was seen before.</p><p>// &quot;getCallCount&quot; - total call count: 2</p><p>memoFactorial(3); // &quot;call&quot; - returns 6. However factorial was not called because 3 was seen before.</p><p>// &quot;getCallCount&quot; - total call count: 2</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: fnName = &quot;fib&quot;</p><p>actions = [&quot;call&quot;,&quot;getCallCount&quot;]</p><p>values = [[5],[]]</p><p>Output: [8,1]</p><p>Explanation: fib(5) = 8 // &quot;call&quot;</p><p>// &quot;getCallCount&quot; - total call count: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= a, b &lt;= 10^5</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>0 &lt;= actions.length &lt;= 10^5</code></li><li><code>actions.length === values.length</code></li><li><code>actions[i]</code> is one of &quot;call&quot; and &quot;getCallCount&quot;</li><li><code>fnName</code> is one of &quot;sum&quot;, &quot;factorial&quot; and &quot;fib&quot;</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数 <code>fn</code>，它接收另一个函数作为输入，并返回该函数的 <strong>记忆化</strong> 后的结果。</p><p><strong>记忆函数</strong> 是一个对于相同的输入永远不会被调用两次的函数。相反，它将返回一个缓存值。</p><p>你可以假设有 <strong>3</strong> 个可能的输入函数：<code>sum</code> 、<code>fib</code> 和 <code>factorial</code> 。</p><ul><li><code>sum</code> 接收两个整型参数 <code>a</code> 和 <code>b</code> ，并返回 <code>a + b</code> 。假设如果参数 <code>(b, a)</code> 已经缓存了值，其中 <code>a != b</code>，它不能用于参数 <code>(a, b)</code>。例如，如果参数是 <code>(3, 2)</code> 和 <code>(2, 3)</code>，则应进行两个单独的调用。</li><li><code>fib</code> 接收一个整型参数 <code>n</code> ，如果 <code>n &lt;= 1</code> 则返回 <code>1</code>，否则返回 <code>fib (n - 1) + fib (n - 2)</code>。</li><li><code>factorial</code> 接收一个整型参数 <code>n</code> ，如果 <code>n &lt;= 1</code> 则返回 <code>1</code> ，否则返回 <code>factorial(n - 1) * n</code> 。</li></ul><p><strong>提示：</strong></p><ul><li><code>0 &lt;= a, b &lt;= 10^5</code></li><li><code>1 &lt;= n &lt;= 10</code></li><li><code>actions.length === values.length</code></li><li><code>actions[i]</code> 为 &quot;call&quot; 和 &quot;getCallCount&quot; 中的一个</li><li><code>fnName </code>为 &quot;sum&quot;, &quot;factorial&quot; 和 &quot;fib&quot; 中的一个</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>记忆化 (Memoization) 是一种优化技术，用于加速函数的执行，特别是对于有相同输入时可以重用结果的函数。其核心思想是使用一个缓存结构来存储之前的计算结果，以避免对相同的输入进行多次计算。</p><ol><li>创建一个哈希表 <code>cache</code> 来存储已经计算过的结果，键是输入参数，值是对应的输出结果。</li><li>将输入参数通过 JSON 序列化转换为字符串，用作缓存的键 <code>key = JSON.stringify(args)</code>。</li><li>每次调用函数时，检查该输入参数是否已经存在于缓存中： <ul><li>如果存在，直接返回缓存中的结果。</li><li>如果不存在，计算该输入的结果，并将其存入缓存以供下次使用。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，每次调用时都会在缓存中进行查找（<code>Map</code> 的查找时间复杂度为 <code>O(1)</code>）。如果缓存命中，直接返回；如果没有命中，进行一次计算并存储结果。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，取决于不同输入的数量。缓存会根据函数的输入参数存储结果，因此空间消耗随调用的不同输入增多。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">memoize</span><span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 创建缓存</span>

	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将参数序列化作为键</span>

		<span class="token keyword">if</span> <span class="token punctuation">(</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 如果缓存存在结果，直接返回</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算结果</span>
		cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 存入缓存</span>
		<span class="token keyword">return</span> result<span class="token punctuation">;</span> <span class="token comment">// 返回计算结果</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) <span class="token punctuation">{</span>
 *	 callCount += 1;
 *   return a + b;
 * <span class="token punctuation">}</span>)
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),q=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),v=e("td",{style:{"text-align":"center"}},"2620",-1),y=e("td",{style:{"text-align":"left"}},"计数器",-1),x={style:{"text-align":"center"}},w=e("td",{style:{"text-align":"left"}},null,-1),C=e("td",{style:{"text-align":"center"}},"🟢",-1),z={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/counter",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/counter",target:"_blank",rel:"noopener noreferrer"},E=e("td",{style:{"text-align":"center"}},"2629",-1),O=e("td",{style:{"text-align":"left"}},"复合函数",-1),I={style:{"text-align":"center"}},S=e("td",{style:{"text-align":"left"}},null,-1),L=e("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/function-composition",target:"_blank",rel:"noopener noreferrer"},B=e("td",{style:{"text-align":"center"}},"2630",-1),H=e("td",{style:{"text-align":"left"}},"记忆函数 II",-1),J={style:{"text-align":"center"}},A=e("td",{style:{"text-align":"left"}},null,-1),R=e("td",{style:{"text-align":"center"}},"🔴",-1),G={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/memoize-ii",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/memoize-ii",target:"_blank",rel:"noopener noreferrer"},D=e("td",{style:{"text-align":"center"}},"2632",-1),K=e("td",{style:{"text-align":"left"}},"柯里化 🔒",-1),P={style:{"text-align":"center"}},Q=e("td",{style:{"text-align":"left"}},null,-1),U=e("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/curry",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/curry",target:"_blank",rel:"noopener noreferrer"};function $(ee,te){const c=l("font"),o=l("ExternalLinkIcon"),s=l("RouterLink");return p(),r("div",null,[h,e("p",null,[t("🟠 "),n(c,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔗 "),e("a",f,[k,n(o)]),t(),e("a",b,[_,n(o)])]),g,d(" prettier-ignore "),e("table",null,[q,e("tbody",null,[e("tr",null,[v,y,e("td",x,[n(s,{to:"/problem/2620.html"},{default:a(()=>[t("[✓]")]),_:1})]),w,C,e("td",z,[e("a",N,[t("🀄️"),n(o)]),t(),e("a",F,[t("🔗"),n(o)])])]),e("tr",null,[E,O,e("td",I,[n(s,{to:"/problem/2629.html"},{default:a(()=>[t("[✓]")]),_:1})]),S,L,e("td",V,[e("a",M,[t("🀄️"),n(o)]),t(),e("a",j,[t("🔗"),n(o)])])]),e("tr",null,[B,H,e("td",J,[n(s,{to:"/problem/2630.html"},{default:a(()=>[t("[✓]")]),_:1})]),A,R,e("td",G,[e("a",T,[t("🀄️"),n(o)]),t(),e("a",Y,[t("🔗"),n(o)])])]),e("tr",null,[D,K,e("td",P,[n(s,{to:"/problem/2632.html"},{default:a(()=>[t("[✓]")]),_:1})]),Q,U,e("td",W,[e("a",X,[t("🀄️"),n(o)]),t(),e("a",Z,[t("🔗"),n(o)])])])])])])}const oe=i(m,[["render",$],["__file","2623.html.vue"]]);export{oe as default};

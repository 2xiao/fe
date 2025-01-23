import{_ as r,r as s,o as p,c as i,a as t,b as e,d as n,w as a,f as d,e as u}from"./app-MsFeWfVD.js";const h={},b=t("h1",{id:"_2690-无穷方法对象-🔒",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2690-无穷方法对象-🔒","aria-hidden":"true"},"#"),e(" 2690. 无穷方法对象 🔒")],-1),g={href:"https://leetcode.cn/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/infinite-method-object",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that returns an <strong>infinite-method object</strong>.</p><p>An <strong>infinite-method object</strong> is defined as an object that allows you to call any method and it will always return the name of the method.</p><p>For example, if you execute <code>obj.abc123()</code>, it will return <code>&quot;abc123&quot;</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: method = &quot;abc123&quot;</p><p>Output: &quot;abc123&quot;</p><p>Explanation:</p><p>const obj = createInfiniteObject();</p><p>obj<a href="">&#39;abc123&#39;</a>; // &quot;abc123&quot;</p><p>The returned string should always match the method name.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: method = &quot;.-qw73n|^2It&quot;</p><p>Output: &quot;.-qw73n|^2It&quot;</p><p>Explanation: The returned string should always match the method name.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= method.length &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一个函数，返回一个 <strong>无穷方法对象</strong> 。</p><p><strong>无穷方法对象</strong> 被定义为一个对象，它允许您调用任何方法，并始终返回方法的名称。</p><p>例如，如果执行 <code>obj.abc123()</code> ，它将返回 <code>&quot;abc123&quot;</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> method = &quot;abc123&quot;</p><p><strong>输出：</strong> &quot;abc123&quot;</p><p><strong>解释：</strong></p><p>const obj = createInfiniteObject();</p><p>obj<a href="">&#39;abc123&#39;</a>; // &quot;abc123&quot;</p><p>返回的字符串应始终与方法名称匹配。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> method = &quot;.-qw73n|^2It&quot;</p><p><strong>输出：</strong> &quot;.-qw73n|^2It&quot;</p><p><strong>解释：</strong> 返回的字符串应始终与方法名称匹配。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= method.length &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要实现一个无穷方法对象，可以利用 JavaScript 的 <code>Proxy</code> 特性来动态捕获方法调用并返回方法名称，通过 <code>Proxy</code> 的 <code>get</code> 捕获器，能够拦截对对象属性的访问。</p><p>例如，当调用 <code>obj.abc123()</code> 时，<code>prop</code> 会被捕获为 <code>&quot;abc123&quot;</code>，并返回一个函数，该函数返回 <code>&quot;abc123&quot;</code>。</p><ol><li><p><strong>创建一个代理对象</strong>：使用 <code>Proxy</code> 对象来拦截方法调用。</p></li><li><p><strong>定义一个处理器</strong>：在处理器中，实现 <code>get</code> 方法来捕获对属性（方法）的访问。</p></li><li><p><strong>返回一个函数</strong>：当访问到一个属性时，返回一个新的函数，该函数返回属性名称。</p></li><li><p><strong>实现无穷调用</strong>：由于使用了代理，对象的每一个属性访问都会返回对应的函数，允许无限链式调用。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">createInfiniteObject</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>
		<span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">{</span>
			<span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">target<span class="token punctuation">,</span> prop</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token comment">// 返回一个新函数，函数返回方法名称</span>
				<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">String</span><span class="token punctuation">(</span>prop<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"2691",-1),y=t("td",{style:{"text-align":"left"}},"不可变辅助工具 🔒",-1),v={style:{"text-align":"center"}},j=t("td",{style:{"text-align":"left"}},null,-1),w=t("td",{style:{"text-align":"center"}},"🔴",-1),I={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/immutability-helper",target:"_blank",rel:"noopener noreferrer"},L=t("td",{style:{"text-align":"center"}},"2692",-1),N=t("td",{style:{"text-align":"left"}},"使对象不可变 🔒",-1),O={style:{"text-align":"center"}},V=t("td",{style:{"text-align":"left"}},null,-1),P=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/make-object-immutable",target:"_blank",rel:"noopener noreferrer"};function R(A,F){const l=s("font"),o=s("ExternalLinkIcon"),c=s("RouterLink");return p(),i("div",null,[b,t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔗 "),t("a",g,[_,n(o)]),e(),t("a",m,[k,n(o)])]),f,d(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[q,y,t("td",v,[n(c,{to:"/problem/2691.html"},{default:a(()=>[e("[✓]")]),_:1})]),j,w,t("td",I,[t("a",E,[e("🀄️"),n(o)]),e(),t("a",C,[e("🔗"),n(o)])])]),t("tr",null,[L,N,t("td",O,[n(c,{to:"/problem/2692.html"},{default:a(()=>[e("[✓]")]),_:1})]),V,P,t("td",B,[t("a",S,[e("🀄️"),n(o)]),e(),t("a",T,[e("🔗"),n(o)])])])])])])}const W=r(h,[["render",R],["__file","2690.html.vue"]]);export{W as default};

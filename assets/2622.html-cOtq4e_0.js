import{_ as p,r as c,o as l,c as u,a as n,b as e,d as s,w as a,f as d,e as r}from"./app-MkGfDfkx.js";const k={},m=n("h1",{id:"_2622-有时间限制的缓存",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2622-有时间限制的缓存","aria-hidden":"true"},"#"),e(" 2622. 有时间限制的缓存")],-1),h={href:"https://leetcode.cn/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/cache-with-time-limit",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),g=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a class that allows getting and setting key-value pairs, however a <strong>time until expiration</strong> is associated with each key.</p><p>The class has three public methods:</p><p><code>set(key, value, duration)</code>: accepts an integer <code>key</code>, an integer <code>value</code>, and a <code>duration</code> in milliseconds. Once the <code>duration</code> has elapsed, the key should be inaccessible. The method should return <code>true</code> if the same un-expired key already exists and <code>false</code> otherwise. Both the value and duration should be overwritten if the key already exists.</p><p><code>get(key)</code>: if an un-expired key exists, it should return the associated value. Otherwise it should return <code>-1</code>.</p><p><code>count()</code>: returns the count of un-expired keys.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;TimeLimitedCache&quot;, &quot;set&quot;, &quot;get&quot;, &quot;count&quot;, &quot;get&quot;]</p><p>values = [[], [1, 42, 100], [1], [], [1]]</p><p>timeDelays = [0, 0, 50, 50, 150]</p><p>Output: [null, false, 42, 1, -1]</p><p>Explanation:</p><p>At t=0, the cache is constructed.</p><p>At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn&#39;t exist so false is returned.</p><p>At t=50, key=1 is requested and the value of 42 is returned.</p><p>At t=50, count() is called and there is one active key in the cache.</p><p>At t=100, key=1 expires.</p><p>At t=150, get(1) is called but -1 is returned because the cache is empty.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;TimeLimitedCache&quot;, &quot;set&quot;, &quot;set&quot;, &quot;get&quot;, &quot;get&quot;, &quot;get&quot;, &quot;count&quot;]</p><p>values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]</p><p>timeDelays = [0, 0, 40, 50, 120, 200, 250]</p><p>Output: [null, false, true, 50, 50, -1, 0]</p><p>Explanation:</p><p>At t=0, the cache is constructed.</p><p>At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn&#39;t exist so false is returned.</p><p>At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.</p><p>At t=50, get(1) is called which returned 50.</p><p>At t=120, get(1) is called which returned 50.</p><p>At t=140, key=1 expires.</p><p>At t=200, get(1) is called but the cache is empty so -1 is returned.</p><p>At t=250, count() returns 0 because the cache is empty.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= key, value &lt;= 10^9</code></li><li><code>0 &lt;= duration &lt;= 1000</code></li><li><code>1 &lt;= actions.length &lt;= 100</code></li><li><code>actions.length === values.length</code></li><li><code>actions.length === timeDelays.length</code></li><li><code>0 &lt;= timeDelays[i] &lt;= 1450</code></li><li><code>actions[i]</code> is one of &quot;TimeLimitedCache&quot;, &quot;set&quot;, &quot;get&quot; and &quot;count&quot;</li><li>First action is always &quot;TimeLimitedCache&quot; and must be executed immediately, with a 0-millisecond delay</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个类，它允许获取和设置键-值对，并且每个键都有一个 <strong>过期时间</strong> 。</p><p>该类有三个公共方法：</p><p><code>set(key, value, duration)</code> ：接收参数为整型键 <code>key</code> 、整型值 <code>value</code> 和以毫秒为单位的持续时间 <code>duration</code> 。一旦 <code>duration</code> 到期后，这个键就无法访问。如果相同的未过期键已经存在，该方法将返回 <code>true</code> ，否则返回 <code>false</code> 。如果该键已经存在，则它的值和持续时间都应该被覆盖。</p><p><code>get(key)</code> ：如果存在一个未过期的键，它应该返回这个键相关的值。否则返回 <code>-1</code> 。</p><p><code>count()</code> ：返回未过期键的总数。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= key, value &lt;= 10^9</code></li><li><code>0 &lt;= duration &lt;= 1000</code></li><li><code>1 &lt;= actions.length &lt;= 100</code></li><li><code>actions.length === values.length</code></li><li><code>actions.length === timeDelays.length</code></li><li><code>0 &lt;= timeDelays[i] &lt;= 1450</code></li><li><code>actions[i]</code> 是 &quot;TimeLimitedCache&quot;、&quot;set&quot;、&quot;get&quot; 和 &quot;count&quot; 中的一个。</li><li>第一个操作始终是 &quot;TimeLimitedCache&quot; 而且一定会以 0 毫秒的延迟立即执行</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong><code>constructor</code></strong>：</p><ul><li>使用 <code>Map</code> 数据结构来存储键值对，其中每个键对应的值为一个数组 <code>[value, timer]</code>，其中 <code>value</code> 是存储的值，<code>timer</code> 是该键的定时器，用于删除过期键。</li></ul></li><li><p><strong><code>set(key, value, duration)</code></strong>：</p><ul><li>该方法将给定的键 <code>key</code> 和值 <code>value</code> 存入缓存，并设置该键值对的有效期 <code>duration</code> 毫秒。</li><li>如果相同键已经存在且未过期，则返回 <code>true</code>，否则返回 <code>false</code>。</li><li>使用 <code>setTimeout</code> 定时函数，在到期时间后自动删除该键值对。</li><li>如果键已经存在且定时器没有到期，首先清除之前的定时器，以确保新设置的 <code>duration</code> 覆盖旧的时间。</li></ul></li><li><p><strong><code>get(key)</code></strong>：</p><ul><li>查询缓存中是否存在未过期的键 <code>key</code>。</li><li>如果键存在且未过期，则返回其对应的值，否则返回 <code>-1</code>。</li></ul></li><li><p><strong><code>count()</code></strong>：</p><ul><li>返回当前缓存中未过期的键值对数量，直接通过 <code>Map</code> 对象的 <code>size</code> 属性来获取当前键的数量。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <ul><li><strong><code>set</code></strong>：每次调用 <code>set</code>，查找和插入操作的时间复杂度为 <code>O(1)</code>，删除旧的定时器和设置新的定时器也为常数时间操作。因此 <code>set</code> 的时间复杂度为 <code>O(1)</code>。</li><li><strong><code>get</code></strong>：查找键的时间复杂度为 <code>O(1)</code>。</li><li><strong><code>count</code></strong>：<code>Map.size</code> 的访问是常数时间操作，时间复杂度为 <code>O(1)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 为缓存中存储的键值对数量，使用了 <code>Map</code> 来存储键值对。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">TimeLimitedCache</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">duration</span> time until expiration in ms
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span> if un-expired key already existed
 */</span>
<span class="token class-name">TimeLimitedCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">set</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> duration</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">,</span> duration<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> exist <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>exist<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> oldTimer <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token function">clearTimeout</span><span class="token punctuation">(</span>oldTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">[</span>value<span class="token punctuation">,</span> timer<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> exist<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">key</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> value associated with key
 */</span>
<span class="token class-name">TimeLimitedCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">get</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">key</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> count of non-expired keys
 */</span>
<span class="token class-name">TimeLimitedCache</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">count</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cache<span class="token punctuation">.</span>size<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),f=n("td",{style:{"text-align":"center"}},"2627",-1),x=n("td",{style:{"text-align":"left"}},"函数防抖",-1),w={style:{"text-align":"center"}},q=n("td",{style:{"text-align":"left"}},null,-1),T=n("td",{style:{"text-align":"center"}},"🟠",-1),C={style:{"text-align":"center"}},L={href:"https://leetcode.cn/problems/debounce",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/debounce",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"2636",-1),E=n("td",{style:{"text-align":"left"}},"Promise 对象池 🔒",-1),D={style:{"text-align":"center"}},M=n("td",{style:{"text-align":"left"}},null,-1),N=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/promise-pool",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"2637",-1),z=n("td",{style:{"text-align":"left"}},"有时间限制的 Promise 对象",-1),P={style:{"text-align":"center"}},R=n("td",{style:{"text-align":"left"}},null,-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/promise-time-limit",target:"_blank",rel:"noopener noreferrer"};function H(J,K){const i=c("font"),t=c("ExternalLinkIcon"),o=c("RouterLink");return l(),u("div",null,[m,n("p",null,[e("🟠 "),s(i,{color:"#ffb800"},{default:a(()=>[e("Medium")]),_:1}),e("  🔗 "),n("a",h,[v,s(t)]),e(),n("a",y,[b,s(t)])]),g,d(" prettier-ignore "),n("table",null,[_,n("tbody",null,[n("tr",null,[f,x,n("td",w,[s(o,{to:"/problem/2627.html"},{default:a(()=>[e("[✓]")]),_:1})]),q,T,n("td",C,[n("a",L,[e("🀄️"),s(t)]),e(),n("a",A,[e("🔗"),s(t)])])]),n("tr",null,[O,E,n("td",D,[s(o,{to:"/problem/2636.html"},{default:a(()=>[e("[✓]")]),_:1})]),M,N,n("td",V,[n("a",B,[e("🀄️"),s(t)]),e(),n("a",I,[e("🔗"),s(t)])])]),n("tr",null,[j,z,n("td",P,[s(o,{to:"/problem/2637.html"},{default:a(()=>[e("[✓]")]),_:1})]),R,F,n("td",S,[n("a",W,[e("🀄️"),s(t)]),e(),n("a",G,[e("🔗"),s(t)])])])])])])}const U=p(k,[["render",H],["__file","2622.html.vue"]]);export{U as default};

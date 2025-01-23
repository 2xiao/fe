import{_ as c,r as a,o as i,c as u,a as n,b as t,d as s,w as p,e as l}from"./app-MsFeWfVD.js";const r={},d=n("h1",{id:"_2694-事件发射器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2694-事件发射器","aria-hidden":"true"},"#"),t(" 2694. 事件发射器")],-1),b={href:"https://leetcode.cn/problems/event-emitter",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/event-emitter",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),q=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design an <code>EventEmitter</code> class. This interface is similar (but with some differences) to the one found in Node.js or the Event Target interface of the DOM. The <code>EventEmitter</code> should allow for subscribing to events and emitting them.</p><p>Your <code>EventEmitter</code> class should have the following two methods:</p><ul><li><p><strong>subscribe</strong>: This method takes in two arguments: the name of an event as a string and a callback function. This callback function will later be called when the event is emitted.</p><p>An event should be able to have multiple listeners for the same event.</p><p>When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. An array of results should be returned. You can assume no callbacks passed to <code>subscribe</code> are referentially identical.</p><p>The <code>subscribe</code> method should also return an object with an <code>unsubscribe</code> method that enables the user to unsubscribe. When it is called, the callback should be removed from the list of subscriptions and <code>undefined</code> should be returned.</p></li><li><p><strong>emit</strong>: This method takes in two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array of the results of all callback calls in the order they were subscribed.</p></li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;EventEmitter&quot;, &quot;emit&quot;, &quot;subscribe&quot;, &quot;subscribe&quot;, &quot;emit&quot;],</p><p>values = [[], [&quot;firstEvent&quot;], [&quot;firstEvent&quot;, &quot;function cb1() { return 5; }&quot;], [&quot;firstEvent&quot;, &quot;function cb1() { return 6; }&quot;], [&quot;firstEvent&quot;]]</p><p>Output: [[],[&quot;emitted&quot;,[]],[&quot;subscribed&quot;],[&quot;subscribed&quot;],[&quot;emitted&quot;,[5,6]]]</p><p>Explanation:</p><p>const emitter = new EventEmitter();</p><p>emitter.emit(&quot;firstEvent&quot;); // [], no callback are subscribed yet</p><p>emitter.subscribe(&quot;firstEvent&quot;, function cb1() { return 5; });</p><p>emitter.subscribe(&quot;firstEvent&quot;, function cb2() { return 6; });</p><p>emitter.emit(&quot;firstEvent&quot;); // [5, 6], returns the output of cb1 and cb2</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;emit&quot;, &quot;emit&quot;],</p><p>values = [[], [&quot;firstEvent&quot;, &quot;function cb1(...args) { return args.join(&#39;,&#39;); }&quot;], [&quot;firstEvent&quot;, [1,2,3]], [&quot;firstEvent&quot;, [3,4,6]]]</p><p>Output: [[],[&quot;subscribed&quot;],[&quot;emitted&quot;,[&quot;1,2,3&quot;]],[&quot;emitted&quot;,[&quot;3,4,6&quot;]]]</p><p>Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.</p><p>const emitter = new EventEmitter();</p><p>emitter.subscribe(&quot;firstEvent, function cb1(...args) { return args.join(&#39;,&#39;); });</p><p>emitter.emit(&quot;firstEvent&quot;, [1, 2, 3]); // [&quot;1,2,3&quot;]</p><p>emitter.emit(&quot;firstEvent&quot;, [3, 4, 6]); // [&quot;3,4,6&quot;]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;emit&quot;, &quot;unsubscribe&quot;, &quot;emit&quot;],</p><p>values = [[], [&quot;firstEvent&quot;, &quot;(...args) =&gt; args.join(&#39;,&#39;)&quot;], [&quot;firstEvent&quot;, [1,2,3]], [0], [&quot;firstEvent&quot;, [4,5,6]]]</p><p>Output: [[],[&quot;subscribed&quot;],[&quot;emitted&quot;,[&quot;1,2,3&quot;]],[&quot;unsubscribed&quot;,0],[&quot;emitted&quot;,[]]]</p><p>Explanation:</p><p>const emitter = new EventEmitter();</p><p>const sub = emitter.subscribe(&quot;firstEvent&quot;, (...args) =&gt; args.join(&#39;,&#39;));</p><p>emitter.emit(&quot;firstEvent&quot;, [1, 2, 3]); // [&quot;1,2,3&quot;]</p><p>sub.unsubscribe(); // undefined</p><p>emitter.emit(&quot;firstEvent&quot;, [4, 5, 6]); // [], there are no subscriptions</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input:</p><p>actions = [&quot;EventEmitter&quot;, &quot;subscribe&quot;, &quot;subscribe&quot;, &quot;unsubscribe&quot;, &quot;emit&quot;],</p><p>values = [[], [&quot;firstEvent&quot;, &quot;x =&gt; x + 1&quot;], [&quot;firstEvent&quot;, &quot;x =&gt; x + 2&quot;], [0], [&quot;firstEvent&quot;, [5]]]</p><p>Output: [[],[&quot;subscribed&quot;],[&quot;emitted&quot;,[&quot;1,2,3&quot;]],[&quot;unsubscribed&quot;,0],[&quot;emitted&quot;,[7]]]</p><p>Explanation:</p><p>const emitter = new EventEmitter();</p><p>const sub1 = emitter.subscribe(&quot;firstEvent&quot;, x =&gt; x + 1);</p><p>const sub2 = emitter.subscribe(&quot;firstEvent&quot;, x =&gt; x + 2);</p><p>sub1.unsubscribe(); // undefined</p><p>emitter.emit(&quot;firstEvent&quot;, [5]); // [7]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= actions.length &lt;= 10</code></li><li><code>values.length === actions.length</code></li><li>All test cases are valid, e.g. you don&#39;t need to handle scenarios when unsubscribing from a non-existing subscription.</li><li>There are only 4 different actions: <code>EventEmitter</code>, <code>emit</code>, <code>subscribe</code>, and <code>unsubscribe</code>.</li><li>The <code>EventEmitter</code> action doesn&#39;t take any arguments.</li><li>The <code>emit</code> action takes between either 1 or 2 arguments. The first argument is the name of the event we want to emit, and the 2nd argument is passed to the callback functions.</li><li>The <code>subscribe</code> action takes 2 arguments, where the first one is the event name and the second is the callback function.</li><li>The <code>unsubscribe</code> action takes one argument, which is the 0-indexed order of the subscription made before.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计一个 <code>EventEmitter</code> 类。这个接口与 Node.js 或 DOM 的 Event Target 接口相似，但有一些差异。<code>EventEmitter</code> 应该允许订阅事件和触发事件。</p><p>你的 <code>EventEmitter</code> 类应该有以下两个方法：</p><ul><li><p><strong>subscribe</strong>: 这个方法接收两个参数： 一个作为字符串的事件名和一个回调函数。当事件被触发时，这个回调函数将被调用。</p><p>一个事件应该能够有多个监听器。当触发带有多个回调函数的事件时，应按照订阅的顺序依次调用每个回调函数。应返回一个结果数组。你可以假设传递给 <code>subscribe</code> 的回调函数都不是引用相同的。</p><p><code>subscribe</code> 方法还应返回一个对象，其中包含一个 <code>unsubscribe</code> 方法，使用户可以取消订阅。当调用 <code>unsubscribe</code> 方法时，回调函数应该从订阅列表中删除，并返回 undefined。</p></li><li><p><strong>emit</strong>: 这个方法接收两个参数：一个作为字符串的事件名和一个可选的参数数组，这些参数将传递给回调函数。如果没有订阅给定事件的回调函数，则返回一个空数组。否则，按照它们被订阅的顺序返回所有回调函数调用的结果数组。</p></li></ul><p><strong>提示：</strong></p><ul><li><code>1 &lt;= actions.length &lt;= 10</code></li><li><code>values.length === actions.length</code></li><li>所有测试用例都是有效的。例如，你不需要处理取消一个不存在的订阅的情况。</li><li>只有 4 种不同的操作：<code>EventEmitter</code>、<code>emit</code>、<code>subscribe</code> 和 <code>unsubscribe</code> 。 <code>EventEmitter</code> 操作没有参数。</li><li><code>emit</code> 操作接收 1 或 2 个参数。第一个参数是要触发的事件名，第二个参数传递给回调函数。</li><li><code>subscribe</code> 操作接收 2 个参数，第一个是事件名，第二个是回调函数。</li><li><code>unsubscribe</code> 操作接收一个参数，即之前进行订阅的顺序（从 0 开始）。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数据结构选择</strong>：</p><ul><li>使用 <code>Map</code> 对象来存储事件名称和对应的回调函数数组。<code>Map</code> 提供了高效的键值对存储，便于根据事件名称快速查找和更新回调函数。</li></ul></li><li><p><strong>订阅事件</strong>：</p><ul><li>实现 <code>subscribe(eventName, callback)</code> 方法，用于注册事件和回调函数。</li><li>检查事件是否已经存在，如果不存在，则初始化为一个空数组。然后将回调函数添加到事件的回调数组中，并更新 <code>Map</code>。</li><li>返回一个包含 <code>unsubscribe</code> 方法的对象，以便在需要时注销事件。</li></ul></li><li><p><strong>注销事件</strong>：</p><ul><li>在 <code>unsubscribe</code> 方法中，从事件的回调数组中移除指定的回调函数。使用 <code>filter</code> 方法来创建一个新的回调数组，并更新 <code>Map</code> 中的事件。</li></ul></li><li><p><strong>触发事件</strong>：</p><ul><li>实现 <code>emit(eventName, args = [])</code> 方法，用于触发事件。</li><li>获取对应事件的回调函数数组，并调用每个回调函数，传递参数 <code>args</code>。使用 <code>map</code> 方法返回所有回调函数的返回值数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：每个方法的时间复杂度是 <code>O(m)</code>，其中 <code>m</code> 是该事件的回调函数数量</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是事件的数量和每个事件的回调函数数量，在 <code>events</code> 中存储了所有事件及其回调。</li></ul><ol><li><p><strong><code>subscribe()</code> 方法</strong>：</p><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>（平均情况），添加回调函数到数组的操作是常数时间，但在最坏情况下，如果回调数组很长，可能需要 <code>O(m)</code>（<code>m</code> 是该事件的回调数量）。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>（不考虑回调函数的存储），每次调用只使用常量空间来存储状态。</li></ul></li><li><p><strong><code>unsubscribe()</code> 方法</strong>：</p><ul><li><strong>时间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是该事件的回调函数数量，需要遍历回调数组来找到并移除指定的回调函数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不需要额外空间，只是修改现有的回调数组。</li></ul></li><li><p><strong><code>emit()</code> 方法</strong>：</p><ul><li><strong>时间复杂度</strong>：<code>O(m)</code>，其中 <code>m</code> 是该事件的回调函数数量，需要遍历所有注册的回调函数并执行它们。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只是在方法内部传递参数，不需要额外存储。</li></ul></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">EventEmitter</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>events <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span>
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">callback</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> callback</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 添加回调函数</span>
		callbacks<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>eventName<span class="token punctuation">,</span> callbacks<span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">return</span> <span class="token punctuation">{</span>
			<span class="token function-variable function">unsubscribe</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
				<span class="token comment">// 移除回调函数</span>
				<span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>
					eventName<span class="token punctuation">,</span>
					<span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">!==</span> callback<span class="token punctuation">)</span>
				<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">return</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">eventName</span>
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">args</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">emit</span><span class="token punctuation">(</span><span class="token parameter">eventName<span class="token punctuation">,</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> callbacks <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>events<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>eventName<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token comment">// 调用每个回调函数，传递参数</span>
		<span class="token keyword">return</span> callbacks<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cb</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">cb</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * const emitter = new EventEmitter();
 *
 * // Subscribe to the onClick event with onClickCallback
 * function onClickCallback() <span class="token punctuation">{</span> return 99 <span class="token punctuation">}</span>
 * const sub = emitter.subscribe(&#39;onClick&#39;, onClickCallback);
 *
 * emitter.emit(&#39;onClick&#39;); // [99]
 * sub.unsubscribe(); // undefined
 * emitter.emit(&#39;onClick&#39;); // []
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function h(g,f){const o=a("font"),e=a("ExternalLinkIcon");return i(),u("div",null,[d,n("p",null,[t("🟠 "),s(o,{color:"#ffb800"},{default:p(()=>[t("Medium")]),_:1}),t("  🔗 "),n("a",b,[m,s(e)]),t(),n("a",k,[v,s(e)])]),q])}const w=c(r,[["render",h],["__file","2694.html.vue"]]);export{w as default};

import{_ as l,r as o,o as u,c as i,a as n,b as s,d as a,w as t,e as d}from"./app-fEpXkbSw.js";const r={},k=n("h1",{id:"_59-ii-队列的最大值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_59-ii-队列的最大值","aria-hidden":"true"},"#"),s(" 59-II. 队列的最大值")],-1),m=n("code",null,"设计",-1),v=n("code",null,"队列",-1),h=n("code",null,"单调队列",-1),b={href:"https://leetcode.cn/problems/dui-lie-de-zui-da-zhi-lcof",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),g=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>请设计一个自助结账系统，该系统需要通过一个队列来模拟顾客通过购物车的结算过程，需要实现的功能有：</p><ul><li><code>get_max()</code>：获取结算商品中的最高价格，如果队列为空，则返回 -1</li><li><code>add(value)</code>：将价格为 <code>value</code> 的商品加入待结算商品队列的尾部</li><li><code>remove()</code>：移除第一个待结算的商品价格，如果队列为空，则返回 -1</li></ul><p>注意，为保证该系统运转高效性，以上函数的均摊时间复杂度均为 O(1)</p><p><strong>示例 1：</strong></p><blockquote><p>输入:</p><p>[&quot;Checkout&quot;,&quot;add&quot;,&quot;add&quot;,&quot;get_max&quot;,&quot;remove&quot;,&quot;get_max&quot;]</p><p>[[],[4],[7],[],[],[]]</p><p>输出: [null,null,null,7,4,7]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p>输入:</p><p>[&quot;Checkout&quot;,&quot;remove&quot;,&quot;get_max&quot;]</p><p>[[],[],[]]</p><p>输出: [null,-1,-1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= get_max, add, remove 的总操作数 &lt;= 10000</code></li><li><code>1 &lt;= value &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为确保每个操作的均摊时间复杂度为 <code>O(1)</code>，可以使用一个双端队列（Deque）来维护当前的商品价格队列，同时维护一个辅助队列来追踪当前队列中的最大价格。</p><ol><li><strong>主要队列</strong>：用于存储待结算商品的价格。</li><li><strong>辅助队列</strong>：用于存储当前的最大价格。当添加商品时，将新价格与辅助队列的尾部元素进行比较，确保辅助队列中的元素始终是从大到小排序的。</li><li><strong>操作</strong>： <ul><li><code>add(value)</code>：将商品价格 <code>value</code> 添加到主要队列，并更新辅助队列，将比当前价格小的元素全部出队，直到辅助队列为空或队尾元素大于当前价格，然后将当前价格添加到辅助队列。</li><li><code>remove()</code>：移除主要队列的头部元素，如果移除的值是当前最大值，则更新辅助队列，移除辅助队列的头部元素。</li><li><code>get_max()</code>：返回辅助队列的头部元素，即当前最大价格。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(1)</code></p><ul><li><strong><code>add(value)</code></strong>：均摊时间复杂度为 <code>O(1)</code>，尽管在最坏情况下可能需要清空辅助队列，但这次操作的代价会在后续的 <code>add</code> 操作中均摊。</li><li><strong><code>remove()</code></strong>：均摊时间复杂度为 <code>O(1)</code>，移除操作仅涉及从主要队列中移除一个元素。</li><li><strong><code>get_max()</code></strong>：时间复杂度为 <code>O(1)</code>，直接返回辅助队列的头部元素。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，需要两个队列存储待结算商品的价格及当前的最大价格，最坏的情况，空间复杂度为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Checkout</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 主队列</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 辅助队列</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 添加商品价格到队列</span>
	<span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token comment">// 更新最大值队列</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> value
		<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 移除队列头部的商品价格</span>
	<span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 队列为空</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 移除队列头部</span>
		<span class="token keyword">const</span> removedValue <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token comment">// 如果移除的值是当前最大值，则更新辅助队列</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>removedValue <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> removedValue<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 获取当前队列中的最高价格</span>
	<span class="token function">get_max</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 返回辅助队列头部的值</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>maxQueue<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17);function f(x,q){const p=o("font"),e=o("RouterLink"),c=o("ExternalLinkIcon");return u(),i("div",null,[k,n("p",null,[s("🟠 "),a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/design.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/queue.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/monotonic-queue.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",b,[_,a(c)])]),g])}const y=l(r,[["render",f],["__file","jz_offer_59_2.html.vue"]]);export{y as default};

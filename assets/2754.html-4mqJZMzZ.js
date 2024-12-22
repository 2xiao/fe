import{_ as p,r as e,o as c,c as l,a as n,b as s,d as a,w as i,e as u}from"./app-U2ekqv2z.js";const d={},r=n("h1",{id:"_2754-将函数绑定到上下文-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2754-将函数绑定到上下文-🔒","aria-hidden":"true"},"#"),s(" 2754. 将函数绑定到上下文 🔒")],-1),k={href:"https://leetcode.cn/problems/bind-function-to-context",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/bind-function-to-context",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),f=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Enhance all functions to have the <code>bindPolyfill</code> method. When <code>bindPolyfill</code> is called with a passed object <code>obj</code>, that object becomes the <code>this</code> context for the function.</p><p>For example, if you had the code:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My context is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output would be <code>&quot;My context is undefined&quot;</code>. However, if you bound the function:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My context is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> boundFunc <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">boundPolyfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">ctx</span><span class="token operator">:</span> <span class="token string">&#39;My Object&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">boundFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The output should be <code>&quot;My context is My Object&quot;</code>.</p><p>You may assume that a single non-null object will be passed to the <code>bindPolyfill</code> method.</p><p>Please solve it without the built-in <code>Function.bind</code> method.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">multiplier</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">*</span> multiplier<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inputs = [5]</p><p>Output: 50</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> boundFunc <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">bindPolyfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">boundFunc</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 50</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>A multiplier of 5 is passed as a parameter.</p><p>The context is set to {&quot;x&quot;: 10}.</p><p>Multiplying those two numbers yields 50.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token function-variable function">fn</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">speak</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token string">&#39;My name is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Kathy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inputs = []</p><p>Output: &quot;My name is Kathy&quot;</p><p>Explanation:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> boundFunc <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">bindPolyfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Kathy&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">boundFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// &quot;My name is Kathy&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>obj</code> is a non-null object</li><li><code>0 &lt;= inputs.length &lt;= 100</code></li></ul><p><strong>Can you solve it without using any built-in methods?</strong></p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个所有函数都支持的方法 <code>bindPolyfill</code> 。当 <code>bindPolyfill</code> 方法被调用并传递了一个对象 <code>obj</code> 时，该对象将成为函数的 <code>this</code> 上下文。</p><p>例如，如果你有以下代码：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My context is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的输出是 <code>&quot;My context is undefined&quot;</code> 。然而，如果你绑定了该函数：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;My context is &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>ctx<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> boundFunc <span class="token operator">=</span> f<span class="token punctuation">.</span><span class="token function">boundPolyfill</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">ctx</span><span class="token operator">:</span> <span class="token string">&#39;My Object&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">boundFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>它的输出应为 <code>&quot;My context is My Object&quot;</code> 。</p><p>你可以假设传递给 <code>bindPolyfill</code> 方法的是一个非空对象。</p><p>请在不使用内置的 <code>Function.bind</code> 方法的情况下解决该问题。</p><p><strong>提示：</strong></p><ul><li><code>obj</code> 是一个非空对象</li><li><code>0 &lt;= inputs.length &lt;= 100</code></li></ul><p><strong>你能在不使用任何内置方法的情况下解决这个问题吗？</strong></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>要实现一个 <code>bindPolyfill</code> 方法，需要模仿 JavaScript 中的 <code>Function.prototype.bind</code> 方法的行为。</p><p>基本思路是：</p><ol><li>创建一个新的函数，这个函数能够使用传入的对象 <code>obj</code> 作为 <code>this</code> 上下文，该函数也应当支持接受参数。</li><li>当绑定函数时，可能会传入一些参数，这些参数在调用新函数时应该被传递给原函数。因此，需要处理这种情况，确保 <code>bindPolyfill</code> 支持传递参数，类似于 <code>bind</code> 方法那样。</li><li>支持原函数的调用，这意味着新函数在调用时应该调用原函数，并确保 <code>this</code> 指向正确的上下文。</li></ol><p>具体来说：</p><ul><li>在 <code>bindPolyfill</code> 中，将 <code>this</code> 指向的是被绑定的函数，即调用 <code>boundPolyfill</code> 的函数。例如，如果 <code>f</code> 调用 <code>boundPolyfill</code>，则 <code>this</code> 就是 <code>f</code>。</li><li>保存原始函数 <code>fn = this</code>，这确保能够在新的函数中调用它。</li><li><code>boundPolyfill</code> 返回一个新的函数，这个新函数会把 <code>this</code> 上下文设置为传入的 <code>obj</code>，并将参数 <code>args</code> 传递给原函数 <code>fn</code>，这就确保了原函数能够以正确的上下文和参数调用。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>boundPolyfill</code> 本身的时间复杂度是 <code>O(1)</code>，因为它只是创建一个新函数并返回，没有复杂的计算。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只是为新函数分配了一定的内存。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Function</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">boundPolyfill</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 保存当前函数 (即调用 boundPolyfill 的函数)</span>
	<span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>

	<span class="token comment">// 返回一个新的函数</span>
	<span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 使用 apply 调用原函数，设置 this 为传入的 obj 并传递 args 参数</span>
		<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function h(y,g){const o=e("font"),t=e("ExternalLinkIcon");return c(),l("div",null,[r,n("p",null,[s("🟠 "),a(o,{color:"#ffb800"},{default:i(()=>[s("Medium")]),_:1}),s("  🔗 "),n("a",k,[v,a(t)]),s(),n("a",b,[m,a(t)])]),f])}const j=p(d,[["render",h],["__file","2754.html.vue"]]);export{j as default};

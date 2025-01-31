import{_ as i,r as p,o as u,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_1106-解析布尔表达式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1106-解析布尔表达式","aria-hidden":"true"},"#"),s(" 1106. 解析布尔表达式")],-1),h=n("code",null,"栈",-1),m=n("code",null,"递归",-1),v=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/parsing-a-boolean-expression",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/parsing-a-boolean-expression",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>boolean expression</strong> is an expression that evaluates to either <code>true</code> or <code>false</code>. It can be in one of the following shapes:</p><ul><li><code>&#39;t&#39;</code> that evaluates to <code>true</code>.</li><li><code>&#39;f&#39;</code> that evaluates to <code>false</code>.</li><li><code>&#39;!(subExpr)&#39;</code> that evaluates to <strong>the logical NOT</strong> of the inner expression <code>subExpr</code>.</li><li><code>&#39;&amp;(subExpr1, subExpr2, ..., subExprn)&#39;</code> that evaluates to <strong>the logical AND</strong> of the inner expressions <code>subExpr1, subExpr2, ..., subExprn</code> where <code>n &gt;= 1</code>.</li><li><code>&#39;|(subExpr1, subExpr2, ..., subExprn)&#39;</code> that evaluates to <strong>the logical OR</strong> of the inner expressions <code>subExpr1, subExpr2, ..., subExprn</code> where <code>n &gt;= 1</code>.</li></ul><p>Given a string <code>expression</code> that represents a <strong>boolean expression</strong> , return <em>the evaluation of that expression</em>.</p><p>It is <strong>guaranteed</strong> that the given expression is valid and follows the given rules.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: expression = &quot;&amp;(|(f))&quot;</p><p>Output: false</p><p>Explanation:</p><p>First, evaluate |(f) --&gt; f. The expression is now &quot;&amp;(f)&quot;.</p><p>Then, evaluate &amp;(f) --&gt; f. The expression is now &quot;f&quot;.</p><p>Finally, return false.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: expression = &quot;|(f,f,f,t)&quot;</p><p>Output: true</p><p>Explanation: The evaluation of (false OR false OR false OR true) is true.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: expression = &quot;!(&amp;(f,t))&quot;</p><p>Output: true</p><p>Explanation:</p><p>First, evaluate &amp;(f,t) --&gt; (false AND true) --&gt; false --&gt; f. The expression is now &quot;!(f)&quot;.</p><p>Then, evaluate !(f) --&gt; NOT false --&gt; true. We return true.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= expression.length &lt;= 2 * 10^4</code></li><li>expression[i] is one following characters: <code>&#39;(&#39;</code>, <code>&#39;)&#39;</code>, <code>&#39;&amp;&#39;</code>, <code>&#39;|&#39;</code>, <code>&#39;!&#39;</code>, <code>&#39;t&#39;</code>, <code>&#39;f&#39;</code>, and <code>&#39;,&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>布尔表达式</strong> 是计算结果不是 <code>true</code> 就是 <code>false</code> 的表达式。有效的表达式需遵循以下约定：</p><ul><li><code>&#39;t&#39;</code>，运算结果为 <code>true</code></li><li><code>&#39;f&#39;</code>，运算结果为 <code>false</code></li><li><code>&#39;!(subExpr)&#39;</code>，运算过程为对内部表达式 <code>subExpr</code> 进行 <strong>逻辑非</strong> （NOT）运算</li><li><code>&#39;&amp;(subExpr1, subExpr2, ..., subExprn)&#39;</code>，运算过程为对 2 个或以上内部表达式 <code>subExpr1, subExpr2, ..., subExprn</code> 进行 <strong>逻辑与</strong> （AND）运算</li><li><code>&#39;|(subExpr1, subExpr2, ..., subExprn)&#39;</code>，运算过程为对 2 个或以上内部表达式 <code>subExpr1, subExpr2, ..., subExprn</code> 进行 <strong>逻辑或</strong> （OR）运算</li></ul>',16),E={href:"https://baike.baidu.com/item/%E5%B8%83%E5%B0%94%E8%A1%A8%E8%BE%BE%E5%BC%8F/1574380?fr=aladdin",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"expression",-1),y=c(`<p>题目测试用例所给出的表达式均为有效的布尔表达式，遵循上述约定。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= expression.length &lt;= 2 * 10^4</code></li><li><code>expression[i]</code> 为 <code>&#39;(&#39;</code>、<code>&#39;)&#39;</code>、<code>&#39;&amp;&#39;</code>、<code>&#39;|&#39;</code>、<code>&#39;!&#39;</code>、<code>&#39;t&#39;</code>、<code>&#39;f&#39;</code> 和 <code>&#39;,&#39;</code> 之一</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用栈来处理布尔表达式，以便处理嵌套的表达式和操作符优先级。</p><p>从左到右遍历表达式的每个字符。</p><ul><li><p>如果字符是 <code>,</code>，则跳过（不需要处理逗号）。</p></li><li><p>如果字符是 <code>t</code> 或 <code>f</code>，将其转换为布尔值并压入栈中。</p></li><li><p>如果字符是 <code>(</code> 、 <code>&amp;</code> 、 <code>|</code> 、 <code>!</code>，将其压入栈中。</p></li><li><p>如果字符是 <code>)</code>，则开始计算最近一个括号中的表达式，并将计算结果压入栈中：</p><ul><li><p>首先弹出操作数到一个数组 <code>values</code>，直到找到对应的左括号 <code>(</code>；</p></li><li><p>弹出栈顶的操作符（<code>&amp;</code>、<code>|</code> 或 <code>!</code>）。</p></li><li><p>根据操作符进行相应的布尔运算：</p><ul><li>对于 <code>&amp;</code>，使用 <code>every</code> 方法判断所有值是否为 <code>true</code>。</li><li>对于 <code>|</code>，使用 <code>some</code> 方法判断是否至少有一个值为 <code>true</code>。</li><li>对于 <code>!</code>，直接对第一个值取反。</li></ul></li><li><p>遍历结束后，栈中的唯一元素即为表达式的最终结果。</p></li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是表达式的长度。每个字符都被处理一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，栈的空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">expression</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">parseBoolExpr</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">expression</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> expression<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> expression<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span><span class="token punctuation">;</span> <span class="token comment">// 跳过逗号</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;t&#39;</span> <span class="token operator">||</span> char <span class="token operator">===</span> <span class="token string">&#39;f&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char <span class="token operator">===</span> <span class="token string">&#39;t&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将 &#39;t&#39; 和 &#39;f&#39; 转换为布尔值</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>char <span class="token operator">==</span> <span class="token string">&#39;)&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> values <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>stack<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> stack<span class="token punctuation">[</span>stack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;(&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				values<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 移除 &#39;(&#39;</span>
			<span class="token keyword">const</span> sign <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 获取操作符</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">==</span> <span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>values<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 逻辑与</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>sign <span class="token operator">==</span> <span class="token string">&#39;|&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>values<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>Boolean<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 逻辑或</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">!</span>values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 逻辑非</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将括号或操作符压入栈</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 最终结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function q(O,B){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/stack.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/recursion.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[f,a(o)]),s(),n("a",g,[x,a(o)])]),_,n("p",null,[s("给你一个以字符串形式表述的 "),n("a",E,[s("布尔表达式"),a(o)]),w,s("，返回该式的运算结果。")]),y])}const T=i(d,[["render",q],["__file","1106.html.vue"]]);export{T as default};

import{_ as p,r as o,o as l,c as i,a as n,b as e,d as s,w as d,e as a}from"./app-U2ekqv2z.js";const r={},u=n("h1",{id:"_2823-深度对象筛选-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2823-深度对象筛选-🔒","aria-hidden":"true"},"#"),e(" 2823. 深度对象筛选 🔒")],-1),k={href:"https://leetcode.cn/problems/deep-object-filter",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/deep-object-filter",target:"_blank",rel:"noopener noreferrer"},m=n("code",null,"LeetCode",-1),g=a(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an object or an array <code>obj</code> and a function <code>fn</code>, return a filtered object or array <code>filteredObject</code>.</p><p>Function <code>deepFilter</code> should perform a deep filter operation on the <code>obj</code>. The deep filter operation should remove properties for which the output of the filter function <code>fn</code> is <code>false</code>, as well as any empty objects or arrays that remain after the keys have been removed.</p><p>If the deep filter operation results in an empty object or array, with no remaining properties, <code>deepFilter</code> should return <code>undefined</code> to indicate that there is no valid data left in the <code>filteredObject</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [-5, -4, -3, -2, -1, 0, 1],

fn = (x) =&gt; x &gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [1]</p><p>Explanation: All values that were not greater than 0 were removed.</p></blockquote><p><strong>Example 2:</strong></p>`,7),f=n("blockquote",null,[n("p",null,"Input:"),n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`obj = {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}},

fn = (x) => typeof x === "string"
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",{"b:2,d:4":""},"Output:"),n("p",null,"Explanation: All keys with values that were not a string were removed. When the object keys were removed during the filtering process, any resulting empty objects were also removed.")],-1),h=a(`<p><strong>Example 3:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]],

fn = (x) =&gt; x &gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: [[5,10]]</p><p>Explanation: All values that were not greater than 0 were removed. When the values were removed during the filtering process, any resulting empty arrays were also removed.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [[[[5]]]],

fn = (x) =&gt; Array.isArray(x)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output: undefined</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>fn</code> is a function that returns a boolean value</li><li><code>obj</code> is a valid JSON object or array</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个对象 <code>obj</code> 和一个函数 <code>fn</code>，返回一个经过筛选的对象 <code>filteredObject</code>。</p><p>函数 <code>deepFilter</code> 应该在对象 <code>obj</code> 上执行深度筛选操作。深度筛选操作应该移除筛选函数 <code>fn</code> 输出为 <code>false</code> 的属性，以及在键被移除后仍然存在的任何空对象或数组。</p><p>如果深度筛选操作导致对象或数组为空，没有剩余属性，<code>deepFilter</code> 应该返回 <code>undefined</code>，表示在 <code>filteredObject</code> 中没有有效数据。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [-5, -4, -3, -2, -1, 0, 1],

fn = (x) =&gt; x &gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[1]</p><p><strong>解释：</strong> 所有不大于 0 的值都被移除。</p></blockquote><p><strong>示例 2：</strong></p>`,13),x=n("blockquote",null,[n("p",null,[n("strong",null,"输入：")]),n("div",{class:"language-text line-numbers-mode","data-ext":"text"},[n("pre",{class:"language-text"},[n("code",null,`obj = {"a": 1, "b": "2", "c": 3, "d": "4", "e": 5, "f": 6, "g": {"a": 1}},

fn = (x) => typeof x === "string"
`)]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])]),n("p",null,[n("strong",{"b:2,d:4":""},"输出：")]),n("p",null,[n("strong",null,"解释："),e(" 所有值不是字符串的键都被移除。在筛选过程中移除键后，任何导致为空的对象也被移除。")])],-1),y=a(`<p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [-1, [-1, -1, 5, -1, 10], -1, [-1], [-5]],

fn = (x) =&gt; x &gt; 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong>[[5,10]]</p><p><strong>解释：</strong> 所有不大于 0 的值都被移除。在筛选过程中移除值后，任何导致为空的数组也被移除。</p></blockquote><p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>obj = [[[[5]]]],

fn = (x) =&gt; Array.isArray(x)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong> undefined</p></blockquote><p><strong>提示：</strong></p><ul><li><code>fn</code> 是一个返回布尔值的函数</li><li><code>obj</code> 是一个有效的 JSON 对象</li><li><code>2 &lt;= JSON.stringify(obj).length &lt;= 10**5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>定义递归函数 <code>dfs</code>，用于对传入的对象或数组进行深度筛选，会对 <code>obj</code> 中的每个属性进行递归检查，符合条件的保留，不符合的剔除。</p></li><li><p><strong>递归处理数组</strong>：</p><ul><li>在 <code>dfs</code> 函数内，首先检查 <code>obj</code> 是否是数组。</li><li>如果是数组，则对每个元素调用 <code>dfs</code> 递归处理并存储到新数组 <code>res</code> 中。</li><li>之后，通过 <code>filter</code> 去除 <code>undefined</code> 项，仅保留有效数据。</li><li>如果 <code>res</code> 数组有内容，返回 <code>res</code>，否则返回 <code>undefined</code>。</li></ul></li><li><p><strong>递归处理对象</strong>：</p><ul><li>如果 <code>obj</code> 是对象，则创建一个空对象 <code>res</code>，然后遍历 <code>obj</code> 的每个属性。</li><li>对每个属性调用 <code>dfs</code> 递归处理，并将结果存储在 <code>filteredValue</code> 中。</li><li>如果 <code>filteredValue</code> 不为 <code>undefined</code>，将该属性和值保留在 <code>res</code> 中。</li><li>遍历完成后，如果 <code>res</code> 不为空，返回 <code>res</code>；否则返回 <code>undefined</code>。</li></ul></li><li><p><strong>处理基本数据类型</strong>：</p><ul><li>对于非对象和非数组的值，直接调用筛选函数 <code>fn</code>。</li><li>如果 <code>fn</code> 返回 <code>true</code>，保留该值；</li><li>否则返回 <code>undefined</code> 表示不保留。</li></ul></li><li><p>整个 <code>dfs</code> 处理完成后，返回筛选后的结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是对象的节点数，需要递归遍历每个节点。</li><li><strong>空间复杂度</strong>：<code>O(d)</code>，其中 <code>d</code> 是对象的最大嵌套深度，主要是递归调用栈的开销。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span> <span class="token parameter">obj</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">deepFilter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 递归处理数组</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> res <span class="token operator">=</span> obj<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>dfs<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> res<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> res <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 递归处理对象</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">const</span> filteredValue <span class="token operator">=</span> <span class="token function">dfs</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>filteredValue <span class="token operator">!==</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> filteredValue<span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
			<span class="token keyword">return</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">?</span> res <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 处理基本数据类型</span>
		<span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">?</span> obj <span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token function">dfs</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function j(w,_){const c=o("font"),t=o("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[e("🟠 "),s(c,{color:"#ffb800"},{default:d(()=>[e("Medium")]),_:1}),e("  🔗 "),n("a",k,[v,s(t)]),e(),n("a",b,[m,s(t)])]),g,f,h,x,y])}const q=p(r,[["render",j],["__file","2823.html.vue"]]);export{q as default};

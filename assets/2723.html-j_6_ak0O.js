import{_ as p,r as a,o as r,c as i,a as s,b as e,d as n,w as c,e as l}from"./app-Ob52y8QZ.js";const d={},u=s("h1",{id:"_2723-两个-promise-对象相加",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2723-两个-promise-对象相加","aria-hidden":"true"},"#"),e(" 2723. 两个 Promise 对象相加")],-1),m={href:"https://leetcode.cn/problems/add-two-promises",target:"_blank",rel:"noopener noreferrer"},k=s("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/add-two-promises",target:"_blank",rel:"noopener noreferrer"},h=s("code",null,"LeetCode",-1),g=l(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two promises <code>promise1</code> and <code>promise2</code>, return a new promise. <code>promise1</code> and <code>promise2</code> will both resolve with a number. The returned promise should resolve with the sum of the two numbers.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(2), 20)),</p><p>promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(5), 60))</p><p>Output: 7</p><p>Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(10), 50)),</p><p>promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(-12), 30))</p><p>Output: -2</p><p>Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>promise1</code> and <code>promise2</code> are promises that resolve with a number</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个 promise 对象 <code>promise1</code> 和 <code>promise2</code>，返回一个新的 promise。<code>promise1</code> 和 <code>promise2</code> 都会被解析为一个数字。返回的 Promise 应该解析为这两个数字的和。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(2), 20)),</p><p>promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(5), 60))</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 两个输入的 Promise 分别解析为值 2 和 5。返回的 Promise 应该解析为 2 + 5 = 7。返回的 Promise 解析的时间不作为判断条件。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong></p><p>promise1 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(10), 50)),</p><p>promise2 = new Promise(resolve =&gt; setTimeout(() =&gt; resolve(-12), 30))</p><p><strong>输出：</strong> -2</p><p><strong>解释：</strong> 两个输入的 Promise 分别解析为值 10 和 -12。返回的 Promise 应该解析为 10 + -12 = -2。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>promise1 和 promise2</code> 都是被解析为一个数字的 promise 对象</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>Promise 解析</strong>：JavaScript 的 <code>Promise</code> 是一种用于异步操作的对象，支持异步操作结束后（不论是成功还是失败）执行相应的处理代码。我们需要从两个 <code>Promise</code> 中解析出它们的值。</p></li><li><p><strong>组合 Promise</strong>：可以使用 <code>Promise.all()</code> 来处理多个 Promise，它接收一个 Promise 数组，并返回一个新的 Promise，当所有输入的 Promise 都解决（fulfilled）时，新的 Promise 也会被解决，并且其解析值为输入 Promise 的解析值组成的数组。</p></li><li><p><strong>返回结果</strong>：当两个 Promise 都成功解析后，我们将它们的值相加，并返回一个新的 Promise。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为 <code>Promise.all()</code> 会并发执行两个 Promise，它本身并不耗费额外时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需要常数空间来存储两个 Promise 的解析值。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> <span class="token parameter">promise1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span> <span class="token parameter">promise2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Promise<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">addTwoPromises</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">promise1<span class="token punctuation">,</span> promise2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>promise1<span class="token punctuation">,</span> promise2<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">values</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> values<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> values<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 将两个 Promise 的结果相加</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,22);function b(P,w){const t=a("font"),o=a("ExternalLinkIcon");return r(),i("div",null,[u,s("p",null,[e("🟢 "),n(t,{color:"#15bd66"},{default:c(()=>[e("Easy")]),_:1}),e("  🔗 "),s("a",m,[k,n(o)]),e(),s("a",v,[h,n(o)])]),g])}const f=p(d,[["render",b],["__file","2723.html.vue"]]);export{f as default};

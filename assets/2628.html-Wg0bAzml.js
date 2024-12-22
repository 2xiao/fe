import{_ as r,r as l,o as i,c as d,a as n,b as e,d as t,w as o,f as u,e as p}from"./app-U2ekqv2z.js";const h={},k=n("h1",{id:"_2628-完全相等的-json-字符串-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2628-完全相等的-json-字符串-🔒","aria-hidden":"true"},"#"),e(" 2628. 完全相等的 JSON 字符串 🔒")],-1),_={href:"https://leetcode.cn/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),m=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two values <code>o1</code> and <code>o2</code>, return a boolean value indicating whether two values, <code>o1</code> and <code>o2</code>, are <strong>deeply equal</strong>.</p><p>For two values to be <strong>deeply equal</strong> , the following conditions must be met:</p><ul><li><p>If both values are primitive types, they are <strong>deeply equal</strong> if they pass the <code>===</code> equality check.</p></li><li><p>If both values are arrays, they are <strong>deeply equal</strong> if they have the same elements in the same order, and each element is also <strong>deeply equal</strong> according to these conditions.</p></li><li><p>If both values are objects, they are <strong>deeply equal</strong> if they have the same keys, and the associated values for each key are also <strong>deeply equal</strong> according to these conditions.</p></li></ul><p>You may assume both values are the output of <code>JSON.parse</code>. In other words, they are valid JSON.</p><p>Please solve it without using lodash&#39;s <code>_.isEqual()</code> function</p><p><strong>Example 1:</strong></p>',7),b=n("blockquote",null,[n("p",{"x:1,y:2":""},'Input: o1 = {"x":1,"y":2}, o2 ='),n("p",null,"Output: true"),n("p",null,"Explanation: The keys and values match exactly.")],-1),v=n("p",null,[n("strong",null,"Example 2:")],-1),x=n("blockquote",null,[n("p",{"x:1,y:2":""},'Input: o1 = {"y":2,"x":1}, o2 ='),n("p",null,"Output: true"),n("p",null,"Explanation: Although the keys are in a different order, they still match exactly.")],-1),w=n("p",null,[n("strong",null,"Example 3:")],-1),q=n("blockquote",null,[n("p",{"x:null,L:[1,2,3]":""},'Input: o1 = {"x":null,"L":[1,2,3]}, o2 ='),n("p",null,"Output: false"),n("p",null,"Explanation: The array of numbers is different from the array of strings.")],-1),j=p('<p><strong>Example 4:</strong></p><blockquote><p>Input: o1 = true, o2 = false</p><p>Output: false</p><p>Explanation: true !== false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= JSON.stringify(o1).length &lt;= 10^5</code></li><li><code>1 &lt;= JSON.stringify(o2).length &lt;= 10^5</code></li><li><code>maxNestingDepth &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个对象 <code>o1</code> 和 <code>o2</code> ，请你检查它们是否 <strong>完全相等</strong> 。</p><p>对于两个 <strong>完全相等</strong> 的对象，必须满足以下条件：</p><ul><li>如果两个值都是原始类型，它们通过了 <code>===</code> 等式检查，则认为这两个值是 <strong>完全相等</strong> 的。</li><li>如果两个值都是数组，在它们具有相同元素且顺序相同，并且每个元素在这些条件下也 **完全相等 **时，认为这两个值是 <strong>完全相等</strong> 的。</li><li>如果两个值都是对象，在它们具有相同键，并且每个键关联的值在这些条件下也 <strong>完全相等</strong> 时，认为这两个值是 <strong>完全相等</strong> 的。</li></ul><p>你可以假设这两个对象都是 <code>JSON.parse</code> 的输出。换句话说，它们是有效的 <code>JSON</code> 。</p><p>请你在不使用 lodash 的 <code>_.isEqual()</code> 函数的前提下解决这个问题。</p><p><strong>示例 1：</strong></p>',11),O=n("blockquote",null,[n("p",{"x:1,y:2":""},[n("strong",null,"输入："),e(' o1 = {"x":1,"y":2}, o2 =')]),n("p",null,[n("strong",null,"输出："),e(" true")]),n("p",null,[n("strong",null,"输入："),e(" 键和值完全匹配。")])],-1),N=n("p",null,[n("strong",null,"示例 2：")],-1),E=n("blockquote",null,[n("p",{"x:1,y:2":""},[n("strong",null,"输入："),e(' o1 = {"y":2,"x":1}, o2 =')]),n("p",null,[n("strong",null,"输出："),e(" true")]),n("p",null,[n("strong",null,"解释："),e(" 尽管键的顺序不同，但它们仍然完全匹配。")])],-1),S=n("p",null,[n("strong",null,"示例 3：")],-1),I=n("blockquote",null,[n("p",{"x:null,L:[1,2,3]":""},[n("strong",null,"输入："),e(' o1 = {"x":null,"L":[1,2,3]}, o2 =')]),n("p",null,[n("strong",null,"输出："),e(" false")]),n("p",null,[n("strong",null,"解释："),e(" 数字数组不同于字符串数组。")])],-1),J=p(`<p><strong>示例 4：</strong></p><blockquote><p><strong>输入：</strong> o1 = true, o2 = false</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> true !== false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= JSON.stringify(o1).length &lt;= 10^5</code></li><li><code>1 &lt;= JSON.stringify(o2).length &lt;= 10^5</code></li><li><code>maxNestingDepth &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>主要的难点在于对比深层嵌套的对象和数组时，需要递归调用比较函数：</p><ol><li><p><strong>类型检查</strong>：</p><ul><li>首先检查两个值是否都是 <code>null</code> 或者都是对象。如果其中一个是 <code>null</code> 而另一个不是，则返回 <code>false</code>。</li></ul></li><li><p><strong>原始类型比较</strong>：</p><ul><li>如果两个值都是原始类型（如数字、字符串等），则使用 <code>===</code> 进行比较。</li></ul></li><li><p><strong>数组和对象比较</strong>：</p><ul><li>如果两个值都是数组，则比较它们的长度并递归比较每个元素。</li><li>如果两个值都是对象，则比较它们的键数、键的名称以及每个键对应的值。</li></ul></li><li><p><strong>递归调用</strong>：</p><ul><li>对于每个需要深入比较的值，递归调用比较函数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是两个对象的元素总数，因为每个元素都需要被比较。</li><li><strong>空间复杂度</strong>：<code>O(d)</code>，其中 <code>d</code> 是嵌套的最大深度，主要取决于递归的深度。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">areDeeplyEqual</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">o1<span class="token punctuation">,</span> o2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 检查 null 和原始类型</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>o1 <span class="token operator">===</span> o2<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 同时为 null 或相同原始类型</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>
		o1 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>
		o2 <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span>
		<span class="token keyword">typeof</span> o1 <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">||</span>
		<span class="token keyword">typeof</span> o2 <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span>
	<span class="token punctuation">)</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查是否为数组</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span> <span class="token operator">!==</span> Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 获取对象的键</span>
	<span class="token keyword">let</span> keys1 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o1<span class="token punctuation">)</span><span class="token punctuation">,</span>
		keys2 <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o2<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 检查键的数量</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>keys1<span class="token punctuation">.</span>length <span class="token operator">!==</span> keys2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token comment">// 递归比较每个键的值</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> keys1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 递归调用</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">areDeeplyEqual</span><span class="token punctuation">(</span>o1<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> o2<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,12),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"2625",-1),C=n("td",{style:{"text-align":"left"}},"扁平化嵌套数组",-1),V={style:{"text-align":"center"}},D=n("td",{style:{"text-align":"left"}},null,-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/flatten-deeply-nested-array",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2633",-1),M=n("td",{style:{"text-align":"left"}},"将对象转换为 JSON 字符串 🔒",-1),P={style:{"text-align":"center"}},Y=n("td",{style:{"text-align":"left"}},null,-1),z=n("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2675",-1),W=n("td",{style:{"text-align":"left"}},"将对象数组转换为矩阵 🔒",-1),X={style:{"text-align":"center"}},Z=n("td",{style:{"text-align":"left"}},null,-1),$=n("td",{style:{"text-align":"center"}},"🔴",-1),nn={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},tn={href:"https://leetcode.com/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},sn=n("td",{style:{"text-align":"center"}},"2700",-1),on=n("td",{style:{"text-align":"left"}},"两个对象之间的差异 🔒",-1),an={style:{"text-align":"center"}},ln=n("td",{style:{"text-align":"left"}},null,-1),pn=n("td",{style:{"text-align":"center"}},"🟠",-1),cn={style:{"text-align":"center"}},rn={href:"https://leetcode.cn/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"},dn={href:"https://leetcode.com/problems/differences-between-two-objects",target:"_blank",rel:"noopener noreferrer"};function un(hn,kn){const c=l("font"),s=l("ExternalLinkIcon"),a=l("RouterLink");return i(),d("div",null,[k,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:o(()=>[e("Medium")]),_:1}),e("  🔗 "),n("a",_,[g,t(s)]),e(),n("a",y,[f,t(s)])]),m,b,v,x,w,q,j,O,N,E,S,I,J,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[A,C,n("td",V,[t(a,{to:"/problem/2625.html"},{default:o(()=>[e("[✓]")]),_:1})]),D,B,n("td",T,[n("a",R,[e("🀄️"),t(s)]),e(),n("a",F,[e("🔗"),t(s)])])]),n("tr",null,[G,M,n("td",P,[t(a,{to:"/problem/2633.html"},{default:o(()=>[e("[✓]")]),_:1})]),Y,z,n("td",H,[n("a",K,[e("🀄️"),t(s)]),e(),n("a",Q,[e("🔗"),t(s)])])]),n("tr",null,[U,W,n("td",X,[t(a,{to:"/problem/2675.html"},{default:o(()=>[e("[✓]")]),_:1})]),Z,$,n("td",nn,[n("a",en,[e("🀄️"),t(s)]),e(),n("a",tn,[e("🔗"),t(s)])])]),n("tr",null,[sn,on,n("td",an,[t(a,{to:"/problem/2700.html"},{default:o(()=>[e("[✓]")]),_:1})]),ln,pn,n("td",cn,[n("a",rn,[e("🀄️"),t(s)]),e(),n("a",dn,[e("🔗"),t(s)])])])])])])}const gn=r(h,[["render",un],["__file","2628.html.vue"]]);export{gn as default};

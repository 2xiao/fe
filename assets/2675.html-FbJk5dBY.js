import{_ as u,r as e,o as i,c as r,a as n,b as s,d as a,w as o,f as d,e as c}from"./app-MsFeWfVD.js";const k={},m=n("h1",{id:"_2675-将对象数组转换为矩阵-🔒",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2675-将对象数组转换为矩阵-🔒","aria-hidden":"true"},"#"),s(" 2675. 将对象数组转换为矩阵 🔒")],-1),h={href:"https://leetcode.cn/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/array-of-objects-to-matrix",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),f=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write a function that converts an array of objects <code>arr</code> into a matrix <code>m</code>.</p><p><code>arr</code> is an array of objects or arrays. Each item in the array can be deeply nested with child arrays and child objects. It can also contain numbers, strings, booleans, and null values.</p><p>The first row <code>m</code> should be the column names. If there is no nesting, the column names are the unique keys within the objects. If there is nesting, the column names are the respective paths in the object separated by <code>&quot;.&quot;</code>.</p><p>Each of the remaining rows corresponds to an object in <code>arr</code>. Each value in the matrix corresponds to a value in an object. If a given object doesn&#39;t contain a value for a given column, the cell should contain an empty string <code>&quot;&quot;</code>.</p><p>The columns in the matrix should be in <strong>lexographically ascending</strong> order.</p><p><strong>Example 1:</strong></p>',7),y=n("blockquote",null,[n("p",null,"Input:"),n("p",null,"arr = ["),n("p",null,'{"b": 1, "a": 2},'),n("p",{"b:3,a:4":""}),n("p",null,"]"),n("p",null,"Output:"),n("p",null,"["),n("p",null,'["a", "b"],'),n("p",null,"[2, 1],"),n("p",null,"[4, 3]"),n("p",null,"]"),n("p",null,"Explanation:"),n("p",null,'There are two unique column names in the two objects: "a" and "b".'),n("p",null,'"a" corresponds with [2, 4].'),n("p",null,'"b" coresponds with [1, 3].')],-1),g=c(`<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>arr = [</p><p>{&quot;a&quot;: 1, &quot;b&quot;: 2},</p><p>{&quot;c&quot;: 3, &quot;d&quot;: 4},</p><p>{}</p><p>]</p><p>Output:</p><p>[</p><p>[&quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;],</p><p>[1, 2, &quot;&quot;, &quot;&quot;],</p><p>[&quot;&quot;, &quot;&quot;, 3, 4],</p><p>[&quot;&quot;, &quot;&quot;, &quot;&quot;, &quot;&quot;]</p><p>]</p><p>Explanation:</p><p>There are 4 unique column names: &quot;a&quot;, &quot;b&quot;, &quot;c&quot;, &quot;d&quot;.</p><p>The first object has values associated with &quot;a&quot; and &quot;b&quot;.</p><p>The second object has values associated with &quot;c&quot; and &quot;d&quot;.</p><p>The third object has no keys, so it is just a row of empty strings.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [</p><p>{&quot;a&quot;: {&quot;b&quot;: 1, &quot;c&quot;: 2}},</p><p>{&quot;a&quot;: {&quot;b&quot;: 3, &quot;d&quot;: 4}}</p><p>]</p><p>Output:</p><p>[</p><p>[&quot;a.b&quot;, &quot;a.c&quot;, &quot;a.d&quot;],</p><p>[1, 2, &quot;&quot;],</p><p>[3, &quot;&quot;, 4]</p><p>]</p><p>Explanation:</p><p>In this example, the objects are nested. The keys represent the full path to each value separated by periods.</p><p>There are three paths: &quot;a.b&quot;, &quot;a.c&quot;, &quot;a.d&quot;.</p></blockquote><p><strong>Example 4:</strong></p><blockquote><p>Input:</p><p>arr = [</p><p>[{&quot;a&quot;: null}],</p><p>[{&quot;b&quot;: true}],</p><p>[{&quot;c&quot;: &quot;x&quot;}]</p><p>]</p><p>Output:</p><p>[</p><p>[&quot;0.a&quot;, &quot;0.b&quot;, &quot;0.c&quot;],</p><p>[null, &quot;&quot;, &quot;&quot;],</p><p>[&quot;&quot;, true, &quot;&quot;],</p><p>[&quot;&quot;, &quot;&quot;, &quot;x&quot;]</p><p>]</p><p>Explanation:</p><p>Arrays are also considered objects with their keys being their indices.</p><p>Each array has one element so the keys are &quot;0.a&quot;, &quot;0.b&quot;, and &quot;0.c&quot;.</p></blockquote><p><strong>Example 5:</strong></p><blockquote><p>Input:</p><p>arr = [{}, {}, {}]</p><p>Output:</p><p>[[], [], [], []]</p><p>Explanation:</p><p>There are no keys so every row is an empty array.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>arr</code> is a valid JSON array</li><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>unique keys &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个函数，将对象数组 <code>arr</code> 转换为矩阵 <code>m</code> 。</p><p><code>arr</code> 是一个由对象组成的数组或一个数组。数组中的每个项都可以包含深层嵌套的子数组和子对象。它还可以包含数字、字符串、布尔值和空值。</p><p>矩阵 <code>m</code> 的第一行应该是列名。如果没有嵌套，列名是对象中的唯一键。如果存在嵌套，列名是对象中相应路径，以点号 <code>&quot;.&quot;</code> 分隔。</p><p>剩余的每一行对应 <code>arr</code> 中的一个对象。矩阵中的每个值对应对象中的一个值。如果给定对象在给定列中没有值，则应该包含空字符串 <code>&quot;&quot;</code> 。</p><p>矩阵中的列应按 <strong>字典序升序</strong> 排列。</p><p><strong>提示：</strong></p><ul><li><code>arr</code> 是一个有效的 JSON 数组</li><li><code>1 &lt;= arr.length &lt;= 1000</code></li><li><code>unique keys &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>定义一个映射来存储键值</strong>：</p><ul><li>使用一个 <code>Map</code>（<code>keyMap</code>）来存储每个路径（键名）及其对应的值和行号</li></ul></li><li><p><strong>深度优先搜索（DFS）函数</strong>：</p><ul><li>定义一个递归函数 <code>dfs</code>，用于遍历输入对象。</li><li><code>dfs</code> 函数接收三个参数：当前对象、当前路径（<code>prefix</code>）和当前行号（<code>row</code>）。</li><li>在遍历对象的键时，将当前键添加到路径前缀中（<code>prefix</code>），并检查该键的值： <ul><li>如果值是对象且不为 <code>null</code>，则递归调用 <code>dfs</code>。</li><li>如果值是基本类型（如字符串、数字等），将完整路径（<code>prefix</code>）和对应的值及行号存入 <code>keyMap</code>。</li></ul></li></ul></li><li><p><strong>填充结果矩阵</strong>：</p><ul><li>创建一个矩阵 <code>res</code>，其行数为 <code>arr.length + 1</code>，列数为 <code>keyMap.size</code>，并初始化为全空字符串。</li><li>第一行是经过排序的列名（即 <code>keyMap</code> 的所有键）。</li><li>遍历 <code>keyMap</code> 的每个键，并根据记录的行号将对应的值填入矩阵。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最终返回构建好的矩阵 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * m * d)</code>，其中 <code>n</code> 为数组长度，假设每个对象中最多有 <code>m</code> 个键，且对象的深度为 <code>d</code>，需要遍历整个对象和所有深层嵌套。</li><li><strong>空间复杂度</strong>：<code>O(n * k)</code>，其中 <code>n</code> 为数组长度，<code>k</code> 是唯一键路径的数量，哈希表 <code>keyMap</code> 的长度为 <code>k</code>，结果矩阵的大小为 <code>(n + 1) * k</code>，因此空间复杂度为 <code>O(n * k)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Array<span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>String<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">jsonToMatrix</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> keyMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 深度优先搜索函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历对象的每个键</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">of</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			prefix<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>key<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">&amp;&amp;</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果是对象且不为 null，递归调用 dfs</span>
				<span class="token function">dfs</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> prefix<span class="token punctuation">,</span> row<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// 生成完整的路径字符串</span>
				<span class="token keyword">const</span> prefixStr <span class="token operator">=</span> prefix<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 获取当前路径的值，并记录对应的行号</span>
				<span class="token keyword">const</span> item <span class="token operator">=</span> keyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>prefixStr<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				item<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> row <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 更新 keyMap</span>
				keyMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>prefixStr<span class="token punctuation">,</span> item<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 回溯，移除最后一个键</span>
			prefix<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历数组中的每个对象，调用 dfs</span>
	arr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">dfs</span><span class="token punctuation">(</span>item<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化结果矩阵</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>keyMap<span class="token punctuation">.</span>size<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 对路径字符串进行排序</span>
	res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>keyMap<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 填充结果矩阵</span>
	res<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		keyMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> value<span class="token punctuation">,</span> row <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
			<span class="token comment">// 将对应的值填入矩阵</span>
			res<span class="token punctuation">[</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span> <span class="token comment">// 返回最终的矩阵</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,25),_=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"2628",-1),w=n("td",{style:{"text-align":"left"}},"完全相等的 JSON 字符串 🔒",-1),j={style:{"text-align":"center"}},E=n("td",{style:{"text-align":"left"}},null,-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},I={href:"https://leetcode.cn/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/json-deep-equal",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2633",-1),N=n("td",{style:{"text-align":"left"}},"将对象转换为 JSON 字符串 🔒",-1),A={style:{"text-align":"center"}},C=n("td",{style:{"text-align":"left"}},null,-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/convert-object-to-json-string",target:"_blank",rel:"noopener noreferrer"};function z(R,D){const l=e("font"),t=e("ExternalLinkIcon"),p=e("RouterLink");return i(),r("div",null,[m,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:o(()=>[s("Hard")]),_:1}),s("  🔗 "),n("a",h,[b,a(t)]),s(),n("a",q,[v,a(t)])]),f,y,g,d(" prettier-ignore "),n("table",null,[_,n("tbody",null,[n("tr",null,[x,w,n("td",j,[a(p,{to:"/problem/2628.html"},{default:o(()=>[s("[✓]")]),_:1})]),E,M,n("td",O,[n("a",I,[s("🀄️"),a(t)]),s(),n("a",T,[s("🔗"),a(t)])])]),n("tr",null,[S,N,n("td",A,[a(p,{to:"/problem/2633.html"},{default:o(()=>[s("[✓]")]),_:1})]),C,L,n("td",V,[n("a",J,[s("🀄️"),a(t)]),s(),n("a",B,[s("🔗"),a(t)])])])])])])}const H=u(k,[["render",z],["__file","2675.html.vue"]]);export{H as default};

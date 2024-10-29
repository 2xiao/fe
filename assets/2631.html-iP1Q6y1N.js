import{_ as c,r as p,o as i,c as u,a as t,b as n,d as e,w as s,f as d,e as r}from"./app-mXo2sCT-.js";const h={},_={id:"_2631-分组",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_2631-分组","aria-hidden":"true"},"#",-1),k={href:"https://2xiao.github.io/leetcode-js/problem/2631.html",target:"_blank",rel:"noopener noreferrer"},g={href:"https://leetcode.cn/problems/group-by",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/group-by",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),v=r('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write code that enhances all arrays such that you can call the <code>array.groupBy(fn)</code> method on any array and it will return a <strong>grouped</strong> version of the array.</p><p>A <strong>grouped</strong> array is an object where each key is the output of <code>fn(arr[i])</code> and each value is an array containing all items in the original array which generate that key.</p><p>The provided callback <code>fn</code> will accept an item in the array and return a string key.</p><p>The order of each value list should be the order the items appear in the array. Any order of keys is acceptable.</p><p>Please solve it without lodash&#39;s <code>_.groupBy</code> function.</p><p><strong>Example 1:</strong></p>',7),x=t("blockquote",null,[t("p",null,"Input:"),t("p",null,"array = ["),t("p",null,'{"id":"1"},'),t("p",null,'{"id":"1"},'),t("p",{"id:2":""}),t("p",null,"],"),t("p",null,"fn = function (item) {"),t("p",null,"return item.id;"),t("p",null,"}"),t("p",null,"Output:"),t("p",null,"{"),t("p",null,'"1": [{"id": "1"}, {"id": "1"}],'),t("p",null,'"2": [{"id": "2"}]'),t("p",null,"}"),t("p",null,"Explanation:"),t("p",null,"Output is from array.groupBy(fn)."),t("p",null,'The selector function gets the "id" out of each item in the array.'),t("p",null,'There are two objects with an "id" of 1. Both of those objects are put in the first array.'),t("p",null,'There is one object with an "id" of 2. That object is put in the second array.')],-1),q=r(`<p><strong>Example 2:</strong></p><blockquote><p>Input:</p><p>array = [</p><p>[1, 2, 3],</p><p>[1, 3, 5],</p><p>[1, 5, 9]</p><p>]</p><p>fn = function (list) {</p><p>return String(list[0]);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p><p>Explanation:</p><p>The array can be of any type. In this case, the selector function defines the key as being the first element in the array.</p><p>All the arrays have 1 as their first element so they are grouped together.</p><p>{</p><p>&quot;1&quot;: [[1, 2, 3], [1, 3, 5], [1, 5, 9]]</p><p>}</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input:</p><p>array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</p><p>fn = function (n) {</p><p>return String(n &gt; 5);</p><p>}</p><p>Output:</p><p>{</p><p>&quot;true&quot;: [6, 7, 8, 9, 10],</p><p>&quot;false&quot;: [1, 2, 3, 4, 5]</p><p>}</p><p>Explanation:</p><p>The selector function splits the array by whether each number is greater than 5.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn</code> returns a string</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你编写一段可应用于所有数组的代码，使任何数组调用 <code>array. groupBy(fn)</code> 方法时，它返回对该数组 <strong>分组后</strong> 的结果。</p><p>数组 <strong>分组</strong> 是一个对象，其中的每个键都是 <code>fn(arr[i])</code> 的输出的一个数组，该数组中含有原数组中具有该键的所有项。</p><p>提供的回调函数 <code>fn</code> 将接受数组中的项并返回一个字符串类型的键。</p><p>每个值列表的顺序应该与元素在数组中出现的顺序相同。任何顺序的键都是可以接受的。</p><p>请在不使用 lodash 的 <code>_.groupBy</code> 函数的前提下解决这个问题。</p><p><strong>提示：</strong></p><ul><li><code>0 &lt;= array.length &lt;= 10^5</code></li><li><code>fn 返回一个字符串</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>创建结果对象</strong>：使用一个空对象来存储分组结果。</li><li><strong>遍历数组</strong>：使用 <code>forEach</code> 方法遍历调用 <code>groupBy</code> 的数组。</li><li><strong>使用分组函数</strong>：对于每个元素，调用 <code>fn(item)</code> 函数以获取分组键。</li><li><strong>构建分组结果</strong>： <ul><li>检查结果对象中是否已有该分组键。如果没有，创建一个新的数组。</li><li>将当前元素添加到相应的分组中。</li></ul></li><li><strong>返回结果对象</strong>：最后返回分组后的结果对象。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，因为需要遍历整个数组。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，在最坏情况下，所有元素可能会被分到一个组中。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Object<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">groupBy</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">fn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> key <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		res<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * [1,2,3].groupBy(String) // <span class="token punctuation">{</span>&quot;1&quot;:[1],&quot;2&quot;:[2],&quot;3&quot;:[3]<span class="token punctuation">}</span>
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),E=t("td",{style:{"text-align":"center"}},"2624",-1),B={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/snail-traversal",target:"_blank",rel:"noopener noreferrer"},T={style:{"text-align":"center"}},O=t("td",{style:{"text-align":"left"}},null,-1),I={style:{"text-align":"left"}},C=t("td",{style:{"text-align":"center"}},"2626",-1),L={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/array-reduce-transformation",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},A=t("td",{style:{"text-align":"left"}},null,-1),S={style:{"text-align":"left"}},M=t("td",{style:{"text-align":"center"}},"2634",-1),R={style:{"text-align":"left"}},F={href:"https://leetcode.com/problems/filter-elements-from-array",target:"_blank",rel:"noopener noreferrer"},P={style:{"text-align":"center"}},W=t("td",{style:{"text-align":"left"}},null,-1),z={style:{"text-align":"left"}},D=t("td",{style:{"text-align":"center"}},"2635",-1),G={style:{"text-align":"left"}},H={href:"https://leetcode.com/problems/apply-transform-over-each-element-in-array",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},K=t("td",{style:{"text-align":"left"}},null,-1),Q={style:{"text-align":"left"}},U=t("td",{style:{"text-align":"center"}},"2774",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/array-upper-bound",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},null,-1),$=t("td",{style:{"text-align":"left"}},null,-1),tt={style:{"text-align":"left"}};function nt(et,st){const a=p("ExternalLinkIcon"),o=p("font"),l=p("RouterLink");return i(),u("div",null,[t("h1",_,[f,n(),t("a",k,[n("2631. 分组"),e(a)])]),t("p",null,[n("🟠 "),e(o,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔗 "),t("a",g,[y,e(a)]),n(),t("a",m,[b,e(a)])]),v,x,q,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[E,t("td",B,[t("a",j,[n("蜗牛排序"),e(a)])]),t("td",T,[e(l,{to:"/problem/2624.html"},{default:s(()=>[n("[✓]")]),_:1})]),O,t("td",I,[e(o,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1})])]),t("tr",null,[C,t("td",L,[t("a",N,[n("数组归约运算"),e(a)])]),t("td",V,[e(l,{to:"/problem/2626.html"},{default:s(()=>[n("[✓]")]),_:1})]),A,t("td",S,[e(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[M,t("td",R,[t("a",F,[n("过滤数组中的元素"),e(a)])]),t("td",P,[e(l,{to:"/problem/2634.html"},{default:s(()=>[n("[✓]")]),_:1})]),W,t("td",z,[e(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[D,t("td",G,[t("a",H,[n("转换数组中的每个元素"),e(a)])]),t("td",J,[e(l,{to:"/problem/2635.html"},{default:s(()=>[n("[✓]")]),_:1})]),K,t("td",Q,[e(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])]),t("tr",null,[U,t("td",X,[t("a",Y,[n("数组的上界 🔒"),e(a)])]),Z,$,t("td",tt,[e(o,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1})])])])])])}const ot=c(h,[["render",nt],["__file","2631.html.vue"]]);export{ot as default};

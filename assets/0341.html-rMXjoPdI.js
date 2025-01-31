import{_ as i,r as l,o as p,c as r,a as n,b as t,d as e,w as s,f as d,e as u}from"./app-MkGfDfkx.js";const h={},k=n("h1",{id:"_341-扁平化嵌套列表迭代器",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_341-扁平化嵌套列表迭代器","aria-hidden":"true"},"#"),t(" 341. 扁平化嵌套列表迭代器")],-1),_=n("code",null,"栈",-1),m=n("code",null,"树",-1),g=n("code",null,"深度优先搜索",-1),f=n("code",null,"设计",-1),v=n("code",null,"队列",-1),b=n("code",null,"迭代器",-1),x={href:"https://leetcode.cn/problems/flatten-nested-list-iterator",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/flatten-nested-list-iterator",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"LeetCode",-1),N=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a nested list of integers <code>nestedList</code>. Each element is either an integer or a list whose elements may also be integers or other lists. Implement an iterator to flatten it.</p><p>Implement the <code>NestedIterator</code> class:</p><ul><li><code>NestedIterator(List&lt;NestedInteger&gt; nestedList)</code> Initializes the iterator with the nested list <code>nestedList</code>.</li><li><code>int next()</code> Returns the next integer in the nested list.</li><li><code>boolean hasNext()</code> Returns <code>true</code> if there are still some integers in the nested list and <code>false</code> otherwise.</li></ul><p>Your code will be tested with the following pseudocode:</p><blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>initialize iterator <span class="token keyword">with</span> nestedList
res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">while</span> iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  append iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to the end <span class="token keyword">of</span> res
<span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>If <code>res</code> matches the expected flattened list, then your code will be judged as correct.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nestedList = [[1,1],2,[1,1]]</p><p>Output: [1,1,2,1,1]</p><p>Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,1,2,1,1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nestedList = [1,[4,[6]]]</p><p>Output: [1,4,6]</p><p>Explanation: By calling next repeatedly until hasNext returns false, the order of elements returned by next should be: [1,4,6].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nestedList.length &lt;= 500</code></li><li>The values of the integers in the nested list is in the range <code>[-10^6, 10^6]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个嵌套的整数列表 <code>nestedList</code> 。每个元素要么是一个整数，要么是一个列表；该列表的元素也可能是整数或者是其他列表。请你实现一个迭代器将其扁平化，使之能够遍历这个列表中的所有整数。</p><p>实现扁平迭代器类 <code>NestedIterator</code> ：</p><ul><li><code>NestedIterator(List&lt;NestedInteger&gt; nestedList)</code> 用嵌套列表 <code>nestedList</code> 初始化迭代器。</li><li><code>int next()</code> 返回嵌套列表的下一个整数。</li><li><code>boolean hasNext()</code> 如果仍然存在待迭代的整数，返回 <code>true</code> ；否则，返回 <code>false</code> 。</li></ul><p>你的代码将会用下述伪代码检测：</p><blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>initialize iterator <span class="token keyword">with</span> nestedList
res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">while</span> iterator<span class="token punctuation">.</span><span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  append iterator<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> to the end <span class="token keyword">of</span> res
<span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>如果 <code>res</code> 与预期的扁平化列表匹配，那么你的代码将会被判为正确。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nestedList = [[1,1],2,[1,1]]</p><p><strong>输出：</strong>[1,1,2,1,1]</p><p><strong>解释：</strong> 通过重复调用 <em>next</em> 直到 <em>hasNex</em> t 返回 false， *next *返回的元素的顺序应该是: [1,1,2,1,1]。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nestedList = [1,[4,[6]]]</p><p><strong>输出：</strong>[1,4,6]</p><p><strong>解释：</strong> 通过重复调用 *next *直到 <em>hasNex</em> t 返回 false， *next *返回的元素的顺序应该是: [1,4,6]。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nestedList.length &lt;= 500</code></li><li>嵌套列表中的整数值在范围 <code>[-10^6, 10^6]</code> 内</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>利用递归深度优先搜索（DFS）将嵌套列表展开为一个扁平化数组，随后通过两个指针进行迭代。</p><ol><li><p><strong>初始化阶段</strong></p><ul><li>使用一个私有方法 <code>dfs()</code> 遍历嵌套列表，递归处理每个元素。</li><li>如果是整数，直接加入结果数组。</li><li>如果是列表，递归调用 <code>dfs()</code> 继续展开。</li><li>最终将扁平化的结果存储在一个数组 <code>flatten</code> 中。</li></ul></li><li><p><strong><code>hasNext()</code> 方法</strong></p><ul><li>检查当前指针是否小于扁平化数组的长度。</li></ul></li><li><p><strong><code>next()</code> 方法</strong></p><ul><li>返回当前指针指向的整数，同时将指针向后移动。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li>初始化（<code>dfs</code>）：需要遍历整个嵌套列表，时间复杂度为 <code>O(n)</code>，其中 <code>n</code> 是列表中所有整数和列表的总数。</li><li><code>hasNext()</code> 和 <code>next()</code>：每次调用的时间复杂度为 <code>O(1)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，额外使用的空间为存储扁平化数组的空间。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">NestedIterator</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">nestedList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 当前指针</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>flatten <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span>nestedList<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 扁平化后的数组</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 深度优先搜索展开列表</span>
	<span class="token function">dfs</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> item <span class="token keyword">of</span> arr<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">isInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果是整数，直接加入结果数组</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getInteger</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果是列表，递归展开</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">dfs</span><span class="token punctuation">(</span>item<span class="token punctuation">.</span><span class="token function">getList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 判断是否还有下一个整数</span>
	<span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cur <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flatten<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 返回当前整数并移动指针</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>flatten<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>cur<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,34),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"251",-1),j=n("td",{style:{"text-align":"left"}},"展开二维向量 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),z={style:{"text-align":"left"}},B=n("code",null,"设计",-1),C=n("code",null,"数组",-1),O=n("code",null,"双指针",-1),V=n("code",null,"1+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/flatten-2d-vector",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/flatten-2d-vector",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"281",-1),F=n("td",{style:{"text-align":"left"}},"锯齿迭代器 🔒",-1),M=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"设计",-1),H=n("code",null,"队列",-1),J=n("code",null,"数组",-1),K=n("code",null,"1+",-1),P=n("td",{style:{"text-align":"center"}},"🟠",-1),Q={style:{"text-align":"center"}},U={href:"https://leetcode.cn/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"385",-1),Z=n("td",{style:{"text-align":"left"}},"迷你语法分析器",-1),$=n("td",{style:{"text-align":"center"}},null,-1),nn={style:{"text-align":"left"}},tn=n("code",null,"栈",-1),en=n("code",null,"深度优先搜索",-1),sn=n("code",null,"字符串",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),on={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/mini-parser",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/mini-parser",target:"_blank",rel:"noopener noreferrer"},pn=n("td",{style:{"text-align":"center"}},"565",-1),rn=n("td",{style:{"text-align":"left"}},"数组嵌套",-1),dn=n("td",{style:{"text-align":"center"}},null,-1),un={style:{"text-align":"left"}},hn=n("code",null,"深度优先搜索",-1),kn=n("code",null,"数组",-1),_n=n("td",{style:{"text-align":"center"}},"🟠",-1),mn={style:{"text-align":"center"}},gn={href:"https://leetcode.cn/problems/array-nesting",target:"_blank",rel:"noopener noreferrer"},fn={href:"https://leetcode.com/problems/array-nesting",target:"_blank",rel:"noopener noreferrer"};function vn(bn,xn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[k,n("p",null,[t("🟠 "),e(c,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/tree.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/design.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/queue.html"},{default:s(()=>[v]),_:1}),t(),e(a,{to:"/tag/iterator.html"},{default:s(()=>[b]),_:1}),t("  🔗 "),n("a",x,[y,e(o)]),t(),n("a",w,[L,e(o)])]),N,d(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[q,j,E,n("td",z,[e(a,{to:"/tag/design.html"},{default:s(()=>[B]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[O]),_:1}),t(),V]),R,n("td",S,[n("a",T,[t("🀄️"),e(o)]),t(),n("a",Y,[t("🔗"),e(o)])])]),n("tr",null,[D,F,M,n("td",A,[e(a,{to:"/tag/design.html"},{default:s(()=>[G]),_:1}),t(),e(a,{to:"/tag/queue.html"},{default:s(()=>[H]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[J]),_:1}),t(),K]),P,n("td",Q,[n("a",U,[t("🀄️"),e(o)]),t(),n("a",W,[t("🔗"),e(o)])])]),n("tr",null,[X,Z,$,n("td",nn,[e(a,{to:"/tag/stack.html"},{default:s(()=>[tn]),_:1}),t(),e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[en]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[sn]),_:1})]),an,n("td",on,[n("a",ln,[t("🀄️"),e(o)]),t(),n("a",cn,[t("🔗"),e(o)])])]),n("tr",null,[pn,rn,dn,n("td",un,[e(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[hn]),_:1}),t(),e(a,{to:"/tag/array.html"},{default:s(()=>[kn]),_:1})]),_n,n("td",mn,[n("a",gn,[t("🀄️"),e(o)]),t(),n("a",fn,[t("🔗"),e(o)])])])])])])}const wn=i(h,[["render",vn],["__file","0341.html.vue"]]);export{wn as default};

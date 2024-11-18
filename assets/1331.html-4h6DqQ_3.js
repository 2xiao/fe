import{_ as r,r as p,o as c,c as i,a as n,b as t,d as a,w as s,f as u,e as d}from"./app-Ob52y8QZ.js";const h={},k=n("h1",{id:"_1331-数组序号转换",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1331-数组序号转换","aria-hidden":"true"},"#"),t(" 1331. 数组序号转换")],-1),_=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),f=n("code",null,"排序",-1),g={href:"https://leetcode.cn/problems/rank-transform-of-an-array",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/rank-transform-of-an-array",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>arr</code>, replace each element with its rank.</p><p>The rank represents how large the element is. The rank has the following rules:</p><ul><li>Rank is an integer starting from 1.</li><li>The larger the element, the larger the rank. If two elements are equal, their rank must be the same.</li><li>Rank should be as small as possible.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: arr = [40,10,20,30]</p><p>Output: [4,1,2,3]</p><p><strong>Explanation</strong> : 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: arr = [100,100,100]</p><p>Output: [1,1,1]</p><p><strong>Explanation</strong> : Same elements share the same rank.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: arr = [37,12,28,9,100,56,80,5,12]</p><p>Output: [5,3,4,2,8,6,7,1,3]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= arr.length &lt;= 10^5</code></li><li><code>-10^9 &lt;= arr[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>arr</code> ，请你将数组中的每个元素替换为它们排序后的序号。</p><p>序号代表了一个元素有多大。序号编号的规则如下：</p><ul><li>序号从 <code>1</code> 开始编号。</li><li>一个元素越大，那么序号越大。如果两个元素相等，那么它们的序号相同。</li><li>每个数字的序号都应该尽可能地小。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>对数组的副本进行去重，并从小到大排序</li><li>使用一个哈希表存储排序后数组中每个数字的排序</li><li>再次遍历原数组，在哈希表中查找出排序后返回</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，排序的时间复杂度是 <code>O(n log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，用于存储哈希表和排序后的数组副本。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">arr</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">arrayRankTransform</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> sorted <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> sorted<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>sorted<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,23),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"1632",-1),q=n("td",{style:{"text-align":"left"}},"矩阵转换后的秩",-1),I=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},C=n("code",null,"并查集",-1),L=n("code",null,"图",-1),N=n("code",null,"拓扑排序",-1),R=n("code",null,"3+",-1),T={style:{"text-align":"left"}},V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/rank-transform-of-a-matrix",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/rank-transform-of-a-matrix",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},"2089",-1),G=n("td",{style:{"text-align":"left"}},"找出数组排序后的目标下标",-1),H=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},z=n("code",null,"数组",-1),A=n("code",null,"二分查找",-1),D=n("code",null,"排序",-1),F={style:{"text-align":"left"}},J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/find-target-indices-after-sorting-array",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/find-target-indices-after-sorting-array",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return c(),i("div",null,[k,n("p",null,[t("🟢 "),a(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),a(e,{to:"/tag/array.html"},{default:s(()=>[_]),_:1}),t(),a(e,{to:"/tag/hash-table.html"},{default:s(()=>[m]),_:1}),t(),a(e,{to:"/tag/sorting.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",g,[b,a(o)]),t(),n("a",y,[v,a(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[E,q,I,n("td",O,[a(e,{to:"/tag/union-find.html"},{default:s(()=>[C]),_:1}),t(),a(e,{to:"/tag/graph.html"},{default:s(()=>[L]),_:1}),t(),a(e,{to:"/tag/topological-sort.html"},{default:s(()=>[N]),_:1}),t(),R]),n("td",T,[a(l,{color:"#ff334b"},{default:s(()=>[t("Hard")]),_:1})]),n("td",V,[n("a",j,[t("🀄️"),a(o)]),t(),n("a",B,[t("🔗"),a(o)])])]),n("tr",null,[S,G,H,n("td",M,[a(e,{to:"/tag/array.html"},{default:s(()=>[z]),_:1}),t(),a(e,{to:"/tag/binary-search.html"},{default:s(()=>[A]),_:1}),t(),a(e,{to:"/tag/sorting.html"},{default:s(()=>[D]),_:1})]),n("td",F,[a(l,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1})]),n("td",J,[n("a",K,[t("🀄️"),a(o)]),t(),n("a",P,[t("🔗"),a(o)])])])])])])}const Y=r(h,[["render",Q],["__file","1331.html.vue"]]);export{Y as default};

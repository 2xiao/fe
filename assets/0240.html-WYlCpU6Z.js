import{_ as p,r as c,o as i,c as r,a as n,b as a,d as t,w as s,f as d,e as u}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_240-搜索二维矩阵-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_240-搜索二维矩阵-ii","aria-hidden":"true"},"#"),a(" 240. 搜索二维矩阵 II")],-1),m=n("code",null,"数组",-1),g=n("code",null,"二分查找",-1),_=n("code",null,"分治",-1),f=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/search-a-2d-matrix-ii",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/search-a-2d-matrix-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Write an efficient algorithm that searches for a value <code>target</code> in an <code>m x n</code> integer matrix <code>matrix</code>. This matrix has the following properties:</p><ul><li>Integers in each row are sorted in ascending from left to right.</li><li>Integers in each column are sorted in ascending from top to bottom.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/24/searchgrid2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/24/searchgrid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= n, m &lt;= 300</code></li><li><code>-10^9 &lt;= matrix[i][j] &lt;= 10^9</code></li><li>All the integers in each row are <strong>sorted</strong> in ascending order.</li><li>All the integers in each column are <strong>sorted</strong> in ascending order.</li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>编写一个高效的算法来搜索 <code>m x n</code> 矩阵 <code>matrix</code> 中的一个目标值 <code>target</code> 。该矩阵具有以下特性：</p><ul><li>每行的元素从左到右升序排列。</li><li>每列的元素从上到下升序排列。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题说 <code>matrix</code> 从上到下递增，从左到右递增，显然左上角是最小元素，右下角是最大元素。我们如果想高效在 <code>matrix</code> 中搜索一个元素，肯定需要从某个角开始，比如说从左上角开始，然后每次只能向右或向下移动，不要走回头路。</p><p>如果真从左上角开始的话，就会发现无论向右还是向下走，元素大小都会增加，那么到底向右还是向下？不确定，那只好用类似 <strong>动态规划算法</strong> 的思路穷举了。</p><p>但实际上不用这么麻烦，我们不要从左上角开始，而是从右上角开始，规定只能向左或向下移动。</p><p>你注意，如果向左移动，元素在减小，如果向下移动，元素在增大，这样的话我们就可以根据当前位置的元素和 <code>target</code> 的相对大小来判断应该往哪移动，不断接近从而找到 <code>target</code> 的位置。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">searchMatrix</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> h <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">const</span> w <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> j <span class="token operator">=</span> w <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> h <span class="token operator">&amp;&amp;</span> j <span class="token operator">&gt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>matrix<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"74",-1),q=n("td",{style:{"text-align":"left"}},"搜索二维矩阵",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"数组",-1),N=n("code",null,"二分查找",-1),V=n("code",null,"矩阵",-1),B=n("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/search-a-2d-matrix",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/search-a-2d-matrix",target:"_blank",rel:"noopener noreferrer"};function O(R,T){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[a("🟠 "),t(l,{color:"#ffb800"},{default:s(()=>[a("Medium")]),_:1}),a("  🔖  "),t(e,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),a(),t(e,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),a(),t(e,{to:"/tag/divide-and-conquer.html"},{default:s(()=>[_]),_:1}),a(),t(e,{to:"/tag/matrix.html"},{default:s(()=>[f]),_:1}),a("  🔗 "),n("a",b,[x,t(o)]),a(),n("a",v,[y,t(o)])]),w,d(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[I,q,n("td",C,[t(e,{to:"/problem/0074.html"},{default:s(()=>[a("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/array.html"},{default:s(()=>[L]),_:1}),a(),t(e,{to:"/tag/binary-search.html"},{default:s(()=>[N]),_:1}),a(),t(e,{to:"/tag/matrix.html"},{default:s(()=>[V]),_:1})]),B,n("td",z,[n("a",A,[a("🀄️"),t(o)]),a(),n("a",M,[a("🔗"),t(o)])])])])])])}const W=p(k,[["render",O],["__file","0240.html.vue"]]);export{W as default};

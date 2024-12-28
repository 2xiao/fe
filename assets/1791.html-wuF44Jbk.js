import{_ as d,r as c,o as r,c as p,a as e,b as n,d as t,w as s,f as i,e as u}from"./app-fEpXkbSw.js";const h={},g=e("h1",{id:"_1791-找出星型图的中心节点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1791-找出星型图的中心节点","aria-hidden":"true"},"#"),n(" 1791. 找出星型图的中心节点")],-1),k=e("code",null,"图",-1),_={href:"https://leetcode.cn/problems/find-center-of-star-graph",target:"_blank",rel:"noopener noreferrer"},m=e("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/find-center-of-star-graph",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There is an undirected <strong>star</strong> graph consisting of <code>n</code> nodes labeled from <code>1</code> to <code>n</code>. A star graph is a graph where there is one <strong>center</strong> node and <strong>exactly</strong> <code>n - 1</code> edges that connect the center node with every other node.</p><p>You are given a 2D integer array <code>edges</code> where each <code>edges[i] = [ui, vi]</code> indicates that there is an edge between the nodes <code>ui</code> and <code>vi</code>. Return the center of the given star graph.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/24/star_graph.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: edges = [[1,2],[2,3],[4,2]]</p><p>Output: 2</p><p>Explanation: As shown in the figure above, node 2 is connected to every other node, so 2 is the center.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: edges = [[1,2],[5,1],[1,3],[1,4]]</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>3 &lt;= n &lt;= 10^5</code></li><li><code>edges.length == n - 1</code></li><li><code>edges[i].length == 2</code></li><li><code>1 &lt;= ui, vi &lt;= n</code></li><li><code>ui != vi</code></li><li>The given <code>edges</code> represent a valid star graph.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有一个无向的 <strong>星型</strong> 图，由 <code>n</code> 个编号从 <code>1</code> 到 <code>n</code> 的节点组成。星型图有一个 <strong>中心</strong> 节点，并且恰有 <code>n - 1</code> 条边将中心节点与其他每个节点连接起来。</p><p>给你一个二维整数数组 <code>edges</code> ，其中 <code>edges[i] = [ui, vi]</code> 表示在节点 <code>ui</code> 和 <code>vi</code> 之间存在一条边。请你找出并返回 <code>edges</code> 所表示星型图的中心节点。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2021/03/14/star_graph.png)</p><blockquote><p><strong>输入：</strong> edges = [[1,2],[2,3],[4,2]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 如上图所示，节点 2 与其他每个节点都相连，所以节点 2 是中心节点。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> edges = [[1,2],[5,1],[1,3],[1,4]]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>3 &lt;= n &lt;= 10^5</code></li><li><code>edges.length == n - 1</code></li><li><code>edges[i].length == 2</code></li><li><code>1 &lt;= ui, vi &lt;= n</code></li><li><code>ui != vi</code></li><li>题目数据给出的 <code>edges</code> 表示一个有效的星型图</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>图的中心节点是连接所有其他节点的节点。因此，中心节点一定是出现在两条边中的共同节点。</p><p>根据星型图的性质，任意两个边中，至少有一个端点是重合的，重合的端点就是我们要找的中心节点。</p><ol><li><p><strong>分析输入</strong>：</p><ul><li>任意取两条边，假设取 <code>edges[0]</code> 和 <code>edges[1]</code>，每条边都包含两个节点。</li><li>边的信息为 <code>[[a1, b1], [a2, b2]]</code>，每条边分别连接了节点 <code>a1</code>、<code>b1</code> 和节点 <code>a2</code>、<code>b2</code>。</li></ul></li><li><p><strong>判断中心节点</strong>：</p><ul><li>检查 <code>a1</code> 和 <code>b1</code> 是否出现在两条边中。如果 <code>a1 == a2</code> 或 <code>a1 == b2</code>，说明 <code>a1</code> 是中心节点；否则，<code>b1</code> 就是中心节点。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只进行了一次简单的比较。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">edges</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findCenter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">edges</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>a1<span class="token punctuation">,</span> b1<span class="token punctuation">]</span> <span class="token operator">=</span> edges<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token punctuation">[</span>a2<span class="token punctuation">,</span> b2<span class="token punctuation">]</span> <span class="token operator">=</span> edges<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>a1 <span class="token operator">==</span> a2 <span class="token operator">||</span> a1 <span class="token operator">==</span> b2<span class="token punctuation">)</span> <span class="token keyword">return</span> a1<span class="token punctuation">;</span>
	<span class="token keyword">return</span> b1<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"2497",-1),w=e("td",{style:{"text-align":"left"}},"图中最大星和",-1),q=e("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},C=e("code",null,"贪心",-1),L=e("code",null,"图",-1),N=e("code",null,"数组",-1),V=e("code",null,"2+",-1),I=e("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/maximum-star-sum-of-a-graph",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/maximum-star-sum-of-a-graph",target:"_blank",rel:"noopener noreferrer"};function R(T,A){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),p("div",null,[g,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(a,{to:"/tag/graph.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[m,t(o)]),n(),e("a",b,[f,t(o)])]),v,i(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,w,q,e("td",E,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[C]),_:1}),n(),t(a,{to:"/tag/graph.html"},{default:s(()=>[L]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:s(()=>[N]),_:1}),n(),V]),I,e("td",O,[e("a",j,[n("🀄️"),t(o)]),n(),e("a",B,[n("🔗"),t(o)])])])])])])}const D=d(h,[["render",R],["__file","1791.html.vue"]]);export{D as default};

import{_ as p,r as l,o as i,c as r,a as t,b as n,d as s,w as e,f as d,e as u}from"./app-Ob52y8QZ.js";const h="/leetcode-js/assets/986-yCJJ3zbg.png",k={},_=t("h1",{id:"_986-区间列表的交集",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_986-区间列表的交集","aria-hidden":"true"},"#"),n(" 986. 区间列表的交集")],-1),m=t("code",null,"数组",-1),g=t("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/interval-list-intersections",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"LeetCode",-1),x=u('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two lists of closed intervals, <code>firstList</code> and <code>secondList</code>, where <code>firstList[i] = [starti, endi]</code> and <code>secondList[j] = [startj, endj]</code>. Each list of intervals is pairwise <strong>disjoint</strong> and in <strong>sorted order</strong>.</p><p>Return <em>the intersection of these two interval lists</em>.</p><p>A <strong>closed interval</strong> <code>[a, b]</code> (with <code>a &lt;= b</code>) denotes the set of real numbers <code>x</code> with <code>a &lt;= x &lt;= b</code>.</p><p>The <strong>intersection</strong> of two closed intervals is a set of real numbers that are either empty or represented as a closed interval. For example, the intersection of <code>[1, 3]</code> and <code>[2, 4]</code> is <code>[2, 3]</code>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/01/30/interval1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: firstList = [[0,2],[5,10],[13,23],[24,25]], secondList = [[1,5],[8,12],[15,24],[25,26]]</p><p>Output: [[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: firstList = [[1,3],[5,9]], secondList = []</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= firstList.length, secondList.length &lt;= 1000</code></li><li><code>firstList.length + secondList.length &gt;= 1</code></li><li><code>0 &lt;= starti &lt; endi &lt;= 10^9</code></li><li><code>endi &lt; starti+1</code></li><li><code>0 &lt;= startj &lt; endj &lt;= 10^9 </code></li><li><code>endj &lt; startj+1</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个由一些 <strong>闭区间</strong> 组成的列表，<code>firstList</code> 和 <code>secondList</code> ，其中 <code>firstList[i] = [starti, endi]</code> 而 <code>secondList[j] = [startj, endj]</code> 。每个区间列表都是成对 <strong>不相交</strong> 的，并且 <strong>已经排序</strong> 。</p><p>返回这 <strong>两个区间列表的交集</strong> 。</p><p>形式上，<strong>闭区间</strong> <code>[a, b]</code>（其中 <code>a &lt;= b</code>）表示实数 <code>x</code> 的集合，而 <code>a &lt;= x &lt;= b</code> 。</p><p>两个闭区间的 <strong>交集</strong> 是一组实数，要么为空集，要么为闭区间。例如，<code>[1, 3]</code> 和 <code>[2, 4]</code> 的交集为 <code>[2, 3]</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们用 <code>[a1, a2]</code> 和 <code>[b1, b2]</code> 表示在 <code>A</code> 和 <code>B</code> 中的两个区间，如果这两个区间有交集，需满足 <code>b2 &gt;= a1 &amp;&amp; a2 &gt;= b1</code>，分下面四种情况：</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>根据上图可以发现规律，假设交集区间是 <code>[c1, c2]</code>，那么</p><ul><li><code>c1 = max(a1, b1)</code></li><li><code>c2 = min(a2, b2)</code></li></ul><p>这一点就是寻找交集的核心。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">firstList</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">secondList</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">intervalIntersection</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">firstList<span class="token punctuation">,</span> secondList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> firstList<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> secondList<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> a1 <span class="token operator">=</span> firstList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			a2 <span class="token operator">=</span> firstList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			b1 <span class="token operator">=</span> secondList<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
			b2 <span class="token operator">=</span> secondList<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>a1 <span class="token operator">&lt;=</span> b2 <span class="token operator">&amp;&amp;</span> a2 <span class="token operator">&gt;=</span> b1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>a1<span class="token punctuation">,</span> b1<span class="token punctuation">)</span><span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">min</span><span class="token punctuation">(</span>a2<span class="token punctuation">,</span> b2<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>b2 <span class="token operator">&lt;</span> a2<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			j<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,26),L=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"56",-1),j=t("td",{style:{"text-align":"left"}},"合并区间",-1),E={style:{"text-align":"center"}},C={style:{"text-align":"left"}},q=t("code",null,"数组",-1),I=t("code",null,"排序",-1),M={style:{"text-align":"left"}},N={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},z=t("td",{style:{"text-align":"center"}},"88",-1),R=t("td",{style:{"text-align":"left"}},"合并两个有序数组",-1),A={style:{"text-align":"center"}},J={style:{"text-align":"left"}},O=t("code",null,"数组",-1),T=t("code",null,"双指针",-1),F=t("code",null,"排序",-1),H={style:{"text-align":"left"}},S={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},G=t("td",{style:{"text-align":"center"}},"759",-1),K=t("td",{style:{"text-align":"left"}},"员工空闲时间 🔒",-1),P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"数组",-1),W=t("code",null,"排序",-1),X=t("code",null,"堆（优先队列）",-1),Z={style:{"text-align":"left"}},$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/employee-free-time",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"2410",-1),et=t("td",{style:{"text-align":"left"}},"运动员和训练师的最大匹配数",-1),at=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},ct=t("code",null,"贪心",-1),lt=t("code",null,"数组",-1),pt=t("code",null,"双指针",-1),it=t("code",null,"1+",-1),rt={style:{"text-align":"left"}},dt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"},ht={href:"https://leetcode.com/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"};function kt(_t,mt){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[_,t("p",null,[n("🟠 "),s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),s(a,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),n(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),n("  🔗 "),t("a",f,[b,s(o)]),n(),t("a",v,[y,s(o)])]),x,d(" prettier-ignore "),t("table",null,[L,t("tbody",null,[t("tr",null,[w,j,t("td",E,[s(a,{to:"/problem/0056.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",C,[s(a,{to:"/tag/array.html"},{default:e(()=>[q]),_:1}),n(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[I]),_:1})]),t("td",M,[s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1})]),t("td",N,[t("a",V,[n("🀄️"),s(o)]),n(),t("a",B,[n("🔗"),s(o)])])]),t("tr",null,[z,R,t("td",A,[s(a,{to:"/problem/0088.html"},{default:e(()=>[n("[✓]")]),_:1})]),t("td",J,[s(a,{to:"/tag/array.html"},{default:e(()=>[O]),_:1}),n(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[T]),_:1}),n(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[F]),_:1})]),t("td",H,[s(c,{color:"#15bd66"},{default:e(()=>[n("Easy")]),_:1})]),t("td",S,[t("a",Y,[n("🀄️"),s(o)]),n(),t("a",D,[n("🔗"),s(o)])])]),t("tr",null,[G,K,P,t("td",Q,[s(a,{to:"/tag/array.html"},{default:e(()=>[U]),_:1}),n(),s(a,{to:"/tag/sorting.html"},{default:e(()=>[W]),_:1}),n(),s(a,{to:"/tag/heap-priority-queue.html"},{default:e(()=>[X]),_:1})]),t("td",Z,[s(c,{color:"#ff334b"},{default:e(()=>[n("Hard")]),_:1})]),t("td",$,[t("a",tt,[n("🀄️"),s(o)]),n(),t("a",nt,[n("🔗"),s(o)])])]),t("tr",null,[st,et,at,t("td",ot,[s(a,{to:"/tag/greedy.html"},{default:e(()=>[ct]),_:1}),n(),s(a,{to:"/tag/array.html"},{default:e(()=>[lt]),_:1}),n(),s(a,{to:"/tag/two-pointers.html"},{default:e(()=>[pt]),_:1}),n(),it]),t("td",rt,[s(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1})]),t("td",dt,[t("a",ut,[n("🀄️"),s(o)]),n(),t("a",ht,[n("🔗"),s(o)])])])])])])}const ft=p(k,[["render",kt],["__file","0986.html.vue"]]);export{ft as default};

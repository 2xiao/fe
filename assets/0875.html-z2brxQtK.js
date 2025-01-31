import{_ as i,r as l,o as p,c as r,a as n,b as e,d as t,w as s,f as d,e as u}from"./app-MkGfDfkx.js";const h={},k=n("h1",{id:"_875-爱吃香蕉的珂珂",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_875-爱吃香蕉的珂珂","aria-hidden":"true"},"#"),e(" 875. 爱吃香蕉的珂珂")],-1),m=n("code",null,"数组",-1),_=n("code",null,"二分查找",-1),g={href:"https://leetcode.cn/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/koko-eating-bananas",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Koko loves to eat bananas. There are <code>n</code> piles of bananas, the <code>ith</code> pile has <code>piles[i]</code> bananas. The guards have gone and will come back in <code>h</code> hours.</p><p>Koko can decide her bananas-per-hour eating speed of <code>k</code>. Each hour, she chooses some pile of bananas and eats <code>k</code> bananas from that pile. If the pile has less than <code>k</code> bananas, she eats all of them instead and will not eat any more bananas during this hour.</p><p>Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.</p><p>Return <em>the minimum integer</em> <code>k</code> <em>such that she can eat all the bananas within</em> <code>h</code> <em>hours</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: piles = [3,6,7,11], h = 8</p><p>Output: 4</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: piles = [30,11,23,4,20], h = 5</p><p>Output: 30</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: piles = [30,11,23,4,20], h = 6</p><p>Output: 23</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= piles.length &lt;= 10^4</code></li><li><code>piles.length &lt;= h &lt;= 10^9</code></li><li><code>1 &lt;= piles[i] &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>珂珂喜欢吃香蕉。这里有 <code>n</code> 堆香蕉，第 <code>i</code> 堆中有 <code>piles[i]</code> 根香蕉。警卫已经离开了，将在 <code>h</code> 小时后回来。</p><p>珂珂可以决定她吃香蕉的速度 <code>k</code> （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 <code>k</code> 根。如果这堆香蕉少于 <code>k</code> 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。</p><p>珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。</p><p>返回她可以在 <code>h</code> 小时内吃掉所有香蕉的最小速度 <code>k</code>（<code>k</code> 为整数）。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> piles = [3,6,7,11], h = 8</p><p><strong>输出：</strong> 4</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> piles = [30,11,23,4,20], h = 5</p><p><strong>输出：</strong> 30</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> piles = [30,11,23,4,20], h = 6</p><p><strong>输出：</strong> 23</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= piles.length &lt;= 10^4</code></li><li><code>piles.length &lt;= h &lt;= 10^9</code></li><li><code>1 &lt;= piles[i] &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>我们可以利用 <strong>二分查找</strong> 来解决问题。</p><ol><li>定义二分查找范围：</li></ol><ul><li>最小速度 <code>k</code> 为 <code>1</code>（即每小时至少吃 <code>1</code> 个香蕉）。</li><li>最大速度 <code>k</code> 为 <code>max(piles)</code>（如果珂珂每小时能吃光一堆香蕉，则速度不需要更快）。</li></ul><ol start="2"><li>设计判定条件：</li></ol><ul><li>给定吃香蕉速度 <code>k</code>，我们计算吃完所有香蕉所需的总时间： <ul><li>遍历所有香蕉堆，对于每堆的香蕉数 <code>pile</code>，需要的时间为 <code>ceil(pile / k)</code>（整数除法的向上取整）。</li></ul></li><li>如果所需总时间小于或等于 <code>h</code>，则 <code>k</code> 是可行的吃香蕉速度。</li></ul><ol start="3"><li>二分查找：</li></ol><ul><li>在范围 <code>[1, max(piles)]</code> 中进行二分查找： <ul><li>如果速度 <code>k</code> 可行（即在 <code>h</code> 小时内能吃完），尝试减小速度（右边界缩小）。</li><li>如果速度 <code>k</code> 不可行，尝试增大速度（左边界增大）。</li></ul></li><li>最终找到的左边界即为最小的可行速度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * log(max(piles)))</code><ul><li>二分查找的次数为 <code>O(log(max(piles)))</code> 。</li><li>每次判定需要遍历 <code>piles</code> 数组，时间复杂度为 <code>O(n)</code> 。</li><li>总时间复杂度为 <code> O(n * log(max(piles)))</code> 。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了常数额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">piles</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">h</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minEatingSpeed</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">piles<span class="token punctuation">,</span> h</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 二分查找范围</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>piles<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 定义计算需要时间的函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">canFinish</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">speed</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> pile <span class="token keyword">of</span> piles<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			time <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>pile <span class="token operator">/</span> speed<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 计算吃完每堆所需时间</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> time <span class="token operator">&lt;=</span> h<span class="token punctuation">;</span> <span class="token comment">// 是否在 h 小时内完成</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 二分查找</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">canFinish</span><span class="token punctuation">(</span>mid<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid<span class="token punctuation">;</span> <span class="token comment">// 尝试更小的速度</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 增大速度</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> left<span class="token punctuation">;</span> <span class="token comment">// 最小的速度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,39),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"774",-1),q=n("td",{style:{"text-align":"left"}},"最小化去加油站的最大距离 🔒",-1),E=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},O=n("code",null,"数组",-1),j=n("code",null,"二分查找",-1),C=n("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/minimize-max-distance-to-gas-station",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/minimize-max-distance-to-gas-station",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2064",-1),M=n("td",{style:{"text-align":"left"}},"分配给商店的最多商品的最小值",-1),B={style:{"text-align":"center"}},K={style:{"text-align":"left"}},R=n("code",null,"数组",-1),T=n("code",null,"二分查找",-1),F=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"2226",-1),H=n("td",{style:{"text-align":"left"}},"每个小孩最多能分到多少糖果",-1),J=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Q=n("code",null,"数组",-1),U=n("code",null,"二分查找",-1),W=n("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/maximum-candies-allocated-to-k-children",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"2498",-1),nn=n("td",{style:{"text-align":"left"}},"青蛙过河 II",-1),en=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},sn=n("code",null,"贪心",-1),an=n("code",null,"数组",-1),on=n("code",null,"二分查找",-1),ln=n("td",{style:{"text-align":"center"}},"🟠",-1),cn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/frog-jump-ii",target:"_blank",rel:"noopener noreferrer"},rn={href:"https://leetcode.com/problems/frog-jump-ii",target:"_blank",rel:"noopener noreferrer"},dn=n("td",{style:{"text-align":"center"}},"2594",-1),un=n("td",{style:{"text-align":"left"}},"修车的最少时间",-1),hn=n("td",{style:{"text-align":"center"}},null,-1),kn={style:{"text-align":"left"}},mn=n("code",null,"数组",-1),_n=n("code",null,"二分查找",-1),gn=n("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/minimum-time-to-repair-cars",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/minimum-time-to-repair-cars",target:"_blank",rel:"noopener noreferrer"};function yn(xn,wn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),r("div",null,[k,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[_]),_:1}),e("  🔗 "),n("a",g,[b,t(o)]),e(),n("a",f,[v,t(o)])]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[w,q,E,n("td",I,[t(a,{to:"/tag/array.html"},{default:s(()=>[O]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[j]),_:1})]),C,n("td",L,[n("a",N,[e("🀄️"),t(o)]),e(),n("a",V,[e("🔗"),t(o)])])]),n("tr",null,[z,M,n("td",B,[t(a,{to:"/problem/2064.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",K,[t(a,{to:"/tag/array.html"},{default:s(()=>[R]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[T]),_:1})]),F,n("td",S,[n("a",A,[e("🀄️"),t(o)]),e(),n("a",D,[e("🔗"),t(o)])])]),n("tr",null,[G,H,J,n("td",P,[t(a,{to:"/tag/array.html"},{default:s(()=>[Q]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[U]),_:1})]),W,n("td",X,[n("a",Y,[e("🀄️"),t(o)]),e(),n("a",Z,[e("🔗"),t(o)])])]),n("tr",null,[$,nn,en,n("td",tn,[t(a,{to:"/tag/greedy.html"},{default:s(()=>[sn]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[an]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[on]),_:1})]),ln,n("td",cn,[n("a",pn,[e("🀄️"),t(o)]),e(),n("a",rn,[e("🔗"),t(o)])])]),n("tr",null,[dn,un,hn,n("td",kn,[t(a,{to:"/tag/array.html"},{default:s(()=>[mn]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[_n]),_:1})]),gn,n("td",bn,[n("a",fn,[e("🀄️"),t(o)]),e(),n("a",vn,[e("🔗"),t(o)])])])])])])}const En=i(h,[["render",yn],["__file","0875.html.vue"]]);export{En as default};

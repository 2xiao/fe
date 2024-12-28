import{_ as i,r as c,o as r,c as p,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const h={},g=t("h1",{id:"_2144-打折购买糖果的最小开销",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2144-打折购买糖果的最小开销","aria-hidden":"true"},"#"),e(" 2144. 打折购买糖果的最小开销")],-1),_=t("code",null,"贪心",-1),m=t("code",null,"数组",-1),k=t("code",null,"排序",-1),f={href:"https://leetcode.cn/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A shop is selling candies at a discount. For <strong>every two</strong> candies sold, the shop gives a <strong>third</strong> candy for <strong>free</strong>.</p><p>The customer can choose <strong>any</strong> candy to take away for free as long as the cost of the chosen candy is less than or equal to the <strong>minimum</strong> cost of the two candies bought.</p><ul><li>For example, if there are <code>4</code> candies with costs <code>1</code>, <code>2</code>, <code>3</code>, and <code>4</code>, and the customer buys candies with costs <code>2</code> and <code>3</code>, they can take the candy with cost <code>1</code> for free, but not the candy with cost <code>4</code>.</li></ul><p>Given a <strong>0-indexed</strong> integer array <code>cost</code>, where <code>cost[i]</code> denotes the cost of the <code>ith</code> candy, return <em>the <strong>minimum cost</strong> of buying <strong>all</strong> the candies</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: cost = [1,2,3]</p><p>Output: 5</p><p>Explanation: We buy the candies with costs 2 and 3, and take the candy with cost 1 for free.</p><p>The total cost of buying all candies is 2 + 3 = 5. This is the <strong>only</strong> way we can buy the candies.</p><p>Note that we cannot buy candies with costs 1 and 3, and then take the candy with cost 2 for free.</p><p>The cost of the free candy has to be less than or equal to the minimum cost of the purchased candies.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: cost = [6,5,7,9,2,2]</p><p>Output: 23</p><p>Explanation: The way in which we can get the minimum cost is described below:</p><ul><li>Buy candies with costs 9 and 7</li><li>Take the candy with cost 6 for free</li><li>We buy candies with costs 5 and 2</li><li>Take the last remaining candy with cost 2 for free</li></ul><p>Hence, the minimum cost to buy all candies is 9 + 7 + 5 + 2 = 23.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: cost = [5,5]</p><p>Output: 10</p><p>Explanation: Since there are only 2 candies, we buy both of them. There is not a third candy we can take for free.</p><p>Hence, the minimum cost to buy all candies is 5 + 5 = 10.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= cost.length &lt;= 100</code></li><li><code>1 &lt;= cost[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一家商店正在打折销售糖果。每购买 <strong>两个</strong> 糖果，商店会 <strong>免费</strong> 送一个糖果。</p><p>免费送的糖果唯一的限制是：它的价格需要小于等于购买的两个糖果价格的 <strong>较小值</strong> 。</p><ul><li>比方说，总共有 <code>4</code> 个糖果，价格分别为 <code>1</code> ，<code>2</code> ，<code>3</code> 和 <code>4</code> ，一位顾客买了价格为 <code>2</code> 和 <code>3</code> 的糖果，那么他可以免费获得价格为 <code>1</code> 的糖果，但不能获得价格为 <code>4</code> 的糖果。</li></ul><p>给你一个下标从 <strong>0</strong> 开始的整数数组 <code>cost</code> ，其中 <code>cost[i]</code> 表示第 <code>i</code> 个糖果的价格，请你返回获得 <strong>所有</strong> 糖果的 <strong>最小</strong> 总开销。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> cost = [1,2,3]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 我们购买价格为 2 和 3 的糖果，然后免费获得价格为 1 的糖果。</p><p>总开销为 2 + 3 = 5 。这是开销最小的 <strong>唯一</strong> 方案。</p><p>注意，我们不能购买价格为 1 和 3 的糖果，并免费获得价格为 2 的糖果。</p><p>这是因为免费糖果的价格必须小于等于购买的 2 个糖果价格的较小值。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> cost = [6,5,7,9,2,2]</p><p><strong>输出：</strong> 23</p><p><strong>解释：</strong> 最小总开销购买糖果方案为：</p><ul><li>购买价格为 9 和 7 的糖果</li><li>免费获得价格为 6 的糖果</li><li>购买价格为 5 和 2 的糖果</li><li>免费获得价格为 2 的最后一个糖果</li></ul><p>因此，最小总开销为 9 + 7 + 5 + 2 = 23 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> cost = [5,5]</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong> 由于只有 2 个糖果，我们需要将它们都购买，而且没有免费糖果。</p><p>所以总最小开销为 5 + 5 = 10 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= cost.length &lt;= 100</code></li><li><code>1 &lt;= cost[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>排序</strong>：</p><ul><li>先对价格数组 <code>cost</code> 按降序排序，这样每组 3 件商品中，价格最低的那一件总是位于当前分组的最后一个位置，方便跳过。</li></ul></li><li><p><strong>遍历计算总花费</strong>：</p><ul><li>每次取当前的前两件商品的价格加到总花费中，跳过第 3 件（免费的商品）。</li><li>使用一个循环，每次增加 3 的步长（<code>i += 3</code>），只计算当前分组的前两件商品。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>最后返回计算的总花费 <code>total</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>，其中 <code>n</code> 是数组的长度，主要是排序的耗时。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序算法是原地排序，不占用额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">cost</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimumCost</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">cost</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 按降序排序</span>
	cost<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> b <span class="token operator">-</span> a<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> total <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 每三件商品，将前两件的价格加到总花费中，跳过第 3 件</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cost<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">+=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		total <span class="token operator">+=</span> cost<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">&lt;</span> cost<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			total <span class="token operator">+=</span> cost<span class="token punctuation">[</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> total<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),w=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"561",-1),E=t("td",{style:{"text-align":"left"}},"数组拆分",-1),T={style:{"text-align":"center"}},C={style:{"text-align":"left"}},N=t("code",null,"贪心",-1),I=t("code",null,"数组",-1),L=t("code",null,"计数排序",-1),O=t("code",null,"1+",-1),V=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"1200",-1),R=t("td",{style:{"text-align":"left"}},"最小绝对差",-1),S={style:{"text-align":"center"}},W={style:{"text-align":"left"}},A=t("code",null,"数组",-1),G=t("code",null,"排序",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/minimum-absolute-difference",target:"_blank",rel:"noopener noreferrer"},K={href:"https://leetcode.com/problems/minimum-absolute-difference",target:"_blank",rel:"noopener noreferrer"},M=t("td",{style:{"text-align":"center"}},"3122",-1),P=t("td",{style:{"text-align":"left"}},"使矩阵满足条件的最少操作次数",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},X=t("code",null,"数组",-1),Y=t("code",null,"动态规划",-1),Z=t("code",null,"矩阵",-1),$=t("td",{style:{"text-align":"center"}},"🟠",-1),tt={style:{"text-align":"center"}},et={href:"https://leetcode.cn/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/minimum-number-of-operations-to-satisfy-conditions",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"3142",-1),ot=t("td",{style:{"text-align":"left"}},"判断矩阵是否满足条件",-1),at=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},lt=t("code",null,"数组",-1),it=t("code",null,"矩阵",-1),rt=t("td",{style:{"text-align":"center"}},"🟢",-1),pt={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/check-if-grid-satisfies-conditions",target:"_blank",rel:"noopener noreferrer"};function ht(gt,_t){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return r(),p("div",null,[g,t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(o,{to:"/tag/greedy.html"},{default:s(()=>[_]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[k]),_:1}),e("  🔗 "),t("a",f,[b,n(a)]),e(),t("a",y,[x,n(a)])]),v,d(" prettier-ignore "),t("table",null,[w,t("tbody",null,[t("tr",null,[q,E,t("td",T,[n(o,{to:"/problem/0561.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",C,[n(o,{to:"/tag/greedy.html"},{default:s(()=>[N]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),e(),n(o,{to:"/tag/counting-sort.html"},{default:s(()=>[L]),_:1}),e(),O]),V,t("td",B,[t("a",j,[e("🀄️"),n(a)]),e(),t("a",F,[e("🔗"),n(a)])])]),t("tr",null,[H,R,t("td",S,[n(o,{to:"/problem/1200.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",W,[n(o,{to:"/tag/array.html"},{default:s(()=>[A]),_:1}),e(),n(o,{to:"/tag/sorting.html"},{default:s(()=>[G]),_:1})]),z,t("td",D,[t("a",J,[e("🀄️"),n(a)]),e(),t("a",K,[e("🔗"),n(a)])])]),t("tr",null,[M,P,Q,t("td",U,[n(o,{to:"/tag/array.html"},{default:s(()=>[X]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Y]),_:1}),e(),n(o,{to:"/tag/matrix.html"},{default:s(()=>[Z]),_:1})]),$,t("td",tt,[t("a",et,[e("🀄️"),n(a)]),e(),t("a",nt,[e("🔗"),n(a)])])]),t("tr",null,[st,ot,at,t("td",ct,[n(o,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),e(),n(o,{to:"/tag/matrix.html"},{default:s(()=>[it]),_:1})]),rt,t("td",pt,[t("a",dt,[e("🀄️"),n(a)]),e(),t("a",ut,[e("🔗"),n(a)])])])])])])}const kt=i(h,[["render",ht],["__file","2144.html.vue"]]);export{kt as default};

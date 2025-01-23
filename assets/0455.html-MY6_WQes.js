import{_ as i,r as o,o as d,c as r,a as s,b as n,d as a,w as e,e as c}from"./app-MsFeWfVD.js";const u={},k=s("h1",{id:"_455-分发饼干",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_455-分发饼干","aria-hidden":"true"},"#"),n(" 455. 分发饼干")],-1),h=s("code",null,"贪心",-1),m=s("code",null,"数组",-1),g=s("code",null,"双指针",-1),v=s("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},j=s("code",null,"LeetCode",-1),w=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Assume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie.</p><p>Each child <code>i</code> has a greed factor <code>g[i]</code>, which is the minimum size of a cookie that the child will be content with; and each cookie <code>j</code> has a size <code>s[j]</code>. If <code>s[j] &gt;= g[i]</code>, we can assign the cookie <code>j</code> to the child <code>i</code>, and the child <code>i</code> will be content. Your goal is to maximize the number of your content children and output the maximum number.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: g = [1,2,3], s = [1,1]</p><p>Output: 1</p><p>Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.</p><p>And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.</p><p>You need to output 1.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: g = [1,2], s = [1,2,3]</p><p>Output: 2</p><p>Explanation: You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2.</p><p>You have 3 cookies and their sizes are big enough to gratify all of the children,</p><p>You need to output 2.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= g.length &lt;= 3 * 10^4</code></li><li><code>0 &lt;= s.length &lt;= 3 * 10^4</code></li><li><code>1 &lt;= g[i], s[j] &lt;= 231 - 1</code></li></ul>',9),x=s("strong",null,"Note:",-1),y=c('<h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>假设你是一位很棒的家长，想要给你的孩子们一些小饼干。但是，每个孩子最多只能给一块饼干。</p><p>对每个孩子 <code>i</code>，都有一个胃口值 <code>g[i]</code>，这是能让孩子们满足胃口的饼干的最小尺寸；并且每块饼干 <code>j</code>，都有一个尺寸 <code>s[j]</code> 。如果 <code>s[j] &gt;= g[i]</code>，我们可以将这个饼干 <code>j</code> 分配给孩子 <code>i</code> ，这个孩子会得到满足。你的目标是满足尽可能多的孩子，并输出这个最大数值。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> g = [1,2,3], s = [1,1]</p><p><strong>输出:</strong> 1</p><p><strong>解释:</strong></p><p>你有三个孩子和两块小饼干，3 个孩子的胃口值分别是：1,2,3。</p><p>虽然你有两块小饼干，由于他们的尺寸都是 1，你只能让胃口值是 1 的孩子满足。</p><p>所以你应该输出 1。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> g = [1,2], s = [1,2,3]</p><p><strong>输出:</strong> 2</p><p><strong>解释:</strong></p><p>你有两个孩子和三块小饼干，2 个孩子的胃口值分别是 1,2。</p><p>你拥有的饼干数量和尺寸都足以让所有孩子满足。</p><p>所以你应该输出 2。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= g.length &lt;= 3 * 10^4</code></li><li><code>0 &lt;= s.length &lt;= 3 * 10^4</code></li><li><code>1 &lt;= g[i], s[j] &lt;= 231 - 1</code></li></ul>',9),q=s("strong",null,"注意：",-1),E=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了最大化满足孩子们的需求，可以采用<strong>贪心算法</strong>来解决这个问题。</p><ol><li><strong>排序</strong>：首先，对孩子们的胃口值数组 <code>g</code> 和饼干的尺寸数组 <code>s</code> 进行排序。排序后，可以依次尝试给每个孩子分配最小的满足条件的饼干。</li><li>使用两个指针 <code>i</code> 和 <code>j</code> 分别遍历孩子和饼干数组，对于每个孩子，尝试找到一个符合条件（即饼干尺寸大于等于孩子胃口值）的饼干： <ul><li>如果 <code>s[j] &gt;= g[i]</code>，就给孩子 <code>i</code> 分配饼干 <code>j</code>，然后 <code>i++</code> 和 <code>j++</code>。</li><li>如果 <code>s[j] &lt; g[i]</code>，则当前饼干无法满足孩子，<code>j++</code>，尝试下一个饼干。</li><li>当没有更多的孩子或饼干时，就停止。</li></ul></li><li>最后返回分配的饼干数量 <code>count</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log n)</code>。 <ul><li>排序需要 <code>O(n log n)</code> 时间，其中 <code>n</code> 是孩子或饼干数组的长度。</li><li>遍历数组需要 <code>O(n)</code> 时间。</li><li>总时间复杂度为 <code>O(n log n)</code>，因为排序是最耗时的操作。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储一些指针和计数器。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">g</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findContentChildren</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">g<span class="token punctuation">,</span> s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 排序孩子的胃口值和饼干的尺寸</span>
	g<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	s<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历孩子和饼干</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> g<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> g<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 如果当前饼干可以满足当前孩子，分配饼干</span>
			count<span class="token operator">++</span><span class="token punctuation">;</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 满足该孩子</span>
		<span class="token punctuation">}</span>
		j<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 继续查看下一个饼干</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function O(C,Y){const l=o("font"),t=o("RouterLink"),p=o("ExternalLinkIcon");return d(),r("div",null,[k,s("p",null,[n("🟢 "),a(l,{color:"#15bd66"},{default:e(()=>[n("Easy")]),_:1}),n("  🔖  "),a(t,{to:"/tag/greedy.html"},{default:e(()=>[h]),_:1}),n(),a(t,{to:"/tag/array.html"},{default:e(()=>[m]),_:1}),n(),a(t,{to:"/tag/two-pointers.html"},{default:e(()=>[g]),_:1}),n(),a(t,{to:"/tag/sorting.html"},{default:e(()=>[v]),_:1}),n("  🔗 "),s("a",b,[_,a(p)]),n(),s("a",f,[j,a(p)])]),w,s("p",null,[x,n(" This question is the same as "),a(t,{to:"/problem/2410.html"},{default:e(()=>[n("2410. Maximum Matching of Players With Trainers")]),_:1}),n(".")]),y,s("p",null,[q,n(" 本题与 "),a(t,{to:"/problem/2410.html"},{default:e(()=>[n("2410. 运动员和训练师的最大匹配数")]),_:1}),n(" 题相同。")]),E])}const I=i(u,[["render",O],["__file","0455.html.vue"]]);export{I as default};

import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-MkGfDfkx.js";const k={},m=n("h1",{id:"_433-最小基因变化",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_433-最小基因变化","aria-hidden":"true"},"#"),s(" 433. 最小基因变化")],-1),h=n("code",null,"广度优先搜索",-1),v=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),g={href:"https://leetcode.cn/problems/minimum-genetic-mutation",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimum-genetic-mutation",target:"_blank",rel:"noopener noreferrer"},G=n("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A gene string can be represented by an 8-character long string, with choices from <code>&#39;A&#39;</code>, <code>&#39;C&#39;</code>, <code>&#39;G&#39;</code>, and <code>&#39;T&#39;</code>.</p><p>Suppose we need to investigate a mutation from a gene string <code>startGene</code> to a gene string <code>endGene</code> where one mutation is defined as one single character changed in the gene string.</p><ul><li>For example, <code>&quot;AACCGGTT&quot; --&gt; &quot;AACCGGTA&quot;</code> is one mutation.</li></ul><p>There is also a gene bank <code>bank</code> that records all the valid gene mutations. A gene must be in <code>bank</code> to make it a valid gene string.</p><p>Given the two gene strings <code>startGene</code> and <code>endGene</code> and the gene bank <code>bank</code>, return <em>the minimum number of mutations needed to mutate from</em><code>startGene</code><em>to</em><code>endGene</code>. If there is no such a mutation, return <code>-1</code>.</p><p>Note that the starting point is assumed to be valid, so it might not be included in the bank.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: startGene = &quot;AACCGGTT&quot;, endGene = &quot;AACCGGTA&quot;, bank = [&quot;AACCGGTA&quot;]</p><p>Output: 1</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: startGene = &quot;AACCGGTT&quot;, endGene = &quot;AAACGGTA&quot;, bank = [&quot;AACCGGTA&quot;,&quot;AACCGCTA&quot;,&quot;AAACGGTA&quot;]</p><p>Output: 2</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= bank.length &lt;= 10</code></li><li><code>startGene.length == endGene.length == bank[i].length == 8</code></li><li><code>startGene</code>, <code>endGene</code>, and <code>bank[i]</code> consist of only the characters <code>[&#39;A&#39;, &#39;C&#39;, &#39;G&#39;, &#39;T&#39;]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>基因序列可以表示为一条由 <code>8</code> 个字符组成的字符串，其中每个字符都是 <code>&#39;A&#39;</code>、<code>&#39;C&#39;</code>、<code>&#39;G&#39;</code> 和 <code>&#39;T&#39;</code> 之一。</p><p>假设我们需要调查从基因序列 <code>start</code> 变为 <code>end</code> 所发生的基因变化。一次基因变化就意味着这个基因序列中的一个字符发生了变化。</p><p>例如，<code>&quot;AACCGGTT&quot; --&gt; &quot;AACCGGTA&quot;</code> 就是一次基因变化。</p><p>另有一个基因库 <code>bank</code> 记录了所有有效的基因变化，只有基因库中的基因才是有效的基因序列。（变化后的基因必须位于基因库 <code>bank</code> 中）</p><p>给你两个基因序列 <code>start</code> 和 <code>end</code> ，以及一个基因库 <code>bank</code> ，请你找出并返回能够使 <code>start</code> 变化为 <code>end</code> 所需的最少变化次数。如果无法完成此基因变化，返回 <code>-1</code> 。</p><p>注意：起始基因序列 <code>start</code> 默认是有效的，但是它并不一定会出现在基因库中。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题可以视作是一个无权图的最短路径问题，每个基因序列是图中的节点，相邻节点是那些只相差一个字符的序列。要找最短路径，可以使用 <strong>广度优先搜索（BFS）</strong>。</p><ol><li>将起始序列放入队列，同时设定一个集合用于记录已经访问过的基因序列，避免重复访问。</li><li>每次从队列中取出一个基因序列，尝试将其每个字符替换为 <code>A</code>、<code>C</code>、<code>G</code>、<code>T</code>，看看是否能得到一个新的有效序列（这个新序列需要在基因库中存在，且没有被访问过）。</li><li>如果某次得到的序列等于目标序列，直接返回当前的变化次数。</li><li>如果该序列有效且未访问，则将其加入队列，继续下一步的遍历。</li><li>如果队列为空但还未找到目标序列，返回 <code>-1</code>，表示无法到达目标序列。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(M * N)</code>，其中 <code>M</code> 是基因序列的长度（8），<code>N</code> 是基因库的大小。对于每个序列，都有 8 个位置可以变化，每个位置可以选择 3 种不同的字符，因此时间复杂度相对较低。</li><li><strong>空间复杂度</strong>：<code>O(N)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">startGene</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">endGene</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">bank</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minMutation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">startGene<span class="token punctuation">,</span> endGene<span class="token punctuation">,</span> bank</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> bankSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>bank<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 将bank转为set，查找更快</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>bankSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>endGene<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// 所有可能的字符</span>
	<span class="token keyword">const</span> gene <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;T&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>startGene<span class="token punctuation">]</span><span class="token punctuation">,</span>
		visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>startGene<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 记录已访问的基因序列</span>
		step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 如果新的基因序列就是目标序列</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> endGene<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> step<span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			<span class="token comment">// 生成新的基因序列</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newGene <span class="token keyword">of</span> <span class="token function">getAllMutation</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果新的基因序列在基因库中，且没有访问过</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newGene<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> bankSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newGene<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newGene<span class="token punctuation">)</span><span class="token punctuation">;</span>
					visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>newGene<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		step<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 求出所有可能的基因突变结果</span>
<span class="token keyword">var</span> <span class="token function-variable function">getAllMutation</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">gene</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		chars <span class="token operator">=</span> gene<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> chars<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newChar <span class="token keyword">of</span> <span class="token punctuation">[</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;G&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;T&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newChar<span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> char<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,28),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),A=n("td",{style:{"text-align":"center"}},"127",-1),C=n("td",{style:{"text-align":"left"}},"单词接龙",-1),q={style:{"text-align":"center"}},x={style:{"text-align":"left"}},T=n("code",null,"广度优先搜索",-1),N=n("code",null,"哈希表",-1),S=n("code",null,"字符串",-1),M=n("td",{style:{"text-align":"center"}},"🔴",-1),B={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/word-ladder",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/word-ladder",target:"_blank",rel:"noopener noreferrer"};function L(V,j){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[m,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",g,[_,a(o)]),s(),n("a",f,[G,a(o)])]),w,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[A,C,n("td",q,[a(e,{to:"/problem/0127.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",x,[a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[T]),_:1}),s(),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[N]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[S]),_:1})]),M,n("td",B,[n("a",E,[s("🀄️"),a(o)]),s(),n("a",I,[s("🔗"),a(o)])])])])])])}const F=l(k,[["render",L],["__file","0433.html.vue"]]);export{F as default};

import{_ as i,r as c,o as d,c as r,a as n,b as s,d as t,w as a,f as u,e as p}from"./app-MsFeWfVD.js";const k={},h=n("h1",{id:"_127-单词接龙",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_127-单词接龙","aria-hidden":"true"},"#"),s(" 127. 单词接龙")],-1),m=n("code",null,"广度优先搜索",-1),v=n("code",null,"哈希表",-1),g=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/word-ladder",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/word-ladder",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),y=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>transformation sequence</strong> from word <code>beginWord</code> to word <code>endWord</code> using a dictionary <code>wordList</code> is a sequence of words <code>beginWord -&gt; s1 -&gt; s2 -&gt; ... -&gt; sk</code> such that:</p><ul><li>Every adjacent pair of words differs by a single letter.</li><li>Every <code>si</code> for <code>1 &lt;= i &lt;= k</code> is in <code>wordList</code>. Note that <code>beginWord</code> does not need to be in <code>wordList</code>.</li><li><code>sk == endWord</code></li></ul><p>Given two words, <code>beginWord</code> and <code>endWord</code>, and a dictionary <code>wordList</code>, return <em>the <strong>number of words</strong> in the <strong>shortest transformation sequence</strong> from</em> <code>beginWord</code> <em>to</em> <code>endWord</code> <em>, or</em><code>0</code> <em>if no such sequence exists.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;,&quot;cog&quot;]</p><p>Output: 5</p><p>Explanation: One shortest transformation sequence is &quot;hit&quot; -&gt; &quot;hot&quot; -&gt; &quot;dot&quot; -&gt; &quot;dog&quot; -&gt; cog&quot;, which is 5 words long.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: beginWord = &quot;hit&quot;, endWord = &quot;cog&quot;, wordList = [&quot;hot&quot;,&quot;dot&quot;,&quot;dog&quot;,&quot;lot&quot;,&quot;log&quot;]</p><p>Output: 0</p><p>Explanation: The endWord &quot;cog&quot; is not in wordList, therefore there is no valid transformation sequence.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= beginWord.length &lt;= 10</code></li><li><code>endWord.length == beginWord.length</code></li><li><code>1 &lt;= wordList.length &lt;= 5000</code></li><li><code>wordList[i].length == beginWord.length</code></li><li><code>beginWord</code>, <code>endWord</code>, and <code>wordList[i]</code> consist of lowercase English letters.</li><li><code>beginWord != endWord</code></li><li>All the words in <code>wordList</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>字典 <code>wordList</code> 中从单词 <code>beginWord</code> 到 <code>endWord</code> 的 <strong>转换序列</strong> 是一个按下述规格形成的序列 <code>beginWord -&gt; s1 -&gt; s2 -&gt; ... -&gt; sk</code>：</p><ul><li>每一对相邻的单词只差一个字母。</li><li>对于 <code>1 &lt;= i &lt;= k</code> 时，每个 <code>si</code> 都在 <code>wordList</code> 中。注意， <code>beginWord</code> 不需要在 <code>wordList</code> 中。</li><li><code>sk == endWord</code></li></ul><p>给你两个单词 <code>beginWord</code> 和 <code>endWord</code> 和一个字典 <code>wordList</code> ，返回 从 <code>beginWord</code> 到 <code>endWord</code> 的 <strong>最短转换序列</strong> 中的 <strong>单词数目</strong> 。如果不存在这样的转换序列，返回 <code>0</code> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',15),q=n("strong",null,"图的最短路径问题",-1),W=n("strong",null,"广度优先搜索（BFS）",-1),x=p(`<p>只不过第 433 题给定了基因的变化范围是 <code>A/T/G/C</code>，而这道题中，用于替换单词中每个字符的字符范围需要自己从 <code>wordList</code> 中求得。</p><ol><li>将起始单词 <code>beginWord</code> 放入队列 <code>queue</code>，同时设定一个集合 <code>visited</code> 用于记录已经访问过的单词，避免重复访问。</li><li>每次从队列中取出一个单词，尝试将其每个字符替换，看看是否能得到一个新的有效单词（这个新单词需要在字典中存在，且没有被访问过）。</li><li>如果某次得到的单词等于目标单词 <code>endWord</code>，直接返回当前的变化次数 <code>step + 1</code>。</li><li>如果该单词有效且未访问，则将其加入队列，继续下一步的遍历。</li><li>如果队列为空但还未找到目标单词，返回 <code>0</code>，表示无法到达目标单词。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n / m)</code>，其中 <code>n</code> 是字典中的单词数量，<code>m</code> 是单词的长度。在每次 BFS 扩展时，我们会对每个单词的每个字母进行替换，生成新的单词并检查是否存在于字典中。</li><li><strong>空间复杂度</strong>：<code>O(k * m + n)</code>，其中 <code>n</code> 是字典中的单词数量，<code>m</code> 是单词的长度，<code>k</code> 是用于替换单词中每个字符的字符范围，最大为 <code>26</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">beginWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">endWord</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">wordList</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">ladderLength</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">beginWord<span class="token punctuation">,</span> endWord<span class="token punctuation">,</span> wordList</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将 wordList 转化为 Set 便于快速查找</span>
	<span class="token keyword">const</span> wordSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordList<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 用于计算替换单词中每个字符的字符范围</span>
	<span class="token keyword">const</span> charSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>beginWord<span class="token punctuation">.</span>length<span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
		<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordList<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>endWord<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// 初始化队列</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>beginWord<span class="token punctuation">]</span><span class="token punctuation">,</span>
		visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span>beginWord<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		step <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token comment">// BFS 搜索</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">var</span> cur <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

			<span class="token comment">// 如果找到目标单词，返回步数 + 1</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>cur <span class="token operator">==</span> endWord<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> step <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token comment">// 尝试改变每个字符</span>
			<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newWord <span class="token keyword">of</span> <span class="token function">getAllDiff</span><span class="token punctuation">(</span>cur<span class="token punctuation">,</span> charSet<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果新的单词在 wordSet 中且还没访问过</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					<span class="token comment">// 加入队列中，并标记已访问</span>
					queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
					visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>newWord<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 步数 +1</span>
		step<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 用于计算替换单词中每个字符的所有可能结果</span>
<span class="token keyword">var</span> <span class="token function-variable function">getAllDiff</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">word<span class="token punctuation">,</span> charSet</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	chars <span class="token operator">=</span> word<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> word<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> char <span class="token operator">=</span> word<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> newChar <span class="token keyword">of</span> charSet<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> newChar<span class="token punctuation">;</span>
			res<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>chars<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		chars<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> char<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,7),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),S=n("td",{style:{"text-align":"center"}},"126",-1),E=n("td",{style:{"text-align":"left"}},"单词接龙 II",-1),C=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},B=n("code",null,"广度优先搜索",-1),I=n("code",null,"哈希表",-1),N=n("code",null,"字符串",-1),j=n("code",null,"1+",-1),O=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/word-ladder-ii",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/word-ladder-ii",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"433",-1),G=n("td",{style:{"text-align":"left"}},"最小基因变化",-1),R={style:{"text-align":"center"}},H={style:{"text-align":"left"}},z=n("code",null,"广度优先搜索",-1),J=n("code",null,"哈希表",-1),K=n("code",null,"字符串",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/minimum-genetic-mutation",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/minimum-genetic-mutation",target:"_blank",rel:"noopener noreferrer"},X=n("td",{style:{"text-align":"center"}},"2452",-1),Y=n("td",{style:{"text-align":"left"}},"距离字典两次编辑以内的单词",-1),Z=n("td",{style:{"text-align":"center"}},null,-1),$={style:{"text-align":"left"}},nn=n("code",null,"数组",-1),sn=n("code",null,"字符串",-1),tn=n("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},en={href:"https://leetcode.cn/problems/words-within-two-edits-of-dictionary",target:"_blank",rel:"noopener noreferrer"},on={href:"https://leetcode.com/problems/words-within-two-edits-of-dictionary",target:"_blank",rel:"noopener noreferrer"};function cn(pn,ln){const l=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return d(),r("div",null,[h,n("p",null,[s("🔴 "),t(l,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1}),s("  🔖  "),t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",b,[_,t(o)]),s(),n("a",f,[w,t(o)])]),y,n("p",null,[s("这道题和 "),t(e,{to:"/problem/0433.html"},{default:a(()=>[s("433 最小基因变化")]),_:1}),s(" 很像，可以转换为 "),q,s("，每个单词是图中的节点，两个只相差一个字母的单词之间有一条边。因此可以使用 "),W,s(" 来求解。")]),x,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[S,E,C,n("td",A,[t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[B]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[I]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[N]),_:1}),s(),j]),O,n("td",V,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",T,[s("🔗"),t(o)])])]),n("tr",null,[D,G,n("td",R,[t(e,{to:"/problem/0433.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",H,[t(e,{to:"/tag/breadth-first-search.html"},{default:a(()=>[z]),_:1}),s(),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[J]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[K]),_:1})]),M,n("td",P,[n("a",Q,[s("🀄️"),t(o)]),s(),n("a",U,[s("🔗"),t(o)])])]),n("tr",null,[X,Y,Z,n("td",$,[t(e,{to:"/tag/array.html"},{default:a(()=>[nn]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[sn]),_:1})]),tn,n("td",an,[n("a",en,[s("🀄️"),t(o)]),s(),n("a",on,[s("🔗"),t(o)])])])])])])}const rn=i(k,[["render",cn],["__file","0127.html.vue"]]);export{rn as default};

import{_ as l,r as c,o as i,c as u,a as n,b as s,d as a,w as t,f as r,e as d}from"./app-mXo2sCT-.js";const k={},m={id:"_212-单词搜索-ii",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#_212-单词搜索-ii","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/problem/0212.html",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"字典树",-1),_=n("code",null,"数组",-1),f=n("code",null,"字符串",-1),g=n("code",null,"回溯",-1),w=n("code",null,"矩阵",-1),y={href:"https://leetcode.cn/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},N=n("code",null,"LeetCode",-1),j=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> <code>board</code> of characters and a list of strings <code>words</code>, return <em>all words on the board</em>.</p><p>Each word must be constructed from letters of sequentially adjacent cells, where <strong>adjacent cells</strong> are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/07/search1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;o&quot;,&quot;a&quot;,&quot;a&quot;,&quot;n&quot;],[&quot;e&quot;,&quot;t&quot;,&quot;a&quot;,&quot;e&quot;],[&quot;i&quot;,&quot;h&quot;,&quot;k&quot;,&quot;r&quot;],[&quot;i&quot;,&quot;f&quot;,&quot;l&quot;,&quot;v&quot;]], words = [&quot;oath&quot;,&quot;pea&quot;,&quot;eat&quot;,&quot;rain&quot;]</p><p>Output: [&quot;eat&quot;,&quot;oath&quot;]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/07/search2.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;a&quot;,&quot;b&quot;],[&quot;c&quot;,&quot;d&quot;]], words = [&quot;abcb&quot;]</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == board.length</code></li><li><code>n == board[i].length</code></li><li><code>1 &lt;= m, n &lt;= 12</code></li><li><code>board[i][j]</code> is a lowercase English letter.</li><li><code>1 &lt;= words.length &lt;= 3 * 10^4</code></li><li><code>1 &lt;= words[i].length &lt;= 10</code></li><li><code>words[i]</code> consists of lowercase English letters.</li><li>All the strings of <code>words</code> are unique.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个 <code>m x n</code> 二维字符网格 <code>board</code> 和一个单词（字符串）列表 <code>words</code>， <em>返回所有二维网格上的单词</em> 。</p><p>单词必须按照字母顺序，通过 <strong>相邻的单元格</strong> 内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母在一个单词中不允许被重复使用。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>这是一个二维网格中的路径搜索问题，需要找到符合条件的单词。和普通的 DFS（深度优先搜索）不同，这里有多个目标单词，直接对每个单词进行搜索可能效率较低。</li><li>利用**字典树（Trie）**可以高效处理多个单词的匹配问题。我们可以将所有单词构建成字典树，然后使用 DFS 在网格中搜索可能的路径，并利用字典树加速单词匹配过程。</li></ul><ol><li><p><strong>构建字典树</strong>：</p><ul><li>使用 <code>buildTrie</code> 函数构建一个字典树，将单词列表中的每个单词插入到字典树中。</li><li>每个字母对应一个字典树节点，最终将完整的单词存储在叶子节点的 <code>word</code> 属性中。</li></ul></li><li><p><strong>DFS 搜索</strong>：</p><ul><li>在 <code>findWords</code> 函数中，遍历网格的每个单元格，启动 DFS 搜索。</li><li>使用 DFS 搜索过程中，如果找到字典树中的单词，将其添加到结果列表 <code>res</code> 中。</li><li>通过设置 <code>board[r][c] = &#39;#&#39;</code> 标记访问过的单元格，避免回溯时重复访问。搜索结束后再恢复原始字母。</li></ul></li><li><p><strong>剪枝和优化</strong>：</p><ul><li>如果当前节点的字母不在字典树的子节点中（<code>node[board[r][c]]</code> 为 <code>null</code>），可以立即返回。</li><li>当找到完整单词后，将其从字典树中移除（<code>node.word = null</code>），防止重复添加相同单词。</li></ul></li><li><p><strong>恢复网格状态</strong>：</p><ul><li>在递归搜索结束后，恢复当前单元格的字母，继续其他方向的搜索。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>构建字典树</strong>：<code>O(L)</code>，其中 <code>L</code> 是所有单词的字符总数。</li><li><strong>DFS 搜索</strong>：在最坏情况下，每个单元格都会访问一次，每次可能最多探索四个方向，时间复杂度为 <code>O(m * n * 4^k)</code>，其中 <code>m</code> 和 <code>n</code> 是网格的行数和列数，<code>k</code> 是最长单词的长度。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li>字典树占用的空间为 <code>O(L)</code>，递归调用的栈深度为 <code>O(k)</code>，其中 <code>L</code> 是单词总字符数，<code>k</code> 是单词的最大长度。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board<span class="token punctuation">,</span> words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		root <span class="token operator">=</span> <span class="token function">buildTrie</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> rows <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		cols <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// DFS 搜索</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">node<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>r <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> r <span class="token operator">&gt;=</span> rows <span class="token operator">||</span> c <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> c <span class="token operator">&gt;=</span> cols <span class="token operator">||</span> <span class="token operator">!</span>node<span class="token punctuation">[</span>board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">const</span> char <span class="token operator">=</span> board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> nextNode <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nextNode<span class="token punctuation">.</span>word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">.</span>word<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token comment">// 防止重复找到相同的单词</span>
			nextNode<span class="token punctuation">.</span>word <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 标记访问过的单元格</span>
		board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;#&#39;</span><span class="token punctuation">;</span>

		<span class="token comment">// 搜索四个方向</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">,</span> r <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 上</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">,</span> r <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 下</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 左</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>nextNode<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 右</span>

		<span class="token comment">// 恢复当前单元格的值</span>
		board<span class="token punctuation">[</span>r<span class="token punctuation">]</span><span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> char<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历网格的每个位置，启动DFS搜索</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> r <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> r <span class="token operator">&lt;</span> rows<span class="token punctuation">;</span> r<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> c <span class="token operator">&lt;</span> cols<span class="token punctuation">;</span> c<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">,</span> r<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 构建字典树</span>
<span class="token keyword">var</span> <span class="token function-variable function">buildTrie</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> root <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> word <span class="token keyword">of</span> words<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> node <span class="token operator">=</span> root<span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				node<span class="token punctuation">[</span>char<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			node <span class="token operator">=</span> node<span class="token punctuation">[</span>char<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 在叶子节点存储完整的单词</span>
		node<span class="token punctuation">.</span>word <span class="token operator">=</span> word<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> root<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),L=n("td",{style:{"text-align":"center"}},"79",-1),S={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/word-search",target:"_blank",rel:"noopener noreferrer"},E={style:{"text-align":"center"}},F={style:{"text-align":"left"}},O=n("code",null,"数组",-1),T=n("code",null,"字符串",-1),C=n("code",null,"回溯",-1),V=n("code",null,"1+",-1),z={style:{"text-align":"left"}},B=n("td",{style:{"text-align":"center"}},"980",-1),H={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/unique-paths-iii",target:"_blank",rel:"noopener noreferrer"},W=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},G=n("code",null,"位运算",-1),M=n("code",null,"数组",-1),J=n("code",null,"回溯",-1),K=n("code",null,"1+",-1),P={style:{"text-align":"left"}},Q=n("td",{style:{"text-align":"center"}},"2227",-1),U={style:{"text-align":"left"}},X={href:"https://leetcode.com/problems/encrypt-and-decrypt-strings",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},null,-1),Z={style:{"text-align":"left"}},$=n("code",null,"设计",-1),nn=n("code",null,"字典树",-1),sn=n("code",null,"数组",-1),an=n("code",null,"2+",-1),tn={style:{"text-align":"left"}};function on(en,pn){const e=c("ExternalLinkIcon"),p=c("font"),o=c("RouterLink");return i(),u("div",null,[n("h1",m,[h,s(),n("a",v,[s("212. 单词搜索 II"),a(e)])]),n("p",null,[s("🔴 "),a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(o,{to:"/tag/trie.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[_]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[f]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[w]),_:1}),s("  🔗 "),n("a",y,[q,a(e)]),s(),n("a",x,[N,a(e)])]),j,r(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[L,n("td",S,[n("a",D,[s("单词搜索"),a(e)])]),n("td",E,[a(o,{to:"/problem/0079.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",F,[a(o,{to:"/tag/array.html"},{default:t(()=>[O]),_:1}),s(),a(o,{to:"/tag/string.html"},{default:t(()=>[T]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[C]),_:1}),s(),V]),n("td",z,[a(p,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1})])]),n("tr",null,[B,n("td",H,[n("a",R,[s("不同路径 III"),a(e)])]),W,n("td",A,[a(o,{to:"/tag/bit-manipulation.html"},{default:t(()=>[G]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[M]),_:1}),s(),a(o,{to:"/tag/backtracking.html"},{default:t(()=>[J]),_:1}),s(),K]),n("td",P,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])]),n("tr",null,[Q,n("td",U,[n("a",X,[s("加密解密字符串"),a(e)])]),Y,n("td",Z,[a(o,{to:"/tag/design.html"},{default:t(()=>[$]),_:1}),s(),a(o,{to:"/tag/trie.html"},{default:t(()=>[nn]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[sn]),_:1}),s(),an]),n("td",tn,[a(p,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1})])])])])])}const ln=l(k,[["render",on],["__file","0212.html.vue"]]);export{ln as default};

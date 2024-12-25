import{_ as l,r as p,o as u,c as i,a as n,b as s,d as a,w as t,f as r,e as d}from"./app--GvfAkAr.js";const k={},b=n("h1",{id:"_130-被围绕的区域",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_130-被围绕的区域","aria-hidden":"true"},"#"),s(" 130. 被围绕的区域")],-1),m=n("code",null,"深度优先搜索",-1),h=n("code",null,"广度优先搜索",-1),_=n("code",null,"并查集",-1),v=n("code",null,"数组",-1),f=n("code",null,"矩阵",-1),g={href:"https://leetcode.cn/problems/surrounded-regions",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/surrounded-regions",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),X=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an <code>m x n</code> matrix <code>board</code> containing <code>&#39;X&#39;</code> and <code>&#39;O&#39;</code>, <em>capture all regions that are 4-directionally surrounded by</em> <code>&#39;X&#39;</code>.</p><p>A region is <strong>captured</strong> by flipping all <code>&#39;O&#39;</code>s into <code>&#39;X&#39;</code>s in that surrounded region.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: board = [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;O&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]]</p><p>Output: [[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;X&quot;,&quot;X&quot;,&quot;X&quot;],[&quot;X&quot;,&quot;O&quot;,&quot;X&quot;,&quot;X&quot;]]</p><p>Explanation: Notice that an &#39;O&#39; should not be flipped if:</p><ul><li>It is on the border, or</li><li>It is adjacent to an &#39;O&#39; that should not be flipped.</li></ul><p>The bottom &#39;O&#39; is on the border, so it is not flipped.</p><p>The other three &#39;O&#39; form a surrounded region, so they are flipped.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: board = [[&quot;X&quot;]]</p><p>Output: [[&quot;X&quot;]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == board.length</code></li><li><code>n == board[i].length</code></li><li><code>1 &lt;= m, n &lt;= 200</code></li><li><code>board[i][j]</code> is <code>&#39;X&#39;</code> or <code>&#39;O&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <code>m x n</code> 的矩阵 <code>board</code> ，由若干字符 <code>&#39;X&#39;</code> 和 <code>&#39;O&#39;</code> 组成，捕获 <strong>所有</strong> <strong>被围绕的区域：</strong></p><ul><li><strong>连接：</strong> 一个单元格与水平或垂直方向上相邻的单元格连接。</li><li><strong>区域：连接所有</strong> <code>&#39;O&#39;</code> 的单元格来形成一个区域。</li><li><strong>围绕：</strong> 如果您可以用 <code>&#39;X&#39;</code> 单元格 <strong>连接这个区域</strong>，并且区域中没有任何单元格位于 <code>board</code> 边缘，则该区域被 <code>&#39;X&#39;</code> 单元格围绕。</li></ul><p>通过将输入矩阵 <code>board</code> 中的所有 <code>&#39;O&#39;</code> 替换为 <code>&#39;X&#39;</code> 来 <strong>捕获被围绕的区域。</strong></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>首选选择出与岸边相连的岛屿并标记为 <code>F</code>，然后把内部封闭的岛屿全部置为 X，最后把 <code>F</code> 置为 <code>O</code>。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">board</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token keyword">void</span><span class="token punctuation">}</span></span> Do not return anything, modify board in-place instead.
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solve</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">board</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> m <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
			n <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> i <span class="token operator">&gt;=</span> m <span class="token operator">||</span> j <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token operator">||</span> j <span class="token operator">&gt;=</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">!==</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> j <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> m <span class="token operator">=</span> board<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 选择出与岸边相连的岛屿并标记为 F</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> i<span class="token punctuation">,</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">)</span> <span class="token function">dfs</span><span class="token punctuation">(</span>board<span class="token punctuation">,</span> m <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 把内部封闭的岛屿全部置为 X，把 F 置为 O</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;F&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;O&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				board<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;X&#39;</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"200",-1),O=n("td",{style:{"text-align":"left"}},"岛屿数量",-1),E={style:{"text-align":"center"}},F={style:{"text-align":"left"}},I=n("code",null,"深度优先搜索",-1),N=n("code",null,"广度优先搜索",-1),C=n("code",null,"并查集",-1),L=n("code",null,"2+",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/number-of-islands",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"286",-1),A=n("td",{style:{"text-align":"left"}},"墙与门 🔒",-1),D=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"广度优先搜索",-1),S=n("code",null,"数组",-1),H=n("code",null,"矩阵",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/walls-and-gates",target:"_blank",rel:"noopener noreferrer"};function U(W,Y){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return u(),i("div",null,[b,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/union-find.html"},{default:t(()=>[_]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[f]),_:1}),s("  🔗 "),n("a",g,[q,a(e)]),s(),n("a",y,[x,a(e)])]),X,r(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[j,O,n("td",E,[a(o,{to:"/problem/0200.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",F,[a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[I]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[N]),_:1}),s(),a(o,{to:"/tag/union-find.html"},{default:t(()=>[C]),_:1}),s(),L]),V,n("td",B,[n("a",T,[s("🀄️"),a(e)]),s(),n("a",R,[s("🔗"),a(e)])])]),n("tr",null,[z,A,D,n("td",G,[a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[M]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[S]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[s("🀄️"),a(e)]),s(),n("a",Q,[s("🔗"),a(e)])])])])])])}const $=l(k,[["render",U],["__file","0130.html.vue"]]);export{$ as default};

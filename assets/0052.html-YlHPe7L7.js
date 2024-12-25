import{_ as i,r as p,o as r,c as u,a as n,b as s,d as a,w as t,f as d,e as c}from"./app--GvfAkAr.js";const k={},m=n("h1",{id:"_52-n-皇后-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_52-n-皇后-ii","aria-hidden":"true"},"#"),s(" 52. N 皇后 II")],-1),v=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/n-queens-ii",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/n-queens-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),g=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The <strong>n-queens</strong> puzzle is the problem of placing <code>n</code> queens on an <code>n x n</code> chessboard such that no two queens attack each other.</p><p>Given an integer <code>n</code>, return <em>the number of distinct solutions to the <strong>n-queens puzzle</strong></em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/11/13/queens.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: n = 4</p><p>Output: 2</p><p>Explanation: There are two distinct solutions to the 4-queens puzzle as shown.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1</p><p>Output: 1</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>n 皇后问题</strong> 研究的是如何将 <code>n</code> 个皇后放置在 <code>n × n</code> 的棋盘上，并且使皇后彼此之间不能相互攻击。</p><p>给你一个整数 <code>n</code> ，返回 <strong>n 皇后问题</strong> 不同的解决方案的数量。</p><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',16),w=n("code",null,"res",-1),y=c(`<ol><li><p>使用一个一维数组 <code>queens</code> 来表示每一行皇后所在的列位置。其中 <code>queens[i]</code> 表示第 <code>i</code> 行的皇后所在的列。</p></li><li><p>使用回溯法，逐行放置皇后。在每一行，尝试将皇后放在该行的每一列，检查在当前位置 <code>(row, col)</code> 放置皇后是否满足不互相攻击的条件：</p><ul><li><code>queens[i] === col</code>：检查同一列上是否有其他皇后；</li><li><code>queens[i] - i === col - row</code>：通过检查横坐标减去纵坐标的差是否相等，检查在左上至右下的对角线上是否有其他皇后；</li><li><code>queens[i] + i === col + row</code>：通过检查横坐标加上纵坐标的和是否相等，检查在左下至右上的对角线上是否有其他皇后；</li><li>如果以上三个条件都不满足，说明当前位置是安全的，找到了一个合适的位置。</li></ul></li><li><p>如果找到一个合适的位置，将该位置的列坐标存入 <code>queens</code> 数组中，并递归调用下一行的放置皇后操作。</p></li><li><p>如果在某一行无法找到合适的位置，则需要回溯，即回到上一行，尝试在上一行的其他列放置皇后，继续递归搜索。</p></li><li><p>当成功放置 N 个皇后时，将当前 <code>res</code> 加一。</p></li><li><p>最后，返回最终的个数 <code>res</code> 。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">solveNQueens</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> queens <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">valid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row<span class="token punctuation">,</span> col</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> row<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>
				<span class="token comment">// 检查同一列上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> col <span class="token operator">||</span>
				<span class="token comment">// 检查在左上至右下的对角线上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">-</span> i <span class="token operator">==</span> col <span class="token operator">-</span> row <span class="token operator">||</span>
				<span class="token comment">// 检查在左下至右上的对角线上是否有其他皇后</span>
				queens<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">+</span> i <span class="token operator">==</span> col <span class="token operator">+</span> row
			<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">row</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">==</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 找到一个成功解</span>
			res <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> col <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> col <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> col<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">valid</span><span class="token punctuation">(</span>row<span class="token punctuation">,</span> col<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 在当前位置放置皇后</span>
				queens<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> col<span class="token punctuation">;</span>
				<span class="token comment">// 继续尝试下一行</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token comment">// 回溯，清空当前行状态</span>
				queens<span class="token punctuation">[</span>row<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,4),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"51",-1),N=n("td",{style:{"text-align":"left"}},"N 皇后",-1),z={style:{"text-align":"center"}},E={style:{"text-align":"left"}},I=n("code",null,"数组",-1),C=n("code",null,"回溯",-1),L=n("td",{style:{"text-align":"center"}},"🔴",-1),V={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/n-queens",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/n-queens",target:"_blank",rel:"noopener noreferrer"};function T(O,R){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return r(),u("div",null,[m,n("p",null,[s("🔴 "),a(l,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[h,a(o)]),s(),n("a",_,[f,a(o)])]),g,n("p",null,[s("这道题和 "),a(e,{to:"/problem/0051.html"},{default:t(()=>[s("第 51 题")]),_:1}),s(" 解题思路一样，可以采用递归和回溯来解决，通过检查每一行、每一列和每一对角线上是否存在其他皇后，来保证 N 皇后的问题得到解。只不过这道题只需要返回正确解的个数，因此 "),w,s(" 用一个数字记录即可。")]),y,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[q,N,n("td",z,[a(e,{to:"/problem/0051.html"},{default:t(()=>[s("[✓]")]),_:1})]),n("td",E,[a(e,{to:"/tag/array.html"},{default:t(()=>[I]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[C]),_:1})]),L,n("td",V,[n("a",j,[s("🀄️"),a(o)]),s(),n("a",B,[s("🔗"),a(o)])])])])])])}const G=i(k,[["render",T],["__file","0052.html.vue"]]);export{G as default};

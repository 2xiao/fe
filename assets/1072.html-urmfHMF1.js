import{_ as l,r as e,o as i,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-WL8GPOUO.js";const d={},k=n("h1",{id:"_1072-按列翻转得到最大值等行数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1072-按列翻转得到最大值等行数","aria-hidden":"true"},"#"),s(" 1072. 按列翻转得到最大值等行数")],-1),m=n("code",null,"数组",-1),h=n("code",null,"哈希表",-1),g=n("code",null,"矩阵",-1),b={href:"https://leetcode.cn/problems/flip-columns-for-maximum-number-of-equal-rows",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/flip-columns-for-maximum-number-of-equal-rows",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an <code>m x n</code> binary matrix <code>matrix</code>.</p><p>You can choose any number of columns in the matrix and flip every cell in that column (i.e., Change the value of the cell from <code>0</code> to <code>1</code> or vice versa).</p><p>Return <em>the maximum number of rows that have all values equal after some number of flips</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: matrix = [[0,1],[1,1]]</p><p>Output: 1</p><p>Explanation: After flipping no values, 1 row has all values equal.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: matrix = [[0,1],[1,0]]</p><p>Output: 2</p><p>Explanation: After flipping values in the first column, both rows have equal values.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: matrix = [[0,0,0],[0,0,1],[1,1,0]]</p><p>Output: 2</p><p>Explanation: After flipping values in the first two columns, the last two rows have equal values.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 300</code></li><li><code>matrix[i][j]</code> is either <code>0</code> or <code>1</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定 <code>m x n</code> 矩阵 <code>matrix</code> 。</p><p>你可以从中选出任意数量的列并翻转其上的 <strong>每个</strong>单元格。（即翻转后，单元格的值从 <code>0</code> 变成 <code>1</code>，或者从 <code>1</code> 变为 <code>0</code> 。）</p><p>返回 <em>经过一些翻转后，行内所有值都相等的最大行数</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[0,1],[1,1]]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 不进行翻转，有 1 行所有值都相等。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[0,1],[1,0]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 翻转第一列的值之后，这两行都由相等的值组成。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> matrix = [[0,0,0],[0,0,1],[1,1,0]]</p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 翻转前两列的值之后，后两行由相等的值组成。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>m == matrix.length</code></li><li><code>n == matrix[i].length</code></li><li><code>1 &lt;= m, n &lt;= 300</code></li><li><code>matrix[i][j] == 0</code> 或 <code>1</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>翻转某些列实际上可以看作对每一行进行某个数字 <code>K</code> 的按位异或操作，以将其转换为某种标准形式（全 0 或全 1）。</p><p>我们可以将每一行看做一个二进制数字 <code>X</code>，希望找到一组翻转，使得行 <code>X</code> 的结果满足 X ^ K 等于全 0 或全 1。也就是说，要找到那些在翻转后可以变成相同模式（全 0 或全 1）的行。</p><p>例如，如果 <code>K = 1</code>，则计算行 <code>X = (00000...001，或 1111....110)</code>。</p><ol><li>行模式的标准化</li></ol><ul><li>两行相等的条件是：一行的每一位与另一行的每一位要么完全相同，要么完全相反。</li><li>对于每一行，将其标准化为一种唯一的形式： <ul><li>如果该行的首位为 <code>1</code>，则将其整体取反，使首位为 <code>0</code>；</li><li>否则保持原样。</li></ul></li><li>这样，所有可以通过列翻转变成一致的行都会映射到同一个模式。</li></ul><ol start="2"><li>使用哈希表统计模式频率</li></ol><ul><li>使用一个哈希表 <code>count</code> 记录每种模式出现的次数。</li><li>遍历矩阵中的每一行，计算其标准化模式，将模式作为键存入哈希表。</li></ul><ol start="3"><li>最后返回哈希表中最大频率对应的值。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(m * n)</code>，其中 <code>m</code> 是行数，<code>n</code> 是列数。 <ul><li>遍历矩阵中的每一行和每一列，时间复杂度为 <code>O(m * n)</code>；</li><li>计算模式和更新哈希表的操作为 <code>O(m * n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(m * n)</code>，需要一个哈希表存储模式及其频率，极端情况下每一行模式都不同。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">matrix</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">maxEqualRowsAfterFlips</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">matrix</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> matrix<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		n <span class="token operator">=</span> matrix<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 遍历每一行</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> row <span class="token keyword">of</span> matrix<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 标准化模式</span>
		<span class="token keyword">const</span> key <span class="token operator">=</span> row<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">bit</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span>row<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">-</span> bit <span class="token operator">:</span> bit<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>count<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,37);function w(q,y){const c=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return i(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/matrix.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[f,a(p)]),s(),n("a",v,[x,a(p)])]),_])}const O=l(d,[["render",w],["__file","1072.html.vue"]]);export{O as default};

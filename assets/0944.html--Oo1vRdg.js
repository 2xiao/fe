import{_ as p,r as a,o as i,c as d,a as n,b as s,d as e,w as t,e as r}from"./app-U2ekqv2z.js";const u={},m=n("h1",{id:"_944-删列造序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_944-删列造序","aria-hidden":"true"},"#"),s(" 944. 删列造序")],-1),k=n("code",null,"数组",-1),v=n("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/delete-columns-to-make-sorted",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/delete-columns-to-make-sorted",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),x=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of <code>n</code> strings <code>strs</code>, all of the same length.</p><p>The strings can be arranged such that there is one on each line, making a grid.</p><ul><li>For example, <code>strs = [&quot;abc&quot;, &quot;bce&quot;, &quot;cae&quot;]</code> can be arranged as follows:</li></ul><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>abc
bce
cae
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>You want to <strong>delete</strong> the columns that are <strong>not sorted lexicographically</strong>. In the above example (<strong>0-indexed</strong>), columns 0 (<code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>) and 2 (<code>&#39;c&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;e&#39;</code>) are sorted, while column 1 (<code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>, <code>&#39;a&#39;</code>) is not, so you would delete column 1.</p><p>Return <em>the number of columns that you will delete</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: strs = [&quot;cba&quot;,&quot;daf&quot;,&quot;ghi&quot;]</p><p>Output: 1</p><p>Explanation: The grid looks as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cba
daf
ghi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Columns 0 and 2 are sorted, but column 1 is not, so you only need to delete 1 column.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: strs = [&quot;a&quot;,&quot;b&quot;]</p><p>Output: 0</p><p>Explanation: The grid looks as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a
b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Column 0 is the only column and is sorted, so you will not delete any columns.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]</p><p>Output: 3</p><p>Explanation: The grid looks as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zyx
wvu
tsr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>All 3 columns are not sorted, so you will delete all 3.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == strs.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= strs[i].length &lt;= 1000</code></li><li><code>strs[i]</code> consists of lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你由 <code>n</code> 个小写字母字符串组成的数组 <code>strs</code>，其中每个字符串长度相等。</p><p>这些字符串可以每个一行，排成一个网格。例如，<code>strs = [&quot;abc&quot;, &quot;bce&quot;, &quot;cae&quot;]</code> 可以排列为：</p><blockquote><p>abc</p><p>bce</p><p>cae</p></blockquote><p>你需要找出并删除 <strong>不是按字典序非严格递增排列的</strong> 列。在上面的例子（下标从 0 开始）中，列 0（<code>&#39;a&#39;</code>, <code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>）和列 2（<code>&#39;c&#39;</code>, <code>&#39;e&#39;</code>, <code>&#39;e&#39;</code>）都是按字典序非严格递增排列的，而列 1（<code>&#39;b&#39;</code>, <code>&#39;c&#39;</code>, <code>&#39;a&#39;</code>）不是，所以要删除列 1 。</p><p>返回你需要删除的列数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> strs = [&quot;cba&quot;,&quot;daf&quot;,&quot;ghi&quot;]</p><p><strong>输出：</strong> 1</p><p><strong>解释：</strong> 网格示意如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>cba
daf
ghi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>列 0 和列 2 按升序排列，但列 1 不是，所以只需要删除列 1 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> strs = [&quot;a&quot;,&quot;b&quot;]</p><p><strong>输出：</strong> 0</p><p><strong>解释：</strong> 网格示意如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a
b
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>只有列 0 这一列，且已经按升序排列，所以不用删除任何列。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> strs = [&quot;zyx&quot;,&quot;wvu&quot;,&quot;tsr&quot;]</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong> 网格示意如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>zyx
wvu
tsr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有 3 列都是非升序排列的，所以都要删除。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == strs.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= strs[i].length &lt;= 1000</code></li><li><code>strs[i]</code> 由小写英文字母组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以直接遍历每一列，检查是否满足条件，不满足则计数并标记该列需要删除。</p><ol><li><p><strong>输入和长度</strong>：</p><ul><li>输入是一个字符串数组 <code>strs</code>，其中每个字符串的长度相同。</li><li>设 <code>n</code> 为字符串的数量，<code>m</code> 为每个字符串的长度。</li></ul></li><li><p><strong>逐列检查</strong>：</p><ul><li>对于每一列（即字符串中对应位置的字符），从上到下比较字符是否按字典序排序。</li><li>如果存在 <code>strs[j][i] &lt; strs[j-1][i]</code>，说明当前列不满足字典序条件，需要删除，<code>count</code> 自增。</li></ul></li><li><p><strong>终止条件</strong>：一旦发现某列需要删除，即可退出该列的检查，直接开始下一列。</p></li><li><p><strong>返回结果</strong>：返回需要删除的列数 <code>count</code>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n * m)</code>，其中 <code>n</code> 是字符串数组的长度，<code>m</code> 是字符串的长度。需要检查每列的字符是否符合字典序。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，仅使用了常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">strs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minDeletionSize</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">strs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> strs<span class="token punctuation">.</span>length<span class="token punctuation">,</span>
		m <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> m<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 遍历每一列</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> n<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 遍历列中的字符</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>strs<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> strs<span class="token punctuation">[</span>j <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 检查是否不满足字典序</span>
				count<span class="token operator">++</span><span class="token punctuation">;</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// 当前列已经不合法，退出检查</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,36);function _(f,w){const l=a("font"),o=a("RouterLink"),c=a("ExternalLinkIcon");return i(),d("div",null,[m,n("p",null,[s("🟢 "),e(l,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[k]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",b,[g,e(c)]),s(),n("a",h,[q,e(c)])]),x])}const E=p(u,[["render",_],["__file","0944.html.vue"]]);export{E as default};

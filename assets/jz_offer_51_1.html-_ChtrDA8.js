import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as t,e as r}from"./app-V0gDv61L.js";const d={},k={id:"_51-数组中的逆序对",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_51-数组中的逆序对","aria-hidden":"true"},"#",-1),v={href:"https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"树状数组",-1),h=n("code",null,"线段树",-1),g=n("code",null,"数组",-1),_=n("code",null,"二分查找",-1),f=n("code",null,"分治",-1),w=n("code",null,"有序集合",-1),y=n("code",null,"归并排序",-1),x={href:"https://leetcode.cn/problems/shu-zu-zhong-de-ni-xu-dui-lcof",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),z=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>在股票交易中，如果前一天的股价高于后一天的股价，则可以认为存在一个「交易逆序对」。请设计一个程序，输入一段时间内的股票交易记录 <code>record</code>，返回其中存在的「交易逆序对」总数。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入：</strong> record = [9, 7, 5, 4, 6]</p><p><strong>输出：</strong> 8</p><p><strong>解释：</strong> 交易中的逆序对为 (9, 7), (9, 5), (9, 4), (9, 6), (7, 5), (7, 4), (7, 6), (5, 4)。</p></blockquote><p><strong>限制：</strong></p><p><code>0 &lt;= record.length &lt;= 50000</code></p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用改进的归并排序算法，这种方法的时间复杂度为 <code>O(n log n)</code>，适合处理大规模数据。</p><ol><li><p><strong>逆序对的定义</strong>：对于数组中的两个元素 <code>i</code> 和 <code>j</code>，如果 <code>i &lt; j</code> 且 <code>record[i] &gt; record[j]</code>，则称这对元素为逆序对。</p></li><li><p><strong>使用归并排序</strong>：通过归并排序的过程中，可以在合并的步骤中计算逆序对的数量。具体来说，在合并两个有序子数组时，如果左子数组的当前元素大于右子数组的当前元素，那么左子数组中当前元素之后的所有元素都会与右子数组的当前元素形成逆序对。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n log n)</code>，因为使用了归并排序。</li><li><strong>空间复杂度</strong>： <code>O(n)</code>，需要一个临时数组来存储合并过程中的结果。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">record</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">reversePairs</span><span class="token punctuation">(</span><span class="token parameter">record</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>record<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">mergeSort</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&gt;=</span> right<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">mergeSort</span><span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token function">merge</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">merge</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> mid<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> i <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token keyword">let</span> j <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> k <span class="token operator">=</span> left<span class="token punctuation">;</span>

		<span class="token comment">// 计算逆序对</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> right <span class="token operator">&amp;&amp;</span> record<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&gt;</span> record<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				j<span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			count <span class="token operator">+=</span> j <span class="token operator">-</span> <span class="token punctuation">(</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 记录逆序对的数量</span>
			i<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 合并两个有序子数组</span>
		i <span class="token operator">=</span> left<span class="token punctuation">;</span>
		j <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid <span class="token operator">&amp;&amp;</span> j <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>record<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;=</span> record<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&lt;=</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>i<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">while</span> <span class="token punctuation">(</span>j <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			temp<span class="token punctuation">[</span>k<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> record<span class="token punctuation">[</span>j<span class="token operator">++</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> index <span class="token operator">=</span> left<span class="token punctuation">;</span> index <span class="token operator">&lt;=</span> right<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			record<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> record<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> count<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13);function L(S,N){const o=p("ExternalLinkIcon"),c=p("font"),e=p("RouterLink");return i(),u("div",null,[n("h1",k,[m,s(),n("a",v,[s("51. 数组中的逆序对"),a(o)])]),n("p",null,[s("🔴 "),a(c,{color:"#ff334b"},{default:t(()=>[s("Hard")]),_:1}),s("  🔖  "),a(e,{to:"/tag/binary-indexed-tree.html"},{default:t(()=>[b]),_:1}),s(),a(e,{to:"/tag/segment-tree.html"},{default:t(()=>[h]),_:1}),s(),a(e,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),a(e,{to:"/tag/binary-search.html"},{default:t(()=>[_]),_:1}),s(),a(e,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[f]),_:1}),s(),a(e,{to:"/tag/ordered-set.html"},{default:t(()=>[w]),_:1}),s(),a(e,{to:"/tag/merge-sort.html"},{default:t(()=>[y]),_:1}),s("  🔗 "),n("a",x,[j,a(o)])]),z])}const q=l(d,[["render",L],["__file","jz_offer_51_1.html.vue"]]);export{q as default};

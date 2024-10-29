import{_ as u,r as o,o as i,c as k,a as n,b as s,d as a,w as t,e as c}from"./app-mXo2sCT-.js";const r={},d={id:"_60-出现频率最高的-k-个数字",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_60-出现频率最高的-k-个数字","aria-hidden":"true"},"#",-1),v={href:"https://2xiao.github.io/leetcode-js/offer2/jz_offer_II_060.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"数组",-1),b=n("code",null,"哈希表",-1),f=n("code",null,"分治",-1),_=n("code",null,"桶排序",-1),g=n("code",null,"计数",-1),w=n("code",null,"快速选择",-1),y=n("code",null,"排序",-1),x=n("code",null,"堆（优先队列）",-1),q={href:"https://leetcode.cn/problems/g5c51o",target:"_blank",rel:"noopener noreferrer"},I=n("code",null,"力扣",-1),j=c('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个整数数组 <code>nums</code> 和一个整数 <code>k</code> ，请返回其中出现频率前 <code>k</code> 高的元素。可以按 <strong>任意顺序</strong> 返回答案。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> nums = [1,1,1,2,2,3], k = 2</p><p><strong>输出:</strong>[1,2]</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> nums = [1], k = 1</p><p><strong>输出:</strong>[1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>k</code> 的取值范围是 <code>[1, 数组中不相同的元素的个数]</code></li><li>题目数据保证答案唯一，换句话说，数组中前 <code>k</code> 个高频元素的集合是唯一的</li></ul><p><strong>进阶：</strong> 所设计算法的时间复杂度 <strong>必须</strong> 优于 <code>O(n log n)</code> ，其中 <code>n</code> 是数组大小。</p>',9),L={class:"hint-container warning"},N=n("p",{class:"hint-container-title"},"注意",-1),O=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用哈希映射和小顶堆来实现：</p><ol><li>使用哈希映射存储数组中每个元素的频率。</li><li>创建一个小顶堆（优先队列），用于跟踪出现频率最高的 <code>k</code> 个元素。</li><li>遍历哈希映射，将元素和其频率添加到小顶堆中，拿它与堆顶的元素对比。 <ul><li>如果比堆顶元素大，就把堆顶元素删除，并且将这个元素插入到堆中；</li><li>如果比堆顶元素小，则不做处理；</li></ul></li><li>处理完所有元素后，小顶堆中将包含 <code>k</code> 个最高频率的元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n log k)</code>，其中 <code>n</code> 是数组的大小，<code>k</code> 是唯一元素的数量，相较于传统排序算法的 <code>O(n log n)</code> 更为高效。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，需要额外的空间来存储堆。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">topKFrequent</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> nums<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span> map<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">?</span> map<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">let</span> heap <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">add</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">heapifyUp</span><span class="token punctuation">(</span>heap<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> freq<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			heap<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>val<span class="token punctuation">,</span> freq<span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyUp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> parent <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>parent<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
				i <span class="token operator">=</span> parent<span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				<span class="token keyword">break</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">heapifyDown</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token number">2</span> <span class="token operator">*</span> i <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> min <span class="token operator">=</span> i<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> left<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> heap<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> heap<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			min <span class="token operator">=</span> right<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>min <span class="token operator">!==</span> i<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token punctuation">[</span>heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>heap<span class="token punctuation">[</span>min<span class="token punctuation">]</span><span class="token punctuation">,</span> heap<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			<span class="token function">heapifyDown</span><span class="token punctuation">(</span>min<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span>item <span class="token keyword">of</span> map<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">add</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> heap<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> i<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function V(z,B){const e=o("ExternalLinkIcon"),l=o("font"),p=o("RouterLink");return i(),k("div",null,[n("h1",d,[m,s(),n("a",v,[s("60. 出现频率最高的 k 个数字"),a(e)])]),n("p",null,[s("🟠 "),a(l,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(p,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(p,{to:"/tag/hash-table.html"},{default:t(()=>[b]),_:1}),s(),a(p,{to:"/tag/divide-and-conquer.html"},{default:t(()=>[f]),_:1}),s(),a(p,{to:"/tag/bucket-sort.html"},{default:t(()=>[_]),_:1}),s(),a(p,{to:"/tag/counting.html"},{default:t(()=>[g]),_:1}),s(),a(p,{to:"/tag/quickselect.html"},{default:t(()=>[w]),_:1}),s(),a(p,{to:"/tag/sorting.html"},{default:t(()=>[y]),_:1}),s(),a(p,{to:"/tag/heap-priority-queue.html"},{default:t(()=>[x]),_:1}),s("  🔗 "),n("a",q,[I,a(e)])]),j,n("div",L,[N,n("p",null,[s("本题与 LeetCode "),a(p,{to:"/problem/0347.html"},{default:t(()=>[s("第 347 题")]),_:1}),s(" 相同。")])]),O])}const D=u(r,[["render",V],["__file","jz_offer_II_060.html.vue"]]);export{D as default};

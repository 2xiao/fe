import{_ as i,r as o,o as u,c as d,a as s,b as n,d as a,w as t,e as p}from"./app-fEpXkbSw.js";const r={},k=s("h1",{id:"_14-字符串中的变位词",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_14-字符串中的变位词","aria-hidden":"true"},"#"),n(" 14. 字符串中的变位词")],-1),v=s("code",null,"哈希表",-1),m=s("code",null,"双指针",-1),b=s("code",null,"字符串",-1),h=s("code",null,"滑动窗口",-1),_={href:"https://leetcode.cn/problems/MPnaiL",target:"_blank",rel:"noopener noreferrer"},g=s("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个字符串 <code>s1</code> 和 <code>s2</code>，写一个函数来判断 <code>s2</code> 是否包含 <code>s1</code> 的某个变位词。</p><p>换句话说，第一个字符串的排列之一是第二个字符串的 <strong>子串</strong> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> s1 = &quot;ab&quot; s2 = &quot;eidbaooo&quot;</p><p><strong>输出:</strong> True</p><p><strong>解释:</strong> s2 包含 s1 的排列之一 (&quot;ba&quot;).</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> s1= &quot;ab&quot; s2 = &quot;eidboaoo&quot;</p><p><strong>输出:</strong> False</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s1.length, s2.length &lt;= 10^4</code></li><li><code>s1</code> 和 <code>s2</code> 仅包含小写字母</li></ul>',9),w={class:"hint-container warning"},y=s("p",{class:"hint-container-title"},"注意",-1),q=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这种题目是明显的滑动窗口算法，相当给你一个 <code>s1</code> 和一个 <code>s2</code>，请问你 <code>s2</code> 中是否存在一个子串，包含 <code>s1</code> 中所有字符且不包含其他字符。</p><p>滑动窗口算法的思路是这样：</p><ol><li>使用双指针中的左右指针，初始化 <code>left = right = 0</code>，把索引左闭右开区间 <code>[left, right)</code> 称为一个「窗口」；</li><li>不断地增加 <code>right</code> 指针扩大窗口 <code>[left, right)</code>，直到窗口中的字符串符合要求（包含了 <code>s1.length</code> 个字符）；</li><li>停止增加 <code>right</code>，转而不断增加 <code>left</code> 指针缩小窗口 <code>[left, right)</code>，直到窗口中的字符串不再符合要求（不包含 <code>s1.length</code> 个字符了）；同时，每次增加 <code>left</code>，都要更新一轮结果；</li><li>重复第 2 和第 3 步，直到 <code>right</code> 到达字符串 <code>s2</code> 的尽头；</li></ol>',4),x=p(`<h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>： <code>O(n + m)</code>，其中 <code>n</code> 是 <code>s2</code> 的长度，<code>m</code> 是 <code>s1</code> 的长度。 <ul><li>初始化 <code>need</code> 字典需要遍历字符串 <code>s1</code>，时间复杂度是 <code>O(m)</code>；</li><li>滑动窗口遍历 <code>s2</code>，外层的 <code>while</code> 循环遍历字符串 <code>s2</code>，且每次迭代移动右边界 <code>right</code>，最多遍历 <code>n</code> 次；</li><li>内层 <code>while</code> 循环在窗口大小达到 <code>s1.length</code> 时才会触发，但它总共只移动 <code>left</code> 指针 <code>n</code> 次，因此总的移动操作是线性的。</li></ul></li><li><strong>空间复杂度</strong>： <code>O(1)</code>，<code>need</code> 和 <code>window</code> 字典的大小最多是英文字母的数量（26 个字母），所以它们的空间复杂度是 <code>O(1)</code>，其他变量的存储是常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">checkInclusion</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s1<span class="token punctuation">,</span> s2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> window <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
		need <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s1<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		valid <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s2<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> c <span class="token operator">=</span> s2<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
		right<span class="token operator">++</span><span class="token punctuation">;</span>

		<span class="token comment">// 进行窗口内数据的一系列更新</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>c<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>c<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				valid <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 判断左侧窗口是否要收缩</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&gt;=</span> s1<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 在这里判断是否找到了合法的子串</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>valid <span class="token operator">==</span> Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>need<span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>

			<span class="token keyword">let</span> d <span class="token operator">=</span> s2<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>

			<span class="token comment">// 进行窗口内数据的一系列更新</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">[</span>d<span class="token punctuation">]</span> <span class="token operator">==</span> need<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					valid<span class="token operator">--</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
				window<span class="token punctuation">[</span>d<span class="token punctuation">]</span><span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 未找到符合条件的子串</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function I(j,L){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),d("div",null,[k,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/hash-table.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[m]),_:1}),n(),a(e,{to:"/tag/string.html"},{default:t(()=>[b]),_:1}),n(),a(e,{to:"/tag/sliding-window.html"},{default:t(()=>[h]),_:1}),n("  🔗 "),s("a",_,[g,a(l)])]),f,s("div",w,[y,s("p",null,[n("本题与 LeetCode "),a(e,{to:"/problem/0567.html"},{default:t(()=>[n("第 567 题")]),_:1}),n(" 相同。")])]),q,s("p",null,[n("详细的滑动窗口答题框架讲解，可阅读 "),a(e,{to:"/book/slide_window.html"},{default:t(()=>[n("《3.11 滑动窗口》")]),_:1}),n("。")]),x])}const N=i(r,[["render",I],["__file","jz_offer_II_014.html.vue"]]);export{N as default};

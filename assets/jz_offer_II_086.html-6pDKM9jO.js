import{_ as i,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-fEpXkbSw.js";const d={},k=n("h1",{id:"_86-分割回文子字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_86-分割回文子字符串","aria-hidden":"true"},"#"),s(" 86. 分割回文子字符串")],-1),v=n("code",null,"深度优先搜索",-1),m=n("code",null,"广度优先搜索",-1),b=n("code",null,"图",-1),h=n("code",null,"哈希表",-1),g={href:"https://leetcode.cn/problems/M99OJA",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串 <code>s</code> ，请将 <code>s</code> 分割成一些子串，使每个子串都是 <strong>回文串</strong> ，返回 s 所有可能的分割方案。</p><p><strong>回文串</strong> 是正着读和反着读都一样的字符串。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;google&quot;</p><p><strong>输出：</strong>[[&quot;g&quot;,&quot;o&quot;,&quot;o&quot;,&quot;g&quot;,&quot;l&quot;,&quot;e&quot;],[&quot;g&quot;,&quot;oo&quot;,&quot;g&quot;,&quot;l&quot;,&quot;e&quot;],[&quot;goog&quot;,&quot;l&quot;,&quot;e&quot;]]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;aab&quot;</p><p><strong>输出：</strong>[[&quot;a&quot;,&quot;a&quot;,&quot;b&quot;],[&quot;aa&quot;,&quot;b&quot;]]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;a&quot;</p><p><strong>输出：</strong>[[&quot;a&quot;]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 16</code></li><li><code>s </code>仅由小写英文字母组成</li></ul>',11),q={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),y=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个典型的回溯问题，需要穷举所有可能的分割方式，并且保证每个分割出来的子串都是回文串。以下是解题思路：</p><ol><li>使用回溯法，定义一个 <code>track</code> 数组来存储当前的分割方案，以及一个 <code>res</code> 数组来存储所有的合法分割方案。</li><li>从字符串的起始位置开始，逐步截取子串，判断截取的子串是否是回文串。</li><li>如果是回文串，则将该子串加入 <code>track</code> 数组中，然后递归调用，继续向后截取子串。</li><li>如果不是回文串，则回溯到上一层，尝试其他的分割方案。</li><li>当截取到字符串的末尾时，将当前的 <code>track</code> 数组加入 <code>res</code> 数组，表示找到了一种合法的分割方案。</li></ol><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * 2^n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>每次递归调用时，需要检查子串是否为回文，回文判断的时间复杂度为 <code>O(n)</code>，因为需要遍历子串的字符进行比较；</li><li>由于每个字符都有可能形成回文或不形成回文，最坏情况下回文判断次数为 <code>2^n</code>；</li><li>所以总的时间复杂度接近于 <code>O(n * 2^n)</code> 这个级别，但因为重复的回文检查和回溯剪枝，实际的运行时间会远低于这个理论值。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>(不包括结果数组的存储空间)。 <ul><li>递归栈的空间复杂度 <code>O(n)</code>，回溯算法的递归深度最大为 <code>n</code>；</li><li>使用了一个 <code>track</code> 数组来存储当前路径，它的空间复杂度是 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">partition</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断字符串是否是回文字符串</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> right <span class="token operator">=</span> str<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>str<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> str<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 截取到了字符串的末尾，代表找到了一种合法的截取方式</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 截取从索引 start 到索引 i + 1（不包括 i + 1）的子串</span>
			<span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isPalindrome</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function x(O,I){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/graph.html"},{default:t(()=>[b]),_:1}),s(),a(o,{to:"/tag/hash-table.html"},{default:t(()=>[h]),_:1}),s("  🔗 "),n("a",g,[_,a(l)])]),f,n("div",q,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0131.html"},{default:t(()=>[s("第 131 题")]),_:1}),s(" 相同。")])]),y])}const L=i(d,[["render",x],["__file","jz_offer_II_086.html.vue"]]);export{L as default};

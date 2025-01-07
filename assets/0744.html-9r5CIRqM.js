import{_ as c,r as l,o as p,c as i,a as t,b as e,d as n,w as s,f as d,e as u}from"./app-WL8GPOUO.js";const g={},h=t("h1",{id:"_744-寻找比目标字母大的最小字母",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_744-寻找比目标字母大的最小字母","aria-hidden":"true"},"#"),e(" 744. 寻找比目标字母大的最小字母")],-1),k=t("code",null,"数组",-1),m=t("code",null,"二分查找",-1),q={href:"https://leetcode.cn/problems/find-smallest-letter-greater-than-target",target:"_blank",rel:"noopener noreferrer"},_=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/find-smallest-letter-greater-than-target",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of characters <code>letters</code> that is sorted in <strong>non- decreasing order</strong> , and a character <code>target</code>. There are <strong>at least two different</strong> characters in <code>letters</code>.</p><p>Return <em>the smallest character in</em><code>letters</code> <em>that is lexicographically greater than</em><code>target</code>. If such a character does not exist, return the first character in <code>letters</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;a&quot;</p><p>Output: &quot;c&quot;</p><p>Explanation: The smallest character that is lexicographically greater than &#39;a&#39; in letters is &#39;c&#39;.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;</p><p>Output: &quot;f&quot;</p><p>Explanation: The smallest character that is lexicographically greater than &#39;c&#39; in letters is &#39;f&#39;.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;</p><p>Output: &quot;x&quot;</p><p>Explanation: There are no characters in letters that is lexicographically greater than &#39;z&#39; so we return letters[0].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= letters.length &lt;= 10^4</code></li><li><code>letters[i]</code> is a lowercase English letter.</li><li><code>letters</code> is sorted in <strong>non-decreasing</strong> order.</li><li><code>letters</code> contains at least two different characters.</li><li><code>target</code> is a lowercase English letter.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符数组 <code>letters</code>，该数组按<strong>非递减顺序</strong> 排序，以及一个字符 <code>target</code>。<code>letters</code> 里<strong>至少有两个不同</strong> 的字符。</p><p>返回 <code>letters</code> 中大于 <code>target</code> 的最小的字符。如果不存在这样的字符，则返回 <code>letters</code> 的第一个字符。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> letters = [&quot;c&quot;, &quot;f&quot;, &quot;j&quot;]，target = &quot;a&quot;</p><p><strong>输出:</strong> &quot;c&quot;</p><p><strong>解释：</strong> letters 中字典上比 &#39;a&#39; 大的最小字符是 &#39;c&#39;。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> letters = [&quot;c&quot;,&quot;f&quot;,&quot;j&quot;], target = &quot;c&quot;</p><p><strong>输出:</strong> &quot;f&quot;</p><p><strong>解释：</strong> letters 中字典顺序上大于 &#39;c&#39; 的最小字符是 &#39;f&#39;。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> letters = [&quot;x&quot;,&quot;x&quot;,&quot;y&quot;,&quot;y&quot;], target = &quot;z&quot;</p><p><strong>输出:</strong> &quot;x&quot;</p><p><strong>解释：</strong> letters 中没有一个字符在字典上大于 &#39;z&#39;，所以我们返回 letters[0]。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= letters.length &lt;= 10^4</code></li><li><code>letters[i]</code> 是一个小写字母</li><li><code>letters</code> 按<strong>非递减顺序</strong> 排序</li><li><code>letters</code> 最少包含两个不同的字母</li><li><code>target</code> 是一个小写字母</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一道典型的查找问题，<code>letters</code> 是按照字典序排序的，因此可以利用<strong>二分查找</strong>的思想高效解决，目标是找到第一个大于 <code>target</code> 的字符，如果 <code>target</code> 大于等于 <code>letters</code> 的所有元素，则答案是 <code>letters[0]</code>。</p><ol><li><strong>初始化左右指针</strong>： <ul><li>左指针 <code>left = 0</code>，右指针 <code>right = letters.length - 1</code>。</li></ul></li><li><strong>二分查找</strong>： <ul><li>计算中间点 <code>mid = (left + right) / 2 ｜ 0</code>。</li><li>如果 <code>letters[mid] &gt; target</code>，更新右边界为 <code>mid - 1</code>。</li><li>如果 <code>letters[mid] &lt;= target</code>，更新左边界为 <code>mid + 1</code>。</li></ul></li><li><strong>结束条件</strong>： <ul><li>当 <code>left == right</code> 时，检查对应位置的字符。</li><li>如果 <code>left</code> 超过数组范围（即 <code>letters[left]</code> 不存在），返回 <code>letters[0]</code>。</li></ul></li><li><strong>返回结果</strong>： <ul><li>返回大于 <code>target</code> 的最小字符。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是数组的长度，二分查找的时间复杂度为 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了常数空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">letters</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>character<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">nextGreatestLetter</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">letters<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		right <span class="token operator">=</span> letters<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> mid <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>letters<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 如果 left 超出范围，则返回第一个字符</span>
	<span class="token keyword">return</span> letters<span class="token punctuation">[</span>left <span class="token operator">%</span> letters<span class="token punctuation">.</span>length<span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,30),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"2148",-1),w=t("td",{style:{"text-align":"left"}},"元素计数",-1),E={style:{"text-align":"center"}},j={style:{"text-align":"left"}},I=t("code",null,"数组",-1),L=t("code",null,"计数",-1),O=t("code",null,"排序",-1),C=t("td",{style:{"text-align":"center"}},"🟢",-1),N={style:{"text-align":"center"}},T={href:"https://leetcode.cn/problems/count-elements-with-strictly-smaller-and-greater-elements",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/count-elements-with-strictly-smaller-and-greater-elements",target:"_blank",rel:"noopener noreferrer"};function z(B,R){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),i("div",null,[h,t("p",null,[e("🟢 "),n(r,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),t("a",q,[_,n(o)]),e(),t("a",f,[b,n(o)])]),v,d(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[y,w,t("td",E,[n(a,{to:"/problem/2148.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",j,[n(a,{to:"/tag/array.html"},{default:s(()=>[I]),_:1}),e(),n(a,{to:"/tag/counting.html"},{default:s(()=>[L]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:s(()=>[O]),_:1})]),C,t("td",N,[t("a",T,[e("🀄️"),n(o)]),e(),t("a",V,[e("🔗"),n(o)])])])])])])}const M=c(g,[["render",z],["__file","0744.html.vue"]]);export{M as default};

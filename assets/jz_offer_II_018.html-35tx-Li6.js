import{_ as i,r as o,o as r,c as u,a as n,b as s,d as a,w as t,e as p}from"./app-U2ekqv2z.js";const d={},k=n("h1",{id:"_18-有效的回文",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_18-有效的回文","aria-hidden":"true"},"#"),s(" 18. 有效的回文")],-1),m=n("code",null,"双指针",-1),v=n("code",null,"字符串",-1),h={href:"https://leetcode.cn/problems/XltzEq",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个字符串 <code>s</code> ，验证 <code>s</code> 是否是 <strong>回文串</strong>，只考虑字母和数字字符，可以忽略字母的大小写。</p><p>本题中，将空字符串定义为有效的 <strong>回文串</strong>。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;A man, a plan, a canal: Panama&quot;</p><p><strong>输出:</strong> true</p><p><strong>解释：</strong> &quot;amanaplanacanalpanama&quot; 是回文串</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> s = &quot;race a car&quot;</p><p><strong>输出:</strong> false</p><p>解释：&quot;raceacar&quot; 不是回文串</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 2 * 10^5</code></li><li>字符串 <code>s</code> 由 ASCII 字符组成</li></ul>',9),f={class:"hint-container warning"},_=n("p",{class:"hint-container-title"},"注意",-1),w=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>字符串预处理</strong>： <ul><li>首先将字符串 <code>s</code> 转换为小写，忽略大小写敏感性。</li></ul></li><li><strong>双指针法</strong>： <ul><li>定义两个指针 <code>left</code> 和 <code>right</code>，分别指向字符串的头部和尾部。通过这两个指针向中间靠拢，同时进行判断。</li></ul></li><li><strong>跳过非字母和数字字符</strong>： <ul><li>如果 <code>left</code> 指向的字符不是字母或数字，左指针 <code>left</code> 右移一位。</li><li>如果 <code>right</code> 指向的字符不是字母或数字，右指针 <code>right</code> 左移一位。</li></ul></li><li><strong>比较字符</strong>： <ul><li>如果当前 <code>left</code> 和 <code>right</code> 指向的字符不相等，则字符串不是回文，返回 <code>false</code>。</li><li>如果字符相等，继续移动指针，<code>left</code> 向右移动，<code>right</code> 向左移动。</li></ul></li><li><strong>结束条件</strong>： <ul><li>当 <code>left</code> 大于 <code>right</code> 时，说明所有字符已经被成功比较且相等，字符串是回文，返回 <code>true</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>将字符串 <code>s</code> 转换为小写的操作（<code>s.toLowerCase()</code>）需要遍历整个字符串，时间复杂度为 <code>O(n)</code>；</li><li>双指针遍历，每个字符最多被访问两次（一次由左指针，一次由右指针），遍历的总时间复杂度为 <code>O(n)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，因为只使用了常数空间的指针和变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 将字符串转换为小写，忽略大小写</span>
	s <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> right <span class="token operator">=</span> s<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>

	<span class="token comment">// 使用双指针法</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 如果左指针指向的不是字母或数字，则跳过</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isChar</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果右指针指向的不是字母或数字，则跳过</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token function">isChar</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果左右字符不相等，则不是回文</span>
		<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>s<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">!==</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 如果相等，继续比较下一个字符</span>
		<span class="token keyword">else</span> <span class="token punctuation">{</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
			right<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 所有字符比较相等，是回文</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 辅助函数：判断是否是字母或数字</span>
<span class="token keyword">var</span> <span class="token function-variable function">isChar</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token string">&#39;a&#39;</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token string">&#39;z&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;=</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">&amp;&amp;</span> i <span class="token operator">&lt;=</span> <span class="token string">&#39;9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6);function y(q,x){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return r(),u("div",null,[k,n("p",null,[s("🟢 "),a(c,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(e,{to:"/tag/two-pointers.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[v]),_:1}),s("  🔗 "),n("a",h,[g,a(l)])]),b,n("div",f,[_,n("p",null,[s("本题与 LeetCode "),a(e,{to:"/problem/0125.html"},{default:t(()=>[s("第 125 题")]),_:1}),s(" 相同。")])]),w])}const I=i(d,[["render",y],["__file","jz_offer_II_018.html.vue"]]);export{I as default};

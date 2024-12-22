import{_ as c,r as p,o as i,c as u,a as n,b as t,d as s,w as a,f as r,e as d}from"./app-U2ekqv2z.js";const k={},h=n("h1",{id:"_401-二进制手表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_401-二进制手表","aria-hidden":"true"},"#"),t(" 401. 二进制手表")],-1),m=n("code",null,"位运算",-1),g=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),f=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A binary watch has 4 LEDs on the top to represent the hours (0-11), and 6 LEDs on the bottom to represent the minutes (0-59). Each LED represents a zero or one, with the least significant bit on the right.</p><ul><li>For example, the below binary watch reads <code>&quot;4:51&quot;</code>.</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Given an integer <code>turnedOn</code> which represents the number of LEDs that are currently on (ignoring the PM), return <em>all possible times the watch could represent</em>. You may return the answer in <strong>any order</strong>.</p><p>The hour must not contain a leading zero.</p><ul><li>For example, <code>&quot;01:00&quot;</code> is not valid. It should be <code>&quot;1:00&quot;</code>.</li></ul><p>The minute must consist of two digits and may contain a leading zero.</p><ul><li>For example, <code>&quot;10:2&quot;</code> is not valid. It should be <code>&quot;10:02&quot;</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: turnedOn = 1</p><p>Output: [&quot;0:01&quot;,&quot;0:02&quot;,&quot;0:04&quot;,&quot;0:08&quot;,&quot;0:16&quot;,&quot;0:32&quot;,&quot;1:00&quot;,&quot;2:00&quot;,&quot;4:00&quot;,&quot;8:00&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: turnedOn = 9</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= turnedOn &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>二进制手表顶部有 4 个 LED 代表<strong>小时（0-11）</strong> ，底部的 6 个 LED 代表<strong>分钟（0-59）</strong> 。每个 LED 代表一个 0 或 1，最低位在右侧。</p><ul><li>例如，下面的二进制手表读取 <code>&quot;4:51&quot;</code> 。</li></ul><figure><img src="https://assets.leetcode.com/uploads/2021/04/08/binarywatch.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>给你一个整数 <code>turnedOn</code> ，表示当前亮着的 LED 的数量，返回二进制手表可以表示的所有可能时间。你可以 <strong>按任意顺序</strong> 返回答案。</p><p>小时不会以零开头：</p><ul><li>例如，<code>&quot;01:00&quot;</code> 是无效的时间，正确的写法应该是 <code>&quot;1:00&quot;</code> 。</li></ul><p>分钟必须由两位数组成，可能会以零开头：</p><ul><li>例如，<code>&quot;10:2&quot;</code> 是无效的时间，正确的写法应该是 <code>&quot;10:02&quot;</code> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> turnedOn = 1</p><p><strong>输出：</strong>[&quot;0:01&quot;,&quot;0:02&quot;,&quot;0:04&quot;,&quot;0:08&quot;,&quot;0:16&quot;,&quot;0:32&quot;,&quot;1:00&quot;,&quot;2:00&quot;,&quot;4:00&quot;,&quot;8:00&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> turnedOn = 9</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= turnedOn &lt;= 10</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>遍历所有小时和分钟</strong>：</p><ul><li>小时范围：<code>[0, 11]</code></li><li>分钟范围：<code>[0, 59]</code></li></ul></li><li><p><strong>统计 LED 亮的数量</strong>：</p><ul><li>使用 <code>countBits</code> 函数来计算数字的二进制表示中 <code>1</code> 的个数。</li><li><code>countBits</code> 的实现利用位运算： <ul><li><code>num &amp; 1</code> 检查当前最低位是否为 <code>1</code>。</li><li><code>num &gt;&gt;= 1</code> 将数字右移一位，继续检查下一位。</li></ul></li></ul></li><li><p><strong>筛选符合条件的时间</strong>：</p><ul><li>如果当前小时和分钟的 <code>1</code> 的个数之和等于 <code>turnedOn</code>，则将其格式化，保证分钟部分始终为两位数（例如：<code>&quot;01&quot;, &quot;02&quot;</code>），并加入结果。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(720)</code>， 遍历所有小时和分钟的组合：<code>12 * 60 = 720</code>，即常数级复杂度。</li><li><strong>空间复杂度</strong>：<code>O(720)</code>，结果集 <code>res</code> 的空间复杂度取决于符合条件的时间组合，最坏情况下<code>O(720)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">turnedOn</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">readBinaryWatch</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">turnedOn</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 统计数字的二进制表示中 1 的个数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">countBit</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			count <span class="token operator">+=</span> num <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 检查最低位是否为 1</span>
			num <span class="token operator">&gt;&gt;=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 右移一位</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> count<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历所有小时和分钟的组合</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> hour <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> hour <span class="token operator">&lt;</span> <span class="token number">12</span><span class="token punctuation">;</span> hour<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> minute <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> minute <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">;</span> minute<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 统计当前小时和分钟的亮灯数量</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">countBit</span><span class="token punctuation">(</span>hour<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">countBit</span><span class="token punctuation">(</span>minute<span class="token punctuation">)</span> <span class="token operator">==</span> turnedOn<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 如果亮灯数量等于 turnedOn，则将该时间加入结果</span>
				res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>hour<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minute <span class="token operator">&lt;</span> <span class="token number">10</span> <span class="token operator">?</span> <span class="token string">&#39;0&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>minute<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,37),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"17",-1),w=n("td",{style:{"text-align":"left"}},"电话号码的字母组合",-1),O={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"哈希表",-1),B=n("code",null,"字符串",-1),D=n("code",null,"回溯",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},C={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},N=n("td",{style:{"text-align":"center"}},"191",-1),V=n("td",{style:{"text-align":"left"}},"位1的个数",-1),F={style:{"text-align":"center"}},T={style:{"text-align":"left"}},$=n("code",null,"位运算",-1),R=n("code",null,"分治",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/number-of-1-bits",target:"_blank",rel:"noopener noreferrer"};function S(W,Y){const l=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),u("div",null,[h,n("p",null,[t("🟢 "),s(l,{color:"#15bd66"},{default:a(()=>[t("Easy")]),_:1}),t("  🔖  "),s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[m]),_:1}),t(),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[g]),_:1}),t("  🔗 "),n("a",b,[_,s(o)]),t(),n("a",v,[q,s(o)])]),f,r(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,w,n("td",O,[s(e,{to:"/problem/0017.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",E,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[L]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[D]),_:1})]),I,n("td",j,[n("a",z,[t("🀄️"),s(o)]),t(),n("a",C,[t("🔗"),s(o)])])]),n("tr",null,[N,V,n("td",F,[s(e,{to:"/problem/0191.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",T,[s(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[$]),_:1}),t(),s(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[R]),_:1})]),A,n("td",G,[n("a",M,[t("🀄️"),s(o)]),t(),n("a",P,[t("🔗"),s(o)])])])])])])}const J=c(k,[["render",S],["__file","0401.html.vue"]]);export{J as default};

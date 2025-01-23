import{_ as l,r as p,o as r,c as i,a as n,b as s,d as e,w as t,f as u,e as d}from"./app-MsFeWfVD.js";const m={},k=n("h1",{id:"_2429-最小异或",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2429-最小异或","aria-hidden":"true"},"#"),s(" 2429. 最小异或")],-1),h=n("code",null,"贪心",-1),g=n("code",null,"位运算",-1),_={href:"https://leetcode.cn/problems/minimize-xor",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/minimize-xor",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two positive integers <code>num1</code> and <code>num2</code>, find the positive integer <code>x</code> such that:</p><ul><li><code>x</code> has the same number of set bits as <code>num2</code>, and</li><li>The value <code>x XOR num1</code> is <strong>minimal</strong>.</li></ul><p>Note that <code>XOR</code> is the bitwise XOR operation.</p><p>Return <em>the integer</em> <code>x</code>. The test cases are generated such that <code>x</code> is <strong>uniquely determined</strong>.</p><p>The number of <strong>set bits</strong> of an integer is the number of <code>1</code>&#39;s in its binary representation.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: num1 = 3, num2 = 5</p><p>Output: 3</p><p>Explanation:</p><p>The binary representations of num1 and num2 are 0011 and 0101, respectively.</p><p>The integer <strong>3</strong> has the same number of set bits as num2, and the value 3 XOR 3 = 0 is minimal.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: num1 = 1, num2 = 12</p><p>Output: 3</p><p>Explanation:</p><p>The binary representations of num1 and num2 are 0001 and 1100, respectively.</p><p>The integer <strong>3</strong> has the same number of set bits as num2, and the value 3 XOR 1 = 2 is minimal.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= num1, num2 &lt;= 10^9</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个正整数 <code>num1</code> 和 <code>num2</code> ，找出满足下述条件的正整数 <code>x</code> ：</p><ul><li><code>x</code> 的置位数和 <code>num2</code> 相同，且</li><li><code>x XOR num1</code> 的值 <strong>最小</strong></li></ul><p>注意 <code>XOR</code> 是按位异或运算。</p><p>返回整数 <code>x</code> 。题目保证，对于生成的测试用例， <code>x</code> 是 <strong>唯一确定</strong> 的。</p><p>整数的 <strong>置位数</strong> 是其二进制表示中 <code>1</code> 的数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> num1 = 3, num2 = 5</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>num1 和 num2 的二进制表示分别是 0011 和 0101 。</p><p>整数 <strong>3</strong> 的置位数与 num2 相同，且 3 XOR 3 = 0 是最小的。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> num1 = 1, num2 = 12</p><p><strong>输出：</strong> 3</p><p><strong>解释：</strong></p><p>num1 和 num2 的二进制表示分别是 0001 和 1100 。</p><p>整数 <strong>3</strong> 的置位数与 num2 相同，且 3 XOR 1 = 2 是最小的。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= num1, num2 &lt;= 10^9</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p><strong>1. 统计二进制中 <code>1</code> 的个数</strong></p><ul><li>对 <code>num1</code> 和 <code>num2</code>，分别计算其二进制中 <code>1</code> 的个数： <ul><li><code>count1</code> 表示 <code>num1</code> 中的 <code>1</code> 的个数。</li><li><code>count2</code> 表示 <code>num2</code> 中的 <code>1</code> 的个数。</li></ul></li></ul><p><strong>2. 逐位调整 <code>num1</code> 的二进制</strong></p><ul><li>遍历 <code>num1</code> 的二进制表示（假设为 32 位整数）： <ul><li>如果 <code>count1 &gt; count2</code>：从低位到高位寻找 <code>1</code>，将其置为 <code>0</code>，并减少 <code>count1</code>。</li><li>如果 <code>count1 &lt; count2</code>：从低位到高位寻找 <code>0</code>，将其置为 <code>1</code>，并增加 <code>count1</code>。</li></ul></li><li>直到 <code>count1</code> 等于 <code>count2</code>，停止调整。</li></ul><p><strong>3. 返回调整后的结果</strong></p><ul><li>返回调整后的数字，它是满足条件的最小异或值。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，遍历所有 32 位，每次调整只需常数时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用固定额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num1</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">num2</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minimizeXor</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">num1<span class="token punctuation">,</span> num2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> count1 <span class="token operator">=</span> num1<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">0</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// num1 中 1 的个数</span>
	<span class="token keyword">let</span> count2 <span class="token operator">=</span> num2<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">0</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// num2 中 1 的个数</span>

	<span class="token keyword">let</span> res <span class="token operator">=</span> num1<span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">32</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count1 <span class="token operator">&gt;</span> count2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前位是 1，清除该位</span>
			res <span class="token operator">^=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
			count1<span class="token operator">--</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>count1 <span class="token operator">&lt;</span> count2 <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>res <span class="token operator">&amp;</span> <span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 当前位是 0，设置为 1</span>
			res <span class="token operator">^=</span> <span class="token number">1</span> <span class="token operator">&lt;&lt;</span> i<span class="token punctuation">;</span>
			count1<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,36),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),w=n("td",{style:{"text-align":"center"}},"421",-1),O=n("td",{style:{"text-align":"left"}},"数组中两个数的最大异或值",-1),R=n("td",{style:{"text-align":"center"}},null,-1),X={style:{"text-align":"left"}},q=n("code",null,"位运算",-1),T=n("code",null,"字典树",-1),E=n("code",null,"数组",-1),N=n("code",null,"1+",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"1707",-1),z=n("td",{style:{"text-align":"left"}},"与数组中元素的最大异或值",-1),B=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},G=n("code",null,"位运算",-1),M=n("code",null,"字典树",-1),A=n("code",null,"数组",-1),D=n("td",{style:{"text-align":"center"}},"🔴",-1),F={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/maximum-xor-with-an-element-from-array",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximum-xor-with-an-element-from-array",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const c=p("font"),a=p("RouterLink"),o=p("ExternalLinkIcon");return r(),i("div",null,[k,n("p",null,[s("🟠 "),e(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),e(a,{to:"/tag/greedy.html"},{default:t(()=>[h]),_:1}),s(),e(a,{to:"/tag/bit-manipulation.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",_,[b,e(o)]),s(),n("a",f,[v,e(o)])]),x,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[w,O,R,n("td",X,[e(a,{to:"/tag/bit-manipulation.html"},{default:t(()=>[q]),_:1}),s(),e(a,{to:"/tag/trie.html"},{default:t(()=>[T]),_:1}),s(),e(a,{to:"/tag/array.html"},{default:t(()=>[E]),_:1}),s(),N]),C,n("td",L,[n("a",V,[s("🀄️"),e(o)]),s(),n("a",I,[s("🔗"),e(o)])])]),n("tr",null,[j,z,B,n("td",S,[e(a,{to:"/tag/bit-manipulation.html"},{default:t(()=>[G]),_:1}),s(),e(a,{to:"/tag/trie.html"},{default:t(()=>[M]),_:1}),s(),e(a,{to:"/tag/array.html"},{default:t(()=>[A]),_:1})]),D,n("td",F,[n("a",H,[s("🀄️"),e(o)]),s(),n("a",J,[s("🔗"),e(o)])])])])])])}const W=l(m,[["render",K],["__file","2429.html.vue"]]);export{W as default};

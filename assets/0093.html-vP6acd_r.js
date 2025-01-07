import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,f as u,e as d}from"./app-WL8GPOUO.js";const k={},h=n("h1",{id:"_93-复原-ip-地址",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_93-复原-ip-地址","aria-hidden":"true"},"#"),s(" 93. 复原 IP 地址")],-1),m=n("code",null,"字符串",-1),g=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/restore-ip-addresses",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/restore-ip-addresses",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),q=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A <strong>valid IP address</strong> consists of exactly four integers separated by single dots. Each integer is between <code>0</code> and <code>255</code> ( <strong>inclusive</strong> ) and cannot have leading zeros.</p><ul><li>For example, <code>&quot;0.1.2.201&quot;</code> and <code>&quot;192.168.1.1&quot;</code> are <strong>valid</strong> IP addresses, but <code>&quot;0.011.255.245&quot;</code>, <code>&quot;192.168.1.312&quot;</code> and <code>&quot;192.168@1.1&quot;</code> are <strong>invalid</strong> IP addresses.</li></ul><p>Given a string <code>s</code> containing only digits, return <em>all possible valid IP addresses that can be formed by inserting dots into</em><code>s</code>. You are <strong>not</strong> allowed to reorder or remove any digits in <code>s</code>. You may return the valid IP addresses in <strong>any</strong> order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;25525511135&quot;</p><p>Output: [&quot;255.255.11.135&quot;,&quot;255.255.111.35&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;0000&quot;</p><p>Output: [&quot;0.0.0.0&quot;]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;101023&quot;</p><p>Output: [&quot;1.0.10.23&quot;,&quot;1.0.102.3&quot;,&quot;10.1.0.23&quot;,&quot;10.10.2.3&quot;,&quot;101.0.2.3&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 20</code></li><li><code>s</code> consists of digits only.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><strong>有效 IP 地址</strong> 正好由四个整数（每个整数位于 <code>0</code> 到 <code>255</code> 之间组成，且不能含有前导 <code>0</code>），整数之间用 <code>&#39;.&#39;</code> 分隔。</p><ul><li>例如：<code>&quot;0.1.2.201&quot;</code> 和 <code>&quot;192.168.1.1&quot;</code> 是 <strong>有效</strong> IP 地址，但是 <code>&quot;0.011.255.245&quot;</code>、<code>&quot;192.168.1.312&quot;</code> 和 <code>&quot;192.168@1.1&quot;</code> 是 <strong>无效</strong> IP 地址。</li></ul><p>给定一个只包含数字的字符串 <code>s</code> ，用以表示一个 IP 地址，返回所有可能的 <strong>有效 IP 地址</strong>，这些地址可以通过在 <code>s</code> 中插入 <code>&#39;.&#39;</code> 来形成。你 <strong>不能</strong> 重新排序或删除 <code>s</code> 中的任何数字。你可以按 <strong>任何</strong> 顺序返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这道题可以使用回溯法来解决。</p><p>IP 地址由 4 个数字组成，每个数字的范围是 0 到 255。回溯法的基本思路是尝试每一种可能性，当得到一个满足条件的组合时，继续搜索下一个可能的数字。</p><ol><li><p>使用一个递归函数，每次从字符串中截取一个数字（可以是 1、2、3 位数字），将该数字加入当前的 IP 地址组合中，然后递归处理剩余的部分。</p></li><li><p>在递归函数中，需要注意一些剪枝的条件，比如：</p><ul><li>如果当前截取的数字超过了字符串的长度，结束递归。</li><li>如果当前截取的数字是以 0 开头的多位数，应该跳过，因为 IP 地址中不允许有前导零。</li><li>如果当前截取的数字大于 255，也应该跳过。</li></ul></li><li><p>如果得到的 IP 地址组合正好有 4 个数字，并且字符串被完全截取完毕，就将当前的组合加入结果集。</p></li></ol><p><strong>具体步骤：</strong></p><ol><li>初始化一个数组 <code>res</code> 用于存放结果。</li><li>定义一个递归函数 <code>backtrack</code>，接受参数 <code>start</code> 表示当前截取的位置，<code>track</code> 表示当前已经得到的 IP 地址组合。</li><li>在 <code>backtrack</code> 函数中，判断终止条件： <ul><li>如果 <code>track</code> 中超过了 4 个数字，直接返回。</li><li>如果 <code>track</code> 中已经有 4 个数字，且 <code>start</code> 刚好等于字符串的长度，将当前 <code>track</code> 加入 <code>res</code>。</li></ul></li><li>在循环中，每次截取 1、2、3 位数字，判断是否满足条件（不超过字符串长度，不以 0 开头的多位数，小于等于 255），满足条件则递归调用 <code>backtrack</code>。</li><li>最后，在主函数中返回结果数组 <code>res</code>。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 n 是字符串的长度。递归栈最多会有 4 层，是常数级别的；每个字符都可能成为 IP 的一个部分，需要检查 <code>O(n)</code> 个可能的子串。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>(不考虑结果数组的存储空间)，递归栈最多会有 4 层，是常数级别的。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">restoreIpAddresses</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">isValid</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">str</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> str<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;0&#39;</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token function">Number</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">255</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>start <span class="token operator">==</span> s<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> track<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> str <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>start<span class="token punctuation">,</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">isValid</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"751",-1),I=n("td",{style:{"text-align":"left"}},"IP 到 CIDR 🔒",-1),w=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},E=n("code",null,"位运算",-1),V=n("code",null,"字符串",-1),C=n("td",{style:{"text-align":"center"}},"🟠",-1),N={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/ip-to-cidr",target:"_blank",rel:"noopener noreferrer"},L={href:"https://leetcode.com/problems/ip-to-cidr",target:"_blank",rel:"noopener noreferrer"};function j(B,R){const c=p("font"),e=p("RouterLink"),o=p("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(e,{to:"/tag/string.html"},{default:t(()=>[m]),_:1}),s(),a(e,{to:"/tag/backtracking.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(o)]),s(),n("a",_,[f,a(o)])]),q,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,I,w,n("td",P,[a(e,{to:"/tag/bit-manipulation.html"},{default:t(()=>[E]),_:1}),s(),a(e,{to:"/tag/string.html"},{default:t(()=>[V]),_:1})]),C,n("td",N,[n("a",O,[s("🀄️"),a(o)]),s(),n("a",L,[s("🔗"),a(o)])])])])])])}const Y=l(k,[["render",j],["__file","0093.html.vue"]]);export{Y as default};

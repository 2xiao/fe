import{_ as l,r as c,o as u,c as i,a as n,b as a,d as s,w as t,f as r,e as d}from"./app-mXo2sCT-.js";const k={},h={id:"_68-文本左右对齐",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#_68-文本左右对齐","aria-hidden":"true"},"#",-1),b={href:"https://2xiao.github.io/leetcode-js/problem/0068.html",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"数组",-1),f=n("code",null,"字符串",-1),_=n("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/text-justification",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of strings <code>words</code> and a width <code>maxWidth</code>, format the text such that each line has exactly <code>maxWidth</code> characters and is fully (left and right) justified.</p><p>You should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>&#39; &#39;</code> when necessary so that each line has exactly <code>maxWidth</code> characters.</p><p>Extra spaces between words should be distributed as evenly as possible. If the number of spaces on a line does not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.</p><p>For the last line of text, it should be left-justified, and no extra space is inserted between words.</p><p><strong>Note:</strong></p><ul><li>A word is defined as a character sequence consisting of non-space characters only.</li><li>Each word&#39;s length is guaranteed to be greater than <code>0</code> and not exceed <code>maxWidth</code>.</li><li>The input array <code>words</code> contains at least one word.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;This&quot;, &quot;is&quot;, &quot;an&quot;, &quot;example&quot;, &quot;of&quot;, &quot;text&quot;, &quot;justification.&quot;], maxWidth = 16</p><p>Output:</p><p>[</p><p>&quot;This is an&quot;,</p><p>&quot;example of text&quot;,</p><p>&quot;justification. &quot;</p><p>]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;What&quot;,&quot;must&quot;,&quot;be&quot;,&quot;acknowledgment&quot;,&quot;shall&quot;,&quot;be&quot;], maxWidth = 16</p><p>Output:</p><p>[</p><p>&quot;What must be&quot;,</p><p>&quot;acknowledgment &quot;,</p><p>&quot;shall be &quot;</p><p>]</p><p>Explanation: Note that the last line is &quot;shall be&gt; &quot; instead of &quot;shall&gt; be&quot;, because the last line must be left-justified instead of fully-justified.</p><p>Note that the second line is also left-justified because it contains only one word.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words = [&quot;Science&quot;,&quot;is&quot;,&quot;what&quot;,&quot;we&quot;,&quot;understand&quot;,&quot;well&quot;,&quot;enough&quot;,&quot;to&quot;,&quot;explain&quot;,&quot;to&quot;,&quot;a&quot;,&quot;computer.&quot;,&quot;Art&quot;,&quot;is&quot;,&quot;everything&quot;,&quot;else&quot;,&quot;we&quot;,&quot;do&quot;], maxWidth = 20</p><p>Output:</p><p>[</p><p>&quot;Science is what we&quot;,</p><p>&quot;understand well&quot;,</p><p>&quot;enough to explain to&quot;,</p><p>&quot;a computer. Art is&quot;,</p><p>&quot;everything else we&quot;,</p><p>&quot;do &quot;</p><p>]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 300</code></li><li><code>1 &lt;= words[i].length &lt;= 20</code></li><li><code>words[i]</code> consists of only English letters and symbols.</li><li><code>1 &lt;= maxWidth &lt;= 100</code></li><li><code>words[i].length &lt;= maxWidth</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个单词数组 <code>words</code> 和一个长度 <code>maxWidth</code> ，重新排版单词，使其成为每行恰好有 <code>maxWidth</code> 个字符，且左右两端对齐的文本。</p><p>你应该使用 “贪心算法” 来放置给定的单词；也就是说，尽可能多地往每行中放置单词。必要时可用空格 &#39; &#39; 填充，使得每行恰好有 <code>maxWidth</code> 个字符。</p><p>要求尽可能均匀分配单词间的空格数量。如果某一行单词间的空格不能均匀分配，则左侧放置的空格数要多于右侧的空格数。</p><p>文本的最后一行应为左对齐，且单词之间不插入额外的空格。</p><p>注意:</p><ul><li>单词是指由非空格字符组成的字符序列。</li><li>每个单词的长度大于 <code>0</code>，小于等于 <code>maxWidth</code>。</li><li>输入单词数组 <code>words</code> 至少包含一个单词。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>先计算出每一行可以放进去哪些单词，以及有几个空格</li><li>再按照题目要求将单词和空格拼接好</li><li>注意最后一行要特殊处理</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">maxWidth</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fullJustify</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> maxWidth</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
		temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		space <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> words<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">+</span> len <span class="token operator">&gt;</span> maxWidth<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
			space<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>maxWidth <span class="token operator">-</span> count <span class="token operator">+</span> temp<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span>
			temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
			count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>words<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		count <span class="token operator">+=</span> len <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
			space<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>maxWidth <span class="token operator">-</span> count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">mergeWords</span><span class="token punctuation">(</span>res<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> space<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>
		res<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
		<span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>space<span class="token punctuation">[</span>res<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">mergeWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words<span class="token punctuation">,</span> space</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> words<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>len <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">return</span> words<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>space<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> m <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>space <span class="token operator">/</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> spaceStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> space <span class="token operator">%</span> len<span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>
		words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> n<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr <span class="token operator">+</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span>
		spaceStr <span class="token operator">+</span>
		<span class="token string">&#39; &#39;</span> <span class="token operator">+</span>
		words<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span> words<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>spaceStr<span class="token punctuation">)</span>
	<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,27),W=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),j=n("td",{style:{"text-align":"center"}},"1592",-1),E={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/rearrange-spaces-between-words",target:"_blank",rel:"noopener noreferrer"},S=n("td",{style:{"text-align":"center"}},null,-1),A={style:{"text-align":"left"}},I=n("code",null,"字符串",-1),C={style:{"text-align":"left"}},L=n("td",{style:{"text-align":"center"}},"2138",-1),V={style:{"text-align":"left"}},T={href:"https://leetcode.com/problems/divide-a-string-into-groups-of-size-k",target:"_blank",rel:"noopener noreferrer"},B=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},H=n("code",null,"字符串",-1),R=n("code",null,"模拟",-1),z={style:{"text-align":"left"}},F=n("td",{style:{"text-align":"center"}},"2468",-1),G={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/split-message-based-on-limit",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},null,-1),P={style:{"text-align":"left"}},Y=n("code",null,"字符串",-1),D=n("code",null,"二分查找",-1),K={style:{"text-align":"left"}};function Q(U,X){const o=c("ExternalLinkIcon"),p=c("font"),e=c("RouterLink");return u(),i("div",null,[n("h1",h,[m,a(),n("a",b,[a("68. 文本左右对齐"),s(o)])]),n("p",null,[a("🔴 "),s(p,{color:"#ff334b"},{default:t(()=>[a("Hard")]),_:1}),a("  🔖  "),s(e,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),a(),s(e,{to:"/tag/string.html"},{default:t(()=>[f]),_:1}),a(),s(e,{to:"/tag/simulation.html"},{default:t(()=>[_]),_:1}),a("  🔗 "),n("a",g,[q,s(o)]),a(),n("a",w,[y,s(o)])]),x,r(" prettier-ignore "),n("table",null,[W,n("tbody",null,[n("tr",null,[j,n("td",E,[n("a",N,[a("重新排列单词间的空格"),s(o)])]),S,n("td",A,[s(e,{to:"/tag/string.html"},{default:t(()=>[I]),_:1})]),n("td",C,[s(p,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1})])]),n("tr",null,[L,n("td",V,[n("a",T,[a("将字符串拆分为若干长度为 k 的组"),s(o)])]),B,n("td",O,[s(e,{to:"/tag/string.html"},{default:t(()=>[H]),_:1}),a(),s(e,{to:"/tag/simulation.html"},{default:t(()=>[R]),_:1})]),n("td",z,[s(p,{color:"#15bd66"},{default:t(()=>[a("Easy")]),_:1})])]),n("tr",null,[F,n("td",G,[n("a",J,[a("根据限制分割消息"),s(o)])]),M,n("td",P,[s(e,{to:"/tag/string.html"},{default:t(()=>[Y]),_:1}),a(),s(e,{to:"/tag/binary-search.html"},{default:t(()=>[D]),_:1})]),n("td",K,[s(p,{color:"#ff334b"},{default:t(()=>[a("Hard")]),_:1})])])])])])}const $=l(k,[["render",Q],["__file","0068.html.vue"]]);export{$ as default};

import{_ as l,r as p,o as r,c as i,a as n,b as s,d as t,w as e,f as u,e as d}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_500-键盘行",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_500-键盘行","aria-hidden":"true"},"#"),s(" 500. 键盘行")],-1),g=n("code",null,"数组",-1),m=n("code",null,"哈希表",-1),b=n("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/keyboard-row",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/keyboard-row",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of strings <code>words</code>, return <em>the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below</em>.</p><p>In the <strong>American keyboard</strong> :</p><ul><li>the first row consists of the characters <code>&quot;qwertyuiop&quot;</code>,</li><li>the second row consists of the characters <code>&quot;asdfghjkl&quot;</code>, and</li><li>the third row consists of the characters <code>&quot;zxcvbnm&quot;</code>.</li></ul><figure><img src="https://assets.leetcode.com/uploads/2018/10/12/keyboard.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: words = [&quot;Hello&quot;,&quot;Alaska&quot;,&quot;Dad&quot;,&quot;Peace&quot;]</p><p>Output: [&quot;Alaska&quot;,&quot;Dad&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: words = [&quot;omk&quot;]</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: words = [&quot;adsdf&quot;,&quot;sfd&quot;]</p><p>Output: [&quot;adsdf&quot;,&quot;sfd&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= words.length &lt;= 20</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> consists of English letters (both lowercase and uppercase).</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串数组 <code>words</code> ，只返回可以使用在 <strong>美式键盘</strong> 同一行的字母打印出来的单词。键盘如下图所示。</p><p><strong>美式键盘</strong> 中：</p><ul><li>第一行由字符 <code>&quot;qwertyuiop&quot;</code> 组成。</li><li>第二行由字符 <code>&quot;asdfghjkl&quot;</code> 组成。</li><li>第三行由字符 <code>&quot;zxcvbnm&quot;</code> 组成。</li></ul><p>![American keyboard](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/10/12/keyboard.png)</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;Hello&quot;,&quot;Alaska&quot;,&quot;Dad&quot;,&quot;Peace&quot;]</p><p><strong>输出：</strong>[&quot;Alaska&quot;,&quot;Dad&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;omk&quot;]</p><p><strong>输出：</strong>[]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> words = [&quot;adsdf&quot;,&quot;sfd&quot;]</p><p><strong>输出：</strong>[&quot;adsdf&quot;,&quot;sfd&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= words.length &lt;= 20</code></li><li><code>1 &lt;= words[i].length &lt;= 100</code></li><li><code>words[i]</code> 由英文字母（小写和大写字母）组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>创建键盘行映射</strong>：</p><ul><li>使用一个数组 <code>rowMap</code> 映射每个字母到其所在的键盘行。</li><li>例如，<code>rowMap[0]</code> 表示字母 <code>a</code>，<code>rowMap[25]</code> 表示字母 <code>z</code>。</li></ul></li><li><p><strong>定义辅助函数</strong>：</p><ul><li><code>getRow(char)</code>：返回字母 <code>char</code> 所在的键盘行，注意处理大小写。</li><li><code>isSameRow(word)</code>：判断单词 <code>word</code> 是否所有字母都在同一行。</li></ul></li><li><p><strong>过滤单词</strong>：</p><ul><li>遍历单词数组 <code>words</code>，利用 <code>filter</code> 方法，使用 <code>isSameRow</code> 判断其是否符合条件，仅保留满足条件的单词。</li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>返回经过过滤后的单词数组。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n × m)</code>，假设单词平均长度为 <code>m</code>，总共有 <code>n</code> 个单词，需要遍历每个单词中的每个字母。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用了一个常量数组 <code>row</code> 和一些临时变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">words</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findWords</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">words</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 键盘行映射</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">char</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> rowMap <span class="token operator">=</span> <span class="token punctuation">[</span>
			<span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span>
			<span class="token number">3</span>
		<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">const</span> idx <span class="token operator">=</span> char<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> rowMap<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 判断单词是否在同一行</span>
	<span class="token keyword">const</span> <span class="token function-variable function">isSameRow</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">getRow</span><span class="token punctuation">(</span>word<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> char <span class="token keyword">of</span> word<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">!==</span> <span class="token function">getRow</span><span class="token punctuation">(</span>char<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 筛选符合条件的单词</span>
	<span class="token keyword">return</span> words<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">word</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">isSameRow</span><span class="token punctuation">(</span>word<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),x=n("td",{style:{"text-align":"center"}},"3324",-1),R=n("td",{style:{"text-align":"left"}},"出现在屏幕上的字符串序列",-1),A=n("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},C=n("code",null,"字符串",-1),E=n("code",null,"模拟",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),j={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/find-the-sequence-of-strings-appeared-on-the-screen",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/find-the-sequence-of-strings-appeared-on-the-screen",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"center"}},"3330",-1),S=n("td",{style:{"text-align":"left"}},"找到初始输入字符串 I",-1),V=n("td",{style:{"text-align":"center"}},null,-1),z=n("td",{style:{"text-align":"left"}},null,-1),D=n("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/find-the-original-typed-string-i",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/find-the-original-typed-string-i",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"3333",-1),T=n("td",{style:{"text-align":"left"}},"找到初始输入字符串 II",-1),W=n("td",{style:{"text-align":"center"}},null,-1),F=n("td",{style:{"text-align":"left"}},null,-1),J=n("td",{style:{"text-align":"center"}},"🔴",-1),K={style:{"text-align":"center"}},Q={href:"https://leetcode.cn/problems/find-the-original-typed-string-ii",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/find-the-original-typed-string-ii",target:"_blank",rel:"noopener noreferrer"};function X(Y,Z){const c=p("font"),o=p("RouterLink"),a=p("ExternalLinkIcon");return r(),i("div",null,[h,n("p",null,[s("🟢 "),t(c,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1}),s("  🔖  "),t(o,{to:"/tag/array.html"},{default:e(()=>[g]),_:1}),s(),t(o,{to:"/tag/hash-table.html"},{default:e(()=>[m]),_:1}),s(),t(o,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),s("  🔗 "),n("a",_,[f,t(a)]),s(),n("a",q,[w,t(a)])]),v,u(" prettier-ignore "),n("table",null,[y,n("tbody",null,[n("tr",null,[x,R,A,n("td",I,[t(o,{to:"/tag/string.html"},{default:e(()=>[C]),_:1}),s(),t(o,{to:"/tag/simulation.html"},{default:e(()=>[E]),_:1})]),L,n("td",j,[n("a",M,[s("🀄️"),t(a)]),s(),n("a",N,[s("🔗"),t(a)])])]),n("tr",null,[O,S,V,z,D,n("td",B,[n("a",H,[s("🀄️"),t(a)]),s(),n("a",P,[s("🔗"),t(a)])])]),n("tr",null,[G,T,W,F,J,n("td",K,[n("a",Q,[s("🀄️"),t(a)]),s(),n("a",U,[s("🔗"),t(a)])])])])])])}const nn=l(k,[["render",X],["__file","0500.html.vue"]]);export{nn as default};

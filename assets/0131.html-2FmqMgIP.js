import{_ as c,r as l,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-Ob52y8QZ.js";const k={},h=n("h1",{id:"_131-分割回文串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_131-分割回文串","aria-hidden":"true"},"#"),s(" 131. 分割回文串")],-1),m=n("code",null,"字符串",-1),_=n("code",null,"动态规划",-1),g=n("code",null,"回溯",-1),b={href:"https://leetcode.cn/problems/palindrome-partitioning",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/palindrome-partitioning",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code>, partition <code>s</code> such that every substring of the partition is a <strong>palindrome</strong>. Return <em>all possible palindrome partitioning of</em><code>s</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;aab&quot;</p><p>Output: [[&quot;a&quot;,&quot;a&quot;,&quot;b&quot;],[&quot;aa&quot;,&quot;b&quot;]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;a&quot;</p><p>Output: [[&quot;a&quot;]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 16</code></li><li><code>s</code> contains only lowercase English letters.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code>，请你将 <code>s</code> 分割成一些子串，使每个子串都是 <strong>回文串</strong> 。返回 <code>s</code> 所有可能的分割方案。</p><p><strong>回文串</strong> 是正着读和反着读都一样的字符串。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这是一个典型的回溯问题，需要穷举所有可能的分割方式，并且保证每个分割出来的子串都是回文串。以下是解题思路：</p><ol><li>使用回溯法，定义一个 <code>track</code> 数组来存储当前的分割方案，以及一个 <code>res</code> 数组来存储所有的合法分割方案。</li><li>从字符串的起始位置开始，逐步截取子串，判断截取的子串是否是回文串。</li><li>如果是回文串，则将该子串加入 <code>track</code> 数组中，然后递归调用，继续向后截取子串。</li><li>如果不是回文串，则回溯到上一层，尝试其他的分割方案。</li><li>当截取到字符串的末尾时，将当前的 <code>track</code> 数组加入 <code>res</code> 数组，表示找到了一种合法的分割方案。</li></ol><h4 id="空间复杂度" tabindex="-1"><a class="header-anchor" href="#空间复杂度" aria-hidden="true">#</a> 空间复杂度</h4><ul><li><strong>时间复杂度</strong>：<code>O(n * 2^n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>每次递归调用时，需要检查子串是否为回文，回文判断的时间复杂度为 <code>O(n)</code>，因为需要遍历子串的字符进行比较；</li><li>由于每个字符都有可能形成回文或不形成回文，最坏情况下回文判断次数为 <code>2^n</code>；</li><li>所以总的时间复杂度接近于 <code>O(n * 2^n)</code> 这个级别，但因为重复的回文检查和回溯剪枝，实际的运行时间会远低于这个理论值。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>(不包括结果数组的存储空间)。 <ul><li>递归栈的空间复杂度 <code>O(n)</code>，回溯算法的递归深度最大为 <code>n</code>；</li><li>使用了一个 <code>track</code> 数组来存储当前路径，它的空间复杂度是 <code>O(n)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,19),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"132",-1),O=n("td",{style:{"text-align":"left"}},"分割回文串 II",-1),I=n("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},V=n("code",null,"字符串",-1),C=n("code",null,"动态规划",-1),L={style:{"text-align":"left"}},N={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/palindrome-partitioning-ii",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/palindrome-partitioning-ii",target:"_blank",rel:"noopener noreferrer"},H=n("td",{style:{"text-align":"center"}},"1745",-1),R=n("td",{style:{"text-align":"left"}},"分割回文串 IV",-1),P=n("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},M=n("code",null,"字符串",-1),S=n("code",null,"动态规划",-1),T={style:{"text-align":"left"}},z={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/palindrome-partitioning-iv",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/palindrome-partitioning-iv",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"2472",-1),J=n("td",{style:{"text-align":"left"}},"不重叠回文子字符串的最大数目",-1),K=n("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=n("code",null,"贪心",-1),W=n("code",null,"双指针",-1),X=n("code",null,"字符串",-1),Y=n("code",null,"1+",-1),Z={style:{"text-align":"left"}},$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/maximum-number-of-non-overlapping-palindrome-substrings",target:"_blank",rel:"noopener noreferrer"};function tn(an,en){const p=l("font"),e=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/string.html"},{default:a(()=>[m]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,t(o)]),s(),n("a",f,[y,t(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[q,O,I,n("td",E,[t(e,{to:"/tag/string.html"},{default:a(()=>[V]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[C]),_:1})]),n("td",L,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})]),n("td",N,[n("a",j,[s("🀄️"),t(o)]),s(),n("a",B,[s("🔗"),t(o)])])]),n("tr",null,[H,R,P,n("td",G,[t(e,{to:"/tag/string.html"},{default:a(()=>[M]),_:1}),s(),t(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[S]),_:1})]),n("td",T,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})]),n("td",z,[n("a",A,[s("🀄️"),t(o)]),s(),n("a",D,[s("🔗"),t(o)])])]),n("tr",null,[F,J,K,n("td",Q,[t(e,{to:"/tag/greedy.html"},{default:a(()=>[U]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[W]),_:1}),s(),t(e,{to:"/tag/string.html"},{default:a(()=>[X]),_:1}),s(),Y]),n("td",Z,[t(p,{color:"#ff334b"},{default:a(()=>[s("Hard")]),_:1})]),n("td",$,[n("a",nn,[s("🀄️"),t(o)]),s(),n("a",sn,[s("🔗"),t(o)])])])])])])}const pn=c(k,[["render",tn],["__file","0131.html.vue"]]);export{pn as default};

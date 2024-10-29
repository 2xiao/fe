import{_ as p,r as c,o as i,c as r,a as t,b as s,d as n,w as e,f as u,e as d}from"./app-mXo2sCT-.js";const k={},_={id:"_17-电话号码的字母组合",tabindex:"-1"},h=t("a",{class:"header-anchor",href:"#_17-电话号码的字母组合","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/0017.html",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"哈希表",-1),b=t("code",null,"字符串",-1),f=t("code",null,"回溯",-1),v={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),w=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string containing digits from <code>2-9</code> inclusive, return all possible letter combinations that the number could represent. Return the answer in <strong>any order</strong>.</p><p>A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.</p><figure><img src="https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = &quot;23&quot;</p><p>Output: [&quot;ad&quot;,&quot;ae&quot;,&quot;af&quot;,&quot;bd&quot;,&quot;be&quot;,&quot;bf&quot;,&quot;cd&quot;,&quot;ce&quot;,&quot;cf&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = &quot;&quot;</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = &quot;2&quot;</p><p>Output: [&quot;a&quot;,&quot;b&quot;,&quot;c&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= digits.length &lt;= 4</code></li><li><code>digits[i]</code> is a digit in the range <code>[&#39;2&#39;, &#39;9&#39;]</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个仅包含数字 <code>2-9</code> 的字符串，返回所有它能表示的字母组合。答案可以按 <strong>任意顺序</strong> 返回。</p><p>给出数字到字母的映射如下（与电话按键相同）。注意 <code>1</code> 不对应任何字母。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>数字与字母的映射关系：</strong> 首先，需要建立数字与字母的映射关系，即 <code>2</code> 对应 <code>&quot;abc&quot;</code>，<code>3</code> 对应 <code>&quot;def&quot;</code>，以此类推。可以使用一个数组或对象来存储这种映射关系。</p></li><li><p><strong>回溯过程：</strong> 定义一个回溯函数 <code>backtrack</code>，接收当前需要处理的数字索引 <code>index</code> 和当前已生成的字符串 <code>current</code> 作为参数。</p></li><li><p><strong>终止条件：</strong> 在回溯的过程中，需要判断当前字符串的长度是否等于输入数字字符串的长度。如果相等，则将当前字符串加入结果集。</p></li><li><p><strong>递归调用：</strong> 在回溯过程中，根据当前数字的映射关系，逐个尝试每个对应的字母。对于当前数字的每个映射字母，都可以选择加入当前字符串，然后递归调用下一层，之后需要撤销当前选择，继续尝试下一个映射字母。</p></li><li><p><strong>循环遍历：</strong> 对于当前数字的每个映射字母，通过循环遍历的方式实现，确保每个字母都被考虑到。</p></li><li><p><strong>返回结果：</strong> 最终通过调用 <code>backtrack</code> 函数得到所有符合条件的字符串组合，返回这些组合的数组作为最终结果。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">digits</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">letterCombinations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">digits</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>digits<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> digitToLetters <span class="token operator">=</span> <span class="token punctuation">{</span>
		<span class="token number">2</span><span class="token operator">:</span> <span class="token string">&#39;abc&#39;</span><span class="token punctuation">,</span>
		<span class="token number">3</span><span class="token operator">:</span> <span class="token string">&#39;def&#39;</span><span class="token punctuation">,</span>
		<span class="token number">4</span><span class="token operator">:</span> <span class="token string">&#39;ghi&#39;</span><span class="token punctuation">,</span>
		<span class="token number">5</span><span class="token operator">:</span> <span class="token string">&#39;jkl&#39;</span><span class="token punctuation">,</span>
		<span class="token number">6</span><span class="token operator">:</span> <span class="token string">&#39;mno&#39;</span><span class="token punctuation">,</span>
		<span class="token number">7</span><span class="token operator">:</span> <span class="token string">&#39;pqrs&#39;</span><span class="token punctuation">,</span>
		<span class="token number">8</span><span class="token operator">:</span> <span class="token string">&#39;tuv&#39;</span><span class="token punctuation">,</span>
		<span class="token number">9</span><span class="token operator">:</span> <span class="token string">&#39;wxyz&#39;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> digits<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>track<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> digitToLetters<span class="token punctuation">[</span>digits<span class="token punctuation">[</span>start<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>start <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),I=t("td",{style:{"text-align":"center"}},"22",-1),j={style:{"text-align":"left"}},L={href:"https://leetcode.com/problems/generate-parentheses",target:"_blank",rel:"noopener noreferrer"},C={style:{"text-align":"center"}},N={style:{"text-align":"left"}},M=t("code",null,"字符串",-1),V=t("code",null,"动态规划",-1),B=t("code",null,"回溯",-1),O={style:{"text-align":"left"}},R=t("td",{style:{"text-align":"center"}},"39",-1),T={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},G={style:{"text-align":"left"}},S=t("code",null,"数组",-1),D=t("code",null,"回溯",-1),F={style:{"text-align":"left"}},H=t("td",{style:{"text-align":"center"}},"401",-1),J={style:{"text-align":"left"}},K={href:"https://leetcode.com/problems/binary-watch",target:"_blank",rel:"noopener noreferrer"},P=t("td",{style:{"text-align":"center"}},null,-1),Q={style:{"text-align":"left"}},U=t("code",null,"位运算",-1),W=t("code",null,"回溯",-1),X={style:{"text-align":"left"}},Y=t("td",{style:{"text-align":"center"}},"2266",-1),Z={style:{"text-align":"left"}},$={href:"https://leetcode.com/problems/count-number-of-texts",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},null,-1),nt={style:{"text-align":"left"}},st=t("code",null,"哈希表",-1),et=t("code",null,"数学",-1),at=t("code",null,"字符串",-1),ot=t("code",null,"1+",-1),lt={style:{"text-align":"left"}},ct=t("td",{style:{"text-align":"center"}},"3014",-1),pt={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},dt=t("code",null,"贪心",-1),kt=t("code",null,"数学",-1),_t=t("code",null,"字符串",-1),ht={style:{"text-align":"left"}},gt=t("td",{style:{"text-align":"center"}},"3016",-1),mt={style:{"text-align":"left"}},bt={href:"https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-ii",target:"_blank",rel:"noopener noreferrer"},ft=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},yt=t("code",null,"贪心",-1),xt=t("code",null,"哈希表",-1),qt=t("code",null,"字符串",-1),wt=t("code",null,"2+",-1),Et={style:{"text-align":"left"}};function It(jt,Lt){const o=c("ExternalLinkIcon"),l=c("font"),a=c("RouterLink");return i(),r("div",null,[t("h1",_,[h,s(),t("a",g,[s("17. 电话号码的字母组合"),n(o)])]),t("p",null,[s("🟠 "),n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),n(a,{to:"/tag/hash-table.html"},{default:e(()=>[m]),_:1}),s(),n(a,{to:"/tag/string.html"},{default:e(()=>[b]),_:1}),s(),n(a,{to:"/tag/backtracking.html"},{default:e(()=>[f]),_:1}),s("  🔗 "),t("a",v,[y,n(o)]),s(),t("a",x,[q,n(o)])]),w,u(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[I,t("td",j,[t("a",L,[s("括号生成"),n(o)])]),t("td",C,[n(a,{to:"/problem/0022.html"},{default:e(()=>[s("[✓]")]),_:1})]),t("td",N,[n(a,{to:"/tag/string.html"},{default:e(()=>[M]),_:1}),s(),n(a,{to:"/tag/dynamic-programming.html"},{default:e(()=>[V]),_:1}),s(),n(a,{to:"/tag/backtracking.html"},{default:e(()=>[B]),_:1})]),t("td",O,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[R,t("td",T,[t("a",z,[s("组合总和"),n(o)])]),t("td",A,[n(a,{to:"/problem/0039.html"},{default:e(()=>[s("[✓]")]),_:1})]),t("td",G,[n(a,{to:"/tag/array.html"},{default:e(()=>[S]),_:1}),s(),n(a,{to:"/tag/backtracking.html"},{default:e(()=>[D]),_:1})]),t("td",F,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[H,t("td",J,[t("a",K,[s("二进制手表"),n(o)])]),P,t("td",Q,[n(a,{to:"/tag/bit-manipulation.html"},{default:e(()=>[U]),_:1}),s(),n(a,{to:"/tag/backtracking.html"},{default:e(()=>[W]),_:1})]),t("td",X,[n(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),t("tr",null,[Y,t("td",Z,[t("a",$,[s("统计打字方案数"),n(o)])]),tt,t("td",nt,[n(a,{to:"/tag/hash-table.html"},{default:e(()=>[st]),_:1}),s(),n(a,{to:"/tag/math.html"},{default:e(()=>[et]),_:1}),s(),n(a,{to:"/tag/string.html"},{default:e(()=>[at]),_:1}),s(),ot]),t("td",lt,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),t("tr",null,[ct,t("td",pt,[t("a",it,[s("输入单词需要的最少按键次数 I"),n(o)])]),rt,t("td",ut,[n(a,{to:"/tag/greedy.html"},{default:e(()=>[dt]),_:1}),s(),n(a,{to:"/tag/math.html"},{default:e(()=>[kt]),_:1}),s(),n(a,{to:"/tag/string.html"},{default:e(()=>[_t]),_:1})]),t("td",ht,[n(l,{color:"#15bd66"},{default:e(()=>[s("Easy")]),_:1})])]),t("tr",null,[gt,t("td",mt,[t("a",bt,[s("输入单词需要的最少按键次数 II"),n(o)])]),ft,t("td",vt,[n(a,{to:"/tag/greedy.html"},{default:e(()=>[yt]),_:1}),s(),n(a,{to:"/tag/hash-table.html"},{default:e(()=>[xt]),_:1}),s(),n(a,{to:"/tag/string.html"},{default:e(()=>[qt]),_:1}),s(),wt]),t("td",Et,[n(l,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const Nt=p(k,[["render",It],["__file","0017.html.vue"]]);export{Nt as default};

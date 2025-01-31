import{_ as l,r as p,o as i,c as d,a as n,b as t,d as s,w as a,f as u,e as r}from"./app-MkGfDfkx.js";const k={},h=n("h1",{id:"_140-单词拆分-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_140-单词拆分-ii","aria-hidden":"true"},"#"),t(" 140. 单词拆分 II")],-1),g=n("code",null,"字典树",-1),m=n("code",null,"记忆化搜索",-1),_=n("code",null,"数组",-1),q=n("code",null,"哈希表",-1),f=n("code",null,"字符串",-1),b=n("code",null,"动态规划",-1),v=n("code",null,"回溯",-1),w={href:"https://leetcode.cn/problems/word-break-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/word-break-ii",target:"_blank",rel:"noopener noreferrer"},D=n("code",null,"LeetCode",-1),O=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a string <code>s</code> and a dictionary of strings <code>wordDict</code>, add spaces in <code>s</code> to construct a sentence where each word is a valid dictionary word. Return all such possible sentences in <strong>any order</strong>.</p><p><strong>Note</strong> that the same word in the dictionary may be reused multiple times in the segmentation.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;catsanddog&quot;, wordDict = [&quot;cat&quot;,&quot;cats&quot;,&quot;and&quot;,&quot;sand&quot;,&quot;dog&quot;]</p><p>Output: [&quot;cats and dog&quot;,&quot;cat sand dog&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;pineapplepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;,&quot;applepen&quot;,&quot;pine&quot;,&quot;pineapple&quot;]</p><p>Output: [&quot;pine apple pen apple&quot;,&quot;pineapple pen apple&quot;,&quot;pine applepen apple&quot;]</p><p>Explanation: Note that you are allowed to reuse a dictionary word.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 20</code></li><li><code>1 &lt;= wordDict.length &lt;= 1000</code></li><li><code>1 &lt;= wordDict[i].length &lt;= 10</code></li><li><code>s</code> and <code>wordDict[i]</code> consist of only lowercase English letters.</li><li>All the strings of <code>wordDict</code> are <strong>unique</strong>.</li><li>Input is generated in a way that the length of the answer doesn&#39;t exceed 105.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code> 和一个字符串字典 <code>wordDict</code> ，在字符串 <code>s</code> 中增加空格来构建一个句子，使得句子中所有的单词都在词典中。<strong>以任意顺序</strong> 返回所有这些可能的句子。</p><p><strong>注意：</strong> 词典中的同一个单词可能在分段中被重复使用多次。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;catsanddog&quot;, wordDict = [&quot;cat&quot;,&quot;cats&quot;,&quot;and&quot;,&quot;sand&quot;,&quot;dog&quot;]</p><p><strong>输出:</strong>[&quot;cats and dog&quot;,&quot;cat sand dog&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;pineapplepenapple&quot;, wordDict = [&quot;apple&quot;,&quot;pen&quot;,&quot;applepen&quot;,&quot;pine&quot;,&quot;pineapple&quot;]</p><p><strong>输出:</strong>[&quot;pine apple pen apple&quot;,&quot;pineapple pen apple&quot;,&quot;pine applepen apple&quot;]</p><p><strong>解释:</strong> 注意你可以重复使用字典中的单词。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入:</strong> s = &quot;catsandog&quot;, wordDict = [&quot;cats&quot;,&quot;dog&quot;,&quot;sand&quot;,&quot;and&quot;,&quot;cat&quot;]</p><p><strong>输出:</strong>[]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 20</code></li><li><code>1 &lt;= wordDict.length &lt;= 1000</code></li><li><code>1 &lt;= wordDict[i].length &lt;= 10</code></li><li><code>s</code> 和 <code>wordDict[i]</code> 仅有小写英文字母组成</li><li><code>wordDict</code> 中所有字符串都 <strong>不同</strong></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>动态规划（Dynamic Programming）</strong> 来解决这个问题。</p><ol><li><p><strong>定义状态：</strong></p><ul><li>定义一个数组 <code>dp[i]</code>，表示字符串 <code>s[0:i]</code> 的所有可能的有效分割结果。</li><li>例如：<code>dp[5]</code> 表示 <code>s[0:5]</code> 的所有有效分割结果。</li></ul></li><li><p><strong>转移方程：</strong></p><ul><li>遍历字符串的每一个右边界 <code>right</code>，尝试用 <code>left</code> 分割成两部分： <ul><li>左部分 <code>s[0:left]</code> 的分割结果保存在 <code>dp[left]</code> 中。</li><li>右部分 <code>s[left:right]</code>（称为 <code>suffix</code>）是否在 <code>wordDict</code> 中。</li></ul></li><li>如果 <code>suffix</code> 是字典中的单词，将它与 <code>dp[left]</code> 中的每一个分割结果拼接起来，构成新的分割结果，存入 <code>dp[right]</code>。</li></ul></li><li><p><strong>初始化：</strong></p><ul><li><code>dp[0] = [&#39;&#39;]</code>，表示空字符串的分割结果。</li></ul></li><li><p><strong>最终答案：</strong></p><ul><li><code>dp[n]</code>，即字符串 <code>s[0:n]</code> 的所有分割结果。</li></ul></li></ol><p>具体算法如下：</p><ol><li>将 <code>wordDict</code> 转换成一个 <code>Set</code>，便于快速判断单词是否在字典中。</li><li>初始化一个长度为 <code>n+1</code> 的二维数组 <code>dp</code>，每个位置存储该子字符串的所有可能分割结果。</li><li>遍历 <code>right</code> 从 1 到 <code>n</code>，对于每个 <code>right</code>： <ul><li>遍历 <code>left</code> 从 0 到 <code>right</code>，计算子串 <code>s[left:right]</code>；</li><li>如果 <code>s[left:right]</code> 在字典中，取出 <code>dp[left]</code> 的所有分割结果，并将其与当前子串拼接，存入 <code>dp[right]</code>。</li></ul></li><li>最后返回 <code>dp[n]</code>，即完整字符串的所有可能分割结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度：</strong> <code>O(n^2 + m * L)</code></p><ul><li>遍历所有子串：外层循环 <code>O(n)</code>，内层循环 <code>O(n)</code>，子串判断 <code>O(1)</code>。</li><li>拼接字符串结果：假设最终有 <code>m</code> 个有效分割，每次拼接代价为 <code>O(L)</code>（平均单词长度为 <code>L</code>）。</li><li>综合时间复杂度为：<code>O(n^2 + m * L)</code>。</li></ul></li><li><p><strong>空间复杂度：</strong> <code>O(n * m + k)</code></p><ul><li>动态规划数组 <code>dp</code> 需要存储结果，最坏情况下存储所有分割结果，空间复杂度为 <code>O(n * m)</code>。</li><li>字典 <code>wordSet</code> 的空间为 <code>O(k)</code>，其中 <code>k</code> 为字典单词总数。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">wordDict</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">wordBreak</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> wordDict</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> <span class="token comment">// 字符串长度</span>
	<span class="token keyword">const</span> wordSet <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span>wordDict<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 用 Set 存储字典，方便快速查找</span>

	<span class="token comment">// 初始化 dp 数组，dp[i] 表示 s[0:i] 的所有分割结果</span>
	<span class="token keyword">let</span> dp <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	dp<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 空字符串的分割结果是一个空字符串</span>

	<span class="token comment">// 遍历字符串的右边界</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> right <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储 dp[right] 的分割结果</span>

		<span class="token comment">// 遍历左边界，寻找有效的分割点</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> left <span class="token operator">&lt;</span> right<span class="token punctuation">;</span> left<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> suffix <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>left<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 子串 s[left:right]</span>

			<span class="token comment">// 如果后缀是字典中的单词</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>wordSet<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>suffix<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token comment">// 将 dp[left] 中的每个分割结果拼接后缀</span>
				<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> substring <span class="token keyword">of</span> dp<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
					temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>substring<span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>substring <span class="token operator">?</span> <span class="token string">&#39; &#39;</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>suffix<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
				<span class="token punctuation">}</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>

		dp<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span> <span class="token comment">// 更新 dp[right]</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> dp<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 返回 s[0:n] 的所有分割结果</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),L=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"139",-1),I=n("td",{style:{"text-align":"left"}},"单词拆分",-1),N={style:{"text-align":"center"}},S={style:{"text-align":"left"}},C=n("code",null,"字典树",-1),V=n("code",null,"记忆化搜索",-1),B=n("code",null,"数组",-1),j=n("code",null,"3+",-1),R=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/word-break",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/word-break",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"472",-1),H=n("td",{style:{"text-align":"left"}},"连接词",-1),P=n("td",{style:{"text-align":"center"}},null,-1),T={style:{"text-align":"left"}},F=n("code",null,"深度优先搜索",-1),J=n("code",null,"字典树",-1),K=n("code",null,"数组",-1),M=n("code",null,"2+",-1),Q=n("td",{style:{"text-align":"center"}},"🔴",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/concatenated-words",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/concatenated-words",target:"_blank",rel:"noopener noreferrer"};function Y(Z,nn){const c=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),d("div",null,[h,n("p",null,[t("🔴 "),s(c,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(o,{to:"/tag/trie.html"},{default:a(()=>[g]),_:1}),t(),s(o,{to:"/tag/memoization.html"},{default:a(()=>[m]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),t(),s(o,{to:"/tag/hash-table.html"},{default:a(()=>[q]),_:1}),t(),s(o,{to:"/tag/string.html"},{default:a(()=>[f]),_:1}),t(),s(o,{to:"/tag/dynamic-programming.html"},{default:a(()=>[b]),_:1}),t(),s(o,{to:"/tag/backtracking.html"},{default:a(()=>[v]),_:1}),t("  🔗 "),n("a",w,[y,s(e)]),t(),n("a",x,[D,s(e)])]),O,u(" prettier-ignore "),n("table",null,[L,n("tbody",null,[n("tr",null,[E,I,n("td",N,[s(o,{to:"/problem/0139.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",S,[s(o,{to:"/tag/trie.html"},{default:a(()=>[C]),_:1}),t(),s(o,{to:"/tag/memoization.html"},{default:a(()=>[V]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:a(()=>[B]),_:1}),t(),j]),R,n("td",$,[n("a",z,[t("🀄️"),s(e)]),t(),n("a",A,[t("🔗"),s(e)])])]),n("tr",null,[G,H,P,n("td",T,[s(o,{to:"/tag/depth-first-search.html"},{default:a(()=>[F]),_:1}),t(),s(o,{to:"/tag/trie.html"},{default:a(()=>[J]),_:1}),t(),s(o,{to:"/tag/array.html"},{default:a(()=>[K]),_:1}),t(),M]),Q,n("td",U,[n("a",W,[t("🀄️"),s(e)]),t(),n("a",X,[t("🔗"),s(e)])])])])])])}const sn=l(k,[["render",Y],["__file","0140.html.vue"]]);export{sn as default};

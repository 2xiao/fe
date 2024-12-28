import{_ as l,r as c,o as i,c as r,a as n,b as t,d as s,w as a,f as d,e as u}from"./app-fEpXkbSw.js";const k={},h=n("h1",{id:"_77-组合",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_77-组合","aria-hidden":"true"},"#"),t(" 77. 组合")],-1),m=n("code",null,"回溯",-1),_={href:"https://leetcode.cn/problems/combinations",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/combinations",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"LeetCode",-1),g=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two integers <code>n</code> and <code>k</code>, return <em>all possible combinations of</em> <code>k</code><em>numbers chosen from the range</em> <code>[1, n]</code>.</p><p>You may return the answer in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 4, k = 2</p><p>Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]</p><p>Explanation: There are 4 choose 2 = 6 total combinations.</p><p>Note that combinations are unordered, i.e., [1,2] and [2,1] are considered to be the same combination.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 1, k = 1</p><p>Output: [[1]]</p><p>Explanation: There is 1 choose 1 = 1 total combination.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 20</code></li><li><code>1 &lt;= k &lt;= n</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定两个整数 <code>n</code> 和 <code>k</code>，返回范围 <code>[1, n]</code> 中所有可能的 <code>k</code> 个数的组合。</p><p>你可以按 <strong>任何顺序</strong> 返回答案。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法，通过递归的方式生成组合：</p><ol><li>定义一个结果数组 <code>res</code> 和一个路径数组 <code>track</code>。</li><li>使用回溯算法，通过递归函数 <code>backtrack</code> 遍历组合的所有可能性。</li><li>在 <code>backtrack</code> 函数中，当路径数组的长度达到 <code>k</code> 时，将当前路径数组的副本加入结果数组。其中参数 <code>start</code> 控制遍历树枝的起始位置，避免产生重复的子集。</li><li>在每一层递归中，从 <code>start</code> 开始遍历数字，将当前数字加入路径数组，然后递归调用下一层，最后弹出当前数字，回溯到上一层。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n! / (k!(n-k)!))</code> ，因为这个问题的解的数量是从 <code>n</code> 个不同元素中选择 <code>k</code> 个元素的方式数。</li><li><strong>空间复杂度</strong>：<code>O(k * n! / (k!(n-k)!)) + O(k)</code> = <code>O(k * n! / (k!(n-k)!))</code><ul><li>其中 <code>n! / (k!(n-k)!)</code> 表示从 <code>n</code> 个元素中选择 <code>k</code> 个的组合数。</li><li>由于 <code>n! / (k!(n-k)!) &lt; n! / ((n / 2)!)^2</code>，因此整体空间复杂度可以简化为 <code>O(k * n! / ((n / 2)!)^2)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">n</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combine</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">n<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>track<span class="token punctuation">.</span>length <span class="token operator">==</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> n<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,20),x=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),y=n("td",{style:{"text-align":"center"}},"39",-1),w=n("td",{style:{"text-align":"left"}},"组合总和",-1),E={style:{"text-align":"center"}},O={style:{"text-align":"left"}},N=n("code",null,"数组",-1),C=n("code",null,"回溯",-1),L=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},q={href:"https://leetcode.cn/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},I={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},j=n("td",{style:{"text-align":"center"}},"46",-1),B=n("td",{style:{"text-align":"left"}},"全排列",-1),T={style:{"text-align":"center"}},R={style:{"text-align":"left"}},G=n("code",null,"数组",-1),M=n("code",null,"回溯",-1),S=n("td",{style:{"text-align":"center"}},"🟠",-1),Y={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/permutations",target:"_blank",rel:"noopener noreferrer"},A={href:"https://leetcode.com/problems/permutations",target:"_blank",rel:"noopener noreferrer"};function D(F,H){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[h,n("p",null,[t("🟠 "),s(p,{color:"#ffb800"},{default:a(()=>[t("Medium")]),_:1}),t("  🔖  "),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[m]),_:1}),t("  🔗 "),n("a",_,[b,s(o)]),t(),n("a",f,[v,s(o)])]),g,d(" prettier-ignore "),n("table",null,[x,n("tbody",null,[n("tr",null,[y,w,n("td",E,[s(e,{to:"/problem/0039.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",O,[s(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),t(),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[C]),_:1})]),L,n("td",V,[n("a",q,[t("🀄️"),s(o)]),t(),n("a",I,[t("🔗"),s(o)])])]),n("tr",null,[j,B,n("td",T,[s(e,{to:"/problem/0046.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",R,[s(e,{to:"/tag/array.html"},{default:a(()=>[G]),_:1}),t(),s(e,{to:"/tag/backtracking.html"},{default:a(()=>[M]),_:1})]),S,n("td",Y,[n("a",z,[t("🀄️"),s(o)]),t(),n("a",A,[t("🔗"),s(o)])])])])])])}const K=l(k,[["render",D],["__file","0077.html.vue"]]);export{K as default};

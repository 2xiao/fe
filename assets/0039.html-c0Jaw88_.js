import{_ as i,r as c,o as r,c as p,a as t,b as n,d as e,w as s,f as d,e as u}from"./app--GvfAkAr.js";const _={},h=t("h1",{id:"_39-组合总和",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_39-组合总和","aria-hidden":"true"},"#"),n(" 39. 组合总和")],-1),k=t("code",null,"数组",-1),m=t("code",null,"回溯",-1),g={href:"https://leetcode.cn/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/combination-sum",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of <strong>distinct</strong> integers <code>candidates</code> and a target integer <code>target</code>, return _a list of all <strong>unique combinations</strong> of _<code>candidates</code><em>where the chosen numbers sum to</em><code>target</code> <em>.</em> You may return the combinations in <strong>any order</strong>.</p><p>The <strong>same</strong> number may be chosen from <code>candidates</code> an <strong>unlimited number of times</strong>. Two combinations are unique if the frequency of at least one of the chosen numbers is different.</p><p>The test cases are generated such that the number of unique combinations that sum up to <code>target</code> is less than <code>150</code> combinations for the given input.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: candidates = [2,3,6,7], target = 7</p><p>Output: [[2,2,3],[7]]</p><p>Explanation:</p><p>2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.</p><p>7 is a candidate, and 7 = 7.</p><p>These are the only two combinations.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: candidates = [2,3,5], target = 8</p><p>Output: [[2,2,2,2],[2,3,3],[3,5]]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: candidates = [2], target = 1</p><p>Output: []</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= candidates.length &lt;= 30</code></li><li><code>2 &lt;= candidates[i] &lt;= 40</code></li><li>All elements of <code>candidates</code> are <strong>distinct</strong>.</li><li><code>1 &lt;= target &lt;= 40</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个 <strong>无重复元素</strong> 的整数数组 <code>candidates</code> 和一个目标整数 <code>target</code> ，找出 <code>candidates</code> 中可以使数字和为目标数 <code>target</code> 的 <strong>所有</strong> 不同组合 ，并以列表形式返回。你可以按 <strong>任意顺序</strong> 返回这些组合。</p><p><code>candidates</code> 中的 <strong>同一个</strong> 数字可以 <strong>无限制重复被选取</strong> 。如果至少一个数字的被选数量不同，则两种组合是不同的。</p><p>对于给定的输入，保证和为 <code>target</code> 的不同组合数少于 <code>150</code> 个。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题使用回溯法来解决。回溯法是一种通过不断尝试生成问题的所有解的算法，如果解不符合要求，就撤销上一步甚至上几步的计算，再通过其他可能的分支寻找正确的解。具体步骤如下：</p><ol><li><p><strong>定义回溯函数：</strong> 定义一个回溯函数 <code>backtrack</code>，接收一个起始索引 <code>start</code> 作为参数，表示从候选数组的哪个位置开始考虑，避免重复组合。</p></li><li><p><strong>回溯过程：</strong> 在回溯的过程中，不断选择当前位置的数字，并更新当前组合的和 <code>sum</code>。如果 <code>sum</code> 等于目标值 <code>target</code>，则将当前组合添加到结果集中。</p></li><li><p><strong>递归调用：</strong> 如果 <code>sum</code> 小于 <code>target</code>，则继续在当前位置和之后的位置进行递归。如果 <code>sum</code> 大于 <code>target</code>，说明当前组合不满足条件，需要撤销当前选择，返回上一层继续尝试其他分支。</p></li><li><p><strong>限制条件：</strong> 在递归的过程中，通过判断 <code>sum</code> 是否等于 <code>target</code> 来确保生成的组合是符合要求的。递归时传入 <code>i</code> 作为参数，表示从当前位置开始尝试，以确保可以重复使用当前数字。</p></li><li><p><strong>返回结果：</strong> 最终通过调用 <code>backtrack</code> 函数得到所有符合条件的组合，返回这些组合的数组作为结果。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n^t)</code>，<code>n</code> 为 <code>candidates</code> 长度，<code>t = target / 最小候选数</code>，主要由递归树的深度和每层递归中循环次数决定。 <ul><li>递归树的每一层代表从数组 <code>candidates</code> 中选择一个数字加入到组合中的过程。每个数字都可以重复使用，因此递归树的深度最大为 <code>target / 最小候选数</code>。</li><li>在最坏情况下，递归树的每个节点都要进行 <code>n</code> 次循环操作来选择候选数，因此递归树的节点总数最多为 <code>n^(target / 最小候选数)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(t)</code>，<code>t = target / 最小候选数</code>，主要由递归深度决定，递归树的深度可能达到 <code>target / 最小候选数</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">candidates</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">target</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">combinationSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">candidates<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> len <span class="token operator">=</span> candidates<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token comment">// 满足条件</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">==</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// 剪枝</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>sum <span class="token operator">&gt;</span> target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">+=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>

			<span class="token comment">// 注意这里传入的参数是 i 而不是 i + 1，表示可以重复使用当前的数字</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>

			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			sum <span class="token operator">-=</span> candidates<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"17",-1),q=t("td",{style:{"text-align":"left"}},"电话号码的字母组合",-1),I={style:{"text-align":"center"}},E={style:{"text-align":"left"}},N=t("code",null,"哈希表",-1),C=t("code",null,"字符串",-1),L=t("code",null,"回溯",-1),O=t("td",{style:{"text-align":"center"}},"🟠",-1),T={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/letter-combinations-of-a-phone-number",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"40",-1),R=t("td",{style:{"text-align":"left"}},"组合总和 II",-1),S={style:{"text-align":"center"}},A={style:{"text-align":"left"}},G=t("code",null,"数组",-1),M=t("code",null,"回溯",-1),Y=t("td",{style:{"text-align":"center"}},"🟠",-1),z={style:{"text-align":"center"}},D={href:"https://leetcode.cn/problems/combination-sum-ii",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/combination-sum-ii",target:"_blank",rel:"noopener noreferrer"},H=t("td",{style:{"text-align":"center"}},"77",-1),J=t("td",{style:{"text-align":"left"}},"组合",-1),K={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"回溯",-1),U=t("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/combinations",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/combinations",target:"_blank",rel:"noopener noreferrer"},$=t("td",{style:{"text-align":"center"}},"216",-1),tt=t("td",{style:{"text-align":"left"}},"组合总和 III",-1),nt={style:{"text-align":"center"}},et={style:{"text-align":"left"}},st=t("code",null,"数组",-1),at=t("code",null,"回溯",-1),ot=t("td",{style:{"text-align":"center"}},"🟠",-1),ct={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/combination-sum-iii",target:"_blank",rel:"noopener noreferrer"},it={href:"https://leetcode.com/problems/combination-sum-iii",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"254",-1),pt=t("td",{style:{"text-align":"left"}},"因子的组合 🔒",-1),dt=t("td",{style:{"text-align":"center"}},null,-1),ut={style:{"text-align":"left"}},_t=t("code",null,"回溯",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),kt={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/factor-combinations",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/factor-combinations",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},"377",-1),ft=t("td",{style:{"text-align":"left"}},"组合总和 Ⅳ",-1),vt=t("td",{style:{"text-align":"center"}},null,-1),yt={style:{"text-align":"left"}},xt=t("code",null,"数组",-1),wt=t("code",null,"动态规划",-1),qt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/combination-sum-iv",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/combination-sum-iv",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},"3183",-1),Lt=t("td",{style:{"text-align":"left"}},"达到总和的方法数量 🔒",-1),Ot=t("td",{style:{"text-align":"center"}},null,-1),Tt={style:{"text-align":"left"}},Vt=t("code",null,"数组",-1),jt=t("code",null,"动态规划",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Rt={style:{"text-align":"center"}},St={href:"https://leetcode.cn/problems/the-number-of-ways-to-make-the-sum",target:"_blank",rel:"noopener noreferrer"},At={href:"https://leetcode.com/problems/the-number-of-ways-to-make-the-sum",target:"_blank",rel:"noopener noreferrer"};function Gt(Mt,Yt){const l=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon");return r(),p("div",null,[h,t("p",null,[n("🟠 "),e(l,{color:"#ffb800"},{default:s(()=>[n("Medium")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[k]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),t("a",g,[b,e(o)]),n(),t("a",f,[v,e(o)])]),y,d(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[w,q,t("td",I,[e(a,{to:"/problem/0017.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",E,[e(a,{to:"/tag/hash-table.html"},{default:s(()=>[N]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[C]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[L]),_:1})]),O,t("td",T,[t("a",V,[n("🀄️"),e(o)]),n(),t("a",j,[n("🔗"),e(o)])])]),t("tr",null,[B,R,t("td",S,[e(a,{to:"/problem/0040.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",A,[e(a,{to:"/tag/array.html"},{default:s(()=>[G]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[M]),_:1})]),Y,t("td",z,[t("a",D,[n("🀄️"),e(o)]),n(),t("a",F,[n("🔗"),e(o)])])]),t("tr",null,[H,J,t("td",K,[e(a,{to:"/problem/0077.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",P,[e(a,{to:"/tag/backtracking.html"},{default:s(()=>[Q]),_:1})]),U,t("td",W,[t("a",X,[n("🀄️"),e(o)]),n(),t("a",Z,[n("🔗"),e(o)])])]),t("tr",null,[$,tt,t("td",nt,[e(a,{to:"/problem/0216.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",et,[e(a,{to:"/tag/array.html"},{default:s(()=>[st]),_:1}),n(),e(a,{to:"/tag/backtracking.html"},{default:s(()=>[at]),_:1})]),ot,t("td",ct,[t("a",lt,[n("🀄️"),e(o)]),n(),t("a",it,[n("🔗"),e(o)])])]),t("tr",null,[rt,pt,dt,t("td",ut,[e(a,{to:"/tag/backtracking.html"},{default:s(()=>[_t]),_:1})]),ht,t("td",kt,[t("a",mt,[n("🀄️"),e(o)]),n(),t("a",gt,[n("🔗"),e(o)])])]),t("tr",null,[bt,ft,vt,t("td",yt,[e(a,{to:"/tag/array.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[wt]),_:1})]),qt,t("td",It,[t("a",Et,[n("🀄️"),e(o)]),n(),t("a",Nt,[n("🔗"),e(o)])])]),t("tr",null,[Ct,Lt,Ot,t("td",Tt,[e(a,{to:"/tag/array.html"},{default:s(()=>[Vt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[jt]),_:1})]),Bt,t("td",Rt,[t("a",St,[n("🀄️"),e(o)]),n(),t("a",At,[n("🔗"),e(o)])])])])])])}const Dt=i(_,[["render",Gt],["__file","0039.html.vue"]]);export{Dt as default};

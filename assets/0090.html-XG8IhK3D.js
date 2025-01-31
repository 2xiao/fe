import{_ as l,r as c,o as i,c as r,a as n,b as s,d as t,w as a,f as u,e as d}from"./app-MkGfDfkx.js";const k={},m=n("h1",{id:"_90-子集-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_90-子集-ii","aria-hidden":"true"},"#"),s(" 90. 子集 II")],-1),h=n("code",null,"位运算",-1),_=n("code",null,"数组",-1),b=n("code",null,"回溯",-1),v={href:"https://leetcode.cn/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),g={href:"https://leetcode.com/problems/subsets-ii",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),x=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer array <code>nums</code> that may contain duplicates, return <em>all possible</em> <em>subsets</em> <em>(the power set)</em>.</p><p>The solution set <strong>must not</strong> contain duplicate subsets. Return the solution in <strong>any order</strong>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,2,2]</p><p>Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0]</p><p>Output: [[],[0]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10</code></li><li><code>-10 &lt;= nums[i] &lt;= 10</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code> ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。</p><p>解集 <strong>不能</strong> 包含重复的子集。返回的解集中，子集可以按 <strong>任意顺序</strong> 排列。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用回溯算法来生成所有可能的子集，并在生成过程中进行去重：</p><ol><li>首先对输入的数组 <code>nums</code> 进行排序，以便在后续的去重步骤中方便比较相邻的元素。</li><li>定义一个空数组 <code>res</code> 用于存储最终的结果，以及一个空数组 <code>track</code> 用于回溯过程中记录当前的路径。</li><li>创建一个名为 <code>backtrack</code> 的递归函数，该函数接受一个参数 <code>start</code> 表示当前遍历的起始位置。</li><li>在 <code>backtrack</code> 函数中，首先将当前的路径 <code>track</code> 加入到结果数组 <code>res</code> 中，表示找到了一个新的子集。</li><li>然后从 <code>start</code> 开始遍历数组 <code>nums</code>，对于每个元素： <ul><li>如果当前元素与前一个元素相同（即出现了重复元素），并且当前元素不是起始位置的元素，则跳过当前元素，以避免重复生成相同的子集。</li><li>否则，将当前元素加入到路径 <code>track</code> 中，递归调用 <code>backtrack</code> 函数，并传入下一个位置 <code>i + 1</code> 作为参数，以继续生成下一个元素的子集。</li><li>在递归调用结束后，需要将当前元素从路径 <code>track</code> 中弹出，以便回溯到上一层继续遍历其他元素。</li></ul></li><li>最后返回结果数组 <code>res</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">subsetsWithDup</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> track <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

	<span class="token comment">// 排序，以便在后续的步骤中去重</span>
	nums<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">backtrack</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">start</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token operator">...</span>track<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> start<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 出现了重复元素，跳过</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">&gt;</span> start <span class="token operator">&amp;&amp;</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> nums<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">continue</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			track<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token function">backtrack</span><span class="token punctuation">(</span>i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			track<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token function">backtrack</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),w=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),I=n("td",{style:{"text-align":"center"}},"78",-1),q=n("td",{style:{"text-align":"left"}},"子集",-1),C={style:{"text-align":"center"}},E={style:{"text-align":"left"}},L=n("code",null,"位运算",-1),N=n("code",null,"数组",-1),V=n("code",null,"回溯",-1),j=n("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/subsets",target:"_blank",rel:"noopener noreferrer"},O={href:"https://leetcode.com/problems/subsets",target:"_blank",rel:"noopener noreferrer"},T=n("td",{style:{"text-align":"center"}},"1982",-1),D=n("td",{style:{"text-align":"left"}},"从子集的和还原数组",-1),G=n("td",{style:{"text-align":"center"}},null,-1),M={style:{"text-align":"left"}},S=n("code",null,"数组",-1),W=n("code",null,"分治",-1),z=n("td",{style:{"text-align":"center"}},"🔴",-1),A={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/find-array-given-subset-sums",target:"_blank",rel:"noopener noreferrer"};function J(K,P){const p=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[m,n("p",null,[s("🟠 "),t(p,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[h]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[_]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[b]),_:1}),s("  🔗 "),n("a",v,[f,t(o)]),s(),n("a",g,[y,t(o)])]),x,u(" prettier-ignore "),n("table",null,[w,n("tbody",null,[n("tr",null,[I,q,n("td",C,[t(e,{to:"/problem/0078.html"},{default:a(()=>[s("[✓]")]),_:1})]),n("td",E,[t(e,{to:"/tag/bit-manipulation.html"},{default:a(()=>[L]),_:1}),s(),t(e,{to:"/tag/array.html"},{default:a(()=>[N]),_:1}),s(),t(e,{to:"/tag/backtracking.html"},{default:a(()=>[V]),_:1})]),j,n("td",B,[n("a",R,[s("🀄️"),t(o)]),s(),n("a",O,[s("🔗"),t(o)])])]),n("tr",null,[T,D,G,n("td",M,[t(e,{to:"/tag/array.html"},{default:a(()=>[S]),_:1}),s(),t(e,{to:"/tag/divide-and-conquer.html"},{default:a(()=>[W]),_:1})]),z,n("td",A,[n("a",F,[s("🀄️"),t(o)]),s(),n("a",H,[s("🔗"),t(o)])])])])])])}const U=l(k,[["render",J],["__file","0090.html.vue"]]);export{U as default};

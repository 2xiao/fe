import{_ as p,r as l,o as i,c as r,a as s,b as n,d as t,w as e,f as d,e as u}from"./app-fEpXkbSw.js";const k={},g=s("h1",{id:"_2300-咒语和药水的成功对数",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2300-咒语和药水的成功对数","aria-hidden":"true"},"#"),n(" 2300. 咒语和药水的成功对数")],-1),h=s("code",null,"数组",-1),m=s("code",null,"双指针",-1),_=s("code",null,"二分查找",-1),f=s("code",null,"排序",-1),b={href:"https://leetcode.cn/problems/successful-pairs-of-spells-and-potions",target:"_blank",rel:"noopener noreferrer"},v=s("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/successful-pairs-of-spells-and-potions",target:"_blank",rel:"noopener noreferrer"},x=s("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given two positive integer arrays <code>spells</code> and <code>potions</code>, of length <code>n</code> and <code>m</code> respectively, where <code>spells[i]</code> represents the strength of the <code>ith</code> spell and <code>potions[j]</code> represents the strength of the <code>jth</code> potion.</p><p>You are also given an integer <code>success</code>. A spell and potion pair is considered <strong>successful</strong> if the <strong>product</strong> of their strengths is <strong>at least</strong><code>success</code>.</p><p>Return <em>an integer array</em><code>pairs</code> <em>of length</em><code>n</code> <em>where</em><code>pairs[i]</code>_is the number of<strong>potions</strong> that will form a successful pair with the _<code>ith</code> <em>spell.</em></p><p><strong>Example 1:</strong></p><blockquote><p>Input: spells = [5,1,3], potions = [1,2,3,4,5], success = 7</p><p>Output: [4,0,3]</p><p>Explanation:</p><ul><li>0th spell: 5 * [1,2,3,4,5] = [5,<strong>10</strong> ,<strong>15</strong> ,<strong>20</strong> ,<strong>25</strong>]. 4 pairs are successful.</li><li>1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.</li><li>2nd spell: 3 * [1,2,3,4,5] = [3,6,<strong>9</strong> ,<strong>12</strong> ,<strong>15</strong>]. 3 pairs are successful.</li></ul><p>Thus, [4,0,3] is returned.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: spells = [3,1,2], potions = [8,5,8], success = 16</p><p>Output: [2,0,2]</p><p>Explanation:</p><ul><li>0th spell: 3 * [8,5,8] = [<strong>24</strong> ,15,<strong>24</strong>]. 2 pairs are successful.</li><li>1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.</li><li>2nd spell: 2 * [8,5,8] = [<strong>16</strong> ,10,<strong>16</strong>]. 2 pairs are successful.</li></ul><p>Thus, [2,0,2] is returned.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == spells.length</code></li><li><code>m == potions.length</code></li><li><code>1 &lt;= n, m &lt;= 10^5</code></li><li><code>1 &lt;= spells[i], potions[i] &lt;= 10^5</code></li><li><code>1 &lt;= success &lt;= 1010</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个正整数数组 <code>spells</code> 和 <code>potions</code> ，长度分别为 <code>n</code> 和 <code>m</code> ，其中 <code>spells[i]</code> 表示第 <code>i</code> 个咒语的能量强度，<code>potions[j]</code> 表示第 <code>j</code> 瓶药水的能量强度。</p><p>同时给你一个整数 <code>success</code> 。一个咒语和药水的能量强度 <strong>相乘</strong> 如果 <strong>大于等于</strong> <code>success</code> ，那么它们视为一对 <strong>成功</strong> 的组合。</p><p>请你返回一个长度为 <code>n</code> 的整数数组 <code>pairs</code>，其中 <code>pairs[i]</code> 是能跟第 <code>i</code> 个咒语成功组合的 <strong>药水</strong> 数目。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> spells = [5,1,3], potions = [1,2,3,4,5], success = 7</p><p><strong>输出：</strong>[4,0,3]</p><p><strong>解释：</strong></p><ul><li>第 0 个咒语：5 * [1,2,3,4,5] = [5,<strong>10</strong> ,<strong>15</strong> ,<strong>20</strong> ,<strong>25</strong>] 。总共 4 个成功组合。</li><li>第 1 个咒语：1 * [1,2,3,4,5] = [1,2,3,4,5] 。总共 0 个成功组合。</li><li>第 2 个咒语：3 * [1,2,3,4,5] = [3,6,<strong>9</strong> ,<strong>12</strong> ,<strong>15</strong>] 。总共 3 个成功组合。</li></ul><p>所以返回 [4,0,3] 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> spells = [3,1,2], potions = [8,5,8], success = 16</p><p><strong>输出：</strong>[2,0,2]</p><p><strong>解释：</strong></p><ul><li>第 0 个咒语：3 * [8,5,8] = [<strong>24</strong> ,15,<strong>24</strong>] 。总共 2 个成功组合。</li><li>第 1 个咒语：1 * [8,5,8] = [8,5,8] 。总共 0 个成功组合。</li><li>第 2 个咒语：2 * [8,5,8] = [<strong>16</strong> ,10,<strong>16</strong>] 。总共 2 个成功组合。</li></ul><p>所以返回 [2,0,2] 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == spells.length</code></li><li><code>m == potions.length</code></li><li><code>1 &lt;= n, m &lt;= 10^5</code></li><li><code>1 &lt;= spells[i], potions[i] &lt;= 10^5</code></li><li><code>1 &lt;= success &lt;= 1010</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于每个咒语 <code>spells[i]</code>，需要找到满足 <code>spells[i] * potions[j] &gt;= success</code> 的所有 <code>potions[j]</code>。</p><p>可以将问题转化为：对于每个 <code>spells[i]</code>，需要找到 <code>potions[j] &gt;= success / spells[i]</code> 的药水数量。</p><p><code>potions</code> 是一个数组，如果将它排序，可以通过二分查找快速找到第一个满足条件的药水索引，进而计算成功的药水数量。</p><ol><li>首先对 <code>potions</code> 数组进行升序排序。</li><li>对于每个咒语 <code>spells[i]</code>：</li></ol><ul><li>利用二分查找计算成功所需的最低药水值 <code>success / spells[i]</code>。</li><li>在 <code>potions</code> 中找到第一个大于等于最低药水值的药水索引。</li><li>成功配对药水数量为从该索引开始到数组末尾的药水数量。</li></ul><ol start="3"><li>对每个咒语重复上述过程，得到每个咒语的成功配对药水数量，返回结果数组。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O((m + n) * log m)</code>，其中 <code>n</code> 是 <code>spells.length, m</code> 是 <code>potions.length</code>： <ul><li>对 <code>potions</code> 排序的时间复杂度是 <code>O(m log m)</code>；</li><li>对每个咒语执行二分查找的时间复杂度是 <code>O(n log m)</code>；</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，排序和二分查找均为原地操作，使用了常数级的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">spells</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">potions</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">success</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">successfulPairs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">spells<span class="token punctuation">,</span> potions<span class="token punctuation">,</span> success</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 预先计算好 success / spells[i]，避免重复计算</span>
	<span class="token keyword">const</span> arr <span class="token operator">=</span> spells<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> success <span class="token operator">/</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> n <span class="token operator">=</span> potions<span class="token punctuation">.</span>length<span class="token punctuation">;</span>

	<span class="token comment">// 对 potions 进行升序排序</span>
	potions<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">-</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>

	<span class="token comment">// 二分查找函数</span>
	<span class="token keyword">const</span> <span class="token function-variable function">getPairs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
			right <span class="token operator">=</span> n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>left <span class="token operator">&lt;=</span> right<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> mid <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>left <span class="token operator">+</span> right<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>potions<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&gt;=</span> arr<span class="token punctuation">[</span>idx<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				right <span class="token operator">=</span> mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				left <span class="token operator">=</span> mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		<span class="token comment">// left 是第一个满足条件的索引</span>
		<span class="token comment">// 返回成功配对数量</span>
		<span class="token keyword">return</span> left <span class="token operator">==</span> n <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> n <span class="token operator">-</span> left<span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token comment">// 遍历 spells，计算每个咒语的成功配对数量</span>
	<span class="token keyword">return</span> spells<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">_<span class="token punctuation">,</span> idx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">getPairs</span><span class="token punctuation">(</span>idx<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),j=s("thead",null,[s("tr",null,[s("th",{style:{"text-align":"center"}},"题号"),s("th",{style:{"text-align":"left"}},"标题"),s("th",{style:{"text-align":"center"}},"题解"),s("th",{style:{"text-align":"left"}},"标签"),s("th",{style:{"text-align":"center"}},"难度"),s("th",{style:{"text-align":"center"}},"力扣")])],-1),q=s("td",{style:{"text-align":"center"}},"826",-1),E=s("td",{style:{"text-align":"left"}},"安排工作以达到最大收益",-1),O=s("td",{style:{"text-align":"center"}},null,-1),C={style:{"text-align":"left"}},L=s("code",null,"贪心",-1),N=s("code",null,"数组",-1),V=s("code",null,"双指针",-1),I=s("code",null,"2+",-1),B=s("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/most-profit-assigning-work",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/most-profit-assigning-work",target:"_blank",rel:"noopener noreferrer"},Y=s("td",{style:{"text-align":"center"}},"2389",-1),A=s("td",{style:{"text-align":"left"}},"和有限的最长子序列",-1),M=s("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},z=s("code",null,"贪心",-1),D=s("code",null,"数组",-1),F=s("code",null,"二分查找",-1),G=s("code",null,"2+",-1),H=s("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},K={href:"https://leetcode.cn/problems/longest-subsequence-with-limited-sum",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/longest-subsequence-with-limited-sum",target:"_blank",rel:"noopener noreferrer"},U=s("td",{style:{"text-align":"center"}},"2410",-1),W=s("td",{style:{"text-align":"left"}},"运动员和训练师的最大匹配数",-1),X={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=s("code",null,"贪心",-1),ss=s("code",null,"数组",-1),ns=s("code",null,"双指针",-1),ts=s("code",null,"1+",-1),es=s("td",{style:{"text-align":"center"}},"🟠",-1),as={style:{"text-align":"center"}},os={href:"https://leetcode.cn/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"},ls={href:"https://leetcode.com/problems/maximum-matching-of-players-with-trainers",target:"_blank",rel:"noopener noreferrer"};function cs(ps,is){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),r("div",null,[g,s("p",null,[n("🟠 "),t(c,{color:"#ffb800"},{default:e(()=>[n("Medium")]),_:1}),n("  🔖  "),t(a,{to:"/tag/array.html"},{default:e(()=>[h]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[m]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[_]),_:1}),n(),t(a,{to:"/tag/sorting.html"},{default:e(()=>[f]),_:1}),n("  🔗 "),s("a",b,[v,t(o)]),n(),s("a",y,[x,t(o)])]),w,d(" prettier-ignore "),s("table",null,[j,s("tbody",null,[s("tr",null,[q,E,O,s("td",C,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[L]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:e(()=>[N]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[V]),_:1}),n(),I]),B,s("td",P,[s("a",R,[n("🀄️"),t(o)]),n(),s("a",T,[n("🔗"),t(o)])])]),s("tr",null,[Y,A,M,s("td",S,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[z]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:e(()=>[D]),_:1}),n(),t(a,{to:"/tag/binary-search.html"},{default:e(()=>[F]),_:1}),n(),G]),H,s("td",J,[s("a",K,[n("🀄️"),t(o)]),n(),s("a",Q,[n("🔗"),t(o)])])]),s("tr",null,[U,W,s("td",X,[t(a,{to:"/problem/2410.html"},{default:e(()=>[n("[✓]")]),_:1})]),s("td",Z,[t(a,{to:"/tag/greedy.html"},{default:e(()=>[$]),_:1}),n(),t(a,{to:"/tag/array.html"},{default:e(()=>[ss]),_:1}),n(),t(a,{to:"/tag/two-pointers.html"},{default:e(()=>[ns]),_:1}),n(),ts]),es,s("td",as,[s("a",os,[n("🀄️"),t(o)]),n(),s("a",ls,[n("🔗"),t(o)])])])])])])}const ds=p(k,[["render",cs],["__file","2300.html.vue"]]);export{ds as default};

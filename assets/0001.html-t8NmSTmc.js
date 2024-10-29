import{_ as c,r as d,o as r,c as i,a as t,b as o,d as e,w as n,f as _,e as h}from"./app-mXo2sCT-.js";const u={},p={id:"_1-两数之和",tabindex:"-1"},f=t("a",{class:"header-anchor",href:"#_1-两数之和","aria-hidden":"true"},"#",-1),g={href:"https://2xiao.github.io/leetcode-js/problem/0001.html",target:"_blank",rel:"noopener noreferrer"},m=t("code",null,"数组",-1),y=t("code",null,"哈希表",-1),b={href:"https://leetcode.cn/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),k={href:"https://leetcode.com/problems/two-sum",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),v=h(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to<code>target</code></em>.</p><p>You may assume that each input would have <strong><em>exactly</em> one solution</strong>, and you may not use the <em>same</em> element twice.</p><p>You can return the answer in any order.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [2,7,11,15], target = 9</p><p>Output: [0,1]</p><p>Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [3,2,4], target = 6</p><p>Output: [1,2]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [3,3], target = 6</p><p>Output: [0,1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>2 &lt;= nums.length &lt;= 10^4</code></li><li><code>-10^9 &lt;= nums[i] &lt;= 10^9</code></li><li><code>-10^9 &lt;= target &lt;= 10^9</code></li><li><strong>Only one valid answer exists.</strong></li></ul><p><strong>Follow-up:</strong> Can you come up with an algorithm that is less than <code>O(n2)</code> time complexity?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在数组中找到 2 个数之和等于给定值的数字，结果返回 2 个数字在数组中的下标。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>使用哈希表，顺序扫描数组，对每一个元素，在 <code>object</code> 中找能组合给定值的另一半数字，如果找到了，直接返回 2 个数字的下标即可。如果找不到，就把这个数字存入 <code>object</code> 中，等待扫到“另一半”数字的时候，再取出来返回结果。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，其中 <code>k</code> 是 <code>object</code> 中存放的数字数量，最坏情况下，需要扫描到最后一个数字才能找到结果，此时 <code>k</code> 会趋近 <code>n</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">twoSum</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> numsObj <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span>i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">const</span> another <span class="token operator">=</span> target <span class="token operator">-</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>another <span class="token keyword">in</span> numsObj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token punctuation">[</span>numsObj<span class="token punctuation">[</span>another<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		numsObj<span class="token punctuation">[</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> i<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,22),E=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),j=t("td",{style:{"text-align":"center"}},"15",-1),I={style:{"text-align":"left"}},O={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},q={style:{"text-align":"center"}},M={style:{"text-align":"left"}},C=t("code",null,"数组",-1),V=t("code",null,"双指针",-1),K=t("code",null,"排序",-1),L={style:{"text-align":"left"}},N=t("td",{style:{"text-align":"center"}},"18",-1),B={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},S={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},F=t("code",null,"数组",-1),G=t("code",null,"双指针",-1),H=t("code",null,"排序",-1),T={style:{"text-align":"left"}},z=t("td",{style:{"text-align":"center"}},"167",-1),A={style:{"text-align":"left"}},D={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},J={style:{"text-align":"center"}},P={style:{"text-align":"left"}},Q=t("code",null,"数组",-1),U=t("code",null,"双指针",-1),W=t("code",null,"二分查找",-1),X={style:{"text-align":"left"}},Z=t("td",{style:{"text-align":"center"}},"170",-1),$={style:{"text-align":"left"}},tt={href:"https://leetcode.com/problems/two-sum-iii-data-structure-design",target:"_blank",rel:"noopener noreferrer"},et=t("td",{style:{"text-align":"center"}},null,-1),ot={style:{"text-align":"left"}},nt=t("code",null,"设计",-1),st=t("code",null,"数组",-1),lt=t("code",null,"哈希表",-1),at=t("code",null,"2+",-1),dt={style:{"text-align":"left"}},ct=t("td",{style:{"text-align":"center"}},"560",-1),rt={style:{"text-align":"left"}},it={href:"https://leetcode.com/problems/subarray-sum-equals-k",target:"_blank",rel:"noopener noreferrer"},_t={style:{"text-align":"center"}},ht={style:{"text-align":"left"}},ut=t("code",null,"数组",-1),pt=t("code",null,"哈希表",-1),ft=t("code",null,"前缀和",-1),gt={style:{"text-align":"left"}},mt=t("td",{style:{"text-align":"center"}},"653",-1),yt={style:{"text-align":"left"}},bt={href:"https://leetcode.com/problems/two-sum-iv-input-is-a-bst",target:"_blank",rel:"noopener noreferrer"},xt=t("td",{style:{"text-align":"center"}},null,-1),kt={style:{"text-align":"left"}},wt=t("code",null,"树",-1),vt=t("code",null,"深度优先搜索",-1),Et=t("code",null,"广度优先搜索",-1),jt=t("code",null,"4+",-1),It={style:{"text-align":"left"}},Ot=t("td",{style:{"text-align":"center"}},"1099",-1),qt={style:{"text-align":"left"}},Mt={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},null,-1),Vt={style:{"text-align":"left"}},Kt=t("code",null,"数组",-1),Lt=t("code",null,"双指针",-1),Nt=t("code",null,"二分查找",-1),Bt=t("code",null,"1+",-1),Rt={style:{"text-align":"left"}},St=t("td",{style:{"text-align":"center"}},"1679",-1),Yt={style:{"text-align":"left"}},Ft={href:"https://leetcode.com/problems/max-number-of-k-sum-pairs",target:"_blank",rel:"noopener noreferrer"},Gt={style:{"text-align":"center"}},Ht={style:{"text-align":"left"}},Tt=t("code",null,"数组",-1),zt=t("code",null,"哈希表",-1),At=t("code",null,"双指针",-1),Dt=t("code",null,"1+",-1),Jt={style:{"text-align":"left"}},Pt=t("td",{style:{"text-align":"center"}},"1711",-1),Qt={style:{"text-align":"left"}},Ut={href:"https://leetcode.com/problems/count-good-meals",target:"_blank",rel:"noopener noreferrer"},Wt=t("td",{style:{"text-align":"center"}},null,-1),Xt={style:{"text-align":"left"}},Zt=t("code",null,"数组",-1),$t=t("code",null,"哈希表",-1),te={style:{"text-align":"left"}},ee=t("td",{style:{"text-align":"center"}},"2006",-1),oe={style:{"text-align":"left"}},ne={href:"https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k",target:"_blank",rel:"noopener noreferrer"},se=t("td",{style:{"text-align":"center"}},null,-1),le={style:{"text-align":"left"}},ae=t("code",null,"数组",-1),de=t("code",null,"哈希表",-1),ce=t("code",null,"计数",-1),re={style:{"text-align":"left"}},ie=t("td",{style:{"text-align":"center"}},"2023",-1),_e={style:{"text-align":"left"}},he={href:"https://leetcode.com/problems/number-of-pairs-of-strings-with-concatenation-equal-to-target",target:"_blank",rel:"noopener noreferrer"},ue=t("td",{style:{"text-align":"center"}},null,-1),pe={style:{"text-align":"left"}},fe=t("code",null,"数组",-1),ge=t("code",null,"哈希表",-1),me=t("code",null,"字符串",-1),ye=t("code",null,"1+",-1),be={style:{"text-align":"left"}},xe=t("td",{style:{"text-align":"center"}},"2200",-1),ke={style:{"text-align":"left"}},we={href:"https://leetcode.com/problems/find-all-k-distant-indices-in-an-array",target:"_blank",rel:"noopener noreferrer"},ve=t("td",{style:{"text-align":"center"}},null,-1),Ee={style:{"text-align":"left"}},je=t("code",null,"数组",-1),Ie=t("code",null,"双指针",-1),Oe={style:{"text-align":"left"}},qe=t("td",{style:{"text-align":"center"}},"2351",-1),Me={style:{"text-align":"left"}},Ce={href:"https://leetcode.com/problems/first-letter-to-appear-twice",target:"_blank",rel:"noopener noreferrer"},Ve=t("td",{style:{"text-align":"center"}},null,-1),Ke={style:{"text-align":"left"}},Le=t("code",null,"位运算",-1),Ne=t("code",null,"哈希表",-1),Be=t("code",null,"字符串",-1),Re=t("code",null,"1+",-1),Se={style:{"text-align":"left"}},Ye=t("td",{style:{"text-align":"center"}},"2354",-1),Fe={style:{"text-align":"left"}},Ge={href:"https://leetcode.com/problems/number-of-excellent-pairs",target:"_blank",rel:"noopener noreferrer"},He=t("td",{style:{"text-align":"center"}},null,-1),Te={style:{"text-align":"left"}},ze=t("code",null,"位运算",-1),Ae=t("code",null,"数组",-1),De=t("code",null,"哈希表",-1),Je=t("code",null,"1+",-1),Pe={style:{"text-align":"left"}},Qe=t("td",{style:{"text-align":"center"}},"2367",-1),Ue={style:{"text-align":"left"}},We={href:"https://leetcode.com/problems/number-of-arithmetic-triplets",target:"_blank",rel:"noopener noreferrer"},Xe=t("td",{style:{"text-align":"center"}},null,-1),Ze={style:{"text-align":"left"}},$e=t("code",null,"数组",-1),to=t("code",null,"哈希表",-1),eo=t("code",null,"双指针",-1),oo=t("code",null,"1+",-1),no={style:{"text-align":"left"}},so=t("td",{style:{"text-align":"center"}},"2374",-1),lo={style:{"text-align":"left"}},ao={href:"https://leetcode.com/problems/node-with-highest-edge-score",target:"_blank",rel:"noopener noreferrer"},co=t("td",{style:{"text-align":"center"}},null,-1),ro={style:{"text-align":"left"}},io=t("code",null,"图",-1),_o=t("code",null,"哈希表",-1),ho={style:{"text-align":"left"}},uo=t("td",{style:{"text-align":"center"}},"2395",-1),po={style:{"text-align":"left"}},fo={href:"https://leetcode.com/problems/find-subarrays-with-equal-sum",target:"_blank",rel:"noopener noreferrer"},go=t("td",{style:{"text-align":"center"}},null,-1),mo={style:{"text-align":"left"}},yo=t("code",null,"数组",-1),bo=t("code",null,"哈希表",-1),xo={style:{"text-align":"left"}},ko=t("td",{style:{"text-align":"center"}},"2399",-1),wo={style:{"text-align":"left"}},vo={href:"https://leetcode.com/problems/check-distances-between-same-letters",target:"_blank",rel:"noopener noreferrer"},Eo=t("td",{style:{"text-align":"center"}},null,-1),jo={style:{"text-align":"left"}},Io=t("code",null,"数组",-1),Oo=t("code",null,"哈希表",-1),qo=t("code",null,"字符串",-1),Mo={style:{"text-align":"left"}},Co=t("td",{style:{"text-align":"center"}},"2441",-1),Vo={style:{"text-align":"left"}},Ko={href:"https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative",target:"_blank",rel:"noopener noreferrer"},Lo=t("td",{style:{"text-align":"center"}},null,-1),No={style:{"text-align":"left"}},Bo=t("code",null,"数组",-1),Ro=t("code",null,"哈希表",-1),So=t("code",null,"双指针",-1),Yo=t("code",null,"1+",-1),Fo={style:{"text-align":"left"}},Go=t("td",{style:{"text-align":"center"}},"2465",-1),Ho={style:{"text-align":"left"}},To={href:"https://leetcode.com/problems/number-of-distinct-averages",target:"_blank",rel:"noopener noreferrer"},zo=t("td",{style:{"text-align":"center"}},null,-1),Ao={style:{"text-align":"left"}},Do=t("code",null,"数组",-1),Jo=t("code",null,"哈希表",-1),Po=t("code",null,"双指针",-1),Qo=t("code",null,"1+",-1),Uo={style:{"text-align":"left"}},Wo=t("td",{style:{"text-align":"center"}},"2824",-1),Xo={style:{"text-align":"left"}},Zo={href:"https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target",target:"_blank",rel:"noopener noreferrer"},$o=t("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=t("code",null,"数组",-1),on=t("code",null,"双指针",-1),nn=t("code",null,"二分查找",-1),sn=t("code",null,"1+",-1),ln={style:{"text-align":"left"}};function an(dn,cn){const l=d("ExternalLinkIcon"),a=d("font"),s=d("RouterLink");return r(),i("div",null,[t("h1",p,[f,o(),t("a",g,[o("1. 两数之和"),e(l)])]),t("p",null,[o("🟢 "),e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1}),o("  🔖  "),e(s,{to:"/tag/array.html"},{default:n(()=>[m]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[y]),_:1}),o("  🔗 "),t("a",b,[x,e(l)]),o(),t("a",k,[w,e(l)])]),v,_(" prettier-ignore "),t("table",null,[E,t("tbody",null,[t("tr",null,[j,t("td",I,[t("a",O,[o("三数之和"),e(l)])]),t("td",q,[e(s,{to:"/problem/0015.html"},{default:n(()=>[o("[✓]")]),_:1})]),t("td",M,[e(s,{to:"/tag/array.html"},{default:n(()=>[C]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[V]),_:1}),o(),e(s,{to:"/tag/sorting.html"},{default:n(()=>[K]),_:1})]),t("td",L,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[N,t("td",B,[t("a",R,[o("四数之和"),e(l)])]),t("td",S,[e(s,{to:"/problem/0018.html"},{default:n(()=>[o("[✓]")]),_:1})]),t("td",Y,[e(s,{to:"/tag/array.html"},{default:n(()=>[F]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[G]),_:1}),o(),e(s,{to:"/tag/sorting.html"},{default:n(()=>[H]),_:1})]),t("td",T,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[z,t("td",A,[t("a",D,[o("两数之和 II - 输入有序数组"),e(l)])]),t("td",J,[e(s,{to:"/problem/0167.html"},{default:n(()=>[o("[✓]")]),_:1})]),t("td",P,[e(s,{to:"/tag/array.html"},{default:n(()=>[Q]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[U]),_:1}),o(),e(s,{to:"/tag/binary-search.html"},{default:n(()=>[W]),_:1})]),t("td",X,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[Z,t("td",$,[t("a",tt,[o("两数之和 III - 数据结构设计 🔒"),e(l)])]),et,t("td",ot,[e(s,{to:"/tag/design.html"},{default:n(()=>[nt]),_:1}),o(),e(s,{to:"/tag/array.html"},{default:n(()=>[st]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[lt]),_:1}),o(),at]),t("td",dt,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[ct,t("td",rt,[t("a",it,[o("和为 K 的子数组"),e(l)])]),t("td",_t,[e(s,{to:"/problem/0560.html"},{default:n(()=>[o("[✓]")]),_:1})]),t("td",ht,[e(s,{to:"/tag/array.html"},{default:n(()=>[ut]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[pt]),_:1}),o(),e(s,{to:"/tag/prefix-sum.html"},{default:n(()=>[ft]),_:1})]),t("td",gt,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[mt,t("td",yt,[t("a",bt,[o("两数之和 IV - 输入二叉搜索树"),e(l)])]),xt,t("td",kt,[e(s,{to:"/tag/tree.html"},{default:n(()=>[wt]),_:1}),o(),e(s,{to:"/tag/depth-first-search.html"},{default:n(()=>[vt]),_:1}),o(),e(s,{to:"/tag/breadth-first-search.html"},{default:n(()=>[Et]),_:1}),o(),jt]),t("td",It,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ot,t("td",qt,[t("a",Mt,[o("小于 K 的两数之和 🔒"),e(l)])]),Ct,t("td",Vt,[e(s,{to:"/tag/array.html"},{default:n(()=>[Kt]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[Lt]),_:1}),o(),e(s,{to:"/tag/binary-search.html"},{default:n(()=>[Nt]),_:1}),o(),Bt]),t("td",Rt,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[St,t("td",Yt,[t("a",Ft,[o("K 和数对的最大数目"),e(l)])]),t("td",Gt,[e(s,{to:"/problem/1679.html"},{default:n(()=>[o("[✓]")]),_:1})]),t("td",Ht,[e(s,{to:"/tag/array.html"},{default:n(()=>[Tt]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[zt]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[At]),_:1}),o(),Dt]),t("td",Jt,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[Pt,t("td",Qt,[t("a",Ut,[o("大餐计数"),e(l)])]),Wt,t("td",Xt,[e(s,{to:"/tag/array.html"},{default:n(()=>[Zt]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[$t]),_:1})]),t("td",te,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[ee,t("td",oe,[t("a",ne,[o("差的绝对值为 K 的数对数目"),e(l)])]),se,t("td",le,[e(s,{to:"/tag/array.html"},{default:n(()=>[ae]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[de]),_:1}),o(),e(s,{to:"/tag/counting.html"},{default:n(()=>[ce]),_:1})]),t("td",re,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[ie,t("td",_e,[t("a",he,[o("连接后等于目标字符串的字符串对"),e(l)])]),ue,t("td",pe,[e(s,{to:"/tag/array.html"},{default:n(()=>[fe]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[ge]),_:1}),o(),e(s,{to:"/tag/string.html"},{default:n(()=>[me]),_:1}),o(),ye]),t("td",be,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[xe,t("td",ke,[t("a",we,[o("找出数组中的所有 K 近邻下标"),e(l)])]),ve,t("td",Ee,[e(s,{to:"/tag/array.html"},{default:n(()=>[je]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[Ie]),_:1})]),t("td",Oe,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[qe,t("td",Me,[t("a",Ce,[o("第一个出现两次的字母"),e(l)])]),Ve,t("td",Ke,[e(s,{to:"/tag/bit-manipulation.html"},{default:n(()=>[Le]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[Ne]),_:1}),o(),e(s,{to:"/tag/string.html"},{default:n(()=>[Be]),_:1}),o(),Re]),t("td",Se,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Ye,t("td",Fe,[t("a",Ge,[o("优质数对的数目"),e(l)])]),He,t("td",Te,[e(s,{to:"/tag/bit-manipulation.html"},{default:n(()=>[ze]),_:1}),o(),e(s,{to:"/tag/array.html"},{default:n(()=>[Ae]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[De]),_:1}),o(),Je]),t("td",Pe,[e(a,{color:"#ff334b"},{default:n(()=>[o("Hard")]),_:1})])]),t("tr",null,[Qe,t("td",Ue,[t("a",We,[o("等差三元组的数目"),e(l)])]),Xe,t("td",Ze,[e(s,{to:"/tag/array.html"},{default:n(()=>[$e]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[to]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[eo]),_:1}),o(),oo]),t("td",no,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[so,t("td",lo,[t("a",ao,[o("边积分最高的节点"),e(l)])]),co,t("td",ro,[e(s,{to:"/tag/graph.html"},{default:n(()=>[io]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[_o]),_:1})]),t("td",ho,[e(a,{color:"#ffb800"},{default:n(()=>[o("Medium")]),_:1})])]),t("tr",null,[uo,t("td",po,[t("a",fo,[o("和相等的子数组"),e(l)])]),go,t("td",mo,[e(s,{to:"/tag/array.html"},{default:n(()=>[yo]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[bo]),_:1})]),t("td",xo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[ko,t("td",wo,[t("a",vo,[o("检查相同字母间的距离"),e(l)])]),Eo,t("td",jo,[e(s,{to:"/tag/array.html"},{default:n(()=>[Io]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[Oo]),_:1}),o(),e(s,{to:"/tag/string.html"},{default:n(()=>[qo]),_:1})]),t("td",Mo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Co,t("td",Vo,[t("a",Ko,[o("与对应负数同时存在的最大正整数"),e(l)])]),Lo,t("td",No,[e(s,{to:"/tag/array.html"},{default:n(()=>[Bo]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[Ro]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[So]),_:1}),o(),Yo]),t("td",Fo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Go,t("td",Ho,[t("a",To,[o("不同的平均值数目"),e(l)])]),zo,t("td",Ao,[e(s,{to:"/tag/array.html"},{default:n(()=>[Do]),_:1}),o(),e(s,{to:"/tag/hash-table.html"},{default:n(()=>[Jo]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[Po]),_:1}),o(),Qo]),t("td",Uo,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])]),t("tr",null,[Wo,t("td",Xo,[t("a",Zo,[o("统计和小于目标的下标对数目"),e(l)])]),$o,t("td",tn,[e(s,{to:"/tag/array.html"},{default:n(()=>[en]),_:1}),o(),e(s,{to:"/tag/two-pointers.html"},{default:n(()=>[on]),_:1}),o(),e(s,{to:"/tag/binary-search.html"},{default:n(()=>[nn]),_:1}),o(),sn]),t("td",ln,[e(a,{color:"#15bd66"},{default:n(()=>[o("Easy")]),_:1})])])])])])}const _n=c(u,[["render",an],["__file","0001.html.vue"]]);export{_n as default};

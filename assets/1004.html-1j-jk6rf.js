import{_ as r,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-U2ekqv2z.js";const _={},h=t("h1",{id:"_1004-最大连续1的个数-iii",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1004-最大连续1的个数-iii","aria-hidden":"true"},"#"),e(" 1004. 最大连续1的个数 III")],-1),m=t("code",null,"数组",-1),g=t("code",null,"二分查找",-1),k=t("code",null,"前缀和",-1),f=t("code",null,"滑动窗口",-1),b={href:"https://leetcode.cn/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/max-consecutive-ones-iii",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary array <code>nums</code> and an integer <code>k</code>, return <em>the maximum number of consecutive</em><code>1</code> <em>&#39; s in the array if you can flip at most</em> <code>k</code> <code>0</code>&#39;s.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2</p><p>Output: 6</p><p>Explanation: [1,1,1,0,0,<em><strong>1</strong> ,1,1,1,1,<strong>1</strong></em>]</p><p>Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3</p><p>Output: 10</p><p>Explanation: [0,0,<em>1,1,<strong>1</strong> ,<strong>1</strong> ,1,1,1,<strong>1</strong> ,1,1</em>,0,0,0,1,1,1,1]</p><p>Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> is either <code>0</code> or <code>1</code>.</li><li><code>0 &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个二进制数组 <code>nums</code> 和一个整数 <code>k</code>，如果可以翻转最多 <code>k</code> 个 <code>0</code> ，则返回 <em>数组中连续<code>1</code> 的最大个数</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,1,1,0,0,0,1,1,1,1,0], K = 2</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong>[1,1,1,0,0,<strong>1</strong> ,1,1,1,1,<strong>1</strong>]</p><p>粗体数字从 0 翻转到 1，最长的子数组长度为 6。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], K = 3</p><p><strong>输出：</strong> 10</p><p><strong>解释：</strong>[0,0,1,1,<strong>1</strong> ,<strong>1</strong> ,1,1,1,<strong>1</strong> ,1,1,0,0,0,1,1,1,1]</p><p>粗体数字从 0 翻转到 1，最长的子数组长度为 10。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>nums[i]</code> 不是 <code>0</code> 就是 <code>1</code></li><li><code>0 &lt;= k &lt;= nums.length</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用 <strong>滑动窗口</strong> 来解答这道题：</p><ul><li>使用两个指针 <code>left</code> 和 <code>right</code> 来维护一个窗口，窗口内包含最多 <code>k</code> 个 <code>0</code>。</li><li><code>right</code> 指针向右移动，扩展窗口，在每次移动 <code>right</code> 时，检查当前窗口内的元素。如果 <code>nums[right]</code> 是 <code>0</code>，增加当前窗口内的 <code>0</code> 的计数。</li><li>当窗口内的 <code>0</code> 的数量超过 <code>k</code> 时，移动 <code>left</code> 指针以缩小窗口，直到 <code>0</code> 的数量不再超过 <code>k</code>。</li><li>在每次迭代中计算并更新当前的最大连续 <code>1</code> 的长度。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，<code>right</code> 指针遍历数组一次，<code>left</code> 指针最多也会遍历一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常量空间来存储指针和计数。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">longestOnes</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> zeroCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> right <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> right<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 当遇到 0 时，增加计数</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>right<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			zeroCount<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 当窗口内的 0 的数量超过 k 时，移动 left 指针</span>
		<span class="token keyword">while</span> <span class="token punctuation">(</span>zeroCount <span class="token operator">&gt;</span> k<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				zeroCount<span class="token operator">--</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
			left<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		<span class="token comment">// 更新最大长度</span>
		maxLength <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>maxLength<span class="token punctuation">,</span> right <span class="token operator">-</span> left <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> maxLength<span class="token punctuation">;</span> <span class="token comment">// 返回最大连续 1 的长度</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),C=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),I=t("td",{style:{"text-align":"center"}},"340",-1),L=t("td",{style:{"text-align":"left"}},"至多包含 K 个不同字符的最长子串 🔒",-1),q=t("td",{style:{"text-align":"center"}},null,-1),E={style:{"text-align":"left"}},z=t("code",null,"哈希表",-1),B=t("code",null,"字符串",-1),K=t("code",null,"滑动窗口",-1),N=t("td",{style:{"text-align":"center"}},"🟠",-1),O={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/longest-substring-with-at-most-k-distinct-characters",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters",target:"_blank",rel:"noopener noreferrer"},T=t("td",{style:{"text-align":"center"}},"424",-1),M=t("td",{style:{"text-align":"left"}},"替换后的最长重复字符",-1),R=t("td",{style:{"text-align":"center"}},null,-1),G={style:{"text-align":"left"}},S=t("code",null,"哈希表",-1),A=t("code",null,"字符串",-1),D=t("code",null,"滑动窗口",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),H={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/longest-repeating-character-replacement",target:"_blank",rel:"noopener noreferrer"},P={href:"https://leetcode.com/problems/longest-repeating-character-replacement",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"485",-1),U=t("td",{style:{"text-align":"left"}},"最大连续 1 的个数",-1),W={style:{"text-align":"center"}},X={style:{"text-align":"left"}},Y=t("code",null,"数组",-1),Z=t("td",{style:{"text-align":"center"}},"🟢",-1),$={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},et={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},nt=t("td",{style:{"text-align":"center"}},"487",-1),st=t("td",{style:{"text-align":"left"}},"最大连续1的个数 II 🔒",-1),ot=t("td",{style:{"text-align":"center"}},null,-1),at={style:{"text-align":"left"}},lt=t("code",null,"数组",-1),ct=t("code",null,"动态规划",-1),rt=t("code",null,"滑动窗口",-1),it=t("td",{style:{"text-align":"center"}},"🟠",-1),dt={style:{"text-align":"center"}},pt={href:"https://leetcode.cn/problems/max-consecutive-ones-ii",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/max-consecutive-ones-ii",target:"_blank",rel:"noopener noreferrer"},_t=t("td",{style:{"text-align":"center"}},"1493",-1),ht=t("td",{style:{"text-align":"left"}},"删掉一个元素以后全为 1 的最长子数组",-1),mt={style:{"text-align":"center"}},gt={style:{"text-align":"left"}},kt=t("code",null,"数组",-1),ft=t("code",null,"动态规划",-1),bt=t("code",null,"滑动窗口",-1),xt=t("td",{style:{"text-align":"center"}},"🟠",-1),yt={style:{"text-align":"center"}},vt={href:"https://leetcode.cn/problems/longest-subarray-of-1s-after-deleting-one-element",target:"_blank",rel:"noopener noreferrer"},wt={href:"https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element",target:"_blank",rel:"noopener noreferrer"},Ct=t("td",{style:{"text-align":"center"}},"2024",-1),It=t("td",{style:{"text-align":"left"}},"考试的最大困扰度",-1),Lt=t("td",{style:{"text-align":"center"}},null,-1),qt={style:{"text-align":"left"}},Et=t("code",null,"字符串",-1),zt=t("code",null,"二分查找",-1),Bt=t("code",null,"前缀和",-1),Kt=t("code",null,"1+",-1),Nt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ot={style:{"text-align":"center"}},Vt={href:"https://leetcode.cn/problems/maximize-the-confusion-of-an-exam",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/maximize-the-confusion-of-an-exam",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"2379",-1),Mt=t("td",{style:{"text-align":"left"}},"得到 K 个黑块的最少涂色次数",-1),Rt=t("td",{style:{"text-align":"center"}},null,-1),Gt={style:{"text-align":"left"}},St=t("code",null,"字符串",-1),At=t("code",null,"滑动窗口",-1),Dt=t("td",{style:{"text-align":"center"}},"🟢",-1),Ft={style:{"text-align":"center"}},Ht={href:"https://leetcode.cn/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},Jt={href:"https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks",target:"_blank",rel:"noopener noreferrer"},Pt=t("td",{style:{"text-align":"center"}},"2401",-1),Qt=t("td",{style:{"text-align":"left"}},"最长优雅子数组",-1),Ut=t("td",{style:{"text-align":"center"}},null,-1),Wt={style:{"text-align":"left"}},Xt=t("code",null,"位运算",-1),Yt=t("code",null,"数组",-1),Zt=t("code",null,"滑动窗口",-1),$t=t("td",{style:{"text-align":"center"}},"🟠",-1),te={style:{"text-align":"center"}},ee={href:"https://leetcode.cn/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},ne={href:"https://leetcode.com/problems/longest-nice-subarray",target:"_blank",rel:"noopener noreferrer"},se=t("td",{style:{"text-align":"center"}},"2461",-1),oe=t("td",{style:{"text-align":"left"}},"长度为 K 子数组中的最大和",-1),ae={style:{"text-align":"center"}},le={style:{"text-align":"left"}},ce=t("code",null,"数组",-1),re=t("code",null,"哈希表",-1),ie=t("code",null,"滑动窗口",-1),de=t("td",{style:{"text-align":"center"}},"🟠",-1),pe={style:{"text-align":"center"}},ue={href:"https://leetcode.cn/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"},_e={href:"https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k",target:"_blank",rel:"noopener noreferrer"},he=t("td",{style:{"text-align":"center"}},"2511",-1),me=t("td",{style:{"text-align":"left"}},"最多可以摧毁的敌人城堡数目",-1),ge=t("td",{style:{"text-align":"center"}},null,-1),ke={style:{"text-align":"left"}},fe=t("code",null,"数组",-1),be=t("code",null,"双指针",-1),xe=t("td",{style:{"text-align":"center"}},"🟢",-1),ye={style:{"text-align":"center"}},ve={href:"https://leetcode.cn/problems/maximum-enemy-forts-that-can-be-captured",target:"_blank",rel:"noopener noreferrer"},we={href:"https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured",target:"_blank",rel:"noopener noreferrer"};function Ce(Ie,Le){const c=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[h,t("p",null,[e("🟠 "),n(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/array.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[k]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[f]),_:1}),e("  🔗 "),t("a",b,[x,n(a)]),e(),t("a",y,[v,n(a)])]),w,p(" prettier-ignore "),t("table",null,[C,t("tbody",null,[t("tr",null,[I,L,q,t("td",E,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[z]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[B]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[K]),_:1})]),N,t("td",O,[t("a",V,[e("🀄️"),n(a)]),e(),t("a",j,[e("🔗"),n(a)])])]),t("tr",null,[T,M,R,t("td",G,[n(o,{to:"/tag/hash-table.html"},{default:s(()=>[S]),_:1}),e(),n(o,{to:"/tag/string.html"},{default:s(()=>[A]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[D]),_:1})]),F,t("td",H,[t("a",J,[e("🀄️"),n(a)]),e(),t("a",P,[e("🔗"),n(a)])])]),t("tr",null,[Q,U,t("td",W,[n(o,{to:"/problem/0485.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",X,[n(o,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1})]),Z,t("td",$,[t("a",tt,[e("🀄️"),n(a)]),e(),t("a",et,[e("🔗"),n(a)])])]),t("tr",null,[nt,st,ot,t("td",at,[n(o,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ct]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[rt]),_:1})]),it,t("td",dt,[t("a",pt,[e("🀄️"),n(a)]),e(),t("a",ut,[e("🔗"),n(a)])])]),t("tr",null,[_t,ht,t("td",mt,[n(o,{to:"/problem/1493.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",gt,[n(o,{to:"/tag/array.html"},{default:s(()=>[kt]),_:1}),e(),n(o,{to:"/tag/dynamic-programming.html"},{default:s(()=>[ft]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[bt]),_:1})]),xt,t("td",yt,[t("a",vt,[e("🀄️"),n(a)]),e(),t("a",wt,[e("🔗"),n(a)])])]),t("tr",null,[Ct,It,Lt,t("td",qt,[n(o,{to:"/tag/string.html"},{default:s(()=>[Et]),_:1}),e(),n(o,{to:"/tag/binary-search.html"},{default:s(()=>[zt]),_:1}),e(),n(o,{to:"/tag/prefix-sum.html"},{default:s(()=>[Bt]),_:1}),e(),Kt]),Nt,t("td",Ot,[t("a",Vt,[e("🀄️"),n(a)]),e(),t("a",jt,[e("🔗"),n(a)])])]),t("tr",null,[Tt,Mt,Rt,t("td",Gt,[n(o,{to:"/tag/string.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[At]),_:1})]),Dt,t("td",Ft,[t("a",Ht,[e("🀄️"),n(a)]),e(),t("a",Jt,[e("🔗"),n(a)])])]),t("tr",null,[Pt,Qt,Ut,t("td",Wt,[n(o,{to:"/tag/bit-manipulation.html"},{default:s(()=>[Xt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[Yt]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[Zt]),_:1})]),$t,t("td",te,[t("a",ee,[e("🀄️"),n(a)]),e(),t("a",ne,[e("🔗"),n(a)])])]),t("tr",null,[se,oe,t("td",ae,[n(o,{to:"/problem/2461.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",le,[n(o,{to:"/tag/array.html"},{default:s(()=>[ce]),_:1}),e(),n(o,{to:"/tag/hash-table.html"},{default:s(()=>[re]),_:1}),e(),n(o,{to:"/tag/sliding-window.html"},{default:s(()=>[ie]),_:1})]),de,t("td",pe,[t("a",ue,[e("🀄️"),n(a)]),e(),t("a",_e,[e("🔗"),n(a)])])]),t("tr",null,[he,me,ge,t("td",ke,[n(o,{to:"/tag/array.html"},{default:s(()=>[fe]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[be]),_:1})]),xe,t("td",ye,[t("a",ve,[e("🀄️"),n(a)]),e(),t("a",we,[e("🔗"),n(a)])])])])])])}const Ee=r(_,[["render",Ce],["__file","1004.html.vue"]]);export{Ee as default};

import{_ as p,r as l,o as r,c as d,a as t,b as e,d as n,w as o,f as i,e as u}from"./app-WL8GPOUO.js";const h={},m=t("h1",{id:"_2335-装满杯子需要的最短总时长",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2335-装满杯子需要的最短总时长","aria-hidden":"true"},"#"),e(" 2335. 装满杯子需要的最短总时长")],-1),_=t("code",null,"贪心",-1),g=t("code",null,"数组",-1),k=t("code",null,"排序",-1),f=t("code",null,"堆（优先队列）",-1),b={href:"https://leetcode.cn/problems/minimum-amount-of-time-to-fill-cups",target:"_blank",rel:"noopener noreferrer"},y=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/minimum-amount-of-time-to-fill-cups",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You have a water dispenser that can dispense cold, warm, and hot water. Every second, you can either fill up <code>2</code> cups with <strong>different</strong> types of water, or <code>1</code> cup of any type of water.</p><p>You are given a <strong>0-indexed</strong> integer array <code>amount</code> of length <code>3</code> where <code>amount[0]</code>, <code>amount[1]</code>, and <code>amount[2]</code> denote the number of cold, warm, and hot water cups you need to fill respectively. Return <em>the <strong>minimum</strong> number of seconds needed to fill up all the cups</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: amount = [1,4,2]</p><p>Output: 4</p><p>Explanation: One way to fill up the cups is:</p><p>Second 1: Fill up a cold cup and a warm cup.</p><p>Second 2: Fill up a warm cup and a hot cup.</p><p>Second 3: Fill up a warm cup and a hot cup.</p><p>Second 4: Fill up a warm cup.</p><p>It can be proven that 4 is the minimum number of seconds needed.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: amount = [5,4,4]</p><p>Output: 7</p><p>Explanation: One way to fill up the cups is:</p><p>Second 1: Fill up a cold cup, and a hot cup.</p><p>Second 2: Fill up a cold cup, and a warm cup.</p><p>Second 3: Fill up a cold cup, and a warm cup.</p><p>Second 4: Fill up a warm cup, and a hot cup.</p><p>Second 5: Fill up a cold cup, and a hot cup.</p><p>Second 6: Fill up a cold cup, and a warm cup.</p><p>Second 7: Fill up a hot cup.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: amount = [5,0,0]</p><p>Output: 5</p><p>Explanation: Every second, we fill up a cold cup.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>amount.length == 3</code></li><li><code>0 &lt;= amount[i] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>现有一台饮水机，可以制备冷水、温水和热水。每秒钟，可以装满 <code>2</code> 杯 <strong>不同</strong> 类型的水或者 <code>1</code> 杯任意类型的水。</p><p>给你一个下标从 <strong>0</strong> 开始、长度为 <code>3</code> 的整数数组 <code>amount</code> ，其中 <code>amount[0]</code>、<code>amount[1]</code> 和 <code>amount[2]</code> 分别表示需要装满冷水、温水和热水的杯子数量。返回装满所有杯子所需的 <strong>最少</strong> 秒数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> amount = [1,4,2]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 下面给出一种方案：</p><p>第 1 秒：装满一杯冷水和一杯温水。</p><p>第 2 秒：装满一杯温水和一杯热水。</p><p>第 3 秒：装满一杯温水和一杯热水。</p><p>第 4 秒：装满一杯温水。</p><p>可以证明最少需要 4 秒才能装满所有杯子。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> amount = [5,4,4]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 下面给出一种方案：</p><p>第 1 秒：装满一杯冷水和一杯热水。</p><p>第 2 秒：装满一杯冷水和一杯温水。</p><p>第 3 秒：装满一杯冷水和一杯温水。</p><p>第 4 秒：装满一杯温水和一杯热水。</p><p>第 5 秒：装满一杯冷水和一杯热水。</p><p>第 6 秒：装满一杯冷水和一杯温水。</p><p>第 7 秒：装满一杯热水。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> amount = [5,0,0]</p><p><strong>输出：</strong> 5</p><p><strong>解释：</strong> 每秒装满一杯冷水。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>amount.length == 3</code></li><li><code>0 &lt;= amount[i] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>关键观察</strong>：</p><ul><li>如果一个杯子的数量是最大值（<code>max</code>），那么至少需要 <code>max</code> 秒来填满它。</li><li>如果两个杯子的总数量加起来超过 <code>max</code>，则需要更多的时间。</li><li>每秒最多可以装两个不同的杯子，因此最小秒数是 <code>ceil(sum / 2)</code>，其中 <code>sum</code> 是 3 个杯子的总数量。</li></ul></li><li><p><strong>两种情况的最大值</strong>：</p><ul><li>最大值 <code>max</code>：表示至少需要填满最大的那种杯子。</li><li>总数的一半 <code>ceil(sum / 2)</code>：表示能够以最快速度装水的时间。</li><li>取上述两者中的最大值。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，求最大值与求和的时间复杂度是 <code>O(3)</code>，即<code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只是用了常数变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">amount</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">fillCups</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">amount</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">const</span> max <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token operator">...</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> sum <span class="token operator">=</span> amount<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> a <span class="token operator">+</span> b<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>max<span class="token punctuation">,</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>sum <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,29),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),E=t("td",{style:{"text-align":"center"}},"1354",-1),S=t("td",{style:{"text-align":"left"}},"多次求和构造目标数组",-1),F=t("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},C=t("code",null,"数组",-1),I=t("code",null,"堆（优先队列）",-1),N=t("td",{style:{"text-align":"center"}},"🔴",-1),L={style:{"text-align":"center"}},V={href:"https://leetcode.cn/problems/construct-target-array-with-multiple-sums",target:"_blank",rel:"noopener noreferrer"},j={href:"https://leetcode.com/problems/construct-target-array-with-multiple-sums",target:"_blank",rel:"noopener noreferrer"},B=t("td",{style:{"text-align":"center"}},"1753",-1),M=t("td",{style:{"text-align":"left"}},"移除石子的最大得分",-1),R=t("td",{style:{"text-align":"center"}},null,-1),Y={style:{"text-align":"left"}},T=t("code",null,"贪心",-1),z=t("code",null,"数学",-1),A=t("code",null,"堆（优先队列）",-1),D=t("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/maximum-score-from-removing-stones",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/maximum-score-from-removing-stones",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"2141",-1),P=t("td",{style:{"text-align":"left"}},"同时运行 N 台电脑的最长时间",-1),Q=t("td",{style:{"text-align":"center"}},null,-1),U={style:{"text-align":"left"}},W=t("code",null,"贪心",-1),X=t("code",null,"数组",-1),Z=t("code",null,"二分查找",-1),$=t("code",null,"1+",-1),tt=t("td",{style:{"text-align":"center"}},"🔴",-1),et={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/maximum-running-time-of-n-computers",target:"_blank",rel:"noopener noreferrer"},ot={href:"https://leetcode.com/problems/maximum-running-time-of-n-computers",target:"_blank",rel:"noopener noreferrer"},at=t("td",{style:{"text-align":"center"}},"2448",-1),st=t("td",{style:{"text-align":"left"}},"使数组相等的最小开销",-1),lt=t("td",{style:{"text-align":"center"}},null,-1),ct={style:{"text-align":"left"}},pt=t("code",null,"贪心",-1),rt=t("code",null,"数组",-1),dt=t("code",null,"二分查找",-1),it=t("code",null,"2+",-1),ut=t("td",{style:{"text-align":"center"}},"🔴",-1),ht={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/minimum-cost-to-make-array-equal",target:"_blank",rel:"noopener noreferrer"},_t={href:"https://leetcode.com/problems/minimum-cost-to-make-array-equal",target:"_blank",rel:"noopener noreferrer"};function gt(kt,ft){const c=l("font"),a=l("RouterLink"),s=l("ExternalLinkIcon");return r(),d("div",null,[m,t("p",null,[e("🟢 "),n(c,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),n(a,{to:"/tag/greedy.html"},{default:o(()=>[_]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:o(()=>[g]),_:1}),e(),n(a,{to:"/tag/sorting.html"},{default:o(()=>[k]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:o(()=>[f]),_:1}),e("  🔗 "),t("a",b,[y,n(s)]),e(),t("a",x,[v,n(s)])]),w,i(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[E,S,F,t("td",O,[n(a,{to:"/tag/array.html"},{default:o(()=>[C]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:o(()=>[I]),_:1})]),N,t("td",L,[t("a",V,[e("🀄️"),n(s)]),e(),t("a",j,[e("🔗"),n(s)])])]),t("tr",null,[B,M,R,t("td",Y,[n(a,{to:"/tag/greedy.html"},{default:o(()=>[T]),_:1}),e(),n(a,{to:"/tag/math.html"},{default:o(()=>[z]),_:1}),e(),n(a,{to:"/tag/heap-priority-queue.html"},{default:o(()=>[A]),_:1})]),D,t("td",G,[t("a",H,[e("🀄️"),n(s)]),e(),t("a",J,[e("🔗"),n(s)])])]),t("tr",null,[K,P,Q,t("td",U,[n(a,{to:"/tag/greedy.html"},{default:o(()=>[W]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:o(()=>[X]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:o(()=>[Z]),_:1}),e(),$]),tt,t("td",et,[t("a",nt,[e("🀄️"),n(s)]),e(),t("a",ot,[e("🔗"),n(s)])])]),t("tr",null,[at,st,lt,t("td",ct,[n(a,{to:"/tag/greedy.html"},{default:o(()=>[pt]),_:1}),e(),n(a,{to:"/tag/array.html"},{default:o(()=>[rt]),_:1}),e(),n(a,{to:"/tag/binary-search.html"},{default:o(()=>[dt]),_:1}),e(),it]),ut,t("td",ht,[t("a",mt,[e("🀄️"),n(s)]),e(),t("a",_t,[e("🔗"),n(s)])])])])])])}const yt=p(h,[["render",gt],["__file","2335.html.vue"]]);export{yt as default};

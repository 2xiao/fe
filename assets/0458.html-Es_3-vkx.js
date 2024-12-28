import{_ as c,r as a,o as l,c as u,a as e,b as n,d as s,w as t,e as r}from"./app-fEpXkbSw.js";const d={},m=e("h1",{id:"_458-可怜的小猪",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_458-可怜的小猪","aria-hidden":"true"},"#"),n(" 458. 可怜的小猪")],-1),h=e("code",null,"数学",-1),k=e("code",null,"动态规划",-1),b=e("code",null,"组合数学",-1),g={href:"https://leetcode.cn/problems/poor-pigs",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/poor-pigs",target:"_blank",rel:"noopener noreferrer"},T=e("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>buckets</code> buckets of liquid, where <strong>exactly one</strong> of the buckets is poisonous. To figure out which one is poisonous, you feed some number of (poor) pigs the liquid to see whether they will die or not. Unfortunately, you only have <code>minutesToTest</code> minutes to determine which bucket is poisonous.</p><p>You can feed the pigs according to these steps:</p><ol><li>Choose some live pigs to feed.</li><li>For each pig, choose which buckets to feed it. The pig will consume all the chosen buckets simultaneously and will take no time. Each pig can feed from any number of buckets, and each bucket can be fed from by any number of pigs.</li><li>Wait for <code>minutesToDie</code> minutes. You may <strong>not</strong> feed any other pigs during this time.</li><li>After <code>minutesToDie</code> minutes have passed, any pigs that have been fed the poisonous bucket will die, and all others will survive.</li><li>Repeat this process until you run out of time.</li></ol><p>Given <code>buckets</code>, <code>minutesToDie</code>, and <code>minutesToTest</code>, return <em>the<strong>minimum</strong> number of pigs needed to figure out which bucket is poisonous within the allotted time</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: buckets = 4, minutesToDie = 15, minutesToTest = 15</p><p>Output: 2</p><p>Explanation: We can determine the poisonous bucket as follows:</p><p>At time 0, feed the first pig buckets 1 and 2, and feed the second pig buckets 2 and 3.</p><p>At time 15, there are 4 possible outcomes:</p><ul><li>If only the first pig dies, then bucket 1 must be poisonous.</li><li>If only the second pig dies, then bucket 3 must be poisonous.</li><li>If both pigs die, then bucket 2 must be poisonous.</li><li>If neither pig dies, then bucket 4 must be poisonous.</li></ul></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: buckets = 4, minutesToDie = 15, minutesToTest = 30</p><p>Output: 2</p><p>Explanation: We can determine the poisonous bucket as follows:</p><p>At time 0, feed the first pig bucket 1, and feed the second pig bucket 2.</p><p>At time 15, there are 2 possible outcomes:</p><ul><li>If either pig dies, then the poisonous bucket is the one it was fed.</li><li>If neither pig dies, then feed the first pig bucket 3, and feed the second pig bucket 4.</li></ul><p>At time 30, one of the two pigs must die, and the poisonous bucket is the one it was fed.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= buckets &lt;= 1000</code></li><li><code>1 &lt;= minutesToDie &lt;= minutesToTest &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>有<code> buckets</code> 桶液体，其中 <strong>正好有一桶</strong> 含有毒药，其余装的都是水。它们从外观看起来都一样。为了弄清楚哪只水桶含有毒药，你可以喂一些猪喝，通过观察猪是否会死进行判断。不幸的是，你只有 <code>minutesToTest</code> 分钟时间来确定哪桶液体是有毒的。</p><p>喂猪的规则如下：</p><ol><li>选择若干活猪进行喂养</li><li>可以允许小猪同时饮用任意数量的桶中的水，并且该过程不需要时间。</li><li>小猪喝完水后，必须有 <code>minutesToDie</code> 分钟的冷却时间。在这段时间里，你只能观察，而不允许继续喂猪。</li><li>过了 <code>minutesToDie</code> 分钟后，所有喝到毒药的猪都会死去，其他所有猪都会活下来。</li><li>重复这一过程，直到时间用完。</li></ol><p>给你桶的数目 <code>buckets</code> ，<code>minutesToDie</code> 和 <code>minutesToTest</code> ，返回 <em>在规定时间内判断哪个桶有毒所需的<strong>最小</strong> 猪数</em> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> buckets = 1000, minutesToDie = 15, minutesToTest = 60</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> buckets = 4, minutesToDie = 15, minutesToTest = 15</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> buckets = 4, minutesToDie = 15, minutesToTest = 30</p><p><strong>输出：</strong> 2</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= buckets &lt;= 1000</code></li><li><code>1 &lt;= minutesToDie &lt;= minutesToTest &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>假设我们用 2 头猪、毒药会在 15 分钟内致死、且有 60 分钟的测试时间，可以通过以下方法在最多 25 桶中找到有毒的一桶。</p><p>将桶排列成一个 5×5 的正方形：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> 1   2   3   4   5
 6   7   8   9  10
11  12  13  14  15
16  17  18  19  20
21  22  23  24  25
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为有 60 分钟的时间，而测试一次需要 15 分钟，所以我们最多可以运行 4 次测试。</p><p>现在，用一头猪来确定<strong>行</strong>（让它依次喝第 1、2、3、4、5 号桶的水，等 15 分钟；然后喝第 6、7、8、9、10 号桶的水，再等 15 分钟；以此类推）。用另一头猪来确定<strong>列</strong>（让它依次喝第 1、6、11、16、21 号桶的水，等 15 分钟；然后喝第 2、7、12、17、22 号桶的水，以此类推）。</p><p>如果行的那头猪在第三轮测试中死亡，说明毒药在第三行。如果测试列的那头猪没有死亡，说明毒药在第五列（这也是为什么尽管我们只能运行 4 轮测试，却可以覆盖 5 行或 5 列）。</p><p>以此类推，对于 3 头猪，我们可以用一个 5×5×5 的立方体代替 5×5 的平面，依然用每头猪分别确定一个维度的坐标：一头猪喝从上到下的每层，另一头猪喝从左到右的每排，第三头猪喝从前到后的每列。通过这种方式，3 头猪可以判断最多 125 个桶。</p><p>通过这种方法，我们可以得出公式，<code>n</code> 只小猪可以最多判断 <code>(Math.floor(minutesToTest / minutesToDie) + 1) ^ n</code> 个桶。</p><p>因此，只需要找到满足条件的最小数量的猪即可。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(pigs)</code>，循环次数取决于 <code>pigs</code> 的值。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">buckets</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">minutesToDie</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">minutesToTest</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">poorPigs</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">buckets<span class="token punctuation">,</span> minutesToDie<span class="token punctuation">,</span> minutesToTest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> pigs <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>
		Math<span class="token punctuation">.</span><span class="token function">pow</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>minutesToTest <span class="token operator">/</span> minutesToDie<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> pigs<span class="token punctuation">)</span> <span class="token operator">&lt;</span> buckets
	<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		pigs<span class="token operator">++</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> pigs<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,38);function w(y,x){const p=a("font"),o=a("RouterLink"),i=a("ExternalLinkIcon");return l(),u("div",null,[m,e("p",null,[n("🔴 "),s(p,{color:"#ff334b"},{default:t(()=>[n("Hard")]),_:1}),n("  🔖  "),s(o,{to:"/tag/math.html"},{default:t(()=>[h]),_:1}),n(),s(o,{to:"/tag/dynamic-programming.html"},{default:t(()=>[k]),_:1}),n(),s(o,{to:"/tag/combinatorics.html"},{default:t(()=>[b]),_:1}),n("  🔗 "),e("a",g,[f,s(i)]),n(),e("a",v,[T,s(i)])]),_])}const q=c(d,[["render",w],["__file","0458.html.vue"]]);export{q as default};

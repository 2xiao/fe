import{_ as c,r as e,o as l,c as r,a as n,b as s,d as a,w as t,e as u}from"./app-MkGfDfkx.js";const d={},k=n("h1",{id:"_1266-访问所有点的最小时间",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1266-访问所有点的最小时间","aria-hidden":"true"},"#"),s(" 1266. 访问所有点的最小时间")],-1),h=n("code",null,"几何",-1),m=n("code",null,"数组",-1),g=n("code",null,"数学",-1),b={href:"https://leetcode.cn/problems/minimum-time-visiting-all-points",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),_={href:"https://leetcode.com/problems/minimum-time-visiting-all-points",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),y=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>On a 2D plane, there are <code>n</code> points with integer coordinates <code>points[i] = [xi, yi]</code>. Return _the<strong>minimum time</strong> in seconds to visit all the points in the order given by _<code>points</code>.</p><p>You can move according to these rules:</p><ul><li>In <code>1</code> second, you can either: <ul><li>move vertically by one unit,</li><li>move horizontally by one unit, or</li><li>move diagonally <code>sqrt(2)</code> units (in other words, move one unit vertically then one unit horizontally in <code>1</code> second).</li></ul></li><li>You have to visit the points in the same order as they appear in the array.</li><li>You are allowed to pass through points that appear later in the order, but these do not count as visits.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/11/14/1626_example_1.PNG" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: points = [[1,1],[3,4],[-1,0]]</p><p>Output: 7</p><p>Explanation: One optimal path is <strong>[1,1]</strong> -&gt; [2,2] -&gt; [3,3] -&gt; <strong>[3,4]</strong> -&gt; [2,3] -&gt; [1,2] -&gt; [0,1] -&gt; <strong>[-1,0]</strong></p><p>Time from [1,1] to [3,4] = 3 seconds</p><p>Time from [3,4] to [-1,0] = 4 seconds</p><p>Total time = 7 seconds</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: points = [[3,2],[-2,2]]</p><p>Output: 5</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>points.length == n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>points[i].length == 2</code></li><li><code>-1000 &lt;= points[i][0], points[i][1] &lt;= 1000</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>平面上有 <code>n</code> 个点，点的位置用整数坐标表示 <code>points[i] = [xi, yi]</code> 。请你计算访问所有这些点需要的 <strong>最小时间</strong> （以秒为单位）。</p><p>你需要按照下面的规则在平面上移动：</p><ul><li><p>每一秒内，你可以：</p><ul><li>沿水平方向移动一个单位长度，或者</li><li>沿竖直方向移动一个单位长度，或者</li><li>跨过对角线移动 <code>sqrt(2)</code> 个单位长度（可以看作在一秒内向水平和竖直方向各移动一个单位长度）。</li></ul></li><li><p>必须按照数组中出现的顺序来访问这些点。</p></li><li><p>在访问某个点时，可以经过该点后面出现的点，但经过的那些点不算作有效访问。</p></li></ul><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2019/11/24/1626_example_1.png)</p><blockquote><p><strong>输入：</strong> points = [[1,1],[3,4],[-1,0]]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 一条最佳的访问路径是： <strong>[1,1]</strong> -&gt; [2,2] -&gt; [3,3] -&gt; <strong>[3,4]</strong> -&gt; [2,3] -&gt; [1,2] -&gt; [0,1] -&gt; <strong>[-1,0]</strong></p><p>从 [1,1] 到 [3,4] 需要 3 秒</p><p>从 [3,4] 到 [-1,0] 需要 4 秒</p><p>一共需要 7 秒</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> points = [[3,2],[-2,2]]</p><p><strong>输出：</strong> 5</p></blockquote><p><strong>提示：</strong></p><ul><li><code>points.length == n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>points[i].length == 2</code></li><li><code>-1000 &lt;= points[i][0], points[i][1] &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>在二维平面上，从一个点到另一个点的最短时间是两个坐标差值的 <strong>最大值</strong>。</p><p>如果水平差值 <code>dx</code> 和竖直差值 <code>dy</code> 的较大值是 <code>max(dx, dy)</code>，则对角线可以覆盖较小的差值，剩下的差值需要水平或竖直方向补足。</p><ol><li>遍历点的列表，从第一个点开始访问。</li><li>对于每对相邻点： <ul><li>计算水平距离 <code>dx</code> 和竖直距离 <code>dy</code>；</li><li>增加 <code>max(dx, dy)</code> 到结果中。</li></ul></li><li>返回最终结果。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是点的数量，遍历 <code>points</code> 列表计算相邻点之间的距离。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用常数额外空间存储变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">points</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minTimeToVisitAllPoints</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">points</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> points<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> dx <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>points<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">-</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">let</span> dy <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">abs</span><span class="token punctuation">(</span>points<span class="token punctuation">[</span>i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> points<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		res <span class="token operator">+=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>dx<span class="token punctuation">,</span> dy<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,30);function x(w,q){const i=e("font"),o=e("RouterLink"),p=e("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟢 "),a(i,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),a(o,{to:"/tag/geometry.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",b,[v,a(p)]),s(),n("a",_,[f,a(p)])]),y])}const O=c(d,[["render",x],["__file","1266.html.vue"]]);export{O as default};

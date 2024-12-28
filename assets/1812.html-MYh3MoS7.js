import{_ as r,r as c,o as p,c as i,a as e,b as n,d as t,w as s,f as d,e as u}from"./app-fEpXkbSw.js";const h={},k=e("h1",{id:"_1812-判断国际象棋棋盘中一个格子的颜色",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1812-判断国际象棋棋盘中一个格子的颜色","aria-hidden":"true"},"#"),n(" 1812. 判断国际象棋棋盘中一个格子的颜色")],-1),g=e("code",null,"数学",-1),m=e("code",null,"字符串",-1),b={href:"https://leetcode.cn/problems/determine-color-of-a-chessboard-square",target:"_blank",rel:"noopener noreferrer"},_=e("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/determine-color-of-a-chessboard-square",target:"_blank",rel:"noopener noreferrer"},q=e("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given <code>coordinates</code>, a string that represents the coordinates of a square of the chessboard. Below is a chessboard for your reference.</p><figure><img src="https://assets.leetcode.com/uploads/2021/02/19/screenshot-2021-02-20-at-22159-pm.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>Return <code>true</code> <em>if the square is white, and</em><code>false</code> <em>if the square is black</em>.</p><p>The coordinate will always represent a valid chessboard square. The coordinate will always have the letter first, and the number second.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: coordinates = &quot;a1&quot;</p><p>Output: false</p><p>Explanation: From the chessboard above, the square with coordinates &quot;a1&quot; is black, so return false.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: coordinates = &quot;h3&quot;</p><p>Output: true</p><p>Explanation: From the chessboard above, the square with coordinates &quot;h3&quot; is white, so return true.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: coordinates = &quot;c7&quot;</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>coordinates.length == 2</code></li><li><code>&#39;a&#39; &lt;= coordinates[0] &lt;= &#39;h&#39;</code></li><li><code>&#39;1&#39; &lt;= coordinates[1] &lt;= &#39;8&#39;</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个坐标 <code>coordinates</code> ，它是一个字符串，表示国际象棋棋盘中一个格子的坐标。下图是国际象棋棋盘示意图。</p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2021/04/03/chessboard.png)</p><p>如果所给格子的颜色是白色，请你返回 <code>true</code>，如果是黑色，请返回 <code>false</code> 。</p><p>给定坐标一定代表国际象棋棋盘上一个存在的格子。坐标第一个字符是字母，第二个字符是数字。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> coordinates = &quot;a1&quot;</p><p><strong>输出：</strong> false</p><p><strong>解释：</strong> 如上图棋盘所示，&quot;a1&quot; 坐标的格子是黑色的，所以返回 false 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> coordinates = &quot;h3&quot;</p><p><strong>输出：</strong> true</p><p><strong>解释：</strong> 如上图棋盘所示，&quot;h3&quot; 坐标的格子是白色的，所以返回 true 。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> coordinates = &quot;c7&quot;</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>coordinates.length == 2</code></li><li><code>&#39;a&#39; &lt;= coordinates[0] &lt;= &#39;h&#39;</code></li><li><code>&#39;1&#39; &lt;= coordinates[1] &lt;= &#39;8&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>坐标系统</strong>：棋盘上的坐标由字母和数字组成，例如 <code>a1</code>, <code>h8</code>。</p><ul><li>字母表示列（<code>a</code> 到 <code>h</code>），即从左到右的 8 列。</li><li>数字表示行（<code>1</code> 到 <code>8</code>），即从下到上的 8 行。</li></ul></li><li><p><strong>格子颜色的规律</strong>：</p><ul><li>对于标准的棋盘，颜色是交替的，黑白格子交替出现。</li><li>如果 <code>(列号 + 行号) % 2 == 0</code>，则是黑色格子，否则是白色格子。 <ul><li>例如，<code>a1</code> 是黑色的，<code>b1</code> 是白色的，<code>a2</code> 是白色的，<code>b2</code> 是黑色的，依此类推。</li></ul></li></ul></li><li><p><strong>列转换</strong>：</p><ul><li>首先需要将字母表示的列（例如 <code>a</code>、<code>b</code>）转换为数字。<code>a</code> 映射到 1，<code>b</code> 映射到 2，以此类推。</li><li>可以通过 <code>charCodeAt</code> 来获取字母的 ASCII 值，再减去 <code>&#39;a&#39;</code> 的 ASCII 值并加上 1，得到列号。</li></ul></li><li><p><strong>判断颜色</strong>：</p><ul><li>根据列号和行号的和 <code>(列号 + 行号) % 2</code> 来判断格子的颜色。</li><li>如果 <code>(列号 + 行号) % 2 == 1</code>，则是白色格子。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(1)</code>，只需要进行常数时间的字符和数字操作。</p></li><li><p><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储列号和行号。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">coordinates</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">squareIsWhite</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">coordinates</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// 获取列号</span>
	<span class="token keyword">const</span> col <span class="token operator">=</span> coordinates<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
	<span class="token comment">// 获取行号</span>
	<span class="token keyword">const</span> row <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>coordinates<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token comment">// 判断是否是白色格子</span>
	<span class="token keyword">return</span> <span class="token punctuation">(</span>col <span class="token operator">+</span> row<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),x=e("thead",null,[e("tr",null,[e("th",{style:{"text-align":"center"}},"题号"),e("th",{style:{"text-align":"left"}},"标题"),e("th",{style:{"text-align":"center"}},"题解"),e("th",{style:{"text-align":"left"}},"标签"),e("th",{style:{"text-align":"center"}},"难度"),e("th",{style:{"text-align":"center"}},"力扣")])],-1),y=e("td",{style:{"text-align":"center"}},"3274",-1),w=e("td",{style:{"text-align":"left"}},"检查棋盘方格颜色是否相同",-1),C=e("td",{style:{"text-align":"center"}},null,-1),I={style:{"text-align":"left"}},E=e("code",null,"数学",-1),N=e("code",null,"字符串",-1),A=e("td",{style:{"text-align":"center"}},"🟢",-1),L={style:{"text-align":"center"}},O={href:"https://leetcode.cn/problems/check-if-two-chessboard-squares-have-the-same-color",target:"_blank",rel:"noopener noreferrer"},V={href:"https://leetcode.com/problems/check-if-two-chessboard-squares-have-the-same-color",target:"_blank",rel:"noopener noreferrer"};function B(j,R){const l=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon");return p(),i("div",null,[k,e("p",null,[n("🟢 "),t(l,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),t(o,{to:"/tag/math.html"},{default:s(()=>[g]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[m]),_:1}),n("  🔗 "),e("a",b,[_,t(a)]),n(),e("a",f,[q,t(a)])]),v,d(" prettier-ignore "),e("table",null,[x,e("tbody",null,[e("tr",null,[y,w,C,e("td",I,[t(o,{to:"/tag/math.html"},{default:s(()=>[E]),_:1}),n(),t(o,{to:"/tag/string.html"},{default:s(()=>[N]),_:1})]),A,e("td",L,[e("a",O,[n("🀄️"),t(a)]),n(),e("a",V,[n("🔗"),t(a)])])])])])])}const T=r(h,[["render",B],["__file","1812.html.vue"]]);export{T as default};

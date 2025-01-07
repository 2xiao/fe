import{_ as d,r as l,o as p,c as i,a as t,b as e,d as o,w as n,f as r,e as u}from"./app-WL8GPOUO.js";const g={},h=t("h1",{id:"_1598-文件夹操作日志搜集器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_1598-文件夹操作日志搜集器","aria-hidden":"true"},"#"),e(" 1598. 文件夹操作日志搜集器")],-1),k=t("code",null,"栈",-1),m=t("code",null,"数组",-1),_=t("code",null,"字符串",-1),q={href:"https://leetcode.cn/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},f=t("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/crawler-log-folder",target:"_blank",rel:"noopener noreferrer"},x=t("code",null,"LeetCode",-1),v=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>The Leetcode file system keeps a log each time some user performs a <em>change folder</em> operation.</p><p>The operations are described below:</p><ul><li><code>&quot;../&quot;</code> : Move to the parent folder of the current folder. (If you are already in the main folder, <strong>remain in the same folder</strong>).</li><li><code>&quot;./&quot;</code> : Remain in the same folder.</li><li><code>&quot;x/&quot;</code> : Move to the child folder named <code>x</code> (This folder is <strong>guaranteed to always exist</strong>).</li></ul><p>You are given a list of strings <code>logs</code> where <code>logs[i]</code> is the operation performed by the user at the <code>ith</code> step.</p><p>The file system starts in the main folder, then the operations in <code>logs</code> are performed.</p><p>Return <em>the minimum number of operations needed to go back to the main folder after the change folder operations.</em></p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/09/sample_11_1957.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: <code>logs = [&quot;d1/&quot;,&quot;d2/&quot;,&quot;../&quot;,&quot;d21/&quot;,&quot;./&quot;]</code></p><p>Output: 2</p><p>Explanation: Use this change folder operation <code>&quot;../&quot;</code> 2 times and go back to the main folder.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/09/09/sample_22_1957.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: <code>logs = [&quot;d1/&quot;,&quot;d2/&quot;,&quot;./&quot;,&quot;d3/&quot;,&quot;../&quot;,&quot;d31/&quot;]</code></p><p>Output: 3</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: <code>logs = [&quot;d1/&quot;,&quot;../&quot;,&quot;../&quot;,&quot;../&quot;]</code></p><p>Output: 0</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= logs.length &lt;= 10^3</code></li><li><code>2 &lt;= logs[i].length &lt;= 10</code></li><li><code>logs[i]</code> contains lowercase English letters, digits, <code>&#39;.&#39;</code>, and <code>&#39;/&#39;</code>.</li><li><code>logs[i]</code> follows the format described in the statement.</li><li>Folder names consist of lowercase English letters and digits.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>每当用户执行变更文件夹操作时，LeetCode 文件系统都会保存一条日志记录。</p><p>下面给出对变更操作的说明：</p><ul><li><code>&quot;../&quot;</code> ：移动到当前文件夹的父文件夹。如果已经在主文件夹下，则 <strong>继续停留在当前文件夹</strong> 。</li><li><code>&quot;./&quot;</code> ：继续停留在当前文件夹。</li><li><code>&quot;x/&quot;</code> ：移动到名为 <code>x</code> 的子文件夹中。题目数据 <strong>保证总是存在文件夹<code>x</code></strong> 。</li></ul><p>给你一个字符串列表 <code>logs</code> ，其中 <code>logs[i]</code> 是用户在 <code>ith</code> 步执行的操作。</p><p>文件系统启动时位于主文件夹，然后执行 <code>logs</code> 中的操作。</p><p>执行完所有变更文件夹操作后，请你找出 <strong>返回主文件夹所需的最小步数</strong> 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/09/26/sample_11_1957.png)</p><blockquote><p><strong>输入：</strong> <code>logs = [&quot;d1/&quot;,&quot;d2/&quot;,&quot;../&quot;,&quot;d21/&quot;,&quot;./&quot;]</code></p><p><strong>输出：</strong> 2</p><p><strong>解释：</strong> 执行 <code>&quot;../&quot;</code> 操作变更文件夹 2 次，即可回到主文件夹</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2020/09/26/sample_22_1957.png)</p><blockquote><p><strong>输入：</strong> <code>logs = [&quot;d1/&quot;,&quot;d2/&quot;,&quot;./&quot;,&quot;d3/&quot;,&quot;../&quot;,&quot;d31/&quot;]</code></p><p><strong>输出：</strong> 3</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> <code>logs = [&quot;d1/&quot;,&quot;../&quot;,&quot;../&quot;,&quot;../&quot;]</code></p><p><strong>输出：</strong> 0</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= logs.length &lt;= 10^3</code></li><li><code>2 &lt;= logs[i].length &lt;= 10</code></li><li><code>logs[i]</code> 包含小写英文字母，数字，<code>&#39;.&#39;</code> 和 <code>&#39;/&#39;</code></li><li><code>logs[i]</code> 符合语句中描述的格式</li><li>文件夹名称由小写英文字母和数字组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>本道题不需要显示地维护一个栈，而是可以通过一个数字变量 <code>stack</code> 模拟当前目录深度，根据不同的操作对其进行增减：</p><ul><li>遇到 <code>&quot;../&quot;</code>：深度减 1，但不能小于 0。</li><li>遇到 <code>&quot;./&quot;</code>：当前深度保持不变。</li><li>遇到其他目录：深度加 1。</li></ul><ol><li><p>初始化变量 <code>stack = 0</code>，表示当前深度。</p></li><li><p>遍历数组 <code>logs</code>，对每个操作进行判断：</p><ul><li>如果是 <code>&quot;../&quot;</code>，则减少深度，但使用 <code>Math.max(0, stack - 1)</code> 确保深度不变为负数。</li><li>如果是 <code>&quot;./&quot;</code>，跳过，不对深度进行修改。</li><li>如果是其他字符串，则增加深度 <code>stack++</code>。</li></ul></li><li><p>遍历结束后，<code>stack</code> 的值即为最终目录深度。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是 <code>logs</code> 的长度，只需要遍历一次 <code>logs</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用了一个变量 <code>stack</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">logs</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">minOperations</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">logs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> log <span class="token keyword">of</span> logs<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>log <span class="token operator">===</span> <span class="token string">&#39;../&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> stack <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 确保目录不会上升到负数</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>log <span class="token operator">!==</span> <span class="token string">&#39;./&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token operator">++</span><span class="token punctuation">;</span> <span class="token comment">// 有效的文件夹操作</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,43),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),w=t("td",{style:{"text-align":"center"}},"682",-1),E=t("td",{style:{"text-align":"left"}},"棒球比赛",-1),L={style:{"text-align":"center"}},C={style:{"text-align":"left"}},I=t("code",null,"栈",-1),O=t("code",null,"数组",-1),N=t("code",null,"模拟",-1),T=t("td",{style:{"text-align":"center"}},"🟢",-1),V={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/baseball-game",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/baseball-game",target:"_blank",rel:"noopener noreferrer"},j=t("td",{style:{"text-align":"center"}},"844",-1),B=t("td",{style:{"text-align":"left"}},"比较含退格的字符串",-1),z={style:{"text-align":"center"}},F={style:{"text-align":"left"}},S=t("code",null,"栈",-1),U=t("code",null,"双指针",-1),Y=t("code",null,"字符串",-1),A=t("code",null,"1+",-1),D=t("td",{style:{"text-align":"center"}},"🟢",-1),G={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"};function K(P,Q){const c=l("font"),s=l("RouterLink"),a=l("ExternalLinkIcon");return p(),i("div",null,[h,t("p",null,[e("🟢 "),o(c,{color:"#15bd66"},{default:n(()=>[e("Easy")]),_:1}),e("  🔖  "),o(s,{to:"/tag/stack.html"},{default:n(()=>[k]),_:1}),e(),o(s,{to:"/tag/array.html"},{default:n(()=>[m]),_:1}),e(),o(s,{to:"/tag/string.html"},{default:n(()=>[_]),_:1}),e("  🔗 "),t("a",q,[f,o(a)]),e(),t("a",b,[x,o(a)])]),v,r(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[w,E,t("td",L,[o(s,{to:"/problem/0682.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",C,[o(s,{to:"/tag/stack.html"},{default:n(()=>[I]),_:1}),e(),o(s,{to:"/tag/array.html"},{default:n(()=>[O]),_:1}),e(),o(s,{to:"/tag/simulation.html"},{default:n(()=>[N]),_:1})]),T,t("td",V,[t("a",M,[e("🀄️"),o(a)]),e(),t("a",R,[e("🔗"),o(a)])])]),t("tr",null,[j,B,t("td",z,[o(s,{to:"/problem/0844.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",F,[o(s,{to:"/tag/stack.html"},{default:n(()=>[S]),_:1}),e(),o(s,{to:"/tag/two-pointers.html"},{default:n(()=>[U]),_:1}),e(),o(s,{to:"/tag/string.html"},{default:n(()=>[Y]),_:1}),e(),A]),D,t("td",G,[t("a",H,[e("🀄️"),o(a)]),e(),t("a",J,[e("🔗"),o(a)])])])])])])}const X=d(g,[["render",K],["__file","1598.html.vue"]]);export{X as default};

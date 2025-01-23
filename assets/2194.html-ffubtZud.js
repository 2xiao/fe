import{_ as r,r as c,o as d,c as p,a as t,b as e,d as n,w as o,f as i,e as u}from"./app-MsFeWfVD.js";const h={},g=t("h1",{id:"_2194-excel-表中某个范围内的单元格",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2194-excel-表中某个范围内的单元格","aria-hidden":"true"},"#"),e(" 2194. Excel 表中某个范围内的单元格")],-1),m=t("code",null,"字符串",-1),_={href:"https://leetcode.cn/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet",target:"_blank",rel:"noopener noreferrer"},b=t("code",null,"LeetCode",-1),x=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>A cell <code>(r, c)</code> of an excel sheet is represented as a string <code>&quot;&lt;col&gt;&lt;row&gt;&quot;</code> where:</p><ul><li><code>&lt;col&gt;</code> denotes the column number <code>c</code> of the cell. It is represented by <strong>alphabetical letters</strong>. <ul><li>For example, the <code>1st</code> column is denoted by <code>&#39;A&#39;</code>, the <code>2nd</code> by <code>&#39;B&#39;</code>, the <code>3rd</code> by <code>&#39;C&#39;</code>, and so on.</li></ul></li><li><code>&lt;row&gt;</code> is the row number <code>r</code> of the cell. The <code>rth</code> row is represented by the <strong>integer</strong> <code>r</code>.</li></ul><p>You are given a string <code>s</code> in the format <code>&quot;&lt;col1&gt;&lt;row1&gt;:&lt;col2&gt;&lt;row2&gt;&quot;</code>, where <code>&lt;col1&gt;</code> represents the column <code>c1</code>, <code>&lt;row1&gt;</code> represents the row <code>r1</code>, <code>&lt;col2&gt;</code> represents the column <code>c2</code>, and <code>&lt;row2&gt;</code> represents the row <code>r2</code>, such that <code>r1 &lt;= r2</code> and <code>c1 &lt;= c2</code>.</p><p>Return <em>the <strong>list of cells</strong></em> <code>(x, y)</code> <em>such that</em> <code>r1 &lt;= x &lt;= r2</code> <em>and</em> <code>c1 &lt;= y &lt;= c2</code>. The cells should be represented as <strong>strings</strong> in the format mentioned above and be sorted in <strong>non-decreasing</strong> order first by columns and then by rows.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: s = &quot;K1:L2&quot;</p><p>Output: [&quot;K1&quot;,&quot;K2&quot;,&quot;L1&quot;,&quot;L2&quot;]</p><p>Explanation:</p><p>The above diagram shows the cells which should be present in the list.</p><p>The red arrows denote the order in which the cells should be presented.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: s = &quot;A1:F1&quot;</p><p>Output: [&quot;A1&quot;,&quot;B1&quot;,&quot;C1&quot;,&quot;D1&quot;,&quot;E1&quot;,&quot;F1&quot;]</p><p>Explanation:</p><p>The above diagram shows the cells which should be present in the list.</p><p>The red arrow denotes the order in which the cells should be presented.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>s.length == 5</code></li><li><code>&#39;A&#39; &lt;= s[0] &lt;= s[3] &lt;= &#39;Z&#39;</code></li><li><code>&#39;1&#39; &lt;= s[1] &lt;= s[4] &lt;= &#39;9&#39;</code></li><li><code>s</code> consists of uppercase English letters, digits and <code>&#39;:&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>Excel 表中的一个单元格 <code>(r, c)</code> 会以字符串 <code>&quot;&lt;col&gt;&lt;row&gt;&quot;</code> 的形式进行表示，其中：</p><ul><li><code>&lt;col&gt;</code> 即单元格的列号 <code>c</code> 。用英文字母表中的 <strong>字母</strong> 标识。 <ul><li>例如，第 <code>1</code> 列用 <code>&#39;A&#39;</code> 表示，第 <code>2</code> 列用 <code>&#39;B&#39;</code> 表示，第 <code>3</code> 列用 <code>&#39;C&#39;</code> 表示，以此类推。</li></ul></li><li><code>&lt;row&gt;</code> 即单元格的行号 <code>r</code> 。第 <code>r</code> 行就用 <strong>整数</strong> <code>r</code> 标识。</li></ul><p>给你一个格式为 <code>&quot;&lt;col1&gt;&lt;row1&gt;:&lt;col2&gt;&lt;row2&gt;&quot;</code> 的字符串 <code>s</code> ，其中 <code>&lt;col1&gt;</code> 表示 <code>c1</code> 列，<code>&lt;row1&gt;</code> 表示 <code>r1</code> 行，<code>&lt;col2&gt;</code> 表示 <code>c2</code> 列，<code>&lt;row2&gt;</code> 表示 <code>r2</code> 行，并满足 <code>r1 &lt;= r2</code> 且 <code>c1 &lt;= c2</code> 。</p><p>找出所有满足 <code>r1 &lt;= x &lt;= r2</code> 且 <code>c1 &lt;= y &lt;= c2</code> 的单元格，并以列表形式返回。单元格应该按前面描述的格式用 <strong>字符串</strong> 表示，并以 <strong>非递减</strong> 顺序排列（先按列排，再按行排）。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/08/ex1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> s = &quot;K1:L2&quot;</p><p><strong>输出：</strong>[&quot;K1&quot;,&quot;K2&quot;,&quot;L1&quot;,&quot;L2&quot;]</p><p><strong>解释：</strong></p><p>上图显示了列表中应该出现的单元格。</p><p>红色箭头指示单元格的出现顺序。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2022/02/09/exam2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> s = &quot;A1:F1&quot;</p><p><strong>输出：</strong>[&quot;A1&quot;,&quot;B1&quot;,&quot;C1&quot;,&quot;D1&quot;,&quot;E1&quot;,&quot;F1&quot;]</p><p><strong>解释：</strong></p><p>上图显示了列表中应该出现的单元格。</p><p>红色箭头指示单元格的出现顺序。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>s.length == 5</code></li><li><code>&#39;A&#39; &lt;= s[0] &lt;= s[3] &lt;= &#39;Z&#39;</code></li><li><code>&#39;1&#39; &lt;= s[1] &lt;= s[4] &lt;= &#39;9&#39;</code></li><li><code>s</code> 由大写英文字母、数字、和 <code>&#39;:&#39;</code> 组成</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>提取范围信息</strong>：</p><ul><li>使用 <code>s.charCodeAt(0)</code> 和 <code>s.charCodeAt(3)</code> 提取范围的起始列和终止列对应的 ASCII 值。</li><li>使用 <code>s[1]</code> 和 <code>s[4]</code> 提取范围的起始行和终止行的数字。</li></ul></li><li><p><strong>遍历范围</strong>：</p><ul><li>使用两层嵌套循环，外层遍历列范围，内层遍历行范围。</li><li>使用 <code>String.fromCharCode</code> 将列的 ASCII 值转换为字母。</li></ul></li><li><p><strong>构建单元格名称</strong>：</p><ul><li>将列和行拼接成单元格名称，并存入结果数组。</li></ul></li><li><p><strong>返回结果数组</strong>。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(colCount × rowCount)</code>，两层循环，生成结果数组。</li><li><strong>空间复杂度</strong>：<code>O(colCount × rowCount)</code>，结果数组占用的空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">cellsInRange</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token comment">// 外层循环：遍历列范围，从起始列到终止列</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i <span class="token operator">&lt;=</span> s<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token comment">// 内层循环：遍历行范围，从起始行到终止行</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j <span class="token operator">&lt;=</span> <span class="token function">Number</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token comment">// 生成单元格名称并加入结果数组</span>
			res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>String<span class="token punctuation">.</span><span class="token function">fromCharCode</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span> <span class="token operator">+</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,33),q=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"168",-1),v=t("td",{style:{"text-align":"left"}},"Excel 表列名称",-1),w={style:{"text-align":"center"}},C={style:{"text-align":"left"}},A=t("code",null,"数学",-1),E=t("code",null,"字符串",-1),L=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},j={href:"https://leetcode.cn/problems/excel-sheet-column-title",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/excel-sheet-column-title",target:"_blank",rel:"noopener noreferrer"},N=t("td",{style:{"text-align":"center"}},"171",-1),T=t("td",{style:{"text-align":"left"}},"Excel 表列序号",-1),K={style:{"text-align":"center"}},F={style:{"text-align":"left"}},S=t("code",null,"数学",-1),V=t("code",null,"字符串",-1),z=t("td",{style:{"text-align":"center"}},"🟢",-1),O={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/excel-sheet-column-number",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/excel-sheet-column-number",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"1030",-1),Y=t("td",{style:{"text-align":"left"}},"距离顺序排列矩阵单元格",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=t("code",null,"几何",-1),M=t("code",null,"数组",-1),P=t("code",null,"数学",-1),Q=t("code",null,"2+",-1),U=t("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/matrix-cells-in-distance-order",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/matrix-cells-in-distance-order",target:"_blank",rel:"noopener noreferrer"};function tt(et,nt){const l=c("font"),s=c("RouterLink"),a=c("ExternalLinkIcon");return d(),p("div",null,[g,t("p",null,[e("🟢 "),n(l,{color:"#15bd66"},{default:o(()=>[e("Easy")]),_:1}),e("  🔖  "),n(s,{to:"/tag/string.html"},{default:o(()=>[m]),_:1}),e("  🔗 "),t("a",_,[k,n(a)]),e(),t("a",f,[b,n(a)])]),x,i(" prettier-ignore "),t("table",null,[q,t("tbody",null,[t("tr",null,[y,v,t("td",w,[n(s,{to:"/problem/0168.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",C,[n(s,{to:"/tag/math.html"},{default:o(()=>[A]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[E]),_:1})]),L,t("td",I,[t("a",j,[e("🀄️"),n(a)]),e(),t("a",B,[e("🔗"),n(a)])])]),t("tr",null,[N,T,t("td",K,[n(s,{to:"/problem/0171.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",F,[n(s,{to:"/tag/math.html"},{default:o(()=>[S]),_:1}),e(),n(s,{to:"/tag/string.html"},{default:o(()=>[V]),_:1})]),z,t("td",O,[t("a",R,[e("🀄️"),n(a)]),e(),t("a",D,[e("🔗"),n(a)])])]),t("tr",null,[Z,Y,t("td",G,[n(s,{to:"/problem/1030.html"},{default:o(()=>[e("[✓]")]),_:1})]),t("td",H,[n(s,{to:"/tag/geometry.html"},{default:o(()=>[J]),_:1}),e(),n(s,{to:"/tag/array.html"},{default:o(()=>[M]),_:1}),e(),n(s,{to:"/tag/math.html"},{default:o(()=>[P]),_:1}),e(),Q]),U,t("td",W,[t("a",X,[e("🀄️"),n(a)]),e(),t("a",$,[e("🔗"),n(a)])])])])])])}const st=r(h,[["render",tt],["__file","2194.html.vue"]]);export{st as default};

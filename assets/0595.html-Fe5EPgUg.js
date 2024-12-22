import{_ as u,r as i,o as p,c as v,a as n,b as e,d as s,w as a,e as m}from"./app-U2ekqv2z.js";const b={},h=n("h1",{id:"_595-大的国家",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_595-大的国家","aria-hidden":"true"},"#"),e(" 595. 大的国家")],-1),g=n("code",null,"数据库",-1),k={href:"https://leetcode.cn/problems/big-countries",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"力扣",-1),f={href:"https://leetcode.com/problems/big-countries",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),A=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>World</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>name is the primary key (column with unique values) for this table.</p><p>Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.</p></blockquote><p>A country is <strong>big</strong> if:</p><ul><li>it has an area of at least three million (i.e., <code>3000000 km2</code>), or</li><li>it has a population of at least twenty-five million (i.e., <code>25000000</code>).</li></ul><p>Write a solution to find the name, population, and area of the <strong>big countries</strong>.</p><p>Return the result table in <strong>any order</strong>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>World table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p><code>World</code> 表：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+---------+
| Column Name | Type    |
+-------------+---------+
| name        | varchar |
| continent   | varchar |
| area        | int     |
| population  | int     |
| gdp         | bigint  |
+-------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>name 是该表的主键（具有唯一值的列）。</p><p>这张表的每一行提供：国家名称、所属大陆、面积、人口和 GDP 值。</p></blockquote><p>如果一个国家满足下述两个条件之一，则认为该国是 <strong>大国</strong> ：</p><ul><li>面积至少为 300 万平方公里（即，<code>3000000 km2</code>），或者</li><li>人口至少为 2500 万（即 <code>25000000</code>）</li></ul><p>编写解决方案找出 <strong>大国</strong> 的国家名称、人口和面积。</p><p>按 <strong>任意顺序</strong> 返回结果表。</p><p>返回结果格式如下例所示。</p><p><strong>示例：</strong></p><blockquote><p><strong>输入：</strong></p><p>World 表：</p><p>World table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+-----------+---------+------------+--------------+
| name        | continent | area    | population | gdp          |
+-------------+-----------+---------+------------+--------------+
| Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |
| Albania     | Europe    | 28748   | 2831741    | 12960000000  |
| Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |
| Andorra     | Europe    | 468     | 78115      | 3712000000   |
| Angola      | Africa    | 1246700 | 20609294   | 100990000000 |
+-------------+-----------+---------+------------+--------------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+-------------+------------+---------+
| name        | population | area    |
+-------------+------------+---------+
| Afghanistan | 25500100   | 652230  |
| Algeria     | 37100000   | 2381741 |
+-------------+------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br><code>SELECT</code> 指定要返回的字段：<code>name</code>（国家名称）、<code>population</code>（人口）、<code>area</code>（面积）。 <code>FROM World</code> 指定数据来自 <code>World</code> 表。</p></li><li><p><strong>筛选条件</strong>：</p><ul><li><code>area &gt; 3000000</code>：筛选面积大于 3,000,000 的国家。</li><li><code>population &gt; 25000000</code>：筛选人口超过 25,000,000 的国家。</li><li><code>WHERE</code> 子句的两个条件用 <code>OR</code> 连接，表示满足任何一个都可以。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，查询的时间复杂度为 <code>O(n)</code>，因为需要遍历所有记录来评估条件。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与满足条件的记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li>加载数据：将数据加载到一个 Pandas <code>DataFrame</code> 中；</li><li>筛选条件：使用 Pandas 的布尔索引筛选出满足以下条件的记录： <ul><li><code>world[&#39;area&#39;] &gt;= 3000000</code></li><li>或者 <code>world[&#39;population&#39;] &gt;= 25000000</code></li></ul></li><li>选择列：筛选结果中保留需要的字段：<code>name</code>, <code>population</code>, 和 <code>area</code>。</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,31),y=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token keyword"},"SELECT"),e(" name"),n("span",{class:"token punctuation"},","),e(" population"),n("span",{class:"token punctuation"},","),e(` area
`),n("span",{class:"token keyword"},"FROM"),e(` World
`),n("span",{class:"token keyword"},"WHERE"),e(" area "),n("span",{class:"token operator"},">"),e(),n("span",{class:"token number"},"3000000"),e(),n("span",{class:"token operator"},"OR"),e(" population "),n("span",{class:"token operator"},">"),e(),n("span",{class:"token number"},"25000000"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"import"),e(" pandas "),n("span",{class:"token keyword"},"as"),e(` pd

`),n("span",{class:"token keyword"},"def"),e(),n("span",{class:"token function"},"big_countries"),n("span",{class:"token punctuation"},"("),e("world"),n("span",{class:"token punctuation"},":"),e(" pd"),n("span",{class:"token punctuation"},"."),e("DataFrame"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"-"),n("span",{class:"token operator"},">"),e(" pd"),n("span",{class:"token punctuation"},"."),e("DataFrame"),n("span",{class:"token punctuation"},":"),e(`
  `),n("span",{class:"token comment"},"# 转换为 DataFrame，筛选符合条件的记录"),e(`
  `),n("span",{class:"token keyword"},"return"),e(" world"),n("span",{class:"token punctuation"},"["),e(`
    `),n("span",{class:"token punctuation"},"("),e("world"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},">="),e(),n("span",{class:"token number"},"3000000"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"|"),e(),n("span",{class:"token punctuation"},"("),e("world"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'population'"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},">="),e(),n("span",{class:"token number"},"25000000"),n("span",{class:"token punctuation"},")"),e(`
  `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token string"},"'population'"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token string"},"'area'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function E(q,L){const d=i("font"),r=i("RouterLink"),l=i("ExternalLinkIcon"),c=i("CodeTabs");return p(),v("div",null,[h,n("p",null,[e("🟢 "),s(d,{color:"#15bd66"},{default:a(()=>[e("Easy")]),_:1}),e("  🔖  "),s(r,{to:"/tag/database.html"},{default:a(()=>[g]),_:1}),e("  🔗 "),n("a",k,[_,s(l)]),e(),n("a",f,[x,s(l)])]),A,s(c,{id:"205",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:a(({value:t,isActive:o})=>[e("MySQL")]),title1:a(({value:t,isActive:o})=>[e("Pandas")]),tab0:a(({value:t,isActive:o})=>[y]),tab1:a(({value:t,isActive:o})=>[w]),_:1})])}const C=u(b,[["render",E],["__file","0595.html.vue"]]);export{C as default};

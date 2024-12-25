import{_ as u,r as t,o as p,c as m,a as e,b as n,d as a,w as s,e as v}from"./app--GvfAkAr.js";const b={},h=e("h1",{id:"_1667-修复表中的名字",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1667-修复表中的名字","aria-hidden":"true"},"#"),n(" 1667. 修复表中的名字")],-1),k=e("code",null,"数据库",-1),_={href:"https://leetcode.cn/problems/fix-names-in-a-table",target:"_blank",rel:"noopener noreferrer"},g=e("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/fix-names-in-a-table",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"LeetCode",-1),y=v(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Table: <code>Users</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| name           | varchar |
+----------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_id is the primary key (column with unique values) for this table.</p><p>This table contains the ID and the name of the user. The name consists of only lowercase and uppercase characters.</p></blockquote><p>Write a solution to fix the names so that only the first character is uppercase and the rest are lowercase.</p><p>Return the result table ordered by <code>user_id</code>.</p><p>The result format is in the following example.</p><p><strong>Example 1:</strong></p><blockquote><p>Input:</p><p>Users table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Output:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>表： <code>Users</code></p><blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+----------------+---------+
| Column Name    | Type    |
+----------------+---------+
| user_id        | int     |
| name           | varchar |
+----------------+---------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>user_id 是该表的主键(具有唯一值的列)。</p><p>该表包含用户的 ID 和名字。名字仅由小写和大写字符组成。</p></blockquote><p>编写解决方案，修复名字，使得只有第一个字符是大写的，其余都是小写的。</p><p>返回按 <code>user_id</code> 排序的结果表。</p><p>返回结果格式示例如下。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>Users table:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | aLice |
| 2       | bOB   |
+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>+---------+-------+
| user_id | name  |
+---------+-------+
| 1       | Alice |
| 2       | Bob   |
+---------+-------+
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="mysql" tabindex="-1"><a class="header-anchor" href="#mysql" aria-hidden="true">#</a> MySQL</h3><ol><li><p><strong>返回字段</strong>：<br> 使用 <code>SELECT</code> 指定返回字段：</p><ul><li><code>user_id</code>：用户 ID。</li><li>修复后的 <code>name</code>，通过函数计算生成。</li></ul></li><li><p><strong>修复名字</strong>：<br> 使用 <code>CONCAT</code> 和字符串函数：</p><ul><li><code>UPPER(SUBSTRING(name, 1, 1))</code>：将名字的第一个字符转换为大写。</li><li><code>LOWER(SUBSTRING(name, 2))</code>：将名字从第二个字符开始的部分转换为小写。</li><li>将两部分拼接为正确的名字格式。</li></ul></li><li><p><strong>排序要求</strong>：<br> 按 <code>user_id</code> 进行升序排序。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，假设表中有 <code>n</code> 条记录，需要对每条记录执行字符串操作。</li><li><strong>空间复杂度</strong>：SQL 查询本身不占用额外空间，返回的结果占用的空间与记录数成正比。</li></ul><hr><h3 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h3><ol><li><p><strong>加载数据</strong>：<br> 将 <code>Users</code> 表加载到 Pandas 的 <code>DataFrame</code> 中。</p></li><li><p><strong>修复名字</strong>：<br> 使用 Pandas 的 <code>str.capitalize()</code> 方法将每个名字的首字母大写，其余字符小写。</p></li><li><p><strong>结果选择与排序</strong>：<br> 返回结果包含 <code>user_id</code> 和修复后的 <code>name</code>，按 <code>user_id</code> 升序排列。</p></li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,25),T=e("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[e("pre",{class:"language-sql"},[e("code",null,[e("span",{class:"token keyword"},"SELECT"),n(" user_id"),e("span",{class:"token punctuation"},","),n(`
       CONCAT`),e("span",{class:"token punctuation"},"("),n("UPPER"),e("span",{class:"token punctuation"},"("),n("SUBSTRING"),e("span",{class:"token punctuation"},"("),n("name"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token number"},"1"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},","),n(" LOWER"),e("span",{class:"token punctuation"},"("),n("SUBSTRING"),e("span",{class:"token punctuation"},"("),n("name"),e("span",{class:"token punctuation"},","),n(),e("span",{class:"token number"},"2"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token keyword"},"AS"),n(` name
`),e("span",{class:"token keyword"},"FROM"),n(` Users
`),e("span",{class:"token keyword"},"ORDER"),n(),e("span",{class:"token keyword"},"BY"),n(" user_id"),e("span",{class:"token punctuation"},";"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),S=e("div",{class:"language-python line-numbers-mode","data-ext":"py"},[e("pre",{class:"language-python"},[e("code",null,[e("span",{class:"token keyword"},"import"),n(" pandas "),e("span",{class:"token keyword"},"as"),n(` pd

`),e("span",{class:"token keyword"},"def"),n(),e("span",{class:"token function"},"fix_names"),e("span",{class:"token punctuation"},"("),n("users"),e("span",{class:"token punctuation"},":"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},")"),n(),e("span",{class:"token operator"},"-"),e("span",{class:"token operator"},">"),n(" pd"),e("span",{class:"token punctuation"},"."),n("DataFrame"),e("span",{class:"token punctuation"},":"),n(`
    `),e("span",{class:"token comment"},"# 修复名字格式"),n(`
    users`),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},"]"),n(),e("span",{class:"token operator"},"="),n(" users"),e("span",{class:"token punctuation"},"["),e("span",{class:"token string"},"'name'"),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},"."),e("span",{class:"token builtin"},"str"),e("span",{class:"token punctuation"},"."),n("capitalize"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),n(`
    `),e("span",{class:"token comment"},"# 返回结果并按 user_id 排序"),n(`
    `),e("span",{class:"token keyword"},"return"),n(" users"),e("span",{class:"token punctuation"},"."),n("sort_values"),e("span",{class:"token punctuation"},"("),n("by"),e("span",{class:"token operator"},"="),e("span",{class:"token string"},"'user_id'"),e("span",{class:"token punctuation"},")"),n(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1);function w(L,q){const d=t("font"),c=t("RouterLink"),o=t("ExternalLinkIcon"),r=t("CodeTabs");return p(),m("div",null,[h,e("p",null,[n("🟢 "),a(d,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),a(c,{to:"/tag/database.html"},{default:s(()=>[k]),_:1}),n("  🔗 "),e("a",_,[g,a(o)]),n(),e("a",x,[f,a(o)])]),y,a(r,{id:"177",data:[{id:"MySQL"},{id:"Pandas"}]},{title0:s(({value:i,isActive:l})=>[n("MySQL")]),title1:s(({value:i,isActive:l})=>[n("Pandas")]),tab0:s(({value:i,isActive:l})=>[T]),tab1:s(({value:i,isActive:l})=>[S]),_:1})])}const R=u(b,[["render",w],["__file","1667.html.vue"]]);export{R as default};

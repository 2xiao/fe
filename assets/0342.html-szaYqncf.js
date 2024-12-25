import{_ as d,r,o as u,c as k,a as n,b as e,d as t,w as s,f as h,e as m}from"./app--GvfAkAr.js";const _={},g=n("h1",{id:"_342-4-的幂",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_342-4-的幂","aria-hidden":"true"},"#"),e(" 342. 4 的幂")],-1),b=n("code",null,"位运算",-1),f=n("code",null,"递归",-1),v=n("code",null,"数学",-1),x={href:"https://leetcode.cn/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),w={href:"https://leetcode.com/problems/power-of-four",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"LeetCode",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em><code>true</code> if it is a power of four. Otherwise, return <code>false</code></em>.</p><p>An integer <code>n</code> is a power of four, if there exists an integer <code>x</code> such that <code>n == 4^x</code>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 16</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 5</p><p>Output: false</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 1</p><p>Output: true</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>Follow up:</strong> Could you solve it without loops/recursion?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个整数，写一个函数来判断它是否是 4 的幂次方。如果是，返回 <code>true</code> ；否则，返回 <code>false</code> 。</p><p>整数 <code>n</code> 是 4 的幂次方需满足：存在整数 <code>x</code> 使得 <code>n == 4^x</code></p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 16</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 1</p><p><strong>输出：</strong> true</p></blockquote><p><strong>提示：</strong></p><ul><li><code>-2^31 &lt;= n &lt;= 2^31 - 1</code></li></ul><p><strong>进阶：</strong> 你能不使用循环或者递归来完成本题吗？</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>抱歉，我理解错了问题。下面是关于判断一个数是否是 4 的幂次方的正确解题思路。</p><h2 id="解题思路-1" tabindex="-1"><a class="header-anchor" href="#解题思路-1" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-累除法" tabindex="-1"><a class="header-anchor" href="#思路一-累除法" aria-hidden="true">#</a> 思路一：累除法</h3><ol><li>如果 <code>n</code> 小于等于 0，直接返回 <code>false</code>，因为负数或零不可能是 4 的幂次方。</li><li>对于一个正整数，如果它是 4 的幂次方，那么它应该可以不断被 4 整除，直到结果为 1。</li><li>如果 <code>n</code> 不等于 1，并且能被 4 整除，就不断除以 4。 <ul><li>最终若得到 1，说明 <code>n</code> 是 4 的幂次方。</li><li>否则不是。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log_4(n))</code>，每次除以 4，直到结果为 1，最多需要对数次操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><hr><h3 id="思路二-位运算法" tabindex="-1"><a class="header-anchor" href="#思路二-位运算法" aria-hidden="true">#</a> 思路二：位运算法</h3><p>4 的幂次方具有一个特殊的性质：它的二进制表示形式只包含一个 <code>1</code>，并且这个 <code>1</code> 只能出现在偶数位上。例如，4 的幂次方的二进制形式如下：</p><ul><li>4^0 = 1 -&gt; <code>0001</code></li><li>4^1 = 4 -&gt; <code>0100</code></li><li>4^2 = 16 -&gt; <code>10000</code></li><li>4^3 = 64 -&gt; <code>1000000</code></li></ul><p>利用这一性质，可以通过位运算来判断一个数是否为 4 的幂次方：</p><ul><li><code>n &gt; 0</code>：<code>n</code> 必须是正数。</li><li><code>n &amp; (n - 1) === 0</code>：<code>n</code> 必须是 2 的幂次方。</li><li><code>n % 3 === 1</code>：这意味着 <code>n</code> 必须是 4 的幂次方，这是判断 <code>n</code> 是否是 4 的幂次方的关键条件。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，因为位运算是常数时间操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><hr><h3 id="思路三-数学公式法" tabindex="-1"><a class="header-anchor" href="#思路三-数学公式法" aria-hidden="true">#</a> 思路三：数学公式法</h3><ul><li>可以利用对数的性质，若 <code>n</code> 是 4 的幂次方，则对 <code>n</code> 取对数（底数为 4）后应该是整数。</li><li>公式：<code>log_4(n) = log(n) / log(4)</code></li><li>如果 <code>log_4(n)</code> 是整数，则 <code>n</code> 是 4 的幂次方。</li></ul><h4 id="复杂度分析-2" tabindex="-1"><a class="header-anchor" href="#复杂度分析-2" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(1)</code>，只需要计算对数和指数操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用常数空间。</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2>',45),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("boolean"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"isPowerOfFour"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"<="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"%"),e(),n("span",{class:"token number"},"4"),e(),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		n `),n("span",{class:"token operator"},"/="),e(),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" n "),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("boolean"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"isPowerOfFour"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" n "),n("span",{class:"token operator"},">"),e(),n("span",{class:"token number"},"0"),e(),n("span",{class:"token operator"},"&&"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"&"),e(),n("span",{class:"token punctuation"},"("),e("n "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"0"),e(),n("span",{class:"token operator"},"&&"),e(" n "),n("span",{class:"token operator"},"%"),e(),n("span",{class:"token number"},"3"),e(),n("span",{class:"token operator"},"==="),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("boolean"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"isPowerOfFour"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" n "),n("span",{class:"token operator"},">"),e(),n("span",{class:"token number"},"0"),e(),n("span",{class:"token operator"},"&&"),e(" Number"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"isInteger"),n("span",{class:"token punctuation"},"("),e("Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),e("n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"/"),e(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"4"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),I=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"231",-1),L=n("td",{style:{"text-align":"left"}},"2 的幂",-1),V={style:{"text-align":"center"}},F={style:{"text-align":"left"}},B=n("code",null,"位运算",-1),P=n("code",null,"递归",-1),T=n("code",null,"数学",-1),M=n("td",{style:{"text-align":"center"}},"🟢",-1),R={style:{"text-align":"center"}},G={href:"https://leetcode.cn/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/power-of-two",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"326",-1),D=n("td",{style:{"text-align":"left"}},"3 的幂",-1),H={style:{"text-align":"center"}},J={style:{"text-align":"left"}},K=n("code",null,"递归",-1),Q=n("code",null,"数学",-1),U=n("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/power-of-three",target:"_blank",rel:"noopener noreferrer"};function Z($,nn){const i=r("font"),a=r("RouterLink"),o=r("ExternalLinkIcon"),p=r("CodeTabs");return u(),k("div",null,[g,n("p",null,[e("🟢 "),t(i,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1}),e("  🔖  "),t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[b]),_:1}),e(),t(a,{to:"/tag/recursion.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[v]),_:1}),e("  🔗 "),n("a",x,[y,t(o)]),e(),n("a",w,[O,t(o)])]),q,t(p,{id:"275",data:[{id:"累除法"},{id:"位运算法"},{id:"数学公式法"}]},{title0:s(({value:l,isActive:c})=>[e("累除法")]),title1:s(({value:l,isActive:c})=>[e("位运算法")]),title2:s(({value:l,isActive:c})=>[e("数学公式法")]),tab0:s(({value:l,isActive:c})=>[j]),tab1:s(({value:l,isActive:c})=>[C]),tab2:s(({value:l,isActive:c})=>[A]),_:1}),E,h(" prettier-ignore "),n("table",null,[I,n("tbody",null,[n("tr",null,[N,L,n("td",V,[t(a,{to:"/problem/0231.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",F,[t(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[B]),_:1}),e(),t(a,{to:"/tag/recursion.html"},{default:s(()=>[P]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[T]),_:1})]),M,n("td",R,[n("a",G,[e("🀄️"),t(o)]),e(),n("a",S,[e("🔗"),t(o)])])]),n("tr",null,[z,D,n("td",H,[t(a,{to:"/problem/0326.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",J,[t(a,{to:"/tag/recursion.html"},{default:s(()=>[K]),_:1}),e(),t(a,{to:"/tag/math.html"},{default:s(()=>[Q]),_:1})]),U,n("td",W,[n("a",X,[e("🀄️"),t(o)]),e(),n("a",Y,[e("🔗"),t(o)])])])])])])}const tn=d(_,[["render",Z],["__file","0342.html.vue"]]);export{tn as default};

import{_ as r,r as c,o as d,c as k,a as n,b as t,d as s,w as e,f as q,e as z}from"./app-g2EQZ7P9.js";const h={},m=n("h1",{id:"_412-fizz-buzz",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_412-fizz-buzz","aria-hidden":"true"},"#"),t(" 412. Fizz Buzz")],-1),b=n("code",null,"数学",-1),_=n("code",null,"字符串",-1),g=n("code",null,"模拟",-1),f={href:"https://leetcode.cn/problems/fizz-buzz",target:"_blank",rel:"noopener noreferrer"},v=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/fizz-buzz",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),x=z('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given an integer <code>n</code>, return <em>a string array</em><code>answer</code> <em>(<strong>1-indexed</strong>) where</em>:</p><ul><li><code>answer[i] == &quot;FizzBuzz&quot;</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.</li><li><code>answer[i] == &quot;Fizz&quot;</code> if <code>i</code> is divisible by <code>3</code>.</li><li><code>answer[i] == &quot;Buzz&quot;</code> if <code>i</code> is divisible by <code>5</code>.</li><li><code>answer[i] == i</code> (as a string) if none of the above conditions are true.</li></ul><p><strong>Example 1:</strong></p><blockquote><p>Input: n = 3</p><p>Output: [&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: n = 5</p><p>Output: [&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;]</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: n = 15</p><p>Output: [&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;,&quot;Fizz&quot;,&quot;7&quot;,&quot;8&quot;,&quot;Fizz&quot;,&quot;Buzz&quot;,&quot;11&quot;,&quot;Fizz&quot;,&quot;13&quot;,&quot;14&quot;,&quot;FizzBuzz&quot;]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数 <code>n</code> ，找出从 <code>1</code> 到 <code>n</code> 各个整数的 Fizz Buzz 表示，并用字符串数组 <code>answer</code>（<strong>下标从 1 开始</strong> ）返回结果，其中：</p><ul><li><code>answer[i] == &quot;FizzBuzz&quot;</code> 如果 <code>i</code> 同时是 <code>3</code> 和 <code>5</code> 的倍数。</li><li><code>answer[i] == &quot;Fizz&quot;</code> 如果 <code>i</code> 是 <code>3</code> 的倍数。</li><li><code>answer[i] == &quot;Buzz&quot;</code> 如果 <code>i</code> 是 <code>5</code> 的倍数。</li><li><code>answer[i] == i</code> （以字符串形式）如果上述条件全不满足。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> n = 3</p><p><strong>输出：</strong>[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;]</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> n = 5</p><p><strong>输出：</strong>[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> n = 15</p><p><strong>输出：</strong>[&quot;1&quot;,&quot;2&quot;,&quot;Fizz&quot;,&quot;4&quot;,&quot;Buzz&quot;,&quot;Fizz&quot;,&quot;7&quot;,&quot;8&quot;,&quot;Fizz&quot;,&quot;Buzz&quot;,&quot;11&quot;,&quot;Fizz&quot;,&quot;13&quot;,&quot;14&quot;,&quot;FizzBuzz&quot;]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= n &lt;= 10^4</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li>初始化一个空数组 <code>answer</code>，用于存储结果。</li><li>遍历从 <code>1</code> 到 <code>n</code> 的每个数字，使用条件语句判断当前数字是否符合以下条件： <ul><li>如果同时是 3 和 5 的倍数，将 <code>&quot;FizzBuzz&quot;</code> 插入数组。</li><li>如果是 3 的倍数，将 <code>&quot;Fizz&quot;</code> 插入数组。</li><li>如果是 5 的倍数，将 <code>&quot;Buzz&quot;</code> 插入数组。</li><li>如果不满足以上条件，将数字本身（字符串形式）插入数组。</li></ul></li><li>返回结果数组。</li></ol><p>我们可以进一步优化 <strong>可读性</strong> 和 <strong>效率</strong>，比如使用字符串拼接，减少条件判断次数，见优化版代码。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，遍历从 <code>1</code> 到 <code>n</code> 的所有整数，每个整数都只判断一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，结果数组需要存储 <code>n</code> 个元素。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',28),F=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fizzBuzz"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" answer "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),t(),n("span",{class:"token operator"},"&&"),t(" i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"5"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			answer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'FizzBuzz'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			answer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Fizz'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"5"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			answer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Buzz'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			answer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" answer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"n"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"fizzBuzz"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"n"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" answer "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<="),t(" n"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" str "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"3"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(" str "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token string"},"'Fizz'"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"%"),t(),n("span",{class:"token number"},"5"),t(),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),t(" str "),n("span",{class:"token operator"},"+="),t(),n("span",{class:"token string"},"'Buzz'"),n("span",{class:"token punctuation"},";"),t(`
		answer`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("str "),n("span",{class:"token operator"},"||"),t(" i"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toString"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" answer"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1195",-1),I=n("td",{style:{"text-align":"left"}},"交替打印字符串",-1),L=n("td",{style:{"text-align":"center"}},null,-1),N={style:{"text-align":"left"}},O=n("code",null,"多线程",-1),V=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/fizz-buzz-multithreaded",target:"_blank",rel:"noopener noreferrer"},T={href:"https://leetcode.com/problems/fizz-buzz-multithreaded",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"2525",-1),G=n("td",{style:{"text-align":"left"}},"根据规则将箱子分类",-1),D=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"数学",-1),K=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/categorize-box-according-to-criteria",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/categorize-box-according-to-criteria",target:"_blank",rel:"noopener noreferrer"};function U(W,X){const i=c("font"),a=c("RouterLink"),o=c("ExternalLinkIcon"),p=c("CodeTabs");return d(),k("div",null,[m,n("p",null,[t("🟢 "),s(i,{color:"#15bd66"},{default:e(()=>[t("Easy")]),_:1}),t("  🔖  "),s(a,{to:"/tag/math.html"},{default:e(()=>[b]),_:1}),t(),s(a,{to:"/tag/string.html"},{default:e(()=>[_]),_:1}),t(),s(a,{to:"/tag/simulation.html"},{default:e(()=>[g]),_:1}),t("  🔗 "),n("a",f,[v,s(o)]),t(),n("a",y,[w,s(o)])]),x,s(p,{id:"211",data:[{id:"普通版"},{id:"优化版"}]},{title0:e(({value:l,isActive:u})=>[t("普通版")]),title1:e(({value:l,isActive:u})=>[t("优化版")]),tab0:e(({value:l,isActive:u})=>[F]),tab1:e(({value:l,isActive:u})=>[B]),_:1}),C,q(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[j,I,L,n("td",N,[s(a,{to:"/tag/concurrency.html"},{default:e(()=>[O]),_:1})]),V,n("td",A,[n("a",S,[t("🀄️"),s(o)]),t(),n("a",T,[t("🔗"),s(o)])])]),n("tr",null,[R,G,D,n("td",H,[s(a,{to:"/tag/math.html"},{default:e(()=>[J]),_:1})]),K,n("td",M,[n("a",P,[t("🀄️"),s(o)]),t(),n("a",Q,[t("🔗"),s(o)])])])])])])}const Z=r(h,[["render",U],["__file","0412.html.vue"]]);export{Z as default};

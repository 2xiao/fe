import{_ as u,r as l,o as d,c as k,a as t,b as n,d as e,w as s,f as m,e as h}from"./app-MkGfDfkx.js";const _={},g=t("h1",{id:"_66-加一",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_66-加一","aria-hidden":"true"},"#"),n(" 66. 加一")],-1),b=t("code",null,"数组",-1),f=t("code",null,"数学",-1),y={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},w=t("code",null,"LeetCode",-1),T=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a <strong>large integer</strong> represented as an integer array <code>digits</code>, where each <code>digits[i]</code> is the <code>ith</code> digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading <code>0</code>&#39;s.</p><p>Increment the large integer by one and return <em>the resulting array of digits</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: digits = [1,2,3]</p><p>Output: [1,2,4]</p><p>Explanation: The array represents the integer 123.</p><p>Incrementing by one gives 123 + 1 = 124.</p><p>Thus, the result should be [1,2,4].</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: digits = [4,3,2,1]</p><p>Output: [4,3,2,2]</p><p>Explanation: The array represents the integer 4321.</p><p>Incrementing by one gives 4321 + 1 = 4322.</p><p>Thus, the result should be [4,3,2,2].</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: digits = [9]</p><p>Output: [1,0]</p><p>Explanation: The array represents the integer 9.</p><p>Incrementing by one gives 9 + 1 = 10.</p><p>Thus, the result should be [1,0].</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= digits.length &lt;= 100</code></li><li><code>0 &lt;= digits[i] &lt;= 9</code></li><li><code>digits</code> does not contain any leading <code>0</code>&#39;s.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。你可以假设除了整数 0 之外，这个整数不会以零开头。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ul><li>给出一个数组，代表一个十进制数，数组的 <code>0</code> 下标是十进制数的高位。要求计算这个十进制数加一以后的结果。</li><li>简单的模拟题。从数组尾部开始往前扫，逐位进位即可。最高位如果还有进位需要在数组里面第 <code>0</code> 位再插入一个 <code>1</code> 。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',16),E=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"digits"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"plusOne"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"digits"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"let"),n(" carry "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 进位"),n(`
		i `),t("span",{class:"token operator"},"="),n(" digits"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token comment"},"// 从数组尾部开始往前扫"),n(`
		sum `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token comment"},"// 当不再有进位时，循环结束"),n(`
	`),t("span",{class:"token keyword"},"while"),n(),t("span",{class:"token punctuation"},"("),n("carry "),t("span",{class:"token operator"},"!=="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token comment"},"// 最高位如果还有进位，在数组里面第 0 位再插入一个 1"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			digits`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),n("carry"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
			carry `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"else"),n(),t("span",{class:"token punctuation"},"{"),n(`
			`),t("span",{class:"token comment"},"// 模拟加法过程"),n(`
			sum `),t("span",{class:"token operator"},"="),n(" carry "),t("span",{class:"token operator"},"+"),n(" digits"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
			carry `),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"("),n("sum "),t("span",{class:"token operator"},"/"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"|"),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
			digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(" sum "),t("span",{class:"token operator"},"%"),n(),t("span",{class:"token number"},"10"),t("span",{class:"token punctuation"},";"),n(`
			i`),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`
	`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),I=t("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[t("pre",{class:"language-javascript"},[t("code",null,[t("span",{class:"token doc-comment comment"},[n(`/**
 * `),t("span",{class:"token keyword"},"@param"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(),t("span",{class:"token parameter"},"digits"),n(`
 * `),t("span",{class:"token keyword"},"@return"),n(),t("span",{class:"token class-name"},[t("span",{class:"token punctuation"},"{"),n("number"),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"}")]),n(`
 */`)]),n(`
`),t("span",{class:"token keyword"},"var"),n(),t("span",{class:"token function-variable function"},"plusOne"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token keyword"},"function"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"digits"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
	`),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(" digits"),t("span",{class:"token punctuation"},"."),n("length "),t("span",{class:"token operator"},"-"),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},">="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i"),t("span",{class:"token operator"},"--"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
		`),t("span",{class:"token comment"},"// digits[i] 小于 9 时，不会发生进位，直接求和，并停止遍历"),n(`
		`),t("span",{class:"token keyword"},"if"),n(),t("span",{class:"token punctuation"},"("),n("digits"),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"9"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
			digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"+="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},";"),n(`
			`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
		`),t("span",{class:"token punctuation"},"}"),n(`

		`),t("span",{class:"token comment"},"// 否则发生进位，将 digits[i] 直接改为 0，继续遍历高位"),n(`
		digits`),t("span",{class:"token punctuation"},"["),n("i"),t("span",{class:"token punctuation"},"]"),n(),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(`
	`),t("span",{class:"token punctuation"},"}"),n(`

	`),t("span",{class:"token comment"},"// 最高位如果还有进位，在数组里面第 0 位再插入一个 1"),n(`
	digits`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"unshift"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`

	`),t("span",{class:"token keyword"},"return"),n(" digits"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("div",{class:"line-numbers","aria-hidden":"true"},[t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"}),t("div",{class:"line-number"})])],-1),C=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),j=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),q=t("td",{style:{"text-align":"center"}},"43",-1),L=t("td",{style:{"text-align":"left"}},"字符串相乘",-1),N={style:{"text-align":"center"}},O={style:{"text-align":"left"}},V=t("code",null,"数学",-1),A=t("code",null,"字符串",-1),B=t("code",null,"模拟",-1),R=t("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},Y={href:"https://leetcode.cn/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"67",-1),F=t("td",{style:{"text-align":"left"}},"二进制求和",-1),G={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=t("code",null,"位运算",-1),K=t("code",null,"数学",-1),M=t("code",null,"字符串",-1),P=t("code",null,"1+",-1),Q=t("td",{style:{"text-align":"center"}},"🟢",-1),U={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/add-binary",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"369",-1),$=t("td",{style:{"text-align":"left"}},"给单链表加一 🔒",-1),tt={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},et=t("code",null,"链表",-1),st=t("code",null,"数学",-1),at=t("td",{style:{"text-align":"center"}},"🟠",-1),ot={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/plus-one-linked-list",target:"_blank",rel:"noopener noreferrer"},ct={href:"https://leetcode.com/problems/plus-one-linked-list",target:"_blank",rel:"noopener noreferrer"},it=t("td",{style:{"text-align":"center"}},"989",-1),rt=t("td",{style:{"text-align":"left"}},"数组形式的整数加法",-1),pt={style:{"text-align":"center"}},ut={style:{"text-align":"left"}},dt=t("code",null,"数组",-1),kt=t("code",null,"数学",-1),mt=t("td",{style:{"text-align":"center"}},"🟢",-1),ht={style:{"text-align":"center"}},_t={href:"https://leetcode.cn/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/add-to-array-form-of-integer",target:"_blank",rel:"noopener noreferrer"},bt=t("td",{style:{"text-align":"center"}},"2571",-1),ft=t("td",{style:{"text-align":"left"}},"将整数减少到零需要的最少操作数",-1),yt=t("td",{style:{"text-align":"center"}},null,-1),vt={style:{"text-align":"left"}},xt=t("code",null,"贪心",-1),wt=t("code",null,"位运算",-1),Tt=t("code",null,"动态规划",-1),Et=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/minimum-operations-to-reduce-an-integer-to-0",target:"_blank",rel:"noopener noreferrer"},jt={href:"https://leetcode.com/problems/minimum-operations-to-reduce-an-integer-to-0",target:"_blank",rel:"noopener noreferrer"};function qt(Lt,Nt){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),p=l("CodeTabs");return d(),k("div",null,[g,t("p",null,[n("🟢 "),e(r,{color:"#15bd66"},{default:s(()=>[n("Easy")]),_:1}),n("  🔖  "),e(a,{to:"/tag/array.html"},{default:s(()=>[b]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[f]),_:1}),n("  🔗 "),t("a",y,[v,e(o)]),n(),t("a",x,[w,e(o)])]),T,e(p,{id:"119",data:[{id:"思路一"},{id:"思路二"}]},{title0:s(({value:c,isActive:i})=>[n("思路一")]),title1:s(({value:c,isActive:i})=>[n("思路二")]),tab0:s(({value:c,isActive:i})=>[E]),tab1:s(({value:c,isActive:i})=>[I]),_:1}),C,m(" prettier-ignore "),t("table",null,[j,t("tbody",null,[t("tr",null,[q,L,t("td",N,[e(a,{to:"/problem/0043.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",O,[e(a,{to:"/tag/math.html"},{default:s(()=>[V]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[A]),_:1}),n(),e(a,{to:"/tag/simulation.html"},{default:s(()=>[B]),_:1})]),R,t("td",S,[t("a",Y,[n("🀄️"),e(o)]),n(),t("a",z,[n("🔗"),e(o)])])]),t("tr",null,[D,F,t("td",G,[e(a,{to:"/problem/0067.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",H,[e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[J]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[K]),_:1}),n(),e(a,{to:"/tag/string.html"},{default:s(()=>[M]),_:1}),n(),P]),Q,t("td",U,[t("a",W,[n("🀄️"),e(o)]),n(),t("a",X,[n("🔗"),e(o)])])]),t("tr",null,[Z,$,t("td",tt,[e(a,{to:"/problem/0369.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",nt,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[et]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[st]),_:1})]),at,t("td",ot,[t("a",lt,[n("🀄️"),e(o)]),n(),t("a",ct,[n("🔗"),e(o)])])]),t("tr",null,[it,rt,t("td",pt,[e(a,{to:"/problem/0989.html"},{default:s(()=>[n("[✓]")]),_:1})]),t("td",ut,[e(a,{to:"/tag/array.html"},{default:s(()=>[dt]),_:1}),n(),e(a,{to:"/tag/math.html"},{default:s(()=>[kt]),_:1})]),mt,t("td",ht,[t("a",_t,[n("🀄️"),e(o)]),n(),t("a",gt,[n("🔗"),e(o)])])]),t("tr",null,[bt,ft,yt,t("td",vt,[e(a,{to:"/tag/greedy.html"},{default:s(()=>[xt]),_:1}),n(),e(a,{to:"/tag/bit-manipulation.html"},{default:s(()=>[wt]),_:1}),n(),e(a,{to:"/tag/dynamic-programming.html"},{default:s(()=>[Tt]),_:1})]),Et,t("td",It,[t("a",Ct,[n("🀄️"),e(o)]),n(),t("a",jt,[n("🔗"),e(o)])])])])])])}const Vt=u(_,[["render",qt],["__file","0066.html.vue"]]);export{Vt as default};

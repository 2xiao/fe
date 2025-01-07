import{_ as u,r as o,o as d,c as k,a as n,b as s,d as a,w as e,e as m}from"./app-WL8GPOUO.js";const b={},h=n("h1",{id:"_56-ii-数组中数字出现的次数-ii",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_56-ii-数组中数字出现的次数-ii","aria-hidden":"true"},"#"),s(" 56-II. 数组中数字出现的次数 II")],-1),v=n("code",null,"位运算",-1),_=n("code",null,"数组",-1),w={href:"https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),f=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>教学过程中，教练示范一次，学员跟做三次。该过程被混乱剪辑后，记录于数组 <code>actions</code>，其中 <code>actions[i]</code> 表示做出该动作的人员编号。请返回教练的编号。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> actions = [5, 7, 5, 5]</p><p><strong>输出：</strong> 7</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> actions = [12, 1, 6, 12, 6, 12, 6]</p><p><strong>输出：</strong> 1</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= actions.length &lt;= 10000</code></li><li><code>1 &lt;= actions[i] &lt; 2^31</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-位运算" tabindex="-1"><a class="header-anchor" href="#思路一-位运算" aria-hidden="true">#</a> 思路一：位运算</h3><ol><li>使用两个变量 <code>ones</code> 和 <code>twos</code> 来分别记录当前位中出现 1 次和 2 次的数字，初始化为 <code>0</code>；</li><li>遍历数组中的每一个数字，更新 <code>ones</code> 和 <code>twos</code> 的状态；</li><li>使用位运算更新 <code>twos</code>，只在 <code>ones</code> 中存在的数字中增加计数，这样可以防止将已经出现 3 次的数字再次计入；</li></ol><ul><li><code>twos |= ones &amp; num</code>: 将 <code>twos</code> 中的位更新为那些同时在 <code>ones</code> 和 <code>num</code> 中为 <code>1</code> 的位；</li><li><code>ones &amp; num</code>: 这部分计算在 <code>ones</code> 和 <code>num</code> 中都为 <code>1</code> 的位，结果是一个新的整数；</li><li><code>twos |=</code>: 这部分是将计算得到的结果与 <code>twos</code> 进行按位或（OR）操作，更新 <code>twos</code> 的值；</li></ul><ol start="4"><li>使用异或运算更新 <code>ones</code>，添加当前数字；</li></ol><ul><li><code>ones ^= num</code>: 任何一个数字异或它自己都等于 <code>0</code> (<code>x ^ x = 0</code>)，出现两次的数字在异或中会被抵消掉；</li></ul><ol start="5"><li><p><code>threes</code> 变量通过 <code>ones &amp; twos</code> 计算得出，表示哪些数字出现了 3 次；</p></li><li><p>使用位清除操作将这些数字从 <code>ones</code> 和 <code>twos</code> 中移除，<code>ones &amp;= ~threes</code>；</p></li></ol><ul><li><code>~threes</code>: 这是 <code>threes</code> 的按位取反（bitwise NOT），将所有的二进制位反转。即，如果 <code>threes</code> 中某个位置是 <code>1</code>，那么 <code>~threes</code> 中该位置就是 <code>0</code>，反之亦然。</li><li><code>ones</code> 中的每一位和 <code>~threes</code> 中的每一位进行按位与（AND）操作。</li><li>如果 <code>threes</code> 中的某一位是 <code>1</code>，那么 <code>~threes</code> 中的对应位是 <code>0</code>，因此 <code>ones</code> 的该位将被置为 <code>0</code>。</li><li>如果 <code>threes</code> 中的某一位是 <code>0</code>，那么 <code>~threes</code> 中的对应位是 <code>1</code>，因此 <code>ones</code> 的该位保持不变。</li></ul><ol start="7"><li>在遍历完成后，<code>ones</code> 中的值就是只出现一次的数字。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，只需遍历数组一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数级别的额外空间。</li></ul><hr><h3 id="思路二-位运算" tabindex="-1"><a class="header-anchor" href="#思路二-位运算" aria-hidden="true">#</a> 思路二：位运算</h3><ol><li><strong>位计数</strong>：初始化一个大小为 32 的数组 <code>count</code>（因为整数通常是 32 位的），用来计数每个位上 <code>1</code> 出现的次数；</li><li><strong>遍历</strong>：遍历数组，对于每个数，更新 <code>count</code> 每个位上 1 的个数；</li><li><strong>取模</strong>：对于每个位，如果该位的计数可以被 <code>3</code> 整除，说明该位不是唯一的数的一部分；否则，说明该位是唯一的数的一部分；</li><li><strong>构造结果</strong>：计算结果，根据计数结果构造只出现一次的数；</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析：</h4><ul><li><strong>时间复杂度</strong>: <code>O(n)</code>，其中 <code>n</code> 是数组的长度，需要遍历数组两次。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，只使用了常量的额外空间来存储计数数组（大小为 32）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),y=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"actions"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"trainingPlan"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" ones "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),s(`
		twos `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token comment"},"// 更新 twos：只记录在 ones 中已经出现过的数字"),s(`
		twos `),n("span",{class:"token operator"},"|="),s(" ones "),n("span",{class:"token operator"},"&"),s(" num"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 更新 ones：将当前数字加入 ones"),s(`
		ones `),n("span",{class:"token operator"},"^="),s(" num"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 将出现 3 次的数字从 ones 和 twos 中移除"),s(`
		`),n("span",{class:"token keyword"},"const"),s(" threes "),n("span",{class:"token operator"},"="),s(" ones "),n("span",{class:"token operator"},"&"),s(" twos"),n("span",{class:"token punctuation"},";"),s(`
		ones `),n("span",{class:"token operator"},"&="),s(),n("span",{class:"token operator"},"~"),s("threes"),n("span",{class:"token punctuation"},";"),s(`
		twos `),n("span",{class:"token operator"},"&="),s(),n("span",{class:"token operator"},"~"),s("threes"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" ones"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 结果在 ones 中"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"actions"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"trainingPlan"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 统计每个位上1的个数"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"const"),s(" num "),n("span",{class:"token keyword"},"of"),s(" actions"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			count`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},">>"),s(" i"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"&"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 统计第i位上的1的个数"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" result "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token comment"},"// 通过计数结果构造数返回值"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(),n("span",{class:"token number"},"32"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("count"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"%"),s(),n("span",{class:"token number"},"3"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			result `),n("span",{class:"token operator"},"|="),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},"<<"),s(" i"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" result"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function j(A,I){const i=o("font"),l=o("RouterLink"),r=o("ExternalLinkIcon"),p=o("CodeTabs");return d(),k("div",null,[h,n("p",null,[s("🟠 "),a(i,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(l,{to:"/tag/bit-manipulation.html"},{default:e(()=>[v]),_:1}),s(),a(l,{to:"/tag/array.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",w,[g,a(r)])]),f,a(p,{id:"203",data:[{id:"思路一"},{id:"思路二"}]},{title0:e(({value:t,isActive:c})=>[s("思路一")]),title1:e(({value:t,isActive:c})=>[s("思路二")]),tab0:e(({value:t,isActive:c})=>[y]),tab1:e(({value:t,isActive:c})=>[x]),_:1})])}const O=u(b,[["render",j],["__file","jz_offer_56_2.html.vue"]]);export{O as default};

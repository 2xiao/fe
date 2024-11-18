import{_ as i,r as e,o as k,c as d,a as n,b as s,d as t,w as a,e as m}from"./app-Ob52y8QZ.js";const b={},h=n("h1",{id:"_66-构建乘积数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_66-构建乘积数组","aria-hidden":"true"},"#"),s(" 66. 构建乘积数组")],-1),v=n("code",null,"数组",-1),y=n("code",null,"前缀和",-1),f={href:"https://leetcode.cn/problems/gou-jian-cheng-ji-shu-zu-lcof",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>为了深入了解这些生物群体的生态特征，你们进行了大量的实地观察和数据采集。数组 <code>arrayA</code> 记录了各个生物群体数量数据，其中 <code>arrayA[i]</code> 表示第 <code>i</code> 个生物群体的数量。请返回一个数组 <code>arrayB</code>，该数组为基于数组 <code>arrayA</code> 中的数据计算得出的结果，其中 <code>arrayB[i]</code> 表示将第 <code>i</code> 个生物群体的数量从总体中排除后的其他数量的乘积。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> arrayA = [2, 4, 6, 8, 10]</p><p><strong>输出：</strong>[1920, 960, 640, 480, 384]</p></blockquote><p><strong>提示：</strong></p><ul><li>所有元素乘积之和不会溢出 32 位整数</li><li><code>arrayA.length &lt;= 100000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-前缀积" tabindex="-1"><a class="header-anchor" href="#思路一-前缀积" aria-hidden="true">#</a> 思路一：前缀积</h3><p>这个问题可以通过 <strong>前缀积</strong> 和 <strong>后缀积</strong> 来解决，避免直接计算每个位置的乘积，从而降低时间复杂度。</p><ol><li>可以将这个问题分解为两个阶段： <ul><li>计算每个元素之前所有元素的乘积（<strong>前缀积</strong>）；</li><li>计算每个元素之后所有元素的乘积（<strong>后缀积</strong>）；</li></ul></li><li>计算前缀积： <ul><li>从左到右遍历 <code>arrayA</code>，用变量 <code>prefix</code> 记录当前元素之前的所有元素的乘积，并将 <code>prefix</code> 存入 <code>arrayB[i]</code> 中；</li></ul></li><li>计算后缀积： <ul><li>从右到左遍历 <code>arrayA</code>，用变量 <code>suffix</code> 记录当前元素之后的所有元素的乘积，并将 <code>suffix</code> 与之前计算得到的前缀积 <code>arrayB[i]</code> 相乘，存入 <code>arrayB</code> 中；</li></ul></li><li>最终返回结果数组 <code>arrayB</code>；</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，前缀积和后缀积的计算各需要一次线性扫描。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只用了一个 <code>arrayB</code> 数组来存储结果，因此空间复杂度为 <code>O(1)</code>（不计入输出数组的情况下，使用了常数空间）。</li></ul><hr><h3 id="思路二-除法" tabindex="-1"><a class="header-anchor" href="#思路二-除法" aria-hidden="true">#</a> 思路二：除法</h3><ol><li><p><strong>统计零的个数</strong>：</p><ul><li>遍历数组 <code>arrayA</code>，统计其中零的数量 <code>zeroCount</code>，并同时计算非零元素的乘积 <code>totalProduct</code>。</li></ul></li><li><p><strong>处理不同的情况</strong>：</p><ul><li><strong>无零的情况 (<code>zeroCount == 0</code>)</strong>：直接返回 <code>totalProduct</code> 除以每个元素，得到 <code>arrayB[i] = totalProduct / arrayA[i]</code>。</li><li><strong>有一个零的情况 (<code>zeroCount == 1</code>)</strong>：返回的结果数组中，只有对应于零的位置的元素是 <code>totalProduct</code>，其余元素为零。</li><li><strong>多个零的情况 (<code>zeroCount &gt; 1</code>)</strong>：所有的元素都为零，返回一个全为零的数组。</li></ul></li><li><p><strong>返回结果</strong>：根据不同情况构建并返回结果数组 <code>arrayB</code>。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，统计零的个数及构造结果数组，都需要一次线性扫描。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了存储结果的输出数组外，未使用额外的数组（不计入输出数组的情况下）。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',18),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arrayA"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"statisticalResult"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arrayA"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" n "),n("span",{class:"token operator"},"="),s(" arrayA"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" arrayB "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token comment"},"// 前缀积"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" prefix "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		arrayB`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" prefix"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 存储当前元素之前的乘积"),s(`
		prefix `),n("span",{class:"token operator"},"*="),s(" arrayA"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 更新前缀积"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token comment"},"// 后缀积"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" suffix "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(" n "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		arrayB`),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"*="),s(" suffix"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 将后缀积乘入结果数组"),s(`
		suffix `),n("span",{class:"token operator"},"*="),s(" arrayA"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 更新后缀积"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" arrayB"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"arrayA"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"statisticalResult"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"arrayA"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" zoreCount "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" totalProduct "),n("span",{class:"token operator"},"="),s(" arrayA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reduce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("acc"),n("span",{class:"token punctuation"},","),s(" cur")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("cur "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			zoreCount`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			acc `),n("span",{class:"token operator"},"*="),s(" cur"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" acc"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("zoreCount "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" arrayA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" totalProduct "),n("span",{class:"token operator"},"/"),s(" num"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("zoreCount "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" arrayA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"num"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"("),s("num "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"?"),s(" totalProduct "),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" arrayA"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function A(B,C){const r=e("font"),l=e("RouterLink"),p=e("ExternalLinkIcon"),u=e("CodeTabs");return k(),d("div",null,[h,n("p",null,[s("🟠 "),t(r,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(l,{to:"/tag/array.html"},{default:a(()=>[v]),_:1}),s(),t(l,{to:"/tag/prefix-sum.html"},{default:a(()=>[y]),_:1}),s("  🔗 "),n("a",f,[g,t(p)])]),_,t(u,{id:"173",data:[{id:"前缀积"},{id:"除法"}]},{title0:a(({value:o,isActive:c})=>[s("前缀积")]),title1:a(({value:o,isActive:c})=>[s("除法")]),tab0:a(({value:o,isActive:c})=>[w]),tab1:a(({value:o,isActive:c})=>[x]),_:1})])}const j=i(b,[["render",A],["__file","jz_offer_66_1.html.vue"]]);export{j as default};

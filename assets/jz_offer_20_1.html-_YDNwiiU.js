import{_ as u,r as e,o as d,c as k,a as n,b as s,d as t,w as a,e as m}from"./app--GvfAkAr.js";const h={},b=n("h1",{id:"_20-表示数值的字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_20-表示数值的字符串","aria-hidden":"true"},"#"),s(" 20. 表示数值的字符串")],-1),g=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p><strong>有效数字</strong> （按顺序）可以分成以下几个部分：</p><ol><li>若干空格</li><li>一个 <strong>小数</strong> 或者 <strong>整数</strong></li><li>（可选）一个 <code>&#39;e&#39;</code> 或 <code>&#39;E&#39;</code> ，后面跟着一个 <strong>整数</strong></li><li>若干空格</li></ol><p><strong>小数</strong> （按顺序）可以分成以下几个部分：</p><ol><li>（可选）一个符号字符（<code>&#39;+&#39;</code> 或 <code>&#39;-&#39;</code>）</li><li>下述格式之一： <ol><li>至少一位数字，后面跟着一个点 <code>&#39;.&#39;</code></li><li>至少一位数字，后面跟着一个点 <code>&#39;.&#39;</code> ，后面再跟着至少一位数字</li><li>一个点 <code>&#39;.&#39;</code> ，后面跟着至少一位数字</li></ol></li></ol><p><strong>整数</strong> （按顺序）可以分成以下几个部分：</p><ol><li>（可选）一个符号字符（<code>&#39;+&#39;</code> 或 <code>&#39;-&#39;</code>）</li><li>至少一位数字</li></ol><p>部分有效数字列举如下：<code>[&quot;2&quot;, &quot;0089&quot;, &quot;-0.1&quot;, &quot;+3.14&quot;, &quot;4.&quot;, &quot;-.9&quot;, &quot;2e10&quot;, &quot;-90E3&quot;, &quot;3e+7&quot;, &quot;+6e-1&quot;, &quot;53.5e93&quot;, &quot;-123.456e789&quot;]</code></p><p>部分无效数字列举如下：<code>[&quot;abc&quot;, &quot;1a&quot;, &quot;1e&quot;, &quot;e3&quot;, &quot;99e2.5&quot;, &quot;--6&quot;, &quot;-+3&quot;, &quot;95a54e53&quot;]</code></p><p>给你一个字符串 <code>s</code> ，如果 <code>s</code> 是一个 <strong>有效数字</strong> ，请返回 <code>true</code> 。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;0&quot;</p><p><strong>输出：</strong> true</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;e&quot;</p><p><strong>输出：</strong> false</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;.&quot;</p><p><strong>输出：</strong> false</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 20</code></li><li><code>s</code> 仅含英文字母（大写和小写），数字（<code>0-9</code>），加号 <code>&#39;+&#39;</code> ，减号 <code>&#39;-&#39;</code> ，空格 <code>&#39; &#39;</code> 或者点 <code>&#39;.&#39;</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-正则表达式" tabindex="-1"><a class="header-anchor" href="#思路一-正则表达式" aria-hidden="true">#</a> 思路一 正则表达式</h3><p>为了判断一个字符串是否是有效数字，我们可以使用正则表达式来匹配其格式。根据题目的描述，我们可以构建一个正则表达式来验证字符串的有效性。</p><h3 id="正则表达式构建" tabindex="-1"><a class="header-anchor" href="#正则表达式构建" aria-hidden="true">#</a> 正则表达式构建</h3><p>根据题目要求，有效数字的格式可以用以下正则表达式表示：</p><ol><li><strong>可选的空格</strong>：使用 <code>^\\s*</code> 和 <code>\\s*$</code>。</li><li><strong>有效数字部分</strong>： <ul><li>可以是一个整数或小数，后面可以跟可选的科学计数法部分（&#39;e&#39; 或 &#39;E&#39; 后跟整数）。</li><li>小数和整数的详细结构在描述中已给出。</li></ul></li></ol><h3 id="正则表达式示例" tabindex="-1"><a class="header-anchor" href="#正则表达式示例" aria-hidden="true">#</a> 正则表达式示例</h3><p>以下是构建的正则表达式：</p><p><code>^\\s*[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][+-]?\\d+)?\\s*$</code></p><ul><li><code>^\\s*</code> 和 <code>\\s*$</code> 用于匹配前后的空格。</li><li><code>[+-]?</code> 表示可选的符号。</li><li><code>(\\d+(\\.\\d*)?)|(\\.\\d+)</code> 用于匹配小数和整数： <ul><li><code>\\d+(\\.\\d*)?</code> 匹配整数和可选的小数部分。</li><li><code>\\.\\d+</code> 匹配以点开始的数（如 <code>.5</code>）。</li></ul></li><li><code>([eE][+-]?\\d+)?</code> 匹配科学计数法部分。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，正则表达式的匹配过程会遍历整个字符串一次，因此时间复杂度为线性。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，不使用额外的空间，正则表达式的匹配结果通常在常量空间内完成，不会额外使用与输入规模相关的空间。</li></ul><hr><h3 id="思路二-手动解析字符串" tabindex="-1"><a class="header-anchor" href="#思路二-手动解析字符串" aria-hidden="true">#</a> 思路二 手动解析字符串</h3><ol><li><p><strong>去除空格</strong>：使用 <code>trim()</code> 函数去掉字符串两端的空格。</p></li><li><p><strong>标志位</strong>：使用 <code>hasNum</code>、<code>hasDot</code>、<code>hasExp</code> 标志数字、小数点和指数的出现。</p></li><li><p><strong>遍历字符串</strong>：</p><ul><li>允许字符串以 <code>&#39;+&#39;</code> 或 <code>&#39;-&#39;</code> 开头。</li><li>逐字符遍历字符串，判断每个字符是否是数字、小数点或科学计数法的符号。</li></ul></li><li><p><strong>检查有效性</strong>：</p><ul><li>确保小数点和指数符号只出现一次。</li><li>确保数字部分在小数点前后都有数字（如适用）。</li><li>确保指数符号后有数字。</li></ul></li><li><p><strong>返回结果</strong>：最后根据 <code>hasNum</code> 判断是否存在有效的数字部分。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要遍历整个字符串一次，因此时间复杂度为线性。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，使用常量空间来存储标志位，不会根据输入规模增加空间使用。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',36),_=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"validNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" regex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token regex"},[n("span",{class:"token regex-delimiter"},"/"),n("span",{class:"token regex-source language-regex"},"^\\s*[+-]?((\\d+(\\.\\d*)?)|(\\.\\d+))([eE][+-]?\\d+)?\\s*$"),n("span",{class:"token regex-delimiter"},"/")]),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" regex"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"test"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"s"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"validNumber"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	s `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 去除空格"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" n "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" hasNum "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
		hasDot `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},","),s(`
		hasExp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" n"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" char "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`

		`),n("span",{class:"token comment"},"// 处理符号"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("char "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'+'"),s(),n("span",{class:"token operator"},"||"),s(" char "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'-'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},">"),s(),n("span",{class:"token number"},"0"),s(),n("span",{class:"token operator"},"&&"),s(" s"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'e'"),s(),n("span",{class:"token operator"},"&&"),s(" s"),n("span",{class:"token punctuation"},"["),s("i "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},"'E'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 处理小数点"),s(`
		`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("char "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'.'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hasDot "),n("span",{class:"token operator"},"||"),s(" hasExp"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 不能有多个小数点或在科学计数法后"),s(`
			hasDot `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 处理指数符号"),s(`
		`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("char "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'e'"),s(),n("span",{class:"token operator"},"||"),s(" char "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},"'E'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("hasExp "),n("span",{class:"token operator"},"||"),s(),n("span",{class:"token operator"},"!"),s("hasNum"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 不能有多个指数，且必须有数字在前"),s(`
			hasExp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(`
			hasNum `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 重置数字标志，准备处理指数部分"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token comment"},"// 处理数字"),s(`
		`),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("char "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token string"},"'0'"),s(),n("span",{class:"token operator"},"&&"),s(" char "),n("span",{class:"token operator"},"<="),s(),n("span",{class:"token string"},"'9'"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			hasNum `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 至少有一个数字"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 其他字符无效"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"return"),s(" hasNum"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 最终必须有数字"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function x(y,E){const l=e("font"),p=e("RouterLink"),i=e("ExternalLinkIcon"),r=e("CodeTabs");return d(),k("div",null,[b,n("p",null,[s("🟠 "),t(l,{color:"#ffb800"},{default:a(()=>[s("Medium")]),_:1}),s("  🔖  "),t(p,{to:"/tag/string.html"},{default:a(()=>[g]),_:1}),s("  🔗 "),n("a",v,[f,t(i)])]),q,t(r,{id:"313",data:[{id:"正则表达式"},{id:"手动解析字符串"}]},{title0:a(({value:o,isActive:c})=>[s("正则表达式")]),title1:a(({value:o,isActive:c})=>[s("手动解析字符串")]),tab0:a(({value:o,isActive:c})=>[_]),tab1:a(({value:o,isActive:c})=>[w]),_:1})])}const j=u(h,[["render",x],["__file","jz_offer_20_1.html.vue"]]);export{j as default};

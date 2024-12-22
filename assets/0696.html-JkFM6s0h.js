import{_ as p,r as c,o as d,c as k,a as n,b as t,d as e,w as s,f as h,e as g}from"./app-U2ekqv2z.js";const m={},_=n("h1",{id:"_696-计数二进制子串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_696-计数二进制子串","aria-hidden":"true"},"#"),t(" 696. 计数二进制子串")],-1),b=n("code",null,"双指针",-1),f=n("code",null,"字符串",-1),v={href:"https://leetcode.cn/problems/count-binary-substrings",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/count-binary-substrings",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=g('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a binary string <code>s</code>, return the number of non-empty substrings that have the same number of <code>0</code>&#39;s and <code>1</code>&#39;s, and all the <code>0</code>&#39;s and all the <code>1</code>&#39;s in these substrings are grouped consecutively.</p><p>Substrings that occur multiple times are counted the number of times they occur.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: s = &quot;00110011&quot;</p><p>Output: 6</p><p>Explanation: There are 6 substrings that have equal number of consecutive 1&#39;s and 0&#39;s: &quot;0011&quot;, &quot;01&quot;, &quot;1100&quot;, &quot;10&quot;, &quot;0011&quot;, and &quot;01&quot;.</p><p>Notice that some of these substrings repeat and are counted the number of times they occur.</p><p>Also, &quot;00110011&quot; is not a valid substring because all the 0&#39;s (and 1&#39;s) are not grouped together.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;10101&quot;</p><p>Output: 4</p><p>Explanation: There are 4 substrings: &quot;10&quot;, &quot;01&quot;, &quot;10&quot;, &quot;01&quot; that have equal number of consecutive 1&#39;s and 0&#39;s.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> is either <code>&#39;0&#39;</code> or <code>&#39;1&#39;</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个字符串 <code>s</code>，统计并返回具有相同数量 <code>0</code> 和 <code>1</code> 的非空（连续）子字符串的数量，并且这些子字符串中的所有 <code>0</code> 和所有 <code>1</code> 都是成组连续的。</p><p>重复出现（不同位置）的子串也要统计它们出现的次数。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;00110011&quot;</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 6 个子串满足具有相同数量的连续 1 和 0 ：&quot;0011&quot;、&quot;01&quot;、&quot;1100&quot;、&quot;10&quot;、&quot;0011&quot; 和 &quot;01&quot; 。</p><p>注意，一些重复出现的子串（不同位置）要统计它们出现的次数。</p><p>另外，&quot;00110011&quot; 不是有效的子串，因为所有的 0（还有 1 ）没有组合在一起。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;10101&quot;</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 有 4 个子串：&quot;10&quot;、&quot;01&quot;、&quot;10&quot;、&quot;01&quot; ，具有相同数量的连续 1 和 0 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= s.length &lt;= 10^5</code></li><li><code>s[i]</code> 为 <code>&#39;0&#39;</code> 或 <code>&#39;1&#39;</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>为了满足条件，可以发现：</p><ol><li>字符串中每一组连续的 <code>0</code> 和 <code>1</code> 是互相分隔的，可以按连续的 <code>0</code> 和 <code>1</code> 分组。 例如，对于 <code>s = &quot;001110011&quot;</code>, 可分为：<code>[2, 3, 2, 2]</code>，表示连续出现的 <code>0</code> 和 <code>1</code> 的数量。</li><li>任意两个相邻的分组中，能形成的符合条件的子串数量，等于这两个分组中较小的那个组的数量。 <ul><li>例如分组为 <code>[2, 3]</code>，能形成的子串为 <code>min(2, 3) = 2</code>。</li></ul></li><li>最终只需累加所有相邻分组的最小值即可。</li></ol><hr><h3 id="思路一-分组数组" tabindex="-1"><a class="header-anchor" href="#思路一-分组数组" aria-hidden="true">#</a> 思路一：分组数组</h3><ol><li><p><strong>初始化分组数组</strong>:</p><ul><li>定义一个数组 <code>group</code>，用来存储字符串中每一组连续字符的数量。例如，对于字符串 <code>s = &quot;00110&quot;</code>，<code>group</code> 最终会变成 <code>[2, 2, 1]</code>。</li><li>初始值为 <code>group = [1]</code>，表示第一个字符（<code>s[0]</code>）的数量是 1。</li></ul></li><li><p><strong>遍历字符串，进行分组统计</strong>:</p><ul><li>从第二个字符（<code>s[1]</code>）开始遍历，对比当前字符和前一个字符的值（<code>s[i] == s[i - 1]</code>）： <ul><li>如果相同，则将当前分组的数量加 1。</li><li>如果不同，说明进入了新的一组，将新的一组数量初始化为 1 并加入 <code>group</code>。</li></ul></li></ul></li><li><p><strong>统计满足条件的子串数量</strong>:</p><ul><li>遍历 <code>group</code> 中的相邻分组（从第二组开始）</li><li>任意两个相邻分组能形成的子串数量是它们之间的最小值</li><li>累加这些最小值，即为满足条件的子串总数。</li></ul></li><li><p><strong>返回结果</strong>:</p><ul><li>最后返回累加的子串数量 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度。 <ul><li>遍历字符串时，构造分组数组需要 <code>O(n)</code>。</li><li>遍历分组数组时，统计子串数量需要 <code>O(k)</code>，其中 <code>k</code> 是分组的数量。</li><li>因为 <code>k &lt;= n</code>，总复杂度为 <code>O(n)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(n)</code>。 <ul><li>显式构造了一个分组数组 <code>group</code>，空间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是分组数量。</li><li>在极端情况下（如 <code>s = &quot;010101&quot;</code>），分组数量 <code>k = n/2</code>，因此最坏情况下空间复杂度为 <code>O(n)</code>。</li></ul></li></ul><hr><h3 id="思路二-优化版" tabindex="-1"><a class="header-anchor" href="#思路二-优化版" aria-hidden="true">#</a> 思路二：优化版</h3><p>可以继续优化上述思路，省去显式的分组统计，采用两个变量 <code>prev</code> 和 <code>cur</code> 动态更新当前和上一个分组的长度。</p><ol><li><p><strong>初始化变量</strong>:</p><ul><li><code>prev = 0</code>: 表示上一组的连续字符数量，初始为 0。</li><li><code>cur = 1</code>: 表示当前组的连续字符数量，初始为 1（因为第一个字符本身是一组）。</li><li><code>res = 0</code>: 用于累计符合条件的子串数量。</li></ul></li><li><p><strong>遍历字符串</strong>:</p><ul><li>如果当前字符和前一个字符相同，则增加当前组的数量 <code>cur++</code>。</li><li>如果不同，则： <ul><li>将上一组的长度 <code>prev</code> 更新为当前组的长度 <code>cur</code>。</li><li>将当前组 <code>cur</code> 重置为 1（新字符开始新的分组）。</li><li>累加 <code>res</code>，加上上一组和当前组中较小的那个值：<code>res += Math.min(prev, cur)</code>。</li></ul></li></ul></li><li><p><strong>收尾处理</strong>:</p><ul><li>遍历完成后，再加一次最后一组和倒数第二组的比较值：<code>res += Math.min(prev, cur)</code>。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，优化版使用常数个变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',33),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countBinarySubstrings"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" group "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			group`),n("span",{class:"token punctuation"},"["),t("group"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			group`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" group"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		res `),n("span",{class:"token operator"},"+="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("group"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(" group"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("string"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"s"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"countBinarySubstrings"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"s"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(`
		cur `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" s"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("s"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"=="),t(" s"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			cur`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res `),n("span",{class:"token operator"},"+="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("prev"),n("span",{class:"token punctuation"},","),t(" cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			prev `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},";"),t(`
			cur `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"("),t("res "),n("span",{class:"token operator"},"+="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"min"),n("span",{class:"token punctuation"},"("),t("prev"),n("span",{class:"token punctuation"},","),t(" cur"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),j=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),N=n("td",{style:{"text-align":"center"}},"271",-1),A=n("td",{style:{"text-align":"left"}},"字符串的编码与解码 🔒",-1),B=n("td",{style:{"text-align":"center"}},null,-1),L={style:{"text-align":"left"}},M=n("code",null,"设计",-1),T=n("code",null,"数组",-1),V=n("code",null,"字符串",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),S={style:{"text-align":"center"}},R={href:"https://leetcode.cn/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},G={href:"https://leetcode.com/problems/encode-and-decode-strings",target:"_blank",rel:"noopener noreferrer"},z=n("td",{style:{"text-align":"center"}},"2489",-1),D=n("td",{style:{"text-align":"left"}},"固定比率的子字符串数 🔒",-1),F=n("td",{style:{"text-align":"center"}},null,-1),H={style:{"text-align":"left"}},J=n("code",null,"哈希表",-1),K=n("code",null,"数学",-1),P=n("code",null,"字符串",-1),Q=n("code",null,"1+",-1),U=n("td",{style:{"text-align":"center"}},"🟠",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/number-of-substrings-with-fixed-ratio",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/number-of-substrings-with-fixed-ratio",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"3234",-1),$=n("td",{style:{"text-align":"left"}},"统计 1 显著的字符串的数量",-1),nn=n("td",{style:{"text-align":"center"}},null,-1),tn={style:{"text-align":"left"}},en=n("code",null,"字符串",-1),sn=n("code",null,"枚举",-1),on=n("code",null,"滑动窗口",-1),an=n("td",{style:{"text-align":"center"}},"🟠",-1),cn={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/count-the-number-of-substrings-with-dominant-ones",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/count-the-number-of-substrings-with-dominant-ones",target:"_blank",rel:"noopener noreferrer"};function rn(pn,dn){const i=c("font"),o=c("RouterLink"),a=c("ExternalLinkIcon"),r=c("CodeTabs");return d(),k("div",null,[_,n("p",null,[t("🟢 "),e(i,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(o,{to:"/tag/two-pointers.html"},{default:s(()=>[b]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[f]),_:1}),t("  🔗 "),n("a",v,[q,e(a)]),t(),n("a",y,[x,e(a)])]),w,e(r,{id:"372",data:[{id:"分组数组"},{id:"优化版"}]},{title0:s(({value:l,isActive:u})=>[t("分组数组")]),title1:s(({value:l,isActive:u})=>[t("优化版")]),tab0:s(({value:l,isActive:u})=>[O]),tab1:s(({value:l,isActive:u})=>[E]),_:1}),C,h(" prettier-ignore "),n("table",null,[j,n("tbody",null,[n("tr",null,[N,A,B,n("td",L,[e(o,{to:"/tag/design.html"},{default:s(()=>[M]),_:1}),t(),e(o,{to:"/tag/array.html"},{default:s(()=>[T]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[V]),_:1})]),I,n("td",S,[n("a",R,[t("🀄️"),e(a)]),t(),n("a",G,[t("🔗"),e(a)])])]),n("tr",null,[z,D,F,n("td",H,[e(o,{to:"/tag/hash-table.html"},{default:s(()=>[J]),_:1}),t(),e(o,{to:"/tag/math.html"},{default:s(()=>[K]),_:1}),t(),e(o,{to:"/tag/string.html"},{default:s(()=>[P]),_:1}),t(),Q]),U,n("td",W,[n("a",X,[t("🀄️"),e(a)]),t(),n("a",Y,[t("🔗"),e(a)])])]),n("tr",null,[Z,$,nn,n("td",tn,[e(o,{to:"/tag/string.html"},{default:s(()=>[en]),_:1}),t(),e(o,{to:"/tag/enumeration.html"},{default:s(()=>[sn]),_:1}),t(),e(o,{to:"/tag/sliding-window.html"},{default:s(()=>[on]),_:1})]),an,n("td",cn,[n("a",ln,[t("🀄️"),e(a)]),t(),n("a",un,[t("🔗"),e(a)])])])])])])}const hn=p(m,[["render",rn],["__file","0696.html.vue"]]);export{hn as default};

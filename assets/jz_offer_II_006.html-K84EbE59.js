import{_ as d,r as o,o as k,c as m,a as n,b as s,d as t,w as a,e as i}from"./app-Ob52y8QZ.js";const b={},h=n("h1",{id:"_6-排序数组中两个数字之和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_6-排序数组中两个数字之和","aria-hidden":"true"},"#"),s(" 6. 排序数组中两个数字之和")],-1),g=n("code",null,"数组",-1),v=n("code",null,"双指针",-1),_=n("code",null,"二分查找",-1),f={href:"https://leetcode.cn/problems/kLl5u1",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),y=i('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定一个已按照 <strong>升序排列</strong> 的整数数组 <code>numbers</code> ，请你从数组中找出两个数满足相加之和等于目标数 <code>target</code> 。</p><p>函数应该以长度为 <code>2</code> 的整数数组的形式返回这两个数的下标值， <code>numbers</code> 的下标 <strong>从 0 开始计数</strong> ，所以答案数组应当满足 <code>0 &lt;= answer[0] &lt; answer[1] &lt; numbers.length</code> 。</p><p>假设数组中存在且只存在一对符合条件的数字，同时一个数字不能使用两次。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> numbers = [1,2,4,6,10], target = 8</p><p><strong>输出：</strong>[1,3]</p><p><strong>解释：</strong> 2 与 6 之和等于目标数 8 。因此 index1 = 1, index2 = 3 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> numbers = [2,3,4], target = 6</p><p><strong>输出：</strong>[0,2]</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> numbers = [-1,0], target = -1</p><p><strong>输出：</strong>[0,1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>2 &lt;= numbers.length &lt;= 3 * 10^4</code></li><li><code>-1000 &lt;= numbers[i] &lt;= 1000</code></li><li><code>numbers</code> 按 <strong>非递减顺序</strong> 排列</li><li><code>-1000 &lt;= target &lt;= 1000</code></li><li>仅存在一个有效答案</li></ul>',12),j={class:"hint-container warning"},x=n("p",{class:"hint-container-title"},"注意",-1),O=i('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双指针-对撞指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针-对撞指针" aria-hidden="true">#</a> 思路一：双指针（对撞指针）</h3><ol><li><strong>数组有序性</strong>：题目给定的数组是有序的，因此可以利用数组的有序性来减少遍历次数。</li><li><strong>双指针的思想</strong>： <ul><li>初始化两个指针，一个从数组的起始位置 <code>i = 0</code>，一个从数组的末尾位置 <code>j = numbers.length - 1</code>。</li><li>然后将这两个指针所指的元素相加，比较其和与目标 <code>target</code> 的关系： <ul><li>如果两数之和正好等于 <code>target</code>，则返回这两个指针的索引值。</li><li>如果和小于 <code>target</code>，说明需要更大的数，左指针向右移动一位（<code>i++</code>）。</li><li>如果和大于 <code>target</code>，说明需要更小的数，右指针向左移动一位（<code>j--</code>）。</li></ul></li></ul></li><li><strong>终止条件</strong>：指针相遇时退出循环。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度，由于只需要一次遍历整个数组（每个元素最多被遍历一次），所以时间复杂度为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，除了几个额外的指针变量，没有使用其他额外的存储空间。</li></ul><h3 id="思路二-哈希表" tabindex="-1"><a class="header-anchor" href="#思路二-哈希表" aria-hidden="true">#</a> 思路二：哈希表</h3><p>这一解法不要求数组是有序的，可以处理任意无序数组。</p><ul><li>遍历数组，同时用一个哈希表 <code>obj</code> 来记录已经遍历过的数字及其索引。</li><li>对于每个遍历到的数字 <code>numbers[i]</code>，计算 <code>target - numbers[i]</code> 的值，称之为 <code>another</code>。</li><li>然后检查 <code>another</code> 是否已经在哈希表中存在： <ul><li>如果存在，说明已经找到了一组符合条件的数字，返回它们的索引值。</li><li>如果不存在，则将当前数字 <code>numbers[i]</code> 和它的索引 <code>i</code> 存入哈希表中。</li></ul></li></ul><p>哈希表查找时间复杂度为 <code>O(1)</code>，因此可以通过这种方法快速找到目标和。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，需要遍历一次数组，时间复杂度为 <code>O(n)</code>，在遍历的过程中，哈希表的查找和插入操作的时间复杂度都是 <code>O(1)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，由于需要用哈希表来存储已经遍历过的数字及其索引，哈希表的空间复杂度为 <code>O(n)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',12),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法一 这一题可以利用数组有序的特性，使用对撞指针"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"numbers"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"twoSum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("numbers"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" j "),n("span",{class:"token operator"},"="),s(" numbers"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("i "),n("span",{class:"token operator"},"<"),s(" j"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("numbers"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" numbers"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},","),s(" j"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("numbers"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+"),s(" numbers"),n("span",{class:"token punctuation"},"["),s("j"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"<"),s(" target"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			i`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			j`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// 解法二 不管数组是否有序，空间复杂度比上一种解法要多 O(n)"),s(`
`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"numbers"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"twoSum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("numbers"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" obj "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" numbers"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" another "),n("span",{class:"token operator"},"="),s(" target "),n("span",{class:"token operator"},"-"),s(" numbers"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("another "),n("span",{class:"token keyword"},"in"),s(" obj"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token punctuation"},"["),s("obj"),n("span",{class:"token punctuation"},"["),s("another"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(" i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		obj`),n("span",{class:"token punctuation"},"["),s("numbers"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"="),s(" i"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function L(C,A){const p=o("font"),e=o("RouterLink"),u=o("ExternalLinkIcon"),r=o("CodeTabs");return k(),m("div",null,[h,n("p",null,[s("🟢 "),t(p,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/array.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/binary-search.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",f,[w,t(u)])]),y,n("div",j,[x,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0167.html"},{default:a(()=>[s("第 167 题")]),_:1}),s(" 相似（下标起点不同）。")])]),O,t(r,{id:"212",data:[{id:"对撞指针"},{id:"哈希表"}]},{title0:a(({value:c,isActive:l})=>[s("对撞指针")]),title1:a(({value:c,isActive:l})=>[s("哈希表")]),tab0:a(({value:c,isActive:l})=>[q]),tab1:a(({value:c,isActive:l})=>[I]),_:1})])}const N=d(b,[["render",L],["__file","jz_offer_II_006.html.vue"]]);export{N as default};

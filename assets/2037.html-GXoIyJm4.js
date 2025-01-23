import{_ as r,r as a,o as d,c as k,a as n,b as s,d as e,w as t,e as m}from"./app-MsFeWfVD.js";const h={},v=n("h1",{id:"_2037-使每位学生都有座位的最少移动次数",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2037-使每位学生都有座位的最少移动次数","aria-hidden":"true"},"#"),s(" 2037. 使每位学生都有座位的最少移动次数")],-1),b=n("code",null,"贪心",-1),g=n("code",null,"数组",-1),f=n("code",null,"计数排序",-1),_=n("code",null,"排序",-1),w={href:"https://leetcode.cn/problems/minimum-number-of-moves-to-seat-everyone",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone",target:"_blank",rel:"noopener noreferrer"},T=n("code",null,"LeetCode",-1),q=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>There are <code>n</code> <strong>availabe</strong> seats and <code>n</code> students <strong>standing</strong> in a room. You are given an array <code>seats</code> of length <code>n</code>, where <code>seats[i]</code> is the position of the <code>ith</code> seat. You are also given the array <code>students</code> of length <code>n</code>, where <code>students[j]</code> is the position of the <code>jth</code> student.</p><p>You may perform the following move any number of times:</p><ul><li>Increase or decrease the position of the <code>ith</code> student by <code>1</code> (i.e., moving the <code>ith</code> student from position <code>x</code> to <code>x + 1</code> or <code>x - 1</code>)</li></ul><p>Return <em>the <strong>minimum number of moves</strong> required to move each student to a seat</em> <em>such that no two students are in the same seat.</em></p><p>Note that there may be <strong>multiple</strong> seats or students in the <strong>same</strong> position at the beginning.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: seats = [3,1,5], students = [2,7,4]</p><p>Output: 4</p><p>Explanation: The students are moved as follows:</p><ul><li>The first student is moved from position 2 to position 1 using 1 move.</li><li>The second student is moved from position 7 to position 5 using 2 moves.</li><li>The third student is moved from position 4 to position 3 using 1 move.</li></ul><p>In total, 1 + 2 + 1 = 4 moves were used.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: seats = [4,1,5,9], students = [1,3,2,6]</p><p>Output: 7</p><p>Explanation: The students are moved as follows:</p><ul><li>The first student is not moved.</li><li>The second student is moved from position 3 to position 4 using 1 move.</li><li>The third student is moved from position 2 to position 5 using 3 moves.</li><li>The fourth student is moved from position 6 to position 9 using 3 moves.</li></ul><p>In total, 0 + 1 + 3 + 3 = 7 moves were used.</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: seats = [2,2,6,6], students = [1,3,2,6]</p><p>Output: 4</p><p>Explanation: Note that there are two seats at position 2 and two seats at position 6.</p><p>The students are moved as follows:</p><ul><li>The first student is moved from position 1 to position 2 using 1 move.</li><li>The second student is moved from position 3 to position 6 using 3 moves.</li><li>The third student is not moved.</li><li>The fourth student is not moved.</li></ul><p>In total, 1 + 3 + 0 + 0 = 4 moves were used.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>n == seats.length == students.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= seats[i], students[j] &lt;= 100</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>一个房间里有 <code>n</code> 个 <strong>空闲</strong> 座位和 <code>n</code> 名 <strong>站着的</strong> 学生，房间用一个数轴表示。给你一个长度为 <code>n</code> 的数组 <code>seats</code> ，其中 <code>seats[i]</code> 是第 <code>i</code> 个座位的位置。同时给你一个长度为 <code>n</code> 的数组 <code>students</code> ，其中 <code>students[j]</code> 是第 <code>j</code> 位学生的位置。</p><p>你可以执行以下操作任意次：</p><ul><li>增加或者减少第 <code>i</code> 位学生的位置，每次变化量为 <code>1</code> （也就是将第 <code>i</code> 位学生从位置 <code>x</code> 移动到 <code>x + 1</code> 或者 <code>x - 1</code>）</li></ul><p>请你返回使所有学生都有座位坐的 <strong>最少移动次数</strong> ，并确保没有两位学生的座位相同。</p><p>请注意，初始时有可能有多个座位或者多位学生在 <strong>同一</strong> 位置。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> seats = [3,1,5], students = [2,7,4]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 学生移动方式如下：</p><ul><li>第一位学生从位置 2 移动到位置 1 ，移动 1 次。</li><li>第二位学生从位置 7 移动到位置 5 ，移动 2 次。</li><li>第三位学生从位置 4 移动到位置 3 ，移动 1 次。</li></ul><p>总共 1 + 2 + 1 = 4 次移动。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> seats = [4,1,5,9], students = [1,3,2,6]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong> 学生移动方式如下：</p><ul><li>第一位学生不移动。</li><li>第二位学生从位置 3 移动到位置 4 ，移动 1 次。</li><li>第三位学生从位置 2 移动到位置 5 ，移动 3 次。</li><li>第四位学生从位置 6 移动到位置 9 ，移动 3 次。</li></ul><p>总共 0 + 1 + 3 + 3 = 7 次移动。</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> seats = [2,2,6,6], students = [1,3,2,6]</p><p><strong>输出：</strong> 4</p><p><strong>解释：</strong> 学生移动方式如下：</p><ul><li>第一位学生从位置 1 移动到位置 2 ，移动 1 次。</li><li>第二位学生从位置 3 移动到位置 6 ，移动 3 次。</li><li>第三位学生不移动。</li><li>第四位学生不移动。</li></ul><p>总共 1 + 3 + 0 + 0 = 4 次移动。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>n == seats.length == students.length</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>1 &lt;= seats[i], students[j] &lt;= 100</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-差值数组法" tabindex="-1"><a class="header-anchor" href="#思路一-差值数组法" aria-hidden="true">#</a> 思路一：差值数组法</h3><ol><li>用一个数组 <code>diff</code> 表示某个位置需要的学生和实际拥有的学生的差值。 <ul><li>对座位位置 +1 表示有一个空位。</li><li>对学生位置 -1 表示需要一个空位。</li></ul></li><li>遍历 <code>diff</code>，根据累积的 <code>unmatched</code>（未匹配的学生或座位数）计算步数。 <ul><li>累加的绝对值 <code>moves</code> 表示把多余的空位或学生分配到下一个位置的最小移动步数。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n + m)</code>，其中 <code>n, m</code> 是 <code>seats</code> 和 <code>students</code> 中的最大值。</li><li><strong>空间复杂度</strong>: <code>O(maxPosition)</code>，使用了一个长度为<code>maxPosition</code> 的差值数组。</li></ul><hr><h3 id="思路二-排序匹配法" tabindex="-1"><a class="header-anchor" href="#思路二-排序匹配法" aria-hidden="true">#</a> 思路二：排序匹配法</h3><ol><li>排序后的 <code>seats</code> 和 <code>students</code> 可以直接进行一一匹配，匹配结果即为最小总移动步数。</li><li>遍历排序后的数组，直接累加对应位置的绝对差值。</li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>: <code>O(n log n)</code>，主要来源于排序。</li><li><strong>空间复杂度</strong>: <code>O(1)</code>，仅需常量额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',39),j=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"seats"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"students"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minMovesToSeat"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("seats"),n("span",{class:"token punctuation"},","),s(" students")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" maxPosition "),n("span",{class:"token operator"},"="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("seats"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("students"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" diff "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Array"),n("span",{class:"token punctuation"},"("),s("maxPosition"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fill"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`

	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" position "),n("span",{class:"token keyword"},"of"),s(" seats"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		diff`),n("span",{class:"token punctuation"},"["),s("position "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 座位 +1"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" position "),n("span",{class:"token keyword"},"of"),s(" students"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		diff`),n("span",{class:"token punctuation"},"["),s("position "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 学生 -1"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`

	`),n("span",{class:"token keyword"},"let"),s(" moves "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" unmatched "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 累计未匹配的座位或学生"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token keyword"},"of"),s(" diff"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		moves `),n("span",{class:"token operator"},"+="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("unmatched"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 累积移动步数"),s(`
		unmatched `),n("span",{class:"token operator"},"+="),s(" num"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" moves"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"seats"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"students"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"minMovesToSeat"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("seats"),n("span",{class:"token punctuation"},","),s(" students")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	seats`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 座位排序"),s(`
	students`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"sort"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("a"),n("span",{class:"token punctuation"},","),s(" b")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" a "),n("span",{class:"token operator"},"-"),s(" b"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 学生排序"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" moves "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" seats"),n("span",{class:"token punctuation"},"."),s("length"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		moves `),n("span",{class:"token operator"},"+="),s(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"abs"),n("span",{class:"token punctuation"},"("),s("students"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"-"),s(" seats"),n("span",{class:"token punctuation"},"["),s("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(),n("span",{class:"token comment"},"// 累加每对的移动距离"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" moves"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(O,C){const p=a("font"),o=a("RouterLink"),i=a("ExternalLinkIcon"),u=a("CodeTabs");return d(),k("div",null,[v,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/greedy.html"},{default:t(()=>[b]),_:1}),s(),e(o,{to:"/tag/array.html"},{default:t(()=>[g]),_:1}),s(),e(o,{to:"/tag/counting-sort.html"},{default:t(()=>[f]),_:1}),s(),e(o,{to:"/tag/sorting.html"},{default:t(()=>[_]),_:1}),s("  🔗 "),n("a",w,[y,e(i)]),s(),n("a",x,[T,e(i)])]),q,e(u,{id:"403",data:[{id:"差值数组法"},{id:"排序匹配法"}]},{title0:t(({value:c,isActive:l})=>[s("差值数组法")]),title1:t(({value:c,isActive:l})=>[s("排序匹配法")]),tab0:t(({value:c,isActive:l})=>[j]),tab1:t(({value:c,isActive:l})=>[E]),_:1})])}const A=r(h,[["render",I],["__file","2037.html.vue"]]);export{A as default};

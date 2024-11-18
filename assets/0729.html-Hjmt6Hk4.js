import{_ as p,r as l,o as u,c as k,a as n,b as e,d as t,w as s,f as m,e as h}from"./app-Ob52y8QZ.js";const b={},_=n("h1",{id:"_729-我的日程安排表-i",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_729-我的日程安排表-i","aria-hidden":"true"},"#"),e(" 729. 我的日程安排表 I")],-1),f=n("code",null,"设计",-1),g=n("code",null,"线段树",-1),v=n("code",null,"数组",-1),y=n("code",null,"二分查找",-1),w=n("code",null,"有序集合",-1),x={href:"https://leetcode.cn/problems/my-calendar-i",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"力扣",-1),M={href:"https://leetcode.com/problems/my-calendar-i",target:"_blank",rel:"noopener noreferrer"},j=n("code",null,"LeetCode",-1),I=h('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are implementing a program to use as your calendar. We can add a new event if adding the event will not cause a <strong>double booking</strong>.</p><p>A <strong>double booking</strong> happens when two events have some non-empty intersection (i.e., some moment is common to both events.).</p><p>The event can be represented as a pair of integers <code>start</code> and <code>end</code> that represents a booking on the half-open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.</p><p>Implement the <code>MyCalendar</code> class:</p><ul><li><code>MyCalendar()</code> Initializes the calendar object.</li><li><code>boolean book(int start, int end)</code> Returns <code>true</code> if the event can be added to the calendar successfully without causing a <strong>double booking</strong>. Otherwise, return <code>false</code> and do not add the event to the calendar.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyCalendar&quot;, &quot;book&quot;, &quot;book&quot;, &quot;book&quot;]</p><p>[[], [10, 20], [15, 25], [20, 30]]</p><p><strong>Output</strong></p><p>[null, true, false, true]</p><p><strong>Explanation</strong></p><p>MyCalendar myCalendar = new MyCalendar();</p><p>myCalendar.book(10, 20); // return True</p><p>myCalendar.book(15, 25); // return False, It can not be booked because time 15 is already booked by another event.</p><p>myCalendar.book(20, 30); // return True, The event can be booked, as the first event takes every time less than 20, but not including 20.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= start &lt; end &lt;= 10^9</code></li><li>At most <code>1000</code> calls will be made to <code>book</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现一个 <code>MyCalendar</code> 类来存放你的日程安排。如果要添加的日程安排不会造成 <strong>重复预订</strong> ，则可以存储这个新的日程安排。</p><p>当两个日程安排有一些时间上的交叉时（例如两个日程安排都在同一时间内），就会产生 <strong>重复预订</strong> 。</p><p>日程可以用一对整数 <code>start</code> 和 <code>end</code> 表示，这里的时间是半开区间，即 <code>[start, end)</code>, 实数 <code>x</code> 的范围为， <code>start &lt;= x &lt; end</code> 。</p><p>实现 <code>MyCalendar</code> 类：</p><ul><li><code>MyCalendar()</code> 初始化日历对象。</li><li><code>boolean book(int start, int end)</code> 如果可以将日程安排成功添加到日历中而不会导致重复预订，返回 <code>true</code> 。否则，返回 <code>false</code> 并且不要将该日程安排添加到日历中。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-遍历" tabindex="-1"><a class="header-anchor" href="#思路一-遍历" aria-hidden="true">#</a> 思路一：遍历</h3><ul><li>遍历已添加的日历，逐一判断新的日程安排 <code>[start, end)</code> 和已有的日程安排 <code>[s, e)</code> 是否重复</li><li>当 <code>start &lt; e &amp;&amp; end &gt; s</code> 时，代表两个区间重复了；</li><li>一旦发现重复，则返回 <code>false</code>；</li><li>全部遍历完都没有重复，则将新日程加入到日程数组中，并返回 <code>true</code>；</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是已预定的时间段数量。每次调用 <code>book</code> 方法时，都需要遍历整个 <code>calendar</code> 数组以检查是否有重叠时间段。</li><li><strong>空间复杂度</strong>：<code>O(n)``，数组 </code>calendar<code>存储</code>n` 个预定的时间段。</li></ul><hr><h3 id="思路二-二分查找" tabindex="-1"><a class="header-anchor" href="#思路二-二分查找" aria-hidden="true">#</a> 思路二：二分查找</h3><p>如果每次添加新的日程 <code>[start, end)</code> 时，按照 <code>start</code> 的大小顺序插入，查找的时候就可以用二分查找，将时间复杂度降低到 <code>O(log n)</code>。</p><p>更新二分查找范围的时候要注意，对于已有的日程安排 <code>[s, e)</code>，要根据 <code>e</code> 和 <code>start</code>的关系来判断查找范围：</p><ul><li>若 <code>e &lt; start</code>，则两个日程无交集，可以直接缩小范围； <ul><li>如果新时间段的 <code>start</code> 大于等于当前比较时间段的 <code>end</code>，更新 <code>left</code> 指针；</li><li>如果新时间段的 <code>end</code> 小于当前比较时间段的 <code>start</code>，更新 <code>right</code> 指针；</li></ul></li><li>若 <code>e &gt; start</code>，则两个日程有重合的可能，返回 <code>false</code>；</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(log n)</code>，其中 <code>n</code> 是已预定的时间段数量。由于时间段按顺序插入，因此可以对 <code>calendar</code> 进行二分查找，查找并插入新时间段的时间复杂度为 <code>O(log n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)``，数组 </code>calendar<code>存储</code>n` 个预定的时间段。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',29),q=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"MyCalendar"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"start"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"end"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("boolean"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token class-name"},"MyCalendar"),n("span",{class:"token punctuation"},"."),e("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"book"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("start"),n("span",{class:"token punctuation"},","),e(" end")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(),n("span",{class:"token punctuation"},"["),e("s"),n("span",{class:"token punctuation"},","),e(" e"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token keyword"},"of"),e(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("start "),n("span",{class:"token operator"},"<"),e(" e "),n("span",{class:"token operator"},"&&"),e(" end "),n("span",{class:"token operator"},">"),e(" s"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),e("start"),n("span",{class:"token punctuation"},","),e(" end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */`),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"MyCalendar"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"start"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"end"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("boolean"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token class-name"},"MyCalendar"),n("span",{class:"token punctuation"},"."),e("prototype"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"book"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("start"),n("span",{class:"token punctuation"},","),e(" end")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" left "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(`
		right `),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar"),n("span",{class:"token punctuation"},"."),e("length "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`

	`),n("span",{class:"token comment"},"// 二分查找"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("left "),n("span",{class:"token operator"},"<="),e(" right"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		`),n("span",{class:"token keyword"},"let"),e(" mid "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),e("left "),n("span",{class:"token operator"},"+"),e(" right"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"/"),e(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token operator"},"|"),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token keyword"},"const"),e(),n("span",{class:"token punctuation"},"["),e("s"),n("span",{class:"token punctuation"},","),e(" e"),n("span",{class:"token punctuation"},"]"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar"),n("span",{class:"token punctuation"},"["),e("mid"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),e(`

		`),n("span",{class:"token comment"},"// 时间重合，直接返回 false"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("start "),n("span",{class:"token operator"},"<"),e(" e "),n("span",{class:"token operator"},"&&"),e(" end "),n("span",{class:"token operator"},">"),e(" s"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),e(`

		`),n("span",{class:"token comment"},"// 更新二分查找范围"),e(`
		`),n("span",{class:"token keyword"},"if"),e(),n("span",{class:"token punctuation"},"("),e("start "),n("span",{class:"token operator"},">="),e(" e"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
			left `),n("span",{class:"token operator"},"="),e(" mid "),n("span",{class:"token operator"},"+"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(),n("span",{class:"token keyword"},"else"),e(),n("span",{class:"token punctuation"},"{"),e(`
			right `),n("span",{class:"token operator"},"="),e(" mid "),n("span",{class:"token operator"},"-"),e(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),e(`
		`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),e("calendar"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),e("left"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(),n("span",{class:"token punctuation"},"["),e("start"),n("span",{class:"token punctuation"},","),e(" end"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"return"),e(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`

`),n("span",{class:"token doc-comment comment"},`/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */`),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),A=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"731",-1),L=n("td",{style:{"text-align":"left"}},"我的日程安排表 II",-1),N={style:{"text-align":"center"}},V={style:{"text-align":"left"}},B=n("code",null,"设计",-1),R=n("code",null,"线段树",-1),Y=n("code",null,"数组",-1),z=n("code",null,"3+",-1),F={style:{"text-align":"left"}},H={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/my-calendar-ii",target:"_blank",rel:"noopener noreferrer"},W={href:"https://leetcode.com/problems/my-calendar-ii",target:"_blank",rel:"noopener noreferrer"},D=n("td",{style:{"text-align":"center"}},"732",-1),G=n("td",{style:{"text-align":"left"}},"我的日程安排表 III",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"设计",-1),Q=n("code",null,"线段树",-1),U=n("code",null,"二分查找",-1),X=n("code",null,"2+",-1),Z={style:{"text-align":"left"}},$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/my-calendar-iii",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/my-calendar-iii",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"2446",-1),sn=n("td",{style:{"text-align":"left"}},"判断两个事件是否存在冲突",-1),an=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},cn=n("code",null,"数组",-1),ln=n("code",null,"字符串",-1),rn={style:{"text-align":"left"}},dn={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/determine-if-two-events-have-conflict",target:"_blank",rel:"noopener noreferrer"};function kn(mn,hn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),k("div",null,[_,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/design.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[g]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[v]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[y]),_:1}),e(),t(a,{to:"/tag/ordered-set.html"},{default:s(()=>[w]),_:1}),e("  🔗 "),n("a",x,[C,t(o)]),e(),n("a",M,[j,t(o)])]),I,t(d,{id:"205",data:[{id:"遍历"},{id:"二分查找"}]},{title0:s(({value:r,isActive:i})=>[e("遍历")]),title1:s(({value:r,isActive:i})=>[e("二分查找")]),tab0:s(({value:r,isActive:i})=>[q]),tab1:s(({value:r,isActive:i})=>[O]),_:1}),T,m(" prettier-ignore "),n("table",null,[A,n("tbody",null,[n("tr",null,[E,L,n("td",N,[t(a,{to:"/problem/0731.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",V,[t(a,{to:"/tag/design.html"},{default:s(()=>[B]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[R]),_:1}),e(),t(a,{to:"/tag/array.html"},{default:s(()=>[Y]),_:1}),e(),z]),n("td",F,[t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1})]),n("td",H,[n("a",S,[e("🀄️"),t(o)]),e(),n("a",W,[e("🔗"),t(o)])])]),n("tr",null,[D,G,J,n("td",K,[t(a,{to:"/tag/design.html"},{default:s(()=>[P]),_:1}),e(),t(a,{to:"/tag/segment-tree.html"},{default:s(()=>[Q]),_:1}),e(),t(a,{to:"/tag/binary-search.html"},{default:s(()=>[U]),_:1}),e(),X]),n("td",Z,[t(c,{color:"#ff334b"},{default:s(()=>[e("Hard")]),_:1})]),n("td",$,[n("a",nn,[e("🀄️"),t(o)]),e(),n("a",en,[e("🔗"),t(o)])])]),n("tr",null,[tn,sn,an,n("td",on,[t(a,{to:"/tag/array.html"},{default:s(()=>[cn]),_:1}),e(),t(a,{to:"/tag/string.html"},{default:s(()=>[ln]),_:1})]),n("td",rn,[t(c,{color:"#15bd66"},{default:s(()=>[e("Easy")]),_:1})]),n("td",dn,[n("a",pn,[e("🀄️"),t(o)]),e(),n("a",un,[e("🔗"),t(o)])])])])])])}const _n=p(b,[["render",kn],["__file","0729.html.vue"]]);export{_n as default};

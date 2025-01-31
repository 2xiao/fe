import{_ as d,r as o,o as k,c as m,a as n,b as s,d as t,w as a,e as p}from"./app-MkGfDfkx.js";const h={},b=n("h1",{id:"_23-两个链表的第一个重合节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_23-两个链表的第一个重合节点","aria-hidden":"true"},"#"),s(" 23. 两个链表的第一个重合节点")],-1),v=n("code",null,"哈希表",-1),g=n("code",null,"链表",-1),_=n("code",null,"双指针",-1),f={href:"https://leetcode.cn/problems/3u1WK4",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),A=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>给定两个单链表的头节点 <code>headA</code> 和 <code>headB</code> ，请找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 <code>null</code> 。</p><p>图示两个链表在节点 <code>c1</code> 开始相交：</p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/14/160_statement.png)</p><p>题目数据 <strong>保证</strong> 整个链式结构中不存在环。</p><p><strong>注意</strong> ，函数返回结果后，链表必须 <strong>保持其原始结构</strong> 。</p><p><strong>示例 1：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/14/160_example_1.png)</p><blockquote><p><strong>输入：</strong> intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3</p><p><strong>输出：</strong> Intersected at &#39;8&#39;</p><p><strong>解释：</strong> 相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。</p><p>从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。</p><p>在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。</p></blockquote><p><strong>示例 2：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/14/160_example_2.png)</p><blockquote><p><strong>输入：</strong> intersectVal = 2, listA = [0,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1</p><p><strong>输出：</strong> Intersected at &#39;2&#39;</p><p><strong>解释：</strong> 相交节点的值为 2 （注意，如果两个链表相交则不能为 0）。</p><p>从各自的表头开始算起，链表 A 为 [0,9,1,2,4]，链表 B 为 [3,2,4]。</p><p>在 A 中，相交节点前有 3 个节点；在 B 中，相交节点前有 1 个节点。</p></blockquote><p><strong>示例 3：</strong></p><p>![](https://assets.leetcode-cn.com/aliyun-lc- upload/uploads/2018/12/14/160_example_3.png)</p><blockquote><p><strong>输入：</strong> intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2</p><p><strong>输出：</strong> null</p><p><strong>解释：</strong> 从各自的表头开始算起，链表 A 为 [2,6,4]，链表 B 为 [1,5]。</p><p>由于这两个链表不相交，所以 intersectVal 必须为 0，而 skipA 和 skipB 可以是任意值。</p><p>这两个链表不相交，因此返回 null 。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>listA</code> 中节点数目为 <code>m</code></li><li><code>listB</code> 中节点数目为 <code>n</code></li><li><code>0 &lt;= m, n &lt;= 3 * 10^4</code></li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li><li><code>0 &lt;= skipA &lt;= m</code></li><li><code>0 &lt;= skipB &lt;= n</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 没有交点，<code>intersectVal</code> 为 <code>0</code></li><li>如果 <code>listA</code> 和 <code>listB</code> 有交点，<code>intersectVal == listA[skipA + 1] == listB[skipB + 1]</code></li></ul><p><strong>进阶：</strong> 能否设计一个时间复杂度 <code>O(n)</code> 、仅用 <code>O(1)</code> 内存的解决方案？</p>',18),y={class:"hint-container warning"},B=n("p",{class:"hint-container-title"},"注意",-1),x=p('<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这题难点在于，由于两条链表的长度可能不同，两条链表之间的节点无法对应。</p><h3 id="思路一-双指针" tabindex="-1"><a class="header-anchor" href="#思路一-双指针" aria-hidden="true">#</a> 思路一：双指针</h3><p>可以使用双指针，用两个指针 <code>p1</code> 和 <code>p2</code> 分别在两条链表上前进，可以让 <code>p1</code> 遍历完链表 A 之后开始遍历链表 B，让 <code>p2</code> 遍历完链表 B 之后开始遍历链表 A，这样相当于「逻辑上」两条链表接在了一起，这样就可以让 <code>p1</code> 和 <code>p2</code> 同时进入公共部分，也就是同时到达相交节点。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(lenA + lenB)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><hr><h3 id="思路二-双指针" tabindex="-1"><a class="header-anchor" href="#思路二-双指针" aria-hidden="true">#</a> 思路二：双指针</h3><p>另一种思路，先计算两个链表的长度差，记为 <code>diff</code>。如果 <code>lenA &gt; lenB</code>，则将 <code>headA</code> 向后移动 <code>diff</code> 步，使得两个链表剩余的长度相等；如果 <code>lenB &gt; lenA</code>，则将 <code>headB</code> 向后移动 <code>diff</code> 步，使得两个链表剩余的长度相等。</p><p>然后，同时移动 <code>headA</code> 和 <code>headB</code>，直到找到相交的节点 C 或者走到链表的末尾。如果找到相交的节点 C，则返回该节点；如果走到链表的末尾，则说明两个链表不相交，返回 <code>null</code>。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(lenA + lenB)</code></li><li><strong>空间复杂度</strong>：<code>O(1)</code></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',13),L=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headA"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headB"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getIntersectionNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("headA"),n("span",{class:"token punctuation"},","),s(" headB")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" p1 "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" p2 "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("p1 "),n("span",{class:"token operator"},"!=="),s(" p2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p1 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p1 `),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("p2 "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p2 `),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headA"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"headB"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("ListNode"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"var"),s(),n("span",{class:"token function-variable function"},"getIntersectionNode"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("headA"),n("span",{class:"token punctuation"},","),s(" headB")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
	`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"getLength"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"let"),s(" len "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("head "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			head `),n("span",{class:"token operator"},"="),s(" head"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
			len`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
		`),n("span",{class:"token keyword"},"return"),s(" len"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" lenA "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getLength"),n("span",{class:"token punctuation"},"("),s("headA"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"const"),s(" lenB "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"getLength"),n("span",{class:"token punctuation"},"("),s("headB"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" p1 "),n("span",{class:"token operator"},"="),s(" headA"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"let"),s(" p2 "),n("span",{class:"token operator"},"="),s(" headB"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("lenA "),n("span",{class:"token operator"},">"),s(" lenB"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" lenA "),n("span",{class:"token operator"},"-"),s(" lenB"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
		`),n("span",{class:"token keyword"},"for"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(" i "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(" i "),n("span",{class:"token operator"},"<"),s(" lenB "),n("span",{class:"token operator"},"-"),s(" lenA"),n("span",{class:"token punctuation"},";"),s(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
			p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("p1 "),n("span",{class:"token operator"},"!=="),s(" p2"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
		p1 `),n("span",{class:"token operator"},"="),s(" p1"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
		p2 `),n("span",{class:"token operator"},"="),s(" p2"),n("span",{class:"token punctuation"},"."),s("next"),n("span",{class:"token punctuation"},";"),s(`
	`),n("span",{class:"token punctuation"},"}"),s(`
	`),n("span",{class:"token keyword"},"return"),s(" p1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function I(V,j){const i=o("font"),e=o("RouterLink"),u=o("ExternalLinkIcon"),r=o("CodeTabs");return k(),m("div",null,[b,n("p",null,[s("🟢 "),t(i,{color:"#15bd66"},{default:a(()=>[s("Easy")]),_:1}),s("  🔖  "),t(e,{to:"/tag/hash-table.html"},{default:a(()=>[v]),_:1}),s(),t(e,{to:"/tag/linked-list.html"},{default:a(()=>[g]),_:1}),s(),t(e,{to:"/tag/two-pointers.html"},{default:a(()=>[_]),_:1}),s("  🔗 "),n("a",f,[w,t(u)])]),A,n("div",y,[B,n("p",null,[s("本题与 LeetCode "),t(e,{to:"/problem/0160.html"},{default:a(()=>[s("第 160 题")]),_:1}),s(" 相同。")])]),x,t(r,{id:"201",data:[{id:"双指针"},{id:"双指针"}]},{title0:a(({value:c,isActive:l})=>[s("双指针")]),title1:a(({value:c,isActive:l})=>[s("双指针")]),tab0:a(({value:c,isActive:l})=>[L]),tab1:a(({value:c,isActive:l})=>[N]),_:1})])}const q=d(h,[["render",I],["__file","jz_offer_II_023.html.vue"]]);export{q as default};

import{_ as p,r as l,o as u,c as k,a as n,b as e,d as t,w as s,f as h,e as m}from"./app-MkGfDfkx.js";const _={},b=n("h1",{id:"_19-删除链表的倒数第-n-个结点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_19-删除链表的倒数第-n-个结点","aria-hidden":"true"},"#"),e(" 19. 删除链表的倒数第 N 个结点")],-1),f=n("code",null,"链表",-1),g=n("code",null,"双指针",-1),v={href:"https://leetcode.cn/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/remove-nth-node-from-end-of-list",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"LeetCode",-1),L=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a linked list, remove the <code>nth</code> node from the end of the list and return its head.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/10/03/remove_ex1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,3,4,5], n = 2</p><p>Output: [1,2,3,5]</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: head = [1], n = 1</p><p>Output: []</p></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: head = [1,2], n = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is <code>sz</code>.</li><li><code>1 &lt;= sz &lt;= 30</code></li><li><code>0 &lt;= Node.val &lt;= 100</code></li><li><code>1 &lt;= n &lt;= sz</code></li></ul><p><strong>Follow up:</strong> Could you do this in one pass?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>删除链表中倒数第 n 个结点。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-单指针" tabindex="-1"><a class="header-anchor" href="#思路一-单指针" aria-hidden="true">#</a> 思路一：单指针</h3><ul><li>先遍历一遍链表，统计一下节点个数为 <code>len</code>，再遍历到 <code>len - n</code> 的位置，删除该位置上的节点；</li><li>需要注意的一个特例是，有可能要删除头节点，在遍历之前，新建一个头节点，让其指向原来的头节点。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(L)</code>，其中 <code>L</code> 是链表的长度。 <ul><li>首先遍历链表一次来计算链表的长度 <code>L</code>，这需要 <code>O(L)</code> 的时间。</li><li>再次遍历链表，移动指针到需要删除的节点的前一个节点，所需的时间也是 <code>O(L)</code>。</li><li>因此，总时间复杂度为 <code>O(L)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储指针和变量。</li></ul><hr><h3 id="思路二-快慢指针" tabindex="-1"><a class="header-anchor" href="#思路二-快慢指针" aria-hidden="true">#</a> 思路二：快慢指针</h3><ul><li>使用两个指针 <code>slow</code>、<code>fast</code>，都指向链表的头节点;</li><li>让快指针 <code>fast</code> 先走 n 步；</li><li>再让快慢指针同时走，每次一步，等快指针遍历到链表尾部的时候，慢指针就刚好遍历到了倒数第 n 个节点位置；</li><li>将该位置上的节点删除即可。</li></ul><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(L)</code>，其中 <code>L</code> 是链表的长度。 <ul><li>首先将快指针 <code>fast</code> 向前移动 <code>n</code> 步，这需要 <code>O(n)</code> 的时间。</li><li>然后同时移动快指针和慢指针 <code>slow</code>，直到快指针到达链表末尾。该操作遍历了链表的剩余部分，最多需要 <code>O(L - n)</code> 的时间。</li><li>因此，总的时间复杂度仍为 <code>O(L)</code>。</li></ul></li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储指针和变量。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',25),N=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"head"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"removeNthFromEnd"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("head"),n("span",{class:"token punctuation"},","),e(" n")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),e(`
		len `),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(`
		p `),n("span",{class:"token operator"},"="),e(" res"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("head"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		head `),n("span",{class:"token operator"},"="),e(" head"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		len`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"for"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),e(" i "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),e(" i "),n("span",{class:"token operator"},"<"),e(" len "),n("span",{class:"token operator"},"-"),e(" n"),n("span",{class:"token punctuation"},";"),e(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		p `),n("span",{class:"token operator"},"="),e(" p"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	p`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" p"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"head"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("number"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"n"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("ListNode"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"var"),e(),n("span",{class:"token function-variable function"},"removeNthFromEnd"),e(),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("head"),n("span",{class:"token punctuation"},","),e(" n")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" res "),n("span",{class:"token operator"},"="),e(),n("span",{class:"token keyword"},"new"),e(),n("span",{class:"token class-name"},"ListNode"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),e(" head"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" slow "),n("span",{class:"token operator"},"="),e(" res"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"let"),e(" fast "),n("span",{class:"token operator"},"="),e(" head"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("n"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		fast `),n("span",{class:"token operator"},"="),e(" fast"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		n`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	`),n("span",{class:"token keyword"},"while"),e(),n("span",{class:"token punctuation"},"("),e("fast"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
		slow `),n("span",{class:"token operator"},"="),e(" slow"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
		fast `),n("span",{class:"token operator"},"="),e(" fast"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token punctuation"},"}"),e(`
	slow`),n("span",{class:"token punctuation"},"."),e("next "),n("span",{class:"token operator"},"="),e(" slow"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
	`),n("span",{class:"token keyword"},"return"),e(" res"),n("span",{class:"token punctuation"},"."),e("next"),n("span",{class:"token punctuation"},";"),e(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),E=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"1474",-1),q=n("td",{style:{"text-align":"left"}},"删除链表 M 个节点之后的 N 个节点 🔒",-1),I=n("td",{style:{"text-align":"center"}},null,-1),V={style:{"text-align":"left"}},z=n("code",null,"链表",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),T={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/delete-n-nodes-after-m-nodes-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},F={href:"https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},M=n("td",{style:{"text-align":"center"}},"1721",-1),R=n("td",{style:{"text-align":"left"}},"交换链表中的节点",-1),G=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},D=n("code",null,"链表",-1),H=n("code",null,"双指针",-1),J=n("td",{style:{"text-align":"center"}},"🟠",-1),K={style:{"text-align":"center"}},P={href:"https://leetcode.cn/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/swapping-nodes-in-a-linked-list",target:"_blank",rel:"noopener noreferrer"},U=n("td",{style:{"text-align":"center"}},"2095",-1),W=n("td",{style:{"text-align":"left"}},"删除链表的中间节点",-1),X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},Z=n("code",null,"链表",-1),$=n("code",null,"双指针",-1),nn=n("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},tn={href:"https://leetcode.cn/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},sn={href:"https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"};function an(on,ln){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),d=l("CodeTabs");return u(),k("div",null,[b,n("p",null,[e("🟠 "),t(r,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[f]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[g]),_:1}),e("  🔗 "),n("a",v,[x,t(o)]),e(),n("a",y,[w,t(o)])]),L,t(d,{id:"193",data:[{id:"单指针"},{id:"快慢指针"}]},{title0:s(({value:c,isActive:i})=>[e("单指针")]),title1:s(({value:c,isActive:i})=>[e("快慢指针")]),tab0:s(({value:c,isActive:i})=>[N]),tab1:s(({value:c,isActive:i})=>[O]),_:1}),C,h(" prettier-ignore "),n("table",null,[E,n("tbody",null,[n("tr",null,[j,q,I,n("td",V,[t(a,{to:"/tag/linked-list.html"},{default:s(()=>[z]),_:1})]),A,n("td",T,[n("a",B,[e("🀄️"),t(o)]),e(),n("a",F,[e("🔗"),t(o)])])]),n("tr",null,[M,R,G,n("td",S,[t(a,{to:"/tag/linked-list.html"},{default:s(()=>[D]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[H]),_:1})]),J,n("td",K,[n("a",P,[e("🀄️"),t(o)]),e(),n("a",Q,[e("🔗"),t(o)])])]),n("tr",null,[U,W,n("td",X,[t(a,{to:"/problem/2095.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",Y,[t(a,{to:"/tag/linked-list.html"},{default:s(()=>[Z]),_:1}),e(),t(a,{to:"/tag/two-pointers.html"},{default:s(()=>[$]),_:1})]),nn,n("td",en,[n("a",tn,[e("🀄️"),t(o)]),e(),n("a",sn,[e("🔗"),t(o)])])])])])])}const rn=p(_,[["render",an],["__file","0019.html.vue"]]);export{rn as default};

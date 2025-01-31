import{_ as i,r as l,o as r,c as d,a as n,b as t,d as e,w as s,f as u,e as p}from"./app-MkGfDfkx.js";const k={},h=n("h1",{id:"_234-回文链表",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_234-回文链表","aria-hidden":"true"},"#"),t(" 234. 回文链表")],-1),_=n("code",null,"栈",-1),m=n("code",null,"递归",-1),f=n("code",null,"链表",-1),v=n("code",null,"双指针",-1),b={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),x={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},y=n("code",null,"LeetCode",-1),w=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given the <code>head</code> of a singly linked list, return <code>true</code> <em>if it is a</em><em>palindrome</em> <em>or</em><code>false</code> <em>otherwise</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/03/pal1linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2,2,1]</p><p>Output: true</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/03/pal2linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,2]</p><p>Output: false</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is in the range <code>[1, 10^5]</code>.</li><li><code>0 &lt;= Node.val &lt;= 9</code></li></ul><p><strong>Follow up:</strong> Could you do it in <code>O(n)</code> time and <code>O(1)</code> space?</p><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>判断一个链表是否是回文链表。要求时间复杂度 <code>O(n)</code>，空间复杂度 <code>O(1)</code>。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',14),N=p(`<ul><li>先找到中间结点，然后反转中间结点后面到结尾的所有结点；</li><li>最后依次判断头结点开始的结点和中间结点往后开始的结点是否相等；</li><li>如果一直相等，就是回文链表，如果有不相等的，直接返回不是回文链表。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">isPalindrome</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>head <span class="token operator">||</span> <span class="token operator">!</span>head<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token comment">// 找到中点</span>
	<span class="token keyword">let</span> slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> fast <span class="token operator">=</span> head<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">.</span>next <span class="token operator">&amp;&amp;</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// 从中间开始反转链表</span>
	<span class="token keyword">const</span> middle <span class="token operator">=</span> slow<span class="token punctuation">;</span>
	<span class="token keyword">let</span> cur <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		cur<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		temp<span class="token punctuation">.</span>next <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		middle<span class="token punctuation">.</span>next <span class="token operator">=</span> temp<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	slow <span class="token operator">=</span> head<span class="token punctuation">;</span>
	fast <span class="token operator">=</span> middle<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>fast<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>slow<span class="token punctuation">.</span>val <span class="token operator">==</span> fast<span class="token punctuation">.</span>val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
			slow <span class="token operator">=</span> slow<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
			fast <span class="token operator">=</span> fast<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,4),C=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),E=n("td",{style:{"text-align":"center"}},"9",-1),L=n("td",{style:{"text-align":"left"}},"回文数",-1),O={style:{"text-align":"center"}},j={style:{"text-align":"left"}},V=n("code",null,"数学",-1),q=n("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},B={href:"https://leetcode.cn/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},z={href:"https://leetcode.com/problems/palindrome-number",target:"_blank",rel:"noopener noreferrer"},R=n("td",{style:{"text-align":"center"}},"125",-1),T=n("td",{style:{"text-align":"left"}},"验证回文串",-1),F={style:{"text-align":"center"}},G={style:{"text-align":"left"}},P=n("code",null,"双指针",-1),S=n("code",null,"字符串",-1),A=n("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},H={href:"https://leetcode.cn/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},J={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},"206",-1),M=n("td",{style:{"text-align":"left"}},"反转链表",-1),Q={style:{"text-align":"center"}},U={style:{"text-align":"left"}},W=n("code",null,"递归",-1),X=n("code",null,"链表",-1),Y=n("td",{style:{"text-align":"center"}},"🟢",-1),Z={style:{"text-align":"center"}},$={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},nn={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"2130",-1),en=n("td",{style:{"text-align":"left"}},"链表最大孪生和",-1),sn={style:{"text-align":"center"}},an={style:{"text-align":"left"}},on=n("code",null,"栈",-1),ln=n("code",null,"链表",-1),pn=n("code",null,"双指针",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),rn={style:{"text-align":"center"}},dn={href:"https://leetcode.cn/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"};function kn(hn,_n){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return r(),d("div",null,[h,n("p",null,[t("🟢 "),e(c,{color:"#15bd66"},{default:s(()=>[t("Easy")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/recursion.html"},{default:s(()=>[m]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",b,[g,e(o)]),t(),n("a",x,[y,e(o)])]),w,n("p",null,[t("这道题只需要在 "),e(a,{to:"/problem/0143.html"},{default:s(()=>[t("第 143 题")]),_:1}),t(" 上面改改就可以了，思路是完全一致的。")]),N,u(" prettier-ignore "),n("table",null,[C,n("tbody",null,[n("tr",null,[E,L,n("td",O,[e(a,{to:"/problem/0009.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",j,[e(a,{to:"/tag/math.html"},{default:s(()=>[V]),_:1})]),q,n("td",I,[n("a",B,[t("🀄️"),e(o)]),t(),n("a",z,[t("🔗"),e(o)])])]),n("tr",null,[R,T,n("td",F,[e(a,{to:"/problem/0125.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",G,[e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[P]),_:1}),t(),e(a,{to:"/tag/string.html"},{default:s(()=>[S]),_:1})]),A,n("td",D,[n("a",H,[t("🀄️"),e(o)]),t(),n("a",J,[t("🔗"),e(o)])])]),n("tr",null,[K,M,n("td",Q,[e(a,{to:"/problem/0206.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",U,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[W]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[X]),_:1})]),Y,n("td",Z,[n("a",$,[t("🀄️"),e(o)]),t(),n("a",nn,[t("🔗"),e(o)])])]),n("tr",null,[tn,en,n("td",sn,[e(a,{to:"/problem/2130.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",an,[e(a,{to:"/tag/stack.html"},{default:s(()=>[on]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[ln]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[pn]),_:1})]),cn,n("td",rn,[n("a",dn,[t("🀄️"),e(o)]),t(),n("a",un,[t("🔗"),e(o)])])])])])])}const fn=i(k,[["render",kn],["__file","0234.html.vue"]]);export{fn as default};

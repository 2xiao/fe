import{_ as p,r as l,o as i,c as d,a as n,b as e,d as t,w as s,f as r,e as u}from"./app-U2ekqv2z.js";const h={},k=n("h1",{id:"_138-随机链表的复制",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_138-随机链表的复制","aria-hidden":"true"},"#"),e(" 138. 随机链表的复制")],-1),_=n("code",null,"哈希表",-1),m=n("code",null,"链表",-1),g={href:"https://leetcode.cn/problems/copy-list-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),v={href:"https://leetcode.com/problems/copy-list-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"LeetCode",-1),y=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),x=n("p",null,[e("A linked list of length "),n("code",null,"n"),e(" is given such that each node contains an additional random pointer, which could point to any node in the list, or "),n("code",null,"null"),e(".")],-1),w={href:"https://en.wikipedia.org/wiki/Object_copying#Deep_copy",target:"_blank",rel:"noopener noreferrer"},N=n("strong",null,"deep copy",-1),E=n("code",null,"n",-1),q=n("strong",null,"brand new",-1),C=n("code",null,"next",-1),L=n("code",null,"random",-1),I=n("strong",null,"None of the pointers in the new list should point to nodes in the original list",-1),V=u(`<p>For example, if there are two nodes <code>X</code> and <code>Y</code> in the original list, where <code>X.random --&gt; Y</code>, then for the corresponding two nodes <code>x</code> and <code>y</code> in the copied list, <code>x.random --&gt; y</code>.</p><p>Return <em>the head of the copied linked list</em>.</p><p>The linked list is represented in the input/output as a list of <code>n</code> nodes. Each node is represented as a pair of <code>[val, random_index]</code> where:</p><ul><li><code>val</code>: an integer representing <code>Node.val</code></li><li><code>random_index</code>: the index of the node (range from <code>0</code> to <code>n-1</code>) that the <code>random</code> pointer points to, or <code>null</code> if it does not point to any node.</li></ul><p>Your code will <strong>only</strong> be given the <code>head</code> of the original linked list.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/12/18/e1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]</p><p>Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2019/12/18/e2.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [[1,1],[2,1]]</p><p>Output: [[1,1],[2,1]]</p></blockquote><p><strong>Example 3:</strong></p><p><strong><img src="https://assets.leetcode.com/uploads/2019/12/18/e3.png" alt="" loading="lazy"></strong></p><blockquote><p>Input: head = [[3,null],[3,0],[3,null]]</p><p>Output: [[3,null],[3,0],[3,null]]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= n &lt;= 1000</code></li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li><li><code>Node.random</code> is <code>null</code> or is pointing to some node in the linked list.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个长度为 <code>n</code> 的链表，每个节点包含一个额外增加的随机指针 <code>random</code> ，该指针可以指向链表中的任何节点或空节点。</p><p>构造这个链表的 深拷贝。 深拷贝应该正好由 <code>n</code> 个 全新 节点组成，其中每个新节点的值都设为其对应的原节点的值。新节点的 <code>next</code> 指针和 <code>random</code> 指针也都应指向复制链表中的新节点，并使原链表和复制链表中的这些指针能够表示相同的链表状态。复制链表中的指针都不应指向原链表中的节点 。</p><p>例如，如果原链表中有 <code>X</code> 和 <code>Y</code> 两个节点，其中 <code>X.random --&gt; Y</code> 。那么在复制链表中对应的两个节点 <code>x</code> 和 <code>y</code> ，同样有 <code>x.random --&gt; y</code> 。</p><p>返回复制链表的头节点。</p><p>用一个由 <code>n</code> 个节点组成的链表来表示输入/输出中的链表。每个节点用一个 <code>[val, random_index]</code> 表示：</p><ul><li><code>val</code>：一个表示 <code>Node.val</code> 的整数。</li><li><code>random_index</code>：随机指针指向的节点索引（范围从 <code>0</code> 到 <code>n-1</code>）；如果不指向任何节点，则为 <code>null</code> 。</li></ul><p>你的代码 <strong>只</strong> 接受原链表的头节点 <code>head</code> 作为传入参数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>对于数据结构复制，不管怎么变，你就记住最简单的方式： <strong>一个哈希表 + 两次遍历</strong> 。</p><p>第一次遍历专门克隆节点，借助哈希表把原始节点和克隆节点的映射存储起来；第二次专门组装节点，照着原数据结构的样子，把克隆节点的指针组装起来。</p><p>题目如果让你克隆带随机指针的二叉树，或者克隆图，都是一样的，只不过是遍历的方式从 for 循环迭代遍历变成 traverse 递归函数遍历罢了。</p><p>另外，这道题和 <a href="./0133">第 133 题 克隆图</a> 是一模一样的，因为链表加一个随机指针本质上就变成了一幅图。</p><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * // Definition for a Node.
 * function Node(val, next, random) <span class="token punctuation">{</span>
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * <span class="token punctuation">}</span>;
 */</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>Node<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">copyRandomList</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> clone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>clone<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>p<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Node</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> p <span class="token operator">=</span> head<span class="token punctuation">;</span> p <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">;</span> p <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>next <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>next <span class="token operator">=</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>random <span class="token operator">!==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span>random <span class="token operator">=</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span>random<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> clone<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,32),Y=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),j=n("td",{style:{"text-align":"center"}},"133",-1),B=n("td",{style:{"text-align":"left"}},"克隆图",-1),O={style:{"text-align":"center"}},R={style:{"text-align":"left"}},X=n("code",null,"深度优先搜索",-1),z=n("code",null,"广度优先搜索",-1),T=n("code",null,"图",-1),D=n("code",null,"1+",-1),M=n("td",{style:{"text-align":"center"}},"🟠",-1),A={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/clone-graph",target:"_blank",rel:"noopener noreferrer"},S={href:"https://leetcode.com/problems/clone-graph",target:"_blank",rel:"noopener noreferrer"},G=n("td",{style:{"text-align":"center"}},"1485",-1),H=n("td",{style:{"text-align":"left"}},"克隆含随机指针的二叉树 🔒",-1),J=n("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},P=n("code",null,"树",-1),Q=n("code",null,"深度优先搜索",-1),U=n("code",null,"广度优先搜索",-1),W=n("code",null,"2+",-1),Z=n("td",{style:{"text-align":"center"}},"🟠",-1),$={style:{"text-align":"center"}},nn={href:"https://leetcode.cn/problems/clone-binary-tree-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},en={href:"https://leetcode.com/problems/clone-binary-tree-with-random-pointer",target:"_blank",rel:"noopener noreferrer"},tn=n("td",{style:{"text-align":"center"}},"1490",-1),sn=n("td",{style:{"text-align":"left"}},"克隆 N 叉树 🔒",-1),an=n("td",{style:{"text-align":"center"}},null,-1),on={style:{"text-align":"left"}},ln=n("code",null,"树",-1),cn=n("code",null,"深度优先搜索",-1),pn=n("code",null,"广度优先搜索",-1),dn=n("code",null,"1+",-1),rn=n("td",{style:{"text-align":"center"}},"🟠",-1),un={style:{"text-align":"center"}},hn={href:"https://leetcode.cn/problems/clone-n-ary-tree",target:"_blank",rel:"noopener noreferrer"},kn={href:"https://leetcode.com/problems/clone-n-ary-tree",target:"_blank",rel:"noopener noreferrer"};function _n(mn,gn){const c=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return i(),d("div",null,[k,n("p",null,[e("🟠 "),t(c,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),t(a,{to:"/tag/hash-table.html"},{default:s(()=>[_]),_:1}),e(),t(a,{to:"/tag/linked-list.html"},{default:s(()=>[m]),_:1}),e("  🔗 "),n("a",g,[f,t(o)]),e(),n("a",v,[b,t(o)])]),y,x,n("p",null,[e("Construct a "),n("a",w,[N,t(o)]),e(" of the list. The deep copy should consist of exactly "),E,e(),q,e(" nodes, where each new node has its value set to the value of its corresponding original node. Both the "),C,e(" and "),L,e(" pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. "),I,e(".")]),V,r(" prettier-ignore "),n("table",null,[Y,n("tbody",null,[n("tr",null,[j,B,n("td",O,[t(a,{to:"/problem/0133.html"},{default:s(()=>[e("[✓]")]),_:1})]),n("td",R,[t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[X]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[z]),_:1}),e(),t(a,{to:"/tag/graph.html"},{default:s(()=>[T]),_:1}),e(),D]),M,n("td",A,[n("a",F,[e("🀄️"),t(o)]),e(),n("a",S,[e("🔗"),t(o)])])]),n("tr",null,[G,H,J,n("td",K,[t(a,{to:"/tag/tree.html"},{default:s(()=>[P]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[Q]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[U]),_:1}),e(),W]),Z,n("td",$,[n("a",nn,[e("🀄️"),t(o)]),e(),n("a",en,[e("🔗"),t(o)])])]),n("tr",null,[tn,sn,an,n("td",on,[t(a,{to:"/tag/tree.html"},{default:s(()=>[ln]),_:1}),e(),t(a,{to:"/tag/depth-first-search.html"},{default:s(()=>[cn]),_:1}),e(),t(a,{to:"/tag/breadth-first-search.html"},{default:s(()=>[pn]),_:1}),e(),dn]),rn,n("td",un,[n("a",hn,[e("🀄️"),t(o)]),e(),n("a",kn,[e("🔗"),t(o)])])])])])])}const vn=p(h,[["render",_n],["__file","0138.html.vue"]]);export{vn as default};

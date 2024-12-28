import{_ as c,r as l,o as i,c as d,a as t,b as e,d as n,w as s,f as p,e as u}from"./app-fEpXkbSw.js";const h={},_=t("h1",{id:"_173-二叉搜索树迭代器",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_173-二叉搜索树迭代器","aria-hidden":"true"},"#"),e(" 173. 二叉搜索树迭代器")],-1),g=t("code",null,"栈",-1),k=t("code",null,"树",-1),m=t("code",null,"设计",-1),f=t("code",null,"二叉搜索树",-1),b=t("code",null,"二叉树",-1),x=t("code",null,"迭代器",-1),y={href:"https://leetcode.cn/problems/binary-search-tree-iterator",target:"_blank",rel:"noopener noreferrer"},v=t("code",null,"力扣",-1),T={href:"https://leetcode.com/problems/binary-search-tree-iterator",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"LeetCode",-1),w=t("h2",{id:"题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),e(" 题目")],-1),N=t("code",null,"BSTIterator",-1),I={href:"https://en.wikipedia.org/wiki/Tree_traversal#In-order_(LNR)",target:"_blank",rel:"noopener noreferrer"},S=u(`<ul><li><code>BSTIterator(TreeNode root)</code> Initializes an object of the <code>BSTIterator</code> class. The <code>root</code> of the BST is given as part of the constructor. The pointer should be initialized to a non-existent number smaller than any element in the BST.</li><li><code>boolean hasNext()</code> Returns <code>true</code> if there exists a number in the traversal to the right of the pointer, otherwise returns <code>false</code>.</li><li><code>int next()</code> Moves the pointer to the right, then returns the number at the pointer.</li></ul><p>Notice that by initializing the pointer to a non-existent smallest number, the first call to <code>next()</code> will return the smallest element in the BST.</p><p>You may assume that <code>next()</code> calls will always be valid. That is, there will be at least a next number in the in-order traversal when <code>next()</code> is called.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2018/12/25/bst-tree.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;BSTIterator&quot;, &quot;next&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;, &quot;next&quot;, &quot;hasNext&quot;]</p><p>[[[7, 3, 15, null, null, 9, 20]], [], [], [], [], [], [], [], [], []]</p><p><strong>Output</strong></p><p>[null, 3, 7, true, 9, true, 15, true, 20, false]</p><p><strong>Explanation</strong></p><p>BSTIterator bSTIterator = new BSTIterator([7, 3, 15, null, null, 9, 20]);</p><p>bSTIterator.next(); // return 3</p><p>bSTIterator.next(); // return 7</p><p>bSTIterator.hasNext(); // return True</p><p>bSTIterator.next(); // return 9</p><p>bSTIterator.hasNext(); // return True</p><p>bSTIterator.next(); // return 15</p><p>bSTIterator.hasNext(); // return True</p><p>bSTIterator.next(); // return 20</p><p>bSTIterator.hasNext(); // return False</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the tree is in the range <code>[1, 10^5]</code>.</li><li><code>0 &lt;= Node.val &lt;= 10^6</code></li><li>At most <code>105</code> calls will be made to <code>hasNext</code>, and <code>next</code>.</li></ul><p><strong>Follow up:</strong></p><ul><li>Could you implement <code>next()</code> and <code>hasNext()</code> to run in average <code>O(1)</code> time and use <code>O(h)</code> memory, where <code>h</code> is the height of the tree?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>实现一个二叉搜索树迭代器。你将使用二叉搜索树的根节点初始化迭代器，调用 <code>next()</code> 将返回二叉搜索树中的下一个最小的数，调用 <code>hasNext()</code> 将返回二叉搜索树中是否存在下一个数。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以采用中序遍历的方式，通过队列来模拟递归过程。</p><p>因为题目要求调用 <code>next()</code> 返回下一个最小的数，即按照从小到大的顺序返回元素，这正好符合二叉搜索树中序遍历的特性，二叉搜索树（BST）的中序遍历能够按照升序顺序输出树中的所有节点值。</p><ol><li>在构造函数中，调用 <code>_inorder()</code> 方法对整个树进行中序遍历，将遍历结果按顺序存入 <code>queue</code>。</li><li><code>next()</code> 方法：返回并移除队列中的第一个元素。</li><li><code>hasNext()</code> 方法：判断队列是否还有剩余元素。</li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：</p><ul><li><strong>初始化 (<code>constructor</code>)</strong>: <code>O(n)</code>，其中 <code>n</code> 是树中节点的数量。因为 <code>_inorder()</code> 方法会遍历树中的每一个节点，并将它们按中序顺序存入队列，整体是线性时间复杂度。</li><li><strong><code>next()</code> 操作</strong>: <code>O(1)</code>，因为只需要从队列中移除并返回第一个元素。</li><li><strong><code>hasNext()</code> 操作</strong>: <code>O(1)</code>，仅仅检查队列的长度是否大于 0。</li></ul></li><li><p><strong>空间复杂度</strong>：</p><ul><li><strong>初始化 (<code>constructor</code>)</strong>: <code>O(n)</code>，队列需要存储树中的所有节点，因此空间复杂度与节点数 <code>n</code> 成正比。</li><li><strong><code>next()</code> 和 <code>hasNext()</code> 操作</strong>：<code>O(1)</code>，因为这些操作只需要访问或修改队列，不需要额外的空间。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">BSTIterator</span> <span class="token punctuation">{</span>
	<span class="token comment">// @param {TreeNode} root</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// 中序遍历</span>
	<span class="token function">_inorder</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_inorder</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {number}</span>
	<span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token comment">// @return {boolean}</span>
	<span class="token function">hasNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>queue<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,21),B=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),z=t("td",{style:{"text-align":"center"}},"94",-1),O=t("td",{style:{"text-align":"left"}},"二叉树的中序遍历",-1),C={style:{"text-align":"center"}},L={style:{"text-align":"left"}},E=t("code",null,"栈",-1),V=t("code",null,"树",-1),j=t("code",null,"深度优先搜索",-1),R=t("code",null,"1+",-1),F=t("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},A={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/binary-tree-inorder-traversal",target:"_blank",rel:"noopener noreferrer"},D=t("td",{style:{"text-align":"center"}},"251",-1),G=t("td",{style:{"text-align":"left"}},"展开二维向量 🔒",-1),H=t("td",{style:{"text-align":"center"}},null,-1),J={style:{"text-align":"left"}},K=t("code",null,"设计",-1),P=t("code",null,"数组",-1),Q=t("code",null,"双指针",-1),U=t("code",null,"1+",-1),W=t("td",{style:{"text-align":"center"}},"🟠",-1),X={style:{"text-align":"center"}},Z={href:"https://leetcode.cn/problems/flatten-2d-vector",target:"_blank",rel:"noopener noreferrer"},$={href:"https://leetcode.com/problems/flatten-2d-vector",target:"_blank",rel:"noopener noreferrer"},tt=t("td",{style:{"text-align":"center"}},"281",-1),et=t("td",{style:{"text-align":"left"}},"锯齿迭代器 🔒",-1),nt=t("td",{style:{"text-align":"center"}},null,-1),st={style:{"text-align":"left"}},ot=t("code",null,"设计",-1),at=t("code",null,"队列",-1),lt=t("code",null,"数组",-1),rt=t("code",null,"1+",-1),ct=t("td",{style:{"text-align":"center"}},"🟠",-1),it={style:{"text-align":"center"}},dt={href:"https://leetcode.cn/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},pt={href:"https://leetcode.com/problems/zigzag-iterator",target:"_blank",rel:"noopener noreferrer"},ut=t("td",{style:{"text-align":"center"}},"284",-1),ht=t("td",{style:{"text-align":"left"}},"窥视迭代器",-1),_t=t("td",{style:{"text-align":"center"}},null,-1),gt={style:{"text-align":"left"}},kt=t("code",null,"设计",-1),mt=t("code",null,"数组",-1),ft=t("code",null,"迭代器",-1),bt=t("td",{style:{"text-align":"center"}},"🟠",-1),xt={style:{"text-align":"center"}},yt={href:"https://leetcode.cn/problems/peeking-iterator",target:"_blank",rel:"noopener noreferrer"},vt={href:"https://leetcode.com/problems/peeking-iterator",target:"_blank",rel:"noopener noreferrer"},Tt=t("td",{style:{"text-align":"center"}},"285",-1),qt=t("td",{style:{"text-align":"left"}},"二叉搜索树中的中序后继 🔒",-1),wt=t("td",{style:{"text-align":"center"}},null,-1),Nt={style:{"text-align":"left"}},It=t("code",null,"树",-1),St=t("code",null,"深度优先搜索",-1),Bt=t("code",null,"二叉搜索树",-1),zt=t("code",null,"1+",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),Ct={style:{"text-align":"center"}},Lt={href:"https://leetcode.cn/problems/inorder-successor-in-bst",target:"_blank",rel:"noopener noreferrer"},Et={href:"https://leetcode.com/problems/inorder-successor-in-bst",target:"_blank",rel:"noopener noreferrer"},Vt=t("td",{style:{"text-align":"center"}},"1586",-1),jt=t("td",{style:{"text-align":"left"}},"二叉搜索树迭代器 II 🔒",-1),Rt=t("td",{style:{"text-align":"center"}},null,-1),Ft={style:{"text-align":"left"}},Mt=t("code",null,"栈",-1),At=t("code",null,"树",-1),Yt=t("code",null,"设计",-1),Dt=t("code",null,"3+",-1),Gt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ht={style:{"text-align":"center"}},Jt={href:"https://leetcode.cn/problems/binary-search-tree-iterator-ii",target:"_blank",rel:"noopener noreferrer"},Kt={href:"https://leetcode.com/problems/binary-search-tree-iterator-ii",target:"_blank",rel:"noopener noreferrer"};function Pt(Qt,Ut){const r=l("font"),o=l("RouterLink"),a=l("ExternalLinkIcon");return i(),d("div",null,[_,t("p",null,[e("🟠 "),n(r,{color:"#ffb800"},{default:s(()=>[e("Medium")]),_:1}),e("  🔖  "),n(o,{to:"/tag/stack.html"},{default:s(()=>[g]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[k]),_:1}),e(),n(o,{to:"/tag/design.html"},{default:s(()=>[m]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[f]),_:1}),e(),n(o,{to:"/tag/binary-tree.html"},{default:s(()=>[b]),_:1}),e(),n(o,{to:"/tag/iterator.html"},{default:s(()=>[x]),_:1}),e("  🔗 "),t("a",y,[v,n(a)]),e(),t("a",T,[q,n(a)])]),w,t("p",null,[e("Implement the "),N,e(" class that represents an iterator over the "),t("strong",null,[t("a",I,[e("in-order traversal"),n(a)])]),e(" of a binary search tree (BST):")]),S,p(" prettier-ignore "),t("table",null,[B,t("tbody",null,[t("tr",null,[z,O,t("td",C,[n(o,{to:"/problem/0094.html"},{default:s(()=>[e("[✓]")]),_:1})]),t("td",L,[n(o,{to:"/tag/stack.html"},{default:s(()=>[E]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[V]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[j]),_:1}),e(),R]),F,t("td",M,[t("a",A,[e("🀄️"),n(a)]),e(),t("a",Y,[e("🔗"),n(a)])])]),t("tr",null,[D,G,H,t("td",J,[n(o,{to:"/tag/design.html"},{default:s(()=>[K]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[P]),_:1}),e(),n(o,{to:"/tag/two-pointers.html"},{default:s(()=>[Q]),_:1}),e(),U]),W,t("td",X,[t("a",Z,[e("🀄️"),n(a)]),e(),t("a",$,[e("🔗"),n(a)])])]),t("tr",null,[tt,et,nt,t("td",st,[n(o,{to:"/tag/design.html"},{default:s(()=>[ot]),_:1}),e(),n(o,{to:"/tag/queue.html"},{default:s(()=>[at]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[lt]),_:1}),e(),rt]),ct,t("td",it,[t("a",dt,[e("🀄️"),n(a)]),e(),t("a",pt,[e("🔗"),n(a)])])]),t("tr",null,[ut,ht,_t,t("td",gt,[n(o,{to:"/tag/design.html"},{default:s(()=>[kt]),_:1}),e(),n(o,{to:"/tag/array.html"},{default:s(()=>[mt]),_:1}),e(),n(o,{to:"/tag/iterator.html"},{default:s(()=>[ft]),_:1})]),bt,t("td",xt,[t("a",yt,[e("🀄️"),n(a)]),e(),t("a",vt,[e("🔗"),n(a)])])]),t("tr",null,[Tt,qt,wt,t("td",Nt,[n(o,{to:"/tag/tree.html"},{default:s(()=>[It]),_:1}),e(),n(o,{to:"/tag/depth-first-search.html"},{default:s(()=>[St]),_:1}),e(),n(o,{to:"/tag/binary-search-tree.html"},{default:s(()=>[Bt]),_:1}),e(),zt]),Ot,t("td",Ct,[t("a",Lt,[e("🀄️"),n(a)]),e(),t("a",Et,[e("🔗"),n(a)])])]),t("tr",null,[Vt,jt,Rt,t("td",Ft,[n(o,{to:"/tag/stack.html"},{default:s(()=>[Mt]),_:1}),e(),n(o,{to:"/tag/tree.html"},{default:s(()=>[At]),_:1}),e(),n(o,{to:"/tag/design.html"},{default:s(()=>[Yt]),_:1}),e(),Dt]),Gt,t("td",Ht,[t("a",Jt,[e("🀄️"),n(a)]),e(),t("a",Kt,[e("🔗"),n(a)])])])])])])}const Xt=c(h,[["render",Pt],["__file","0173.html.vue"]]);export{Xt as default};

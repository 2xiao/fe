import{_,r,o as i,c,f as d,a as t,b as l,d as e,w as o,e as h}from"./app-mXo2sCT-.js";const u={},f=h(`<h1 id="_3-2-递归算法" tabindex="-1"><a class="header-anchor" href="#_3-2-递归算法" aria-hidden="true">#</a> 3.2 递归算法</h1><p>递归是一种应用非常广泛的算法，很多数据结构和算法的编码实现都要用到递归，比如 DFS 深度优先搜索、前中后序二叉树遍历等等。</p><h4 id="递归需要满足的三个条件" tabindex="-1"><a class="header-anchor" href="#递归需要满足的三个条件" aria-hidden="true">#</a> 递归需要满足的三个条件</h4><ol><li>一个问题的解可以分解为几个子问题的解</li><li>这个问题与分解之后的子问题，除了数据规模不同，求解思路完全一样</li><li>存在递归终止条件</li></ol><h4 id="写递归代码的关键" tabindex="-1"><a class="header-anchor" href="#写递归代码的关键" aria-hidden="true">#</a> 写递归代码的关键</h4><ol><li>找到将大问题分解为小问题的规律，并且基于此写出<strong>递推公式</strong>，再推敲<strong>终止条件</strong>，最后将递推公式和终止条件翻译成代码。</li><li>遇到递归，就把它抽象成一个递推公式，不用想一层层的调用关系，不要试图用人脑去分解递归的每个步骤。</li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 终止条件</span>
	<span class="token keyword">return</span> <span class="token function">f</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// 递推公式</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的递归代码都可以改写为迭代循环的非递归写法。</p><h4 id="弊端" tabindex="-1"><a class="header-anchor" href="#弊端" aria-hidden="true">#</a> 弊端</h4><ol><li>警惕栈溢出：可以声明一个全局变量来控制递归的深度，从而避免栈溢出。</li><li>警惕重复计算：通过某种数据结构来保存已经求解过的值，从而避免重复计算。</li></ol>`,10),m=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),l(" 相关题目")],-1),g=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),p=t("td",{style:{"text-align":"center"}},"344",-1),y={style:{"text-align":"left"}},x={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},b={style:{"text-align":"center"}},k={style:{"text-align":"left"}},v=t("code",null,"双指针",-1),E=t("code",null,"字符串",-1),w={style:{"text-align":"left"}},I=t("td",{style:{"text-align":"center"}},"24",-1),T={style:{"text-align":"left"}},N={href:"https://leetcode.com/problems/swap-nodes-in-pairs",target:"_blank",rel:"noopener noreferrer"},z={style:{"text-align":"center"}},S={style:{"text-align":"left"}},D=t("code",null,"递归",-1),L=t("code",null,"链表",-1),M={style:{"text-align":"left"}},R=t("td",{style:{"text-align":"center"}},"118",-1),V={style:{"text-align":"left"}},j={href:"https://leetcode.com/problems/pascals-triangle",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},B={style:{"text-align":"left"}},C=t("code",null,"数组",-1),O=t("code",null,"动态规划",-1),P={style:{"text-align":"left"}},q=t("td",{style:{"text-align":"center"}},"119",-1),H={style:{"text-align":"left"}},U={href:"https://leetcode.com/problems/pascals-triangle-ii",target:"_blank",rel:"noopener noreferrer"},F=t("td",{style:{"text-align":"center"}},null,-1),K={style:{"text-align":"left"}},G=t("code",null,"数组",-1),J=t("code",null,"动态规划",-1),Q={style:{"text-align":"left"}},W=t("td",{style:{"text-align":"center"}},"206",-1),X={style:{"text-align":"left"}},Y={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},Z={style:{"text-align":"center"}},$={style:{"text-align":"left"}},tt=t("code",null,"递归",-1),et=t("code",null,"链表",-1),lt={style:{"text-align":"left"}},ot=t("td",{style:{"text-align":"center"}},"92",-1),nt={style:{"text-align":"left"}},st={href:"https://leetcode.com/problems/reverse-linked-list-ii",target:"_blank",rel:"noopener noreferrer"},at={style:{"text-align":"center"}},dt={style:{"text-align":"left"}},rt=t("code",null,"链表",-1),_t={style:{"text-align":"left"}},it=t("td",{style:{"text-align":"center"}},"21",-1),ct={style:{"text-align":"left"}},ht={href:"https://leetcode.com/problems/merge-two-sorted-lists",target:"_blank",rel:"noopener noreferrer"},ut={style:{"text-align":"center"}},ft={style:{"text-align":"left"}},mt=t("code",null,"递归",-1),gt=t("code",null,"链表",-1),pt={style:{"text-align":"left"}},yt=t("td",{style:{"text-align":"center"}},"509",-1),xt={style:{"text-align":"left"}},bt={href:"https://leetcode.com/problems/fibonacci-number",target:"_blank",rel:"noopener noreferrer"},kt={style:{"text-align":"center"}},vt={style:{"text-align":"left"}},Et=t("code",null,"递归",-1),wt=t("code",null,"记忆化搜索",-1),It=t("code",null,"数学",-1),Tt=t("code",null,"1+",-1),Nt={style:{"text-align":"left"}},zt=t("td",{style:{"text-align":"center"}},"70",-1),St={style:{"text-align":"left"}},Dt={href:"https://leetcode.com/problems/climbing-stairs",target:"_blank",rel:"noopener noreferrer"},Lt={style:{"text-align":"center"}},Mt={style:{"text-align":"left"}},Rt=t("code",null,"记忆化搜索",-1),Vt=t("code",null,"数学",-1),jt=t("code",null,"动态规划",-1),At={style:{"text-align":"left"}},Bt=t("td",{style:{"text-align":"center"}},"104",-1),Ct={style:{"text-align":"left"}},Ot={href:"https://leetcode.com/problems/maximum-depth-of-binary-tree",target:"_blank",rel:"noopener noreferrer"},Pt={style:{"text-align":"center"}},qt={style:{"text-align":"left"}},Ht=t("code",null,"树",-1),Ut=t("code",null,"深度优先搜索",-1),Ft=t("code",null,"广度优先搜索",-1),Kt=t("code",null,"1+",-1),Gt={style:{"text-align":"left"}},Jt=t("td",{style:{"text-align":"center"}},"124",-1),Qt={style:{"text-align":"left"}},Wt={href:"https://leetcode.com/problems/binary-tree-maximum-path-sum",target:"_blank",rel:"noopener noreferrer"},Xt={style:{"text-align":"center"}},Yt={style:{"text-align":"left"}},Zt=t("code",null,"树",-1),$t=t("code",null,"深度优先搜索",-1),te=t("code",null,"动态规划",-1),ee=t("code",null,"1+",-1),le={style:{"text-align":"left"}},oe=t("td",{style:{"text-align":"center"}},"226",-1),ne={style:{"text-align":"left"}},se={href:"https://leetcode.com/problems/invert-binary-tree",target:"_blank",rel:"noopener noreferrer"},ae={style:{"text-align":"center"}},de={style:{"text-align":"left"}},re=t("code",null,"树",-1),_e=t("code",null,"深度优先搜索",-1),ie=t("code",null,"广度优先搜索",-1),ce=t("code",null,"1+",-1),he={style:{"text-align":"left"}},ue=t("td",{style:{"text-align":"center"}},"50",-1),fe={style:{"text-align":"left"}},me={href:"https://leetcode.com/problems/powx-n",target:"_blank",rel:"noopener noreferrer"},ge={style:{"text-align":"center"}},pe={style:{"text-align":"left"}},ye=t("code",null,"递归",-1),xe=t("code",null,"数学",-1),be={style:{"text-align":"left"}},ke=t("td",{style:{"text-align":"center"}},"779",-1),ve={style:{"text-align":"left"}},Ee={href:"https://leetcode.com/problems/k-th-symbol-in-grammar",target:"_blank",rel:"noopener noreferrer"},we=t("td",{style:{"text-align":"center"}},null,-1),Ie={style:{"text-align":"left"}},Te=t("code",null,"位运算",-1),Ne=t("code",null,"递归",-1),ze=t("code",null,"数学",-1),Se={style:{"text-align":"left"}},De=t("td",{style:{"text-align":"center"}},"95",-1),Le={style:{"text-align":"left"}},Me={href:"https://leetcode.com/problems/unique-binary-search-trees-ii",target:"_blank",rel:"noopener noreferrer"},Re={style:{"text-align":"center"}},Ve={style:{"text-align":"left"}},je=t("code",null,"树",-1),Ae=t("code",null,"二叉搜索树",-1),Be=t("code",null,"动态规划",-1),Ce=t("code",null,"2+",-1),Oe={style:{"text-align":"left"}},Pe=t("td",{style:{"text-align":"center"}},"剑指 Offer 62",-1),qe={style:{"text-align":"left"}},He={href:"https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof",target:"_blank",rel:"noopener noreferrer"},Ue={style:{"text-align":"center"}},Fe={style:{"text-align":"left"}},Ke=t("code",null,"递归",-1),Ge=t("code",null,"数学",-1),Je={style:{"text-align":"left"}};function Qe(We,Xe){const s=r("ExternalLinkIcon"),n=r("RouterLink"),a=r("font");return i(),c("div",null,[f,d(" START TABLE "),d(" Please keep comment here to allow auto update "),d(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),m,d(" prettier-ignore "),t("table",null,[g,t("tbody",null,[t("tr",null,[p,t("td",y,[t("a",x,[l("反转字符串"),e(s)])]),t("td",b,[e(n,{to:"/problem/0344.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",k,[e(n,{to:"/tag/two-pointers.html"},{default:o(()=>[v]),_:1}),l(),e(n,{to:"/tag/string.html"},{default:o(()=>[E]),_:1})]),t("td",w,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[I,t("td",T,[t("a",N,[l("两两交换链表中的节点"),e(s)])]),t("td",z,[e(n,{to:"/problem/0024.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",S,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[D]),_:1}),l(),e(n,{to:"/tag/linked-list.html"},{default:o(()=>[L]),_:1})]),t("td",M,[e(a,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[R,t("td",V,[t("a",j,[l("杨辉三角"),e(s)])]),t("td",A,[e(n,{to:"/problem/0118.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",B,[e(n,{to:"/tag/array.html"},{default:o(()=>[C]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[O]),_:1})]),t("td",P,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[q,t("td",H,[t("a",U,[l("杨辉三角 II"),e(s)])]),F,t("td",K,[e(n,{to:"/tag/array.html"},{default:o(()=>[G]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[J]),_:1})]),t("td",Q,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[W,t("td",X,[t("a",Y,[l("反转链表"),e(s)])]),t("td",Z,[e(n,{to:"/problem/0206.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",$,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[tt]),_:1}),l(),e(n,{to:"/tag/linked-list.html"},{default:o(()=>[et]),_:1})]),t("td",lt,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[ot,t("td",nt,[t("a",st,[l("反转链表 II"),e(s)])]),t("td",at,[e(n,{to:"/problem/0092.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",dt,[e(n,{to:"/tag/linked-list.html"},{default:o(()=>[rt]),_:1})]),t("td",_t,[e(a,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[it,t("td",ct,[t("a",ht,[l("合并两个有序链表"),e(s)])]),t("td",ut,[e(n,{to:"/problem/0021.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",ft,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[mt]),_:1}),l(),e(n,{to:"/tag/linked-list.html"},{default:o(()=>[gt]),_:1})]),t("td",pt,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[yt,t("td",xt,[t("a",bt,[l("斐波那契数"),e(s)])]),t("td",kt,[e(n,{to:"/problem/0509.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",vt,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[Et]),_:1}),l(),e(n,{to:"/tag/memoization.html"},{default:o(()=>[wt]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[It]),_:1}),l(),Tt]),t("td",Nt,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[zt,t("td",St,[t("a",Dt,[l("爬楼梯"),e(s)])]),t("td",Lt,[e(n,{to:"/problem/0070.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Mt,[e(n,{to:"/tag/memoization.html"},{default:o(()=>[Rt]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[Vt]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[jt]),_:1})]),t("td",At,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Bt,t("td",Ct,[t("a",Ot,[l("二叉树的最大深度"),e(s)])]),t("td",Pt,[e(n,{to:"/problem/0104.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",qt,[e(n,{to:"/tag/tree.html"},{default:o(()=>[Ht]),_:1}),l(),e(n,{to:"/tag/depth-first-search.html"},{default:o(()=>[Ut]),_:1}),l(),e(n,{to:"/tag/breadth-first-search.html"},{default:o(()=>[Ft]),_:1}),l(),Kt]),t("td",Gt,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[Jt,t("td",Qt,[t("a",Wt,[l("二叉树中的最大路径和"),e(s)])]),t("td",Xt,[e(n,{to:"/problem/0124.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Yt,[e(n,{to:"/tag/tree.html"},{default:o(()=>[Zt]),_:1}),l(),e(n,{to:"/tag/depth-first-search.html"},{default:o(()=>[$t]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[te]),_:1}),l(),ee]),t("td",le,[e(a,{color:"#ff334b"},{default:o(()=>[l("Hard")]),_:1})])]),t("tr",null,[oe,t("td",ne,[t("a",se,[l("翻转二叉树"),e(s)])]),t("td",ae,[e(n,{to:"/problem/0226.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",de,[e(n,{to:"/tag/tree.html"},{default:o(()=>[re]),_:1}),l(),e(n,{to:"/tag/depth-first-search.html"},{default:o(()=>[_e]),_:1}),l(),e(n,{to:"/tag/breadth-first-search.html"},{default:o(()=>[ie]),_:1}),l(),ce]),t("td",he,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])]),t("tr",null,[ue,t("td",fe,[t("a",me,[l("Pow(x, n)"),e(s)])]),t("td",ge,[e(n,{to:"/problem/0050.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",pe,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[ye]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[xe]),_:1})]),t("td",be,[e(a,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[ke,t("td",ve,[t("a",Ee,[l("第K个语法符号"),e(s)])]),we,t("td",Ie,[e(n,{to:"/tag/bit-manipulation.html"},{default:o(()=>[Te]),_:1}),l(),e(n,{to:"/tag/recursion.html"},{default:o(()=>[Ne]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[ze]),_:1})]),t("td",Se,[e(a,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[De,t("td",Le,[t("a",Me,[l("不同的二叉搜索树 II"),e(s)])]),t("td",Re,[e(n,{to:"/problem/0095.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Ve,[e(n,{to:"/tag/tree.html"},{default:o(()=>[je]),_:1}),l(),e(n,{to:"/tag/binary-search-tree.html"},{default:o(()=>[Ae]),_:1}),l(),e(n,{to:"/tag/dynamic-programming.html"},{default:o(()=>[Be]),_:1}),l(),Ce]),t("td",Oe,[e(a,{color:"#ffb800"},{default:o(()=>[l("Medium")]),_:1})])]),t("tr",null,[Pe,t("td",qe,[t("a",He,[l("圆圈中最后剩下的数字"),e(s)])]),t("td",Ue,[e(n,{to:"/offer/jz_offer_62_1.html"},{default:o(()=>[l("[✓]")]),_:1})]),t("td",Fe,[e(n,{to:"/tag/recursion.html"},{default:o(()=>[Ke]),_:1}),l(),e(n,{to:"/tag/math.html"},{default:o(()=>[Ge]),_:1})]),t("td",Je,[e(a,{color:"#15bd66"},{default:o(()=>[l("Easy")]),_:1})])])])])])}const Ze=_(u,[["render",Qe],["__file","recursion.html.vue"]]);export{Ze as default};

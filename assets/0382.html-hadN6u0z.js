import{_ as c,r as l,o as p,c as d,a as n,b as t,d as e,w as s,f as r,e as u}from"./app-MkGfDfkx.js";const h={},m=n("h1",{id:"_382-链表随机节点",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_382-链表随机节点","aria-hidden":"true"},"#"),t(" 382. 链表随机节点")],-1),k=n("code",null,"水塘抽样",-1),g=n("code",null,"链表",-1),_=n("code",null,"数学",-1),v=n("code",null,"随机化",-1),b={href:"https://leetcode.cn/problems/linked-list-random-node",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/linked-list-random-node",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),w=u(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a singly linked list, return a random node&#39;s value from the linked list. Each node must have the <strong>same probability</strong> of being chosen.</p><p>Implement the <code>Solution</code> class:</p><ul><li><code>Solution(ListNode head)</code> Initializes the object with the head of the singly-linked list <code>head</code>.</li><li><code>int getRandom()</code> Chooses a node randomly from the list and returns its value. All the nodes of the list should be equally likely to be chosen.</li></ul><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/03/16/getrand-linked-list.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>Input</strong></p><p>[&quot;Solution&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;, &quot;getRandom&quot;]</p><p>[[[1, 2, 3]], [], [], [], [], []]</p><p><strong>Output</strong></p><p>[null, 1, 3, 2, 2, 3]</p><p><strong>Explanation</strong></p><p>Solution solution = new Solution([1, 2, 3]);</p><p>solution.getRandom(); // return 1</p><p>solution.getRandom(); // return 3</p><p>solution.getRandom(); // return 2</p><p>solution.getRandom(); // return 2</p><p>solution.getRandom(); // return 3</p><p>// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the linked list will be in the range <code>[1, 10^4]</code>.</li><li><code>-10^4 &lt;= Node.val &lt;= 10^4</code></li><li>At most <code>10^4</code> calls will be made to <code>getRandom</code>.</li></ul><p><strong>Follow up:</strong></p><ul><li>What if the linked list is extremely large and its length is unknown to you?</li><li>Could you solve this efficiently without using extra space?</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个单链表，随机选择链表的一个节点，并返回相应的节点值。每个节点 <strong>被选中的概率一样</strong> 。</p><p>实现 <code>Solution</code> 类：</p><ul><li><code>Solution(ListNode head)</code> 使用整数数组初始化对象。</li><li><code>int getRandom()</code> 从链表中随机选择一个节点并返回该节点的值。链表中所有节点被选中的概率相等。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>这个问题涉及到水塘抽样算法，目标是从未知长度的链表中随机选择一个节点。水塘抽样算法允许在遍历数据流的过程中，以等概率抽样其中的一个元素。</p><ol><li>初始化水塘 <code>result</code> ，while 循环遍历链表。</li><li>从第一个节点开始，以递增的概率选择节点的值： <ul><li>对于第一个节点，以 1/1 的概率选择该节点的值，即 <code>Math.floor(Math.random() * 1) === 0</code>。</li><li>对于第二个节点，以 1/2 的概率选择该节点的值，即 <code>Math.floor(Math.random() * 2) === 0</code>。</li><li>对于第三个节点，以 1/3 的概率选择该节点的值，即 <code>Math.floor(Math.random() * 3) === 0</code>。</li><li>以此类推，对于第 k 个节点，以 1/k 的概率选择该节点的值。</li></ul></li><li>最终返回水塘中随机选择的节点的值。</li></ol><p>这个算法的核心思想是保持水塘 <code>result</code> 中的元素，以相同的概率来替换为新遇到的节点值。这样可以保证每个节点被选中的概率都是 <code>1/n</code>，其中 <code>n</code> 是节点的序号。最终在整个遍历过程中，所有节点都有相同的被选中的概率。这样实现了在未知长度链表中随机选择节点的目标。</p><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(N + M)</code>，其中 <code>n</code> 是链表的节点数。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">Solution</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">head</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token operator">=</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">Solution</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getRandom</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> result<span class="token punctuation">;</span>
	<span class="token keyword">let</span> node <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head<span class="token punctuation">;</span>
	<span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
	<span class="token comment">// while 循环遍历链表</span>
	<span class="token keyword">while</span> <span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		count<span class="token operator">++</span><span class="token punctuation">;</span>
		<span class="token comment">// 生成一个 [0, count) 之间的整数</span>
		<span class="token comment">// 这个整数等于 0 的概率就是 1/count</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> count<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			result <span class="token operator">=</span> node<span class="token punctuation">.</span>val<span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		node <span class="token operator">=</span> node<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,24),R=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),q=n("td",{style:{"text-align":"center"}},"398",-1),M=n("td",{style:{"text-align":"left"}},"随机数索引",-1),N=n("td",{style:{"text-align":"center"}},null,-1),S={style:{"text-align":"left"}},L=n("code",null,"水塘抽样",-1),C=n("code",null,"哈希表",-1),E=n("code",null,"数学",-1),j=n("code",null,"1+",-1),I=n("td",{style:{"text-align":"center"}},"🟠",-1),V={style:{"text-align":"center"}},z={href:"https://leetcode.cn/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"},B={href:"https://leetcode.com/problems/random-pick-index",target:"_blank",rel:"noopener noreferrer"};function O(A,T){const i=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon");return p(),d("div",null,[m,n("p",null,[t("🟠 "),e(i,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/reservoir-sampling.html"},{default:s(()=>[k]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[g]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[_]),_:1}),t(),e(a,{to:"/tag/randomized.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",b,[f,e(o)]),t(),n("a",y,[x,e(o)])]),w,r(" prettier-ignore "),n("table",null,[R,n("tbody",null,[n("tr",null,[q,M,N,n("td",S,[e(a,{to:"/tag/reservoir-sampling.html"},{default:s(()=>[L]),_:1}),t(),e(a,{to:"/tag/hash-table.html"},{default:s(()=>[C]),_:1}),t(),e(a,{to:"/tag/math.html"},{default:s(()=>[E]),_:1}),t(),j]),I,n("td",V,[n("a",z,[t("🀄️"),e(o)]),t(),n("a",B,[t("🔗"),e(o)])])])])])])}const G=c(h,[["render",O],["__file","0382.html.vue"]]);export{G as default};

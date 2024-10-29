import{_ as l,r as p,o as i,c as u,a as n,b as s,d as a,w as e,f as r,e as d}from"./app-mXo2sCT-.js";const k={},m={id:"_641-设计循环双端队列",tabindex:"-1"},v=n("a",{class:"header-anchor",href:"#_641-设计循环双端队列","aria-hidden":"true"},"#",-1),b={href:"https://2xiao.github.io/leetcode-js/problem/0641.html",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"设计",-1),f=n("code",null,"队列",-1),y=n("code",null,"数组",-1),_=n("code",null,"链表",-1),g={href:"https://leetcode.cn/problems/design-circular-deque",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"力扣",-1),q={href:"https://leetcode.com/problems/design-circular-deque",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),D=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design your implementation of the circular double-ended queue (deque).</p><p>Implement the <code>MyCircularDeque</code> class:</p><ul><li><code>MyCircularDeque(int k)</code> Initializes the deque with a maximum size of <code>k</code>.</li><li><code>boolean insertFront()</code> Adds an item at the front of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li><li><code>boolean insertLast()</code> Adds an item at the rear of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li><li><code>boolean deleteFront()</code> Deletes an item from the front of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li><li><code>boolean deleteLast()</code> Deletes an item from the rear of Deque. Returns <code>true</code> if the operation is successful, or <code>false</code> otherwise.</li><li><code>int getFront()</code> Returns the front item from the Deque. Returns <code>-1</code> if the deque is empty.</li><li><code>int getRear()</code> Returns the last item from Deque. Returns <code>-1</code> if the deque is empty.</li><li><code>boolean isEmpty()</code> Returns <code>true</code> if the deque is empty, or <code>false</code> otherwise.</li><li><code>boolean isFull()</code> Returns <code>true</code> if the deque is full, or <code>false</code> otherwise.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;MyCircularDeque&quot;, &quot;insertLast&quot;, &quot;insertLast&quot;, &quot;insertFront&quot;, &quot;insertFront&quot;, &quot;getRear&quot;, &quot;isFull&quot;, &quot;deleteLast&quot;, &quot;insertFront&quot;, &quot;getFront&quot;]</p><p>[[3], [1], [2], [3], [4], [], [], [], [4], []]</p><p><strong>Output</strong></p><p>[null, true, true, true, false, 2, true, true, true, 4]</p><p><strong>Explanation</strong></p><p>MyCircularDeque myCircularDeque = new MyCircularDeque(3);</p><p>myCircularDeque.insertLast(1); // return True</p><p>myCircularDeque.insertLast(2); // return True</p><p>myCircularDeque.insertFront(3); // return True</p><p>myCircularDeque.insertFront(4); // return False, the queue is full.</p><p>myCircularDeque.getRear(); // return 2</p><p>myCircularDeque.isFull(); // return True</p><p>myCircularDeque.deleteLast(); // return True</p><p>myCircularDeque.insertFront(4); // return True</p><p>myCircularDeque.getFront(); // return 4</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= k &lt;= 1000</code></li><li><code>0 &lt;= value &lt;= 1000</code></li><li>At most <code>2000</code> calls will be made to <code>insertFront</code>, <code>insertLast</code>, <code>deleteFront</code>, <code>deleteLast</code>, <code>getFront</code>, <code>getRear</code>, <code>isEmpty</code>, <code>isFull</code>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>设计实现双端队列。</p><p>实现 <code>MyCircularDeque</code> 类:</p><ul><li><code>MyCircularDeque(int k)</code> ：构造函数,双端队列最大为 <code>k</code> 。</li><li><code>boolean insertFront()</code>：将一个元素添加到双端队列头部。 如果操作成功返回 <code>true</code> ，否则返回 <code>false</code> 。</li><li><code>boolean insertLast()</code> ：将一个元素添加到双端队列尾部。如果操作成功返回 <code>true</code> ，否则返回 <code>false</code> 。</li><li><code>boolean deleteFront()</code> ：从双端队列头部删除一个元素。 如果操作成功返回 <code>true</code> ，否则返回 <code>false</code> 。</li><li><code>boolean deleteLast()</code> ：从双端队列尾部删除一个元素。如果操作成功返回 <code>true</code> ，否则返回 <code>false</code> 。</li><li><code>int getFront()</code> ：从双端队列头部获得一个元素。如果双端队列为空，返回 <code>-1</code> 。</li><li><code>int getRear()</code> ：获得双端队列的最后一个元素。 如果双端队列为空，返回 <code>-1</code> 。</li><li><code>boolean isEmpty()</code> ：若双端队列为空，则返回 <code>true</code> ，否则返回 <code>false</code> 。</li><li><code>boolean isFull()</code> ：若双端队列满了，则返回 <code>true</code> ，否则返回 <code>false</code> 。</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>可以使用数组来实现双端队列，其中:</p><ul><li><code>insertFront</code> 对应数组的 <code>unshift</code> 方法；</li><li><code>insertLast</code> 对应数组的 <code>push</code> 方法；</li><li><code>deleteFront</code> 对应数组的 <code>shift</code> 方法；</li><li><code>deleteLast</code> 对应数组的 <code>pop</code> 方法；</li><li><code>getFront</code> 和 <code>getRear</code> 对应查看数组第一个和最后一个元素；</li><li><code>isEmpty</code> 和 <code>isFull</code> 对应查看数组长度为空或者为 <code>K</code>；</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">k</span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">MyCircularDeque</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">k</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> k<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insertFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">value</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">insertLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">deleteLast</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getFront</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getRear</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isEmpty</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
 */</span>
<span class="token class-name">MyCircularDeque</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">isFull</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>arr<span class="token punctuation">.</span>length <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * Your MyCircularDeque object will be instantiated and called as such:
 * var obj = new MyCircularDeque(k)
 * var param_1 = obj.insertFront(value)
 * var param_2 = obj.insertLast(value)
 * var param_3 = obj.deleteFront()
 * var param_4 = obj.deleteLast()
 * var param_5 = obj.getFront()
 * var param_6 = obj.getRear()
 * var param_7 = obj.isEmpty()
 * var param_8 = obj.isFull()
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="相关题目" tabindex="-1"><a class="header-anchor" href="#相关题目" aria-hidden="true">#</a> 相关题目</h2>`,18),F=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"left"}},"难度")])],-1),C=n("td",{style:{"text-align":"center"}},"622",-1),L={style:{"text-align":"left"}},M={href:"https://leetcode.com/problems/design-circular-queue",target:"_blank",rel:"noopener noreferrer"},R={style:{"text-align":"center"}},j={style:{"text-align":"left"}},E=n("code",null,"设计",-1),T=n("code",null,"队列",-1),I=n("code",null,"数组",-1),N=n("code",null,"1+",-1),V={style:{"text-align":"left"}},A=n("td",{style:{"text-align":"center"}},"1670",-1),B={style:{"text-align":"left"}},z={href:"https://leetcode.com/problems/design-front-middle-back-queue",target:"_blank",rel:"noopener noreferrer"},K=n("td",{style:{"text-align":"center"}},null,-1),O={style:{"text-align":"left"}},S=n("code",null,"设计",-1),Y=n("code",null,"队列",-1),G=n("code",null,"数组",-1),H=n("code",null,"2+",-1),J={style:{"text-align":"left"}};function P(Q,U){const o=p("ExternalLinkIcon"),c=p("font"),t=p("RouterLink");return i(),u("div",null,[n("h1",m,[v,s(),n("a",b,[s("641. 设计循环双端队列"),a(o)])]),n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1}),s("  🔖  "),a(t,{to:"/tag/design.html"},{default:e(()=>[h]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[f]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[y]),_:1}),s(),a(t,{to:"/tag/linked-list.html"},{default:e(()=>[_]),_:1}),s("  🔗 "),n("a",g,[w,a(o)]),s(),n("a",q,[x,a(o)])]),D,r(" prettier-ignore "),n("table",null,[F,n("tbody",null,[n("tr",null,[C,n("td",L,[n("a",M,[s("设计循环队列"),a(o)])]),n("td",R,[a(t,{to:"/problem/0622.html"},{default:e(()=>[s("[✓]")]),_:1})]),n("td",j,[a(t,{to:"/tag/design.html"},{default:e(()=>[E]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[T]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[I]),_:1}),s(),N]),n("td",V,[a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])]),n("tr",null,[A,n("td",B,[n("a",z,[s("设计前中后队列"),a(o)])]),K,n("td",O,[a(t,{to:"/tag/design.html"},{default:e(()=>[S]),_:1}),s(),a(t,{to:"/tag/queue.html"},{default:e(()=>[Y]),_:1}),s(),a(t,{to:"/tag/array.html"},{default:e(()=>[G]),_:1}),s(),H]),n("td",J,[a(c,{color:"#ffb800"},{default:e(()=>[s("Medium")]),_:1})])])])])])}const X=l(k,[["render",P],["__file","0641.html.vue"]]);export{X as default};

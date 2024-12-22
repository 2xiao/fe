import{_ as i,r as e,o as u,c as r,a as n,b as s,d as a,w as t,e as p}from"./app-U2ekqv2z.js";const d={},k=n("h1",{id:"_113-课程顺序",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_113-课程顺序","aria-hidden":"true"},"#"),s(" 113. 课程顺序")],-1),m=n("code",null,"深度优先搜索",-1),v=n("code",null,"广度优先搜索",-1),h=n("code",null,"图",-1),b=n("code",null,"拓扑排序",-1),f={href:"https://leetcode.cn/problems/QA2IGt",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"力扣",-1),_=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>现在总共有 <code>numCourses</code> 门课需要选，记为 <code>0</code> 到 <code>numCourses-1</code>。</p><p>给定一个数组 <code>prerequisites</code> ，它的每一个元素 <code>prerequisites[i]</code> 表示两门课程之间的先修顺序。 例如 <code>prerequisites[i] = [ai, bi]</code> 表示想要学习课程 <code>ai</code> ，需要先完成课程 <code>bi</code> 。</p><p>请根据给出的总课程数 <code>numCourses</code> 和表示先修顺序的 <code>prerequisites</code> 得出一个可行的修课序列。</p><p>可能会有多个正确的顺序，只要任意返回一种就可以了。如果不可能完成所有课程，返回一个空数组。</p><p><strong>示例 1:</strong></p><blockquote><p><strong>输入:</strong> numCourses = 2, prerequisites = [[1,0]]</p><p><strong>输出:</strong>[0,1]</p><p><strong>解释:</strong> 总共有 2 门课程。要学习课程 1，你需要先完成课程 0。因此，正确的课程顺序为 [0,1] 。</p></blockquote><p><strong>示例 2:</strong></p><blockquote><p><strong>输入:</strong> numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]</p><p><strong>输出:</strong>[0,1,2,3] or [0,2,1,3]</p><p><strong>解释:</strong> 总共有 4 门课程。要学习课程 3，你应该先完成课程 1 和课程 2。并且课程 1 和课程 2 都应该排在课程 0 之后。</p><p>因此，一个正确的课程顺序是 [0,1,2,3] 。另一个正确的排序是 [0,2,1,3] 。</p></blockquote><p><strong>示例 3:</strong></p><blockquote><p><strong>输入:</strong> numCourses = 1, prerequisites = []</p><p><strong>输出:</strong>[0]</p><p><strong>解释:</strong> 总共 1 门课，直接修第一门课就可。</p></blockquote><p><strong>提示:</strong></p><ul><li><code>1 &lt;= numCourses &lt;= 2000</code></li><li><code>0 &lt;= prerequisites.length &lt;= numCourses * (numCourses - 1)</code></li><li><code>prerequisites[i].length == 2</code></li><li><code>0 &lt;= ai, bi &lt; numCourses</code></li><li><code>ai != bi</code></li><li><code>prerequisites</code> 中不存在重复元素</li></ul>',13),y={class:"hint-container warning"},w=n("p",{class:"hint-container-title"},"注意",-1),C=p(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><p>什么时候无法修完所有课程？当存在循环依赖的时候。</p><p>其实这种场景在现实生活中也十分常见，比如我们写代码 import 包也是一个例子，必须合理设计代码目录结构，否则会出现循环依赖，编译器会报错，所以编译器实际上也使用了类似算法来判断你的代码是否能够成功编译。</p><p>看到依赖问题，首先想到的就是把问题转化成「有向图」这种数据结构，只要图中存在环，那就说明存在循环依赖。</p><ol><li><strong>构建图</strong>：</li></ol><ul><li>首先可以把课程看成「有向图」中的节点，节点编号分别是 <code>0, 1, ..., numCourses-1</code>，把课程之间的依赖关系看做节点之间的有向边。</li><li>比如说必须修完课程 <code>1</code> 才能去修课程 <code>3</code>，那么就在图中添加一条从节点 <code>1</code> 指向 <code>3</code> 的边。</li><li>如果发现这幅有向图中存在环，那就说明课程之间存在循环依赖，肯定没办法全部上完；反之，如果没有环，那么肯定能上完全部课程。</li></ul><ol start="2"><li><strong>使用 DFS 检测环路</strong>：</li></ol><ul><li>用一个 <code>hasCycle</code> 变量记录是否存在环，<code>onPath</code> 记录一次 DFS 递归经过的节点。</li><li>当重复遍历到 <code>onPath</code> 中的节点时，就说明遇到了环，设置 <code>hasCycle = true</code>。</li><li>用一个 <code>visited</code> 变量记录遍历过的节点，防止走回头路。 <ul><li>假设以节点 <code>2</code> 为起点遍历所有可达的路径，最终发现没有环。</li><li>假设另一个节点 <code>5</code> 有一条指向 <code>2</code> 的边，在以 <code>5</code> 为起点遍历所有可达的路径时，肯定还会走到 <code>2</code>，此时就不需要继续遍历 <code>2</code> 的所有可达路径了，避免了冗余计算</li></ul></li><li>遍历图中的所有节点，通过是否有环即可判断能否修完所有课程。</li></ul><ol start="3"><li><strong>收集学习顺序</strong>：</li></ol><ul><li>用一个 <code>path</code> 变量记录最终的学习路径，在 DFS 的后序位置更新 <code>path</code>，如果没有环路，将当前课程添加到 <code>path</code> 中。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(V + E)</code></p><ul><li>图的构建时间复杂度为 <code>O(V + E)</code>，其中 <code>V</code> 是课程数量，<code>E</code> 是先决条件的数量。</li><li>DFS 遍历每个节点和每条边，因此 DFS 的时间复杂度也是 <code>O(V + E)</code>。</li><li>因此，总的时间复杂度为 <code>O(V + E)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(V + E)</code></p><ul><li>需要使用额外的空间来存储图、访问状态数组和路径数组，空间复杂度为 <code>O(V + E)</code>。</li><li>额外的递归栈空间取决于课程的数量，最坏情况下为 <code>O(V)</code>。</li><li>因此，总的空间复杂度为 <code>O(V + E)</code>。</li></ul></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">numCourses</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">prerequisites</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">findOrder</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">numCourses<span class="token punctuation">,</span> prerequisites</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> graph <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">]</span> <span class="token keyword">of</span> prerequisites<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		graph<span class="token punctuation">[</span>a<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">let</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		onPath <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>numCourses<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fill</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		path <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		hasCycle <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

	<span class="token keyword">const</span> <span class="token function-variable function">dfs</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">graph<span class="token punctuation">,</span> i</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			hasCycle <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>hasCycle <span class="token operator">||</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token keyword">of</span> graph<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> j<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>

		path<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
		onPath<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>

	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> numCourses<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token function">dfs</span><span class="token punctuation">(</span>graph<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>

	<span class="token keyword">return</span> hasCycle <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> path<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function q(x,V){const c=e("font"),o=e("RouterLink"),l=e("ExternalLinkIcon");return u(),r("div",null,[k,n("p",null,[s("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/depth-first-search.html"},{default:t(()=>[m]),_:1}),s(),a(o,{to:"/tag/breadth-first-search.html"},{default:t(()=>[v]),_:1}),s(),a(o,{to:"/tag/graph.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/topological-sort.html"},{default:t(()=>[b]),_:1}),s("  🔗 "),n("a",f,[g,a(l)])]),_,n("div",y,[w,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0210.html"},{default:t(()=>[s("第 210 题")]),_:1}),s(" 相同。")])]),C])}const O=i(d,[["render",q],["__file","jz_offer_II_113.html.vue"]]);export{O as default};

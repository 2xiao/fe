import{_ as i,r as o,o as p,c as r,a as n,b as a,d as s,w as e,e as d}from"./app-WL8GPOUO.js";const u={},m=n("h1",{id:"_1603-设计停车系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1603-设计停车系统","aria-hidden":"true"},"#"),a(" 1603. 设计停车系统")],-1),k=n("code",null,"设计",-1),b=n("code",null,"计数",-1),g=n("code",null,"模拟",-1),v={href:"https://leetcode.cn/problems/design-parking-system",target:"_blank",rel:"noopener noreferrer"},h=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/design-parking-system",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"LeetCode",-1),_=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Design a parking system for a parking lot. The parking lot has three kinds of parking spaces: big, medium, and small, with a fixed number of slots for each size.</p><p>Implement the <code>ParkingSystem</code> class:</p><ul><li><code>ParkingSystem(int big, int medium, int small)</code> Initializes object of the <code>ParkingSystem</code> class. The number of slots for each parking space are given as part of the constructor.</li><li><code>bool addCar(int carType)</code> Checks whether there is a parking space of <code>carType</code> for the car that wants to get into the parking lot. <code>carType</code> can be of three kinds: big, medium, or small, which are represented by <code>1</code>, <code>2</code>, and <code>3</code> respectively. <strong>A car can only park in a parking space of its</strong><code>carType</code>. If there is no space available, return <code>false</code>, else park the car in that size space and return <code>true</code>.</li></ul><p><strong>Example 1:</strong></p><blockquote><p><strong>Input</strong></p><p>[&quot;ParkingSystem&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;]</p><p>[[1, 1, 0], [1], [2], [3], [1]]</p><p><strong>Output</strong></p><p>[null, true, true, false, false]</p><p><strong>Explanation</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // return true because there is 1 available slot for a big car
parkingSystem.addCar(2); // return true because there is 1 available slot for a medium car
parkingSystem.addCar(3); // return false because there is no available slot for a small car
parkingSystem.addCar(1); // return false because there is no available slot for a big car. It is already occupied.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Constraints:</strong></p><ul><li><code>0 &lt;= big, medium, small &lt;= 1000</code></li><li><code>carType</code> is <code>1</code>, <code>2</code>, or <code>3</code></li><li>At most <code>1000</code> calls will be made to <code>addCar</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>请你给一个停车场设计一个停车系统。停车场总共有三种不同大小的车位：大，中和小，每种尺寸分别有固定数目的车位。</p><p>请你实现 <code>ParkingSystem</code> 类：</p><ul><li><code>ParkingSystem(int big, int medium, int small)</code> 初始化 <code>ParkingSystem</code> 类，三个参数分别对应每种停车位的数目。</li><li><code>bool addCar(int carType)</code> 检查是否有 <code>carType</code> 对应的停车位。 <code>carType</code> 有三种类型：大，中，小，分别用数字 <code>1</code>， <code>2</code> 和 <code>3</code> 表示。<strong>一辆车只能停在</strong> <code>carType</code> 对应尺寸的停车位中。如果没有空车位，请返回 <code>false</code> ，否则将该车停入车位并返回 <code>true</code> 。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong></p><p>[&quot;ParkingSystem&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;, &quot;addCar&quot;]</p><p>[[1, 1, 0], [1], [2], [3], [1]]</p><p><strong>输出：</strong></p><p>[null, true, true, false, false]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ParkingSystem parkingSystem = new ParkingSystem(1, 1, 0);
parkingSystem.addCar(1); // 返回 true ，因为有 1 个空的大车位
parkingSystem.addCar(2); // 返回 true ，因为有 1 个空的中车位
parkingSystem.addCar(3); // 返回 false ，因为没有空的小车位
parkingSystem.addCar(1); // 返回 false ，因为没有空的大车位，唯一一个大车位已经被占据了
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>提示：</strong></p><ul><li><code>0 &lt;= big, medium, small &lt;= 1000</code></li><li><code>carType</code> 取值为 <code>1</code>， <code>2</code> 或 <code>3</code></li><li>最多会调用 <code>addCar</code> 函数 <code>1000</code> 次</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><strong>存储车位信息：</strong></li></ol><ul><li><p>使用两个数组分别存储每种车位的总数量和当前已停车辆数：</p><ul><li><code>max</code>: 每种车位的最大数量。</li><li><code>cur</code>: 每种车位当前已停的车辆数量。</li></ul></li><li><p>在构造函数 <code>ParkingSystem</code> 中，接收 <code>big</code>、<code>medium</code> 和 <code>small</code> 参数，分别初始化 <code>max</code> 数组。</p></li><li><p>初始化 <code>cur</code> 数组为 <code>[0, 0, 0]</code>。</p></li></ul><ol start="2"><li><strong>实现停车逻辑 <code>addCar</code>：</strong></li></ol><ul><li>每次停车时，根据 <code>carType</code>（值为 1、2 或 3）找到对应的车位类别。</li><li>判断当前已停车辆是否小于最大数量： <ul><li>如果是，则增加已停车辆数 <code>cur[carType - 1]++</code>，返回 <code>true</code>。</li><li>否则，返回 <code>false</code>。</li></ul></li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>addCar</code> 的时间复杂度为 <code>O(1)</code>，数组访问和比较操作均为常数时间。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，仅使用两个长度为 3 的数组来存储车位信息。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">big</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">medium</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">small</span>
 */</span>
<span class="token keyword">class</span> <span class="token class-name">ParkingSystem</span> <span class="token punctuation">{</span>
	<span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">big<span class="token punctuation">,</span> medium<span class="token punctuation">,</span> small</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>max <span class="token operator">=</span> <span class="token punctuation">[</span>big<span class="token punctuation">,</span> medium<span class="token punctuation">,</span> small<span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">this</span><span class="token punctuation">.</span>cur <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token doc-comment comment">/**
	 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">carType</span>
	 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>boolean<span class="token punctuation">}</span></span>
	 */</span>
	<span class="token function">addCar</span><span class="token punctuation">(</span><span class="token parameter">carType</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>cur<span class="token punctuation">[</span>carType <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>max<span class="token punctuation">[</span>carType <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">this</span><span class="token punctuation">.</span>cur<span class="token punctuation">[</span>carType <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token operator">++</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
		<span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function x(C,S){const l=o("font"),t=o("RouterLink"),c=o("ExternalLinkIcon");return p(),r("div",null,[m,n("p",null,[a("🟢 "),s(l,{color:"#15bd66"},{default:e(()=>[a("Easy")]),_:1}),a("  🔖  "),s(t,{to:"/tag/design.html"},{default:e(()=>[k]),_:1}),a(),s(t,{to:"/tag/counting.html"},{default:e(()=>[b]),_:1}),a(),s(t,{to:"/tag/simulation.html"},{default:e(()=>[g]),_:1}),a("  🔗 "),n("a",v,[h,s(c)]),a(),n("a",y,[f,s(c)])]),_])}const q=i(u,[["render",x],["__file","1603.html.vue"]]);export{q as default};

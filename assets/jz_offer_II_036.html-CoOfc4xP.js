import{_ as l,r as p,o as i,c as r,a as n,b as s,d as a,w as t,e as c}from"./app-MsFeWfVD.js";const k={},d=n("h1",{id:"_36-后缀表达式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_36-后缀表达式","aria-hidden":"true"},"#"),s(" 36. 后缀表达式")],-1),g=n("code",null,"栈",-1),h=n("code",null,"数组",-1),m=n("code",null,"数学",-1),_={href:"https://leetcode.cn/problems/8Zf90G",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),v=n("h2",{id:"题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目","aria-hidden":"true"},"#"),s(" 题目")],-1),f={href:"https://baike.baidu.com/item/%E9%80%86%E6%B3%A2%E5%85%B0%E5%BC%8F/128437",target:"_blank",rel:"noopener noreferrer"},b=c("<p>有效的算符包括 <code>+</code>、<code>-</code>、<code>*</code>、<code>/</code> 。每个运算对象可以是整数，也可以是另一个逆波兰表达式。</p><p><strong>说明：</strong></p><ul><li>整数除法只保留整数部分。</li><li>给定逆波兰表达式总是有效的。换句话说，表达式总会得出有效数值且不存在除数为 0 的情况。</li></ul><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> tokens = [&quot;2&quot;,&quot;1&quot;,&quot;+&quot;,&quot;3&quot;,&quot;*&quot;]</p><p><strong>输出：</strong> 9</p><p><strong>解释：</strong> 该算式转化为常见的中缀算术表达式为：((2 + 1) * 3) = 9</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> tokens = [&quot;4&quot;,&quot;13&quot;,&quot;5&quot;,&quot;/&quot;,&quot;+&quot;]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong> 该算式转化为常见的中缀算术表达式为：(4 + (13 / 5)) = 6</p></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> tokens = [&quot;10&quot;,&quot;6&quot;,&quot;9&quot;,&quot;3&quot;,&quot;+&quot;,&quot;-11&quot;,&quot;<em>&quot;,&quot;/&quot;,&quot;</em>&quot;,&quot;17&quot;,&quot;+&quot;,&quot;5&quot;,&quot;+&quot;]</p><p><strong>输出：</strong> 22</p><p><strong>解释：</strong></p><p>该算式转化为常见的中缀算术表达式为：</p><p>((10 _ (6 / ((9 + 3) _ -11))) + 17) + 5</p><p>= ((10 _ (6 / (12 _ -11))) + 17) + 5</p><p>= ((10 * (6 / -132)) + 17) + 5</p><p>= ((10 * 0) + 17) + 5</p><p>= (0 + 17) + 5</p><p>= 17 + 5</p><p>= 22</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= tokens.length &lt;= 10^4</code></li><li><code>tokens[i]</code> 要么是一个算符（<code>&quot;+&quot;</code>、<code>&quot;-&quot;</code>、<code>&quot;*&quot;</code> 或 <code>&quot;/&quot;</code>），要么是一个在范围 <code>[-200, 200]</code> 内的整数</li></ul><p><strong>逆波兰表达式：</strong></p><p>逆波兰表达式是一种后缀表达式，所谓后缀就是指算符写在后面。</p><ul><li>平常使用的算式则是一种中缀表达式，如 <code>( 1 + 2 ) * ( 3 + 4 )</code> 。</li><li>该算式的逆波兰表达式写法为 <code>( ( 1 2 + ) ( 3 4 + ) * )</code> 。</li></ul><p>逆波兰表达式主要有以下两个优点：</p><ul><li>去掉括号后表达式无歧义，上式即便写成 <code>1 2 + 3 4 + * </code>也可以依据次序计算出正确结果。</li><li>适合用栈操作运算：遇到数字则入栈；遇到算符则取出栈顶两个数字进行计算，并将结果压入栈中。</li></ul>",16),w={class:"hint-container warning"},y=n("p",{class:"hint-container-title"},"注意",-1),x=c(`<h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><p>逆波兰表达式发明出来就是为了方便计算机运用「栈」进行表达式运算的，其运算规则如下：</p><p>按顺序遍历逆波兰表达式中的字符，如果是数字，则放入栈；如果是运算符，则将栈顶的两个元素拿出来进行运算，再将结果放入栈。对于减法和除法，运算顺序别搞反了，栈顶第二个数是被除（减）数。</p><ol><li><p><strong>遍历输入</strong>：</p><ul><li>遍历输入的字符串数组 <code>tokens</code>，对于每个元素： <ul><li><strong>操作数</strong>：如果当前元素是数字（字符串形式），将其转换为数字并推入栈中。</li><li><strong>操作符</strong>：如果当前元素是操作符（<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>），需要执行相应的操作： <ul><li>从栈中弹出最近的两个操作数。</li><li>根据操作符计算结果并将其压入栈中。</li></ul></li></ul></li></ul></li><li><p><strong>实现操作</strong>：</p><ul><li>对于每个操作符，进行相应的计算： <ul><li><strong>加法（<code>+</code>）</strong>：弹出两个数字相加，将结果压入栈中。</li><li><strong>减法（<code>-</code>）</strong>：弹出两个数字，计算第二个减第一个的结果，然后压入栈中。</li><li><strong>乘法（<code>*</code>）</strong>：弹出两个数字相乘，结果压入栈中。</li><li><strong>除法（<code>/</code>）</strong>：注意要处理整数除法的取整方式（向零取整），将第二个数字除以第一个数字的结果压入栈中。</li></ul></li></ul></li><li><p><strong>最终结果</strong>：</p><ul><li>遍历结束后，栈中只会剩下一个数字，即为最终结果，返回这个值。</li></ul></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>： <code>O(n)</code>，其中 <code>n</code> 为 <code>tokens</code> 数组的长度，只需遍历整个数组一次，每个操作（如加法、减法、乘法、除法和入栈、出栈操作）都是常数时间操作。</p></li><li><p><strong>空间复杂度</strong>： <code>O(n)</code>，在最坏情况下，栈可能会存储所有的操作数，例如在输入全为数字的情况下，栈的最大大小为 <code>O(n)</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">tokens</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">evalRPN</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">tokens</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> stack <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> tokens<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;+&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>i <span class="token operator">==</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">const</span> temp <span class="token operator">=</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token punctuation">(</span>stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">/</span> temp<span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
			stack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token function">Number</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> stack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9);function E(B,I){const u=p("font"),o=p("RouterLink"),e=p("ExternalLinkIcon");return i(),r("div",null,[d,n("p",null,[s("🟠 "),a(u,{color:"#ffb800"},{default:t(()=>[s("Medium")]),_:1}),s("  🔖  "),a(o,{to:"/tag/stack.html"},{default:t(()=>[g]),_:1}),s(),a(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),a(o,{to:"/tag/math.html"},{default:t(()=>[m]),_:1}),s("  🔗 "),n("a",_,[q,a(e)])]),v,n("p",null,[s("根据"),n("a",f,[s(" 逆波兰表示法"),a(e)]),s("，求该后缀表达式的计算结果。")]),b,n("div",w,[y,n("p",null,[s("本题与 LeetCode "),a(o,{to:"/problem/0150.html"},{default:t(()=>[s("第 150 题")]),_:1}),s(" 相同。")])]),x])}const j=l(k,[["render",E],["__file","jz_offer_II_036.html.vue"]]);export{j as default};

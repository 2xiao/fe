import{_ as i,r as o,o as u,c as r,a as s,b as n,d as a,w as t,e as p}from"./app-WL8GPOUO.js";const k={},d=s("h1",{id:"_32-iii-从上到下打印二叉树-iii",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_32-iii-从上到下打印二叉树-iii","aria-hidden":"true"},"#"),n(" 32-III. 从上到下打印二叉树 III")],-1),v=s("code",null,"树",-1),h=s("code",null,"广度优先搜索",-1),f=s("code",null,"二叉树",-1),m={href:"https://leetcode.cn/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof",target:"_blank",rel:"noopener noreferrer"},_=s("code",null,"力扣",-1),b=p('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>一棵圣诞树记作根节点为 <code>root</code> 的二叉树，节点值为该位置装饰彩灯的颜色编号。请按照如下规则记录彩灯装饰结果：</p><ul><li>第一层按照从左到右的顺序记录</li><li>除第一层外每一层的记录顺序均与上一层相反。即第一层为从左到右，第二层为从右到左。</li></ul><p><strong>示例 1：</strong></p><figure><img src="https://pic.leetcode.cn/1694758674-XYrUiV-剑指 Offer 32 - I_示例1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>输入：root = [8,17,21,18,null,null,6]</p><p>输出：[[8],[21,17],[18,6]]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>节点总数 &lt;= 1000</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2>',9),g=p(`<ol><li>首先将根节点放入队列中，用一个参数 <code>leftToRight</code> 控制记录顺序；</li><li>更新队列的长度 <code>len</code> ，遍历队列的前 <code>len</code> 个节点；</li><li>如果该节点存在直接子节点，将直接子节点加入队列中，并将节点的值存入一个临时数组中； <ul><li>如果 <code>leftToRight</code> 为 <code>true</code>，则将值 <code>push</code> 到临时数组的末尾；</li><li>如果 <code>leftToRight</code> 为 <code>false</code>，则将值 <code>unshift</code> 到临时数组的前端；</li></ul></li><li>将队列的前 <code>len</code> 个节点出队，此时队列中都是下一层的子节点，将临时数组加入返回值中；</li><li>重复步骤 2、3、4，直至队列为空；</li></ol><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>TreeNode<span class="token punctuation">}</span></span> <span class="token parameter">root</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">decorateRecord</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">if</span> <span class="token punctuation">(</span>root <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token keyword">return</span> res<span class="token punctuation">;</span>
	<span class="token keyword">let</span> queue <span class="token operator">=</span> <span class="token punctuation">[</span>root<span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">let</span> leftToRight <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>

	<span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
		<span class="token keyword">let</span> len <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
		<span class="token keyword">let</span> temp <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
		<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span> queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">if</span> <span class="token punctuation">(</span>leftToRight<span class="token punctuation">)</span> <span class="token punctuation">{</span>
				temp<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
				temp<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>queue<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span>
		<span class="token punctuation">}</span>
		queue <span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>len<span class="token punctuation">)</span><span class="token punctuation">;</span>
		res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
		leftToRight <span class="token operator">=</span> <span class="token operator">!</span>leftToRight<span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function w(y,q){const c=o("font"),e=o("RouterLink"),l=o("ExternalLinkIcon");return u(),r("div",null,[d,s("p",null,[n("🟠 "),a(c,{color:"#ffb800"},{default:t(()=>[n("Medium")]),_:1}),n("  🔖  "),a(e,{to:"/tag/tree.html"},{default:t(()=>[v]),_:1}),n(),a(e,{to:"/tag/breadth-first-search.html"},{default:t(()=>[h]),_:1}),n(),a(e,{to:"/tag/binary-tree.html"},{default:t(()=>[f]),_:1}),n("  🔗 "),s("a",m,[_,a(l)])]),b,s("p",null,[n("这道题的思路和 "),a(e,{to:"/offer/jz_offer_32_2.html"},{default:t(()=>[n("剑指 Offer 32-2 题")]),_:1}),n(" 一样，可以使用队列实现，只需用一个参数控制记录顺序:")]),g])}const R=i(k,[["render",w],["__file","jz_offer_32_3.html.vue"]]);export{R as default};

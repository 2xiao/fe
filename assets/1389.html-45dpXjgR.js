import{_ as c,r as a,o as d,c as p,a as n,b as e,d as s,w as t,e as r}from"./app-MsFeWfVD.js";const u={},m=n("h1",{id:"_1389-按既定顺序创建目标数组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1389-按既定顺序创建目标数组","aria-hidden":"true"},"#"),e(" 1389. 按既定顺序创建目标数组")],-1),v=n("code",null,"数组",-1),k=n("code",null,"模拟",-1),g={href:"https://leetcode.cn/problems/create-target-array-in-the-given-order",target:"_blank",rel:"noopener noreferrer"},b=n("code",null,"力扣",-1),h={href:"https://leetcode.com/problems/create-target-array-in-the-given-order",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"LeetCode",-1),_=r(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given two arrays of integers <code>nums</code> and <code>index</code>. Your task is to create <em>target</em> array under the following rules:</p><ul><li>Initially <em>target</em> array is empty.</li><li>From left to right read nums[i] and index[i], insert at index <code>index[i]</code> the value <code>nums[i]</code> in <em>target</em> array.</li><li>Repeat the previous step until there are no elements to read in <code>nums</code> and <code>index.</code></li></ul><p>Return the <em>target</em> array.</p><p>It is guaranteed that the insertion operations will be valid.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [0,1,2,3,4], index = [0,1,2,2,1]</p><p>Output: [0,4,1,3,2]</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1,2,3,4,0], index = [0,1,2,3,0]</p><p>Output: [0,1,2,3,4]</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 3:</strong></p><blockquote><p>Input: nums = [1], index = [0]</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length, index.length &lt;= 100</code></li><li><code>nums.length == index.length</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li><li><code>0 &lt;= index[i] &lt;= i</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你两个整数数组 <code>nums</code> 和 <code>index</code>。你需要按照以下规则创建目标数组：</p><ul><li>目标数组 <code>target</code> 最初为空。</li><li>按从左到右的顺序依次读取 <code>nums[i]</code> 和 <code>index[i]</code>，在 <code>target</code> 数组中的下标 <code>index[i]</code> 处插入值 <code>nums[i]</code> 。</li><li>重复上一步，直到在 <code>nums</code> 和 <code>index</code> 中都没有要读取的元素。</li></ul><p>请你返回目标数组。</p><p>题目保证数字插入位置总是存在。</p><p><strong>示例 1：</strong></p><blockquote><p><strong>输入：</strong> nums = [0,1,2,3,4], index = [0,1,2,2,1]</p><p><strong>输出：</strong>[0,4,1,3,2]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums       index     target
0            0        [0]
1            1        [0,1]
2            2        [0,1,2]
3            2        [0,1,3,2]
4            1        [0,4,1,3,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> nums = [1,2,3,4,0], index = [0,1,2,3,0]</p><p><strong>输出：</strong>[0,1,2,3,4]</p><p><strong>解释：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nums       index     target
1            0        [1]
2            1        [1,2]
3            2        [1,2,3]
4            3        [1,2,3,4]
0            0        [0,1,2,3,4]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>示例 3：</strong></p><blockquote><p><strong>输入：</strong> nums = [1], index = [0]</p><p><strong>输出：</strong>[1]</p></blockquote><p><strong>提示：</strong></p><ul><li><code>1 &lt;= nums.length, index.length &lt;= 100</code></li><li><code>nums.length == index.length</code></li><li><code>0 &lt;= nums[i] &lt;= 100</code></li><li><code>0 &lt;= index[i] &lt;= i</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p><strong>初始化目标数组 <code>res</code></strong>：</p><ul><li>定义一个空数组 <code>res</code> 用于存储构造结果。</li></ul></li><li><p><strong>遍历数组</strong>：</p><ul><li>对数组 <code>nums</code> 和 <code>index</code> 进行同步遍历。</li><li>使用 <code>res.splice(index[i], 0, nums[i])</code> 在目标位置 <code>index[i]</code> 插入元素 <code>nums[i]</code>： <ul><li><code>splice</code> 函数的第一个参数是插入位置。</li><li>第二个参数是要删除的元素个数（这里为 0，因为不删除任何元素）。</li><li>第三个参数是要插入的值。</li></ul></li></ul></li><li><p><strong>返回结果</strong>：</p><ul><li>遍历完成后，返回数组 <code>res</code>。</li></ul></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n^2)</code></p><ul><li>每次插入操作的时间复杂度为 <code>O(k)</code>，其中 <code>k</code> 是插入位置之后的元素个数。</li><li>在最坏情况下，对于长度为 <code>n</code> 的数组，插入操作的总时间复杂度为 <code>O(n^2)</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(n)</code>，使用额外的数组 <code>res</code> 存储结果数组。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">nums</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">index</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">createTargetArray</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">nums<span class="token punctuation">,</span> index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span>index<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,32);function f(y,w){const l=a("font"),o=a("RouterLink"),i=a("ExternalLinkIcon");return d(),p("div",null,[m,n("p",null,[e("🟢 "),s(l,{color:"#15bd66"},{default:t(()=>[e("Easy")]),_:1}),e("  🔖  "),s(o,{to:"/tag/array.html"},{default:t(()=>[v]),_:1}),e(),s(o,{to:"/tag/simulation.html"},{default:t(()=>[k]),_:1}),e("  🔗 "),n("a",g,[b,s(i)]),e(),n("a",h,[x,s(i)])]),_])}const E=c(u,[["render",f],["__file","1389.html.vue"]]);export{E as default};

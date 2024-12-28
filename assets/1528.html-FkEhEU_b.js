import{_ as i,r as a,o as l,c as r,a as n,b as s,d as e,w as t,e as d}from"./app-fEpXkbSw.js";const u={},k=n("h1",{id:"_1528-重新排列字符串",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1528-重新排列字符串","aria-hidden":"true"},"#"),s(" 1528. 重新排列字符串")],-1),h=n("code",null,"数组",-1),g=n("code",null,"字符串",-1),m={href:"https://leetcode.cn/problems/shuffle-string",target:"_blank",rel:"noopener noreferrer"},f=n("code",null,"力扣",-1),b={href:"https://leetcode.com/problems/shuffle-string",target:"_blank",rel:"noopener noreferrer"},_=n("code",null,"LeetCode",-1),v=d(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given a string <code>s</code> and an integer array <code>indices</code> of the <strong>same length</strong>. The string <code>s</code> will be shuffled such that the character at the <code>ith</code> position moves to <code>indices[i]</code> in the shuffled string.</p><p>Return <em>the shuffled string</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2020/07/09/q1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: s = &quot;codeleet&quot;, indices = [4,5,6,7,0,2,1,3]</p><p>Output: &quot;leetcode&quot;</p><p>Explanation: As shown, &quot;codeleet&quot; becomes &quot;leetcode&quot; after shuffling.</p></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: s = &quot;abc&quot;, indices = [0,1,2]</p><p>Output: &quot;abc&quot;</p><p>Explanation: After shuffling, each character remains in its position.</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>s.length == indices.length == n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>s</code> consists of only lowercase English letters.</li><li><code>0 &lt;= indices[i] &lt; n</code></li><li>All values of <code>indices</code> are <strong>unique</strong>.</li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个字符串 <code>s</code> 和一个 <strong>长度相同</strong> 的整数数组 <code>indices</code> 。</p><p>请你重新排列字符串 <code>s</code> ，其中第 <code>i</code> 个字符需要移动到 <code>indices[i]</code> 指示的位置。</p><p>返回重新排列后的字符串。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode-cn.com/aliyun-lc-upload/uploads/2020/07/26/q1.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> s = &quot;codeleet&quot;, indices = [4,5,6,7,0,2,1,3]</p><p><strong>输出：</strong> &quot;leetcode&quot;</p><p><strong>解释：</strong> 如图所示，&quot;codeleet&quot; 重新排列后变为 &quot;leetcode&quot; 。</p></blockquote><p><strong>示例 2：</strong></p><blockquote><p><strong>输入：</strong> s = &quot;abc&quot;, indices = [0,1,2]</p><p><strong>输出：</strong> &quot;abc&quot;</p><p><strong>解释：</strong> 重新排列后，每个字符都还留在原来的位置上。</p></blockquote><p><strong>提示：</strong></p><ul><li><code>s.length == indices.length == n</code></li><li><code>1 &lt;= n &lt;= 100</code></li><li><code>s</code> 仅包含小写英文字母</li><li><code>0 &lt;= indices[i] &lt; n</code></li><li><code>indices</code> 的所有的值都是 <strong>唯一</strong> 的</li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>创建一个与字符串 <code>s</code> 长度相同的数组 <code>res</code> 用于存储重新排列的字符。</p></li><li><p>遍历字符串和 <code>indices</code> 数组，对于字符串 <code>s</code> 中的每个字符以及对应的 <code>indices[i]</code>，将字符放到结果数组的正确位置： <code>res[indices[i]] = s[i]</code></p></li><li><p>使用 <code>join</code> 方法将数组 <code>res</code> 转换为一个字符串。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是字符串的长度，需要遍历字符串一次。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，使用了一个长度为 <code>n</code> 的结果数组 <code>res</code>。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span> <span class="token parameter">s</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> <span class="token parameter">indices</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>string<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">restoreString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">s<span class="token punctuation">,</span> indices</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span>s<span class="token punctuation">.</span>length<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 初始化结果数组</span>
	<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		res<span class="token punctuation">[</span>indices<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 根据索引重新排列字符</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> res<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 转换为字符串并返回</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function q(x,y){const p=a("font"),o=a("RouterLink"),c=a("ExternalLinkIcon");return l(),r("div",null,[k,n("p",null,[s("🟢 "),e(p,{color:"#15bd66"},{default:t(()=>[s("Easy")]),_:1}),s("  🔖  "),e(o,{to:"/tag/array.html"},{default:t(()=>[h]),_:1}),s(),e(o,{to:"/tag/string.html"},{default:t(()=>[g]),_:1}),s("  🔗 "),n("a",m,[f,e(c)]),s(),n("a",b,[_,e(c)])]),v])}const E=i(u,[["render",q],["__file","1528.html.vue"]]);export{E as default};

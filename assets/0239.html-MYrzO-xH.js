import{_ as r,r as c,o as k,c as d,a as n,b as t,d as s,w as a,f as h,e as m}from"./app-MsFeWfVD.js";const _={},b=n("h1",{id:"_239-滑动窗口最大值",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_239-滑动窗口最大值","aria-hidden":"true"},"#"),t(" 239. 滑动窗口最大值")],-1),g=n("code",null,"队列",-1),f=n("code",null,"数组",-1),y=n("code",null,"滑动窗口",-1),v=n("code",null,"单调队列",-1),x=n("code",null,"堆（优先队列）",-1),w={href:"https://leetcode.cn/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"力扣",-1),O={href:"https://leetcode.com/problems/sliding-window-maximum",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"LeetCode",-1),j=m(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>You are given an array of integers <code>nums</code>, there is a sliding window of size <code>k</code> which is moving from the very left of the array to the very right. You can only see the <code>k</code> numbers in the window. Each time the sliding window moves right by one position.</p><p>Return <em>the max sliding window</em>.</p><p><strong>Example 1:</strong></p><blockquote><p>Input: nums = [1,3,-1,-3,5,3,6,7], k = 3</p><p>Output: [3,3,5,5,6,7]</p><p>Explanation:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Window position                Max
---------------               -----
[1 3  -1] -3   5  3  6  7       3
1 [3  -1  -3]  5  3  6  7       3
1  3 [-1  -3   5] 3  6  7       5
1  3  -1 [-3   5  3] 6  7       5
1  3  -1  -3  [5  3  6] 7       6
1  3  -1  -3   5 [3  6  7]      7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p><strong>Example 2:</strong></p><blockquote><p>Input: nums = [1], k = 1</p><p>Output: [1]</p></blockquote><p><strong>Constraints:</strong></p><ul><li><code>1 &lt;= nums.length &lt;= 10^5</code></li><li><code>-10^4 &lt;= nums[i] &lt;= 10^4</code></li><li><code>1 &lt;= k &lt;= nums.length</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给你一个整数数组 <code>nums</code>，有一个大小为 <code>k</code> 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 <code>k</code> 个数字。滑动窗口每次只向右移动一位。</p><p>返回 <strong>滑动窗口中的最大值</strong> 。</p><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-双端队列" tabindex="-1"><a class="header-anchor" href="#思路一-双端队列" aria-hidden="true">#</a> 思路一：双端队列</h3><p>双端队列（Deque，全称 Double Ended Queue）是一种可以在两端进行插入和删除操作的数据结构。相比于普通的队列（只能在一端插入，在另一端删除），双端队列更加灵活，适用于一些特殊的场景。在 JavaScript 中，双端队列可以使用数组来模拟。</p><ol><li>遍历数组：每次移动滑动窗口时，对双端队列进行更新：</li></ol><ul><li>如果队列头部的元素已经不在当前窗口中（即索引小于 <code>i - k + 1</code>），将其移除。</li><li>在队列尾部，移除所有小于当前元素的值，因为它们不可能成为当前或之后窗口的最大值。</li><li>将当前元素的索引加入队列。</li></ul><ol start="2"><li>获取最大值：对于每一个窗口，队列的前端始终保存当前窗口的最大值的索引。</li></ol><p>注意：</p><ul><li>存储数组元素的索引：不会直接存储数组的值，而是存储元素的索引，以便通过索引访问具体的值，并通过索引判断某个元素是否还在当前滑动窗口中。</li><li>保持队列中的元素单调递减：为了保证队列的前端始终是窗口的最大值，会从队列的后端移除所有小于当前元素的索引。</li></ul><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是数组的长度。每个元素被加入和移除队列至多各一次，因此总的操作次数为 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(k)</code>，队列的大小在最坏情况下为 <code>k</code>。</li></ul><hr><h3 id="思路二-堆" tabindex="-1"><a class="header-anchor" href="#思路二-堆" aria-hidden="true">#</a> 思路二：堆</h3><p>大顶堆性质：堆是一棵二叉树，每个节点都满足：父节点的值大于左右子节点的值，堆顶元素是当前堆中的最大值。</p><p>使用大顶堆来保存滑动窗口中的 <code>k</code> 个数，每次窗口移动时，移除堆中不在当前窗口的元素，并将新元素入堆，堆顶元素就是滑动窗口中的最大值。</p><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><p><strong>时间复杂度</strong>：<code>O(n × (k + log k))</code>，这在最坏情况下比使用双端队列的 <code>O(n)</code> 时间复杂度要高，尤其当 <code>k</code> 接近 <code>n</code> 时，复杂度变为 <code>O(n × k)</code>。</p><ul><li>插入操作需要 <code>O(log k)</code>。</li><li>删除操作的复杂度为 <code>O(k)</code>，因为需要遍历堆查找需要移除的元素，然后再执行 <code>O(log k)</code> 的调整操作。</li><li>对于数组中的每个元素，滑动窗口移动时，我们需要进行一次 <strong>插入</strong> 和一次 <strong>删除</strong> 操作，数组长度为 <code>n</code>，因此，最坏情况下总时间复杂度为 <code>O(n * (k + log k))</code>。</li></ul></li><li><p><strong>空间复杂度</strong>：<code>O(k)</code>，堆中的最大元素个数为 <code>k</code>。</p></li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>`,29),E=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSlidingWindow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" deque "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" deque"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" i "),n("span",{class:"token operator"},"-"),t(" k "),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"shift"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"&&"),t(" nums"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		deque`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},">="),t(" k "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("deque"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"nums"),t(`
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"k"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"maxSlidingWindow"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("nums"),n("span",{class:"token punctuation"},","),t(" k")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" maxHeap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"MaxHeap"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
		res `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" k"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("maxHeap"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" nums"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(" k"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		maxHeap`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),t("nums"),n("span",{class:"token punctuation"},"["),t("i "),n("span",{class:"token operator"},"+"),t(" k"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		res`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("maxHeap"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"class"),t(),n("span",{class:"token class-name"},"MaxHeap"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token function"},"constructor"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"insert"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"remove"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"value"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("index "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("index"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"pop"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"heapifyUp"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token keyword"},"const"),t(" parent "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("i "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"|"),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("parent"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
				i `),n("span",{class:"token operator"},"="),t(" parent"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token punctuation"},"{"),t(`
				`),n("span",{class:"token keyword"},"break"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" left "),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),t(`
			right `),n("span",{class:"token operator"},"="),t(" i "),n("span",{class:"token operator"},"*"),t(),n("span",{class:"token number"},"2"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},","),t(`
			min `),n("span",{class:"token operator"},"="),t(" i"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("left"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" left"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("right"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			min `),n("span",{class:"token operator"},"="),t(" right"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
		`),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("min "),n("span",{class:"token operator"},"!=="),t(" i"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
			`),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),t("heap"),n("span",{class:"token punctuation"},"["),t("min"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
			`),n("span",{class:"token keyword"},"this"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"heapifyDown"),n("span",{class:"token punctuation"},"("),t("min"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),D=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),V=n("td",{style:{"text-align":"center"}},"76",-1),L=n("td",{style:{"text-align":"left"}},"最小覆盖子串",-1),N={style:{"text-align":"center"}},A={style:{"text-align":"left"}},S=n("code",null,"哈希表",-1),B=n("code",null,"字符串",-1),M=n("code",null,"滑动窗口",-1),R=n("td",{style:{"text-align":"center"}},"🔴",-1),T={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},U={href:"https://leetcode.com/problems/minimum-window-substring",target:"_blank",rel:"noopener noreferrer"},Y=n("td",{style:{"text-align":"center"}},"155",-1),z=n("td",{style:{"text-align":"left"}},"最小栈",-1),J={style:{"text-align":"center"}},K={style:{"text-align":"left"}},Q=n("code",null,"栈",-1),F=n("code",null,"设计",-1),G=n("td",{style:{"text-align":"center"}},"🟠",-1),P={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/min-stack",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://leetcode.com/problems/min-stack",target:"_blank",rel:"noopener noreferrer"},$=n("td",{style:{"text-align":"center"}},"159",-1),nn=n("td",{style:{"text-align":"left"}},"至多包含两个不同字符的最长子串 🔒",-1),tn=n("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},an=n("code",null,"哈希表",-1),en=n("code",null,"字符串",-1),on=n("code",null,"滑动窗口",-1),cn=n("td",{style:{"text-align":"center"}},"🟠",-1),ln={style:{"text-align":"center"}},pn={href:"https://leetcode.cn/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters",target:"_blank",rel:"noopener noreferrer"},rn=n("td",{style:{"text-align":"center"}},"265",-1),kn=n("td",{style:{"text-align":"left"}},"粉刷房子 II 🔒",-1),dn=n("td",{style:{"text-align":"center"}},null,-1),hn={style:{"text-align":"left"}},mn=n("code",null,"数组",-1),_n=n("code",null,"动态规划",-1),bn=n("td",{style:{"text-align":"center"}},"🔴",-1),gn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/paint-house-ii",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://leetcode.com/problems/paint-house-ii",target:"_blank",rel:"noopener noreferrer"},vn=n("td",{style:{"text-align":"center"}},"1696",-1),xn=n("td",{style:{"text-align":"left"}},"跳跃游戏 VI",-1),wn=n("td",{style:{"text-align":"center"}},null,-1),qn={style:{"text-align":"left"}},On=n("code",null,"队列",-1),Hn=n("code",null,"数组",-1),jn=n("code",null,"动态规划",-1),En=n("code",null,"2+",-1),Cn=n("td",{style:{"text-align":"center"}},"🟠",-1),In={style:{"text-align":"center"}},Dn={href:"https://leetcode.cn/problems/jump-game-vi",target:"_blank",rel:"noopener noreferrer"},Vn={href:"https://leetcode.com/problems/jump-game-vi",target:"_blank",rel:"noopener noreferrer"},Ln=n("td",{style:{"text-align":"center"}},"2398",-1),Nn=n("td",{style:{"text-align":"left"}},"预算内的最多机器人数目",-1),An=n("td",{style:{"text-align":"center"}},null,-1),Sn={style:{"text-align":"left"}},Bn=n("code",null,"队列",-1),Mn=n("code",null,"数组",-1),Rn=n("code",null,"二分查找",-1),Tn=n("code",null,"4+",-1),Wn=n("td",{style:{"text-align":"center"}},"🔴",-1),Un={style:{"text-align":"center"}},Yn={href:"https://leetcode.cn/problems/maximum-number-of-robots-within-budget",target:"_blank",rel:"noopener noreferrer"},zn={href:"https://leetcode.com/problems/maximum-number-of-robots-within-budget",target:"_blank",rel:"noopener noreferrer"},Jn=n("td",{style:{"text-align":"center"}},"2517",-1),Kn=n("td",{style:{"text-align":"left"}},"礼盒的最大甜蜜度",-1),Qn=n("td",{style:{"text-align":"center"}},null,-1),Fn={style:{"text-align":"left"}},Gn=n("code",null,"贪心",-1),Pn=n("code",null,"数组",-1),Xn=n("code",null,"二分查找",-1),Zn=n("code",null,"1+",-1),$n=n("td",{style:{"text-align":"center"}},"🟠",-1),nt={style:{"text-align":"center"}},tt={href:"https://leetcode.cn/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/maximum-tastiness-of-candy-basket",target:"_blank",rel:"noopener noreferrer"},at=n("td",{style:{"text-align":"center"}},"2530",-1),et=n("td",{style:{"text-align":"left"}},"执行 K 次操作后的最大分数",-1),ot={style:{"text-align":"center"}},ct={style:{"text-align":"left"}},lt=n("code",null,"贪心",-1),pt=n("code",null,"数组",-1),it=n("code",null,"堆（优先队列）",-1),ut=n("td",{style:{"text-align":"center"}},"🟠",-1),rt={style:{"text-align":"center"}},kt={href:"https://leetcode.cn/problems/maximal-score-after-applying-k-operations",target:"_blank",rel:"noopener noreferrer"},dt={href:"https://leetcode.com/problems/maximal-score-after-applying-k-operations",target:"_blank",rel:"noopener noreferrer"};function ht(mt,_t){const i=c("font"),e=c("RouterLink"),o=c("ExternalLinkIcon"),u=c("CodeTabs");return k(),d("div",null,[b,n("p",null,[t("🔴 "),s(i,{color:"#ff334b"},{default:a(()=>[t("Hard")]),_:1}),t("  🔖  "),s(e,{to:"/tag/queue.html"},{default:a(()=>[g]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[f]),_:1}),t(),s(e,{to:"/tag/sliding-window.html"},{default:a(()=>[y]),_:1}),t(),s(e,{to:"/tag/monotonic-queue.html"},{default:a(()=>[v]),_:1}),t(),s(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[x]),_:1}),t("  🔗 "),n("a",w,[q,s(o)]),t(),n("a",O,[H,s(o)])]),j,s(u,{id:"185",data:[{id:"双端队列"},{id:"堆"}]},{title0:a(({value:l,isActive:p})=>[t("双端队列")]),title1:a(({value:l,isActive:p})=>[t("堆")]),tab0:a(({value:l,isActive:p})=>[E]),tab1:a(({value:l,isActive:p})=>[C]),_:1}),I,h(" prettier-ignore "),n("table",null,[D,n("tbody",null,[n("tr",null,[V,L,n("td",N,[s(e,{to:"/problem/0076.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",A,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[S]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[B]),_:1}),t(),s(e,{to:"/tag/sliding-window.html"},{default:a(()=>[M]),_:1})]),R,n("td",T,[n("a",W,[t("🀄️"),s(o)]),t(),n("a",U,[t("🔗"),s(o)])])]),n("tr",null,[Y,z,n("td",J,[s(e,{to:"/problem/0155.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",K,[s(e,{to:"/tag/stack.html"},{default:a(()=>[Q]),_:1}),t(),s(e,{to:"/tag/design.html"},{default:a(()=>[F]),_:1})]),G,n("td",P,[n("a",X,[t("🀄️"),s(o)]),t(),n("a",Z,[t("🔗"),s(o)])])]),n("tr",null,[$,nn,tn,n("td",sn,[s(e,{to:"/tag/hash-table.html"},{default:a(()=>[an]),_:1}),t(),s(e,{to:"/tag/string.html"},{default:a(()=>[en]),_:1}),t(),s(e,{to:"/tag/sliding-window.html"},{default:a(()=>[on]),_:1})]),cn,n("td",ln,[n("a",pn,[t("🀄️"),s(o)]),t(),n("a",un,[t("🔗"),s(o)])])]),n("tr",null,[rn,kn,dn,n("td",hn,[s(e,{to:"/tag/array.html"},{default:a(()=>[mn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[_n]),_:1})]),bn,n("td",gn,[n("a",fn,[t("🀄️"),s(o)]),t(),n("a",yn,[t("🔗"),s(o)])])]),n("tr",null,[vn,xn,wn,n("td",qn,[s(e,{to:"/tag/queue.html"},{default:a(()=>[On]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Hn]),_:1}),t(),s(e,{to:"/tag/dynamic-programming.html"},{default:a(()=>[jn]),_:1}),t(),En]),Cn,n("td",In,[n("a",Dn,[t("🀄️"),s(o)]),t(),n("a",Vn,[t("🔗"),s(o)])])]),n("tr",null,[Ln,Nn,An,n("td",Sn,[s(e,{to:"/tag/queue.html"},{default:a(()=>[Bn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Mn]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[Rn]),_:1}),t(),Tn]),Wn,n("td",Un,[n("a",Yn,[t("🀄️"),s(o)]),t(),n("a",zn,[t("🔗"),s(o)])])]),n("tr",null,[Jn,Kn,Qn,n("td",Fn,[s(e,{to:"/tag/greedy.html"},{default:a(()=>[Gn]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[Pn]),_:1}),t(),s(e,{to:"/tag/binary-search.html"},{default:a(()=>[Xn]),_:1}),t(),Zn]),$n,n("td",nt,[n("a",tt,[t("🀄️"),s(o)]),t(),n("a",st,[t("🔗"),s(o)])])]),n("tr",null,[at,et,n("td",ot,[s(e,{to:"/problem/2530.html"},{default:a(()=>[t("[✓]")]),_:1})]),n("td",ct,[s(e,{to:"/tag/greedy.html"},{default:a(()=>[lt]),_:1}),t(),s(e,{to:"/tag/array.html"},{default:a(()=>[pt]),_:1}),t(),s(e,{to:"/tag/heap-priority-queue.html"},{default:a(()=>[it]),_:1})]),ut,n("td",rt,[n("a",kt,[t("🀄️"),s(o)]),t(),n("a",dt,[t("🔗"),s(o)])])])])])])}const gt=r(_,[["render",ht],["__file","0239.html.vue"]]);export{gt as default};

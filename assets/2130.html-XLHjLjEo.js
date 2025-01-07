import{_ as d,r as l,o as u,c as k,a as n,b as t,d as e,w as s,f as h,e as m}from"./app-WL8GPOUO.js";const g={},_=n("h1",{id:"_2130-链表最大孪生和",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2130-链表最大孪生和","aria-hidden":"true"},"#"),t(" 2130. 链表最大孪生和")],-1),f=n("code",null,"栈",-1),b=n("code",null,"链表",-1),v=n("code",null,"双指针",-1),w={href:"https://leetcode.cn/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"力扣",-1),y={href:"https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"LeetCode",-1),N=m('<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>In a linked list of size <code>n</code>, where <code>n</code> is <strong>even</strong> , the <code>ith</code> node (<strong>0-indexed</strong>) of the linked list is known as the <strong>twin</strong> of the <code>(n-1-i)th</code> node, if <code>0 &lt;= i &lt;= (n / 2) - 1</code>.</p><ul><li>For example, if <code>n = 4</code>, then node <code>0</code> is the twin of node <code>3</code>, and node <code>1</code> is the twin of node <code>2</code>. These are the only nodes with twins for <code>n = 4</code>.</li></ul><p>The <strong>twin sum</strong> is defined as the sum of a node and its twin.</p><p>Given the <code>head</code> of a linked list with even length, return <em>the<strong>maximum twin sum</strong> of the linked list</em>.</p><p><strong>Example 1:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [5,4,2,1]</p><p>Output: 6</p><p>Explanation:</p><p>Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.</p><p>There are no other nodes with twins in the linked list.</p><p>Thus, the maximum twin sum of the linked list is 6.</p></blockquote><p><strong>Example 2:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [4,2,2,3]</p><p>Output: 7</p><p>Explanation:</p><p>The nodes with twins present in this linked list are:</p><ul><li>Node 0 is the twin of node 3 having a twin sum of 4 + 3 = 7.</li><li>Node 1 is the twin of node 2 having a twin sum of 2 + 2 = 4.</li></ul><p>Thus, the maximum twin sum of the linked list is max(7, 4) = 7.</p></blockquote><p><strong>Example 3:</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>Input: head = [1,100000]</p><p>Output: 100001</p><p>Explanation:</p><p>There is only one node with a twin in the linked list having twin sum of 1 + 100000 = 100001.</p></blockquote><p><strong>Constraints:</strong></p><ul><li>The number of nodes in the list is an <strong>even</strong> integer in the range <code>[2, 10^5]</code>.</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>在一个大小为 <code>n</code> 且 <code>n</code> 为 <strong>偶数</strong> 的链表中，对于 <code>0 &lt;= i &lt;= (n / 2) - 1</code> 的 <code>i</code> ，第 <code>i</code> 个节点（下标从 <strong>0</strong> 开始）的孪生节点为第 <code>(n-1-i)</code> 个节点 。</p><ul><li>比方说，<code>n = 4</code> 那么节点 <code>0</code> 是节点 <code>3</code> 的孪生节点，节点 <code>1</code> 是节点 <code>2</code> 的孪生节点。这是长度为 <code>n = 4</code> 的链表中所有的孪生节点。</li></ul><p><strong>孪生和</strong> 定义为一个节点和它孪生节点两者值之和。</p><p>给你一个长度为偶数的链表的头节点 <code>head</code> ，请你返回链表的 <strong>最大孪生和</strong> 。</p><p><strong>示例 1：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg1drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [5,4,2,1]</p><p><strong>输出：</strong> 6</p><p><strong>解释：</strong></p><p>节点 0 和节点 1 分别是节点 3 和 2 的孪生节点。孪生和都为 6 。</p><p>链表中没有其他孪生节点。</p><p>所以，链表的最大孪生和是 6 。</p></blockquote><p><strong>示例 2：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg2drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [4,2,2,3]</p><p><strong>输出：</strong> 7</p><p><strong>解释：</strong></p><p>链表中的孪生节点为：</p><ul><li>节点 0 是节点 3 的孪生节点，孪生和为 4 + 3 = 7 。</li><li>节点 1 是节点 2 的孪生节点，孪生和为 2 + 2 = 4 。</li></ul><p>所以，最大孪生和为 max(7, 4) = 7 。</p></blockquote><p><strong>示例 3：</strong></p><figure><img src="https://assets.leetcode.com/uploads/2021/12/03/eg3drawio.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p><strong>输入：</strong> head = [1,100000]</p><p><strong>输出：</strong> 100001</p><p><strong>解释：</strong></p><p>链表中只有一对孪生节点，孪生和为 1 + 100000 = 100001 。</p></blockquote><p><strong>提示：</strong></p><ul><li>链表的节点数目是 <code>[2, 10^5]</code> 中的 <strong>偶数</strong> 。</li><li><code>1 &lt;= Node.val &lt;= 10^5</code></li></ul><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><h3 id="思路一-链表转数组" tabindex="-1"><a class="header-anchor" href="#思路一-链表转数组" aria-hidden="true">#</a> 思路一：链表转数组</h3><ol><li><p><strong>链表转换为数组</strong>：</p><ul><li>为了便于处理和计算孪生和，可以将链表转换为一个数组，这样可以通过数组的下标直接访问链表的元素，并轻松计算两个节点的和。</li><li>遍历链表并将每个节点的值保存到数组 <code>arr</code> 中，链表的顺序保持不变。</li></ul></li><li><p><strong>计算孪生和</strong>：</p><ul><li>孪生和的计算方式是：假设数组的长度为 <code>n</code>，对于第 <code>i</code> 个元素，它的孪生节点是数组中位置为 <code>n-1-i</code> 的元素。每对孪生节点的和就是 <code>arr[i] + arr[n-1-i]</code>。</li><li>从数组的两头开始遍历，计算每一对孪生节点的和，并更新最大孪生和。</li></ul></li><li><p><strong>返回最大值</strong>：遍历所有孪生节点对，最终返回最大值。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是链表的节点数，将链表转化为数组的时间复杂度是 <code>O(n)</code>，计算孪生和的时间复杂度是 <code>O(n / 2)</code>，即 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(n)</code>，额外使用了一个数组 <code>arr</code> 来存储链表的节点值。</li></ul><h3 id="思路二-反转链表" tabindex="-1"><a class="header-anchor" href="#思路二-反转链表" aria-hidden="true">#</a> 思路二：反转链表</h3><p>思路一使用了额外的空间来存储链表元素，如果不希望使用额外的空间，可以使用<strong>双指针法</strong>来优化空间复杂度，找到中间节点、反转后半部分链表并计算孪生和。</p><ol><li><p><strong>寻找中间节点</strong>：使用快慢指针方法，快指针每次走两步，慢指针每次走一步，最终慢指针会到达链表的中间节点。</p></li><li><p><strong>反转后半部分链表</strong>：在找到中间节点后，将链表的后半部分反转，这样可以方便从前后节点开始同时遍历。</p></li><li><p><strong>计算孪生和</strong>：从反转后的链表的开头开始，和原链表的前半部分进行配对，计算每一对孪生节点的和，并更新最大值。</p></li></ol><h4 id="复杂度分析-1" tabindex="-1"><a class="header-anchor" href="#复杂度分析-1" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，反转链表的操作是线性时间复杂度 <code>O(n)</code>，遍历链表计算孪生和也是 <code>O(n)</code>。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只使用了常数空间来存储指针。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2>',43),O=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"head"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"pairSum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 将链表转化为数组"),t(`
	`),n("span",{class:"token keyword"},"const"),t(" arr "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("head"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"push"),n("span",{class:"token punctuation"},"("),t("head"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		head `),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 计算最大孪生和"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"for"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),t(" i "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(" i "),n("span",{class:"token operator"},"<"),t(" arr"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(" i"),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("res"),n("span",{class:"token punctuation"},","),t(" arr"),n("span",{class:"token punctuation"},"["),t("i"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"+"),t(" arr"),n("span",{class:"token punctuation"},"["),t("arr"),n("span",{class:"token punctuation"},"."),t("length "),n("span",{class:"token operator"},"-"),t(),n("span",{class:"token number"},"1"),t(),n("span",{class:"token operator"},"-"),t(" i"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[t(`/**
 * `),n("span",{class:"token keyword"},"@param"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("ListNode"),n("span",{class:"token punctuation"},"}")]),t(),n("span",{class:"token parameter"},"head"),t(`
 * `),n("span",{class:"token keyword"},"@return"),t(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),t("number"),n("span",{class:"token punctuation"},"}")]),t(`
 */`)]),t(`
`),n("span",{class:"token keyword"},"var"),t(),n("span",{class:"token function-variable function"},"pairSum"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token comment"},"// 快慢指针找到链表中点"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" slow "),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},","),t(`
		fast `),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("fast "),n("span",{class:"token operator"},"&&"),t(" fast"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		fast `),n("span",{class:"token operator"},"="),t(" fast"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		slow `),n("span",{class:"token operator"},"="),t(" slow"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`

	`),n("span",{class:"token comment"},"// 反转后半部分链表"),t(`
	slow `),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),t("slow"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
	fast `),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},";"),t(`

	`),n("span",{class:"token comment"},"// 计算最大孪生和"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("slow"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		res `),n("span",{class:"token operator"},"="),t(" Math"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"max"),n("span",{class:"token punctuation"},"("),t("slow"),n("span",{class:"token punctuation"},"."),t("val "),n("span",{class:"token operator"},"+"),t(" fast"),n("span",{class:"token punctuation"},"."),t("val"),n("span",{class:"token punctuation"},","),t(" res"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
		slow `),n("span",{class:"token operator"},"="),t(" slow"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		fast `),n("span",{class:"token operator"},"="),t(" fast"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" res"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"head"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" prev "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"null"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"let"),t(" cur "),n("span",{class:"token operator"},"="),t(" head"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token keyword"},"while"),t(),n("span",{class:"token punctuation"},"("),t("cur"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
		`),n("span",{class:"token keyword"},"let"),t(" next "),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},"."),t("next"),n("span",{class:"token punctuation"},";"),t(`
		cur`),n("span",{class:"token punctuation"},"."),t("next "),n("span",{class:"token operator"},"="),t(" prev"),n("span",{class:"token punctuation"},";"),t(`
		prev `),n("span",{class:"token operator"},"="),t(" cur"),n("span",{class:"token punctuation"},";"),t(`
		cur `),n("span",{class:"token operator"},"="),t(" next"),n("span",{class:"token punctuation"},";"),t(`
	`),n("span",{class:"token punctuation"},"}"),t(`
	`),n("span",{class:"token keyword"},"return"),t(" prev"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h2",{id:"相关题目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),t(" 相关题目")],-1),z=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"center"}},"题号"),n("th",{style:{"text-align":"left"}},"标题"),n("th",{style:{"text-align":"center"}},"题解"),n("th",{style:{"text-align":"left"}},"标签"),n("th",{style:{"text-align":"center"}},"难度"),n("th",{style:{"text-align":"center"}},"力扣")])],-1),C=n("td",{style:{"text-align":"center"}},"206",-1),L=n("td",{style:{"text-align":"left"}},"反转链表",-1),j={style:{"text-align":"center"}},I={style:{"text-align":"left"}},A=n("code",null,"递归",-1),V=n("code",null,"链表",-1),B=n("td",{style:{"text-align":"center"}},"🟢",-1),M={style:{"text-align":"center"}},S={href:"https://leetcode.cn/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},R={href:"https://leetcode.com/problems/reverse-linked-list",target:"_blank",rel:"noopener noreferrer"},F=n("td",{style:{"text-align":"center"}},"234",-1),G=n("td",{style:{"text-align":"left"}},"回文链表",-1),D={style:{"text-align":"center"}},H={style:{"text-align":"left"}},J=n("code",null,"栈",-1),K=n("code",null,"递归",-1),P=n("code",null,"链表",-1),Q=n("code",null,"1+",-1),U=n("td",{style:{"text-align":"center"}},"🟢",-1),W={style:{"text-align":"center"}},X={href:"https://leetcode.cn/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://leetcode.com/problems/palindrome-linked-list",target:"_blank",rel:"noopener noreferrer"},Z=n("td",{style:{"text-align":"center"}},"876",-1),$=n("td",{style:{"text-align":"left"}},"链表的中间结点",-1),nn={style:{"text-align":"center"}},tn={style:{"text-align":"left"}},en=n("code",null,"链表",-1),sn=n("code",null,"双指针",-1),an=n("td",{style:{"text-align":"center"}},"🟢",-1),on={style:{"text-align":"center"}},ln={href:"https://leetcode.cn/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"},cn={href:"https://leetcode.com/problems/middle-of-the-linked-list",target:"_blank",rel:"noopener noreferrer"};function rn(pn,dn){const r=l("font"),a=l("RouterLink"),o=l("ExternalLinkIcon"),p=l("CodeTabs");return u(),k("div",null,[_,n("p",null,[t("🟠 "),e(r,{color:"#ffb800"},{default:s(()=>[t("Medium")]),_:1}),t("  🔖  "),e(a,{to:"/tag/stack.html"},{default:s(()=>[f]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[b]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[v]),_:1}),t("  🔗 "),n("a",w,[x,e(o)]),t(),n("a",y,[q,e(o)])]),N,e(p,{id:"339",data:[{id:"链表转数组"},{id:"反转链表"}]},{title0:s(({value:c,isActive:i})=>[t("链表转数组")]),title1:s(({value:c,isActive:i})=>[t("反转链表")]),tab0:s(({value:c,isActive:i})=>[O]),tab1:s(({value:c,isActive:i})=>[T]),_:1}),E,h(" prettier-ignore "),n("table",null,[z,n("tbody",null,[n("tr",null,[C,L,n("td",j,[e(a,{to:"/problem/0206.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",I,[e(a,{to:"/tag/recursion.html"},{default:s(()=>[A]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[V]),_:1})]),B,n("td",M,[n("a",S,[t("🀄️"),e(o)]),t(),n("a",R,[t("🔗"),e(o)])])]),n("tr",null,[F,G,n("td",D,[e(a,{to:"/problem/0234.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",H,[e(a,{to:"/tag/stack.html"},{default:s(()=>[J]),_:1}),t(),e(a,{to:"/tag/recursion.html"},{default:s(()=>[K]),_:1}),t(),e(a,{to:"/tag/linked-list.html"},{default:s(()=>[P]),_:1}),t(),Q]),U,n("td",W,[n("a",X,[t("🀄️"),e(o)]),t(),n("a",Y,[t("🔗"),e(o)])])]),n("tr",null,[Z,$,n("td",nn,[e(a,{to:"/problem/0876.html"},{default:s(()=>[t("[✓]")]),_:1})]),n("td",tn,[e(a,{to:"/tag/linked-list.html"},{default:s(()=>[en]),_:1}),t(),e(a,{to:"/tag/two-pointers.html"},{default:s(()=>[sn]),_:1})]),an,n("td",on,[n("a",ln,[t("🀄️"),e(o)]),t(),n("a",cn,[t("🔗"),e(o)])])])])])])}const kn=d(g,[["render",rn],["__file","2130.html.vue"]]);export{kn as default};

import{_ as i,r as l,o as s,c as r,a as e,b as o,d as t,w as a,e as p}from"./app-MsFeWfVD.js";const h={},x=e("h1",{id:"_193-有效电话号码",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_193-有效电话号码","aria-hidden":"true"},"#"),o(" 193. 有效电话号码")],-1),u=e("code",null,"Shell",-1),_={href:"https://leetcode.cn/problems/valid-phone-numbers",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"力扣",-1),m={href:"https://leetcode.com/problems/valid-phone-numbers",target:"_blank",rel:"noopener noreferrer"},b=e("code",null,"LeetCode",-1),g=p(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><p>Given a text file <code>file.txt</code> that contains a list of phone numbers (one per line), write a one-liner bash script to print all valid phone numbers.</p><p>You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)</p><p>You may also assume each line in the text file must not contain leading or trailing white spaces.</p><p><strong>Example:</strong></p><p>Assume that <code>file.txt</code> has the following content:</p><blockquote><p>987-123-4567</p><p>123 456 7890</p><p>(123) 456-7890</p></blockquote><p>Your script should output the following valid phone numbers:</p><blockquote><p>987-123-4567</p><p>(123) 456-7890</p></blockquote><h2 id="题目大意" tabindex="-1"><a class="header-anchor" href="#题目大意" aria-hidden="true">#</a> 题目大意</h2><p>给定一个包含电话号码列表（一行一个电话号码）的文本文件 <code>file.txt</code>，写一个单行 bash 脚本输出所有有效的电话号码。</p><p>你可以假设一个有效的电话号码必须满足以下两种格式： (xxx) xxx-xxxx 或 xxx-xxx-xxxx。（x 表示一个数字）</p><p>你也可以假设每行前后没有多余的空格字符。</p><p><strong>示例：</strong></p><p>假设 <code>file.txt</code> 内容如下：</p><blockquote><p>987-123-4567</p><p>123 456 7890</p><p>(123) 456-7890</p></blockquote><p>你的脚本应当输出下列有效的电话号码：</p><blockquote><p>987-123-4567</p><p>(123) 456-7890</p></blockquote><h2 id="解题思路" tabindex="-1"><a class="header-anchor" href="#解题思路" aria-hidden="true">#</a> 解题思路</h2><ol><li><p>使用 <code>grep</code> 命令处理文件，<code>-E</code> 选项表示启用扩展正则表达式 (ERE)。</p></li><li><p><strong>正则表达式解析</strong><br> 使用 <code>^</code> 和 <code>$</code> 表示整行匹配，构造如下两部分的正则表达式，并用 <code>|</code> 表示“或”关系：</p><ul><li><code>^([0-9]{3}-[0-9]{3}-[0-9]{4})$</code>： <ul><li><code>^</code>：匹配行首。</li><li><code>[0-9]{3}</code>：匹配 3 个数字（区号）。</li><li><code>-</code>：匹配连字符。</li><li><code>[0-9]{3}</code>：匹配 3 个数字（中间部分）。</li><li><code>-</code>：匹配连字符。</li><li><code>[0-9]{4}</code>：匹配 4 个数字（最后部分）。</li><li><code>$</code>：匹配行尾。</li></ul></li><li><code>^(\\([0-9]{3}\\) [0-9]{3}-[0-9]{4})$</code>： <ul><li><code>^</code>：匹配行首。</li><li><code>\\(</code> 和 <code>\\)</code>：匹配括号，注意需要转义。</li><li><code>[0-9]{3}</code>：匹配括号内的 3 个数字（区号）。</li><li><code></code>：匹配括号后的空格。</li><li><code>[0-9]{3}</code>：匹配 3 个数字（中间部分）。</li><li><code>-</code>：匹配连字符。</li><li><code>[0-9]{4}</code>：匹配 4 个数字（最后部分）。</li><li><code>$</code>：匹配行尾。</li></ul></li></ul></li><li><p><code>file.txt</code>：文件名，表示要处理的文本文件。</p></li></ol><h4 id="复杂度分析" tabindex="-1"><a class="header-anchor" href="#复杂度分析" aria-hidden="true">#</a> 复杂度分析</h4><ul><li><strong>时间复杂度</strong>：<code>O(n)</code>，其中 <code>n</code> 是文件中的行数。<code>grep</code> 对每一行执行正则匹配操作。</li><li><strong>空间复杂度</strong>：<code>O(1)</code>，只需存储当前行的状态，不需要额外空间。</li></ul><h2 id="代码" tabindex="-1"><a class="header-anchor" href="#代码" aria-hidden="true">#</a> 代码</h2><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>grep <span class="token operator">-</span><span class="token constant">E</span> <span class="token string">&#39;^([0-9]{3}-[0-9]{3}-[0-9]{4})$|^(\\([0-9]{3}\\) [0-9]{3}-[0-9]{4})$&#39;</span> file<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,24);function k(v,E){const n=l("font"),d=l("RouterLink"),c=l("ExternalLinkIcon");return s(),r("div",null,[x,e("p",null,[o("🟢 "),t(n,{color:"#15bd66"},{default:a(()=>[o("Easy")]),_:1}),o("  🔖  "),t(d,{to:"/tag/shell.html"},{default:a(()=>[u]),_:1}),o("  🔗 "),e("a",_,[f,t(c)]),o(),e("a",m,[b,t(c)])]),g])}const w=i(h,[["render",k],["__file","0193.html.vue"]]);export{w as default};

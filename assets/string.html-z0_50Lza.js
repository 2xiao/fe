import{_,r as c,o as i,c as r,f as a,a as t,b as o,d as e,w as l,e as h}from"./app-mXo2sCT-.js";const g="/leetcode-js/assets/2-9-1-4ntTgB4b.png",f={},u=h('<h1 id="_2-9-字符串" tabindex="-1"><a class="header-anchor" href="#_2-9-字符串" aria-hidden="true">#</a> 2.9 字符串</h1><h2 id="字符串的定义" tabindex="-1"><a class="header-anchor" href="#字符串的定义" aria-hidden="true">#</a> 字符串的定义</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>字符串（String）</strong> ：是由零个或多个字符组成的有限序列。一般记为 <code>s = a1a2……an</code>（ <code>n</code> 大于 <code>0</code> 小于正无穷）。</p></div><p>字符串中任意个连续的字符组成的子序列称为该字符串的 <strong>子串（Substring）</strong>；</p><p>起始于位置为 <code>0</code>、长度为 <code>k</code> 的子串称为 <strong>前缀（Prefix）</strong>；</p><p>终止于位置 <code>n - 1</code>、长度为 <code>k</code> 的子串称为 <strong>后缀（Suffix）</strong>。</p><h2 id="字符编码" tabindex="-1"><a class="header-anchor" href="#字符编码" aria-hidden="true">#</a> 字符编码</h2><p>计算机中最常用的字符编码是 <code>ASCII</code> 编码。最早的时候，人们制定了一个包含 <code>127</code> 个字符的编码表 <code>ASCII</code> 到计算机系统中。<code>ASCII</code> 编码表中的字符包含了大小写的英文字母、数字和一些符号。每个字符对应一个编码，比如大写字母 <code>A</code> 的编码是 <code>65</code>，小写字母 <code>a</code> 的编码是 <code>97</code>。</p><p><code>ASCII</code> 编码可以解决以英语为主的语言，可是无法满足中文编码。为了解决中文编码，我国制定了 <code>GB2312</code>、<code>GBK</code>、<code>GB18030</code> 等中文编码标准，将中文编译进去。但是世界上有上百种语言和文字，各国有各国的标准，就会不可避免的产生冲突，于是就有了 <code>Unicode</code> 编码。<code>Unicode</code> 编码最常用的就是 <code>UTF-8</code> 编码，<code>UTF-8</code> 编码把一个 <code>Unicode</code> 字符根据不同的数字大小编码成 <code>1</code> ~ <code>6</code> 个字节，常用的英文字母被编码成 <code>1</code> 个字节，汉字通常是 <code>3</code> 个字节。</p><h2 id="字符串的存储结构" tabindex="-1"><a class="header-anchor" href="#字符串的存储结构" aria-hidden="true">#</a> 字符串的存储结构</h2><p>字符串的两种最基本的存储结构是：顺序存储结构 和 链接存储结构。</p><h3 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储" aria-hidden="true">#</a> 顺序存储</h3><p>与线性表的顺序存储结构相似，字符串的顺序存储结构也是使用一组地址连续的存储单元依次存放串中的各个字符。按照预定义的大小，为每个定义的字符串变量分配一个固定长度的存储区域。一般是用定长数组来定义。</p><p>字符串的顺序存储中每一个字符元素都有自己的下标索引，下标索引从 <code>0</code> 开始，到 <code>length - 1</code> 结束。字符串中每一个下标索引，都有一个与之对应的字符元素。</p><p>跟数组类似，字符串也支持随机访问。即字符串可以根据下标，直接定位到某一个字符元素存放的位置。</p><h3 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储" aria-hidden="true">#</a> 链式存储</h3><p>字符串的存储也可以采用链式存储结构，即采用一个线性链表来存储一个字符串。字符串的链节点包含一个用于存放字符的 <code>data</code> 变量，和指向下一个链节点的指针变量 <code>next</code>。这样，一个字符串就可以用一个线性链表来表示。</p><p>在字符串的链式存储结构中，每个链节点可以仅存放一个字符，也可以存放多个字符。通常情况下，链节点的字符长度为 <code>1</code> 或者 <code>4</code>，这是为了避免浪费空间。当链节点的字符长度为 <code>4</code> 时，由于字符串的长度不一定是 <code>4</code> 的倍数，因此字符串所占用的链节点中最后那个链节点的 <code>data</code> 变量可能没有占满，我们可以用 <code>#</code> 或其他不属于字符集的特殊字符将其补全。</p><h2 id="字符串匹配" tabindex="-1"><a class="header-anchor" href="#字符串匹配" aria-hidden="true">#</a> 字符串匹配</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>字符串匹配（String Matching）</strong> ：又称模式匹配（pattern matching），可以概括为「给定字符串 <code>S</code> 和 <code>T</code>，在主串 <code>S</code> 中寻找子串 <code>T</code>」。子串 <code>T</code> 称为模式串 (pattern)。</p></div><p>其中，在主串 <code>S</code> 中找出 <strong>一个</strong> 模式串 <code>T</code>的所有位置，叫做<strong>单模式匹配（Single Pattern Matching）</strong>；</p><p>在主串 <code>S</code> 中找出 <strong>多个</strong> 模式串 <code>T1,T2,……,Tn</code>的所有位置，叫做<strong>多模式匹配（Multi Pattern Matching）</strong>。</p><p>两个字符串相等的充要条件是：长度相等，并且各个对应位置上的字符都相等。</p><h3 id="bf-算法" tabindex="-1"><a class="header-anchor" href="#bf-算法" aria-hidden="true">#</a> BF 算法</h3><p>BF 算法中的 BF 是 Brute Force 的缩写，中文叫作暴力匹配算法，也叫朴素匹配算法。从名字可以看出，这种算法的字符串匹配方式很“暴力”，也就比较简单、好懂，但相应的性能也不高。</p><p>BF 算法的思想可以用一句话来概括：在主串中检查起始位置分别是 <code>0、1、2…n-m</code> 且长度为 <code>m</code> 的 <code>n-m+1</code> 个子串，看有没有跟模式串匹配的。</p><p>这种算法的最坏情况时间复杂度是 <code>O(n*m)</code>。</p><figure><img src="'+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码" aria-hidden="true">#</a> 实现代码</h4><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,30),m=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),o(" 相关题目")],-1),p=t("h4",{id:"字符串基础题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#字符串基础题目","aria-hidden":"true"},"#"),o(" 字符串基础题目")],-1),x=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),y=t("td",{style:{"text-align":"center"}},"125",-1),b={style:{"text-align":"left"}},k={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},w={style:{"text-align":"center"}},T={style:{"text-align":"left"}},v=t("code",null,"双指针",-1),E=t("code",null,"字符串",-1),I={style:{"text-align":"left"}},S=t("td",{style:{"text-align":"center"}},"5",-1),M={style:{"text-align":"left"}},B={href:"https://leetcode.com/problems/longest-palindromic-substring",target:"_blank",rel:"noopener noreferrer"},A={style:{"text-align":"center"}},N={style:{"text-align":"left"}},C=t("code",null,"双指针",-1),F=t("code",null,"字符串",-1),H=t("code",null,"动态规划",-1),U={style:{"text-align":"left"}},L=t("td",{style:{"text-align":"center"}},"3",-1),P={style:{"text-align":"left"}},R={href:"https://leetcode.com/problems/longest-substring-without-repeating-characters",target:"_blank",rel:"noopener noreferrer"},V={style:{"text-align":"center"}},j={style:{"text-align":"left"}},D=t("code",null,"哈希表",-1),O=t("code",null,"字符串",-1),G=t("code",null,"滑动窗口",-1),K={style:{"text-align":"left"}},q=t("td",{style:{"text-align":"center"}},"344",-1),z={style:{"text-align":"left"}},J={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},Q={style:{"text-align":"center"}},W={style:{"text-align":"left"}},X=t("code",null,"双指针",-1),Y=t("code",null,"字符串",-1),Z={style:{"text-align":"left"}},$=t("td",{style:{"text-align":"center"}},"557",-1),tt={style:{"text-align":"left"}},et={href:"https://leetcode.com/problems/reverse-words-in-a-string-iii",target:"_blank",rel:"noopener noreferrer"},ot={style:{"text-align":"center"}},lt={style:{"text-align":"left"}},nt=t("code",null,"双指针",-1),st=t("code",null,"字符串",-1),dt={style:{"text-align":"left"}},at=t("td",{style:{"text-align":"center"}},"49",-1),ct={style:{"text-align":"left"}},_t={href:"https://leetcode.com/problems/group-anagrams",target:"_blank",rel:"noopener noreferrer"},it={style:{"text-align":"center"}},rt={style:{"text-align":"left"}},ht=t("code",null,"数组",-1),gt=t("code",null,"哈希表",-1),ft=t("code",null,"字符串",-1),ut=t("code",null,"1+",-1),mt={style:{"text-align":"left"}},pt=t("td",{style:{"text-align":"center"}},"415",-1),xt={style:{"text-align":"left"}},yt={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},bt={style:{"text-align":"center"}},kt={style:{"text-align":"left"}},wt=t("code",null,"数学",-1),Tt=t("code",null,"字符串",-1),vt=t("code",null,"模拟",-1),Et={style:{"text-align":"left"}},It=t("td",{style:{"text-align":"center"}},"151",-1),St={style:{"text-align":"left"}},Mt={href:"https://leetcode.com/problems/reverse-words-in-a-string",target:"_blank",rel:"noopener noreferrer"},Bt={style:{"text-align":"center"}},At={style:{"text-align":"left"}},Nt=t("code",null,"双指针",-1),Ct=t("code",null,"字符串",-1),Ft={style:{"text-align":"left"}},Ht=t("td",{style:{"text-align":"center"}},"43",-1),Ut={style:{"text-align":"left"}},Lt={href:"https://leetcode.com/problems/multiply-strings",target:"_blank",rel:"noopener noreferrer"},Pt={style:{"text-align":"center"}},Rt={style:{"text-align":"left"}},Vt=t("code",null,"数学",-1),jt=t("code",null,"字符串",-1),Dt=t("code",null,"模拟",-1),Ot={style:{"text-align":"left"}},Gt=t("td",{style:{"text-align":"center"}},"14",-1),Kt={style:{"text-align":"left"}},qt={href:"https://leetcode.com/problems/longest-common-prefix",target:"_blank",rel:"noopener noreferrer"},zt={style:{"text-align":"center"}},Jt={style:{"text-align":"left"}},Qt=t("code",null,"字典树",-1),Wt=t("code",null,"字符串",-1),Xt={style:{"text-align":"left"}},Yt=t("h4",{id:"单模式串匹配",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#单模式串匹配","aria-hidden":"true"},"#"),o(" 单模式串匹配")],-1),Zt=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),$t=t("td",{style:{"text-align":"center"}},"28",-1),te={style:{"text-align":"left"}},ee={href:"https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string",target:"_blank",rel:"noopener noreferrer"},oe={style:{"text-align":"center"}},le={style:{"text-align":"left"}},ne=t("code",null,"双指针",-1),se=t("code",null,"字符串",-1),de=t("code",null,"字符串匹配",-1),ae={style:{"text-align":"left"}},ce=t("td",{style:{"text-align":"center"}},"459",-1),_e={style:{"text-align":"left"}},ie={href:"https://leetcode.com/problems/repeated-substring-pattern",target:"_blank",rel:"noopener noreferrer"},re={style:{"text-align":"center"}},he={style:{"text-align":"left"}},ge=t("code",null,"字符串",-1),fe=t("code",null,"字符串匹配",-1),ue={style:{"text-align":"left"}},me=t("td",{style:{"text-align":"center"}},"686",-1),pe={style:{"text-align":"left"}},xe={href:"https://leetcode.com/problems/repeated-string-match",target:"_blank",rel:"noopener noreferrer"},ye=t("td",{style:{"text-align":"center"}},null,-1),be={style:{"text-align":"left"}},ke=t("code",null,"字符串",-1),we=t("code",null,"字符串匹配",-1),Te={style:{"text-align":"left"}},ve=t("td",{style:{"text-align":"center"}},"1668",-1),Ee={style:{"text-align":"left"}},Ie={href:"https://leetcode.com/problems/maximum-repeating-substring",target:"_blank",rel:"noopener noreferrer"},Se=t("td",{style:{"text-align":"center"}},null,-1),Me={style:{"text-align":"left"}},Be=t("code",null,"字符串",-1),Ae=t("code",null,"动态规划",-1),Ne=t("code",null,"字符串匹配",-1),Ce={style:{"text-align":"left"}},Fe=t("td",{style:{"text-align":"center"}},"796",-1),He={style:{"text-align":"left"}},Ue={href:"https://leetcode.com/problems/rotate-string",target:"_blank",rel:"noopener noreferrer"},Le=t("td",{style:{"text-align":"center"}},null,-1),Pe={style:{"text-align":"left"}},Re=t("code",null,"字符串",-1),Ve=t("code",null,"字符串匹配",-1),je={style:{"text-align":"left"}},De=t("td",{style:{"text-align":"center"}},"1408",-1),Oe={style:{"text-align":"left"}},Ge={href:"https://leetcode.com/problems/string-matching-in-an-array",target:"_blank",rel:"noopener noreferrer"},Ke=t("td",{style:{"text-align":"center"}},null,-1),qe={style:{"text-align":"left"}},ze=t("code",null,"数组",-1),Je=t("code",null,"字符串",-1),Qe=t("code",null,"字符串匹配",-1),We={style:{"text-align":"left"}},Xe=t("td",{style:{"text-align":"center"}},"2156",-1),Ye={style:{"text-align":"left"}},Ze={href:"https://leetcode.com/problems/find-substring-with-given-hash-value",target:"_blank",rel:"noopener noreferrer"},$e=t("td",{style:{"text-align":"center"}},null,-1),to={style:{"text-align":"left"}},eo=t("code",null,"字符串",-1),oo=t("code",null,"滑动窗口",-1),lo=t("code",null,"哈希函数",-1),no=t("code",null,"1+",-1),so={style:{"text-align":"left"}},ao=t("h4",{id:"字典树",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#字典树","aria-hidden":"true"},"#"),o(" 字典树")],-1),co=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"left"}},"难度")])],-1),_o=t("td",{style:{"text-align":"center"}},"208",-1),io={style:{"text-align":"left"}},ro={href:"https://leetcode.com/problems/implement-trie-prefix-tree",target:"_blank",rel:"noopener noreferrer"},ho={style:{"text-align":"center"}},go={style:{"text-align":"left"}},fo=t("code",null,"设计",-1),uo=t("code",null,"字典树",-1),mo=t("code",null,"哈希表",-1),po=t("code",null,"1+",-1),xo={style:{"text-align":"left"}},yo=t("td",{style:{"text-align":"center"}},"677",-1),bo={style:{"text-align":"left"}},ko={href:"https://leetcode.com/problems/map-sum-pairs",target:"_blank",rel:"noopener noreferrer"},wo=t("td",{style:{"text-align":"center"}},null,-1),To={style:{"text-align":"left"}},vo=t("code",null,"设计",-1),Eo=t("code",null,"字典树",-1),Io=t("code",null,"哈希表",-1),So=t("code",null,"1+",-1),Mo={style:{"text-align":"left"}},Bo=t("td",{style:{"text-align":"center"}},"648",-1),Ao={style:{"text-align":"left"}},No={href:"https://leetcode.com/problems/replace-words",target:"_blank",rel:"noopener noreferrer"},Co=t("td",{style:{"text-align":"center"}},null,-1),Fo={style:{"text-align":"left"}},Ho=t("code",null,"字典树",-1),Uo=t("code",null,"数组",-1),Lo=t("code",null,"哈希表",-1),Po=t("code",null,"1+",-1),Ro={style:{"text-align":"left"}},Vo=t("td",{style:{"text-align":"center"}},"642",-1),jo={style:{"text-align":"left"}},Do={href:"https://leetcode.com/problems/design-search-autocomplete-system",target:"_blank",rel:"noopener noreferrer"},Oo=t("td",{style:{"text-align":"center"}},null,-1),Go={style:{"text-align":"left"}},Ko=t("code",null,"深度优先搜索",-1),qo=t("code",null,"设计",-1),zo=t("code",null,"字典树",-1),Jo=t("code",null,"4+",-1),Qo={style:{"text-align":"left"}},Wo=t("td",{style:{"text-align":"center"}},"211",-1),Xo={style:{"text-align":"left"}},Yo={href:"https://leetcode.com/problems/design-add-and-search-words-data-structure",target:"_blank",rel:"noopener noreferrer"},Zo={style:{"text-align":"center"}},$o={style:{"text-align":"left"}},tl=t("code",null,"深度优先搜索",-1),el=t("code",null,"设计",-1),ol=t("code",null,"字典树",-1),ll=t("code",null,"1+",-1),nl={style:{"text-align":"left"}},sl=t("td",{style:{"text-align":"center"}},"421",-1),dl={style:{"text-align":"left"}},al={href:"https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array",target:"_blank",rel:"noopener noreferrer"},cl=t("td",{style:{"text-align":"center"}},null,-1),_l={style:{"text-align":"left"}},il=t("code",null,"位运算",-1),rl=t("code",null,"字典树",-1),hl=t("code",null,"数组",-1),gl=t("code",null,"1+",-1),fl={style:{"text-align":"left"}},ul=t("td",{style:{"text-align":"center"}},"212",-1),ml={style:{"text-align":"left"}},pl={href:"https://leetcode.com/problems/word-search-ii",target:"_blank",rel:"noopener noreferrer"},xl={style:{"text-align":"center"}},yl={style:{"text-align":"left"}},bl=t("code",null,"字典树",-1),kl=t("code",null,"数组",-1),wl=t("code",null,"字符串",-1),Tl=t("code",null,"2+",-1),vl={style:{"text-align":"left"}},El=t("td",{style:{"text-align":"center"}},"425",-1),Il={style:{"text-align":"left"}},Sl={href:"https://leetcode.com/problems/word-squares",target:"_blank",rel:"noopener noreferrer"},Ml=t("td",{style:{"text-align":"center"}},null,-1),Bl={style:{"text-align":"left"}},Al=t("code",null,"字典树",-1),Nl=t("code",null,"数组",-1),Cl=t("code",null,"字符串",-1),Fl=t("code",null,"1+",-1),Hl={style:{"text-align":"left"}},Ul=t("td",{style:{"text-align":"center"}},"336",-1),Ll={style:{"text-align":"left"}},Pl={href:"https://leetcode.com/problems/palindrome-pairs",target:"_blank",rel:"noopener noreferrer"},Rl=t("td",{style:{"text-align":"center"}},null,-1),Vl={style:{"text-align":"left"}},jl=t("code",null,"字典树",-1),Dl=t("code",null,"数组",-1),Ol=t("code",null,"哈希表",-1),Gl=t("code",null,"1+",-1),Kl={style:{"text-align":"left"}},ql=t("td",{style:{"text-align":"center"}},"1023",-1),zl={style:{"text-align":"left"}},Jl={href:"https://leetcode.com/problems/camelcase-matching",target:"_blank",rel:"noopener noreferrer"},Ql=t("td",{style:{"text-align":"center"}},null,-1),Wl={style:{"text-align":"left"}},Xl=t("code",null,"字典树",-1),Yl=t("code",null,"数组",-1),Zl=t("code",null,"双指针",-1),$l=t("code",null,"2+",-1),tn={style:{"text-align":"left"}},en=t("td",{style:{"text-align":"center"}},"676",-1),on={style:{"text-align":"left"}},ln={href:"https://leetcode.com/problems/implement-magic-dictionary",target:"_blank",rel:"noopener noreferrer"},nn=t("td",{style:{"text-align":"center"}},null,-1),sn={style:{"text-align":"left"}},dn=t("code",null,"深度优先搜索",-1),an=t("code",null,"设计",-1),cn=t("code",null,"字典树",-1),_n=t("code",null,"2+",-1),rn={style:{"text-align":"left"}},hn=t("td",{style:{"text-align":"center"}},"440",-1),gn={style:{"text-align":"left"}},fn={href:"https://leetcode.com/problems/k-th-smallest-in-lexicographical-order",target:"_blank",rel:"noopener noreferrer"},un={style:{"text-align":"center"}},mn={style:{"text-align":"left"}},pn=t("code",null,"字典树",-1),xn={style:{"text-align":"left"}};function yn(bn,kn){const s=c("ExternalLinkIcon"),n=c("RouterLink"),d=c("font");return i(),r("div",null,[u,a(" START TABLE "),a(" Please keep comment here to allow auto update "),a(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),m,p,a(" prettier-ignore "),t("table",null,[x,t("tbody",null,[t("tr",null,[y,t("td",b,[t("a",k,[o("验证回文串"),e(s)])]),t("td",w,[e(n,{to:"/problem/0125.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",T,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[v]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[E]),_:1})]),t("td",I,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[S,t("td",M,[t("a",B,[o("最长回文子串"),e(s)])]),t("td",A,[e(n,{to:"/problem/0005.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",N,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[C]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[F]),_:1}),o(),e(n,{to:"/tag/dynamic-programming.html"},{default:l(()=>[H]),_:1})]),t("td",U,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[L,t("td",P,[t("a",R,[o("无重复字符的最长子串"),e(s)])]),t("td",V,[e(n,{to:"/problem/0003.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",j,[e(n,{to:"/tag/hash-table.html"},{default:l(()=>[D]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[O]),_:1}),o(),e(n,{to:"/tag/sliding-window.html"},{default:l(()=>[G]),_:1})]),t("td",K,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[q,t("td",z,[t("a",J,[o("反转字符串"),e(s)])]),t("td",Q,[e(n,{to:"/problem/0344.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",W,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[X]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Y]),_:1})]),t("td",Z,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[$,t("td",tt,[t("a",et,[o("反转字符串中的单词 III"),e(s)])]),t("td",ot,[e(n,{to:"/problem/0557.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",lt,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[nt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[st]),_:1})]),t("td",dt,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[at,t("td",ct,[t("a",_t,[o("字母异位词分组"),e(s)])]),t("td",it,[e(n,{to:"/problem/0049.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",rt,[e(n,{to:"/tag/array.html"},{default:l(()=>[ht]),_:1}),o(),e(n,{to:"/tag/hash-table.html"},{default:l(()=>[gt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[ft]),_:1}),o(),ut]),t("td",mt,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[pt,t("td",xt,[t("a",yt,[o("字符串相加"),e(s)])]),t("td",bt,[e(n,{to:"/problem/0415.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",kt,[e(n,{to:"/tag/math.html"},{default:l(()=>[wt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Tt]),_:1}),o(),e(n,{to:"/tag/simulation.html"},{default:l(()=>[vt]),_:1})]),t("td",Et,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[It,t("td",St,[t("a",Mt,[o("反转字符串中的单词"),e(s)])]),t("td",Bt,[e(n,{to:"/problem/0151.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",At,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[Nt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Ct]),_:1})]),t("td",Ft,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[Ht,t("td",Ut,[t("a",Lt,[o("字符串相乘"),e(s)])]),t("td",Pt,[e(n,{to:"/problem/0043.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",Rt,[e(n,{to:"/tag/math.html"},{default:l(()=>[Vt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[jt]),_:1}),o(),e(n,{to:"/tag/simulation.html"},{default:l(()=>[Dt]),_:1})]),t("td",Ot,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[Gt,t("td",Kt,[t("a",qt,[o("最长公共前缀"),e(s)])]),t("td",zt,[e(n,{to:"/problem/0014.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",Jt,[e(n,{to:"/tag/trie.html"},{default:l(()=>[Qt]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Wt]),_:1})]),t("td",Xt,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])])])]),Yt,a(" prettier-ignore "),t("table",null,[Zt,t("tbody",null,[t("tr",null,[$t,t("td",te,[t("a",ee,[o("找出字符串中第一个匹配项的下标"),e(s)])]),t("td",oe,[e(n,{to:"/problem/0028.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",le,[e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[ne]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[se]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[de]),_:1})]),t("td",ae,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[ce,t("td",_e,[t("a",ie,[o("重复的子字符串"),e(s)])]),t("td",re,[e(n,{to:"/problem/0459.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",he,[e(n,{to:"/tag/string.html"},{default:l(()=>[ge]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[fe]),_:1})]),t("td",ue,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[me,t("td",pe,[t("a",xe,[o("重复叠加字符串匹配"),e(s)])]),ye,t("td",be,[e(n,{to:"/tag/string.html"},{default:l(()=>[ke]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[we]),_:1})]),t("td",Te,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[ve,t("td",Ee,[t("a",Ie,[o("最大重复子字符串"),e(s)])]),Se,t("td",Me,[e(n,{to:"/tag/string.html"},{default:l(()=>[Be]),_:1}),o(),e(n,{to:"/tag/dynamic-programming.html"},{default:l(()=>[Ae]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[Ne]),_:1})]),t("td",Ce,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[Fe,t("td",He,[t("a",Ue,[o("旋转字符串"),e(s)])]),Le,t("td",Pe,[e(n,{to:"/tag/string.html"},{default:l(()=>[Re]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[Ve]),_:1})]),t("td",je,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[De,t("td",Oe,[t("a",Ge,[o("数组中的字符串匹配"),e(s)])]),Ke,t("td",qe,[e(n,{to:"/tag/array.html"},{default:l(()=>[ze]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Je]),_:1}),o(),e(n,{to:"/tag/string-matching.html"},{default:l(()=>[Qe]),_:1})]),t("td",We,[e(d,{color:"#15bd66"},{default:l(()=>[o("Easy")]),_:1})])]),t("tr",null,[Xe,t("td",Ye,[t("a",Ze,[o("查找给定哈希值的子串"),e(s)])]),$e,t("td",to,[e(n,{to:"/tag/string.html"},{default:l(()=>[eo]),_:1}),o(),e(n,{to:"/tag/sliding-window.html"},{default:l(()=>[oo]),_:1}),o(),e(n,{to:"/tag/hash-function.html"},{default:l(()=>[lo]),_:1}),o(),no]),t("td",so,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])])])]),ao,a(" prettier-ignore "),t("table",null,[co,t("tbody",null,[t("tr",null,[_o,t("td",io,[t("a",ro,[o("实现 Trie (前缀树)"),e(s)])]),t("td",ho,[e(n,{to:"/problem/0208.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",go,[e(n,{to:"/tag/design.html"},{default:l(()=>[fo]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[uo]),_:1}),o(),e(n,{to:"/tag/hash-table.html"},{default:l(()=>[mo]),_:1}),o(),po]),t("td",xo,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[yo,t("td",bo,[t("a",ko,[o("键值映射"),e(s)])]),wo,t("td",To,[e(n,{to:"/tag/design.html"},{default:l(()=>[vo]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[Eo]),_:1}),o(),e(n,{to:"/tag/hash-table.html"},{default:l(()=>[Io]),_:1}),o(),So]),t("td",Mo,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[Bo,t("td",Ao,[t("a",No,[o("单词替换"),e(s)])]),Co,t("td",Fo,[e(n,{to:"/tag/trie.html"},{default:l(()=>[Ho]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[Uo]),_:1}),o(),e(n,{to:"/tag/hash-table.html"},{default:l(()=>[Lo]),_:1}),o(),Po]),t("td",Ro,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[Vo,t("td",jo,[t("a",Do,[o("设计搜索自动补全系统 🔒"),e(s)])]),Oo,t("td",Go,[e(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[Ko]),_:1}),o(),e(n,{to:"/tag/design.html"},{default:l(()=>[qo]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[zo]),_:1}),o(),Jo]),t("td",Qo,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])]),t("tr",null,[Wo,t("td",Xo,[t("a",Yo,[o("添加与搜索单词 - 数据结构设计"),e(s)])]),t("td",Zo,[e(n,{to:"/problem/0211.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",$o,[e(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[tl]),_:1}),o(),e(n,{to:"/tag/design.html"},{default:l(()=>[el]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[ol]),_:1}),o(),ll]),t("td",nl,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[sl,t("td",dl,[t("a",al,[o("数组中两个数的最大异或值"),e(s)])]),cl,t("td",_l,[e(n,{to:"/tag/bit-manipulation.html"},{default:l(()=>[il]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[rl]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[hl]),_:1}),o(),gl]),t("td",fl,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[ul,t("td",ml,[t("a",pl,[o("单词搜索 II"),e(s)])]),t("td",xl,[e(n,{to:"/problem/0212.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",yl,[e(n,{to:"/tag/trie.html"},{default:l(()=>[bl]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[kl]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[wl]),_:1}),o(),Tl]),t("td",vl,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])]),t("tr",null,[El,t("td",Il,[t("a",Sl,[o("单词方块 🔒"),e(s)])]),Ml,t("td",Bl,[e(n,{to:"/tag/trie.html"},{default:l(()=>[Al]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[Nl]),_:1}),o(),e(n,{to:"/tag/string.html"},{default:l(()=>[Cl]),_:1}),o(),Fl]),t("td",Hl,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])]),t("tr",null,[Ul,t("td",Ll,[t("a",Pl,[o("回文对"),e(s)])]),Rl,t("td",Vl,[e(n,{to:"/tag/trie.html"},{default:l(()=>[jl]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[Dl]),_:1}),o(),e(n,{to:"/tag/hash-table.html"},{default:l(()=>[Ol]),_:1}),o(),Gl]),t("td",Kl,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])]),t("tr",null,[ql,t("td",zl,[t("a",Jl,[o("驼峰式匹配"),e(s)])]),Ql,t("td",Wl,[e(n,{to:"/tag/trie.html"},{default:l(()=>[Xl]),_:1}),o(),e(n,{to:"/tag/array.html"},{default:l(()=>[Yl]),_:1}),o(),e(n,{to:"/tag/two-pointers.html"},{default:l(()=>[Zl]),_:1}),o(),$l]),t("td",tn,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[en,t("td",on,[t("a",ln,[o("实现一个魔法字典"),e(s)])]),nn,t("td",sn,[e(n,{to:"/tag/depth-first-search.html"},{default:l(()=>[dn]),_:1}),o(),e(n,{to:"/tag/design.html"},{default:l(()=>[an]),_:1}),o(),e(n,{to:"/tag/trie.html"},{default:l(()=>[cn]),_:1}),o(),_n]),t("td",rn,[e(d,{color:"#ffb800"},{default:l(()=>[o("Medium")]),_:1})])]),t("tr",null,[hn,t("td",gn,[t("a",fn,[o("字典序的第K小数字"),e(s)])]),t("td",un,[e(n,{to:"/problem/0440.html"},{default:l(()=>[o("[✓]")]),_:1})]),t("td",mn,[e(n,{to:"/tag/trie.html"},{default:l(()=>[pn]),_:1})]),t("td",xn,[e(d,{color:"#ff334b"},{default:l(()=>[o("Hard")]),_:1})])])])])])}const Tn=_(f,[["render",yn],["__file","string.html.vue"]]);export{Tn as default};

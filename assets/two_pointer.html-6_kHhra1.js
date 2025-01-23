import{_ as d,r as _,o as a,c,f as r,a as t,d as o,w as n,b as e,e as i}from"./app-MsFeWfVD.js";const h={},g=i('<h1 id="_3-10-双指针" tabindex="-1"><a class="header-anchor" href="#_3-10-双指针" aria-hidden="true">#</a> 3.10 双指针</h1><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>双指针（Two Pointers）</strong>：指的是在遍历元素的过程中，不是使用单个指针进行访问，而是使用两个指针进行访问，从而达到相应的目的。</p></div><ul><li>如果两个指针方向相反，则称为「对撞指针」；</li><li>如果两个指针方向相同，则称为「快慢指针」；</li><li>如果两个指针分别属于不同的数组 / 链表，则称为「分离双指针」。</li></ul><p>在数组的区间问题上，暴力算法的时间复杂度往往是 O(n^2)。而双指针利用了区间「单调性」的性质，可以将时间复杂度降到 O(n)。</p><h2 id="对撞指针" tabindex="-1"><a class="header-anchor" href="#对撞指针" aria-hidden="true">#</a> 对撞指针</h2><h2 id="快慢指针" tabindex="-1"><a class="header-anchor" href="#快慢指针" aria-hidden="true">#</a> 快慢指针</h2><h2 id="分离双指针" tabindex="-1"><a class="header-anchor" href="#分离双指针" aria-hidden="true">#</a> 分离双指针</h2>',7),f=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),u=t("h4",{id:"数组双指针",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数组双指针","aria-hidden":"true"},"#"),e(" 数组双指针")],-1),m=t("ul",null,[t("li",null,"对撞指针")],-1),p=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),y=t("td",{style:{"text-align":"center"}},"167",-1),x=t("td",{style:{"text-align":"left"}},"两数之和 II - 输入有序数组",-1),b={style:{"text-align":"center"}},k={style:{"text-align":"left"}},w=t("code",null,"数组",-1),v=t("code",null,"双指针",-1),I=t("code",null,"二分查找",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),E={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},q={href:"https://leetcode.com/problems/two-sum-ii-input-array-is-sorted",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"344",-1),z=t("td",{style:{"text-align":"left"}},"反转字符串",-1),L={style:{"text-align":"center"}},R={style:{"text-align":"left"}},S=t("code",null,"双指针",-1),V=t("code",null,"字符串",-1),A=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/reverse-string",target:"_blank",rel:"noopener noreferrer"},K=t("td",{style:{"text-align":"center"}},"345",-1),P=t("td",{style:{"text-align":"left"}},"反转字符串中的元音字母",-1),U={style:{"text-align":"center"}},j={style:{"text-align":"left"}},H=t("code",null,"双指针",-1),F=t("code",null,"字符串",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),J={style:{"text-align":"center"}},M={href:"https://leetcode.cn/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},Q={href:"https://leetcode.com/problems/reverse-vowels-of-a-string",target:"_blank",rel:"noopener noreferrer"},W=t("td",{style:{"text-align":"center"}},"125",-1),X=t("td",{style:{"text-align":"left"}},"验证回文串",-1),Y={style:{"text-align":"center"}},Z={style:{"text-align":"left"}},$=t("code",null,"双指针",-1),tt=t("code",null,"字符串",-1),et=t("td",{style:{"text-align":"center"}},"🟢",-1),ot={style:{"text-align":"center"}},lt={href:"https://leetcode.cn/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},nt={href:"https://leetcode.com/problems/valid-palindrome",target:"_blank",rel:"noopener noreferrer"},st=t("td",{style:{"text-align":"center"}},"11",-1),rt=t("td",{style:{"text-align":"left"}},"盛最多水的容器",-1),_t={style:{"text-align":"center"}},dt={style:{"text-align":"left"}},at=t("code",null,"贪心",-1),ct=t("code",null,"数组",-1),it=t("code",null,"双指针",-1),ht=t("td",{style:{"text-align":"center"}},"🟠",-1),gt={style:{"text-align":"center"}},ft={href:"https://leetcode.cn/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},ut={href:"https://leetcode.com/problems/container-with-most-water",target:"_blank",rel:"noopener noreferrer"},mt=t("td",{style:{"text-align":"center"}},"611",-1),pt=t("td",{style:{"text-align":"left"}},"有效三角形的个数",-1),yt={style:{"text-align":"center"}},xt={style:{"text-align":"left"}},bt=t("code",null,"贪心",-1),kt=t("code",null,"数组",-1),wt=t("code",null,"双指针",-1),vt=t("code",null,"2+",-1),It=t("td",{style:{"text-align":"center"}},"🟠",-1),Tt={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/valid-triangle-number",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/valid-triangle-number",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"15",-1),Ot=t("td",{style:{"text-align":"left"}},"三数之和",-1),zt={style:{"text-align":"center"}},Lt={style:{"text-align":"left"}},Rt=t("code",null,"数组",-1),St=t("code",null,"双指针",-1),Vt=t("code",null,"排序",-1),At=t("td",{style:{"text-align":"center"}},"🟠",-1),Bt={style:{"text-align":"center"}},Ct={href:"https://leetcode.cn/problems/3sum",target:"_blank",rel:"noopener noreferrer"},Dt={href:"https://leetcode.com/problems/3sum",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",{style:{"text-align":"center"}},"16",-1),Pt=t("td",{style:{"text-align":"left"}},"最接近的三数之和",-1),Ut={style:{"text-align":"center"}},jt={style:{"text-align":"left"}},Ht=t("code",null,"数组",-1),Ft=t("code",null,"双指针",-1),Gt=t("code",null,"排序",-1),Jt=t("td",{style:{"text-align":"center"}},"🟠",-1),Mt={style:{"text-align":"center"}},Qt={href:"https://leetcode.cn/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},Wt={href:"https://leetcode.com/problems/3sum-closest",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},"18",-1),Yt=t("td",{style:{"text-align":"left"}},"四数之和",-1),Zt={style:{"text-align":"center"}},$t={style:{"text-align":"left"}},te=t("code",null,"数组",-1),ee=t("code",null,"双指针",-1),oe=t("code",null,"排序",-1),le=t("td",{style:{"text-align":"center"}},"🟠",-1),ne={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/4sum",target:"_blank",rel:"noopener noreferrer"},re={href:"https://leetcode.com/problems/4sum",target:"_blank",rel:"noopener noreferrer"},_e=t("td",{style:{"text-align":"center"}},"259",-1),de=t("td",{style:{"text-align":"left"}},"较小的三数之和 🔒",-1),ae={style:{"text-align":"center"}},ce={style:{"text-align":"left"}},ie=t("code",null,"数组",-1),he=t("code",null,"双指针",-1),ge=t("code",null,"二分查找",-1),fe=t("code",null,"1+",-1),ue=t("td",{style:{"text-align":"center"}},"🟠",-1),me={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://leetcode.com/problems/3sum-smaller",target:"_blank",rel:"noopener noreferrer"},xe=t("td",{style:{"text-align":"center"}},"658",-1),be=t("td",{style:{"text-align":"left"}},"找到 K 个最接近的元素",-1),ke={style:{"text-align":"center"}},we={style:{"text-align":"left"}},ve=t("code",null,"数组",-1),Ie=t("code",null,"双指针",-1),Te=t("code",null,"二分查找",-1),Ee=t("code",null,"3+",-1),Ne=t("td",{style:{"text-align":"center"}},"🟠",-1),qe={style:{"text-align":"center"}},Oe={href:"https://leetcode.cn/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},ze={href:"https://leetcode.com/problems/find-k-closest-elements",target:"_blank",rel:"noopener noreferrer"},Le=t("td",{style:{"text-align":"center"}},"1099",-1),Re=t("td",{style:{"text-align":"left"}},"小于 K 的两数之和 🔒",-1),Se=t("td",{style:{"text-align":"center"}},null,-1),Ve={style:{"text-align":"left"}},Ae=t("code",null,"数组",-1),Be=t("code",null,"双指针",-1),Ce=t("code",null,"二分查找",-1),De=t("code",null,"1+",-1),Ke=t("td",{style:{"text-align":"center"}},"🟢",-1),Pe={style:{"text-align":"center"}},Ue={href:"https://leetcode.cn/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},je={href:"https://leetcode.com/problems/two-sum-less-than-k",target:"_blank",rel:"noopener noreferrer"},He=t("td",{style:{"text-align":"center"}},"75",-1),Fe=t("td",{style:{"text-align":"left"}},"颜色分类",-1),Ge={style:{"text-align":"center"}},Je={style:{"text-align":"left"}},Me=t("code",null,"数组",-1),Qe=t("code",null,"双指针",-1),We=t("code",null,"排序",-1),Xe=t("td",{style:{"text-align":"center"}},"🟠",-1),Ye={style:{"text-align":"center"}},Ze={href:"https://leetcode.cn/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},$e={href:"https://leetcode.com/problems/sort-colors",target:"_blank",rel:"noopener noreferrer"},to=t("td",{style:{"text-align":"center"}},"360",-1),eo=t("td",{style:{"text-align":"left"}},"有序转化数组 🔒",-1),oo=t("td",{style:{"text-align":"center"}},null,-1),lo={style:{"text-align":"left"}},no=t("code",null,"数组",-1),so=t("code",null,"数学",-1),ro=t("code",null,"双指针",-1),_o=t("code",null,"1+",-1),ao=t("td",{style:{"text-align":"center"}},"🟠",-1),co={style:{"text-align":"center"}},io={href:"https://leetcode.cn/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},ho={href:"https://leetcode.com/problems/sort-transformed-array",target:"_blank",rel:"noopener noreferrer"},go=t("td",{style:{"text-align":"center"}},"977",-1),fo=t("td",{style:{"text-align":"left"}},"有序数组的平方",-1),uo={style:{"text-align":"center"}},mo={style:{"text-align":"left"}},po=t("code",null,"数组",-1),yo=t("code",null,"双指针",-1),xo=t("code",null,"排序",-1),bo=t("td",{style:{"text-align":"center"}},"🟢",-1),ko={style:{"text-align":"center"}},wo={href:"https://leetcode.cn/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},vo={href:"https://leetcode.com/problems/squares-of-a-sorted-array",target:"_blank",rel:"noopener noreferrer"},Io=t("td",{style:{"text-align":"center"}},"881",-1),To=t("td",{style:{"text-align":"left"}},"救生艇",-1),Eo=t("td",{style:{"text-align":"center"}},null,-1),No={style:{"text-align":"left"}},qo=t("code",null,"贪心",-1),Oo=t("code",null,"数组",-1),zo=t("code",null,"双指针",-1),Lo=t("code",null,"1+",-1),Ro=t("td",{style:{"text-align":"center"}},"🟠",-1),So={style:{"text-align":"center"}},Vo={href:"https://leetcode.cn/problems/boats-to-save-people",target:"_blank",rel:"noopener noreferrer"},Ao={href:"https://leetcode.com/problems/boats-to-save-people",target:"_blank",rel:"noopener noreferrer"},Bo=t("td",{style:{"text-align":"center"}},"42",-1),Co=t("td",{style:{"text-align":"left"}},"接雨水",-1),Do={style:{"text-align":"center"}},Ko={style:{"text-align":"left"}},Po=t("code",null,"栈",-1),Uo=t("code",null,"数组",-1),jo=t("code",null,"双指针",-1),Ho=t("code",null,"2+",-1),Fo=t("td",{style:{"text-align":"center"}},"🔴",-1),Go={style:{"text-align":"center"}},Jo={href:"https://leetcode.cn/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},Mo={href:"https://leetcode.com/problems/trapping-rain-water",target:"_blank",rel:"noopener noreferrer"},Qo=t("td",{style:{"text-align":"center"}},"443",-1),Wo=t("td",{style:{"text-align":"left"}},"压缩字符串",-1),Xo={style:{"text-align":"center"}},Yo={style:{"text-align":"left"}},Zo=t("code",null,"双指针",-1),$o=t("code",null,"字符串",-1),tl=t("td",{style:{"text-align":"center"}},"🟠",-1),el={style:{"text-align":"center"}},ol={href:"https://leetcode.cn/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},ll={href:"https://leetcode.com/problems/string-compression",target:"_blank",rel:"noopener noreferrer"},nl=t("ul",null,[t("li",null,"快慢指针")],-1),sl=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),rl=t("td",{style:{"text-align":"center"}},"26",-1),_l=t("td",{style:{"text-align":"left"}},"删除有序数组中的重复项",-1),dl={style:{"text-align":"center"}},al={style:{"text-align":"left"}},cl=t("code",null,"数组",-1),il=t("code",null,"双指针",-1),hl=t("td",{style:{"text-align":"center"}},"🟢",-1),gl={style:{"text-align":"center"}},fl={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},ul={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array",target:"_blank",rel:"noopener noreferrer"},ml=t("td",{style:{"text-align":"center"}},"80",-1),pl=t("td",{style:{"text-align":"left"}},"删除有序数组中的重复项 II",-1),yl={style:{"text-align":"center"}},xl={style:{"text-align":"left"}},bl=t("code",null,"数组",-1),kl=t("code",null,"双指针",-1),wl=t("td",{style:{"text-align":"center"}},"🟠",-1),vl={style:{"text-align":"center"}},Il={href:"https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},Tl={href:"https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii",target:"_blank",rel:"noopener noreferrer"},El=t("td",{style:{"text-align":"center"}},"27",-1),Nl=t("td",{style:{"text-align":"left"}},"移除元素",-1),ql={style:{"text-align":"center"}},Ol={style:{"text-align":"left"}},zl=t("code",null,"数组",-1),Ll=t("code",null,"双指针",-1),Rl=t("td",{style:{"text-align":"center"}},"🟢",-1),Sl={style:{"text-align":"center"}},Vl={href:"https://leetcode.cn/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},Al={href:"https://leetcode.com/problems/remove-element",target:"_blank",rel:"noopener noreferrer"},Bl=t("td",{style:{"text-align":"center"}},"283",-1),Cl=t("td",{style:{"text-align":"left"}},"移动零",-1),Dl={style:{"text-align":"center"}},Kl={style:{"text-align":"left"}},Pl=t("code",null,"数组",-1),Ul=t("code",null,"双指针",-1),jl=t("td",{style:{"text-align":"center"}},"🟢",-1),Hl={style:{"text-align":"center"}},Fl={href:"https://leetcode.cn/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},Gl={href:"https://leetcode.com/problems/move-zeroes",target:"_blank",rel:"noopener noreferrer"},Jl=t("td",{style:{"text-align":"center"}},"845",-1),Ml=t("td",{style:{"text-align":"left"}},"数组中的最长山脉",-1),Ql={style:{"text-align":"center"}},Wl={style:{"text-align":"left"}},Xl=t("code",null,"数组",-1),Yl=t("code",null,"双指针",-1),Zl=t("code",null,"动态规划",-1),$l=t("code",null,"1+",-1),tn=t("td",{style:{"text-align":"center"}},"🟠",-1),en={style:{"text-align":"center"}},on={href:"https://leetcode.cn/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},ln={href:"https://leetcode.com/problems/longest-mountain-in-array",target:"_blank",rel:"noopener noreferrer"},nn=t("td",{style:{"text-align":"center"}},"88",-1),sn=t("td",{style:{"text-align":"left"}},"合并两个有序数组",-1),rn={style:{"text-align":"center"}},_n={style:{"text-align":"left"}},dn=t("code",null,"数组",-1),an=t("code",null,"双指针",-1),cn=t("code",null,"排序",-1),hn=t("td",{style:{"text-align":"center"}},"🟢",-1),gn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},un={href:"https://leetcode.com/problems/merge-sorted-array",target:"_blank",rel:"noopener noreferrer"},mn=t("td",{style:{"text-align":"center"}},"719",-1),pn=t("td",{style:{"text-align":"left"}},"找出第 K 小的数对距离",-1),yn=t("td",{style:{"text-align":"center"}},null,-1),xn={style:{"text-align":"left"}},bn=t("code",null,"数组",-1),kn=t("code",null,"双指针",-1),wn=t("code",null,"二分查找",-1),vn=t("code",null,"1+",-1),In=t("td",{style:{"text-align":"center"}},"🔴",-1),Tn={style:{"text-align":"center"}},En={href:"https://leetcode.cn/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},Nn={href:"https://leetcode.com/problems/find-k-th-smallest-pair-distance",target:"_blank",rel:"noopener noreferrer"},qn=t("td",{style:{"text-align":"center"}},"334",-1),On=t("td",{style:{"text-align":"left"}},"递增的三元子序列",-1),zn={style:{"text-align":"center"}},Ln={style:{"text-align":"left"}},Rn=t("code",null,"贪心",-1),Sn=t("code",null,"数组",-1),Vn=t("td",{style:{"text-align":"center"}},"🟠",-1),An={style:{"text-align":"center"}},Bn={href:"https://leetcode.cn/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},Cn={href:"https://leetcode.com/problems/increasing-triplet-subsequence",target:"_blank",rel:"noopener noreferrer"},Dn=t("td",{style:{"text-align":"center"}},"978",-1),Kn=t("td",{style:{"text-align":"left"}},"最长湍流子数组",-1),Pn=t("td",{style:{"text-align":"center"}},null,-1),Un={style:{"text-align":"left"}},jn=t("code",null,"数组",-1),Hn=t("code",null,"动态规划",-1),Fn=t("code",null,"滑动窗口",-1),Gn=t("td",{style:{"text-align":"center"}},"🟠",-1),Jn={style:{"text-align":"center"}},Mn={href:"https://leetcode.cn/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},Qn={href:"https://leetcode.com/problems/longest-turbulent-subarray",target:"_blank",rel:"noopener noreferrer"},Wn=t("td",{style:{"text-align":"center"}},"剑指 Offer 21",-1),Xn=t("td",{style:{"text-align":"left"}},"调整数组顺序使奇数位于偶数前面",-1),Yn={style:{"text-align":"center"}},Zn={style:{"text-align":"left"}},$n=t("code",null,"数组",-1),ts=t("code",null,"双指针",-1),es=t("code",null,"排序",-1),os=t("td",{style:{"text-align":"center"}},"🟢",-1),ls={style:{"text-align":"center"}},ns={href:"https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof",target:"_blank",rel:"noopener noreferrer"},ss=t("ul",null,[t("li",null,"分离双指针")],-1),rs=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),_s=t("td",{style:{"text-align":"center"}},"350",-1),ds=t("td",{style:{"text-align":"left"}},"两个数组的交集 II",-1),as={style:{"text-align":"center"}},cs={style:{"text-align":"left"}},is=t("code",null,"数组",-1),hs=t("code",null,"哈希表",-1),gs=t("code",null,"双指针",-1),fs=t("code",null,"2+",-1),us=t("td",{style:{"text-align":"center"}},"🟢",-1),ms={style:{"text-align":"center"}},ps={href:"https://leetcode.cn/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},ys={href:"https://leetcode.com/problems/intersection-of-two-arrays-ii",target:"_blank",rel:"noopener noreferrer"},xs=t("td",{style:{"text-align":"center"}},"925",-1),bs=t("td",{style:{"text-align":"left"}},"长按键入",-1),ks={style:{"text-align":"center"}},ws={style:{"text-align":"left"}},vs=t("code",null,"双指针",-1),Is=t("code",null,"字符串",-1),Ts=t("td",{style:{"text-align":"center"}},"🟢",-1),Es={style:{"text-align":"center"}},Ns={href:"https://leetcode.cn/problems/long-pressed-name",target:"_blank",rel:"noopener noreferrer"},qs={href:"https://leetcode.com/problems/long-pressed-name",target:"_blank",rel:"noopener noreferrer"},Os=t("td",{style:{"text-align":"center"}},"844",-1),zs=t("td",{style:{"text-align":"left"}},"比较含退格的字符串",-1),Ls={style:{"text-align":"center"}},Rs={style:{"text-align":"left"}},Ss=t("code",null,"栈",-1),Vs=t("code",null,"双指针",-1),As=t("code",null,"字符串",-1),Bs=t("code",null,"1+",-1),Cs=t("td",{style:{"text-align":"center"}},"🟢",-1),Ds={style:{"text-align":"center"}},Ks={href:"https://leetcode.cn/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},Ps={href:"https://leetcode.com/problems/backspace-string-compare",target:"_blank",rel:"noopener noreferrer"},Us=t("td",{style:{"text-align":"center"}},"1229",-1),js=t("td",{style:{"text-align":"left"}},"安排会议日程 🔒",-1),Hs=t("td",{style:{"text-align":"center"}},null,-1),Fs={style:{"text-align":"left"}},Gs=t("code",null,"数组",-1),Js=t("code",null,"双指针",-1),Ms=t("code",null,"排序",-1),Qs=t("td",{style:{"text-align":"center"}},"🟠",-1),Ws={style:{"text-align":"center"}},Xs={href:"https://leetcode.cn/problems/meeting-scheduler",target:"_blank",rel:"noopener noreferrer"},Ys={href:"https://leetcode.com/problems/meeting-scheduler",target:"_blank",rel:"noopener noreferrer"},Zs=t("td",{style:{"text-align":"center"}},"415",-1),$s=t("td",{style:{"text-align":"left"}},"字符串相加",-1),tr={style:{"text-align":"center"}},er={style:{"text-align":"left"}},or=t("code",null,"数学",-1),lr=t("code",null,"字符串",-1),nr=t("code",null,"模拟",-1),sr=t("td",{style:{"text-align":"center"}},"🟢",-1),rr={style:{"text-align":"center"}},_r={href:"https://leetcode.cn/problems/add-strings",target:"_blank",rel:"noopener noreferrer"},dr={href:"https://leetcode.com/problems/add-strings",target:"_blank",rel:"noopener noreferrer"};function ar(cr,ir){const l=_("RouterLink"),s=_("ExternalLinkIcon");return a(),c("div",null,[g,r(" START TABLE "),r(" Please keep comment here to allow auto update "),r(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),f,u,m,r(" prettier-ignore "),t("table",null,[p,t("tbody",null,[t("tr",null,[y,x,t("td",b,[o(l,{to:"/problem/0167.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",k,[o(l,{to:"/tag/array.html"},{default:n(()=>[w]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[v]),_:1}),e(),o(l,{to:"/tag/binary-search.html"},{default:n(()=>[I]),_:1})]),T,t("td",E,[t("a",N,[e("🀄️"),o(s)]),e(),t("a",q,[e("🔗"),o(s)])])]),t("tr",null,[O,z,t("td",L,[o(l,{to:"/problem/0344.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",R,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[S]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[V]),_:1})]),A,t("td",B,[t("a",C,[e("🀄️"),o(s)]),e(),t("a",D,[e("🔗"),o(s)])])]),t("tr",null,[K,P,t("td",U,[o(l,{to:"/problem/0345.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",j,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[H]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[F]),_:1})]),G,t("td",J,[t("a",M,[e("🀄️"),o(s)]),e(),t("a",Q,[e("🔗"),o(s)])])]),t("tr",null,[W,X,t("td",Y,[o(l,{to:"/problem/0125.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Z,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[$]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[tt]),_:1})]),et,t("td",ot,[t("a",lt,[e("🀄️"),o(s)]),e(),t("a",nt,[e("🔗"),o(s)])])]),t("tr",null,[st,rt,t("td",_t,[o(l,{to:"/problem/0011.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",dt,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[at]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[ct]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[it]),_:1})]),ht,t("td",gt,[t("a",ft,[e("🀄️"),o(s)]),e(),t("a",ut,[e("🔗"),o(s)])])]),t("tr",null,[mt,pt,t("td",yt,[o(l,{to:"/problem/0611.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",xt,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[bt]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[kt]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[wt]),_:1}),e(),vt]),It,t("td",Tt,[t("a",Et,[e("🀄️"),o(s)]),e(),t("a",Nt,[e("🔗"),o(s)])])]),t("tr",null,[qt,Ot,t("td",zt,[o(l,{to:"/problem/0015.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Lt,[o(l,{to:"/tag/array.html"},{default:n(()=>[Rt]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[St]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[Vt]),_:1})]),At,t("td",Bt,[t("a",Ct,[e("🀄️"),o(s)]),e(),t("a",Dt,[e("🔗"),o(s)])])]),t("tr",null,[Kt,Pt,t("td",Ut,[o(l,{to:"/problem/0016.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",jt,[o(l,{to:"/tag/array.html"},{default:n(()=>[Ht]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Ft]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[Gt]),_:1})]),Jt,t("td",Mt,[t("a",Qt,[e("🀄️"),o(s)]),e(),t("a",Wt,[e("🔗"),o(s)])])]),t("tr",null,[Xt,Yt,t("td",Zt,[o(l,{to:"/problem/0018.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",$t,[o(l,{to:"/tag/array.html"},{default:n(()=>[te]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[ee]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[oe]),_:1})]),le,t("td",ne,[t("a",se,[e("🀄️"),o(s)]),e(),t("a",re,[e("🔗"),o(s)])])]),t("tr",null,[_e,de,t("td",ae,[o(l,{to:"/problem/0259.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",ce,[o(l,{to:"/tag/array.html"},{default:n(()=>[ie]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[he]),_:1}),e(),o(l,{to:"/tag/binary-search.html"},{default:n(()=>[ge]),_:1}),e(),fe]),ue,t("td",me,[t("a",pe,[e("🀄️"),o(s)]),e(),t("a",ye,[e("🔗"),o(s)])])]),t("tr",null,[xe,be,t("td",ke,[o(l,{to:"/problem/0658.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",we,[o(l,{to:"/tag/array.html"},{default:n(()=>[ve]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Ie]),_:1}),e(),o(l,{to:"/tag/binary-search.html"},{default:n(()=>[Te]),_:1}),e(),Ee]),Ne,t("td",qe,[t("a",Oe,[e("🀄️"),o(s)]),e(),t("a",ze,[e("🔗"),o(s)])])]),t("tr",null,[Le,Re,Se,t("td",Ve,[o(l,{to:"/tag/array.html"},{default:n(()=>[Ae]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Be]),_:1}),e(),o(l,{to:"/tag/binary-search.html"},{default:n(()=>[Ce]),_:1}),e(),De]),Ke,t("td",Pe,[t("a",Ue,[e("🀄️"),o(s)]),e(),t("a",je,[e("🔗"),o(s)])])]),t("tr",null,[He,Fe,t("td",Ge,[o(l,{to:"/problem/0075.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Je,[o(l,{to:"/tag/array.html"},{default:n(()=>[Me]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Qe]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[We]),_:1})]),Xe,t("td",Ye,[t("a",Ze,[e("🀄️"),o(s)]),e(),t("a",$e,[e("🔗"),o(s)])])]),t("tr",null,[to,eo,oo,t("td",lo,[o(l,{to:"/tag/array.html"},{default:n(()=>[no]),_:1}),e(),o(l,{to:"/tag/math.html"},{default:n(()=>[so]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[ro]),_:1}),e(),_o]),ao,t("td",co,[t("a",io,[e("🀄️"),o(s)]),e(),t("a",ho,[e("🔗"),o(s)])])]),t("tr",null,[go,fo,t("td",uo,[o(l,{to:"/problem/0977.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",mo,[o(l,{to:"/tag/array.html"},{default:n(()=>[po]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[yo]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[xo]),_:1})]),bo,t("td",ko,[t("a",wo,[e("🀄️"),o(s)]),e(),t("a",vo,[e("🔗"),o(s)])])]),t("tr",null,[Io,To,Eo,t("td",No,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[qo]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Oo]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[zo]),_:1}),e(),Lo]),Ro,t("td",So,[t("a",Vo,[e("🀄️"),o(s)]),e(),t("a",Ao,[e("🔗"),o(s)])])]),t("tr",null,[Bo,Co,t("td",Do,[o(l,{to:"/problem/0042.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Ko,[o(l,{to:"/tag/stack.html"},{default:n(()=>[Po]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Uo]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[jo]),_:1}),e(),Ho]),Fo,t("td",Go,[t("a",Jo,[e("🀄️"),o(s)]),e(),t("a",Mo,[e("🔗"),o(s)])])]),t("tr",null,[Qo,Wo,t("td",Xo,[o(l,{to:"/problem/0443.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Yo,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Zo]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[$o]),_:1})]),tl,t("td",el,[t("a",ol,[e("🀄️"),o(s)]),e(),t("a",ll,[e("🔗"),o(s)])])])])]),nl,r(" prettier-ignore "),t("table",null,[sl,t("tbody",null,[t("tr",null,[rl,_l,t("td",dl,[o(l,{to:"/problem/0026.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",al,[o(l,{to:"/tag/array.html"},{default:n(()=>[cl]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[il]),_:1})]),hl,t("td",gl,[t("a",fl,[e("🀄️"),o(s)]),e(),t("a",ul,[e("🔗"),o(s)])])]),t("tr",null,[ml,pl,t("td",yl,[o(l,{to:"/problem/0080.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",xl,[o(l,{to:"/tag/array.html"},{default:n(()=>[bl]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[kl]),_:1})]),wl,t("td",vl,[t("a",Il,[e("🀄️"),o(s)]),e(),t("a",Tl,[e("🔗"),o(s)])])]),t("tr",null,[El,Nl,t("td",ql,[o(l,{to:"/problem/0027.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Ol,[o(l,{to:"/tag/array.html"},{default:n(()=>[zl]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Ll]),_:1})]),Rl,t("td",Sl,[t("a",Vl,[e("🀄️"),o(s)]),e(),t("a",Al,[e("🔗"),o(s)])])]),t("tr",null,[Bl,Cl,t("td",Dl,[o(l,{to:"/problem/0283.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Kl,[o(l,{to:"/tag/array.html"},{default:n(()=>[Pl]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Ul]),_:1})]),jl,t("td",Hl,[t("a",Fl,[e("🀄️"),o(s)]),e(),t("a",Gl,[e("🔗"),o(s)])])]),t("tr",null,[Jl,Ml,t("td",Ql,[o(l,{to:"/problem/0845.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Wl,[o(l,{to:"/tag/array.html"},{default:n(()=>[Xl]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Yl]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[Zl]),_:1}),e(),$l]),tn,t("td",en,[t("a",on,[e("🀄️"),o(s)]),e(),t("a",ln,[e("🔗"),o(s)])])]),t("tr",null,[nn,sn,t("td",rn,[o(l,{to:"/problem/0088.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",_n,[o(l,{to:"/tag/array.html"},{default:n(()=>[dn]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[an]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[cn]),_:1})]),hn,t("td",gn,[t("a",fn,[e("🀄️"),o(s)]),e(),t("a",un,[e("🔗"),o(s)])])]),t("tr",null,[mn,pn,yn,t("td",xn,[o(l,{to:"/tag/array.html"},{default:n(()=>[bn]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[kn]),_:1}),e(),o(l,{to:"/tag/binary-search.html"},{default:n(()=>[wn]),_:1}),e(),vn]),In,t("td",Tn,[t("a",En,[e("🀄️"),o(s)]),e(),t("a",Nn,[e("🔗"),o(s)])])]),t("tr",null,[qn,On,t("td",zn,[o(l,{to:"/problem/0334.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Ln,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Rn]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Sn]),_:1})]),Vn,t("td",An,[t("a",Bn,[e("🀄️"),o(s)]),e(),t("a",Cn,[e("🔗"),o(s)])])]),t("tr",null,[Dn,Kn,Pn,t("td",Un,[o(l,{to:"/tag/array.html"},{default:n(()=>[jn]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[Hn]),_:1}),e(),o(l,{to:"/tag/sliding-window.html"},{default:n(()=>[Fn]),_:1})]),Gn,t("td",Jn,[t("a",Mn,[e("🀄️"),o(s)]),e(),t("a",Qn,[e("🔗"),o(s)])])]),t("tr",null,[Wn,Xn,t("td",Yn,[o(l,{to:"/offer/jz_offer_21_1.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Zn,[o(l,{to:"/tag/array.html"},{default:n(()=>[$n]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[ts]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[es]),_:1})]),os,t("td",ls,[t("a",ns,[e("🀄️"),o(s)])])])])]),ss,r(" prettier-ignore "),t("table",null,[rs,t("tbody",null,[t("tr",null,[_s,ds,t("td",as,[o(l,{to:"/problem/0350.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",cs,[o(l,{to:"/tag/array.html"},{default:n(()=>[is]),_:1}),e(),o(l,{to:"/tag/hash-table.html"},{default:n(()=>[hs]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[gs]),_:1}),e(),fs]),us,t("td",ms,[t("a",ps,[e("🀄️"),o(s)]),e(),t("a",ys,[e("🔗"),o(s)])])]),t("tr",null,[xs,bs,t("td",ks,[o(l,{to:"/problem/0925.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",ws,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[vs]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[Is]),_:1})]),Ts,t("td",Es,[t("a",Ns,[e("🀄️"),o(s)]),e(),t("a",qs,[e("🔗"),o(s)])])]),t("tr",null,[Os,zs,t("td",Ls,[o(l,{to:"/problem/0844.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Rs,[o(l,{to:"/tag/stack.html"},{default:n(()=>[Ss]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Vs]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[As]),_:1}),e(),Bs]),Cs,t("td",Ds,[t("a",Ks,[e("🀄️"),o(s)]),e(),t("a",Ps,[e("🔗"),o(s)])])]),t("tr",null,[Us,js,Hs,t("td",Fs,[o(l,{to:"/tag/array.html"},{default:n(()=>[Gs]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[Js]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[Ms]),_:1})]),Qs,t("td",Ws,[t("a",Xs,[e("🀄️"),o(s)]),e(),t("a",Ys,[e("🔗"),o(s)])])]),t("tr",null,[Zs,$s,t("td",tr,[o(l,{to:"/problem/0415.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",er,[o(l,{to:"/tag/math.html"},{default:n(()=>[or]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[lr]),_:1}),e(),o(l,{to:"/tag/simulation.html"},{default:n(()=>[nr]),_:1})]),sr,t("td",rr,[t("a",_r,[e("🀄️"),o(s)]),e(),t("a",dr,[e("🔗"),o(s)])])])])])])}const gr=d(h,[["render",ar],["__file","two_pointer.html.vue"]]);export{gr as default};

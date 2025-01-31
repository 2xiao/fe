import{_,r as d,o as a,c,f as r,a as t,d as o,w as n,b as e,e as i}from"./app-MkGfDfkx.js";const h={},g=i('<h1 id="_3-5-贪心算法" tabindex="-1"><a class="header-anchor" href="#_3-5-贪心算法" aria-hidden="true">#</a> 3.5 贪心算法</h1><h4 id="什么是贪心算法" tabindex="-1"><a class="header-anchor" href="#什么是贪心算法" aria-hidden="true">#</a> 什么是贪心算法？</h4><p>贪心算法，又称贪婪算法，在对问题求解时，总是做出在当前看来最好的选择，期望通过每个阶段的局部最优选择达到全局最优，但结果不一定最优。</p><h4 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h4><p>简单的说，问题能够分解成子问题来解决，子问题的最优解能递推到最终问题的最优解，就能用贪心算法的到最后的最优解，这种子问题最优解称为最优子结构。</p><h4 id="贪心算法与动态规划的区别" tabindex="-1"><a class="header-anchor" href="#贪心算法与动态规划的区别" aria-hidden="true">#</a> 贪心算法与动态规划的区别</h4><p>贪心算法与动态规划的不同点在于它对每个子问题的解决方案都做出当前的最优选择，不能回退，而动态规划会保留之前的运算结果，并根据之前的结果进行选择，有回退的功能，贪心是动态规划的理想化的情况。</p>',7),m=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),e(" 相关题目")],-1),u=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),f=t("td",{style:{"text-align":"center"}},"455",-1),p=t("td",{style:{"text-align":"left"}},"分发饼干",-1),y={style:{"text-align":"center"}},x={style:{"text-align":"left"}},b=t("code",null,"贪心",-1),k=t("code",null,"数组",-1),v=t("code",null,"双指针",-1),w=t("code",null,"1+",-1),T=t("td",{style:{"text-align":"center"}},"🟢",-1),I={style:{"text-align":"center"}},E={href:"https://leetcode.cn/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},N={href:"https://leetcode.com/problems/assign-cookies",target:"_blank",rel:"noopener noreferrer"},q=t("td",{style:{"text-align":"center"}},"860",-1),L=t("td",{style:{"text-align":"left"}},"柠檬水找零",-1),R={style:{"text-align":"center"}},S={style:{"text-align":"left"}},V=t("code",null,"贪心",-1),j=t("code",null,"数组",-1),A=t("td",{style:{"text-align":"center"}},"🟢",-1),B={style:{"text-align":"center"}},C={href:"https://leetcode.cn/problems/lemonade-change",target:"_blank",rel:"noopener noreferrer"},D={href:"https://leetcode.com/problems/lemonade-change",target:"_blank",rel:"noopener noreferrer"},O=t("td",{style:{"text-align":"center"}},"56",-1),K=t("td",{style:{"text-align":"left"}},"合并区间",-1),P={style:{"text-align":"center"}},U={style:{"text-align":"left"}},H=t("code",null,"数组",-1),z=t("code",null,"排序",-1),F=t("td",{style:{"text-align":"center"}},"🟠",-1),G={style:{"text-align":"center"}},J={href:"https://leetcode.cn/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},M={href:"https://leetcode.com/problems/merge-intervals",target:"_blank",rel:"noopener noreferrer"},Q=t("td",{style:{"text-align":"center"}},"435",-1),W=t("td",{style:{"text-align":"left"}},"无重叠区间",-1),X={style:{"text-align":"center"}},Y={style:{"text-align":"left"}},Z=t("code",null,"贪心",-1),$=t("code",null,"数组",-1),tt=t("code",null,"动态规划",-1),et=t("code",null,"1+",-1),ot=t("td",{style:{"text-align":"center"}},"🟠",-1),lt={style:{"text-align":"center"}},nt={href:"https://leetcode.cn/problems/non-overlapping-intervals",target:"_blank",rel:"noopener noreferrer"},st={href:"https://leetcode.com/problems/non-overlapping-intervals",target:"_blank",rel:"noopener noreferrer"},rt=t("td",{style:{"text-align":"center"}},"452",-1),dt=t("td",{style:{"text-align":"left"}},"用最少数量的箭引爆气球",-1),_t={style:{"text-align":"center"}},at={style:{"text-align":"left"}},ct=t("code",null,"贪心",-1),it=t("code",null,"数组",-1),ht=t("code",null,"排序",-1),gt=t("td",{style:{"text-align":"center"}},"🟠",-1),mt={style:{"text-align":"center"}},ut={href:"https://leetcode.cn/problems/minimum-number-of-arrows-to-burst-balloons",target:"_blank",rel:"noopener noreferrer"},ft={href:"https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons",target:"_blank",rel:"noopener noreferrer"},pt=t("td",{style:{"text-align":"center"}},"55",-1),yt=t("td",{style:{"text-align":"left"}},"跳跃游戏",-1),xt={style:{"text-align":"center"}},bt={style:{"text-align":"left"}},kt=t("code",null,"贪心",-1),vt=t("code",null,"数组",-1),wt=t("code",null,"动态规划",-1),Tt=t("td",{style:{"text-align":"center"}},"🟠",-1),It={style:{"text-align":"center"}},Et={href:"https://leetcode.cn/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},Nt={href:"https://leetcode.com/problems/jump-game",target:"_blank",rel:"noopener noreferrer"},qt=t("td",{style:{"text-align":"center"}},"45",-1),Lt=t("td",{style:{"text-align":"left"}},"跳跃游戏 II",-1),Rt={style:{"text-align":"center"}},St={style:{"text-align":"left"}},Vt=t("code",null,"贪心",-1),jt=t("code",null,"数组",-1),At=t("code",null,"动态规划",-1),Bt=t("td",{style:{"text-align":"center"}},"🟠",-1),Ct={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},Ot={href:"https://leetcode.com/problems/jump-game-ii",target:"_blank",rel:"noopener noreferrer"},Kt=t("td",{style:{"text-align":"center"}},"392",-1),Pt=t("td",{style:{"text-align":"left"}},"判断子序列",-1),Ut={style:{"text-align":"center"}},Ht={style:{"text-align":"left"}},zt=t("code",null,"双指针",-1),Ft=t("code",null,"字符串",-1),Gt=t("code",null,"动态规划",-1),Jt=t("td",{style:{"text-align":"center"}},"🟢",-1),Mt={style:{"text-align":"center"}},Qt={href:"https://leetcode.cn/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},Wt={href:"https://leetcode.com/problems/is-subsequence",target:"_blank",rel:"noopener noreferrer"},Xt=t("td",{style:{"text-align":"center"}},"122",-1),Yt=t("td",{style:{"text-align":"left"}},"买卖股票的最佳时机 II",-1),Zt={style:{"text-align":"center"}},$t={style:{"text-align":"left"}},te=t("code",null,"贪心",-1),ee=t("code",null,"数组",-1),oe=t("code",null,"动态规划",-1),le=t("td",{style:{"text-align":"center"}},"🟠",-1),ne={style:{"text-align":"center"}},se={href:"https://leetcode.cn/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},re={href:"https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii",target:"_blank",rel:"noopener noreferrer"},de=t("td",{style:{"text-align":"center"}},"561",-1),_e=t("td",{style:{"text-align":"left"}},"数组拆分",-1),ae={style:{"text-align":"center"}},ce={style:{"text-align":"left"}},ie=t("code",null,"贪心",-1),he=t("code",null,"数组",-1),ge=t("code",null,"计数排序",-1),me=t("code",null,"1+",-1),ue=t("td",{style:{"text-align":"center"}},"🟢",-1),fe={style:{"text-align":"center"}},pe={href:"https://leetcode.cn/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},ye={href:"https://leetcode.com/problems/array-partition",target:"_blank",rel:"noopener noreferrer"},xe=t("td",{style:{"text-align":"center"}},"1710",-1),be=t("td",{style:{"text-align":"left"}},"卡车上的最大单元数",-1),ke={style:{"text-align":"center"}},ve={style:{"text-align":"left"}},we=t("code",null,"贪心",-1),Te=t("code",null,"数组",-1),Ie=t("code",null,"排序",-1),Ee=t("td",{style:{"text-align":"center"}},"🟢",-1),Ne={style:{"text-align":"center"}},qe={href:"https://leetcode.cn/problems/maximum-units-on-a-truck",target:"_blank",rel:"noopener noreferrer"},Le={href:"https://leetcode.com/problems/maximum-units-on-a-truck",target:"_blank",rel:"noopener noreferrer"},Re=t("td",{style:{"text-align":"center"}},"1217",-1),Se=t("td",{style:{"text-align":"left"}},"玩筹码",-1),Ve={style:{"text-align":"center"}},je={style:{"text-align":"left"}},Ae=t("code",null,"贪心",-1),Be=t("code",null,"数组",-1),Ce=t("code",null,"数学",-1),De=t("td",{style:{"text-align":"center"}},"🟢",-1),Oe={style:{"text-align":"center"}},Ke={href:"https://leetcode.cn/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},Pe={href:"https://leetcode.com/problems/minimum-cost-to-move-chips-to-the-same-position",target:"_blank",rel:"noopener noreferrer"},Ue=t("td",{style:{"text-align":"center"}},"1247",-1),He=t("td",{style:{"text-align":"left"}},"交换字符使得字符串相同",-1),ze=t("td",{style:{"text-align":"center"}},null,-1),Fe={style:{"text-align":"left"}},Ge=t("code",null,"贪心",-1),Je=t("code",null,"数学",-1),Me=t("code",null,"字符串",-1),Qe=t("td",{style:{"text-align":"center"}},"🟠",-1),We={style:{"text-align":"center"}},Xe={href:"https://leetcode.cn/problems/minimum-swaps-to-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},Ye={href:"https://leetcode.com/problems/minimum-swaps-to-make-strings-equal",target:"_blank",rel:"noopener noreferrer"},Ze=t("td",{style:{"text-align":"center"}},"1400",-1),$e=t("td",{style:{"text-align":"left"}},"构造 K 个回文字符串",-1),to={style:{"text-align":"center"}},eo={style:{"text-align":"left"}},oo=t("code",null,"贪心",-1),lo=t("code",null,"哈希表",-1),no=t("code",null,"字符串",-1),so=t("code",null,"1+",-1),ro=t("td",{style:{"text-align":"center"}},"🟠",-1),_o={style:{"text-align":"center"}},ao={href:"https://leetcode.cn/problems/construct-k-palindrome-strings",target:"_blank",rel:"noopener noreferrer"},co={href:"https://leetcode.com/problems/construct-k-palindrome-strings",target:"_blank",rel:"noopener noreferrer"},io=t("td",{style:{"text-align":"center"}},"921",-1),ho=t("td",{style:{"text-align":"left"}},"使括号有效的最少添加",-1),go={style:{"text-align":"center"}},mo={style:{"text-align":"left"}},uo=t("code",null,"栈",-1),fo=t("code",null,"贪心",-1),po=t("code",null,"字符串",-1),yo=t("td",{style:{"text-align":"center"}},"🟠",-1),xo={style:{"text-align":"center"}},bo={href:"https://leetcode.cn/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},ko={href:"https://leetcode.com/problems/minimum-add-to-make-parentheses-valid",target:"_blank",rel:"noopener noreferrer"},vo=t("td",{style:{"text-align":"center"}},"1029",-1),wo=t("td",{style:{"text-align":"left"}},"两地调度",-1),To=t("td",{style:{"text-align":"center"}},null,-1),Io={style:{"text-align":"left"}},Eo=t("code",null,"贪心",-1),No=t("code",null,"数组",-1),qo=t("code",null,"排序",-1),Lo=t("td",{style:{"text-align":"center"}},"🟠",-1),Ro={style:{"text-align":"center"}},So={href:"https://leetcode.cn/problems/two-city-scheduling",target:"_blank",rel:"noopener noreferrer"},Vo={href:"https://leetcode.com/problems/two-city-scheduling",target:"_blank",rel:"noopener noreferrer"},jo=t("td",{style:{"text-align":"center"}},"1605",-1),Ao=t("td",{style:{"text-align":"left"}},"给定行和列的和求可行矩阵",-1),Bo=t("td",{style:{"text-align":"center"}},null,-1),Co={style:{"text-align":"left"}},Do=t("code",null,"贪心",-1),Oo=t("code",null,"数组",-1),Ko=t("code",null,"矩阵",-1),Po=t("td",{style:{"text-align":"center"}},"🟠",-1),Uo={style:{"text-align":"center"}},Ho={href:"https://leetcode.cn/problems/find-valid-matrix-given-row-and-column-sums",target:"_blank",rel:"noopener noreferrer"},zo={href:"https://leetcode.com/problems/find-valid-matrix-given-row-and-column-sums",target:"_blank",rel:"noopener noreferrer"},Fo=t("td",{style:{"text-align":"center"}},"135",-1),Go=t("td",{style:{"text-align":"left"}},"分发糖果",-1),Jo={style:{"text-align":"center"}},Mo={style:{"text-align":"left"}},Qo=t("code",null,"贪心",-1),Wo=t("code",null,"数组",-1),Xo=t("td",{style:{"text-align":"center"}},"🔴",-1),Yo={style:{"text-align":"center"}},Zo={href:"https://leetcode.cn/problems/candy",target:"_blank",rel:"noopener noreferrer"},$o={href:"https://leetcode.com/problems/candy",target:"_blank",rel:"noopener noreferrer"},tl=t("td",{style:{"text-align":"center"}},"134",-1),el=t("td",{style:{"text-align":"left"}},"加油站",-1),ol={style:{"text-align":"center"}},ll={style:{"text-align":"left"}},nl=t("code",null,"贪心",-1),sl=t("code",null,"数组",-1),rl=t("td",{style:{"text-align":"center"}},"🟠",-1),dl={style:{"text-align":"center"}},_l={href:"https://leetcode.cn/problems/gas-station",target:"_blank",rel:"noopener noreferrer"},al={href:"https://leetcode.com/problems/gas-station",target:"_blank",rel:"noopener noreferrer"},cl=t("td",{style:{"text-align":"center"}},"53",-1),il=t("td",{style:{"text-align":"left"}},"最大子数组和",-1),hl={style:{"text-align":"center"}},gl={style:{"text-align":"left"}},ml=t("code",null,"数组",-1),ul=t("code",null,"分治",-1),fl=t("code",null,"动态规划",-1),pl=t("td",{style:{"text-align":"center"}},"🟠",-1),yl={style:{"text-align":"center"}},xl={href:"https://leetcode.cn/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},bl={href:"https://leetcode.com/problems/maximum-subarray",target:"_blank",rel:"noopener noreferrer"},kl=t("td",{style:{"text-align":"center"}},"376",-1),vl=t("td",{style:{"text-align":"left"}},"摆动序列",-1),wl=t("td",{style:{"text-align":"center"}},null,-1),Tl={style:{"text-align":"left"}},Il=t("code",null,"贪心",-1),El=t("code",null,"数组",-1),Nl=t("code",null,"动态规划",-1),ql=t("td",{style:{"text-align":"center"}},"🟠",-1),Ll={style:{"text-align":"center"}},Rl={href:"https://leetcode.cn/problems/wiggle-subsequence",target:"_blank",rel:"noopener noreferrer"},Sl={href:"https://leetcode.com/problems/wiggle-subsequence",target:"_blank",rel:"noopener noreferrer"},Vl=t("td",{style:{"text-align":"center"}},"738",-1),jl=t("td",{style:{"text-align":"left"}},"单调递增的数字",-1),Al=t("td",{style:{"text-align":"center"}},null,-1),Bl={style:{"text-align":"left"}},Cl=t("code",null,"贪心",-1),Dl=t("code",null,"数学",-1),Ol=t("td",{style:{"text-align":"center"}},"🟠",-1),Kl={style:{"text-align":"center"}},Pl={href:"https://leetcode.cn/problems/monotone-increasing-digits",target:"_blank",rel:"noopener noreferrer"},Ul={href:"https://leetcode.com/problems/monotone-increasing-digits",target:"_blank",rel:"noopener noreferrer"},Hl=t("td",{style:{"text-align":"center"}},"402",-1),zl=t("td",{style:{"text-align":"left"}},"移掉 K 位数字",-1),Fl=t("td",{style:{"text-align":"center"}},null,-1),Gl={style:{"text-align":"left"}},Jl=t("code",null,"栈",-1),Ml=t("code",null,"贪心",-1),Ql=t("code",null,"字符串",-1),Wl=t("code",null,"1+",-1),Xl=t("td",{style:{"text-align":"center"}},"🟠",-1),Yl={style:{"text-align":"center"}},Zl={href:"https://leetcode.cn/problems/remove-k-digits",target:"_blank",rel:"noopener noreferrer"},$l={href:"https://leetcode.com/problems/remove-k-digits",target:"_blank",rel:"noopener noreferrer"},tn=t("td",{style:{"text-align":"center"}},"861",-1),en=t("td",{style:{"text-align":"left"}},"翻转矩阵后的得分",-1),on=t("td",{style:{"text-align":"center"}},null,-1),ln={style:{"text-align":"left"}},nn=t("code",null,"贪心",-1),sn=t("code",null,"位运算",-1),rn=t("code",null,"数组",-1),dn=t("code",null,"1+",-1),_n=t("td",{style:{"text-align":"center"}},"🟠",-1),an={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/score-after-flipping-matrix",target:"_blank",rel:"noopener noreferrer"},hn={href:"https://leetcode.com/problems/score-after-flipping-matrix",target:"_blank",rel:"noopener noreferrer"},gn=t("td",{style:{"text-align":"center"}},"670",-1),mn=t("td",{style:{"text-align":"left"}},"最大交换",-1),un={style:{"text-align":"center"}},fn={style:{"text-align":"left"}},pn=t("code",null,"贪心",-1),yn=t("code",null,"数学",-1),xn=t("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},kn={href:"https://leetcode.cn/problems/maximum-swap",target:"_blank",rel:"noopener noreferrer"},vn={href:"https://leetcode.com/problems/maximum-swap",target:"_blank",rel:"noopener noreferrer"};function wn(Tn,In){const l=d("RouterLink"),s=d("ExternalLinkIcon");return a(),c("div",null,[g,r(" START TABLE "),r(" Please keep comment here to allow auto update "),r(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),m,r(" prettier-ignore "),t("table",null,[u,t("tbody",null,[t("tr",null,[f,p,t("td",y,[o(l,{to:"/problem/0455.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",x,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[b]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[k]),_:1}),e(),o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[v]),_:1}),e(),w]),T,t("td",I,[t("a",E,[e("🀄️"),o(s)]),e(),t("a",N,[e("🔗"),o(s)])])]),t("tr",null,[q,L,t("td",R,[o(l,{to:"/problem/0860.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",S,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[V]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[j]),_:1})]),A,t("td",B,[t("a",C,[e("🀄️"),o(s)]),e(),t("a",D,[e("🔗"),o(s)])])]),t("tr",null,[O,K,t("td",P,[o(l,{to:"/problem/0056.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",U,[o(l,{to:"/tag/array.html"},{default:n(()=>[H]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[z]),_:1})]),F,t("td",G,[t("a",J,[e("🀄️"),o(s)]),e(),t("a",M,[e("🔗"),o(s)])])]),t("tr",null,[Q,W,t("td",X,[o(l,{to:"/problem/0435.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Y,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Z]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[$]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[tt]),_:1}),e(),et]),ot,t("td",lt,[t("a",nt,[e("🀄️"),o(s)]),e(),t("a",st,[e("🔗"),o(s)])])]),t("tr",null,[rt,dt,t("td",_t,[o(l,{to:"/problem/0452.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",at,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[ct]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[it]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[ht]),_:1})]),gt,t("td",mt,[t("a",ut,[e("🀄️"),o(s)]),e(),t("a",ft,[e("🔗"),o(s)])])]),t("tr",null,[pt,yt,t("td",xt,[o(l,{to:"/problem/0055.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",bt,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[kt]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[vt]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[wt]),_:1})]),Tt,t("td",It,[t("a",Et,[e("🀄️"),o(s)]),e(),t("a",Nt,[e("🔗"),o(s)])])]),t("tr",null,[qt,Lt,t("td",Rt,[o(l,{to:"/problem/0045.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",St,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Vt]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[jt]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[At]),_:1})]),Bt,t("td",Ct,[t("a",Dt,[e("🀄️"),o(s)]),e(),t("a",Ot,[e("🔗"),o(s)])])]),t("tr",null,[Kt,Pt,t("td",Ut,[o(l,{to:"/problem/0392.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Ht,[o(l,{to:"/tag/two-pointers.html"},{default:n(()=>[zt]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[Ft]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[Gt]),_:1})]),Jt,t("td",Mt,[t("a",Qt,[e("🀄️"),o(s)]),e(),t("a",Wt,[e("🔗"),o(s)])])]),t("tr",null,[Xt,Yt,t("td",Zt,[o(l,{to:"/problem/0122.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",$t,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[te]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[ee]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[oe]),_:1})]),le,t("td",ne,[t("a",se,[e("🀄️"),o(s)]),e(),t("a",re,[e("🔗"),o(s)])])]),t("tr",null,[de,_e,t("td",ae,[o(l,{to:"/problem/0561.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",ce,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[ie]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[he]),_:1}),e(),o(l,{to:"/tag/counting-sort.html"},{default:n(()=>[ge]),_:1}),e(),me]),ue,t("td",fe,[t("a",pe,[e("🀄️"),o(s)]),e(),t("a",ye,[e("🔗"),o(s)])])]),t("tr",null,[xe,be,t("td",ke,[o(l,{to:"/problem/1710.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",ve,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[we]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Te]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[Ie]),_:1})]),Ee,t("td",Ne,[t("a",qe,[e("🀄️"),o(s)]),e(),t("a",Le,[e("🔗"),o(s)])])]),t("tr",null,[Re,Se,t("td",Ve,[o(l,{to:"/problem/1217.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",je,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Ae]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Be]),_:1}),e(),o(l,{to:"/tag/math.html"},{default:n(()=>[Ce]),_:1})]),De,t("td",Oe,[t("a",Ke,[e("🀄️"),o(s)]),e(),t("a",Pe,[e("🔗"),o(s)])])]),t("tr",null,[Ue,He,ze,t("td",Fe,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Ge]),_:1}),e(),o(l,{to:"/tag/math.html"},{default:n(()=>[Je]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[Me]),_:1})]),Qe,t("td",We,[t("a",Xe,[e("🀄️"),o(s)]),e(),t("a",Ye,[e("🔗"),o(s)])])]),t("tr",null,[Ze,$e,t("td",to,[o(l,{to:"/problem/1400.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",eo,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[oo]),_:1}),e(),o(l,{to:"/tag/hash-table.html"},{default:n(()=>[lo]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[no]),_:1}),e(),so]),ro,t("td",_o,[t("a",ao,[e("🀄️"),o(s)]),e(),t("a",co,[e("🔗"),o(s)])])]),t("tr",null,[io,ho,t("td",go,[o(l,{to:"/problem/0921.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",mo,[o(l,{to:"/tag/stack.html"},{default:n(()=>[uo]),_:1}),e(),o(l,{to:"/tag/greedy.html"},{default:n(()=>[fo]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[po]),_:1})]),yo,t("td",xo,[t("a",bo,[e("🀄️"),o(s)]),e(),t("a",ko,[e("🔗"),o(s)])])]),t("tr",null,[vo,wo,To,t("td",Io,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Eo]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[No]),_:1}),e(),o(l,{to:"/tag/sorting.html"},{default:n(()=>[qo]),_:1})]),Lo,t("td",Ro,[t("a",So,[e("🀄️"),o(s)]),e(),t("a",Vo,[e("🔗"),o(s)])])]),t("tr",null,[jo,Ao,Bo,t("td",Co,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Do]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Oo]),_:1}),e(),o(l,{to:"/tag/matrix.html"},{default:n(()=>[Ko]),_:1})]),Po,t("td",Uo,[t("a",Ho,[e("🀄️"),o(s)]),e(),t("a",zo,[e("🔗"),o(s)])])]),t("tr",null,[Fo,Go,t("td",Jo,[o(l,{to:"/problem/0135.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",Mo,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Qo]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[Wo]),_:1})]),Xo,t("td",Yo,[t("a",Zo,[e("🀄️"),o(s)]),e(),t("a",$o,[e("🔗"),o(s)])])]),t("tr",null,[tl,el,t("td",ol,[o(l,{to:"/problem/0134.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",ll,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[nl]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[sl]),_:1})]),rl,t("td",dl,[t("a",_l,[e("🀄️"),o(s)]),e(),t("a",al,[e("🔗"),o(s)])])]),t("tr",null,[cl,il,t("td",hl,[o(l,{to:"/problem/0053.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",gl,[o(l,{to:"/tag/array.html"},{default:n(()=>[ml]),_:1}),e(),o(l,{to:"/tag/divide-and-conquer.html"},{default:n(()=>[ul]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[fl]),_:1})]),pl,t("td",yl,[t("a",xl,[e("🀄️"),o(s)]),e(),t("a",bl,[e("🔗"),o(s)])])]),t("tr",null,[kl,vl,wl,t("td",Tl,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Il]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[El]),_:1}),e(),o(l,{to:"/tag/dynamic-programming.html"},{default:n(()=>[Nl]),_:1})]),ql,t("td",Ll,[t("a",Rl,[e("🀄️"),o(s)]),e(),t("a",Sl,[e("🔗"),o(s)])])]),t("tr",null,[Vl,jl,Al,t("td",Bl,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[Cl]),_:1}),e(),o(l,{to:"/tag/math.html"},{default:n(()=>[Dl]),_:1})]),Ol,t("td",Kl,[t("a",Pl,[e("🀄️"),o(s)]),e(),t("a",Ul,[e("🔗"),o(s)])])]),t("tr",null,[Hl,zl,Fl,t("td",Gl,[o(l,{to:"/tag/stack.html"},{default:n(()=>[Jl]),_:1}),e(),o(l,{to:"/tag/greedy.html"},{default:n(()=>[Ml]),_:1}),e(),o(l,{to:"/tag/string.html"},{default:n(()=>[Ql]),_:1}),e(),Wl]),Xl,t("td",Yl,[t("a",Zl,[e("🀄️"),o(s)]),e(),t("a",$l,[e("🔗"),o(s)])])]),t("tr",null,[tn,en,on,t("td",ln,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[nn]),_:1}),e(),o(l,{to:"/tag/bit-manipulation.html"},{default:n(()=>[sn]),_:1}),e(),o(l,{to:"/tag/array.html"},{default:n(()=>[rn]),_:1}),e(),dn]),_n,t("td",an,[t("a",cn,[e("🀄️"),o(s)]),e(),t("a",hn,[e("🔗"),o(s)])])]),t("tr",null,[gn,mn,t("td",un,[o(l,{to:"/problem/0670.html"},{default:n(()=>[e("[✓]")]),_:1})]),t("td",fn,[o(l,{to:"/tag/greedy.html"},{default:n(()=>[pn]),_:1}),e(),o(l,{to:"/tag/math.html"},{default:n(()=>[yn]),_:1})]),xn,t("td",bn,[t("a",kn,[e("🀄️"),o(s)]),e(),t("a",vn,[e("🔗"),o(s)])])])])])])}const Nn=_(h,[["render",wn],["__file","greedy.html.vue"]]);export{Nn as default};

import{_ as p,r as c,o as i,c as r,f as l,a as t,d as s,w as a,b as n,e as d}from"./app-fEpXkbSw.js";const u="/leetcode-js/assets/2-1-1-EC9Y9eyF.png",_="/leetcode-js/assets/2-1-2-EptcMRuS.png",h="/leetcode-js/assets/2-1-3-pHoKvxc_.png",m="/leetcode-js/assets/2-1-4-t-iF7k31.png",g={},k=d('<h1 id="_2-1-数组" tabindex="-1"><a class="header-anchor" href="#_2-1-数组" aria-hidden="true">#</a> 2.1 数组</h1><h2 id="数组的定义" tabindex="-1"><a class="header-anchor" href="#数组的定义" aria-hidden="true">#</a> 数组的定义</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>数组（Array）</strong> 是一种线性表数据结构。它用一组连续的内存空间，来存储一组具有相同类型的数据。</p></div><p>但在 JavaScript 里，数组中可以保存不同类型的值（大多数语言都没这个能力）。但我们还是要遵守最佳实践，别这么做。</p><figure><img src="'+u+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 一维数组：</span>
<span class="token comment">// 数组的每一个元素是一个数据类型</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

<span class="token comment">// 二维数组：</span>
<span class="token comment">// 数组的每一个元素是一个一维数组</span>
<span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">123</span><span class="token punctuation">]</span>

<span class="token comment">// 三维数组：</span>
<span class="token comment">// 数组的每一个元素是一个二维数组</span>
<span class="token punctuation">[</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">[</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;b&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;c&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们还可以从两个方面来解释一下数组的定义。</p><ul><li>「<strong>线性表</strong>」</li><li>「<strong>连续的内存空间</strong>」</li></ul><h2 id="线性表与非线性表" tabindex="-1"><a class="header-anchor" href="#线性表与非线性表" aria-hidden="true">#</a> 线性表与非线性表</h2><div class="hint-container info"><p class="hint-container-title">定义</p><p><strong>线性表（Linear List）</strong> 就是数据排成像一条线一样的结构，线性表上的数据元素都是相同类型。每个线性表上的数据最多只有前和后两个方向。</p></div><p><strong>数组、链表、队列、栈都是是线性表结构</strong>。</p><p>线性表有两种存储结构：「顺序存储结构」和「链式存储结构」。</p><p>其中，「<strong>顺序存储结构</strong>」是指占用的内存空间是连续的，相邻数据元素之间，物理内存上的存储位置也相邻。</p><p>数组也是采用了顺序存储结构，并且存储的数据都是相同类型的。</p><figure><img src="`+_+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>与它相对立的是<strong>非线性表</strong>，比如<strong>二叉树、堆、图</strong>等。</p><p>在非线性表中，数据之间并不是简单的前后关系。</p><figure><img src="'+h+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="数组的操作" tabindex="-1"><a class="header-anchor" href="#数组的操作" aria-hidden="true">#</a> 数组的操作</h2><p>数据结构的操作一般涉及到增、删、改、查共 4 种情况，下面我们一起来看一下数组的这 4 种基本操作。</p><h3 id="_1-访问和查找元素" tabindex="-1"><a class="header-anchor" href="#_1-访问和查找元素" aria-hidden="true">#</a> 1. 访问和查找元素</h3><p>因为数组有<strong>连续的内存空间和相同类型的数据</strong>，所以数组支持 <strong>“随机访问”</strong>。</p><p>但这两个限制也让数组的很多操作变得非常低效，比如在数组中删除、插入一个数据，为了内存数据的保证连续性，就需要做大量的数据搬移工作。</p><p>在面试的时候，面试官常常会问数组和链表的区别？很多人都回答说，“链表适合插入、删除，时间复杂度 <code>O(1)</code>；数组适合查找，查找时间复杂度为 <code>O(1)</code>”。实际上，这种表述是不准确的。</p><p>数组适合查找操作，但是查找的时间复杂度并不为 <code>O(1)</code>。即便是排好序的数组，用<strong>二分查找</strong>，时间复杂度也是 <code>O(logn)</code>。</p><p>所以，正确的表述应该是，数组支持随机访问，<strong>根据下标随机访问</strong>的时间复杂度为 <code>O(1)</code>。</p><h3 id="_2-修改元素" tabindex="-1"><a class="header-anchor" href="#_2-修改元素" aria-hidden="true">#</a> 2. 修改元素</h3><ul><li>修改指定索引位置的元素 <code>array.splice(index, 1, item)</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myArray3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 修改 索引 1 的位置的元素为 AA</span>
myArray2<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;AA&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; [1, &quot;AA&quot;, 3, 4, 5, 6]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>修改指定索引位置的几个元素 <code>array.splice(index, number, item)</code><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myArray4 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 在 索引 2 的位置起，修改两个元素为 AA BB</span>
myArray2<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;AA&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BB&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray3<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; [1, 2, &quot;AA&quot;, &quot;BB&quot;, 5, 6, 7]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>改变元素的操作跟访问元素操作类似，访问操作不依赖于数组中元素个数，因此，「改变元素」的时间复杂度为 <code>O(1)</code>。</p><h3 id="_3-插入元素" tabindex="-1"><a class="header-anchor" href="#_3-插入元素" aria-hidden="true">#</a> 3. 插入元素</h3><ul><li>添加一个元素到数组的最后位置 <code>array.push(item)</code></li><li>在数组首位插入一个元素 <code>array.unshift(item)</code></li><li>在指定索引位置插入元素 <code>array.splice(index, 0, item)</code><blockquote><p>splice() 第二个参数为 0 时，表示插入数据。</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myArray <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 在 索引 0 的位置，插入 A</span>
myArray<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; [&#39;A&#39;, 1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>假设数组的长度为 n，将一个数据插入到数组中的第 k 个位置。为了把第 k 个位置腾给新来的数据，要将第 k ～ n 这部分的元素都顺序地往后挪一位。</p><ul><li>如果在数组的<strong>末尾插入</strong>元素，不需要移动数据，时间复杂度为 <code>O(1)</code>。</li><li>但如果在数组的<strong>开头插入</strong>元素，那所有的数据都要依次往后移动一位，所以最坏时间复杂度是<code>O(n)</code>。</li><li>因为每个位置插入元素的概率一样，所以<strong>平均情况</strong>时间复杂度为<code>(1 + 2 + … + n) / n = O(n)</code>。</li></ul><p>如果数组中的数据是有序的，在插入新元素时就必须搬移 k 之后的数据。但是，如果数组中存储的数据并没有任何规律，将某个新元素插入到第 k 个位置时，为了避免大规模的数据搬移，有一个简单的办法就是，直接将第 k 位的数据搬移到数组元素的最后，把新的元素直接放入第 k 个位置。</p><p>例如：数组 a 中存储了如下 5 个元素：a，b，c，d，e。要将元素 x 插入到第 3 个位置。只需将 c 放入到 a[5]，将 a[2]赋值为 x 即可。最后数组中的元素如下： a，b，x，d，e，c。</p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>利用这种处理技巧，在特定场景下，在第 k 个位置插入一个元素的时间复杂度就会降为 O(1)。这个处理思想在<strong>快排</strong>中也会用到。</p><h3 id="_4-删除元素" tabindex="-1"><a class="header-anchor" href="#_4-删除元素" aria-hidden="true">#</a> 4. 删除元素</h3><ul><li>删除数组最后的元素 <code>array.pop()</code></li><li>删除数组首位的元素 <code>array.shift()</code></li><li>删除指定索引位置的元素 <code>array.splice(start, deleteCount)</code> 例如：<div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> myArray2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token comment">// 删除索引 3 位置起，2 个元素</span>
myArray2<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//--&gt; [1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><p>跟插入数据类似，如果我们要删除第 k 个位置的数据，为了内存的连续性，也需要搬移数据，不然中间就会出现空洞，内存就不连续了。</p><p>和插入类似：</p><ul><li>如果<strong>删除数组末尾</strong>的数据，则最好情况时间复杂度为 <code>O(1)</code>；</li><li>如果<strong>删除开头</strong>的数据，则最坏情况时间复杂度为 <code>O(n)</code>；</li><li><strong>平均情况</strong>时间复杂度也为 <code>O(n)</code>。</li></ul><p>实际上，在某些特殊场景下，并不一定非得追求数组中数据的连续性。如果每次的删除操作并不是真正地搬移数据，只是记录数据已经被删除。当数组没有更多空间存储数据时，再触发执行一次真正的删除操作，就可以大大减少了删除操作导致的数据搬移。这也是<strong>JVM 标记清除垃圾回收算法</strong>的核心思想。</p>`,43),b=t("h2",{id:"相关题目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#相关题目","aria-hidden":"true"},"#"),n(" 相关题目")],-1),f=t("h4",{id:"数组操作",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#数组操作","aria-hidden":"true"},"#"),n(" 数组操作")],-1),y=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),x=t("td",{style:{"text-align":"center"}},"189",-1),v=t("td",{style:{"text-align":"left"}},"轮转数组",-1),A={style:{"text-align":"center"}},q={style:{"text-align":"left"}},j=t("code",null,"数组",-1),O=t("code",null,"数学",-1),E=t("code",null,"双指针",-1),T=t("td",{style:{"text-align":"center"}},"🟠",-1),B={style:{"text-align":"center"}},N={href:"https://leetcode.cn/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},w={href:"https://leetcode.com/problems/rotate-array",target:"_blank",rel:"noopener noreferrer"},I=t("td",{style:{"text-align":"center"}},"66",-1),L=t("td",{style:{"text-align":"left"}},"加一",-1),S={style:{"text-align":"center"}},z={style:{"text-align":"left"}},C=t("code",null,"数组",-1),R=t("code",null,"数学",-1),V=t("td",{style:{"text-align":"center"}},"🟢",-1),D={style:{"text-align":"center"}},F={href:"https://leetcode.cn/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},H={href:"https://leetcode.com/problems/plus-one",target:"_blank",rel:"noopener noreferrer"},J=t("td",{style:{"text-align":"center"}},"724",-1),M=t("td",{style:{"text-align":"left"}},"寻找数组的中心下标",-1),P={style:{"text-align":"center"}},U={style:{"text-align":"left"}},K=t("code",null,"数组",-1),Y=t("code",null,"前缀和",-1),G=t("td",{style:{"text-align":"center"}},"🟢",-1),Q={style:{"text-align":"center"}},W={href:"https://leetcode.cn/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},X={href:"https://leetcode.com/problems/find-pivot-index",target:"_blank",rel:"noopener noreferrer"},Z=t("td",{style:{"text-align":"center"}},"485",-1),$=t("td",{style:{"text-align":"left"}},"最大连续 1 的个数",-1),tt={style:{"text-align":"center"}},nt={style:{"text-align":"left"}},st=t("code",null,"数组",-1),et=t("td",{style:{"text-align":"center"}},"🟢",-1),at={style:{"text-align":"center"}},ot={href:"https://leetcode.cn/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},lt={href:"https://leetcode.com/problems/max-consecutive-ones",target:"_blank",rel:"noopener noreferrer"},ct=t("td",{style:{"text-align":"center"}},"238",-1),pt=t("td",{style:{"text-align":"left"}},"除自身以外数组的乘积",-1),it={style:{"text-align":"center"}},rt={style:{"text-align":"left"}},dt=t("code",null,"数组",-1),ut=t("code",null,"前缀和",-1),_t=t("td",{style:{"text-align":"center"}},"🟠",-1),ht={style:{"text-align":"center"}},mt={href:"https://leetcode.cn/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},gt={href:"https://leetcode.com/problems/product-of-array-except-self",target:"_blank",rel:"noopener noreferrer"},kt=t("h4",{id:"二维数组",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#二维数组","aria-hidden":"true"},"#"),n(" 二维数组")],-1),bt=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"center"}},"题号"),t("th",{style:{"text-align":"left"}},"标题"),t("th",{style:{"text-align":"center"}},"题解"),t("th",{style:{"text-align":"left"}},"标签"),t("th",{style:{"text-align":"center"}},"难度"),t("th",{style:{"text-align":"center"}},"力扣")])],-1),ft=t("td",{style:{"text-align":"center"}},"498",-1),yt=t("td",{style:{"text-align":"left"}},"对角线遍历",-1),xt={style:{"text-align":"center"}},vt={style:{"text-align":"left"}},At=t("code",null,"数组",-1),qt=t("code",null,"矩阵",-1),jt=t("code",null,"模拟",-1),Ot=t("td",{style:{"text-align":"center"}},"🟠",-1),Et={style:{"text-align":"center"}},Tt={href:"https://leetcode.cn/problems/diagonal-traverse",target:"_blank",rel:"noopener noreferrer"},Bt={href:"https://leetcode.com/problems/diagonal-traverse",target:"_blank",rel:"noopener noreferrer"},Nt=t("td",{style:{"text-align":"center"}},"48",-1),wt=t("td",{style:{"text-align":"left"}},"旋转图像",-1),It={style:{"text-align":"center"}},Lt={style:{"text-align":"left"}},St=t("code",null,"数组",-1),zt=t("code",null,"数学",-1),Ct=t("code",null,"矩阵",-1),Rt=t("td",{style:{"text-align":"center"}},"🟠",-1),Vt={style:{"text-align":"center"}},Dt={href:"https://leetcode.cn/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"},Ft={href:"https://leetcode.com/problems/rotate-image",target:"_blank",rel:"noopener noreferrer"},Ht=t("td",{style:{"text-align":"center"}},"73",-1),Jt=t("td",{style:{"text-align":"left"}},"矩阵置零",-1),Mt={style:{"text-align":"center"}},Pt={style:{"text-align":"left"}},Ut=t("code",null,"数组",-1),Kt=t("code",null,"哈希表",-1),Yt=t("code",null,"矩阵",-1),Gt=t("td",{style:{"text-align":"center"}},"🟠",-1),Qt={style:{"text-align":"center"}},Wt={href:"https://leetcode.cn/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},Xt={href:"https://leetcode.com/problems/set-matrix-zeroes",target:"_blank",rel:"noopener noreferrer"},Zt=t("td",{style:{"text-align":"center"}},"54",-1),$t=t("td",{style:{"text-align":"left"}},"螺旋矩阵",-1),tn={style:{"text-align":"center"}},nn={style:{"text-align":"left"}},sn=t("code",null,"数组",-1),en=t("code",null,"矩阵",-1),an=t("code",null,"模拟",-1),on=t("td",{style:{"text-align":"center"}},"🟠",-1),ln={style:{"text-align":"center"}},cn={href:"https://leetcode.cn/problems/spiral-matrix",target:"_blank",rel:"noopener noreferrer"},pn={href:"https://leetcode.com/problems/spiral-matrix",target:"_blank",rel:"noopener noreferrer"},rn=t("td",{style:{"text-align":"center"}},"59",-1),dn=t("td",{style:{"text-align":"left"}},"螺旋矩阵 II",-1),un={style:{"text-align":"center"}},_n={style:{"text-align":"left"}},hn=t("code",null,"数组",-1),mn=t("code",null,"矩阵",-1),gn=t("code",null,"模拟",-1),kn=t("td",{style:{"text-align":"center"}},"🟠",-1),bn={style:{"text-align":"center"}},fn={href:"https://leetcode.cn/problems/spiral-matrix-ii",target:"_blank",rel:"noopener noreferrer"},yn={href:"https://leetcode.com/problems/spiral-matrix-ii",target:"_blank",rel:"noopener noreferrer"},xn=t("td",{style:{"text-align":"center"}},"289",-1),vn=t("td",{style:{"text-align":"left"}},"生命游戏",-1),An={style:{"text-align":"center"}},qn={style:{"text-align":"left"}},jn=t("code",null,"数组",-1),On=t("code",null,"矩阵",-1),En=t("code",null,"模拟",-1),Tn=t("td",{style:{"text-align":"center"}},"🟠",-1),Bn={style:{"text-align":"center"}},Nn={href:"https://leetcode.cn/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"},wn={href:"https://leetcode.com/problems/game-of-life",target:"_blank",rel:"noopener noreferrer"};function In(Ln,Sn){const e=c("RouterLink"),o=c("ExternalLinkIcon");return i(),r("div",null,[k,l(" START TABLE "),l(" Please keep comment here to allow auto update "),l(" DON'T EDIT THIS SECTION, INSTEAD RE-RUN `npm run lc` TO UPDATE "),b,f,l(" prettier-ignore "),t("table",null,[y,t("tbody",null,[t("tr",null,[x,v,t("td",A,[s(e,{to:"/problem/0189.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",q,[s(e,{to:"/tag/array.html"},{default:a(()=>[j]),_:1}),n(),s(e,{to:"/tag/math.html"},{default:a(()=>[O]),_:1}),n(),s(e,{to:"/tag/two-pointers.html"},{default:a(()=>[E]),_:1})]),T,t("td",B,[t("a",N,[n("🀄️"),s(o)]),n(),t("a",w,[n("🔗"),s(o)])])]),t("tr",null,[I,L,t("td",S,[s(e,{to:"/problem/0066.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",z,[s(e,{to:"/tag/array.html"},{default:a(()=>[C]),_:1}),n(),s(e,{to:"/tag/math.html"},{default:a(()=>[R]),_:1})]),V,t("td",D,[t("a",F,[n("🀄️"),s(o)]),n(),t("a",H,[n("🔗"),s(o)])])]),t("tr",null,[J,M,t("td",P,[s(e,{to:"/problem/0724.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",U,[s(e,{to:"/tag/array.html"},{default:a(()=>[K]),_:1}),n(),s(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[Y]),_:1})]),G,t("td",Q,[t("a",W,[n("🀄️"),s(o)]),n(),t("a",X,[n("🔗"),s(o)])])]),t("tr",null,[Z,$,t("td",tt,[s(e,{to:"/problem/0485.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",nt,[s(e,{to:"/tag/array.html"},{default:a(()=>[st]),_:1})]),et,t("td",at,[t("a",ot,[n("🀄️"),s(o)]),n(),t("a",lt,[n("🔗"),s(o)])])]),t("tr",null,[ct,pt,t("td",it,[s(e,{to:"/problem/0238.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",rt,[s(e,{to:"/tag/array.html"},{default:a(()=>[dt]),_:1}),n(),s(e,{to:"/tag/prefix-sum.html"},{default:a(()=>[ut]),_:1})]),_t,t("td",ht,[t("a",mt,[n("🀄️"),s(o)]),n(),t("a",gt,[n("🔗"),s(o)])])])])]),kt,l(" prettier-ignore "),t("table",null,[bt,t("tbody",null,[t("tr",null,[ft,yt,t("td",xt,[s(e,{to:"/problem/0498.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",vt,[s(e,{to:"/tag/array.html"},{default:a(()=>[At]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[qt]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:a(()=>[jt]),_:1})]),Ot,t("td",Et,[t("a",Tt,[n("🀄️"),s(o)]),n(),t("a",Bt,[n("🔗"),s(o)])])]),t("tr",null,[Nt,wt,t("td",It,[s(e,{to:"/problem/0048.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",Lt,[s(e,{to:"/tag/array.html"},{default:a(()=>[St]),_:1}),n(),s(e,{to:"/tag/math.html"},{default:a(()=>[zt]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[Ct]),_:1})]),Rt,t("td",Vt,[t("a",Dt,[n("🀄️"),s(o)]),n(),t("a",Ft,[n("🔗"),s(o)])])]),t("tr",null,[Ht,Jt,t("td",Mt,[s(e,{to:"/problem/0073.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",Pt,[s(e,{to:"/tag/array.html"},{default:a(()=>[Ut]),_:1}),n(),s(e,{to:"/tag/hash-table.html"},{default:a(()=>[Kt]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[Yt]),_:1})]),Gt,t("td",Qt,[t("a",Wt,[n("🀄️"),s(o)]),n(),t("a",Xt,[n("🔗"),s(o)])])]),t("tr",null,[Zt,$t,t("td",tn,[s(e,{to:"/problem/0054.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",nn,[s(e,{to:"/tag/array.html"},{default:a(()=>[sn]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[en]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:a(()=>[an]),_:1})]),on,t("td",ln,[t("a",cn,[n("🀄️"),s(o)]),n(),t("a",pn,[n("🔗"),s(o)])])]),t("tr",null,[rn,dn,t("td",un,[s(e,{to:"/problem/0059.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",_n,[s(e,{to:"/tag/array.html"},{default:a(()=>[hn]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[mn]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:a(()=>[gn]),_:1})]),kn,t("td",bn,[t("a",fn,[n("🀄️"),s(o)]),n(),t("a",yn,[n("🔗"),s(o)])])]),t("tr",null,[xn,vn,t("td",An,[s(e,{to:"/problem/0289.html"},{default:a(()=>[n("[✓]")]),_:1})]),t("td",qn,[s(e,{to:"/tag/array.html"},{default:a(()=>[jn]),_:1}),n(),s(e,{to:"/tag/matrix.html"},{default:a(()=>[On]),_:1}),n(),s(e,{to:"/tag/simulation.html"},{default:a(()=>[En]),_:1})]),Tn,t("td",Bn,[t("a",Nn,[n("🀄️"),s(o)]),n(),t("a",wn,[n("🔗"),s(o)])])])])])])}const Cn=p(g,[["render",In],["__file","array.html.vue"]]);export{Cn as default};

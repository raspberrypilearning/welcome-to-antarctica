## 不同类型的网格

使用野生动物页面的新网格排列方式，以不同的方式组织事实卡，让内容更有趣！

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/welcome-to-antarctica-step7" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 更改野生动物页面的标题

--- task ---

打开 `wildlife.html`。

更改 `h1` 文本。

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 
line_highlights: 
---
    <section>
      <h1>将鼠标悬停在下面的卡片上以了解南极洲的动物</h1>

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 向野生动物页面添加网格

--- task ---

将 `fact-holder` 类属性添加到 `<div>`。

为每个 `<span>` 元素添加一个 `fact-card` 和一个背景图像类。

为每个段落添加 `fact` 类属性。

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 23
line_highlights: 27-29, 33-34, 38-39, 43-44
---
<section>
  <h1>
    将鼠标悬停在下面的卡片上以了解南极洲的动物
  </h1>
  <div class="fact-holder">
    <span class="fact-card penguins">
      <p class="fact">
        帝企鹅群居在海冰上。 海冰是南极大陆边缘的冰冻海水。 冬季，海冰扩大。 夏季，随着海冰融化，它会缩小。 当雏鸟准备长出羽毛时，海冰边缘已经靠近企鹅群，因此小企鹅不必走很远就能找到食物。
      </p>
    </span>
    <span class="fact-card krill">
      <p class="fact">
        磷虾被许多其他生物吃掉，例如企鹅、鸟类，甚至是巨大的象海豹！ 由于有如此多不同的生物以磷虾为食，因此需要大量的磷虾可供使用，尤其是因为它们只有 2 英寸长！
      </p>
    </span>
    <span class="fact-card seals">
      <p class="fact">
        海豹拥有厚而美丽的皮毛和脂肪，使它们极其适应寒冷。 南极洲有六个物种：南极海狗、豹海豹、罗斯海豹、南象海豹、食蟹海豹和威德尔海豹。
      </p>
    </span>
    <span class="fact-card orcas">
      <p class="fact">
        在食物链的顶端，是虎鲸，通常被称为杀人鲸。 这是地球上最大的食肉动物，体长近10米！ 它们可以在地球各大海洋中游动，尤其是南极洲周围的南大洋。
      </p>
    </span>
  </div>
</section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

有多种方法来调整网格布局的大小。 例如，你可以使用 `fr` 来创建大小的**分数**。

--- collapse ---

---
title: 使用分数来调整网格大小
---

你无需使用百分比并检查它们加起来是否为 100%，而是可以使用空间的分数。

为此，你可以使用单位 `fr` - 因此如果你想要四列，每列占网格宽度的四分之一，您可以使用以下 CSS：

~~~css
grid-columns: 1fr 1fr 1fr 1fr 
~~~

总共有**4**个，每列宽度为 1/4。

它们也不必是均匀的。 你还可以做两行，一行是 3/4，另一行是 1/4：
~~~css
grid-rows: 3fr 1fr
~~~

--- /collapse ---

--- task ---

打开 `style.css`。

将 `fact-holder-wildlife` 选择器添加到 `style.css` 文件。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 100
line_highlights: 101-106
---

/* 事实持有者 - 野生动物 */
.fact-holder-wildlife {
  display: grid;
  height: 70vh;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 2fr 3fr;
}

--- /code ---

--- /task ---

--- task ---

打开 `wildlife.html`。

将 `<div>` 上的类属性更改为新的 `fact-holder-wildlife` 类。

--- code ---
---
language: html
filename: wildlife.html
line_numbers: true
line_number_start: 27
line_highlights: 27
---
  <div class="fact-holder-wildlife">
    <span class="fact-card penguins">
        <p class="fact">
        帝企鹅……

--- /code ---

--- /task ---

--- task ---

**点击运行**

现在，你的野生动物网格有 3 行，每行占据三分之一的空间，还有 2 列，宽度分别为 1/3 和 2/3。

![野生动物网格，每行标有三分之一。 在底部，第一列标记为三分之一，第二列标记为三分之二。](images/wildlife_grid_size.png)

--- /task ---

网格布局将自动定位你的项目。 但是，你也可以指定项目的显示方式。

例如，你可以让企鹅事实延伸到两行，让虎鲸事实延伸到最后一行的两列。

--- task ---

将 `grid-row-start` 添加到 `.penguins` 并将其设置为 `1`。

将 `grid-row-end` 添加到 `.penguins` 并将其设置为 `3`。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 157
line_highlights: 159-160
---

.penguins {
  background-image: url('penguin-photo.jpg');
  grid-row-start: 1;
  grid-row-end: 3;
}

--- /code ---

`grid-row-start` 属性是元素将显示的**第一**行。

而 `grid-row-end` 是元素结束的行——图像不会显示在这一行。

--- /task ---

--- task ---

**点击运行**

--- /task ---

--- task ---

将 `grid-column-start` 添加到 `.orcas` 并将其设置为 `1`。

将 `grid-column-end` 添加到 `.orcas` 并将其设置为 `3`。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 171
line_highlights: 173-174
---

.orcas {
  background-image: url('orca-photo.jpg');
  grid-column-start: 1;
  grid-column-end: 3;
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 更改气候页面的标题

--- task ---

打开 `climate.html`。

更改 `h1` 文本。

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 22
line_highlights: 23
---
  <section>
    <h1>将鼠标悬停在下面的卡片上以了解南极洲的气候</h1>

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 在气候页面添加网格

--- task ---

将 `fact-holder` 类属性添加到 `<div>`。

为每个 `<span>` 元素添加一个 `fact-card` 和一个背景图像类。

为每个段落添加 `fact` 类属性。

--- code ---
---
language: html
filename: climate.html
line_numbers: true
line_number_start: 23
line_highlights: 25-27, 31-32, 36-37, 41-42
---
  <section>
    <h1>将鼠标悬停在下面的卡片上，了解南极洲的气候</h1>
    <div class="fact-holder">
      <span class="fact-card temperature">
        <p class="fact">
          南极洲是地球上最寒冷的大陆。 内部平均气温为-57°C，冬季可达-90°C。 沿海地区气候较温暖，夏季最高气温可达 8°C。
        </p>
      </span>
      <span class="fact-card sunburn">
        <p class="fact">
          在南极洲可能会被晒伤，因为雪会反射几乎所有的紫外线。 你可能感觉不到热度，但你仍然需要保护皮肤免受射线的伤害。
        </p>
      </span>
      <span class="fact-card ice">
        <p class="fact">
          该冰面平均厚度为 1.6 公里，覆盖了整个大陆约 98% 的面积。 这片冰面几乎占到了全世界冰面的90%，难怪南极气候如此寒冷！
        </p>
      </span>
      <span class="fact-card rainfall">
        <p class="fact">
          从技术上讲，南极洲是一片沙漠，因为那里非常干燥。 沿海地区年平均降水量仅为166毫米。 在如此寒冷的条件下，雪几乎不会融化；相反，随着时间的推移，雪大部分会被压缩，形成冰面的一部分。
        </p>
      </span>
  </div>
  </section>

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

接下来，你将使你的内容变得智能。 无论页面是大是小，或者有人使用不同的设备，它总是看起来很棒。

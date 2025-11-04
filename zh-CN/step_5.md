## 使用网格

使用网格排列内容，让你的网页布局更加精彩！

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step5" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 添加网格

导航栏看起来很棒，但文本段落需要一些改进。

你可以使用网格布局来组织文本内容。

\--- collapse ---

---

## title: 使用 display 属性更改布局

设计网页样式时最重要的决定之一是如何排列页面上的元素。

要改变元素的排列方式，可以使用 CSS `display` 属性。

布局有几种可用的选项：

- `inline` - 默认设置，高度和宽度由内容决定
- `block` - 元素将从新行开始并占据整个宽度
- `flex` - 使更改布局和对齐更加容易
- `grid` - 创建具有行和列的表格布局，以便可以精确放置元素

\--- /collapse ---

\--- task ---

打开 `index.html`。

向包含四段文本的 `<div>` 添加一个 `fact-holder` 类属性。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 26
line_highlights: 27
--------------------------------------------------------

  <section>
    <div class="fact-holder">
      <span>
        <p>
          南极洲是最寒冷的大陆，但也是最干燥的大陆！ 平均每年降水量仅为 200 毫米（8 英寸），其中大部分集中在沿海地区。
        </p>
      </span>

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- collapse ---

---

## title: 我的网页看起来还一样吗？

确保 `class` 和 `fact-holder` 之间有一个 `=`。

确保 `fact-holder` 周围有 `"` 标记。

\--- /collapse ---

\--- /task ---

目前，各段落占用的空间大小不同。

![添加网格后的index.html页面。 一支箭头一直延伸到整个区域并标记为 100%。 下面，一个箭头跨越第一段的宽度，标记为 75%，旁边的另一个箭头跨越第二段的宽度，标记为 25%。](images/grid_sizes.png)

你可以更改网格列的宽度以使其均匀。

\--- task ---

打开 `style.css`。

将两个网格行的高度和两个网格列的宽度更改为 50%。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 92
line_highlights: 96-97
-----------------------------------------------------------

/\* 事实持有者 - 主页 \*/
.fact-holder {
display: grid;
height: 50vh;
grid-template-rows: 50% 50%;
grid-template-columns: 50% 50%;
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- collapse ---

---

## title: 我的网格没有改变？

确保每个 `50%` 之间都有一个空格。

\--- /collapse ---

\--- /task ---

### 为事实添加样式

事实卡的布局是有条理的。

然而，事实上卡片仍然需要样式。

\--- task ---

打开 `index.html`。

为每个 `<span>` 元素添加一个 `fact-card` 类属性。

还为每个 `<span>` 元素添加定义其背景图像的类属性。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 28, 33, 38, 43
--------------------------------------------------------------------

```
<div class="fact-holder">
  <span class="fact-card sun">
    <p>
      南极洲是最冷的大陆，但也是最干旱的！这里平均每年只有 200 毫米（8 英寸）的降水量，大部分降水集中在沿海地区。
    </p>
  </span>
  <span class="fact-card discovery">
    <p>
      人们认为这片大陆在人类历史上发现得相对较晚，于 1820 年由俄国探险队法比安·戈特利布·冯·别林斯高晋和米哈伊尔·拉扎列夫发现。
    </p>
  </span>
  <span class="fact-card explorers">
    <p>
      谁第一个踏上这片大陆？ 第一个有记录并确认登陆的是由挪威人伦纳德·克里斯滕森 (Leonard Kristensen) 率领的船员在阿代尔角登陆。
    </p>
  </span>
  <span class="fact-card ownership">
    <p>
      南极洲受《南极条约》管辖。该条约目前有53个支持国，其中29个被视为“协商国”，并积极参与决策。
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- collapse ---

---

## title: 我的网格看起来很奇怪？

检查所有左括号 `<` 是否有右括号 `>`。

\--- /collapse ---

\--- /task ---

\--- task ---

打开 `style.css`。

将 `fact-card` 选择器添加到 `style.css` 文件。 这将确保背景图像居中并覆盖整个 `<span>` 元素。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 108
line_highlights: 109-114
-------------------------------------------------------------

/\* 事实卡 \*/
.fact-card {
width: 100%;
display: flex;
background-size: cover;
background-position: center;
}

\--- /code ---

`style.css` 文件已经具有 `sun`、`discovery`、`explorers` 和 `ownership` 的选择器。

\--- /task ---

\--- task ---

**点击运行**

\--- collapse ---

---

## title: 我看不到我的图像？

在 `index.html` 中，检查两个类属性是否位于相同的 `"` 标记之间。

在 `index.html` 中，确保每个类之间都有空格。

\--- /collapse ---

\--- /task ---

### 使其更易于访问

由于图像的存在，文本很难阅读。 这意味着你的网站的无障碍性不达预期。

接下来，你将更改文本的颜色并添加透明背景。

\--- task ---

打开 `index.html`。

为每个段落添加 `fact` 类属性。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 27
line_highlights: 29, 34, 39, 44
--------------------------------------------------------------------

```
<div class="fact-holder">
  <span class="fact-card sun">
    <p class="fact">
      南极洲是最冷的大陆，但也是最干旱的！这里平均每年只有 200 毫米（8 英寸）的降水量，大部分降水集中在沿海地区。
    </p>
  </span>
  <span class="fact-card discovery">
    <p class="fact">
      人们认为这片大陆在人类历史上发现得相对较晚，于 1820 年由俄国探险队法比安·戈特利布·冯·别林斯高晋和米哈伊尔·拉扎列夫发现。
    </p>
  </span>
  <span class="fact-card explorers">
    <p class="fact">
      谁第一个踏上这片大陆？ 第一个有记录并确认登陆的是由挪威人伦纳德·克里斯滕森 (Leonard Kristensen) 率领的船员在阿代尔角登陆。
    </p>
  </span>
  <span class="fact-card ownership">
    <p class="fact">
      南极洲受《南极条约》管辖。该条约目前有53个支持国，其中29个被视为“协商国”，并积极参与决策。
    </p>
  </span>
```

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- /task ---

接下来，你将向段落添加动画以使页面具有交互性！

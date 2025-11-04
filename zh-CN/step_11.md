## 升级你的项目

<div style="display: flex; flex-wrap: wrap">
<div style="flex-basis: 200px; flex-grow: 1; margin-right: 15px;">

如果你有时间，你可以添加更多事实，调整网格布局，并更改首页横幅图像以使页面成为你自己的专属页面！

</div>
<div>
![](images/image.png){:width="300px"}
</div>
</div>

### 添加更多事实

\--- collapse ---

---

## title: 向主页添加新事实

以下是有关南极洲研究站的事实，你可以将其添加到主页。

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<p>在签署《南极条约》的 56 个国家中，有 55 个国家在南极大陆设立了某种形式的研究站。 活跃在南极洲的研究人员数量夏季约为 4,800 人，冬季约为 1,200 人。</p>

\--- /code ---

你可以使用类 `research` 为这个事实添加新的背景图像。

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card research">

</span>

\--- /code ---

\--- /collapse ---

\--- collapse ---

---

## title: 向 wildlife.html 添加一些新动物

还有三张南极野生动物的图片 — — 选择一张添加到你的 `wildlife.html` 页面。

你可以使用以下类：

- `albatross` —— 南极信天翁的图片
- `minke-whale` - 南极小须鲸
- `gentoo-penguin` - 另一种企鹅，它属于巴布亚物种

## --- code ---

language: html
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

<span class="fact-card albatross">

</span>

\--- /code ---

在线研究该动物并在你的页面上添加有关它们的有趣事实！

\--- /collapse ---

### 调整你的网格

你还可以更改页面上的网格来调整事实的显示方式。

\--- collapse ---

---

## title: 添加额外的列和行

你可以编辑 `fact-holder` 和 `fact-holder-wildlife` 类来添加更多行或列。

## --- code ---

language: css
filename:
line_numbers: false
line_number_start:
line_highlights:
-----------------------------------------------------

/\* Fact holder - homepage _/
.fact-holder {
display: grid;
height: 70vh; /_ 70% of the visible area of the page \*/
grid-template-rows: 33% 33% 33%;
grid-template-columns: 50% 50%;
}

\--- /code ---

你还可以向背景图像类添加 `grid-row-start` 和 `grid-row-end` 属性，或 `grid-column-start` 和 `grid-colum-end`，以将你的项目放置在行和列中，从而自定义你的布局。

\--- /collapse ---

### 更改你的首页横幅图像

\--- collapse ---

---

## title: 添加不同的首页横幅图像

在入门项目中，你可以使用多个图像作为首页横幅图像。

你尚未使用的图像是...

`antarctic-landscape.jpg`
`antarctic-seasons.jpg`
`antarctic-walk.jpg`

你可以更改首页横幅图像的 CSS 类中的图像 URL，以使网站成为你自己的专属网站。

\--- /collapse ---

### 查看升级后的项目

\--- collapse ---

---

## title: 升级项目

你可以在此处查看[升级后的项目](https://editor.raspberrypi.org/en/projects/welcome-to-antarctica-upgraded){:target="_blank"}。

\--- /collapse ---

## 响应式导航栏

让你的内容变得智能！ 无论页面是大是小，或者有人使用不同的设备，它总是看起来很棒。

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step8" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
网页可以在许多不同的设备上查看，并且应该对每个设备 <span style="color: #0faeb0">**响应**</span> 。 这意味着，如果用户在手机上查看你的页面，它应该响应较小的屏幕尺寸，如果用户在桌面电脑上查看你的页面，它应该响应较大的屏幕尺寸。 
</p>

### 使导航栏具有响应式

在较小的屏幕上，导航栏中的链接可能会太靠近。

你将使链接消失并用**汉堡菜单（折叠导航栏）**（☰）替换它们。

\--- task ---

打开 `index.html`。

在 `<nav>` 标签内，添加一个带有 `class="burger"` 属性的新 `<div>`。

添加两个 `<span>` 标签。 一个是用于打开菜单的“汉堡”图标（☰）。 另一个是用于关闭菜单的十字图标（✖）。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 12
line_highlights: 18-21
-----------------------------------------------------------

```
<nav>
  <div class="nav-items">
    <a class="active" href="index.html">家</a>
    <a href="wildlife.html">野生动物</a>
    <a href="climate.html">气候</a>
  </div>
  <div class="burger">
    <span id="openHam">&#9776;</span>
    <span id="closeHam">&#x2716;</span>
  </div>
</nav>
```

\--- /code ---

\--- collapse ---

---

## title: 使用 ASCII 码表示字符

为了制作汉堡菜单和十字架，你使用了**ASCII**代码。 这是一种添加键盘上没有的特殊字符的方法。

你可以在[这个网站](https://www.ascii-code.com/)上找到完整的 ASCII 代码列表。

\--- /collapse ---

\--- /task ---

\--- task ---

**点击运行**

\--- /task ---

你在每个 `<span>` 元素上使用 `id` 属性。 可以为任何元素赋予唯一的 `id`。

只有当屏幕足够小时，新图标才可见。

当页面首次加载时，你不希望显示 `<div>`。

\--- task ---

打开 `style.css`。

将 `burger` 选择器添加到 `style.css` 文件。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 71
line_highlights: 72-78
-----------------------------------------------------------

/\* 汉堡菜单 \*/
.burger {
display: none;
font-size: 20px;
font-weight: 800;
color: var(--burger-colour);
margin-left: auto;
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- /task ---

### 创建媒体查询

你将使用**媒体查询**根据屏幕宽度更改元素的样式。

我们将屏幕宽度设置为 768px，低于该宽度时将触发媒体查询。

\--- collapse ---

---

## title: 使用媒体查询

CSS 媒体查询可用于检查有关网页当前显示方式的许多内容。

你可以检查显示页面的设备的属性，例如宽度或高度。 对于移动设备，你可以检查它们处于横向模式还是纵向模式。

你还可以使用媒体查询来更改打印页面时的样式。

\--- /collapse ---

\--- task ---

在 `style.css` 的底部，添加你的媒体查询。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 212-214
-------------------------------------------------------------

/\* 媒体查询 \*/
@media screen and (max-width:768px) {

}

\--- /code ---

\--- /task ---

\--- collapse ---

---

## title: 为什么使用最大宽度 768px？

平板电脑屏幕的典型宽度为 768px，手机屏幕甚至更窄。 使用此宽度，你可以确保你的内容在所有移动设备上看起来都很棒。

当页面宽度超过768px时，导航栏会在页面顶部显示三个页面链接。

当页面宽度为 768px 或更小时，可以隐藏导航栏并显示“汉堡”菜单以节省空间。

\--- /collapse ---

当汉堡菜单图标显示时，十字将保持隐藏状态。

点击汉堡图标时，将显示页面链接并显示关闭图标。

\--- task ---

添加选择器来设置 `.burger` `<div>` 的样式。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 211
line_highlights: 214-217, 219-221
----------------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
display: none;
}

}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

调整代码编辑器的大小以查看您的更改！

\--- /task ---

你需要打开和关闭导航菜单。

导航项目前看起来不太好，因此添加一些新样式使它们看起来像菜单。

你将导航项设置为 `display: none`，以便在菜单打开之前不会显示它们。

\--- task ---

打开 `style.css`。

向媒体查询添加新的 `.nav-items` 选择器和样式。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 223-235
-------------------------------------------------------------

@media screen and (max-width:768px) {

.burger {
display: flex;
cursor: pointer;
}

.burger #closeHam {
display: none;
}

.nav-items {
display: none;
flex-direction: column;
align-items: center;
position: absolute;
right: 0;
top: 58px;
background-color: var(--nav-colour);
width: 100%;
height: calc(100vh - 58px);
padding-top: 60px;
gap: 10vh;
}

}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- /task ---

\--- task ---

打开 `index.html`。

将 **JavaScript** 文件添加到你的页面。

## --- code ---

language: html
filename: index.html
line_numbers: true
line_number_start: 53
line_highlights: 53
--------------------------------------------------------

```
<script type="text/javascript" src="responsive-navbar.js"></script>
```

  </body>
</html>

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

单击汉堡菜单即可看到导航项。 然后单击叉号关闭菜单。

\--- /task ---

### 更新其他页面

\--- task ---

打开 `wildlife.html`。

将 `burger` `<div>` 元素复制并粘贴到 `<nav>` 标签内。

## --- code ---

language: html
filename: wildlife.html
line_numbers: true
line_number_start: 13
line_highlights: 19-22
-----------------------------------------------------------

```
<nav>
  <div class="nav-items">
    <a href="index.html">首页</a>
    <a class="active" href="wildlife.html">野生动物</a>
    <a href="climate.html">气候</a>
  </div>
  <div class="burger">
    <span id="openHam">&#9776;</span>
    <span id="closeHam">&#x2716;</span>
  </div>
</nav>
```

\--- /code ---

\--- /task ---

\--- task ---

还将 **JavaScript** 文件添加到你的页面。

## --- code ---

language: html
filename: wildlife.html
line_numbers: true
line_number_start: 55
line_highlights: 55
--------------------------------------------------------

```
<script type="text/javascript" src="responsive-navbar.js"></script>
```

  </body>
</html>

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

单击汉堡菜单即可看到导航项。 然后单击叉号关闭菜单。

\--- /task ---

现在你还需要将汉堡 `<div>` 和 JavaScript 文件添加到 climate.html。

\--- task ---

打开 `climate.html`。

将 `burger` `<div>` 元素复制并粘贴到 `<nav>` 标签内。

还将 **JavaScript** 文件复制并粘贴（CTRL + C 或 CMD + C）到你的页面。

\--- /task ---

\--- task ---

**点击运行**

单击每个菜单项即可在各个页面之间导航。

将预览窗口的大小调整到 768px 以下，以查看其响应情况。

\--- /task ---

你现在已经构建了一个响应式导航栏。 但是当在移动设备上查看网站时，网格看起来会更好。

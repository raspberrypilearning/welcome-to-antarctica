## 设置导航栏样式

在此步骤中，你将设置所创建的导航栏的样式并将其添加到其他页面。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/welcome-to-antarctica-step3" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

向包含导航栏链接的 `<div>` 添加 `nav-items` 类属性。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13
---

    <header>
      <nav>
        <div class="nav-items">
          <a href="index.html">主页</a>
          <a href="wildlife.html">野生动物</a>
          <a href="climate.html">气候</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

### 为整个导航栏设置样式

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
使用 <span style="color: #0faeb0">**CSS**</span> 设置 HTML 元素的样式需要你指定对哪些元素应用什么样式。 为此，你可以使用**选择器**。 你可以选择像 `nav` 这样的标签，或者你可以更具体地通过在类名前添加 `.` 来选择类 - 例如 `.nav-items`。
</p>

--- task ---

打开 `style.css` 文件并找到 `nav` 元素选择器。

添加背景颜色属性。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 36
line_highlights: 44
---
/* 导航栏 */
nav {
  padding: 0 15px;
  height: 60px;
  font-size: 22px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--nav-colour);
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- collapse ---

---
title: 我没有看到任何新颜色？
---

确保 `background-color` 拼写时“colour”中没有“u”。  不过，`--nav-colour` 仍然应该有一个 “u”！

确保行尾有一个 `;`。

--- /collapse ---

--- /task ---

--- collapse ---

---
title: 设计一个类或元素？
---

如果你想将样式应用于特定的 HTML 元素，您可以在 CSS 文件中创建一个类。 然后，你可以将 `class` 属性添加到 HTML 代码中的元素，以让浏览器知道应该应用什么样式。

你还可以直接设置元素的样式（例如 `<header>` 或 `<nav>`）。

--- /collapse ---

--- task ---

为 `nav-items` 类创建一个选择器来分隔链接。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 47
line_highlights: 48-51
---
/* 导航项 */
.nav-items {
  display: flex;
  gap: 100px;
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 链接样式

除了设置整个导航栏的样式外，你还可以设置单个链接的样式。

--- task ---

创建另一个选择器来设置 `nav-items` `<div>` 中每个 `<a>` 标签的样式。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 53
line_highlights: 54-58
---
/* 导航栏链接 */
.nav-items > a {
  color: var(--nav-items-colour);
  text-decoration: none;
  transition: .4s ease-in-out;
}

--- /code ---

--- collapse ---

---
title:  选择类中的元素
---

有时你会想要为具有某个类的**容器**内的特定元素设置样式。 要做到这一点，你可以使用 `>` 运算符。

你刚刚使用的示例对具有 `nav-items` 类的容器内的所有 `<a>` 元素进行样式设置。

这使你可以设置某些链接的样式，而不会影响页面上的所有链接。 它使你不必为每个单独的链接指定一个类别。

--- /collapse ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

--- task ---

添加一个选择器，当你将鼠标悬停在每个链接上时设置其样式。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 60
line_highlights: 61-63
---
/* 导航链接悬停 */
.nav-items > a:hover {
  color: var(--nav-items-active);
}

--- /code ---

--- collapse ---

---
title: 向元素添加交互样式
---

编写 CSS 时，你可能希望在用户与元素交互时更改元素的样式。

在上面的例子中，你正在更改 `a` 元素的样式，但只有当用户用鼠标**悬停**在它们上面时才会发生。 其语法是 `a:hover`。

此选择器中的样式**仅**在用户的鼠标位于元素顶部时使用。

--- /collapse ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 创建活动状态链接

index.html 页面将首先被加载。

当该页面打开时，链接应保持白色并且不可点击。

--- task ---

为当前打开的页面的链接添加一个新的 `active` CSS类。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 65
line_highlights: 66-69
---
/* 导航链接处于活动状态 */
.nav-items .active {
  color: var(--nav-items-active);
  pointer-events: none;
}

--- /code ---

--- /task ---

打开 `index.html`。

将 `active` 类属性添加到 index.html `<a>` 标签。

--- task ---

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 10
line_highlights: 13
---

    <header>
      <nav>
        <div class="nav-items">
          <a href="index.html" class="active">主页</a>
          <a href="wildlife.html">野生动物</a>
          <a href="climate.html">气候</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

### 更改字体

--- task ---

导入 Google 字体来设置页面上的字体样式。

打开 `defaults.css`

将此 `@import` 语句放在文件顶部。

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 1
line_highlights: 2
---

/* 导入字体 */
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');

--- /code ---

--- /task ---

--- task ---

在 `:root` 选择器内创建一个名为 `--body-font` 的新变量并设置新的 Orbitron 字体。

--- code ---
---
language: css
filename: default.css
line_numbers: true
line_number_start: 4
line_highlights: 8
---

:root {

  --body-background: #ece8ef;
  --body-text-colour: #000500;
  --body-font: "Orbitron", sans-serif;

--- /code ---

--- /task ---

--- task ---

在 body 选择器中添加 `font-family` 属性并将其设置为刚刚创建的新 `--body-font` 变量。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 4
line_highlights: 14
---
body {
  background-color: var(--body-background);
  color: var(--body-text-colour);
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100%;
  min-height: 100vh; /* 使内容填满页面，使页脚位于底部 */
  display: flex;
  flex-direction: column;
  font-family: var(--body-font);
}
--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

接下来，你将在网页顶部放置一些精美的图片，向所有人展示其内容！

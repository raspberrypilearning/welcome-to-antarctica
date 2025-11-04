## 创建导航栏

在此步骤中，你将创建一个导航栏（通常称为navbar）来链接网站上的页面。 这将允许用户从一个页面导航到另一个页面。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/welcome-to-antarctica-step2" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

--- task ---

打开[欢迎来到南极洲入门项目](https://editor.raspberrypi.org/zh-CN/projects/welcome-to-antarctica-starter){:target="_blank"}。

--- /task ---

你的入门项目包含：

- 三个包含一些文本内容的 HTML 页面
- 包含部分内容样式的 CSS 文件
- 你将在项目中使用的图像
- 一个 JavaScript 文件，用于在页面大小改变时使导航栏做出响应

--- task ---

看一下入门项目。

打开 `index.html`。 有没有什么 HTML 元素是你认识的？

--- /task ---

### 添加 HTML 以显示导航栏

网页内容放置在 `<body>` 标签中。

导航栏位于网页标题中的 `<nav>` 标签中。

--- task ---

找到 `<header>` 和 `</header>` 标签。
添加 `<nav>` 标签。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 12, 14
---

    <header>
      <nav>
        
      </nav>
    </header>

--- /code ---

--- /task ---

--- task ---

你将使用 `<div>` 来包含指向其他页面的链接。

在 `<nav>` 标签内，添加一个新的 `<div>`。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 13-15
---

    <header>
      <nav>
        <div>

        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

<p style="border-left: solid; border-width:10px; border-color: #0faeb0; background-color: aliceblue; padding: 10px;">
在 <span style="color: #0faeb0">**HTML**</span>中，`<a>` 标签用于创建链接。 这些链接可用于将用户发送到同一站点上的另一个页面或外部站点。 将要链接的文本放在 `<a>` 和 `</a>` 中，`href` 属性提供链接指向的页面的文件名。 对于外部页面，`href` 属性提供您想要链接到的页面的网址（通常以“https://”开头）。
</p>

--- task ---

添加 `<a>` 标签来创建每个页面的链接。

--- code ---
---
language: html
filename: index.html
line_numbers: true
line_number_start: 11
line_highlights: 14-16
---

    <header>
      <nav>
        <div>
          <a href="index.html">主页</a>
          <a href="wildlife.html">野生动物</a>
          <a href="climate.html">气候</a>
        </div>
      </nav>
    </header>

--- /code ---

--- /task ---

### 保存你的项目

你的项目已自动保存。 返回同一 Web 浏览器中的启动链接以查看你的更改。

--- task ---

**点击运行**

你应该：

- 查看顶部的导航链接

- 单击链接导航至野生动物或气候页面

- 请注意，导航栏不会出现在野生动物或气候页面上

**提示：**在代码编辑器中，你可以使用浏览器后退按钮（←）返回主页。

--- /task ---

接下来，你将把导航栏添加到其他页面，然后设置页面样式，使它们看起来更好！

## 回顾与思考

干得不错。 你已经使用 HTML、CSS 和 JavaScript 创建了一个网站。

回答以下三个问题来帮助自己回顾并思考所学的内容。

我们会引导你找到正确答案。 你可以根据需要多次尝试。

\--- question ---

---

## legend: 问题 1/3

在 HTML 中创建导航链接时，使用哪个标签来定义超链接？

## --- code ---

language: html
filename: index.html
line_numbers: false
--------------------------------------------------------

```
<header>
  <nav class="navigation-header">
    <div class="nav-items">
      <a class="active" href="index.html">首页</a>
      <a href="wildlife.html">野生动物</a>
      <a href="climate.html">气候</a>
    </div>
    <div class="burger">
      <span id="openHam">&#9776;</span>
      <span id="closeHam">&#x2716;</span>
    </div>
  </nav>
    <div class="hero-image home"></div>
</header>
```

\--- /code ---

\--- choices ---

- ( ) `<link>`

  \--- feedback ---

  不完全对。 `<link>` 标签用于定义外部资源，例如样式表，但不用于创建超链接。

  \--- /feedback ---

- ( ) `<span>`

  \--- feedback ---

不完全对。 `<span>` 标签用于对内联元素进行分组和应用样式，而不是用于创建超链接。

\--- /feedback ---

- (x) `<a>`

  \--- feedback ---

正确！ `<a>` 标签用于在 HTML 中创建超链接。 它代表“锚点”，后面跟着 href 属性，指定链接目标。

\--- /feedback ---

\--- /choices ---

\--- /question ---

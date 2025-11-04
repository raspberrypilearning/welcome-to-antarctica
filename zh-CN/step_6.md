## 使用动画

动画和交互性将使你的网页对访问者来说更有趣！

<iframe src="https://editor.raspberrypi.org/en/embed/viewer/welcome-to-antarctica-step6" width="100%" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 添加悬停动画

除了显示事实文本之外，还要在页面上添加一些互动！

使事实变得不可见。

\--- task ---

打开 `style.css`。

将 `.fact` 的 `opacity` 属性设置为 `0`。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 126
---------------------------------------------------------

.fact {
font-size: 100%;
color: var(--fact-text-colour);
background-color: var(--fact-background);
height: 100%;
margin: 0;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 5px;
opacity: 0;
}

\--- /code ---

\--- /task ---

当用户将鼠标悬停在事实上时，使其再次可见。

\--- task ---

添加一个新的选择器 `.fact:hover`。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 129
line_highlights: 130-132
-------------------------------------------------------------

/\* 事实悬停 \*/
.fact:hover {
opacity: 1;
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

\--- /task ---

不要立即切换，而是通过过渡来平滑变化。

\--- task ---

向 `.fact` 添加 `transition` 属性。

## --- code ---

language: css
filename: style.css
line_numbers: true
line_number_start: 116
line_highlights: 127
---------------------------------------------------------

.fact {
font-size: 100%;
color: var(--fact-text-colour);
background-color: var(--fact-background);
height: 100%;
margin: 0;
display: flex;
flex-wrap: wrap;
align-content: center;
padding: 5px;
opacity: 0;
transition: .4s ease-in-out;
}

\--- /code ---

\--- /task ---

\--- task ---

**点击运行**

将鼠标悬停在图像上即可查看动画！

\--- /task ---

接下来，你将使用新的网格排列以不同的方式组织内容，以保持内容的趣味性！

## 响应式网格

使网格具有响应能力将确保任何人都可以了解南极洲，无论他们使用什么设备查看。

<iframe src="https://editor.raspberrypi.org/zh-CN/embed/viewer/welcome-to-antarctica-complete" width="600" height="800" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen> </iframe>

### 让你的网格具有响应式

当屏幕较小时，你之前制作的网格很难阅读。

将布局改为使用四行一列，使布局更高。

--- task ---

将 `fact-holder` 选择器添加到 `@media` 查询中。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 237-241
---
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

  .fact-holder {
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }
  
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

--- /task ---

在 `wildlife.html` 页面上，有不同的事实持有者网格布局。

当屏幕宽度减小时，布局也需要改变。

你要让它更高，并将其改为一列五行。

--- task ---

将 `fact-holder-wildlife` 选择器添加到 `@media` 查询中。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 243-247
---
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }
  
}

--- /code ---

--- /task ---

你可以通过更改 `grid-row-start` 和 `grid-row-end` 属性使企鹅图像跨越两行。

你还需要将虎鲸图像更改为跨越 `fact-holder-wildlife` 布局中使用的单列（目前，它的样式为跨越两列）。

--- task ---

将 `penguins` 和 `orcas` 选择器添加到 `@media` 查询中。

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 212
line_highlights: 249-252, 254-257
---
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

  .fact-holder {
    display: grid;
    height: 100vh;
    grid-template-rows: 25% 25% 25% 25%;
    grid-template-columns: 100%;
  }

  .fact-holder-wildlife {
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    height: 140vh;
  }

  .penguins {
    grid-row-start: 1;
    grid-row-end: 3;
  }

  .orcas {
    grid-column-start: 1;
    grid-column-end: 2;
  }
  
}

--- /code ---

--- /task ---

--- task ---

**点击运行**

将预览窗口的大小调整到 768px 以下，以查看每个页面的响应情况。

--- /task ---

太棒了！ 现在，你已经建立了一个响应式网站，让人们发现一个他们可能永远没有机会参观的地方——南极洲。

接下来，你将通过完成测验来回顾你的学习。

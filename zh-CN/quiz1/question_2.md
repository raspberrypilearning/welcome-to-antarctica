--- question ---

---
legend: 问题 2/3
---

你在项目中使用了 CSS 属性，通过网格布局指定内容的位置。

查看 orcas 选择器的 CSS 样式。

Orca 图像将跨越哪些列？

--- code ---
---
language: css
filename: style.css
line_numbers: true
line_number_start: 
line_highlights: 
---

.orcas {
  background-image: url('orca-photo.jpg');
  grid-column-start: 1;
  grid-column-end: 3;
}

--- /code ---

--- choices ---

- (x) 1 和 2

  --- feedback ---

  正确！ `grid-column-start` 设置从哪一列开始显示图像（图像将从第一列开始显示），`grid-column-end` 的值设置从哪一列结束显示图像（图像不会显示在第三列）。

  --- /feedback ---

- ( ) 2 和 3

  --- feedback ---

  再看一看。 `grid-column-start` 设置从哪一列开始显示图像，而 `grid-column-end` 的值设置从哪一列开始不显示图像。

  --- /feedback ---

- ( ) 1，2 和 3

  --- feedback ---

  差一点！ 虎鲸图像将从第一列开始，但 `grid-column-end` 的值设置哪一列结束图像的显示。

  --- /feedback ---

--- /choices ---

--- /question ---

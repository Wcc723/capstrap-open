---
layout: page
title: Scaffolding
---

Scaffolding refers to the global resets and dependencies that Primer is built upon.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## HTML5 doctype

Primer makes use of certain HTML elements and CSS properties that **require** the use of the HTML5 doctype. Include it at the beginning of all your pages.

{% highlight html %}
<!DOCTYPE html>
<html lang="en">
  ...
</html>
{% endhighlight %}

## Box-sizing

We reset `box-sizing` to `border-box` for every element in Primer. This allows us to more easily assign widths to elements that also have `padding` and `border`s.

## Built on Normalize

For improved cross-browser rendering, we use [Normalize.css](http://necolas.github.io/normalize.css/) to correct small inconsistencies across browsers and devices.


## 基本計畫

- 變數模組
    - @import 'bootstrap/variables';
        - 顏色鮮豔化
    - @import 'bootstrap/mixins';
- 初始化
    - @import 'bootstrap/normalize';
    - @import 'bootstrap/print';
        - 不需要列印，所以移除
    - @import 'bootstrap/glyphicons';
        - 目前還是先使用預設的icon fonts
- 核心
    - @import 'bootstrap/scaffolding';
    - @import 'bootstrap/type';
    - @import 'bootstrap/code';
    - @import 'bootstrap/grid';
        - 移除md、lg的Grid
    - @import 'bootstrap/tables';
    - @import 'bootstrap/forms';
    - @import 'bootstrap/buttons';
        - 移除 wraning、info的按鈕
        - 增加 box-shadow
        - 增加 outline style
- 元件
    - @import 'bootstrap/component-animations';
    - @import 'bootstrap/dropdowns';
    - @import 'bootstrap/button-groups';
    - @import 'bootstrap/input-groups';
    - @import 'bootstrap/navs';
    - @import 'bootstrap/navbar';
    	- 修改成 bootstrap 4的樣式
    - @import 'bootstrap/breadcrumbs';
    - @import 'bootstrap/pagination';
    - @import 'bootstrap/pager';
    - @import 'bootstrap/labels';
    - @import 'bootstrap/badges';
    - @import 'bootstrap/jumbotron';
        - 移除
    - @import 'bootstrap/thumbnails';
        - 移除
    - @import 'bootstrap/alerts';
    - @import 'bootstrap/progress-bars';
    	- 移除
    - @import 'bootstrap/media';
        - 移除
    - @import 'bootstrap/list-group';
    	- 移除
    - @import 'bootstrap/panels';
        - 移除
    - @import 'bootstrap/responsive-embed';
    - @import 'bootstrap/wells';
        - 移除
    - @import 'bootstrap/close';
- Javascript
    - @import 'bootstrap/modals';
    - @import 'bootstrap/tooltip';
    	- 移除
    - @import 'bootstrap/popovers';
    	- 移除
    - @import 'bootstrap/carousel';
        - 移除
- Utility classes
    - @import 'bootstrap/utilities';
        - 增加垂直置中
        - 增加各種可用到的margin、padding
    - @import 'bootstrap/responsive-utilities';

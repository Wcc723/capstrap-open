---
layout: page
title: Layout
---

While reference [http://getbootstrap.com/css/#grid](http://getbootstrap.com/css/#grid).

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Container

Center your page's contents with a `.container`.

{% highlight html %}
<div class="container">
  <!-- contents here -->
</div>
{% endhighlight %}

The container applies `width: 980px;` and uses horizontal `margin`s to center it.

## Grid

The grid is pretty standard—you create rows with `.columns` and individual columns with a column class and fraction class. Here's how it works:

- Add a `.container` to encapsulate everything and provide ample horizontal gutter space.
- Create your outer row to clear the floated columns with `<div class="row">`.
- Add your fractional width classes to set the width of the columns (e.g., `.col-sm-4`).

In practice, your columns will look like the example below.

預設保留 `xs` 以及 `sm` 兩種尺寸的 grid-system，其餘可以在 `_variable.scss` 的 `$grid-{size}-enabled` 選擇。

{% example html %}
<div class="bs-docs-grid">
    <div class="row show-grid">
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
      <div class="col-sm-1">.col-sm-1</div>
    </div>
    <div class="row show-grid">
      <div class="col-sm-8">.col-sm-8</div>
      <div class="col-sm-4">.col-sm-4</div>
    </div>
    <div class="row show-grid">
      <div class="col-sm-4">.col-sm-4</div>
      <div class="col-sm-4">.col-sm-4</div>
      <div class="col-sm-4">.col-sm-4</div>
    </div>
    <div class="row show-grid">
      <div class="col-sm-6">.col-sm-6</div>
      <div class="col-sm-6">.col-sm-6</div>
    </div>
  </div>
{% endexample %}

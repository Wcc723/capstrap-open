---
layout: page
title: Buttons
---

Buttons are used for **actions**, like in forms, while textual hyperlinks are used for **destinations**, or moving from one page to another.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default buttons

Use the standard—yet classy—`.btn` for form actions and primary page actions. These are used extensively around the site.

When using a `<button>` element, **always specify a `type`**. When using a `<a>` element, **always add `role="button"` for accessibility**.

{% example html %}
<button class="btn" type="button">Button button</button>
<a class="btn" href="#" role="button">Link button</a>
<a class="btn btn-default" href="#" role="button">Link button</a>
{% endexample %}

You can find them in two sizes: the default `.btn` and the smaller `.btn-sm`.

{% example html %}
<button class="btn btn-default" type="button">Button</button>
<button class="btn btn-default btn-sm" type="button">Small button</button>
{% endexample %}

## Option

{% example html %}
<!-- 標準按鈕，在大部分一般選項使用 -->
<button type="button" class="btn btn-default">Default</button>

<!-- 主要色，請作為畫面上最重要的執行選項 -->
<button type="button" class="btn btn-primary">Primary</button>

<!-- 用於成功，或者執行完成上 -->
<button type="button" class="btn btn-success">Success</button>

<!-- 用於資訊顯示按鈕 -->
<button type="button" class="btn btn-info">Info</button>

<!-- 警告提示按鈕 -->
<button type="button" class="btn btn-warning">Warning</button>

<!-- 錯誤或是帶有危險動作按鈕 -->
<button type="button" class="btn btn-danger">Danger</button>

<!-- 也可以作為一般連結使用 -->
<button type="button" class="btn btn-link">Link</button>
{% endexample %}

## Size

{% example html %}
<button type="button" class="btn btn-primary btn-lg">Large button</button>
<button type="button" class="btn btn-default btn-lg">Large button</button>
<button type="button" class="btn btn-default">Default button</button>
<button type="button" class="btn btn-default btn-sm">Small button</button>
<button type="button" class="btn btn-default btn-xs">Extra small button</button>
{% endexample %}

## Outline

Outline buttons downplay an action as they appear like boxy links. Just add `.btn-outline-{option}` and go.

{% example html %}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-success">Success</button>
<button type="button" class="btn btn-outline-info">Info</button>
<button type="button" class="btn btn-outline-warning">Warning</button>
<button type="button" class="btn btn-outline-dark">Dark</button>
<button type="button" class="btn btn-outline-danger">Danger</button>
{% endexample %}

Similar other buttons, Outline button with the `.disabled` class to **disabled**.

{% example html %}
<button type="button" class="btn btn-outline-primary">Primary</button>
<button type="button" class="btn btn-outline-primary disabled">Primary</button>
<button type="button" class="btn btn-outline-primary active">Primary</button>
{% endexample %}


## Button state

Disable `<button>` elements with the boolean `disabled` attribute and `<a>` elements with the `.disabled` class.

{% example html %}
<!-- Active -->
<button type="button" class="btn btn-primary active">Primary button</button>
<a href="#" class="btn btn-default active">Button</a>

<!-- Disabled -->
<button type="button" class="btn btn-primary" disabled="">Primary button</button>
<a href="#" class="btn btn-default disabled">Button</a>
{% endexample %}


## Block buttons

Make any button full-width by adding `.btn-block`. It adds `width: 100%;`, changes the `display` from `inline-block` to `block`, and centers the button text.

{% example html %}
<p><button class="btn btn-block" type="button">Block button</button></p>
<p><button class="btn btn-sm btn-block" type="button">Small block button</button></p>
{% endexample %}

## With counts

You can easily append a count to a **small button**. Add the `.with-count` class to the `.btn-sm` and then add the `.social-count` after the button.

**Be sure to clear the float added by the additional class.**

{% example html %}
<div class="btn-group">
  <a class="btn btn-sm btn-default" href="#" role="button">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="btn btn-sm btn-default" href="#">6</a>
</div>
{% endexample %}

You can also use the `badge` component within buttons:

{% example html %}
<button class="btn btn-default" type="button">
  Button
  <span class="badge">12</span>
</button>

<button class="btn btn-primary" type="button">
  Button
  <span class="badge">12</span>
</button>

<button class="btn btn-danger" type="button">
  Button
  <span class="badge">12</span>
</button>
{% endexample %}

## Button groups

Have a hankering for a series of buttons that are attached to one another? Wrap them in a `.btn-group` and the buttons will be rounded and spaced automatically.

{% example html %}
<div class="btn-group">
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
  <button class="btn" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
  <button class="btn btn-outline" type="button">Button</button>
</div>

<div class="btn-group">
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
  <button class="btn btn-sm" type="button">Button</button>
</div>
{% endexample %}

<!-- ## Hidden text button

Use `.hidden-text-expander` to indicate and toggle hidden text.

{% example html %}
<span class="hidden-text-expander">
  <a href="#">&hellip;</a>
</span>
{% endexample %}

You can also make the expander appear inline by adding `.inline` . -->

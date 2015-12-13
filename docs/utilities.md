---
layout: page
title: Utilities
---

There are a handful of utilities in Primer for quick behaviors, floats, colors, alignment, and more.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}


## Counter

Add a number or unread indicator to navs and more with a counter.

{% example html %}
<span class="label">9</span>
{% endexample %}

## Close icon

Use the generic close icon for dismissing content like modals and alerts.

{% example html %}
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
{% endexample %}


## Carets

Use carets to indicate dropdown functionality and direction. Note that the default caret will reverse automatically in dropup menus.

{% example html %}
<span class="caret"></span>
{% endexample %}


## Floats

Quickly float something to the left or right, and clear them later.

{% example html %}
<div class="clearfix">
  <code class="pull-left">.left</code>
  <code class="pull-right">.right</code>
</div>
{% endexample %}

## Text alignment

Change the `text-align` on elements with a class.

{% example html %}
<p class="text-left">Left aligned text.</p>
<p class="text-right">Right aligned text.</p>
{% endexample %}


## Icons

{% example html %}
<button type="button" class="close" aria-label="Close"><span aria-hidden="true">&times;</span></button>
<span class="caret"></span>
{% endexample %}


## Centered block

{% example html %}
<div style="height: 150px">
  <div class="centered">
    this is a vertical centered block(only for support transform browser).
  </div>
</div>
{% endexample %}

## Contextual backgrounds

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes.

{% example html %}
<p class="alert bg-primary">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
<p class="alert bg-success">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
<p class="alert bg-info">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
<p class="alert bg-warning">Etiam porta sem malesuada magna mollis euismod.</p>
<p class="alert bg-danger">Donec ullamcorper nulla non metus auctor fringilla.</p>
{% endexample %}

<!-- ## Flex table

Flex table is a module for creating dynamically resizable elements that always sit on the same horizontal line (e.g., they never break to a new line). Using table styles in our CSS means it's cross browser friendly back to at least IE9.

Additional `margin` or `padding` may be required to properly space content.

{% example html %}
<div class="flex-table">
  <div class="flex-table-item flex-table-item-primary">
    <input class="input-block" type="text" placeholder="Long flexible input form">
  </div>
  <div class="flex-table-item">
    <button class="btn" type="button">Button</button>
  </div>
</div>
{% endexample %} -->

---
layout: page
title: Progress bars
---


## 一般使用

{% example html %}
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
        <span class="sr-only">60% Complete</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">
        <span>60% Complete</span>
    </div>
</div>
{% endexample %}

## 各種樣式

{% example html %}

<div class="progress">
    <div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%">
        <span class="sr-only">40% Complete (success)</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style="width: 20%">
        <span class="sr-only">20% Complete</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%">
      <span class="sr-only">60% Complete (warning)</span>
    </div>
</div>
<div class="progress">
    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 80%">
        <span class="sr-only">80% Complete (danger)</span>
    </div>
</div>
<!-- progress-thin -->
<div class="progress progress-thin">
    <div class="progress-bar progress-bar-success" role="progressbar" style="width: 40%">
        <span class="sr-only">40% Complete (success)</span>
    </div>
</div>
<div class="progress progress-thin">
    <div class="progress-bar progress-bar-info" role="progressbar" style="width: 20%">
        <span class="sr-only">20% Complete</span>
    </div>
</div>
<div class="progress progress-thin">
    <div class="progress-bar progress-bar-warning" role="progressbar" style="width: 60%">
      <span class="sr-only">60% Complete (warning)</span>
    </div>
</div>
<div class="progress progress-thin">
    <div class="progress-bar progress-bar-danger" role="progressbar" style="width: 80%">
        <span class="sr-only">80% Complete (danger)</span>
    </div>
</div>
{% endexample %}

## Stack

{% example html %}
<div class="progress">
    <div class="progress-bar progress-bar-success" style="width: 35%">
        <span class="sr-only">35% Complete (success)</span>
    </div>
    <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
        <span class="sr-only">20% Complete (warning)</span>
    </div>
    <div class="progress-bar progress-bar-danger" style="width: 10%">
        <span class="sr-only">10% Complete (danger)</span>
    </div>
</div>
<!-- progress-thin -->
<div class="progress progress-thin">
    <div class="progress-bar progress-bar-success" style="width: 35%">
        <span class="sr-only">35% Complete (success)</span>
    </div>
    <div class="progress-bar progress-bar-warning progress-bar-striped" style="width: 20%">
        <span class="sr-only">20% Complete (warning)</span>
    </div>
    <div class="progress-bar progress-bar-danger" style="width: 10%">
        <span class="sr-only">10% Complete (danger)</span>
    </div>
</div>
{% endexample %}


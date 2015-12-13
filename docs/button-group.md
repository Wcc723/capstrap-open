---
layout: page
title: Button Group
---


一般使用，以及巢狀使用


{% example html %}
<div>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-default">1</button>
        <button type="button" class="btn btn-default">2</button>
        <button type="button" class="btn btn-default">3</button>
        <div class="btn-group" role="group">
            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                Dropdown
                <span class="caret"></span>
            </button>
            <ul class="dropdown-menu" role="menu">
                <li><a href="#">Dropdown link</a></li>
                <li><a href="#">Dropdown link</a></li>
            </ul>
        </div>
    </div>
</div>
{% endexample %}

## 多個連續使用

{% example html %}
<div class="btn-toolbar">
    <!-- Button trigger modal -->
    <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default">1</button>
        <button type="button" class="btn btn-default">2</button>
        <button type="button" class="btn btn-default">3</button>
    </div>
    <div class="btn-group" role="group" aria-label="...">
        <button type="button" class="btn btn-default">1</button>
        <button type="button" class="btn btn-default">2</button>
        <button type="button" class="btn btn-default">3</button>
    </div>
</div>
{% endexample %}

### 垂直使用

{% example html %}
<div class="btn-group-vertical">
    <button type="button" class="btn btn-default">1</button>
    <button type="button" class="btn btn-default">2</button>
    <button type="button" class="btn btn-default">3</button>
</div>
{% endexample %}

## Justified button groups

{% example html %}
<div class="btn-group btn-group-justified" role="group" aria-label="...">
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-info">Left</button>
    </div>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-warning">Middle</button>
    </div>
    <div class="btn-group" role="group">
        <button type="button" class="btn btn-success">Right</button>
    </div>
</div>
{% endexample %}

## Split button dropdowns

{% example html %}
<div class="btn-group">
    <button type="button" class="btn btn-danger">Action</button>
    <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
        <li class="divider"></li>
        <li><a href="#">Separated link</a></li>
    </ul>
</div>
<div class="btn-group dropup">
    <button type="button" class="btn btn-default">Dropup</button>
    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
        <span class="caret"></span>
        <span class="sr-only">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu" role="menu">
        <li><a href="#">Action</a></li>
        <li><a href="#">Another action</a></li>
        <li><a href="#">Something else here</a></li>
    </ul>
</div>
{% endexample %}


---
layout: page
title: Dropdown
---



Dropdown在設計上去除了過度的圓角。


{% example html %}
<div class="clearfix">
  <!-- Button trigger modal -->
  <div class="dropdown pull-left">
      <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
          Dropdown
          <span class="caret"></span>
      </button>
      <ul class="dropdown-menu" role="menu">
          <li><a tabindex="-1" href="#">Action</a></li>
          <li><a tabindex="-1" href="#">Another action</a></li>
          <li class="disabled"><a tabindex="-1" href="#">Something else here</a></li>
          <li><a tabindex="-1" href="#">Separated link</a></li>
      </ul>
  </div>
  <!-- Align right -->
  <div class="dropdown pull-right">
      <button class="btn btn-default  dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="true">
          Dropdown
          <span class="caret"></span>
      </button>
      <ul class="dropdown-menu dropdown-menu-right" role="menu">
          <li><a tabindex="-1" href="#">Action</a></li>
          <li><a tabindex="-1" href="#">Another action</a></li>
          <li class="disabled"><a tabindex="-1" href="#">Something else here</a></li>
          <li><a tabindex="-1" href="#">Separated link</a></li>
      </ul>
  </div>
</div>
{% endexample %}

## Headers and Divider

{% example html %}
<div class="clearfix">
    <!-- Button trigger modal -->
    <div class="dropdown">
        <button class="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
            <span class="caret"></span>
        </button>
        <ul class="dropdown-menu" role="menu">
            <li class="dropdown-header">Dropdown header</li>
            <li><a tabindex="-1" href="#">Action</a></li>
            <li><a tabindex="-1" href="#">Another action</a></li>
            <li class="divider"></li>
            <li class="disabled"><a tabindex="-1" href="#">Something else here</a></li>
            <li><a tabindex="-1" href="#">Separated link</a></li>
        </ul>
    </div>
</div>
{% endexample %}


---
layout: page
title: Navbar
---

Navbar在使用上相當類似於Bootstrap，不同的是有提供多樣色彩，預設在使用上是兩種色彩`navbar-default`、`navbar-inverse`。

{% example html %}
<nav class="navbar navbar-default">
  <div class="navbar-header"><a href="/" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Demo</a></li>
        <li><a href="/">Demo</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Back</a></li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navbar navbar-inverse">
  <div class="navbar-header"><a href="/" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Demo</a></li>
        <li><a href="/">Demo</a></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Back</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endexample %}

在這個基準上，可以套用更多不同的色彩在這`Navbar`上，使用方式相當容易，只要直接將背景色補上即可(淺色與深色使用的class不同，這邊需要開發者多試試看，何者的辨識度較高)，顏色也可以直接使用`background-color`填入。

{% example html %}
<nav class="navbar navbar-inverse">
  <div class="navbar-header"><a href="/" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Demo</a></li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navbar navbar-inverse bg-primary">
  <div class="navbar-header"><a href="/" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Demo</a></li>
      </ul>
    </div>
  </div>
</nav>

<nav class="navbar navbar-default" style="background-color: #E4F4FF;">
  <div class="navbar-header"><a href="/" class="navbar-brand">  Capstrap 2</a></div>
  <div class="container-fluid">
    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/">Demo</a></li>
      </ul>
    </div>
  </div>
</nav>
{% endexample %}


## 定位

如果排版需要將`navbar`固定在畫面頂端，那需要麻煩開發者在兩個地方加上
`class`。

第一，請先在`.navbar`加上`navbar-fixed-top`。

{% highlight html %}
<nav class="navbar navbar-default navbar-fixed-top">
{% endhighlight %}

第二，請在`<body>`加上`navbar-is-top`。

{% highlight html %}
<body class="has-navpanel-fixed has-navbar-fixed navbar-is-top">
{% endhighlight %}

這樣`navbar`就會固定在畫面的頂端。

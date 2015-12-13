---
layout: dashboard
title: Dashboard Home
---


# Dashboard

主要是增加側欄選單、多層navbar等，其餘都與Capstrap相同。

## NavPanel

NavPanel的排版是透過CSS3的flex，所以僅支持主流瀏覽器(IE Edge, Chrome, Safari, Firefox)。

{% example html %}
<nav class="navpanel">
  <div class="navpanel-container navpanel-flex navpanel-inverse">
      <header style="background: url('/images/header.jpg'); height: 150px;background-size: cover" class="navpanel-header navpanel-text"></header>
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
        <h5 class="navpanel-title"><span class="navpanel-text">Multi Level</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="">
            <a><i class="navpanel-icon glyphicon glyphicon-plus"></i>
            <span class="navpanel-text">Level 1</span></a>
            <ul class="nav">
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
            </ul>
          </li>
          <li class="">
            <a ><i class="navpanel-icon glyphicon glyphicon-plus"></i>
            <span class="navpanel-text">Level 1</span></a>
            <ul class="nav">
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
              <li><a href="#">
              <i class="navpanel-icon glyphicon glyphicon-calendar"></i>
              <span class="navpanel-text">Level 2</span></a></li>
            </ul>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="text-muted clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
              <div class="dropdown dropup inline-block">
                  <a href="#" data-toggle="dropdown" class="dropdown-toggle"><i class="navpanel-icon glyphicon glyphicon-th-large"></i></a>
                  <ul class="dropdown-menu">
                      <li><a href="#">Profile</a></li>
                      <li><a href="#">Setting</a></li>
                      <li class="divider"></li>
                      <li><a href="#">Log out</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  </div>
</nav>
{% endexample %}


### 次選單

次選單的構造相當簡易，只要在外層`li`加上`class="show"`就能夠顯示內層，這部分要麻煩開發者寫些簡單的`script`去開關`class="show"`(無論angular or jquery都是相同的概念)。

{% highlight js %}
// jQuery Demo
$('.navpanel-nav a').on('click', function(e){
  $(this).parent('li').toggleClass('show')
    .siblings('li').removeClass('show').find('li').removeClass('show');
});
$('.navpanel-nav li.active').parents('li').addClass('show');
{% endhighlight %}

### 多種色彩

Navpenal提供各種色彩套用，僅要先決定底層主要色彩是屬於深色或是淺色即可，淺底色請選擇`class="navpanel-default"`，深底色請選擇`class="navpanel-inverse"`。

將這個Class加到`navpanel-container`同層級上，就可以另外再套用許多不同色彩，如下範例。

{% example html %}
<nav class="navpanel inline-block">
  <div class="navpanel-container navpanel-flex navpanel-default">
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="text-muted clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
          </div>
      </footer>
  </div>
</nav>

<nav class="navpanel inline-block">
  <div class="navpanel-container navpanel-flex navpanel-inverse">
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="text-muted clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
          </div>
      </footer>
  </div>
</nav>

<nav class="navpanel inline-block">
  <div class="navpanel-container navpanel-flex navpanel-inverse bg-primary">
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
          </div>
      </footer>
  </div>
</nav>

<nav class="navpanel inline-block">
  <div class="navpanel-container navpanel-flex navpanel-inverse bg-danger">
      <div class="navpanel-body">
        <h5 class="navpanel-title"><span class="navpanel-text">Basic Demo</span></h5>
        <ul class="nav navpanel-nav has-icon">
          <li class="active">
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-home"></i>
            <span class="navpanel-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#"><i class="navpanel-icon glyphicon glyphicon-link"></i>
            <span class="navpanel-text">Link</span>
            </a>
          </li>
        </ul>
      </div>
      <footer class="navpanel-footer">
          <div class="clearfix text-right">
              <span class="navpanel-text pull-left">Footer text</span>
          </div>
      </footer>
  </div>
</nav>
{% endexample %}


## 排列方式

側欄選單主要是固定在畫面左方，而上方通常會有Navbar(也可能沒有)，請這樣的情況也包含了側欄選單是在Navbar上方，或者是在Navbar下方。

<iframe src="/demo/navpanel_1" frameborder="0" height="600" width="100%" class="mbm"></iframe>

像這樣常見的Navbar在上方的做法，就需要在Body補上以下Class
；當然也需要麻煩在Navpanel加上`navpanel-fixed-left`

{% highlight html %}
<!-- Body add has-navpanel-fixed has-navbar-fixed navbar-is-top -->
<body class="has-navpanel-fixed has-navbar-fixed navbar-is-top">

<!-- navpanel add navpanel-fixed-left -->
<nav class="navpanel navpanel-fixed-left">
{% endhighlight %}


也可以選擇將Navpanel放到上方的位置，只要在剛剛的body class 改成`navpanel-fixed-top`，就可以達到這樣的效果。

<iframe src="/demo/navpanel_2" frameborder="0" height="600" width="100%" class="mbm"></iframe>

{% highlight html %}
<!-- Body add has-navpanel-fixed has-navbar-fixed navbar-is-top -->
<body class="has-navpanel-fixed has-navbar-fixed navpanel-fixed-top">

<!-- navpanel add navpanel-fixed-left -->
<nav class="navpanel navpanel-fixed-left">
{% endhighlight %}

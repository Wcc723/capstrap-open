---
layout: dashboard
title: Demo page 2
---


<nav class="navbar navbar-flex navbar-default row ">
  <div class="container-fluid">
    <ul id="myTabs" class="nav navbar-nav">
      <li class="active"><a href="#home" id="home-tab">Home</a></li>
      <li><a href="#profile" id="profile-tab">Profile</a></li>
    </ul>
  </div><!-- /.container-fluid -->
</nav>

<div id="myTabContent" class="tab-content">
  <div role="tabpanel" class="tab-pane fade in active" id="home" aria-labelledby="home-tab">
    <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>
  </div>
  <div role="tabpanel" class="tab-pane fade" id="profile" aria-labelledby="profile-tab">
    <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>
  </div>
</div>

<script>
  $('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
</script>

{% highlight html %}
<nav class="navbar navbar-flex navbar-default row ">
  <div class="container-fluid">
    <ul id="xxx" class="nav navbar-nav">
      <li class="active"><a href="#home" id="home-tab">Home</a></li>
      <li><a href="#profile" id="profile-tab">Profile</a></li>
    </ul>
  </div><!-- /.container-fluid -->
</nav>

<script>
  $('#xxx a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
</script>
{% endhighlight %}

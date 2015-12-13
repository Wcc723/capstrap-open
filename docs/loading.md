---
layout: page
title: Loading
---

## Inline loading

基本運用，直接套用class即可，當然還可以配合`.btn`使用。


{% example html %}
<i class="inline-loading"></i>
<a href="#" class="btn btn-default">讀取中 <i class="inline-loading"></i></a>
{% endexample %}

{% example html %}
<i class="inline-loading inline-loading-primary"></i>
<i class="inline-loading inline-loading-success"></i>
<i class="inline-loading inline-loading-warning"></i>
<i class="inline-loading inline-loading-info"></i>
<i class="inline-loading inline-loading-danger"></i>
<i class="inline-loading inline-loading-dark"></i>
<a href="#" class="btn btn-primary"><i class="inline-loading inline-loading-white"></i> 白色</a>
{% endexample %}

{% example html %}
<form class="relative" style="height: 200px;">
    <div class="loading-wrap">
        <i class="inline-loading inline-loading-white center"></i>
    </div>
</form>
{% endexample %}

{% example html %}
<form class="relative" style="height: 300px;">
    <div class="loading-wrap">
        <div class="loading-spinner-eye-dots">

        </div>
    </div>
</form>
{% endexample %}

{% example html %}
{% endexample %}

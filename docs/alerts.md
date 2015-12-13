---
layout: page
title: Alerts
---

Flash messages, or alerts, inform users of successful or pending actions. Use them sparingly. Don't show more than one at a time.

## Contents

* Will be replaced with the ToC, excluding the "Contents" header
{:toc}

## Default

Flash messages start off looking decently neutral—they're just light blue rounded rectangles.

{% example html %}
<div class="alert alert-success" role="alert">
  Well done! You successfully read this important alert message.
</div>
<div class="alert alert-info" role="alert">
  Heads up! This alert needs your attention, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  Warning! Better check yourself, you're not looking too good.
</div>
<div class="alert alert-danger" role="alert">
  Oh snap! Change a few things up and try submitting again.
</div>
<div class="alert alert-dark" role="alert">
  Night! this class is not ready.
</div>
{% endexample %}

## Dismissible alerts

Build on any alert by adding an optional `.alert-dismissible` and close button.

{% example html %}
<div class="alert alert-warning alert-dismissible" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</div>
{% endexample %}


{% example html %}
<div class="alert alert-success" role="alert">
  <strong>Well done!</strong> You successfully read <a href="#" class="alert-link">this important alert message</a>.
</div>
<div class="alert alert-info" role="alert">
  <strong>Heads up!</strong> This <a href="#" class="alert-link">alert needs your attention</a>, but it's not super important.
</div>
<div class="alert alert-warning" role="alert">
  <strong>Warning!</strong> Better check yourself, you're <a href="#" class="alert-link">not looking too good</a>.
</div>
<div class="alert alert-danger" role="alert">
  <strong>Oh snap!</strong> <a href="#" class="alert-link">Change a few things up</a> and try submitting again.
</div>
{% endexample %}

---
layout: page
title: Jquery UI
---

## Datepicker

[http://jqueryui.com/datepicker/](http://jqueryui.com/datepicker/)

### Default functionality

The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input's value.

{% example html %}
<input type="text" id="ui-datepicker" class="form-control">
<script>
$(function() { $( "#ui-datepicker" ).datepicker();});
</script>
{% endexample %}


### Display button bar

Display a button for selecting Today's date and a Done button for closing the calendar with the boolean showButtonPanel option. Each button is enabled by default when the bar is displayed, but can be turned off with additional options. Button text is customizable.

{% example html %}
<input type="text" id="ui-datepicker-button-bar" class="form-control">
<script>
  $(function() {
    $( "#ui-datepicker-button-bar" ).datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        showButtonPanel: true
      });
  });
</script>
{% endexample %}


### Display Month and year menu

Show month and year dropdowns in place of the static month/year header to facilitate navigation through large timeframes. Add the boolean changeMonth and changeYear options.

{% example html %}
<input type="text" id="ui-datepicker-selectMonth" class="form-control">
<script>
$(function() {
  $( "#ui-datepicker-selectMonth" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true
    });
});
</script>
{% endexample %}

### Select date range

{% example html %}
<input type="text" id="ui-datepicker-dateRange-from" class="form-control">
<input type="text" id="ui-datepicker-dateRange-to" class="form-control">
<script>
$(function() {
  $( "#ui-datepicker-dateRange-from" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#ui-datepicker-dateRange-to" ).datepicker( "option", "minDate", selectedDate );
      }
    });
    $( "#ui-datepicker-dateRange-to" ).datepicker({
      defaultDate: "+1w",
      changeMonth: true,
      numberOfMonths: 3,
      onClose: function( selectedDate ) {
        $( "#ui-datepicker-dateRange-from" ).datepicker( "option", "maxDate", selectedDate );
      }
    });
});
</script>
{% endexample %}



## Slider

### Default functionality

The basic slider is horizontal and has a single handle that can be moved with the mouse or by using the arrow keys.

{% example html %}
<div id="ui-slider"></div>
<script>
$(function() {
  $( "#ui-slider" ).slider();
});
</script>
{% endexample %}

### Range slider

Set the `range` option to true to capture a range of values with two drag handles. The space between the handles is filled with a different background color to indicate those values are selected.

{% example html %}
<div id="ui-slider-ranger"></div>
<script>
$(function() {
  $( "#ui-slider-ranger" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
</script>
{% endexample %}

### Range with fixed minimum

Fix the minimum value of the range slider so that the user can only select a maximum. Set the `range` option to "min."


{% example html %}
<div id="ui-slider-min"></div>
<script>
$(function() {
  $( "#ui-slider-min" ).slider({
    range: "min",
      value: 37,
      min: 1,
      max: 700,
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.value );
      }
  });
});
</script>
{% endexample %}


### Vertical range slider

Change the orientation of the range slider to vertical. Assign a height value via `.height()` or by setting the height through CSS, and set the orientation option to "vertical.

{% example html %}
<div id="ui-slider-vertical"></div>
<script>
$(function() {
  $( "#ui-slider-vertical" ).slider({
    orientation: "vertical",
      range: true,
      values: [ 17, 67 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
  });
});
</script>
{% endexample %}


## Auto Complete

[http://jqueryui.com/autocomplete/](http://jqueryui.com/autocomplete/)

### Default functionality

The Autocomplete widgets provides suggestions while you type into the field. Here the suggestions are tags for programming languages, give "ja" (for Java or JavaScript) a try.

{% example html %}
<label for="tags">Tags: </label>
<input id="tags" class="form-control">
<script>
$(function() {
  var availableTags = [
    "ActionScript",
    "AppleScript",
    "Asp",
    "BASIC",
    "C",
    "C++",
    "Clojure",
    "COBOL",
    "ColdFusion",
    "Erlang",
    "Fortran",
    "Groovy",
    "Haskell",
    "Java",
    "JavaScript",
    "Lisp",
    "Perl",
    "PHP",
    "Python",
    "Ruby",
    "Scala",
    "Scheme"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
});
</script>
{% endexample %}









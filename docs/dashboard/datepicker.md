---
layout: dashboard
title: Dashboard Datepicker
---

## Datepicker

[http://jqueryui.com/datepicker/](http://jqueryui.com/datepicker/)

### Default functionality

The datepicker is tied to a standard form input field. Focus on the input (click, or use the tab key) to open an interactive calendar in a small overlay. Choose a date, click elsewhere on the page (blur the input), or hit the Esc key to close. If a date is chosen, feedback is shown as the input's value.

<form class="cs-example">
<input type="text" id="ui-datepicker" class="form-control">
</form>

    <input type="text" id="ui-datepicker" class="form-control">

    <script>
    $(function() { $( "#ui-datepicker" ).datepicker();});
    </script>

<script>
  $(function() { $( "#ui-datepicker" ).datepicker();});
</script>

### Display button bar

Display a button for selecting Today's date and a Done button for closing the calendar with the boolean `showButtonPanel` option. Each button is enabled by default when the bar is displayed, but can be turned off with additional options. Button text is customizable.

<form class="cs-example">
  <input type="text" id="ui-datepicker-button-bar" class="form-control" >
</form>


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


<script>
$(function() { 
	$( "#ui-datepicker-button-bar" ).datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true
    });
});
</script>


### Display Month and year menu

Show month and year dropdowns in place of the static month/year header to facilitate navigation through large timeframes. Add the boolean `changeMonth` and `changeYear` options.

<form class="cs-example">
  <input type="text" id="ui-datepicker-selectMonth" class="form-control">
</form>

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

### Select date range

<form class="cs-example">
<input type="text" id="ui-datepicker-dateRange-from" class="form-control">
<input type="text" id="ui-datepicker-dateRange-to" class="form-control">
</form>

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

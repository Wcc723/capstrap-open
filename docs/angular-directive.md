---
layout: page
title: Angular directive
---

## Notice

**這功能還沒有開放**

This is a beta function. Please add `'ngCapstrap'` at your angular module.

<pre>
 angular.module('app', ['ngCapstrap']);
</pre>



## jqDatepicker

{% example html %}
<div ng-controller="jqCtrl">
  <input type="text"  class="form-control" jq-datepicker ng-model="date">
  <pre ng-bind="date"></pre>
</div>

<script>
angular.module('app')
.controller('jqCtrl', ['$scope',function($scope) {
  $scope.date = '2015-09-23';
}])
</script>
{% endexample %}

{% example html %}
<div ng-controller="jqCtrl">
  <input type="text"  class="form-control" ng-model="date">
  <pre ng-bind="date"></pre>
</div>
{% endexample %}



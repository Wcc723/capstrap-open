
angular.module('ngCapstrap', ['cs.jqDatepicker']);

angular.module('cs.jqDatepicker', [])
.directive('jqDatepicker', function() {
  return {
    restrict: 'A',
    require : 'ngModel',
    link : function (scope, element, attrs, ngModelCtrl) {
      $(function(){
        element.datepicker({
          dateFormat:'dd-mm-yy',
          onSelect:function (date) {
            ngModelCtrl.$setViewValue(date);
            scope.$apply();
          }
        });
      });
    }
  }
});


angular.module('controllers').controller('IndexCtrl', function($scope, $location, forecast, news) {
  'use strict';

  this.cities = ['Seattle', 'New York', 'London', 'Tokyo', 'Boston'];
  $scope.forecast = '...'
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
        $scope.$apply(function(){
          $scope.coords = position.coords;
          
          forecast($scope.coords.latitude, $scope.coords.longitude)
          .then(function(forecast) {
            $scope.forecast = forecast.data;
          });
        });
      });
    }
});

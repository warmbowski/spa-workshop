
angular.module('controllers').controller('CityCtrl', function($scope, $routeParams, $location, $http, GeoLocation) {
  'use strict';

  this.cityName = $routeParams.city;

  var self = this;
  GeoLocation(this.cityName).then(function(latLong) {
    // TODO: Call the forecast.io service to get current weather conditions
    self.latLong = latLong;
  }, function(err) {
    $location.path('/');
  });
});

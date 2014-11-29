
angular.module('controllers').controller('CityCtrl', function($scope, $routeParams, $location, $log, GeoLocation, Forecast) {
  'use strict';

  this.cityName = $routeParams.city;

  // Need to assign this to another variable in order to use it in nested contexts.
  var self = this;

  // Flatten the promise chain for better readability.
  // http://solutionoptimist.com/2013/12/27/javascript-promise-chains-2/
  GeoLocation(this.cityName)
    .then(function(latLong) {
      return Forecast(latLong[0], latLong[1]);
    })
    .then(function(forecast) {
      self.forecast = forecast.data;
    })
    .catch(function(err) {
      $log.error(err);
    });
});

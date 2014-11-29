
angular.module('services').factory('Forecast', function($q, $http, aerobatic) {
  return function(lat, lng) {
    // The forecast.io API is not CORS enabled, so we need to proxy the all through
    // the Aerobatic proxy.
    var apiUrl = '/proxy?url=' + encodeURIComponent('https://api.forecast.io/forecast/@@FORECAST_IO_API_KEY@@/' + lat + ',' + lng);

    // var deferred = $q.defer();
    return $http.get(apiUrl);
  };
});

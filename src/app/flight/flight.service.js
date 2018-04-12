angular.module('app').service('FlightService', FlightService);

/** @ngInject */
function FlightService($http) {
    return {
     getFlights() {
       return $http.get('https://flight-panel-api.herokuapp.com/flight');
    }
  };
}

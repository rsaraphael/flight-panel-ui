angular.module('flight-ui').service('FlightService', FlightService);

/** @ngInject */
function FlightService($http) {
    return {
     getFlights() {
       return $http.get('http://localhost:8080/flights');
    }
  };
}

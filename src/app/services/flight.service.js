angular.module('app').service('FlightService', FlightService);

/** @ngInject */
function FlightService($http) {
  return {
    getFlights() {
      return $http.get('http://localhost:8080/flight');
    },
    getFlightInfo(id) {
      return $http.get('http://localhost:8080/flight/' + id);
    },
    getFlightByParams(origin, destination, pilotName, aircraftModel) {
      const config = {
        params: {
          origin,
          destination,
          pilotName,
          aircraftModel
        }
      };
      return $http.get('http://localhost:8080/flight/search', config);
    }
  };
}

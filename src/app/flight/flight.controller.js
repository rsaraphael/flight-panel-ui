angular
  .module("app")
  .controller("FlightController", FlightController);

function FlightController(FlightService, $rootScope) {
  const vm = this;
  $rootScope.loadPromise = FlightService.getFlights();
  $rootScope.loadPromise.then(response => vm.flightNumbers = response.data);
}

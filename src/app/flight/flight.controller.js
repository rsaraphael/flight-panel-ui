angular
  .module("app")
  .controller("FlightController", FlightController);

function FlightController(FlightService) {
  const vm = this;
  FlightService.getFlights().then(response => vm.teste = response.data);
}

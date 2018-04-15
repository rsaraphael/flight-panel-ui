angular
  .module('app')
  .controller('FlightController', FlightController);

function FlightController(FlightService, $rootScope) {
  const vm = this;
  $rootScope.loadPromise = FlightService.getFlights();
  $rootScope.loadPromise.then(setFlightData);
  vm.enableAdvancedSearchFilter = show => {
    vm.showFilters = show;
  };

  vm.advancedSearch = () => {
    FlightService.getFlightByParams(vm.origin, vm.destination, vm.pilotName, vm.aircraftModel)
      .then(setFlightData);
  };

  function setFlightData(response) {
    vm.flightNumbers = response.data;
  }

  vm.enableAdvancedSearchFilter(false);
}


angular
    .module("app")
    .controller("FlightInfoController", FlightInfoController);

function FlightInfoController($stateParams, FlightService) {
    const vm = this;
    FlightService.getFlightInfo($stateParams.flightNumber)
        .then(setData);

    function setData(response) {
        vm.flightInfo = response.data;
        vm.itineraries = vm.flightInfo.itineraries;
    }
};
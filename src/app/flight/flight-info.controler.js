angular
    .module("app")
    .controller("FlightInfoController", FlightInfoController);

function FlightInfoController($stateParams, FlightService) {
    const vm = this;
    FlightService.getFlightInfo($stateParams.flightNumber)
        .then(setData);
    console.log(vm.flightInfo)

    function setData(response) {
        vm.flightInfo = response.data;
        vm.itineraries = vm.flightInfo.itineraries;
    }
};
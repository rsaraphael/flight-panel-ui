angular
    .module("flight-ui")
    .directive("flightItineraryPanel", flightItineraryDirective);


function flightItineraryDirective() {
    const directive = {
        templateUrl: 'app/flight/flight-itinerary.html',
        scope:{
            flight: '='
        },
        controller: flightItineraryController,
        controllerAs: 'vm',
        bindToController: true
    };

    return directive;
}

function flightItineraryController($scope) {
     const vm = this;
     console.log(vm.flight);
}
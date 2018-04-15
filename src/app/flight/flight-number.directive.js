angular
    .module('app')
    .directive('flightNumberPanel', flightNumberDirective);

function flightNumberDirective() {
  const directive = {
    templateUrl: 'app/flight/flight-number.html',
    scope: {
      flight: '='
    },
    controller: flightNumberController,
    controllerAs: 'vm',
    bindToController: true
  };
  return directive;
}

function flightNumberController() {
  const vm = this;
}

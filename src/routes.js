angular
  .module('flight-ui')
  .config(routesConfig);

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      template: '<app></app>'
    })
    .state('flight', {
      url: '/flight',
      templateUrl: 'app/flight/flight.html',
      controller: 'FlightController',
      controllerAs: 'flg'
    });
}

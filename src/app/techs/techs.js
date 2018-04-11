class TechsController {
  /** @ngInject */
  constructor($http) {
    $http
      .get('app/techs/techs.json')
      .then(response => {
        this.techs = response.data;
      });
  }
}

angular
  .module('flight-ui')
  .component('fountainTechs', {
    templateUrl: 'app/techs/techs.html',
    controller: TechsController
  });

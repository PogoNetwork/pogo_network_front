angular
  .module('team', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('core.team', {
        url: 'team',
      })
      .state('core.team.main', {
        url: '/',
        views: {
          'action@': {
            templateUrl: 'team.main.states.html',
          },
        },
      });
  });

angular
  .module('core', [
    'templates',
    'ui.router', 'ngAria',
    'user', 'menu', 'profile',
  ])
  .config(($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) => {
    $compileProvider.debugInfoEnabled('%activeCompiler%');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('map', {
        url: '/',
        views: {
          main: {
            templateUrl: 'core.map.states.html',
          },
          action: {

          }
        },
      });
  });

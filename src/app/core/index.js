angular
  .module('core', ['ui.router', 'ngAria'])
  .config(($stateProvider, $urlRouterProvider, $compileProvider, $httpProvider) => {
    $compileProvider.debugInfoEnabled('%activeCompiler%');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('map', {
        url: '/',
        templateUrl: 'core.map.states.html'
      });
  });

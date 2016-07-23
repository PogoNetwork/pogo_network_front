angular
  .module('user', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<hello-world></hello-world>',
      });
  })
  .run((account) => account.run());

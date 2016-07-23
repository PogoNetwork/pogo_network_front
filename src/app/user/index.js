angular
  .module('user', ['ui.router'])
  .config(($stateProvider) => {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<hello-world></hello-world>',
      })
      .state('follow', {
        url: 'user/:id',
        template: '',
      })
      .state('account', {
        abstract: true,
        url: '/account',
        template: '<hello-world></hello-world>',
      })
      .state('account.new', {
        url: '/new',
        template: '<hello-world></hello-world>',
      })
      .state('account.team', {
        url: '/team',
        template: '<hello-world></hello-world>',
      })
      .state('account.pseudo', {
        url: '/pseudo',
        template: '<hello-world></hello-world>',
      })
      .state('account.qrcode', {
        url: '/qrcode',
        template: '<hello-world></hello-world>',
      });
  })
  .run((account) => account.run());

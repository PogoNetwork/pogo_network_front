angular
  .module('profile', [])
  .config(($stateProvider) => {
    $stateProvider
      .state('core.profile', {
        url: 'profile',
      })
      .state('core.profile.main', {
        url: '/',
        views: {
          'action@': {
            templateUrl: 'profile.main.states.html',
          },
        },
      })
      .state('core.profile.qrcode', {
        url: '/qrcode',
        views: {
          'action@': {
            templateUrl: 'profile.qrcode.states.html',
          },
        },
      });
  });

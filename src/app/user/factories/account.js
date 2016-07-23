angular.module('user')
  .factory('account', ($state, $rootScope) => {
    const isLogged = () => true;

    function onStateChange() {
      if (!isLogged()) {
        console.error('Not logged in BOB');
        $state.go('login');
      }
    }

    return {
      run() {
        $rootScope.$on('$stateChangeSuccess', onStateChange);
      },
    };
  });

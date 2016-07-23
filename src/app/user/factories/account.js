angular.module('user')
  .factory('account', ($state, $rootScope) => {
    const isLogged = () => false;

    function onStateChange() {
      if (!isLogged()) {
        $state.go('login');
      }
    }


    return {
      run() {
        $rootScope.$on('$stateChangeSuccess', onStateChange);
      },
    };
  });

angular.module('core')
  .directive('btnClose', ($state) => ({
    replace: true,
    templateUrl: 'core.btnClose.index.html',
    link(scope, el) {
      const onClick = () => $state.go('core.map');
      el.on('click', onClick);
      scope
        .$on('$digest', () => {
          el.off('click', onClick);
        });
    },
  }));

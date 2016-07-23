angular.module('menu')
  .directive('menu', (menuModel, actions) => {
    const RADIO = actions('menu');
    menuModel.init();

    return {
      replace: true,
      templateUrl: 'menu.menu.index.html',
      link(scope, el) {
        const $btn = el.find('button');

        const onClick = () => RADIO.dispatchInput({ type: 'locate' });
        $btn.on('click', onClick);

        scope
          .$on('$destroy', () => {
            $btn.off('click', onClick);
          });
      },
    };
  });

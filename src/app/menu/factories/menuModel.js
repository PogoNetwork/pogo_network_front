angular.module('menu')
  .factory('menuModel', (actions) => {
    const RADIO = actions('menu');

    RADIO
      .subscribeInput(({ type }) => {
        console.log(type);
      });

    const init = angular.noop;

    return { init };
  });

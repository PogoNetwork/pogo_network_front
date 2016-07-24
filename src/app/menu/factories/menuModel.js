angular.module('menu')
  .factory('menuModel', (actions, mapModel) => {
    const RADIO = actions('menu');

    RADIO
      .subscribeInput(({ type }) => {
        mapModel.addMarker(45, 5);
      });

    const init = angular.noop;

    return { init };
  });

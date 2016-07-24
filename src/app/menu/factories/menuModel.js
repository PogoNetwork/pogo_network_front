angular.module('menu')
  .factory('menuModel', (actions, profileApi) => {
    const RADIO = actions('menu');

    profileApi
      .getQrCode('google.fr')
      .then((data) => {
        console.log(data);
      })
      .catch((data) => {
        console.log(data);
      });


    RADIO
      .subscribeInput(({ type }) => {
        console.log(type);
      });

    const init = angular.noop;

    return { init };
  });
